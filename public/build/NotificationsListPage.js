"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NotificationsListPage"],{

/***/ "./public/app/core/hooks/useCleanup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCleanup": () => (/* binding */ useCleanup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");



function useCleanup(stateSelector) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); //bit of a hack to unburden user from having to wrap stateSelcetor in a useCallback. Otherwise cleanup would happen on every render

  const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateSelector);
  selectorRef.current = stateSelector;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__.cleanUpAction)({
        stateSelector: selectorRef.current
      }));
    };
  }, [dispatch]);
}

/***/ }),

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavModel": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/alerting/NotificationsListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _strong, _Button, _EmptyListCTA;














const NotificationsListPage = () => {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_5__.useNavModel)('channels');
  const [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const getNotifications = async () => {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get(`/api/alert-notifications`);
  };

  const [state, fetchNotifications] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(getNotifications);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchNotifications().then(res => {
      setNotifications(res);
    });
  }, [fetchNotifications]);

  const deleteNotification = id => {
    app_core_core__WEBPACK_IMPORTED_MODULE_4__.appEvents.publish(new _types_events__WEBPACK_IMPORTED_MODULE_7__.ShowConfirmModalEvent({
      title: 'Delete',
      text: 'Do you want to delete this notification channel?',
      text2: `Deleting this notification channel will not delete from alerts any references to it`,
      icon: 'trash-alt',
      confirmText: 'Delete',
      yesText: 'Delete',
      onConfirm: async () => {
        deleteNotificationConfirmed(id);
      }
    }));
  };

  const deleteNotificationConfirmed = async id => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete(`/api/alert-notifications/${id}`);
    const notifications = await fetchNotifications();
    setNotifications(notifications);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: [state.error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        children: state.error
      }), !!notifications.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "page-action-bar__spacer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, {
            icon: "channel-add",
            href: "alerting/notification/new",
            children: "New channel"
          })]
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
          className: "filter-table filter-table--hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  minWidth: '200px'
                },
                children: _strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
                  children: "Name"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  minWidth: '100px'
                },
                children: "Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
            children: notifications.map(notification => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "link-td",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                  href: `alerting/notification/${notification.id}/edit`,
                  children: notification.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "link-td",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                  href: `alerting/notification/${notification.id}/edit`,
                  children: notification.type
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "text-right",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.HorizontalGroup, {
                  justify: "flex-end",
                  children: [notification.isDefault && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
                    disabled: true,
                    variant: "secondary",
                    size: "sm",
                    children: "default"
                  }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
                    variant: "destructive",
                    icon: "times",
                    size: "sm",
                    onClick: () => {
                      deleteNotification(notification.id);
                    }
                  })]
                })
              })]
            }, notification.id))
          })]
        })]
      }), !(notifications.length || state.loading) && (_EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "There are no notification channels defined yet",
        buttonIcon: "channel-add",
        buttonLink: "alerting/notification/new",
        buttonTitle: "Add channel",
        proTip: "You can include images in your alert notifications.",
        proTipLink: "http://docs.grafana.org/alerting/notifications/",
        proTipLinkTitle: "Learn more",
        proTipTarget: "_blank"
      })))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationsListPage);

/***/ }),

/***/ "./public/app/features/alerting/unified/Receivers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _components_receivers_EditReceiverView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/EditReceiverView.tsx");
/* harmony import */ var _components_receivers_EditTemplateView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/EditTemplateView.tsx");
/* harmony import */ var _components_receivers_GlobalConfigForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/GlobalConfigForm.tsx");
/* harmony import */ var _components_receivers_NewReceiverView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/NewReceiverView.tsx");
/* harmony import */ var _components_receivers_NewTemplateView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/NewTemplateView.tsx");
/* harmony import */ var _components_receivers_ReceiversAndTemplatesView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversAndTemplatesView.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Redirect, _LoadingPlaceholder;





















const Receivers = () => {
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_11__.useAlertManagerSourceName)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useLocation)();
  const isRoot = location.pathname.endsWith('/alerting/notifications');
  const configRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_12__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const {
    result: config,
    loading,
    error
  } = alertManagerSourceName && configRequests[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_15__.initialAsyncRequestState;
  const receiverTypes = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_12__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers);
  const shouldLoadConfig = isRoot || !config;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (alertManagerSourceName && shouldLoadConfig) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_13__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch, shouldLoadConfig]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_14__.GRAFANA_RULES_SOURCE_NAME && !(receiverTypes.result || receiverTypes.loading || receiverTypes.error)) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_13__.fetchGrafanaNotifiersAction)());
    }
  }, [alertManagerSourceName, dispatch, receiverTypes]);
  const disableAmSelect = !isRoot;

  if (!alertManagerSourceName) {
    return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Redirect, {
      to: "/alerting/notifications"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_3__.AlertingPageWrapper, {
    pageId: "receivers",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_4__.AlertManagerPicker, {
      current: alertManagerSourceName,
      disabled: disableAmSelect,
      onChange: setAlertManagerSourceName
    }), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager config",
      children: error.message || 'Unknown error.'
    }), loading && !config && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.LoadingPlaceholder, {
      text: "loading configuration..."
    }))), config && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        exact: true,
        path: "/alerting/notifications",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_receivers_ReceiversAndTemplatesView__WEBPACK_IMPORTED_MODULE_10__.ReceiversAndTemplatesView, {
          config: config,
          alertManagerName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        exact: true,
        path: "/alerting/notifications/templates/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_receivers_NewTemplateView__WEBPACK_IMPORTED_MODULE_9__.NewTemplateView, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        exact: true,
        path: "/alerting/notifications/templates/:name/edit",
        children: ({
          match
        }) => (match === null || match === void 0 ? void 0 : match.params.name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_receivers_EditTemplateView__WEBPACK_IMPORTED_MODULE_6__.EditTemplateView, {
          alertManagerSourceName: alertManagerSourceName,
          config: config,
          templateName: decodeURIComponent(match === null || match === void 0 ? void 0 : match.params.name)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        exact: true,
        path: "/alerting/notifications/receivers/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_receivers_NewReceiverView__WEBPACK_IMPORTED_MODULE_8__.NewReceiverView, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        exact: true,
        path: "/alerting/notifications/receivers/:name/edit",
        children: ({
          match
        }) => (match === null || match === void 0 ? void 0 : match.params.name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_receivers_EditReceiverView__WEBPACK_IMPORTED_MODULE_5__.EditReceiverView, {
          alertManagerSourceName: alertManagerSourceName,
          config: config,
          receiverName: decodeURIComponent(match === null || match === void 0 ? void 0 : match.params.name)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        exact: true,
        path: "/alerting/notifications/global-config",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_receivers_GlobalConfigForm__WEBPACK_IMPORTED_MODULE_7__.GlobalConfigForm, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.withErrorBoundary)(Receivers, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingPageWrapper": () => (/* binding */ AlertingPageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = ({
  children,
  pageId,
  isLoading
}) => {
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__.getNavModel)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.navIndex), pageId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Authorize.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authorize": () => (/* binding */ Authorize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = ({
  actions,
  children,
  fallback = true
}) => {
  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__.contextSrv.hasAccess(action, fallback))) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/EditReceiverView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditReceiverView": () => (/* binding */ EditReceiverView)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx");
/* harmony import */ var _form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InfoBox;







const EditReceiverView = ({
  config,
  receiverName,
  alertManagerSourceName
}) => {
  var _config$alertmanager_;

  const receiver = (_config$alertmanager_ = config.alertmanager_config.receivers) === null || _config$alertmanager_ === void 0 ? void 0 : _config$alertmanager_.find(({
    name
  }) => name === receiverName);

  if (!receiver) {
    return _InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.InfoBox, {
      severity: "error",
      title: "Receiver not found",
      children: "Sorry, this receiver does not seem to exit."
    }));
  }

  if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_4__.GrafanaReceiverForm, {
      config: config,
      alertManagerSourceName: alertManagerSourceName,
      existing: receiver
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_3__.CloudReceiverForm, {
      config: config,
      alertManagerSourceName: alertManagerSourceName,
      existing: receiver
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/EditTemplateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTemplateView": () => (/* binding */ EditTemplateView)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _TemplateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InfoBox;





const EditTemplateView = ({
  config,
  templateName,
  alertManagerSourceName
}) => {
  var _config$template_file;

  const template = (_config$template_file = config.template_files) === null || _config$template_file === void 0 ? void 0 : _config$template_file[templateName];

  if (!template) {
    return _InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.InfoBox, {
      severity: "error",
      title: "Template not found",
      children: "Sorry, this template does not seem to exit."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TemplateForm__WEBPACK_IMPORTED_MODULE_2__.TemplateForm, {
    alertManagerSourceName: alertManagerSourceName,
    config: config,
    existing: {
      name: templateName,
      content: template
    }
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/GlobalConfigForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConfigForm": () => (/* binding */ GlobalConfigForm)
/* harmony export */ });
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts");
/* harmony import */ var _form_fields_OptionField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _Button2;

















const defaultValues = {
  smtp_require_tls: true
};
const GlobalConfigForm = ({
  config,
  alertManagerSourceName
}) => {
  var _config$alertmanager_;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_0__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading,
    error
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__.useUnifiedAlertingSelector)(state => state.saveAMConfig);
  const readOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_12__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    // making a copy here beacuse react-hook-form will mutate these, and break if the object is frozen. for real.
    defaultValues: JSON.parse(JSON.stringify(Object.assign({}, defaultValues, (_config$alertmanager_ = config.alertmanager_config.global) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : {})))
  });
  const {
    handleSubmit,
    formState: {
      errors
    }
  } = formAPI;

  const onSubmitCallback = values => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.updateAlertManagerConfigAction)({
      newConfig: Object.assign({}, config, {
        alertmanager_config: Object.assign({}, config.alertmanager_config, {
          global: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_10__.omitEmptyValues)(values)
        })
      }),
      oldConfig: config,
      alertManagerSourceName,
      successMessage: 'Global config updated.',
      redirectPath: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)('/alerting/notifications', alertManagerSourceName)
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, Object.assign({}, formAPI, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmitCallback),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h4", {
        className: styles.heading,
        children: "Global config"
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, {
        severity: "error",
        title: "Error saving receiver",
        children: error.message || String(error)
      }), _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__.globalConfigOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_form_fields_OptionField__WEBPACK_IMPORTED_MODULE_5__.OptionField, {
        readOnly: readOnly,
        defaultValue: defaultValues[option.propertyName],
        option: option,
        error: errors[option.propertyName],
        pathPrefix: ''
      }, option.propertyName)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.HorizontalGroup, {
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
            children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
              disabled: true,
              icon: "fa fa-spinner",
              variant: "primary",
              children: "Saving..."
            }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
              type: "submit",
              children: "Save global config"
            })))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, {
            disabled: loading,
            fill: "outline",
            variant: "secondary",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)('alerting/notifications', alertManagerSourceName),
            children: "Cancel"
          })]
        })
      })]
    })
  }));
};

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_11__.css`
    margin: ${theme.spacing(4, 0)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/NewReceiverView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewReceiverView": () => (/* binding */ NewReceiverView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx");
/* harmony import */ var _form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const NewReceiverView = ({
  alertManagerSourceName,
  config
}) => {
  if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__.GRAFANA_RULES_SOURCE_NAME) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_3__.GrafanaReceiverForm, {
      alertManagerSourceName: alertManagerSourceName,
      config: config
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_2__.CloudReceiverForm, {
      alertManagerSourceName: alertManagerSourceName,
      config: config
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/NewTemplateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTemplateView": () => (/* binding */ NewTemplateView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _TemplateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const NewTemplateView = ({
  config,
  alertManagerSourceName
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TemplateForm__WEBPACK_IMPORTED_MODULE_1__.TemplateForm, {
    config: config,
    alertManagerSourceName: alertManagerSourceName
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversAndTemplatesView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversAndTemplatesView": () => (/* binding */ ReceiversAndTemplatesView)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _ReceiversTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversTable.tsx");
/* harmony import */ var _TemplatesTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;













const ReceiversAndTemplatesView = ({
  config,
  alertManagerName
}) => {
  const isCloud = alertManagerName !== _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.isVanillaPrometheusAlertManagerDataSource)(alertManagerName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [!isVanillaAM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TemplatesTable__WEBPACK_IMPORTED_MODULE_8__.TemplatesTable, {
      config: config,
      alertManagerName: alertManagerName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ReceiversTable__WEBPACK_IMPORTED_MODULE_7__.ReceiversTable, {
      config: config,
      alertManagerName: alertManagerName
    }), isCloud && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_6__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_2__.AccessControlAction.AlertingNotificationsExternalWrite],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
        className: styles.section,
        severity: "info",
        title: "Global config for contact points",
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          children: "For each external Alertmanager you can define global settings, like server addresses, usernames and password, for all the supported contact points."
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.makeAMLink)('alerting/notifications/global-config', alertManagerName),
          variant: "secondary",
          children: isVanillaAM ? 'View global config' : 'Edit global config'
        })]
      })
    })]
  });
};

const getStyles = theme => ({
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(4)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversSection": () => (/* binding */ ReceiversSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const ReceiversSection = ({
  className,
  title,
  description,
  addButtonLabel,
  addButtonTo,
  children,
  showButton = true
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.heading, className),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: styles.description,
          children: description
        })]
      }), showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: addButtonTo,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          icon: "plus",
          children: addButtonLabel
        })
      })]
    }), children]
  });
};

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversTable": () => (/* binding */ ReceiversTable)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _utils_receivers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/receivers.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _ReceiversSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _col, _col2, _col3, _th, _th2, _th3, _td, _p;




















const ReceiversTable = ({
  config,
  alertManagerName
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_3__.getAlertTableStyles);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useStyles2)(getStyles);
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_12__.isVanillaPrometheusAlertManagerDataSource)(alertManagerName);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_15__.getNotificationsPermissions)(alertManagerName);
  const grafanaNotifiers = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers); // receiver name slated for deletion. If this is set, a confirmation modal is shown. If user approves, this receiver is deleted

  const [receiverToDelete, setReceiverToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [showCannotDeleteReceiverModal, setShowCannotDeleteReceiverModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onClickDeleteReceiver = receiverName => {
    if ((0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.isReceiverUsed)(receiverName, config)) {
      setShowCannotDeleteReceiverModal(true);
    } else {
      setReceiverToDelete(receiverName);
    }
  };

  const deleteReceiver = () => {
    if (receiverToDelete) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.deleteReceiverAction)(receiverToDelete, alertManagerName));
    }

    setReceiverToDelete(undefined);
  };

  const rows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(receiver => {
      var _grafanaNotifiers$res;

      return {
        name: receiver.name,
        types: Object.entries((0,_utils_receivers__WEBPACK_IMPORTED_MODULE_4__.extractNotifierTypeCounts)(receiver, (_grafanaNotifiers$res = grafanaNotifiers.result) !== null && _grafanaNotifiers$res !== void 0 ? _grafanaNotifiers$res : [])).map(([type, count]) => {
          if (count > 1) {
            return `${type} (${count})`;
          }

          return type;
        })
      };
    })) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, grafanaNotifiers.result]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_ReceiversSection__WEBPACK_IMPORTED_MODULE_6__.ReceiversSection, {
    className: styles.section,
    title: "Contact points",
    description: "Define where the notifications will be sent to, for example email or Slack.",
    showButton: !isVanillaAM && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_14__.contextSrv.hasPermission(permissions.create),
    addButtonLabel: "New contact point",
    addButtonTo: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)('/alerting/notifications/receivers/new', alertManagerName),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("table", {
      className: tableStyles.table,
      "data-testid": "receivers-table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("colgroup", {
        children: [_col || (_col = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("col", {})), _col2 || (_col2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("col", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, {
          actions: [permissions.update, permissions.delete],
          children: _col3 || (_col3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("col", {}))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("th", {
            children: "Contact point name"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("th", {
            children: "Type"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("th", {
              children: "Actions"
            }))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("tbody", {
        children: [!rows.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("tr", {
          className: tableStyles.evenRow,
          children: _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("td", {
            colSpan: 3,
            children: "No receivers defined."
          }))
        }), rows.map((receiver, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("tr", {
          className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("td", {
            children: receiver.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("td", {
            children: receiver.types.join(', ')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("td", {
              className: tableStyles.actionsCell,
              children: [!isVanillaAM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, {
                  actions: [permissions.update],
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_5__.ActionIcon, {
                    "aria-label": "Edit",
                    "data-testid": "edit",
                    to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)(`/alerting/notifications/receivers/${encodeURIComponent(receiver.name)}/edit`, alertManagerName),
                    tooltip: "Edit contact point",
                    icon: "pen"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, {
                  actions: [permissions.delete],
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_5__.ActionIcon, {
                    onClick: () => onClickDeleteReceiver(receiver.name),
                    tooltip: "Delete contact point",
                    icon: "trash-alt"
                  })
                })]
              }), isVanillaAM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, {
                actions: [permissions.update],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_5__.ActionIcon, {
                  "data-testid": "view",
                  to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)(`/alerting/notifications/receivers/${encodeURIComponent(receiver.name)}/edit`, alertManagerName),
                  tooltip: "View contact point",
                  icon: "file-alt"
                })
              })]
            })
          })]
        }, receiver.name))]
      })]
    }), !!showCannotDeleteReceiverModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Modal, {
      isOpen: true,
      title: "Cannot delete contact point",
      onDismiss: () => setShowCannotDeleteReceiverModal(false),
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
        children: "Contact point cannot be deleted because it is used in more policies. Please update or delete these policies first."
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Modal.ButtonRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "secondary",
          onClick: () => setShowCannotDeleteReceiverModal(false),
          fill: "outline",
          children: "Close"
        })
      })]
    }), !!receiverToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.ConfirmModal, {
      isOpen: true,
      title: "Delete contact point",
      body: `Are you sure you want to delete contact point "${receiverToDelete}"?`,
      confirmText: "Yes, delete",
      onConfirm: deleteReceiver,
      onDismiss: () => setReceiverToDelete(undefined)
    })]
  });
};

const getStyles = theme => ({
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_8__.css`
    margin-top: ${theme.spacing(4)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateForm": () => (/* binding */ TemplateForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/templates.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _Button2;














const defaults = Object.freeze({
  name: '',
  content: ''
});
const TemplateForm = ({
  existing,
  alertManagerSourceName,
  config
}) => {
  var _data, _errors$name, _errors$name2, _errors$content, _errors$content2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_2__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading,
    error
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.saveAMConfig);

  const submit = values => {
    var _config$alertmanager_;

    // wrap content in "define" if it's not already wrapped, in case user did not do it/
    // it's not obvious that this is needed for template to work
    const content = (0,_utils_templates__WEBPACK_IMPORTED_MODULE_9__.ensureDefine)(values.name, values.content); // add new template to template map

    const template_files = Object.assign({}, config.template_files, {
      [values.name]: content
    }); // delete existing one (if name changed, otherwise it was overwritten in previous step)

    if (existing && existing.name !== values.name) {
      delete template_files[existing.name];
    } // make sure name for the template is configured on the alertmanager config object


    const templates = [...((_config$alertmanager_ = config.alertmanager_config.templates) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : []).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name)), values.name];
    const newConfig = {
      template_files,
      alertmanager_config: Object.assign({}, config.alertmanager_config, {
        templates
      })
    };
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.updateAlertManagerConfigAction)({
      alertManagerSourceName,
      newConfig,
      oldConfig: config,
      successMessage: 'Template saved.',
      redirectPath: '/alerting/notifications'
    }));
  };

  const {
    handleSubmit,
    register,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    mode: 'onSubmit',
    defaultValues: existing !== null && existing !== void 0 ? existing : defaults
  });

  const validateNameIsUnique = name => {
    return !config.template_files[name] || (existing === null || existing === void 0 ? void 0 : existing.name) === name ? true : 'Another template with this name already exists.';
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
    onSubmit: handleSubmit(submit),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h4", {
      children: existing ? 'Edit message template' : 'Create message template'
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "error",
      title: "Error saving template",
      children: error.message || (error === null || error === void 0 ? void 0 : (_data = error.data) === null || _data === void 0 ? void 0 : _data.message) || String(error)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Template name",
      error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
      invalid: !!((_errors$name2 = errors.name) !== null && _errors$name2 !== void 0 && _errors$name2.message),
      required: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('name', {
        required: {
          value: true,
          message: 'Required.'
        },
        validate: {
          nameIsUnique: validateNameIsUnique
        }
      }), {
        placeholder: "Give your template a name",
        width: 42,
        autoFocus: true
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      description: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: ["You can use the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
          href: "https://pkg.go.dev/text/template?utm_source=godoc",
          target: "__blank",
          rel: "noreferrer",
          className: styles.externalLink,
          children: "Go templating language"
        }), ".", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
          href: "https://prometheus.io/blog/2016/03/03/custom-alertmanager-templates/",
          target: "__blank",
          rel: "noreferrer",
          className: styles.externalLink,
          children: "More info about alertmanager templates"
        })]
      }),
      label: "Content",
      error: errors === null || errors === void 0 ? void 0 : (_errors$content = errors.content) === null || _errors$content === void 0 ? void 0 : _errors$content.message,
      invalid: !!((_errors$content2 = errors.content) !== null && _errors$content2 !== void 0 && _errors$content2.message),
      required: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, Object.assign({}, register('content', {
        required: {
          value: true,
          message: 'Required.'
        }
      }), {
        className: styles.textarea,
        placeholder: "Message",
        rows: 12
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.buttons,
      children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        disabled: true,
        icon: "fa fa-spinner",
        variant: "primary",
        children: "Saving..."
      }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "primary",
        children: "Save template"
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        disabled: loading,
        href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)('alerting/notifications', alertManagerSourceName),
        variant: "secondary",
        type: "button",
        fill: "outline",
        children: "Cancel"
      })]
    })]
  });
};

const getStyles = theme => ({
  externalLink: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    text-decoration: underline;
  `,
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  textarea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 758px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesTable": () => (/* binding */ TemplatesTable)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _ReceiversSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _col, _col2, _th, _th2, _th3, _td, _td2;
















const TemplatesTable = ({
  config,
  alertManagerName
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const [expandedTemplates, setExpandedTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_2__.getAlertTableStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_12__.getNotificationsPermissions)(alertManagerName);
  const templateRows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => Object.entries(config.template_files), [config]);
  const [templateToDelete, setTemplateToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const deleteTemplate = () => {
    if (templateToDelete) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.deleteTemplateAction)(templateToDelete, alertManagerName));
    }

    setTemplateToDelete(undefined);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_ReceiversSection__WEBPACK_IMPORTED_MODULE_6__.ReceiversSection, {
    title: "Message templates",
    description: "Templates construct the messages that get sent to the contact points.",
    addButtonLabel: "New template",
    addButtonTo: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)('/alerting/notifications/templates/new', alertManagerName),
    showButton: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermission(permissions.create),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("table", {
      className: tableStyles.table,
      "data-testid": "templates-table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("col", {
          className: tableStyles.colExpand
        }), _col || (_col = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("col", {})), _col2 || (_col2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("col", {}))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
            children: "Template"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
              children: "Actions"
            }))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tbody", {
        children: [!templateRows.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("tr", {
          className: tableStyles.evenRow,
          children: _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {
            colSpan: 3,
            children: "No templates defined."
          }))
        }), templateRows.map(([name, content], idx) => {
          const isExpanded = !!expandedTemplates[name];
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tr", {
              className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_3__.CollapseToggle, {
                  isCollapsed: !expandedTemplates[name],
                  onToggle: () => setExpandedTemplates(Object.assign({}, expandedTemplates, {
                    [name]: !isExpanded
                  }))
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {
                children: name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, {
                actions: [permissions.update, permissions.delete],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("td", {
                  className: tableStyles.actionsCell,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, {
                    actions: [permissions.update],
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_5__.ActionIcon, {
                      to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)(`/alerting/notifications/templates/${encodeURIComponent(name)}/edit`, alertManagerName),
                      tooltip: "edit template",
                      icon: "pen"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, {
                    actions: [permissions.delete],
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_5__.ActionIcon, {
                      onClick: () => setTemplateToDelete(name),
                      tooltip: "delete template",
                      icon: "trash-alt"
                    })
                  })]
                })
              })]
            }, name), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tr", {
              className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
              children: [_td2 || (_td2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {
                colSpan: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_4__.DetailsField, {
                  label: "Description",
                  horizontal: true,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("pre", {
                    children: content
                  })
                })
              })]
            })]
          }, name);
        })]
      })]
    }), !!templateToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.ConfirmModal, {
      isOpen: true,
      title: "Delete template",
      body: `Are you sure you want to delete template "${templateToDelete}"?`,
      confirmText: "Yes, delete",
      onConfirm: deleteTemplate,
      onDismiss: () => setTemplateToDelete(undefined)
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ChannelOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelOptions": () => (/* binding */ ChannelOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _fields_OptionField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function ChannelOptions({
  defaultValues,
  selectedChannelOptions,
  onResetSecureField,
  secureFields,
  errors,
  pathPrefix = '',
  readOnly = false
}) {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const currentFormValues = watch(); // react hook form types ARE LYING!

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: selectedChannelOptions.map((option, index) => {
      var _ref, _defaultValues$settin;

      const key = `${option.label}-${index}`; // Some options can be dependent on other options, this determines what is selected in the dependency options
      // I think this needs more thought.

      const selectedOptionValue = currentFormValues[`${pathPrefix}settings.${option.showWhen.field}`];

      if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
        return null;
      }

      if (secureFields && secureFields[option.propertyName]) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: option.label,
          description: option.description || undefined,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            readOnly: true,
            value: "Configured",
            suffix: readOnly ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              onClick: () => onResetSecureField(option.propertyName),
              fill: "text",
              type: "button",
              size: "sm",
              children: "Clear"
            })
          })
        }, key);
      }

      const error = (_ref = option.secure ? errors === null || errors === void 0 ? void 0 : errors.secureSettings : errors === null || errors === void 0 ? void 0 : errors.settings) === null || _ref === void 0 ? void 0 : _ref[option.propertyName];
      const defaultValue = defaultValues === null || defaultValues === void 0 ? void 0 : (_defaultValues$settin = defaultValues.settings) === null || _defaultValues$settin === void 0 ? void 0 : _defaultValues$settin[option.propertyName];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fields_OptionField__WEBPACK_IMPORTED_MODULE_2__.OptionField, {
        defaultValue: defaultValue,
        readOnly: readOnly,
        error: error,
        pathPrefix: pathPrefix,
        pathSuffix: option.secure ? 'secureSettings.' : 'settings.',
        option: option
      }, key);
    })
  });
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ChannelSubForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelSubForm": () => (/* binding */ ChannelSubForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _ChannelOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ChannelOptions.tsx");
/* harmony import */ var _CollapsibleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref", "onChange"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function ChannelSubForm({
  defaultValues,
  pathPrefix,
  onDuplicate,
  onDelete,
  onTest,
  notifiers,
  errors,
  secureFields,
  commonSettingsComponent: CommonSettingsComponent,
  readOnly = false
}) {
  var _watch;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const name = fieldName => `${pathPrefix}${fieldName}`;

  const {
    control,
    watch,
    register,
    trigger,
    formState,
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const selectedType = (_watch = watch(name('type'))) !== null && _watch !== void 0 ? _watch : defaultValues.type; // nope, setting "default" does not work at all.

  const {
    loading: testingReceiver
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.testReceivers);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    register(`${pathPrefix}.__id`);
    /* Need to manually register secureFields or else they'll
     be lost when testing a contact point */

    register(`${pathPrefix}.secureFields`);
  }, [register, pathPrefix]);
  const [_secureFields, setSecureFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(secureFields !== null && secureFields !== void 0 ? secureFields : {});

  const onResetSecureField = key => {
    if (_secureFields[key]) {
      const updatedSecureFields = Object.assign({}, secureFields);
      delete updatedSecureFields[key];
      setSecureFields(updatedSecureFields);
      setValue(`${pathPrefix}.secureFields`, updatedSecureFields);
    }
  };

  const typeOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => notifiers.map(({
    name,
    type
  }) => ({
    label: name,
    value: type
  })).sort((a, b) => a.label.localeCompare(b.label)), [notifiers]);

  const handleTest = async () => {
    await trigger();
    const isValid = Object.keys(formState.errors).length === 0;

    if (isValid && onTest) {
      onTest();
    }
  };

  const notifier = notifiers.find(({
    type
  }) => type === selectedType); // if there are mandatory options defined, optional options will be hidden by a collapse
  // if there aren't mandatory options, all options will be shown without collapse

  const mandatoryOptions = notifier === null || notifier === void 0 ? void 0 : notifier.options.filter(o => o.required);
  const optionalOptions = notifier === null || notifier === void 0 ? void 0 : notifier.options.filter(o => !o.required);
  const contactPointTypeInputId = `contact-point-type-${pathPrefix}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": "item-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.topRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Contact point type",
          htmlFor: contactPointTypeInputId,
          "data-testid": `${pathPrefix}type`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            name: name('type'),
            defaultValue: defaultValues.type,
            render: _ref => {
              let {
                field: {
                  onChange
                }
              } = _ref,
                  field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                disabled: readOnly,
                inputId: contactPointTypeInputId,
                menuShouldPortal: true
              }, field, {
                width: 37,
                options: typeOptions,
                onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
              }));
            },
            control: control,
            rules: {
              required: true
            }
          })
        })
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.buttons,
        children: [onTest && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          disabled: testingReceiver,
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => handleTest(),
          icon: testingReceiver ? 'fa fa-spinner' : 'message',
          children: "Test"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => onDuplicate(),
          icon: "copy",
          children: "Duplicate"
        }), onDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          "data-testid": `${pathPrefix}delete-button`,
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => onDelete(),
          icon: "trash-alt",
          children: "Delete"
        })]
      })]
    }), notifier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.innerContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelOptions__WEBPACK_IMPORTED_MODULE_4__.ChannelOptions, {
        defaultValues: defaultValues,
        selectedChannelOptions: mandatoryOptions !== null && mandatoryOptions !== void 0 && mandatoryOptions.length ? mandatoryOptions : optionalOptions,
        secureFields: _secureFields,
        errors: errors,
        onResetSecureField: onResetSecureField,
        pathPrefix: pathPrefix,
        readOnly: readOnly
      }), !!(mandatoryOptions !== null && mandatoryOptions !== void 0 && mandatoryOptions.length && optionalOptions !== null && optionalOptions !== void 0 && optionalOptions.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_5__.CollapsibleSection, {
        label: `Optional ${notifier.name} settings`,
        children: [notifier.info !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
          title: "",
          severity: "info",
          children: notifier.info
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelOptions__WEBPACK_IMPORTED_MODULE_4__.ChannelOptions, {
          defaultValues: defaultValues,
          selectedChannelOptions: optionalOptions,
          secureFields: _secureFields,
          onResetSecureField: onResetSecureField,
          errors: errors,
          pathPrefix: pathPrefix,
          readOnly: readOnly
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_5__.CollapsibleSection, {
        label: "Notification settings",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(CommonSettingsComponent, {
          pathPrefix: pathPrefix,
          readOnly: readOnly
        })
      })]
    })]
  });
}

const getStyles = theme => ({
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  innerContent: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    max-width: 536px;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin: ${theme.spacing(2, 0)};
    padding: ${theme.spacing(1)};
    border: solid 1px ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
    max-width: ${theme.breakpoints.values.xl}${theme.breakpoints.unit};
  `,
  topRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  channelSettingsHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-top: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CloudCommonChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudCommonChannelSettings": () => (/* binding */ CloudCommonChannelSettings)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const CloudCommonChannelSettings = ({
  pathPrefix,
  className,
  readOnly = false
}) => {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Field, {
      disabled: readOnly,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Checkbox, Object.assign({}, register(`${pathPrefix}sendResolved`), {
        label: "Send resolved",
        disabled: readOnly,
        description: "Whether or not to notify about resolved alerts."
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudReceiverForm": () => (/* binding */ CloudReceiverForm)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _CloudCommonChannelSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudCommonChannelSettings.tsx");
/* harmony import */ var _ReceiverForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;














const defaultChannelValues = Object.freeze({
  __id: '',
  sendResolved: true,
  secureSettings: {},
  settings: {},
  secureFields: {},
  type: 'email'
});
const CloudReceiverForm = ({
  existing,
  alertManagerSourceName,
  config
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName); // transform receiver DTO to form values

  const [existingValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!existing) {
      return [undefined, {}];
    }

    return (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_7__.cloudReceiverToFormValues)(existing, _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__.cloudNotifierTypes);
  }, [existing]);

  const onSubmit = values => {
    const newReceiver = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_7__.formValuesToCloudReceiver)(values, defaultChannelValues);
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_3__.updateAlertManagerConfigAction)({
      newConfig: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_7__.updateConfigWithReceiver)(config, newReceiver, existing === null || existing === void 0 ? void 0 : existing.name),
      oldConfig: config,
      alertManagerSourceName,
      successMessage: existing ? 'Contact point updated.' : 'Contact point created.',
      redirectPath: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)('/alerting/notifications', alertManagerSourceName)
    }));
  };

  const takenReceiverNames = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(({
      name
    }) => name).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name))) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, existing]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [!isVanillaAM && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Alert, {
      title: "Info",
      severity: "info",
      children: "Note that empty string values will be replaced with global defaults where appropriate."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ReceiverForm__WEBPACK_IMPORTED_MODULE_9__.ReceiverForm, {
      config: config,
      onSubmit: onSubmit,
      initialValues: existingValue,
      notifiers: _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__.cloudNotifierTypes,
      alertManagerSourceName: alertManagerSourceName,
      defaultItem: defaultChannelValues,
      takenReceiverNames: takenReceiverNames,
      commonSettingsComponent: _CloudCommonChannelSettings__WEBPACK_IMPORTED_MODULE_8__.CloudCommonChannelSettings
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapsibleSection": () => (/* binding */ CollapsibleSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const CollapsibleSection = ({
  label,
  description,
  children,
  className,
  size = 'xl'
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.wrapper, className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.heading,
      onClick: toggleCollapse,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_3__.CollapseToggle, {
        className: styles.caret,
        size: size,
        onToggle: toggleCollapse,
        isCollapsed: isCollapsed
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
        children: label
      })]
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: styles.description,
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: isCollapsed ? styles.hidden : undefined,
      children: children
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
    padding-bottom: ${theme.spacing(1)};
  `,
  caret: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: -${theme.spacing(0.5)}; // make it align with fields despite icon size
  `,
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    cursor: pointer;
    h6 {
      display: inline-block;
    }
  `,
  hidden: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: none;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.fontWeightRegular};
    margin: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/GrafanaCommonChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaCommonChannelSettings": () => (/* binding */ GrafanaCommonChannelSettings)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const GrafanaCommonChannelSettings = ({
  pathPrefix,
  className
}) => {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Checkbox, Object.assign({}, register(`${pathPrefix}disableResolveMessage`), {
        label: "Disable resolved message",
        description: "Disable the resolve message [OK] that is sent when alerting state returns to false"
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaReceiverForm": () => (/* binding */ GrafanaReceiverForm)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _GrafanaCommonChannelSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaCommonChannelSettings.tsx");
/* harmony import */ var _ReceiverForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx");
/* harmony import */ var _TestContactPointModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/TestContactPointModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;














const defaultChannelValues = Object.freeze({
  __id: '',
  secureSettings: {},
  settings: {},
  secureFields: {},
  disableResolveMessage: false,
  type: 'email'
});
const GrafanaReceiverForm = ({
  existing,
  alertManagerSourceName,
  config
}) => {
  const grafanaNotifiers = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers);
  const [testChannelValues, setTestChannelValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(grafanaNotifiers.result || grafanaNotifiers.loading)) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.fetchGrafanaNotifiersAction)());
    }
  }, [grafanaNotifiers, dispatch]); // transform receiver DTO to form values

  const [existingValue, id2original] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!existing || !grafanaNotifiers.result) {
      return [undefined, {}];
    }

    return (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.grafanaReceiverToFormValues)(existing, grafanaNotifiers.result);
  }, [existing, grafanaNotifiers.result]);

  const onSubmit = values => {
    const newReceiver = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.formValuesToGrafanaReceiver)(values, id2original, defaultChannelValues);
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.updateAlertManagerConfigAction)({
      newConfig: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.updateConfigWithReceiver)(config, newReceiver, existing === null || existing === void 0 ? void 0 : existing.name),
      oldConfig: config,
      alertManagerSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME,
      successMessage: existing ? 'Contact point updated.' : 'Contact point created',
      redirectPath: '/alerting/notifications'
    }));
  };

  const onTestChannel = values => {
    setTestChannelValues(values);
  };

  const testNotification = alert => {
    if (testChannelValues) {
      const existing = id2original[testChannelValues.__id];
      const chan = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.formChannelValuesToGrafanaChannelConfig)(testChannelValues, defaultChannelValues, 'test', existing);
      const payload = {
        alertManagerSourceName,
        receivers: [{
          name: 'test',
          grafana_managed_receiver_configs: [chan]
        }],
        alert
      };
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.testReceiversAction)(payload));
    }
  };

  const takenReceiverNames = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(({
      name
    }) => name).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name))) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, existing]);

  if (grafanaNotifiers.result) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ReceiverForm__WEBPACK_IMPORTED_MODULE_8__.ReceiverForm, {
        config: config,
        onSubmit: onSubmit,
        initialValues: existingValue,
        onTestChannel: onTestChannel,
        notifiers: grafanaNotifiers.result,
        alertManagerSourceName: alertManagerSourceName,
        defaultItem: defaultChannelValues,
        takenReceiverNames: takenReceiverNames,
        commonSettingsComponent: _GrafanaCommonChannelSettings__WEBPACK_IMPORTED_MODULE_7__.GrafanaCommonChannelSettings
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_TestContactPointModal__WEBPACK_IMPORTED_MODULE_9__.TestContactPointModal, {
        onDismiss: () => setTestChannelValues(undefined),
        isOpen: !!testChannelValues,
        onTest: alert => testNotification(alert)
      })]
    });
  } else {
    return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.LoadingPlaceholder, {
      text: "Loading notifiers..."
    }));
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiverForm": () => (/* binding */ ReceiverForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _ChannelSubForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ChannelSubForm.tsx");
/* harmony import */ var _fields_DeletedSubform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/DeletedSubform.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Button, _Button2;
















function ReceiverForm({
  config,
  initialValues,
  defaultItem,
  notifiers,
  alertManagerSourceName,
  onSubmit,
  onTestChannel,
  takenReceiverNames,
  commonSettingsComponent
}) {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_11__.useAppNotification)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const readOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_10__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName);
  const defaultValues = initialValues || {
    name: '',
    items: [Object.assign({}, defaultItem, {
      __id: String(Math.random())
    })]
  };
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    // making a copy here beacuse react-hook-form will mutate these, and break if the object is frozen. for real.
    defaultValues: JSON.parse(JSON.stringify(defaultValues))
  });
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_2__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.saveAMConfig);
  const {
    handleSubmit,
    register,
    formState: {
      errors
    },
    getValues
  } = formAPI;
  const {
    fields,
    append,
    remove
  } = (0,_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_5__.useControlledFieldArray)({
    name: 'items',
    formAPI,
    softDelete: true
  });
  const validateNameIsAvailable = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(name => takenReceiverNames.map(name => name.trim().toLowerCase()).includes(name.trim().toLowerCase()) ? 'Another receiver with this name already exists.' : true, [takenReceiverNames]);

  const submitCallback = values => {
    onSubmit(Object.assign({}, values, {
      items: values.items.filter(item => !item.__deleted)
    }));
  };

  const onInvalid = () => {
    notifyApp.error('There are errors in the form. Please correct them and try again!');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.FormProvider, Object.assign({}, formAPI, {
    children: [!config.alertmanager_config.route && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "warning",
      title: "Attention",
      children: "Because there is no default policy configured yet, this contact point will automatically be set as default."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
      onSubmit: handleSubmit(submitCallback, onInvalid),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h4", {
        className: styles.heading,
        children: readOnly ? 'Contact point' : initialValues ? 'Update contact point' : 'Create contact point'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Name",
        invalid: !!errors.name,
        error: errors.name && errors.name.message,
        required: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
          readOnly: readOnly,
          id: "name"
        }, register('name', {
          required: 'Name is required',
          validate: {
            nameIsAvailable: validateNameIsAvailable
          }
        }), {
          width: 39,
          placeholder: "Name"
        }))
      }), fields.map((field, index) => {
        var _errors$items;

        const pathPrefix = `items.${index}.`;

        if (field.__deleted) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_fields_DeletedSubform__WEBPACK_IMPORTED_MODULE_9__.DeletedSubForm, {
            pathPrefix: pathPrefix
          }, field.__id);
        }

        const initialItem = initialValues === null || initialValues === void 0 ? void 0 : initialValues.items.find(({
          __id
        }) => __id === field.__id);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ChannelSubForm__WEBPACK_IMPORTED_MODULE_8__.ChannelSubForm, {
          defaultValues: field,
          onDuplicate: () => {
            const currentValues = getValues().items[index];
            append(Object.assign({}, currentValues, {
              __id: String(Math.random())
            }));
          },
          onTest: onTestChannel ? () => {
            const currentValues = getValues().items[index];
            onTestChannel(currentValues);
          } : undefined,
          onDelete: () => remove(index),
          pathPrefix: pathPrefix,
          notifiers: notifiers,
          secureFields: initialItem === null || initialItem === void 0 ? void 0 : initialItem.secureFields,
          errors: errors === null || errors === void 0 ? void 0 : (_errors$items = errors.items) === null || _errors$items === void 0 ? void 0 : _errors$items[index],
          commonSettingsComponent: commonSettingsComponent,
          readOnly: readOnly
        }, field.__id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "button",
          icon: "plus",
          variant: "secondary",
          onClick: () => append(Object.assign({}, defaultItem, {
            __id: String(Math.random())
          })),
          children: "New contact point type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: styles.buttons,
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
            children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              disabled: true,
              icon: "fa fa-spinner",
              variant: "primary",
              children: "Saving..."
            }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              type: "submit",
              children: "Save contact point"
            })))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
            disabled: loading,
            fill: "outline",
            variant: "secondary",
            "data-testid": "cancel-button",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)('alerting/notifications', alertManagerSourceName),
            children: "Cancel"
          })]
        })]
      })]
    })]
  }));
}

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(4, 0)};
  `,
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(4)};

    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/TestContactPointModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestContactPointModal": () => (/* binding */ TestContactPointModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _rule_editor_AnnotationsField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx");
/* harmony import */ var _rule_editor_LabelsField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _strong, _AnnotationsField, _LabelsField, _Modal$ButtonRow;










var NotificationType;

(function (NotificationType) {
  NotificationType["predefined"] = "Predefined";
  NotificationType["custom"] = "Custom";
})(NotificationType || (NotificationType = {}));

const notificationOptions = Object.values(NotificationType).map(value => ({
  label: value,
  value: value
}));
const defaultValues = {
  annotations: [{
    key: '',
    value: ''
  }],
  labels: [{
    key: '',
    value: ''
  }]
};
const TestContactPointModal = ({
  isOpen,
  onDismiss,
  onTest
}) => {
  const [notificationType, setNotificationType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(NotificationType.predefined);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues,
    mode: 'onBlur'
  });

  const onSubmit = data => {
    if (notificationType === NotificationType.custom) {
      const alert = {
        annotations: data.annotations.filter(({
          key,
          value
        }) => !!key && !!value).reduce((acc, {
          key,
          value
        }) => {
          return Object.assign({}, acc, {
            [key]: value
          });
        }, {}),
        labels: data.labels.filter(({
          key,
          value
        }) => !!key && !!value).reduce((acc, {
          key,
          value
        }) => {
          return Object.assign({}, acc, {
            [key]: value
          });
        }, {})
      };
      onTest(alert);
    } else {
      onTest();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onDismiss: onDismiss,
    isOpen: isOpen,
    title: 'Test contact point',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.section,
      children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
        children: "Notification message"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
        options: notificationOptions,
        value: notificationType,
        onChange: value => setNotificationType(value)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formMethods, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        onSubmit: formMethods.handleSubmit(onSubmit),
        children: [notificationType === NotificationType.predefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.section,
          children: ["You will send a test notification that uses a predefined alert. If you have defined a custom template or message, for better results switch to ", _strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
            children: "custom"
          })), " notification message, from above."]
        }), notificationType === NotificationType.custom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: "You will send a test notification that uses the annotations defined below. This is a good option if you use custom templates and messages."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: _AnnotationsField || (_AnnotationsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rule_editor_AnnotationsField__WEBPACK_IMPORTED_MODULE_4__["default"], {}))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: _LabelsField || (_LabelsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rule_editor_LabelsField__WEBPACK_IMPORTED_MODULE_5__["default"], {}))
          })]
        }), _Modal$ButtonRow || (_Modal$ButtonRow = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal.ButtonRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            type: "submit",
            children: "Send test notification"
          })
        }))]
      })
    }))]
  });
};

const getStyles = theme => ({
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: ${theme.spacing(1)};
  `,
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-bottom: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/DeletedSubform.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedSubForm": () => (/* binding */ DeletedSubForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




// we can't drop the deleted item from list entirely because
// there will be a rece condition with register/unregister calls in react-hook-form
// and fields will become randomly erroneously unregistered
function DeletedSubForm({
  pathPrefix
}) {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)(); // required to be registered or react-hook-form will randomly drop the values when it feels like it

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    register(`${pathPrefix}.__id`);
    register(`${pathPrefix}.__deleted`);
  }, [register, pathPrefix]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {});
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/KeyValueMapInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueMapInput": () => (/* binding */ KeyValueMapInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;







const KeyValueMapInput = ({
  value,
  onChange,
  readOnly = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [pairs, setPairs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(recordToPairs(value));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setPairs(recordToPairs(value)), [value]);

  const emitChange = pairs => {
    onChange(pairsToRecord(pairs));
  };

  const deleteItem = index => {
    const newPairs = pairs.slice();
    const removed = newPairs.splice(index, 1)[0];
    setPairs(newPairs);

    if (removed[0]) {
      emitChange(newPairs);
    }
  };

  const updatePair = (values, index) => {
    const old = pairs[index];
    const newPairs = pairs.map((pair, i) => i === index ? values : pair);
    setPairs(newPairs);

    if (values[0] || old[0]) {
      emitChange(newPairs);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [!!pairs.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
      className: styles.table,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            children: "Name"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            children: "Value"
          })), !readOnly && (_th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {})))]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
        children: pairs.map(([key, value], index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              readOnly: readOnly,
              value: key,
              onChange: e => updatePair([e.currentTarget.value, value], index)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              readOnly: readOnly,
              value: value,
              onChange: e => updatePair([key, e.currentTarget.value], index)
            })
          }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
              icon: "trash-alt",
              tooltip: "delete",
              onClick: () => deleteItem(index)
            })
          })]
        }, index))
      })]
    }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => setPairs([...pairs, ['', '']]),
      children: "Add"
    })]
  });
};

const getStyles = theme => ({
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-top: ${theme.spacing(1)};
  `,
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    tbody td {
      padding: 0 ${theme.spacing(1)} ${theme.spacing(1)} 0;
    }
  `
});

const pairsToRecord = pairs => {
  const record = {};

  for (const [key, value] of pairs) {
    if (key) {
      record[key] = value;
    }
  }

  return record;
};

const recordToPairs = obj => Object.entries(obj !== null && obj !== void 0 ? obj : {});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionField": () => (/* binding */ OptionField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _SubformField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/SubformField.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _KeyValueMapInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/KeyValueMapInput.tsx");
/* harmony import */ var _SubformArrayField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/SubformArrayField.tsx");
/* harmony import */ var _StringArrayInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/StringArrayInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const OptionField = ({
  option,
  invalid,
  pathPrefix,
  pathSuffix = '',
  error,
  defaultValue,
  readOnly = false
}) => {
  const optionPath = `${pathPrefix}${pathSuffix}`;

  if (option.element === 'subform') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SubformField__WEBPACK_IMPORTED_MODULE_4__.SubformField, {
      readOnly: readOnly,
      defaultValue: defaultValue,
      option: option,
      errors: error,
      pathPrefix: optionPath
    });
  }

  if (option.element === 'subform_array') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SubformArrayField__WEBPACK_IMPORTED_MODULE_7__.SubformArrayField, {
      readOnly: readOnly,
      defaultValues: defaultValue,
      option: option,
      pathPrefix: optionPath,
      errors: error
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
    label: option.element !== 'checkbox' ? option.label : undefined,
    description: option.description || undefined,
    invalid: !!error,
    error: error === null || error === void 0 ? void 0 : error.message,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(OptionInput, {
      id: `${optionPath}${option.propertyName}`,
      defaultValue: defaultValue,
      option: option,
      invalid: invalid,
      pathPrefix: optionPath,
      readOnly: readOnly,
      pathIndex: pathPrefix
    })
  });
};

const OptionInput = ({
  option,
  invalid,
  id,
  pathPrefix = '',
  pathIndex = '',
  readOnly = false
}) => {
  const {
    control,
    register,
    unregister,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const name = `${pathPrefix}${option.propertyName}`; // workaround for https://github.com/react-hook-form/react-hook-form/issues/4993#issuecomment-829012506

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    unregister(name, {
      keepValue: false
    });
  }, [unregister, name]);

  switch (option.element) {
    case 'checkbox':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({
        id: id,
        readOnly: readOnly,
        disabled: readOnly,
        className: styles.checkbox
      }, register(name), {
        label: option.label,
        description: option.description
      }));

    case 'input':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
        id: id,
        readOnly: readOnly || determineReadOnly(option, getValues, pathIndex),
        invalid: invalid,
        type: option.inputType
      }, register(name, {
        required: determineRequired(option, getValues, pathIndex),
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      }), {
        placeholder: option.placeholder
      }));

    case 'select':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        render: _ref => {
          var _option$selectOptions;

          let {
            field: {
              onChange
            }
          } = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({
            disabled: readOnly,
            menuShouldPortal: true
          }, field, {
            options: (_option$selectOptions = option.selectOptions) !== null && _option$selectOptions !== void 0 ? _option$selectOptions : undefined,
            invalid: invalid,
            onChange: value => onChange(value.value)
          }));
        },
        control: control,
        name: name
      });

    case 'textarea':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, Object.assign({
        id: id,
        readOnly: readOnly,
        invalid: invalid
      }, register(name, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      })));

    case 'string_array':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        render: ({
          field: {
            value,
            onChange
          }
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StringArrayInput__WEBPACK_IMPORTED_MODULE_8__.StringArrayInput, {
          readOnly: readOnly,
          value: value,
          onChange: onChange
        }),
        control: control,
        name: name
      });

    case 'key_value_map':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        render: ({
          field: {
            value,
            onChange
          }
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_KeyValueMapInput__WEBPACK_IMPORTED_MODULE_6__.KeyValueMapInput, {
          readOnly: readOnly,
          value: value,
          onChange: onChange
        }),
        control: control,
        name: name
      });

    default:
      console.error('Element not supported', option.element);
      return null;
  }
};

const styles = {
  checkbox: _emotion_css__WEBPACK_IMPORTED_MODULE_5__.css`
    height: auto; // native checkbox has fixed height which does not take into account description
  `
};

const validateOption = (value, validationRule) => {
  return RegExp(validationRule).test(value) ? true : 'Invalid format';
};

const determineRequired = (option, getValues, pathIndex) => {
  if (!option.dependsOn) {
    return option.required ? 'Required' : false;
  }

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(getValues(`${pathIndex}secureFields`))) {
    const dependentOn = getValues(`${pathIndex}secureSettings.${option.dependsOn}`);
    return !Boolean(dependentOn) && option.required ? 'Required' : false;
  } else {
    const dependentOn = getValues(`${pathIndex}secureFields.${option.dependsOn}`);
    return !dependentOn && option.required ? 'Required' : false;
  }
};

const determineReadOnly = (option, getValues, pathIndex) => {
  if (!option.dependsOn) {
    return false;
  }

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(getValues(`${pathIndex}secureFields`))) {
    return getValues(`${pathIndex}secureSettings.${option.dependsOn}`);
  } else {
    return getValues(`${pathIndex}secureFields.${option.dependsOn}`);
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/StringArrayInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringArrayInput": () => (/* binding */ StringArrayInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const StringArrayInput = ({
  value,
  onChange,
  readOnly = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const deleteItem = index => {
    if (!value) {
      return;
    }

    const newValue = value.slice();
    newValue.splice(index, 1);
    onChange(newValue);
  };

  const updateValue = (itemValue, index) => {
    if (!value) {
      return;
    }

    onChange(value.map((v, i) => i === index ? itemValue : v));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [!!(value !== null && value !== void 0 && value.length) && value.map((v, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        readOnly: readOnly,
        value: v,
        onChange: e => updateValue(e.currentTarget.value, index)
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
        className: styles.deleteIcon,
        icon: "trash-alt",
        tooltip: "delete",
        onClick: () => deleteItem(index)
      })]
    }, index)), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => onChange([...(value !== null && value !== void 0 ? value : []), '']),
      children: "Add"
    })]
  });
};

const getStyles = theme => ({
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(1)};
    align-items: center;
  `,
  deleteIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-left: ${theme.spacing(1)};
  `,
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/SubformArrayField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubformArrayField": () => (/* binding */ SubformArrayField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _CollapsibleSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _OptionField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var app_features_alerting_unified_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const SubformArrayField = ({
  option,
  pathPrefix,
  errors,
  defaultValues,
  readOnly = false
}) => {
  var _ref;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_7__.getReceiverFormFieldStyles);
  const path = `${pathPrefix}${option.propertyName}`;
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const {
    fields,
    append,
    remove
  } = (0,app_features_alerting_unified_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_6__.useControlledFieldArray)({
    name: path,
    formAPI,
    defaults: defaultValues
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_3__.CollapsibleSection, {
      className: styles.collapsibleSection,
      label: `${option.label} (${fields.length})`,
      description: option.description,
      children: [((_ref = fields !== null && fields !== void 0 ? fields : defaultValues) !== null && _ref !== void 0 ? _ref : []).map((field, itemIndex) => {
        var _option$subformOption;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: styles.wrapper,
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_4__.ActionIcon, {
            "data-testid": `${path}.${itemIndex}.delete-button`,
            icon: "trash-alt",
            tooltip: "delete",
            onClick: () => remove(itemIndex),
            className: styles.deleteIcon
          }), (_option$subformOption = option.subformOptions) === null || _option$subformOption === void 0 ? void 0 : _option$subformOption.map(option => {
            var _errors$itemIndex;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_OptionField__WEBPACK_IMPORTED_MODULE_5__.OptionField, {
              readOnly: readOnly,
              defaultValue: field === null || field === void 0 ? void 0 : field[option.propertyName],
              option: option,
              pathPrefix: `${path}.${itemIndex}.`,
              error: errors === null || errors === void 0 ? void 0 : (_errors$itemIndex = errors[itemIndex]) === null || _errors$itemIndex === void 0 ? void 0 : _errors$itemIndex[option.propertyName]
            }, option.propertyName);
          })]
        }, itemIndex);
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        "data-testid": `${path}.add-button`,
        className: styles.addButton,
        type: "button",
        variant: "secondary",
        icon: "plus",
        size: "sm",
        onClick: () => append({
          __id: String(Math.random())
        }),
        children: "Add"
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/SubformField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubformField": () => (/* binding */ SubformField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _OptionField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const SubformField = ({
  option,
  pathPrefix,
  errors,
  defaultValue,
  readOnly = false
}) => {
  var _option$subformOption;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_5__.getReceiverFormFieldStyles);
  const name = `${pathPrefix}${option.propertyName}`;
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();

  const _watchValue = watch(name);

  const value = _watchValue === undefined ? defaultValue : _watchValue;
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": `${name}.container`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h6", {
      children: option.label
    }), option.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: styles.description,
      children: option.description
    }), show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_4__.ActionIcon, {
        "data-testid": `${name}.delete-button`,
        icon: "trash-alt",
        tooltip: "delete",
        onClick: () => setShow(false),
        className: styles.deleteIcon
      }), ((_option$subformOption = option.subformOptions) !== null && _option$subformOption !== void 0 ? _option$subformOption : []).map(subOption => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_OptionField__WEBPACK_IMPORTED_MODULE_2__.OptionField, {
          readOnly: readOnly,
          defaultValue: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue[subOption.propertyName],
          option: subOption,
          pathPrefix: `${name}.`,
          error: errors === null || errors === void 0 ? void 0 : errors[subOption.propertyName]
        }, subOption.propertyName);
      })]
    }), !show && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => setShow(true),
      "data-testid": `${name}.add-button`,
      children: "Add"
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReceiverFormFieldStyles": () => (/* binding */ getReceiverFormFieldStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getReceiverFormFieldStyles = theme => ({
  collapsibleSection: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0;
    padding: 0;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0)};
    padding: ${theme.spacing(1)};
    border: solid 1px ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
    position: relative;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.fontWeightRegular};
    margin: 0;
  `,
  deleteIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: absolute;
    right: ${theme.spacing(1)};
    top: ${theme.spacing(1)};
  `,
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationKeyInput": () => (/* binding */ AnnotationKeyInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _SelectWIthAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value", "existingKeys", "aria-label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const AnnotationKeyInput = _ref => {
  let {
    value,
    existingKeys,
    'aria-label': ariaLabel
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const annotationOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.Annotation).filter(key => !existingKeys.includes(key)) // remove keys already taken in other annotations
  .map(key => ({
    value: key,
    label: _utils_constants__WEBPACK_IMPORTED_MODULE_2__.annotationLabels[key]
  })), [existingKeys]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_1__.SelectWithAdd, Object.assign({
    "aria-label": ariaLabel,
    value: value,
    options: annotationOptions,
    custom: !!value && !Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.Annotation).includes(value)
  }, rest));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

var _Label;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const AnnotationsField = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  const {
    control,
    register,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const annotations = watch('annotations');
  const existingKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => annotations.filter((_, idx) => idx !== index).map(({
    key
  }) => key), [annotations]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: "Summary and annotations"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldArray, {
      name: 'annotations',
      control: control,
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: styles.flexColumn,
          children: [fields.map((field, index) => {
            var _annotations$index, _annotations$index$ke, _errors$annotations, _errors$annotations$i, _errors$annotations$i2, _errors$annotations2, _errors$annotations2$, _errors$annotations2$2, _annotations$index2, _errors$annotations3, _errors$annotations3$, _errors$annotations3$2, _errors$annotations4, _errors$annotations4$, _errors$annotations4$2;

            const isUrl = (_annotations$index = annotations[index]) === null || _annotations$index === void 0 ? void 0 : (_annotations$index$ke = _annotations$index.key) === null || _annotations$index$ke === void 0 ? void 0 : _annotations$index$ke.toLocaleLowerCase().endsWith('url');
            const ValueInputComponent = isUrl ? _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input : _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: styles.flexRow,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                className: styles.field,
                invalid: !!((_errors$annotations = errors.annotations) !== null && _errors$annotations !== void 0 && (_errors$annotations$i = _errors$annotations[index]) !== null && _errors$annotations$i !== void 0 && (_errors$annotations$i2 = _errors$annotations$i.key) !== null && _errors$annotations$i2 !== void 0 && _errors$annotations$i2.message),
                error: (_errors$annotations2 = errors.annotations) === null || _errors$annotations2 === void 0 ? void 0 : (_errors$annotations2$ = _errors$annotations2[index]) === null || _errors$annotations2$ === void 0 ? void 0 : (_errors$annotations2$2 = _errors$annotations2$.key) === null || _errors$annotations2$2 === void 0 ? void 0 : _errors$annotations2$2.message,
                "data-testid": `annotation-key-${index}`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
                  name: `annotations[${index}].key`,
                  render: _ref => {
                    let {} = _ref,
                        field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__.AnnotationKeyInput, Object.assign({}, field, {
                      "aria-label": `Annotation detail ${index + 1}`,
                      existingKeys: existingKeys(index),
                      width: 18
                    }));
                  },
                  control: control,
                  rules: {
                    required: {
                      value: !!((_annotations$index2 = annotations[index]) !== null && _annotations$index2 !== void 0 && _annotations$index2.value),
                      message: 'Required.'
                    }
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.flexRowItemMargin, styles.field),
                invalid: !!((_errors$annotations3 = errors.annotations) !== null && _errors$annotations3 !== void 0 && (_errors$annotations3$ = _errors$annotations3[index]) !== null && _errors$annotations3$ !== void 0 && (_errors$annotations3$2 = _errors$annotations3$.value) !== null && _errors$annotations3$2 !== void 0 && _errors$annotations3$2.message),
                error: (_errors$annotations4 = errors.annotations) === null || _errors$annotations4 === void 0 ? void 0 : (_errors$annotations4$ = _errors$annotations4[index]) === null || _errors$annotations4$ === void 0 ? void 0 : (_errors$annotations4$2 = _errors$annotations4$.value) === null || _errors$annotations4$2 === void 0 ? void 0 : _errors$annotations4$2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ValueInputComponent, Object.assign({
                  "data-testid": `annotation-value-${index}`,
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.annotationValueInput, {
                    [styles.textarea]: !isUrl
                  })
                }, register(`annotations[${index}].value`), {
                  placeholder: isUrl ? 'https://' : `Text`,
                  defaultValue: field.value
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                type: "button",
                className: styles.flexRowItemMargin,
                "aria-label": "delete annotation",
                icon: "trash-alt",
                variant: "secondary",
                onClick: () => remove(index)
              })]
            }, field.id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: styles.addAnnotationsButton,
            icon: "plus-circle",
            type: "button",
            variant: "secondary",
            onClick: () => {
              append({
                key: '',
                value: ''
              });
            },
            children: "Add info"
          })]
        });
      }
    })]
  });
};

const getStyles = theme => ({
  annotationValueInput: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    width: 426px;
  `,
  textarea: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    height: 76px;
  `,
  addAnnotationsButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    flex-grow: 0;
    align-self: flex-start;
    margin-left: 148px;
  `,
  flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    flex-direction: column;
  `,
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-bottom: ${theme.spacing.xs};
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  flexRowItemMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-left: ${theme.spacing.xs};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _InlineLabel;









const LabelsField = ({
  className
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const labels = watch('labels');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(className, styles.wrapper),
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: "Custom Labels"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldArray, {
      control: control,
      name: "labels",
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.flexRow,
            children: [_InlineLabel || (_InlineLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, {
              width: 18,
              children: "Labels"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: styles.flexColumn,
              children: [fields.map((field, index) => {
                var _errors$labels, _errors$labels$index, _errors$labels$index$, _errors$labels2, _errors$labels2$index, _errors$labels2$index2, _labels$index, _errors$labels3, _errors$labels3$index, _errors$labels3$index2, _errors$labels4, _errors$labels4$index, _errors$labels4$index2, _labels$index2;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.flexRow, styles.centerAlignRow),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels = errors.labels) !== null && _errors$labels !== void 0 && (_errors$labels$index = _errors$labels[index]) !== null && _errors$labels$index !== void 0 && (_errors$labels$index$ = _errors$labels$index.key) !== null && _errors$labels$index$ !== void 0 && _errors$labels$index$.message),
                      error: (_errors$labels2 = errors.labels) === null || _errors$labels2 === void 0 ? void 0 : (_errors$labels2$index = _errors$labels2[index]) === null || _errors$labels2$index === void 0 ? void 0 : (_errors$labels2$index2 = _errors$labels2$index.key) === null || _errors$labels2$index2 === void 0 ? void 0 : _errors$labels2$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`labels[${index}].key`, {
                        required: {
                          value: !!((_labels$index = labels[index]) !== null && _labels$index !== void 0 && _labels$index.value),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "key",
                        "data-testid": `label-key-${index}`,
                        defaultValue: field.key
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, {
                      className: styles.equalSign,
                      children: "="
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels3 = errors.labels) !== null && _errors$labels3 !== void 0 && (_errors$labels3$index = _errors$labels3[index]) !== null && _errors$labels3$index !== void 0 && (_errors$labels3$index2 = _errors$labels3$index.value) !== null && _errors$labels3$index2 !== void 0 && _errors$labels3$index2.message),
                      error: (_errors$labels4 = errors.labels) === null || _errors$labels4 === void 0 ? void 0 : (_errors$labels4$index = _errors$labels4[index]) === null || _errors$labels4$index === void 0 ? void 0 : (_errors$labels4$index2 = _errors$labels4$index.value) === null || _errors$labels4$index2 === void 0 ? void 0 : _errors$labels4$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`labels[${index}].value`, {
                        required: {
                          value: !!((_labels$index2 = labels[index]) !== null && _labels$index2 !== void 0 && _labels$index2.key),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "value",
                        "data-testid": `label-value-${index}`,
                        defaultValue: field.value
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      className: styles.deleteLabelButton,
                      "aria-label": "delete label",
                      icon: "trash-alt",
                      variant: "secondary",
                      onClick: () => {
                        remove(index);
                      }
                    })]
                  })
                }, field.id);
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: styles.addLabelButton,
                icon: "plus-circle",
                type: "button",
                variant: "secondary",
                onClick: () => {
                  append({});
                },
                children: "Add label"
              })]
            })]
          })
        });
      }
    })]
  });
};

const getStyles = theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-top: ${theme.spacing.md};
    `,
    flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      flex-direction: column;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      & + button {
        margin-left: ${theme.spacing.xs};
      }
    `,
    deleteLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-left: ${theme.spacing.xs};
      align-self: flex-start;
    `,
    addLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      flex-grow: 0;
      align-self: flex-start;
    `,
    centerAlignRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      align-items: baseline;
    `,
    equalSign: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      align-self: flex-start;
      width: 28px;
      justify-content: center;
      margin-left: ${theme.spacing.xs};
    `,
    labelInput: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      width: 183px;
      margin-bottom: ${theme.spacing.sm};
      & + & {
        margin-left: ${theme.spacing.sm};
      }
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectWithAdd": () => (/* binding */ SelectWithAdd)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const SelectWithAdd = ({
  value,
  onChange,
  options,
  className,
  placeholder,
  width,
  custom,
  onCustomChange,
  disabled = false,
  addLabel = '+ Add new',
  'aria-label': ariaLabel
}) => {
  const [isCustom, setIsCustom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(custom);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (custom) {
      setIsCustom(custom);
    }
  }, [custom]);

  const _options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [...options, {
    value: '__add__',
    label: addLabel
  }], [options, addLabel]);

  if (isCustom) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Input, {
      "aria-label": ariaLabel,
      width: width,
      autoFocus: !custom,
      value: value || '',
      placeholder: placeholder,
      className: className,
      disabled: disabled,
      onChange: e => onChange(e.target.value)
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
      menuShouldPortal: true,
      "aria-label": ariaLabel,
      width: width,
      options: _options,
      value: value,
      className: className,
      placeholder: placeholder,
      disabled: disabled,
      onChange: val => {
        const value = val === null || val === void 0 ? void 0 : val.value;

        if (value === '__add__') {
          setIsCustom(true);

          if (onCustomChange) {
            onCustomChange(true);
          }

          onChange('');
        } else {
          onChange(value);
        }
      }
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionIcon": () => (/* binding */ ActionIcon)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["tooltip", "icon", "to", "target", "onClick", "className", "tooltipPlacement"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ActionIcon = _ref => {
  let {
    tooltip,
    icon,
    to,
    target,
    onClick,
    className,
    tooltipPlacement = 'top'
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const ariaLabel = typeof tooltip === 'string' ? tooltip : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
    content: tooltip,
    placement: tooltipPlacement,
    children: to ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.LinkButton, Object.assign({
      variant: "secondary",
      fill: "text",
      icon: icon,
      href: to,
      size: "sm",
      target: target
    }, rest, {
      "aria-label": ariaLabel
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Button, Object.assign({
      className: className,
      variant: "secondary",
      fill: "text",
      size: "sm",
      icon: icon,
      type: "button",
      onClick: onClick
    }, rest, {
      "aria-label": ariaLabel
    }))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertManagerSourceName": () => (/* binding */ useAlertManagerSourceName)
/* harmony export */ });
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






function isAlertManagerSource(alertManagerSourceName) {
  return alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME || !!(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.getAlertManagerDataSources)().find(ds => ds.name === alertManagerSourceName);
}
/* this will return am name either from query params or from local storage or a default (grafana).
 *
 * fallbackUrl - if provided, will redirect to this url if alertmanager provided in query no longer
 */


function useAlertManagerSourceName() {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_0__.useQueryParams)();
  const update = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerSource(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME) {
      app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"].set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: alertManagerSourceName
      });
    }
  }, [updateQueryParams]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerSource(querySource)) {
      return [querySource, update];
    } else {
      // non existing alertmanager
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerSource(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useControlledFieldArray": () => (/* binding */ useControlledFieldArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const EMPTY_ARRAY = [];
/*
 * react-hook-form's own useFieldArray is uncontrolled and super buggy.
 * this is a simple controlled version. It's dead simple and more robust at the cost of re-rendering the form
 * on every change to the sub forms in the array.
 * Warning: you'll have to take care of your own unique identiifer to use as `key` for the ReactNode array.
 * Using index will cause problems.
 */

function useControlledFieldArray(options) {
  var _ref, _watch;

  const {
    name,
    formAPI,
    defaults,
    softDelete
  } = options;
  const {
    watch,
    getValues,
    reset,
    setValue
  } = formAPI;
  const fields = (_ref = (_watch = watch(name)) !== null && _watch !== void 0 ? _watch : defaults) !== null && _ref !== void 0 ? _ref : EMPTY_ARRAY;
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(updateFn => {
    const values = JSON.parse(JSON.stringify(getValues()));
    const newItems = updateFn(fields !== null && fields !== void 0 ? fields : []);
    reset((0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(values, name, newItems));
  }, [getValues, name, reset, fields]);
  return {
    fields,
    append: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(values => update(fields => [...fields, values]), [update]),
    remove: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => {
      if (softDelete) {
        setValue(`${name}.${index}.__deleted`, true);
      } else {
        update(items => {
          const newItems = items.slice();
          newItems.splice(index, 1);
          return newItems;
        });
      }
    }, [update, name, setValue, softDelete])
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/styles/table.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertTableStyles": () => (/* binding */ getAlertTableStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getAlertTableStyles = theme => ({
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    border-radius: ${theme.shape.borderRadius()};
    border: solid 1px ${theme.colors.border.weak};
    background-color: ${theme.colors.background.secondary};

    th {
      padding: ${theme.spacing(1)};
    }

    td {
      padding: 0 ${theme.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,
  evenRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.primary};
  `,
  colExpand: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 36px;
  `,
  actionsCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloudNotifierTypes": () => (/* binding */ cloudNotifierTypes),
/* harmony export */   "globalConfigOptions": () => (/* binding */ globalConfigOptions)
/* harmony export */ });
function option(propertyName, label, description, rest = {}) {
  return Object.assign({
    propertyName,
    label,
    description,
    element: 'input',
    inputType: '',
    required: false,
    secure: false,
    placeholder: '',
    validationRule: '',
    showWhen: {
      field: '',
      is: ''
    },
    dependsOn: ''
  }, rest);
}

const basicAuthOption = option('basic_auth', 'Basic auth', 'Sets the `Authorization` header with the configured username and password. Password and password_file are mutually exclusive.', {
  element: 'subform',
  subformOptions: [option('username', 'Username', ''), option('password', 'Password', ''), option('password_file', 'Password file', '')]
});
const tlsConfigOption = option('tls_config', 'TLS config', 'Configures the TLS settings.', {
  element: 'subform',
  subformOptions: [option('ca_file', 'CA file', 'CA certificate to validate the server certificate with.'), option('cert_file', 'Cert file', 'Certificate for client cert authentication to the server.'), option('key_file', 'Key file', 'Key file for client cert authentication to the server.'), option('server_name', 'Server name', 'ServerName extension to indicate the name of the server.'), option('insecure_skip_verify', 'Skip verify', 'Disable validation of the server certificate.', {
    element: 'checkbox'
  })]
});
const httpConfigOption = option('http_config', 'HTTP Config', 'Note that `basic_auth`, `bearer_token` and `bearer_token_file` options are mutually exclusive.', {
  element: 'subform',
  subformOptions: [option('bearer_token', 'Bearer token', 'Sets the `Authorization` header with the configured bearer token.'), option('bearer_token_file', 'Bearer token file', 'Sets the `Authorization` header with the bearer token read from the configured file.'), option('proxy_url', 'Proxy URL', 'Optional proxy URL.'), basicAuthOption, tlsConfigOption]
});
const cloudNotifierTypes = [{
  name: 'Email',
  description: 'Send notification over SMTP',
  type: 'email',
  info: '',
  heading: 'Email settings',
  options: [option('to', 'To', 'The email address to send notifications to.', {
    required: true
  }), option('from', 'From', 'The sender address.'), option('smarthost', 'SMTP host', 'The SMTP host through which emails are sent.'), option('hello', 'Hello', 'The hostname to identify to the SMTP server.'), option('auth_username', 'Username', 'SMTP authentication information'), option('auth_password', 'Password', 'SMTP authentication information'), option('auth_secret', 'Secret', 'SMTP authentication information'), option('auth_identity', 'Identity', 'SMTP authentication information'), option('require_tls', 'Require TLS', 'The SMTP TLS requirement', {
    element: 'checkbox'
  }), option('html', 'Email HTML body', 'The HTML body of the email notification.', {
    placeholder: '{{ template "email.default.html" . }}',
    element: 'textarea'
  }), option('text', 'Email text body', 'The text body of the email notification.', {
    element: 'textarea'
  }), option('headers', 'Headers', 'Further headers email header key/value pairs. Overrides any headers previously set by the notification implementation.', {
    element: 'key_value_map'
  }), tlsConfigOption]
}, {
  name: 'PagerDuty',
  description: 'Send notifications to PagerDuty',
  type: 'pagerduty',
  info: '',
  heading: 'PagerDuty settings',
  options: [option('routing_key', 'Routing key', 'The PagerDuty integration key (when using PagerDuty integration type `Events API v2`)'), option('service_key', 'Service key', 'The PagerDuty integration key (when using PagerDuty integration type `Prometheus`).'), option('url', 'URL', 'The URL to send API requests to'), option('client', 'Client', 'The client identification of the Alertmanager.', {
    placeholder: '{{ template "pagerduty.default.client" . }}'
  }), option('client_url', 'Client URL', 'A backlink to the sender of the notification.', {
    placeholder: '{{ template "pagerduty.default.clientURL" . }}'
  }), option('description', 'Description', 'A description of the incident.', {
    placeholder: '{{ template "pagerduty.default.description" .}}'
  }), option('severity', 'Severity', 'Severity of the incident.', {
    placeholder: 'error'
  }), option('details', 'Details', 'A set of arbitrary key/value pairs that provide further detail about the incident.', {
    element: 'key_value_map'
  }), option('images', 'Images', 'Images to attach to the incident.', {
    element: 'subform_array',
    subformOptions: [option('href', 'URL', '', {
      required: true
    }), option('source', 'Source', '', {
      required: true
    }), option('alt', 'Alt', '', {
      required: true
    })]
  }), option('links', 'Links', 'Links to attach to the incident.', {
    element: 'subform_array',
    subformOptions: [option('href', 'URL', '', {
      required: true
    }), option('text', 'Text', '', {
      required: true
    })]
  }), httpConfigOption]
}, {
  name: 'Pushover',
  description: 'Send notifications to Pushover',
  type: 'pushover',
  info: '',
  heading: 'Pushover settings',
  options: [option('user_key', 'User key', 'The recipient user’s user key.', {
    required: true
  }), option('token', 'Token', 'Your registered application’s API token, see https://pushover.net/app', {
    required: true
  }), option('title', 'Title', 'Notification title.', {
    placeholder: '{{ template "pushover.default.title" . }}'
  }), option('message', 'Message', 'Notification message.', {
    placeholder: '{{ template "pushover.default.message" . }}'
  }), option('url', 'URL', 'A supplementary URL shown alongside the message.', {
    placeholder: '{{ template "pushover.default.url" . }}'
  }), option('priority', 'Priority', 'Priority, see https://pushover.net/api#priority', {
    placeholder: '{{ if eq .Status "firing" }}2{{ else }}0{{ end }}'
  }), option('retry', 'Retry', 'How often the Pushover servers will send the same notification to the user. Must be at least 30 seconds.', {
    placeholder: '1m'
  }), option('expire', 'Expire', 'How long your notification will continue to be retried for, unless the user acknowledges the notification.', {
    placeholder: '1h'
  }), httpConfigOption]
}, {
  name: 'Slack',
  description: 'Send notifications to Slack',
  type: 'slack',
  info: '',
  heading: 'Slack settings',
  options: [option('api_url', 'Webhook URL', 'The Slack webhook URL.'), option('channel', 'Channel', 'The #channel or @user to send notifications to.', {
    required: true
  }), option('icon_emoji', 'Emoji icon', ''), option('icon_url', 'Icon URL', ''), option('link_names', 'Names link', '', {
    element: 'checkbox'
  }), option('username', 'Username', '', {
    placeholder: '{{ template "slack.default.username" . }}'
  }), option('callback_id', 'Callback ID', '', {
    placeholder: '{{ template "slack.default.callbackid" . }}'
  }), option('color', 'Color', '', {
    placeholder: '{{ if eq .Status "firing" }}danger{{ else }}good{{ end }}'
  }), option('fallback', 'Fallback', '', {
    placeholder: '{{ template "slack.default.fallback" . }}'
  }), option('footer', 'Footer', '', {
    placeholder: '{{ template "slack.default.footer" . }}'
  }), option('mrkdwn_in', 'Mrkdwn fields', 'An array of field names that should be formatted by mrkdwn syntax.', {
    element: 'string_array'
  }), option('pretext', 'Pre-text', '', {
    placeholder: '{{ template "slack.default.pretext" . }}'
  }), option('short_fields', 'Short fields', '', {
    element: 'checkbox'
  }), option('text', 'Message body', '', {
    element: 'textarea',
    placeholder: '{{ template "slack.default.text" . }}'
  }), option('title', 'Title', '', {
    placeholder: '{{ template "slack.default.title" . }}'
  }), option('title_link', 'Title link', '', {
    placeholder: '{{ template "slack.default.titlelink" . }}'
  }), option('image_url', 'Image URL', ''), option('thumb_url', 'Thumbnail URL', ''), option('actions', 'Actions', '', {
    element: 'subform_array',
    subformOptions: [option('text', 'Text', '', {
      required: true
    }), option('type', 'Type', '', {
      required: true
    }), option('url', 'URL', 'Either url or name and value are mandatory.'), option('name', 'Name', ''), option('value', 'Value', ''), option('confirm', 'Confirm', '', {
      element: 'subform',
      subformOptions: [option('text', 'Text', '', {
        required: true
      }), option('dismiss_text', 'Dismiss text', ''), option('ok_text', 'OK text', ''), option('title', 'Title', '')]
    }), option('style', 'Style', '')]
  }), option('fields', 'Fields', '', {
    element: 'subform_array',
    subformOptions: [option('title', 'Title', '', {
      required: true
    }), option('value', 'Value', '', {
      required: true
    }), option('short', 'Short', '', {
      element: 'checkbox'
    })]
  }), httpConfigOption]
}, {
  name: 'OpsGenie',
  description: 'Send notifications to OpsGenie',
  type: 'opsgenie',
  info: '',
  heading: 'OpsGenie settings',
  options: [option('api_key', 'API key', 'The API key to use when talking to the OpsGenie API.'), option('api_url', 'API URL', 'The host to send OpsGenie API requests to.'), option('message', 'Message', 'Alert text limited to 130 characters.'), option('description', 'Description', 'A description of the incident.', {
    placeholder: '{{ template "opsgenie.default.description" . }}'
  }), option('source', 'Source', 'A backlink to the sender of the notification.', {
    placeholder: '{{ template "opsgenie.default.source" . }}'
  }), option('details', 'Details', 'A set of arbitrary key/value pairs that provide further detail about the incident.', {
    element: 'key_value_map'
  }), option('tags', 'Tags', 'Comma separated list of tags attached to the notifications.'), option('note', 'Note', 'Additional alert note.'), option('priority', 'Priority', 'Priority level of alert. Possible values are P1, P2, P3, P4, and P5.'), option('responders', 'Responders', 'List of responders responsible for notifications.', {
    element: 'subform_array',
    subformOptions: [option('type', 'Type', '"team", "user", "escalation" or schedule".', {
      required: true
    }), option('id', 'ID', 'Exactly one of these fields should be defined.'), option('name', 'Name', 'Exactly one of these fields should be defined.'), option('username', 'Username', 'Exactly one of these fields should be defined.')]
  }), httpConfigOption]
}, {
  name: 'VictorOps',
  description: 'Send notifications to VictorOps',
  type: 'victorops',
  info: '',
  heading: 'VictorOps settings',
  options: [option('api_key', 'API key', 'The API key to use when talking to the VictorOps API.'), option('api_url', 'API URL', 'The VictorOps API URL.'), option('routing_key', 'Routing key', 'A key used to map the alert to a team.', {
    required: true
  }), option('message_type', 'Message type', 'Describes the behavior of the alert (CRITICAL, WARNING, INFO).'), option('entity_display_name', 'Entity display name', 'Contains summary of the alerted problem.', {
    placeholder: '{{ template "victorops.default.entity_display_name" . }}'
  }), option('state_message', 'State message', 'Contains long explanation of the alerted problem.', {
    placeholder: '{{ template "victorops.default.state_message" . }}'
  }), option('monitoring_tool', 'Monitoring tool', 'The monitoring tool the state message is from.', {
    placeholder: '{{ template "victorops.default.monitoring_tool" . }}'
  }), httpConfigOption]
}, {
  name: 'Webhook',
  description: 'Send notifications to a webhook',
  type: 'webhook',
  info: '',
  heading: 'Webhook settings',
  options: [option('url', 'URL', 'The endpoint to send HTTP POST requests to.', {
    required: true
  }), option('max_alerts', 'Max alerts', 'The maximum number of alerts to include in a single webhook message. Alerts above this threshold are truncated. When leaving this at its default value of 0, all alerts are included.', {
    placeholder: '0',
    validationRule: '(^\\d+$|^$)'
  }), httpConfigOption]
}];
const globalConfigOptions = [// email
option('smtp_from', 'SMTP from', 'The default SMTP From header field.'), option('smtp_smarthost', 'SMTP smarthost', 'The default SMTP smarthost used for sending emails, including port number. Port number usually is 25, or 587 for SMTP over TLS (sometimes referred to as STARTTLS). Example: smtp.example.org:587'), option('smtp_hello', 'SMTP hello', 'The default hostname to identify to the SMTP server.', {
  placeholder: 'localhost'
}), option('smtp_auth_username', 'SMTP auth username', "SMTP Auth using CRAM-MD5, LOGIN and PLAIN. If empty, Alertmanager doesn't authenticate to the SMTP server."), option('smtp_auth_password', 'SMTP auth password', 'SMTP Auth using LOGIN and PLAIN.'), option('smtp_auth_identity', 'SMTP auth identity', 'SMTP Auth using PLAIN.'), option('smtp_auth_secret', 'SMTP auth secret', 'SMTP Auth using CRAM-MD5.'), option('smtp_require_tls', 'SMTP require TLS', 'The default SMTP TLS requirement. Note that Go does not support unencrypted connections to remote SMTP endpoints.', {
  element: 'checkbox'
}), // slack
option('slack_api_url', 'Slack API URL', ''), option('victorops_api_key', 'VictorOps API key', ''), option('victorops_api_url', 'VictorOps API URL', '', {
  placeholder: 'https://alert.victorops.com/integrations/generic/20131114/alert/'
}), option('pagerduty_url', 'PagerDuty URL', 'https://events.pagerduty.com/v2/enqueue'), option('opsgenie_api_key', 'OpsGenie API key', ''), option('opsgenie_api_url', 'OpsGenie API URL', '', {
  placeholder: 'https://api.opsgenie.com/'
}), option('wechat_api_url', 'WeChat API URL', '', {
  placeholder: 'https://qyapi.weixin.qq.com/cgi-bin/'
}), option('wechat_api_secret', 'WeChat API secret', ''), option('wechat_api_corp_id', 'WeChat API corp id', ''), httpConfigOption, option('resolve_timeout', 'Resolve timeout', 'ResolveTimeout is the default value used by alertmanager if the alert does not include EndsAt, after this time passes it can declare the alert as resolved if it has not been updated. This has no impact on alerts from Prometheus, as they always include EndsAt.', {
  placeholder: '5m'
})];

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/receiver-form.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloudReceiverToFormValues": () => (/* binding */ cloudReceiverToFormValues),
/* harmony export */   "formChannelValuesToGrafanaChannelConfig": () => (/* binding */ formChannelValuesToGrafanaChannelConfig),
/* harmony export */   "formValuesToCloudReceiver": () => (/* binding */ formValuesToCloudReceiver),
/* harmony export */   "formValuesToGrafanaReceiver": () => (/* binding */ formValuesToGrafanaReceiver),
/* harmony export */   "grafanaReceiverToFormValues": () => (/* binding */ grafanaReceiverToFormValues),
/* harmony export */   "omitEmptyValues": () => (/* binding */ omitEmptyValues),
/* harmony export */   "updateConfigWithReceiver": () => (/* binding */ updateConfigWithReceiver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function grafanaReceiverToFormValues(receiver, notifiers) {
  var _receiver$grafana_man, _receiver$grafana_man2;

  const channelMap = {}; // giving each form receiver item a unique id so we can use it to map back to "original" items
  // as well as to use as `key` prop.
  // @TODO use uid once backend is fixed to provide it. then we can get rid of the GrafanaChannelMap

  let idCounter = 1;
  const values = {
    name: receiver.name,
    items: (_receiver$grafana_man = (_receiver$grafana_man2 = receiver.grafana_managed_receiver_configs) === null || _receiver$grafana_man2 === void 0 ? void 0 : _receiver$grafana_man2.map(channel => {
      const id = String(idCounter++);
      channelMap[id] = channel;
      const notifier = notifiers.find(({
        type
      }) => type === channel.type);
      return grafanaChannelConfigToFormChannelValues(id, channel, notifier);
    })) !== null && _receiver$grafana_man !== void 0 ? _receiver$grafana_man : []
  };
  return [values, channelMap];
}
function cloudReceiverToFormValues(receiver, notifiers) {
  const channelMap = {}; // giving each form receiver item a unique id so we can use it to map back to "original" items

  let idCounter = 1;
  const items = Object.entries(receiver) // filter out only config items that are relevant to cloud
  .filter(([type]) => type.endsWith('_configs') && type !== 'grafana_managed_receiver_configs') // map property names to cloud notifier types by removing the `_config` suffix
  .map(([type, configs]) => [type.replace('_configs', ''), configs]) // convert channel configs to form values
  .map(([type, configs]) => configs.map(config => {
    const id = String(idCounter++);
    channelMap[id] = {
      type,
      config
    };
    const notifier = notifiers.find(notifier => notifier.type === type);

    if (!notifier) {
      throw new Error(`unknown cloud notifier: ${type}`);
    }

    return cloudChannelConfigToFormChannelValues(id, type, config);
  })).flat();
  const values = {
    name: receiver.name,
    items
  };
  return [values, channelMap];
}
function formValuesToGrafanaReceiver(values, channelMap, defaultChannelValues) {
  var _values$items;

  return {
    name: values.name,
    grafana_managed_receiver_configs: ((_values$items = values.items) !== null && _values$items !== void 0 ? _values$items : []).map(channelValues => {
      const existing = channelMap[channelValues.__id];
      return formChannelValuesToGrafanaChannelConfig(channelValues, defaultChannelValues, values.name, existing);
    })
  };
}
function formValuesToCloudReceiver(values, defaults) {
  const recv = {
    name: values.name
  };
  values.items.forEach(({
    __id,
    type,
    settings,
    sendResolved
  }) => {
    const channel = omitEmptyValues(Object.assign({}, settings, {
      send_resolved: sendResolved !== null && sendResolved !== void 0 ? sendResolved : defaults.sendResolved
    }));
    const configsKey = `${type}_configs`;

    if (!recv[configsKey]) {
      recv[configsKey] = [channel];
    } else {
      recv[configsKey].push(channel);
    }
  });
  return recv;
} // will add new receiver, or replace exisitng one

function updateConfigWithReceiver(config, receiver, replaceReceiverName) {
  var _config$alertmanager_;

  const oldReceivers = (_config$alertmanager_ = config.alertmanager_config.receivers) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : []; // sanity check that name is not duplicated

  if (receiver.name !== replaceReceiverName && !!oldReceivers.find(({
    name
  }) => name === receiver.name)) {
    throw new Error(`Duplicate receiver name ${receiver.name}`);
  } // sanity check that existing receiver exists


  if (replaceReceiverName && !oldReceivers.find(({
    name
  }) => name === replaceReceiverName)) {
    throw new Error(`Expected receiver ${replaceReceiverName} to exist, but did not find it in the config`);
  }

  const updated = Object.assign({}, config, {
    alertmanager_config: Object.assign({}, config.alertmanager_config, {
      receivers: replaceReceiverName ? oldReceivers.map(existingReceiver => existingReceiver.name === replaceReceiverName ? receiver : existingReceiver) : [...oldReceivers, receiver]
    })
  }); // if receiver was renamed, rename it in routes as well

  if (updated.alertmanager_config.route && replaceReceiverName && receiver.name !== replaceReceiverName) {
    updated.alertmanager_config.route = renameReceiverInRoute(updated.alertmanager_config.route, replaceReceiverName, receiver.name);
  }

  return updated;
}

function renameReceiverInRoute(route, oldName, newName) {
  const updated = Object.assign({}, route);

  if (updated.receiver === oldName) {
    updated.receiver = newName;
  }

  if (updated.routes) {
    updated.routes = updated.routes.map(route => renameReceiverInRoute(route, oldName, newName));
  }

  return updated;
}

function cloudChannelConfigToFormChannelValues(id, type, channel) {
  return {
    __id: id,
    type,
    settings: Object.assign({}, channel),
    secureFields: {},
    secureSettings: {},
    sendResolved: channel.send_resolved
  };
}

function grafanaChannelConfigToFormChannelValues(id, channel, notifier) {
  const values = {
    __id: id,
    type: channel.type,
    secureSettings: {},
    settings: Object.assign({}, channel.settings),
    secureFields: Object.assign({}, channel.secureFields),
    disableResolveMessage: channel.disableResolveMessage
  }; // work around https://github.com/grafana/alerting-squad/issues/100

  notifier === null || notifier === void 0 ? void 0 : notifier.options.forEach(option => {
    if (option.secure && values.settings[option.propertyName]) {
      delete values.settings[option.propertyName];
      values.secureFields[option.propertyName] = true;
    }
  });
  return values;
}

function formChannelValuesToGrafanaChannelConfig(values, defaults, name, existing) {
  var _existing$settings, _values$settings, _values$secureSetting, _ref, _values$disableResolv;

  const channel = {
    settings: omitEmptyValues(Object.assign({}, existing && existing.type === values.type ? (_existing$settings = existing.settings) !== null && _existing$settings !== void 0 ? _existing$settings : {} : {}, (_values$settings = values.settings) !== null && _values$settings !== void 0 ? _values$settings : {})),
    secureSettings: (_values$secureSetting = values.secureSettings) !== null && _values$secureSetting !== void 0 ? _values$secureSetting : {},
    type: values.type,
    name,
    disableResolveMessage: (_ref = (_values$disableResolv = values.disableResolveMessage) !== null && _values$disableResolv !== void 0 ? _values$disableResolv : existing === null || existing === void 0 ? void 0 : existing.disableResolveMessage) !== null && _ref !== void 0 ? _ref : defaults.disableResolveMessage
  };

  if (existing) {
    channel.uid = existing.uid;
  }

  return channel;
} // will remove properties that have empty ('', null, undefined) object properties.
// traverses nested objects and arrays as well. in place, mutates the object.
// this is needed because form will submit empty string for not filled in fields,
// but for cloud alertmanager receiver config to use global default value the property must be omitted entirely
// this isn't a perfect solution though. No way for user to intentionally provide an empty string. Will need rethinking later

function omitEmptyValues(obj) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
    obj.forEach(omitEmptyValues);
  } else if (typeof obj === 'object' && obj !== null) {
    Object.entries(obj).forEach(([key, value]) => {
      if (value === '' || value === null || value === undefined) {
        delete obj[key];
      } else {
        omitEmptyValues(value);
      }
    });
  }

  return obj;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/receivers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractNotifierTypeCounts": () => (/* binding */ extractNotifierTypeCounts)
/* harmony export */ });
/* harmony import */ var app_plugins_datasource_alertmanager_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/consts.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

 // extract notifier type name to count map, eg { Slack: 1, Email: 2 }

// name : count
function extractNotifierTypeCounts(receiver, grafanaNotifiers) {
  if (receiver['grafana_managed_receiver_configs']) {
    var _receiver$grafana_man;

    return getGrafanaNotifierTypeCounts((_receiver$grafana_man = receiver.grafana_managed_receiver_configs) !== null && _receiver$grafana_man !== void 0 ? _receiver$grafana_man : [], grafanaNotifiers);
  }

  return getCortexAlertManagerNotifierTypeCounts(receiver);
}

function getCortexAlertManagerNotifierTypeCounts(receiver) {
  return Object.entries(receiver).filter(([key]) => key !== 'grafana_managed_receiver_configs' && key.endsWith('_configs')) // filter out only properties that are alertmanager notifier
  .filter(([_, value]) => Array.isArray(value) && !!value.length) // check that there are actually notifiers of this type configured
  .reduce((acc, [key, value]) => {
    var _receiverTypeNames$ty, _acc$name;

    const type = key.replace('_configs', ''); // remove the `_config` part from the key, making it intto a notifier name

    const name = (_receiverTypeNames$ty = app_plugins_datasource_alertmanager_consts__WEBPACK_IMPORTED_MODULE_0__.receiverTypeNames[type]) !== null && _receiverTypeNames$ty !== void 0 ? _receiverTypeNames$ty : (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type);
    return Object.assign({}, acc, {
      [name]: ((_acc$name = acc[name]) !== null && _acc$name !== void 0 ? _acc$name : 0) + (Array.isArray(value) ? value.length : 1)
    });
  }, {});
}

function getGrafanaNotifierTypeCounts(configs, grafanaNotifiers) {
  return configs.map(recv => recv.type) // extract types from config
  .map(type => {
    var _grafanaNotifiers$fin, _grafanaNotifiers$fin2;

    return (_grafanaNotifiers$fin = (_grafanaNotifiers$fin2 = grafanaNotifiers.find(r => r.type === type)) === null || _grafanaNotifiers$fin2 === void 0 ? void 0 : _grafanaNotifiers$fin2.name) !== null && _grafanaNotifiers$fin !== void 0 ? _grafanaNotifiers$fin : (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type);
  }) // get readable name from notifier cofnig, or if not available, just capitalize
  .reduce((acc, type) => {
    var _acc$type;

    return Object.assign({}, acc, {
      [type]: ((_acc$type = acc[type]) !== null && _acc$type !== void 0 ? _acc$type : 0) + 1
    });
  }, {});
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/templates.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ensureDefine": () => (/* binding */ ensureDefine)
/* harmony export */ });
function ensureDefine(templateName, templateContent) {
  // notification template content must be wrapped in {{ define "name" }} tag,
  // but this is not obvious because user also has to provide name separately in the form.
  // so if user does not manually add {{ define }} tag, we do it automatically
  let content = templateContent.trim();

  if (!content.match(/\{\{\s*define/)) {
    const indentedContent = content.split('\n').map(line => '  ' + line).join('\n');
    content = `{{ define "${templateName}" }}\n${indentedContent}\n{{ end }}`;
  }

  return content;
}

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/consts.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiverTypeNames": () => (/* binding */ receiverTypeNames)
/* harmony export */ });
const receiverTypeNames = {
  pagerduty: 'PagerDuty',
  pushover: 'Pushover',
  slack: 'Slack',
  opsgenie: 'OpsGenie',
  webhook: 'Webhook',
  victorops: 'VictorOps',
  wechat: 'WeChat'
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEM7QUFNdkRDLEVBQUFBLFNBQVMsRUFBRSxXQU40QztBQU92REMsRUFBQUEsTUFBTSxFQUFFO0FBUCtDLENBQWxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9ob29rcy91c2VDbGVhbnVwLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvTm90aWZpY2F0aW9uc0xpc3RQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1JlY2VpdmVycy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BdXRob3JpemUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvRWRpdFJlY2VpdmVyVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9FZGl0VGVtcGxhdGVWaWV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL0dsb2JhbENvbmZpZ0Zvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvTmV3UmVjZWl2ZXJWaWV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL05ld1RlbXBsYXRlVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9SZWNlaXZlcnNBbmRUZW1wbGF0ZXNWaWV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL1JlY2VpdmVyc1NlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvUmVjZWl2ZXJzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvVGVtcGxhdGVGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL1RlbXBsYXRlc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vQ2hhbm5lbE9wdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9DaGFubmVsU3ViRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL0Nsb3VkQ29tbW9uQ2hhbm5lbFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vQ2xvdWRSZWNlaXZlckZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9Db2xsYXBzaWJsZVNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9HcmFmYW5hQ29tbW9uQ2hhbm5lbFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vR3JhZmFuYVJlY2VpdmVyRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL1JlY2VpdmVyRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL1Rlc3RDb250YWN0UG9pbnRNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL2ZpZWxkcy9EZWxldGVkU3ViZm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL2ZpZWxkcy9LZXlWYWx1ZU1hcElucHV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vZmllbGRzL09wdGlvbkZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vZmllbGRzL1N0cmluZ0FycmF5SW5wdXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9maWVsZHMvU3ViZm9ybUFycmF5RmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9maWVsZHMvU3ViZm9ybUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vZmllbGRzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQW5ub3RhdGlvbktleUlucHV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQW5ub3RhdGlvbnNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0xhYmVsc0ZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvU2VsZWN0V0l0aEFkZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FjdGlvbkljb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUNvbnRyb2xsZWRGaWVsZEFycmF5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvc3R5bGVzL3RhYmxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvY2xvdWQtYWxlcnRtYW5hZ2VyLW5vdGlmaWVyLXR5cGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvcmVjZWl2ZXItZm9ybS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL3JlY2VpdmVycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL3RlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL2NvbnN0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiwgU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYW5VcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbGVhbnVwPFQ+KHN0YXRlU2VsZWN0b3I6IFN0YXRlU2VsZWN0b3I8VD4pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvL2JpdCBvZiBhIGhhY2sgdG8gdW5idXJkZW4gdXNlciBmcm9tIGhhdmluZyB0byB3cmFwIHN0YXRlU2VsY2V0b3IgaW4gYSB1c2VDYWxsYmFjay4gT3RoZXJ3aXNlIGNsZWFudXAgd291bGQgaGFwcGVuIG9uIGV2ZXJ5IHJlbmRlclxuICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzdGF0ZVNlbGVjdG9yKTtcbiAgc2VsZWN0b3JSZWYuY3VycmVudCA9IHN0YXRlU2VsZWN0b3I7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yOiBzZWxlY3RvclJlZi5jdXJyZW50IH0pKTtcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTtcbn1cbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgdXNlTmF2TW9kZWwgPSAoaWQ6IHN0cmluZyk6IE5hdk1vZGVsID0+IHtcbiAgY29uc3QgbmF2SW5kZXggPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KTtcbiAgcmV0dXJuIGdldE5hdk1vZGVsKG5hdkluZGV4LCBpZCk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVtcHR5TGlzdENUQSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0VtcHR5TGlzdENUQS9FbXB0eUxpc3RDVEEnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlQXN5bmNGbiB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBhcHBFdmVudHMgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IHVzZU5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBCdXR0b24sIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydE5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC90eXBlcy9hbGVydGluZyc7XG5pbXBvcnQgeyBTaG93Q29uZmlybU1vZGFsRXZlbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ldmVudHMnO1xuXG5jb25zdCBOb3RpZmljYXRpb25zTGlzdFBhZ2U6IEZDID0gKCkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZU5hdk1vZGVsKCdjaGFubmVscycpO1xuXG4gIGNvbnN0IFtub3RpZmljYXRpb25zLCBzZXROb3RpZmljYXRpb25zXSA9IHVzZVN0YXRlPEFsZXJ0Tm90aWZpY2F0aW9uW10+KFtdKTtcblxuICBjb25zdCBnZXROb3RpZmljYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnNgKTtcbiAgfTtcblxuICBjb25zdCBbc3RhdGUsIGZldGNoTm90aWZpY2F0aW9uc10gPSB1c2VBc3luY0ZuKGdldE5vdGlmaWNhdGlvbnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoTm90aWZpY2F0aW9ucygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Tm90aWZpY2F0aW9ucyhyZXMpO1xuICAgIH0pO1xuICB9LCBbZmV0Y2hOb3RpZmljYXRpb25zXSk7XG5cbiAgY29uc3QgZGVsZXRlTm90aWZpY2F0aW9uID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBhcHBFdmVudHMucHVibGlzaChcbiAgICAgIG5ldyBTaG93Q29uZmlybU1vZGFsRXZlbnQoe1xuICAgICAgICB0aXRsZTogJ0RlbGV0ZScsXG4gICAgICAgIHRleHQ6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBub3RpZmljYXRpb24gY2hhbm5lbD8nLFxuICAgICAgICB0ZXh0MjogYERlbGV0aW5nIHRoaXMgbm90aWZpY2F0aW9uIGNoYW5uZWwgd2lsbCBub3QgZGVsZXRlIGZyb20gYWxlcnRzIGFueSByZWZlcmVuY2VzIHRvIGl0YCxcbiAgICAgICAgaWNvbjogJ3RyYXNoLWFsdCcsXG4gICAgICAgIGNvbmZpcm1UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgeWVzVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgIG9uQ29uZmlybTogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGRlbGV0ZU5vdGlmaWNhdGlvbkNvbmZpcm1lZChpZCk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTm90aWZpY2F0aW9uQ29uZmlybWVkID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25zID0gYXdhaXQgZmV0Y2hOb3RpZmljYXRpb25zKCk7XG4gICAgc2V0Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAge3N0YXRlLmVycm9yICYmIDxwPntzdGF0ZS5lcnJvcn08L3A+fVxuICAgICAgICB7ISFub3RpZmljYXRpb25zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBpY29uPVwiY2hhbm5lbC1hZGRcIiBocmVmPVwiYWxlcnRpbmcvbm90aWZpY2F0aW9uL25ld1wiPlxuICAgICAgICAgICAgICAgIE5ldyBjaGFubmVsXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmaWx0ZXItdGFibGUtLWhvdmVyXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgbWluV2lkdGg6ICcyMDBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBtaW5XaWR0aDogJzEwMHB4JyB9fT5UeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzElJyB9fT48L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bm90aWZpY2F0aW9uLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgYWxlcnRpbmcvbm90aWZpY2F0aW9uLyR7bm90aWZpY2F0aW9uLmlkfS9lZGl0YH0+e25vdGlmaWNhdGlvbi5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgYWxlcnRpbmcvbm90aWZpY2F0aW9uLyR7bm90aWZpY2F0aW9uLmlkfS9lZGl0YH0+e25vdGlmaWNhdGlvbi50eXBlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi5pc0RlZmF1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshKG5vdGlmaWNhdGlvbnMubGVuZ3RoIHx8IHN0YXRlLmxvYWRpbmcpICYmIChcbiAgICAgICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgICAgICB0aXRsZT1cIlRoZXJlIGFyZSBubyBub3RpZmljYXRpb24gY2hhbm5lbHMgZGVmaW5lZCB5ZXRcIlxuICAgICAgICAgICAgYnV0dG9uSWNvbj1cImNoYW5uZWwtYWRkXCJcbiAgICAgICAgICAgIGJ1dHRvbkxpbms9XCJhbGVydGluZy9ub3RpZmljYXRpb24vbmV3XCJcbiAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiQWRkIGNoYW5uZWxcIlxuICAgICAgICAgICAgcHJvVGlwPVwiWW91IGNhbiBpbmNsdWRlIGltYWdlcyBpbiB5b3VyIGFsZXJ0IG5vdGlmaWNhdGlvbnMuXCJcbiAgICAgICAgICAgIHByb1RpcExpbms9XCJodHRwOi8vZG9jcy5ncmFmYW5hLm9yZy9hbGVydGluZy9ub3RpZmljYXRpb25zL1wiXG4gICAgICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJMZWFybiBtb3JlXCJcbiAgICAgICAgICAgIHByb1RpcFRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zTGlzdFBhZ2U7XG4iLCJpbXBvcnQgeyBBbGVydCwgTG9hZGluZ1BsYWNlaG9sZGVyLCB3aXRoRXJyb3JCb3VuZGFyeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZWRpcmVjdCwgUm91dGUsIFJvdXRlQ2hpbGRyZW5Qcm9wcywgU3dpdGNoLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQWxlcnRpbmdQYWdlV3JhcHBlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydGluZ1BhZ2VXcmFwcGVyJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydE1hbmFnZXJQaWNrZXInO1xuaW1wb3J0IHsgRWRpdFJlY2VpdmVyVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9yZWNlaXZlcnMvRWRpdFJlY2VpdmVyVmlldyc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9FZGl0VGVtcGxhdGVWaWV3JztcbmltcG9ydCB7IEdsb2JhbENvbmZpZ0Zvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVjZWl2ZXJzL0dsb2JhbENvbmZpZ0Zvcm0nO1xuaW1wb3J0IHsgTmV3UmVjZWl2ZXJWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9OZXdSZWNlaXZlclZpZXcnO1xuaW1wb3J0IHsgTmV3VGVtcGxhdGVWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9OZXdUZW1wbGF0ZVZpZXcnO1xuaW1wb3J0IHsgUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9yZWNlaXZlcnMvUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiwgZmV0Y2hHcmFmYW5hTm90aWZpZXJzQWN0aW9uIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi91dGlscy9yZWR1eCc7XG5cbmNvbnN0IFJlY2VpdmVyczogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgaXNSb290ID0gbG9jYXRpb24ucGF0aG5hbWUuZW5kc1dpdGgoJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyk7XG5cbiAgY29uc3QgY29uZmlnUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFtQ29uZmlncyk7XG5cbiAgY29uc3Qge1xuICAgIHJlc3VsdDogY29uZmlnLFxuICAgIGxvYWRpbmcsXG4gICAgZXJyb3IsXG4gIH0gPSAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBjb25maWdSZXF1ZXN0c1thbGVydE1hbmFnZXJTb3VyY2VOYW1lXSkgfHwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICBjb25zdCByZWNlaXZlclR5cGVzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ncmFmYW5hTm90aWZpZXJzKTtcblxuICBjb25zdCBzaG91bGRMb2FkQ29uZmlnID0gaXNSb290IHx8ICFjb25maWc7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBzaG91bGRMb2FkQ29uZmlnKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbihhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSk7XG4gICAgfVxuICB9LCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgZGlzcGF0Y2gsIHNob3VsZExvYWRDb25maWddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgJiZcbiAgICAgICEocmVjZWl2ZXJUeXBlcy5yZXN1bHQgfHwgcmVjZWl2ZXJUeXBlcy5sb2FkaW5nIHx8IHJlY2VpdmVyVHlwZXMuZXJyb3IpXG4gICAgKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEdyYWZhbmFOb3RpZmllcnNBY3Rpb24oKSk7XG4gICAgfVxuICB9LCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgZGlzcGF0Y2gsIHJlY2VpdmVyVHlwZXNdKTtcblxuICBjb25zdCBkaXNhYmxlQW1TZWxlY3QgPSAhaXNSb290O1xuXG4gIGlmICghYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvYWxlcnRpbmcvbm90aWZpY2F0aW9uc1wiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRpbmdQYWdlV3JhcHBlciBwYWdlSWQ9XCJyZWNlaXZlcnNcIj5cbiAgICAgIDxBbGVydE1hbmFnZXJQaWNrZXJcbiAgICAgICAgY3VycmVudD17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVBbVNlbGVjdH1cbiAgICAgICAgb25DaGFuZ2U9e3NldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAvPlxuICAgICAge2Vycm9yICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiB0aXRsZT1cIkVycm9yIGxvYWRpbmcgQWxlcnRtYW5hZ2VyIGNvbmZpZ1wiPlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge2xvYWRpbmcgJiYgIWNvbmZpZyAmJiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJsb2FkaW5nIGNvbmZpZ3VyYXRpb24uLi5cIiAvPn1cbiAgICAgIHtjb25maWcgJiYgIWVycm9yICYmIChcbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3Q9e3RydWV9IHBhdGg9XCIvYWxlcnRpbmcvbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgPFJlY2VpdmVyc0FuZFRlbXBsYXRlc1ZpZXcgY29uZmlnPXtjb25maWd9IGFsZXJ0TWFuYWdlck5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgZXhhY3Q9e3RydWV9IHBhdGg9XCIvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy90ZW1wbGF0ZXMvbmV3XCI+XG4gICAgICAgICAgICA8TmV3VGVtcGxhdGVWaWV3IGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0PXt0cnVlfSBwYXRoPVwiL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvdGVtcGxhdGVzLzpuYW1lL2VkaXRcIj5cbiAgICAgICAgICAgIHsoeyBtYXRjaCB9OiBSb3V0ZUNoaWxkcmVuUHJvcHM8eyBuYW1lOiBzdHJpbmcgfT4pID0+XG4gICAgICAgICAgICAgIG1hdGNoPy5wYXJhbXMubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgPEVkaXRUZW1wbGF0ZVZpZXdcbiAgICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlTmFtZT17ZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoPy5wYXJhbXMubmFtZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0PXt0cnVlfSBwYXRoPVwiL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvcmVjZWl2ZXJzL25ld1wiPlxuICAgICAgICAgICAgPE5ld1JlY2VpdmVyVmlldyBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdD17dHJ1ZX0gcGF0aD1cIi9hbGVydGluZy9ub3RpZmljYXRpb25zL3JlY2VpdmVycy86bmFtZS9lZGl0XCI+XG4gICAgICAgICAgICB7KHsgbWF0Y2ggfTogUm91dGVDaGlsZHJlblByb3BzPHsgbmFtZTogc3RyaW5nIH0+KSA9PlxuICAgICAgICAgICAgICBtYXRjaD8ucGFyYW1zLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgIDxFZGl0UmVjZWl2ZXJWaWV3XG4gICAgICAgICAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgICAgICAgICAgICByZWNlaXZlck5hbWU9e2RlY29kZVVSSUNvbXBvbmVudChtYXRjaD8ucGFyYW1zLm5hbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdD17dHJ1ZX0gcGF0aD1cIi9hbGVydGluZy9ub3RpZmljYXRpb25zL2dsb2JhbC1jb25maWdcIj5cbiAgICAgICAgICAgIDxHbG9iYWxDb25maWdGb3JtIGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgKX1cbiAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRXJyb3JCb3VuZGFyeShSZWNlaXZlcnMsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG50eXBlIFByb3BzID0ge1xuICBhY3Rpb25zOiBBY2Nlc3NDb250cm9sQWN0aW9uW107XG4gIGZhbGxiYWNrPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBBdXRob3JpemU6IEZDPFByb3BzPiA9ICh7IGFjdGlvbnMsIGNoaWxkcmVuLCBmYWxsYmFjayA9IHRydWUgfSkgPT4ge1xuICBpZiAoYWN0aW9ucy5zb21lKChhY3Rpb24pID0+IGNvbnRleHRTcnYuaGFzQWNjZXNzKGFjdGlvbiwgZmFsbGJhY2spKSkge1xuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBJbmZvQm94IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ2xvdWRSZWNlaXZlckZvcm0gfSBmcm9tICcuL2Zvcm0vQ2xvdWRSZWNlaXZlckZvcm0nO1xuaW1wb3J0IHsgR3JhZmFuYVJlY2VpdmVyRm9ybSB9IGZyb20gJy4vZm9ybS9HcmFmYW5hUmVjZWl2ZXJGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVjZWl2ZXJOYW1lOiBzdHJpbmc7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBFZGl0UmVjZWl2ZXJWaWV3OiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIHJlY2VpdmVyTmFtZSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHJlY2VpdmVyID0gY29uZmlnLmFsZXJ0bWFuYWdlcl9jb25maWcucmVjZWl2ZXJzPy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcmVjZWl2ZXJOYW1lKTtcbiAgaWYgKCFyZWNlaXZlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5mb0JveCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJSZWNlaXZlciBub3QgZm91bmRcIj5cbiAgICAgICAgU29ycnksIHRoaXMgcmVjZWl2ZXIgZG9lcyBub3Qgc2VlbSB0byBleGl0LlxuICAgICAgPC9JbmZvQm94PlxuICAgICk7XG4gIH1cblxuICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgIHJldHVybiA8R3JhZmFuYVJlY2VpdmVyRm9ybSBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gZXhpc3Rpbmc9e3JlY2VpdmVyfSAvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPENsb3VkUmVjZWl2ZXJGb3JtIGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBleGlzdGluZz17cmVjZWl2ZXJ9IC8+O1xuICB9XG59O1xuIiwiaW1wb3J0IHsgSW5mb0JveCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRlbXBsYXRlRm9ybSB9IGZyb20gJy4vVGVtcGxhdGVGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGVtcGxhdGVOYW1lOiBzdHJpbmc7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBFZGl0VGVtcGxhdGVWaWV3OiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIHRlbXBsYXRlTmFtZSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlX2ZpbGVzPy5bdGVtcGxhdGVOYW1lXTtcbiAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5mb0JveCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJUZW1wbGF0ZSBub3QgZm91bmRcIj5cbiAgICAgICAgU29ycnksIHRoaXMgdGVtcGxhdGUgZG9lcyBub3Qgc2VlbSB0byBleGl0LlxuICAgICAgPC9JbmZvQm94PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8VGVtcGxhdGVGb3JtXG4gICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICBleGlzdGluZz17eyBuYW1lOiB0ZW1wbGF0ZU5hbWUsIGNvbnRlbnQ6IHRlbXBsYXRlIH19XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyB1c2VDbGVhbnVwIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cCc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IHVzZUZvcm0sIEZvcm1Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBnbG9iYWxDb25maWdPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xvdWQtYWxlcnRtYW5hZ2VyLW5vdGlmaWVyLXR5cGVzJztcbmltcG9ydCB7IE9wdGlvbkZpZWxkIH0gZnJvbSAnLi9mb3JtL2ZpZWxkcy9PcHRpb25GaWVsZCc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgb21pdEVtcHR5VmFsdWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVjZWl2ZXItZm9ybSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxudHlwZSBGb3JtVmFsdWVzID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZXM6IEZvcm1WYWx1ZXMgPSB7XG4gIHNtdHBfcmVxdWlyZV90bHM6IHRydWUsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29uZmlnRm9ybTogRkM8UHJvcHM+ID0gKHsgY29uZmlnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnNhdmVBTUNvbmZpZyk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IgfSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2F2ZUFNQ29uZmlnKTtcbiAgY29uc3QgcmVhZE9ubHkgPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGZvcm1BUEkgPSB1c2VGb3JtPEZvcm1WYWx1ZXM+KHtcbiAgICAvLyBtYWtpbmcgYSBjb3B5IGhlcmUgYmVhY3VzZSByZWFjdC1ob29rLWZvcm0gd2lsbCBtdXRhdGUgdGhlc2UsIGFuZCBicmVhayBpZiB0aGUgb2JqZWN0IGlzIGZyb3plbi4gZm9yIHJlYWwuXG4gICAgZGVmYXVsdFZhbHVlczogSlNPTi5wYXJzZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgLi4uKGNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLmdsb2JhbCA/PyB7fSksXG4gICAgICB9KVxuICAgICksXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gZm9ybUFQSTtcblxuICBjb25zdCBvblN1Ym1pdENhbGxiYWNrID0gKHZhbHVlczogRm9ybVZhbHVlcykgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uKHtcbiAgICAgICAgbmV3Q29uZmlnOiB7XG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIGFsZXJ0bWFuYWdlcl9jb25maWc6IHtcbiAgICAgICAgICAgIC4uLmNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLFxuICAgICAgICAgICAgZ2xvYmFsOiBvbWl0RW1wdHlWYWx1ZXModmFsdWVzKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvbGRDb25maWc6IGNvbmZpZyxcbiAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6ICdHbG9iYWwgY29uZmlnIHVwZGF0ZWQuJyxcbiAgICAgICAgcmVkaXJlY3RQYXRoOiBtYWtlQU1MaW5rKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybUFQSX0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0Q2FsbGJhY2spfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9Pkdsb2JhbCBjb25maWc8L2g0PlxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBzYXZpbmcgcmVjZWl2ZXJcIj5cbiAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvcil9XG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgKX1cbiAgICAgICAge2dsb2JhbENvbmZpZ09wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICA8T3B0aW9uRmllbGRcbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlc1tvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgIGtleT17b3B0aW9uLnByb3BlcnR5TmFtZX1cbiAgICAgICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yc1tvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgIHBhdGhQcmVmaXg9eycnfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt0cnVlfSBpY29uPVwiZmEgZmEtc3Bpbm5lclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFNhdmluZy4uLlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7IWxvYWRpbmcgJiYgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBnbG9iYWwgY29uZmlnPC9CdXR0b24+fVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgaHJlZj17bWFrZUFNTGluaygnYWxlcnRpbmcvbm90aWZpY2F0aW9ucycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Gb3JtUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGhlYWRpbmc6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IENsb3VkUmVjZWl2ZXJGb3JtIH0gZnJvbSAnLi9mb3JtL0Nsb3VkUmVjZWl2ZXJGb3JtJztcbmltcG9ydCB7IEdyYWZhbmFSZWNlaXZlckZvcm0gfSBmcm9tICcuL2Zvcm0vR3JhZmFuYVJlY2VpdmVyRm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOZXdSZWNlaXZlclZpZXc6IEZDPFByb3BzPiA9ICh7IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSB7XG4gICAgcmV0dXJuIDxHcmFmYW5hUmVjZWl2ZXJGb3JtIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IGNvbmZpZz17Y29uZmlnfSAvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPENsb3VkUmVjZWl2ZXJGb3JtIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IGNvbmZpZz17Y29uZmlnfSAvPjtcbiAgfVxufTtcbiIsImltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRlbXBsYXRlRm9ybSB9IGZyb20gJy4vVGVtcGxhdGVGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE5ld1RlbXBsYXRlVmlldzogRkM8UHJvcHM+ID0gKHsgY29uZmlnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pID0+IHtcbiAgcmV0dXJuIDxUZW1wbGF0ZUZvcm0gY29uZmlnPXtjb25maWd9IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSwgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uL0F1dGhvcml6ZSc7XG5pbXBvcnQgeyBSZWNlaXZlcnNUYWJsZSB9IGZyb20gJy4vUmVjZWl2ZXJzVGFibGUnO1xuaW1wb3J0IHsgVGVtcGxhdGVzVGFibGUgfSBmcm9tICcuL1RlbXBsYXRlc1RhYmxlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlck5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFJlY2VpdmVyc0FuZFRlbXBsYXRlc1ZpZXc6IEZDPFByb3BzPiA9ICh7IGNvbmZpZywgYWxlcnRNYW5hZ2VyTmFtZSB9KSA9PiB7XG4gIGNvbnN0IGlzQ2xvdWQgPSBhbGVydE1hbmFnZXJOYW1lICE9PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGlzVmFuaWxsYUFNID0gaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UoYWxlcnRNYW5hZ2VyTmFtZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshaXNWYW5pbGxhQU0gJiYgPFRlbXBsYXRlc1RhYmxlIGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJOYW1lPXthbGVydE1hbmFnZXJOYW1lfSAvPn1cbiAgICAgIDxSZWNlaXZlcnNUYWJsZSBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyTmFtZT17YWxlcnRNYW5hZ2VyTmFtZX0gLz5cbiAgICAgIHtpc0Nsb3VkICYmIChcbiAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbQWNjZXNzQ29udHJvbEFjdGlvbi5BbGVydGluZ05vdGlmaWNhdGlvbnNFeHRlcm5hbFdyaXRlXX0+XG4gICAgICAgICAgPEFsZXJ0IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259IHNldmVyaXR5PVwiaW5mb1wiIHRpdGxlPVwiR2xvYmFsIGNvbmZpZyBmb3IgY29udGFjdCBwb2ludHNcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBGb3IgZWFjaCBleHRlcm5hbCBBbGVydG1hbmFnZXIgeW91IGNhbiBkZWZpbmUgZ2xvYmFsIHNldHRpbmdzLCBsaWtlIHNlcnZlciBhZGRyZXNzZXMsIHVzZXJuYW1lcyBhbmRcbiAgICAgICAgICAgICAgcGFzc3dvcmQsIGZvciBhbGwgdGhlIHN1cHBvcnRlZCBjb250YWN0IHBvaW50cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e21ha2VBTUxpbmsoJ2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvZ2xvYmFsLWNvbmZpZycsIGFsZXJ0TWFuYWdlck5hbWUpfSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtpc1ZhbmlsbGFBTSA/ICdWaWV3IGdsb2JhbCBjb25maWcnIDogJ0VkaXQgZ2xvYmFsIGNvbmZpZyd9XG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBzZWN0aW9uOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFkZEJ1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIGFkZEJ1dHRvblRvOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc2hvd0J1dHRvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSZWNlaXZlcnNTZWN0aW9uOiBGQzxQcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYWRkQnV0dG9uTGFiZWwsXG4gIGFkZEJ1dHRvblRvLFxuICBjaGlsZHJlbixcbiAgc2hvd0J1dHRvbiA9IHRydWUsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5oZWFkaW5nLCBjbGFzc05hbWUpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd0J1dHRvbiAmJiAoXG4gICAgICAgICAgPExpbmsgdG89e2FkZEJ1dHRvblRvfT5cbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBsdXNcIj57YWRkQnV0dG9uTGFiZWx9PC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGhlYWRpbmc6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYCxcbiAgZGVzY3JpcHRpb246IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBCdXR0b24sIENvbmZpcm1Nb2RhbCwgTW9kYWwsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXRBbGVydFRhYmxlU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RhYmxlJztcbmltcG9ydCB7IGV4dHJhY3ROb3RpZmllclR5cGVDb3VudHMgfSBmcm9tICcuLi8uLi91dGlscy9yZWNlaXZlcnMnO1xuaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gJy4uL3J1bGVzL0FjdGlvbkljb24nO1xuaW1wb3J0IHsgUmVjZWl2ZXJzU2VjdGlvbiB9IGZyb20gJy4vUmVjZWl2ZXJzU2VjdGlvbic7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgaXNSZWNlaXZlclVzZWQgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkZWxldGVSZWNlaXZlckFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXV0aG9yaXplJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBSZWNlaXZlcnNUYWJsZTogRkM8UHJvcHM+ID0gKHsgY29uZmlnLCBhbGVydE1hbmFnZXJOYW1lIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB0YWJsZVN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0QWxlcnRUYWJsZVN0eWxlcyk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaXNWYW5pbGxhQU0gPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJOYW1lKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyTmFtZSk7XG4gIGNvbnN0IGdyYWZhbmFOb3RpZmllcnMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdyYWZhbmFOb3RpZmllcnMpO1xuXG4gIC8vIHJlY2VpdmVyIG5hbWUgc2xhdGVkIGZvciBkZWxldGlvbi4gSWYgdGhpcyBpcyBzZXQsIGEgY29uZmlybWF0aW9uIG1vZGFsIGlzIHNob3duLiBJZiB1c2VyIGFwcHJvdmVzLCB0aGlzIHJlY2VpdmVyIGlzIGRlbGV0ZWRcbiAgY29uc3QgW3JlY2VpdmVyVG9EZWxldGUsIHNldFJlY2VpdmVyVG9EZWxldGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbc2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwsIHNldFNob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNsaWNrRGVsZXRlUmVjZWl2ZXIgPSAocmVjZWl2ZXJOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBpZiAoaXNSZWNlaXZlclVzZWQocmVjZWl2ZXJOYW1lLCBjb25maWcpKSB7XG4gICAgICBzZXRTaG93Q2Fubm90RGVsZXRlUmVjZWl2ZXJNb2RhbCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UmVjZWl2ZXJUb0RlbGV0ZShyZWNlaXZlck5hbWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVSZWNlaXZlciA9ICgpID0+IHtcbiAgICBpZiAocmVjZWl2ZXJUb0RlbGV0ZSkge1xuICAgICAgZGlzcGF0Y2goZGVsZXRlUmVjZWl2ZXJBY3Rpb24ocmVjZWl2ZXJUb0RlbGV0ZSwgYWxlcnRNYW5hZ2VyTmFtZSkpO1xuICAgIH1cbiAgICBzZXRSZWNlaXZlclRvRGVsZXRlKHVuZGVmaW5lZCk7XG4gIH07XG5cbiAgY29uc3Qgcm93cyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLnJlY2VpdmVycz8ubWFwKChyZWNlaXZlcikgPT4gKHtcbiAgICAgICAgbmFtZTogcmVjZWl2ZXIubmFtZSxcbiAgICAgICAgdHlwZXM6IE9iamVjdC5lbnRyaWVzKGV4dHJhY3ROb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXIsIGdyYWZhbmFOb3RpZmllcnMucmVzdWx0ID8/IFtdKSkubWFwKFxuICAgICAgICAgIChbdHlwZSwgY291bnRdKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBgJHt0eXBlfSAoJHtjb3VudH0pYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgIH0pKSA/PyBbXSxcbiAgICBbY29uZmlnLCBncmFmYW5hTm90aWZpZXJzLnJlc3VsdF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWNlaXZlcnNTZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufVxuICAgICAgdGl0bGU9XCJDb250YWN0IHBvaW50c1wiXG4gICAgICBkZXNjcmlwdGlvbj1cIkRlZmluZSB3aGVyZSB0aGUgbm90aWZpY2F0aW9ucyB3aWxsIGJlIHNlbnQgdG8sIGZvciBleGFtcGxlIGVtYWlsIG9yIFNsYWNrLlwiXG4gICAgICBzaG93QnV0dG9uPXshaXNWYW5pbGxhQU0gJiYgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLmNyZWF0ZSl9XG4gICAgICBhZGRCdXR0b25MYWJlbD1cIk5ldyBjb250YWN0IHBvaW50XCJcbiAgICAgIGFkZEJ1dHRvblRvPXttYWtlQU1MaW5rKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9yZWNlaXZlcnMvbmV3JywgYWxlcnRNYW5hZ2VyTmFtZSl9XG4gICAgPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dGFibGVTdHlsZXMudGFibGV9IGRhdGEtdGVzdGlkPVwicmVjZWl2ZXJzLXRhYmxlXCI+XG4gICAgICAgIDxjb2xncm91cD5cbiAgICAgICAgICA8Y29sIC8+XG4gICAgICAgICAgPGNvbCAvPlxuICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICA8Y29sIC8+XG4gICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q29udGFjdCBwb2ludCBuYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7IXJvd3MubGVuZ3RoICYmIChcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3RhYmxlU3R5bGVzLmV2ZW5Sb3d9PlxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+Tm8gcmVjZWl2ZXJzIGRlZmluZWQuPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cm93cy5tYXAoKHJlY2VpdmVyLCBpZHgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e3JlY2VpdmVyLm5hbWV9IGNsYXNzTmFtZT17aWR4ICUgMiA9PT0gMCA/IHRhYmxlU3R5bGVzLmV2ZW5Sb3cgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICA8dGQ+e3JlY2VpdmVyLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntyZWNlaXZlci50eXBlcy5qb2luKCcsICcpfTwvdGQ+XG4gICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuYWN0aW9uc0NlbGx9PlxuICAgICAgICAgICAgICAgICAgeyFpc1ZhbmlsbGFBTSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMudXBkYXRlXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXttYWtlQU1MaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9yZWNlaXZlcnMvJHtlbmNvZGVVUklDb21wb25lbnQocmVjZWl2ZXIubmFtZSl9L2VkaXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkVkaXQgY29udGFjdCBwb2ludFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy5kZWxldGVdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEZWxldGVSZWNlaXZlcihyZWNlaXZlci5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkRlbGV0ZSBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7aXNWYW5pbGxhQU0gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGVdfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJ2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXttYWtlQU1MaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvcmVjZWl2ZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlY2VpdmVyLm5hbWUpfS9lZGl0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJWaWV3IGNvbnRhY3QgcG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImZpbGUtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIHshIXNob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsICYmIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgIHRpdGxlPVwiQ2Fubm90IGRlbGV0ZSBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQ29udGFjdCBwb2ludCBjYW5ub3QgYmUgZGVsZXRlZCBiZWNhdXNlIGl0IGlzIHVzZWQgaW4gbW9yZSBwb2xpY2llcy4gUGxlYXNlIHVwZGF0ZSBvciBkZWxldGUgdGhlc2UgcG9saWNpZXNcbiAgICAgICAgICAgIGZpcnN0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwoZmFsc2UpfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuICAgICAgeyEhcmVjZWl2ZXJUb0RlbGV0ZSAmJiAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgdGl0bGU9XCJEZWxldGUgY29udGFjdCBwb2ludFwiXG4gICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgY29udGFjdCBwb2ludCBcIiR7cmVjZWl2ZXJUb0RlbGV0ZX1cIj9gfVxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlUmVjZWl2ZXJ9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRSZWNlaXZlclRvRGVsZXRlKHVuZGVmaW5lZCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUmVjZWl2ZXJzU2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgc2VjdGlvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBGaWVsZCwgSW5wdXQsIExpbmtCdXR0b24sIFRleHRBcmVhLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybSwgVmFsaWRhdGUgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgZW5zdXJlRGVmaW5lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGVtcGxhdGVzJztcblxuaW50ZXJmYWNlIFZhbHVlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5jb25zdCBkZWZhdWx0czogVmFsdWVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIG5hbWU6ICcnLFxuICBjb250ZW50OiAnJyxcbn0pO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBleGlzdGluZz86IFZhbHVlcztcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlRm9ybTogRkM8UHJvcHM+ID0gKHsgZXhpc3RpbmcsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHVzZUNsZWFudXAoKHN0YXRlKSA9PiBzdGF0ZS51bmlmaWVkQWxlcnRpbmcuc2F2ZUFNQ29uZmlnKTtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yIH0gPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhdmVBTUNvbmZpZyk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlczogVmFsdWVzKSA9PiB7XG4gICAgLy8gd3JhcCBjb250ZW50IGluIFwiZGVmaW5lXCIgaWYgaXQncyBub3QgYWxyZWFkeSB3cmFwcGVkLCBpbiBjYXNlIHVzZXIgZGlkIG5vdCBkbyBpdC9cbiAgICAvLyBpdCdzIG5vdCBvYnZpb3VzIHRoYXQgdGhpcyBpcyBuZWVkZWQgZm9yIHRlbXBsYXRlIHRvIHdvcmtcbiAgICBjb25zdCBjb250ZW50ID0gZW5zdXJlRGVmaW5lKHZhbHVlcy5uYW1lLCB2YWx1ZXMuY29udGVudCk7XG5cbiAgICAvLyBhZGQgbmV3IHRlbXBsYXRlIHRvIHRlbXBsYXRlIG1hcFxuICAgIGNvbnN0IHRlbXBsYXRlX2ZpbGVzID0ge1xuICAgICAgLi4uY29uZmlnLnRlbXBsYXRlX2ZpbGVzLFxuICAgICAgW3ZhbHVlcy5uYW1lXTogY29udGVudCxcbiAgICB9O1xuXG4gICAgLy8gZGVsZXRlIGV4aXN0aW5nIG9uZSAoaWYgbmFtZSBjaGFuZ2VkLCBvdGhlcndpc2UgaXQgd2FzIG92ZXJ3cml0dGVuIGluIHByZXZpb3VzIHN0ZXApXG4gICAgaWYgKGV4aXN0aW5nICYmIGV4aXN0aW5nLm5hbWUgIT09IHZhbHVlcy5uYW1lKSB7XG4gICAgICBkZWxldGUgdGVtcGxhdGVfZmlsZXNbZXhpc3RpbmcubmFtZV07XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIG5hbWUgZm9yIHRoZSB0ZW1wbGF0ZSBpcyBjb25maWd1cmVkIG9uIHRoZSBhbGVydG1hbmFnZXIgY29uZmlnIG9iamVjdFxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IFtcbiAgICAgIC4uLihjb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZy50ZW1wbGF0ZXMgPz8gW10pLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gZXhpc3Rpbmc/Lm5hbWUpLFxuICAgICAgdmFsdWVzLm5hbWUsXG4gICAgXTtcblxuICAgIGNvbnN0IG5ld0NvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnID0ge1xuICAgICAgdGVtcGxhdGVfZmlsZXMsXG4gICAgICBhbGVydG1hbmFnZXJfY29uZmlnOiB7XG4gICAgICAgIC4uLmNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLFxuICAgICAgICB0ZW1wbGF0ZXMsXG4gICAgICB9LFxuICAgIH07XG4gICAgZGlzcGF0Y2goXG4gICAgICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oe1xuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICAgICAgICBuZXdDb25maWcsXG4gICAgICAgIG9sZENvbmZpZzogY29uZmlnLFxuICAgICAgICBzdWNjZXNzTWVzc2FnZTogJ1RlbXBsYXRlIHNhdmVkLicsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08VmFsdWVzPih7XG4gICAgbW9kZTogJ29uU3VibWl0JyxcbiAgICBkZWZhdWx0VmFsdWVzOiBleGlzdGluZyA/PyBkZWZhdWx0cyxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGVOYW1lSXNVbmlxdWU6IFZhbGlkYXRlPHN0cmluZz4gPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuICFjb25maWcudGVtcGxhdGVfZmlsZXNbbmFtZV0gfHwgZXhpc3Rpbmc/Lm5hbWUgPT09IG5hbWVcbiAgICAgID8gdHJ1ZVxuICAgICAgOiAnQW5vdGhlciB0ZW1wbGF0ZSB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgIDxoND57ZXhpc3RpbmcgPyAnRWRpdCBtZXNzYWdlIHRlbXBsYXRlJyA6ICdDcmVhdGUgbWVzc2FnZSB0ZW1wbGF0ZSd9PC9oND5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBzYXZpbmcgdGVtcGxhdGVcIj5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCAoZXJyb3IgYXMgYW55KT8uZGF0YT8ubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIDxGaWVsZCBsYWJlbD1cIlRlbXBsYXRlIG5hbWVcIiBlcnJvcj17ZXJyb3JzPy5uYW1lPy5tZXNzYWdlfSBpbnZhbGlkPXshIWVycm9ycy5uYW1lPy5tZXNzYWdlfSByZXF1aXJlZD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogeyBuYW1lSXNVbmlxdWU6IHZhbGlkYXRlTmFtZUlzVW5pcXVlIH0sXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJHaXZlIHlvdXIgdGVtcGxhdGUgYSBuYW1lXCJcbiAgICAgICAgICB3aWR0aD17NDJ9XG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZFxuICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIFlvdSBjYW4gdXNlIHRoZXsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wa2cuZ28uZGV2L3RleHQvdGVtcGxhdGU/dXRtX3NvdXJjZT1nb2RvY1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHbyB0ZW1wbGF0aW5nIGxhbmd1YWdlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAueycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Byb21ldGhldXMuaW8vYmxvZy8yMDE2LzAzLzAzL2N1c3RvbS1hbGVydG1hbmFnZXItdGVtcGxhdGVzL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNb3JlIGluZm8gYWJvdXQgYWxlcnRtYW5hZ2VyIHRlbXBsYXRlc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIGxhYmVsPVwiQ29udGVudFwiXG4gICAgICAgIGVycm9yPXtlcnJvcnM/LmNvbnRlbnQ/Lm1lc3NhZ2V9XG4gICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmNvbnRlbnQ/Lm1lc3NhZ2V9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICA+XG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIHsuLi5yZWdpc3RlcignY29udGVudCcsIHsgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWF9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICByb3dzPXsxMn1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gaWNvbj1cImZhIGZhLXNwaW5uZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgU2F2aW5nLi4uXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHshbG9hZGluZyAmJiA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+U2F2ZSB0ZW1wbGF0ZTwvQnV0dG9uPn1cbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKCdhbGVydGluZy9ub3RpZmljYXRpb25zJywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZXh0ZXJuYWxMaW5rOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgYCxcbiAgYnV0dG9uczogY3NzYFxuICAgICYgPiAqICsgKiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG4gIGAsXG4gIHRleHRhcmVhOiBjc3NgXG4gICAgbWF4LXdpZHRoOiA3NThweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgQ29uZmlybU1vZGFsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBGcmFnbWVudCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRBbGVydFRhYmxlU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RhYmxlJztcbmltcG9ydCB7IENvbGxhcHNlVG9nZ2xlIH0gZnJvbSAnLi4vQ29sbGFwc2VUb2dnbGUnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuLi9ydWxlcy9BY3Rpb25JY29uJztcbmltcG9ydCB7IFJlY2VpdmVyc1NlY3Rpb24gfSBmcm9tICcuL1JlY2VpdmVyc1NlY3Rpb24nO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkZWxldGVUZW1wbGF0ZUFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXV0aG9yaXplJztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlck5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlc1RhYmxlOiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIGFsZXJ0TWFuYWdlck5hbWUgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtleHBhbmRlZFRlbXBsYXRlcywgc2V0RXhwYW5kZWRUZW1wbGF0ZXNdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgYm9vbGVhbj4+KHt9KTtcbiAgY29uc3QgdGFibGVTdHlsZXMgPSB1c2VTdHlsZXMyKGdldEFsZXJ0VGFibGVTdHlsZXMpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJOYW1lKTtcblxuICBjb25zdCB0ZW1wbGF0ZVJvd3MgPSB1c2VNZW1vKCgpID0+IE9iamVjdC5lbnRyaWVzKGNvbmZpZy50ZW1wbGF0ZV9maWxlcyksIFtjb25maWddKTtcbiAgY29uc3QgW3RlbXBsYXRlVG9EZWxldGUsIHNldFRlbXBsYXRlVG9EZWxldGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIGNvbnN0IGRlbGV0ZVRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGlmICh0ZW1wbGF0ZVRvRGVsZXRlKSB7XG4gICAgICBkaXNwYXRjaChkZWxldGVUZW1wbGF0ZUFjdGlvbih0ZW1wbGF0ZVRvRGVsZXRlLCBhbGVydE1hbmFnZXJOYW1lKSk7XG4gICAgfVxuICAgIHNldFRlbXBsYXRlVG9EZWxldGUodW5kZWZpbmVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWNlaXZlcnNTZWN0aW9uXG4gICAgICB0aXRsZT1cIk1lc3NhZ2UgdGVtcGxhdGVzXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiVGVtcGxhdGVzIGNvbnN0cnVjdCB0aGUgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGUgY29udGFjdCBwb2ludHMuXCJcbiAgICAgIGFkZEJ1dHRvbkxhYmVsPVwiTmV3IHRlbXBsYXRlXCJcbiAgICAgIGFkZEJ1dHRvblRvPXttYWtlQU1MaW5rKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy90ZW1wbGF0ZXMvbmV3JywgYWxlcnRNYW5hZ2VyTmFtZSl9XG4gICAgICBzaG93QnV0dG9uPXtjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMuY3JlYXRlKX1cbiAgICA+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy50YWJsZX0gZGF0YS10ZXN0aWQ9XCJ0ZW1wbGF0ZXMtdGFibGVcIj5cbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIDxjb2wgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy5jb2xFeHBhbmR9IC8+XG4gICAgICAgICAgPGNvbCAvPlxuICAgICAgICAgIDxjb2wgLz5cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPHRoPlRlbXBsYXRlPC90aD5cbiAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7IXRlbXBsYXRlUm93cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuZXZlblJvd30+XG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5ObyB0ZW1wbGF0ZXMgZGVmaW5lZC48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0ZW1wbGF0ZVJvd3MubWFwKChbbmFtZSwgY29udGVudF0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNFeHBhbmRlZCA9ICEhZXhwYW5kZWRUZW1wbGF0ZXNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICA8dHIga2V5PXtuYW1lfSBjbGFzc05hbWU9e2lkeCAlIDIgPT09IDAgPyB0YWJsZVN0eWxlcy5ldmVuUm93IDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQ9eyFleHBhbmRlZFRlbXBsYXRlc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4gc2V0RXhwYW5kZWRUZW1wbGF0ZXMoeyAuLi5leHBhbmRlZFRlbXBsYXRlcywgW25hbWVdOiAhaXNFeHBhbmRlZCB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3RhYmxlU3R5bGVzLmFjdGlvbnNDZWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGVdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXttYWtlQU1MaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy90ZW1wbGF0ZXMvJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9L2VkaXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cImVkaXQgdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUZW1wbGF0ZVRvRGVsZXRlKG5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiZGVsZXRlIHRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7aXNFeHBhbmRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtpZHggJSAyID09PSAwID8gdGFibGVTdHlsZXMuZXZlblJvdyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIkRlc2NyaXB0aW9uXCIgaG9yaXpvbnRhbD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPntjb250ZW50fTwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRGV0YWlsc0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIHshIXRlbXBsYXRlVG9EZWxldGUgJiYgKFxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHRlbXBsYXRlXCJcbiAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0ZW1wbGF0ZSBcIiR7dGVtcGxhdGVUb0RlbGV0ZX1cIj9gfVxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlVGVtcGxhdGV9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRUZW1wbGF0ZVRvRGVsZXRlKHVuZGVmaW5lZCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUmVjZWl2ZXJzU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBPcHRpb25GaWVsZCB9IGZyb20gJy4vZmllbGRzL09wdGlvbkZpZWxkJztcbmltcG9ydCB7IENoYW5uZWxWYWx1ZXMsIFJlY2VpdmVyRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3JlY2VpdmVyLWZvcm0nO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIEZpZWxkRXJyb3IsIEZpZWxkRXJyb3JzLCBEZWVwTWFwIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24sIE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHMgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzPFIgZXh0ZW5kcyBDaGFubmVsVmFsdWVzPiB7XG4gIGRlZmF1bHRWYWx1ZXM6IFI7XG4gIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM6IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25bXTtcbiAgc2VjdXJlRmllbGRzOiBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzO1xuXG4gIG9uUmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xuICBlcnJvcnM/OiBGaWVsZEVycm9yczxSPjtcbiAgcGF0aFByZWZpeD86IHN0cmluZztcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbE9wdGlvbnM8UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+KHtcbiAgZGVmYXVsdFZhbHVlcyxcbiAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucyxcbiAgb25SZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG4gIGVycm9ycyxcbiAgcGF0aFByZWZpeCA9ICcnLFxuICByZWFkT25seSA9IGZhbHNlLFxufTogUHJvcHM8Uj4pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm1Db250ZXh0PFJlY2VpdmVyRm9ybVZhbHVlczxSPj4oKTtcbiAgY29uc3QgY3VycmVudEZvcm1WYWx1ZXMgPSB3YXRjaCgpIGFzIFJlY29yZDxzdHJpbmcsIGFueT47IC8vIHJlYWN0IGhvb2sgZm9ybSB0eXBlcyBBUkUgTFlJTkchXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzZWxlY3RlZENoYW5uZWxPcHRpb25zLm1hcCgob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke29wdGlvbi5sYWJlbH0tJHtpbmRleH1gO1xuICAgICAgICAvLyBTb21lIG9wdGlvbnMgY2FuIGJlIGRlcGVuZGVudCBvbiBvdGhlciBvcHRpb25zLCB0aGlzIGRldGVybWluZXMgd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgZGVwZW5kZW5jeSBvcHRpb25zXG4gICAgICAgIC8vIEkgdGhpbmsgdGhpcyBuZWVkcyBtb3JlIHRob3VnaHQuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBjdXJyZW50Rm9ybVZhbHVlc1tgJHtwYXRoUHJlZml4fXNldHRpbmdzLiR7b3B0aW9uLnNob3dXaGVuLmZpZWxkfWBdO1xuXG4gICAgICAgIGlmIChvcHRpb24uc2hvd1doZW4uZmllbGQgJiYgc2VsZWN0ZWRPcHRpb25WYWx1ZSAhPT0gb3B0aW9uLnNob3dXaGVuLmlzKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlRmllbGRzICYmIHNlY3VyZUZpZWxkc1tvcHRpb24ucHJvcGVydHlOYW1lXSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGQga2V5PXtrZXl9IGxhYmVsPXtvcHRpb24ubGFiZWx9IGRlc2NyaXB0aW9uPXtvcHRpb24uZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJDb25maWd1cmVkXCJcbiAgICAgICAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgICAgICAgcmVhZE9ubHkgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzZXRTZWN1cmVGaWVsZChvcHRpb24ucHJvcGVydHlOYW1lKX0gZmlsbD1cInRleHRcIiB0eXBlPVwiYnV0dG9uXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXJyb3I6IEZpZWxkRXJyb3IgfCBEZWVwTWFwPGFueSwgRmllbGRFcnJvcj4gfCB1bmRlZmluZWQgPSAoXG4gICAgICAgICAgKG9wdGlvbi5zZWN1cmUgPyBlcnJvcnM/LnNlY3VyZVNldHRpbmdzIDogZXJyb3JzPy5zZXR0aW5ncykgYXMgRGVlcE1hcDxhbnksIEZpZWxkRXJyb3I+IHwgdW5kZWZpbmVkXG4gICAgICAgICk/LltvcHRpb24ucHJvcGVydHlOYW1lXTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWVzPy5zZXR0aW5ncz8uW29wdGlvbi5wcm9wZXJ0eU5hbWVdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE9wdGlvbkZpZWxkXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgcGF0aFByZWZpeD17cGF0aFByZWZpeH1cbiAgICAgICAgICAgIHBhdGhTdWZmaXg9e29wdGlvbi5zZWN1cmUgPyAnc2VjdXJlU2V0dGluZ3MuJyA6ICdzZXR0aW5ncy4nfVxuICAgICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBOb3RpZmllckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBGaWVsZCwgSW5wdXRDb250cm9sLCBTZWxlY3QsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCwgRmllbGRFcnJvcnMgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgQ2hhbm5lbFZhbHVlcywgQ29tbW9uU2V0dGluZ3NDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5pbXBvcnQgeyBDaGFubmVsT3B0aW9ucyB9IGZyb20gJy4vQ2hhbm5lbE9wdGlvbnMnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVTZWN0aW9uIH0gZnJvbSAnLi9Db2xsYXBzaWJsZVNlY3Rpb24nO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBQcm9wczxSPiB7XG4gIGRlZmF1bHRWYWx1ZXM6IFI7XG4gIHBhdGhQcmVmaXg6IHN0cmluZztcbiAgbm90aWZpZXJzOiBOb3RpZmllckRUT1tdO1xuICBvbkR1cGxpY2F0ZTogKCkgPT4gdm9pZDtcbiAgb25UZXN0PzogKCkgPT4gdm9pZDtcbiAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQ6IENvbW1vblNldHRpbmdzQ29tcG9uZW50VHlwZTtcblxuICBzZWN1cmVGaWVsZHM/OiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcbiAgZXJyb3JzPzogRmllbGRFcnJvcnM8Uj47XG4gIG9uRGVsZXRlPzogKCkgPT4gdm9pZDtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbFN1YkZvcm08UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+KHtcbiAgZGVmYXVsdFZhbHVlcyxcbiAgcGF0aFByZWZpeCxcbiAgb25EdXBsaWNhdGUsXG4gIG9uRGVsZXRlLFxuICBvblRlc3QsXG4gIG5vdGlmaWVycyxcbiAgZXJyb3JzLFxuICBzZWN1cmVGaWVsZHMsXG4gIGNvbW1vblNldHRpbmdzQ29tcG9uZW50OiBDb21tb25TZXR0aW5nc0NvbXBvbmVudCxcbiAgcmVhZE9ubHkgPSBmYWxzZSxcbn06IFByb3BzPFI+KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IG5hbWUgPSAoZmllbGROYW1lOiBzdHJpbmcpID0+IGAke3BhdGhQcmVmaXh9JHtmaWVsZE5hbWV9YDtcbiAgY29uc3QgeyBjb250cm9sLCB3YXRjaCwgcmVnaXN0ZXIsIHRyaWdnZXIsIGZvcm1TdGF0ZSwgc2V0VmFsdWUgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IHNlbGVjdGVkVHlwZSA9IHdhdGNoKG5hbWUoJ3R5cGUnKSkgPz8gZGVmYXVsdFZhbHVlcy50eXBlOyAvLyBub3BlLCBzZXR0aW5nIFwiZGVmYXVsdFwiIGRvZXMgbm90IHdvcmsgYXQgYWxsLlxuICBjb25zdCB7IGxvYWRpbmc6IHRlc3RpbmdSZWNlaXZlciB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50ZXN0UmVjZWl2ZXJzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZ2lzdGVyKGAke3BhdGhQcmVmaXh9Ll9faWRgKTtcbiAgICAvKiBOZWVkIHRvIG1hbnVhbGx5IHJlZ2lzdGVyIHNlY3VyZUZpZWxkcyBvciBlbHNlIHRoZXknbGxcbiAgICAgYmUgbG9zdCB3aGVuIHRlc3RpbmcgYSBjb250YWN0IHBvaW50ICovXG4gICAgcmVnaXN0ZXIoYCR7cGF0aFByZWZpeH0uc2VjdXJlRmllbGRzYCk7XG4gIH0sIFtyZWdpc3RlciwgcGF0aFByZWZpeF0pO1xuXG4gIGNvbnN0IFtfc2VjdXJlRmllbGRzLCBzZXRTZWN1cmVGaWVsZHNdID0gdXNlU3RhdGUoc2VjdXJlRmllbGRzID8/IHt9KTtcblxuICBjb25zdCBvblJlc2V0U2VjdXJlRmllbGQgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoX3NlY3VyZUZpZWxkc1trZXldKSB7XG4gICAgICBjb25zdCB1cGRhdGVkU2VjdXJlRmllbGRzID0geyAuLi5zZWN1cmVGaWVsZHMgfTtcbiAgICAgIGRlbGV0ZSB1cGRhdGVkU2VjdXJlRmllbGRzW2tleV07XG4gICAgICBzZXRTZWN1cmVGaWVsZHModXBkYXRlZFNlY3VyZUZpZWxkcyk7XG4gICAgICBzZXRWYWx1ZShgJHtwYXRoUHJlZml4fS5zZWN1cmVGaWVsZHNgLCB1cGRhdGVkU2VjdXJlRmllbGRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHlwZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBTZWxlY3RhYmxlVmFsdWVbXSA9PlxuICAgICAgbm90aWZpZXJzXG4gICAgICAgIC5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiBuYW1lLFxuICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubGFiZWwubG9jYWxlQ29tcGFyZShiLmxhYmVsKSksXG4gICAgW25vdGlmaWVyc11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVUZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRyaWdnZXIoKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gT2JqZWN0LmtleXMoZm9ybVN0YXRlLmVycm9ycykubGVuZ3RoID09PSAwO1xuXG4gICAgaWYgKGlzVmFsaWQgJiYgb25UZXN0KSB7XG4gICAgICBvblRlc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgbm90aWZpZXIgPSBub3RpZmllcnMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IHNlbGVjdGVkVHlwZSk7XG4gIC8vIGlmIHRoZXJlIGFyZSBtYW5kYXRvcnkgb3B0aW9ucyBkZWZpbmVkLCBvcHRpb25hbCBvcHRpb25zIHdpbGwgYmUgaGlkZGVuIGJ5IGEgY29sbGFwc2VcbiAgLy8gaWYgdGhlcmUgYXJlbid0IG1hbmRhdG9yeSBvcHRpb25zLCBhbGwgb3B0aW9ucyB3aWxsIGJlIHNob3duIHdpdGhvdXQgY29sbGFwc2VcbiAgY29uc3QgbWFuZGF0b3J5T3B0aW9ucyA9IG5vdGlmaWVyPy5vcHRpb25zLmZpbHRlcigobykgPT4gby5yZXF1aXJlZCk7XG4gIGNvbnN0IG9wdGlvbmFsT3B0aW9ucyA9IG5vdGlmaWVyPy5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpO1xuXG4gIGNvbnN0IGNvbnRhY3RQb2ludFR5cGVJbnB1dElkID0gYGNvbnRhY3QtcG9pbnQtdHlwZS0ke3BhdGhQcmVmaXh9YDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IGRhdGEtdGVzdGlkPVwiaXRlbS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wUm93fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb250YWN0IHBvaW50IHR5cGVcIiBodG1sRm9yPXtjb250YWN0UG9pbnRUeXBlSW5wdXRJZH0gZGF0YS10ZXN0aWQ9e2Ake3BhdGhQcmVmaXh9dHlwZWB9PlxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICBuYW1lPXtuYW1lKCd0eXBlJyl9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlcy50eXBlfVxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgb25DaGFuZ2UsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9e2NvbnRhY3RQb2ludFR5cGVJbnB1dElkfVxuICAgICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezM3fVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZT8udmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAge29uVGVzdCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGVzdGluZ1JlY2VpdmVyfVxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGVzdCgpfVxuICAgICAgICAgICAgICAgIGljb249e3Rlc3RpbmdSZWNlaXZlciA/ICdmYSBmYS1zcGlubmVyJyA6ICdtZXNzYWdlJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRlc3RcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwieHNcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG9uRHVwbGljYXRlKCl9IGljb249XCJjb3B5XCI+XG4gICAgICAgICAgICAgIER1cGxpY2F0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Ake3BhdGhQcmVmaXh9ZGVsZXRlLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZSgpfVxuICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge25vdGlmaWVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNvbnRlbnR9PlxuICAgICAgICAgIDxDaGFubmVsT3B0aW9uczxSPlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc31cbiAgICAgICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e21hbmRhdG9yeU9wdGlvbnM/Lmxlbmd0aCA/IG1hbmRhdG9yeU9wdGlvbnMhIDogb3B0aW9uYWxPcHRpb25zIX1cbiAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17X3NlY3VyZUZpZWxkc31cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgb25SZXNldFNlY3VyZUZpZWxkPXtvblJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICBwYXRoUHJlZml4PXtwYXRoUHJlZml4fVxuICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyEhKG1hbmRhdG9yeU9wdGlvbnM/Lmxlbmd0aCAmJiBvcHRpb25hbE9wdGlvbnM/Lmxlbmd0aCkgJiYgKFxuICAgICAgICAgICAgPENvbGxhcHNpYmxlU2VjdGlvbiBsYWJlbD17YE9wdGlvbmFsICR7bm90aWZpZXIubmFtZX0gc2V0dGluZ3NgfT5cbiAgICAgICAgICAgICAge25vdGlmaWVyLmluZm8gIT09ICcnICYmIChcbiAgICAgICAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJcIiBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgIHtub3RpZmllci5pbmZvfVxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDaGFubmVsT3B0aW9uczxSPlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucz17b3B0aW9uYWxPcHRpb25zIX1cbiAgICAgICAgICAgICAgICBzZWN1cmVGaWVsZHM9e19zZWN1cmVGaWVsZHN9XG4gICAgICAgICAgICAgICAgb25SZXNldFNlY3VyZUZpZWxkPXtvblJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgcGF0aFByZWZpeD17cGF0aFByZWZpeH1cbiAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlU2VjdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb2xsYXBzaWJsZVNlY3Rpb24gbGFiZWw9XCJOb3RpZmljYXRpb24gc2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxDb21tb25TZXR0aW5nc0NvbXBvbmVudCBwYXRoUHJlZml4PXtwYXRoUHJlZml4fSByZWFkT25seT17cmVhZE9ubHl9IC8+XG4gICAgICAgICAgPC9Db2xsYXBzaWJsZVNlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBidXR0b25zOiBjc3NgXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbiAgaW5uZXJDb250ZW50OiBjc3NgXG4gICAgbWF4LXdpZHRoOiA1MzZweDtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDIsIDApfTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDEpfTtcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsfSR7dGhlbWUuYnJlYWtwb2ludHMudW5pdH07XG4gIGAsXG4gIHRvcFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGAsXG4gIGNoYW5uZWxTZXR0aW5nc0hlYWRlcjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IENoZWNrYm94LCBGaWVsZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbW1vblNldHRpbmdzQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9yZWNlaXZlci1mb3JtJztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuZXhwb3J0IGNvbnN0IENsb3VkQ29tbW9uQ2hhbm5lbFNldHRpbmdzOiBGQzxDb21tb25TZXR0aW5nc0NvbXBvbmVudFByb3BzPiA9ICh7XG4gIHBhdGhQcmVmaXgsXG4gIGNsYXNzTmFtZSxcbiAgcmVhZE9ubHkgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxGaWVsZCBkaXNhYmxlZD17cmVhZE9ubHl9PlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoYCR7cGF0aFByZWZpeH1zZW5kUmVzb2x2ZWRgKX1cbiAgICAgICAgICBsYWJlbD1cIlNlbmQgcmVzb2x2ZWRcIlxuICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIldoZXRoZXIgb3Igbm90IHRvIG5vdGlmeSBhYm91dCByZXNvbHZlZCBhbGVydHMuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcsIFJlY2VpdmVyIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IENsb3VkQ2hhbm5lbFZhbHVlcywgUmVjZWl2ZXJGb3JtVmFsdWVzLCBDbG91ZENoYW5uZWxNYXAgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9yZWNlaXZlci1mb3JtJztcbmltcG9ydCB7IGNsb3VkTm90aWZpZXJUeXBlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nsb3VkLWFsZXJ0bWFuYWdlci1ub3RpZmllci10eXBlcyc7XG5pbXBvcnQgeyBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHtcbiAgY2xvdWRSZWNlaXZlclRvRm9ybVZhbHVlcyxcbiAgZm9ybVZhbHVlc1RvQ2xvdWRSZWNlaXZlcixcbiAgdXBkYXRlQ29uZmlnV2l0aFJlY2VpdmVyLFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9yZWNlaXZlci1mb3JtJztcbmltcG9ydCB7IENsb3VkQ29tbW9uQ2hhbm5lbFNldHRpbmdzIH0gZnJvbSAnLi9DbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5ncyc7XG5pbXBvcnQgeyBSZWNlaXZlckZvcm0gfSBmcm9tICcuL1JlY2VpdmVyRm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGV4aXN0aW5nPzogUmVjZWl2ZXI7XG59XG5cbmNvbnN0IGRlZmF1bHRDaGFubmVsVmFsdWVzOiBDbG91ZENoYW5uZWxWYWx1ZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgX19pZDogJycsXG4gIHNlbmRSZXNvbHZlZDogdHJ1ZSxcbiAgc2VjdXJlU2V0dGluZ3M6IHt9LFxuICBzZXR0aW5nczoge30sXG4gIHNlY3VyZUZpZWxkczoge30sXG4gIHR5cGU6ICdlbWFpbCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IENsb3VkUmVjZWl2ZXJGb3JtOiBGQzxQcm9wcz4gPSAoeyBleGlzdGluZywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgY29uZmlnIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpc1ZhbmlsbGFBTSA9IGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuXG4gIC8vIHRyYW5zZm9ybSByZWNlaXZlciBEVE8gdG8gZm9ybSB2YWx1ZXNcbiAgY29uc3QgW2V4aXN0aW5nVmFsdWVdID0gdXNlTWVtbygoKTogW1JlY2VpdmVyRm9ybVZhbHVlczxDbG91ZENoYW5uZWxWYWx1ZXM+IHwgdW5kZWZpbmVkLCBDbG91ZENoYW5uZWxNYXBdID0+IHtcbiAgICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4gW3VuZGVmaW5lZCwge31dO1xuICAgIH1cbiAgICByZXR1cm4gY2xvdWRSZWNlaXZlclRvRm9ybVZhbHVlcyhleGlzdGluZywgY2xvdWROb3RpZmllclR5cGVzKTtcbiAgfSwgW2V4aXN0aW5nXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzOiBSZWNlaXZlckZvcm1WYWx1ZXM8Q2xvdWRDaGFubmVsVmFsdWVzPikgPT4ge1xuICAgIGNvbnN0IG5ld1JlY2VpdmVyID0gZm9ybVZhbHVlc1RvQ2xvdWRSZWNlaXZlcih2YWx1ZXMsIGRlZmF1bHRDaGFubmVsVmFsdWVzKTtcbiAgICBkaXNwYXRjaChcbiAgICAgIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbih7XG4gICAgICAgIG5ld0NvbmZpZzogdXBkYXRlQ29uZmlnV2l0aFJlY2VpdmVyKGNvbmZpZywgbmV3UmVjZWl2ZXIsIGV4aXN0aW5nPy5uYW1lKSxcbiAgICAgICAgb2xkQ29uZmlnOiBjb25maWcsXG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiBleGlzdGluZyA/ICdDb250YWN0IHBvaW50IHVwZGF0ZWQuJyA6ICdDb250YWN0IHBvaW50IGNyZWF0ZWQuJyxcbiAgICAgICAgcmVkaXJlY3RQYXRoOiBtYWtlQU1MaW5rKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHRha2VuUmVjZWl2ZXJOYW1lcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY29uZmlnLmFsZXJ0bWFuYWdlcl9jb25maWcucmVjZWl2ZXJzPy5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKS5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09IGV4aXN0aW5nPy5uYW1lKSA/PyBbXSxcbiAgICBbY29uZmlnLCBleGlzdGluZ11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWlzVmFuaWxsYUFNICYmIChcbiAgICAgICAgPEFsZXJ0IHRpdGxlPVwiSW5mb1wiIHNldmVyaXR5PVwiaW5mb1wiPlxuICAgICAgICAgIE5vdGUgdGhhdCBlbXB0eSBzdHJpbmcgdmFsdWVzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBnbG9iYWwgZGVmYXVsdHMgd2hlcmUgYXBwcm9wcmlhdGUuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAgPFJlY2VpdmVyRm9ybTxDbG91ZENoYW5uZWxWYWx1ZXM+XG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2V4aXN0aW5nVmFsdWV9XG4gICAgICAgIG5vdGlmaWVycz17Y2xvdWROb3RpZmllclR5cGVzfVxuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICBkZWZhdWx0SXRlbT17ZGVmYXVsdENoYW5uZWxWYWx1ZXN9XG4gICAgICAgIHRha2VuUmVjZWl2ZXJOYW1lcz17dGFrZW5SZWNlaXZlck5hbWVzfVxuICAgICAgICBjb21tb25TZXR0aW5nc0NvbXBvbmVudD17Q2xvdWRDb21tb25DaGFubmVsU2V0dGluZ3N9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvblNpemUsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGUgfSBmcm9tICcuLi8uLi9Db2xsYXBzZVRvZ2dsZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHNpemU/OiBJY29uU2l6ZTtcbn1cblxuZXhwb3J0IGNvbnN0IENvbGxhcHNpYmxlU2VjdGlvbjogRkM8UHJvcHM+ID0gKHsgbGFiZWwsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzaXplID0gJ3hsJyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW2lzQ29sbGFwc2VkLCBzZXRJc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCB0b2dnbGVDb2xsYXBzZSA9ICgpID0+IHNldElzQ29sbGFwc2VkKCFpc0NvbGxhcHNlZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLndyYXBwZXIsIGNsYXNzTmFtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfSBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZX0+XG4gICAgICAgIDxDb2xsYXBzZVRvZ2dsZSBjbGFzc05hbWU9e3N0eWxlcy5jYXJldH0gc2l6ZT17c2l6ZX0gb25Ub2dnbGU9e3RvZ2dsZUNvbGxhcHNlfSBpc0NvbGxhcHNlZD17aXNDb2xsYXBzZWR9IC8+XG4gICAgICAgIDxoNj57bGFiZWx9PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc0NvbGxhcHNlZCA/IHN0eWxlcy5oaWRkZW4gOiB1bmRlZmluZWR9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIGNhcmV0OiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6IC0ke3RoZW1lLnNwYWNpbmcoMC41KX07IC8vIG1ha2UgaXQgYWxpZ24gd2l0aCBmaWVsZHMgZGVzcGl0ZSBpY29uIHNpemVcbiAgYCxcbiAgaGVhZGluZzogY3NzYFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoNiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICBgLFxuICBoaWRkZW46IGNzc2BcbiAgICBkaXNwbGF5OiBub25lO1xuICBgLFxuICBkZXNjcmlwdGlvbjogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcn07XG4gICAgbWFyZ2luOiAwO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBDaGVja2JveCwgRmllbGQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21tb25TZXR0aW5nc0NvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBHcmFmYW5hQ29tbW9uQ2hhbm5lbFNldHRpbmdzOiBGQzxDb21tb25TZXR0aW5nc0NvbXBvbmVudFByb3BzPiA9ICh7IHBhdGhQcmVmaXgsIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHtwYXRoUHJlZml4fWRpc2FibGVSZXNvbHZlTWVzc2FnZWApfVxuICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZSByZXNvbHZlZCBtZXNzYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpc2FibGUgdGhlIHJlc29sdmUgbWVzc2FnZSBbT0tdIHRoYXQgaXMgc2VudCB3aGVuIGFsZXJ0aW5nIHN0YXRlIHJldHVybnMgdG8gZmFsc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQge1xuICBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcsXG4gIEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcsXG4gIFJlY2VpdmVyLFxuICBUZXN0UmVjZWl2ZXJzQWxlcnQsXG59IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQge1xuICBmZXRjaEdyYWZhbmFOb3RpZmllcnNBY3Rpb24sXG4gIHRlc3RSZWNlaXZlcnNBY3Rpb24sXG4gIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBHcmFmYW5hQ2hhbm5lbFZhbHVlcywgUmVjZWl2ZXJGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQge1xuICBmb3JtQ2hhbm5lbFZhbHVlc1RvR3JhZmFuYUNoYW5uZWxDb25maWcsXG4gIGZvcm1WYWx1ZXNUb0dyYWZhbmFSZWNlaXZlcixcbiAgZ3JhZmFuYVJlY2VpdmVyVG9Gb3JtVmFsdWVzLFxuICB1cGRhdGVDb25maWdXaXRoUmVjZWl2ZXIsXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlY2VpdmVyLWZvcm0nO1xuaW1wb3J0IHsgR3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5ncyB9IGZyb20gJy4vR3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5ncyc7XG5pbXBvcnQgeyBSZWNlaXZlckZvcm0gfSBmcm9tICcuL1JlY2VpdmVyRm9ybSc7XG5pbXBvcnQgeyBUZXN0Q29udGFjdFBvaW50TW9kYWwgfSBmcm9tICcuL1Rlc3RDb250YWN0UG9pbnRNb2RhbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGV4aXN0aW5nPzogUmVjZWl2ZXI7XG59XG5cbmNvbnN0IGRlZmF1bHRDaGFubmVsVmFsdWVzOiBHcmFmYW5hQ2hhbm5lbFZhbHVlcyA9IE9iamVjdC5mcmVlemUoe1xuICBfX2lkOiAnJyxcbiAgc2VjdXJlU2V0dGluZ3M6IHt9LFxuICBzZXR0aW5nczoge30sXG4gIHNlY3VyZUZpZWxkczoge30sXG4gIGRpc2FibGVSZXNvbHZlTWVzc2FnZTogZmFsc2UsXG4gIHR5cGU6ICdlbWFpbCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdyYWZhbmFSZWNlaXZlckZvcm06IEZDPFByb3BzPiA9ICh7IGV4aXN0aW5nLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBjb25maWcgfSkgPT4ge1xuICBjb25zdCBncmFmYW5hTm90aWZpZXJzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ncmFmYW5hTm90aWZpZXJzKTtcbiAgY29uc3QgW3Rlc3RDaGFubmVsVmFsdWVzLCBzZXRUZXN0Q2hhbm5lbFZhbHVlc10gPSB1c2VTdGF0ZTxHcmFmYW5hQ2hhbm5lbFZhbHVlcz4oKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIShncmFmYW5hTm90aWZpZXJzLnJlc3VsdCB8fCBncmFmYW5hTm90aWZpZXJzLmxvYWRpbmcpKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEdyYWZhbmFOb3RpZmllcnNBY3Rpb24oKSk7XG4gICAgfVxuICB9LCBbZ3JhZmFuYU5vdGlmaWVycywgZGlzcGF0Y2hdKTtcblxuICAvLyB0cmFuc2Zvcm0gcmVjZWl2ZXIgRFRPIHRvIGZvcm0gdmFsdWVzXG4gIGNvbnN0IFtleGlzdGluZ1ZhbHVlLCBpZDJvcmlnaW5hbF0gPSB1c2VNZW1vKCgpOiBbXG4gICAgUmVjZWl2ZXJGb3JtVmFsdWVzPEdyYWZhbmFDaGFubmVsVmFsdWVzPiB8IHVuZGVmaW5lZCxcbiAgICBSZWNvcmQ8c3RyaW5nLCBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnPlxuICBdID0+IHtcbiAgICBpZiAoIWV4aXN0aW5nIHx8ICFncmFmYW5hTm90aWZpZXJzLnJlc3VsdCkge1xuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHt9XTtcbiAgICB9XG4gICAgcmV0dXJuIGdyYWZhbmFSZWNlaXZlclRvRm9ybVZhbHVlcyhleGlzdGluZywgZ3JhZmFuYU5vdGlmaWVycy5yZXN1bHQhKTtcbiAgfSwgW2V4aXN0aW5nLCBncmFmYW5hTm90aWZpZXJzLnJlc3VsdF0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPEdyYWZhbmFDaGFubmVsVmFsdWVzPikgPT4ge1xuICAgIGNvbnN0IG5ld1JlY2VpdmVyID0gZm9ybVZhbHVlc1RvR3JhZmFuYVJlY2VpdmVyKHZhbHVlcywgaWQyb3JpZ2luYWwsIGRlZmF1bHRDaGFubmVsVmFsdWVzKTtcbiAgICBkaXNwYXRjaChcbiAgICAgIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbih7XG4gICAgICAgIG5ld0NvbmZpZzogdXBkYXRlQ29uZmlnV2l0aFJlY2VpdmVyKGNvbmZpZywgbmV3UmVjZWl2ZXIsIGV4aXN0aW5nPy5uYW1lKSxcbiAgICAgICAgb2xkQ29uZmlnOiBjb25maWcsXG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiBleGlzdGluZyA/ICdDb250YWN0IHBvaW50IHVwZGF0ZWQuJyA6ICdDb250YWN0IHBvaW50IGNyZWF0ZWQnLFxuICAgICAgICByZWRpcmVjdFBhdGg6ICcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucycsXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgb25UZXN0Q2hhbm5lbCA9ICh2YWx1ZXM6IEdyYWZhbmFDaGFubmVsVmFsdWVzKSA9PiB7XG4gICAgc2V0VGVzdENoYW5uZWxWYWx1ZXModmFsdWVzKTtcbiAgfTtcblxuICBjb25zdCB0ZXN0Tm90aWZpY2F0aW9uID0gKGFsZXJ0PzogVGVzdFJlY2VpdmVyc0FsZXJ0KSA9PiB7XG4gICAgaWYgKHRlc3RDaGFubmVsVmFsdWVzKSB7XG4gICAgICBjb25zdCBleGlzdGluZzogR3JhZmFuYU1hbmFnZWRSZWNlaXZlckNvbmZpZyB8IHVuZGVmaW5lZCA9IGlkMm9yaWdpbmFsW3Rlc3RDaGFubmVsVmFsdWVzLl9faWRdO1xuICAgICAgY29uc3QgY2hhbiA9IGZvcm1DaGFubmVsVmFsdWVzVG9HcmFmYW5hQ2hhbm5lbENvbmZpZyh0ZXN0Q2hhbm5lbFZhbHVlcywgZGVmYXVsdENoYW5uZWxWYWx1ZXMsICd0ZXN0JywgZXhpc3RpbmcpO1xuXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICAgICAgICByZWNlaXZlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndGVzdCcsXG4gICAgICAgICAgICBncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlnczogW2NoYW5dLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGFsZXJ0LFxuICAgICAgfTtcblxuICAgICAgZGlzcGF0Y2godGVzdFJlY2VpdmVyc0FjdGlvbihwYXlsb2FkKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRha2VuUmVjZWl2ZXJOYW1lcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY29uZmlnLmFsZXJ0bWFuYWdlcl9jb25maWcucmVjZWl2ZXJzPy5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKS5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09IGV4aXN0aW5nPy5uYW1lKSA/PyBbXSxcbiAgICBbY29uZmlnLCBleGlzdGluZ11cbiAgKTtcblxuICBpZiAoZ3JhZmFuYU5vdGlmaWVycy5yZXN1bHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFJlY2VpdmVyRm9ybTxHcmFmYW5hQ2hhbm5lbFZhbHVlcz5cbiAgICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17ZXhpc3RpbmdWYWx1ZX1cbiAgICAgICAgICBvblRlc3RDaGFubmVsPXtvblRlc3RDaGFubmVsfVxuICAgICAgICAgIG5vdGlmaWVycz17Z3JhZmFuYU5vdGlmaWVycy5yZXN1bHR9XG4gICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICBkZWZhdWx0SXRlbT17ZGVmYXVsdENoYW5uZWxWYWx1ZXN9XG4gICAgICAgICAgdGFrZW5SZWNlaXZlck5hbWVzPXt0YWtlblJlY2VpdmVyTmFtZXN9XG4gICAgICAgICAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQ9e0dyYWZhbmFDb21tb25DaGFubmVsU2V0dGluZ3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXN0Q29udGFjdFBvaW50TW9kYWxcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFRlc3RDaGFubmVsVmFsdWVzKHVuZGVmaW5lZCl9XG4gICAgICAgICAgaXNPcGVuPXshIXRlc3RDaGFubmVsVmFsdWVzfVxuICAgICAgICAgIG9uVGVzdD17KGFsZXJ0KSA9PiB0ZXN0Tm90aWZpY2F0aW9uKGFsZXJ0KX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgbm90aWZpZXJzLi4uXCIgLz47XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgRmllbGQsIElucHV0LCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgTm90aWZpZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybSwgRm9ybVByb3ZpZGVyLCBGaWVsZEVycm9ycywgVmFsaWRhdGUgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgdXNlQ29udHJvbGxlZEZpZWxkQXJyYXkgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDb250cm9sbGVkRmllbGRBcnJheSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IENoYW5uZWxWYWx1ZXMsIENvbW1vblNldHRpbmdzQ29tcG9uZW50VHlwZSwgUmVjZWl2ZXJGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBDaGFubmVsU3ViRm9ybSB9IGZyb20gJy4vQ2hhbm5lbFN1YkZvcm0nO1xuaW1wb3J0IHsgRGVsZXRlZFN1YkZvcm0gfSBmcm9tICcuL2ZpZWxkcy9EZWxldGVkU3ViZm9ybSc7XG5pbXBvcnQgeyBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuXG5pbnRlcmZhY2UgUHJvcHM8UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+IHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIG5vdGlmaWVyczogTm90aWZpZXJEVE9bXTtcbiAgZGVmYXVsdEl0ZW06IFI7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgb25UZXN0Q2hhbm5lbD86IChjaGFubmVsOiBSKSA9PiB2b2lkO1xuICBvblN1Ym1pdDogKHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPFI+KSA9PiB2b2lkO1xuICB0YWtlblJlY2VpdmVyTmFtZXM6IHN0cmluZ1tdOyAvLyB3aWxsIHZhbGlkYXRlIHRoYXQgdXNlciBlbnRlcmVkIHJlY2VpdmVyIG5hbWUgaXMgbm90IG9uZSBvZiB0aGVzZVxuICBjb21tb25TZXR0aW5nc0NvbXBvbmVudDogQ29tbW9uU2V0dGluZ3NDb21wb25lbnRUeXBlO1xuICBpbml0aWFsVmFsdWVzPzogUmVjZWl2ZXJGb3JtVmFsdWVzPFI+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVjZWl2ZXJGb3JtPFIgZXh0ZW5kcyBDaGFubmVsVmFsdWVzPih7XG4gIGNvbmZpZyxcbiAgaW5pdGlhbFZhbHVlcyxcbiAgZGVmYXVsdEl0ZW0sXG4gIG5vdGlmaWVycyxcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgb25TdWJtaXQsXG4gIG9uVGVzdENoYW5uZWwsXG4gIHRha2VuUmVjZWl2ZXJOYW1lcyxcbiAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQsXG59OiBQcm9wczxSPik6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgcmVhZE9ubHkgPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IGluaXRpYWxWYWx1ZXMgfHwge1xuICAgIG5hbWU6ICcnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIC4uLmRlZmF1bHRJdGVtLFxuICAgICAgICBfX2lkOiBTdHJpbmcoTWF0aC5yYW5kb20oKSksXG4gICAgICB9IGFzIGFueSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IGZvcm1BUEkgPSB1c2VGb3JtPFJlY2VpdmVyRm9ybVZhbHVlczxSPj4oe1xuICAgIC8vIG1ha2luZyBhIGNvcHkgaGVyZSBiZWFjdXNlIHJlYWN0LWhvb2stZm9ybSB3aWxsIG11dGF0ZSB0aGVzZSwgYW5kIGJyZWFrIGlmIHRoZSBvYmplY3QgaXMgZnJvemVuLiBmb3IgcmVhbC5cbiAgICBkZWZhdWx0VmFsdWVzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRlZmF1bHRWYWx1ZXMpKSxcbiAgfSk7XG5cbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5zYXZlQU1Db25maWcpO1xuXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zYXZlQU1Db25maWcpO1xuXG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVnaXN0ZXIsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICAgIGdldFZhbHVlcyxcbiAgfSA9IGZvcm1BUEk7XG5cbiAgY29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VDb250cm9sbGVkRmllbGRBcnJheTxSPih7IG5hbWU6ICdpdGVtcycsIGZvcm1BUEksIHNvZnREZWxldGU6IHRydWUgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGVOYW1lSXNBdmFpbGFibGU6IFZhbGlkYXRlPHN0cmluZz4gPSB1c2VDYWxsYmFjayhcbiAgICAobmFtZTogc3RyaW5nKSA9PlxuICAgICAgdGFrZW5SZWNlaXZlck5hbWVzLm1hcCgobmFtZSkgPT4gbmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSkuaW5jbHVkZXMobmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgPyAnQW5vdGhlciByZWNlaXZlciB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nXG4gICAgICAgIDogdHJ1ZSxcbiAgICBbdGFrZW5SZWNlaXZlck5hbWVzXVxuICApO1xuXG4gIGNvbnN0IHN1Ym1pdENhbGxiYWNrID0gKHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPFI+KSA9PiB7XG4gICAgb25TdWJtaXQoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgaXRlbXM6IHZhbHVlcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLl9fZGVsZXRlZCksXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25JbnZhbGlkID0gKCkgPT4ge1xuICAgIG5vdGlmeUFwcC5lcnJvcignVGhlcmUgYXJlIGVycm9ycyBpbiB0aGUgZm9ybS4gUGxlYXNlIGNvcnJlY3QgdGhlbSBhbmQgdHJ5IGFnYWluIScpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybUFQSX0+XG4gICAgICB7IWNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLnJvdXRlICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwid2FybmluZ1wiIHRpdGxlPVwiQXR0ZW50aW9uXCI+XG4gICAgICAgICAgQmVjYXVzZSB0aGVyZSBpcyBubyBkZWZhdWx0IHBvbGljeSBjb25maWd1cmVkIHlldCwgdGhpcyBjb250YWN0IHBvaW50IHdpbGwgYXV0b21hdGljYWxseSBiZSBzZXQgYXMgZGVmYXVsdC5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdENhbGxiYWNrLCBvbkludmFsaWQpfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgIHtyZWFkT25seSA/ICdDb250YWN0IHBvaW50JyA6IGluaXRpYWxWYWx1ZXMgPyAnVXBkYXRlIGNvbnRhY3QgcG9pbnQnIDogJ0NyZWF0ZSBjb250YWN0IHBvaW50J31cbiAgICAgICAgPC9oND5cbiAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnMubmFtZSAmJiBlcnJvcnMubmFtZS5tZXNzYWdlfSByZXF1aXJlZD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAnTmFtZSBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgIHZhbGlkYXRlOiB7IG5hbWVJc0F2YWlsYWJsZTogdmFsaWRhdGVOYW1lSXNBdmFpbGFibGUgfSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgd2lkdGg9ezM5fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGF0aFByZWZpeCA9IGBpdGVtcy4ke2luZGV4fS5gO1xuICAgICAgICAgIGlmIChmaWVsZC5fX2RlbGV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiA8RGVsZXRlZFN1YkZvcm0ga2V5PXtmaWVsZC5fX2lkfSBwYXRoUHJlZml4PXtwYXRoUHJlZml4fSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaW5pdGlhbEl0ZW0gPSBpbml0aWFsVmFsdWVzPy5pdGVtcy5maW5kKCh7IF9faWQgfSkgPT4gX19pZCA9PT0gZmllbGQuX19pZCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDaGFubmVsU3ViRm9ybTxSPlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVzPXtmaWVsZH1cbiAgICAgICAgICAgICAga2V5PXtmaWVsZC5fX2lkfVxuICAgICAgICAgICAgICBvbkR1cGxpY2F0ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXM6IFIgPSBnZXRWYWx1ZXMoKS5pdGVtc1tpbmRleF07XG4gICAgICAgICAgICAgICAgYXBwZW5kKHsgLi4uY3VycmVudFZhbHVlcywgX19pZDogU3RyaW5nKE1hdGgucmFuZG9tKCkpIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblRlc3Q9e1xuICAgICAgICAgICAgICAgIG9uVGVzdENoYW5uZWxcbiAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXM6IFIgPSBnZXRWYWx1ZXMoKS5pdGVtc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgb25UZXN0Q2hhbm5lbChjdXJyZW50VmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgcGF0aFByZWZpeD17cGF0aFByZWZpeH1cbiAgICAgICAgICAgICAgbm90aWZpZXJzPXtub3RpZmllcnN9XG4gICAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17aW5pdGlhbEl0ZW0/LnNlY3VyZUZpZWxkc31cbiAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnM/Lml0ZW1zPy5baW5kZXhdIGFzIEZpZWxkRXJyb3JzPFI+fVxuICAgICAgICAgICAgICBjb21tb25TZXR0aW5nc0NvbXBvbmVudD17Y29tbW9uU2V0dGluZ3NDb21wb25lbnR9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDw+XG4gICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBlbmQoeyAuLi5kZWZhdWx0SXRlbSwgX19pZDogU3RyaW5nKE1hdGgucmFuZG9tKCkpIH0gYXMgUil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5ldyBjb250YWN0IHBvaW50IHR5cGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IGljb249XCJmYSBmYS1zcGlubmVyXCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgU2F2aW5nLi4uXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIGNvbnRhY3QgcG9pbnQ8L0J1dHRvbj59XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBmaWxsPVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKCdhbGVydGluZy9ub3RpZmljYXRpb25zJywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0Zvcm1Qcm92aWRlcj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBoZWFkaW5nOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoNCwgMCl9O1xuICBgLFxuICBidXR0b25zOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcblxuICAgICYgPiAqICsgKiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIExhYmVsLCB1c2VTdHlsZXMyLCBSYWRpb0J1dHRvbkdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlRm9ybSwgRm9ybVByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IFRlc3RSZWNlaXZlcnNBbGVydCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgQW5ub3RhdGlvbnNGaWVsZCBmcm9tICcuLi8uLi9ydWxlLWVkaXRvci9Bbm5vdGF0aW9uc0ZpZWxkJztcbmltcG9ydCBMYWJlbHNGaWVsZCBmcm9tICcuLi8uLi9ydWxlLWVkaXRvci9MYWJlbHNGaWVsZCc7XG5pbXBvcnQgeyBBbm5vdGF0aW9ucywgTGFiZWxzIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIG9uVGVzdDogKGFsZXJ0PzogVGVzdFJlY2VpdmVyc0FsZXJ0KSA9PiB2b2lkO1xufVxuXG50eXBlIEFubm9GaWVsZCA9IHtcbiAga2V5OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgRm9ybUZpZWxkcyB7XG4gIGFubm90YXRpb25zOiBBbm5vRmllbGRbXTtcbiAgbGFiZWxzOiBBbm5vRmllbGRbXTtcbn1cblxuZW51bSBOb3RpZmljYXRpb25UeXBlIHtcbiAgcHJlZGVmaW5lZCA9ICdQcmVkZWZpbmVkJyxcbiAgY3VzdG9tID0gJ0N1c3RvbScsXG59XG5cbmNvbnN0IG5vdGlmaWNhdGlvbk9wdGlvbnMgPSBPYmplY3QudmFsdWVzKE5vdGlmaWNhdGlvblR5cGUpLm1hcCgodmFsdWUpID0+ICh7IGxhYmVsOiB2YWx1ZSwgdmFsdWU6IHZhbHVlIH0pKTtcblxuY29uc3QgZGVmYXVsdFZhbHVlczogRm9ybUZpZWxkcyA9IHtcbiAgYW5ub3RhdGlvbnM6IFt7IGtleTogJycsIHZhbHVlOiAnJyB9XSxcbiAgbGFiZWxzOiBbeyBrZXk6ICcnLCB2YWx1ZTogJycgfV0sXG59O1xuXG5leHBvcnQgY29uc3QgVGVzdENvbnRhY3RQb2ludE1vZGFsID0gKHsgaXNPcGVuLCBvbkRpc21pc3MsIG9uVGVzdCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbbm90aWZpY2F0aW9uVHlwZSwgc2V0Tm90aWZpY2F0aW9uVHlwZV0gPSB1c2VTdGF0ZTxOb3RpZmljYXRpb25UeXBlPihOb3RpZmljYXRpb25UeXBlLnByZWRlZmluZWQpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGZvcm1NZXRob2RzID0gdXNlRm9ybTxGb3JtRmllbGRzPih7IGRlZmF1bHRWYWx1ZXMsIG1vZGU6ICdvbkJsdXInIH0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IEZvcm1GaWVsZHMpID0+IHtcbiAgICBpZiAobm90aWZpY2F0aW9uVHlwZSA9PT0gTm90aWZpY2F0aW9uVHlwZS5jdXN0b20pIHtcbiAgICAgIGNvbnN0IGFsZXJ0ID0ge1xuICAgICAgICBhbm5vdGF0aW9uczogZGF0YS5hbm5vdGF0aW9uc1xuICAgICAgICAgIC5maWx0ZXIoKHsga2V5LCB2YWx1ZSB9KSA9PiAhIWtleSAmJiAhIXZhbHVlKVxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywgeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmFjYywgW2tleV06IHZhbHVlIH07XG4gICAgICAgICAgfSwge30gYXMgQW5ub3RhdGlvbnMpLFxuICAgICAgICBsYWJlbHM6IGRhdGEubGFiZWxzXG4gICAgICAgICAgLmZpbHRlcigoeyBrZXksIHZhbHVlIH0pID0+ICEha2V5ICYmICEhdmFsdWUpXG4gICAgICAgICAgLnJlZHVjZSgoYWNjLCB7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCBba2V5XTogdmFsdWUgfTtcbiAgICAgICAgICB9LCB7fSBhcyBMYWJlbHMpLFxuICAgICAgfTtcbiAgICAgIG9uVGVzdChhbGVydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uVGVzdCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBvbkRpc21pc3M9e29uRGlzbWlzc30gaXNPcGVuPXtpc09wZW59IHRpdGxlPXsnVGVzdCBjb250YWN0IHBvaW50J30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICA8TGFiZWw+Tm90aWZpY2F0aW9uIG1lc3NhZ2U8L0xhYmVsPlxuICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgIG9wdGlvbnM9e25vdGlmaWNhdGlvbk9wdGlvbnN9XG4gICAgICAgICAgdmFsdWU9e25vdGlmaWNhdGlvblR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Tm90aWZpY2F0aW9uVHlwZSh2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybU1ldGhvZHN9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybU1ldGhvZHMuaGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAge25vdGlmaWNhdGlvblR5cGUgPT09IE5vdGlmaWNhdGlvblR5cGUucHJlZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICAgICAgICBZb3Ugd2lsbCBzZW5kIGEgdGVzdCBub3RpZmljYXRpb24gdGhhdCB1c2VzIGEgcHJlZGVmaW5lZCBhbGVydC4gSWYgeW91IGhhdmUgZGVmaW5lZCBhIGN1c3RvbSB0ZW1wbGF0ZSBvclxuICAgICAgICAgICAgICBtZXNzYWdlLCBmb3IgYmV0dGVyIHJlc3VsdHMgc3dpdGNoIHRvIDxzdHJvbmc+Y3VzdG9tPC9zdHJvbmc+IG5vdGlmaWNhdGlvbiBtZXNzYWdlLCBmcm9tIGFib3ZlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bm90aWZpY2F0aW9uVHlwZSA9PT0gTm90aWZpY2F0aW9uVHlwZS5jdXN0b20gJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICBZb3Ugd2lsbCBzZW5kIGEgdGVzdCBub3RpZmljYXRpb24gdGhhdCB1c2VzIHRoZSBhbm5vdGF0aW9ucyBkZWZpbmVkIGJlbG93LiBUaGlzIGlzIGEgZ29vZCBvcHRpb24gaWYgeW91XG4gICAgICAgICAgICAgICAgdXNlIGN1c3RvbSB0ZW1wbGF0ZXMgYW5kIG1lc3NhZ2VzLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbnNGaWVsZCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8TGFiZWxzRmllbGQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgdGVzdCBub3RpZmljYXRpb248L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Gb3JtUHJvdmlkZXI+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICBzZWN0aW9uOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGF0aFByZWZpeDogc3RyaW5nO1xufVxuXG4vLyB3ZSBjYW4ndCBkcm9wIHRoZSBkZWxldGVkIGl0ZW0gZnJvbSBsaXN0IGVudGlyZWx5IGJlY2F1c2Vcbi8vIHRoZXJlIHdpbGwgYmUgYSByZWNlIGNvbmRpdGlvbiB3aXRoIHJlZ2lzdGVyL3VucmVnaXN0ZXIgY2FsbHMgaW4gcmVhY3QtaG9vay1mb3JtXG4vLyBhbmQgZmllbGRzIHdpbGwgYmVjb21lIHJhbmRvbWx5IGVycm9uZW91c2x5IHVucmVnaXN0ZXJlZFxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZWRTdWJGb3JtKHsgcGF0aFByZWZpeCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTtcblxuICAvLyByZXF1aXJlZCB0byBiZSByZWdpc3RlcmVkIG9yIHJlYWN0LWhvb2stZm9ybSB3aWxsIHJhbmRvbWx5IGRyb3AgdGhlIHZhbHVlcyB3aGVuIGl0IGZlZWxzIGxpa2UgaXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWdpc3RlcihgJHtwYXRoUHJlZml4fS5fX2lkYCk7XG4gICAgcmVnaXN0ZXIoYCR7cGF0aFByZWZpeH0uX19kZWxldGVkYCk7XG4gIH0sIFtyZWdpc3RlciwgcGF0aFByZWZpeF0pO1xuXG4gIHJldHVybiA8PjwvPjtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gJy4uLy4uLy4uL3J1bGVzL0FjdGlvbkljb24nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZT86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEtleVZhbHVlTWFwSW5wdXQ6IEZDPFByb3BzPiA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgcmVhZE9ubHkgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3BhaXJzLCBzZXRQYWlyc10gPSB1c2VTdGF0ZShyZWNvcmRUb1BhaXJzKHZhbHVlKSk7XG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRQYWlycyhyZWNvcmRUb1BhaXJzKHZhbHVlKSksIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IGVtaXRDaGFuZ2UgPSAocGFpcnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+KSA9PiB7XG4gICAgb25DaGFuZ2UocGFpcnNUb1JlY29yZChwYWlycykpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld1BhaXJzID0gcGFpcnMuc2xpY2UoKTtcbiAgICBjb25zdCByZW1vdmVkID0gbmV3UGFpcnMuc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICBzZXRQYWlycyhuZXdQYWlycyk7XG4gICAgaWYgKHJlbW92ZWRbMF0pIHtcbiAgICAgIGVtaXRDaGFuZ2UobmV3UGFpcnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVQYWlyID0gKHZhbHVlczogW3N0cmluZywgc3RyaW5nXSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG9sZCA9IHBhaXJzW2luZGV4XTtcbiAgICBjb25zdCBuZXdQYWlycyA9IHBhaXJzLm1hcCgocGFpciwgaSkgPT4gKGkgPT09IGluZGV4ID8gdmFsdWVzIDogcGFpcikpO1xuICAgIHNldFBhaXJzKG5ld1BhaXJzKTtcbiAgICBpZiAodmFsdWVzWzBdIHx8IG9sZFswXSkge1xuICAgICAgZW1pdENoYW5nZShuZXdQYWlycyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHshIXBhaXJzLmxlbmd0aCAmJiAoXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5WYWx1ZTwvdGg+XG4gICAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgPHRoPjwvdGg+fVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtwYWlycy5tYXAoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlUGFpcihbZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCB2YWx1ZV0sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlUGFpcihba2V5LCBlLmN1cnJlbnRUYXJnZXQudmFsdWVdLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uIGljb249XCJ0cmFzaC1hbHRcIiB0b29sdGlwPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShpbmRleCl9IC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgKX1cbiAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhaXJzKFsuLi5wYWlycywgWycnLCAnJ11dKX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGFkZEJ1dHRvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHRhYmxlOiBjc3NgXG4gICAgdGJvZHkgdGQge1xuICAgICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmcoMSl9ICR7dGhlbWUuc3BhY2luZygxKX0gMDtcbiAgICB9XG4gIGAsXG59KTtcblxuY29uc3QgcGFpcnNUb1JlY29yZCA9IChwYWlyczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHBhaXJzKSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmVjb3JkW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlY29yZDtcbn07XG5cbmNvbnN0IHJlY29yZFRvUGFpcnMgPSAob2JqPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+ID0+IE9iamVjdC5lbnRyaWVzKG9iaiA/PyB7fSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoZWNrYm94LCBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCwgRmllbGRFcnJvciwgRGVlcE1hcCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBTdWJmb3JtRmllbGQgfSBmcm9tICcuL1N1YmZvcm1GaWVsZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgS2V5VmFsdWVNYXBJbnB1dCB9IGZyb20gJy4vS2V5VmFsdWVNYXBJbnB1dCc7XG5pbXBvcnQgeyBTdWJmb3JtQXJyYXlGaWVsZCB9IGZyb20gJy4vU3ViZm9ybUFycmF5RmllbGQnO1xuaW1wb3J0IHsgU3RyaW5nQXJyYXlJbnB1dCB9IGZyb20gJy4vU3RyaW5nQXJyYXlJbnB1dCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRlZmF1bHRWYWx1ZTogYW55O1xuICBvcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb247XG4gIGludmFsaWQ/OiBib29sZWFuO1xuICBwYXRoUHJlZml4OiBzdHJpbmc7XG4gIHBhdGhTdWZmaXg/OiBzdHJpbmc7XG4gIGVycm9yPzogRmllbGRFcnJvciB8IERlZXBNYXA8YW55LCBGaWVsZEVycm9yPjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3B0aW9uRmllbGQ6IEZDPFByb3BzPiA9ICh7XG4gIG9wdGlvbixcbiAgaW52YWxpZCxcbiAgcGF0aFByZWZpeCxcbiAgcGF0aFN1ZmZpeCA9ICcnLFxuICBlcnJvcixcbiAgZGVmYXVsdFZhbHVlLFxuICByZWFkT25seSA9IGZhbHNlLFxufSkgPT4ge1xuICBjb25zdCBvcHRpb25QYXRoID0gYCR7cGF0aFByZWZpeH0ke3BhdGhTdWZmaXh9YDtcblxuICBpZiAob3B0aW9uLmVsZW1lbnQgPT09ICdzdWJmb3JtJykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3ViZm9ybUZpZWxkXG4gICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICBlcnJvcnM9e2Vycm9yIGFzIERlZXBNYXA8YW55LCBGaWVsZEVycm9yPiB8IHVuZGVmaW5lZH1cbiAgICAgICAgcGF0aFByZWZpeD17b3B0aW9uUGF0aH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICBpZiAob3B0aW9uLmVsZW1lbnQgPT09ICdzdWJmb3JtX2FycmF5Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3ViZm9ybUFycmF5RmllbGRcbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICBkZWZhdWx0VmFsdWVzPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICBwYXRoUHJlZml4PXtvcHRpb25QYXRofVxuICAgICAgICBlcnJvcnM9e2Vycm9yIGFzIEFycmF5PERlZXBNYXA8YW55LCBGaWVsZEVycm9yPj4gfCB1bmRlZmluZWR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RmllbGRcbiAgICAgIGxhYmVsPXtvcHRpb24uZWxlbWVudCAhPT0gJ2NoZWNrYm94JyA/IG9wdGlvbi5sYWJlbCA6IHVuZGVmaW5lZH1cbiAgICAgIGRlc2NyaXB0aW9uPXtvcHRpb24uZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkfVxuICAgICAgaW52YWxpZD17ISFlcnJvcn1cbiAgICAgIGVycm9yPXtlcnJvcj8ubWVzc2FnZX1cbiAgICA+XG4gICAgICA8T3B0aW9uSW5wdXRcbiAgICAgICAgaWQ9e2Ake29wdGlvblBhdGh9JHtvcHRpb24ucHJvcGVydHlOYW1lfWB9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgcGF0aFByZWZpeD17b3B0aW9uUGF0aH1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICBwYXRoSW5kZXg9e3BhdGhQcmVmaXh9XG4gICAgICAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCBPcHRpb25JbnB1dDogRkM8UHJvcHMgJiB7IGlkOiBzdHJpbmc7IHBhdGhJbmRleD86IHN0cmluZyB9PiA9ICh7XG4gIG9wdGlvbixcbiAgaW52YWxpZCxcbiAgaWQsXG4gIHBhdGhQcmVmaXggPSAnJyxcbiAgcGF0aEluZGV4ID0gJycsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIHVucmVnaXN0ZXIsIGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3QgbmFtZSA9IGAke3BhdGhQcmVmaXh9JHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG5cbiAgLy8gd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWhvb2stZm9ybS9yZWFjdC1ob29rLWZvcm0vaXNzdWVzLzQ5OTMjaXNzdWVjb21tZW50LTgyOTAxMjUwNlxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgdW5yZWdpc3RlcihuYW1lLCB7IGtlZXBWYWx1ZTogZmFsc2UgfSk7XG4gICAgfSxcbiAgICBbdW5yZWdpc3RlciwgbmFtZV1cbiAgKTtcbiAgc3dpdGNoIChvcHRpb24uZWxlbWVudCkge1xuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihuYW1lKX1cbiAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtvcHRpb24uZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHkgfHwgZGV0ZXJtaW5lUmVhZE9ubHkob3B0aW9uLCBnZXRWYWx1ZXMsIHBhdGhJbmRleCl9XG4gICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICB0eXBlPXtvcHRpb24uaW5wdXRUeXBlfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihuYW1lLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogZGV0ZXJtaW5lUmVxdWlyZWQob3B0aW9uLCBnZXRWYWx1ZXMsIHBhdGhJbmRleCksXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHYpID0+IChvcHRpb24udmFsaWRhdGlvblJ1bGUgIT09ICcnID8gdmFsaWRhdGVPcHRpb24odiwgb3B0aW9uLnZhbGlkYXRpb25SdWxlKSA6IHRydWUpLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtvcHRpb24ucGxhY2Vob2xkZXJ9XG4gICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb24uc2VsZWN0T3B0aW9ucyA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlLnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihuYW1lLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICh2KSA9PiAob3B0aW9uLnZhbGlkYXRpb25SdWxlICE9PSAnJyA/IHZhbGlkYXRlT3B0aW9uKHYsIG9wdGlvbi52YWxpZGF0aW9uUnVsZSkgOiB0cnVlKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgY2FzZSAnc3RyaW5nX2FycmF5JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHZhbHVlLCBvbkNoYW5nZSB9IH0pID0+IChcbiAgICAgICAgICAgIDxTdHJpbmdBcnJheUlucHV0IHJlYWRPbmx5PXtyZWFkT25seX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGNhc2UgJ2tleV92YWx1ZV9tYXAnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgdmFsdWUsIG9uQ2hhbmdlIH0gfSkgPT4gKFxuICAgICAgICAgICAgPEtleVZhbHVlTWFwSW5wdXQgcmVhZE9ubHk9e3JlYWRPbmx5fSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBub3Qgc3VwcG9ydGVkJywgb3B0aW9uLmVsZW1lbnQpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2hlY2tib3g6IGNzc2BcbiAgICBoZWlnaHQ6IGF1dG87IC8vIG5hdGl2ZSBjaGVja2JveCBoYXMgZml4ZWQgaGVpZ2h0IHdoaWNoIGRvZXMgbm90IHRha2UgaW50byBhY2NvdW50IGRlc2NyaXB0aW9uXG4gIGAsXG59O1xuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uUnVsZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBSZWdFeHAodmFsaWRhdGlvblJ1bGUpLnRlc3QodmFsdWUpID8gdHJ1ZSA6ICdJbnZhbGlkIGZvcm1hdCc7XG59O1xuXG5jb25zdCBkZXRlcm1pbmVSZXF1aXJlZCA9IChvcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24sIGdldFZhbHVlczogYW55LCBwYXRoSW5kZXg6IHN0cmluZykgPT4ge1xuICBpZiAoIW9wdGlvbi5kZXBlbmRzT24pIHtcbiAgICByZXR1cm4gb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlO1xuICB9XG4gIGlmIChpc0VtcHR5KGdldFZhbHVlcyhgJHtwYXRoSW5kZXh9c2VjdXJlRmllbGRzYCkpKSB7XG4gICAgY29uc3QgZGVwZW5kZW50T24gPSBnZXRWYWx1ZXMoYCR7cGF0aEluZGV4fXNlY3VyZVNldHRpbmdzLiR7b3B0aW9uLmRlcGVuZHNPbn1gKTtcbiAgICByZXR1cm4gIUJvb2xlYW4oZGVwZW5kZW50T24pICYmIG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXBlbmRlbnRPbjogYm9vbGVhbiA9IGdldFZhbHVlcyhgJHtwYXRoSW5kZXh9c2VjdXJlRmllbGRzLiR7b3B0aW9uLmRlcGVuZHNPbn1gKTtcbiAgICByZXR1cm4gIWRlcGVuZGVudE9uICYmIG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgZGV0ZXJtaW5lUmVhZE9ubHkgPSAob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBnZXRWYWx1ZXM6IGFueSwgcGF0aEluZGV4OiBzdHJpbmcpID0+IHtcbiAgaWYgKCFvcHRpb24uZGVwZW5kc09uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc0VtcHR5KGdldFZhbHVlcyhgJHtwYXRoSW5kZXh9c2VjdXJlRmllbGRzYCkpKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlcyhgJHtwYXRoSW5kZXh9c2VjdXJlU2V0dGluZ3MuJHtvcHRpb24uZGVwZW5kc09ufWApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRWYWx1ZXMoYCR7cGF0aEluZGV4fXNlY3VyZUZpZWxkcy4ke29wdGlvbi5kZXBlbmRzT259YCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuLi8uLi8uLi9ydWxlcy9BY3Rpb25JY29uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdmFsdWU/OiBzdHJpbmdbXTtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFN0cmluZ0FycmF5SW5wdXQ6IEZDPFByb3BzPiA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgcmVhZE9ubHkgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUuc2xpY2UoKTtcbiAgICBuZXdWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWYWx1ZSA9IChpdGVtVmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25DaGFuZ2UodmFsdWUubWFwKCh2LCBpKSA9PiAoaSA9PT0gaW5kZXggPyBpdGVtVmFsdWUgOiB2KSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHshIXZhbHVlPy5sZW5ndGggJiZcbiAgICAgICAgdmFsdWUubWFwKCh2LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgIDxJbnB1dCByZWFkT25seT17cmVhZE9ubHl9IHZhbHVlPXt2fSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVZhbHVlKGUuY3VycmVudFRhcmdldC52YWx1ZSwgaW5kZXgpfSAvPlxuICAgICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlSWNvbn1cbiAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICB0b29sdGlwPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKGluZGV4KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoWy4uLih2YWx1ZSA/PyBbXSksICcnXSl9XG4gICAgICAgID5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICByb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBgLFxuICBkZWxldGVJY29uOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIGFkZEJ1dHRvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgRmllbGRFcnJvciwgRGVlcE1hcCwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ29sbGFwc2libGVTZWN0aW9uIH0gZnJvbSAnLi4vQ29sbGFwc2libGVTZWN0aW9uJztcbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuLi8uLi8uLi9ydWxlcy9BY3Rpb25JY29uJztcbmltcG9ydCB7IE9wdGlvbkZpZWxkIH0gZnJvbSAnLi9PcHRpb25GaWVsZCc7XG5pbXBvcnQgeyB1c2VDb250cm9sbGVkRmllbGRBcnJheSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUNvbnRyb2xsZWRGaWVsZEFycmF5JztcbmltcG9ydCB7IGdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkZWZhdWx0VmFsdWVzPzogYW55W107XG4gIG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbjtcbiAgcGF0aFByZWZpeDogc3RyaW5nO1xuICBlcnJvcnM/OiBBcnJheTxEZWVwTWFwPGFueSwgRmllbGRFcnJvcj4+O1xuICByZWFkT25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTdWJmb3JtQXJyYXlGaWVsZDogRkM8UHJvcHM+ID0gKHsgb3B0aW9uLCBwYXRoUHJlZml4LCBlcnJvcnMsIGRlZmF1bHRWYWx1ZXMsIHJlYWRPbmx5ID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzKTtcbiAgY29uc3QgcGF0aCA9IGAke3BhdGhQcmVmaXh9JHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG4gIGNvbnN0IGZvcm1BUEkgPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCB7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSA9IHVzZUNvbnRyb2xsZWRGaWVsZEFycmF5KHsgbmFtZTogcGF0aCwgZm9ybUFQSSwgZGVmYXVsdHM6IGRlZmF1bHRWYWx1ZXMgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPENvbGxhcHNpYmxlU2VjdGlvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzaWJsZVNlY3Rpb259XG4gICAgICAgIGxhYmVsPXtgJHtvcHRpb24ubGFiZWx9ICgke2ZpZWxkcy5sZW5ndGh9KWB9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtvcHRpb24uZGVzY3JpcHRpb259XG4gICAgICA+XG4gICAgICAgIHsoZmllbGRzID8/IGRlZmF1bHRWYWx1ZXMgPz8gW10pLm1hcCgoZmllbGQsIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbUluZGV4fSBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgJHtwYXRofS4ke2l0ZW1JbmRleH0uZGVsZXRlLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGl0ZW1JbmRleCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVJY29ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtvcHRpb24uc3ViZm9ybU9wdGlvbnM/Lm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbkZpZWxkXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkPy5bb3B0aW9uLnByb3BlcnR5TmFtZV19XG4gICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi5wcm9wZXJ0eU5hbWV9XG4gICAgICAgICAgICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgIHBhdGhQcmVmaXg9e2Ake3BhdGh9LiR7aXRlbUluZGV4fS5gfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uW2l0ZW1JbmRleF0/LltvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD17YCR7cGF0aH0uYWRkLWJ1dHRvbmB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGVuZCh7IF9faWQ6IFN0cmluZyhNYXRoLnJhbmRvbSgpKSB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29sbGFwc2libGVTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IEZpZWxkRXJyb3IsIERlZXBNYXAsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IE9wdGlvbkZpZWxkIH0gZnJvbSAnLi9PcHRpb25GaWVsZCc7XG5pbXBvcnQgeyBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBY3Rpb25JY29uIH0gZnJvbSAnLi4vLi4vLi4vcnVsZXMvQWN0aW9uSWNvbic7XG5pbXBvcnQgeyBnZXRSZWNlaXZlckZvcm1GaWVsZFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGVmYXVsdFZhbHVlOiBhbnk7XG4gIG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbjtcbiAgcGF0aFByZWZpeDogc3RyaW5nO1xuICBlcnJvcnM/OiBEZWVwTWFwPGFueSwgRmllbGRFcnJvcj47XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFN1YmZvcm1GaWVsZDogRkM8UHJvcHM+ID0gKHsgb3B0aW9uLCBwYXRoUHJlZml4LCBlcnJvcnMsIGRlZmF1bHRWYWx1ZSwgcmVhZE9ubHkgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0UmVjZWl2ZXJGb3JtRmllbGRTdHlsZXMpO1xuICBjb25zdCBuYW1lID0gYCR7cGF0aFByZWZpeH0ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YDtcbiAgY29uc3QgeyB3YXRjaCB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3QgX3dhdGNoVmFsdWUgPSB3YXRjaChuYW1lKTtcbiAgY29uc3QgdmFsdWUgPSBfd2F0Y2hWYWx1ZSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogX3dhdGNoVmFsdWU7XG5cbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoISF2YWx1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IGRhdGEtdGVzdGlkPXtgJHtuYW1lfS5jb250YWluZXJgfT5cbiAgICAgIDxoNj57b3B0aW9uLmxhYmVsfTwvaDY+XG4gICAgICB7b3B0aW9uLmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57b3B0aW9uLmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICB7c2hvdyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YCR7bmFtZX0uZGVsZXRlLWJ1dHRvbmB9XG4gICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICB0b29sdGlwPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyhmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUljb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyhvcHRpb24uc3ViZm9ybU9wdGlvbnMgPz8gW10pLm1hcCgoc3ViT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8T3B0aW9uRmllbGRcbiAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWU/LltzdWJPcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgICAgICBrZXk9e3N1Yk9wdGlvbi5wcm9wZXJ0eU5hbWV9XG4gICAgICAgICAgICAgICAgb3B0aW9uPXtzdWJPcHRpb259XG4gICAgICAgICAgICAgICAgcGF0aFByZWZpeD17YCR7bmFtZX0uYH1cbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5bc3ViT3B0aW9uLnByb3BlcnR5TmFtZV19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IXNob3cgJiYgIXJlYWRPbmx5ICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfVxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtgJHtuYW1lfS5hZGQtYnV0dG9uYH1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuZXhwb3J0IGNvbnN0IGdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb2xsYXBzaWJsZVNlY3Rpb246IGNzc2BcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDIsIDApfTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDEpfTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGAsXG4gIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyfTtcbiAgICBtYXJnaW46IDA7XG4gIGAsXG4gIGRlbGV0ZUljb246IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgdG9wOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICBhZGRCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdFdpdGhBZGQgfSBmcm9tICcuL1NlbGVjdFdJdGhBZGQnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbiwgYW5ub3RhdGlvbkxhYmVscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgZXhpc3RpbmdLZXlzOiBzdHJpbmdbXTtcblxuICB2YWx1ZT86IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgJ2FyaWEtbGFiZWwnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW5ub3RhdGlvbktleUlucHV0OiBGQzxQcm9wcz4gPSAoeyB2YWx1ZSwgZXhpc3RpbmdLZXlzLCAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGFubm90YXRpb25PcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogU2VsZWN0YWJsZVZhbHVlW10gPT5cbiAgICAgIE9iamVjdC52YWx1ZXMoQW5ub3RhdGlvbilcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiAhZXhpc3RpbmdLZXlzLmluY2x1ZGVzKGtleSkpIC8vIHJlbW92ZSBrZXlzIGFscmVhZHkgdGFrZW4gaW4gb3RoZXIgYW5ub3RhdGlvbnNcbiAgICAgICAgLm1hcCgoa2V5KSA9PiAoeyB2YWx1ZToga2V5LCBsYWJlbDogYW5ub3RhdGlvbkxhYmVsc1trZXldIH0pKSxcbiAgICBbZXhpc3RpbmdLZXlzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFdpdGhBZGRcbiAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9wdGlvbnM9e2Fubm90YXRpb25PcHRpb25zfVxuICAgICAgY3VzdG9tPXshIXZhbHVlICYmICEoT2JqZWN0LnZhbHVlcyhBbm5vdGF0aW9uKSBhcyBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRmllbGRBcnJheSwgSW5wdXQsIElucHV0Q29udHJvbCwgTGFiZWwsIFRleHRBcmVhLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgQW5ub3RhdGlvbktleUlucHV0IH0gZnJvbSAnLi9Bbm5vdGF0aW9uS2V5SW5wdXQnO1xuXG5jb25zdCBBbm5vdGF0aW9uc0ZpZWxkOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIHJlZ2lzdGVyLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IGFubm90YXRpb25zID0gd2F0Y2goJ2Fubm90YXRpb25zJykgYXMgUnVsZUZvcm1WYWx1ZXNbJ2Fubm90YXRpb25zJ107XG5cbiAgY29uc3QgZXhpc3RpbmdLZXlzID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpOiBzdHJpbmdbXSA9PiBhbm5vdGF0aW9ucy5maWx0ZXIoKF8sIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IGluZGV4KS5tYXAoKHsga2V5IH0pID0+IGtleSksXG4gICAgW2Fubm90YXRpb25zXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYWJlbD5TdW1tYXJ5IGFuZCBhbm5vdGF0aW9uczwvTGFiZWw+XG4gICAgICA8RmllbGRBcnJheSBuYW1lPXsnYW5ub3RhdGlvbnMnfSBjb250cm9sPXtjb250cm9sfT5cbiAgICAgICAgeyh7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x1bW59PlxuICAgICAgICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNVcmwgPSBhbm5vdGF0aW9uc1tpbmRleF0/LmtleT8udG9Mb2NhbGVMb3dlckNhc2UoKS5lbmRzV2l0aCgndXJsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgVmFsdWVJbnB1dENvbXBvbmVudCA9IGlzVXJsID8gSW5wdXQgOiBUZXh0QXJlYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpZWxkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuYW5ub3RhdGlvbnM/LltpbmRleF0/LmtleT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy5rZXk/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Bhbm5vdGF0aW9uLWtleS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgYW5ub3RhdGlvbnNbJHtpbmRleH1dLmtleWB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBbm5vdGF0aW9uS2V5SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEFubm90YXRpb24gZGV0YWlsICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdLZXlzPXtleGlzdGluZ0tleXMoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6ICEhYW5ub3RhdGlvbnNbaW5kZXhdPy52YWx1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3dJdGVtTWFyZ2luLCBzdHlsZXMuZmllbGQpfVxuICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxWYWx1ZUlucHV0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YGFubm90YXRpb24tdmFsdWUtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuYW5ub3RhdGlvblZhbHVlSW5wdXQsIHsgW3N0eWxlcy50ZXh0YXJlYV06ICFpc1VybCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgYW5ub3RhdGlvbnNbJHtpbmRleH1dLnZhbHVlYCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXNVcmwgPyAnaHR0cHM6Ly8nIDogYFRleHRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd0l0ZW1NYXJnaW59XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZSBhbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRBbm5vdGF0aW9uc0J1dHRvbn1cbiAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGFwcGVuZCh7IGtleTogJycsIHZhbHVlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIGluZm9cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9GaWVsZEFycmF5PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGFubm90YXRpb25WYWx1ZUlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQyNnB4O1xuICBgLFxuICB0ZXh0YXJlYTogY3NzYFxuICAgIGhlaWdodDogNzZweDtcbiAgYCxcbiAgYWRkQW5ub3RhdGlvbnNCdXR0b246IGNzc2BcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMTQ4cHg7XG4gIGAsXG4gIGZsZXhDb2x1bW46IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGAsXG4gIGZpZWxkOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgYCxcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGAsXG4gIGZsZXhSb3dJdGVtTWFyZ2luOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGlvbnNGaWVsZDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZpZWxkQXJyYXksIElucHV0LCBJbmxpbmVMYWJlbCwgTGFiZWwsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgTGFiZWxzRmllbGQ6IEZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgY29udHJvbCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCBsYWJlbHMgPSB3YXRjaCgnbGFiZWxzJyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgc3R5bGVzLndyYXBwZXIpfT5cbiAgICAgIDxMYWJlbD5DdXN0b20gTGFiZWxzPC9MYWJlbD5cbiAgICAgIDxGaWVsZEFycmF5IGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgeyh7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD17MTh9PkxhYmVsczwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sdW1ufT5cbiAgICAgICAgICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmllbGQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93LCBzdHlsZXMuY2VudGVyQWxpZ25Sb3cpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5sYWJlbHM/LltpbmRleF0/LmtleT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxhYmVscz8uW2luZGV4XT8ua2V5Py5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYGxhYmVsc1ske2luZGV4fV0ua2V5YCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogISFsYWJlbHNbaW5kZXhdPy52YWx1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2BsYWJlbC1rZXktJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElubGluZUxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmVxdWFsU2lnbn0+PTwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubGFiZWxzPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxhYmVscz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgbGFiZWxzWyR7aW5kZXh9XS52YWx1ZWAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6ICEhbGFiZWxzW2luZGV4XT8ua2V5LCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgbGFiZWwtdmFsdWUtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlTGFiZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZSBsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTGFiZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZCh7fSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFkZCBsYWJlbFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRmllbGRBcnJheT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcHBlcjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGZsZXhDb2x1bW46IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGAsXG4gICAgZmxleFJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICYgKyBidXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICAgIH1cbiAgICBgLFxuICAgIGRlbGV0ZUxhYmVsQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBhZGRMYWJlbEJ1dHRvbjogY3NzYFxuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBgLFxuICAgIGNlbnRlckFsaWduUm93OiBjc3NgXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgYCxcbiAgICBlcXVhbFNpZ246IGNzc2BcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgYCxcbiAgICBsYWJlbElucHV0OiBjc3NgXG4gICAgICB3aWR0aDogMTgzcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgJiArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICAgIH1cbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxzRmllbGQ7XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IElucHV0LCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgb3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICB2YWx1ZT86IHN0cmluZztcbiAgYWRkTGFiZWw/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGN1c3RvbT86IGJvb2xlYW47XG4gIG9uQ3VzdG9tQ2hhbmdlPzogKGN1c3RvbTogYm9vbGVhbikgPT4gdm9pZDtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgJ2FyaWEtbGFiZWwnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0V2l0aEFkZDogRkM8UHJvcHM+ID0gKHtcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBvcHRpb25zLFxuICBjbGFzc05hbWUsXG4gIHBsYWNlaG9sZGVyLFxuICB3aWR0aCxcbiAgY3VzdG9tLFxuICBvbkN1c3RvbUNoYW5nZSxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgYWRkTGFiZWwgPSAnKyBBZGQgbmV3JyxcbiAgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG59KSA9PiB7XG4gIGNvbnN0IFtpc0N1c3RvbSwgc2V0SXNDdXN0b21dID0gdXNlU3RhdGUoY3VzdG9tKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXN0b20pIHtcbiAgICAgIHNldElzQ3VzdG9tKGN1c3RvbSk7XG4gICAgfVxuICB9LCBbY3VzdG9tXSk7XG5cbiAgY29uc3QgX29wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT4gWy4uLm9wdGlvbnMsIHsgdmFsdWU6ICdfX2FkZF9fJywgbGFiZWw6IGFkZExhYmVsIH1dLFxuICAgIFtvcHRpb25zLCBhZGRMYWJlbF1cbiAgKTtcblxuICBpZiAoaXNDdXN0b20pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBhdXRvRm9jdXM9eyFjdXN0b219XG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSl9XG4gICAgICAvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgb3B0aW9ucz17X29wdGlvbnN9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17KHZhbDogU2VsZWN0YWJsZVZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWw/LnZhbHVlO1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ19fYWRkX18nKSB7XG4gICAgICAgICAgICBzZXRJc0N1c3RvbSh0cnVlKTtcbiAgICAgICAgICAgIGlmIChvbkN1c3RvbUNoYW5nZSkge1xuICAgICAgICAgICAgICBvbkN1c3RvbUNoYW5nZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlKCcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IEljb25OYW1lLCBUb29sdGlwLCBMaW5rQnV0dG9uLCBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29udGVudCwgVG9vbHRpcFBsYWNlbWVudCB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1Rvb2x0aXAnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0b29sdGlwOiBQb3BvdmVyQ29udGVudDtcbiAgaWNvbjogSWNvbk5hbWU7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgdG9vbHRpcFBsYWNlbWVudD86IFRvb2x0aXBQbGFjZW1lbnQ7XG4gIHRvPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICAnZGF0YS10ZXN0aWQnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQWN0aW9uSWNvbjogRkM8UHJvcHM+ID0gKHtcbiAgdG9vbHRpcCxcbiAgaWNvbixcbiAgdG8sXG4gIHRhcmdldCxcbiAgb25DbGljayxcbiAgY2xhc3NOYW1lLFxuICB0b29sdGlwUGxhY2VtZW50ID0gJ3RvcCcsXG4gIC4uLnJlc3Rcbn0pID0+IHtcbiAgY29uc3QgYXJpYUxhYmVsID0gdHlwZW9mIHRvb2x0aXAgPT09ICdzdHJpbmcnID8gdG9vbHRpcCA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxUb29sdGlwIGNvbnRlbnQ9e3Rvb2x0aXB9IHBsYWNlbWVudD17dG9vbHRpcFBsYWNlbWVudH0+XG4gICAgICB7dG8gPyAoXG4gICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgaHJlZj17dG99XG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9Ub29sdGlwPlxuICApO1xufTtcbiIsImltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ2FwcC9jb3JlL3N0b3JlJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVksIEFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlcywgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5mdW5jdGlvbiBpc0FsZXJ0TWFuYWdlclNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIHx8XG4gICAgISFnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlcygpLmZpbmQoKGRzKSA9PiBkcy5uYW1lID09PSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKVxuICApO1xufVxuXG4vKiB0aGlzIHdpbGwgcmV0dXJuIGFtIG5hbWUgZWl0aGVyIGZyb20gcXVlcnkgcGFyYW1zIG9yIGZyb20gbG9jYWwgc3RvcmFnZSBvciBhIGRlZmF1bHQgKGdyYWZhbmEpLlxuICpcbiAqIGZhbGxiYWNrVXJsIC0gaWYgcHJvdmlkZWQsIHdpbGwgcmVkaXJlY3QgdG8gdGhpcyB1cmwgaWYgYWxlcnRtYW5hZ2VyIHByb3ZpZGVkIGluIHF1ZXJ5IG5vIGxvbmdlclxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSgpOiBbc3RyaW5nIHwgdW5kZWZpbmVkLCAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nKSA9PiB2b2lkXSB7XG4gIGNvbnN0IFtxdWVyeVBhcmFtcywgdXBkYXRlUXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcblxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWlzQWxlcnRNYW5hZ2VyU291cmNlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IG51bGwgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yZS5zZXQoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVksIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuICAgICAgICB1cGRhdGVRdWVyeVBhcmFtcyh7IFtBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldOiBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3VwZGF0ZVF1ZXJ5UGFyYW1zXVxuICApO1xuXG4gIGNvbnN0IHF1ZXJ5U291cmNlID0gcXVlcnlQYXJhbXNbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTtcblxuICBpZiAocXVlcnlTb3VyY2UgJiYgdHlwZW9mIHF1ZXJ5U291cmNlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc0FsZXJ0TWFuYWdlclNvdXJjZShxdWVyeVNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBbcXVlcnlTb3VyY2UsIHVwZGF0ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vbiBleGlzdGluZyBhbGVydG1hbmFnZXJcbiAgICAgIHJldHVybiBbdW5kZWZpbmVkLCB1cGRhdGVdO1xuICAgIH1cbiAgfVxuICBjb25zdCBzdG9yZVNvdXJjZSA9IHN0b3JlLmdldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gIGlmIChzdG9yZVNvdXJjZSAmJiB0eXBlb2Ygc3RvcmVTb3VyY2UgPT09ICdzdHJpbmcnICYmIGlzQWxlcnRNYW5hZ2VyU291cmNlKHN0b3JlU291cmNlKSkge1xuICAgIHVwZGF0ZShzdG9yZVNvdXJjZSk7XG4gICAgcmV0dXJuIFtzdG9yZVNvdXJjZSwgdXBkYXRlXTtcbiAgfVxuXG4gIHJldHVybiBbR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSwgdXBkYXRlXTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlRm9ybVJldHVybiB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IHNldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmludGVyZmFjZSBPcHRpb25zPFI+IHtcbiAgbmFtZTogc3RyaW5nO1xuICBmb3JtQVBJOiBVc2VGb3JtUmV0dXJuPGFueT47XG4gIGRlZmF1bHRzPzogUltdO1xuXG4gIC8vIGlmIHRydWUsIHNldHMgYF9fZGVsZXRlZDogdHJ1ZWAgYnV0IGRvZXMgbm90IHJlbW92ZSBpdGVtIGZyb20gdGhlIGFycmF5IGluIHZhbHVlc1xuICBzb2Z0RGVsZXRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgQ29udHJvbGxlZEZpZWxkPFI+ID0gUiAmIHtcbiAgX19kZWxldGVkPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IEVNUFRZX0FSUkFZID0gW10gYXMgY29uc3Q7XG5cbi8qXG4gKiByZWFjdC1ob29rLWZvcm0ncyBvd24gdXNlRmllbGRBcnJheSBpcyB1bmNvbnRyb2xsZWQgYW5kIHN1cGVyIGJ1Z2d5LlxuICogdGhpcyBpcyBhIHNpbXBsZSBjb250cm9sbGVkIHZlcnNpb24uIEl0J3MgZGVhZCBzaW1wbGUgYW5kIG1vcmUgcm9idXN0IGF0IHRoZSBjb3N0IG9mIHJlLXJlbmRlcmluZyB0aGUgZm9ybVxuICogb24gZXZlcnkgY2hhbmdlIHRvIHRoZSBzdWIgZm9ybXMgaW4gdGhlIGFycmF5LlxuICogV2FybmluZzogeW91J2xsIGhhdmUgdG8gdGFrZSBjYXJlIG9mIHlvdXIgb3duIHVuaXF1ZSBpZGVudGlpZmVyIHRvIHVzZSBhcyBga2V5YCBmb3IgdGhlIFJlYWN0Tm9kZSBhcnJheS5cbiAqIFVzaW5nIGluZGV4IHdpbGwgY2F1c2UgcHJvYmxlbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250cm9sbGVkRmllbGRBcnJheTxSPihvcHRpb25zOiBPcHRpb25zPFI+KSB7XG4gIGNvbnN0IHsgbmFtZSwgZm9ybUFQSSwgZGVmYXVsdHMsIHNvZnREZWxldGUgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHsgd2F0Y2gsIGdldFZhbHVlcywgcmVzZXQsIHNldFZhbHVlIH0gPSBmb3JtQVBJO1xuXG4gIGNvbnN0IGZpZWxkczogQXJyYXk8Q29udHJvbGxlZEZpZWxkPFI+PiA9IHdhdGNoKG5hbWUpID8/IGRlZmF1bHRzID8/IEVNUFRZX0FSUkFZO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh1cGRhdGVGbjogKGZpZWxkczogUltdKSA9PiBSW10pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2V0VmFsdWVzKCkpKTtcbiAgICAgIGNvbnN0IG5ld0l0ZW1zID0gdXBkYXRlRm4oZmllbGRzID8/IFtdKTtcbiAgICAgIHJlc2V0KHNldCh2YWx1ZXMsIG5hbWUsIG5ld0l0ZW1zKSk7XG4gICAgfSxcbiAgICBbZ2V0VmFsdWVzLCBuYW1lLCByZXNldCwgZmllbGRzXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgZmllbGRzLFxuICAgIGFwcGVuZDogdXNlQ2FsbGJhY2soKHZhbHVlczogUikgPT4gdXBkYXRlKChmaWVsZHMpID0+IFsuLi5maWVsZHMsIHZhbHVlc10pLCBbdXBkYXRlXSksXG4gICAgcmVtb3ZlOiB1c2VDYWxsYmFjayhcbiAgICAgIChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChzb2Z0RGVsZXRlKSB7XG4gICAgICAgICAgc2V0VmFsdWUoYCR7bmFtZX0uJHtpbmRleH0uX19kZWxldGVkYCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlKChpdGVtcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBpdGVtcy5zbGljZSgpO1xuICAgICAgICAgICAgbmV3SXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdJdGVtcztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFt1cGRhdGUsIG5hbWUsIHNldFZhbHVlLCBzb2Z0RGVsZXRlXVxuICAgICksXG4gIH07XG59XG4iLCJpbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxlcnRUYWJsZVN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgdGFibGU6IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAke3RoZW1lLmNvbG9ycy5ib3JkZXIud2Vha307XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuXG4gICAgdHIge1xuICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgIH1cbiAgYCxcbiAgZXZlblJvdzogY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gIGAsXG4gIGNvbEV4cGFuZDogY3NzYFxuICAgIHdpZHRoOiAzNnB4O1xuICBgLFxuICBhY3Rpb25zQ2VsbDogY3NzYFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgfVxuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBOb3RpZmllckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmZ1bmN0aW9uIG9wdGlvbihcbiAgcHJvcGVydHlOYW1lOiBzdHJpbmcsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHJlc3Q6IFBhcnRpYWw8Tm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbj4gPSB7fVxuKTogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiB7XG4gIHJldHVybiB7XG4gICAgcHJvcGVydHlOYW1lLFxuICAgIGxhYmVsLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGVsZW1lbnQ6ICdpbnB1dCcsXG4gICAgaW5wdXRUeXBlOiAnJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgc2VjdXJlOiBmYWxzZSxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgdmFsaWRhdGlvblJ1bGU6ICcnLFxuICAgIHNob3dXaGVuOiB7IGZpZWxkOiAnJywgaXM6ICcnIH0sXG4gICAgZGVwZW5kc09uOiAnJyxcbiAgICAuLi5yZXN0LFxuICB9O1xufVxuXG5jb25zdCBiYXNpY0F1dGhPcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gPSBvcHRpb24oXG4gICdiYXNpY19hdXRoJyxcbiAgJ0Jhc2ljIGF1dGgnLFxuICAnU2V0cyB0aGUgYEF1dGhvcml6YXRpb25gIGhlYWRlciB3aXRoIHRoZSBjb25maWd1cmVkIHVzZXJuYW1lIGFuZCBwYXNzd29yZC4gUGFzc3dvcmQgYW5kIHBhc3N3b3JkX2ZpbGUgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS4nLFxuICB7XG4gICAgZWxlbWVudDogJ3N1YmZvcm0nLFxuICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ3VzZXJuYW1lJywgJ1VzZXJuYW1lJywgJycpLFxuICAgICAgb3B0aW9uKCdwYXNzd29yZCcsICdQYXNzd29yZCcsICcnKSxcbiAgICAgIG9wdGlvbigncGFzc3dvcmRfZmlsZScsICdQYXNzd29yZCBmaWxlJywgJycpLFxuICAgIF0sXG4gIH1cbik7XG5cbmNvbnN0IHRsc0NvbmZpZ09wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiA9IG9wdGlvbigndGxzX2NvbmZpZycsICdUTFMgY29uZmlnJywgJ0NvbmZpZ3VyZXMgdGhlIFRMUyBzZXR0aW5ncy4nLCB7XG4gIGVsZW1lbnQ6ICdzdWJmb3JtJyxcbiAgc3ViZm9ybU9wdGlvbnM6IFtcbiAgICBvcHRpb24oJ2NhX2ZpbGUnLCAnQ0EgZmlsZScsICdDQSBjZXJ0aWZpY2F0ZSB0byB2YWxpZGF0ZSB0aGUgc2VydmVyIGNlcnRpZmljYXRlIHdpdGguJyksXG4gICAgb3B0aW9uKCdjZXJ0X2ZpbGUnLCAnQ2VydCBmaWxlJywgJ0NlcnRpZmljYXRlIGZvciBjbGllbnQgY2VydCBhdXRoZW50aWNhdGlvbiB0byB0aGUgc2VydmVyLicpLFxuICAgIG9wdGlvbigna2V5X2ZpbGUnLCAnS2V5IGZpbGUnLCAnS2V5IGZpbGUgZm9yIGNsaWVudCBjZXJ0IGF1dGhlbnRpY2F0aW9uIHRvIHRoZSBzZXJ2ZXIuJyksXG4gICAgb3B0aW9uKCdzZXJ2ZXJfbmFtZScsICdTZXJ2ZXIgbmFtZScsICdTZXJ2ZXJOYW1lIGV4dGVuc2lvbiB0byBpbmRpY2F0ZSB0aGUgbmFtZSBvZiB0aGUgc2VydmVyLicpLFxuICAgIG9wdGlvbignaW5zZWN1cmVfc2tpcF92ZXJpZnknLCAnU2tpcCB2ZXJpZnknLCAnRGlzYWJsZSB2YWxpZGF0aW9uIG9mIHRoZSBzZXJ2ZXIgY2VydGlmaWNhdGUuJywge1xuICAgICAgZWxlbWVudDogJ2NoZWNrYm94JyxcbiAgICB9KSxcbiAgXSxcbn0pO1xuXG5jb25zdCBodHRwQ29uZmlnT3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uID0gb3B0aW9uKFxuICAnaHR0cF9jb25maWcnLFxuICAnSFRUUCBDb25maWcnLFxuICAnTm90ZSB0aGF0IGBiYXNpY19hdXRoYCwgYGJlYXJlcl90b2tlbmAgYW5kIGBiZWFyZXJfdG9rZW5fZmlsZWAgb3B0aW9ucyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLicsXG4gIHtcbiAgICBlbGVtZW50OiAnc3ViZm9ybScsXG4gICAgc3ViZm9ybU9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbignYmVhcmVyX3Rva2VuJywgJ0JlYXJlciB0b2tlbicsICdTZXRzIHRoZSBgQXV0aG9yaXphdGlvbmAgaGVhZGVyIHdpdGggdGhlIGNvbmZpZ3VyZWQgYmVhcmVyIHRva2VuLicpLFxuICAgICAgb3B0aW9uKFxuICAgICAgICAnYmVhcmVyX3Rva2VuX2ZpbGUnLFxuICAgICAgICAnQmVhcmVyIHRva2VuIGZpbGUnLFxuICAgICAgICAnU2V0cyB0aGUgYEF1dGhvcml6YXRpb25gIGhlYWRlciB3aXRoIHRoZSBiZWFyZXIgdG9rZW4gcmVhZCBmcm9tIHRoZSBjb25maWd1cmVkIGZpbGUuJ1xuICAgICAgKSxcbiAgICAgIG9wdGlvbigncHJveHlfdXJsJywgJ1Byb3h5IFVSTCcsICdPcHRpb25hbCBwcm94eSBVUkwuJyksXG4gICAgICBiYXNpY0F1dGhPcHRpb24sXG4gICAgICB0bHNDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGNsb3VkTm90aWZpZXJUeXBlczogTm90aWZpZXJEVE9bXSA9IFtcbiAge1xuICAgIG5hbWU6ICdFbWFpbCcsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbiBvdmVyIFNNVFAnLFxuICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgaW5mbzogJycsXG4gICAgaGVhZGluZzogJ0VtYWlsIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ3RvJywgJ1RvJywgJ1RoZSBlbWFpbCBhZGRyZXNzIHRvIHNlbmQgbm90aWZpY2F0aW9ucyB0by4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgb3B0aW9uKCdmcm9tJywgJ0Zyb20nLCAnVGhlIHNlbmRlciBhZGRyZXNzLicpLFxuICAgICAgb3B0aW9uKCdzbWFydGhvc3QnLCAnU01UUCBob3N0JywgJ1RoZSBTTVRQIGhvc3QgdGhyb3VnaCB3aGljaCBlbWFpbHMgYXJlIHNlbnQuJyksXG4gICAgICBvcHRpb24oJ2hlbGxvJywgJ0hlbGxvJywgJ1RoZSBob3N0bmFtZSB0byBpZGVudGlmeSB0byB0aGUgU01UUCBzZXJ2ZXIuJyksXG4gICAgICBvcHRpb24oJ2F1dGhfdXNlcm5hbWUnLCAnVXNlcm5hbWUnLCAnU01UUCBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbicpLFxuICAgICAgb3B0aW9uKCdhdXRoX3Bhc3N3b3JkJywgJ1Bhc3N3b3JkJywgJ1NNVFAgYXV0aGVudGljYXRpb24gaW5mb3JtYXRpb24nKSxcbiAgICAgIG9wdGlvbignYXV0aF9zZWNyZXQnLCAnU2VjcmV0JywgJ1NNVFAgYXV0aGVudGljYXRpb24gaW5mb3JtYXRpb24nKSxcbiAgICAgIG9wdGlvbignYXV0aF9pZGVudGl0eScsICdJZGVudGl0eScsICdTTVRQIGF1dGhlbnRpY2F0aW9uIGluZm9ybWF0aW9uJyksXG4gICAgICBvcHRpb24oJ3JlcXVpcmVfdGxzJywgJ1JlcXVpcmUgVExTJywgJ1RoZSBTTVRQIFRMUyByZXF1aXJlbWVudCcsIHsgZWxlbWVudDogJ2NoZWNrYm94JyB9KSxcbiAgICAgIG9wdGlvbignaHRtbCcsICdFbWFpbCBIVE1MIGJvZHknLCAnVGhlIEhUTUwgYm9keSBvZiB0aGUgZW1haWwgbm90aWZpY2F0aW9uLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcImVtYWlsLmRlZmF1bHQuaHRtbFwiIC4gfX0nLFxuICAgICAgICBlbGVtZW50OiAndGV4dGFyZWEnLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3RleHQnLCAnRW1haWwgdGV4dCBib2R5JywgJ1RoZSB0ZXh0IGJvZHkgb2YgdGhlIGVtYWlsIG5vdGlmaWNhdGlvbi4nLCB7IGVsZW1lbnQ6ICd0ZXh0YXJlYScgfSksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdoZWFkZXJzJyxcbiAgICAgICAgJ0hlYWRlcnMnLFxuICAgICAgICAnRnVydGhlciBoZWFkZXJzIGVtYWlsIGhlYWRlciBrZXkvdmFsdWUgcGFpcnMuIE92ZXJyaWRlcyBhbnkgaGVhZGVycyBwcmV2aW91c2x5IHNldCBieSB0aGUgbm90aWZpY2F0aW9uIGltcGxlbWVudGF0aW9uLicsXG4gICAgICAgIHsgZWxlbWVudDogJ2tleV92YWx1ZV9tYXAnIH1cbiAgICAgICksXG4gICAgICB0bHNDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQYWdlckR1dHknLFxuICAgIGRlc2NyaXB0aW9uOiAnU2VuZCBub3RpZmljYXRpb25zIHRvIFBhZ2VyRHV0eScsXG4gICAgdHlwZTogJ3BhZ2VyZHV0eScsXG4gICAgaW5mbzogJycsXG4gICAgaGVhZGluZzogJ1BhZ2VyRHV0eSBzZXR0aW5ncycsXG4gICAgb3B0aW9uczogW1xuICAgICAgb3B0aW9uKFxuICAgICAgICAncm91dGluZ19rZXknLFxuICAgICAgICAnUm91dGluZyBrZXknLFxuICAgICAgICAnVGhlIFBhZ2VyRHV0eSBpbnRlZ3JhdGlvbiBrZXkgKHdoZW4gdXNpbmcgUGFnZXJEdXR5IGludGVncmF0aW9uIHR5cGUgYEV2ZW50cyBBUEkgdjJgKSdcbiAgICAgICksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdzZXJ2aWNlX2tleScsXG4gICAgICAgICdTZXJ2aWNlIGtleScsXG4gICAgICAgICdUaGUgUGFnZXJEdXR5IGludGVncmF0aW9uIGtleSAod2hlbiB1c2luZyBQYWdlckR1dHkgaW50ZWdyYXRpb24gdHlwZSBgUHJvbWV0aGV1c2ApLidcbiAgICAgICksXG4gICAgICBvcHRpb24oJ3VybCcsICdVUkwnLCAnVGhlIFVSTCB0byBzZW5kIEFQSSByZXF1ZXN0cyB0bycpLFxuICAgICAgb3B0aW9uKCdjbGllbnQnLCAnQ2xpZW50JywgJ1RoZSBjbGllbnQgaWRlbnRpZmljYXRpb24gb2YgdGhlIEFsZXJ0bWFuYWdlci4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJwYWdlcmR1dHkuZGVmYXVsdC5jbGllbnRcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdjbGllbnRfdXJsJywgJ0NsaWVudCBVUkwnLCAnQSBiYWNrbGluayB0byB0aGUgc2VuZGVyIG9mIHRoZSBub3RpZmljYXRpb24uJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwicGFnZXJkdXR5LmRlZmF1bHQuY2xpZW50VVJMXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nLCAnQSBkZXNjcmlwdGlvbiBvZiB0aGUgaW5jaWRlbnQuJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwicGFnZXJkdXR5LmRlZmF1bHQuZGVzY3JpcHRpb25cIiAufX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3NldmVyaXR5JywgJ1NldmVyaXR5JywgJ1NldmVyaXR5IG9mIHRoZSBpbmNpZGVudC4nLCB7IHBsYWNlaG9sZGVyOiAnZXJyb3InIH0pLFxuICAgICAgb3B0aW9uKFxuICAgICAgICAnZGV0YWlscycsXG4gICAgICAgICdEZXRhaWxzJyxcbiAgICAgICAgJ0Egc2V0IG9mIGFyYml0cmFyeSBrZXkvdmFsdWUgcGFpcnMgdGhhdCBwcm92aWRlIGZ1cnRoZXIgZGV0YWlsIGFib3V0IHRoZSBpbmNpZGVudC4nLFxuICAgICAgICB7XG4gICAgICAgICAgZWxlbWVudDogJ2tleV92YWx1ZV9tYXAnLFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgb3B0aW9uKCdpbWFnZXMnLCAnSW1hZ2VzJywgJ0ltYWdlcyB0byBhdHRhY2ggdG8gdGhlIGluY2lkZW50LicsIHtcbiAgICAgICAgZWxlbWVudDogJ3N1YmZvcm1fYXJyYXknLFxuICAgICAgICBzdWJmb3JtT3B0aW9uczogW1xuICAgICAgICAgIG9wdGlvbignaHJlZicsICdVUkwnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgICBvcHRpb24oJ3NvdXJjZScsICdTb3VyY2UnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgICBvcHRpb24oJ2FsdCcsICdBbHQnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdsaW5rcycsICdMaW5rcycsICdMaW5rcyB0byBhdHRhY2ggdG8gdGhlIGluY2lkZW50LicsIHtcbiAgICAgICAgZWxlbWVudDogJ3N1YmZvcm1fYXJyYXknLFxuICAgICAgICBzdWJmb3JtT3B0aW9uczogW29wdGlvbignaHJlZicsICdVUkwnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSwgb3B0aW9uKCd0ZXh0JywgJ1RleHQnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KV0sXG4gICAgICB9KSxcbiAgICAgIGh0dHBDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdXNob3ZlcicsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbnMgdG8gUHVzaG92ZXInLFxuICAgIHR5cGU6ICdwdXNob3ZlcicsXG4gICAgaW5mbzogJycsXG4gICAgaGVhZGluZzogJ1B1c2hvdmVyIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ3VzZXJfa2V5JywgJ1VzZXIga2V5JywgJ1RoZSByZWNpcGllbnQgdXNlcuKAmXMgdXNlciBrZXkuJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgIG9wdGlvbigndG9rZW4nLCAnVG9rZW4nLCAnWW91ciByZWdpc3RlcmVkIGFwcGxpY2F0aW9u4oCZcyBBUEkgdG9rZW4sIHNlZSBodHRwczovL3B1c2hvdmVyLm5ldC9hcHAnLCB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3RpdGxlJywgJ1RpdGxlJywgJ05vdGlmaWNhdGlvbiB0aXRsZS4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJwdXNob3Zlci5kZWZhdWx0LnRpdGxlXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignbWVzc2FnZScsICdNZXNzYWdlJywgJ05vdGlmaWNhdGlvbiBtZXNzYWdlLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInB1c2hvdmVyLmRlZmF1bHQubWVzc2FnZVwiIC4gfX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3VybCcsICdVUkwnLCAnQSBzdXBwbGVtZW50YXJ5IFVSTCBzaG93biBhbG9uZ3NpZGUgdGhlIG1lc3NhZ2UuJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwicHVzaG92ZXIuZGVmYXVsdC51cmxcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdwcmlvcml0eScsICdQcmlvcml0eScsICdQcmlvcml0eSwgc2VlIGh0dHBzOi8vcHVzaG92ZXIubmV0L2FwaSNwcmlvcml0eScsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyBpZiBlcSAuU3RhdHVzIFwiZmlyaW5nXCIgfX0ye3sgZWxzZSB9fTB7eyBlbmQgfX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdyZXRyeScsXG4gICAgICAgICdSZXRyeScsXG4gICAgICAgICdIb3cgb2Z0ZW4gdGhlIFB1c2hvdmVyIHNlcnZlcnMgd2lsbCBzZW5kIHRoZSBzYW1lIG5vdGlmaWNhdGlvbiB0byB0aGUgdXNlci4gTXVzdCBiZSBhdCBsZWFzdCAzMCBzZWNvbmRzLicsXG4gICAgICAgIHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJzFtJyxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIG9wdGlvbihcbiAgICAgICAgJ2V4cGlyZScsXG4gICAgICAgICdFeHBpcmUnLFxuICAgICAgICAnSG93IGxvbmcgeW91ciBub3RpZmljYXRpb24gd2lsbCBjb250aW51ZSB0byBiZSByZXRyaWVkIGZvciwgdW5sZXNzIHRoZSB1c2VyIGFja25vd2xlZGdlcyB0aGUgbm90aWZpY2F0aW9uLicsXG4gICAgICAgIHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJzFoJyxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGh0dHBDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTbGFjaycsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbnMgdG8gU2xhY2snLFxuICAgIHR5cGU6ICdzbGFjaycsXG4gICAgaW5mbzogJycsXG4gICAgaGVhZGluZzogJ1NsYWNrIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ2FwaV91cmwnLCAnV2ViaG9vayBVUkwnLCAnVGhlIFNsYWNrIHdlYmhvb2sgVVJMLicpLFxuICAgICAgb3B0aW9uKCdjaGFubmVsJywgJ0NoYW5uZWwnLCAnVGhlICNjaGFubmVsIG9yIEB1c2VyIHRvIHNlbmQgbm90aWZpY2F0aW9ucyB0by4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgb3B0aW9uKCdpY29uX2Vtb2ppJywgJ0Vtb2ppIGljb24nLCAnJyksXG4gICAgICBvcHRpb24oJ2ljb25fdXJsJywgJ0ljb24gVVJMJywgJycpLFxuICAgICAgb3B0aW9uKCdsaW5rX25hbWVzJywgJ05hbWVzIGxpbmsnLCAnJywgeyBlbGVtZW50OiAnY2hlY2tib3gnIH0pLFxuICAgICAgb3B0aW9uKCd1c2VybmFtZScsICdVc2VybmFtZScsICcnLCB7IHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJzbGFjay5kZWZhdWx0LnVzZXJuYW1lXCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ2NhbGxiYWNrX2lkJywgJ0NhbGxiYWNrIElEJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQuY2FsbGJhY2tpZFwiIC4gfX0nIH0pLFxuICAgICAgb3B0aW9uKCdjb2xvcicsICdDb2xvcicsICcnLCB7IHBsYWNlaG9sZGVyOiAne3sgaWYgZXEgLlN0YXR1cyBcImZpcmluZ1wiIH19ZGFuZ2Vye3sgZWxzZSB9fWdvb2R7eyBlbmQgfX0nIH0pLFxuICAgICAgb3B0aW9uKCdmYWxsYmFjaycsICdGYWxsYmFjaycsICcnLCB7IHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJzbGFjay5kZWZhdWx0LmZhbGxiYWNrXCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ2Zvb3RlcicsICdGb290ZXInLCAnJywgeyBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwic2xhY2suZGVmYXVsdC5mb290ZXJcIiAuIH19JyB9KSxcbiAgICAgIG9wdGlvbignbXJrZHduX2luJywgJ01ya2R3biBmaWVsZHMnLCAnQW4gYXJyYXkgb2YgZmllbGQgbmFtZXMgdGhhdCBzaG91bGQgYmUgZm9ybWF0dGVkIGJ5IG1ya2R3biBzeW50YXguJywge1xuICAgICAgICBlbGVtZW50OiAnc3RyaW5nX2FycmF5JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdwcmV0ZXh0JywgJ1ByZS10ZXh0JywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQucHJldGV4dFwiIC4gfX0nIH0pLFxuICAgICAgb3B0aW9uKCdzaG9ydF9maWVsZHMnLCAnU2hvcnQgZmllbGRzJywgJycsIHsgZWxlbWVudDogJ2NoZWNrYm94JyB9KSxcbiAgICAgIG9wdGlvbigndGV4dCcsICdNZXNzYWdlIGJvZHknLCAnJywgeyBlbGVtZW50OiAndGV4dGFyZWEnLCBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwic2xhY2suZGVmYXVsdC50ZXh0XCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ3RpdGxlJywgJ1RpdGxlJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQudGl0bGVcIiAuIH19JyB9KSxcbiAgICAgIG9wdGlvbigndGl0bGVfbGluaycsICdUaXRsZSBsaW5rJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQudGl0bGVsaW5rXCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ2ltYWdlX3VybCcsICdJbWFnZSBVUkwnLCAnJyksXG4gICAgICBvcHRpb24oJ3RodW1iX3VybCcsICdUaHVtYm5haWwgVVJMJywgJycpLFxuICAgICAgb3B0aW9uKCdhY3Rpb25zJywgJ0FjdGlvbnMnLCAnJywge1xuICAgICAgICBlbGVtZW50OiAnc3ViZm9ybV9hcnJheScsXG4gICAgICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICAgICAgb3B0aW9uKCd0ZXh0JywgJ1RleHQnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgICBvcHRpb24oJ3R5cGUnLCAnVHlwZScsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbigndXJsJywgJ1VSTCcsICdFaXRoZXIgdXJsIG9yIG5hbWUgYW5kIHZhbHVlIGFyZSBtYW5kYXRvcnkuJyksXG4gICAgICAgICAgb3B0aW9uKCduYW1lJywgJ05hbWUnLCAnJyksXG4gICAgICAgICAgb3B0aW9uKCd2YWx1ZScsICdWYWx1ZScsICcnKSxcbiAgICAgICAgICBvcHRpb24oJ2NvbmZpcm0nLCAnQ29uZmlybScsICcnLCB7XG4gICAgICAgICAgICBlbGVtZW50OiAnc3ViZm9ybScsXG4gICAgICAgICAgICBzdWJmb3JtT3B0aW9uczogW1xuICAgICAgICAgICAgICBvcHRpb24oJ3RleHQnLCAnVGV4dCcsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgICAgICBvcHRpb24oJ2Rpc21pc3NfdGV4dCcsICdEaXNtaXNzIHRleHQnLCAnJyksXG4gICAgICAgICAgICAgIG9wdGlvbignb2tfdGV4dCcsICdPSyB0ZXh0JywgJycpLFxuICAgICAgICAgICAgICBvcHRpb24oJ3RpdGxlJywgJ1RpdGxlJywgJycpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvcHRpb24oJ3N0eWxlJywgJ1N0eWxlJywgJycpLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ2ZpZWxkcycsICdGaWVsZHMnLCAnJywge1xuICAgICAgICBlbGVtZW50OiAnc3ViZm9ybV9hcnJheScsXG4gICAgICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICAgICAgb3B0aW9uKCd0aXRsZScsICdUaXRsZScsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbigndmFsdWUnLCAnVmFsdWUnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgICBvcHRpb24oJ3Nob3J0JywgJ1Nob3J0JywgJycsIHsgZWxlbWVudDogJ2NoZWNrYm94JyB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgaHR0cENvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ09wc0dlbmllJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbm90aWZpY2F0aW9ucyB0byBPcHNHZW5pZScsXG4gICAgdHlwZTogJ29wc2dlbmllJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnT3BzR2VuaWUgc2V0dGluZ3MnLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbignYXBpX2tleScsICdBUEkga2V5JywgJ1RoZSBBUEkga2V5IHRvIHVzZSB3aGVuIHRhbGtpbmcgdG8gdGhlIE9wc0dlbmllIEFQSS4nKSxcbiAgICAgIG9wdGlvbignYXBpX3VybCcsICdBUEkgVVJMJywgJ1RoZSBob3N0IHRvIHNlbmQgT3BzR2VuaWUgQVBJIHJlcXVlc3RzIHRvLicpLFxuICAgICAgb3B0aW9uKCdtZXNzYWdlJywgJ01lc3NhZ2UnLCAnQWxlcnQgdGV4dCBsaW1pdGVkIHRvIDEzMCBjaGFyYWN0ZXJzLicpLFxuICAgICAgb3B0aW9uKCdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicsICdBIGRlc2NyaXB0aW9uIG9mIHRoZSBpbmNpZGVudC4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJvcHNnZW5pZS5kZWZhdWx0LmRlc2NyaXB0aW9uXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignc291cmNlJywgJ1NvdXJjZScsICdBIGJhY2tsaW5rIHRvIHRoZSBzZW5kZXIgb2YgdGhlIG5vdGlmaWNhdGlvbi4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJvcHNnZW5pZS5kZWZhdWx0LnNvdXJjZVwiIC4gfX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdkZXRhaWxzJyxcbiAgICAgICAgJ0RldGFpbHMnLFxuICAgICAgICAnQSBzZXQgb2YgYXJiaXRyYXJ5IGtleS92YWx1ZSBwYWlycyB0aGF0IHByb3ZpZGUgZnVydGhlciBkZXRhaWwgYWJvdXQgdGhlIGluY2lkZW50LicsXG4gICAgICAgIHtcbiAgICAgICAgICBlbGVtZW50OiAna2V5X3ZhbHVlX21hcCcsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBvcHRpb24oJ3RhZ3MnLCAnVGFncycsICdDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0YWdzIGF0dGFjaGVkIHRvIHRoZSBub3RpZmljYXRpb25zLicpLFxuICAgICAgb3B0aW9uKCdub3RlJywgJ05vdGUnLCAnQWRkaXRpb25hbCBhbGVydCBub3RlLicpLFxuICAgICAgb3B0aW9uKCdwcmlvcml0eScsICdQcmlvcml0eScsICdQcmlvcml0eSBsZXZlbCBvZiBhbGVydC4gUG9zc2libGUgdmFsdWVzIGFyZSBQMSwgUDIsIFAzLCBQNCwgYW5kIFA1LicpLFxuICAgICAgb3B0aW9uKCdyZXNwb25kZXJzJywgJ1Jlc3BvbmRlcnMnLCAnTGlzdCBvZiByZXNwb25kZXJzIHJlc3BvbnNpYmxlIGZvciBub3RpZmljYXRpb25zLicsIHtcbiAgICAgICAgZWxlbWVudDogJ3N1YmZvcm1fYXJyYXknLFxuICAgICAgICBzdWJmb3JtT3B0aW9uczogW1xuICAgICAgICAgIG9wdGlvbigndHlwZScsICdUeXBlJywgJ1widGVhbVwiLCBcInVzZXJcIiwgXCJlc2NhbGF0aW9uXCIgb3Igc2NoZWR1bGVcIi4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbignaWQnLCAnSUQnLCAnRXhhY3RseSBvbmUgb2YgdGhlc2UgZmllbGRzIHNob3VsZCBiZSBkZWZpbmVkLicpLFxuICAgICAgICAgIG9wdGlvbignbmFtZScsICdOYW1lJywgJ0V4YWN0bHkgb25lIG9mIHRoZXNlIGZpZWxkcyBzaG91bGQgYmUgZGVmaW5lZC4nKSxcbiAgICAgICAgICBvcHRpb24oJ3VzZXJuYW1lJywgJ1VzZXJuYW1lJywgJ0V4YWN0bHkgb25lIG9mIHRoZXNlIGZpZWxkcyBzaG91bGQgYmUgZGVmaW5lZC4nKSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgaHR0cENvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1ZpY3Rvck9wcycsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbnMgdG8gVmljdG9yT3BzJyxcbiAgICB0eXBlOiAndmljdG9yb3BzJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnVmljdG9yT3BzIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ2FwaV9rZXknLCAnQVBJIGtleScsICdUaGUgQVBJIGtleSB0byB1c2Ugd2hlbiB0YWxraW5nIHRvIHRoZSBWaWN0b3JPcHMgQVBJLicpLFxuICAgICAgb3B0aW9uKCdhcGlfdXJsJywgJ0FQSSBVUkwnLCAnVGhlIFZpY3Rvck9wcyBBUEkgVVJMLicpLFxuICAgICAgb3B0aW9uKCdyb3V0aW5nX2tleScsICdSb3V0aW5nIGtleScsICdBIGtleSB1c2VkIHRvIG1hcCB0aGUgYWxlcnQgdG8gYSB0ZWFtLicsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICBvcHRpb24oJ21lc3NhZ2VfdHlwZScsICdNZXNzYWdlIHR5cGUnLCAnRGVzY3JpYmVzIHRoZSBiZWhhdmlvciBvZiB0aGUgYWxlcnQgKENSSVRJQ0FMLCBXQVJOSU5HLCBJTkZPKS4nKSxcbiAgICAgIG9wdGlvbignZW50aXR5X2Rpc3BsYXlfbmFtZScsICdFbnRpdHkgZGlzcGxheSBuYW1lJywgJ0NvbnRhaW5zIHN1bW1hcnkgb2YgdGhlIGFsZXJ0ZWQgcHJvYmxlbS4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJ2aWN0b3JvcHMuZGVmYXVsdC5lbnRpdHlfZGlzcGxheV9uYW1lXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignc3RhdGVfbWVzc2FnZScsICdTdGF0ZSBtZXNzYWdlJywgJ0NvbnRhaW5zIGxvbmcgZXhwbGFuYXRpb24gb2YgdGhlIGFsZXJ0ZWQgcHJvYmxlbS4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJ2aWN0b3JvcHMuZGVmYXVsdC5zdGF0ZV9tZXNzYWdlXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignbW9uaXRvcmluZ190b29sJywgJ01vbml0b3JpbmcgdG9vbCcsICdUaGUgbW9uaXRvcmluZyB0b29sIHRoZSBzdGF0ZSBtZXNzYWdlIGlzIGZyb20uJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwidmljdG9yb3BzLmRlZmF1bHQubW9uaXRvcmluZ190b29sXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIGh0dHBDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdXZWJob29rJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbm90aWZpY2F0aW9ucyB0byBhIHdlYmhvb2snLFxuICAgIHR5cGU6ICd3ZWJob29rJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnV2ViaG9vayBzZXR0aW5ncycsXG4gICAgb3B0aW9uczogW1xuICAgICAgb3B0aW9uKCd1cmwnLCAnVVJMJywgJ1RoZSBlbmRwb2ludCB0byBzZW5kIEhUVFAgUE9TVCByZXF1ZXN0cyB0by4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgb3B0aW9uKFxuICAgICAgICAnbWF4X2FsZXJ0cycsXG4gICAgICAgICdNYXggYWxlcnRzJyxcbiAgICAgICAgJ1RoZSBtYXhpbXVtIG51bWJlciBvZiBhbGVydHMgdG8gaW5jbHVkZSBpbiBhIHNpbmdsZSB3ZWJob29rIG1lc3NhZ2UuIEFsZXJ0cyBhYm92ZSB0aGlzIHRocmVzaG9sZCBhcmUgdHJ1bmNhdGVkLiBXaGVuIGxlYXZpbmcgdGhpcyBhdCBpdHMgZGVmYXVsdCB2YWx1ZSBvZiAwLCBhbGwgYWxlcnRzIGFyZSBpbmNsdWRlZC4nLFxuICAgICAgICB7IHBsYWNlaG9sZGVyOiAnMCcsIHZhbGlkYXRpb25SdWxlOiAnKF5cXFxcZCskfF4kKScgfVxuICAgICAgKSxcbiAgICAgIGh0dHBDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBnbG9iYWxDb25maWdPcHRpb25zOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uW10gPSBbXG4gIC8vIGVtYWlsXG4gIG9wdGlvbignc210cF9mcm9tJywgJ1NNVFAgZnJvbScsICdUaGUgZGVmYXVsdCBTTVRQIEZyb20gaGVhZGVyIGZpZWxkLicpLFxuICBvcHRpb24oXG4gICAgJ3NtdHBfc21hcnRob3N0JyxcbiAgICAnU01UUCBzbWFydGhvc3QnLFxuICAgICdUaGUgZGVmYXVsdCBTTVRQIHNtYXJ0aG9zdCB1c2VkIGZvciBzZW5kaW5nIGVtYWlscywgaW5jbHVkaW5nIHBvcnQgbnVtYmVyLiBQb3J0IG51bWJlciB1c3VhbGx5IGlzIDI1LCBvciA1ODcgZm9yIFNNVFAgb3ZlciBUTFMgKHNvbWV0aW1lcyByZWZlcnJlZCB0byBhcyBTVEFSVFRMUykuIEV4YW1wbGU6IHNtdHAuZXhhbXBsZS5vcmc6NTg3J1xuICApLFxuICBvcHRpb24oJ3NtdHBfaGVsbG8nLCAnU01UUCBoZWxsbycsICdUaGUgZGVmYXVsdCBob3N0bmFtZSB0byBpZGVudGlmeSB0byB0aGUgU01UUCBzZXJ2ZXIuJywge1xuICAgIHBsYWNlaG9sZGVyOiAnbG9jYWxob3N0JyxcbiAgfSksXG4gIG9wdGlvbihcbiAgICAnc210cF9hdXRoX3VzZXJuYW1lJyxcbiAgICAnU01UUCBhdXRoIHVzZXJuYW1lJyxcbiAgICBcIlNNVFAgQXV0aCB1c2luZyBDUkFNLU1ENSwgTE9HSU4gYW5kIFBMQUlOLiBJZiBlbXB0eSwgQWxlcnRtYW5hZ2VyIGRvZXNuJ3QgYXV0aGVudGljYXRlIHRvIHRoZSBTTVRQIHNlcnZlci5cIlxuICApLFxuICBvcHRpb24oJ3NtdHBfYXV0aF9wYXNzd29yZCcsICdTTVRQIGF1dGggcGFzc3dvcmQnLCAnU01UUCBBdXRoIHVzaW5nIExPR0lOIGFuZCBQTEFJTi4nKSxcbiAgb3B0aW9uKCdzbXRwX2F1dGhfaWRlbnRpdHknLCAnU01UUCBhdXRoIGlkZW50aXR5JywgJ1NNVFAgQXV0aCB1c2luZyBQTEFJTi4nKSxcbiAgb3B0aW9uKCdzbXRwX2F1dGhfc2VjcmV0JywgJ1NNVFAgYXV0aCBzZWNyZXQnLCAnU01UUCBBdXRoIHVzaW5nIENSQU0tTUQ1LicpLFxuICBvcHRpb24oXG4gICAgJ3NtdHBfcmVxdWlyZV90bHMnLFxuICAgICdTTVRQIHJlcXVpcmUgVExTJyxcbiAgICAnVGhlIGRlZmF1bHQgU01UUCBUTFMgcmVxdWlyZW1lbnQuIE5vdGUgdGhhdCBHbyBkb2VzIG5vdCBzdXBwb3J0IHVuZW5jcnlwdGVkIGNvbm5lY3Rpb25zIHRvIHJlbW90ZSBTTVRQIGVuZHBvaW50cy4nLFxuICAgIHtcbiAgICAgIGVsZW1lbnQ6ICdjaGVja2JveCcsXG4gICAgfVxuICApLFxuXG4gIC8vIHNsYWNrXG4gIG9wdGlvbignc2xhY2tfYXBpX3VybCcsICdTbGFjayBBUEkgVVJMJywgJycpLFxuICBvcHRpb24oJ3ZpY3Rvcm9wc19hcGlfa2V5JywgJ1ZpY3Rvck9wcyBBUEkga2V5JywgJycpLFxuICBvcHRpb24oJ3ZpY3Rvcm9wc19hcGlfdXJsJywgJ1ZpY3Rvck9wcyBBUEkgVVJMJywgJycsIHtcbiAgICBwbGFjZWhvbGRlcjogJ2h0dHBzOi8vYWxlcnQudmljdG9yb3BzLmNvbS9pbnRlZ3JhdGlvbnMvZ2VuZXJpYy8yMDEzMTExNC9hbGVydC8nLFxuICB9KSxcbiAgb3B0aW9uKCdwYWdlcmR1dHlfdXJsJywgJ1BhZ2VyRHV0eSBVUkwnLCAnaHR0cHM6Ly9ldmVudHMucGFnZXJkdXR5LmNvbS92Mi9lbnF1ZXVlJyksXG4gIG9wdGlvbignb3BzZ2VuaWVfYXBpX2tleScsICdPcHNHZW5pZSBBUEkga2V5JywgJycpLFxuICBvcHRpb24oJ29wc2dlbmllX2FwaV91cmwnLCAnT3BzR2VuaWUgQVBJIFVSTCcsICcnLCB7IHBsYWNlaG9sZGVyOiAnaHR0cHM6Ly9hcGkub3BzZ2VuaWUuY29tLycgfSksXG4gIG9wdGlvbignd2VjaGF0X2FwaV91cmwnLCAnV2VDaGF0IEFQSSBVUkwnLCAnJywgeyBwbGFjZWhvbGRlcjogJ2h0dHBzOi8vcXlhcGkud2VpeGluLnFxLmNvbS9jZ2ktYmluLycgfSksXG4gIG9wdGlvbignd2VjaGF0X2FwaV9zZWNyZXQnLCAnV2VDaGF0IEFQSSBzZWNyZXQnLCAnJyksXG4gIG9wdGlvbignd2VjaGF0X2FwaV9jb3JwX2lkJywgJ1dlQ2hhdCBBUEkgY29ycCBpZCcsICcnKSxcbiAgaHR0cENvbmZpZ09wdGlvbixcbiAgb3B0aW9uKFxuICAgICdyZXNvbHZlX3RpbWVvdXQnLFxuICAgICdSZXNvbHZlIHRpbWVvdXQnLFxuICAgICdSZXNvbHZlVGltZW91dCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSB1c2VkIGJ5IGFsZXJ0bWFuYWdlciBpZiB0aGUgYWxlcnQgZG9lcyBub3QgaW5jbHVkZSBFbmRzQXQsIGFmdGVyIHRoaXMgdGltZSBwYXNzZXMgaXQgY2FuIGRlY2xhcmUgdGhlIGFsZXJ0IGFzIHJlc29sdmVkIGlmIGl0IGhhcyBub3QgYmVlbiB1cGRhdGVkLiBUaGlzIGhhcyBubyBpbXBhY3Qgb24gYWxlcnRzIGZyb20gUHJvbWV0aGV1cywgYXMgdGhleSBhbHdheXMgaW5jbHVkZSBFbmRzQXQuJyxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJzVtJyxcbiAgICB9XG4gICksXG5dO1xuIiwiaW1wb3J0IHtcbiAgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnLFxuICBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnLFxuICBSZWNlaXZlcixcbiAgUm91dGUsXG59IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IENsb3VkTm90aWZpZXJUeXBlLCBOb3RpZmllckRUTywgTm90aWZpZXJUeXBlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtcbiAgQ2xvdWRDaGFubmVsQ29uZmlnLFxuICBDbG91ZENoYW5uZWxNYXAsXG4gIENsb3VkQ2hhbm5lbFZhbHVlcyxcbiAgR3JhZmFuYUNoYW5uZWxNYXAsXG4gIEdyYWZhbmFDaGFubmVsVmFsdWVzLFxuICBSZWNlaXZlckZvcm1WYWx1ZXMsXG59IGZyb20gJy4uL3R5cGVzL3JlY2VpdmVyLWZvcm0nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZmFuYVJlY2VpdmVyVG9Gb3JtVmFsdWVzKFxuICByZWNlaXZlcjogUmVjZWl2ZXIsXG4gIG5vdGlmaWVyczogTm90aWZpZXJEVE9bXVxuKTogW1JlY2VpdmVyRm9ybVZhbHVlczxHcmFmYW5hQ2hhbm5lbFZhbHVlcz4sIEdyYWZhbmFDaGFubmVsTWFwXSB7XG4gIGNvbnN0IGNoYW5uZWxNYXA6IEdyYWZhbmFDaGFubmVsTWFwID0ge307XG4gIC8vIGdpdmluZyBlYWNoIGZvcm0gcmVjZWl2ZXIgaXRlbSBhIHVuaXF1ZSBpZCBzbyB3ZSBjYW4gdXNlIGl0IHRvIG1hcCBiYWNrIHRvIFwib3JpZ2luYWxcIiBpdGVtc1xuICAvLyBhcyB3ZWxsIGFzIHRvIHVzZSBhcyBga2V5YCBwcm9wLlxuICAvLyBAVE9ETyB1c2UgdWlkIG9uY2UgYmFja2VuZCBpcyBmaXhlZCB0byBwcm92aWRlIGl0LiB0aGVuIHdlIGNhbiBnZXQgcmlkIG9mIHRoZSBHcmFmYW5hQ2hhbm5lbE1hcFxuICBsZXQgaWRDb3VudGVyID0gMTtcbiAgY29uc3QgdmFsdWVzID0ge1xuICAgIG5hbWU6IHJlY2VpdmVyLm5hbWUsXG4gICAgaXRlbXM6XG4gICAgICByZWNlaXZlci5ncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncz8ubWFwKChjaGFubmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGlkQ291bnRlcisrKTtcbiAgICAgICAgY2hhbm5lbE1hcFtpZF0gPSBjaGFubmVsO1xuICAgICAgICBjb25zdCBub3RpZmllciA9IG5vdGlmaWVycy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gY2hhbm5lbC50eXBlKTtcbiAgICAgICAgcmV0dXJuIGdyYWZhbmFDaGFubmVsQ29uZmlnVG9Gb3JtQ2hhbm5lbFZhbHVlcyhpZCwgY2hhbm5lbCwgbm90aWZpZXIpO1xuICAgICAgfSkgPz8gW10sXG4gIH07XG4gIHJldHVybiBbdmFsdWVzLCBjaGFubmVsTWFwXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkUmVjZWl2ZXJUb0Zvcm1WYWx1ZXMoXG4gIHJlY2VpdmVyOiBSZWNlaXZlcixcbiAgbm90aWZpZXJzOiBOb3RpZmllckRUT1tdXG4pOiBbUmVjZWl2ZXJGb3JtVmFsdWVzPENsb3VkQ2hhbm5lbFZhbHVlcz4sIENsb3VkQ2hhbm5lbE1hcF0ge1xuICBjb25zdCBjaGFubmVsTWFwOiBDbG91ZENoYW5uZWxNYXAgPSB7fTtcbiAgLy8gZ2l2aW5nIGVhY2ggZm9ybSByZWNlaXZlciBpdGVtIGEgdW5pcXVlIGlkIHNvIHdlIGNhbiB1c2UgaXQgdG8gbWFwIGJhY2sgdG8gXCJvcmlnaW5hbFwiIGl0ZW1zXG4gIGxldCBpZENvdW50ZXIgPSAxO1xuICBjb25zdCBpdGVtczogQ2xvdWRDaGFubmVsVmFsdWVzW10gPSBPYmplY3QuZW50cmllcyhyZWNlaXZlcilcbiAgICAvLyBmaWx0ZXIgb3V0IG9ubHkgY29uZmlnIGl0ZW1zIHRoYXQgYXJlIHJlbGV2YW50IHRvIGNsb3VkXG4gICAgLmZpbHRlcigoW3R5cGVdKSA9PiB0eXBlLmVuZHNXaXRoKCdfY29uZmlncycpICYmIHR5cGUgIT09ICdncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncycpXG4gICAgLy8gbWFwIHByb3BlcnR5IG5hbWVzIHRvIGNsb3VkIG5vdGlmaWVyIHR5cGVzIGJ5IHJlbW92aW5nIHRoZSBgX2NvbmZpZ2Agc3VmZml4XG4gICAgLm1hcCgoW3R5cGUsIGNvbmZpZ3NdKTogW0Nsb3VkTm90aWZpZXJUeXBlLCBDbG91ZENoYW5uZWxDb25maWdbXV0gPT4gW1xuICAgICAgdHlwZS5yZXBsYWNlKCdfY29uZmlncycsICcnKSBhcyBDbG91ZE5vdGlmaWVyVHlwZSxcbiAgICAgIGNvbmZpZ3MgYXMgQ2xvdWRDaGFubmVsQ29uZmlnW10sXG4gICAgXSlcbiAgICAvLyBjb252ZXJ0IGNoYW5uZWwgY29uZmlncyB0byBmb3JtIHZhbHVlc1xuICAgIC5tYXAoKFt0eXBlLCBjb25maWdzXSkgPT5cbiAgICAgIGNvbmZpZ3MubWFwKChjb25maWcpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoaWRDb3VudGVyKyspO1xuICAgICAgICBjaGFubmVsTWFwW2lkXSA9IHsgdHlwZSwgY29uZmlnIH07XG4gICAgICAgIGNvbnN0IG5vdGlmaWVyID0gbm90aWZpZXJzLmZpbmQoKG5vdGlmaWVyKSA9PiBub3RpZmllci50eXBlID09PSB0eXBlKTtcbiAgICAgICAgaWYgKCFub3RpZmllcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5rbm93biBjbG91ZCBub3RpZmllcjogJHt0eXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG91ZENoYW5uZWxDb25maWdUb0Zvcm1DaGFubmVsVmFsdWVzKGlkLCB0eXBlLCBjb25maWcpO1xuICAgICAgfSlcbiAgICApXG4gICAgLmZsYXQoKTtcbiAgY29uc3QgdmFsdWVzID0ge1xuICAgIG5hbWU6IHJlY2VpdmVyLm5hbWUsXG4gICAgaXRlbXMsXG4gIH07XG4gIHJldHVybiBbdmFsdWVzLCBjaGFubmVsTWFwXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1WYWx1ZXNUb0dyYWZhbmFSZWNlaXZlcihcbiAgdmFsdWVzOiBSZWNlaXZlckZvcm1WYWx1ZXM8R3JhZmFuYUNoYW5uZWxWYWx1ZXM+LFxuICBjaGFubmVsTWFwOiBHcmFmYW5hQ2hhbm5lbE1hcCxcbiAgZGVmYXVsdENoYW5uZWxWYWx1ZXM6IEdyYWZhbmFDaGFubmVsVmFsdWVzXG4pOiBSZWNlaXZlciB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3M6ICh2YWx1ZXMuaXRlbXMgPz8gW10pLm1hcCgoY2hhbm5lbFZhbHVlcykgPT4ge1xuICAgICAgY29uc3QgZXhpc3Rpbmc6IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcgfCB1bmRlZmluZWQgPSBjaGFubmVsTWFwW2NoYW5uZWxWYWx1ZXMuX19pZF07XG4gICAgICByZXR1cm4gZm9ybUNoYW5uZWxWYWx1ZXNUb0dyYWZhbmFDaGFubmVsQ29uZmlnKGNoYW5uZWxWYWx1ZXMsIGRlZmF1bHRDaGFubmVsVmFsdWVzLCB2YWx1ZXMubmFtZSwgZXhpc3RpbmcpO1xuICAgIH0pLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybVZhbHVlc1RvQ2xvdWRSZWNlaXZlcihcbiAgdmFsdWVzOiBSZWNlaXZlckZvcm1WYWx1ZXM8Q2xvdWRDaGFubmVsVmFsdWVzPixcbiAgZGVmYXVsdHM6IENsb3VkQ2hhbm5lbFZhbHVlc1xuKTogUmVjZWl2ZXIge1xuICBjb25zdCByZWN2OiBSZWNlaXZlciA9IHtcbiAgICBuYW1lOiB2YWx1ZXMubmFtZSxcbiAgfTtcbiAgdmFsdWVzLml0ZW1zLmZvckVhY2goKHsgX19pZCwgdHlwZSwgc2V0dGluZ3MsIHNlbmRSZXNvbHZlZCB9KSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IG9taXRFbXB0eVZhbHVlcyh7XG4gICAgICAuLi5zZXR0aW5ncyxcbiAgICAgIHNlbmRfcmVzb2x2ZWQ6IHNlbmRSZXNvbHZlZCA/PyBkZWZhdWx0cy5zZW5kUmVzb2x2ZWQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb25maWdzS2V5ID0gYCR7dHlwZX1fY29uZmlnc2A7XG4gICAgaWYgKCFyZWN2W2NvbmZpZ3NLZXldKSB7XG4gICAgICByZWN2W2NvbmZpZ3NLZXldID0gW2NoYW5uZWxdO1xuICAgIH0gZWxzZSB7XG4gICAgICAocmVjdltjb25maWdzS2V5XSBhcyB1bmtub3duW10pLnB1c2goY2hhbm5lbCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlY3Y7XG59XG5cbi8vIHdpbGwgYWRkIG5ldyByZWNlaXZlciwgb3IgcmVwbGFjZSBleGlzaXRuZyBvbmVcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb25maWdXaXRoUmVjZWl2ZXIoXG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnLFxuICByZWNlaXZlcjogUmVjZWl2ZXIsXG4gIHJlcGxhY2VSZWNlaXZlck5hbWU/OiBzdHJpbmdcbik6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB7XG4gIGNvbnN0IG9sZFJlY2VpdmVycyA9IGNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLnJlY2VpdmVycyA/PyBbXTtcblxuICAvLyBzYW5pdHkgY2hlY2sgdGhhdCBuYW1lIGlzIG5vdCBkdXBsaWNhdGVkXG4gIGlmIChyZWNlaXZlci5uYW1lICE9PSByZXBsYWNlUmVjZWl2ZXJOYW1lICYmICEhb2xkUmVjZWl2ZXJzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSByZWNlaXZlci5uYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIHJlY2VpdmVyIG5hbWUgJHtyZWNlaXZlci5uYW1lfWApO1xuICB9XG5cbiAgLy8gc2FuaXR5IGNoZWNrIHRoYXQgZXhpc3RpbmcgcmVjZWl2ZXIgZXhpc3RzXG4gIGlmIChyZXBsYWNlUmVjZWl2ZXJOYW1lICYmICFvbGRSZWNlaXZlcnMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHJlcGxhY2VSZWNlaXZlck5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCByZWNlaXZlciAke3JlcGxhY2VSZWNlaXZlck5hbWV9IHRvIGV4aXN0LCBidXQgZGlkIG5vdCBmaW5kIGl0IGluIHRoZSBjb25maWdgKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZWQ6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyA9IHtcbiAgICAuLi5jb25maWcsXG4gICAgYWxlcnRtYW5hZ2VyX2NvbmZpZzoge1xuICAgICAgLy8gQHRvZG8gcmVuYW1lIHJlY2VpdmVyIG9uIHJvdXRlcyBhcyBuZWNlc3NhcnlcbiAgICAgIC4uLmNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLFxuICAgICAgcmVjZWl2ZXJzOiByZXBsYWNlUmVjZWl2ZXJOYW1lXG4gICAgICAgID8gb2xkUmVjZWl2ZXJzLm1hcCgoZXhpc3RpbmdSZWNlaXZlcikgPT5cbiAgICAgICAgICAgIGV4aXN0aW5nUmVjZWl2ZXIubmFtZSA9PT0gcmVwbGFjZVJlY2VpdmVyTmFtZSA/IHJlY2VpdmVyIDogZXhpc3RpbmdSZWNlaXZlclxuICAgICAgICAgIClcbiAgICAgICAgOiBbLi4ub2xkUmVjZWl2ZXJzLCByZWNlaXZlcl0sXG4gICAgfSxcbiAgfTtcblxuICAvLyBpZiByZWNlaXZlciB3YXMgcmVuYW1lZCwgcmVuYW1lIGl0IGluIHJvdXRlcyBhcyB3ZWxsXG4gIGlmICh1cGRhdGVkLmFsZXJ0bWFuYWdlcl9jb25maWcucm91dGUgJiYgcmVwbGFjZVJlY2VpdmVyTmFtZSAmJiByZWNlaXZlci5uYW1lICE9PSByZXBsYWNlUmVjZWl2ZXJOYW1lKSB7XG4gICAgdXBkYXRlZC5hbGVydG1hbmFnZXJfY29uZmlnLnJvdXRlID0gcmVuYW1lUmVjZWl2ZXJJblJvdXRlKFxuICAgICAgdXBkYXRlZC5hbGVydG1hbmFnZXJfY29uZmlnLnJvdXRlLFxuICAgICAgcmVwbGFjZVJlY2VpdmVyTmFtZSxcbiAgICAgIHJlY2VpdmVyLm5hbWVcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVJlY2VpdmVySW5Sb3V0ZShyb3V0ZTogUm91dGUsIG9sZE5hbWU6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHVwZGF0ZWQ6IFJvdXRlID0ge1xuICAgIC4uLnJvdXRlLFxuICB9O1xuICBpZiAodXBkYXRlZC5yZWNlaXZlciA9PT0gb2xkTmFtZSkge1xuICAgIHVwZGF0ZWQucmVjZWl2ZXIgPSBuZXdOYW1lO1xuICB9XG4gIGlmICh1cGRhdGVkLnJvdXRlcykge1xuICAgIHVwZGF0ZWQucm91dGVzID0gdXBkYXRlZC5yb3V0ZXMubWFwKChyb3V0ZSkgPT4gcmVuYW1lUmVjZWl2ZXJJblJvdXRlKHJvdXRlLCBvbGROYW1lLCBuZXdOYW1lKSk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNsb3VkQ2hhbm5lbENvbmZpZ1RvRm9ybUNoYW5uZWxWYWx1ZXMoXG4gIGlkOiBzdHJpbmcsXG4gIHR5cGU6IENsb3VkTm90aWZpZXJUeXBlLFxuICBjaGFubmVsOiBDbG91ZENoYW5uZWxDb25maWdcbik6IENsb3VkQ2hhbm5lbFZhbHVlcyB7XG4gIHJldHVybiB7XG4gICAgX19pZDogaWQsXG4gICAgdHlwZSxcbiAgICBzZXR0aW5nczoge1xuICAgICAgLi4uY2hhbm5lbCxcbiAgICB9LFxuICAgIHNlY3VyZUZpZWxkczoge30sXG4gICAgc2VjdXJlU2V0dGluZ3M6IHt9LFxuICAgIHNlbmRSZXNvbHZlZDogY2hhbm5lbC5zZW5kX3Jlc29sdmVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBncmFmYW5hQ2hhbm5lbENvbmZpZ1RvRm9ybUNoYW5uZWxWYWx1ZXMoXG4gIGlkOiBzdHJpbmcsXG4gIGNoYW5uZWw6IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcsXG4gIG5vdGlmaWVyPzogTm90aWZpZXJEVE9cbik6IEdyYWZhbmFDaGFubmVsVmFsdWVzIHtcbiAgY29uc3QgdmFsdWVzOiBHcmFmYW5hQ2hhbm5lbFZhbHVlcyA9IHtcbiAgICBfX2lkOiBpZCxcbiAgICB0eXBlOiBjaGFubmVsLnR5cGUgYXMgTm90aWZpZXJUeXBlLFxuICAgIHNlY3VyZVNldHRpbmdzOiB7fSxcbiAgICBzZXR0aW5nczogeyAuLi5jaGFubmVsLnNldHRpbmdzIH0sXG4gICAgc2VjdXJlRmllbGRzOiB7IC4uLmNoYW5uZWwuc2VjdXJlRmllbGRzIH0sXG4gICAgZGlzYWJsZVJlc29sdmVNZXNzYWdlOiBjaGFubmVsLmRpc2FibGVSZXNvbHZlTWVzc2FnZSxcbiAgfTtcblxuICAvLyB3b3JrIGFyb3VuZCBodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9hbGVydGluZy1zcXVhZC9pc3N1ZXMvMTAwXG4gIG5vdGlmaWVyPy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGlmIChvcHRpb24uc2VjdXJlICYmIHZhbHVlcy5zZXR0aW5nc1tvcHRpb24ucHJvcGVydHlOYW1lXSkge1xuICAgICAgZGVsZXRlIHZhbHVlcy5zZXR0aW5nc1tvcHRpb24ucHJvcGVydHlOYW1lXTtcbiAgICAgIHZhbHVlcy5zZWN1cmVGaWVsZHNbb3B0aW9uLnByb3BlcnR5TmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1DaGFubmVsVmFsdWVzVG9HcmFmYW5hQ2hhbm5lbENvbmZpZyhcbiAgdmFsdWVzOiBHcmFmYW5hQ2hhbm5lbFZhbHVlcyxcbiAgZGVmYXVsdHM6IEdyYWZhbmFDaGFubmVsVmFsdWVzLFxuICBuYW1lOiBzdHJpbmcsXG4gIGV4aXN0aW5nPzogR3JhZmFuYU1hbmFnZWRSZWNlaXZlckNvbmZpZ1xuKTogR3JhZmFuYU1hbmFnZWRSZWNlaXZlckNvbmZpZyB7XG4gIGNvbnN0IGNoYW5uZWw6IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcgPSB7XG4gICAgc2V0dGluZ3M6IG9taXRFbXB0eVZhbHVlcyh7XG4gICAgICAuLi4oZXhpc3RpbmcgJiYgZXhpc3RpbmcudHlwZSA9PT0gdmFsdWVzLnR5cGUgPyBleGlzdGluZy5zZXR0aW5ncyA/PyB7fSA6IHt9KSxcbiAgICAgIC4uLih2YWx1ZXMuc2V0dGluZ3MgPz8ge30pLFxuICAgIH0pLFxuICAgIHNlY3VyZVNldHRpbmdzOiB2YWx1ZXMuc2VjdXJlU2V0dGluZ3MgPz8ge30sXG4gICAgdHlwZTogdmFsdWVzLnR5cGUsXG4gICAgbmFtZSxcbiAgICBkaXNhYmxlUmVzb2x2ZU1lc3NhZ2U6XG4gICAgICB2YWx1ZXMuZGlzYWJsZVJlc29sdmVNZXNzYWdlID8/IGV4aXN0aW5nPy5kaXNhYmxlUmVzb2x2ZU1lc3NhZ2UgPz8gZGVmYXVsdHMuZGlzYWJsZVJlc29sdmVNZXNzYWdlLFxuICB9O1xuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBjaGFubmVsLnVpZCA9IGV4aXN0aW5nLnVpZDtcbiAgfVxuICByZXR1cm4gY2hhbm5lbDtcbn1cblxuLy8gd2lsbCByZW1vdmUgcHJvcGVydGllcyB0aGF0IGhhdmUgZW1wdHkgKCcnLCBudWxsLCB1bmRlZmluZWQpIG9iamVjdCBwcm9wZXJ0aWVzLlxuLy8gdHJhdmVyc2VzIG5lc3RlZCBvYmplY3RzIGFuZCBhcnJheXMgYXMgd2VsbC4gaW4gcGxhY2UsIG11dGF0ZXMgdGhlIG9iamVjdC5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgZm9ybSB3aWxsIHN1Ym1pdCBlbXB0eSBzdHJpbmcgZm9yIG5vdCBmaWxsZWQgaW4gZmllbGRzLFxuLy8gYnV0IGZvciBjbG91ZCBhbGVydG1hbmFnZXIgcmVjZWl2ZXIgY29uZmlnIHRvIHVzZSBnbG9iYWwgZGVmYXVsdCB2YWx1ZSB0aGUgcHJvcGVydHkgbXVzdCBiZSBvbWl0dGVkIGVudGlyZWx5XG4vLyB0aGlzIGlzbid0IGEgcGVyZmVjdCBzb2x1dGlvbiB0aG91Z2guIE5vIHdheSBmb3IgdXNlciB0byBpbnRlbnRpb25hbGx5IHByb3ZpZGUgYW4gZW1wdHkgc3RyaW5nLiBXaWxsIG5lZWQgcmV0aGlua2luZyBsYXRlclxuZXhwb3J0IGZ1bmN0aW9uIG9taXRFbXB0eVZhbHVlczxUPihvYmo6IFQpOiBUIHtcbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIG9iai5mb3JFYWNoKG9taXRFbXB0eVZhbHVlcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgKG9iaiBhcyBhbnkpW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbWl0RW1wdHlWYWx1ZXModmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG4iLCJpbXBvcnQgeyByZWNlaXZlclR5cGVOYW1lcyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL2NvbnN0cyc7XG5pbXBvcnQgeyBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnLCBSZWNlaXZlciB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IE5vdGlmaWVyRFRPIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdsb2Rhc2gnO1xuXG4vLyBleHRyYWN0IG5vdGlmaWVyIHR5cGUgbmFtZSB0byBjb3VudCBtYXAsIGVnIHsgU2xhY2s6IDEsIEVtYWlsOiAyIH1cblxudHlwZSBOb3RpZmllclR5cGVDb3VudHMgPSBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+OyAvLyBuYW1lIDogY291bnRcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3ROb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXI6IFJlY2VpdmVyLCBncmFmYW5hTm90aWZpZXJzOiBOb3RpZmllckRUT1tdKTogTm90aWZpZXJUeXBlQ291bnRzIHtcbiAgaWYgKHJlY2VpdmVyWydncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncyddKSB7XG4gICAgcmV0dXJuIGdldEdyYWZhbmFOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXIuZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3MgPz8gW10sIGdyYWZhbmFOb3RpZmllcnMpO1xuICB9XG4gIHJldHVybiBnZXRDb3J0ZXhBbGVydE1hbmFnZXJOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRDb3J0ZXhBbGVydE1hbmFnZXJOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXI6IFJlY2VpdmVyKTogTm90aWZpZXJUeXBlQ291bnRzIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHJlY2VpdmVyKVxuICAgIC5maWx0ZXIoKFtrZXldKSA9PiBrZXkgIT09ICdncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncycgJiYga2V5LmVuZHNXaXRoKCdfY29uZmlncycpKSAvLyBmaWx0ZXIgb3V0IG9ubHkgcHJvcGVydGllcyB0aGF0IGFyZSBhbGVydG1hbmFnZXIgbm90aWZpZXJcbiAgICAuZmlsdGVyKChbXywgdmFsdWVdKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhIXZhbHVlLmxlbmd0aCkgLy8gY2hlY2sgdGhhdCB0aGVyZSBhcmUgYWN0dWFsbHkgbm90aWZpZXJzIG9mIHRoaXMgdHlwZSBjb25maWd1cmVkXG4gICAgLnJlZHVjZTxOb3RpZmllclR5cGVDb3VudHM+KChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGtleS5yZXBsYWNlKCdfY29uZmlncycsICcnKTsgLy8gcmVtb3ZlIHRoZSBgX2NvbmZpZ2AgcGFydCBmcm9tIHRoZSBrZXksIG1ha2luZyBpdCBpbnR0byBhIG5vdGlmaWVyIG5hbWVcbiAgICAgIGNvbnN0IG5hbWUgPSByZWNlaXZlclR5cGVOYW1lc1t0eXBlXSA/PyBjYXBpdGFsaXplKHR5cGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBbbmFtZV06IChhY2NbbmFtZV0gPz8gMCkgKyAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5sZW5ndGggOiAxKSxcbiAgICAgIH07XG4gICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hTm90aWZpZXJUeXBlQ291bnRzKFxuICBjb25maWdzOiBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnW10sXG4gIGdyYWZhbmFOb3RpZmllcnM6IE5vdGlmaWVyRFRPW11cbik6IE5vdGlmaWVyVHlwZUNvdW50cyB7XG4gIHJldHVybiBjb25maWdzXG4gICAgLm1hcCgocmVjdikgPT4gcmVjdi50eXBlKSAvLyBleHRyYWN0IHR5cGVzIGZyb20gY29uZmlnXG4gICAgLm1hcCgodHlwZSkgPT4gZ3JhZmFuYU5vdGlmaWVycy5maW5kKChyKSA9PiByLnR5cGUgPT09IHR5cGUpPy5uYW1lID8/IGNhcGl0YWxpemUodHlwZSkpIC8vIGdldCByZWFkYWJsZSBuYW1lIGZyb20gbm90aWZpZXIgY29mbmlnLCBvciBpZiBub3QgYXZhaWxhYmxlLCBqdXN0IGNhcGl0YWxpemVcbiAgICAucmVkdWNlPE5vdGlmaWVyVHlwZUNvdW50cz4oXG4gICAgICAoYWNjLCB0eXBlKSA9PiAoe1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFt0eXBlXTogKGFjY1t0eXBlXSA/PyAwKSArIDEsXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbnN1cmVEZWZpbmUodGVtcGxhdGVOYW1lOiBzdHJpbmcsIHRlbXBsYXRlQ29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gbm90aWZpY2F0aW9uIHRlbXBsYXRlIGNvbnRlbnQgbXVzdCBiZSB3cmFwcGVkIGluIHt7IGRlZmluZSBcIm5hbWVcIiB9fSB0YWcsXG4gIC8vIGJ1dCB0aGlzIGlzIG5vdCBvYnZpb3VzIGJlY2F1c2UgdXNlciBhbHNvIGhhcyB0byBwcm92aWRlIG5hbWUgc2VwYXJhdGVseSBpbiB0aGUgZm9ybS5cbiAgLy8gc28gaWYgdXNlciBkb2VzIG5vdCBtYW51YWxseSBhZGQge3sgZGVmaW5lIH19IHRhZywgd2UgZG8gaXQgYXV0b21hdGljYWxseVxuICBsZXQgY29udGVudCA9IHRlbXBsYXRlQ29udGVudC50cmltKCk7XG4gIGlmICghY29udGVudC5tYXRjaCgvXFx7XFx7XFxzKmRlZmluZS8pKSB7XG4gICAgY29uc3QgaW5kZW50ZWRDb250ZW50ID0gY29udGVudFxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLm1hcCgobGluZSkgPT4gJyAgJyArIGxpbmUpXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29udGVudCA9IGB7eyBkZWZpbmUgXCIke3RlbXBsYXRlTmFtZX1cIiB9fVxcbiR7aW5kZW50ZWRDb250ZW50fVxcbnt7IGVuZCB9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJleHBvcnQgY29uc3QgcmVjZWl2ZXJUeXBlTmFtZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHBhZ2VyZHV0eTogJ1BhZ2VyRHV0eScsXG4gIHB1c2hvdmVyOiAnUHVzaG92ZXInLFxuICBzbGFjazogJ1NsYWNrJyxcbiAgb3BzZ2VuaWU6ICdPcHNHZW5pZScsXG4gIHdlYmhvb2s6ICdXZWJob29rJyxcbiAgdmljdG9yb3BzOiAnVmljdG9yT3BzJyxcbiAgd2VjaGF0OiAnV2VDaGF0Jyxcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwidXNlQ2xlYW51cCIsInN0YXRlU2VsZWN0b3IiLCJkaXNwYXRjaCIsInNlbGVjdG9yUmVmIiwiY3VycmVudCIsInVzZVNlbGVjdG9yIiwiZ2V0TmF2TW9kZWwiLCJ1c2VOYXZNb2RlbCIsImlkIiwibmF2SW5kZXgiLCJzdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJFbXB0eUxpc3RDVEEiLCJQYWdlIiwiZ2V0QmFja2VuZFNydiIsInVzZUFzeW5jRm4iLCJhcHBFdmVudHMiLCJIb3Jpem9udGFsR3JvdXAiLCJCdXR0b24iLCJMaW5rQnV0dG9uIiwiU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IiwiTm90aWZpY2F0aW9uc0xpc3RQYWdlIiwibmF2TW9kZWwiLCJub3RpZmljYXRpb25zIiwic2V0Tm90aWZpY2F0aW9ucyIsImdldE5vdGlmaWNhdGlvbnMiLCJnZXQiLCJmZXRjaE5vdGlmaWNhdGlvbnMiLCJ0aGVuIiwicmVzIiwiZGVsZXRlTm90aWZpY2F0aW9uIiwicHVibGlzaCIsInRpdGxlIiwidGV4dCIsInRleHQyIiwiaWNvbiIsImNvbmZpcm1UZXh0IiwieWVzVGV4dCIsIm9uQ29uZmlybSIsImRlbGV0ZU5vdGlmaWNhdGlvbkNvbmZpcm1lZCIsImRlbGV0ZSIsImVycm9yIiwibGVuZ3RoIiwibWluV2lkdGgiLCJ3aWR0aCIsIm1hcCIsIm5vdGlmaWNhdGlvbiIsIm5hbWUiLCJ0eXBlIiwiaXNEZWZhdWx0IiwibG9hZGluZyIsIkFsZXJ0IiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwid2l0aEVycm9yQm91bmRhcnkiLCJSZWRpcmVjdCIsIlJvdXRlIiwiU3dpdGNoIiwidXNlTG9jYXRpb24iLCJBbGVydGluZ1BhZ2VXcmFwcGVyIiwiQWxlcnRNYW5hZ2VyUGlja2VyIiwiRWRpdFJlY2VpdmVyVmlldyIsIkVkaXRUZW1wbGF0ZVZpZXciLCJHbG9iYWxDb25maWdGb3JtIiwiTmV3UmVjZWl2ZXJWaWV3IiwiTmV3VGVtcGxhdGVWaWV3IiwiUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJ1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciIsImZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwiZmV0Y2hHcmFmYW5hTm90aWZpZXJzQWN0aW9uIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsImluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSIsIlJlY2VpdmVycyIsImFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwibG9jYXRpb24iLCJpc1Jvb3QiLCJwYXRobmFtZSIsImVuZHNXaXRoIiwiY29uZmlnUmVxdWVzdHMiLCJhbUNvbmZpZ3MiLCJyZXN1bHQiLCJjb25maWciLCJyZWNlaXZlclR5cGVzIiwiZ3JhZmFuYU5vdGlmaWVycyIsInNob3VsZExvYWRDb25maWciLCJkaXNhYmxlQW1TZWxlY3QiLCJtZXNzYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzdHlsZSIsImNoaWxkcmVuIiwicGFnZUlkIiwiaXNMb2FkaW5nIiwiY29udGV4dFNydiIsIkF1dGhvcml6ZSIsImFjdGlvbnMiLCJmYWxsYmFjayIsInNvbWUiLCJhY3Rpb24iLCJoYXNBY2Nlc3MiLCJJbmZvQm94IiwiQ2xvdWRSZWNlaXZlckZvcm0iLCJHcmFmYW5hUmVjZWl2ZXJGb3JtIiwicmVjZWl2ZXJOYW1lIiwicmVjZWl2ZXIiLCJhbGVydG1hbmFnZXJfY29uZmlnIiwicmVjZWl2ZXJzIiwiZmluZCIsIlRlbXBsYXRlRm9ybSIsInRlbXBsYXRlTmFtZSIsInRlbXBsYXRlIiwidGVtcGxhdGVfZmlsZXMiLCJjb250ZW50IiwidXNlRm9ybSIsIkZvcm1Qcm92aWRlciIsImdsb2JhbENvbmZpZ09wdGlvbnMiLCJPcHRpb25GaWVsZCIsInVzZVN0eWxlczIiLCJtYWtlQU1MaW5rIiwidXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwib21pdEVtcHR5VmFsdWVzIiwiY3NzIiwiaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UiLCJkZWZhdWx0VmFsdWVzIiwic210cF9yZXF1aXJlX3RscyIsInVuaWZpZWRBbGVydGluZyIsInNhdmVBTUNvbmZpZyIsInJlYWRPbmx5Iiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZm9ybUFQSSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImdsb2JhbCIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm9uU3VibWl0Q2FsbGJhY2siLCJ2YWx1ZXMiLCJuZXdDb25maWciLCJvbGRDb25maWciLCJzdWNjZXNzTWVzc2FnZSIsInJlZGlyZWN0UGF0aCIsImhlYWRpbmciLCJTdHJpbmciLCJvcHRpb24iLCJwcm9wZXJ0eU5hbWUiLCJ0aGVtZSIsInNwYWNpbmciLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiUmVjZWl2ZXJzVGFibGUiLCJUZW1wbGF0ZXNUYWJsZSIsImFsZXJ0TWFuYWdlck5hbWUiLCJpc0Nsb3VkIiwiaXNWYW5pbGxhQU0iLCJBbGVydGluZ05vdGlmaWNhdGlvbnNFeHRlcm5hbFdyaXRlIiwic2VjdGlvbiIsImN4IiwiTGluayIsIlJlY2VpdmVyc1NlY3Rpb24iLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImFkZEJ1dHRvbkxhYmVsIiwiYWRkQnV0dG9uVG8iLCJzaG93QnV0dG9uIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwiQ29uZmlybU1vZGFsIiwiTW9kYWwiLCJ1c2VNZW1vIiwiZ2V0QWxlcnRUYWJsZVN0eWxlcyIsImV4dHJhY3ROb3RpZmllclR5cGVDb3VudHMiLCJBY3Rpb25JY29uIiwiaXNSZWNlaXZlclVzZWQiLCJkZWxldGVSZWNlaXZlckFjdGlvbiIsImdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyIsInRhYmxlU3R5bGVzIiwicGVybWlzc2lvbnMiLCJyZWNlaXZlclRvRGVsZXRlIiwic2V0UmVjZWl2ZXJUb0RlbGV0ZSIsInNob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsIiwic2V0U2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwiLCJvbkNsaWNrRGVsZXRlUmVjZWl2ZXIiLCJkZWxldGVSZWNlaXZlciIsInVuZGVmaW5lZCIsInJvd3MiLCJ0eXBlcyIsIk9iamVjdCIsImVudHJpZXMiLCJjb3VudCIsImhhc1Blcm1pc3Npb24iLCJjcmVhdGUiLCJ0YWJsZSIsInVwZGF0ZSIsImV2ZW5Sb3ciLCJpZHgiLCJqb2luIiwiYWN0aW9uc0NlbGwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJGaWVsZCIsIklucHV0IiwiVGV4dEFyZWEiLCJlbnN1cmVEZWZpbmUiLCJkZWZhdWx0cyIsImZyZWV6ZSIsImV4aXN0aW5nIiwic3VibWl0IiwidGVtcGxhdGVzIiwiZmlsdGVyIiwicmVnaXN0ZXIiLCJtb2RlIiwidmFsaWRhdGVOYW1lSXNVbmlxdWUiLCJkYXRhIiwicmVxdWlyZWQiLCJ2YWx1ZSIsInZhbGlkYXRlIiwibmFtZUlzVW5pcXVlIiwiZXh0ZXJuYWxMaW5rIiwidGV4dGFyZWEiLCJidXR0b25zIiwiRnJhZ21lbnQiLCJDb2xsYXBzZVRvZ2dsZSIsIkRldGFpbHNGaWVsZCIsImRlbGV0ZVRlbXBsYXRlQWN0aW9uIiwiZXhwYW5kZWRUZW1wbGF0ZXMiLCJzZXRFeHBhbmRlZFRlbXBsYXRlcyIsInRlbXBsYXRlUm93cyIsInRlbXBsYXRlVG9EZWxldGUiLCJzZXRUZW1wbGF0ZVRvRGVsZXRlIiwiZGVsZXRlVGVtcGxhdGUiLCJjb2xFeHBhbmQiLCJpc0V4cGFuZGVkIiwidXNlRm9ybUNvbnRleHQiLCJDaGFubmVsT3B0aW9ucyIsInNlbGVjdGVkQ2hhbm5lbE9wdGlvbnMiLCJvblJlc2V0U2VjdXJlRmllbGQiLCJzZWN1cmVGaWVsZHMiLCJwYXRoUHJlZml4Iiwid2F0Y2giLCJjdXJyZW50Rm9ybVZhbHVlcyIsImluZGV4Iiwia2V5IiwibGFiZWwiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwic2hvd1doZW4iLCJmaWVsZCIsImlzIiwic2VjdXJlIiwic2VjdXJlU2V0dGluZ3MiLCJzZXR0aW5ncyIsImRlZmF1bHRWYWx1ZSIsIklucHV0Q29udHJvbCIsIlNlbGVjdCIsIkNvbGxhcHNpYmxlU2VjdGlvbiIsIkNoYW5uZWxTdWJGb3JtIiwib25EdXBsaWNhdGUiLCJvbkRlbGV0ZSIsIm9uVGVzdCIsIm5vdGlmaWVycyIsImNvbW1vblNldHRpbmdzQ29tcG9uZW50IiwiQ29tbW9uU2V0dGluZ3NDb21wb25lbnQiLCJmaWVsZE5hbWUiLCJjb250cm9sIiwidHJpZ2dlciIsInNldFZhbHVlIiwic2VsZWN0ZWRUeXBlIiwidGVzdGluZ1JlY2VpdmVyIiwidGVzdFJlY2VpdmVycyIsIl9zZWN1cmVGaWVsZHMiLCJzZXRTZWN1cmVGaWVsZHMiLCJ1cGRhdGVkU2VjdXJlRmllbGRzIiwidHlwZU9wdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiaGFuZGxlVGVzdCIsImlzVmFsaWQiLCJrZXlzIiwibm90aWZpZXIiLCJtYW5kYXRvcnlPcHRpb25zIiwib3B0aW9ucyIsIm8iLCJvcHRpb25hbE9wdGlvbnMiLCJjb250YWN0UG9pbnRUeXBlSW5wdXRJZCIsIndyYXBwZXIiLCJ0b3BSb3ciLCJvbkNoYW5nZSIsImlubmVyQ29udGVudCIsImluZm8iLCJib3JkZXIiLCJtZWRpdW0iLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsImJyZWFrcG9pbnRzIiwieGwiLCJ1bml0IiwiY2hhbm5lbFNldHRpbmdzSGVhZGVyIiwiQ2hlY2tib3giLCJDbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5ncyIsImNsb3VkTm90aWZpZXJUeXBlcyIsImNsb3VkUmVjZWl2ZXJUb0Zvcm1WYWx1ZXMiLCJmb3JtVmFsdWVzVG9DbG91ZFJlY2VpdmVyIiwidXBkYXRlQ29uZmlnV2l0aFJlY2VpdmVyIiwiUmVjZWl2ZXJGb3JtIiwiZGVmYXVsdENoYW5uZWxWYWx1ZXMiLCJfX2lkIiwic2VuZFJlc29sdmVkIiwiZXhpc3RpbmdWYWx1ZSIsIm9uU3VibWl0IiwibmV3UmVjZWl2ZXIiLCJ0YWtlblJlY2VpdmVyTmFtZXMiLCJzaXplIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsInRvZ2dsZUNvbGxhcHNlIiwiY2FyZXQiLCJoaWRkZW4iLCJ0eXBvZ3JhcGh5Iiwic20iLCJmb250V2VpZ2h0UmVndWxhciIsIkdyYWZhbmFDb21tb25DaGFubmVsU2V0dGluZ3MiLCJ0ZXN0UmVjZWl2ZXJzQWN0aW9uIiwiZm9ybUNoYW5uZWxWYWx1ZXNUb0dyYWZhbmFDaGFubmVsQ29uZmlnIiwiZm9ybVZhbHVlc1RvR3JhZmFuYVJlY2VpdmVyIiwiZ3JhZmFuYVJlY2VpdmVyVG9Gb3JtVmFsdWVzIiwiVGVzdENvbnRhY3RQb2ludE1vZGFsIiwiZGlzYWJsZVJlc29sdmVNZXNzYWdlIiwidGVzdENoYW5uZWxWYWx1ZXMiLCJzZXRUZXN0Q2hhbm5lbFZhbHVlcyIsImlkMm9yaWdpbmFsIiwib25UZXN0Q2hhbm5lbCIsInRlc3ROb3RpZmljYXRpb24iLCJhbGVydCIsImNoYW4iLCJwYXlsb2FkIiwiZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3MiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRyb2xsZWRGaWVsZEFycmF5IiwiRGVsZXRlZFN1YkZvcm0iLCJ1c2VBcHBOb3RpZmljYXRpb24iLCJpbml0aWFsVmFsdWVzIiwiZGVmYXVsdEl0ZW0iLCJub3RpZnlBcHAiLCJpdGVtcyIsIk1hdGgiLCJyYW5kb20iLCJnZXRWYWx1ZXMiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJzb2Z0RGVsZXRlIiwidmFsaWRhdGVOYW1lSXNBdmFpbGFibGUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN1Ym1pdENhbGxiYWNrIiwiaXRlbSIsIl9fZGVsZXRlZCIsIm9uSW52YWxpZCIsInJvdXRlIiwibmFtZUlzQXZhaWxhYmxlIiwiaW5pdGlhbEl0ZW0iLCJjdXJyZW50VmFsdWVzIiwiTGFiZWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiQW5ub3RhdGlvbnNGaWVsZCIsIkxhYmVsc0ZpZWxkIiwiTm90aWZpY2F0aW9uVHlwZSIsIm5vdGlmaWNhdGlvbk9wdGlvbnMiLCJhbm5vdGF0aW9ucyIsImxhYmVscyIsImlzT3BlbiIsIm9uRGlzbWlzcyIsIm5vdGlmaWNhdGlvblR5cGUiLCJzZXROb3RpZmljYXRpb25UeXBlIiwicHJlZGVmaW5lZCIsImZvcm1NZXRob2RzIiwiY3VzdG9tIiwicmVkdWNlIiwiYWNjIiwiZmxleFJvdyIsIktleVZhbHVlTWFwSW5wdXQiLCJwYWlycyIsInNldFBhaXJzIiwicmVjb3JkVG9QYWlycyIsImVtaXRDaGFuZ2UiLCJwYWlyc1RvUmVjb3JkIiwiZGVsZXRlSXRlbSIsIm5ld1BhaXJzIiwic2xpY2UiLCJyZW1vdmVkIiwic3BsaWNlIiwidXBkYXRlUGFpciIsIm9sZCIsInBhaXIiLCJpIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJhZGRCdXR0b24iLCJyZWNvcmQiLCJvYmoiLCJpc0VtcHR5IiwiU3ViZm9ybUZpZWxkIiwiU3ViZm9ybUFycmF5RmllbGQiLCJTdHJpbmdBcnJheUlucHV0IiwiaW52YWxpZCIsInBhdGhTdWZmaXgiLCJvcHRpb25QYXRoIiwiZWxlbWVudCIsIk9wdGlvbklucHV0IiwicGF0aEluZGV4IiwidW5yZWdpc3RlciIsImtlZXBWYWx1ZSIsImNoZWNrYm94IiwiZGV0ZXJtaW5lUmVhZE9ubHkiLCJpbnB1dFR5cGUiLCJkZXRlcm1pbmVSZXF1aXJlZCIsInYiLCJ2YWxpZGF0aW9uUnVsZSIsInZhbGlkYXRlT3B0aW9uIiwicGxhY2Vob2xkZXIiLCJzZWxlY3RPcHRpb25zIiwiY29uc29sZSIsIlJlZ0V4cCIsInRlc3QiLCJkZXBlbmRzT24iLCJkZXBlbmRlbnRPbiIsIkJvb2xlYW4iLCJuZXdWYWx1ZSIsInVwZGF0ZVZhbHVlIiwiaXRlbVZhbHVlIiwicm93IiwiZGVsZXRlSWNvbiIsImdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzIiwicGF0aCIsImNvbGxhcHNpYmxlU2VjdGlvbiIsIml0ZW1JbmRleCIsInN1YmZvcm1PcHRpb25zIiwiX3dhdGNoVmFsdWUiLCJzaG93Iiwic2V0U2hvdyIsInN1Yk9wdGlvbiIsIlNlbGVjdFdpdGhBZGQiLCJBbm5vdGF0aW9uIiwiYW5ub3RhdGlvbkxhYmVscyIsIkFubm90YXRpb25LZXlJbnB1dCIsImV4aXN0aW5nS2V5cyIsImFyaWFMYWJlbCIsInJlc3QiLCJhbm5vdGF0aW9uT3B0aW9ucyIsIkZpZWxkQXJyYXkiLCJ1c2VTdHlsZXMiLCJfIiwiZmxleENvbHVtbiIsImlzVXJsIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJWYWx1ZUlucHV0Q29tcG9uZW50IiwiZmxleFJvd0l0ZW1NYXJnaW4iLCJhbm5vdGF0aW9uVmFsdWVJbnB1dCIsImFkZEFubm90YXRpb25zQnV0dG9uIiwieHMiLCJJbmxpbmVMYWJlbCIsImNlbnRlckFsaWduUm93IiwibGFiZWxJbnB1dCIsImVxdWFsU2lnbiIsImRlbGV0ZUxhYmVsQnV0dG9uIiwiYWRkTGFiZWxCdXR0b24iLCJtZCIsIm9uQ3VzdG9tQ2hhbmdlIiwiZGlzYWJsZWQiLCJhZGRMYWJlbCIsImlzQ3VzdG9tIiwic2V0SXNDdXN0b20iLCJfb3B0aW9ucyIsInRhcmdldCIsInZhbCIsIlRvb2x0aXAiLCJ0b29sdGlwIiwidG8iLCJvbkNsaWNrIiwidG9vbHRpcFBsYWNlbWVudCIsInVzZVF1ZXJ5UGFyYW1zIiwic3RvcmUiLCJBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSIsIkFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSIsImdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzIiwiaXNBbGVydE1hbmFnZXJTb3VyY2UiLCJkcyIsInF1ZXJ5UGFyYW1zIiwidXBkYXRlUXVlcnlQYXJhbXMiLCJzZXQiLCJxdWVyeVNvdXJjZSIsInN0b3JlU291cmNlIiwiRU1QVFlfQVJSQVkiLCJyZXNldCIsInVwZGF0ZUZuIiwibmV3SXRlbXMiLCJ3ZWFrIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJiYXNpY0F1dGhPcHRpb24iLCJ0bHNDb25maWdPcHRpb24iLCJodHRwQ29uZmlnT3B0aW9uIiwiaXNBcnJheSIsImNoYW5uZWxNYXAiLCJpZENvdW50ZXIiLCJjaGFubmVsIiwiZ3JhZmFuYUNoYW5uZWxDb25maWdUb0Zvcm1DaGFubmVsVmFsdWVzIiwiY29uZmlncyIsInJlcGxhY2UiLCJFcnJvciIsImNsb3VkQ2hhbm5lbENvbmZpZ1RvRm9ybUNoYW5uZWxWYWx1ZXMiLCJmbGF0IiwiY2hhbm5lbFZhbHVlcyIsInJlY3YiLCJmb3JFYWNoIiwic2VuZF9yZXNvbHZlZCIsImNvbmZpZ3NLZXkiLCJwdXNoIiwicmVwbGFjZVJlY2VpdmVyTmFtZSIsIm9sZFJlY2VpdmVycyIsInVwZGF0ZWQiLCJleGlzdGluZ1JlY2VpdmVyIiwicmVuYW1lUmVjZWl2ZXJJblJvdXRlIiwib2xkTmFtZSIsIm5ld05hbWUiLCJyb3V0ZXMiLCJ1aWQiLCJyZWNlaXZlclR5cGVOYW1lcyIsImNhcGl0YWxpemUiLCJnZXRHcmFmYW5hTm90aWZpZXJUeXBlQ291bnRzIiwiZ2V0Q29ydGV4QWxlcnRNYW5hZ2VyTm90aWZpZXJUeXBlQ291bnRzIiwiQXJyYXkiLCJyIiwidGVtcGxhdGVDb250ZW50IiwiaW5kZW50ZWRDb250ZW50Iiwic3BsaXQiLCJsaW5lIiwicGFnZXJkdXR5IiwicHVzaG92ZXIiLCJzbGFjayIsIm9wc2dlbmllIiwid2ViaG9vayIsInZpY3Rvcm9wcyIsIndlY2hhdCJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_explore_AddToDashboard_index_tsx"],{

/***/ "./public/app/features/dashboard/state/analyticsProcessor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitDashboardViewEvent": () => (/* binding */ emitDashboardViewEvent)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function emitDashboardViewEvent(dashboard) {
  const eventData = {
    dashboardId: dashboard.id,
    dashboardName: dashboard.title,
    dashboardUid: dashboard.uid,
    folderName: dashboard.meta.folderTitle,
    eventName: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.MetaAnalyticsEventName.DashboardView
  };
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportMetaAnalytics)(eventData);
}

/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewDashboardModelData": () => (/* binding */ getNewDashboardModelData),
/* harmony export */   "initDashboard": () => (/* binding */ initDashboard),
/* harmony export */   "removeDashboardToFetchFromLocalStorage": () => (/* binding */ removeDashboardToFetchFromLocalStorage),
/* harmony export */   "setDashboardToFetchFromLocalStorage": () => (/* binding */ setDashboardToFetchFromLocalStorage)
/* harmony export */ });
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _DashboardModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _analyticsProcessor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/state/analyticsProcessor.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/store.ts");
// Services & Utils





 // Actions


 // Types













async function fetchDashboard(args, dispatch, getState) {
  // When creating new or adding panels to a dashboard from explore we load it from local storage
  const model = app_core_store__WEBPACK_IMPORTED_MODULE_18__["default"].getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutes.Home:
        {
          // load home dash
          const dashDTO = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.backendSrv.get('/api/dashboards/home'); // if user specified a custom home dashboard redirect to that

          if (dashDTO.redirectUri) {
            const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_10__.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.replace(newUrl);
            return null;
          } // disable some actions on the default home dashboard


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutes.Normal:
        {
          const dashDTO = await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_3__.dashboardLoaderSrv.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            // check if the current url is correct (might be old slug)
            const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_10__.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              // Spread current location to persist search params used for navigation
              _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.replace(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutes.New:
        {
          return getNewDashboardModelData(args.urlFolderId);
        }

      default:
        throw {
          message: 'Unknown route ' + args.routeName
        };
    }
  } catch (err) {
    // Ignore cancelled errors
    if (err.cancelled) {
      return null;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitFailed)({
      message: 'Failed to fetch dashboard',
      error: err
    }));
    console.error(err);
    return null;
  }
}
/**
 * This action (or saga) does everything needed to bootstrap a dashboard & dashboard model.
 * First it handles the process of fetching the dashboard, correcting the url if required (causing redirects/url updates)
 *
 * This is used both for single dashboard & solo panel routes, home & new dashboard routes.
 *
 * Then it handles the initializing of the old angular services that the dashboard components & panels still depend on
 *
 */


function initDashboard(args) {
  return async (dispatch, getState) => {
    var _args$urlUid;

    // set fetching state
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitFetching)()); // fetch dashboard data

    const dashDTO = await fetchDashboard(args, dispatch, getState); // returns null if there was a redirect or error

    if (!dashDTO) {
      return;
    } // set initializing state


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitServices)()); // create model

    let dashboard;

    try {
      dashboard = new _DashboardModel__WEBPACK_IMPORTED_MODULE_9__.DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitFailed)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } // add missing orgId query param


    const storeState = getState();
    const queryParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.getSearchObject();

    if (!queryParams.orgId) {
      // TODO this is currently not possible with the LocationService API
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } // init services


    const timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__.getTimeSrv)();
    const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_2__.getDashboardSrv)(); // legacy srv state, we need this value updated for built-in annotations

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_17__.toStateKey)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); // template values service needs to initialize completely before the rest of the dashboard can load

    await dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_11__.initVariablesTransaction)(dashboardUid, dashboard)); // DashboardQueryRunner needs to run after all variables have been resolved so that any annotation query including a variable
    // will be correctly resolved

    const runner = (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_15__.createDashboardQueryRunner)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_16__.getIfExistsLastKey)(getState()) !== dashboardUid) {
      // if a previous dashboard has slow running variable queries the batch uid will be the new one
      // but the args.urlUid will be the same as before initVariablesTransaction was called so then we can't continue initializing
      // the previous dashboard.
      return;
    } // If dashboard is in a different init phase it means it cancelled during service init


    if (getState().dashboard.initPhase !== app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardInitPhase.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); // handle auto fix experimental feature

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__.keybindingSrv.setupDashboardBindings(dashboard);
    } catch (err) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_6__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_0__.createErrorNotification)('Dashboard init failed', err)));
      console.error(err);
    } // send open dashboard event


    if (args.routeName !== app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutes.New) {
      (0,_analyticsProcessor__WEBPACK_IMPORTED_MODULE_12__.emitDashboardViewEvent)(dashboard); // Listen for changes on the current dashboard

      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_13__.dashboardWatcher.watch(dashboard.uid);
    } else {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_13__.dashboardWatcher.leave();
    } // set week start


    if (dashboard.weekStart !== '') {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.setWeekStart)(dashboard.weekStart);
    } else {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.setWeekStart)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.config.bootData.user.weekStart);
    } // yay we are done


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitCompleted)(dashboard));
  };
}
function getNewDashboardModelData(urlFolderId) {
  const data = {
    meta: {
      canStar: false,
      canShare: false,
      isNew: true,
      folderId: 0
    },
    dashboard: {
      title: 'New dashboard',
      panels: [{
        type: 'add-panel',
        gridPos: {
          x: 0,
          y: 0,
          w: 12,
          h: 9
        },
        title: 'Panel Title'
      }]
    }
  };

  if (urlFolderId) {
    data.meta.folderId = parseInt(urlFolderId, 10);
  }

  return data;
}
const DASHBOARD_FROM_LS_KEY = 'DASHBOARD_FROM_LS_KEY';
function setDashboardToFetchFromLocalStorage(model) {
  app_core_store__WEBPACK_IMPORTED_MODULE_18__["default"].setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  app_core_store__WEBPACK_IMPORTED_MODULE_18__["default"]["delete"](DASHBOARD_FROM_LS_KEY);
}

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/AddToDashboardModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboardModal": () => (/* binding */ AddToDashboardModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _addToDashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/explore/AddToDashboard/addToDashboard.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref", "value", "onChange"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














var SaveTarget;

(function (SaveTarget) {
  SaveTarget["NewDashboard"] = "new-dashboard";
  SaveTarget["ExistingDashboard"] = "existing-dashboard";
})(SaveTarget || (SaveTarget = {}));

const SAVE_TARGETS = [{
  label: 'New dashboard',
  value: SaveTarget.NewDashboard
}, {
  label: 'Existing dashboard',
  value: SaveTarget.ExistingDashboard
}];

function assertIsSaveToExistingDashboardError(errors) {// the shape of the errors object is always compatible with the type above, but we need to
  // explicitly assert its type so that TS can narrow down FormDTO to SaveToExistingDashboard
  // when we use it in the form.
}

function getDashboardURL(dashboardUid) {
  return dashboardUid ? `d/${dashboardUid}` : 'dashboard/new';
}

var GenericError;

(function (GenericError) {
  GenericError["UNKNOWN"] = "unknown-error";
  GenericError["NAVIGATION"] = "navigation-error";
})(GenericError || (GenericError = {}));

const AddToDashboardModal = ({
  onClose,
  exploreId
}) => {
  const exploreItem = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((0,_state_selectors__WEBPACK_IMPORTED_MODULE_8__.getExploreItemSelector)(exploreId));
  const [submissionError, setSubmissionError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    handleSubmit,
    control,
    formState: {
      errors
    },
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
    defaultValues: {
      saveTarget: SaveTarget.NewDashboard
    }
  });
  const saveTarget = watch('saveTarget');

  const onSubmit = async (openInNewTab, data) => {
    setSubmissionError(undefined);
    const dashboardUid = data.saveTarget === SaveTarget.ExistingDashboard ? data.dashboardUid : undefined;
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.reportInteraction)('e2d_submit', {
      newTab: openInNewTab,
      saveTarget: data.saveTarget,
      queries: exploreItem.queries.length
    });

    try {
      var _exploreItem$datasour;

      await (0,_addToDashboard__WEBPACK_IMPORTED_MODULE_3__.setDashboardInLocalStorage)({
        dashboardUid,
        datasource: (_exploreItem$datasour = exploreItem.datasourceInstance) === null || _exploreItem$datasour === void 0 ? void 0 : _exploreItem$datasour.getRef(),
        queries: exploreItem.queries,
        queryResponse: exploreItem.queryResponse
      });
    } catch (error) {
      switch (error) {
        case _addToDashboard__WEBPACK_IMPORTED_MODULE_3__.AddToDashboardError.FETCH_DASHBOARD:
          setSubmissionError({
            error,
            message: 'Could not fetch dashboard information. Please try again.'
          });
          break;

        case _addToDashboard__WEBPACK_IMPORTED_MODULE_3__.AddToDashboardError.SET_DASHBOARD_LS:
          setSubmissionError({
            error,
            message: 'Could not add panel to dashboard. Please try again.'
          });
          break;

        default:
          setSubmissionError({
            error: GenericError.UNKNOWN,
            message: 'Something went wrong. Please try again.'
          });
      }

      return;
    }

    const dashboardURL = getDashboardURL(dashboardUid);

    if (!openInNewTab) {
      onClose();
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.locationUtil.stripBaseFromUrl(dashboardURL));
      return;
    }

    const didTabOpen = !!__webpack_require__.g.open(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.appUrl + dashboardURL, '_blank');

    if (!didTabOpen) {
      setSubmissionError({
        error: GenericError.NAVIGATION,
        message: 'Could not navigate to the selected dashboard. Please try again.'
      });
      (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_10__.removeDashboardToFetchFromLocalStorage)();
      return;
    }

    onClose();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.reportInteraction)('e2d_open');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "Add panel to dashboard",
    onDismiss: onClose,
    isOpen: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        control: control,
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Target dashboard",
            description: "Choose where to add the panel.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, Object.assign({
              options: SAVE_TARGETS
            }, field, {
              id: "e2d-save-target"
            }))
          });
        },
        name: "saveTarget"
      }), saveTarget === SaveTarget.ExistingDashboard && (() => {
        assertIsSaveToExistingDashboardError(errors);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
          render: _ref2 => {
            var _errors$dashboardUid;

            let {
              field: {
                onChange
              }
            } = _ref2,
                field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
              label: "Dashboard",
              description: "Select in which dashboard the panel will be created.",
              error: (_errors$dashboardUid = errors.dashboardUid) === null || _errors$dashboardUid === void 0 ? void 0 : _errors$dashboardUid.message,
              invalid: !!errors.dashboardUid,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_5__.DashboardPicker, Object.assign({}, field, {
                inputId: "e2d-dashboard-picker",
                defaultOptions: true,
                onChange: d => onChange(d === null || d === void 0 ? void 0 : d.uid)
              }))
            });
          },
          control: control,
          name: "dashboardUid",
          shouldUnregister: true,
          rules: {
            required: {
              value: true,
              message: 'This field is required.'
            }
          }
        });
      })(), submissionError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
        severity: "error",
        title: "Error adding the panel",
        children: submissionError.message
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "reset",
          onClick: onClose,
          fill: "outline",
          variant: "secondary",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "submit",
          variant: "secondary",
          onClick: handleSubmit((0,lodash__WEBPACK_IMPORTED_MODULE_9__.partial)(onSubmit, true)),
          icon: "external-link-alt",
          children: "Open in new tab"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "submit",
          variant: "primary",
          onClick: handleSubmit((0,lodash__WEBPACK_IMPORTED_MODULE_9__.partial)(onSubmit, false)),
          icon: "apps",
          children: "Open dashboard"
        })]
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/addToDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboardError": () => (/* binding */ AddToDashboardError),
/* harmony export */   "setDashboardInLocalStorage": () => (/* binding */ setDashboardInLocalStorage)
/* harmony export */ });
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");


let AddToDashboardError;

(function (AddToDashboardError) {
  AddToDashboardError["FETCH_DASHBOARD"] = "fetch-dashboard";
  AddToDashboardError["SET_DASHBOARD_LS"] = "set-dashboard-ls-error";
})(AddToDashboardError || (AddToDashboardError = {}));

function createDashboard() {
  const dto = (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__.getNewDashboardModelData)(); // getNewDashboardModelData adds by default the "add-panel" panel. We don't want that.

  dto.dashboard.panels = [];
  return dto;
}

async function setDashboardInLocalStorage(options) {
  var _dto$dashboard$panels;

  const panelType = getPanelType(options.queries, options.queryResponse);
  const panel = {
    targets: options.queries,
    type: panelType,
    title: 'New Panel',
    gridPos: {
      x: 0,
      y: 0,
      w: 12,
      h: 8
    },
    datasource: options.datasource
  };
  let dto;

  if (options.dashboardUid) {
    try {
      dto = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.backendSrv.getDashboardByUid(options.dashboardUid);
    } catch (e) {
      throw AddToDashboardError.FETCH_DASHBOARD;
    }
  } else {
    dto = createDashboard();
  }

  dto.dashboard.panels = [panel, ...((_dto$dashboard$panels = dto.dashboard.panels) !== null && _dto$dashboard$panels !== void 0 ? _dto$dashboard$panels : [])];

  try {
    (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__.setDashboardToFetchFromLocalStorage)(dto);
  } catch {
    throw AddToDashboardError.SET_DASHBOARD_LS;
  }
}

const isVisible = query => !query.hide;

const hasRefId = refId => frame => frame.refId === refId;

function getPanelType(queries, queryResponse) {
  for (const {
    refId
  } of queries.filter(isVisible)) {
    // traceview is not supported in dashboards, skipping it for now.
    const hasQueryRefId = hasRefId(refId);

    if (queryResponse.graphFrames.some(hasQueryRefId)) {
      return 'timeseries';
    }

    if (queryResponse.logsFrames.some(hasQueryRefId)) {
      return 'logs';
    }

    if (queryResponse.nodeGraphFrames.some(hasQueryRefId)) {
      return 'nodeGraph';
    }
  } // falling back to table


  return 'table';
}

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboard": () => (/* binding */ AddToDashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _AddToDashboardModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/explore/AddToDashboard/AddToDashboardModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const AddToDashboard = ({
  exploreId
}) => {
  var _useSelector, _useSelector$queries;

  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const selectExploreItem = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_4__.getExploreItemSelector)(exploreId);
  const explorePaneHasQueries = !!((_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(selectExploreItem)) !== null && _useSelector !== void 0 && (_useSelector$queries = _useSelector.queries) !== null && _useSelector$queries !== void 0 && _useSelector$queries.length);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
      icon: "apps",
      onClick: () => setIsOpen(true),
      "aria-label": "Add to dashboard",
      disabled: !explorePaneHasQueries,
      children: "Add to dashboard"
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AddToDashboardModal__WEBPACK_IMPORTED_MODULE_1__.AddToDashboardModal, {
      onClose: () => setIsOpen(false),
      exploreId: exploreId
    })]
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19leHBsb3JlX0FkZFRvRGFzaGJvYXJkX2luZGV4X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBRU8sU0FBU0Usc0JBQVQsQ0FBZ0NDLFNBQWhDLEVBQTJEO0FBQ2hFLFFBQU1DLFNBQW9DLEdBQUc7QUFDM0NDLElBQUFBLFdBQVcsRUFBRUYsU0FBUyxDQUFDRyxFQURvQjtBQUUzQ0MsSUFBQUEsYUFBYSxFQUFFSixTQUFTLENBQUNLLEtBRmtCO0FBRzNDQyxJQUFBQSxZQUFZLEVBQUVOLFNBQVMsQ0FBQ08sR0FIbUI7QUFJM0NDLElBQUFBLFVBQVUsRUFBRVIsU0FBUyxDQUFDUyxJQUFWLENBQWVDLFdBSmdCO0FBSzNDQyxJQUFBQSxTQUFTLEVBQUViLGtGQUFvQ2M7QUFMSixHQUE3QztBQVFBZixFQUFBQSxxRUFBbUIsQ0FBQ0ksU0FBRCxDQUFuQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0EsZUFBZW9DLGNBQWYsQ0FDRUMsSUFERixFQUVFQyxRQUZGLEVBR0VDLFFBSEYsRUFJZ0M7QUFDOUI7QUFDQSxRQUFNQyxLQUFLLEdBQUdMLGlFQUFBLENBQThCTyxxQkFBOUIsQ0FBZDs7QUFDQSxNQUFJRixLQUFKLEVBQVc7QUFDVEcsSUFBQUEsc0NBQXNDO0FBQ3RDLFdBQU9ILEtBQVA7QUFDRDs7QUFFRCxNQUFJO0FBQ0YsWUFBUUgsSUFBSSxDQUFDTyxTQUFiO0FBQ0UsV0FBS3BCLDJEQUFMO0FBQTJCO0FBQ3pCO0FBQ0EsZ0JBQU1zQixPQUFxQixHQUFHLE1BQU1qQyx5RUFBQSxDQUFlLHNCQUFmLENBQXBDLENBRnlCLENBSXpCOztBQUNBLGNBQUlpQyxPQUFPLENBQUNFLFdBQVosRUFBeUI7QUFDdkIsa0JBQU1DLE1BQU0sR0FBR3ZCLHlFQUFBLENBQThCb0IsT0FBTyxDQUFDRSxXQUF0QyxDQUFmO0FBQ0FqQixZQUFBQSxzRUFBQSxDQUF3QmtCLE1BQXhCO0FBQ0EsbUJBQU8sSUFBUDtBQUNELFdBVHdCLENBV3pCOzs7QUFDQUgsVUFBQUEsT0FBTyxDQUFDdEMsSUFBUixDQUFhNEMsT0FBYixHQUF1QixLQUF2QjtBQUNBTixVQUFBQSxPQUFPLENBQUN0QyxJQUFSLENBQWE2QyxRQUFiLEdBQXdCLEtBQXhCO0FBQ0FQLFVBQUFBLE9BQU8sQ0FBQ3RDLElBQVIsQ0FBYThDLE9BQWIsR0FBdUIsS0FBdkI7QUFDQSxpQkFBT1IsT0FBUDtBQUNEOztBQUNELFdBQUt0Qiw2REFBTDtBQUE2QjtBQUMzQixnQkFBTXNCLE9BQXFCLEdBQUcsTUFBTS9CLGdIQUFBLENBQWlDc0IsSUFBSSxDQUFDb0IsT0FBdEMsRUFBK0NwQixJQUFJLENBQUNxQixPQUFwRCxFQUE2RHJCLElBQUksQ0FBQ3NCLE1BQWxFLENBQXBDOztBQUVBLGNBQUl0QixJQUFJLENBQUN1QixNQUFMLElBQWVkLE9BQU8sQ0FBQ3RDLElBQVIsQ0FBYXFELEdBQWhDLEVBQXFDO0FBQ25DO0FBQ0Esa0JBQU1DLFlBQVksR0FBR3BDLHlFQUFBLENBQThCb0IsT0FBTyxDQUFDdEMsSUFBUixDQUFhcUQsR0FBM0MsQ0FBckI7QUFDQSxrQkFBTUUsV0FBVyxHQUFHaEMsMEVBQUEsR0FBOEJrQyxRQUFsRDs7QUFFQSxnQkFBSUgsWUFBWSxLQUFLQyxXQUFyQixFQUFrQztBQUNoQztBQUNBaEMsY0FBQUEsc0VBQUEsbUJBQ0tBLDBFQUFBLEVBREw7QUFFRWtDLGdCQUFBQSxRQUFRLEVBQUVIO0FBRlo7QUFJQUksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosRUFBMENMLFlBQTFDLEVBQXdEQyxXQUF4RDtBQUNEO0FBQ0Y7O0FBQ0QsaUJBQU9qQixPQUFQO0FBQ0Q7O0FBQ0QsV0FBS3RCLDBEQUFMO0FBQTBCO0FBQ3hCLGlCQUFPNkMsd0JBQXdCLENBQUNoQyxJQUFJLENBQUNpQyxXQUFOLENBQS9CO0FBQ0Q7O0FBQ0Q7QUFDRSxjQUFNO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxtQkFBbUJsQyxJQUFJLENBQUNPO0FBQW5DLFNBQU47QUF6Q0o7QUEyQ0QsR0E1Q0QsQ0E0Q0UsT0FBTzRCLEdBQVAsRUFBWTtBQUNaO0FBQ0EsUUFBSUEsR0FBRyxDQUFDQyxTQUFSLEVBQW1CO0FBQ2pCLGFBQU8sSUFBUDtBQUNEOztBQUVEbkMsSUFBQUEsUUFBUSxDQUFDbEIsOERBQW1CLENBQUM7QUFBRW1ELE1BQUFBLE9BQU8sRUFBRSwyQkFBWDtBQUF3Q0csTUFBQUEsS0FBSyxFQUFFRjtBQUEvQyxLQUFELENBQXBCLENBQVI7QUFDQU4sSUFBQUEsT0FBTyxDQUFDUSxLQUFSLENBQWNGLEdBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRyxhQUFULENBQXVCdEMsSUFBdkIsRUFBbUU7QUFDeEUsU0FBTyxPQUFPQyxRQUFQLEVBQWlCQyxRQUFqQixLQUE4QjtBQUFBOztBQUNuQztBQUNBRCxJQUFBQSxRQUFRLENBQUNqQixnRUFBcUIsRUFBdEIsQ0FBUixDQUZtQyxDQUluQzs7QUFDQSxVQUFNeUIsT0FBTyxHQUFHLE1BQU1WLGNBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQWlCQyxRQUFqQixDQUFwQyxDQUxtQyxDQU9uQzs7QUFDQSxRQUFJLENBQUNPLE9BQUwsRUFBYztBQUNaO0FBQ0QsS0FWa0MsQ0FZbkM7OztBQUNBUixJQUFBQSxRQUFRLENBQUNoQixnRUFBcUIsRUFBdEIsQ0FBUixDQWJtQyxDQWVuQzs7QUFDQSxRQUFJdkIsU0FBSjs7QUFDQSxRQUFJO0FBQ0ZBLE1BQUFBLFNBQVMsR0FBRyxJQUFJMEIsMkRBQUosQ0FBbUJxQixPQUFPLENBQUMvQyxTQUEzQixFQUFzQytDLE9BQU8sQ0FBQ3RDLElBQTlDLENBQVo7QUFDRCxLQUZELENBRUUsT0FBT2dFLEdBQVAsRUFBWTtBQUNabEMsTUFBQUEsUUFBUSxDQUFDbEIsOERBQW1CLENBQUM7QUFBRW1ELFFBQUFBLE9BQU8sRUFBRSwrQkFBWDtBQUE0Q0csUUFBQUEsS0FBSyxFQUFFRjtBQUFuRCxPQUFELENBQXBCLENBQVI7QUFDQU4sTUFBQUEsT0FBTyxDQUFDUSxLQUFSLENBQWNGLEdBQWQ7QUFDQTtBQUNELEtBdkJrQyxDQXlCbkM7OztBQUNBLFVBQU1JLFVBQVUsR0FBR3JDLFFBQVEsRUFBM0I7QUFDQSxVQUFNc0MsV0FBVyxHQUFHOUMsOEVBQUEsRUFBcEI7O0FBRUEsUUFBSSxDQUFDOEMsV0FBVyxDQUFDRSxLQUFqQixFQUF3QjtBQUN0QjtBQUNBaEQsTUFBQUEsc0VBQUEsQ0FBd0I7QUFBRWdELFFBQUFBLEtBQUssRUFBRUgsVUFBVSxDQUFDSyxJQUFYLENBQWdCRjtBQUF6QixPQUF4QixFQUEwRCxJQUExRDtBQUNELEtBaENrQyxDQWtDbkM7OztBQUNBLFVBQU1HLE9BQWdCLEdBQUdsRSxtRkFBVSxFQUFuQztBQUNBLFVBQU1tRSxZQUEwQixHQUFHckUsNkZBQWUsRUFBbEQsQ0FwQ21DLENBc0NuQzs7QUFDQXFFLElBQUFBLFlBQVksQ0FBQ0MsVUFBYixDQUF3QnJGLFNBQXhCO0FBRUFtRixJQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYXRGLFNBQWI7QUFFQSxVQUFNTSxZQUFZLEdBQUc2Qix5RUFBVSxpQkFBQ0csSUFBSSxDQUFDc0IsTUFBTix1REFBZ0I1RCxTQUFTLENBQUNPLEdBQTFCLENBQS9CLENBM0NtQyxDQTRDbkM7O0FBQ0EsVUFBTWdDLFFBQVEsQ0FBQ1YsbUZBQXdCLENBQUN2QixZQUFELEVBQWVOLFNBQWYsQ0FBekIsQ0FBZCxDQTdDbUMsQ0ErQ25DO0FBQ0E7O0FBQ0EsVUFBTXVGLE1BQU0sR0FBR3RELG1IQUEwQixDQUFDO0FBQUVqQyxNQUFBQSxTQUFGO0FBQWFtRixNQUFBQTtBQUFiLEtBQUQsQ0FBekM7QUFDQUksSUFBQUEsTUFBTSxDQUFDQyxHQUFQLENBQVc7QUFBRXhGLE1BQUFBLFNBQUY7QUFBYXlGLE1BQUFBLEtBQUssRUFBRU4sT0FBTyxDQUFDTyxTQUFSO0FBQXBCLEtBQVg7O0FBRUEsUUFBSXhELCtFQUFrQixDQUFDTSxRQUFRLEVBQVQsQ0FBbEIsS0FBbUNsQyxZQUF2QyxFQUFxRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNELEtBekRrQyxDQTJEbkM7OztBQUNBLFFBQUlrQyxRQUFRLEdBQUd4QyxTQUFYLENBQXFCMkYsU0FBckIsS0FBbUNuRSxrRUFBdkMsRUFBb0U7QUFDbEU7QUFDRDs7QUFFRCxRQUFJO0FBQ0Z4QixNQUFBQSxTQUFTLENBQUM2RixjQUFWLEdBREUsQ0FHRjs7QUFDQSxVQUFJZixXQUFXLENBQUNnQixhQUFoQixFQUErQjtBQUM3QjlGLFFBQUFBLFNBQVMsQ0FBQytGLGFBQVYsQ0FBd0JDLE1BQU0sQ0FBQ0MsV0FBL0IsRUFBNENuQixXQUFXLENBQUNvQixLQUF4RDtBQUNEOztBQUVEaEYsTUFBQUEsaUdBQUEsQ0FBcUNsQixTQUFyQztBQUNELEtBVEQsQ0FTRSxPQUFPeUUsR0FBUCxFQUFZO0FBQ1psQyxNQUFBQSxRQUFRLENBQUNwQiwyREFBUyxDQUFDTixzRkFBdUIsQ0FBQyx1QkFBRCxFQUEwQjRELEdBQTFCLENBQXhCLENBQVYsQ0FBUjtBQUNBTixNQUFBQSxPQUFPLENBQUNRLEtBQVIsQ0FBY0YsR0FBZDtBQUNELEtBNUVrQyxDQThFbkM7OztBQUNBLFFBQUluQyxJQUFJLENBQUNPLFNBQUwsS0FBbUJwQiwwREFBdkIsRUFBNEM7QUFDMUMxQixNQUFBQSw0RUFBc0IsQ0FBQ0MsU0FBRCxDQUF0QixDQUQwQyxDQUcxQzs7QUFDQThCLE1BQUFBLGlHQUFBLENBQXVCOUIsU0FBUyxDQUFDTyxHQUFqQztBQUNELEtBTEQsTUFLTztBQUNMdUIsTUFBQUEsaUdBQUE7QUFDRCxLQXRGa0MsQ0F3Rm5DOzs7QUFDQSxRQUFJOUIsU0FBUyxDQUFDc0csU0FBVixLQUF3QixFQUE1QixFQUFnQztBQUM5QjFFLE1BQUFBLDREQUFZLENBQUM1QixTQUFTLENBQUNzRyxTQUFYLENBQVo7QUFDRCxLQUZELE1BRU87QUFDTDFFLE1BQUFBLDREQUFZLENBQUNHLDZFQUFELENBQVo7QUFDRCxLQTdGa0MsQ0ErRm5DOzs7QUFDQVEsSUFBQUEsUUFBUSxDQUFDbkIsaUVBQXNCLENBQUNwQixTQUFELENBQXZCLENBQVI7QUFDRCxHQWpHRDtBQWtHRDtBQUVNLFNBQVNzRSx3QkFBVCxDQUFrQ0MsV0FBbEMsRUFBb0U7QUFDekUsUUFBTWlDLElBQUksR0FBRztBQUNYL0YsSUFBQUEsSUFBSSxFQUFFO0FBQ0o4QyxNQUFBQSxPQUFPLEVBQUUsS0FETDtBQUVKRCxNQUFBQSxRQUFRLEVBQUUsS0FGTjtBQUdKbUQsTUFBQUEsS0FBSyxFQUFFLElBSEg7QUFJSkMsTUFBQUEsUUFBUSxFQUFFO0FBSk4sS0FESztBQU9YMUcsSUFBQUEsU0FBUyxFQUFFO0FBQ1RLLE1BQUFBLEtBQUssRUFBRSxlQURFO0FBRVRzRyxNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFQyxRQUFBQSxJQUFJLEVBQUUsV0FEUjtBQUVFQyxRQUFBQSxPQUFPLEVBQUU7QUFBRUMsVUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsVUFBQUEsQ0FBQyxFQUFFLENBQVg7QUFBY0MsVUFBQUEsQ0FBQyxFQUFFLEVBQWpCO0FBQXFCQyxVQUFBQSxDQUFDLEVBQUU7QUFBeEIsU0FGWDtBQUdFNUcsUUFBQUEsS0FBSyxFQUFFO0FBSFQsT0FETTtBQUZDO0FBUEEsR0FBYjs7QUFtQkEsTUFBSWtFLFdBQUosRUFBaUI7QUFDZmlDLElBQUFBLElBQUksQ0FBQy9GLElBQUwsQ0FBVWlHLFFBQVYsR0FBcUJRLFFBQVEsQ0FBQzNDLFdBQUQsRUFBYyxFQUFkLENBQTdCO0FBQ0Q7O0FBRUQsU0FBT2lDLElBQVA7QUFDRDtBQUVELE1BQU03RCxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFTyxTQUFTd0UsbUNBQVQsQ0FBNkMxRSxLQUE3QyxFQUFrRTtBQUN2RUwsRUFBQUEsaUVBQUEsQ0FBZ0JPLHFCQUFoQixFQUF1Q0YsS0FBdkM7QUFDRDtBQUVNLFNBQVNHLHNDQUFULEdBQWtEO0FBQ3ZEUixFQUFBQSxpRUFBQSxDQUFhTyxxQkFBYjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFFSzJGOztXQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtHQUFBQSxlQUFBQTs7QUFLTCxNQUFNQyxZQUFnRCxHQUFHLENBQ3ZEO0FBQ0VDLEVBQUFBLEtBQUssRUFBRSxlQURUO0FBRUVDLEVBQUFBLEtBQUssRUFBRUgsVUFBVSxDQUFDSTtBQUZwQixDQUR1RCxFQUt2RDtBQUNFRixFQUFBQSxLQUFLLEVBQUUsb0JBRFQ7QUFFRUMsRUFBQUEsS0FBSyxFQUFFSCxVQUFVLENBQUNLO0FBRnBCLENBTHVELENBQXpEOztBQXlCQSxTQUFTQyxvQ0FBVCxDQUNFQyxNQURGLEVBRWtFLENBQ2hFO0FBQ0E7QUFDQTtBQUNEOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJ4SSxZQUF6QixFQUFnRDtBQUM5QyxTQUFPQSxZQUFZLEdBQUksS0FBSUEsWUFBYSxFQUFyQixHQUF5QixlQUE1QztBQUNEOztJQUVJeUk7O1dBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0dBQUFBLGlCQUFBQTs7QUFlRSxNQUFNQyxtQkFBbUIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE9BQUY7QUFBV0MsRUFBQUE7QUFBWCxDQUFELEtBQW1DO0FBQ3BFLFFBQU1DLFdBQVcsR0FBR2xCLHdEQUFXLENBQUNJLHdFQUFzQixDQUFDYSxTQUFELENBQXZCLENBQS9CO0FBQ0EsUUFBTSxDQUFDRSxlQUFELEVBQWtCQyxrQkFBbEIsSUFBd0M3QiwrQ0FBUSxFQUF0RDtBQUNBLFFBQU07QUFDSjhCLElBQUFBLFlBREk7QUFFSkMsSUFBQUEsT0FGSTtBQUdKQyxJQUFBQSxTQUFTLEVBQUU7QUFBRVgsTUFBQUE7QUFBRixLQUhQO0FBSUp6QyxJQUFBQTtBQUpJLE1BS0YrQix3REFBTyxDQUFVO0FBQ25Cc0IsSUFBQUEsYUFBYSxFQUFFO0FBQUVDLE1BQUFBLFVBQVUsRUFBRXBCLFVBQVUsQ0FBQ0k7QUFBekI7QUFESSxHQUFWLENBTFg7QUFRQSxRQUFNZ0IsVUFBVSxHQUFHdEQsS0FBSyxDQUFDLFlBQUQsQ0FBeEI7O0FBRUEsUUFBTXVELFFBQVEsR0FBRyxPQUFPQyxZQUFQLEVBQThCcEQsSUFBOUIsS0FBZ0Q7QUFDL0Q2QyxJQUFBQSxrQkFBa0IsQ0FBQ1EsU0FBRCxDQUFsQjtBQUNBLFVBQU12SixZQUFZLEdBQUdrRyxJQUFJLENBQUNrRCxVQUFMLEtBQW9CcEIsVUFBVSxDQUFDSyxpQkFBL0IsR0FBbURuQyxJQUFJLENBQUNsRyxZQUF4RCxHQUF1RXVKLFNBQTVGO0FBRUF6QixJQUFBQSxtRUFBaUIsQ0FBQyxZQUFELEVBQWU7QUFDOUIwQixNQUFBQSxNQUFNLEVBQUVGLFlBRHNCO0FBRTlCRixNQUFBQSxVQUFVLEVBQUVsRCxJQUFJLENBQUNrRCxVQUZhO0FBRzlCSyxNQUFBQSxPQUFPLEVBQUVaLFdBQVcsQ0FBQ1ksT0FBWixDQUFvQkM7QUFIQyxLQUFmLENBQWpCOztBQU1BLFFBQUk7QUFBQTs7QUFDRixZQUFNakMsMkVBQTBCLENBQUM7QUFDL0J6SCxRQUFBQSxZQUQrQjtBQUUvQjJKLFFBQUFBLFVBQVUsMkJBQUVkLFdBQVcsQ0FBQ2Usa0JBQWQsMERBQUUsc0JBQWdDQyxNQUFoQyxFQUZtQjtBQUcvQkosUUFBQUEsT0FBTyxFQUFFWixXQUFXLENBQUNZLE9BSFU7QUFJL0JLLFFBQUFBLGFBQWEsRUFBRWpCLFdBQVcsQ0FBQ2lCO0FBSkksT0FBRCxDQUFoQztBQU1ELEtBUEQsQ0FPRSxPQUFPekYsS0FBUCxFQUFjO0FBQ2QsY0FBUUEsS0FBUjtBQUNFLGFBQUtxRCxnRkFBTDtBQUNFcUIsVUFBQUEsa0JBQWtCLENBQUM7QUFBRTFFLFlBQUFBLEtBQUY7QUFBU0gsWUFBQUEsT0FBTyxFQUFFO0FBQWxCLFdBQUQsQ0FBbEI7QUFDQTs7QUFDRixhQUFLd0QsaUZBQUw7QUFDRXFCLFVBQUFBLGtCQUFrQixDQUFDO0FBQUUxRSxZQUFBQSxLQUFGO0FBQVNILFlBQUFBLE9BQU8sRUFBRTtBQUFsQixXQUFELENBQWxCO0FBQ0E7O0FBQ0Y7QUFDRTZFLFVBQUFBLGtCQUFrQixDQUFDO0FBQUUxRSxZQUFBQSxLQUFLLEVBQUVvRSxZQUFZLENBQUN3QixPQUF0QjtBQUErQi9GLFlBQUFBLE9BQU8sRUFBRTtBQUF4QyxXQUFELENBQWxCO0FBUko7O0FBVUE7QUFDRDs7QUFFRCxVQUFNZ0csWUFBWSxHQUFHMUIsZUFBZSxDQUFDeEksWUFBRCxDQUFwQzs7QUFDQSxRQUFJLENBQUNzSixZQUFMLEVBQW1CO0FBQ2pCWCxNQUFBQSxPQUFPO0FBQ1BqSCxNQUFBQSxrRUFBQSxDQUFxQkwsd0VBQUEsQ0FBOEI2SSxZQUE5QixDQUFyQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTUUsVUFBVSxHQUFHLENBQUMsQ0FBQ0MscUJBQU0sQ0FBQ0MsSUFBUCxDQUFZN0ksMkRBQUEsR0FBZ0J5SSxZQUE1QixFQUEwQyxRQUExQyxDQUFyQjs7QUFDQSxRQUFJLENBQUNFLFVBQUwsRUFBaUI7QUFDZnJCLE1BQUFBLGtCQUFrQixDQUFDO0FBQ2pCMUUsUUFBQUEsS0FBSyxFQUFFb0UsWUFBWSxDQUFDK0IsVUFESDtBQUVqQnRHLFFBQUFBLE9BQU8sRUFBRTtBQUZRLE9BQUQsQ0FBbEI7QUFJQTVCLE1BQUFBLG1IQUFzQztBQUN0QztBQUNEOztBQUNEcUcsSUFBQUEsT0FBTztBQUNSLEdBaEREOztBQWtEQTFCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkYSxJQUFBQSxtRUFBaUIsQ0FBQyxVQUFELENBQWpCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLHdEQUFDLDhDQUFEO0FBQU8sU0FBSyxFQUFDLHdCQUFiO0FBQXNDLGFBQVMsRUFBRWEsT0FBakQ7QUFBMEQsVUFBTSxNQUFoRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0Usd0RBQUMscURBQUQ7QUFDRSxlQUFPLEVBQUVNLE9BRFg7QUFFRSxjQUFNLEVBQUU7QUFBQSxjQUFDLEVBQUQ7QUFBQSxjQUFvQndCLEtBQXBCLHNDQUFHQSxLQUFIOztBQUFBLDhCQUNOLHdEQUFDLDhDQUFEO0FBQU8saUJBQUssRUFBQyxrQkFBYjtBQUFnQyx1QkFBVyxFQUFDLGdDQUE1QztBQUFBLG1DQUNFLHdEQUFDLHlEQUFEO0FBQWtCLHFCQUFPLEVBQUV4QztBQUEzQixlQUE2Q3dDLEtBQTdDO0FBQW9ELGdCQUFFLEVBQUM7QUFBdkQ7QUFERixZQURNO0FBQUEsU0FGVjtBQU9FLFlBQUksRUFBQztBQVBQLFFBREYsRUFXR3JCLFVBQVUsS0FBS3BCLFVBQVUsQ0FBQ0ssaUJBQTFCLElBQ0MsQ0FBQyxNQUFNO0FBQ0xDLFFBQUFBLG9DQUFvQyxDQUFDQyxNQUFELENBQXBDO0FBQ0EsNEJBQ0Usd0RBQUMscURBQUQ7QUFDRSxnQkFBTSxFQUFFO0FBQUE7O0FBQUEsZ0JBQUM7QUFBRWtDLGNBQUFBLEtBQUssRUFBRTtBQUFjQyxnQkFBQUE7QUFBZDtBQUFULGFBQUQ7QUFBQSxnQkFBcUNELEtBQXJDLHVDQUFHQSxLQUFIOztBQUFBLGdDQUNOLHdEQUFDLDhDQUFEO0FBQ0UsbUJBQUssRUFBQyxXQURSO0FBRUUseUJBQVcsRUFBQyxzREFGZDtBQUdFLG1CQUFLLDBCQUFFbEMsTUFBTSxDQUFDdkksWUFBVCx5REFBRSxxQkFBcUJrRSxPQUg5QjtBQUlFLHFCQUFPLEVBQUUsQ0FBQyxDQUFDcUUsTUFBTSxDQUFDdkksWUFKcEI7QUFBQSxxQ0FNRSx3REFBQyx1RkFBRCxvQkFDTXlLLEtBRE47QUFFRSx1QkFBTyxFQUFDLHNCQUZWO0FBR0UsOEJBQWMsTUFIaEI7QUFJRSx3QkFBUSxFQUFHRSxDQUFELElBQU9ELFFBQVEsQ0FBQ0MsQ0FBRCxhQUFDQSxDQUFELHVCQUFDQSxDQUFDLENBQUUxSyxHQUFKO0FBSjNCO0FBTkYsY0FETTtBQUFBLFdBRFY7QUFnQkUsaUJBQU8sRUFBRWdKLE9BaEJYO0FBaUJFLGNBQUksRUFBQyxjQWpCUDtBQWtCRSwwQkFBZ0IsTUFsQmxCO0FBbUJFLGVBQUssRUFBRTtBQUFFMkIsWUFBQUEsUUFBUSxFQUFFO0FBQUV6QyxjQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlakUsY0FBQUEsT0FBTyxFQUFFO0FBQXhCO0FBQVo7QUFuQlQsVUFERjtBQXVCRCxPQXpCRCxHQVpKLEVBdUNHNEUsZUFBZSxpQkFDZCx3REFBQyw4Q0FBRDtBQUFPLGdCQUFRLEVBQUMsT0FBaEI7QUFBd0IsYUFBSyxFQUFDLHdCQUE5QjtBQUFBLGtCQUNHQSxlQUFlLENBQUM1RTtBQURuQixRQXhDSixlQTZDRSx5REFBQyx3REFBRDtBQUFBLGdDQUNFLHdEQUFDLCtDQUFEO0FBQVEsY0FBSSxFQUFDLE9BQWI7QUFBcUIsaUJBQU8sRUFBRXlFLE9BQTlCO0FBQXVDLGNBQUksRUFBQyxTQUE1QztBQUFzRCxpQkFBTyxFQUFDLFdBQTlEO0FBQUE7QUFBQSxVQURGLGVBSUUsd0RBQUMsK0NBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFPLEVBQUMsV0FGVjtBQUdFLGlCQUFPLEVBQUVLLFlBQVksQ0FBQ3JFLCtDQUFPLENBQUMwRSxRQUFELEVBQVcsSUFBWCxDQUFSLENBSHZCO0FBSUUsY0FBSSxFQUFDLG1CQUpQO0FBQUE7QUFBQSxVQUpGLGVBWUUsd0RBQUMsK0NBQUQ7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFDLFNBQTlCO0FBQXdDLGlCQUFPLEVBQUVMLFlBQVksQ0FBQ3JFLCtDQUFPLENBQUMwRSxRQUFELEVBQVcsS0FBWCxDQUFSLENBQTdEO0FBQXlGLGNBQUksRUFBQyxNQUE5RjtBQUFBO0FBQUEsVUFaRjtBQUFBLFFBN0NGO0FBQUE7QUFERixJQURGO0FBa0VELENBcklNOzs7Ozs7Ozs7Ozs7OztBQ3JFUDtBQUNBO0FBTU8sSUFBSzNCLG1CQUFaOztXQUFZQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtHQUFBQSx3QkFBQUE7O0FBWVosU0FBU21ELGVBQVQsR0FBeUM7QUFDdkMsUUFBTUMsR0FBRyxHQUFHOUcsb0dBQXdCLEVBQXBDLENBRHVDLENBR3ZDOztBQUNBOEcsRUFBQUEsR0FBRyxDQUFDcEwsU0FBSixDQUFjMkcsTUFBZCxHQUF1QixFQUF2QjtBQUVBLFNBQU95RSxHQUFQO0FBQ0Q7O0FBRU0sZUFBZXJELDBCQUFmLENBQTBDc0QsT0FBMUMsRUFBK0U7QUFBQTs7QUFDcEYsUUFBTUMsU0FBUyxHQUFHQyxZQUFZLENBQUNGLE9BQU8sQ0FBQ3RCLE9BQVQsRUFBa0JzQixPQUFPLENBQUNqQixhQUExQixDQUE5QjtBQUNBLFFBQU1vQixLQUFLLEdBQUc7QUFDWkMsSUFBQUEsT0FBTyxFQUFFSixPQUFPLENBQUN0QixPQURMO0FBRVpuRCxJQUFBQSxJQUFJLEVBQUUwRSxTQUZNO0FBR1pqTCxJQUFBQSxLQUFLLEVBQUUsV0FISztBQUlad0csSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLE1BQUFBLENBQUMsRUFBRSxFQUFqQjtBQUFxQkMsTUFBQUEsQ0FBQyxFQUFFO0FBQXhCLEtBSkc7QUFLWmdELElBQUFBLFVBQVUsRUFBRW9CLE9BQU8sQ0FBQ3BCO0FBTFIsR0FBZDtBQVFBLE1BQUltQixHQUFKOztBQUVBLE1BQUlDLE9BQU8sQ0FBQy9LLFlBQVosRUFBMEI7QUFDeEIsUUFBSTtBQUNGOEssTUFBQUEsR0FBRyxHQUFHLE1BQU10Syx1RkFBQSxDQUE2QnVLLE9BQU8sQ0FBQy9LLFlBQXJDLENBQVo7QUFDRCxLQUZELENBRUUsT0FBT3FMLENBQVAsRUFBVTtBQUNWLFlBQU0zRCxtQkFBbUIsQ0FBQ3FDLGVBQTFCO0FBQ0Q7QUFDRixHQU5ELE1BTU87QUFDTGUsSUFBQUEsR0FBRyxHQUFHRCxlQUFlLEVBQXJCO0FBQ0Q7O0FBRURDLEVBQUFBLEdBQUcsQ0FBQ3BMLFNBQUosQ0FBYzJHLE1BQWQsR0FBdUIsQ0FBQzZFLEtBQUQsRUFBUSw2QkFBSUosR0FBRyxDQUFDcEwsU0FBSixDQUFjMkcsTUFBbEIseUVBQTRCLEVBQTVCLENBQVIsQ0FBdkI7O0FBRUEsTUFBSTtBQUNGUSxJQUFBQSwrR0FBbUMsQ0FBQ2lFLEdBQUQsQ0FBbkM7QUFDRCxHQUZELENBRUUsTUFBTTtBQUNOLFVBQU1wRCxtQkFBbUIsQ0FBQ3NDLGdCQUExQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBTXNCLFNBQVMsR0FBSUMsS0FBRCxJQUFzQixDQUFDQSxLQUFLLENBQUNDLElBQS9DOztBQUNBLE1BQU1DLFFBQVEsR0FBSUMsS0FBRCxJQUFnQ0MsS0FBRCxJQUFzQkEsS0FBSyxDQUFDRCxLQUFOLEtBQWdCQSxLQUF0Rjs7QUFFQSxTQUFTVCxZQUFULENBQXNCeEIsT0FBdEIsRUFBNENLLGFBQTVDLEVBQTZFO0FBQzNFLE9BQUssTUFBTTtBQUFFNEIsSUFBQUE7QUFBRixHQUFYLElBQXdCakMsT0FBTyxDQUFDbUMsTUFBUixDQUFlTixTQUFmLENBQXhCLEVBQW1EO0FBQ2pEO0FBQ0EsVUFBTU8sYUFBYSxHQUFHSixRQUFRLENBQUNDLEtBQUQsQ0FBOUI7O0FBQ0EsUUFBSTVCLGFBQWEsQ0FBQ2dDLFdBQWQsQ0FBMEJDLElBQTFCLENBQStCRixhQUEvQixDQUFKLEVBQW1EO0FBQ2pELGFBQU8sWUFBUDtBQUNEOztBQUNELFFBQUkvQixhQUFhLENBQUNrQyxVQUFkLENBQXlCRCxJQUF6QixDQUE4QkYsYUFBOUIsQ0FBSixFQUFrRDtBQUNoRCxhQUFPLE1BQVA7QUFDRDs7QUFDRCxRQUFJL0IsYUFBYSxDQUFDbUMsZUFBZCxDQUE4QkYsSUFBOUIsQ0FBbUNGLGFBQW5DLENBQUosRUFBdUQ7QUFDckQsYUFBTyxXQUFQO0FBQ0Q7QUFDRixHQWIwRSxDQWUzRTs7O0FBQ0EsU0FBTyxPQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFNTyxNQUFNTSxjQUFjLEdBQUcsQ0FBQztBQUFFdkQsRUFBQUE7QUFBRixDQUFELEtBQTBCO0FBQUE7O0FBQ3RELFFBQU0sQ0FBQ3dELE1BQUQsRUFBU0MsU0FBVCxJQUFzQm5GLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUNBLFFBQU1vRixpQkFBaUIsR0FBR3ZFLHdFQUFzQixDQUFDYSxTQUFELENBQWhEO0FBQ0EsUUFBTTJELHFCQUFxQixHQUFHLENBQUMsa0JBQUM1RSx3REFBVyxDQUFDMkUsaUJBQUQsQ0FBWixpRUFBQyxhQUFnQzdDLE9BQWpDLGlEQUFDLHFCQUF5Q0MsTUFBMUMsQ0FBL0I7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHVEQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFPLEVBQUUsTUFBTTJDLFNBQVMsQ0FBQyxJQUFELENBRjFCO0FBR0Usb0JBQVcsa0JBSGI7QUFJRSxjQUFRLEVBQUUsQ0FBQ0UscUJBSmI7QUFBQTtBQUFBLE1BREYsRUFVR0gsTUFBTSxpQkFBSSx1REFBQyxxRUFBRDtBQUFxQixhQUFPLEVBQUUsTUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBN0M7QUFBc0QsZUFBUyxFQUFFekQ7QUFBakUsTUFWYjtBQUFBLElBREY7QUFjRCxDQW5CTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9hbmFseXRpY3NQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL2luaXREYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZXhwbG9yZS9BZGRUb0Rhc2hib2FyZC9BZGRUb0Rhc2hib2FyZE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9leHBsb3JlL0FkZFRvRGFzaGJvYXJkL2FkZFRvRGFzaGJvYXJkLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2V4cGxvcmUvQWRkVG9EYXNoYm9hcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhc2hib2FyZE1vZGVsIH0gZnJvbSAnLi9EYXNoYm9hcmRNb2RlbCc7XG5pbXBvcnQgeyByZXBvcnRNZXRhQW5hbHl0aWNzLCBNZXRhQW5hbHl0aWNzRXZlbnROYW1lLCBEYXNoYm9hcmRWaWV3RXZlbnRQYXlsb2FkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0RGFzaGJvYXJkVmlld0V2ZW50KGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWwpIHtcbiAgY29uc3QgZXZlbnREYXRhOiBEYXNoYm9hcmRWaWV3RXZlbnRQYXlsb2FkID0ge1xuICAgIGRhc2hib2FyZElkOiBkYXNoYm9hcmQuaWQsXG4gICAgZGFzaGJvYXJkTmFtZTogZGFzaGJvYXJkLnRpdGxlLFxuICAgIGRhc2hib2FyZFVpZDogZGFzaGJvYXJkLnVpZCxcbiAgICBmb2xkZXJOYW1lOiBkYXNoYm9hcmQubWV0YS5mb2xkZXJUaXRsZSxcbiAgICBldmVudE5hbWU6IE1ldGFBbmFseXRpY3NFdmVudE5hbWUuRGFzaGJvYXJkVmlldyxcbiAgfTtcblxuICByZXBvcnRNZXRhQW5hbHl0aWNzKGV2ZW50RGF0YSk7XG59XG4iLCIvLyBTZXJ2aWNlcyAmIFV0aWxzXG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRTcnYsIGdldERhc2hib2FyZFNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvRGFzaGJvYXJkU3J2JztcbmltcG9ydCB7IGRhc2hib2FyZExvYWRlclNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvRGFzaGJvYXJkTG9hZGVyU3J2JztcbmltcG9ydCB7IGdldFRpbWVTcnYsIFRpbWVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL1RpbWVTcnYnO1xuaW1wb3J0IHsga2V5YmluZGluZ1NydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2tleWJpbmRpbmdTcnYnO1xuLy8gQWN0aW9uc1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBkYXNoYm9hcmRJbml0Q29tcGxldGVkLCBkYXNoYm9hcmRJbml0RmFpbGVkLCBkYXNoYm9hcmRJbml0RmV0Y2hpbmcsIGRhc2hib2FyZEluaXRTZXJ2aWNlcyB9IGZyb20gJy4vcmVkdWNlcnMnO1xuLy8gVHlwZXNcbmltcG9ydCB7IERhc2hib2FyZERUTywgRGFzaGJvYXJkSW5pdFBoYXNlLCBEYXNoYm9hcmRSb3V0ZXMsIFN0b3JlU3RhdGUsIFRodW5rRGlzcGF0Y2gsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVsIH0gZnJvbSAnLi9EYXNoYm9hcmRNb2RlbCc7XG5pbXBvcnQgeyBsb2NhdGlvblV0aWwsIHNldFdlZWtTdGFydCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgaW5pdFZhcmlhYmxlc1RyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdmFyaWFibGVzL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZW1pdERhc2hib2FyZFZpZXdFdmVudCB9IGZyb20gJy4vYW5hbHl0aWNzUHJvY2Vzc29yJztcbmltcG9ydCB7IGRhc2hib2FyZFdhdGNoZXIgfSBmcm9tICdhcHAvZmVhdHVyZXMvbGl2ZS9kYXNoYm9hcmQvZGFzaGJvYXJkV2F0Y2hlcic7XG5pbXBvcnQgeyBjb25maWcsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgY3JlYXRlRGFzaGJvYXJkUXVlcnlSdW5uZXIgfSBmcm9tICcuLi8uLi9xdWVyeS9zdGF0ZS9EYXNoYm9hcmRRdWVyeVJ1bm5lci9EYXNoYm9hcmRRdWVyeVJ1bm5lcic7XG5pbXBvcnQgeyBnZXRJZkV4aXN0c0xhc3RLZXkgfSBmcm9tICcuLi8uLi92YXJpYWJsZXMvc3RhdGUvc2VsZWN0b3JzJztcbmltcG9ydCB7IHRvU3RhdGVLZXkgfSBmcm9tICdhcHAvZmVhdHVyZXMvdmFyaWFibGVzL3V0aWxzJztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdERhc2hib2FyZEFyZ3Mge1xuICB1cmxVaWQ/OiBzdHJpbmc7XG4gIHVybFNsdWc/OiBzdHJpbmc7XG4gIHVybFR5cGU/OiBzdHJpbmc7XG4gIHVybEZvbGRlcklkPzogc3RyaW5nIHwgbnVsbDtcbiAgcm91dGVOYW1lPzogc3RyaW5nO1xuICBmaXhVcmw6IGJvb2xlYW47XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGFzaGJvYXJkKFxuICBhcmdzOiBJbml0RGFzaGJvYXJkQXJncyxcbiAgZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2gsXG4gIGdldFN0YXRlOiAoKSA9PiBTdG9yZVN0YXRlXG4pOiBQcm9taXNlPERhc2hib2FyZERUTyB8IG51bGw+IHtcbiAgLy8gV2hlbiBjcmVhdGluZyBuZXcgb3IgYWRkaW5nIHBhbmVscyB0byBhIGRhc2hib2FyZCBmcm9tIGV4cGxvcmUgd2UgbG9hZCBpdCBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgbW9kZWwgPSBzdG9yZS5nZXRPYmplY3Q8RGFzaGJvYXJkRFRPPihEQVNIQk9BUkRfRlJPTV9MU19LRVkpO1xuICBpZiAobW9kZWwpIHtcbiAgICByZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgc3dpdGNoIChhcmdzLnJvdXRlTmFtZSkge1xuICAgICAgY2FzZSBEYXNoYm9hcmRSb3V0ZXMuSG9tZToge1xuICAgICAgICAvLyBsb2FkIGhvbWUgZGFzaFxuICAgICAgICBjb25zdCBkYXNoRFRPOiBEYXNoYm9hcmREVE8gPSBhd2FpdCBiYWNrZW5kU3J2LmdldCgnL2FwaS9kYXNoYm9hcmRzL2hvbWUnKTtcblxuICAgICAgICAvLyBpZiB1c2VyIHNwZWNpZmllZCBhIGN1c3RvbSBob21lIGRhc2hib2FyZCByZWRpcmVjdCB0byB0aGF0XG4gICAgICAgIGlmIChkYXNoRFRPLnJlZGlyZWN0VXJpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VXJsID0gbG9jYXRpb25VdGlsLnN0cmlwQmFzZUZyb21VcmwoZGFzaERUTy5yZWRpcmVjdFVyaSk7XG4gICAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnJlcGxhY2UobmV3VXJsKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRpc2FibGUgc29tZSBhY3Rpb25zIG9uIHRoZSBkZWZhdWx0IGhvbWUgZGFzaGJvYXJkXG4gICAgICAgIGRhc2hEVE8ubWV0YS5jYW5TYXZlID0gZmFsc2U7XG4gICAgICAgIGRhc2hEVE8ubWV0YS5jYW5TaGFyZSA9IGZhbHNlO1xuICAgICAgICBkYXNoRFRPLm1ldGEuY2FuU3RhciA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZGFzaERUTztcbiAgICAgIH1cbiAgICAgIGNhc2UgRGFzaGJvYXJkUm91dGVzLk5vcm1hbDoge1xuICAgICAgICBjb25zdCBkYXNoRFRPOiBEYXNoYm9hcmREVE8gPSBhd2FpdCBkYXNoYm9hcmRMb2FkZXJTcnYubG9hZERhc2hib2FyZChhcmdzLnVybFR5cGUsIGFyZ3MudXJsU2x1ZywgYXJncy51cmxVaWQpO1xuXG4gICAgICAgIGlmIChhcmdzLmZpeFVybCAmJiBkYXNoRFRPLm1ldGEudXJsKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgdXJsIGlzIGNvcnJlY3QgKG1pZ2h0IGJlIG9sZCBzbHVnKVxuICAgICAgICAgIGNvbnN0IGRhc2hib2FyZFVybCA9IGxvY2F0aW9uVXRpbC5zdHJpcEJhc2VGcm9tVXJsKGRhc2hEVE8ubWV0YS51cmwpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWU7XG5cbiAgICAgICAgICBpZiAoZGFzaGJvYXJkVXJsICE9PSBjdXJyZW50UGF0aCkge1xuICAgICAgICAgICAgLy8gU3ByZWFkIGN1cnJlbnQgbG9jYXRpb24gdG8gcGVyc2lzdCBzZWFyY2ggcGFyYW1zIHVzZWQgZm9yIG5hdmlnYXRpb25cbiAgICAgICAgICAgIGxvY2F0aW9uU2VydmljZS5yZXBsYWNlKHtcbiAgICAgICAgICAgICAgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBkYXNoYm9hcmRVcmwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgY29ycmVjdCB1cmwgY29ycmVjdGluZycsIGRhc2hib2FyZFVybCwgY3VycmVudFBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGFzaERUTztcbiAgICAgIH1cbiAgICAgIGNhc2UgRGFzaGJvYXJkUm91dGVzLk5ldzoge1xuICAgICAgICByZXR1cm4gZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhKGFyZ3MudXJsRm9sZGVySWQpO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiAnVW5rbm93biByb3V0ZSAnICsgYXJncy5yb3V0ZU5hbWUgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElnbm9yZSBjYW5jZWxsZWQgZXJyb3JzXG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRGYWlsZWQoeyBtZXNzYWdlOiAnRmFpbGVkIHRvIGZldGNoIGRhc2hib2FyZCcsIGVycm9yOiBlcnIgfSkpO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgYWN0aW9uIChvciBzYWdhKSBkb2VzIGV2ZXJ5dGhpbmcgbmVlZGVkIHRvIGJvb3RzdHJhcCBhIGRhc2hib2FyZCAmIGRhc2hib2FyZCBtb2RlbC5cbiAqIEZpcnN0IGl0IGhhbmRsZXMgdGhlIHByb2Nlc3Mgb2YgZmV0Y2hpbmcgdGhlIGRhc2hib2FyZCwgY29ycmVjdGluZyB0aGUgdXJsIGlmIHJlcXVpcmVkIChjYXVzaW5nIHJlZGlyZWN0cy91cmwgdXBkYXRlcylcbiAqXG4gKiBUaGlzIGlzIHVzZWQgYm90aCBmb3Igc2luZ2xlIGRhc2hib2FyZCAmIHNvbG8gcGFuZWwgcm91dGVzLCBob21lICYgbmV3IGRhc2hib2FyZCByb3V0ZXMuXG4gKlxuICogVGhlbiBpdCBoYW5kbGVzIHRoZSBpbml0aWFsaXppbmcgb2YgdGhlIG9sZCBhbmd1bGFyIHNlcnZpY2VzIHRoYXQgdGhlIGRhc2hib2FyZCBjb21wb25lbnRzICYgcGFuZWxzIHN0aWxsIGRlcGVuZCBvblxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXNoYm9hcmQoYXJnczogSW5pdERhc2hib2FyZEFyZ3MpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgLy8gc2V0IGZldGNoaW5nIHN0YXRlXG4gICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdEZldGNoaW5nKCkpO1xuXG4gICAgLy8gZmV0Y2ggZGFzaGJvYXJkIGRhdGFcbiAgICBjb25zdCBkYXNoRFRPID0gYXdhaXQgZmV0Y2hEYXNoYm9hcmQoYXJncywgZGlzcGF0Y2gsIGdldFN0YXRlKTtcblxuICAgIC8vIHJldHVybnMgbnVsbCBpZiB0aGVyZSB3YXMgYSByZWRpcmVjdCBvciBlcnJvclxuICAgIGlmICghZGFzaERUTykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCBpbml0aWFsaXppbmcgc3RhdGVcbiAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0U2VydmljZXMoKSk7XG5cbiAgICAvLyBjcmVhdGUgbW9kZWxcbiAgICBsZXQgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgICB0cnkge1xuICAgICAgZGFzaGJvYXJkID0gbmV3IERhc2hib2FyZE1vZGVsKGRhc2hEVE8uZGFzaGJvYXJkLCBkYXNoRFRPLm1ldGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdEZhaWxlZCh7IG1lc3NhZ2U6ICdGYWlsZWQgY3JlYXRlIGRhc2hib2FyZCBtb2RlbCcsIGVycm9yOiBlcnIgfSkpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkZCBtaXNzaW5nIG9yZ0lkIHF1ZXJ5IHBhcmFtXG4gICAgY29uc3Qgc3RvcmVTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBsb2NhdGlvblNlcnZpY2UuZ2V0U2VhcmNoT2JqZWN0KCk7XG5cbiAgICBpZiAoIXF1ZXJ5UGFyYW1zLm9yZ0lkKSB7XG4gICAgICAvLyBUT0RPIHRoaXMgaXMgY3VycmVudGx5IG5vdCBwb3NzaWJsZSB3aXRoIHRoZSBMb2NhdGlvblNlcnZpY2UgQVBJXG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7IG9yZ0lkOiBzdG9yZVN0YXRlLnVzZXIub3JnSWQgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gaW5pdCBzZXJ2aWNlc1xuICAgIGNvbnN0IHRpbWVTcnY6IFRpbWVTcnYgPSBnZXRUaW1lU3J2KCk7XG4gICAgY29uc3QgZGFzaGJvYXJkU3J2OiBEYXNoYm9hcmRTcnYgPSBnZXREYXNoYm9hcmRTcnYoKTtcblxuICAgIC8vIGxlZ2FjeSBzcnYgc3RhdGUsIHdlIG5lZWQgdGhpcyB2YWx1ZSB1cGRhdGVkIGZvciBidWlsdC1pbiBhbm5vdGF0aW9uc1xuICAgIGRhc2hib2FyZFNydi5zZXRDdXJyZW50KGRhc2hib2FyZCk7XG5cbiAgICB0aW1lU3J2LmluaXQoZGFzaGJvYXJkKTtcblxuICAgIGNvbnN0IGRhc2hib2FyZFVpZCA9IHRvU3RhdGVLZXkoYXJncy51cmxVaWQgPz8gZGFzaGJvYXJkLnVpZCk7XG4gICAgLy8gdGVtcGxhdGUgdmFsdWVzIHNlcnZpY2UgbmVlZHMgdG8gaW5pdGlhbGl6ZSBjb21wbGV0ZWx5IGJlZm9yZSB0aGUgcmVzdCBvZiB0aGUgZGFzaGJvYXJkIGNhbiBsb2FkXG4gICAgYXdhaXQgZGlzcGF0Y2goaW5pdFZhcmlhYmxlc1RyYW5zYWN0aW9uKGRhc2hib2FyZFVpZCwgZGFzaGJvYXJkKSk7XG5cbiAgICAvLyBEYXNoYm9hcmRRdWVyeVJ1bm5lciBuZWVkcyB0byBydW4gYWZ0ZXIgYWxsIHZhcmlhYmxlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgc28gdGhhdCBhbnkgYW5ub3RhdGlvbiBxdWVyeSBpbmNsdWRpbmcgYSB2YXJpYWJsZVxuICAgIC8vIHdpbGwgYmUgY29ycmVjdGx5IHJlc29sdmVkXG4gICAgY29uc3QgcnVubmVyID0gY3JlYXRlRGFzaGJvYXJkUXVlcnlSdW5uZXIoeyBkYXNoYm9hcmQsIHRpbWVTcnYgfSk7XG4gICAgcnVubmVyLnJ1bih7IGRhc2hib2FyZCwgcmFuZ2U6IHRpbWVTcnYudGltZVJhbmdlKCkgfSk7XG5cbiAgICBpZiAoZ2V0SWZFeGlzdHNMYXN0S2V5KGdldFN0YXRlKCkpICE9PSBkYXNoYm9hcmRVaWQpIHtcbiAgICAgIC8vIGlmIGEgcHJldmlvdXMgZGFzaGJvYXJkIGhhcyBzbG93IHJ1bm5pbmcgdmFyaWFibGUgcXVlcmllcyB0aGUgYmF0Y2ggdWlkIHdpbGwgYmUgdGhlIG5ldyBvbmVcbiAgICAgIC8vIGJ1dCB0aGUgYXJncy51cmxVaWQgd2lsbCBiZSB0aGUgc2FtZSBhcyBiZWZvcmUgaW5pdFZhcmlhYmxlc1RyYW5zYWN0aW9uIHdhcyBjYWxsZWQgc28gdGhlbiB3ZSBjYW4ndCBjb250aW51ZSBpbml0aWFsaXppbmdcbiAgICAgIC8vIHRoZSBwcmV2aW91cyBkYXNoYm9hcmQuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgZGFzaGJvYXJkIGlzIGluIGEgZGlmZmVyZW50IGluaXQgcGhhc2UgaXQgbWVhbnMgaXQgY2FuY2VsbGVkIGR1cmluZyBzZXJ2aWNlIGluaXRcbiAgICBpZiAoZ2V0U3RhdGUoKS5kYXNoYm9hcmQuaW5pdFBoYXNlICE9PSBEYXNoYm9hcmRJbml0UGhhc2UuU2VydmljZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZGFzaGJvYXJkLnByb2Nlc3NSZXBlYXRzKCk7XG5cbiAgICAgIC8vIGhhbmRsZSBhdXRvIGZpeCBleHBlcmltZW50YWwgZmVhdHVyZVxuICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmF1dG9maXRwYW5lbHMpIHtcbiAgICAgICAgZGFzaGJvYXJkLmF1dG9GaXRQYW5lbHMod2luZG93LmlubmVySGVpZ2h0LCBxdWVyeVBhcmFtcy5raW9zayk7XG4gICAgICB9XG5cbiAgICAgIGtleWJpbmRpbmdTcnYuc2V0dXBEYXNoYm9hcmRCaW5kaW5ncyhkYXNoYm9hcmQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdEYXNoYm9hcmQgaW5pdCBmYWlsZWQnLCBlcnIpKSk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuXG4gICAgLy8gc2VuZCBvcGVuIGRhc2hib2FyZCBldmVudFxuICAgIGlmIChhcmdzLnJvdXRlTmFtZSAhPT0gRGFzaGJvYXJkUm91dGVzLk5ldykge1xuICAgICAgZW1pdERhc2hib2FyZFZpZXdFdmVudChkYXNoYm9hcmQpO1xuXG4gICAgICAvLyBMaXN0ZW4gZm9yIGNoYW5nZXMgb24gdGhlIGN1cnJlbnQgZGFzaGJvYXJkXG4gICAgICBkYXNoYm9hcmRXYXRjaGVyLndhdGNoKGRhc2hib2FyZC51aWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXNoYm9hcmRXYXRjaGVyLmxlYXZlKCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHdlZWsgc3RhcnRcbiAgICBpZiAoZGFzaGJvYXJkLndlZWtTdGFydCAhPT0gJycpIHtcbiAgICAgIHNldFdlZWtTdGFydChkYXNoYm9hcmQud2Vla1N0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0V2Vla1N0YXJ0KGNvbmZpZy5ib290RGF0YS51c2VyLndlZWtTdGFydCk7XG4gICAgfVxuXG4gICAgLy8geWF5IHdlIGFyZSBkb25lXG4gICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdENvbXBsZXRlZChkYXNoYm9hcmQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld0Rhc2hib2FyZE1vZGVsRGF0YSh1cmxGb2xkZXJJZD86IHN0cmluZyB8IG51bGwpOiBhbnkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIG1ldGE6IHtcbiAgICAgIGNhblN0YXI6IGZhbHNlLFxuICAgICAgY2FuU2hhcmU6IGZhbHNlLFxuICAgICAgaXNOZXc6IHRydWUsXG4gICAgICBmb2xkZXJJZDogMCxcbiAgICB9LFxuICAgIGRhc2hib2FyZDoge1xuICAgICAgdGl0bGU6ICdOZXcgZGFzaGJvYXJkJyxcbiAgICAgIHBhbmVsczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2FkZC1wYW5lbCcsXG4gICAgICAgICAgZ3JpZFBvczogeyB4OiAwLCB5OiAwLCB3OiAxMiwgaDogOSB9LFxuICAgICAgICAgIHRpdGxlOiAnUGFuZWwgVGl0bGUnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xuXG4gIGlmICh1cmxGb2xkZXJJZCkge1xuICAgIGRhdGEubWV0YS5mb2xkZXJJZCA9IHBhcnNlSW50KHVybEZvbGRlcklkLCAxMCk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuY29uc3QgREFTSEJPQVJEX0ZST01fTFNfS0VZID0gJ0RBU0hCT0FSRF9GUk9NX0xTX0tFWSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZShtb2RlbDogRGFzaGJvYXJkRFRPKSB7XG4gIHN0b3JlLnNldE9iamVjdChEQVNIQk9BUkRfRlJPTV9MU19LRVksIG1vZGVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlKCkge1xuICBzdG9yZS5kZWxldGUoREFTSEJPQVJEX0ZST01fTFNfS0VZKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgRmllbGQsIElucHV0Q29udHJvbCwgTW9kYWwsIFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBsb2NhdGlvblV0aWwsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2V0RGFzaGJvYXJkSW5Mb2NhbFN0b3JhZ2UsIEFkZFRvRGFzaGJvYXJkRXJyb3IgfSBmcm9tICcuL2FkZFRvRGFzaGJvYXJkJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRXhwbG9yZUlkIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IERhc2hib2FyZFBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L0Rhc2hib2FyZFBpY2tlcic7XG5pbXBvcnQgeyBEZWVwTWFwLCBGaWVsZEVycm9yLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IGNvbmZpZywgbG9jYXRpb25TZXJ2aWNlLCByZXBvcnRJbnRlcmFjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvciB9IGZyb20gJy4uL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBwYXJ0aWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHJlbW92ZURhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9pbml0RGFzaGJvYXJkJztcblxuZW51bSBTYXZlVGFyZ2V0IHtcbiAgTmV3RGFzaGJvYXJkID0gJ25ldy1kYXNoYm9hcmQnLFxuICBFeGlzdGluZ0Rhc2hib2FyZCA9ICdleGlzdGluZy1kYXNoYm9hcmQnLFxufVxuXG5jb25zdCBTQVZFX1RBUkdFVFM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxTYXZlVGFyZ2V0Pj4gPSBbXG4gIHtcbiAgICBsYWJlbDogJ05ldyBkYXNoYm9hcmQnLFxuICAgIHZhbHVlOiBTYXZlVGFyZ2V0Lk5ld0Rhc2hib2FyZCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnRXhpc3RpbmcgZGFzaGJvYXJkJyxcbiAgICB2YWx1ZTogU2F2ZVRhcmdldC5FeGlzdGluZ0Rhc2hib2FyZCxcbiAgfSxcbl07XG5cbmludGVyZmFjZSBTYXZlVGFyZ2V0RFRPIHtcbiAgc2F2ZVRhcmdldDogU2F2ZVRhcmdldDtcbn1cbmludGVyZmFjZSBTYXZlVG9OZXdEYXNoYm9hcmREVE8gZXh0ZW5kcyBTYXZlVGFyZ2V0RFRPIHtcbiAgc2F2ZVRhcmdldDogU2F2ZVRhcmdldC5OZXdEYXNoYm9hcmQ7XG59XG5cbmludGVyZmFjZSBTYXZlVG9FeGlzdGluZ0Rhc2hib2FyZCBleHRlbmRzIFNhdmVUYXJnZXREVE8ge1xuICBzYXZlVGFyZ2V0OiBTYXZlVGFyZ2V0LkV4aXN0aW5nRGFzaGJvYXJkO1xuICBkYXNoYm9hcmRVaWQ6IHN0cmluZztcbn1cblxudHlwZSBGb3JtRFRPID0gU2F2ZVRvTmV3RGFzaGJvYXJkRFRPIHwgU2F2ZVRvRXhpc3RpbmdEYXNoYm9hcmQ7XG5cbmZ1bmN0aW9uIGFzc2VydElzU2F2ZVRvRXhpc3RpbmdEYXNoYm9hcmRFcnJvcihcbiAgZXJyb3JzOiBEZWVwTWFwPEZvcm1EVE8sIEZpZWxkRXJyb3I+XG4pOiBhc3NlcnRzIGVycm9ycyBpcyBEZWVwTWFwPFNhdmVUb0V4aXN0aW5nRGFzaGJvYXJkLCBGaWVsZEVycm9yPiB7XG4gIC8vIHRoZSBzaGFwZSBvZiB0aGUgZXJyb3JzIG9iamVjdCBpcyBhbHdheXMgY29tcGF0aWJsZSB3aXRoIHRoZSB0eXBlIGFib3ZlLCBidXQgd2UgbmVlZCB0b1xuICAvLyBleHBsaWNpdGx5IGFzc2VydCBpdHMgdHlwZSBzbyB0aGF0IFRTIGNhbiBuYXJyb3cgZG93biBGb3JtRFRPIHRvIFNhdmVUb0V4aXN0aW5nRGFzaGJvYXJkXG4gIC8vIHdoZW4gd2UgdXNlIGl0IGluIHRoZSBmb3JtLlxufVxuXG5mdW5jdGlvbiBnZXREYXNoYm9hcmRVUkwoZGFzaGJvYXJkVWlkPzogc3RyaW5nKSB7XG4gIHJldHVybiBkYXNoYm9hcmRVaWQgPyBgZC8ke2Rhc2hib2FyZFVpZH1gIDogJ2Rhc2hib2FyZC9uZXcnO1xufVxuXG5lbnVtIEdlbmVyaWNFcnJvciB7XG4gIFVOS05PV04gPSAndW5rbm93bi1lcnJvcicsXG4gIE5BVklHQVRJT04gPSAnbmF2aWdhdGlvbi1lcnJvcicsXG59XG5cbmludGVyZmFjZSBTdWJtaXNzaW9uRXJyb3Ige1xuICBlcnJvcjogQWRkVG9EYXNoYm9hcmRFcnJvciB8IEdlbmVyaWNFcnJvcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBleHBsb3JlSWQ6IEV4cGxvcmVJZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFkZFRvRGFzaGJvYXJkTW9kYWwgPSAoeyBvbkNsb3NlLCBleHBsb3JlSWQgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgZXhwbG9yZUl0ZW0gPSB1c2VTZWxlY3RvcihnZXRFeHBsb3JlSXRlbVNlbGVjdG9yKGV4cGxvcmVJZCkpITtcbiAgY29uc3QgW3N1Ym1pc3Npb25FcnJvciwgc2V0U3VibWlzc2lvbkVycm9yXSA9IHVzZVN0YXRlPFN1Ym1pc3Npb25FcnJvciB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3Qge1xuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBjb250cm9sLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgICB3YXRjaCxcbiAgfSA9IHVzZUZvcm08Rm9ybURUTz4oe1xuICAgIGRlZmF1bHRWYWx1ZXM6IHsgc2F2ZVRhcmdldDogU2F2ZVRhcmdldC5OZXdEYXNoYm9hcmQgfSxcbiAgfSk7XG4gIGNvbnN0IHNhdmVUYXJnZXQgPSB3YXRjaCgnc2F2ZVRhcmdldCcpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKG9wZW5Jbk5ld1RhYjogYm9vbGVhbiwgZGF0YTogRm9ybURUTykgPT4ge1xuICAgIHNldFN1Ym1pc3Npb25FcnJvcih1bmRlZmluZWQpO1xuICAgIGNvbnN0IGRhc2hib2FyZFVpZCA9IGRhdGEuc2F2ZVRhcmdldCA9PT0gU2F2ZVRhcmdldC5FeGlzdGluZ0Rhc2hib2FyZCA/IGRhdGEuZGFzaGJvYXJkVWlkIDogdW5kZWZpbmVkO1xuXG4gICAgcmVwb3J0SW50ZXJhY3Rpb24oJ2UyZF9zdWJtaXQnLCB7XG4gICAgICBuZXdUYWI6IG9wZW5Jbk5ld1RhYixcbiAgICAgIHNhdmVUYXJnZXQ6IGRhdGEuc2F2ZVRhcmdldCxcbiAgICAgIHF1ZXJpZXM6IGV4cGxvcmVJdGVtLnF1ZXJpZXMubGVuZ3RoLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNldERhc2hib2FyZEluTG9jYWxTdG9yYWdlKHtcbiAgICAgICAgZGFzaGJvYXJkVWlkLFxuICAgICAgICBkYXRhc291cmNlOiBleHBsb3JlSXRlbS5kYXRhc291cmNlSW5zdGFuY2U/LmdldFJlZigpLFxuICAgICAgICBxdWVyaWVzOiBleHBsb3JlSXRlbS5xdWVyaWVzLFxuICAgICAgICBxdWVyeVJlc3BvbnNlOiBleHBsb3JlSXRlbS5xdWVyeVJlc3BvbnNlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY2FzZSBBZGRUb0Rhc2hib2FyZEVycm9yLkZFVENIX0RBU0hCT0FSRDpcbiAgICAgICAgICBzZXRTdWJtaXNzaW9uRXJyb3IoeyBlcnJvciwgbWVzc2FnZTogJ0NvdWxkIG5vdCBmZXRjaCBkYXNoYm9hcmQgaW5mb3JtYXRpb24uIFBsZWFzZSB0cnkgYWdhaW4uJyB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBZGRUb0Rhc2hib2FyZEVycm9yLlNFVF9EQVNIQk9BUkRfTFM6XG4gICAgICAgICAgc2V0U3VibWlzc2lvbkVycm9yKHsgZXJyb3IsIG1lc3NhZ2U6ICdDb3VsZCBub3QgYWRkIHBhbmVsIHRvIGRhc2hib2FyZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHNldFN1Ym1pc3Npb25FcnJvcih7IGVycm9yOiBHZW5lcmljRXJyb3IuVU5LTk9XTiwgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGFzaGJvYXJkVVJMID0gZ2V0RGFzaGJvYXJkVVJMKGRhc2hib2FyZFVpZCk7XG4gICAgaWYgKCFvcGVuSW5OZXdUYWIpIHtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKGxvY2F0aW9uVXRpbC5zdHJpcEJhc2VGcm9tVXJsKGRhc2hib2FyZFVSTCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpZFRhYk9wZW4gPSAhIWdsb2JhbC5vcGVuKGNvbmZpZy5hcHBVcmwgKyBkYXNoYm9hcmRVUkwsICdfYmxhbmsnKTtcbiAgICBpZiAoIWRpZFRhYk9wZW4pIHtcbiAgICAgIHNldFN1Ym1pc3Npb25FcnJvcih7XG4gICAgICAgIGVycm9yOiBHZW5lcmljRXJyb3IuTkFWSUdBVElPTixcbiAgICAgICAgbWVzc2FnZTogJ0NvdWxkIG5vdCBuYXZpZ2F0ZSB0byB0aGUgc2VsZWN0ZWQgZGFzaGJvYXJkLiBQbGVhc2UgdHJ5IGFnYWluLicsXG4gICAgICB9KTtcbiAgICAgIHJlbW92ZURhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlcG9ydEludGVyYWN0aW9uKCdlMmRfb3BlbicpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdGl0bGU9XCJBZGQgcGFuZWwgdG8gZGFzaGJvYXJkXCIgb25EaXNtaXNzPXtvbkNsb3NlfSBpc09wZW4+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiVGFyZ2V0IGRhc2hib2FyZFwiIGRlc2NyaXB0aW9uPVwiQ2hvb3NlIHdoZXJlIHRvIGFkZCB0aGUgcGFuZWwuXCI+XG4gICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwIG9wdGlvbnM9e1NBVkVfVEFSR0VUU30gey4uLmZpZWxkfSBpZD1cImUyZC1zYXZlLXRhcmdldFwiIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInNhdmVUYXJnZXRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIHtzYXZlVGFyZ2V0ID09PSBTYXZlVGFyZ2V0LkV4aXN0aW5nRGFzaGJvYXJkICYmXG4gICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydElzU2F2ZVRvRXhpc3RpbmdEYXNoYm9hcmRFcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCB2YWx1ZSwgb25DaGFuZ2UsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTZWxlY3QgaW4gd2hpY2ggZGFzaGJvYXJkIHRoZSBwYW5lbCB3aWxsIGJlIGNyZWF0ZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5kYXNoYm9hcmRVaWQ/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmRhc2hib2FyZFVpZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZFBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dElkPVwiZTJkLWRhc2hib2FyZC1waWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkKSA9PiBvbkNoYW5nZShkPy51aWQpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgbmFtZT1cImRhc2hib2FyZFVpZFwiXG4gICAgICAgICAgICAgICAgc2hvdWxkVW5yZWdpc3RlclxuICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nIH0gfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSkoKX1cblxuICAgICAgICB7c3VibWlzc2lvbkVycm9yICYmIChcbiAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPVwiRXJyb3IgYWRkaW5nIHRoZSBwYW5lbFwiPlxuICAgICAgICAgICAge3N1Ym1pc3Npb25FcnJvci5tZXNzYWdlfVxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICl9XG5cbiAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIG9uQ2xpY2s9e29uQ2xvc2V9IGZpbGw9XCJvdXRsaW5lXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChwYXJ0aWFsKG9uU3VibWl0LCB0cnVlKSl9XG4gICAgICAgICAgICBpY29uPVwiZXh0ZXJuYWwtbGluay1hbHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIE9wZW4gaW4gbmV3IHRhYlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0KHBhcnRpYWwob25TdWJtaXQsIGZhbHNlKSl9IGljb249XCJhcHBzXCI+XG4gICAgICAgICAgICBPcGVuIGRhc2hib2FyZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiIsImltcG9ydCB7IERhdGFGcmFtZSwgRGF0YVF1ZXJ5LCBEYXRhU291cmNlUmVmIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHtcbiAgZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhLFxuICBzZXREYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9pbml0RGFzaGJvYXJkJztcbmltcG9ydCB7IERhc2hib2FyZERUTywgRXhwbG9yZVBhbmVsRGF0YSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBlbnVtIEFkZFRvRGFzaGJvYXJkRXJyb3Ige1xuICBGRVRDSF9EQVNIQk9BUkQgPSAnZmV0Y2gtZGFzaGJvYXJkJyxcbiAgU0VUX0RBU0hCT0FSRF9MUyA9ICdzZXQtZGFzaGJvYXJkLWxzLWVycm9yJyxcbn1cblxuaW50ZXJmYWNlIEFkZFBhbmVsVG9EYXNoYm9hcmRPcHRpb25zIHtcbiAgcXVlcmllczogRGF0YVF1ZXJ5W107XG4gIHF1ZXJ5UmVzcG9uc2U6IEV4cGxvcmVQYW5lbERhdGE7XG4gIGRhdGFzb3VyY2U/OiBEYXRhU291cmNlUmVmO1xuICBkYXNoYm9hcmRVaWQ/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhc2hib2FyZCgpOiBEYXNoYm9hcmREVE8ge1xuICBjb25zdCBkdG8gPSBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEoKTtcblxuICAvLyBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEgYWRkcyBieSBkZWZhdWx0IHRoZSBcImFkZC1wYW5lbFwiIHBhbmVsLiBXZSBkb24ndCB3YW50IHRoYXQuXG4gIGR0by5kYXNoYm9hcmQucGFuZWxzID0gW107XG5cbiAgcmV0dXJuIGR0bztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldERhc2hib2FyZEluTG9jYWxTdG9yYWdlKG9wdGlvbnM6IEFkZFBhbmVsVG9EYXNoYm9hcmRPcHRpb25zKSB7XG4gIGNvbnN0IHBhbmVsVHlwZSA9IGdldFBhbmVsVHlwZShvcHRpb25zLnF1ZXJpZXMsIG9wdGlvbnMucXVlcnlSZXNwb25zZSk7XG4gIGNvbnN0IHBhbmVsID0ge1xuICAgIHRhcmdldHM6IG9wdGlvbnMucXVlcmllcyxcbiAgICB0eXBlOiBwYW5lbFR5cGUsXG4gICAgdGl0bGU6ICdOZXcgUGFuZWwnLFxuICAgIGdyaWRQb3M6IHsgeDogMCwgeTogMCwgdzogMTIsIGg6IDggfSxcbiAgICBkYXRhc291cmNlOiBvcHRpb25zLmRhdGFzb3VyY2UsXG4gIH07XG5cbiAgbGV0IGR0bzogRGFzaGJvYXJkRFRPO1xuXG4gIGlmIChvcHRpb25zLmRhc2hib2FyZFVpZCkge1xuICAgIHRyeSB7XG4gICAgICBkdG8gPSBhd2FpdCBiYWNrZW5kU3J2LmdldERhc2hib2FyZEJ5VWlkKG9wdGlvbnMuZGFzaGJvYXJkVWlkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBBZGRUb0Rhc2hib2FyZEVycm9yLkZFVENIX0RBU0hCT0FSRDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZHRvID0gY3JlYXRlRGFzaGJvYXJkKCk7XG4gIH1cblxuICBkdG8uZGFzaGJvYXJkLnBhbmVscyA9IFtwYW5lbCwgLi4uKGR0by5kYXNoYm9hcmQucGFuZWxzID8/IFtdKV07XG5cbiAgdHJ5IHtcbiAgICBzZXREYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZShkdG8pO1xuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBBZGRUb0Rhc2hib2FyZEVycm9yLlNFVF9EQVNIQk9BUkRfTFM7XG4gIH1cbn1cblxuY29uc3QgaXNWaXNpYmxlID0gKHF1ZXJ5OiBEYXRhUXVlcnkpID0+ICFxdWVyeS5oaWRlO1xuY29uc3QgaGFzUmVmSWQgPSAocmVmSWQ6IERhdGFGcmFtZVsncmVmSWQnXSkgPT4gKGZyYW1lOiBEYXRhRnJhbWUpID0+IGZyYW1lLnJlZklkID09PSByZWZJZDtcblxuZnVuY3Rpb24gZ2V0UGFuZWxUeXBlKHF1ZXJpZXM6IERhdGFRdWVyeVtdLCBxdWVyeVJlc3BvbnNlOiBFeHBsb3JlUGFuZWxEYXRhKSB7XG4gIGZvciAoY29uc3QgeyByZWZJZCB9IG9mIHF1ZXJpZXMuZmlsdGVyKGlzVmlzaWJsZSkpIHtcbiAgICAvLyB0cmFjZXZpZXcgaXMgbm90IHN1cHBvcnRlZCBpbiBkYXNoYm9hcmRzLCBza2lwcGluZyBpdCBmb3Igbm93LlxuICAgIGNvbnN0IGhhc1F1ZXJ5UmVmSWQgPSBoYXNSZWZJZChyZWZJZCk7XG4gICAgaWYgKHF1ZXJ5UmVzcG9uc2UuZ3JhcGhGcmFtZXMuc29tZShoYXNRdWVyeVJlZklkKSkge1xuICAgICAgcmV0dXJuICd0aW1lc2VyaWVzJztcbiAgICB9XG4gICAgaWYgKHF1ZXJ5UmVzcG9uc2UubG9nc0ZyYW1lcy5zb21lKGhhc1F1ZXJ5UmVmSWQpKSB7XG4gICAgICByZXR1cm4gJ2xvZ3MnO1xuICAgIH1cbiAgICBpZiAocXVlcnlSZXNwb25zZS5ub2RlR3JhcGhGcmFtZXMuc29tZShoYXNRdWVyeVJlZklkKSkge1xuICAgICAgcmV0dXJuICdub2RlR3JhcGgnO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZhbGxpbmcgYmFjayB0byB0YWJsZVxuICByZXR1cm4gJ3RhYmxlJztcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV4cGxvcmVJZCB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBBZGRUb0Rhc2hib2FyZE1vZGFsIH0gZnJvbSAnLi9BZGRUb0Rhc2hib2FyZE1vZGFsJztcbmltcG9ydCB7IFRvb2xiYXJCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEV4cGxvcmVJdGVtU2VsZWN0b3IgfSBmcm9tICcuLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBleHBsb3JlSWQ6IEV4cGxvcmVJZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFkZFRvRGFzaGJvYXJkID0gKHsgZXhwbG9yZUlkIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNlbGVjdEV4cGxvcmVJdGVtID0gZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvcihleHBsb3JlSWQpO1xuICBjb25zdCBleHBsb3JlUGFuZUhhc1F1ZXJpZXMgPSAhIXVzZVNlbGVjdG9yKHNlbGVjdEV4cGxvcmVJdGVtKT8ucXVlcmllcz8ubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb29sYmFyQnV0dG9uXG4gICAgICAgIGljb249XCJhcHBzXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxuICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRvIGRhc2hib2FyZFwiXG4gICAgICAgIGRpc2FibGVkPXshZXhwbG9yZVBhbmVIYXNRdWVyaWVzfVxuICAgICAgPlxuICAgICAgICBBZGQgdG8gZGFzaGJvYXJkXG4gICAgICA8L1Rvb2xiYXJCdXR0b24+XG5cbiAgICAgIHtpc09wZW4gJiYgPEFkZFRvRGFzaGJvYXJkTW9kYWwgb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0gZXhwbG9yZUlkPXtleHBsb3JlSWR9IC8+fVxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJyZXBvcnRNZXRhQW5hbHl0aWNzIiwiTWV0YUFuYWx5dGljc0V2ZW50TmFtZSIsImVtaXREYXNoYm9hcmRWaWV3RXZlbnQiLCJkYXNoYm9hcmQiLCJldmVudERhdGEiLCJkYXNoYm9hcmRJZCIsImlkIiwiZGFzaGJvYXJkTmFtZSIsInRpdGxlIiwiZGFzaGJvYXJkVWlkIiwidWlkIiwiZm9sZGVyTmFtZSIsIm1ldGEiLCJmb2xkZXJUaXRsZSIsImV2ZW50TmFtZSIsIkRhc2hib2FyZFZpZXciLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsImJhY2tlbmRTcnYiLCJnZXREYXNoYm9hcmRTcnYiLCJkYXNoYm9hcmRMb2FkZXJTcnYiLCJnZXRUaW1lU3J2Iiwia2V5YmluZGluZ1NydiIsIm5vdGlmeUFwcCIsImRhc2hib2FyZEluaXRDb21wbGV0ZWQiLCJkYXNoYm9hcmRJbml0RmFpbGVkIiwiZGFzaGJvYXJkSW5pdEZldGNoaW5nIiwiZGFzaGJvYXJkSW5pdFNlcnZpY2VzIiwiRGFzaGJvYXJkSW5pdFBoYXNlIiwiRGFzaGJvYXJkUm91dGVzIiwiRGFzaGJvYXJkTW9kZWwiLCJsb2NhdGlvblV0aWwiLCJzZXRXZWVrU3RhcnQiLCJpbml0VmFyaWFibGVzVHJhbnNhY3Rpb24iLCJkYXNoYm9hcmRXYXRjaGVyIiwiY29uZmlnIiwibG9jYXRpb25TZXJ2aWNlIiwiY3JlYXRlRGFzaGJvYXJkUXVlcnlSdW5uZXIiLCJnZXRJZkV4aXN0c0xhc3RLZXkiLCJ0b1N0YXRlS2V5Iiwic3RvcmUiLCJmZXRjaERhc2hib2FyZCIsImFyZ3MiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibW9kZWwiLCJnZXRPYmplY3QiLCJEQVNIQk9BUkRfRlJPTV9MU19LRVkiLCJyZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSIsInJvdXRlTmFtZSIsIkhvbWUiLCJkYXNoRFRPIiwiZ2V0IiwicmVkaXJlY3RVcmkiLCJuZXdVcmwiLCJzdHJpcEJhc2VGcm9tVXJsIiwicmVwbGFjZSIsImNhblNhdmUiLCJjYW5TaGFyZSIsImNhblN0YXIiLCJOb3JtYWwiLCJsb2FkRGFzaGJvYXJkIiwidXJsVHlwZSIsInVybFNsdWciLCJ1cmxVaWQiLCJmaXhVcmwiLCJ1cmwiLCJkYXNoYm9hcmRVcmwiLCJjdXJyZW50UGF0aCIsImdldExvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiTmV3IiwiZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhIiwidXJsRm9sZGVySWQiLCJtZXNzYWdlIiwiZXJyIiwiY2FuY2VsbGVkIiwiZXJyb3IiLCJpbml0RGFzaGJvYXJkIiwic3RvcmVTdGF0ZSIsInF1ZXJ5UGFyYW1zIiwiZ2V0U2VhcmNoT2JqZWN0Iiwib3JnSWQiLCJwYXJ0aWFsIiwidXNlciIsInRpbWVTcnYiLCJkYXNoYm9hcmRTcnYiLCJzZXRDdXJyZW50IiwiaW5pdCIsInJ1bm5lciIsInJ1biIsInJhbmdlIiwidGltZVJhbmdlIiwiaW5pdFBoYXNlIiwiU2VydmljZXMiLCJwcm9jZXNzUmVwZWF0cyIsImF1dG9maXRwYW5lbHMiLCJhdXRvRml0UGFuZWxzIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJraW9zayIsInNldHVwRGFzaGJvYXJkQmluZGluZ3MiLCJ3YXRjaCIsImxlYXZlIiwid2Vla1N0YXJ0IiwiYm9vdERhdGEiLCJkYXRhIiwiaXNOZXciLCJmb2xkZXJJZCIsInBhbmVscyIsInR5cGUiLCJncmlkUG9zIiwieCIsInkiLCJ3IiwiaCIsInBhcnNlSW50Iiwic2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UiLCJzZXRPYmplY3QiLCJkZWxldGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWxlcnQiLCJCdXR0b24iLCJGaWVsZCIsIklucHV0Q29udHJvbCIsIk1vZGFsIiwiUmFkaW9CdXR0b25Hcm91cCIsInNldERhc2hib2FyZEluTG9jYWxTdG9yYWdlIiwiQWRkVG9EYXNoYm9hcmRFcnJvciIsInVzZVNlbGVjdG9yIiwiRGFzaGJvYXJkUGlja2VyIiwidXNlRm9ybSIsInJlcG9ydEludGVyYWN0aW9uIiwiZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvciIsIlNhdmVUYXJnZXQiLCJTQVZFX1RBUkdFVFMiLCJsYWJlbCIsInZhbHVlIiwiTmV3RGFzaGJvYXJkIiwiRXhpc3RpbmdEYXNoYm9hcmQiLCJhc3NlcnRJc1NhdmVUb0V4aXN0aW5nRGFzaGJvYXJkRXJyb3IiLCJlcnJvcnMiLCJnZXREYXNoYm9hcmRVUkwiLCJHZW5lcmljRXJyb3IiLCJBZGRUb0Rhc2hib2FyZE1vZGFsIiwib25DbG9zZSIsImV4cGxvcmVJZCIsImV4cGxvcmVJdGVtIiwic3VibWlzc2lvbkVycm9yIiwic2V0U3VibWlzc2lvbkVycm9yIiwiaGFuZGxlU3VibWl0IiwiY29udHJvbCIsImZvcm1TdGF0ZSIsImRlZmF1bHRWYWx1ZXMiLCJzYXZlVGFyZ2V0Iiwib25TdWJtaXQiLCJvcGVuSW5OZXdUYWIiLCJ1bmRlZmluZWQiLCJuZXdUYWIiLCJxdWVyaWVzIiwibGVuZ3RoIiwiZGF0YXNvdXJjZSIsImRhdGFzb3VyY2VJbnN0YW5jZSIsImdldFJlZiIsInF1ZXJ5UmVzcG9uc2UiLCJGRVRDSF9EQVNIQk9BUkQiLCJTRVRfREFTSEJPQVJEX0xTIiwiVU5LTk9XTiIsImRhc2hib2FyZFVSTCIsInB1c2giLCJkaWRUYWJPcGVuIiwiZ2xvYmFsIiwib3BlbiIsImFwcFVybCIsIk5BVklHQVRJT04iLCJmaWVsZCIsIm9uQ2hhbmdlIiwiZCIsInJlcXVpcmVkIiwiY3JlYXRlRGFzaGJvYXJkIiwiZHRvIiwib3B0aW9ucyIsInBhbmVsVHlwZSIsImdldFBhbmVsVHlwZSIsInBhbmVsIiwidGFyZ2V0cyIsImdldERhc2hib2FyZEJ5VWlkIiwiZSIsImlzVmlzaWJsZSIsInF1ZXJ5IiwiaGlkZSIsImhhc1JlZklkIiwicmVmSWQiLCJmcmFtZSIsImZpbHRlciIsImhhc1F1ZXJ5UmVmSWQiLCJncmFwaEZyYW1lcyIsInNvbWUiLCJsb2dzRnJhbWVzIiwibm9kZUdyYXBoRnJhbWVzIiwiVG9vbGJhckJ1dHRvbiIsIkFkZFRvRGFzaGJvYXJkIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2VsZWN0RXhwbG9yZUl0ZW0iLCJleHBsb3JlUGFuZUhhc1F1ZXJpZXMiXSwic291cmNlUm9vdCI6IiJ9
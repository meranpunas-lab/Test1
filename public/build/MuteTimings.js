"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["MuteTimings"],{

/***/ "./public/app/features/alerting/unified/MuteTimings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingForm.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _Route, _Redirect;















const MuteTimings = () => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__.useQueryParams)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const [alertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__.useAlertManagerSourceName)();
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const fetchConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchConfig();
  }, [fetchConfig]);
  const {
    result,
    error,
    loading
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_6__.initialAsyncRequestState;
  const config = result === null || result === void 0 ? void 0 : result.alertmanager_config;
  const getMuteTimingByName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => {
    var _config$mute_time_int;

    return config === null || config === void 0 ? void 0 : (_config$mute_time_int = config.mute_time_intervals) === null || _config$mute_time_int === void 0 ? void 0 : _config$mute_time_int.find(({
      name
    }) => name === id);
  }, [config]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LoadingPlaceholder, {
      text: "Loading mute timing"
    }))), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert, {
      severity: "error",
      title: `Error loading Alertmanager config for ${alertManagerSourceName}`,
      children: error.message || 'Unknown error.'
    }), result && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Switch, {
      children: [_Route || (_Route = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        exact: true,
        path: "/alerting/routes/mute-timing/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        exact: true,
        path: "/alerting/routes/mute-timing/edit",
        children: () => {
          if (queryParams['muteName']) {
            const muteTiming = getMuteTimingByName(String(queryParams['muteName']));
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
              muteTiming: muteTiming,
              showError: !muteTiming
            });
          }

          return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Redirect, {
            to: "/alerting/routes"
          }));
        }
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuteTimings);

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

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _MuteTimingTimeInterval__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeInterval.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _MuteTimingTimeInterv;



















const useDefaultValues = muteTiming => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const defaultValues = {
      name: '',
      time_intervals: [_utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval]
    };

    if (!muteTiming) {
      return defaultValues;
    }

    const intervals = muteTiming.time_intervals.map(interval => {
      var _interval$times, _interval$weekdays$jo, _interval$weekdays, _interval$days_of_mon, _interval$days_of_mon2, _interval$months$join, _interval$months, _interval$years$join, _interval$years;

      return {
        times: (_interval$times = interval.times) !== null && _interval$times !== void 0 ? _interval$times : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.times,
        weekdays: (_interval$weekdays$jo = interval === null || interval === void 0 ? void 0 : (_interval$weekdays = interval.weekdays) === null || _interval$weekdays === void 0 ? void 0 : _interval$weekdays.join(', ')) !== null && _interval$weekdays$jo !== void 0 ? _interval$weekdays$jo : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.weekdays,
        days_of_month: (_interval$days_of_mon = interval === null || interval === void 0 ? void 0 : (_interval$days_of_mon2 = interval.days_of_month) === null || _interval$days_of_mon2 === void 0 ? void 0 : _interval$days_of_mon2.join(', ')) !== null && _interval$days_of_mon !== void 0 ? _interval$days_of_mon : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.days_of_month,
        months: (_interval$months$join = interval === null || interval === void 0 ? void 0 : (_interval$months = interval.months) === null || _interval$months === void 0 ? void 0 : _interval$months.join(', ')) !== null && _interval$months$join !== void 0 ? _interval$months$join : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.months,
        years: (_interval$years$join = interval === null || interval === void 0 ? void 0 : (_interval$years = interval.years) === null || _interval$years === void 0 ? void 0 : _interval$years.join(', ')) !== null && _interval$years$join !== void 0 ? _interval$years$join : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.years
      };
    });
    return {
      name: muteTiming.name,
      time_intervals: intervals
    };
  }, [muteTiming]);
};

const MuteTimingForm = ({
  muteTiming,
  showError
}) => {
  var _result$alertmanager_, _formApi$formState$er, _formApi$formState$er2;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_7__.useAlertManagerSourceName)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const defaultAmCortexConfig = {
    alertmanager_config: {},
    template_files: {}
  };
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_9__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const {
    result = defaultAmCortexConfig,
    loading
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_10__.initialAsyncRequestState;
  const config = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : result.alertmanager_config) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : {};
  const defaultValues = useDefaultValues(muteTiming);
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues
  });

  const onSubmit = values => {
    var _config$mute_time_int, _config$route;

    const newMuteTiming = (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.createMuteTiming)(values);
    const muteTimings = muteTiming ? config === null || config === void 0 ? void 0 : (_config$mute_time_int = config.mute_time_intervals) === null || _config$mute_time_int === void 0 ? void 0 : _config$mute_time_int.filter(({
      name
    }) => name !== muteTiming.name) : config.mute_time_intervals;
    const newConfig = Object.assign({}, result, {
      alertmanager_config: Object.assign({}, config, {
        route: muteTiming && newMuteTiming.name !== muteTiming.name ? (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_13__.renameMuteTimings)(newMuteTiming.name, muteTiming.name, (_config$route = config.route) !== null && _config$route !== void 0 ? _config$route : {}) : config.route,
        mute_time_intervals: [...(muteTimings || []), newMuteTiming]
      })
    });
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.updateAlertManagerConfigAction)({
      newConfig,
      oldConfig: result,
      alertManagerSourceName: alertManagerSourceName,
      successMessage: 'Mute timing saved',
      redirectPath: '/alerting/routes/'
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_1__.AlertingPageWrapper, {
    pageId: "am-routes",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_6__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      disabled: true
    }), result && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, Object.assign({}, formApi, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("form", {
        onSubmit: formApi.handleSubmit(onSubmit),
        "data-testid": "mute-timing-form",
        children: [showError && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
          title: "No matching mute timing found"
        }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
          label: 'Create mute timing',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            required: true,
            label: "Name",
            description: "A unique name for the mute timing",
            invalid: !!((_formApi$formState$er = formApi.formState.errors) !== null && _formApi$formState$er !== void 0 && _formApi$formState$er.name),
            error: (_formApi$formState$er2 = formApi.formState.errors.name) === null || _formApi$formState$er2 === void 0 ? void 0 : _formApi$formState$er2.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, formApi.register('name', {
              required: true,
              validate: value => {
                if (!muteTiming) {
                  var _config$mute_time_int2;

                  const existingMuteTiming = config === null || config === void 0 ? void 0 : (_config$mute_time_int2 = config.mute_time_intervals) === null || _config$mute_time_int2 === void 0 ? void 0 : _config$mute_time_int2.find(({
                    name
                  }) => value === name);
                  return existingMuteTiming ? `Mute timing already exists for "${value}"` : true;
                }

                return value.length > 0 || 'Name is required';
              }
            }), {
              className: styles.input,
              "data-testid": 'mute-timing-name'
            }))
          }), _MuteTimingTimeInterv || (_MuteTimingTimeInterv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_MuteTimingTimeInterval__WEBPACK_IMPORTED_MODULE_14__.MuteTimingTimeInterval, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            type: "button",
            variant: "secondary",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)('/alerting/routes/', alertManagerSourceName),
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            className: styles.submitButton,
            children: muteTiming ? 'Save' : 'Submit'
          })]
        })]
      })
    }))]
  });
};

const getStyles = theme => ({
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_5__.css`
    width: 400px;
  `,
  submitButton: _emotion_css__WEBPACK_IMPORTED_MODULE_5__.css`
    margin-left: ${theme.spacing(1)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuteTimingForm);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeInterval.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingTimeInterval": () => (/* binding */ MuteTimingTimeInterval)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _MuteTimingTimeRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeRange.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










const MuteTimingTimeInterval = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const {
    formState,
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const {
    fields: timeIntervals,
    append: addTimeInterval,
    remove: removeTimeInterval
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray)({
    name: 'time_intervals'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
    className: styles.timeIntervalLegend,
    label: "Time intervals",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."
      })), timeIntervals.map((timeInterval, timeIntervalIndex) => {
        var _errors$time_interval, _errors$time_interval2, _errors$time_interval3, _errors$time_interval4, _errors$time_interval5, _errors$time_interval6, _errors$time_interval7, _errors$time_interval8, _errors$time_interval9, _errors$time_interval10, _errors$time_interval11, _errors$time_interval12, _errors$time_interval13, _errors$time_interval14, _errors$time_interval15, _errors$time_interval16, _errors$time_interval17, _errors$time_interval18, _errors$time_interval19, _errors$time_interval20, _errors$time_interval21, _errors$time_interval22;

        const errors = formState.errors;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.timeIntervalSection,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MuteTimingTimeRange__WEBPACK_IMPORTED_MODULE_5__.MuteTimingTimeRange, {
            intervalIndex: timeIntervalIndex
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Days of the week",
            error: (_errors$time_interval = (_errors$time_interval2 = errors.time_intervals) === null || _errors$time_interval2 === void 0 ? void 0 : (_errors$time_interval3 = _errors$time_interval2[timeIntervalIndex]) === null || _errors$time_interval3 === void 0 ? void 0 : (_errors$time_interval4 = _errors$time_interval3.weekdays) === null || _errors$time_interval4 === void 0 ? void 0 : _errors$time_interval4.message) !== null && _errors$time_interval !== void 0 ? _errors$time_interval : '',
            invalid: !!((_errors$time_interval5 = errors.time_intervals) !== null && _errors$time_interval5 !== void 0 && (_errors$time_interval6 = _errors$time_interval5[timeIntervalIndex]) !== null && _errors$time_interval6 !== void 0 && _errors$time_interval6.weekdays),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.weekdays`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, day => _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.DAYS_OF_THE_WEEK.includes(day.toLowerCase()), 'Invalid day of the week')
            }), {
              className: styles.input,
              "data-testid": "mute-timing-weekdays" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.weekdays,
              placeholder: "Example: monday, tuesday:thursday"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Days of the month",
            description: "The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",
            invalid: !!((_errors$time_interval7 = errors.time_intervals) !== null && _errors$time_interval7 !== void 0 && (_errors$time_interval8 = _errors$time_interval7[timeIntervalIndex]) !== null && _errors$time_interval8 !== void 0 && _errors$time_interval8.days_of_month),
            error: (_errors$time_interval9 = errors.time_intervals) === null || _errors$time_interval9 === void 0 ? void 0 : (_errors$time_interval10 = _errors$time_interval9[timeIntervalIndex]) === null || _errors$time_interval10 === void 0 ? void 0 : (_errors$time_interval11 = _errors$time_interval10.days_of_month) === null || _errors$time_interval11 === void 0 ? void 0 : _errors$time_interval11.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.days_of_month`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, day => {
                const parsedDay = parseInt(day, 10);
                return parsedDay > -31 && parsedDay < 0 || parsedDay > 0 && parsedDay < 32;
              }, 'Invalid day')
            }), {
              className: styles.input // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.days_of_month,
              placeholder: "Example: 1, 14:16, -1",
              "data-testid": "mute-timing-days"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Months",
            description: "The months of the year in either numerical or the full calendar month",
            invalid: !!((_errors$time_interval12 = errors.time_intervals) !== null && _errors$time_interval12 !== void 0 && (_errors$time_interval13 = _errors$time_interval12[timeIntervalIndex]) !== null && _errors$time_interval13 !== void 0 && _errors$time_interval13.months),
            error: (_errors$time_interval14 = errors.time_intervals) === null || _errors$time_interval14 === void 0 ? void 0 : (_errors$time_interval15 = _errors$time_interval14[timeIntervalIndex]) === null || _errors$time_interval15 === void 0 ? void 0 : (_errors$time_interval16 = _errors$time_interval15.months) === null || _errors$time_interval16 === void 0 ? void 0 : _errors$time_interval16.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.months`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, month => _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.MONTHS.includes(month) || parseInt(month, 10) < 13 && parseInt(month, 10) > 0, 'Invalid month')
            }), {
              className: styles.input,
              placeholder: "Example: 1:3, may:august, december" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.months,
              "data-testid": "mute-timing-months"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Years",
            invalid: !!((_errors$time_interval17 = errors.time_intervals) !== null && _errors$time_interval17 !== void 0 && (_errors$time_interval18 = _errors$time_interval17[timeIntervalIndex]) !== null && _errors$time_interval18 !== void 0 && _errors$time_interval18.years),
            error: (_errors$time_interval19 = (_errors$time_interval20 = errors.time_intervals) === null || _errors$time_interval20 === void 0 ? void 0 : (_errors$time_interval21 = _errors$time_interval20[timeIntervalIndex]) === null || _errors$time_interval21 === void 0 ? void 0 : (_errors$time_interval22 = _errors$time_interval21.years) === null || _errors$time_interval22 === void 0 ? void 0 : _errors$time_interval22.message) !== null && _errors$time_interval19 !== void 0 ? _errors$time_interval19 : '',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.years`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, year => /^\d{4}$/.test(year), 'Invalid year')
            }), {
              className: styles.input,
              placeholder: "Example: 2021:2022, 2030" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.years,
              "data-testid": "mute-timing-years"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            type: "button",
            variant: "destructive",
            icon: "trash-alt",
            onClick: () => removeTimeInterval(timeIntervalIndex),
            children: "Remove time interval"
          })]
        }, timeInterval.id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "button",
        variant: "secondary",
        className: styles.removeTimeIntervalButton,
        onClick: () => {
          addTimeInterval(_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.defaultTimeInterval);
        },
        icon: "plus",
        children: "Add another time interval"
      })]
    })
  });
};

const getStyles = theme => ({
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    width: 400px;
  `,
  timeIntervalLegend: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    legend {
      font-size: 1.25rem;
    }
  `,
  timeIntervalSection: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    background-color: ${theme.colors.background.secondary};
    padding: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
  `,
  removeTimeIntervalButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeRange.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingTimeRange": () => (/* binding */ MuteTimingTimeRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const MuteTimingTimeRange = ({
  intervalIndex
}) => {
  var _formState$errors$tim, _formErrors$times$som, _formErrors$times;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    register,
    formState
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const {
    fields: timeRanges,
    append: addTimeRange,
    remove: removeTimeRange
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFieldArray)({
    name: `time_intervals.${intervalIndex}.times`
  });

  const validateTime = timeString => {
    if (!timeString) {
      return true;
    }

    const [hour, minutes] = timeString.split(':').map(x => parseInt(x, 10));
    const isHourValid = hour >= 0 && hour < 25;
    const isMinuteValid = minutes > -1 && minutes < 60;
    const isTimeValid = hour === 24 ? minutes === 0 : isHourValid && isMinuteValid;
    return isTimeValid || 'Time is invalid';
  };

  const formErrors = (_formState$errors$tim = formState.errors.time_intervals) === null || _formState$errors$tim === void 0 ? void 0 : _formState$errors$tim[intervalIndex];
  const timeRangeInvalid = (_formErrors$times$som = formErrors === null || formErrors === void 0 ? void 0 : (_formErrors$times = formErrors.times) === null || _formErrors$times === void 0 ? void 0 : _formErrors$times.some(value => (value === null || value === void 0 ? void 0 : value.start_time) || (value === null || value === void 0 ? void 0 : value.end_time))) !== null && _formErrors$times$som !== void 0 ? _formErrors$times$som : false;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      className: styles.field,
      label: "Time range",
      description: "The time inclusive of the starting time and exclusive of the end time in UTC",
      invalid: timeRangeInvalid,
      error: timeRangeInvalid ? 'Times must be between 00:00 and 24:00 UTC' : '',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: timeRanges.map((timeRange, index) => {
          var _formErrors$times2, _formErrors$times2$in, _formErrors$times3, _formErrors$times3$in;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: styles.timeRange,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
                label: "Start time",
                invalid: !!(formErrors !== null && formErrors !== void 0 && (_formErrors$times2 = formErrors.times) !== null && _formErrors$times2 !== void 0 && (_formErrors$times2$in = _formErrors$times2[index]) !== null && _formErrors$times2$in !== void 0 && _formErrors$times2$in.start_time),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register(`time_intervals.${intervalIndex}.times.${index}.start_time`, {
                  validate: validateTime
                }), {
                  className: styles.timeRangeInput // @ts-ignore react-hook-form doesn't handle nested field arrays well
                  ,
                  defaultValue: timeRange.start_time,
                  placeholder: "HH:MM",
                  "data-testid": "mute-timing-starts-at"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
                label: "End time",
                invalid: !!(formErrors !== null && formErrors !== void 0 && (_formErrors$times3 = formErrors.times) !== null && _formErrors$times3 !== void 0 && (_formErrors$times3$in = _formErrors$times3[index]) !== null && _formErrors$times3$in !== void 0 && _formErrors$times3$in.end_time),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register(`time_intervals.${intervalIndex}.times.${index}.end_time`, {
                  validate: validateTime
                }), {
                  className: styles.timeRangeInput // @ts-ignore react-hook-form doesn't handle nested field arrays well
                  ,
                  defaultValue: timeRange.end_time,
                  placeholder: "HH:MM",
                  "data-testid": "mute-timing-ends-at"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                className: styles.deleteTimeRange,
                title: 'Remove',
                name: 'trash-alt',
                type: "button",
                onClick: e => {
                  e.preventDefault();
                  removeTimeRange(index);
                }
              })]
            })
          }, timeRange.id);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.addTimeRange,
      variant: "secondary",
      type: "button",
      icon: 'plus',
      onClick: () => addTimeRange({
        start_time: '',
        end_time: ''
      }),
      children: "Add another time range"
    })]
  });
};

const getStyles = theme => ({
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-bottom: 0;
  `,
  timeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  timeRangeInput: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    width: 120px;
  `,
  deleteTimeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin: ${theme.spacing(1)} 0 0 ${theme.spacing(0.5)};
  `,
  addTimeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-bottom: ${theme.spacing(2)};
  `
});

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

/***/ "./public/app/features/alerting/unified/utils/mute-timings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAYS_OF_THE_WEEK": () => (/* binding */ DAYS_OF_THE_WEEK),
/* harmony export */   "MONTHS": () => (/* binding */ MONTHS),
/* harmony export */   "createMuteTiming": () => (/* binding */ createMuteTiming),
/* harmony export */   "defaultTimeInterval": () => (/* binding */ defaultTimeInterval),
/* harmony export */   "validateArrayField": () => (/* binding */ validateArrayField)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const DAYS_OF_THE_WEEK = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const defaultTimeInterval = {
  times: [{
    start_time: '',
    end_time: ''
  }],
  weekdays: '',
  days_of_month: '',
  months: '',
  years: ''
};
const validateArrayField = (value, validateValue, invalidText) => {
  if (value) {
    return value.split(',').map(x => x.trim()).every(entry => entry.split(':').every(validateValue)) || invalidText;
  } else {
    return true;
  }
};

const convertStringToArray = str => {
  return str ? str.split(',').map(s => s.trim()) : undefined;
};

const createMuteTiming = fields => {
  const timeIntervals = fields.time_intervals.map(({
    times,
    weekdays,
    days_of_month,
    months,
    years
  }) => {
    var _convertStringToArray;

    const interval = {
      times: times.filter(({
        start_time,
        end_time
      }) => !!start_time && !!end_time),
      weekdays: (_convertStringToArray = convertStringToArray(weekdays)) === null || _convertStringToArray === void 0 ? void 0 : _convertStringToArray.map(v => v.toLowerCase()),
      days_of_month: convertStringToArray(days_of_month),
      months: convertStringToArray(months),
      years: convertStringToArray(years)
    };
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(interval, lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined);
  });
  return {
    name: fields.name,
    time_intervals: timeIntervals
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SXFELE1BQUQsSUFBZ0Q7QUFDOUUsUUFBTUMsYUFBNkIsR0FBR0QsTUFBTSxDQUFDOUMsY0FBUCxDQUFzQkUsR0FBdEIsQ0FDcEMsQ0FBQztBQUFFRSxJQUFBQSxLQUFGO0FBQVNDLElBQUFBLFFBQVQ7QUFBbUJFLElBQUFBLGFBQW5CO0FBQWtDQyxJQUFBQSxNQUFsQztBQUEwQ0MsSUFBQUE7QUFBMUMsR0FBRCxLQUF1RDtBQUFBOztBQUNyRCxVQUFNTixRQUFRLEdBQUc7QUFDZkMsTUFBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNpQixNQUFOLENBQWEsQ0FBQztBQUFFa0UsUUFBQUEsVUFBRjtBQUFjQyxRQUFBQTtBQUFkLE9BQUQsS0FBOEIsQ0FBQyxDQUFDRCxVQUFGLElBQWdCLENBQUMsQ0FBQ0MsUUFBN0QsQ0FEUTtBQUVmbkYsTUFBQUEsUUFBUSwyQkFBRWlILG9CQUFvQixDQUFDakgsUUFBRCxDQUF0QiwwREFBRSxzQkFBZ0NILEdBQWhDLENBQXFDdUgsQ0FBRCxJQUFPQSxDQUFDLENBQUMvRCxXQUFGLEVBQTNDLENBRks7QUFHZm5ELE1BQUFBLGFBQWEsRUFBRStHLG9CQUFvQixDQUFDL0csYUFBRCxDQUhwQjtBQUlmQyxNQUFBQSxNQUFNLEVBQUU4RyxvQkFBb0IsQ0FBQzlHLE1BQUQsQ0FKYjtBQUtmQyxNQUFBQSxLQUFLLEVBQUU2RyxvQkFBb0IsQ0FBQzdHLEtBQUQ7QUFMWixLQUFqQjtBQVFBLFdBQU9zRyw4Q0FBTSxDQUFDNUcsUUFBRCxFQUFXNkcsK0NBQVgsQ0FBYjtBQUNELEdBWG1DLENBQXRDO0FBY0EsU0FBTztBQUNMaEosSUFBQUEsSUFBSSxFQUFFOEUsTUFBTSxDQUFDOUUsSUFEUjtBQUVMZ0MsSUFBQUEsY0FBYyxFQUFFK0M7QUFGWCxHQUFQO0FBSUQsQ0FuQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL011dGVUaW1pbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvTXV0ZVRpbWluZ1RpbWVJbnRlcnZhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdUaW1lUmFuZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL211dGUtdGltaW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgTXV0ZVRpbWluZ0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdGb3JtJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSBmcm9tICcuL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgeyBNdXRlVGltZUludGVydmFsIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgQWxlcnQsIExvYWRpbmdQbGFjZWhvbGRlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuXG5jb25zdCBNdXRlVGltaW5ncyA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSgpO1xuXG4gIGNvbnN0IGFtQ29uZmlncyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcblxuICBjb25zdCBmZXRjaENvbmZpZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpO1xuICAgIH1cbiAgfSwgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGRpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaENvbmZpZygpO1xuICB9LCBbZmV0Y2hDb25maWddKTtcblxuICBjb25zdCB7IHJlc3VsdCwgZXJyb3IsIGxvYWRpbmcgfSA9XG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgYW1Db25maWdzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgY29uZmlnID0gcmVzdWx0Py5hbGVydG1hbmFnZXJfY29uZmlnO1xuXG4gIGNvbnN0IGdldE11dGVUaW1pbmdCeU5hbWUgPSB1c2VDYWxsYmFjayhcbiAgICAoaWQ6IHN0cmluZyk6IE11dGVUaW1lSW50ZXJ2YWwgfCB1bmRlZmluZWQgPT4ge1xuICAgICAgcmV0dXJuIGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8uZmluZCgoeyBuYW1lIH06IE11dGVUaW1lSW50ZXJ2YWwpID0+IG5hbWUgPT09IGlkKTtcbiAgICB9LFxuICAgIFtjb25maWddXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgJiYgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBtdXRlIHRpbWluZ1wiIC8+fVxuICAgICAge2Vycm9yICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiB0aXRsZT17YEVycm9yIGxvYWRpbmcgQWxlcnRtYW5hZ2VyIGNvbmZpZyBmb3IgJHthbGVydE1hbmFnZXJTb3VyY2VOYW1lfWB9PlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge3Jlc3VsdCAmJiAhZXJyb3IgJiYgKFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FsZXJ0aW5nL3JvdXRlcy9tdXRlLXRpbWluZy9uZXdcIj5cbiAgICAgICAgICAgIDxNdXRlVGltaW5nRm9ybSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYWxlcnRpbmcvcm91dGVzL211dGUtdGltaW5nL2VkaXRcIj5cbiAgICAgICAgICAgIHsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtc1snbXV0ZU5hbWUnXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGVUaW1pbmcgPSBnZXRNdXRlVGltaW5nQnlOYW1lKFN0cmluZyhxdWVyeVBhcmFtc1snbXV0ZU5hbWUnXSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiA8TXV0ZVRpbWluZ0Zvcm0gbXV0ZVRpbWluZz17bXV0ZVRpbWluZ30gc2hvd0Vycm9yPXshbXV0ZVRpbWluZ30gLz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9hbGVydGluZy9yb3V0ZXNcIiAvPjtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXV0ZVRpbWluZ3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYWdlSWQ6IHN0cmluZztcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0aW5nUGFnZVdyYXBwZXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBwYWdlSWQsIGlzTG9hZGluZyB9KSA9PiB7XG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwoXG4gICAgdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCksXG4gICAgcGFnZUlkXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PntjaGlsZHJlbn08L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnRpbmdQYWdlV3JhcHBlciB9IGZyb20gJy4uL0FsZXJ0aW5nUGFnZVdyYXBwZXInO1xuaW1wb3J0IHsgQWxlcnQsIEZpZWxkLCBGaWVsZFNldCwgSW5wdXQsIEJ1dHRvbiwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQge1xuICBBbGVydG1hbmFnZXJDb25maWcsXG4gIEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyxcbiAgTXV0ZVRpbWVJbnRlcnZhbCxcbn0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyUGlja2VyIH0gZnJvbSAnLi4vQWxlcnRNYW5hZ2VyUGlja2VyJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi8uLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgeyBNdXRlVGltaW5nRmllbGRzIH0gZnJvbSAnLi4vLi4vdHlwZXMvbXV0ZS10aW1pbmctZm9ybSc7XG5pbXBvcnQgeyBjcmVhdGVNdXRlVGltaW5nLCBkZWZhdWx0VGltZUludGVydmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvbXV0ZS10aW1pbmdzJztcbmltcG9ydCB7IG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IHJlbmFtZU11dGVUaW1pbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IE11dGVUaW1pbmdUaW1lSW50ZXJ2YWwgfSBmcm9tICcuL011dGVUaW1pbmdUaW1lSW50ZXJ2YWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtdXRlVGltaW5nPzogTXV0ZVRpbWVJbnRlcnZhbDtcbiAgc2hvd0Vycm9yPzogYm9vbGVhbjtcbn1cblxuY29uc3QgdXNlRGVmYXVsdFZhbHVlcyA9IChtdXRlVGltaW5nPzogTXV0ZVRpbWVJbnRlcnZhbCk6IE11dGVUaW1pbmdGaWVsZHMgPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdGltZV9pbnRlcnZhbHM6IFtkZWZhdWx0VGltZUludGVydmFsXSxcbiAgICB9O1xuXG4gICAgaWYgKCFtdXRlVGltaW5nKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlcztcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnZhbHMgPSBtdXRlVGltaW5nLnRpbWVfaW50ZXJ2YWxzLm1hcCgoaW50ZXJ2YWwpID0+ICh7XG4gICAgICB0aW1lczogaW50ZXJ2YWwudGltZXMgPz8gZGVmYXVsdFRpbWVJbnRlcnZhbC50aW1lcyxcbiAgICAgIHdlZWtkYXlzOiBpbnRlcnZhbD8ud2Vla2RheXM/LmpvaW4oJywgJykgPz8gZGVmYXVsdFRpbWVJbnRlcnZhbC53ZWVrZGF5cyxcbiAgICAgIGRheXNfb2ZfbW9udGg6IGludGVydmFsPy5kYXlzX29mX21vbnRoPy5qb2luKCcsICcpID8/IGRlZmF1bHRUaW1lSW50ZXJ2YWwuZGF5c19vZl9tb250aCxcbiAgICAgIG1vbnRoczogaW50ZXJ2YWw/Lm1vbnRocz8uam9pbignLCAnKSA/PyBkZWZhdWx0VGltZUludGVydmFsLm1vbnRocyxcbiAgICAgIHllYXJzOiBpbnRlcnZhbD8ueWVhcnM/LmpvaW4oJywgJykgPz8gZGVmYXVsdFRpbWVJbnRlcnZhbC55ZWFycyxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbXV0ZVRpbWluZy5uYW1lLFxuICAgICAgdGltZV9pbnRlcnZhbHM6IGludGVydmFscyxcbiAgICB9O1xuICB9LCBbbXV0ZVRpbWluZ10pO1xufTtcblxuY29uc3QgTXV0ZVRpbWluZ0Zvcm0gPSAoeyBtdXRlVGltaW5nLCBzaG93RXJyb3IgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBkZWZhdWx0QW1Db3J0ZXhDb25maWcgPSB7IGFsZXJ0bWFuYWdlcl9jb25maWc6IHt9LCB0ZW1wbGF0ZV9maWxlczoge30gfTtcbiAgY29uc3QgYW1Db25maWdzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUNvbmZpZ3MpO1xuICBjb25zdCB7IHJlc3VsdCA9IGRlZmF1bHRBbUNvcnRleENvbmZpZywgbG9hZGluZyB9ID1cbiAgICAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBhbUNvbmZpZ3NbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcblxuICBjb25zdCBjb25maWc6IEFsZXJ0bWFuYWdlckNvbmZpZyA9IHJlc3VsdD8uYWxlcnRtYW5hZ2VyX2NvbmZpZyA/PyB7fTtcbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHVzZURlZmF1bHRWYWx1ZXMobXV0ZVRpbWluZyk7XG4gIGNvbnN0IGZvcm1BcGkgPSB1c2VGb3JtKHsgZGVmYXVsdFZhbHVlcyB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXM6IE11dGVUaW1pbmdGaWVsZHMpID0+IHtcbiAgICBjb25zdCBuZXdNdXRlVGltaW5nID0gY3JlYXRlTXV0ZVRpbWluZyh2YWx1ZXMpO1xuXG4gICAgY29uc3QgbXV0ZVRpbWluZ3MgPSBtdXRlVGltaW5nXG4gICAgICA/IGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8uZmlsdGVyKCh7IG5hbWUgfSkgPT4gbmFtZSAhPT0gbXV0ZVRpbWluZy5uYW1lKVxuICAgICAgOiBjb25maWcubXV0ZV90aW1lX2ludGVydmFscztcblxuICAgIGNvbnN0IG5ld0NvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnID0ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgYWxlcnRtYW5hZ2VyX2NvbmZpZzoge1xuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIHJvdXRlOlxuICAgICAgICAgIG11dGVUaW1pbmcgJiYgbmV3TXV0ZVRpbWluZy5uYW1lICE9PSBtdXRlVGltaW5nLm5hbWVcbiAgICAgICAgICAgID8gcmVuYW1lTXV0ZVRpbWluZ3MobmV3TXV0ZVRpbWluZy5uYW1lLCBtdXRlVGltaW5nLm5hbWUsIGNvbmZpZy5yb3V0ZSA/PyB7fSlcbiAgICAgICAgICAgIDogY29uZmlnLnJvdXRlLFxuICAgICAgICBtdXRlX3RpbWVfaW50ZXJ2YWxzOiBbLi4uKG11dGVUaW1pbmdzIHx8IFtdKSwgbmV3TXV0ZVRpbWluZ10sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChcbiAgICAgIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbih7XG4gICAgICAgIG5ld0NvbmZpZyxcbiAgICAgICAgb2xkQ29uZmlnOiByZXN1bHQsXG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUhLFxuICAgICAgICBzdWNjZXNzTWVzc2FnZTogJ011dGUgdGltaW5nIHNhdmVkJyxcbiAgICAgICAgcmVkaXJlY3RQYXRoOiAnL2FsZXJ0aW5nL3JvdXRlcy8nLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0aW5nUGFnZVdyYXBwZXIgcGFnZUlkPVwiYW0tcm91dGVzXCI+XG4gICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyIGN1cnJlbnQ9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBkaXNhYmxlZCAvPlxuICAgICAge3Jlc3VsdCAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgIDxGb3JtUHJvdmlkZXIgey4uLmZvcm1BcGl9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtQXBpLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGRhdGEtdGVzdGlkPVwibXV0ZS10aW1pbmctZm9ybVwiPlxuICAgICAgICAgICAge3Nob3dFcnJvciAmJiA8QWxlcnQgdGl0bGU9XCJObyBtYXRjaGluZyBtdXRlIHRpbWluZyBmb3VuZFwiIC8+fVxuICAgICAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXsnQ3JlYXRlIG11dGUgdGltaW5nJ30+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkEgdW5pcXVlIG5hbWUgZm9yIHRoZSBtdXRlIHRpbWluZ1wiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFmb3JtQXBpLmZvcm1TdGF0ZS5lcnJvcnM/Lm5hbWV9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Zvcm1BcGkuZm9ybVN0YXRlLmVycm9ycy5uYW1lPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB7Li4uZm9ybUFwaS5yZWdpc3RlcignbmFtZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIW11dGVUaW1pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTXV0ZVRpbWluZyA9IGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8uZmluZCgoeyBuYW1lIH0pID0+IHZhbHVlID09PSBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ011dGVUaW1pbmcgPyBgTXV0ZSB0aW1pbmcgYWxyZWFkeSBleGlzdHMgZm9yIFwiJHt2YWx1ZX1cImAgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMCB8fCAnTmFtZSBpcyByZXF1aXJlZCc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9eydtdXRlLXRpbWluZy1uYW1lJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8TXV0ZVRpbWluZ1RpbWVJbnRlcnZhbCAvPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJy9hbGVydGluZy9yb3V0ZXMvJywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259PlxuICAgICAgICAgICAgICAgIHttdXRlVGltaW5nID8gJ1NhdmUnIDogJ1N1Ym1pdCd9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GaWVsZFNldD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvRm9ybVByb3ZpZGVyPlxuICAgICAgKX1cbiAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQwMHB4O1xuICBgLFxuICBzdWJtaXRCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNdXRlVGltaW5nRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBGaWVsZCwgRmllbGRTZXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIHVzZUZpZWxkQXJyYXkgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgREFZU19PRl9USEVfV0VFSywgTU9OVEhTLCB2YWxpZGF0ZUFycmF5RmllbGQsIGRlZmF1bHRUaW1lSW50ZXJ2YWwgfSBmcm9tICcuLi8uLi91dGlscy9tdXRlLXRpbWluZ3MnO1xuaW1wb3J0IHsgTXV0ZVRpbWluZ0ZpZWxkcyB9IGZyb20gJy4uLy4uL3R5cGVzL211dGUtdGltaW5nLWZvcm0nO1xuaW1wb3J0IHsgTXV0ZVRpbWluZ1RpbWVSYW5nZSB9IGZyb20gJy4vTXV0ZVRpbWluZ1RpbWVSYW5nZSc7XG5cbmV4cG9ydCBjb25zdCBNdXRlVGltaW5nVGltZUludGVydmFsID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgZm9ybVN0YXRlLCByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3Qge1xuICAgIGZpZWxkczogdGltZUludGVydmFscyxcbiAgICBhcHBlbmQ6IGFkZFRpbWVJbnRlcnZhbCxcbiAgICByZW1vdmU6IHJlbW92ZVRpbWVJbnRlcnZhbCxcbiAgfSA9IHVzZUZpZWxkQXJyYXk8TXV0ZVRpbWluZ0ZpZWxkcz4oe1xuICAgIG5hbWU6ICd0aW1lX2ludGVydmFscycsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkU2V0IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVJbnRlcnZhbExlZ2VuZH0gbGFiZWw9XCJUaW1lIGludGVydmFsc1wiPlxuICAgICAgPD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQSB0aW1lIGludGVydmFsIGlzIGEgZGVmaW5pdGlvbiBmb3IgYSBtb21lbnQgaW4gdGltZS4gQWxsIGZpZWxkcyBhcmUgbGlzdHMsIGFuZCBhdCBsZWFzdCBvbmUgbGlzdCBlbGVtZW50IG11c3RcbiAgICAgICAgICBiZSBzYXRpc2ZpZWQgdG8gbWF0Y2ggdGhlIGZpZWxkLiBJZiBhIGZpZWxkIGlzIGxlZnQgYmxhbmssIGFueSBtb21lbnQgb2YgdGltZSB3aWxsIG1hdGNoIHRoZSBmaWVsZC4gRm9yIGFuXG4gICAgICAgICAgaW5zdGFudCBvZiB0aW1lIHRvIG1hdGNoIGEgY29tcGxldGUgdGltZSBpbnRlcnZhbCwgYWxsIGZpZWxkcyBtdXN0IG1hdGNoLiBBIG11dGUgdGltaW5nIGNhbiBjb250YWluIG11bHRpcGxlXG4gICAgICAgICAgdGltZSBpbnRlcnZhbHMuXG4gICAgICAgIDwvcD5cbiAgICAgICAge3RpbWVJbnRlcnZhbHMubWFwKCh0aW1lSW50ZXJ2YWwsIHRpbWVJbnRlcnZhbEluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0gZm9ybVN0YXRlLmVycm9ycztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3RpbWVJbnRlcnZhbC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMudGltZUludGVydmFsU2VjdGlvbn0+XG4gICAgICAgICAgICAgIDxNdXRlVGltaW5nVGltZVJhbmdlIGludGVydmFsSW5kZXg9e3RpbWVJbnRlcnZhbEluZGV4fSAvPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRheXMgb2YgdGhlIHdlZWtcIlxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LndlZWtkYXlzPy5tZXNzYWdlID8/ICcnfVxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy53ZWVrZGF5c31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGB0aW1lX2ludGVydmFscy4ke3RpbWVJbnRlcnZhbEluZGV4fS53ZWVrZGF5c2AsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFycmF5RmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXkpID0+IERBWVNfT0ZfVEhFX1dFRUsuaW5jbHVkZXMoZGF5LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgZGF5IG9mIHRoZSB3ZWVrJ1xuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJtdXRlLXRpbWluZy13ZWVrZGF5c1wiXG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLndlZWtkYXlzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBtb25kYXksIHR1ZXNkYXk6dGh1cnNkYXlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF5cyBvZiB0aGUgbW9udGhcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRheXMgb2YgdGhlIG1vbnRoLCAxLTMxLCBvZiBhIG1vbnRoLiBOZWdhdGl2ZSB2YWx1ZXMgY2FuIGJlIHVzZWQgdG8gcmVwcmVzZW50IGRheXMgd2hpY2ggYmVnaW4gYXQgdGhlIGVuZCBvZiB0aGUgbW9udGhcIlxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy5kYXlzX29mX21vbnRofVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LmRheXNfb2ZfbW9udGg/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgdGltZV9pbnRlcnZhbHMuJHt0aW1lSW50ZXJ2YWxJbmRleH0uZGF5c19vZl9tb250aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFycmF5RmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkRGF5ID0gcGFyc2VJbnQoZGF5LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkRGF5ID4gLTMxICYmIHBhcnNlZERheSA8IDApIHx8IChwYXJzZWREYXkgPiAwICYmIHBhcnNlZERheSA8IDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBkYXknXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLmRheXNfb2ZfbW9udGh9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDEsIDE0OjE2LCAtMVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm11dGUtdGltaW5nLWRheXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9udGhzXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBtb250aHMgb2YgdGhlIHllYXIgaW4gZWl0aGVyIG51bWVyaWNhbCBvciB0aGUgZnVsbCBjYWxlbmRhciBtb250aFwiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/Lm1vbnRoc31cbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy5tb250aHM/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgdGltZV9pbnRlcnZhbHMuJHt0aW1lSW50ZXJ2YWxJbmRleH0ubW9udGhzYCwge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQXJyYXlGaWVsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vbnRoKSA9PiBNT05USFMuaW5jbHVkZXMobW9udGgpIHx8IChwYXJzZUludChtb250aCwgMTApIDwgMTMgJiYgcGFyc2VJbnQobW9udGgsIDEwKSA+IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgbW9udGgnXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDE6MywgbWF5OmF1Z3VzdCwgZGVjZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSByZWFjdC1ob29rLWZvcm0gZG9lc24ndCBoYW5kbGUgbmVzdGVkIGZpZWxkIGFycmF5cyB3ZWxsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpbWVJbnRlcnZhbC5tb250aHN9XG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm11dGUtdGltaW5nLW1vbnRoc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJZZWFyc1wiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LnllYXJzfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LnllYXJzPy5tZXNzYWdlID8/ICcnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYHRpbWVfaW50ZXJ2YWxzLiR7dGltZUludGVydmFsSW5kZXh9LnllYXJzYCwge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB2YWxpZGF0ZUFycmF5RmllbGQodmFsdWUsICh5ZWFyKSA9PiAvXlxcZHs0fSQvLnRlc3QoeWVhciksICdJbnZhbGlkIHllYXInKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDIwMjE6MjAyMiwgMjAzMFwiXG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLnllYXJzfVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJtdXRlLXRpbWluZy15ZWFyc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVGltZUludGVydmFsKHRpbWVJbnRlcnZhbEluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZSB0aW1lIGludGVydmFsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVUaW1lSW50ZXJ2YWxCdXR0b259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgYWRkVGltZUludGVydmFsKGRlZmF1bHRUaW1lSW50ZXJ2YWwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIGFub3RoZXIgdGltZSBpbnRlcnZhbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvPlxuICAgIDwvRmllbGRTZXQ+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQwMHB4O1xuICBgLFxuICB0aW1lSW50ZXJ2YWxMZWdlbmQ6IGNzc2BcbiAgICBsZWdlbmQge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgYCxcbiAgdGltZUludGVydmFsU2VjdGlvbjogY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHJlbW92ZVRpbWVJbnRlcnZhbEJ1dHRvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZpZWxkQXJyYXksIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IE11dGVUaW1pbmdGaWVsZHMgfSBmcm9tICcuLi8uLi90eXBlcy9tdXRlLXRpbWluZy1mb3JtJztcbmltcG9ydCB7IEZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5saW5lRmllbGQsIElucHV0LCBCdXR0b24sIEljb25CdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbnRlcnZhbEluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBNdXRlVGltaW5nVGltZVJhbmdlOiBGQzxQcm9wcz4gPSAoeyBpbnRlcnZhbEluZGV4IH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCB7IHJlZ2lzdGVyLCBmb3JtU3RhdGUgfSA9IHVzZUZvcm1Db250ZXh0PE11dGVUaW1pbmdGaWVsZHM+KCk7XG5cbiAgY29uc3Qge1xuICAgIGZpZWxkczogdGltZVJhbmdlcyxcbiAgICBhcHBlbmQ6IGFkZFRpbWVSYW5nZSxcbiAgICByZW1vdmU6IHJlbW92ZVRpbWVSYW5nZSxcbiAgfSA9IHVzZUZpZWxkQXJyYXk8TXV0ZVRpbWluZ0ZpZWxkcz4oe1xuICAgIG5hbWU6IGB0aW1lX2ludGVydmFscy4ke2ludGVydmFsSW5kZXh9LnRpbWVzYCxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGVUaW1lID0gKHRpbWVTdHJpbmc6IHN0cmluZykgPT4ge1xuICAgIGlmICghdGltZVN0cmluZykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IFtob3VyLCBtaW51dGVzXSA9IHRpbWVTdHJpbmcuc3BsaXQoJzonKS5tYXAoKHgpID0+IHBhcnNlSW50KHgsIDEwKSk7XG4gICAgY29uc3QgaXNIb3VyVmFsaWQgPSBob3VyID49IDAgJiYgaG91ciA8IDI1O1xuICAgIGNvbnN0IGlzTWludXRlVmFsaWQgPSBtaW51dGVzID4gLTEgJiYgbWludXRlcyA8IDYwO1xuICAgIGNvbnN0IGlzVGltZVZhbGlkID0gaG91ciA9PT0gMjQgPyBtaW51dGVzID09PSAwIDogaXNIb3VyVmFsaWQgJiYgaXNNaW51dGVWYWxpZDtcblxuICAgIHJldHVybiBpc1RpbWVWYWxpZCB8fCAnVGltZSBpcyBpbnZhbGlkJztcbiAgfTtcblxuICBjb25zdCBmb3JtRXJyb3JzID0gZm9ybVN0YXRlLmVycm9ycy50aW1lX2ludGVydmFscz8uW2ludGVydmFsSW5kZXhdO1xuICBjb25zdCB0aW1lUmFuZ2VJbnZhbGlkID0gZm9ybUVycm9ycz8udGltZXM/LnNvbWUoKHZhbHVlKSA9PiB2YWx1ZT8uc3RhcnRfdGltZSB8fCB2YWx1ZT8uZW5kX3RpbWUpID8/IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGaWVsZFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWVsZH1cbiAgICAgICAgbGFiZWw9XCJUaW1lIHJhbmdlXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgdGltZSBpbmNsdXNpdmUgb2YgdGhlIHN0YXJ0aW5nIHRpbWUgYW5kIGV4Y2x1c2l2ZSBvZiB0aGUgZW5kIHRpbWUgaW4gVVRDXCJcbiAgICAgICAgaW52YWxpZD17dGltZVJhbmdlSW52YWxpZH1cbiAgICAgICAgZXJyb3I9e3RpbWVSYW5nZUludmFsaWQgPyAnVGltZXMgbXVzdCBiZSBiZXR3ZWVuIDAwOjAwIGFuZCAyNDowMCBVVEMnIDogJyd9XG4gICAgICA+XG4gICAgICAgIDw+XG4gICAgICAgICAge3RpbWVSYW5nZXMubWFwKCh0aW1lUmFuZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVSYW5nZX0ga2V5PXt0aW1lUmFuZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlN0YXJ0IHRpbWVcIiBpbnZhbGlkPXshIWZvcm1FcnJvcnM/LnRpbWVzPy5baW5kZXhdPy5zdGFydF90aW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGB0aW1lX2ludGVydmFscy4ke2ludGVydmFsSW5kZXh9LnRpbWVzLiR7aW5kZXh9LnN0YXJ0X3RpbWVgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVSYW5nZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcmVhY3QtaG9vay1mb3JtIGRvZXNuJ3QgaGFuZGxlIG5lc3RlZCBmaWVsZCBhcnJheXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZVJhbmdlLnN0YXJ0X3RpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJISDpNTVwiXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJtdXRlLXRpbWluZy1zdGFydHMtYXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkVuZCB0aW1lXCIgaW52YWxpZD17ISFmb3JtRXJyb3JzPy50aW1lcz8uW2luZGV4XT8uZW5kX3RpbWV9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYHRpbWVfaW50ZXJ2YWxzLiR7aW50ZXJ2YWxJbmRleH0udGltZXMuJHtpbmRleH0uZW5kX3RpbWVgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVSYW5nZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcmVhY3QtaG9vay1mb3JtIGRvZXNuJ3QgaGFuZGxlIG5lc3RlZCBmaWVsZCBhcnJheXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZVJhbmdlLmVuZF90aW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSEg6TU1cIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibXV0ZS10aW1pbmctZW5kcy1hdFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlVGltZVJhbmdlfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1JlbW92ZSd9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eyd0cmFzaC1hbHQnfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVGltZVJhbmdlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRpbWVSYW5nZX1cbiAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBpY29uPXsncGx1cyd9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRpbWVSYW5nZSh7IHN0YXJ0X3RpbWU6ICcnLCBlbmRfdGltZTogJycgfSl9XG4gICAgICA+XG4gICAgICAgIEFkZCBhbm90aGVyIHRpbWUgcmFuZ2VcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBmaWVsZDogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIGAsXG4gIHRpbWVSYW5nZTogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHRpbWVSYW5nZUlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDEyMHB4O1xuICBgLFxuICBkZWxldGVUaW1lUmFuZ2U6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygxKX0gMCAwICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbiAgYWRkVGltZVJhbmdlOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzLCBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmZ1bmN0aW9uIGlzQWxlcnRNYW5hZ2VyU291cmNlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfHxcbiAgICAhIWdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzKCkuZmluZCgoZHMpID0+IGRzLm5hbWUgPT09IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpXG4gICk7XG59XG5cbi8qIHRoaXMgd2lsbCByZXR1cm4gYW0gbmFtZSBlaXRoZXIgZnJvbSBxdWVyeSBwYXJhbXMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGEgZGVmYXVsdCAoZ3JhZmFuYSkuXG4gKlxuICogZmFsbGJhY2tVcmwgLSBpZiBwcm92aWRlZCwgd2lsbCByZWRpcmVjdCB0byB0aGlzIHVybCBpZiBhbGVydG1hbmFnZXIgcHJvdmlkZWQgaW4gcXVlcnkgbm8gbG9uZ2VyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk6IFtzdHJpbmcgfCB1bmRlZmluZWQsIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHZvaWRdIHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCB1cGRhdGVRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghaXNBbGVydE1hbmFnZXJTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogbnVsbCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlUXVlcnlQYXJhbXNdXG4gICk7XG5cbiAgY29uc3QgcXVlcnlTb3VyY2UgPSBxdWVyeVBhcmFtc1tBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldO1xuXG4gIGlmIChxdWVyeVNvdXJjZSAmJiB0eXBlb2YgcXVlcnlTb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzQWxlcnRNYW5hZ2VyU291cmNlKHF1ZXJ5U291cmNlKSkge1xuICAgICAgcmV0dXJuIFtxdWVyeVNvdXJjZSwgdXBkYXRlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uIGV4aXN0aW5nIGFsZXJ0bWFuYWdlclxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG4gICAgfVxuICB9XG4gIGNvbnN0IHN0b3JlU291cmNlID0gc3RvcmUuZ2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKHN0b3JlU291cmNlICYmIHR5cGVvZiBzdG9yZVNvdXJjZSA9PT0gJ3N0cmluZycgJiYgaXNBbGVydE1hbmFnZXJTb3VyY2Uoc3RvcmVTb3VyY2UpKSB7XG4gICAgdXBkYXRlKHN0b3JlU291cmNlKTtcbiAgICByZXR1cm4gW3N0b3JlU291cmNlLCB1cGRhdGVdO1xuICB9XG5cbiAgcmV0dXJuIFtHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IHsgTXV0ZVRpbWVJbnRlcnZhbCwgVGltZUludGVydmFsIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgb21pdEJ5LCBpc1VuZGVmaW5lZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBNdXRlVGltaW5nRmllbGRzLCBNdXRlVGltaW5nSW50ZXJ2YWxGaWVsZHMgfSBmcm9tICcuLi90eXBlcy9tdXRlLXRpbWluZy1mb3JtJztcblxuZXhwb3J0IGNvbnN0IERBWVNfT0ZfVEhFX1dFRUsgPSBbJ21vbmRheScsICd0dWVzZGF5JywgJ3dlZG5lc2RheScsICd0aHVyc2RheScsICdmcmlkYXknLCAnc2F0dXJkYXknLCAnc3VuZGF5J107XG5cbmV4cG9ydCBjb25zdCBNT05USFMgPSBbXG4gICdqYW51YXJ5JyxcbiAgJ2ZlYnJ1YXJ5JyxcbiAgJ21hcmNoJyxcbiAgJ2FwcmlsJyxcbiAgJ21heScsXG4gICdqdW5lJyxcbiAgJ2p1bHknLFxuICAnYXVndXN0JyxcbiAgJ3NlcHRlbWJlcicsXG4gICdvY3RvYmVyJyxcbiAgJ25vdmVtYmVyJyxcbiAgJ2RlY2VtYmVyJyxcbl07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VGltZUludGVydmFsOiBNdXRlVGltaW5nSW50ZXJ2YWxGaWVsZHMgPSB7XG4gIHRpbWVzOiBbeyBzdGFydF90aW1lOiAnJywgZW5kX3RpbWU6ICcnIH1dLFxuICB3ZWVrZGF5czogJycsXG4gIGRheXNfb2ZfbW9udGg6ICcnLFxuICBtb250aHM6ICcnLFxuICB5ZWFyczogJycsXG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVBcnJheUZpZWxkID0gKHZhbHVlOiBzdHJpbmcsIHZhbGlkYXRlVmFsdWU6IChpbnB1dDogc3RyaW5nKSA9PiBib29sZWFuLCBpbnZhbGlkVGV4dDogc3RyaW5nKSA9PiB7XG4gIGlmICh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICB2YWx1ZVxuICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAubWFwKCh4KSA9PiB4LnRyaW0oKSlcbiAgICAgICAgLmV2ZXJ5KChlbnRyeSkgPT4gZW50cnkuc3BsaXQoJzonKS5ldmVyeSh2YWxpZGF0ZVZhbHVlKSkgfHwgaW52YWxpZFRleHRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb252ZXJ0U3RyaW5nVG9BcnJheSA9IChzdHI6IHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyID8gc3RyLnNwbGl0KCcsJykubWFwKChzKSA9PiBzLnRyaW0oKSkgOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTXV0ZVRpbWluZyA9IChmaWVsZHM6IE11dGVUaW1pbmdGaWVsZHMpOiBNdXRlVGltZUludGVydmFsID0+IHtcbiAgY29uc3QgdGltZUludGVydmFsczogVGltZUludGVydmFsW10gPSBmaWVsZHMudGltZV9pbnRlcnZhbHMubWFwKFxuICAgICh7IHRpbWVzLCB3ZWVrZGF5cywgZGF5c19vZl9tb250aCwgbW9udGhzLCB5ZWFycyB9KSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHtcbiAgICAgICAgdGltZXM6IHRpbWVzLmZpbHRlcigoeyBzdGFydF90aW1lLCBlbmRfdGltZSB9KSA9PiAhIXN0YXJ0X3RpbWUgJiYgISFlbmRfdGltZSksXG4gICAgICAgIHdlZWtkYXlzOiBjb252ZXJ0U3RyaW5nVG9BcnJheSh3ZWVrZGF5cyk/Lm1hcCgodikgPT4gdi50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgZGF5c19vZl9tb250aDogY29udmVydFN0cmluZ1RvQXJyYXkoZGF5c19vZl9tb250aCksXG4gICAgICAgIG1vbnRoczogY29udmVydFN0cmluZ1RvQXJyYXkobW9udGhzKSxcbiAgICAgICAgeWVhcnM6IGNvbnZlcnRTdHJpbmdUb0FycmF5KHllYXJzKSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBvbWl0QnkoaW50ZXJ2YWwsIGlzVW5kZWZpbmVkKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWVsZHMubmFtZSxcbiAgICB0aW1lX2ludGVydmFsczogdGltZUludGVydmFscyxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIlJvdXRlIiwiUmVkaXJlY3QiLCJTd2l0Y2giLCJNdXRlVGltaW5nRm9ybSIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJ1c2VEaXNwYXRjaCIsInVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIiwiZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24iLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJBbGVydCIsIkxvYWRpbmdQbGFjZWhvbGRlciIsInVzZVF1ZXJ5UGFyYW1zIiwiTXV0ZVRpbWluZ3MiLCJxdWVyeVBhcmFtcyIsImRpc3BhdGNoIiwiYWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsImFtQ29uZmlncyIsInN0YXRlIiwiZmV0Y2hDb25maWciLCJyZXN1bHQiLCJlcnJvciIsImxvYWRpbmciLCJjb25maWciLCJhbGVydG1hbmFnZXJfY29uZmlnIiwiZ2V0TXV0ZVRpbWluZ0J5TmFtZSIsImlkIiwibXV0ZV90aW1lX2ludGVydmFscyIsImZpbmQiLCJuYW1lIiwibWVzc2FnZSIsIm11dGVUaW1pbmciLCJTdHJpbmciLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJ1c2VTZWxlY3RvciIsIkFsZXJ0aW5nUGFnZVdyYXBwZXIiLCJjaGlsZHJlbiIsInBhZ2VJZCIsImlzTG9hZGluZyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJ1c2VNZW1vIiwiRmllbGQiLCJGaWVsZFNldCIsIklucHV0IiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsInVzZVN0eWxlczIiLCJGb3JtUHJvdmlkZXIiLCJ1c2VGb3JtIiwiY3NzIiwiQWxlcnRNYW5hZ2VyUGlja2VyIiwidXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwiY3JlYXRlTXV0ZVRpbWluZyIsImRlZmF1bHRUaW1lSW50ZXJ2YWwiLCJtYWtlQU1MaW5rIiwicmVuYW1lTXV0ZVRpbWluZ3MiLCJNdXRlVGltaW5nVGltZUludGVydmFsIiwidXNlRGVmYXVsdFZhbHVlcyIsImRlZmF1bHRWYWx1ZXMiLCJ0aW1lX2ludGVydmFscyIsImludGVydmFscyIsIm1hcCIsImludGVydmFsIiwidGltZXMiLCJ3ZWVrZGF5cyIsImpvaW4iLCJkYXlzX29mX21vbnRoIiwibW9udGhzIiwieWVhcnMiLCJzaG93RXJyb3IiLCJzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZGVmYXVsdEFtQ29ydGV4Q29uZmlnIiwidGVtcGxhdGVfZmlsZXMiLCJmb3JtQXBpIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJuZXdNdXRlVGltaW5nIiwibXV0ZVRpbWluZ3MiLCJmaWx0ZXIiLCJuZXdDb25maWciLCJyb3V0ZSIsIm9sZENvbmZpZyIsInN1Y2Nlc3NNZXNzYWdlIiwicmVkaXJlY3RQYXRoIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwidmFsdWUiLCJleGlzdGluZ011dGVUaW1pbmciLCJsZW5ndGgiLCJpbnB1dCIsInN1Ym1pdEJ1dHRvbiIsInRoZW1lIiwic3BhY2luZyIsInVzZUZvcm1Db250ZXh0IiwidXNlRmllbGRBcnJheSIsIkRBWVNfT0ZfVEhFX1dFRUsiLCJNT05USFMiLCJ2YWxpZGF0ZUFycmF5RmllbGQiLCJNdXRlVGltaW5nVGltZVJhbmdlIiwiZmllbGRzIiwidGltZUludGVydmFscyIsImFwcGVuZCIsImFkZFRpbWVJbnRlcnZhbCIsInJlbW92ZSIsInJlbW92ZVRpbWVJbnRlcnZhbCIsInRpbWVJbnRlcnZhbExlZ2VuZCIsInRpbWVJbnRlcnZhbCIsInRpbWVJbnRlcnZhbEluZGV4IiwidGltZUludGVydmFsU2VjdGlvbiIsImRheSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJwYXJzZWREYXkiLCJwYXJzZUludCIsIm1vbnRoIiwieWVhciIsInRlc3QiLCJyZW1vdmVUaW1lSW50ZXJ2YWxCdXR0b24iLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwic2Vjb25kYXJ5IiwiSW5saW5lRmllbGRSb3ciLCJJbmxpbmVGaWVsZCIsIkljb25CdXR0b24iLCJpbnRlcnZhbEluZGV4IiwidGltZVJhbmdlcyIsImFkZFRpbWVSYW5nZSIsInJlbW92ZVRpbWVSYW5nZSIsInZhbGlkYXRlVGltZSIsInRpbWVTdHJpbmciLCJob3VyIiwibWludXRlcyIsInNwbGl0IiwieCIsImlzSG91clZhbGlkIiwiaXNNaW51dGVWYWxpZCIsImlzVGltZVZhbGlkIiwiZm9ybUVycm9ycyIsInRpbWVSYW5nZUludmFsaWQiLCJzb21lIiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwiZmllbGQiLCJ0aW1lUmFuZ2UiLCJpbmRleCIsInRpbWVSYW5nZUlucHV0IiwiZGVsZXRlVGltZVJhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcmUiLCJBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSIsIkFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSIsImdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsImlzQWxlcnRNYW5hZ2VyU291cmNlIiwiZHMiLCJ1cGRhdGVRdWVyeVBhcmFtcyIsInVwZGF0ZSIsImRlbGV0ZSIsInNldCIsInF1ZXJ5U291cmNlIiwidW5kZWZpbmVkIiwic3RvcmVTb3VyY2UiLCJnZXQiLCJvbWl0QnkiLCJpc1VuZGVmaW5lZCIsInZhbGlkYXRlVmFsdWUiLCJpbnZhbGlkVGV4dCIsInRyaW0iLCJldmVyeSIsImVudHJ5IiwiY29udmVydFN0cmluZ1RvQXJyYXkiLCJzdHIiLCJzIiwidiJdLCJzb3VyY2VSb290IjoiIn0=
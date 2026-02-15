"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingAdmin"],{

/***/ "./public/app/features/alerting/unified/Admin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Admin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_admin_AlertmanagerConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/admin/AlertmanagerConfig.tsx");
/* harmony import */ var _components_admin_ExternalAlertmanagers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/admin/ExternalAlertmanagers.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _AlertingPageWrapper;







function Admin() {
  return _AlertingPageWrapper || (_AlertingPageWrapper = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_1__.AlertingPageWrapper, {
    pageId: "alerting-admin",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_admin_AlertmanagerConfig__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "test-id": "admin-alertmanagerconfig"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_admin_ExternalAlertmanagers__WEBPACK_IMPORTED_MODULE_3__.ExternalAlertmanagers, {
      "test-id": "admin-externalalertmanagers"
    })]
  }));
}

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

/***/ "./public/app/features/alerting/unified/components/admin/AddAlertManagerModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAlertManagerModal": () => (/* binding */ AddAlertManagerModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Icon;






const AddAlertManagerModal = ({
  alertmanagers,
  onChangeAlertmanagerConfig,
  onClose
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    alertmanagers: alertmanagers
  }), [alertmanagers]);

  const modalTitle = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.modalTitle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "bell",
      className: styles.modalIcon
    }), _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      children: "Add Alertmanager"
    }))]
  });

  const onSubmit = values => {
    onChangeAlertmanagerConfig(values.alertmanagers.map(am => cleanAlertmanagerUrl(am.url)));
    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: modalTitle,
    isOpen: true,
    onDismiss: onClose,
    className: styles.modal,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.description,
      children: "We use a service discovery method to find existing Alertmanagers for a given URL."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: onSubmit,
      defaultValues: defaultValues,
      children: ({
        register,
        control,
        errors
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldArray, {
          control: control,
          name: "alertmanagers",
          children: ({
            fields,
            append,
            remove
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: styles.fieldArray,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: styles.bold,
              children: "Source url"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: styles.muted,
              children: "Authentication can be done via URL (e.g. user:password@myalertmanager.com) and only the Alertmanager v2 API is supported. The suffix is added internally, there is no need to specify it."
            }), fields.map((field, index) => {
              var _errors$alertmanagers;

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                invalid: !!(errors !== null && errors !== void 0 && (_errors$alertmanagers = errors.alertmanagers) !== null && _errors$alertmanagers !== void 0 && _errors$alertmanagers[index]),
                error: "Field is required",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                  className: styles.input,
                  defaultValue: field.url
                }, register(`alertmanagers.${index}.url`, {
                  required: true
                }), {
                  placeholder: "http://localhost:9093",
                  addonAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    "aria-label": "Remove alertmanager",
                    type: "button",
                    onClick: () => remove(index),
                    variant: "destructive",
                    className: styles.destroyInputRow,
                    children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                      name: "trash-alt"
                    }))
                  })
                }))
              }, `${field.id}-${index}`);
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "button",
              variant: "secondary",
              onClick: () => append({
                url: ''
              }),
              children: "Add URL"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onSubmit: () => onSubmit,
            children: "Add Alertmanagers"
          })
        })]
      })
    })]
  });
};

function cleanAlertmanagerUrl(url) {
  return url.replace(/\/$/, '').replace(/\/api\/v[1|2]\/alerts/i, '');
}

const getStyles = theme => {
  const muted = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    color: ${theme.colors.text.secondary};
  `;
  return {
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
        margin-bottom: ${theme.spacing(2)};
      `, muted),
    muted: muted,
    bold: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-weight: ${theme.typography.fontWeightBold};
    `,
    modal: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css``,
    modalIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(muted, _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
        margin-right: ${theme.spacing(1)};
      `),
    modalTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
    `,
    input: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-bottom: ${theme.spacing(1)};
      margin-right: ${theme.spacing(1)};
    `,
    inputRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
    `,
    destroyInputRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      padding: ${theme.spacing(1)};
    `,
    fieldArray: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-bottom: ${theme.spacing(4)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/admin/AlertmanagerConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertmanagerConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;














function AlertmanagerConfig() {
  var _Button;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_3__.useAlertManagerSourceName)();
  const [showConfirmDeleteAMConfig, setShowConfirmDeleteAMConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    loading: isDeleting
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.deleteAMConfig);
  const {
    loading: isSaving
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.saveAMConfig);
  const readOnly = alertManagerSourceName ? (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName) : false;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const configRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const {
    result: config,
    loading: isLoadingConfig,
    error: loadingError
  } = alertManagerSourceName && configRequests[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_9__.initialAsyncRequestState;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);

  const resetConfig = () => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.deleteAlertManagerConfigAction)(alertManagerSourceName));
    }

    setShowConfirmDeleteAMConfig(false);
  };

  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    configJSON: config ? JSON.stringify(config, null, 2) : ''
  }), [config]);
  const loading = isDeleting || isLoadingConfig || isSaving;

  const onSubmit = values => {
    if (alertManagerSourceName && config) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.updateAlertManagerConfigAction)({
        newConfig: JSON.parse(values.configJSON),
        oldConfig: config,
        alertManagerSourceName,
        successMessage: 'Alertmanager configuration updated.',
        refetch: true
      }));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_4__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName
    }), loadingError && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager configuration",
      children: loadingError.message || 'Unknown error.'
    }), isDeleting && alertManagerSourceName !== _utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "info",
      title: "Resetting Alertmanager configuration",
      children: "It might take a while..."
    }))), alertManagerSourceName && config && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
      defaultValues: defaultValues,
      onSubmit: onSubmit,
      children: ({
        register,
        errors
      }) => {
        var _errors$configJSON;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            disabled: loading,
            label: "Configuration",
            invalid: !!errors.configJSON,
            error: (_errors$configJSON = errors.configJSON) === null || _errors$configJSON === void 0 ? void 0 : _errors$configJSON.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TextArea, Object.assign({}, register('configJSON', {
              required: {
                value: true,
                message: 'Required.'
              },
              validate: v => {
                try {
                  JSON.parse(v);
                  return true;
                } catch (e) {
                  return e.message;
                }
              }
            }), {
              id: "configuration",
              rows: 25
            }))
          }), readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Configuration",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("pre", {
              "data-testid": "readonly-config",
              children: defaultValues.configJSON
            })
          }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              variant: "primary",
              disabled: loading,
              children: "Save"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "button",
              disabled: loading,
              variant: "destructive",
              onClick: () => setShowConfirmDeleteAMConfig(true),
              children: "Reset configuration"
            })]
          }), !!showConfirmDeleteAMConfig && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
            isOpen: true,
            title: "Reset Alertmanager configuration",
            body: `Are you sure you want to reset configuration ${alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME ? 'for the Grafana Alertmanager' : `for "${alertManagerSourceName}"`}? Contact points and notification policies will be reset to their defaults.`,
            confirmText: "Yes, reset configuration",
            onConfirm: resetConfig,
            onDismiss: () => setShowConfirmDeleteAMConfig(false)
          })]
        });
      }
    }, defaultValues.configJSON)]
  });
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-bottom: ${theme.spacing(4)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/admin/ExternalAlertmanagers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalAlertmanagers": () => (/* binding */ ExternalAlertmanagers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _AddAlertManagerModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/admin/AddAlertManagerModal.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _hooks_useExternalAmSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useExternalAmSelector.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _th, _th2, _Icon, _Icon2, _Icon3;












const alertmanagerChoices = [{
  value: 'internal',
  label: 'Only Internal'
}, {
  value: 'external',
  label: 'Only External'
}, {
  value: 'all',
  label: 'Both internal and external'
}];
const ExternalAlertmanagers = () => {
  var _Button;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [modalState, setModalState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    open: false,
    payload: [{
      url: ''
    }]
  });
  const [deleteModalState, setDeleteModalState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    open: false,
    index: 0
  });
  const externalAlertManagers = (0,_hooks_useExternalAmSelector__WEBPACK_IMPORTED_MODULE_7__.useExternalAmSelector)();
  const alertmanagersChoice = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$unifiedAlertin;

    return (_state$unifiedAlertin = state.unifiedAlerting.externalAlertmanagers.alertmanagerConfig.result) === null || _state$unifiedAlertin === void 0 ? void 0 : _state$unifiedAlertin.alertmanagersChoice;
  });
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchExternalAlertmanagersAction)());
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchExternalAlertmanagersConfigAction)());
    const interval = setInterval(() => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchExternalAlertmanagersAction)()), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const onDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => {
    // to delete we need to filter the alertmanager from the list and repost
    const newList = (externalAlertManagers !== null && externalAlertManagers !== void 0 ? externalAlertManagers : []).filter((am, i) => i !== index).map(am => {
      return am.url;
    });
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.addExternalAlertmanagersAction)({
      alertmanagers: newList,
      alertmanagersChoice: alertmanagersChoice !== null && alertmanagersChoice !== void 0 ? alertmanagersChoice : 'all'
    }));
    setDeleteModalState({
      open: false,
      index: 0
    });
  }, [externalAlertManagers, dispatch, alertmanagersChoice]);
  const onEdit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const ams = externalAlertManagers ? [...externalAlertManagers] : [{
      url: ''
    }];
    setModalState(state => Object.assign({}, state, {
      open: true,
      payload: ams
    }));
  }, [setModalState, externalAlertManagers]);
  const onOpenModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setModalState(state => {
      const ams = externalAlertManagers ? [...externalAlertManagers, {
        url: ''
      }] : [{
        url: ''
      }];
      return Object.assign({}, state, {
        open: true,
        payload: ams
      });
    });
  }, [externalAlertManagers]);
  const onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setModalState(state => Object.assign({}, state, {
      open: false
    }));
  }, [setModalState]);

  const onChangeAlertmanagerChoice = alertmanagersChoice => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.addExternalAlertmanagersAction)({
      alertmanagers: externalAlertManagers.map(am => am.url),
      alertmanagersChoice
    }));
  };

  const onChangeAlertmanagers = alertmanagers => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.addExternalAlertmanagersAction)({
      alertmanagers,
      alertmanagersChoice: alertmanagersChoice !== null && alertmanagersChoice !== void 0 ? alertmanagersChoice : 'all'
    }));
  };

  const getStatusColor = status => {
    switch (status) {
      case 'active':
        return theme.colors.success.main;

      case 'pending':
        return theme.colors.warning.main;

      default:
        return theme.colors.error.main;
    }
  };

  const noAlertmanagers = (externalAlertManagers === null || externalAlertManagers === void 0 ? void 0 : externalAlertManagers.length) === 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      children: "External Alertmanagers"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.muted,
      children: "You can have your Grafana managed alerts be delivered to one or many external Alertmanager(s) in addition to the internal Alertmanager by specifying their URLs below."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.actions,
      children: !noAlertmanagers && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "button",
        onClick: onOpenModal,
        children: "Add Alertmanager"
      })
    }), noAlertmanagers ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "You have not added any external alertmanagers",
      onClick: onOpenModal,
      buttonTitle: "Add Alertmanager",
      buttonIcon: "bell-slash"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)('filter-table form-inline filter-table--hover', styles.table),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
            children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
              children: "Url"
            })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
              children: "Status"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
              style: {
                width: '2%'
              },
              children: "Action"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
          children: externalAlertManagers === null || externalAlertManagers === void 0 ? void 0 : externalAlertManagers.map((am, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: styles.url,
                  children: am.url
                }), am.actualUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                  content: `Discovered ${am.actualUrl} from ${am.url}`,
                  theme: "info",
                  children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                    name: "info-circle"
                  }))
                }) : null]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  name: "heart",
                  style: {
                    color: getStatusColor(am.status)
                  },
                  title: am.status
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
                  children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    variant: "secondary",
                    type: "button",
                    onClick: onEdit,
                    "aria-label": "Edit alertmanager",
                    children: _Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "pen"
                    }))
                  })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    variant: "destructive",
                    "aria-label": "Remove alertmanager",
                    type: "button",
                    onClick: () => setDeleteModalState({
                      open: true,
                      index
                    }),
                    children: _Icon3 || (_Icon3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "trash-alt"
                    }))
                  })]
                })
              })]
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "Send alerts to",
          description: "Sets which Alertmanager will handle your alerts. Internal (Grafana built in Alertmanager), External (All Alertmanagers configured above), or both.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
            options: alertmanagerChoices,
            value: alertmanagersChoice,
            onChange: value => onChangeAlertmanagerChoice(value)
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
      isOpen: deleteModalState.open,
      title: "Remove Alertmanager",
      body: "Are you sure you want to remove this Alertmanager",
      confirmText: "Remove",
      onConfirm: () => onDelete(deleteModalState.index),
      onDismiss: () => setDeleteModalState({
        open: false,
        index: 0
      })
    }), modalState.open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AddAlertManagerModal__WEBPACK_IMPORTED_MODULE_5__.AddAlertManagerModal, {
      onClose: onCloseModal,
      alertmanagers: modalState.payload,
      onChangeAlertmanagerConfig: onChangeAlertmanagers
    })]
  });
};

const getStyles = theme => ({
  url: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-right: ${theme.spacing(1)};
  `,
  muted: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    color: ${theme.colors.text.secondary};
  `,
  actions: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-top: ${theme.spacing(2)};
    display: flex;
    justify-content: flex-end;
  `,
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
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

/***/ "./public/app/features/alerting/unified/hooks/useExternalAmSelector.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useExternalAmSelector": () => (/* binding */ useExternalAmSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");

const SUFFIX_REGEX = /\/api\/v[1|2]\/alerts/i;
function useExternalAmSelector() {
  const discoveredAlertmanagers = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => {
    var _state$unifiedAlertin;

    return (_state$unifiedAlertin = state.unifiedAlerting.externalAlertmanagers.discoveredAlertmanagers.result) === null || _state$unifiedAlertin === void 0 ? void 0 : _state$unifiedAlertin.data;
  });
  const alertmanagerConfig = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => {
    var _state$unifiedAlertin2;

    return (_state$unifiedAlertin2 = state.unifiedAlerting.externalAlertmanagers.alertmanagerConfig.result) === null || _state$unifiedAlertin2 === void 0 ? void 0 : _state$unifiedAlertin2.alertmanagers;
  });

  if (!discoveredAlertmanagers || !alertmanagerConfig) {
    return [];
  }

  const enabledAlertmanagers = [];
  const droppedAlertmanagers = discoveredAlertmanagers === null || discoveredAlertmanagers === void 0 ? void 0 : discoveredAlertmanagers.droppedAlertManagers.map(am => ({
    url: am.url.replace(SUFFIX_REGEX, ''),
    status: 'dropped',
    actualUrl: am.url
  }));

  for (const url of alertmanagerConfig) {
    if (discoveredAlertmanagers.activeAlertManagers.length === 0) {
      enabledAlertmanagers.push({
        url: url,
        status: 'pending',
        actualUrl: ''
      });
    } else {
      let found = false;

      for (const activeAM of discoveredAlertmanagers.activeAlertManagers) {
        if (activeAM.url === `${url}/api/v2/alerts`) {
          found = true;
          enabledAlertmanagers.push({
            url: activeAM.url.replace(SUFFIX_REGEX, ''),
            status: 'active',
            actualUrl: activeAM.url
          });
        }
      }

      if (!found) {
        enabledAlertmanagers.push({
          url: url,
          status: 'pending',
          actualUrl: ''
        });
      }
    }
  }

  return [...enabledAlertmanagers, ...droppedAlertmanagers];
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0IsQ0FBQ0ksSUFBckIsQ0FBMEI7QUFDeEJwSixZQUFBQSxHQUFHLEVBQUVzSixRQUFRLENBQUN0SixHQUFULENBQWFrQixPQUFiLENBQXFCMkgsWUFBckIsRUFBbUMsRUFBbkMsQ0FEbUI7QUFFeEI3QixZQUFBQSxNQUFNLEVBQUUsUUFGZ0I7QUFHeEJTLFlBQUFBLFNBQVMsRUFBRTZCLFFBQVEsQ0FBQ3RKO0FBSEksV0FBMUI7QUFLRDtBQUNGOztBQUNELFVBQUksQ0FBQ3FKLEtBQUwsRUFBWTtBQUNWTCxRQUFBQSxvQkFBb0IsQ0FBQ0ksSUFBckIsQ0FBMEI7QUFDeEJwSixVQUFBQSxHQUFHLEVBQUVBLEdBRG1CO0FBRXhCZ0gsVUFBQUEsTUFBTSxFQUFFLFNBRmdCO0FBR3hCUyxVQUFBQSxTQUFTLEVBQUU7QUFIYSxTQUExQjtBQUtEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPLENBQUMsR0FBR3VCLG9CQUFKLEVBQTBCLEdBQUdDLG9CQUE3QixDQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL0FkbWluLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FkbWluL0FkZEFsZXJ0TWFuYWdlck1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYWRtaW4vQWxlcnRtYW5hZ2VyQ29uZmlnLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYWRtaW4vRXh0ZXJuYWxBbGVydG1hbmFnZXJzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VFeHRlcm5hbEFtU2VsZWN0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFsZXJ0aW5nUGFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlcic7XG5pbXBvcnQgQWxlcnRtYW5hZ2VyQ29uZmlnIGZyb20gJy4vY29tcG9uZW50cy9hZG1pbi9BbGVydG1hbmFnZXJDb25maWcnO1xuaW1wb3J0IHsgRXh0ZXJuYWxBbGVydG1hbmFnZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL2FkbWluL0V4dGVybmFsQWxlcnRtYW5hZ2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnRpbmdQYWdlV3JhcHBlciBwYWdlSWQ9XCJhbGVydGluZy1hZG1pblwiPlxuICAgICAgPEFsZXJ0bWFuYWdlckNvbmZpZyB0ZXN0LWlkPVwiYWRtaW4tYWxlcnRtYW5hZ2VyY29uZmlnXCIgLz5cbiAgICAgIDxFeHRlcm5hbEFsZXJ0bWFuYWdlcnMgdGVzdC1pZD1cImFkbWluLWV4dGVybmFsYWxlcnRtYW5hZ2Vyc1wiIC8+XG4gICAgPC9BbGVydGluZ1BhZ2VXcmFwcGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZUlkOiBzdHJpbmc7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydGluZ1BhZ2VXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgcGFnZUlkLCBpc0xvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKFxuICAgIHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpLFxuICAgIHBhZ2VJZFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT57Y2hpbGRyZW59PC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZpZWxkQXJyYXksIEZvcm0sIEljb24sIElucHV0LCBNb2RhbCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlclVybCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgYWxlcnRtYW5hZ2VyczogQWxlcnRtYW5hZ2VyVXJsW107XG4gIG9uQ2hhbmdlQWxlcnRtYW5hZ2VyQ29uZmlnOiAoYWxlcnRtYW5hZ2Vyczogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBBZGRBbGVydE1hbmFnZXJNb2RhbDogRkM8UHJvcHM+ID0gKHsgYWxlcnRtYW5hZ2Vycywgb25DaGFuZ2VBbGVydG1hbmFnZXJDb25maWcsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRlZmF1bHRWYWx1ZXM6IFJlY29yZDxzdHJpbmcsIEFsZXJ0bWFuYWdlclVybFtdPiA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGFsZXJ0bWFuYWdlcnM6IGFsZXJ0bWFuYWdlcnMsXG4gICAgfSksXG4gICAgW2FsZXJ0bWFuYWdlcnNdXG4gICk7XG5cbiAgY29uc3QgbW9kYWxUaXRsZSA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9PlxuICAgICAgPEljb24gbmFtZT1cImJlbGxcIiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEljb259IC8+XG4gICAgICA8aDM+QWRkIEFsZXJ0bWFuYWdlcjwvaDM+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBBbGVydG1hbmFnZXJVcmxbXT4pID0+IHtcbiAgICBvbkNoYW5nZUFsZXJ0bWFuYWdlckNvbmZpZyh2YWx1ZXMuYWxlcnRtYW5hZ2Vycy5tYXAoKGFtKSA9PiBjbGVhbkFsZXJ0bWFuYWdlclVybChhbS51cmwpKSk7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHRpdGxlPXttb2RhbFRpdGxlfSBpc09wZW49e3RydWV9IG9uRGlzbWlzcz17b25DbG9zZX0gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgIFdlIHVzZSBhIHNlcnZpY2UgZGlzY292ZXJ5IG1ldGhvZCB0byBmaW5kIGV4aXN0aW5nIEFsZXJ0bWFuYWdlcnMgZm9yIGEgZ2l2ZW4gVVJMLlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9PlxuICAgICAgICB7KHsgcmVnaXN0ZXIsIGNvbnRyb2wsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGaWVsZEFycmF5IGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJhbGVydG1hbmFnZXJzXCI+XG4gICAgICAgICAgICAgIHsoeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkQXJyYXl9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5Tb3VyY2UgdXJsPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm11dGVkfT5cbiAgICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb24gY2FuIGJlIGRvbmUgdmlhIFVSTCAoZS5nLiB1c2VyOnBhc3N3b3JkQG15YWxlcnRtYW5hZ2VyLmNvbSkgYW5kIG9ubHkgdGhlIEFsZXJ0bWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB2MiBBUEkgaXMgc3VwcG9ydGVkLiBUaGUgc3VmZml4IGlzIGFkZGVkIGludGVybmFsbHksIHRoZXJlIGlzIG5vIG5lZWQgdG8gc3BlY2lmeSBpdC5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnM/LmFsZXJ0bWFuYWdlcnM/LltpbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj1cIkZpZWxkIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7ZmllbGQuaWR9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmllbGQudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYGFsZXJ0bWFuYWdlcnMuJHtpbmRleH0udXJsYCwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwOi8vbG9jYWxob3N0OjkwOTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIGFsZXJ0bWFuYWdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzdHJveUlucHV0Um93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0cmFzaC1hbHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBhcHBlbmQoeyB1cmw6ICcnIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgQWRkIFVSTFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0ZpZWxkQXJyYXk+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uU3VibWl0PXsoKSA9PiBvblN1Ym1pdH0+QWRkIEFsZXJ0bWFuYWdlcnM8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBjbGVhbkFsZXJ0bWFuYWdlclVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFwvJC8sICcnKS5yZXBsYWNlKC9cXC9hcGlcXC92WzF8Ml1cXC9hbGVydHMvaSwgJycpO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgY29uc3QgbXV0ZWQgPSBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgYDtcbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbjogY3goXG4gICAgICBjc3NgXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBgLFxuICAgICAgbXV0ZWRcbiAgICApLFxuICAgIG11dGVkOiBtdXRlZCxcbiAgICBib2xkOiBjc3NgXG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkfTtcbiAgICBgLFxuICAgIG1vZGFsOiBjc3NgYCxcbiAgICBtb2RhbEljb246IGN4KFxuICAgICAgbXV0ZWQsXG4gICAgICBjc3NgXG4gICAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICAgIGBcbiAgICApLFxuICAgIG1vZGFsVGl0bGU6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYCxcbiAgICBpbnB1dDogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGlucHV0Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGAsXG4gICAgZGVzdHJveUlucHV0Um93OiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgZmllbGRBcnJheTogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIENvbmZpcm1Nb2RhbCwgVGV4dEFyZWEsIEhvcml6b250YWxHcm91cCwgRmllbGQsIEZvcm0sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJQaWNrZXIgfSBmcm9tICcuLi9BbGVydE1hbmFnZXJQaWNrZXInO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSwgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgZGVsZXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uLFxuICBmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbixcbiAgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgnO1xuXG5pbnRlcmZhY2UgRm9ybVZhbHVlcyB7XG4gIGNvbmZpZ0pTT046IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnRtYW5hZ2VyQ29uZmlnKCk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk7XG4gIGNvbnN0IFtzaG93Q29uZmlybURlbGV0ZUFNQ29uZmlnLCBzZXRTaG93Q29uZmlybURlbGV0ZUFNQ29uZmlnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBsb2FkaW5nOiBpc0RlbGV0aW5nIH0gPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRlbGV0ZUFNQ29uZmlnKTtcbiAgY29uc3QgeyBsb2FkaW5nOiBpc1NhdmluZyB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zYXZlQU1Db25maWcpO1xuICBjb25zdCByZWFkT25seSA9IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPyBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSA6IGZhbHNlO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgY29uZmlnUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFtQ29uZmlncyk7XG5cbiAgY29uc3Qge1xuICAgIHJlc3VsdDogY29uZmlnLFxuICAgIGxvYWRpbmc6IGlzTG9hZGluZ0NvbmZpZyxcbiAgICBlcnJvcjogbG9hZGluZ0Vycm9yLFxuICB9ID0gKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgY29uZmlnUmVxdWVzdHNbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbihhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSk7XG4gICAgfVxuICB9LCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgZGlzcGF0Y2hdKTtcblxuICBjb25zdCByZXNldENvbmZpZyA9ICgpID0+IHtcbiAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgICAgZGlzcGF0Y2goZGVsZXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpKTtcbiAgICB9XG4gICAgc2V0U2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHVzZU1lbW8oXG4gICAgKCk6IEZvcm1WYWx1ZXMgPT4gKHtcbiAgICAgIGNvbmZpZ0pTT046IGNvbmZpZyA/IEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMikgOiAnJyxcbiAgICB9KSxcbiAgICBbY29uZmlnXVxuICApO1xuXG4gIGNvbnN0IGxvYWRpbmcgPSBpc0RlbGV0aW5nIHx8IGlzTG9hZGluZ0NvbmZpZyB8fCBpc1NhdmluZztcblxuICBjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXM6IEZvcm1WYWx1ZXMpID0+IHtcbiAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBjb25maWcpIHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oe1xuICAgICAgICAgIG5ld0NvbmZpZzogSlNPTi5wYXJzZSh2YWx1ZXMuY29uZmlnSlNPTiksXG4gICAgICAgICAgb2xkQ29uZmlnOiBjb25maWcsXG4gICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgICAgICAgICBzdWNjZXNzTWVzc2FnZTogJ0FsZXJ0bWFuYWdlciBjb25maWd1cmF0aW9uIHVwZGF0ZWQuJyxcbiAgICAgICAgICByZWZldGNoOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyIGN1cnJlbnQ9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfSAvPlxuICAgICAge2xvYWRpbmdFcnJvciAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBsb2FkaW5nIEFsZXJ0bWFuYWdlciBjb25maWd1cmF0aW9uXCI+XG4gICAgICAgICAge2xvYWRpbmdFcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge2lzRGVsZXRpbmcgJiYgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAhPT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIlJlc2V0dGluZyBBbGVydG1hbmFnZXIgY29uZmlndXJhdGlvblwiPlxuICAgICAgICAgIEl0IG1pZ2h0IHRha2UgYSB3aGlsZS4uLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIHthbGVydE1hbmFnZXJTb3VyY2VOYW1lICYmIGNvbmZpZyAmJiAoXG4gICAgICAgIDxGb3JtIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0ga2V5PXtkZWZhdWx0VmFsdWVzLmNvbmZpZ0pTT059PlxuICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuY29uZmlnSlNPTn1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuY29uZmlnSlNPTj8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb25maWdKU09OJywge1xuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezI1fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkNvbmZpZ3VyYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxwcmUgZGF0YS10ZXN0aWQ9XCJyZWFkb25seS1jb25maWdcIj57ZGVmYXVsdFZhbHVlcy5jb25maWdKU09OfTwvcHJlPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwicHJpbWFyeVwiIGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshIXNob3dDb25maXJtRGVsZXRlQU1Db25maWcgJiYgKFxuICAgICAgICAgICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICAgICAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzZXQgQWxlcnRtYW5hZ2VyIGNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCBjb25maWd1cmF0aW9uICR7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUVcbiAgICAgICAgICAgICAgICAgICAgICA/ICdmb3IgdGhlIEdyYWZhbmEgQWxlcnRtYW5hZ2VyJ1xuICAgICAgICAgICAgICAgICAgICAgIDogYGZvciBcIiR7YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cImBcbiAgICAgICAgICAgICAgICAgIH0/IENvbnRhY3QgcG9pbnRzIGFuZCBub3RpZmljYXRpb24gcG9saWNpZXMgd2lsbCBiZSByZXNldCB0byB0aGVpciBkZWZhdWx0cy5gfVxuICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ9XCJZZXMsIHJlc2V0IGNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgb25Db25maXJtPXtyZXNldENvbmZpZ31cbiAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0U2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENvbmZpcm1Nb2RhbCxcbiAgRmllbGQsXG4gIEhvcml6b250YWxHcm91cCxcbiAgSWNvbixcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgVG9vbHRpcCxcbiAgdXNlU3R5bGVzMixcbiAgdXNlVGhlbWUyLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgeyBBZGRBbGVydE1hbmFnZXJNb2RhbCB9IGZyb20gJy4vQWRkQWxlcnRNYW5hZ2VyTW9kYWwnO1xuaW1wb3J0IHtcbiAgYWRkRXh0ZXJuYWxBbGVydG1hbmFnZXJzQWN0aW9uLFxuICBmZXRjaEV4dGVybmFsQWxlcnRtYW5hZ2Vyc0FjdGlvbixcbiAgZmV0Y2hFeHRlcm5hbEFsZXJ0bWFuYWdlcnNDb25maWdBY3Rpb24sXG59IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRXh0ZXJuYWxBbVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlRXh0ZXJuYWxBbVNlbGVjdG9yJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuXG5jb25zdCBhbGVydG1hbmFnZXJDaG9pY2VzID0gW1xuICB7IHZhbHVlOiAnaW50ZXJuYWwnLCBsYWJlbDogJ09ubHkgSW50ZXJuYWwnIH0sXG4gIHsgdmFsdWU6ICdleHRlcm5hbCcsIGxhYmVsOiAnT25seSBFeHRlcm5hbCcgfSxcbiAgeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnQm90aCBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxBbGVydG1hbmFnZXJzID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW21vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgcGF5bG9hZDogW3sgdXJsOiAnJyB9XSB9KTtcbiAgY29uc3QgW2RlbGV0ZU1vZGFsU3RhdGUsIHNldERlbGV0ZU1vZGFsU3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgaW5kZXg6IDAgfSk7XG5cbiAgY29uc3QgZXh0ZXJuYWxBbGVydE1hbmFnZXJzID0gdXNlRXh0ZXJuYWxBbVNlbGVjdG9yKCk7XG4gIGNvbnN0IGFsZXJ0bWFuYWdlcnNDaG9pY2UgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5leHRlcm5hbEFsZXJ0bWFuYWdlcnMuYWxlcnRtYW5hZ2VyQ29uZmlnLnJlc3VsdD8uYWxlcnRtYW5hZ2Vyc0Nob2ljZVxuICApO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hFeHRlcm5hbEFsZXJ0bWFuYWdlcnNBY3Rpb24oKSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hFeHRlcm5hbEFsZXJ0bWFuYWdlcnNDb25maWdBY3Rpb24oKSk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBkaXNwYXRjaChmZXRjaEV4dGVybmFsQWxlcnRtYW5hZ2Vyc0FjdGlvbigpKSwgNTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgLy8gdG8gZGVsZXRlIHdlIG5lZWQgdG8gZmlsdGVyIHRoZSBhbGVydG1hbmFnZXIgZnJvbSB0aGUgbGlzdCBhbmQgcmVwb3N0XG4gICAgICBjb25zdCBuZXdMaXN0ID0gKGV4dGVybmFsQWxlcnRNYW5hZ2VycyA/PyBbXSlcbiAgICAgICAgLmZpbHRlcigoYW0sIGkpID0+IGkgIT09IGluZGV4KVxuICAgICAgICAubWFwKChhbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhbS51cmw7XG4gICAgICAgIH0pO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFkZEV4dGVybmFsQWxlcnRtYW5hZ2Vyc0FjdGlvbih7IGFsZXJ0bWFuYWdlcnM6IG5ld0xpc3QsIGFsZXJ0bWFuYWdlcnNDaG9pY2U6IGFsZXJ0bWFuYWdlcnNDaG9pY2UgPz8gJ2FsbCcgfSlcbiAgICAgICk7XG4gICAgICBzZXREZWxldGVNb2RhbFN0YXRlKHsgb3BlbjogZmFsc2UsIGluZGV4OiAwIH0pO1xuICAgIH0sXG4gICAgW2V4dGVybmFsQWxlcnRNYW5hZ2VycywgZGlzcGF0Y2gsIGFsZXJ0bWFuYWdlcnNDaG9pY2VdXG4gICk7XG5cbiAgY29uc3Qgb25FZGl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGFtcyA9IGV4dGVybmFsQWxlcnRNYW5hZ2VycyA/IFsuLi5leHRlcm5hbEFsZXJ0TWFuYWdlcnNdIDogW3sgdXJsOiAnJyB9XTtcbiAgICBzZXRNb2RhbFN0YXRlKChzdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIHBheWxvYWQ6IGFtcyxcbiAgICB9KSk7XG4gIH0sIFtzZXRNb2RhbFN0YXRlLCBleHRlcm5hbEFsZXJ0TWFuYWdlcnNdKTtcblxuICBjb25zdCBvbk9wZW5Nb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRNb2RhbFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgYW1zID0gZXh0ZXJuYWxBbGVydE1hbmFnZXJzID8gWy4uLmV4dGVybmFsQWxlcnRNYW5hZ2VycywgeyB1cmw6ICcnIH1dIDogW3sgdXJsOiAnJyB9XTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICBwYXlsb2FkOiBhbXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbZXh0ZXJuYWxBbGVydE1hbmFnZXJzXSk7XG5cbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE1vZGFsU3RhdGUoKHN0YXRlKSA9PiAoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICB9KSk7XG4gIH0sIFtzZXRNb2RhbFN0YXRlXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VBbGVydG1hbmFnZXJDaG9pY2UgPSAoYWxlcnRtYW5hZ2Vyc0Nob2ljZTogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBhZGRFeHRlcm5hbEFsZXJ0bWFuYWdlcnNBY3Rpb24oeyBhbGVydG1hbmFnZXJzOiBleHRlcm5hbEFsZXJ0TWFuYWdlcnMubWFwKChhbSkgPT4gYW0udXJsKSwgYWxlcnRtYW5hZ2Vyc0Nob2ljZSB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VBbGVydG1hbmFnZXJzID0gKGFsZXJ0bWFuYWdlcnM6IHN0cmluZ1tdKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkRXh0ZXJuYWxBbGVydG1hbmFnZXJzQWN0aW9uKHsgYWxlcnRtYW5hZ2VycywgYWxlcnRtYW5hZ2Vyc0Nob2ljZTogYWxlcnRtYW5hZ2Vyc0Nob2ljZSA/PyAnYWxsJyB9KSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3RhdHVzQ29sb3IgPSAoc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgcmV0dXJuIHRoZW1lLmNvbG9ycy5zdWNjZXNzLm1haW47XG5cbiAgICAgIGNhc2UgJ3BlbmRpbmcnOlxuICAgICAgICByZXR1cm4gdGhlbWUuY29sb3JzLndhcm5pbmcubWFpbjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoZW1lLmNvbG9ycy5lcnJvci5tYWluO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBub0FsZXJ0bWFuYWdlcnMgPSBleHRlcm5hbEFsZXJ0TWFuYWdlcnM/Lmxlbmd0aCA9PT0gMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQ+RXh0ZXJuYWwgQWxlcnRtYW5hZ2VyczwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm11dGVkfT5cbiAgICAgICAgWW91IGNhbiBoYXZlIHlvdXIgR3JhZmFuYSBtYW5hZ2VkIGFsZXJ0cyBiZSBkZWxpdmVyZWQgdG8gb25lIG9yIG1hbnkgZXh0ZXJuYWwgQWxlcnRtYW5hZ2VyKHMpIGluIGFkZGl0aW9uIHRvIHRoZVxuICAgICAgICBpbnRlcm5hbCBBbGVydG1hbmFnZXIgYnkgc3BlY2lmeWluZyB0aGVpciBVUkxzIGJlbG93LlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxuICAgICAgICB7IW5vQWxlcnRtYW5hZ2VycyAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25PcGVuTW9kYWx9PlxuICAgICAgICAgICAgQWRkIEFsZXJ0bWFuYWdlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7bm9BbGVydG1hbmFnZXJzID8gKFxuICAgICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgYWRkZWQgYW55IGV4dGVybmFsIGFsZXJ0bWFuYWdlcnNcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uT3Blbk1vZGFsfVxuICAgICAgICAgIGJ1dHRvblRpdGxlPVwiQWRkIEFsZXJ0bWFuYWdlclwiXG4gICAgICAgICAgYnV0dG9uSWNvbj1cImJlbGwtc2xhc2hcIlxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtjeCgnZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lIGZpbHRlci10YWJsZS0taG92ZXInLCBzdHlsZXMudGFibGUpfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Vcmw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzIlJyB9fT5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2V4dGVybmFsQWxlcnRNYW5hZ2Vycz8ubWFwKChhbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudXJsfT57YW0udXJsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7YW0uYWN0dWFsVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD17YERpc2NvdmVyZWQgJHthbS5hY3R1YWxVcmx9IGZyb20gJHthbS51cmx9YH0gdGhlbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVhcnRcIiBzdHlsZT17eyBjb2xvcjogZ2V0U3RhdHVzQ29sb3IoYW0uc3RhdHVzKSB9fSB0aXRsZT17YW0uc3RhdHVzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkVkaXR9IGFyaWEtbGFiZWw9XCJFZGl0IGFsZXJ0bWFuYWdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicGVuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIGFsZXJ0bWFuYWdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREZWxldGVNb2RhbFN0YXRlKHsgb3BlbjogdHJ1ZSwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0cmFzaC1hbHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZW5kIGFsZXJ0cyB0b1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU2V0cyB3aGljaCBBbGVydG1hbmFnZXIgd2lsbCBoYW5kbGUgeW91ciBhbGVydHMuIEludGVybmFsIChHcmFmYW5hIGJ1aWx0IGluIEFsZXJ0bWFuYWdlciksIEV4dGVybmFsIChBbGwgQWxlcnRtYW5hZ2VycyBjb25maWd1cmVkIGFib3ZlKSwgb3IgYm90aC5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2FsZXJ0bWFuYWdlckNob2ljZXN9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2FsZXJ0bWFuYWdlcnNDaG9pY2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2VBbGVydG1hbmFnZXJDaG9pY2UodmFsdWUhKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgaXNPcGVuPXtkZWxldGVNb2RhbFN0YXRlLm9wZW59XG4gICAgICAgIHRpdGxlPVwiUmVtb3ZlIEFsZXJ0bWFuYWdlclwiXG4gICAgICAgIGJvZHk9XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgQWxlcnRtYW5hZ2VyXCJcbiAgICAgICAgY29uZmlybVRleHQ9XCJSZW1vdmVcIlxuICAgICAgICBvbkNvbmZpcm09eygpID0+IG9uRGVsZXRlKGRlbGV0ZU1vZGFsU3RhdGUuaW5kZXgpfVxuICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldERlbGV0ZU1vZGFsU3RhdGUoeyBvcGVuOiBmYWxzZSwgaW5kZXg6IDAgfSl9XG4gICAgICAvPlxuICAgICAge21vZGFsU3RhdGUub3BlbiAmJiAoXG4gICAgICAgIDxBZGRBbGVydE1hbmFnZXJNb2RhbFxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VNb2RhbH1cbiAgICAgICAgICBhbGVydG1hbmFnZXJzPXttb2RhbFN0YXRlLnBheWxvYWR9XG4gICAgICAgICAgb25DaGFuZ2VBbGVydG1hbmFnZXJDb25maWc9e29uQ2hhbmdlQWxlcnRtYW5hZ2Vyc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHVybDogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgbXV0ZWQ6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICBgLFxuICBhY3Rpb25zOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGAsXG4gIHRhYmxlOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzLCBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmZ1bmN0aW9uIGlzQWxlcnRNYW5hZ2VyU291cmNlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfHxcbiAgICAhIWdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzKCkuZmluZCgoZHMpID0+IGRzLm5hbWUgPT09IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpXG4gICk7XG59XG5cbi8qIHRoaXMgd2lsbCByZXR1cm4gYW0gbmFtZSBlaXRoZXIgZnJvbSBxdWVyeSBwYXJhbXMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGEgZGVmYXVsdCAoZ3JhZmFuYSkuXG4gKlxuICogZmFsbGJhY2tVcmwgLSBpZiBwcm92aWRlZCwgd2lsbCByZWRpcmVjdCB0byB0aGlzIHVybCBpZiBhbGVydG1hbmFnZXIgcHJvdmlkZWQgaW4gcXVlcnkgbm8gbG9uZ2VyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk6IFtzdHJpbmcgfCB1bmRlZmluZWQsIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHZvaWRdIHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCB1cGRhdGVRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghaXNBbGVydE1hbmFnZXJTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogbnVsbCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlUXVlcnlQYXJhbXNdXG4gICk7XG5cbiAgY29uc3QgcXVlcnlTb3VyY2UgPSBxdWVyeVBhcmFtc1tBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldO1xuXG4gIGlmIChxdWVyeVNvdXJjZSAmJiB0eXBlb2YgcXVlcnlTb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzQWxlcnRNYW5hZ2VyU291cmNlKHF1ZXJ5U291cmNlKSkge1xuICAgICAgcmV0dXJuIFtxdWVyeVNvdXJjZSwgdXBkYXRlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uIGV4aXN0aW5nIGFsZXJ0bWFuYWdlclxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG4gICAgfVxuICB9XG4gIGNvbnN0IHN0b3JlU291cmNlID0gc3RvcmUuZ2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKHN0b3JlU291cmNlICYmIHR5cGVvZiBzdG9yZVNvdXJjZSA9PT0gJ3N0cmluZycgJiYgaXNBbGVydE1hbmFnZXJTb3VyY2Uoc3RvcmVTb3VyY2UpKSB7XG4gICAgdXBkYXRlKHN0b3JlU291cmNlKTtcbiAgICByZXR1cm4gW3N0b3JlU291cmNlLCB1cGRhdGVdO1xuICB9XG5cbiAgcmV0dXJuIFtHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBTVUZGSVhfUkVHRVggPSAvXFwvYXBpXFwvdlsxfDJdXFwvYWxlcnRzL2k7XG50eXBlIEFsZXJ0bWFuYWdlckNvbmZpZyA9IHsgdXJsOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nOyBhY3R1YWxVcmw6IHN0cmluZyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRXh0ZXJuYWxBbVNlbGVjdG9yKCk6IEFsZXJ0bWFuYWdlckNvbmZpZ1tdIHwgW10ge1xuICBjb25zdCBkaXNjb3ZlcmVkQWxlcnRtYW5hZ2VycyA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLmV4dGVybmFsQWxlcnRtYW5hZ2Vycy5kaXNjb3ZlcmVkQWxlcnRtYW5hZ2Vycy5yZXN1bHQ/LmRhdGFcbiAgKTtcbiAgY29uc3QgYWxlcnRtYW5hZ2VyQ29uZmlnID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS51bmlmaWVkQWxlcnRpbmcuZXh0ZXJuYWxBbGVydG1hbmFnZXJzLmFsZXJ0bWFuYWdlckNvbmZpZy5yZXN1bHQ/LmFsZXJ0bWFuYWdlcnNcbiAgKTtcblxuICBpZiAoIWRpc2NvdmVyZWRBbGVydG1hbmFnZXJzIHx8ICFhbGVydG1hbmFnZXJDb25maWcpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBlbmFibGVkQWxlcnRtYW5hZ2VyczogQWxlcnRtYW5hZ2VyQ29uZmlnW10gPSBbXTtcbiAgY29uc3QgZHJvcHBlZEFsZXJ0bWFuYWdlcnM6IEFsZXJ0bWFuYWdlckNvbmZpZ1tdID0gZGlzY292ZXJlZEFsZXJ0bWFuYWdlcnM/LmRyb3BwZWRBbGVydE1hbmFnZXJzLm1hcCgoYW0pID0+ICh7XG4gICAgdXJsOiBhbS51cmwucmVwbGFjZShTVUZGSVhfUkVHRVgsICcnKSxcbiAgICBzdGF0dXM6ICdkcm9wcGVkJyxcbiAgICBhY3R1YWxVcmw6IGFtLnVybCxcbiAgfSkpO1xuXG4gIGZvciAoY29uc3QgdXJsIG9mIGFsZXJ0bWFuYWdlckNvbmZpZykge1xuICAgIGlmIChkaXNjb3ZlcmVkQWxlcnRtYW5hZ2Vycy5hY3RpdmVBbGVydE1hbmFnZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZW5hYmxlZEFsZXJ0bWFuYWdlcnMucHVzaCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgICAgYWN0dWFsVXJsOiAnJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGZvciAoY29uc3QgYWN0aXZlQU0gb2YgZGlzY292ZXJlZEFsZXJ0bWFuYWdlcnMuYWN0aXZlQWxlcnRNYW5hZ2Vycykge1xuICAgICAgICBpZiAoYWN0aXZlQU0udXJsID09PSBgJHt1cmx9L2FwaS92Mi9hbGVydHNgKSB7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIGVuYWJsZWRBbGVydG1hbmFnZXJzLnB1c2goe1xuICAgICAgICAgICAgdXJsOiBhY3RpdmVBTS51cmwucmVwbGFjZShTVUZGSVhfUkVHRVgsICcnKSxcbiAgICAgICAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgICAgICAgICBhY3R1YWxVcmw6IGFjdGl2ZUFNLnVybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBlbmFibGVkQWxlcnRtYW5hZ2Vycy5wdXNoKHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgICAgICBhY3R1YWxVcmw6ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gWy4uLmVuYWJsZWRBbGVydG1hbmFnZXJzLCAuLi5kcm9wcGVkQWxlcnRtYW5hZ2Vyc107XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBbGVydGluZ1BhZ2VXcmFwcGVyIiwiQWxlcnRtYW5hZ2VyQ29uZmlnIiwiRXh0ZXJuYWxBbGVydG1hbmFnZXJzIiwiQWRtaW4iLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJ1c2VTZWxlY3RvciIsImNoaWxkcmVuIiwicGFnZUlkIiwiaXNMb2FkaW5nIiwibmF2TW9kZWwiLCJzdGF0ZSIsIm5hdkluZGV4IiwidXNlTWVtbyIsImNzcyIsImN4IiwiQnV0dG9uIiwiRmllbGQiLCJGaWVsZEFycmF5IiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIk1vZGFsIiwidXNlU3R5bGVzMiIsIkFkZEFsZXJ0TWFuYWdlck1vZGFsIiwiYWxlcnRtYW5hZ2VycyIsIm9uQ2hhbmdlQWxlcnRtYW5hZ2VyQ29uZmlnIiwib25DbG9zZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImRlZmF1bHRWYWx1ZXMiLCJtb2RhbFRpdGxlIiwibW9kYWxJY29uIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJtYXAiLCJhbSIsImNsZWFuQWxlcnRtYW5hZ2VyVXJsIiwidXJsIiwibW9kYWwiLCJkZXNjcmlwdGlvbiIsInJlZ2lzdGVyIiwiY29udHJvbCIsImVycm9ycyIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsImZpZWxkQXJyYXkiLCJib2xkIiwibXV0ZWQiLCJmaWVsZCIsImluZGV4IiwiaW5wdXQiLCJyZXF1aXJlZCIsImRlc3Ryb3lJbnB1dFJvdyIsImlkIiwicmVwbGFjZSIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsInNlY29uZGFyeSIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodEJvbGQiLCJpbnB1dFJvdyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWxlcnQiLCJDb25maXJtTW9kYWwiLCJUZXh0QXJlYSIsIkhvcml6b250YWxHcm91cCIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJBbGVydE1hbmFnZXJQaWNrZXIiLCJHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIiwiaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UiLCJ1c2VEaXNwYXRjaCIsImRlbGV0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsImZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwidXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJkaXNwYXRjaCIsImFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwic2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZyIsInNldFNob3dDb25maXJtRGVsZXRlQU1Db25maWciLCJsb2FkaW5nIiwiaXNEZWxldGluZyIsImRlbGV0ZUFNQ29uZmlnIiwiaXNTYXZpbmciLCJzYXZlQU1Db25maWciLCJyZWFkT25seSIsImNvbmZpZ1JlcXVlc3RzIiwiYW1Db25maWdzIiwicmVzdWx0IiwiY29uZmlnIiwiaXNMb2FkaW5nQ29uZmlnIiwiZXJyb3IiLCJsb2FkaW5nRXJyb3IiLCJyZXNldENvbmZpZyIsImNvbmZpZ0pTT04iLCJKU09OIiwic3RyaW5naWZ5IiwibmV3Q29uZmlnIiwicGFyc2UiLCJvbGRDb25maWciLCJzdWNjZXNzTWVzc2FnZSIsInJlZmV0Y2giLCJjb250YWluZXIiLCJtZXNzYWdlIiwidmFsdWUiLCJ2YWxpZGF0ZSIsInYiLCJlIiwidXNlQ2FsbGJhY2siLCJSYWRpb0J1dHRvbkdyb3VwIiwiVG9vbHRpcCIsInVzZVRoZW1lMiIsIkVtcHR5TGlzdENUQSIsImFkZEV4dGVybmFsQWxlcnRtYW5hZ2Vyc0FjdGlvbiIsImZldGNoRXh0ZXJuYWxBbGVydG1hbmFnZXJzQWN0aW9uIiwiZmV0Y2hFeHRlcm5hbEFsZXJ0bWFuYWdlcnNDb25maWdBY3Rpb24iLCJ1c2VFeHRlcm5hbEFtU2VsZWN0b3IiLCJhbGVydG1hbmFnZXJDaG9pY2VzIiwibGFiZWwiLCJtb2RhbFN0YXRlIiwic2V0TW9kYWxTdGF0ZSIsIm9wZW4iLCJwYXlsb2FkIiwiZGVsZXRlTW9kYWxTdGF0ZSIsInNldERlbGV0ZU1vZGFsU3RhdGUiLCJleHRlcm5hbEFsZXJ0TWFuYWdlcnMiLCJhbGVydG1hbmFnZXJzQ2hvaWNlIiwidW5pZmllZEFsZXJ0aW5nIiwiZXh0ZXJuYWxBbGVydG1hbmFnZXJzIiwiYWxlcnRtYW5hZ2VyQ29uZmlnIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvbkRlbGV0ZSIsIm5ld0xpc3QiLCJmaWx0ZXIiLCJpIiwib25FZGl0IiwiYW1zIiwib25PcGVuTW9kYWwiLCJvbkNsb3NlTW9kYWwiLCJvbkNoYW5nZUFsZXJ0bWFuYWdlckNob2ljZSIsIm9uQ2hhbmdlQWxlcnRtYW5hZ2VycyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwic3VjY2VzcyIsIm1haW4iLCJ3YXJuaW5nIiwibm9BbGVydG1hbmFnZXJzIiwibGVuZ3RoIiwiYWN0aW9ucyIsInRhYmxlIiwid2lkdGgiLCJhY3R1YWxVcmwiLCJjb2xvciIsInVzZVF1ZXJ5UGFyYW1zIiwic3RvcmUiLCJBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSIsIkFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSIsImdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzIiwiaXNBbGVydE1hbmFnZXJTb3VyY2UiLCJmaW5kIiwiZHMiLCJuYW1lIiwicXVlcnlQYXJhbXMiLCJ1cGRhdGVRdWVyeVBhcmFtcyIsInVwZGF0ZSIsImRlbGV0ZSIsInNldCIsInF1ZXJ5U291cmNlIiwidW5kZWZpbmVkIiwic3RvcmVTb3VyY2UiLCJnZXQiLCJTVUZGSVhfUkVHRVgiLCJkaXNjb3ZlcmVkQWxlcnRtYW5hZ2VycyIsImRhdGEiLCJlbmFibGVkQWxlcnRtYW5hZ2VycyIsImRyb3BwZWRBbGVydG1hbmFnZXJzIiwiZHJvcHBlZEFsZXJ0TWFuYWdlcnMiLCJhY3RpdmVBbGVydE1hbmFnZXJzIiwicHVzaCIsImZvdW5kIiwiYWN0aXZlQU0iXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewNotificationChannel"],{

/***/ "./public/app/features/alerting/NewNotificationChannelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelForm.tsx");
/* harmony import */ var _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/utils/notificationChannels.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class NewNotificationChannelPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", data => {
      this.props.createNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_6__.transformSubmitData)(Object.assign({}, _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_6__.defaultValues, data)));
    });

    _defineProperty(this, "onTestChannel", data => {
      this.props.testNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_6__.transformTestData)(Object.assign({}, _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_6__.defaultValues, data)));
    });
  }

  componentDidMount() {
    this.props.loadNotificationTypes();
  }

  render() {
    const {
      navModel,
      notificationChannelTypes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
          className: "page-sub-heading",
          children: "New notification channel"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
          onSubmit: this.onSubmit,
          validateOn: "onChange",
          defaultValues: _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_6__.defaultValues,
          maxWidth: 600,
          children: ({
            register,
            errors,
            control,
            getValues,
            watch
          }) => {
            const selectedChannel = notificationChannelTypes.find(c => c.value === getValues().type.value);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_5__.NotificationChannelForm, {
              selectableChannels: (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_6__.mapChannelsToSelectableValue)(notificationChannelTypes, true),
              selectedChannel: selectedChannel,
              onTestChannel: this.onTestChannel,
              register: register,
              errors: errors,
              getValues: getValues,
              control: control,
              watch: watch,
              imageRendererAvailable: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.rendererAvailable,
              resetSecureField: this.props.resetSecureField,
              secureFields: {}
            });
          }
        })]
      })
    });
  }

}

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(state.navIndex, 'channels'),
  notificationChannelTypes: state.notificationChannel.notificationChannelTypes
});

const mapDispatchToProps = {
  createNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_8__.createNotificationChannel,
  loadNotificationTypes: _state_actions__WEBPACK_IMPORTED_MODULE_8__.loadNotificationTypes,
  testNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_8__.testNotificationChannel,
  resetSecureField: _state_reducers__WEBPACK_IMPORTED_MODULE_9__.resetSecureField
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewNotificationChannelPage));

/***/ }),

/***/ "./public/app/features/alerting/components/BasicSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicSettings": () => (/* binding */ BasicSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const BasicSettings = ({
  control,
  currentFormValues,
  errors,
  secureFields,
  selectedChannel,
  channels,
  register,
  resetSecureField
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Name",
      invalid: !!errors.name,
      error: errors.name && errors.name.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('name', {
        required: 'Name is required'
      })))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Type",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        name: "type",
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({
            menuShouldPortal: true
          }, field, {
            options: channels
          }));
        },
        control: control,
        rules: {
          required: true
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__.NotificationChannelOptions, {
      selectedChannelOptions: selectedChannel.options.filter(o => o.required),
      currentFormValues: currentFormValues,
      secureFields: secureFields,
      onResetSecureField: resetSecureField,
      register: register,
      errors: errors,
      control: control
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/ChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelSettings": () => (/* binding */ ChannelSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const ChannelSettings = ({
  control,
  currentFormValues,
  errors,
  selectedChannel,
  secureFields,
  register,
  resetSecureField
}) => {
  var _selectedChannel$info;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CollapsableSection, {
    label: `Optional ${selectedChannel.heading}`,
    isOpen: false,
    children: [selectedChannel.info !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "info",
      title: (_selectedChannel$info = selectedChannel.info) !== null && _selectedChannel$info !== void 0 ? _selectedChannel$info : ''
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__.NotificationChannelOptions, {
      selectedChannelOptions: selectedChannel.options.filter(o => !o.required),
      currentFormValues: currentFormValues,
      register: register,
      errors: errors,
      control: control,
      onResetSecureField: resetSecureField,
      secureFields: secureFields
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationChannelForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationChannelForm": () => (/* binding */ NotificationChannelForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _NotificationSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/components/NotificationSettings.tsx");
/* harmony import */ var _BasicSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/components/BasicSettings.tsx");
/* harmony import */ var _ChannelSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/components/ChannelSettings.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Spinner, _Button, _Button2;










const NotificationChannelForm = ({
  control,
  errors,
  selectedChannel,
  selectableChannels,
  register,
  watch,
  getValues,
  imageRendererAvailable,
  onTestChannel,
  resetSecureField,
  secureFields
}) => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    /*
      Find fields that have dependencies on other fields and removes duplicates.
      Needs to be prefixed with settings.
    */
    const fieldsToWatch = new Set(selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.options.filter(o => o.showWhen.field).map(option => {
      return `settings.${option.showWhen.field}`;
    })) || [];
    watch(['type', 'sendReminder', 'uploadImage', ...fieldsToWatch]);
  }, [selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.options, watch]);
  const currentFormValues = getValues();

  if (!selectedChannel) {
    return _Spinner || (_Spinner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.formContainer,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BasicSettings__WEBPACK_IMPORTED_MODULE_4__.BasicSettings, {
        selectedChannel: selectedChannel,
        channels: selectableChannels,
        secureFields: secureFields,
        resetSecureField: resetSecureField,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), selectedChannel.options.filter(o => !o.required).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelSettings__WEBPACK_IMPORTED_MODULE_5__.ChannelSettings, {
        selectedChannel: selectedChannel,
        secureFields: secureFields,
        resetSecureField: resetSecureField,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_NotificationSettings__WEBPACK_IMPORTED_MODULE_3__.NotificationSettings, {
        imageRendererAvailable: imageRendererAvailable,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formButtons,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "submit",
          children: "Save"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "button",
          variant: "secondary",
          onClick: () => onTestChannel(getValues()),
          children: "Test"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
          href: `${app_core_config__WEBPACK_IMPORTED_MODULE_6__["default"].appSubUrl}/alerting/notifications`,
          children: _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "button",
            variant: "secondary",
            children: "Back"
          }))
        })]
      })
    })]
  });
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => {
  return {
    formContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css``,
    formItem: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      flex-grow: 1;
      padding-top: ${theme.spacing.md};
    `,
    formButtons: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      padding-top: ${theme.spacing.xl};
    `
  };
});

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationChannelOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationChannelOptions": () => (/* binding */ NotificationChannelOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _OptionElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/OptionElement.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const NotificationChannelOptions = ({
  control,
  currentFormValues,
  errors,
  selectedChannelOptions,
  register,
  onResetSecureField,
  secureFields
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: selectedChannelOptions.map((option, index) => {
      var _errors$settings$opti;

      const key = `${option.label}-${index}`; // Some options can be dependent on other options, this determines what is selected in the dependency options
      // I think this needs more thought.

      const selectedOptionValue = currentFormValues[`settings.${option.showWhen.field}`] && currentFormValues[`settings.${option.showWhen.field}`].value;

      if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
        return null;
      }

      if (option.element === 'checkbox') {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register(option.secure ? `secureSettings.${option.propertyName}` : `settings.${option.propertyName}`), {
            label: option.label,
            description: option.description
          }))
        }, key);
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: option.label,
        description: option.description,
        invalid: errors.settings && !!errors.settings[option.propertyName],
        error: errors.settings && ((_errors$settings$opti = errors.settings[option.propertyName]) === null || _errors$settings$opti === void 0 ? void 0 : _errors$settings$opti.message),
        children: secureFields && secureFields[option.propertyName] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          readOnly: true,
          value: "Configured",
          suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: () => onResetSecureField(option.propertyName),
            fill: "text",
            type: "button",
            size: "sm",
            children: "Clear"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OptionElement__WEBPACK_IMPORTED_MODULE_2__.OptionElement, {
          option: option,
          register: register,
          control: control
        })
      }, key);
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettings": () => (/* binding */ NotificationSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InfoBox;






const NotificationSettings = ({
  currentFormValues,
  imageRendererAvailable,
  register
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CollapsableSection, {
    label: "Notification settings",
    isOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('isDefault'), {
        label: "Default",
        description: "Use this notification for all alerts"
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('settings.uploadImage'), {
        label: "Include image",
        description: "Captures an image and include it in the notification"
      }))
    }), currentFormValues.uploadImage && !imageRendererAvailable && (_InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InfoBox, {
      title: "No image renderer available/installed",
      children: "Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('disableResolveMessage'), {
        label: "Disable Resolve Message",
        description: "Disable the resolve message [OK] that is sent when alerting state returns to false"
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('sendReminder'), {
        label: "Send reminders",
        description: "Send additional notifications for triggered alerts"
      }))
    }), currentFormValues.sendReminder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Send reminder every",
        description: "Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m', or 1h etc. Alert reminders are sent after rules are evaluated. A reminder can never be sent more frequently than a configured alert rule evaluation interval.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('frequency'), {
          width: 8
        }))
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/OptionElement.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionElement": () => (/* binding */ OptionElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const OptionElement = ({
  control,
  option,
  register,
  invalid
}) => {
  const modelValue = option.secure ? `secureSettings.${option.propertyName}` : `settings.${option.propertyName}`;

  switch (option.element) {
    case 'input':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`${modelValue}`, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      }), {
        invalid: invalid,
        type: option.inputType,
        placeholder: option.placeholder
      }));

    case 'select':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        control: control,
        name: `${modelValue}`,
        render: _ref => {
          var _option$selectOptions;

          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({
            menuShouldPortal: true
          }, field, {
            options: (_option$selectOptions = option.selectOptions) !== null && _option$selectOptions !== void 0 ? _option$selectOptions : undefined,
            invalid: invalid
          }));
        }
      });

    case 'textarea':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, Object.assign({
        invalid: invalid
      }, register(`${modelValue}`, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      })));

    default:
      console.error('Element not supported', option.element);
      return null;
  }
};

const validateOption = (value, validationRule) => {
  return RegExp(validationRule).test(value) ? true : 'Invalid format';
};

/***/ }),

/***/ "./public/app/features/alerting/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotificationChannel": () => (/* binding */ createNotificationChannel),
/* harmony export */   "getAlertRulesAsync": () => (/* binding */ getAlertRulesAsync),
/* harmony export */   "loadNotificationChannel": () => (/* binding */ loadNotificationChannel),
/* harmony export */   "loadNotificationTypes": () => (/* binding */ loadNotificationTypes),
/* harmony export */   "testNotificationChannel": () => (/* binding */ testNotificationChannel),
/* harmony export */   "togglePauseAlertRule": () => (/* binding */ togglePauseAlertRule),
/* harmony export */   "updateNotificationChannel": () => (/* binding */ updateNotificationChannel)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/index.ts");




function getAlertRulesAsync(options) {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.loadAlertRules)());
    const rules = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/alerts', options);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.loadedAlertRules)(rules));
  };
}
function togglePauseAlertRule(id, options) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alerts/${id}/pause`, options);
    const stateFilter = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getSearchObject().state || 'all';
    dispatch(getAlertRulesAsync({
      state: stateFilter.toString()
    }));
  };
}
function createNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alert-notifications`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification created')));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/alerting/notifications');
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
    }
  };
}
function updateNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/alert-notifications/${data.id}`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification updated')));
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
    }
  };
}
function testNotificationChannel(data) {
  return async (dispatch, getState) => {
    const channel = getState().notificationChannel.notificationChannel;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/alert-notifications/test', Object.assign({
      id: channel.id
    }, data));
  };
}
function loadNotificationTypes() {
  return async dispatch => {
    const alertNotifiers = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifiers`);
    const notificationTypes = alertNotifiers.sort((o1, o2) => {
      if (o1.name > o2.name) {
        return 1;
      }

      return -1;
    });
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setNotificationChannels)(notificationTypes));
  };
}
function loadNotificationChannel(id) {
  return async dispatch => {
    await dispatch(loadNotificationTypes());
    const notificationChannel = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifications/${id}`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.notificationChannelLoaded)(notificationChannel));
  };
}

/***/ }),

/***/ "./public/app/features/alerting/utils/notificationChannels.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultValues": () => (/* binding */ defaultValues),
/* harmony export */   "mapChannelsToSelectableValue": () => (/* binding */ mapChannelsToSelectableValue),
/* harmony export */   "transformSubmitData": () => (/* binding */ transformSubmitData),
/* harmony export */   "transformTestData": () => (/* binding */ transformTestData)
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


const defaultValues = {
  id: -1,
  name: '',
  type: {
    value: 'email',
    label: 'Email'
  },
  sendReminder: false,
  disableResolveMessage: false,
  frequency: '15m',
  settings: {
    uploadImage: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.rendererAvailable,
    autoResolve: true,
    httpMethod: 'POST',
    severity: 'critical'
  },
  secureSettings: {},
  secureFields: {},
  isDefault: false
};
const mapChannelsToSelectableValue = (0,memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])((notificationChannels, includeDescription) => {
  return notificationChannels.map(channel => {
    if (includeDescription) {
      return {
        value: channel.value,
        label: channel.label,
        description: channel.description
      };
    }

    return {
      value: channel.value,
      label: channel.label
    };
  });
});
const transformSubmitData = formData => {
  /*
    Some settings can be options in a select, in order to not save a SelectableValue<T>
    we need to use check if it is a SelectableValue and use its value.
  */
  const settings = Object.fromEntries(Object.entries(formData.settings).map(([key, value]) => {
    return [key, value && value.hasOwnProperty('value') ? value.value : value];
  }));
  return Object.assign({}, defaultValues, formData, {
    frequency: formData.frequency === '' ? defaultValues.frequency : formData.frequency,
    type: formData.type.value,
    settings: Object.assign({}, defaultValues.settings, settings),
    secureSettings: Object.assign({}, formData.secureSettings)
  });
};
const transformTestData = formData => {
  var _formData$frequency;

  return {
    name: formData.name,
    type: formData.type.value,
    frequency: (_formData$frequency = formData.frequency) !== null && _formData$frequency !== void 0 ? _formData$frequency : defaultValues.frequency,
    settings: Object.assign({}, Object.assign(defaultValues.settings, formData.settings)),
    secureSettings: Object.assign({}, formData.secureSettings)
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FGZjtBQUdMeUgsSUFBQUEsU0FBUyx5QkFBRVEsUUFBUSxDQUFDUixTQUFYLHFFQUF3QmxKLGFBQWEsQ0FBQ2tKLFNBSDFDO0FBSUxuRCxJQUFBQSxRQUFRLG9CQUFPNEQsTUFBTSxDQUFDSSxNQUFQLENBQWMvSixhQUFhLENBQUMrRixRQUE1QixFQUFzQzJELFFBQVEsQ0FBQzNELFFBQS9DLENBQVAsQ0FKSDtBQUtMdUQsSUFBQUEsY0FBYyxvQkFBT0ksUUFBUSxDQUFDSixjQUFoQjtBQUxULEdBQVA7QUFPRCxDQVJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvTmV3Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvQmFzaWNTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9DaGFubmVsU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvT3B0aW9uRWxlbWVudC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91dGlscy9ub3RpZmljYXRpb25DaGFubmVscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHtcbiAgZGVmYXVsdFZhbHVlcyxcbiAgbWFwQ2hhbm5lbHNUb1NlbGVjdGFibGVWYWx1ZSxcbiAgdHJhbnNmb3JtU3VibWl0RGF0YSxcbiAgdHJhbnNmb3JtVGVzdERhdGEsXG59IGZyb20gJy4vdXRpbHMvbm90aWZpY2F0aW9uQ2hhbm5lbHMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCwgbG9hZE5vdGlmaWNhdGlvblR5cGVzLCB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsRFRPLCBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgcmVzZXRTZWN1cmVGaWVsZCB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuXG5jbGFzcyBOZXdOb3RpZmljYXRpb25DaGFubmVsUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkTm90aWZpY2F0aW9uVHlwZXMoKTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gKGRhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHtcbiAgICB0aGlzLnByb3BzLmNyZWF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwodHJhbnNmb3JtU3VibWl0RGF0YSh7IC4uLmRlZmF1bHRWYWx1ZXMsIC4uLmRhdGEgfSkpO1xuICB9O1xuXG4gIG9uVGVzdENoYW5uZWwgPSAoZGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4ge1xuICAgIHRoaXMucHJvcHMudGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwodHJhbnNmb3JtVGVzdERhdGEoeyAuLi5kZWZhdWx0VmFsdWVzLCAuLi5kYXRhIH0pKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZNb2RlbCwgbm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+TmV3IG5vdGlmaWNhdGlvbiBjaGFubmVsPC9oMj5cbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gdmFsaWRhdGVPbj1cIm9uQ2hhbmdlXCIgZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc30gbWF4V2lkdGg9ezYwMH0+XG4gICAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycywgY29udHJvbCwgZ2V0VmFsdWVzLCB3YXRjaCB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hhbm5lbCA9IG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcy5maW5kKChjKSA9PiBjLnZhbHVlID09PSBnZXRWYWx1ZXMoKS50eXBlLnZhbHVlKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25DaGFubmVsRm9ybVxuICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZUNoYW5uZWxzPXttYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlKG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENoYW5uZWw9e3NlbGVjdGVkQ2hhbm5lbH1cbiAgICAgICAgICAgICAgICAgIG9uVGVzdENoYW5uZWw9e3RoaXMub25UZXN0Q2hhbm5lbH1cbiAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVzPXtnZXRWYWx1ZXN9XG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgd2F0Y2g9e3dhdGNofVxuICAgICAgICAgICAgICAgICAgaW1hZ2VSZW5kZXJlckF2YWlsYWJsZT17Y29uZmlnLnJlbmRlcmVyQXZhaWxhYmxlfVxuICAgICAgICAgICAgICAgICAgcmVzZXRTZWN1cmVGaWVsZD17dGhpcy5wcm9wcy5yZXNldFNlY3VyZUZpZWxkfVxuICAgICAgICAgICAgICAgICAgc2VjdXJlRmllbGRzPXt7fX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnY2hhbm5lbHMnKSxcbiAgbm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzOiBzdGF0ZS5ub3RpZmljYXRpb25DaGFubmVsLm5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGNyZWF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gIGxvYWROb3RpZmljYXRpb25UeXBlcyxcbiAgdGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihOZXdOb3RpZmljYXRpb25DaGFubmVsUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBJbnB1dCwgSW5wdXRDb250cm9sLCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9ucyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcywgTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMge1xuICBzZWxlY3RlZENoYW5uZWw6IE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlO1xuICBjaGFubmVsczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBzZWN1cmVGaWVsZHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHM7XG4gIHJlc2V0U2VjdXJlRmllbGQ6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJhc2ljU2V0dGluZ3M6IEZDPFByb3BzPiA9ICh7XG4gIGNvbnRyb2wsXG4gIGN1cnJlbnRGb3JtVmFsdWVzLFxuICBlcnJvcnMsXG4gIHNlY3VyZUZpZWxkcyxcbiAgc2VsZWN0ZWRDaGFubmVsLFxuICBjaGFubmVscyxcbiAgcmVnaXN0ZXIsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGaWVsZCBsYWJlbD1cIk5hbWVcIiBpbnZhbGlkPXshIWVycm9ycy5uYW1lfSBlcnJvcj17ZXJyb3JzLm5hbWUgJiYgZXJyb3JzLm5hbWUubWVzc2FnZX0+XG4gICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiAnTmFtZSBpcyByZXF1aXJlZCcgfSl9IC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkIGxhYmVsPVwiVHlwZVwiPlxuICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IDxTZWxlY3QgbWVudVNob3VsZFBvcnRhbCB7Li4uZmllbGR9IG9wdGlvbnM9e2NoYW5uZWxzfSAvPn1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gby5yZXF1aXJlZCl9XG4gICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQsIENvbGxhcHNhYmxlU2VjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsT3B0aW9ucyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsRm9ybSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbDogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbm5lbFNldHRpbmdzOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIHNlY3VyZUZpZWxkcyxcbiAgcmVnaXN0ZXIsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNhYmxlU2VjdGlvbiBsYWJlbD17YE9wdGlvbmFsICR7c2VsZWN0ZWRDaGFubmVsLmhlYWRpbmd9YH0gaXNPcGVuPXtmYWxzZX0+XG4gICAgICB7c2VsZWN0ZWRDaGFubmVsLmluZm8gIT09ICcnICYmIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT17c2VsZWN0ZWRDaGFubmVsLmluZm8gPz8gJyd9IC8+fVxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpfVxuICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAvPlxuICAgIDwvQ29sbGFwc2FibGVTZWN0aW9uPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm1BUEksIEhvcml6b250YWxHcm91cCwgc3R5bGVzRmFjdG9yeSwgdXNlVGhlbWUsIFNwaW5uZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsVHlwZSwgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNldHRpbmdzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25TZXR0aW5ncyc7XG5pbXBvcnQgeyBCYXNpY1NldHRpbmdzIH0gZnJvbSAnLi9CYXNpY1NldHRpbmdzJztcbmltcG9ydCB7IENoYW5uZWxTZXR0aW5ncyB9IGZyb20gJy4vQ2hhbm5lbFNldHRpbmdzJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuXG5pbnRlcmZhY2UgUHJvcHNcbiAgZXh0ZW5kcyBQaWNrPEZvcm1BUEk8Tm90aWZpY2F0aW9uQ2hhbm5lbERUTz4sICdjb250cm9sJyB8ICdlcnJvcnMnIHwgJ3JlZ2lzdGVyJyB8ICd3YXRjaCcgfCAnZ2V0VmFsdWVzJz4ge1xuICBzZWxlY3RhYmxlQ2hhbm5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgc2VsZWN0ZWRDaGFubmVsPzogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGU6IGJvb2xlYW47XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xuICBvblRlc3RDaGFubmVsOiAoZGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzXG4gIGV4dGVuZHMgUGljazxGb3JtQVBJPE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8+LCAnY29udHJvbCcgfCAnZXJyb3JzJyB8ICdyZWdpc3Rlcic+IHtcbiAgY3VycmVudEZvcm1WYWx1ZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE87XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DaGFubmVsRm9ybTogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIHNlbGVjdGFibGVDaGFubmVscyxcbiAgcmVnaXN0ZXIsXG4gIHdhdGNoLFxuICBnZXRWYWx1ZXMsXG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGUsXG4gIG9uVGVzdENoYW5uZWwsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG4gIHNlY3VyZUZpZWxkcyxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLypcbiAgICAgIEZpbmQgZmllbGRzIHRoYXQgaGF2ZSBkZXBlbmRlbmNpZXMgb24gb3RoZXIgZmllbGRzIGFuZCByZW1vdmVzIGR1cGxpY2F0ZXMuXG4gICAgICBOZWVkcyB0byBiZSBwcmVmaXhlZCB3aXRoIHNldHRpbmdzLlxuICAgICovXG4gICAgY29uc3QgZmllbGRzVG9XYXRjaCA9XG4gICAgICBuZXcgU2V0KFxuICAgICAgICBzZWxlY3RlZENoYW5uZWw/Lm9wdGlvbnNcbiAgICAgICAgICAuZmlsdGVyKChvKSA9PiBvLnNob3dXaGVuLmZpZWxkKVxuICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBzZXR0aW5ncy4ke29wdGlvbi5zaG93V2hlbi5maWVsZH1gO1xuICAgICAgICAgIH0pXG4gICAgICApIHx8IFtdO1xuICAgIHdhdGNoKFsndHlwZScsICdzZW5kUmVtaW5kZXInLCAndXBsb2FkSW1hZ2UnLCAuLi5maWVsZHNUb1dhdGNoXSk7XG4gIH0sIFtzZWxlY3RlZENoYW5uZWw/Lm9wdGlvbnMsIHdhdGNoXSk7XG5cbiAgY29uc3QgY3VycmVudEZvcm1WYWx1ZXMgPSBnZXRWYWx1ZXMoKTtcblxuICBpZiAoIXNlbGVjdGVkQ2hhbm5lbCkge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICA8QmFzaWNTZXR0aW5nc1xuICAgICAgICAgIHNlbGVjdGVkQ2hhbm5lbD17c2VsZWN0ZWRDaGFubmVsfVxuICAgICAgICAgIGNoYW5uZWxzPXtzZWxlY3RhYmxlQ2hhbm5lbHN9XG4gICAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAgICAgcmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBJZiB0aGVyZSBhcmUgbm8gbm9uLXJlcXVpcmVkIGZpZWxkcywgZG9uJ3QgcmVuZGVyIHRoaXMgc2VjdGlvbiovfVxuICAgICAge3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgICA8Q2hhbm5lbFNldHRpbmdzXG4gICAgICAgICAgICBzZWxlY3RlZENoYW5uZWw9e3NlbGVjdGVkQ2hhbm5lbH1cbiAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17c2VjdXJlRmllbGRzfVxuICAgICAgICAgICAgcmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgPE5vdGlmaWNhdGlvblNldHRpbmdzXG4gICAgICAgICAgaW1hZ2VSZW5kZXJlckF2YWlsYWJsZT17aW1hZ2VSZW5kZXJlckF2YWlsYWJsZX1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUJ1dHRvbnN9PlxuICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gb25UZXN0Q2hhbm5lbChnZXRWYWx1ZXMoKSl9PlxuICAgICAgICAgICAgVGVzdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxhIGhyZWY9e2Ake2NvbmZpZy5hcHBTdWJVcmx9L2FsZXJ0aW5nL25vdGlmaWNhdGlvbnNgfT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZvcm1Db250YWluZXI6IGNzc2BgLFxuICAgIGZvcm1JdGVtOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGZvcm1CdXR0b25zOiBjc3NgXG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZpZWxkLCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE9wdGlvbkVsZW1lbnQgfSBmcm9tICcuL09wdGlvbkVsZW1lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM6IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25bXTtcbiAgY3VycmVudEZvcm1WYWx1ZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE87XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcblxuICBvblJlc2V0U2VjdXJlRmllbGQ6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWxPcHRpb25zLFxuICByZWdpc3RlcixcbiAgb25SZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzZWxlY3RlZENoYW5uZWxPcHRpb25zLm1hcCgob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke29wdGlvbi5sYWJlbH0tJHtpbmRleH1gO1xuICAgICAgICAvLyBTb21lIG9wdGlvbnMgY2FuIGJlIGRlcGVuZGVudCBvbiBvdGhlciBvcHRpb25zLCB0aGlzIGRldGVybWluZXMgd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgZGVwZW5kZW5jeSBvcHRpb25zXG4gICAgICAgIC8vIEkgdGhpbmsgdGhpcyBuZWVkcyBtb3JlIHRob3VnaHQuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWUgPVxuICAgICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzW2BzZXR0aW5ncy4ke29wdGlvbi5zaG93V2hlbi5maWVsZH1gXSAmJlxuICAgICAgICAgIChjdXJyZW50Rm9ybVZhbHVlc1tgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YF0gYXMgU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pLnZhbHVlO1xuXG4gICAgICAgIGlmIChvcHRpb24uc2hvd1doZW4uZmllbGQgJiYgc2VsZWN0ZWRPcHRpb25WYWx1ZSAhPT0gb3B0aW9uLnNob3dXaGVuLmlzKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uLmVsZW1lbnQgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpZWxkIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFxuICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlY3VyZSA/IGBzZWN1cmVTZXR0aW5ncy4ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YCA6IGBzZXR0aW5ncy4ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgbGFiZWw9e29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17b3B0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17b3B0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgaW52YWxpZD17ZXJyb3JzLnNldHRpbmdzICYmICEhZXJyb3JzLnNldHRpbmdzW29wdGlvbi5wcm9wZXJ0eU5hbWVdfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5zZXR0aW5ncyAmJiBlcnJvcnMuc2V0dGluZ3Nbb3B0aW9uLnByb3BlcnR5TmFtZV0/Lm1lc3NhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3VyZUZpZWxkcyAmJiBzZWN1cmVGaWVsZHNbb3B0aW9uLnByb3BlcnR5TmFtZV0gPyAoXG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiQ29uZmlndXJlZFwiXG4gICAgICAgICAgICAgICAgc3VmZml4PXtcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25SZXNldFNlY3VyZUZpZWxkKG9wdGlvbi5wcm9wZXJ0eU5hbWUpfSBmaWxsPVwidGV4dFwiIHR5cGU9XCJidXR0b25cIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxPcHRpb25FbGVtZW50IG9wdGlvbj17b3B0aW9ufSByZWdpc3Rlcj17cmVnaXN0ZXJ9IGNvbnRyb2w9e2NvbnRyb2x9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCwgQ29sbGFwc2FibGVTZWN0aW9uLCBGaWVsZCwgSW5mb0JveCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsRm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMge1xuICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uU2V0dGluZ3M6IEZDPFByb3BzPiA9ICh7IGN1cnJlbnRGb3JtVmFsdWVzLCBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlLCByZWdpc3RlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNhYmxlU2VjdGlvbiBsYWJlbD1cIk5vdGlmaWNhdGlvbiBzZXR0aW5nc1wiIGlzT3Blbj17ZmFsc2V9PlxuICAgICAgPEZpZWxkPlxuICAgICAgICA8Q2hlY2tib3ggey4uLnJlZ2lzdGVyKCdpc0RlZmF1bHQnKX0gbGFiZWw9XCJEZWZhdWx0XCIgZGVzY3JpcHRpb249XCJVc2UgdGhpcyBub3RpZmljYXRpb24gZm9yIGFsbCBhbGVydHNcIiAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdzZXR0aW5ncy51cGxvYWRJbWFnZScpfVxuICAgICAgICAgIGxhYmVsPVwiSW5jbHVkZSBpbWFnZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJDYXB0dXJlcyBhbiBpbWFnZSBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgbm90aWZpY2F0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICB7Y3VycmVudEZvcm1WYWx1ZXMudXBsb2FkSW1hZ2UgJiYgIWltYWdlUmVuZGVyZXJBdmFpbGFibGUgJiYgKFxuICAgICAgICA8SW5mb0JveCB0aXRsZT1cIk5vIGltYWdlIHJlbmRlcmVyIGF2YWlsYWJsZS9pbnN0YWxsZWRcIj5cbiAgICAgICAgICBHcmFmYW5hIGNhbm5vdCBmaW5kIGFuIGltYWdlIHJlbmRlcmVyIHRvIGNhcHR1cmUgYW4gaW1hZ2UgZm9yIHRoZSBub3RpZmljYXRpb24uIFBsZWFzZSBtYWtlIHN1cmUgdGhlIEdyYWZhbmFcbiAgICAgICAgICBJbWFnZSBSZW5kZXJlciBwbHVnaW4gaXMgaW5zdGFsbGVkLiBQbGVhc2UgY29udGFjdCB5b3VyIEdyYWZhbmEgYWRtaW5pc3RyYXRvciB0byBpbnN0YWxsIHRoZSBwbHVnaW4uXG4gICAgICAgIDwvSW5mb0JveD5cbiAgICAgICl9XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHsuLi5yZWdpc3RlcignZGlzYWJsZVJlc29sdmVNZXNzYWdlJyl9XG4gICAgICAgICAgbGFiZWw9XCJEaXNhYmxlIFJlc29sdmUgTWVzc2FnZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJEaXNhYmxlIHRoZSByZXNvbHZlIG1lc3NhZ2UgW09LXSB0aGF0IGlzIHNlbnQgd2hlbiBhbGVydGluZyBzdGF0ZSByZXR1cm5zIHRvIGZhbHNlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHsuLi5yZWdpc3Rlcignc2VuZFJlbWluZGVyJyl9XG4gICAgICAgICAgbGFiZWw9XCJTZW5kIHJlbWluZGVyc1wiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJTZW5kIGFkZGl0aW9uYWwgbm90aWZpY2F0aW9ucyBmb3IgdHJpZ2dlcmVkIGFsZXJ0c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAge2N1cnJlbnRGb3JtVmFsdWVzLnNlbmRSZW1pbmRlciAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIlNlbmQgcmVtaW5kZXIgZXZlcnlcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTcGVjaWZ5IGhvdyBvZnRlbiByZW1pbmRlcnMgc2hvdWxkIGJlIHNlbnQsIGUuZy4gZXZlcnkgMzBzLCAxbSwgMTBtLCAzMG0nLCBvciAxaCBldGMuXG4gICAgICAgICAgICBBbGVydCByZW1pbmRlcnMgYXJlIHNlbnQgYWZ0ZXIgcnVsZXMgYXJlIGV2YWx1YXRlZC4gQSByZW1pbmRlciBjYW4gbmV2ZXIgYmUgc2VudCBtb3JlIGZyZXF1ZW50bHlcbiAgICAgICAgICAgIHRoYW4gYSBjb25maWd1cmVkIGFsZXJ0IHJ1bGUgZXZhbHVhdGlvbiBpbnRlcnZhbC5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ2ZyZXF1ZW5jeScpfSB3aWR0aD17OH0gLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Db2xsYXBzYWJsZVNlY3Rpb24+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybUFQSSwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBpY2s8Rm9ybUFQSTxhbnk+LCAncmVnaXN0ZXInIHwgJ2NvbnRyb2wnPiB7XG4gIG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbjtcbiAgaW52YWxpZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25FbGVtZW50OiBGQzxQcm9wcz4gPSAoeyBjb250cm9sLCBvcHRpb24sIHJlZ2lzdGVyLCBpbnZhbGlkIH0pID0+IHtcbiAgY29uc3QgbW9kZWxWYWx1ZSA9IG9wdGlvbi5zZWN1cmUgPyBgc2VjdXJlU2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWAgOiBgc2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG4gIHN3aXRjaCAob3B0aW9uLmVsZW1lbnQpIHtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoYCR7bW9kZWxWYWx1ZX1gLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICh2KSA9PiAob3B0aW9uLnZhbGlkYXRpb25SdWxlICE9PSAnJyA/IHZhbGlkYXRlT3B0aW9uKHYsIG9wdGlvbi52YWxpZGF0aW9uUnVsZSkgOiB0cnVlKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHR5cGU9e29wdGlvbi5pbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e29wdGlvbi5wbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgbmFtZT17YCR7bW9kZWxWYWx1ZX1gfVxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxTZWxlY3QgbWVudVNob3VsZFBvcnRhbCB7Li4uZmllbGR9IG9wdGlvbnM9e29wdGlvbi5zZWxlY3RPcHRpb25zID8/IHVuZGVmaW5lZH0gaW52YWxpZD17aW52YWxpZH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKTtcblxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKGAke21vZGVsVmFsdWV9YCwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4gKG9wdGlvbi52YWxpZGF0aW9uUnVsZSAhPT0gJycgPyB2YWxpZGF0ZU9wdGlvbih2LCBvcHRpb24udmFsaWRhdGlvblJ1bGUpIDogdHJ1ZSksXG4gICAgICAgICAgfSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgbm90IHN1cHBvcnRlZCcsIG9wdGlvbi5lbGVtZW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uUnVsZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBSZWdFeHAodmFsaWRhdGlvblJ1bGUpLnRlc3QodmFsdWUpID8gdHJ1ZSA6ICdJbnZhbGlkIGZvcm1hdCc7XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBsb2FkQWxlcnRSdWxlcywgbG9hZGVkQWxlcnRSdWxlcywgbm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCwgc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMgfSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IEFsZXJ0UnVsZURUTywgTm90aWZpZXJEVE8sIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uLCBjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGVydFJ1bGVzQXN5bmMob3B0aW9uczogeyBzdGF0ZTogc3RyaW5nIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChsb2FkQWxlcnRSdWxlcygpKTtcbiAgICBjb25zdCBydWxlczogQWxlcnRSdWxlRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2FsZXJ0cycsIG9wdGlvbnMpO1xuICAgIGRpc3BhdGNoKGxvYWRlZEFsZXJ0UnVsZXMocnVsZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBhdXNlQWxlcnRSdWxlKGlkOiBudW1iZXIsIG9wdGlvbnM6IHsgcGF1c2VkOiBib29sZWFuIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydHMvJHtpZH0vcGF1c2VgLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdGF0ZUZpbHRlciA9IGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKS5zdGF0ZSB8fCAnYWxsJztcbiAgICBkaXNwYXRjaChnZXRBbGVydFJ1bGVzQXN5bmMoeyBzdGF0ZTogc3RhdGVGaWx0ZXIudG9TdHJpbmcoKSB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PFByb21pc2U8dm9pZD4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zYCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIGNyZWF0ZWQnKSkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2RhdGEuaWR9YCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIHVwZGF0ZWQnKSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oZXJyb3IuZGF0YS5lcnJvcikpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGdldFN0YXRlKCkubm90aWZpY2F0aW9uQ2hhbm5lbC5ub3RpZmljYXRpb25DaGFubmVsO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvdGVzdCcsIHsgaWQ6IGNoYW5uZWwuaWQsIC4uLmRhdGEgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uVHlwZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgYWxlcnROb3RpZmllcnM6IE5vdGlmaWVyRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWVyc2ApO1xuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uVHlwZXMgPSBhbGVydE5vdGlmaWVycy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgIGlmIChvMS5uYW1lID4gbzIubmFtZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzKG5vdGlmaWNhdGlvblR5cGVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbChpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZE5vdGlmaWNhdGlvblR5cGVzKCkpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNoYW5uZWwgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChub3RpZmljYXRpb25DaGFubmVsTG9hZGVkKG5vdGlmaWNhdGlvbkNoYW5uZWwpKTtcbiAgfTtcbn1cbiIsImltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsRFRPLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPID0ge1xuICBpZDogLTEsXG4gIG5hbWU6ICcnLFxuICB0eXBlOiB7IHZhbHVlOiAnZW1haWwnLCBsYWJlbDogJ0VtYWlsJyB9LFxuICBzZW5kUmVtaW5kZXI6IGZhbHNlLFxuICBkaXNhYmxlUmVzb2x2ZU1lc3NhZ2U6IGZhbHNlLFxuICBmcmVxdWVuY3k6ICcxNW0nLFxuICBzZXR0aW5nczoge1xuICAgIHVwbG9hZEltYWdlOiBjb25maWcucmVuZGVyZXJBdmFpbGFibGUsXG4gICAgYXV0b1Jlc29sdmU6IHRydWUsXG4gICAgaHR0cE1ldGhvZDogJ1BPU1QnLFxuICAgIHNldmVyaXR5OiAnY3JpdGljYWwnLFxuICB9LFxuICBzZWN1cmVTZXR0aW5nczoge30sXG4gIHNlY3VyZUZpZWxkczoge30sXG4gIGlzRGVmYXVsdDogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgbWFwQ2hhbm5lbHNUb1NlbGVjdGFibGVWYWx1ZSA9IG1lbW9pemVPbmUoXG4gIChub3RpZmljYXRpb25DaGFubmVsczogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVbXSwgaW5jbHVkZURlc2NyaXB0aW9uOiBib29sZWFuKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+IHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uQ2hhbm5lbHMubWFwKChjaGFubmVsKSA9PiB7XG4gICAgICBpZiAoaW5jbHVkZURlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGNoYW5uZWwudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGNoYW5uZWwubGFiZWwsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5uZWwuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogY2hhbm5lbC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNoYW5uZWwubGFiZWwsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtU3VibWl0RGF0YSA9IChmb3JtRGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4ge1xuICAvKlxuICAgIFNvbWUgc2V0dGluZ3MgY2FuIGJlIG9wdGlvbnMgaW4gYSBzZWxlY3QsIGluIG9yZGVyIHRvIG5vdCBzYXZlIGEgU2VsZWN0YWJsZVZhbHVlPFQ+XG4gICAgd2UgbmVlZCB0byB1c2UgY2hlY2sgaWYgaXQgaXMgYSBTZWxlY3RhYmxlVmFsdWUgYW5kIHVzZSBpdHMgdmFsdWUuXG4gICovXG4gIGNvbnN0IHNldHRpbmdzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKGZvcm1EYXRhLnNldHRpbmdzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgcmV0dXJuIFtrZXksIHZhbHVlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gdmFsdWUudmFsdWUgOiB2YWx1ZV07XG4gICAgfSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgLi4uZm9ybURhdGEsXG4gICAgZnJlcXVlbmN5OiBmb3JtRGF0YS5mcmVxdWVuY3kgPT09ICcnID8gZGVmYXVsdFZhbHVlcy5mcmVxdWVuY3kgOiBmb3JtRGF0YS5mcmVxdWVuY3ksXG4gICAgdHlwZTogZm9ybURhdGEudHlwZS52YWx1ZSxcbiAgICBzZXR0aW5nczogeyAuLi5kZWZhdWx0VmFsdWVzLnNldHRpbmdzLCAuLi5zZXR0aW5ncyB9LFxuICAgIHNlY3VyZVNldHRpbmdzOiB7IC4uLmZvcm1EYXRhLnNlY3VyZVNldHRpbmdzIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtVGVzdERhdGEgPSAoZm9ybURhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgIHR5cGU6IGZvcm1EYXRhLnR5cGUudmFsdWUsXG4gICAgZnJlcXVlbmN5OiBmb3JtRGF0YS5mcmVxdWVuY3kgPz8gZGVmYXVsdFZhbHVlcy5mcmVxdWVuY3ksXG4gICAgc2V0dGluZ3M6IHsgLi4uT2JqZWN0LmFzc2lnbihkZWZhdWx0VmFsdWVzLnNldHRpbmdzLCBmb3JtRGF0YS5zZXR0aW5ncykgfSxcbiAgICBzZWN1cmVTZXR0aW5nczogeyAuLi5mb3JtRGF0YS5zZWN1cmVTZXR0aW5ncyB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiY29uZmlnIiwiRm9ybSIsIlBhZ2UiLCJOb3RpZmljYXRpb25DaGFubmVsRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlIiwidHJhbnNmb3JtU3VibWl0RGF0YSIsInRyYW5zZm9ybVRlc3REYXRhIiwiZ2V0TmF2TW9kZWwiLCJjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsIiwibG9hZE5vdGlmaWNhdGlvblR5cGVzIiwidGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwiLCJyZXNldFNlY3VyZUZpZWxkIiwiTmV3Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UiLCJkYXRhIiwicHJvcHMiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsIm5hdk1vZGVsIiwibm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzIiwib25TdWJtaXQiLCJyZWdpc3RlciIsImVycm9ycyIsImNvbnRyb2wiLCJnZXRWYWx1ZXMiLCJ3YXRjaCIsInNlbGVjdGVkQ2hhbm5lbCIsImZpbmQiLCJjIiwidmFsdWUiLCJ0eXBlIiwib25UZXN0Q2hhbm5lbCIsInJlbmRlcmVyQXZhaWxhYmxlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZJbmRleCIsIm5vdGlmaWNhdGlvbkNoYW5uZWwiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJGaWVsZCIsIklucHV0IiwiSW5wdXRDb250cm9sIiwiU2VsZWN0IiwiTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMiLCJCYXNpY1NldHRpbmdzIiwiY3VycmVudEZvcm1WYWx1ZXMiLCJzZWN1cmVGaWVsZHMiLCJjaGFubmVscyIsIm5hbWUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJmaWVsZCIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJvIiwiQWxlcnQiLCJDb2xsYXBzYWJsZVNlY3Rpb24iLCJDaGFubmVsU2V0dGluZ3MiLCJoZWFkaW5nIiwiaW5mbyIsInVzZUVmZmVjdCIsImNzcyIsIkJ1dHRvbiIsIkhvcml6b250YWxHcm91cCIsInN0eWxlc0ZhY3RvcnkiLCJ1c2VUaGVtZSIsIlNwaW5uZXIiLCJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNlbGVjdGFibGVDaGFubmVscyIsImltYWdlUmVuZGVyZXJBdmFpbGFibGUiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJmaWVsZHNUb1dhdGNoIiwiU2V0Iiwic2hvd1doZW4iLCJtYXAiLCJvcHRpb24iLCJmb3JtQ29udGFpbmVyIiwiZm9ybUl0ZW0iLCJsZW5ndGgiLCJmb3JtQnV0dG9ucyIsImFwcFN1YlVybCIsInRoZW1lIiwic3BhY2luZyIsIm1kIiwieGwiLCJDaGVja2JveCIsIk9wdGlvbkVsZW1lbnQiLCJzZWxlY3RlZENoYW5uZWxPcHRpb25zIiwib25SZXNldFNlY3VyZUZpZWxkIiwiaW5kZXgiLCJrZXkiLCJsYWJlbCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJpcyIsImVsZW1lbnQiLCJzZWN1cmUiLCJwcm9wZXJ0eU5hbWUiLCJkZXNjcmlwdGlvbiIsInNldHRpbmdzIiwiSW5mb0JveCIsInVwbG9hZEltYWdlIiwic2VuZFJlbWluZGVyIiwiVGV4dEFyZWEiLCJpbnZhbGlkIiwibW9kZWxWYWx1ZSIsInZhbGlkYXRlIiwidiIsInZhbGlkYXRpb25SdWxlIiwidmFsaWRhdGVPcHRpb24iLCJpbnB1dFR5cGUiLCJwbGFjZWhvbGRlciIsInNlbGVjdE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJSZWdFeHAiLCJ0ZXN0IiwiZ2V0QmFja2VuZFNydiIsImxvY2F0aW9uU2VydmljZSIsImxvYWRBbGVydFJ1bGVzIiwibG9hZGVkQWxlcnRSdWxlcyIsIm5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQiLCJzZXROb3RpZmljYXRpb25DaGFubmVscyIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsIm5vdGlmeUFwcCIsImdldEFsZXJ0UnVsZXNBc3luYyIsImRpc3BhdGNoIiwicnVsZXMiLCJnZXQiLCJ0b2dnbGVQYXVzZUFsZXJ0UnVsZSIsImlkIiwicG9zdCIsInN0YXRlRmlsdGVyIiwiZ2V0U2VhcmNoT2JqZWN0IiwidG9TdHJpbmciLCJwdXNoIiwidXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCIsInB1dCIsImdldFN0YXRlIiwiY2hhbm5lbCIsImFsZXJ0Tm90aWZpZXJzIiwibm90aWZpY2F0aW9uVHlwZXMiLCJzb3J0IiwibzEiLCJvMiIsImxvYWROb3RpZmljYXRpb25DaGFubmVsIiwibWVtb2l6ZU9uZSIsImRpc2FibGVSZXNvbHZlTWVzc2FnZSIsImZyZXF1ZW5jeSIsImF1dG9SZXNvbHZlIiwiaHR0cE1ldGhvZCIsInNldmVyaXR5Iiwic2VjdXJlU2V0dGluZ3MiLCJpc0RlZmF1bHQiLCJub3RpZmljYXRpb25DaGFubmVscyIsImluY2x1ZGVEZXNjcmlwdGlvbiIsImZvcm1EYXRhIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiaGFzT3duUHJvcGVydHkiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9
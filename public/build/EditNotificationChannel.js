"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["EditNotificationChannel"],{

/***/ "./public/app/core/components/connectWithCleanUp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectWithCleanUp": () => (/* binding */ connectWithCleanUp)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const connectWithCleanUp = (mapStateToProps, mapDispatchToProps, stateSelector) => Component => {
  const ConnectedComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps // @ts-ignore
  )(Component);

  const ConnectedComponentWithCleanUp = props => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
      return function cleanUp() {
        dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_1__.cleanUpAction)({
          stateSelector
        }));
      };
    }, [dispatch]); // @ts-ignore

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ConnectedComponent, Object.assign({}, props));
  };

  ConnectedComponentWithCleanUp.displayName = `ConnectWithCleanUp(${ConnectedComponent.displayName})`;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(ConnectedComponentWithCleanUp, Component);
  return ConnectedComponentWithCleanUp;
};

/***/ }),

/***/ "./public/app/features/alerting/EditNotificationChannelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditNotificationChannelPage": () => (/* binding */ EditNotificationChannelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/connectWithCleanUp.tsx");
/* harmony import */ var _components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/utils/notificationChannels.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class EditNotificationChannelPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", formData => {
      const {
        notificationChannel
      } = this.props;
      this.props.updateNotificationChannel(Object.assign({}, (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__.transformSubmitData)(Object.assign({}, notificationChannel, formData, {
        settings: Object.assign({}, notificationChannel.settings, formData.settings)
      })), {
        id: notificationChannel.id
      }));
    });

    _defineProperty(this, "onTestChannel", formData => {
      const {
        notificationChannel
      } = this.props;
      /*
        Same as submit
       */

      this.props.testNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__.transformTestData)(Object.assign({}, notificationChannel, formData, {
        settings: Object.assign({}, notificationChannel.settings, formData.settings)
      })));
    });
  }

  componentDidMount() {
    this.props.loadNotificationChannel(parseInt(this.props.match.params.id, 10));
  }

  render() {
    const {
      navModel,
      notificationChannel,
      notificationChannelTypes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
          className: "page-sub-heading",
          children: "Edit notification channel"
        })), notificationChannel && notificationChannel.id > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
          maxWidth: 600,
          onSubmit: this.onSubmit,
          defaultValues: Object.assign({}, notificationChannel, {
            type: notificationChannelTypes.find(n => n.value === notificationChannel.type)
          }),
          children: ({
            control,
            errors,
            getValues,
            register,
            watch
          }) => {
            const selectedChannel = notificationChannelTypes.find(c => c.value === getValues().type.value);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_5__.NotificationChannelForm, {
              selectableChannels: (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__.mapChannelsToSelectableValue)(notificationChannelTypes, true),
              selectedChannel: selectedChannel,
              imageRendererAvailable: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.rendererAvailable,
              onTestChannel: this.onTestChannel,
              register: register,
              watch: watch,
              errors: errors,
              getValues: getValues,
              control: control,
              resetSecureField: this.props.resetSecureField,
              secureFields: notificationChannel.secureFields
            });
          }
        }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: ["Loading notification channel", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})]
        }))]
      })
    });
  }

}

const mapStateToProps = state => {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(state.navIndex, 'channels'),
    notificationChannel: state.notificationChannel.notificationChannel,
    notificationChannelTypes: state.notificationChannel.notificationChannelTypes
  };
};

const mapDispatchToProps = {
  loadNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_6__.loadNotificationChannel,
  testNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_6__.testNotificationChannel,
  updateNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_6__.updateNotificationChannel,
  resetSecureField: _state_reducers__WEBPACK_IMPORTED_MODULE_9__.resetSecureField
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,app_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_4__.connectWithCleanUp)(mapStateToProps, mapDispatchToProps, state => state.notificationChannel)(EditNotificationChannelPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQWpCO0FBTUEsMkJBQ0tzSCxhQURMLEVBRUtySSxRQUZMO0FBR0V1SSxJQUFBQSxTQUFTLEVBQUV2SSxRQUFRLENBQUN1SSxTQUFULEtBQXVCLEVBQXZCLEdBQTRCRixhQUFhLENBQUNFLFNBQTFDLEdBQXNEdkksUUFBUSxDQUFDdUksU0FINUU7QUFJRTNILElBQUFBLElBQUksRUFBRVosUUFBUSxDQUFDWSxJQUFULENBQWNHLEtBSnRCO0FBS0ViLElBQUFBLFFBQVEsb0JBQU9tSSxhQUFhLENBQUNuSSxRQUFyQixFQUFrQ0EsUUFBbEMsQ0FMVjtBQU1FeUksSUFBQUEsY0FBYyxvQkFBTzNJLFFBQVEsQ0FBQzJJLGNBQWhCO0FBTmhCO0FBUUQsQ0FuQk07QUFxQkEsTUFBTTlJLGlCQUFpQixHQUFJRyxRQUFELElBQXNDO0FBQUE7O0FBQ3JFLFNBQU87QUFDTG9DLElBQUFBLElBQUksRUFBRXBDLFFBQVEsQ0FBQ29DLElBRFY7QUFFTHhCLElBQUFBLElBQUksRUFBRVosUUFBUSxDQUFDWSxJQUFULENBQWNHLEtBRmY7QUFHTHdILElBQUFBLFNBQVMseUJBQUV2SSxRQUFRLENBQUN1SSxTQUFYLHFFQUF3QkYsYUFBYSxDQUFDRSxTQUgxQztBQUlMckksSUFBQUEsUUFBUSxvQkFBTzZJLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjZCxhQUFhLENBQUNuSSxRQUE1QixFQUFzQ0YsUUFBUSxDQUFDRSxRQUEvQyxDQUFQLENBSkg7QUFLTHlJLElBQUFBLGNBQWMsb0JBQU8zSSxRQUFRLENBQUMySSxjQUFoQjtBQUxULEdBQVA7QUFPRCxDQVJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL2Nvbm5lY3RXaXRoQ2xlYW5VcC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvRWRpdE5vdGlmaWNhdGlvbkNoYW5uZWxQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL0Jhc2ljU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvQ2hhbm5lbFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL05vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL05vdGlmaWNhdGlvblNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL09wdGlvbkVsZW1lbnQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdXRpbHMvbm90aWZpY2F0aW9uQ2hhbm5lbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgTWFwRGlzcGF0Y2hUb1Byb3BzUGFyYW0sIE1hcFN0YXRlVG9Qcm9wc1BhcmFtLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNsZWFuVXBBY3Rpb24sIFN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2NsZWFuVXAnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFR5cGUsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdFdpdGhDbGVhblVwID1cbiAgPFxuICAgIFRTdGF0ZVByb3BzIGV4dGVuZHMge30gPSB7fSxcbiAgICBURGlzcGF0Y2hQcm9wcyA9IHt9LFxuICAgIFRPd25Qcm9wcyA9IHt9LFxuICAgIFN0YXRlID0ge30sXG4gICAgVFNlbGVjdG9yIGV4dGVuZHMgb2JqZWN0ID0ge30sXG4gICAgU3RhdGljcyA9IHt9XG4gID4oXG4gICAgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHNQYXJhbTxUU3RhdGVQcm9wcywgVE93blByb3BzLCBTdGF0ZT4sXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzOiBNYXBEaXNwYXRjaFRvUHJvcHNQYXJhbTxURGlzcGF0Y2hQcm9wcywgVE93blByb3BzPixcbiAgICBzdGF0ZVNlbGVjdG9yOiBTdGF0ZVNlbGVjdG9yPFRTZWxlY3Rvcj5cbiAgKSA9PlxuICAoQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT4pID0+IHtcbiAgICBjb25zdCBDb25uZWN0ZWRDb21wb25lbnQgPSBjb25uZWN0KFxuICAgICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgKShDb21wb25lbnQpO1xuXG4gICAgY29uc3QgQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXA6IEZ1bmN0aW9uQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW5VcCgpIHtcbiAgICAgICAgICBkaXNwYXRjaChjbGVhblVwQWN0aW9uKHsgc3RhdGVTZWxlY3RvciB9KSk7XG4gICAgICAgIH07XG4gICAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJldHVybiA8Q29ubmVjdGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gICAgfTtcblxuICAgIENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwLmRpc3BsYXlOYW1lID0gYENvbm5lY3RXaXRoQ2xlYW5VcCgke0Nvbm5lY3RlZENvbXBvbmVudC5kaXNwbGF5TmFtZX0pYDtcbiAgICBob2lzdE5vblJlYWN0U3RhdGljcyhDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCwgQ29tcG9uZW50KTtcbiAgICB0eXBlIEhvaXN0ZWQgPSB0eXBlb2YgQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAgJiBTdGF0aWNzO1xuXG4gICAgcmV0dXJuIENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwIGFzIEhvaXN0ZWQ7XG4gIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcERpc3BhdGNoVG9Qcm9wcywgTWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRm9ybSwgU3Bpbm5lciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGNvbm5lY3RXaXRoQ2xlYW5VcCB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvY29ubmVjdFdpdGhDbGVhblVwJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxGb3JtIH0gZnJvbSAnLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtJztcbmltcG9ydCB7IGxvYWROb3RpZmljYXRpb25DaGFubmVsLCB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCwgdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlLCB0cmFuc2Zvcm1TdWJtaXREYXRhLCB0cmFuc2Zvcm1UZXN0RGF0YSB9IGZyb20gJy4vdXRpbHMvbm90aWZpY2F0aW9uQ2hhbm5lbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGUsIE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8sIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgcmVzZXRTZWN1cmVGaWVsZCB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuaW50ZXJmYWNlIE93blByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+IHt9XG5cbmludGVyZmFjZSBDb25uZWN0ZWRQcm9wcyB7XG4gIG5hdk1vZGVsOiBOYXZNb2RlbDtcbiAgbm90aWZpY2F0aW9uQ2hhbm5lbDogYW55O1xuICBub3RpZmljYXRpb25DaGFubmVsVHlwZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlW107XG59XG5cbmludGVyZmFjZSBEaXNwYXRjaFByb3BzIHtcbiAgbG9hZE5vdGlmaWNhdGlvbkNoYW5uZWw6IHR5cGVvZiBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbDtcbiAgdGVzdE5vdGlmaWNhdGlvbkNoYW5uZWw6IHR5cGVvZiB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbDtcbiAgdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbDogdHlwZW9mIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWw7XG4gIHJlc2V0U2VjdXJlRmllbGQ6IHR5cGVvZiByZXNldFNlY3VyZUZpZWxkO1xufVxuXG50eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wcyAmIERpc3BhdGNoUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBFZGl0Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMubG9hZE5vdGlmaWNhdGlvbkNoYW5uZWwocGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsIDEwKSk7XG4gIH1cblxuICBvblN1Ym1pdCA9IChmb3JtRGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4ge1xuICAgIGNvbnN0IHsgbm90aWZpY2F0aW9uQ2hhbm5lbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMucHJvcHMudXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCh7XG4gICAgICAvKlxuICAgICAgIFNvbWUgc2V0dGluZ3Mgd2hpY2ggbGl2ZXMgaW4gYSBjb2xsYXBzZWQgc2VjdGlvbiB3aWxsIG5vdCBiZSByZWdpc3RlcmVkIHNpbmNlXG4gICAgICAgdGhlIHNlY3Rpb24gd2lsbCBub3QgYmUgcmVuZGVyZWQgaWYgYSB1c2VyIGRvZXNuJ3QgZXhwYW5kIGl0LiBUaGVyZWZvcmUgd2UgbmVlZCB0b1xuICAgICAgIG1lcmdlIHRoZSBpbml0aWFsRGF0YSB3aXRoIGFueSBjaGFuZ2VzIGZyb20gdGhlIGZvcm0uXG4gICAgICAqL1xuICAgICAgLi4udHJhbnNmb3JtU3VibWl0RGF0YSh7XG4gICAgICAgIC4uLm5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICBzZXR0aW5nczogeyAuLi5ub3RpZmljYXRpb25DaGFubmVsLnNldHRpbmdzLCAuLi5mb3JtRGF0YS5zZXR0aW5ncyB9LFxuICAgICAgfSksXG4gICAgICBpZDogbm90aWZpY2F0aW9uQ2hhbm5lbC5pZCxcbiAgICB9KTtcbiAgfTtcblxuICBvblRlc3RDaGFubmVsID0gKGZvcm1EYXRhOiBOb3RpZmljYXRpb25DaGFubmVsRFRPKSA9PiB7XG4gICAgY29uc3QgeyBub3RpZmljYXRpb25DaGFubmVsIH0gPSB0aGlzLnByb3BzO1xuICAgIC8qXG4gICAgICBTYW1lIGFzIHN1Ym1pdFxuICAgICAqL1xuICAgIHRoaXMucHJvcHMudGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwoXG4gICAgICB0cmFuc2Zvcm1UZXN0RGF0YSh7XG4gICAgICAgIC4uLm5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICBzZXR0aW5nczogeyAuLi5ub3RpZmljYXRpb25DaGFubmVsLnNldHRpbmdzLCAuLi5mb3JtRGF0YS5zZXR0aW5ncyB9LFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBub3RpZmljYXRpb25DaGFubmVsLCBub3RpZmljYXRpb25DaGFubmVsVHlwZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5FZGl0IG5vdGlmaWNhdGlvbiBjaGFubmVsPC9oMj5cbiAgICAgICAgICB7bm90aWZpY2F0aW9uQ2hhbm5lbCAmJiBub3RpZmljYXRpb25DaGFubmVsLmlkID4gMCA/IChcbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIG1heFdpZHRoPXs2MDB9XG4gICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgLi4ubm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgICAgICAgICAgICAgICB0eXBlOiBub3RpZmljYXRpb25DaGFubmVsVHlwZXMuZmluZCgobikgPT4gbi52YWx1ZSA9PT0gbm90aWZpY2F0aW9uQ2hhbm5lbC50eXBlKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyh7IGNvbnRyb2wsIGVycm9ycywgZ2V0VmFsdWVzLCByZWdpc3Rlciwgd2F0Y2ggfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hhbm5lbCA9IG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcy5maW5kKChjKSA9PiBjLnZhbHVlID09PSBnZXRWYWx1ZXMoKS50eXBlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uQ2hhbm5lbEZvcm1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZUNoYW5uZWxzPXttYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlKG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2hhbm5lbD17c2VsZWN0ZWRDaGFubmVsfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlPXtjb25maWcucmVuZGVyZXJBdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgICAgIG9uVGVzdENoYW5uZWw9e3RoaXMub25UZXN0Q2hhbm5lbH1cbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICB3YXRjaD17d2F0Y2h9XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgICAgICBnZXRWYWx1ZXM9e2dldFZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgcmVzZXRTZWN1cmVGaWVsZD17dGhpcy5wcm9wcy5yZXNldFNlY3VyZUZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBzZWN1cmVGaWVsZHM9e25vdGlmaWNhdGlvbkNoYW5uZWwuc2VjdXJlRmllbGRzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBMb2FkaW5nIG5vdGlmaWNhdGlvbiBjaGFubmVsXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM6IE1hcFN0YXRlVG9Qcm9wczxDb25uZWN0ZWRQcm9wcywgT3duUHJvcHMsIFN0b3JlU3RhdGU+ID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnY2hhbm5lbHMnKSxcbiAgICBub3RpZmljYXRpb25DaGFubmVsOiBzdGF0ZS5ub3RpZmljYXRpb25DaGFubmVsLm5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gICAgbm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzOiBzdGF0ZS5ub3RpZmljYXRpb25DaGFubmVsLm5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTWFwRGlzcGF0Y2hUb1Byb3BzPERpc3BhdGNoUHJvcHMsIE93blByb3BzPiA9IHtcbiAgbG9hZE5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gIHRlc3ROb3RpZmljYXRpb25DaGFubmVsLFxuICB1cGRhdGVOb3RpZmljYXRpb25DaGFubmVsLFxuICByZXNldFNlY3VyZUZpZWxkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFdpdGhDbGVhblVwKFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb25DaGFubmVsXG4pKEVkaXROb3RpZmljYXRpb25DaGFubmVsUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBJbnB1dCwgSW5wdXRDb250cm9sLCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9ucyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcywgTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMge1xuICBzZWxlY3RlZENoYW5uZWw6IE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlO1xuICBjaGFubmVsczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBzZWN1cmVGaWVsZHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHM7XG4gIHJlc2V0U2VjdXJlRmllbGQ6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJhc2ljU2V0dGluZ3M6IEZDPFByb3BzPiA9ICh7XG4gIGNvbnRyb2wsXG4gIGN1cnJlbnRGb3JtVmFsdWVzLFxuICBlcnJvcnMsXG4gIHNlY3VyZUZpZWxkcyxcbiAgc2VsZWN0ZWRDaGFubmVsLFxuICBjaGFubmVscyxcbiAgcmVnaXN0ZXIsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGaWVsZCBsYWJlbD1cIk5hbWVcIiBpbnZhbGlkPXshIWVycm9ycy5uYW1lfSBlcnJvcj17ZXJyb3JzLm5hbWUgJiYgZXJyb3JzLm5hbWUubWVzc2FnZX0+XG4gICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiAnTmFtZSBpcyByZXF1aXJlZCcgfSl9IC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkIGxhYmVsPVwiVHlwZVwiPlxuICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IDxTZWxlY3QgbWVudVNob3VsZFBvcnRhbCB7Li4uZmllbGR9IG9wdGlvbnM9e2NoYW5uZWxzfSAvPn1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gby5yZXF1aXJlZCl9XG4gICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQsIENvbGxhcHNhYmxlU2VjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsT3B0aW9ucyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsRm9ybSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbDogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbm5lbFNldHRpbmdzOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIHNlY3VyZUZpZWxkcyxcbiAgcmVnaXN0ZXIsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNhYmxlU2VjdGlvbiBsYWJlbD17YE9wdGlvbmFsICR7c2VsZWN0ZWRDaGFubmVsLmhlYWRpbmd9YH0gaXNPcGVuPXtmYWxzZX0+XG4gICAgICB7c2VsZWN0ZWRDaGFubmVsLmluZm8gIT09ICcnICYmIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT17c2VsZWN0ZWRDaGFubmVsLmluZm8gPz8gJyd9IC8+fVxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpfVxuICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAvPlxuICAgIDwvQ29sbGFwc2FibGVTZWN0aW9uPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm1BUEksIEhvcml6b250YWxHcm91cCwgc3R5bGVzRmFjdG9yeSwgdXNlVGhlbWUsIFNwaW5uZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsVHlwZSwgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNldHRpbmdzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25TZXR0aW5ncyc7XG5pbXBvcnQgeyBCYXNpY1NldHRpbmdzIH0gZnJvbSAnLi9CYXNpY1NldHRpbmdzJztcbmltcG9ydCB7IENoYW5uZWxTZXR0aW5ncyB9IGZyb20gJy4vQ2hhbm5lbFNldHRpbmdzJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuXG5pbnRlcmZhY2UgUHJvcHNcbiAgZXh0ZW5kcyBQaWNrPEZvcm1BUEk8Tm90aWZpY2F0aW9uQ2hhbm5lbERUTz4sICdjb250cm9sJyB8ICdlcnJvcnMnIHwgJ3JlZ2lzdGVyJyB8ICd3YXRjaCcgfCAnZ2V0VmFsdWVzJz4ge1xuICBzZWxlY3RhYmxlQ2hhbm5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgc2VsZWN0ZWRDaGFubmVsPzogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGU6IGJvb2xlYW47XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xuICBvblRlc3RDaGFubmVsOiAoZGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzXG4gIGV4dGVuZHMgUGljazxGb3JtQVBJPE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8+LCAnY29udHJvbCcgfCAnZXJyb3JzJyB8ICdyZWdpc3Rlcic+IHtcbiAgY3VycmVudEZvcm1WYWx1ZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE87XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DaGFubmVsRm9ybTogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIHNlbGVjdGFibGVDaGFubmVscyxcbiAgcmVnaXN0ZXIsXG4gIHdhdGNoLFxuICBnZXRWYWx1ZXMsXG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGUsXG4gIG9uVGVzdENoYW5uZWwsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG4gIHNlY3VyZUZpZWxkcyxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLypcbiAgICAgIEZpbmQgZmllbGRzIHRoYXQgaGF2ZSBkZXBlbmRlbmNpZXMgb24gb3RoZXIgZmllbGRzIGFuZCByZW1vdmVzIGR1cGxpY2F0ZXMuXG4gICAgICBOZWVkcyB0byBiZSBwcmVmaXhlZCB3aXRoIHNldHRpbmdzLlxuICAgICovXG4gICAgY29uc3QgZmllbGRzVG9XYXRjaCA9XG4gICAgICBuZXcgU2V0KFxuICAgICAgICBzZWxlY3RlZENoYW5uZWw/Lm9wdGlvbnNcbiAgICAgICAgICAuZmlsdGVyKChvKSA9PiBvLnNob3dXaGVuLmZpZWxkKVxuICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBzZXR0aW5ncy4ke29wdGlvbi5zaG93V2hlbi5maWVsZH1gO1xuICAgICAgICAgIH0pXG4gICAgICApIHx8IFtdO1xuICAgIHdhdGNoKFsndHlwZScsICdzZW5kUmVtaW5kZXInLCAndXBsb2FkSW1hZ2UnLCAuLi5maWVsZHNUb1dhdGNoXSk7XG4gIH0sIFtzZWxlY3RlZENoYW5uZWw/Lm9wdGlvbnMsIHdhdGNoXSk7XG5cbiAgY29uc3QgY3VycmVudEZvcm1WYWx1ZXMgPSBnZXRWYWx1ZXMoKTtcblxuICBpZiAoIXNlbGVjdGVkQ2hhbm5lbCkge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICA8QmFzaWNTZXR0aW5nc1xuICAgICAgICAgIHNlbGVjdGVkQ2hhbm5lbD17c2VsZWN0ZWRDaGFubmVsfVxuICAgICAgICAgIGNoYW5uZWxzPXtzZWxlY3RhYmxlQ2hhbm5lbHN9XG4gICAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAgICAgcmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBJZiB0aGVyZSBhcmUgbm8gbm9uLXJlcXVpcmVkIGZpZWxkcywgZG9uJ3QgcmVuZGVyIHRoaXMgc2VjdGlvbiovfVxuICAgICAge3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgICA8Q2hhbm5lbFNldHRpbmdzXG4gICAgICAgICAgICBzZWxlY3RlZENoYW5uZWw9e3NlbGVjdGVkQ2hhbm5lbH1cbiAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17c2VjdXJlRmllbGRzfVxuICAgICAgICAgICAgcmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgPE5vdGlmaWNhdGlvblNldHRpbmdzXG4gICAgICAgICAgaW1hZ2VSZW5kZXJlckF2YWlsYWJsZT17aW1hZ2VSZW5kZXJlckF2YWlsYWJsZX1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUJ1dHRvbnN9PlxuICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gb25UZXN0Q2hhbm5lbChnZXRWYWx1ZXMoKSl9PlxuICAgICAgICAgICAgVGVzdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxhIGhyZWY9e2Ake2NvbmZpZy5hcHBTdWJVcmx9L2FsZXJ0aW5nL25vdGlmaWNhdGlvbnNgfT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZvcm1Db250YWluZXI6IGNzc2BgLFxuICAgIGZvcm1JdGVtOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGZvcm1CdXR0b25zOiBjc3NgXG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZpZWxkLCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE9wdGlvbkVsZW1lbnQgfSBmcm9tICcuL09wdGlvbkVsZW1lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM6IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25bXTtcbiAgY3VycmVudEZvcm1WYWx1ZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE87XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcblxuICBvblJlc2V0U2VjdXJlRmllbGQ6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWxPcHRpb25zLFxuICByZWdpc3RlcixcbiAgb25SZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzZWxlY3RlZENoYW5uZWxPcHRpb25zLm1hcCgob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke29wdGlvbi5sYWJlbH0tJHtpbmRleH1gO1xuICAgICAgICAvLyBTb21lIG9wdGlvbnMgY2FuIGJlIGRlcGVuZGVudCBvbiBvdGhlciBvcHRpb25zLCB0aGlzIGRldGVybWluZXMgd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgZGVwZW5kZW5jeSBvcHRpb25zXG4gICAgICAgIC8vIEkgdGhpbmsgdGhpcyBuZWVkcyBtb3JlIHRob3VnaHQuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWUgPVxuICAgICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzW2BzZXR0aW5ncy4ke29wdGlvbi5zaG93V2hlbi5maWVsZH1gXSAmJlxuICAgICAgICAgIChjdXJyZW50Rm9ybVZhbHVlc1tgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YF0gYXMgU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pLnZhbHVlO1xuXG4gICAgICAgIGlmIChvcHRpb24uc2hvd1doZW4uZmllbGQgJiYgc2VsZWN0ZWRPcHRpb25WYWx1ZSAhPT0gb3B0aW9uLnNob3dXaGVuLmlzKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uLmVsZW1lbnQgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpZWxkIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFxuICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlY3VyZSA/IGBzZWN1cmVTZXR0aW5ncy4ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YCA6IGBzZXR0aW5ncy4ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgbGFiZWw9e29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17b3B0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17b3B0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgaW52YWxpZD17ZXJyb3JzLnNldHRpbmdzICYmICEhZXJyb3JzLnNldHRpbmdzW29wdGlvbi5wcm9wZXJ0eU5hbWVdfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5zZXR0aW5ncyAmJiBlcnJvcnMuc2V0dGluZ3Nbb3B0aW9uLnByb3BlcnR5TmFtZV0/Lm1lc3NhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3VyZUZpZWxkcyAmJiBzZWN1cmVGaWVsZHNbb3B0aW9uLnByb3BlcnR5TmFtZV0gPyAoXG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiQ29uZmlndXJlZFwiXG4gICAgICAgICAgICAgICAgc3VmZml4PXtcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25SZXNldFNlY3VyZUZpZWxkKG9wdGlvbi5wcm9wZXJ0eU5hbWUpfSBmaWxsPVwidGV4dFwiIHR5cGU9XCJidXR0b25cIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxPcHRpb25FbGVtZW50IG9wdGlvbj17b3B0aW9ufSByZWdpc3Rlcj17cmVnaXN0ZXJ9IGNvbnRyb2w9e2NvbnRyb2x9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCwgQ29sbGFwc2FibGVTZWN0aW9uLCBGaWVsZCwgSW5mb0JveCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsRm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMge1xuICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uU2V0dGluZ3M6IEZDPFByb3BzPiA9ICh7IGN1cnJlbnRGb3JtVmFsdWVzLCBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlLCByZWdpc3RlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNhYmxlU2VjdGlvbiBsYWJlbD1cIk5vdGlmaWNhdGlvbiBzZXR0aW5nc1wiIGlzT3Blbj17ZmFsc2V9PlxuICAgICAgPEZpZWxkPlxuICAgICAgICA8Q2hlY2tib3ggey4uLnJlZ2lzdGVyKCdpc0RlZmF1bHQnKX0gbGFiZWw9XCJEZWZhdWx0XCIgZGVzY3JpcHRpb249XCJVc2UgdGhpcyBub3RpZmljYXRpb24gZm9yIGFsbCBhbGVydHNcIiAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdzZXR0aW5ncy51cGxvYWRJbWFnZScpfVxuICAgICAgICAgIGxhYmVsPVwiSW5jbHVkZSBpbWFnZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJDYXB0dXJlcyBhbiBpbWFnZSBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgbm90aWZpY2F0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICB7Y3VycmVudEZvcm1WYWx1ZXMudXBsb2FkSW1hZ2UgJiYgIWltYWdlUmVuZGVyZXJBdmFpbGFibGUgJiYgKFxuICAgICAgICA8SW5mb0JveCB0aXRsZT1cIk5vIGltYWdlIHJlbmRlcmVyIGF2YWlsYWJsZS9pbnN0YWxsZWRcIj5cbiAgICAgICAgICBHcmFmYW5hIGNhbm5vdCBmaW5kIGFuIGltYWdlIHJlbmRlcmVyIHRvIGNhcHR1cmUgYW4gaW1hZ2UgZm9yIHRoZSBub3RpZmljYXRpb24uIFBsZWFzZSBtYWtlIHN1cmUgdGhlIEdyYWZhbmFcbiAgICAgICAgICBJbWFnZSBSZW5kZXJlciBwbHVnaW4gaXMgaW5zdGFsbGVkLiBQbGVhc2UgY29udGFjdCB5b3VyIEdyYWZhbmEgYWRtaW5pc3RyYXRvciB0byBpbnN0YWxsIHRoZSBwbHVnaW4uXG4gICAgICAgIDwvSW5mb0JveD5cbiAgICAgICl9XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHsuLi5yZWdpc3RlcignZGlzYWJsZVJlc29sdmVNZXNzYWdlJyl9XG4gICAgICAgICAgbGFiZWw9XCJEaXNhYmxlIFJlc29sdmUgTWVzc2FnZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJEaXNhYmxlIHRoZSByZXNvbHZlIG1lc3NhZ2UgW09LXSB0aGF0IGlzIHNlbnQgd2hlbiBhbGVydGluZyBzdGF0ZSByZXR1cm5zIHRvIGZhbHNlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHsuLi5yZWdpc3Rlcignc2VuZFJlbWluZGVyJyl9XG4gICAgICAgICAgbGFiZWw9XCJTZW5kIHJlbWluZGVyc1wiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJTZW5kIGFkZGl0aW9uYWwgbm90aWZpY2F0aW9ucyBmb3IgdHJpZ2dlcmVkIGFsZXJ0c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAge2N1cnJlbnRGb3JtVmFsdWVzLnNlbmRSZW1pbmRlciAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIlNlbmQgcmVtaW5kZXIgZXZlcnlcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTcGVjaWZ5IGhvdyBvZnRlbiByZW1pbmRlcnMgc2hvdWxkIGJlIHNlbnQsIGUuZy4gZXZlcnkgMzBzLCAxbSwgMTBtLCAzMG0nLCBvciAxaCBldGMuXG4gICAgICAgICAgICBBbGVydCByZW1pbmRlcnMgYXJlIHNlbnQgYWZ0ZXIgcnVsZXMgYXJlIGV2YWx1YXRlZC4gQSByZW1pbmRlciBjYW4gbmV2ZXIgYmUgc2VudCBtb3JlIGZyZXF1ZW50bHlcbiAgICAgICAgICAgIHRoYW4gYSBjb25maWd1cmVkIGFsZXJ0IHJ1bGUgZXZhbHVhdGlvbiBpbnRlcnZhbC5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ2ZyZXF1ZW5jeScpfSB3aWR0aD17OH0gLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Db2xsYXBzYWJsZVNlY3Rpb24+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybUFQSSwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBpY2s8Rm9ybUFQSTxhbnk+LCAncmVnaXN0ZXInIHwgJ2NvbnRyb2wnPiB7XG4gIG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbjtcbiAgaW52YWxpZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25FbGVtZW50OiBGQzxQcm9wcz4gPSAoeyBjb250cm9sLCBvcHRpb24sIHJlZ2lzdGVyLCBpbnZhbGlkIH0pID0+IHtcbiAgY29uc3QgbW9kZWxWYWx1ZSA9IG9wdGlvbi5zZWN1cmUgPyBgc2VjdXJlU2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWAgOiBgc2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG4gIHN3aXRjaCAob3B0aW9uLmVsZW1lbnQpIHtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoYCR7bW9kZWxWYWx1ZX1gLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICh2KSA9PiAob3B0aW9uLnZhbGlkYXRpb25SdWxlICE9PSAnJyA/IHZhbGlkYXRlT3B0aW9uKHYsIG9wdGlvbi52YWxpZGF0aW9uUnVsZSkgOiB0cnVlKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHR5cGU9e29wdGlvbi5pbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e29wdGlvbi5wbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgbmFtZT17YCR7bW9kZWxWYWx1ZX1gfVxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxTZWxlY3QgbWVudVNob3VsZFBvcnRhbCB7Li4uZmllbGR9IG9wdGlvbnM9e29wdGlvbi5zZWxlY3RPcHRpb25zID8/IHVuZGVmaW5lZH0gaW52YWxpZD17aW52YWxpZH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKTtcblxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKGAke21vZGVsVmFsdWV9YCwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4gKG9wdGlvbi52YWxpZGF0aW9uUnVsZSAhPT0gJycgPyB2YWxpZGF0ZU9wdGlvbih2LCBvcHRpb24udmFsaWRhdGlvblJ1bGUpIDogdHJ1ZSksXG4gICAgICAgICAgfSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgbm90IHN1cHBvcnRlZCcsIG9wdGlvbi5lbGVtZW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uUnVsZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBSZWdFeHAodmFsaWRhdGlvblJ1bGUpLnRlc3QodmFsdWUpID8gdHJ1ZSA6ICdJbnZhbGlkIGZvcm1hdCc7XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBsb2FkQWxlcnRSdWxlcywgbG9hZGVkQWxlcnRSdWxlcywgbm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCwgc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMgfSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IEFsZXJ0UnVsZURUTywgTm90aWZpZXJEVE8sIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uLCBjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGVydFJ1bGVzQXN5bmMob3B0aW9uczogeyBzdGF0ZTogc3RyaW5nIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChsb2FkQWxlcnRSdWxlcygpKTtcbiAgICBjb25zdCBydWxlczogQWxlcnRSdWxlRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2FsZXJ0cycsIG9wdGlvbnMpO1xuICAgIGRpc3BhdGNoKGxvYWRlZEFsZXJ0UnVsZXMocnVsZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBhdXNlQWxlcnRSdWxlKGlkOiBudW1iZXIsIG9wdGlvbnM6IHsgcGF1c2VkOiBib29sZWFuIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydHMvJHtpZH0vcGF1c2VgLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdGF0ZUZpbHRlciA9IGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKS5zdGF0ZSB8fCAnYWxsJztcbiAgICBkaXNwYXRjaChnZXRBbGVydFJ1bGVzQXN5bmMoeyBzdGF0ZTogc3RhdGVGaWx0ZXIudG9TdHJpbmcoKSB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PFByb21pc2U8dm9pZD4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zYCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIGNyZWF0ZWQnKSkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2RhdGEuaWR9YCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIHVwZGF0ZWQnKSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oZXJyb3IuZGF0YS5lcnJvcikpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGdldFN0YXRlKCkubm90aWZpY2F0aW9uQ2hhbm5lbC5ub3RpZmljYXRpb25DaGFubmVsO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvdGVzdCcsIHsgaWQ6IGNoYW5uZWwuaWQsIC4uLmRhdGEgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uVHlwZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgYWxlcnROb3RpZmllcnM6IE5vdGlmaWVyRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWVyc2ApO1xuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uVHlwZXMgPSBhbGVydE5vdGlmaWVycy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgIGlmIChvMS5uYW1lID4gbzIubmFtZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzKG5vdGlmaWNhdGlvblR5cGVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbChpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZE5vdGlmaWNhdGlvblR5cGVzKCkpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNoYW5uZWwgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChub3RpZmljYXRpb25DaGFubmVsTG9hZGVkKG5vdGlmaWNhdGlvbkNoYW5uZWwpKTtcbiAgfTtcbn1cbiIsImltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsRFRPLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPID0ge1xuICBpZDogLTEsXG4gIG5hbWU6ICcnLFxuICB0eXBlOiB7IHZhbHVlOiAnZW1haWwnLCBsYWJlbDogJ0VtYWlsJyB9LFxuICBzZW5kUmVtaW5kZXI6IGZhbHNlLFxuICBkaXNhYmxlUmVzb2x2ZU1lc3NhZ2U6IGZhbHNlLFxuICBmcmVxdWVuY3k6ICcxNW0nLFxuICBzZXR0aW5nczoge1xuICAgIHVwbG9hZEltYWdlOiBjb25maWcucmVuZGVyZXJBdmFpbGFibGUsXG4gICAgYXV0b1Jlc29sdmU6IHRydWUsXG4gICAgaHR0cE1ldGhvZDogJ1BPU1QnLFxuICAgIHNldmVyaXR5OiAnY3JpdGljYWwnLFxuICB9LFxuICBzZWN1cmVTZXR0aW5nczoge30sXG4gIHNlY3VyZUZpZWxkczoge30sXG4gIGlzRGVmYXVsdDogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgbWFwQ2hhbm5lbHNUb1NlbGVjdGFibGVWYWx1ZSA9IG1lbW9pemVPbmUoXG4gIChub3RpZmljYXRpb25DaGFubmVsczogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVbXSwgaW5jbHVkZURlc2NyaXB0aW9uOiBib29sZWFuKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+IHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uQ2hhbm5lbHMubWFwKChjaGFubmVsKSA9PiB7XG4gICAgICBpZiAoaW5jbHVkZURlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGNoYW5uZWwudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGNoYW5uZWwubGFiZWwsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5uZWwuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogY2hhbm5lbC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNoYW5uZWwubGFiZWwsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtU3VibWl0RGF0YSA9IChmb3JtRGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4ge1xuICAvKlxuICAgIFNvbWUgc2V0dGluZ3MgY2FuIGJlIG9wdGlvbnMgaW4gYSBzZWxlY3QsIGluIG9yZGVyIHRvIG5vdCBzYXZlIGEgU2VsZWN0YWJsZVZhbHVlPFQ+XG4gICAgd2UgbmVlZCB0byB1c2UgY2hlY2sgaWYgaXQgaXMgYSBTZWxlY3RhYmxlVmFsdWUgYW5kIHVzZSBpdHMgdmFsdWUuXG4gICovXG4gIGNvbnN0IHNldHRpbmdzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKGZvcm1EYXRhLnNldHRpbmdzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgcmV0dXJuIFtrZXksIHZhbHVlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gdmFsdWUudmFsdWUgOiB2YWx1ZV07XG4gICAgfSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgLi4uZm9ybURhdGEsXG4gICAgZnJlcXVlbmN5OiBmb3JtRGF0YS5mcmVxdWVuY3kgPT09ICcnID8gZGVmYXVsdFZhbHVlcy5mcmVxdWVuY3kgOiBmb3JtRGF0YS5mcmVxdWVuY3ksXG4gICAgdHlwZTogZm9ybURhdGEudHlwZS52YWx1ZSxcbiAgICBzZXR0aW5nczogeyAuLi5kZWZhdWx0VmFsdWVzLnNldHRpbmdzLCAuLi5zZXR0aW5ncyB9LFxuICAgIHNlY3VyZVNldHRpbmdzOiB7IC4uLmZvcm1EYXRhLnNlY3VyZVNldHRpbmdzIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtVGVzdERhdGEgPSAoZm9ybURhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgIHR5cGU6IGZvcm1EYXRhLnR5cGUudmFsdWUsXG4gICAgZnJlcXVlbmN5OiBmb3JtRGF0YS5mcmVxdWVuY3kgPz8gZGVmYXVsdFZhbHVlcy5mcmVxdWVuY3ksXG4gICAgc2V0dGluZ3M6IHsgLi4uT2JqZWN0LmFzc2lnbihkZWZhdWx0VmFsdWVzLnNldHRpbmdzLCBmb3JtRGF0YS5zZXR0aW5ncykgfSxcbiAgICBzZWN1cmVTZXR0aW5nczogeyAuLi5mb3JtRGF0YS5zZWN1cmVTZXR0aW5ncyB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJjb25uZWN0IiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJob2lzdE5vblJlYWN0U3RhdGljcyIsImNvbm5lY3RXaXRoQ2xlYW5VcCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInN0YXRlU2VsZWN0b3IiLCJDb21wb25lbnQiLCJDb25uZWN0ZWRDb21wb25lbnQiLCJDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCIsInByb3BzIiwiZGlzcGF0Y2giLCJjbGVhblVwIiwiZGlzcGxheU5hbWUiLCJQdXJlQ29tcG9uZW50IiwiY29uZmlnIiwiRm9ybSIsIlNwaW5uZXIiLCJQYWdlIiwiTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0iLCJsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbCIsInRlc3ROb3RpZmljYXRpb25DaGFubmVsIiwidXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCIsImdldE5hdk1vZGVsIiwibWFwQ2hhbm5lbHNUb1NlbGVjdGFibGVWYWx1ZSIsInRyYW5zZm9ybVN1Ym1pdERhdGEiLCJ0cmFuc2Zvcm1UZXN0RGF0YSIsInJlc2V0U2VjdXJlRmllbGQiLCJFZGl0Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UiLCJmb3JtRGF0YSIsIm5vdGlmaWNhdGlvbkNoYW5uZWwiLCJzZXR0aW5ncyIsImlkIiwiY29tcG9uZW50RGlkTW91bnQiLCJwYXJzZUludCIsIm1hdGNoIiwicGFyYW1zIiwicmVuZGVyIiwibmF2TW9kZWwiLCJub3RpZmljYXRpb25DaGFubmVsVHlwZXMiLCJvblN1Ym1pdCIsInR5cGUiLCJmaW5kIiwibiIsInZhbHVlIiwiY29udHJvbCIsImVycm9ycyIsImdldFZhbHVlcyIsInJlZ2lzdGVyIiwid2F0Y2giLCJzZWxlY3RlZENoYW5uZWwiLCJjIiwicmVuZGVyZXJBdmFpbGFibGUiLCJvblRlc3RDaGFubmVsIiwic2VjdXJlRmllbGRzIiwic3RhdGUiLCJuYXZJbmRleCIsIkZpZWxkIiwiSW5wdXQiLCJJbnB1dENvbnRyb2wiLCJTZWxlY3QiLCJOb3RpZmljYXRpb25DaGFubmVsT3B0aW9ucyIsIkJhc2ljU2V0dGluZ3MiLCJjdXJyZW50Rm9ybVZhbHVlcyIsImNoYW5uZWxzIiwibmFtZSIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsImZpZWxkIiwib3B0aW9ucyIsImZpbHRlciIsIm8iLCJBbGVydCIsIkNvbGxhcHNhYmxlU2VjdGlvbiIsIkNoYW5uZWxTZXR0aW5ncyIsImhlYWRpbmciLCJpbmZvIiwiY3NzIiwiQnV0dG9uIiwiSG9yaXpvbnRhbEdyb3VwIiwic3R5bGVzRmFjdG9yeSIsInVzZVRoZW1lIiwiTm90aWZpY2F0aW9uU2V0dGluZ3MiLCJzZWxlY3RhYmxlQ2hhbm5lbHMiLCJpbWFnZVJlbmRlcmVyQXZhaWxhYmxlIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZmllbGRzVG9XYXRjaCIsIlNldCIsInNob3dXaGVuIiwibWFwIiwib3B0aW9uIiwiZm9ybUNvbnRhaW5lciIsImZvcm1JdGVtIiwibGVuZ3RoIiwiZm9ybUJ1dHRvbnMiLCJhcHBTdWJVcmwiLCJ0aGVtZSIsInNwYWNpbmciLCJtZCIsInhsIiwiQ2hlY2tib3giLCJPcHRpb25FbGVtZW50Iiwic2VsZWN0ZWRDaGFubmVsT3B0aW9ucyIsIm9uUmVzZXRTZWN1cmVGaWVsZCIsImluZGV4Iiwia2V5IiwibGFiZWwiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwiaXMiLCJlbGVtZW50Iiwic2VjdXJlIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRpb24iLCJJbmZvQm94IiwidXBsb2FkSW1hZ2UiLCJzZW5kUmVtaW5kZXIiLCJUZXh0QXJlYSIsImludmFsaWQiLCJtb2RlbFZhbHVlIiwidmFsaWRhdGUiLCJ2IiwidmFsaWRhdGlvblJ1bGUiLCJ2YWxpZGF0ZU9wdGlvbiIsImlucHV0VHlwZSIsInBsYWNlaG9sZGVyIiwic2VsZWN0T3B0aW9ucyIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJlcnJvciIsIlJlZ0V4cCIsInRlc3QiLCJnZXRCYWNrZW5kU3J2IiwibG9jYXRpb25TZXJ2aWNlIiwibG9hZEFsZXJ0UnVsZXMiLCJsb2FkZWRBbGVydFJ1bGVzIiwibm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCIsInNldE5vdGlmaWNhdGlvbkNoYW5uZWxzIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIiwibm90aWZ5QXBwIiwiZ2V0QWxlcnRSdWxlc0FzeW5jIiwicnVsZXMiLCJnZXQiLCJ0b2dnbGVQYXVzZUFsZXJ0UnVsZSIsInBvc3QiLCJzdGF0ZUZpbHRlciIsImdldFNlYXJjaE9iamVjdCIsInRvU3RyaW5nIiwiY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCIsImRhdGEiLCJwdXNoIiwicHV0IiwiZ2V0U3RhdGUiLCJjaGFubmVsIiwibG9hZE5vdGlmaWNhdGlvblR5cGVzIiwiYWxlcnROb3RpZmllcnMiLCJub3RpZmljYXRpb25UeXBlcyIsInNvcnQiLCJvMSIsIm8yIiwibWVtb2l6ZU9uZSIsImRlZmF1bHRWYWx1ZXMiLCJkaXNhYmxlUmVzb2x2ZU1lc3NhZ2UiLCJmcmVxdWVuY3kiLCJhdXRvUmVzb2x2ZSIsImh0dHBNZXRob2QiLCJzZXZlcml0eSIsInNlY3VyZVNldHRpbmdzIiwiaXNEZWZhdWx0Iiwibm90aWZpY2F0aW9uQ2hhbm5lbHMiLCJpbmNsdWRlRGVzY3JpcHRpb24iLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ApiKeysPage"],{

/***/ "./public/app/features/api-keys/ApiKeysActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysActionBar": () => (/* binding */ ApiKeysActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const ApiKeysActionBar = ({
  searchQuery,
  disabled,
  onAddClick,
  onSearchChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "page-action-bar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gf-form gf-form--grow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
        placeholder: "Search keys",
        value: searchQuery,
        onChange: onSearchChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "pull-right",
      onClick: onAddClick,
      disabled: disabled,
      children: "Add API key"
    })]
  });
};

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysAddedModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysAddedModal": () => (/* binding */ ApiKeysAddedModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Alert, _p;









function ApiKeysAddedModal({
  onDismiss,
  apiKey,
  rootPath
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const getClipboardText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => apiKey, [apiKey]);

  const onClipboardCopy = () => {
    (0,_store_store__WEBPACK_IMPORTED_MODULE_4__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createSuccessNotification)('Content copied to clipboard')));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: "API Key Created",
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    isOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "Key",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        id: "Key",
        value: apiKey,
        readOnly: true,
        addonAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ClipboardButton, {
          variant: "primary",
          getText: getClipboardText,
          onClipboardCopy: onClipboardCopy,
          children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "copy"
          })), " Copy"]
        })
      })
    }), _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "info",
      title: "You will only be able to view this key here once!",
      children: "It is not stored in this form, so be sure to copy it now."
    })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: "text-muted",
      children: "You can authenticate a request using the Authorization HTTP header, example:"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("pre", {
      className: styles.small,
      children: ["curl -H \"Authorization: Bearer ", apiKey, "\" ", rootPath, "/api/dashboards/home"]
    })]
  });
}

function getStyles(theme) {
  return {
    label: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      padding: ${theme.spacing(1)};
      background-color: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
    `,
    small: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-size: ${theme.typography.bodySmall.fontSize};
      font-weight: ${theme.typography.bodySmall.fontWeight};
    `
  };
}

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysController.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysController": () => (/* binding */ ApiKeysController)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

const ApiKeysController = ({
  children
}) => {
  const [isAdding, setIsAdding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleIsAdding = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsAdding(!isAdding);
  }, [isAdding]);
  return children({
    isAdding,
    toggleIsAdding
  });
};

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysForm": () => (/* binding */ ApiKeysForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _span;









const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LegacyForms;
const ROLE_OPTIONS = Object.keys(_types__WEBPACK_IMPORTED_MODULE_2__.OrgRole).map(role => ({
  label: role,
  value: role
}));

function isValidInterval(value) {
  if (!value) {
    return true;
  }

  try {
    _grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.intervalToSeconds(value);
    return true;
  } catch {}

  return false;
}

const timeRangeValidationEvents = {
  [_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.EventsWithValidation.onBlur]: [{
    rule: isValidInterval,
    errorMessage: 'Not a valid duration'
  }]
};
const tooltipText = 'The API key life duration. For example, 1d if your key is going to last for one day. Supported units are: s,m,h,d,w,M,y';
const ApiKeysForm = ({
  show,
  onClose,
  onKeyAdded,
  disabled
}) => {
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_types__WEBPACK_IMPORTED_MODULE_2__.OrgRole.Viewer);
  const [secondsToLive, setSecondsToLive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setName('');
    setRole(_types__WEBPACK_IMPORTED_MODULE_2__.OrgRole.Viewer);
    setSecondsToLive('');
  }, [show]);

  const onSubmit = event => {
    event.preventDefault();

    if (isValidInterval(secondsToLive)) {
      onKeyAdded({
        name,
        role,
        secondsToLive
      });
      onClose();
    }
  };

  const onNameChange = event => {
    setName(event.currentTarget.value);
  };

  const onRoleChange = role => {
    setRole(role.value);
  };

  const onSecondsToLiveChange = event => {
    setSecondsToLive(event.currentTarget.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_4__.SlideDown, {
    in: show,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "gf-form-inline cta-form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_5__.CloseButton, {
        onClick: onClose
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        className: "gf-form-group",
        onSubmit: onSubmit,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
          children: "Add API Key"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "gf-form max-width-21",
            children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "gf-form-label",
              children: "Key name"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Input, {
              type: "text",
              className: "gf-form-input",
              value: name,
              placeholder: "Name",
              onChange: onNameChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
              label: "Role",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
                inputId: "role-select",
                value: role,
                onChange: onRoleChange,
                options: ROLE_OPTIONS,
                menuShouldPortal: true
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form max-width-21",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
              tooltip: tooltipText,
              label: "Time to live",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Input, {
                id: "time-to-live-input",
                type: "text",
                placeholder: "1d",
                validationEvents: timeRangeValidationEvents,
                value: secondsToLive,
                onChange: onSecondsToLiveChange
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              disabled: disabled,
              children: "Add"
            })
          })]
        })]
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysPageUnconnected": () => (/* binding */ ApiKeysPageUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/api-keys/state/selectors.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/api-keys/state/actions.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _ApiKeysAddedModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/api-keys/ApiKeysAddedModal.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_features_profile_state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/profile/state/selectors.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/api-keys/state/reducers.ts");
/* harmony import */ var _ApiKeysForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/api-keys/ApiKeysForm.tsx");
/* harmony import */ var _ApiKeysActionBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/api-keys/ApiKeysActionBar.tsx");
/* harmony import */ var _ApiKeysTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/api-keys/ApiKeysTable.tsx");
/* harmony import */ var _ApiKeysController__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/api-keys/ApiKeysController.tsx");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Utils
























function mapStateToProps(state) {
  const canRead = app_core_core__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_2__.AccessControlAction.ActionAPIKeysRead, true);
  const canCreate = app_core_core__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_2__.AccessControlAction.ActionAPIKeysCreate, true);
  const canDelete = app_core_core__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_2__.AccessControlAction.ActionAPIKeysDelete, true);
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, 'apikeys'),
    apiKeys: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_4__.getApiKeys)(state.apiKeys),
    searchQuery: state.apiKeys.searchQuery,
    apiKeysCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_4__.getApiKeysCount)(state.apiKeys),
    hasFetched: state.apiKeys.hasFetched,
    timeZone: (0,app_features_profile_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getTimeZone)(state.user),
    includeExpired: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_4__.getIncludeExpired)(state.apiKeys),
    includeExpiredDisabled: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_4__.getIncludeExpiredDisabled)(state.apiKeys),
    canRead: canRead,
    canCreate: canCreate,
    canDelete: canDelete
  };
}

const mapDispatchToProps = {
  loadApiKeys: _state_actions__WEBPACK_IMPORTED_MODULE_5__.loadApiKeys,
  deleteApiKey: _state_actions__WEBPACK_IMPORTED_MODULE_5__.deleteApiKey,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_14__.setSearchQuery,
  toggleIncludeExpired: _state_actions__WEBPACK_IMPORTED_MODULE_5__.toggleIncludeExpired,
  addApiKey: _state_actions__WEBPACK_IMPORTED_MODULE_5__.addApiKey
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class ApiKeysPageUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDeleteApiKey", key => {
      this.props.deleteApiKey(key.id);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "onIncludeExpiredChange", event => {
      this.props.toggleIncludeExpired();
    });

    _defineProperty(this, "onAddApiKey", newApiKey => {
      const openModal = apiKey => {
        const rootPath = window.location.origin + app_core_config__WEBPACK_IMPORTED_MODULE_8__["default"].appSubUrl;
        app_core_app_events__WEBPACK_IMPORTED_MODULE_9__["default"].publish(new app_types_events__WEBPACK_IMPORTED_MODULE_19__.ShowModalReactEvent({
          props: {
            apiKey,
            rootPath
          },
          component: _ApiKeysAddedModal__WEBPACK_IMPORTED_MODULE_7__.ApiKeysAddedModal
        }));
      };

      const secondsToLive = newApiKey.secondsToLive;

      try {
        const secondsToLiveAsNumber = secondsToLive ? _grafana_data__WEBPACK_IMPORTED_MODULE_12__.rangeUtil.intervalToSeconds(secondsToLive) : null;
        const apiKey = Object.assign({}, newApiKey, {
          secondsToLive: secondsToLiveAsNumber
        });
        this.props.addApiKey(apiKey, openModal);
        this.setState(prevState => {
          return Object.assign({}, prevState, {
            isAdding: false
          });
        });
      } catch (err) {
        console.error(err);
      }
    });
  }

  componentDidMount() {
    this.fetchApiKeys();
  }

  async fetchApiKeys() {
    await this.props.loadApiKeys();
  }

  render() {
    const {
      hasFetched,
      navModel,
      apiKeysCount,
      apiKeys,
      searchQuery,
      timeZone,
      includeExpired,
      includeExpiredDisabled,
      canRead,
      canCreate,
      canDelete
    } = this.props;

    if (!hasFetched) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
        navModel: navModel,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
          isLoading: true
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
        isLoading: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ApiKeysController__WEBPACK_IMPORTED_MODULE_18__.ApiKeysController, {
          children: ({
            isAdding,
            toggleIsAdding
          }) => {
            const showCTA = !isAdding && apiKeysCount === 0;
            const showTable = apiKeysCount > 0;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
              children: [showCTA ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_10__["default"], {
                title: "You haven't added any API keys yet.",
                buttonIcon: "key-skeleton-alt",
                onClick: toggleIsAdding,
                buttonTitle: "New API key",
                proTip: "Remember, you can provide view-only API access to other applications.",
                buttonDisabled: !canCreate
              }) : null, showTable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ApiKeysActionBar__WEBPACK_IMPORTED_MODULE_16__.ApiKeysActionBar, {
                searchQuery: searchQuery,
                disabled: isAdding || !canCreate,
                onAddClick: toggleIsAdding,
                onSearchChange: this.onSearchQueryChange
              }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ApiKeysForm__WEBPACK_IMPORTED_MODULE_15__.ApiKeysForm, {
                show: isAdding,
                onClose: toggleIsAdding,
                onKeyAdded: this.onAddApiKey,
                disabled: !canCreate
              }), showTable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.VerticalGroup, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineField, {
                  disabled: includeExpiredDisabled,
                  label: "Include expired keys",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineSwitch, {
                    id: "showExpired",
                    value: includeExpired,
                    onChange: this.onIncludeExpiredChange
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ApiKeysTable__WEBPACK_IMPORTED_MODULE_17__.ApiKeysTable, {
                  apiKeys: apiKeys,
                  timeZone: timeZone,
                  onDelete: this.onDeleteApiKey,
                  canRead: canRead,
                  canDelete: canDelete
                })]
              }) : null]
            });
          }
        })
      })
    });
  }

}
const ApiKeysPage = connector(ApiKeysPageUnconnected);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiKeysPage);

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysTable": () => (/* binding */ ApiKeysTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;







const ApiKeysTable = ({
  apiKeys,
  timeZone,
  onDelete,
  canRead,
  canDelete
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useTheme2)();
  const styles = getStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
    className: "filter-table",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "Name"
        })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "Role"
        })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "Expires"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          style: {
            width: '34px'
          }
        })]
      })
    }), canRead && apiKeys.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
      children: apiKeys.map(key => {
        const isExpired = Boolean(key.expiration && Date.now() > new Date(key.expiration).getTime());
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          className: styles.tableRow(isExpired),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: key.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: key.role
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
            children: [formatDate(key.expiration, timeZone), isExpired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: styles.tooltipContainer,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                content: "This API key has expired.",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  name: 'exclamation-triangle'
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.DeleteButton, {
              "aria-label": "Delete API key",
              size: "sm",
              onConfirm: () => onDelete(key),
              disabled: !canDelete
            })
          })]
        }, key.id);
      })
    }) : null]
  });
};

function formatDate(expiration, timeZone) {
  if (!expiration) {
    return 'No expiration date';
  }

  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(expiration, {
    timeZone
  });
}

const getStyles = theme => ({
  tableRow: isExpired => _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    color: ${isExpired ? theme.colors.text.secondary : theme.colors.text.primary};
  `,
  tooltipContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-left: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/api-keys/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addApiKey": () => (/* binding */ addApiKey),
/* harmony export */   "deleteApiKey": () => (/* binding */ deleteApiKey),
/* harmony export */   "loadApiKeys": () => (/* binding */ loadApiKeys),
/* harmony export */   "toggleIncludeExpired": () => (/* binding */ toggleIncludeExpired)
/* harmony export */ });
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/api-keys/state/reducers.ts");


function addApiKey(apiKey, openModal) {
  return async dispatch => {
    const result = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/auth/keys', apiKey);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setSearchQuery)(''));
    dispatch(loadApiKeys());
    openModal(result.key);
  };
}
function loadApiKeys() {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.isFetching)());
    const [keys, keysIncludingExpired] = await Promise.all([(0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/auth/keys?includeExpired=false'), (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/auth/keys?includeExpired=true')]);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.apiKeysLoaded)({
      keys,
      keysIncludingExpired
    }));
  };
}
function deleteApiKey(id) {
  return async dispatch => {
    (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/auth/keys/${id}`).then(() => dispatch(loadApiKeys()));
  };
}
function toggleIncludeExpired() {
  return dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.includeExpiredToggled)());
  };
}

/***/ }),

/***/ "./public/app/features/api-keys/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApiKeys": () => (/* binding */ getApiKeys),
/* harmony export */   "getApiKeysCount": () => (/* binding */ getApiKeysCount),
/* harmony export */   "getIncludeExpired": () => (/* binding */ getIncludeExpired),
/* harmony export */   "getIncludeExpiredDisabled": () => (/* binding */ getIncludeExpiredDisabled)
/* harmony export */ });
const getApiKeysCount = state => state.includeExpired ? state.keysIncludingExpired.length : state.keys.length;
const getApiKeys = state => {
  const regex = RegExp(state.searchQuery, 'i');
  const keysToFilter = state.includeExpired ? state.keysIncludingExpired : state.keys;
  return keysToFilter.filter(key => {
    return regex.test(key.name) || regex.test(key.role);
  });
};
const getIncludeExpired = state => state.includeExpired;
const getIncludeExpiredDisabled = state => state.keys.length === 0 && state.keysIncludingExpired.length > 0;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9CQUFOLENBQTJCbEIsTUFBbEQsR0FBMkR0RCxLQUFLLENBQUNwRCxJQUFOLENBQVcwRyxNQURqRTtBQUdBLE1BQU0xRSxVQUFVLEdBQUlvQixLQUFELElBQXlCO0FBQ2pELFFBQU04RSxLQUFLLEdBQUdDLE1BQU0sQ0FBQy9FLEtBQUssQ0FBQzFHLFdBQVAsRUFBb0IsR0FBcEIsQ0FBcEI7QUFDQSxRQUFNMEwsWUFBWSxHQUFHaEYsS0FBSyxDQUFDZSxjQUFOLEdBQXVCZixLQUFLLENBQUN3RSxvQkFBN0IsR0FBb0R4RSxLQUFLLENBQUNwRCxJQUEvRTtBQUVBLFNBQU9vSSxZQUFZLENBQUNDLE1BQWIsQ0FBcUIzRCxHQUFELElBQVM7QUFDbEMsV0FBT3dELEtBQUssQ0FBQ0ksSUFBTixDQUFXNUQsR0FBRyxDQUFDM0QsSUFBZixLQUF3Qm1ILEtBQUssQ0FBQ0ksSUFBTixDQUFXNUQsR0FBRyxDQUFDeEUsSUFBZixDQUEvQjtBQUNELEdBRk0sQ0FBUDtBQUdELENBUE07QUFTQSxNQUFNZ0MsaUJBQWlCLEdBQUlrQixLQUFELElBQXlCQSxLQUFLLENBQUNlLGNBQXpEO0FBRUEsTUFBTWhDLHlCQUF5QixHQUFJaUIsS0FBRCxJQUN2Q0EsS0FBSyxDQUFDcEQsSUFBTixDQUFXMEcsTUFBWCxLQUFzQixDQUF0QixJQUEyQnRELEtBQUssQ0FBQ3dFLG9CQUFOLENBQTJCbEIsTUFBM0IsR0FBb0MsQ0FEMUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hcGkta2V5cy9BcGlLZXlzQWN0aW9uQmFyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hcGkta2V5cy9BcGlLZXlzQWRkZWRNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQXBpS2V5c0NvbnRyb2xsZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FwaS1rZXlzL0FwaUtleXNGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hcGkta2V5cy9BcGlLZXlzUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQXBpS2V5c1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hcGkta2V5cy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FwaS1rZXlzL3N0YXRlL3NlbGVjdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIEZpbHRlcklucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25BZGRDbGljazogKCkgPT4gdm9pZDtcbiAgb25TZWFyY2hDaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQXBpS2V5c0FjdGlvbkJhcjogRkM8UHJvcHM+ID0gKHsgc2VhcmNoUXVlcnksIGRpc2FibGVkLCBvbkFkZENsaWNrLCBvblNlYXJjaENoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgIDxGaWx0ZXJJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBrZXlzXCIgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17b25TZWFyY2hDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIG9uQ2xpY2s9e29uQWRkQ2xpY2t9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgIEFkZCBBUEkga2V5XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQWxlcnQsIEZpZWxkLCBNb2RhbCwgdXNlU3R5bGVzMiwgSW5wdXQsIEljb24sIENsaXBib2FyZEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJy4uLy4uL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgYXBpS2V5OiBzdHJpbmc7XG4gIHJvb3RQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcGlLZXlzQWRkZWRNb2RhbCh7IG9uRGlzbWlzcywgYXBpS2V5LCByb290UGF0aCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBnZXRDbGlwYm9hcmRUZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4gYXBpS2V5LCBbYXBpS2V5XSk7XG4gIGNvbnN0IG9uQ2xpcGJvYXJkQ29weSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignQ29udGVudCBjb3BpZWQgdG8gY2xpcGJvYXJkJykpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdGl0bGU9XCJBUEkgS2V5IENyZWF0ZWRcIiBvbkRpc21pc3M9e29uRGlzbWlzc30gb25DbGlja0JhY2tkcm9wPXtvbkRpc21pc3N9IGlzT3Blbj5cbiAgICAgIDxGaWVsZCBsYWJlbD1cIktleVwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpZD1cIktleVwiXG4gICAgICAgICAgdmFsdWU9e2FwaUtleX1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICAgIGFkZG9uQWZ0ZXI9e1xuICAgICAgICAgICAgPENsaXBib2FyZEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGdldFRleHQ9e2dldENsaXBib2FyZFRleHR9IG9uQ2xpcGJvYXJkQ29weT17b25DbGlwYm9hcmRDb3B5fT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNvcHlcIiAvPiBDb3B5XG4gICAgICAgICAgICA8L0NsaXBib2FyZEJ1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiaW5mb1wiIHRpdGxlPVwiWW91IHdpbGwgb25seSBiZSBhYmxlIHRvIHZpZXcgdGhpcyBrZXkgaGVyZSBvbmNlIVwiPlxuICAgICAgICBJdCBpcyBub3Qgc3RvcmVkIGluIHRoaXMgZm9ybSwgc28gYmUgc3VyZSB0byBjb3B5IGl0IG5vdy5cbiAgICAgIDwvQWxlcnQ+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Zb3UgY2FuIGF1dGhlbnRpY2F0ZSBhIHJlcXVlc3QgdXNpbmcgdGhlIEF1dGhvcml6YXRpb24gSFRUUCBoZWFkZXIsIGV4YW1wbGU6PC9wPlxuICAgICAgPHByZSBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbH0+XG4gICAgICAgIGN1cmwgLUggJnF1b3Q7QXV0aG9yaXphdGlvbjogQmVhcmVyIHthcGlLZXl9JnF1b3Q7IHtyb290UGF0aH0vYXBpL2Rhc2hib2FyZHMvaG9tZVxuICAgICAgPC9wcmU+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICBgLFxuICAgIHNtYWxsOiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5ib2R5U21hbGwuZm9udFNpemV9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5ib2R5U21hbGwuZm9udFdlaWdodH07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBBcGkge1xuICBpc0FkZGluZzogYm9vbGVhbjtcbiAgdG9nZ2xlSXNBZGRpbmc6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiAocHJvcHM6IEFwaSkgPT4gSlNYLkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBBcGlLZXlzQ29udHJvbGxlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNBZGRpbmcsIHNldElzQWRkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlSXNBZGRpbmcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNBZGRpbmcoIWlzQWRkaW5nKTtcbiAgfSwgW2lzQWRkaW5nXSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuKHsgaXNBZGRpbmcsIHRvZ2dsZUlzQWRkaW5nIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgRkMsIEZvcm1FdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV2ZW50c1dpdGhWYWxpZGF0aW9uLCBMZWdhY3lGb3JtcywgVmFsaWRhdGlvbkV2ZW50cywgQnV0dG9uLCBTZWxlY3QsIElubGluZUZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTmV3QXBpS2V5LCBPcmdSb2xlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgcmFuZ2VVdGlsLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNsaWRlRG93biB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9BbmltYXRpb25zL1NsaWRlRG93bic7XG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24vQ2xvc2VCdXR0b24nO1xuXG5jb25zdCB7IElucHV0IH0gPSBMZWdhY3lGb3JtcztcbmNvbnN0IFJPTEVfT1BUSU9OUzogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPE9yZ1JvbGU+PiA9IE9iamVjdC5rZXlzKE9yZ1JvbGUpLm1hcCgocm9sZSkgPT4gKHtcbiAgbGFiZWw6IHJvbGUsXG4gIHZhbHVlOiByb2xlIGFzIE9yZ1JvbGUsXG59KSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNob3c6IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG9uS2V5QWRkZWQ6IChhcGlLZXk6IE5ld0FwaUtleSkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRJbnRlcnZhbCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHJhbmdlVXRpbC5pbnRlcnZhbFRvU2Vjb25kcyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2gge31cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCB0aW1lUmFuZ2VWYWxpZGF0aW9uRXZlbnRzOiBWYWxpZGF0aW9uRXZlbnRzID0ge1xuICBbRXZlbnRzV2l0aFZhbGlkYXRpb24ub25CbHVyXTogW1xuICAgIHtcbiAgICAgIHJ1bGU6IGlzVmFsaWRJbnRlcnZhbCxcbiAgICAgIGVycm9yTWVzc2FnZTogJ05vdCBhIHZhbGlkIGR1cmF0aW9uJyxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgdG9vbHRpcFRleHQgPVxuICAnVGhlIEFQSSBrZXkgbGlmZSBkdXJhdGlvbi4gRm9yIGV4YW1wbGUsIDFkIGlmIHlvdXIga2V5IGlzIGdvaW5nIHRvIGxhc3QgZm9yIG9uZSBkYXkuIFN1cHBvcnRlZCB1bml0cyBhcmU6IHMsbSxoLGQsdyxNLHknO1xuXG5leHBvcnQgY29uc3QgQXBpS2V5c0Zvcm06IEZDPFByb3BzPiA9ICh7IHNob3csIG9uQ2xvc2UsIG9uS2V5QWRkZWQsIGRpc2FibGVkIH0pID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlPE9yZ1JvbGU+KE9yZ1JvbGUuVmlld2VyKTtcbiAgY29uc3QgW3NlY29uZHNUb0xpdmUsIHNldFNlY29uZHNUb0xpdmVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TmFtZSgnJyk7XG4gICAgc2V0Um9sZShPcmdSb2xlLlZpZXdlcik7XG4gICAgc2V0U2Vjb25kc1RvTGl2ZSgnJyk7XG4gIH0sIFtzaG93XSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQ6IEZvcm1FdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGlzVmFsaWRJbnRlcnZhbChzZWNvbmRzVG9MaXZlKSkge1xuICAgICAgb25LZXlBZGRlZCh7IG5hbWUsIHJvbGUsIHNlY29uZHNUb0xpdmUgfSk7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbk5hbWVDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0TmFtZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgb25Sb2xlQ2hhbmdlID0gKHJvbGU6IFNlbGVjdGFibGVWYWx1ZTxPcmdSb2xlPikgPT4ge1xuICAgIHNldFJvbGUocm9sZS52YWx1ZSEpO1xuICB9O1xuICBjb25zdCBvblNlY29uZHNUb0xpdmVDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0U2Vjb25kc1RvTGl2ZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTbGlkZURvd24gaW49e3Nob3d9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZSBjdGEtZm9ybVwiPlxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGg1PkFkZCBBUEkgS2V5PC9oNT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gbWF4LXdpZHRoLTIxXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWxcIj5LZXkgbmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbnB1dFwiIHZhbHVlPXtuYW1lfSBwbGFjZWhvbGRlcj1cIk5hbWVcIiBvbkNoYW5nZT17b25OYW1lQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiUm9sZVwiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJyb2xlLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cm9sZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblJvbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtST0xFX09QVElPTlN9XG4gICAgICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIG1heC13aWR0aC0yMVwiPlxuICAgICAgICAgICAgICA8SW5saW5lRmllbGQgdG9vbHRpcD17dG9vbHRpcFRleHR9IGxhYmVsPVwiVGltZSB0byBsaXZlXCI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInRpbWUtdG8tbGl2ZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjFkXCJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FdmVudHM9e3RpbWVSYW5nZVZhbGlkYXRpb25FdmVudHN9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2Vjb25kc1RvTGl2ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlY29uZHNUb0xpdmVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfT5BZGQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NsaWRlRG93bj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gVXRpbHNcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIEFwaUtleSwgTmV3QXBpS2V5LCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IGdldEFwaUtleXMsIGdldEFwaUtleXNDb3VudCwgZ2V0SW5jbHVkZUV4cGlyZWQsIGdldEluY2x1ZGVFeHBpcmVkRGlzYWJsZWQgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBhZGRBcGlLZXksIGRlbGV0ZUFwaUtleSwgbG9hZEFwaUtleXMsIHRvZ2dsZUluY2x1ZGVFeHBpcmVkIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEFwaUtleXNBZGRlZE1vZGFsIH0gZnJvbSAnLi9BcGlLZXlzQWRkZWRNb2RhbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IEVtcHR5TGlzdENUQSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0VtcHR5TGlzdENUQS9FbXB0eUxpc3RDVEEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZVN3aXRjaCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHJhbmdlVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0VGltZVpvbmUgfSBmcm9tICdhcHAvZmVhdHVyZXMvcHJvZmlsZS9zdGF0ZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2V0U2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7IEFwaUtleXNGb3JtIH0gZnJvbSAnLi9BcGlLZXlzRm9ybSc7XG5pbXBvcnQgeyBBcGlLZXlzQWN0aW9uQmFyIH0gZnJvbSAnLi9BcGlLZXlzQWN0aW9uQmFyJztcbmltcG9ydCB7IEFwaUtleXNUYWJsZSB9IGZyb20gJy4vQXBpS2V5c1RhYmxlJztcbmltcG9ydCB7IEFwaUtleXNDb250cm9sbGVyIH0gZnJvbSAnLi9BcGlLZXlzQ29udHJvbGxlcic7XG5pbXBvcnQgeyBTaG93TW9kYWxSZWFjdEV2ZW50IH0gZnJvbSAnYXBwL3R5cGVzL2V2ZW50cyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICBjb25zdCBjYW5SZWFkID0gY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25BUElLZXlzUmVhZCwgdHJ1ZSk7XG4gIGNvbnN0IGNhbkNyZWF0ZSA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uQVBJS2V5c0NyZWF0ZSwgdHJ1ZSk7XG4gIGNvbnN0IGNhbkRlbGV0ZSA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uQVBJS2V5c0RlbGV0ZSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdhcGlrZXlzJyksXG4gICAgYXBpS2V5czogZ2V0QXBpS2V5cyhzdGF0ZS5hcGlLZXlzKSxcbiAgICBzZWFyY2hRdWVyeTogc3RhdGUuYXBpS2V5cy5zZWFyY2hRdWVyeSxcbiAgICBhcGlLZXlzQ291bnQ6IGdldEFwaUtleXNDb3VudChzdGF0ZS5hcGlLZXlzKSxcbiAgICBoYXNGZXRjaGVkOiBzdGF0ZS5hcGlLZXlzLmhhc0ZldGNoZWQsXG4gICAgdGltZVpvbmU6IGdldFRpbWVab25lKHN0YXRlLnVzZXIpLFxuICAgIGluY2x1ZGVFeHBpcmVkOiBnZXRJbmNsdWRlRXhwaXJlZChzdGF0ZS5hcGlLZXlzKSxcbiAgICBpbmNsdWRlRXhwaXJlZERpc2FibGVkOiBnZXRJbmNsdWRlRXhwaXJlZERpc2FibGVkKHN0YXRlLmFwaUtleXMpLFxuICAgIGNhblJlYWQ6IGNhblJlYWQsXG4gICAgY2FuQ3JlYXRlOiBjYW5DcmVhdGUsXG4gICAgY2FuRGVsZXRlOiBjYW5EZWxldGUsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZEFwaUtleXMsXG4gIGRlbGV0ZUFwaUtleSxcbiAgc2V0U2VhcmNoUXVlcnksXG4gIHRvZ2dsZUluY2x1ZGVFeHBpcmVkLFxuICBhZGRBcGlLZXksXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuaW50ZXJmYWNlIE93blByb3BzIHt9XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNBZGRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBBcGlLZXlzUGFnZVVuY29ubmVjdGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaEFwaUtleXMoKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoQXBpS2V5cygpIHtcbiAgICBhd2FpdCB0aGlzLnByb3BzLmxvYWRBcGlLZXlzKCk7XG4gIH1cblxuICBvbkRlbGV0ZUFwaUtleSA9IChrZXk6IEFwaUtleSkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlQXBpS2V5KGtleS5pZCEpO1xuICB9O1xuXG4gIG9uU2VhcmNoUXVlcnlDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoUXVlcnkodmFsdWUpO1xuICB9O1xuXG4gIG9uSW5jbHVkZUV4cGlyZWRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5wcm9wcy50b2dnbGVJbmNsdWRlRXhwaXJlZCgpO1xuICB9O1xuXG4gIG9uQWRkQXBpS2V5ID0gKG5ld0FwaUtleTogTmV3QXBpS2V5KSA9PiB7XG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKGFwaUtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByb290UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBjb25maWcuYXBwU3ViVXJsO1xuXG4gICAgICBhcHBFdmVudHMucHVibGlzaChcbiAgICAgICAgbmV3IFNob3dNb2RhbFJlYWN0RXZlbnQoe1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhcGlLZXksXG4gICAgICAgICAgICByb290UGF0aCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBvbmVudDogQXBpS2V5c0FkZGVkTW9kYWwsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWNvbmRzVG9MaXZlID0gbmV3QXBpS2V5LnNlY29uZHNUb0xpdmU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlY29uZHNUb0xpdmVBc051bWJlciA9IHNlY29uZHNUb0xpdmUgPyByYW5nZVV0aWwuaW50ZXJ2YWxUb1NlY29uZHMoc2Vjb25kc1RvTGl2ZSkgOiBudWxsO1xuICAgICAgY29uc3QgYXBpS2V5OiBBcGlLZXkgPSB7XG4gICAgICAgIC4uLm5ld0FwaUtleSxcbiAgICAgICAgc2Vjb25kc1RvTGl2ZTogc2Vjb25kc1RvTGl2ZUFzTnVtYmVyLFxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMuYWRkQXBpS2V5KGFwaUtleSwgb3Blbk1vZGFsKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZTogU3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgaXNBZGRpbmc6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoYXNGZXRjaGVkLFxuICAgICAgbmF2TW9kZWwsXG4gICAgICBhcGlLZXlzQ291bnQsXG4gICAgICBhcGlLZXlzLFxuICAgICAgc2VhcmNoUXVlcnksXG4gICAgICB0aW1lWm9uZSxcbiAgICAgIGluY2x1ZGVFeHBpcmVkLFxuICAgICAgaW5jbHVkZUV4cGlyZWREaXNhYmxlZCxcbiAgICAgIGNhblJlYWQsXG4gICAgICBjYW5DcmVhdGUsXG4gICAgICBjYW5EZWxldGUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWhhc0ZldGNoZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXt0cnVlfT57fTwvUGFnZS5Db250ZW50cz5cbiAgICAgICAgPC9QYWdlPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtmYWxzZX0+XG4gICAgICAgICAgPEFwaUtleXNDb250cm9sbGVyPlxuICAgICAgICAgICAgeyh7IGlzQWRkaW5nLCB0b2dnbGVJc0FkZGluZyB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNob3dDVEEgPSAhaXNBZGRpbmcgJiYgYXBpS2V5c0NvdW50ID09PSAwO1xuICAgICAgICAgICAgICBjb25zdCBzaG93VGFibGUgPSBhcGlLZXlzQ291bnQgPiAwO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7c2hvd0NUQSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5TGlzdENUQVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmVuJ3QgYWRkZWQgYW55IEFQSSBrZXlzIHlldC5cIlxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkljb249XCJrZXktc2tlbGV0b24tYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVJc0FkZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBidXR0b25UaXRsZT1cIk5ldyBBUEkga2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9UaXA9XCJSZW1lbWJlciwgeW91IGNhbiBwcm92aWRlIHZpZXctb25seSBBUEkgYWNjZXNzIHRvIG90aGVyIGFwcGxpY2F0aW9ucy5cIlxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkRpc2FibGVkPXshY2FuQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICB7c2hvd1RhYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICA8QXBpS2V5c0FjdGlvbkJhclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNBZGRpbmcgfHwgIWNhbkNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZENsaWNrPXt0b2dnbGVJc0FkZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5vblNlYXJjaFF1ZXJ5Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8QXBpS2V5c0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNBZGRpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RvZ2dsZUlzQWRkaW5nfVxuICAgICAgICAgICAgICAgICAgICBvbktleUFkZGVkPXt0aGlzLm9uQWRkQXBpS2V5fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhbkNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7c2hvd1RhYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICA8VmVydGljYWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lRmllbGQgZGlzYWJsZWQ9e2luY2x1ZGVFeHBpcmVkRGlzYWJsZWR9IGxhYmVsPVwiSW5jbHVkZSBleHBpcmVkIGtleXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmxpbmVTd2l0Y2ggaWQ9XCJzaG93RXhwaXJlZFwiIHZhbHVlPXtpbmNsdWRlRXhwaXJlZH0gb25DaGFuZ2U9e3RoaXMub25JbmNsdWRlRXhwaXJlZENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgIDxBcGlLZXlzVGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaUtleXM9e2FwaUtleXN9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZT17dGltZVpvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17dGhpcy5vbkRlbGV0ZUFwaUtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhblJlYWQ9e2NhblJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5EZWxldGU9e2NhbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9BcGlLZXlzQ29udHJvbGxlcj5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgQXBpS2V5c1BhZ2UgPSBjb25uZWN0b3IoQXBpS2V5c1BhZ2VVbmNvbm5lY3RlZCk7XG5leHBvcnQgZGVmYXVsdCBBcGlLZXlzUGFnZTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgSWNvbiwgSWNvbk5hbWUsIFRvb2x0aXAsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGRhdGVUaW1lRm9ybWF0LCBHcmFmYW5hVGhlbWUyLCBUaW1lWm9uZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBcGlLZXkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhcGlLZXlzOiBBcGlLZXlbXTtcbiAgdGltZVpvbmU6IFRpbWVab25lO1xuICBvbkRlbGV0ZTogKGFwaUtleTogQXBpS2V5KSA9PiB2b2lkO1xuICBjYW5SZWFkOiBib29sZWFuO1xuICBjYW5EZWxldGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBBcGlLZXlzVGFibGU6IEZDPFByb3BzPiA9ICh7IGFwaUtleXMsIHRpbWVab25lLCBvbkRlbGV0ZSwgY2FuUmVhZCwgY2FuRGVsZXRlIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZTIoKTtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHRoZW1lKTtcblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICA8dGg+Um9sZTwvdGg+XG4gICAgICAgICAgPHRoPkV4cGlyZXM8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzM0cHgnIH19IC8+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAge2NhblJlYWQgJiYgYXBpS2V5cy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2FwaUtleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRXhwaXJlZCA9IEJvb2xlYW4oa2V5LmV4cGlyYXRpb24gJiYgRGF0ZS5ub3coKSA+IG5ldyBEYXRlKGtleS5leHBpcmF0aW9uKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17a2V5LmlkfSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvdyhpc0V4cGlyZWQpfT5cbiAgICAgICAgICAgICAgICA8dGQ+e2tleS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntrZXkucm9sZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGtleS5leHBpcmF0aW9uLCB0aW1lWm9uZSl9XG4gICAgICAgICAgICAgICAgICB7aXNFeHBpcmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD1cIlRoaXMgQVBJIGtleSBoYXMgZXhwaXJlZC5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9eydleGNsYW1hdGlvbi10cmlhbmdsZScgYXMgSWNvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIEFQSSBrZXlcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IG9uRGVsZXRlKGtleSl9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvdGFibGU+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGV4cGlyYXRpb246IHN0cmluZyB8IHVuZGVmaW5lZCwgdGltZVpvbmU6IFRpbWVab25lKTogc3RyaW5nIHtcbiAgaWYgKCFleHBpcmF0aW9uKSB7XG4gICAgcmV0dXJuICdObyBleHBpcmF0aW9uIGRhdGUnO1xuICB9XG4gIHJldHVybiBkYXRlVGltZUZvcm1hdChleHBpcmF0aW9uLCB7IHRpbWVab25lIH0pO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHRhYmxlUm93OiAoaXNFeHBpcmVkOiBib29sZWFuKSA9PiBjc3NgXG4gICAgY29sb3I6ICR7aXNFeHBpcmVkID8gdGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5IDogdGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gIGAsXG4gIHRvb2x0aXBDb250YWluZXI6IGNzc2BcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IEFwaUtleSwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgYXBpS2V5c0xvYWRlZCwgaW5jbHVkZUV4cGlyZWRUb2dnbGVkLCBpc0ZldGNoaW5nLCBzZXRTZWFyY2hRdWVyeSB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXBpS2V5KGFwaUtleTogQXBpS2V5LCBvcGVuTW9kYWw6IChrZXk6IHN0cmluZykgPT4gdm9pZCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2F1dGgva2V5cycsIGFwaUtleSk7XG4gICAgZGlzcGF0Y2goc2V0U2VhcmNoUXVlcnkoJycpKTtcbiAgICBkaXNwYXRjaChsb2FkQXBpS2V5cygpKTtcbiAgICBvcGVuTW9kYWwocmVzdWx0LmtleSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXBpS2V5cygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChpc0ZldGNoaW5nKCkpO1xuICAgIGNvbnN0IFtrZXlzLCBrZXlzSW5jbHVkaW5nRXhwaXJlZF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2F1dGgva2V5cz9pbmNsdWRlRXhwaXJlZD1mYWxzZScpLFxuICAgICAgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9hdXRoL2tleXM/aW5jbHVkZUV4cGlyZWQ9dHJ1ZScpLFxuICAgIF0pO1xuICAgIGRpc3BhdGNoKGFwaUtleXNMb2FkZWQoeyBrZXlzLCBrZXlzSW5jbHVkaW5nRXhwaXJlZCB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBcGlLZXkoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmRlbGV0ZShgL2FwaS9hdXRoL2tleXMvJHtpZH1gKVxuICAgICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobG9hZEFwaUtleXMoKSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlSW5jbHVkZUV4cGlyZWQoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goaW5jbHVkZUV4cGlyZWRUb2dnbGVkKCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgQXBpS2V5c1N0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldEFwaUtleXNDb3VudCA9IChzdGF0ZTogQXBpS2V5c1N0YXRlKSA9PlxuICBzdGF0ZS5pbmNsdWRlRXhwaXJlZCA/IHN0YXRlLmtleXNJbmNsdWRpbmdFeHBpcmVkLmxlbmd0aCA6IHN0YXRlLmtleXMubGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgZ2V0QXBpS2V5cyA9IChzdGF0ZTogQXBpS2V5c1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuICBjb25zdCBrZXlzVG9GaWx0ZXIgPSBzdGF0ZS5pbmNsdWRlRXhwaXJlZCA/IHN0YXRlLmtleXNJbmNsdWRpbmdFeHBpcmVkIDogc3RhdGUua2V5cztcblxuICByZXR1cm4ga2V5c1RvRmlsdGVyLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3Qoa2V5Lm5hbWUpIHx8IHJlZ2V4LnRlc3Qoa2V5LnJvbGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbmNsdWRlRXhwaXJlZCA9IChzdGF0ZTogQXBpS2V5c1N0YXRlKSA9PiBzdGF0ZS5pbmNsdWRlRXhwaXJlZDtcblxuZXhwb3J0IGNvbnN0IGdldEluY2x1ZGVFeHBpcmVkRGlzYWJsZWQgPSAoc3RhdGU6IEFwaUtleXNTdGF0ZSkgPT5cbiAgc3RhdGUua2V5cy5sZW5ndGggPT09IDAgJiYgc3RhdGUua2V5c0luY2x1ZGluZ0V4cGlyZWQubGVuZ3RoID4gMDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZpbHRlcklucHV0IiwiQXBpS2V5c0FjdGlvbkJhciIsInNlYXJjaFF1ZXJ5IiwiZGlzYWJsZWQiLCJvbkFkZENsaWNrIiwib25TZWFyY2hDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImNzcyIsIkFsZXJ0IiwiRmllbGQiLCJNb2RhbCIsInVzZVN0eWxlczIiLCJJbnB1dCIsIkljb24iLCJDbGlwYm9hcmRCdXR0b24iLCJub3RpZnlBcHAiLCJkaXNwYXRjaCIsImNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24iLCJBcGlLZXlzQWRkZWRNb2RhbCIsIm9uRGlzbWlzcyIsImFwaUtleSIsInJvb3RQYXRoIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZ2V0Q2xpcGJvYXJkVGV4dCIsIm9uQ2xpcGJvYXJkQ29weSIsInNtYWxsIiwidGhlbWUiLCJsYWJlbCIsInNwYWNpbmciLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwic2Vjb25kYXJ5Iiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJ0eXBvZ3JhcGh5IiwiYm9keVNtYWxsIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidXNlU3RhdGUiLCJBcGlLZXlzQ29udHJvbGxlciIsImNoaWxkcmVuIiwiaXNBZGRpbmciLCJzZXRJc0FkZGluZyIsInRvZ2dsZUlzQWRkaW5nIiwidXNlRWZmZWN0IiwiRXZlbnRzV2l0aFZhbGlkYXRpb24iLCJMZWdhY3lGb3JtcyIsIlNlbGVjdCIsIklubGluZUZpZWxkIiwiT3JnUm9sZSIsInJhbmdlVXRpbCIsIlNsaWRlRG93biIsIkNsb3NlQnV0dG9uIiwiUk9MRV9PUFRJT05TIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvbGUiLCJ2YWx1ZSIsImlzVmFsaWRJbnRlcnZhbCIsImludGVydmFsVG9TZWNvbmRzIiwidGltZVJhbmdlVmFsaWRhdGlvbkV2ZW50cyIsIm9uQmx1ciIsInJ1bGUiLCJlcnJvck1lc3NhZ2UiLCJ0b29sdGlwVGV4dCIsIkFwaUtleXNGb3JtIiwic2hvdyIsIm9uQ2xvc2UiLCJvbktleUFkZGVkIiwibmFtZSIsInNldE5hbWUiLCJzZXRSb2xlIiwiVmlld2VyIiwic2Vjb25kc1RvTGl2ZSIsInNldFNlY29uZHNUb0xpdmUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbk5hbWVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwib25Sb2xlQ2hhbmdlIiwib25TZWNvbmRzVG9MaXZlQ2hhbmdlIiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiZ2V0TmF2TW9kZWwiLCJnZXRBcGlLZXlzIiwiZ2V0QXBpS2V5c0NvdW50IiwiZ2V0SW5jbHVkZUV4cGlyZWQiLCJnZXRJbmNsdWRlRXhwaXJlZERpc2FibGVkIiwiYWRkQXBpS2V5IiwiZGVsZXRlQXBpS2V5IiwibG9hZEFwaUtleXMiLCJ0b2dnbGVJbmNsdWRlRXhwaXJlZCIsIlBhZ2UiLCJjb25maWciLCJhcHBFdmVudHMiLCJFbXB0eUxpc3RDVEEiLCJJbmxpbmVTd2l0Y2giLCJWZXJ0aWNhbEdyb3VwIiwiZ2V0VGltZVpvbmUiLCJzZXRTZWFyY2hRdWVyeSIsIkFwaUtleXNUYWJsZSIsIlNob3dNb2RhbFJlYWN0RXZlbnQiLCJjb250ZXh0U3J2IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjYW5SZWFkIiwiaGFzQWNjZXNzIiwiQWN0aW9uQVBJS2V5c1JlYWQiLCJjYW5DcmVhdGUiLCJBY3Rpb25BUElLZXlzQ3JlYXRlIiwiY2FuRGVsZXRlIiwiQWN0aW9uQVBJS2V5c0RlbGV0ZSIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJhcGlLZXlzIiwiYXBpS2V5c0NvdW50IiwiaGFzRmV0Y2hlZCIsInRpbWVab25lIiwidXNlciIsImluY2x1ZGVFeHBpcmVkIiwiaW5jbHVkZUV4cGlyZWREaXNhYmxlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkFwaUtleXNQYWdlVW5jb25uZWN0ZWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwia2V5IiwiaWQiLCJuZXdBcGlLZXkiLCJvcGVuTW9kYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImFwcFN1YlVybCIsInB1Ymxpc2giLCJjb21wb25lbnQiLCJzZWNvbmRzVG9MaXZlQXNOdW1iZXIiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hBcGlLZXlzIiwicmVuZGVyIiwic2hvd0NUQSIsInNob3dUYWJsZSIsIm9uU2VhcmNoUXVlcnlDaGFuZ2UiLCJvbkFkZEFwaUtleSIsIm9uSW5jbHVkZUV4cGlyZWRDaGFuZ2UiLCJvbkRlbGV0ZUFwaUtleSIsIkFwaUtleXNQYWdlIiwiRGVsZXRlQnV0dG9uIiwiVG9vbHRpcCIsInVzZVRoZW1lMiIsImRhdGVUaW1lRm9ybWF0Iiwib25EZWxldGUiLCJ3aWR0aCIsImxlbmd0aCIsImlzRXhwaXJlZCIsIkJvb2xlYW4iLCJleHBpcmF0aW9uIiwiRGF0ZSIsIm5vdyIsImdldFRpbWUiLCJ0YWJsZVJvdyIsImZvcm1hdERhdGUiLCJ0b29sdGlwQ29udGFpbmVyIiwidGV4dCIsInByaW1hcnkiLCJnZXRCYWNrZW5kU3J2IiwiYXBpS2V5c0xvYWRlZCIsImluY2x1ZGVFeHBpcmVkVG9nZ2xlZCIsImlzRmV0Y2hpbmciLCJyZXN1bHQiLCJwb3N0Iiwia2V5c0luY2x1ZGluZ0V4cGlyZWQiLCJQcm9taXNlIiwiYWxsIiwiZ2V0IiwiZGVsZXRlIiwidGhlbiIsInJlZ2V4IiwiUmVnRXhwIiwia2V5c1RvRmlsdGVyIiwiZmlsdGVyIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=
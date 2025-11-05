"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserProfileEditPage"],{

/***/ "./public/app/core/components/SharedPreferences/SharedPreferences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedPreferences": () => (/* binding */ SharedPreferences),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/PreferencesService.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tooltip, _Trans, _Trans2, _Trans3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const themes = [{
  value: '',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.default-label',
    message: 'Default'
  })
}, {
  value: 'dark',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.dark-label',
    message: 'Dark'
  })
}, {
  value: 'light',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.light-label',
    message: 'Light'
  })
}];
class SharedPreferences extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "service", void 0);

    _defineProperty(this, "onSubmitForm", async () => {
      const {
        homeDashboardId,
        theme,
        timezone,
        weekStart
      } = this.state;
      await this.service.update({
        homeDashboardId,
        theme,
        timezone,
        weekStart
      });
      window.location.reload();
    });

    _defineProperty(this, "onThemeChanged", value => {
      this.setState({
        theme: value
      });
    });

    _defineProperty(this, "onTimeZoneChanged", timezone => {
      if (!timezone) {
        return;
      }

      this.setState({
        timezone: timezone
      });
    });

    _defineProperty(this, "onWeekStartChanged", weekStart => {
      this.setState({
        weekStart: weekStart
      });
    });

    _defineProperty(this, "onHomeDashboardChanged", dashboardId => {
      this.setState({
        homeDashboardId: dashboardId
      });
    });

    _defineProperty(this, "getFullDashName", dashboard => {
      if (typeof dashboard.folderTitle === 'undefined' || dashboard.folderTitle === '') {
        return dashboard.title;
      }

      return dashboard.folderTitle + ' / ' + dashboard.title;
    });

    this.service = new app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_5__.PreferencesService(props.resourceUri);
    this.state = {
      homeDashboardId: 0,
      theme: '',
      timezone: '',
      weekStart: '',
      dashboards: []
    };
  }

  async componentDidMount() {
    const prefs = await this.service.load();
    const dashboards = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.backendSrv.search({
      starred: true
    });
    const defaultDashboardHit = {
      id: 0,
      title: 'Default',
      tags: [],
      type: '',
      uid: '',
      uri: '',
      url: '',
      folderId: 0,
      folderTitle: '',
      folderUid: '',
      folderUrl: '',
      isStarred: false,
      slug: '',
      items: []
    };

    if (prefs.homeDashboardId > 0 && !dashboards.find(d => d.id === prefs.homeDashboardId)) {
      const missing = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.backendSrv.search({
        dashboardIds: [prefs.homeDashboardId]
      });

      if (missing && missing.length > 0) {
        dashboards.push(missing[0]);
      }
    }

    this.setState({
      homeDashboardId: prefs.homeDashboardId,
      theme: prefs.theme,
      timezone: prefs.timezone,
      weekStart: prefs.weekStart,
      dashboards: [defaultDashboardHit, ...dashboards]
    });
  }

  render() {
    const {
      theme,
      timezone,
      weekStart,
      homeDashboardId,
      dashboards
    } = this.state;
    const {
      disabled
    } = this.props;
    const styles = getStyles();

    const homeDashboardTooltip = _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__.Trans, {
        id: "shared-preferences.fields.home-dashboard-tooltip",
        message: "Not finding the dashboard you want? Star it first, then it should appear in this select box."
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "info-circle"
      })
    }));

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: this.onSubmitForm,
      children: () => {
        var _themes$find;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
          label: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__.Trans, {
            id: "shared-preferences.title",
            message: "Preferences"
          })),
          disabled: disabled,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
            /*i18n*/
            {
              id: 'shared-preferences.fields.theme-label',
              message: 'UI Theme'
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
              options: themes,
              value: (_themes$find = themes.find(item => item.value === theme)) === null || _themes$find === void 0 ? void 0 : _themes$find.value,
              onChange: this.onThemeChanged
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
              htmlFor: "home-dashboard-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: styles.labelText,
                children: _Trans2 || (_Trans2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__.Trans, {
                  id: "shared-preferences.fields.home-dashboard-label",
                  message: "Home Dashboard"
                }))
              }), homeDashboardTooltip]
            }),
            "data-testid": "User preferences home dashboard drop down",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
              menuShouldPortal: true,
              value: dashboards.find(dashboard => dashboard.id === homeDashboardId),
              getOptionValue: i => i.id,
              getOptionLabel: this.getFullDashName,
              onChange: dashboard => this.onHomeDashboardChanged(dashboard.id),
              options: dashboards,
              placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
              /*i18n*/
              {
                id: 'shared-preferences.fields.home-dashboard-placeholder',
                message: 'Choose default dashboard'
              }),
              inputId: "home-dashboard-select"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
            /*i18n*/
            {
              id: 'shared-dashboard.fields.timezone-label',
              message: 'Timezone'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.TimeZonePicker.containerV2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TimeZonePicker, {
              includeInternal: true,
              value: timezone,
              onChange: this.onTimeZoneChanged,
              inputId: "shared-preferences-timezone-picker"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
            /*i18n*/
            {
              id: 'shared-preferences.fields.week-start-label',
              message: 'Week start'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.WeekStartPicker.containerV2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.WeekStartPicker, {
              value: weekStart,
              onChange: this.onWeekStartChanged,
              inputId: 'shared-preferences-week-start-picker'
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-button-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "primary",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.UserProfile.preferencesSaveButton,
              children: _Trans3 || (_Trans3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__.Trans, {
                id: "common.save",
                message: "Save"
              }))
            })
          })]
        });
      }
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedPreferences);
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(() => {
  return {
    labelText: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-right: 6px;
    `
  };
});

/***/ }),

/***/ "./public/app/features/profile/UserOrganizations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserOrganizations": () => (/* binding */ UserOrganizations),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead, _Button, _Trans;







class UserOrganizations extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      orgs,
      user
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: "Loading organizations..."
      }));
    }

    if (orgs.length === 0) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        className: "page-sub-heading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
          id: "user-orgs.title",
          message: "Organizations"
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
          className: "filter-table form-inline",
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.UserProfile.orgsTable,
          children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                  id: "user-orgs.name-column",
                  message: "Name"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                  id: "user-orgs.role-column",
                  message: "Role"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {})]
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
            children: orgs.map((org, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: org.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: org.role
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  className: "text-right",
                  children: org.orgId === (user === null || user === void 0 ? void 0 : user.orgId) ? _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: true,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                      id: "user-orgs.current-org-button",
                      message: "Current"
                    })
                  })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => {
                      this.props.setUserOrg(org);
                    },
                    children: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                      id: "user-orgs.select-org-button",
                      message: "Select organisation"
                    }))
                  })
                })]
              }, index);
            })
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserOrganizations);

/***/ }),

/***/ "./public/app/features/profile/UserProfileEditForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileEditForm": () => (/* binding */ UserProfileEditForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Trans, _Trans2, _InputSuffix, _Trans3, _InputSuffix2, _InputSuffix3, _Trans4, _Tooltip;









const {
  disableLoginForm
} = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"];
const UserProfileEditForm = ({
  user,
  isSavingUser,
  updateProfile
}) => {
  const onSubmitProfileUpdate = data => {
    updateProfile(data);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmitProfileUpdate,
    validateOn: "onBlur",
    children: ({
      register,
      errors
    }) => {
      var _user$name, _user$email, _user$login;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
        label: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
          id: "user-profile.title",
          message: "Edit profile"
        })),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.name-label',
            message: 'Name'
          }),
          invalid: !!errors.name,
          error: _Trans2 || (_Trans2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
            id: "user-profile.fields.name-error",
            message: "Name is required"
          })),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('name', {
            required: true
          }), {
            id: "edit-user-profile-name",
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.name-label',
              message: 'Name'
            }),
            defaultValue: (_user$name = user === null || user === void 0 ? void 0 : user.name) !== null && _user$name !== void 0 ? _user$name : '',
            suffix: _InputSuffix || (_InputSuffix = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.email-label',
            message: 'Email'
          }),
          invalid: !!errors.email,
          error: _Trans3 || (_Trans3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
            id: "user-profile.fields.email-error",
            message: "Email is required"
          })),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('email', {
            required: true
          }), {
            id: "edit-user-profile-email",
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.email-label',
              message: 'Email'
            }),
            defaultValue: (_user$email = user === null || user === void 0 ? void 0 : user.email) !== null && _user$email !== void 0 ? _user$email : '',
            suffix: _InputSuffix2 || (_InputSuffix2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.username-label',
            message: 'Username'
          }),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('login'), {
            id: "edit-user-profile-username",
            defaultValue: (_user$login = user === null || user === void 0 ? void 0 : user.login) !== null && _user$login !== void 0 ? _user$login : '',
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.username-label',
              message: 'Username'
            }),
            suffix: _InputSuffix3 || (_InputSuffix3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form-button-row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "primary",
            disabled: isSavingUser,
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.UserProfile.profileSaveButton,
            children: _Trans4 || (_Trans4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
              id: "common.save",
              message: "Save"
            }))
          })
        })]
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfileEditForm);

const InputSuffix = () => {
  return disableLoginForm ? _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: "Login details locked because they are managed in another system.",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "lock"
    })
  })) : null;
};

/***/ }),

/***/ "./public/app/features/profile/UserProfileEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileEditPage": () => (/* binding */ UserProfileEditPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/profile/state/actions.ts");
/* harmony import */ var _UserProfileEditForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/profile/UserProfileEditForm.tsx");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var _UserTeams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/profile/UserTeams.tsx");
/* harmony import */ var _UserOrganizations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/profile/UserOrganizations.tsx");
/* harmony import */ var _UserSessions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/profile/UserSessions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _SharedPreferences;
















function mapStateToProps(state) {
  const userState = state.user;
  const {
    user,
    teams,
    orgs,
    sessions,
    teamsAreLoading,
    orgsAreLoading,
    sessionsAreLoading,
    isUpdating
  } = userState;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, 'profile-settings'),
    orgsAreLoading,
    sessionsAreLoading,
    teamsAreLoading,
    orgs,
    sessions,
    teams,
    isUpdating,
    user
  };
}

const mapDispatchToProps = {
  initUserProfilePage: _state_actions__WEBPACK_IMPORTED_MODULE_5__.initUserProfilePage,
  revokeUserSession: _state_actions__WEBPACK_IMPORTED_MODULE_5__.revokeUserSession,
  changeUserOrg: _state_actions__WEBPACK_IMPORTED_MODULE_5__.changeUserOrg,
  updateUserProfile: _state_actions__WEBPACK_IMPORTED_MODULE_5__.updateUserProfile
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function UserProfileEditPage({
  navModel,
  orgsAreLoading,
  sessionsAreLoading,
  teamsAreLoading,
  initUserProfilePage,
  orgs,
  sessions,
  teams,
  isUpdating,
  user,
  revokeUserSession,
  changeUserOrg,
  updateUserProfile
}) {
  (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => initUserProfilePage());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: !user,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserProfileEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
          updateProfile: updateUserProfile,
          isSavingUser: isUpdating,
          user: user
        }), _SharedPreferences || (_SharedPreferences = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_7__["default"], {
          resourceUri: "user"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserTeams__WEBPACK_IMPORTED_MODULE_8__.UserTeams, {
          isLoading: teamsAreLoading,
          teams: teams
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserOrganizations__WEBPACK_IMPORTED_MODULE_9__["default"], {
          isLoading: orgsAreLoading,
          setUserOrg: changeUserOrg,
          orgs: orgs,
          user: user
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserSessions__WEBPACK_IMPORTED_MODULE_10__["default"], {
          isLoading: sessionsAreLoading,
          revokeUserSession: revokeUserSession,
          sessions: sessions
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UserProfileEditPage));

/***/ }),

/***/ "./public/app/features/profile/UserSessions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead, _td, _Icon;










class UserSessions extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      sessions,
      revokeUserSession,
      i18n
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
          id: "user-sessions.loading",
          message: "Loading sessions..."
        })
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: sessions.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
          className: "page-sub-heading",
          children: "Sessions"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "gf-form-group",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
            className: "filter-table form-inline",
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.UserProfile.sessionsTable,
            children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.seen-at-column",
                    message: "Last seen"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.created-at-column",
                    message: "Logged on"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.ip-column",
                    message: "IP address"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.browser-column",
                    message: "Browser & OS"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {})]
              })
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
              children: sessions.map((session, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [session.isActive ? _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: "Now"
                })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: session.seenAt
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: i18n.date(session.createdAt, {
                    dateStyle: 'long'
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: session.clientIp
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                  children: [session.browser, " on ", session.os, " ", session.osVersion]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    size: "sm",
                    variant: "destructive",
                    onClick: () => revokeUserSession(session.id),
                    "aria-label": i18n._(
                    /*i18n*/
                    {
                      id: 'user-session.revoke',
                      message: 'Revoke user session'
                    }),
                    children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                      name: "power"
                    }))
                  })
                })]
              }, index))
            })]
          })
        })]
      })
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lingui_react__WEBPACK_IMPORTED_MODULE_4__.withI18n)()(UserSessions));

/***/ }),

/***/ "./public/app/features/profile/UserTeams.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTeams": () => (/* binding */ UserTeams),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead;





class UserTeams extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      teams
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: "Loading teams..."
      }));
    }

    if (teams.length === 0) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: "page-sub-heading",
        children: "Teams"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
          className: "filter-table form-inline",
          "aria-label": "User teams table",
          children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Members"
              })]
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
            children: teams.map((team, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  className: "width-4 text-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    className: "filter-table__avatar",
                    src: team.avatarUrl,
                    alt: ""
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.email
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.memberCount
                })]
              }, index);
            })
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserTeams);

/***/ }),

/***/ "./public/app/features/profile/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePassword": () => (/* binding */ changePassword),
/* harmony export */   "changeUserOrg": () => (/* binding */ changeUserOrg),
/* harmony export */   "initUserProfilePage": () => (/* binding */ initUserProfilePage),
/* harmony export */   "loadUser": () => (/* binding */ loadUser),
/* harmony export */   "revokeUserSession": () => (/* binding */ revokeUserSession),
/* harmony export */   "updateUserProfile": () => (/* binding */ updateUserProfile)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/profile/api.ts");



function changePassword(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_2__.api.changePassword(payload);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: false
    }));
  };
}
function initUserProfilePage() {
  return async function (dispatch) {
    await dispatch(loadUser());
    dispatch(loadTeams());
    dispatch(loadOrgs());
    dispatch(loadSessions());
  };
}
function loadUser() {
  return async function (dispatch) {
    const user = await _api__WEBPACK_IMPORTED_MODULE_2__.api.loadUser();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.userLoaded)({
      user
    }));
  };
}

function loadTeams() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.initLoadTeams)());
    const teams = await _api__WEBPACK_IMPORTED_MODULE_2__.api.loadTeams();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.teamsLoaded)({
      teams
    }));
  };
}

function loadOrgs() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.initLoadOrgs)());
    const orgs = await _api__WEBPACK_IMPORTED_MODULE_2__.api.loadOrgs();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.orgsLoaded)({
      orgs
    }));
  };
}

function loadSessions() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.initLoadSessions)());
    const sessions = await _api__WEBPACK_IMPORTED_MODULE_2__.api.loadSessions();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.sessionsLoaded)({
      sessions
    }));
  };
}

function revokeUserSession(tokenId) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_2__.api.revokeUserSession(tokenId);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.userSessionRevoked)({
      tokenId
    }));
  };
}
function changeUserOrg(org) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_2__.api.setUserOrg(org);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.appSubUrl + '/profile';
  };
}
function updateUserProfile(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_2__.api.updateUserProfile(payload);
    await dispatch(loadUser());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: false
    }));
  };
}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvU2hhcmVkUHJlZmVyZW5jZXMvU2hhcmVkUHJlZmVyZW5jZXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvVXNlck9yZ2FuaXphdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvVXNlclByb2ZpbGVFZGl0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcHJvZmlsZS9Vc2VyUHJvZmlsZUVkaXRQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL1VzZXJTZXNzaW9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcHJvZmlsZS9Vc2VyVGVhbXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtMDAzMjZlNzBiYS8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuMy4yLWEwMzJjYmViMDEtNzM3OTQ2MGY1MS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlTW91bnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEZpZWxkLFxuICBGaWVsZFNldCxcbiAgRm9ybSxcbiAgSWNvbixcbiAgTGFiZWwsXG4gIFJhZGlvQnV0dG9uR3JvdXAsXG4gIFNlbGVjdCxcbiAgc3R5bGVzRmFjdG9yeSxcbiAgVGltZVpvbmVQaWNrZXIsXG4gIFRvb2x0aXAsXG4gIFdlZWtTdGFydFBpY2tlcixcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkU2VhcmNoSGl0LCBEYXNoYm9hcmRTZWFyY2hJdGVtVHlwZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdHlwZXMnO1xuaW1wb3J0IHsgYmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IFByZWZlcmVuY2VzU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL1ByZWZlcmVuY2VzU2VydmljZSc7XG5pbXBvcnQgeyB0LCBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVzb3VyY2VVcmk6IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaG9tZURhc2hib2FyZElkOiBudW1iZXI7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIHRpbWV6b25lOiBzdHJpbmc7XG4gIHdlZWtTdGFydDogc3RyaW5nO1xuICBkYXNoYm9hcmRzOiBEYXNoYm9hcmRTZWFyY2hIaXRbXTtcbn1cblxuY29uc3QgdGhlbWVzOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtcbiAgeyB2YWx1ZTogJycsIGxhYmVsOiB0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMudGhlbWUuZGVmYXVsdC1sYWJlbCcsIG1lc3NhZ2U6ICdEZWZhdWx0JyB9KSB9LFxuICB7IHZhbHVlOiAnZGFyaycsIGxhYmVsOiB0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMudGhlbWUuZGFyay1sYWJlbCcsIG1lc3NhZ2U6ICdEYXJrJyB9KSB9LFxuICB7IHZhbHVlOiAnbGlnaHQnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmxpZ2h0LWxhYmVsJywgbWVzc2FnZTogJ0xpZ2h0JyB9KSB9LFxuXTtcblxuZXhwb3J0IGNsYXNzIFNoYXJlZFByZWZlcmVuY2VzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc2VydmljZTogUHJlZmVyZW5jZXNTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2VydmljZSA9IG5ldyBQcmVmZXJlbmNlc1NlcnZpY2UocHJvcHMucmVzb3VyY2VVcmkpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob21lRGFzaGJvYXJkSWQ6IDAsXG4gICAgICB0aGVtZTogJycsXG4gICAgICB0aW1lem9uZTogJycsXG4gICAgICB3ZWVrU3RhcnQ6ICcnLFxuICAgICAgZGFzaGJvYXJkczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHByZWZzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmxvYWQoKTtcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyBzdGFycmVkOiB0cnVlIH0pO1xuICAgIGNvbnN0IGRlZmF1bHREYXNoYm9hcmRIaXQ6IERhc2hib2FyZFNlYXJjaEhpdCA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgdGl0bGU6ICdEZWZhdWx0JyxcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgdHlwZTogJycgYXMgRGFzaGJvYXJkU2VhcmNoSXRlbVR5cGUsXG4gICAgICB1aWQ6ICcnLFxuICAgICAgdXJpOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBmb2xkZXJJZDogMCxcbiAgICAgIGZvbGRlclRpdGxlOiAnJyxcbiAgICAgIGZvbGRlclVpZDogJycsXG4gICAgICBmb2xkZXJVcmw6ICcnLFxuICAgICAgaXNTdGFycmVkOiBmYWxzZSxcbiAgICAgIHNsdWc6ICcnLFxuICAgICAgaXRlbXM6IFtdLFxuICAgIH07XG5cbiAgICBpZiAocHJlZnMuaG9tZURhc2hib2FyZElkID4gMCAmJiAhZGFzaGJvYXJkcy5maW5kKChkKSA9PiBkLmlkID09PSBwcmVmcy5ob21lRGFzaGJvYXJkSWQpKSB7XG4gICAgICBjb25zdCBtaXNzaW5nID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyBkYXNoYm9hcmRJZHM6IFtwcmVmcy5ob21lRGFzaGJvYXJkSWRdIH0pO1xuICAgICAgaWYgKG1pc3NpbmcgJiYgbWlzc2luZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRhc2hib2FyZHMucHVzaChtaXNzaW5nWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhvbWVEYXNoYm9hcmRJZDogcHJlZnMuaG9tZURhc2hib2FyZElkLFxuICAgICAgdGhlbWU6IHByZWZzLnRoZW1lLFxuICAgICAgdGltZXpvbmU6IHByZWZzLnRpbWV6b25lLFxuICAgICAgd2Vla1N0YXJ0OiBwcmVmcy53ZWVrU3RhcnQsXG4gICAgICBkYXNoYm9hcmRzOiBbZGVmYXVsdERhc2hib2FyZEhpdCwgLi4uZGFzaGJvYXJkc10sXG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdEZvcm0gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBob21lRGFzaGJvYXJkSWQsIHRoZW1lLCB0aW1lem9uZSwgd2Vla1N0YXJ0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGUoeyBob21lRGFzaGJvYXJkSWQsIHRoZW1lLCB0aW1lem9uZSwgd2Vla1N0YXJ0IH0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBvblRoZW1lQ2hhbmdlZCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRoZW1lOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvblRpbWVab25lQ2hhbmdlZCA9ICh0aW1lem9uZT86IHN0cmluZykgPT4ge1xuICAgIGlmICghdGltZXpvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWV6b25lOiB0aW1lem9uZSB9KTtcbiAgfTtcblxuICBvbldlZWtTdGFydENoYW5nZWQgPSAod2Vla1N0YXJ0OiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vla1N0YXJ0OiB3ZWVrU3RhcnQgfSk7XG4gIH07XG5cbiAgb25Ib21lRGFzaGJvYXJkQ2hhbmdlZCA9IChkYXNoYm9hcmRJZDogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvbWVEYXNoYm9hcmRJZDogZGFzaGJvYXJkSWQgfSk7XG4gIH07XG5cbiAgZ2V0RnVsbERhc2hOYW1lID0gKGRhc2hib2FyZDogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4pID0+IHtcbiAgICBpZiAodHlwZW9mIGRhc2hib2FyZC5mb2xkZXJUaXRsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGFzaGJvYXJkLmZvbGRlclRpdGxlID09PSAnJykge1xuICAgICAgcmV0dXJuIGRhc2hib2FyZC50aXRsZTtcbiAgICB9XG4gICAgcmV0dXJuIGRhc2hib2FyZC5mb2xkZXJUaXRsZSArICcgLyAnICsgZGFzaGJvYXJkLnRpdGxlO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCB0aW1lem9uZSwgd2Vla1N0YXJ0LCBob21lRGFzaGJvYXJkSWQsIGRhc2hib2FyZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcblxuICAgIGNvbnN0IGhvbWVEYXNoYm9hcmRUb29sdGlwID0gKFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAgY29udGVudD17XG4gICAgICAgICAgPFRyYW5zIGlkPVwic2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5ob21lLWRhc2hib2FyZC10b29sdGlwXCI+XG4gICAgICAgICAgICBOb3QgZmluZGluZyB0aGUgZGFzaGJvYXJkIHlvdSB3YW50PyBTdGFyIGl0IGZpcnN0LCB0aGVuIGl0IHNob3VsZCBhcHBlYXIgaW4gdGhpcyBzZWxlY3QgYm94LlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPEljb24gbmFtZT1cImluZm8tY2lyY2xlXCIgLz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0Rm9ybX0+XG4gICAgICAgIHsoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGaWVsZFNldCBsYWJlbD17PFRyYW5zIGlkPVwic2hhcmVkLXByZWZlcmVuY2VzLnRpdGxlXCI+UHJlZmVyZW5jZXM8L1RyYW5zPn0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPXt0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLnRoZW1lLWxhYmVsJywgbWVzc2FnZTogJ1VJIFRoZW1lJyB9KX0+XG4gICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoZW1lc31cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGVtZXMuZmluZCgoaXRlbSkgPT4gaXRlbS52YWx1ZSA9PT0gdGhlbWUpPy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGhlbWVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJob21lLWRhc2hib2FyZC1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmhvbWUtZGFzaGJvYXJkLWxhYmVsXCI+SG9tZSBEYXNoYm9hcmQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAge2hvbWVEYXNoYm9hcmRUb29sdGlwfVxuICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJVc2VyIHByZWZlcmVuY2VzIGhvbWUgZGFzaGJvYXJkIGRyb3AgZG93blwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGFzaGJvYXJkcy5maW5kKChkYXNoYm9hcmQpID0+IGRhc2hib2FyZC5pZCA9PT0gaG9tZURhc2hib2FyZElkKX1cbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsoaSkgPT4gaS5pZH1cbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXt0aGlzLmdldEZ1bGxEYXNoTmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGFzaGJvYXJkOiBTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkU2VhcmNoSGl0PikgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhvbWVEYXNoYm9hcmRDaGFuZ2VkKGRhc2hib2FyZC5pZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Rhc2hib2FyZHN9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5ob21lLWRhc2hib2FyZC1wbGFjZWhvbGRlcicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDaG9vc2UgZGVmYXVsdCBkYXNoYm9hcmQnLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwiaG9tZS1kYXNoYm9hcmQtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KHsgaWQ6ICdzaGFyZWQtZGFzaGJvYXJkLmZpZWxkcy50aW1lem9uZS1sYWJlbCcsIG1lc3NhZ2U6ICdUaW1lem9uZScgfSl9XG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlRpbWVab25lUGlja2VyLmNvbnRhaW5lclYyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRpbWVab25lUGlja2VyXG4gICAgICAgICAgICAgICAgICBpbmNsdWRlSW50ZXJuYWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGltZXpvbmV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRpbWVab25lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMtdGltZXpvbmUtcGlja2VyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLndlZWstc3RhcnQtbGFiZWwnLCBtZXNzYWdlOiAnV2VlayBzdGFydCcgfSl9XG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLldlZWtTdGFydFBpY2tlci5jb250YWluZXJWMn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxXZWVrU3RhcnRQaWNrZXJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3ZWVrU3RhcnR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldlZWtTdGFydENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPXsnc2hhcmVkLXByZWZlcmVuY2VzLXdlZWstc3RhcnQtcGlja2VyJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5Vc2VyUHJvZmlsZS5wcmVmZXJlbmNlc1NhdmVCdXR0b259PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiY29tbW9uLnNhdmVcIj5TYXZlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRQcmVmZXJlbmNlcztcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGFiZWxUZXh0OiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXJEVE8sIFVzZXJPcmcgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uLCBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB1c2VyOiBVc2VyRFRPIHwgbnVsbDtcbiAgb3JnczogVXNlck9yZ1tdO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHNldFVzZXJPcmc6IChvcmc6IFVzZXJPcmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyT3JnYW5pemF0aW9ucyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBvcmdzLCB1c2VyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgb3JnYW5pemF0aW9ucy4uLlwiIC8+O1xuICAgIH1cblxuICAgIGlmIChvcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+XG4gICAgICAgICAgPFRyYW5zIGlkPVwidXNlci1vcmdzLnRpdGxlXCI+T3JnYW5pemF0aW9uczwvVHJhbnM+XG4gICAgICAgIDwvaDM+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5Vc2VyUHJvZmlsZS5vcmdzVGFibGV9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwidXNlci1vcmdzLm5hbWUtY29sdW1uXCI+TmFtZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLW9yZ3Mucm9sZS1jb2x1bW5cIj5Sb2xlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge29yZ3MubWFwKChvcmc6IFVzZXJPcmcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntvcmcubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e29yZy5yb2xlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge29yZy5vcmdJZCA9PT0gdXNlcj8ub3JnSWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwidXNlci1vcmdzLmN1cnJlbnQtb3JnLWJ1dHRvblwiPkN1cnJlbnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFVzZXJPcmcob3JnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwidXNlci1vcmdzLnNlbGVjdC1vcmctYnV0dG9uXCI+U2VsZWN0IG9yZ2FuaXNhdGlvbjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJPcmdhbml6YXRpb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnMsIHQgfSBmcm9tICdAbGluZ3VpL21hY3JvJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZpZWxkU2V0LCBGb3JtLCBJY29uLCBJbnB1dCwgVG9vbHRpcCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBQcm9maWxlVXBkYXRlRmllbGRzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB1c2VyOiBVc2VyRFRPIHwgbnVsbDtcbiAgaXNTYXZpbmdVc2VyOiBib29sZWFuO1xuICB1cGRhdGVQcm9maWxlOiAocGF5bG9hZDogUHJvZmlsZVVwZGF0ZUZpZWxkcykgPT4gdm9pZDtcbn1cblxuY29uc3QgeyBkaXNhYmxlTG9naW5Gb3JtIH0gPSBjb25maWc7XG5cbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZUVkaXRGb3JtOiBGQzxQcm9wcz4gPSAoeyB1c2VyLCBpc1NhdmluZ1VzZXIsIHVwZGF0ZVByb2ZpbGUgfSkgPT4ge1xuICBjb25zdCBvblN1Ym1pdFByb2ZpbGVVcGRhdGUgPSAoZGF0YTogUHJvZmlsZVVwZGF0ZUZpZWxkcykgPT4ge1xuICAgIHVwZGF0ZVByb2ZpbGUoZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRQcm9maWxlVXBkYXRlfSB2YWxpZGF0ZU9uPVwib25CbHVyXCI+XG4gICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXs8VHJhbnMgaWQ9XCJ1c2VyLXByb2ZpbGUudGl0bGVcIj5FZGl0IHByb2ZpbGU8L1RyYW5zPn0+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9e3QoeyBpZDogJ3VzZXItcHJvZmlsZS5maWVsZHMubmFtZS1sYWJlbCcsIG1lc3NhZ2U6ICdOYW1lJyB9KX1cbiAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgZXJyb3I9ezxUcmFucyBpZD1cInVzZXItcHJvZmlsZS5maWVsZHMubmFtZS1lcnJvclwiPk5hbWUgaXMgcmVxdWlyZWQ8L1RyYW5zPn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVMb2dpbkZvcm19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgaWQ9XCJlZGl0LXVzZXItcHJvZmlsZS1uYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy5uYW1lLWxhYmVsJywgbWVzc2FnZTogJ05hbWUnIH0pfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dXNlcj8ubmFtZSA/PyAnJ31cbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxJbnB1dFN1ZmZpeCAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy5lbWFpbC1sYWJlbCcsIG1lc3NhZ2U6ICdFbWFpbCcgfSl9XG4gICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17PFRyYW5zIGlkPVwidXNlci1wcm9maWxlLmZpZWxkcy5lbWFpbC1lcnJvclwiPkVtYWlsIGlzIHJlcXVpcmVkPC9UcmFucz59XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTG9naW5Gb3JtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICBpZD1cImVkaXQtdXNlci1wcm9maWxlLWVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy5lbWFpbC1sYWJlbCcsIG1lc3NhZ2U6ICdFbWFpbCcgfSl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1c2VyPy5lbWFpbCA/PyAnJ31cbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxJbnB1dFN1ZmZpeCAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy51c2VybmFtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVc2VybmFtZScgfSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTG9naW5Gb3JtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2xvZ2luJyl9XG4gICAgICAgICAgICAgICAgaWQ9XCJlZGl0LXVzZXItcHJvZmlsZS11c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1c2VyPy5sb2dpbiA/PyAnJ31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy51c2VybmFtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVc2VybmFtZScgfSl9XG4gICAgICAgICAgICAgICAgc3VmZml4PXs8SW5wdXRTdWZmaXggLz59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1NhdmluZ1VzZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlVzZXJQcm9maWxlLnByb2ZpbGVTYXZlQnV0dG9ufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiY29tbW9uLnNhdmVcIj5TYXZlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZUVkaXRGb3JtO1xuXG5jb25zdCBJbnB1dFN1ZmZpeDogRkMgPSAoKSA9PiB7XG4gIHJldHVybiBkaXNhYmxlTG9naW5Gb3JtID8gKFxuICAgIDxUb29sdGlwIGNvbnRlbnQ9XCJMb2dpbiBkZXRhaWxzIGxvY2tlZCBiZWNhdXNlIHRoZXkgYXJlIG1hbmFnZWQgaW4gYW5vdGhlciBzeXN0ZW0uXCI+XG4gICAgICA8SWNvbiBuYW1lPVwibG9ja1wiIC8+XG4gICAgPC9Ub29sdGlwPlxuICApIDogbnVsbDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VNb3VudCB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBjaGFuZ2VVc2VyT3JnLCBpbml0VXNlclByb2ZpbGVQYWdlLCByZXZva2VVc2VyU2Vzc2lvbiwgdXBkYXRlVXNlclByb2ZpbGUgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IFVzZXJQcm9maWxlRWRpdEZvcm0gZnJvbSAnLi9Vc2VyUHJvZmlsZUVkaXRGb3JtJztcbmltcG9ydCBTaGFyZWRQcmVmZXJlbmNlcyBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1NoYXJlZFByZWZlcmVuY2VzL1NoYXJlZFByZWZlcmVuY2VzJztcbmltcG9ydCB7IFVzZXJUZWFtcyB9IGZyb20gJy4vVXNlclRlYW1zJztcbmltcG9ydCBVc2VyT3JnYW5pemF0aW9ucyBmcm9tICcuL1VzZXJPcmdhbml6YXRpb25zJztcbmltcG9ydCBVc2VyU2Vzc2lvbnMgZnJvbSAnLi9Vc2VyU2Vzc2lvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE93blByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgY29uc3QgdXNlclN0YXRlID0gc3RhdGUudXNlcjtcbiAgY29uc3QgeyB1c2VyLCB0ZWFtcywgb3Jncywgc2Vzc2lvbnMsIHRlYW1zQXJlTG9hZGluZywgb3Jnc0FyZUxvYWRpbmcsIHNlc3Npb25zQXJlTG9hZGluZywgaXNVcGRhdGluZyB9ID0gdXNlclN0YXRlO1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3Byb2ZpbGUtc2V0dGluZ3MnKSxcbiAgICBvcmdzQXJlTG9hZGluZyxcbiAgICBzZXNzaW9uc0FyZUxvYWRpbmcsXG4gICAgdGVhbXNBcmVMb2FkaW5nLFxuICAgIG9yZ3MsXG4gICAgc2Vzc2lvbnMsXG4gICAgdGVhbXMsXG4gICAgaXNVcGRhdGluZyxcbiAgICB1c2VyLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGluaXRVc2VyUHJvZmlsZVBhZ2UsXG4gIHJldm9rZVVzZXJTZXNzaW9uLFxuICBjaGFuZ2VVc2VyT3JnLFxuICB1cGRhdGVVc2VyUHJvZmlsZSxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvZmlsZUVkaXRQYWdlKHtcbiAgbmF2TW9kZWwsXG4gIG9yZ3NBcmVMb2FkaW5nLFxuICBzZXNzaW9uc0FyZUxvYWRpbmcsXG4gIHRlYW1zQXJlTG9hZGluZyxcbiAgaW5pdFVzZXJQcm9maWxlUGFnZSxcbiAgb3JncyxcbiAgc2Vzc2lvbnMsXG4gIHRlYW1zLFxuICBpc1VwZGF0aW5nLFxuICB1c2VyLFxuICByZXZva2VVc2VyU2Vzc2lvbixcbiAgY2hhbmdlVXNlck9yZyxcbiAgdXBkYXRlVXNlclByb2ZpbGUsXG59OiBQcm9wcykge1xuICB1c2VNb3VudCgoKSA9PiBpbml0VXNlclByb2ZpbGVQYWdlKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17IXVzZXJ9PlxuICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibWRcIj5cbiAgICAgICAgICA8VXNlclByb2ZpbGVFZGl0Rm9ybSB1cGRhdGVQcm9maWxlPXt1cGRhdGVVc2VyUHJvZmlsZX0gaXNTYXZpbmdVc2VyPXtpc1VwZGF0aW5nfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgIDxTaGFyZWRQcmVmZXJlbmNlcyByZXNvdXJjZVVyaT1cInVzZXJcIiAvPlxuICAgICAgICAgIDxVc2VyVGVhbXMgaXNMb2FkaW5nPXt0ZWFtc0FyZUxvYWRpbmd9IHRlYW1zPXt0ZWFtc30gLz5cbiAgICAgICAgICA8VXNlck9yZ2FuaXphdGlvbnMgaXNMb2FkaW5nPXtvcmdzQXJlTG9hZGluZ30gc2V0VXNlck9yZz17Y2hhbmdlVXNlck9yZ30gb3Jncz17b3Jnc30gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICA8VXNlclNlc3Npb25zIGlzTG9hZGluZz17c2Vzc2lvbnNBcmVMb2FkaW5nfSByZXZva2VVc2VyU2Vzc2lvbj17cmV2b2tlVXNlclNlc3Npb259IHNlc3Npb25zPXtzZXNzaW9uc30gLz5cbiAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFVzZXJQcm9maWxlRWRpdFBhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVc2VyU2Vzc2lvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIEljb24sIExvYWRpbmdQbGFjZWhvbGRlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHdpdGhJMThuLCB3aXRoSTE4blByb3BzIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCc7XG5pbXBvcnQgeyB0LCBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIHdpdGhJMThuUHJvcHMge1xuICBzZXNzaW9uczogVXNlclNlc3Npb25bXTtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICByZXZva2VVc2VyU2Vzc2lvbjogKHRva2VuSWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY2xhc3MgVXNlclNlc3Npb25zIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIHNlc3Npb25zLCByZXZva2VVc2VyU2Vzc2lvbiwgaTE4biB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9ezxUcmFucyBpZD1cInVzZXItc2Vzc2lvbnMubG9hZGluZ1wiPkxvYWRpbmcgc2Vzc2lvbnMuLi48L1RyYW5zPn0gLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtzZXNzaW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5TZXNzaW9uczwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5Vc2VyUHJvZmlsZS5zZXNzaW9uc1RhYmxlfT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLXNlc3Npb24uc2Vlbi1hdC1jb2x1bW5cIj5MYXN0IHNlZW48L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwidXNlci1zZXNzaW9uLmNyZWF0ZWQtYXQtY29sdW1uXCI+TG9nZ2VkIG9uPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItc2Vzc2lvbi5pcC1jb2x1bW5cIj5JUCBhZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItc2Vzc2lvbi5icm93c2VyLWNvbHVtblwiPkJyb3dzZXIgJmFtcDsgT1M8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7c2Vzc2lvbnMubWFwKChzZXNzaW9uOiBVc2VyU2Vzc2lvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLmlzQWN0aXZlID8gPHRkPk5vdzwvdGQ+IDogPHRkPntzZXNzaW9uLnNlZW5BdH08L3RkPn1cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kxOG4uZGF0ZShzZXNzaW9uLmNyZWF0ZWRBdCwgeyBkYXRlU3R5bGU6ICdsb25nJyB9KX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c2Vzc2lvbi5jbGllbnRJcH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLmJyb3dzZXJ9IG9uIHtzZXNzaW9uLm9zfSB7c2Vzc2lvbi5vc1ZlcnNpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJldm9rZVVzZXJTZXNzaW9uKHNlc3Npb24uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KHsgaWQ6ICd1c2VyLXNlc3Npb24ucmV2b2tlJywgbWVzc2FnZTogJ1Jldm9rZSB1c2VyIHNlc3Npb24nIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicG93ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEkxOG4oKShVc2VyU2Vzc2lvbnMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRlYW1zOiBUZWFtW107XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJUZWFtcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCB0ZWFtcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nIHRlYW1zLi4uXCIgLz47XG4gICAgfVxuXG4gICAgaWYgKHRlYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+VGVhbXM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lXCIgYXJpYS1sYWJlbD1cIlVzZXIgdGVhbXMgdGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5NZW1iZXJzPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHt0ZWFtcy5tYXAoKHRlYW06IFRlYW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZV9fYXZhdGFyXCIgc3JjPXt0ZWFtLmF2YXRhclVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0ZWFtLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0ZWFtLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGVhbS5tZW1iZXJDb3VudH08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJUZWFtcztcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEZpZWxkcywgUHJvZmlsZVVwZGF0ZUZpZWxkcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFRodW5rUmVzdWx0LCBVc2VyT3JnIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgaW5pdExvYWRPcmdzLFxuICBpbml0TG9hZFNlc3Npb25zLFxuICBpbml0TG9hZFRlYW1zLFxuICBvcmdzTG9hZGVkLFxuICBzZXNzaW9uc0xvYWRlZCxcbiAgc2V0VXBkYXRpbmcsXG4gIHRlYW1zTG9hZGVkLFxuICB1c2VyTG9hZGVkLFxuICB1c2VyU2Vzc2lvblJldm9rZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkKHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkRmllbGRzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogdHJ1ZSB9KSk7XG4gICAgYXdhaXQgYXBpLmNoYW5nZVBhc3N3b3JkKHBheWxvYWQpO1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IGZhbHNlIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRVc2VyUHJvZmlsZVBhZ2UoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZFVzZXIoKSk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1zKCkpO1xuICAgIGRpc3BhdGNoKGxvYWRPcmdzKCkpO1xuICAgIGRpc3BhdGNoKGxvYWRTZXNzaW9ucygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRVc2VyKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkubG9hZFVzZXIoKTtcbiAgICBkaXNwYXRjaCh1c2VyTG9hZGVkKHsgdXNlciB9KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRUZWFtcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChpbml0TG9hZFRlYW1zKCkpO1xuICAgIGNvbnN0IHRlYW1zID0gYXdhaXQgYXBpLmxvYWRUZWFtcygpO1xuICAgIGRpc3BhdGNoKHRlYW1zTG9hZGVkKHsgdGVhbXMgfSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBsb2FkT3JncygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChpbml0TG9hZE9yZ3MoKSk7XG4gICAgY29uc3Qgb3JncyA9IGF3YWl0IGFwaS5sb2FkT3JncygpO1xuICAgIGRpc3BhdGNoKG9yZ3NMb2FkZWQoeyBvcmdzIH0pKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZFNlc3Npb25zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKGluaXRMb2FkU2Vzc2lvbnMoKSk7XG4gICAgY29uc3Qgc2Vzc2lvbnMgPSBhd2FpdCBhcGkubG9hZFNlc3Npb25zKCk7XG4gICAgZGlzcGF0Y2goc2Vzc2lvbnNMb2FkZWQoeyBzZXNzaW9ucyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZva2VVc2VyU2Vzc2lvbih0b2tlbklkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiB0cnVlIH0pKTtcbiAgICBhd2FpdCBhcGkucmV2b2tlVXNlclNlc3Npb24odG9rZW5JZCk7XG4gICAgZGlzcGF0Y2godXNlclNlc3Npb25SZXZva2VkKHsgdG9rZW5JZCB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VVc2VyT3JnKG9yZzogVXNlck9yZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IHRydWUgfSkpO1xuICAgIGF3YWl0IGFwaS5zZXRVc2VyT3JnKG9yZyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcuYXBwU3ViVXJsICsgJy9wcm9maWxlJztcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVzZXJQcm9maWxlKHBheWxvYWQ6IFByb2ZpbGVVcGRhdGVGaWVsZHMpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiB0cnVlIH0pKTtcbiAgICBhd2FpdCBhcGkudXBkYXRlVXNlclByb2ZpbGUocGF5bG9hZCk7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZFVzZXIoKSk7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogZmFsc2UgfSkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHVzZUVmZmVjdE9uY2UgZnJvbSAnLi91c2VFZmZlY3RPbmNlJztcbnZhciB1c2VNb3VudCA9IGZ1bmN0aW9uIChmbikge1xuICAgIHVzZUVmZmVjdE9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBmbigpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZU1vdW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNzcyIsIkJ1dHRvbiIsIkZpZWxkIiwiRmllbGRTZXQiLCJGb3JtIiwiSWNvbiIsIkxhYmVsIiwiUmFkaW9CdXR0b25Hcm91cCIsIlNlbGVjdCIsInN0eWxlc0ZhY3RvcnkiLCJUaW1lWm9uZVBpY2tlciIsIlRvb2x0aXAiLCJXZWVrU3RhcnRQaWNrZXIiLCJzZWxlY3RvcnMiLCJiYWNrZW5kU3J2IiwiUHJlZmVyZW5jZXNTZXJ2aWNlIiwidGhlbWVzIiwidmFsdWUiLCJsYWJlbCIsImlkIiwiU2hhcmVkUHJlZmVyZW5jZXMiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaG9tZURhc2hib2FyZElkIiwidGhlbWUiLCJ0aW1lem9uZSIsIndlZWtTdGFydCIsInN0YXRlIiwic2VydmljZSIsInVwZGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic2V0U3RhdGUiLCJkYXNoYm9hcmRJZCIsImRhc2hib2FyZCIsImZvbGRlclRpdGxlIiwidGl0bGUiLCJyZXNvdXJjZVVyaSIsImRhc2hib2FyZHMiLCJjb21wb25lbnREaWRNb3VudCIsInByZWZzIiwibG9hZCIsInNlYXJjaCIsInN0YXJyZWQiLCJkZWZhdWx0RGFzaGJvYXJkSGl0IiwidGFncyIsInR5cGUiLCJ1aWQiLCJ1cmkiLCJ1cmwiLCJmb2xkZXJJZCIsImZvbGRlclVpZCIsImZvbGRlclVybCIsImlzU3RhcnJlZCIsInNsdWciLCJpdGVtcyIsImZpbmQiLCJkIiwibWlzc2luZyIsImRhc2hib2FyZElkcyIsImxlbmd0aCIsInB1c2giLCJyZW5kZXIiLCJkaXNhYmxlZCIsInN0eWxlcyIsImdldFN0eWxlcyIsImhvbWVEYXNoYm9hcmRUb29sdGlwIiwib25TdWJtaXRGb3JtIiwiaXRlbSIsIm9uVGhlbWVDaGFuZ2VkIiwibGFiZWxUZXh0IiwiaSIsImdldEZ1bGxEYXNoTmFtZSIsIm9uSG9tZURhc2hib2FyZENoYW5nZWQiLCJjb21wb25lbnRzIiwiY29udGFpbmVyVjIiLCJvblRpbWVab25lQ2hhbmdlZCIsIm9uV2Vla1N0YXJ0Q2hhbmdlZCIsIlVzZXJQcm9maWxlIiwicHJlZmVyZW5jZXNTYXZlQnV0dG9uIiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwiVXNlck9yZ2FuaXphdGlvbnMiLCJpc0xvYWRpbmciLCJvcmdzIiwidXNlciIsIm9yZ3NUYWJsZSIsIm1hcCIsIm9yZyIsImluZGV4IiwibmFtZSIsInJvbGUiLCJvcmdJZCIsInNldFVzZXJPcmciLCJJbnB1dCIsImNvbmZpZyIsImRpc2FibGVMb2dpbkZvcm0iLCJVc2VyUHJvZmlsZUVkaXRGb3JtIiwiaXNTYXZpbmdVc2VyIiwidXBkYXRlUHJvZmlsZSIsIm9uU3VibWl0UHJvZmlsZVVwZGF0ZSIsImRhdGEiLCJyZWdpc3RlciIsImVycm9ycyIsInJlcXVpcmVkIiwiZW1haWwiLCJsb2dpbiIsInByb2ZpbGVTYXZlQnV0dG9uIiwiSW5wdXRTdWZmaXgiLCJjb25uZWN0IiwidXNlTW91bnQiLCJWZXJ0aWNhbEdyb3VwIiwiZ2V0TmF2TW9kZWwiLCJQYWdlIiwiY2hhbmdlVXNlck9yZyIsImluaXRVc2VyUHJvZmlsZVBhZ2UiLCJyZXZva2VVc2VyU2Vzc2lvbiIsInVwZGF0ZVVzZXJQcm9maWxlIiwiVXNlclRlYW1zIiwiVXNlclNlc3Npb25zIiwibWFwU3RhdGVUb1Byb3BzIiwidXNlclN0YXRlIiwidGVhbXMiLCJzZXNzaW9ucyIsInRlYW1zQXJlTG9hZGluZyIsIm9yZ3NBcmVMb2FkaW5nIiwic2Vzc2lvbnNBcmVMb2FkaW5nIiwiaXNVcGRhdGluZyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJVc2VyUHJvZmlsZUVkaXRQYWdlIiwid2l0aEkxOG4iLCJpMThuIiwic2Vzc2lvbnNUYWJsZSIsInNlc3Npb24iLCJpc0FjdGl2ZSIsInNlZW5BdCIsImRhdGUiLCJjcmVhdGVkQXQiLCJkYXRlU3R5bGUiLCJjbGllbnRJcCIsImJyb3dzZXIiLCJvcyIsIm9zVmVyc2lvbiIsInRlYW0iLCJhdmF0YXJVcmwiLCJtZW1iZXJDb3VudCIsImluaXRMb2FkT3JncyIsImluaXRMb2FkU2Vzc2lvbnMiLCJpbml0TG9hZFRlYW1zIiwib3Jnc0xvYWRlZCIsInNlc3Npb25zTG9hZGVkIiwic2V0VXBkYXRpbmciLCJ0ZWFtc0xvYWRlZCIsInVzZXJMb2FkZWQiLCJ1c2VyU2Vzc2lvblJldm9rZWQiLCJhcGkiLCJjaGFuZ2VQYXNzd29yZCIsInBheWxvYWQiLCJkaXNwYXRjaCIsInVwZGF0aW5nIiwibG9hZFVzZXIiLCJsb2FkVGVhbXMiLCJsb2FkT3JncyIsImxvYWRTZXNzaW9ucyIsInRva2VuSWQiLCJocmVmIiwiYXBwU3ViVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==
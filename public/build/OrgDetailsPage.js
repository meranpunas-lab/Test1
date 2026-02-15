"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["OrgDetailsPage"],{

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

/***/ "./public/app/features/org/OrgDetailsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgDetailsPage": () => (/* binding */ OrgDetailsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _OrgProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/org/OrgProfile.tsx");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/org/state/actions.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/org/state/reducers.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class OrgDetailsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onUpdateOrganization", orgName => {
      this.props.setOrganizationName(orgName);
      this.props.updateOrganization();
    });
  }

  async componentDidMount() {
    await this.props.loadOrganization();
  }

  render() {
    const {
      navModel,
      organization
    } = this.props;
    const isLoading = Object.keys(organization).length === 0;
    const canReadOrg = app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.OrgsRead);
    const canReadPreferences = app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.OrgsPreferencesRead);
    const canWritePreferences = app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.OrgsPreferencesWrite);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
        isLoading: isLoading,
        children: !isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.VerticalGroup, {
          spacing: "lg",
          children: [canReadOrg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_OrgProfile__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onSubmit: this.onUpdateOrganization,
            orgName: organization.name
          }), canReadPreferences && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__["default"], {
            resourceUri: "org",
            disabled: !canWritePreferences
          })]
        })
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(state.navIndex, 'org-settings'),
    organization: state.organization.organization
  };
}

const mapDispatchToProps = {
  loadOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_5__.loadOrganization,
  setOrganizationName: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.setOrganizationName,
  updateOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_5__.updateOrganization
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(OrgDetailsPage));

/***/ }),

/***/ "./public/app/features/org/OrgProfile.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;








const OrgProfile = ({
  onSubmit,
  orgName
}) => {
  const canWriteOrg = app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.OrgsWrite);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
    defaultValues: {
      orgName
    },
    onSubmit: ({
      orgName
    }) => onSubmit(orgName),
    children: ({
      register
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
      label: "Organization profile",
      disabled: !canWriteOrg,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Organization name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
          id: "org-name-input",
          type: "text"
        }, register('orgName', {
          required: true
        })))
      }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        children: "Update organization name"
      }))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrgProfile);

/***/ }),

/***/ "./public/app/features/org/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrganization": () => (/* binding */ createOrganization),
/* harmony export */   "getUserOrganizations": () => (/* binding */ getUserOrganizations),
/* harmony export */   "loadOrganization": () => (/* binding */ loadOrganization),
/* harmony export */   "setUserOrganization": () => (/* binding */ setUserOrganization),
/* harmony export */   "updateOrganization": () => (/* binding */ updateOrganization)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/org/state/reducers.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");



function loadOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().get('/api/org');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.organizationLoaded)(organizationResponse));
    return organizationResponse;
  };
}
function updateOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async (dispatch, getStore) => {
    const organization = getStore().organization.organization;
    await dependencies.getBackendSrv().put('/api/org', {
      name: organization.name
    });
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateConfigurationSubtitle)(organization.name));
    dispatch(loadOrganization(dependencies));
  };
}
function setUserOrganization(orgId, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().post('/api/user/using/' + orgId);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateConfigurationSubtitle)(organizationResponse.name));
  };
}
function createOrganization(newOrg, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().post('/api/orgs/', newOrg);
    dispatch(setUserOrganization(result.orgId));
  };
}
function getUserOrganizations(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().get('/api/user/orgs');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.userOrganizationsLoaded)(result));
    return result;
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBT0ssUUFBUCxJQUFvQjtBQUN6QixVQUFNQyxvQkFBb0IsR0FBRyxNQUFNRixZQUFZLENBQUNKLGFBQWIsR0FBNkJZLElBQTdCLENBQWtDLHFCQUFxQkQsS0FBdkQsQ0FBbkM7QUFFQU4sSUFBQUEsUUFBUSxDQUFDRiw2RUFBMkIsQ0FBQ0csb0JBQW9CLENBQUNoQixJQUF0QixDQUE1QixDQUFSO0FBQ0QsR0FKRDtBQUtEO0FBRU0sU0FBU3VCLGtCQUFULENBQ0xDLE1BREssRUFFTFYsWUFBc0MsR0FBRztBQUFFSixFQUFBQSxhQUFhLEVBQUVBLDJEQUFhQTtBQUE5QixDQUZwQyxFQUdhO0FBQ2xCLFNBQU8sTUFBT0ssUUFBUCxJQUFvQjtBQUN6QixVQUFNVSxNQUFNLEdBQUcsTUFBTVgsWUFBWSxDQUFDSixhQUFiLEdBQTZCWSxJQUE3QixDQUFrQyxZQUFsQyxFQUFnREUsTUFBaEQsQ0FBckI7QUFFQVQsSUFBQUEsUUFBUSxDQUFDSyxtQkFBbUIsQ0FBQ0ssTUFBTSxDQUFDSixLQUFSLENBQXBCLENBQVI7QUFDRCxHQUpEO0FBS0Q7QUFFTSxTQUFTSyxvQkFBVCxDQUNMWixZQUFzQyxHQUFHO0FBQUVKLEVBQUFBLGFBQWEsRUFBRUEsMkRBQWFBO0FBQTlCLENBRHBDLEVBRWE7QUFDbEIsU0FBTyxNQUFPSyxRQUFQLElBQW9CO0FBQ3pCLFVBQU1VLE1BQU0sR0FBRyxNQUFNWCxZQUFZLENBQUNKLGFBQWIsR0FBNkJPLEdBQTdCLENBQWlDLGdCQUFqQyxDQUFyQjtBQUNBRixJQUFBQSxRQUFRLENBQUNILGtFQUF1QixDQUFDYSxNQUFELENBQXhCLENBQVI7QUFFQSxXQUFPQSxNQUFQO0FBQ0QsR0FMRDtBQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1NoYXJlZFByZWZlcmVuY2VzL1NoYXJlZFByZWZlcmVuY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9vcmcvT3JnRGV0YWlsc1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL29yZy9PcmdQcm9maWxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9vcmcvc3RhdGUvYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmllbGQsXG4gIEZpZWxkU2V0LFxuICBGb3JtLFxuICBJY29uLFxuICBMYWJlbCxcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgU2VsZWN0LFxuICBzdHlsZXNGYWN0b3J5LFxuICBUaW1lWm9uZVBpY2tlcixcbiAgVG9vbHRpcCxcbiAgV2Vla1N0YXJ0UGlja2VyLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRTZWFyY2hIaXQsIERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC90eXBlcyc7XG5pbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgUHJlZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvUHJlZmVyZW5jZXNTZXJ2aWNlJztcbmltcG9ydCB7IHQsIFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZXNvdXJjZVVyaTogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBob21lRGFzaGJvYXJkSWQ6IG51bWJlcjtcbiAgdGhlbWU6IHN0cmluZztcbiAgdGltZXpvbmU6IHN0cmluZztcbiAgd2Vla1N0YXJ0OiBzdHJpbmc7XG4gIGRhc2hib2FyZHM6IERhc2hib2FyZFNlYXJjaEhpdFtdO1xufVxuXG5jb25zdCB0aGVtZXM6IFNlbGVjdGFibGVWYWx1ZVtdID0gW1xuICB7IHZhbHVlOiAnJywgbGFiZWw6IHQoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy50aGVtZS5kZWZhdWx0LWxhYmVsJywgbWVzc2FnZTogJ0RlZmF1bHQnIH0pIH0sXG4gIHsgdmFsdWU6ICdkYXJrJywgbGFiZWw6IHQoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy50aGVtZS5kYXJrLWxhYmVsJywgbWVzc2FnZTogJ0RhcmsnIH0pIH0sXG4gIHsgdmFsdWU6ICdsaWdodCcsIGxhYmVsOiB0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMudGhlbWUubGlnaHQtbGFiZWwnLCBtZXNzYWdlOiAnTGlnaHQnIH0pIH0sXG5dO1xuXG5leHBvcnQgY2xhc3MgU2hhcmVkUHJlZmVyZW5jZXMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzZXJ2aWNlOiBQcmVmZXJlbmNlc1NlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXJ2aWNlID0gbmV3IFByZWZlcmVuY2VzU2VydmljZShwcm9wcy5yZXNvdXJjZVVyaSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvbWVEYXNoYm9hcmRJZDogMCxcbiAgICAgIHRoZW1lOiAnJyxcbiAgICAgIHRpbWV6b25lOiAnJyxcbiAgICAgIHdlZWtTdGFydDogJycsXG4gICAgICBkYXNoYm9hcmRzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcHJlZnMgPSBhd2FpdCB0aGlzLnNlcnZpY2UubG9hZCgpO1xuICAgIGNvbnN0IGRhc2hib2FyZHMgPSBhd2FpdCBiYWNrZW5kU3J2LnNlYXJjaCh7IHN0YXJyZWQ6IHRydWUgfSk7XG4gICAgY29uc3QgZGVmYXVsdERhc2hib2FyZEhpdDogRGFzaGJvYXJkU2VhcmNoSGl0ID0ge1xuICAgICAgaWQ6IDAsXG4gICAgICB0aXRsZTogJ0RlZmF1bHQnLFxuICAgICAgdGFnczogW10sXG4gICAgICB0eXBlOiAnJyBhcyBEYXNoYm9hcmRTZWFyY2hJdGVtVHlwZSxcbiAgICAgIHVpZDogJycsXG4gICAgICB1cmk6ICcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIGZvbGRlcklkOiAwLFxuICAgICAgZm9sZGVyVGl0bGU6ICcnLFxuICAgICAgZm9sZGVyVWlkOiAnJyxcbiAgICAgIGZvbGRlclVybDogJycsXG4gICAgICBpc1N0YXJyZWQ6IGZhbHNlLFxuICAgICAgc2x1ZzogJycsXG4gICAgICBpdGVtczogW10sXG4gICAgfTtcblxuICAgIGlmIChwcmVmcy5ob21lRGFzaGJvYXJkSWQgPiAwICYmICFkYXNoYm9hcmRzLmZpbmQoKGQpID0+IGQuaWQgPT09IHByZWZzLmhvbWVEYXNoYm9hcmRJZCkpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmcgPSBhd2FpdCBiYWNrZW5kU3J2LnNlYXJjaCh7IGRhc2hib2FyZElkczogW3ByZWZzLmhvbWVEYXNoYm9hcmRJZF0gfSk7XG4gICAgICBpZiAobWlzc2luZyAmJiBtaXNzaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGFzaGJvYXJkcy5wdXNoKG1pc3NpbmdbMF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaG9tZURhc2hib2FyZElkOiBwcmVmcy5ob21lRGFzaGJvYXJkSWQsXG4gICAgICB0aGVtZTogcHJlZnMudGhlbWUsXG4gICAgICB0aW1lem9uZTogcHJlZnMudGltZXpvbmUsXG4gICAgICB3ZWVrU3RhcnQ6IHByZWZzLndlZWtTdGFydCxcbiAgICAgIGRhc2hib2FyZHM6IFtkZWZhdWx0RGFzaGJvYXJkSGl0LCAuLi5kYXNoYm9hcmRzXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0Rm9ybSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGhvbWVEYXNoYm9hcmRJZCwgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh7IGhvbWVEYXNoYm9hcmRJZCwgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIG9uVGhlbWVDaGFuZ2VkID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGhlbWU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uVGltZVpvbmVDaGFuZ2VkID0gKHRpbWV6b25lPzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCF0aW1lem9uZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZXpvbmU6IHRpbWV6b25lIH0pO1xuICB9O1xuXG4gIG9uV2Vla1N0YXJ0Q2hhbmdlZCA9ICh3ZWVrU3RhcnQ6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWVrU3RhcnQ6IHdlZWtTdGFydCB9KTtcbiAgfTtcblxuICBvbkhvbWVEYXNoYm9hcmRDaGFuZ2VkID0gKGRhc2hib2FyZElkOiBudW1iZXIpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG9tZURhc2hib2FyZElkOiBkYXNoYm9hcmRJZCB9KTtcbiAgfTtcblxuICBnZXRGdWxsRGFzaE5hbWUgPSAoZGFzaGJvYXJkOiBTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkU2VhcmNoSGl0PikgPT4ge1xuICAgIGlmICh0eXBlb2YgZGFzaGJvYXJkLmZvbGRlclRpdGxlID09PSAndW5kZWZpbmVkJyB8fCBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZGFzaGJvYXJkLnRpdGxlO1xuICAgIH1cbiAgICByZXR1cm4gZGFzaGJvYXJkLmZvbGRlclRpdGxlICsgJyAvICcgKyBkYXNoYm9hcmQudGl0bGU7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQsIGhvbWVEYXNoYm9hcmRJZCwgZGFzaGJvYXJkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcygpO1xuXG4gICAgY29uc3QgaG9tZURhc2hib2FyZFRvb2x0aXAgPSAoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICA8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmhvbWUtZGFzaGJvYXJkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIE5vdCBmaW5kaW5nIHRoZSBkYXNoYm9hcmQgeW91IHdhbnQ/IFN0YXIgaXQgZmlyc3QsIHRoZW4gaXQgc2hvdWxkIGFwcGVhciBpbiB0aGlzIHNlbGVjdCBib3guXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8SWNvbiBuYW1lPVwiaW5mby1jaXJjbGVcIiAvPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRGb3JtfT5cbiAgICAgICAgeygpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXs8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMudGl0bGVcIj5QcmVmZXJlbmNlczwvVHJhbnM+fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMudGhlbWUtbGFiZWwnLCBtZXNzYWdlOiAnVUkgVGhlbWUnIH0pfT5cbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhlbWVzfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lcy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSB0aGVtZSk/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaGVtZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImhvbWUtZGFzaGJvYXJkLXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbFRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtbGFiZWxcIj5Ib21lIERhc2hib2FyZDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICB7aG9tZURhc2hib2FyZFRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIlVzZXIgcHJlZmVyZW5jZXMgaG9tZSBkYXNoYm9hcmQgZHJvcCBkb3duXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXNoYm9hcmRzLmZpbmQoKGRhc2hib2FyZCkgPT4gZGFzaGJvYXJkLmlkID09PSBob21lRGFzaGJvYXJkSWQpfVxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhpKSA9PiBpLmlkfVxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e3RoaXMuZ2V0RnVsbERhc2hOYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXNoYm9hcmQ6IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRTZWFyY2hIaXQ+KSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSG9tZURhc2hib2FyZENoYW5nZWQoZGFzaGJvYXJkLmlkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGFzaGJvYXJkc31cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmhvbWUtZGFzaGJvYXJkLXBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Nob29zZSBkZWZhdWx0IGRhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJob21lLWRhc2hib2FyZC1zZWxlY3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1kYXNoYm9hcmQuZmllbGRzLnRpbWV6b25lLWxhYmVsJywgbWVzc2FnZTogJ1RpbWV6b25lJyB9KX1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuVGltZVpvbmVQaWNrZXIuY29udGFpbmVyVjJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGltZVpvbmVQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGluY2x1ZGVJbnRlcm5hbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW1lem9uZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGltZVpvbmVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cInNoYXJlZC1wcmVmZXJlbmNlcy10aW1lem9uZS1waWNrZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMud2Vlay1zdGFydC1sYWJlbCcsIG1lc3NhZ2U6ICdXZWVrIHN0YXJ0JyB9KX1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuV2Vla1N0YXJ0UGlja2VyLmNvbnRhaW5lclYyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFdlZWtTdGFydFBpY2tlclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dlZWtTdGFydH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2Vla1N0YXJ0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eydzaGFyZWQtcHJlZmVyZW5jZXMtd2Vlay1zdGFydC1waWNrZXInfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlVzZXJQcm9maWxlLnByZWZlcmVuY2VzU2F2ZUJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJjb21tb24uc2F2ZVwiPlNhdmU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlZFByZWZlcmVuY2VzO1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbFRleHQ6IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCBPcmdQcm9maWxlIGZyb20gJy4vT3JnUHJvZmlsZSc7XG5pbXBvcnQgU2hhcmVkUHJlZmVyZW5jZXMgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9TaGFyZWRQcmVmZXJlbmNlcy9TaGFyZWRQcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyBsb2FkT3JnYW5pemF0aW9uLCB1cGRhdGVPcmdhbml6YXRpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgT3JnYW5pemF0aW9uLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IHNldE9yZ2FuaXphdGlvbk5hbWUgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7IFZlcnRpY2FsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG4gIG9yZ2FuaXphdGlvbjogT3JnYW5pemF0aW9uO1xuICBsb2FkT3JnYW5pemF0aW9uOiB0eXBlb2YgbG9hZE9yZ2FuaXphdGlvbjtcbiAgc2V0T3JnYW5pemF0aW9uTmFtZTogdHlwZW9mIHNldE9yZ2FuaXphdGlvbk5hbWU7XG4gIHVwZGF0ZU9yZ2FuaXphdGlvbjogdHlwZW9mIHVwZGF0ZU9yZ2FuaXphdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIE9yZ0RldGFpbHNQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBhd2FpdCB0aGlzLnByb3BzLmxvYWRPcmdhbml6YXRpb24oKTtcbiAgfVxuXG4gIG9uVXBkYXRlT3JnYW5pemF0aW9uID0gKG9yZ05hbWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0T3JnYW5pemF0aW9uTmFtZShvcmdOYW1lKTtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZU9yZ2FuaXphdGlvbigpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBvcmdhbml6YXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gT2JqZWN0LmtleXMob3JnYW5pemF0aW9uKS5sZW5ndGggPT09IDA7XG4gICAgY29uc3QgY2FuUmVhZE9yZyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ3NSZWFkKTtcbiAgICBjb25zdCBjYW5SZWFkUHJlZmVyZW5jZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdzUHJlZmVyZW5jZXNSZWFkKTtcbiAgICBjb25zdCBjYW5Xcml0ZVByZWZlcmVuY2VzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3Jnc1ByZWZlcmVuY2VzV3JpdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibGdcIj5cbiAgICAgICAgICAgICAge2NhblJlYWRPcmcgJiYgPE9yZ1Byb2ZpbGUgb25TdWJtaXQ9e3RoaXMub25VcGRhdGVPcmdhbml6YXRpb259IG9yZ05hbWU9e29yZ2FuaXphdGlvbi5uYW1lfSAvPn1cbiAgICAgICAgICAgICAge2NhblJlYWRQcmVmZXJlbmNlcyAmJiA8U2hhcmVkUHJlZmVyZW5jZXMgcmVzb3VyY2VVcmk9XCJvcmdcIiBkaXNhYmxlZD17IWNhbldyaXRlUHJlZmVyZW5jZXN9IC8+fVxuICAgICAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ29yZy1zZXR0aW5ncycpLFxuICAgIG9yZ2FuaXphdGlvbjogc3RhdGUub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbixcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkT3JnYW5pemF0aW9uLFxuICBzZXRPcmdhbml6YXRpb25OYW1lLFxuICB1cGRhdGVPcmdhbml6YXRpb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcmdEZXRhaWxzUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCwgRmllbGQsIEZpZWxkU2V0LCBCdXR0b24sIEZvcm0gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG9yZ05hbWU6IHN0cmluZztcbiAgb25TdWJtaXQ6IChvcmdOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBGb3JtRFRPIHtcbiAgb3JnTmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBPcmdQcm9maWxlOiBGQzxQcm9wcz4gPSAoeyBvblN1Ym1pdCwgb3JnTmFtZSB9KSA9PiB7XG4gIGNvbnN0IGNhbldyaXRlT3JnID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3Jnc1dyaXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIGRlZmF1bHRWYWx1ZXM9e3sgb3JnTmFtZSB9fSBvblN1Ym1pdD17KHsgb3JnTmFtZSB9OiBGb3JtRFRPKSA9PiBvblN1Ym1pdChvcmdOYW1lKX0+XG4gICAgICB7KHsgcmVnaXN0ZXIgfSkgPT4gKFxuICAgICAgICA8RmllbGRTZXQgbGFiZWw9XCJPcmdhbml6YXRpb24gcHJvZmlsZVwiIGRpc2FibGVkPXshY2FuV3JpdGVPcmd9PlxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk9yZ2FuaXphdGlvbiBuYW1lXCI+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJvcmctbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgey4uLnJlZ2lzdGVyKCdvcmdOYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIG9yZ2FuaXphdGlvbiBuYW1lPC9CdXR0b24+XG4gICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICApfVxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZ1Byb2ZpbGU7XG4iLCJpbXBvcnQgeyBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBvcmdhbml6YXRpb25Mb2FkZWQsIHVzZXJPcmdhbml6YXRpb25zTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyB1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcblxudHlwZSBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkT3JnYW5pemF0aW9uKFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvblJlc3BvbnNlID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvb3JnJyk7XG4gICAgZGlzcGF0Y2gob3JnYW5pemF0aW9uTG9hZGVkKG9yZ2FuaXphdGlvblJlc3BvbnNlKSk7XG5cbiAgICByZXR1cm4gb3JnYW5pemF0aW9uUmVzcG9uc2U7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcmdhbml6YXRpb24oXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGdldFN0b3JlKCkub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbjtcblxuICAgIGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkucHV0KCcvYXBpL29yZycsIHsgbmFtZTogb3JnYW5pemF0aW9uLm5hbWUgfSk7XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUob3JnYW5pemF0aW9uLm5hbWUpKTtcbiAgICBkaXNwYXRjaChsb2FkT3JnYW5pemF0aW9uKGRlcGVuZGVuY2llcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlck9yZ2FuaXphdGlvbihcbiAgb3JnSWQ6IG51bWJlcixcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb25SZXNwb25zZSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS91c2VyL3VzaW5nLycgKyBvcmdJZCk7XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUob3JnYW5pemF0aW9uUmVzcG9uc2UubmFtZSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JnYW5pemF0aW9uKFxuICBuZXdPcmc6IHsgbmFtZTogc3RyaW5nIH0sXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL29yZ3MvJywgbmV3T3JnKTtcblxuICAgIGRpc3BhdGNoKHNldFVzZXJPcmdhbml6YXRpb24ocmVzdWx0Lm9yZ0lkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyT3JnYW5pemF0aW9ucyhcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS91c2VyL29yZ3MnKTtcbiAgICBkaXNwYXRjaCh1c2VyT3JnYW5pemF0aW9uc0xvYWRlZChyZXN1bHQpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY3NzIiwiQnV0dG9uIiwiRmllbGQiLCJGaWVsZFNldCIsIkZvcm0iLCJJY29uIiwiTGFiZWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiU2VsZWN0Iiwic3R5bGVzRmFjdG9yeSIsIlRpbWVab25lUGlja2VyIiwiVG9vbHRpcCIsIldlZWtTdGFydFBpY2tlciIsInNlbGVjdG9ycyIsImJhY2tlbmRTcnYiLCJQcmVmZXJlbmNlc1NlcnZpY2UiLCJ0aGVtZXMiLCJ2YWx1ZSIsImxhYmVsIiwiaWQiLCJTaGFyZWRQcmVmZXJlbmNlcyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJob21lRGFzaGJvYXJkSWQiLCJ0aGVtZSIsInRpbWV6b25lIiwid2Vla1N0YXJ0Iiwic3RhdGUiLCJzZXJ2aWNlIiwidXBkYXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzZXRTdGF0ZSIsImRhc2hib2FyZElkIiwiZGFzaGJvYXJkIiwiZm9sZGVyVGl0bGUiLCJ0aXRsZSIsInJlc291cmNlVXJpIiwiZGFzaGJvYXJkcyIsImNvbXBvbmVudERpZE1vdW50IiwicHJlZnMiLCJsb2FkIiwic2VhcmNoIiwic3RhcnJlZCIsImRlZmF1bHREYXNoYm9hcmRIaXQiLCJ0YWdzIiwidHlwZSIsInVpZCIsInVyaSIsInVybCIsImZvbGRlcklkIiwiZm9sZGVyVWlkIiwiZm9sZGVyVXJsIiwiaXNTdGFycmVkIiwic2x1ZyIsIml0ZW1zIiwiZmluZCIsImQiLCJtaXNzaW5nIiwiZGFzaGJvYXJkSWRzIiwibGVuZ3RoIiwicHVzaCIsInJlbmRlciIsImRpc2FibGVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaG9tZURhc2hib2FyZFRvb2x0aXAiLCJvblN1Ym1pdEZvcm0iLCJpdGVtIiwib25UaGVtZUNoYW5nZWQiLCJsYWJlbFRleHQiLCJpIiwiZ2V0RnVsbERhc2hOYW1lIiwib25Ib21lRGFzaGJvYXJkQ2hhbmdlZCIsImNvbXBvbmVudHMiLCJjb250YWluZXJWMiIsIm9uVGltZVpvbmVDaGFuZ2VkIiwib25XZWVrU3RhcnRDaGFuZ2VkIiwiVXNlclByb2ZpbGUiLCJwcmVmZXJlbmNlc1NhdmVCdXR0b24iLCJjb25uZWN0IiwiUGFnZSIsIk9yZ1Byb2ZpbGUiLCJsb2FkT3JnYW5pemF0aW9uIiwidXBkYXRlT3JnYW5pemF0aW9uIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImdldE5hdk1vZGVsIiwic2V0T3JnYW5pemF0aW9uTmFtZSIsIlZlcnRpY2FsR3JvdXAiLCJjb250ZXh0U3J2IiwiT3JnRGV0YWlsc1BhZ2UiLCJvcmdOYW1lIiwibmF2TW9kZWwiLCJvcmdhbml6YXRpb24iLCJpc0xvYWRpbmciLCJPYmplY3QiLCJrZXlzIiwiY2FuUmVhZE9yZyIsImhhc1Blcm1pc3Npb24iLCJPcmdzUmVhZCIsImNhblJlYWRQcmVmZXJlbmNlcyIsIk9yZ3NQcmVmZXJlbmNlc1JlYWQiLCJjYW5Xcml0ZVByZWZlcmVuY2VzIiwiT3Jnc1ByZWZlcmVuY2VzV3JpdGUiLCJvblVwZGF0ZU9yZ2FuaXphdGlvbiIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZJbmRleCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIklucHV0Iiwib25TdWJtaXQiLCJjYW5Xcml0ZU9yZyIsIk9yZ3NXcml0ZSIsInJlZ2lzdGVyIiwicmVxdWlyZWQiLCJnZXRCYWNrZW5kU3J2Iiwib3JnYW5pemF0aW9uTG9hZGVkIiwidXNlck9yZ2FuaXphdGlvbnNMb2FkZWQiLCJ1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUiLCJkZXBlbmRlbmNpZXMiLCJkaXNwYXRjaCIsIm9yZ2FuaXphdGlvblJlc3BvbnNlIiwiZ2V0IiwiZ2V0U3RvcmUiLCJwdXQiLCJzZXRVc2VyT3JnYW5pemF0aW9uIiwib3JnSWQiLCJwb3N0IiwiY3JlYXRlT3JnYW5pemF0aW9uIiwibmV3T3JnIiwicmVzdWx0IiwiZ2V0VXNlck9yZ2FuaXphdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9
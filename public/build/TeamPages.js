"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TeamPages"],{

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

/***/ "./public/app/core/components/Upgrade/UpgradeBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradeBox": () => (/* binding */ UpgradeBox),
/* harmony export */   "UpgradeContent": () => (/* binding */ UpgradeContent),
/* harmony export */   "UpgradeContentVertical": () => (/* binding */ UpgradeContentVertical)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["featureName", "className", "children", "text", "featureId", "eventVariant", "size"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const UpgradeBox = _ref => {
  let {
    featureName,
    className,
    text,
    featureId,
    eventVariant = '',
    size = 'md'
  } = _ref,
      htmlProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(theme => getUpgradeBoxStyles(theme, size));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_grafana_runtime_src__WEBPACK_IMPORTED_MODULE_3__.reportExperimentView)(`feature-highlights-${featureId}`, 'test', eventVariant);
  }, [eventVariant, featureId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", Object.assign({
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.box, className)
  }, htmlProps, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: 'rocket',
      className: styles.icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: styles.text,
        children: ["You\u2019ve discovered a Pro feature! ", text || `Get the Grafana Pro plan to access ${featureName}.`]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        variant: "secondary",
        size: size,
        className: styles.button,
        href: "https://grafana.com/profile/org/subscription",
        target: "__blank",
        rel: "noopener noreferrer",
        children: "Upgrade"
      })]
    })]
  }));
};

const getUpgradeBoxStyles = (theme, size) => {
  const borderRadius = theme.shape.borderRadius(2);
  const fontBase = size === 'md' ? 'body' : 'bodySmall';
  return {
    box: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      align-items: center;
      position: relative;
      border-radius: ${borderRadius};
      background: ${theme.colors.success.transparent};
      padding: ${theme.spacing(2)};
      color: ${theme.colors.success.text};
      font-size: ${theme.typography[fontBase].fontSize};
      text-align: left;
      line-height: 16px;
      margin: ${theme.spacing(0, 'auto', 3, 'auto')};
      max-width: ${theme.breakpoints.values.xxl}px;
      width: 100%;
    `,
    inner: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    `,
    text: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin: 0;
    `,
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: ${theme.colors.success.main};
      font-weight: ${theme.typography.fontWeightLight};
      color: white;

      &:hover {
        background-color: ${theme.colors.success.main};
      }

      &:focus-visible {
        box-shadow: none;
        color: ${theme.colors.text.primary};
        outline: 2px solid ${theme.colors.primary.main};
      }
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin: ${theme.spacing(0.5, 1, 0.5, 0.5)};
    `
  };
};

const UpgradeContent = ({
  listItems,
  image,
  featureUrl,
  featureName,
  description,
  caption,
  action
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getUpgradeContentStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
        className: styles.title,
        children: ["Get started with ", featureName]
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
        className: styles.description,
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
        className: styles.list,
        children: listItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: 'check',
            size: 'xl',
            className: styles.icon
          }), " ", item]
        }, index))
      }), (action === null || action === void 0 ? void 0 : action.link) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        variant: 'primary',
        href: action.link,
        children: action.text
      }), (action === null || action === void 0 ? void 0 : action.onClick) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: 'primary',
        onClick: action.onClick,
        children: action.text
      }), featureUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        fill: 'text',
        href: featureUrl,
        className: styles.link,
        target: "_blank",
        rel: "noreferrer noopener",
        children: "Learn more"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.media,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: getImgUrl(image),
        alt: 'Feature screenshot'
      }), caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: styles.caption,
        children: caption
      })]
    })]
  });
};

const getUpgradeContentStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      justify-content: space-between;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      width: 45%;
      margin-right: ${theme.spacing(4)};
    `,
    media: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      width: 55%;

      img {
        width: 100%;
      }
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.maxContrast};
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.primary};
      font-weight: ${theme.typography.fontWeightLight};
    `,
    list: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      list-style: none;
      margin: ${theme.spacing(4, 0, 2, 0)};

      li {
        display: flex;
        align-items: flex-start;
        color: ${theme.colors.text.primary};
        padding: ${theme.spacing(1, 0)};
      }
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.success.main};
      margin-right: ${theme.spacing(1)};
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-left: ${theme.spacing(2)};
    `,
    caption: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-weight: ${theme.typography.fontWeightLight};
      margin: ${theme.spacing(1, 0, 0)};
    `
  };
};

const UpgradeContentVertical = ({
  featureName,
  description,
  featureUrl,
  image
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getContentVerticalStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
      className: styles.title,
      children: ["Get started with ", featureName]
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
      className: styles.description,
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
      fill: 'text',
      href: featureUrl,
      target: "_blank",
      rel: "noreferrer noopener",
      children: "Learn more"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.media,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: getImgUrl(image),
        alt: 'Feature screenshot'
      })
    })]
  });
};

const getContentVerticalStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      overflow: auto;
      height: 100%;
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.maxContrast};
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.primary};
      font-weight: ${theme.typography.fontWeightLight};
    `,
    media: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      width: 100%;
      margin-top: ${theme.spacing(2)};

      img {
        width: 100%;
      }
    `
  };
};

const getImgUrl = urlOrId => {
  if (urlOrId.startsWith('http')) {
    return urlOrId;
  }

  return '/public/img/enterprise/highlights/' + urlOrId;
};

/***/ }),

/***/ "./public/app/core/components/WithFeatureToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithFeatureToggle": () => (/* binding */ WithFeatureToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const WithFeatureToggle = ({
  featureToggle,
  children
}) => {
  if (featureToggle === true) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: children
    });
  }

  return null;
};

/***/ }),

/***/ "./public/app/features/admin/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightTrial": () => (/* binding */ highlightTrial),
/* harmony export */   "isTrial": () => (/* binding */ isTrial)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function isTrial() {
  var _config$licenseInfo;

  const expiry = (_config$licenseInfo = _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.licenseInfo) === null || _config$licenseInfo === void 0 ? void 0 : _config$licenseInfo.trialExpiry;
  return !!(expiry && expiry > 0);
}
const highlightTrial = () => isTrial() && _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.featureHighlights;

/***/ }),

/***/ "./public/app/features/teams/TeamGroupSync.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamGroupSync": () => (/* binding */ TeamGroupSync),
/* harmony export */   "TeamSyncUpgradeContent": () => (/* binding */ TeamSyncUpgradeContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/Upgrade/UpgradeBox.tsx");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _UpgradeBox, _h, _Tooltip, _div, _Icon2, _h2, _th;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LegacyForms;










function mapStateToProps(state) {
  return {
    groups: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_5__.getTeamGroups)(state.team)
  };
}

const mapDispatchToProps = {
  loadTeamGroups: _state_actions__WEBPACK_IMPORTED_MODULE_4__.loadTeamGroups,
  addTeamGroup: _state_actions__WEBPACK_IMPORTED_MODULE_4__.addTeamGroup,
  removeTeamGroup: _state_actions__WEBPACK_IMPORTED_MODULE_4__.removeTeamGroup
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const headerTooltip = `Sync LDAP or OAuth groups with your Grafana teams.`;
class TeamGroupSync extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onToggleAdding", () => {
      this.setState({
        isAdding: !this.state.isAdding
      });
    });

    _defineProperty(this, "onNewGroupIdChanged", event => {
      this.setState({
        newGroupId: event.target.value
      });
    });

    _defineProperty(this, "onAddGroup", event => {
      event.preventDefault();
      this.props.addTeamGroup(this.state.newGroupId);
      this.setState({
        isAdding: false,
        newGroupId: ''
      });
    });

    _defineProperty(this, "onRemoveGroup", group => {
      this.props.removeTeamGroup(group.groupId);
    });

    this.state = {
      isAdding: false,
      newGroupId: ''
    };
  }

  componentDidMount() {
    this.fetchTeamGroups();
  }

  async fetchTeamGroups() {
    await this.props.loadTeamGroups();
  }

  isNewGroupValid() {
    return this.state.newGroupId.length > 1;
  }

  renderGroup(group) {
    const {
      isReadOnly
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
        children: group.groupId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
        style: {
          width: '1%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          size: "sm",
          variant: "destructive",
          onClick: () => this.onRemoveGroup(group),
          disabled: isReadOnly,
          children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "times"
          }))
        })
      })]
    }, group.groupId);
  }

  render() {
    const {
      isAdding,
      newGroupId
    } = this.state;
    const {
      groups,
      isReadOnly
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      children: [(0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_9__.highlightTrial)() && (_UpgradeBox || (_UpgradeBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_8__.UpgradeBox, {
        featureId: 'team-sync',
        eventVariant: 'trial',
        featureName: 'team sync',
        text: 'Add a group to enable team sync for free during your trial of Grafana Pro.'
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "page-action-bar",
        children: [(!(0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_9__.highlightTrial)() || groups.length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
            className: "page-sub-heading",
            children: "External group sync"
          })), _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            placement: "auto",
            content: headerTooltip,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              className: "icon--has-hover page-sub-heading-icon",
              name: "question-circle"
            })
          }))]
        }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "page-action-bar__spacer"
        })), groups.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "pull-right",
          onClick: this.onToggleAdding,
          disabled: isReadOnly,
          children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "plus"
          })), " Add group"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_2__.SlideDown, {
        in: isAdding,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "cta-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_7__.CloseButton, {
            onClick: this.onToggleAdding
          }), _h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h5", {
            children: "Add External Group"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
            className: "gf-form-inline",
            onSubmit: this.onAddGroup,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "gf-form",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Input, {
                type: "text",
                className: "gf-form-input width-30",
                value: newGroupId,
                onChange: this.onNewGroupIdChanged,
                placeholder: "cn=ops,ou=groups,dc=grafana,dc=org",
                disabled: isReadOnly
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "gf-form",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "submit",
                disabled: isReadOnly || !this.isNewGroupValid(),
                children: "Add group"
              })
            })]
          })]
        })
      }), groups.length === 0 && !isAdding && ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_9__.highlightTrial)() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TeamSyncUpgradeContent, {
        action: {
          onClick: this.onToggleAdding,
          text: 'Add group'
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: this.onToggleAdding,
        buttonIcon: "users-alt",
        title: "There are no external groups to sync with",
        buttonTitle: "Add group",
        proTip: headerTooltip,
        proTipLinkTitle: "Learn more",
        proTipLink: "https://docs.grafana.org/auth/enhanced_ldap/",
        proTipTarget: "_blank",
        buttonDisabled: isReadOnly
      })), groups.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("table", {
          className: "filter-table filter-table--hover form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
              children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "External Group ID"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("tbody", {
            children: groups.map(group => this.renderGroup(group))
          })]
        })
      })]
    });
  }

}
const TeamSyncUpgradeContent = ({
  action
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_8__.UpgradeContent, {
    action: action,
    listItems: ['Stop managing user access in two places - assign users to groups in SAML, LDAP or Oauth, and manage access at a Team level in Grafana', 'Update users’ permissions immediately when you add or remove them from an LDAP group, with no need for them to sign out and back in'],
    image: `team-sync-${theme.isLight ? 'light' : 'dark'}.png`,
    featureName: 'team sync',
    featureUrl: 'https://grafana.com/docs/grafana/latest/enterprise/team-sync',
    description: 'Team Sync makes it easier for you to manage users’ access in Grafana, by immediately updating each user’s Grafana teams and permissions based on their single sign-on group membership, instead of when users sign in.'
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TeamGroupSync));

/***/ }),

/***/ "./public/app/features/teams/TeamMemberRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamMemberRow": () => (/* binding */ TeamMemberRow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/WithFeatureToggle.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Select
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;






const mapDispatchToProps = {
  removeTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_5__.removeTeamMember,
  updateTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_5__.updateTeamMember
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);
class TeamMemberRow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onPermissionChange", (item, member) => {
      const permission = item.value;
      const updatedTeamMember = Object.assign({}, member, {
        permission: permission
      });
      this.props.updateTeamMember(updatedTeamMember);
    });

    this.renderLabels = this.renderLabels.bind(this);
    this.renderPermissions = this.renderPermissions.bind(this);
  }

  onRemoveMember(member) {
    this.props.removeTeamMember(member.userId);
  }

  renderPermissions(member) {
    const {
      editorsCanAdmin,
      signedInUserIsTeamAdmin
    } = this.props;
    const value = app_types__WEBPACK_IMPORTED_MODULE_3__.teamsPermissionLevels.find(dp => dp.value === member.permission);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_4__.WithFeatureToggle, {
      featureToggle: editorsCanAdmin,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "width-5 team-permissions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "gf-form",
          children: [signedInUserIsTeamAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Select, {
            menuShouldPortal: true,
            isSearchable: false,
            options: app_types__WEBPACK_IMPORTED_MODULE_3__.teamsPermissionLevels,
            onChange: item => this.onPermissionChange(item, member),
            className: "gf-form-select-box__control--menu-right",
            value: value
          }), !signedInUserIsTeamAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            children: value.label
          })]
        })
      })
    });
  }

  renderLabels(labels) {
    if (!labels) {
      return _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {}));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      children: labels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_6__.TagBadge, {
        label: label,
        removeIcon: false,
        count: 0,
        onClick: () => {}
      }, label))
    });
  }

  render() {
    const {
      member,
      syncEnabled,
      signedInUserIsTeamAdmin
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "width-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          "aria-label": `Avatar for team member "${member.name}"`,
          className: "filter-table__avatar",
          src: member.avatarUrl
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.login
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.name
      }), this.renderPermissions(member), syncEnabled && this.renderLabels(member.labels), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "text-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {
          "aria-label": "Remove team member",
          size: "sm",
          disabled: !signedInUserIsTeamAdmin,
          onConfirm: () => this.onRemoveMember(member)
        })
      })]
    }, member.userId);
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamMemberRow));

/***/ }),

/***/ "./public/app/features/teams/TeamMembers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamMembers": () => (/* binding */ TeamMembers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_Select_UserPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Select/UserPicker.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/WithFeatureToggle.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _TeamMemberRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/teams/TeamMemberRow.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td, _Label, _th, _th2, _th3, _th4, _th5, _th6;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function mapStateToProps(state) {
  return {
    searchMemberQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getSearchMemberQuery)(state.team),
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_8__.config.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  addTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_5__.addTeamMember,
  setSearchMemberQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_11__.setSearchMemberQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class TeamMembers extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchMemberQuery(value);
    });

    _defineProperty(this, "onToggleAdding", () => {
      this.setState({
        isAdding: !this.state.isAdding
      });
    });

    _defineProperty(this, "onUserSelected", user => {
      this.setState({
        newTeamMember: user
      });
    });

    _defineProperty(this, "onAddUserToTeam", async () => {
      this.props.addTeamMember(this.state.newTeamMember.id);
      this.setState({
        newTeamMember: null
      });
    });

    this.state = {
      isAdding: false,
      newTeamMember: null
    };
  }

  renderLabels(labels) {
    if (!labels) {
      return _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {}));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
      children: labels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_4__.TagBadge, {
        label: label,
        removeIcon: false,
        count: 0,
        onClick: () => {}
      }, label))
    });
  }

  render() {
    const {
      isAdding
    } = this.state;
    const {
      searchMemberQuery,
      members,
      syncEnabled,
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.isSignedInUserTeamAdmin)({
      members,
      editorsCanAdmin,
      signedInUser
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.FilterInput, {
            placeholder: "Search members",
            value: searchMemberQuery,
            onChange: this.onSearchQueryChange
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button, {
          className: "pull-right",
          onClick: this.onToggleAdding,
          disabled: isAdding || !isTeamAdmin,
          children: "Add member"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_2__.SlideDown, {
        in: isAdding,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "cta-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_12__.CloseButton, {
            "aria-label": "Close 'Add team member' dialogue",
            onClick: this.onToggleAdding
          }), _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Label, {
            htmlFor: "user-picker",
            children: "Add team member"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "gf-form-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Select_UserPicker__WEBPACK_IMPORTED_MODULE_3__.UserPicker, {
              inputId: "user-picker",
              onSelected: this.onUserSelected,
              className: "min-width-30"
            }), this.state.newTeamMember && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button, {
              type: "submit",
              onClick: this.onAddUserToTeam,
              children: "Add to team"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("table", {
          className: "filter-table filter-table--hover form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
              children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Login"
              })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Email"
              })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Name"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_7__.WithFeatureToggle, {
                featureToggle: editorsCanAdmin,
                children: _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Permission"
                }))
              }), syncEnabled && (_th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {}))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("tbody", {
            children: members && members.map(member => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeamMemberRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
              member: member,
              syncEnabled: syncEnabled,
              editorsCanAdmin: editorsCanAdmin,
              signedInUserIsTeamAdmin: isTeamAdmin
            }, member.userId))
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamMembers));

/***/ }),

/***/ "./public/app/features/teams/TeamPages.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamPages": () => (/* binding */ TeamPages),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _TeamMembers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/TeamMembers.tsx");
/* harmony import */ var _TeamPermissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/teams/TeamPermissions.tsx");
/* harmony import */ var _TeamSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/teams/TeamSettings.tsx");
/* harmony import */ var _TeamGroupSync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/teams/TeamGroupSync.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/components/Upgrade/UpgradeBox.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _UpgradeBox, _TeamSyncUpgradeConte;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var PageTypes;

(function (PageTypes) {
  PageTypes["Members"] = "members";
  PageTypes["Settings"] = "settings";
  PageTypes["GroupSync"] = "groupsync";
})(PageTypes || (PageTypes = {}));

function mapStateToProps(state, props) {
  var _props$match$params$p;

  const teamId = parseInt(props.match.params.id, 10);
  const team = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_12__.getTeam)(state.team, teamId);
  let defaultPage = 'members';

  if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.accessControlEnabled()) {
    // With FGAC the settings page will always be available
    if (!team || !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      defaultPage = 'settings';
    }
  }

  const pageName = (_props$match$params$p = props.match.params.page) !== null && _props$match$params$p !== void 0 ? _props$match$params$p : defaultPage;
  const teamLoadingNav = (0,_state_navModel__WEBPACK_IMPORTED_MODULE_13__.getTeamLoadingNav)(pageName);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_14__.getNavModel)(state.navIndex, `team-${pageName}-${teamId}`, teamLoadingNav);
  const members = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_12__.getTeamMembers)(state.team);
  return {
    navModel,
    teamId: teamId,
    pageName: pageName,
    team,
    members,
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_4__["default"].editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  loadTeam: _state_actions__WEBPACK_IMPORTED_MODULE_11__.loadTeam,
  loadTeamMembers: _state_actions__WEBPACK_IMPORTED_MODULE_11__.loadTeamMembers
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class TeamPages extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "textsAreEqual", (text1, text2) => {
      if (!text1 && !text2) {
        return true;
      }

      if (!text1 || !text2) {
        return false;
      }

      return text1.toLocaleLowerCase() === text2.toLocaleLowerCase();
    });

    _defineProperty(this, "hideTabsFromNonTeamAdmin", (navModel, isSignedInUserTeamAdmin) => {
      if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.accessControlEnabled()) {
        return navModel;
      }

      if (!isSignedInUserTeamAdmin && navModel.main && navModel.main.children) {
        navModel.main.children.filter(navItem => !this.textsAreEqual(navItem.text, PageTypes.Members)).map(navItem => {
          navItem.hideFromTabs = true;
        });
      }

      return navModel;
    });

    this.state = {
      isLoading: false,
      isSyncEnabled: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_16__.featureEnabled)('teamsync')
    };
  }

  async componentDidMount() {
    await this.fetchTeam();
  }

  async fetchTeam() {
    const {
      loadTeam,
      teamId
    } = this.props;
    this.setState({
      isLoading: true
    });
    const team = await loadTeam(teamId); // With accesscontrol, the TeamPermissions will fetch team members

    if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.accessControlEnabled()) {
      await this.props.loadTeamMembers();
    }

    this.setState({
      isLoading: false
    });
    return team;
  }

  getCurrentPage() {
    const pages = ['members', 'settings', 'groupsync'];
    const currentPage = this.props.pageName;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.includes)(pages, currentPage) ? currentPage : pages[0];
  }

  renderPage(isSignedInUserTeamAdmin) {
    const {
      isSyncEnabled
    } = this.state;
    const {
      members,
      team
    } = this.props;
    const currentPage = this.getCurrentPage();
    const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsRead, team, isSignedInUserTeamAdmin);
    const canReadTeamPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsRead, team, isSignedInUserTeamAdmin);
    const canWriteTeamPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsWrite, team, isSignedInUserTeamAdmin);

    switch (currentPage) {
      case PageTypes.Members:
        if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.accessControlEnabled()) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamPermissions__WEBPACK_IMPORTED_MODULE_7__["default"], {
            team: team
          });
        } else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamMembers__WEBPACK_IMPORTED_MODULE_6__["default"], {
            syncEnabled: isSyncEnabled,
            members: members
          });
        }

      case PageTypes.Settings:
        return canReadTeam && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamSettings__WEBPACK_IMPORTED_MODULE_8__["default"], {
          team: team
        });

      case PageTypes.GroupSync:
        if (isSyncEnabled) {
          if (canReadTeamPermissions) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamGroupSync__WEBPACK_IMPORTED_MODULE_9__["default"], {
              isReadOnly: !canWriteTeamPermissions
            });
          }
        } else if (app_core_config__WEBPACK_IMPORTED_MODULE_4__["default"].featureToggles.featureHighlights) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
            children: [_UpgradeBox || (_UpgradeBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_17__.UpgradeBox, {
              featureName: 'team sync',
              featureId: 'team-sync'
            })), _TeamSyncUpgradeConte || (_TeamSyncUpgradeConte = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamGroupSync__WEBPACK_IMPORTED_MODULE_9__.TeamSyncUpgradeContent, {}))]
          });
        }

    }

    return null;
  }

  render() {
    const {
      team,
      navModel,
      members,
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_12__.isSignedInUserTeamAdmin)({
      members,
      editorsCanAdmin,
      signedInUser
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navModel: this.hideTabsFromNonTeamAdmin(navModel, isTeamAdmin),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
        isLoading: this.state.isLoading,
        children: team && Object.keys(team).length !== 0 && this.renderPage(isTeamAdmin)
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withTheme2)(TeamPages)));

/***/ }),

/***/ "./public/app/features/teams/TeamPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/AccessControl/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






// TeamPermissions component replaces TeamMembers component when the accesscontrol feature flag is set
const TeamPermissions = props => {
  const canListUsers = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(_types__WEBPACK_IMPORTED_MODULE_2__.AccessControlAction.OrgUsersRead);
  const canSetPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(_types__WEBPACK_IMPORTED_MODULE_2__.AccessControlAction.ActionTeamsPermissionsWrite, props.team);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_1__.Permissions, {
    title: "Members",
    addPermissionTitle: "Add member",
    buttonLabel: "Add member",
    resource: "teams",
    resourceId: props.team.id,
    canListUsers: canListUsers,
    canSetPermissions: canSetPermissions
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamPermissions);

/***/ }),

/***/ "./public/app/features/teams/TeamSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamSettings": () => (/* binding */ TeamSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const mapDispatchToProps = {
  updateTeam: _state_actions__WEBPACK_IMPORTED_MODULE_4__.updateTeam
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);
const TeamSettings = ({
  team,
  updateTeam
}) => {
  const canWriteTeamSettings = app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsWrite, team);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
      label: "Team settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: Object.assign({}, team),
        onSubmit: formTeam => {
          updateTeam(formTeam.name, formTeam.email);
        },
        disabled: !canWriteTeamSettings,
        children: ({
          register
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Name",
            disabled: !canWriteTeamSettings,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('name', {
              required: true
            }), {
              id: "name-input"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Email",
            description: "This is optional and is primarily used to set the team profile avatar (via gravatar service).",
            disabled: !canWriteTeamSettings,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('email'), {
              placeholder: "team@email.com",
              type: "email",
              id: "email-input"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            disabled: !canWriteTeamSettings,
            children: "Update"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_3__.SharedPreferences, {
      resourceUri: `teams/${team.id}`,
      disabled: !canWriteTeamSettings
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamSettings));

/***/ }),

/***/ "./public/app/features/teams/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTeamGroup": () => (/* binding */ addTeamGroup),
/* harmony export */   "addTeamMember": () => (/* binding */ addTeamMember),
/* harmony export */   "deleteTeam": () => (/* binding */ deleteTeam),
/* harmony export */   "loadTeam": () => (/* binding */ loadTeam),
/* harmony export */   "loadTeamGroups": () => (/* binding */ loadTeamGroups),
/* harmony export */   "loadTeamMembers": () => (/* binding */ loadTeamMembers),
/* harmony export */   "loadTeams": () => (/* binding */ loadTeams),
/* harmony export */   "removeTeamGroup": () => (/* binding */ removeTeamGroup),
/* harmony export */   "removeTeamMember": () => (/* binding */ removeTeamMember),
/* harmony export */   "updateTeam": () => (/* binding */ updateTeam),
/* harmony export */   "updateTeamMember": () => (/* binding */ updateTeamMember)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");







function loadTeams() {
  return async dispatch => {
    // Early return if the user cannot list teams
    if (!app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.ActionTeamsRead)) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamsLoaded)([]));
      return;
    }

    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/teams/search', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_5__.accessControlQueryParam)({
      perpage: 1000,
      page: 1
    }));
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamsLoaded)(response.teams));
  };
}
function loadTeam(id) {
  return async dispatch => {
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${id}`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_5__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamLoaded)(response));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_3__.buildNavModel)(response)));
  };
}
function loadTeamMembers() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/members`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamMembersLoaded)(response));
  };
}
function addTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/members`, {
      userId: id
    });
    dispatch(loadTeamMembers());
  };
}
function removeTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/members/${id}`);
    dispatch(loadTeamMembers());
  };
}
function updateTeam(name, email) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${team.id}`, {
      name,
      email
    });
    dispatch(loadTeam(team.id));
  };
}
function loadTeamGroups() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/groups`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamGroupsLoaded)(response));
  };
}
function addTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/groups`, {
      groupId: groupId
    });
    dispatch(loadTeamGroups());
  };
}
function removeTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/groups/${encodeURIComponent(groupId)}`);
    dispatch(loadTeamGroups());
  };
}
function deleteTeam(id) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${id}`); // Update users permissions in case they lost teams.read with the deletion

    await app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.fetchUserPermissions();
    dispatch(loadTeams());
  };
}
function updateTeamMember(member) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${member.teamId}/members/${member.userId}`, {
      permission: member.permission
    });
    dispatch(loadTeamMembers());
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNavModel": () => (/* binding */ buildNavModel),
/* harmony export */   "getTeamLoadingNav": () => (/* binding */ getTeamLoadingNav)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/utils.ts");






const loadingTeam = {
  avatarUrl: 'public/img/user_profile.png',
  id: 1,
  name: 'Loading',
  email: 'loading',
  memberCount: 0,
  permission: app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Member
};
function buildNavModel(team) {
  const navModel = {
    img: team.avatarUrl,
    id: 'team-' + team.id,
    subTitle: 'Manage members and settings',
    url: '',
    text: team.name,
    breadcrumbs: [{
      title: 'Teams',
      url: 'org/teams'
    }],
    children: [// With FGAC this tab will always be available (but not always editable)
    // With Legacy it will be hidden by hideTabsFromNonTeamAdmin should the user not be allowed to see it
    {
      active: false,
      icon: 'sliders-v-alt',
      id: `team-settings-${team.id}`,
      text: 'Settings',
      url: `org/teams/edit/${team.id}/settings`
    }]
  }; // While team is loading we leave the members tab
  // With FGAC the Members tab is available when user has ActionTeamsPermissionsRead for this team
  // With Legacy it will always be present

  if (team === loadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_0__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
    navModel.children.unshift({
      active: false,
      icon: 'users-alt',
      id: `team-members-${team.id}`,
      text: 'Members',
      url: `org/teams/edit/${team.id}/members`
    });
  }

  const teamGroupSync = {
    active: false,
    icon: 'sync',
    id: `team-groupsync-${team.id}`,
    text: 'External group sync',
    url: `org/teams/edit/${team.id}/groupsync`
  };
  const isLoadingTeam = team === loadingTeam;

  if ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_5__.highlightTrial)()) {
    teamGroupSync.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_4__.ProBadge)({
      experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge',
      eventVariant: 'trial'
    });
  } // With both Legacy and FGAC the tab is protected being featureEnabled
  // While team is loading we leave the teamsync tab
  // With FGAC the External Group Sync tab is available when user has ActionTeamsPermissionsRead for this team


  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('teamsync')) {
    if (isLoadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_0__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      navModel.children.push(teamGroupSync);
    }
  } else if (app_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].featureToggles.featureHighlights) {
    navModel.children.push(Object.assign({}, teamGroupSync, {
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_4__.ProBadge)({
        experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge'
      })
    }));
  }

  return navModel;
}
function getTeamLoadingNav(pageName) {
  const main = buildNavModel(loadingTeam);
  let node; // find active page

  for (const child of main.children) {
    if (child.id.indexOf(pageName) > 0) {
      child.active = true;
      node = child;
      break;
    }
  }

  return {
    main: main,
    node: node
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSearchMemberQuery": () => (/* binding */ getSearchMemberQuery),
/* harmony export */   "getSearchQuery": () => (/* binding */ getSearchQuery),
/* harmony export */   "getTeam": () => (/* binding */ getTeam),
/* harmony export */   "getTeamGroups": () => (/* binding */ getTeamGroups),
/* harmony export */   "getTeamMembers": () => (/* binding */ getTeamMembers),
/* harmony export */   "getTeams": () => (/* binding */ getTeams),
/* harmony export */   "getTeamsCount": () => (/* binding */ getTeamsCount),
/* harmony export */   "getTeamsSearchPage": () => (/* binding */ getTeamsSearchPage),
/* harmony export */   "isPermissionTeamAdmin": () => (/* binding */ isPermissionTeamAdmin),
/* harmony export */   "isSignedInUserTeamAdmin": () => (/* binding */ isSignedInUserTeamAdmin)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");

const getSearchQuery = state => state.searchQuery;
const getSearchMemberQuery = state => state.searchMemberQuery;
const getTeamGroups = state => state.groups;
const getTeamsCount = state => state.teams.length;
const getTeamsSearchPage = state => state.searchPage;
const getTeam = (state, currentTeamId) => {
  if (state.team.id === parseInt(currentTeamId, 10)) {
    return state.team;
  }

  return null;
};
const getTeams = state => {
  const regex = RegExp(state.searchQuery, 'i');
  return state.teams.filter(team => {
    return regex.test(team.name);
  });
};
const getTeamMembers = state => {
  const regex = RegExp(state.searchMemberQuery, 'i');
  return state.members.filter(member => {
    return regex.test(member.login) || regex.test(member.email) || regex.test(member.name);
  });
};
const isSignedInUserTeamAdmin = config => {
  const {
    members,
    signedInUser,
    editorsCanAdmin
  } = config;
  const userInMembers = members.find(m => m.userId === signedInUser.id);
  const permission = userInMembers ? userInMembers.permission : app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Member;
  return isPermissionTeamAdmin({
    permission,
    signedInUser,
    editorsCanAdmin
  });
};
const isPermissionTeamAdmin = config => {
  const {
    permission,
    signedInUser,
    editorsCanAdmin
  } = config;
  const isAdmin = signedInUser.isGrafanaAdmin || signedInUser.orgRole === app_types__WEBPACK_IMPORTED_MODULE_0__.OrgRole.Admin;
  const userIsTeamAdmin = permission === app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Admin;
  const isSignedInUserTeamAdmin = isAdmin || userIsTeamAdmin;
  return isSignedInUserTeamAdmin || !editorsCanAdmin;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixxQkFBcUIsR0FBSTFNLE1BQUQsSUFBdUM7QUFDMUUsUUFBTTtBQUFFbUQsSUFBQUEsVUFBRjtBQUFjeUIsSUFBQUEsWUFBZDtBQUE0QmxCLElBQUFBO0FBQTVCLE1BQWdEMUQsTUFBdEQ7QUFDQSxRQUFNMk0sT0FBTyxHQUFHL0gsWUFBWSxDQUFDZ0ksY0FBYixJQUErQmhJLFlBQVksQ0FBQ2lJLE9BQWIsS0FBeUJoQixvREFBeEU7QUFDQSxRQUFNa0IsZUFBZSxHQUFHNUosVUFBVSxLQUFLeUgsZ0VBQXZDO0FBQ0EsUUFBTXJHLHVCQUF1QixHQUFHb0ksT0FBTyxJQUFJSSxlQUEzQztBQUVBLFNBQU94SSx1QkFBdUIsSUFBSSxDQUFDYixlQUFuQztBQUNELENBUE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvU2hhcmVkUHJlZmVyZW5jZXMvU2hhcmVkUHJlZmVyZW5jZXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1VwZ3JhZGVCb3gudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9XaXRoRmVhdHVyZVRvZ2dsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbUdyb3VwU3luYy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbU1lbWJlclJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbU1lbWJlcnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL1RlYW1QYWdlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbVBlcm1pc3Npb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9UZWFtU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGaWVsZCxcbiAgRmllbGRTZXQsXG4gIEZvcm0sXG4gIEljb24sXG4gIExhYmVsLFxuICBSYWRpb0J1dHRvbkdyb3VwLFxuICBTZWxlY3QsXG4gIHN0eWxlc0ZhY3RvcnksXG4gIFRpbWVab25lUGlja2VyLFxuICBUb29sdGlwLFxuICBXZWVrU3RhcnRQaWNrZXIsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5cbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCwgRGFzaGJvYXJkU2VhcmNoSXRlbVR5cGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvc2VhcmNoL3R5cGVzJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBQcmVmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9QcmVmZXJlbmNlc1NlcnZpY2UnO1xuaW1wb3J0IHsgdCwgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlc291cmNlVXJpOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGhvbWVEYXNoYm9hcmRJZDogbnVtYmVyO1xuICB0aGVtZTogc3RyaW5nO1xuICB0aW1lem9uZTogc3RyaW5nO1xuICB3ZWVrU3RhcnQ6IHN0cmluZztcbiAgZGFzaGJvYXJkczogRGFzaGJvYXJkU2VhcmNoSGl0W107XG59XG5cbmNvbnN0IHRoZW1lczogU2VsZWN0YWJsZVZhbHVlW10gPSBbXG4gIHsgdmFsdWU6ICcnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmRlZmF1bHQtbGFiZWwnLCBtZXNzYWdlOiAnRGVmYXVsdCcgfSkgfSxcbiAgeyB2YWx1ZTogJ2RhcmsnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmRhcmstbGFiZWwnLCBtZXNzYWdlOiAnRGFyaycgfSkgfSxcbiAgeyB2YWx1ZTogJ2xpZ2h0JywgbGFiZWw6IHQoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy50aGVtZS5saWdodC1sYWJlbCcsIG1lc3NhZ2U6ICdMaWdodCcgfSkgfSxcbl07XG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRQcmVmZXJlbmNlcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHNlcnZpY2U6IFByZWZlcmVuY2VzU2VydmljZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNlcnZpY2UgPSBuZXcgUHJlZmVyZW5jZXNTZXJ2aWNlKHByb3BzLnJlc291cmNlVXJpKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG9tZURhc2hib2FyZElkOiAwLFxuICAgICAgdGhlbWU6ICcnLFxuICAgICAgdGltZXpvbmU6ICcnLFxuICAgICAgd2Vla1N0YXJ0OiAnJyxcbiAgICAgIGRhc2hib2FyZHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmVmcyA9IGF3YWl0IHRoaXMuc2VydmljZS5sb2FkKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkcyA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgc3RhcnJlZDogdHJ1ZSB9KTtcbiAgICBjb25zdCBkZWZhdWx0RGFzaGJvYXJkSGl0OiBEYXNoYm9hcmRTZWFyY2hIaXQgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIHRpdGxlOiAnRGVmYXVsdCcsXG4gICAgICB0YWdzOiBbXSxcbiAgICAgIHR5cGU6ICcnIGFzIERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlLFxuICAgICAgdWlkOiAnJyxcbiAgICAgIHVyaTogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgZm9sZGVySWQ6IDAsXG4gICAgICBmb2xkZXJUaXRsZTogJycsXG4gICAgICBmb2xkZXJVaWQ6ICcnLFxuICAgICAgZm9sZGVyVXJsOiAnJyxcbiAgICAgIGlzU3RhcnJlZDogZmFsc2UsXG4gICAgICBzbHVnOiAnJyxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKHByZWZzLmhvbWVEYXNoYm9hcmRJZCA+IDAgJiYgIWRhc2hib2FyZHMuZmluZCgoZCkgPT4gZC5pZCA9PT0gcHJlZnMuaG9tZURhc2hib2FyZElkKSkge1xuICAgICAgY29uc3QgbWlzc2luZyA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgZGFzaGJvYXJkSWRzOiBbcHJlZnMuaG9tZURhc2hib2FyZElkXSB9KTtcbiAgICAgIGlmIChtaXNzaW5nICYmIG1pc3NpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXNoYm9hcmRzLnB1c2gobWlzc2luZ1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBob21lRGFzaGJvYXJkSWQ6IHByZWZzLmhvbWVEYXNoYm9hcmRJZCxcbiAgICAgIHRoZW1lOiBwcmVmcy50aGVtZSxcbiAgICAgIHRpbWV6b25lOiBwcmVmcy50aW1lem9uZSxcbiAgICAgIHdlZWtTdGFydDogcHJlZnMud2Vla1N0YXJ0LFxuICAgICAgZGFzaGJvYXJkczogW2RlZmF1bHREYXNoYm9hcmRIaXQsIC4uLmRhc2hib2FyZHNdLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXRGb3JtID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgaG9tZURhc2hib2FyZElkLCB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHsgaG9tZURhc2hib2FyZElkLCB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgb25UaGVtZUNoYW5nZWQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25UaW1lWm9uZUNoYW5nZWQgPSAodGltZXpvbmU/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXRpbWV6b25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lem9uZTogdGltZXpvbmUgfSk7XG4gIH07XG5cbiAgb25XZWVrU3RhcnRDaGFuZ2VkID0gKHdlZWtTdGFydDogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlZWtTdGFydDogd2Vla1N0YXJ0IH0pO1xuICB9O1xuXG4gIG9uSG9tZURhc2hib2FyZENoYW5nZWQgPSAoZGFzaGJvYXJkSWQ6IG51bWJlcikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob21lRGFzaGJvYXJkSWQ6IGRhc2hib2FyZElkIH0pO1xuICB9O1xuXG4gIGdldEZ1bGxEYXNoTmFtZSA9IChkYXNoYm9hcmQ6IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRTZWFyY2hIaXQ+KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgPT09ICd1bmRlZmluZWQnIHx8IGRhc2hib2FyZC5mb2xkZXJUaXRsZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBkYXNoYm9hcmQudGl0bGU7XG4gICAgfVxuICAgIHJldHVybiBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgKyAnIC8gJyArIGRhc2hib2FyZC50aXRsZTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCwgaG9tZURhc2hib2FyZElkLCBkYXNoYm9hcmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICBjb25zdCBob21lRGFzaGJvYXJkVG9vbHRpcCA9IChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgIDxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtdG9vbHRpcFwiPlxuICAgICAgICAgICAgTm90IGZpbmRpbmcgdGhlIGRhc2hib2FyZCB5b3Ugd2FudD8gU3RhciBpdCBmaXJzdCwgdGhlbiBpdCBzaG91bGQgYXBwZWFyIGluIHRoaXMgc2VsZWN0IGJveC5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxJY29uIG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEZvcm19PlxuICAgICAgICB7KCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9ezxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy50aXRsZVwiPlByZWZlcmVuY2VzPC9UcmFucz59IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy50aGVtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVSSBUaGVtZScgfSl9PlxuICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGVtZXN9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHRoZW1lKT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRoZW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaG9tZS1kYXNoYm9hcmQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5ob21lLWRhc2hib2FyZC1sYWJlbFwiPkhvbWUgRGFzaGJvYXJkPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHtob21lRGFzaGJvYXJkVG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiVXNlciBwcmVmZXJlbmNlcyBob21lIGRhc2hib2FyZCBkcm9wIGRvd25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rhc2hib2FyZHMuZmluZCgoZGFzaGJvYXJkKSA9PiBkYXNoYm9hcmQuaWQgPT09IGhvbWVEYXNoYm9hcmRJZCl9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KGkpID0+IGkuaWR9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17dGhpcy5nZXRGdWxsRGFzaE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhc2hib2FyZDogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ib21lRGFzaGJvYXJkQ2hhbmdlZChkYXNoYm9hcmQuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXNoYm9hcmRzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Qoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2hvb3NlIGRlZmF1bHQgZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImhvbWUtZGFzaGJvYXJkLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLWRhc2hib2FyZC5maWVsZHMudGltZXpvbmUtbGFiZWwnLCBtZXNzYWdlOiAnVGltZXpvbmUnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5UaW1lWm9uZVBpY2tlci5jb250YWluZXJWMn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUaW1lWm9uZVBpY2tlclxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUludGVybmFsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWV6b25lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaW1lWm9uZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwic2hhcmVkLXByZWZlcmVuY2VzLXRpbWV6b25lLXBpY2tlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy53ZWVrLXN0YXJ0LWxhYmVsJywgbWVzc2FnZTogJ1dlZWsgc3RhcnQnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5XZWVrU3RhcnRQaWNrZXIuY29udGFpbmVyVjJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8V2Vla1N0YXJ0UGlja2VyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla1N0YXJ0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XZWVrU3RhcnRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD17J3NoYXJlZC1wcmVmZXJlbmNlcy13ZWVrLXN0YXJ0LXBpY2tlcid9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuVXNlclByb2ZpbGUucHJlZmVyZW5jZXNTYXZlQnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cImNvbW1vbi5zYXZlXCI+U2F2ZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZFNldD5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcmVkUHJlZmVyZW5jZXM7XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxhYmVsVGV4dDogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgYCxcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHJlcG9ydEV4cGVyaW1lbnRWaWV3IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG50eXBlIENvbXBvbmVudFNpemUgPSAnc20nIHwgJ21kJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxPclNWR0VsZW1lbnQ+IHtcbiAgZmVhdHVyZU5hbWU6IHN0cmluZztcbiAgc2l6ZT86IENvbXBvbmVudFNpemU7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGV2ZW50VmFyaWFudD86IHN0cmluZztcbiAgZmVhdHVyZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBVcGdyYWRlQm94ID0gKHtcbiAgZmVhdHVyZU5hbWUsXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGZlYXR1cmVJZCxcbiAgZXZlbnRWYXJpYW50ID0gJycsXG4gIHNpemUgPSAnbWQnLFxuICAuLi5odG1sUHJvcHNcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoKHRoZW1lKSA9PiBnZXRVcGdyYWRlQm94U3R5bGVzKHRoZW1lLCBzaXplKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXBvcnRFeHBlcmltZW50VmlldyhgZmVhdHVyZS1oaWdobGlnaHRzLSR7ZmVhdHVyZUlkfWAsICd0ZXN0JywgZXZlbnRWYXJpYW50KTtcbiAgfSwgW2V2ZW50VmFyaWFudCwgZmVhdHVyZUlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJveCwgY2xhc3NOYW1lKX0gey4uLmh0bWxQcm9wc30+XG4gICAgICA8SWNvbiBuYW1lPXsncm9ja2V0J30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBZb3XigJl2ZSBkaXNjb3ZlcmVkIGEgUHJvIGZlYXR1cmUhIHt0ZXh0IHx8IGBHZXQgdGhlIEdyYWZhbmEgUHJvIHBsYW4gdG8gYWNjZXNzICR7ZmVhdHVyZU5hbWV9LmB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9wcm9maWxlL29yZy9zdWJzY3JpcHRpb25cIlxuICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgVXBncmFkZVxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFVwZ3JhZGVCb3hTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIsIHNpemU6IENvbXBvbmVudFNpemUpID0+IHtcbiAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDIpO1xuICBjb25zdCBmb250QmFzZSA9IHNpemUgPT09ICdtZCcgPyAnYm9keScgOiAnYm9keVNtYWxsJztcblxuICByZXR1cm4ge1xuICAgIGJveDogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAke2JvcmRlclJhZGl1c307XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5zdWNjZXNzLnRyYW5zcGFyZW50fTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuc3VjY2Vzcy50ZXh0fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5W2ZvbnRCYXNlXS5mb250U2l6ZX07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygwLCAnYXV0bycsIDMsICdhdXRvJyl9O1xuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54eGx9cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgLFxuICAgIGlubmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGAsXG4gICAgdGV4dDogY3NzYFxuICAgICAgbWFyZ2luOiAwO1xuICAgIGAsXG4gICAgYnV0dG9uOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5zdWNjZXNzLm1haW59O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TGlnaHR9O1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuc3VjY2Vzcy5tYWlufTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5Lm1haW59O1xuICAgICAgfVxuICAgIGAsXG4gICAgaWNvbjogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMC41LCAxLCAwLjUsIDAuNSl9O1xuICAgIGAsXG4gIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwZ3JhZGVDb250ZW50UHJvcHMge1xuICBpbWFnZTogc3RyaW5nO1xuICBmZWF0dXJlVXJsPzogc3RyaW5nO1xuICBmZWF0dXJlTmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbGlzdEl0ZW1zOiBzdHJpbmdbXTtcbiAgY2FwdGlvbj86IHN0cmluZztcbiAgYWN0aW9uPzoge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBsaW5rPzogc3RyaW5nO1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgVXBncmFkZUNvbnRlbnQgPSAoe1xuICBsaXN0SXRlbXMsXG4gIGltYWdlLFxuICBmZWF0dXJlVXJsLFxuICBmZWF0dXJlTmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNhcHRpb24sXG4gIGFjdGlvbixcbn06IFVwZ3JhZGVDb250ZW50UHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRVcGdyYWRlQ29udGVudFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5HZXQgc3RhcnRlZCB3aXRoIHtmZWF0dXJlTmFtZX08L2gzPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGg2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9oNj59XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgICB7bGlzdEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT17J2NoZWNrJ30gc2l6ZT17J3hsJ30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz4ge2l0ZW19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YWN0aW9uPy5saW5rICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PXsncHJpbWFyeSd9IGhyZWY9e2FjdGlvbi5saW5rfT5cbiAgICAgICAgICAgIHthY3Rpb24udGV4dH1cbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHthY3Rpb24/Lm9uQ2xpY2sgJiYgKFxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD17J3ByaW1hcnknfSBvbkNsaWNrPXthY3Rpb24ub25DbGlja30+XG4gICAgICAgICAgICB7YWN0aW9uLnRleHR9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtmZWF0dXJlVXJsICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvbiBmaWxsPXsndGV4dCd9IGhyZWY9e2ZlYXR1cmVVcmx9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cbiAgICAgICAgICAgIExlYXJuIG1vcmVcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWF9PlxuICAgICAgICA8aW1nIHNyYz17Z2V0SW1nVXJsKGltYWdlKX0gYWx0PXsnRmVhdHVyZSBzY3JlZW5zaG90J30gLz5cbiAgICAgICAge2NhcHRpb24gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FwdGlvbn0+e2NhcHRpb259PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0VXBncmFkZUNvbnRlbnRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICB3aWR0aDogNDUlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGAsXG4gICAgbWVkaWE6IGNzc2BcbiAgICAgIHdpZHRoOiA1NSU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGAsXG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0Lm1heENvbnRyYXN0fTtcbiAgICBgLFxuICAgIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5wcmltYXJ5fTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICBgLFxuICAgIGxpc3Q6IGNzc2BcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwLCAyLCAwKX07XG5cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSwgMCl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgaWNvbjogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnN1Y2Nlc3MubWFpbn07XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIGNhcHRpb246IGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDAsIDApfTtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFVwZ3JhZGVDb250ZW50VmVydGljYWwgPSAoe1xuICBmZWF0dXJlTmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGZlYXR1cmVVcmwsXG4gIGltYWdlLFxufTogT21pdDxVcGdyYWRlQ29udGVudFByb3BzLCAnbGlzdEl0ZW1zJyB8ICdjYXB0aW9uJz4pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRDb250ZW50VmVydGljYWxTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+R2V0IHN0YXJ0ZWQgd2l0aCB7ZmVhdHVyZU5hbWV9PC9oMz5cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiA8aDYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L2g2Pn1cbiAgICAgIDxMaW5rQnV0dG9uIGZpbGw9eyd0ZXh0J30gaHJlZj17ZmVhdHVyZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxuICAgICAgICBMZWFybiBtb3JlXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhfT5cbiAgICAgICAgPGltZyBzcmM9e2dldEltZ1VybChpbWFnZSl9IGFsdD17J0ZlYXR1cmUgc2NyZWVuc2hvdCd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldENvbnRlbnRWZXJ0aWNhbFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQubWF4Q29udHJhc3R9O1xuICAgIGAsXG4gICAgZGVzY3JpcHRpb246IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TGlnaHR9O1xuICAgIGAsXG4gICAgbWVkaWE6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldEltZ1VybCA9ICh1cmxPcklkOiBzdHJpbmcpID0+IHtcbiAgaWYgKHVybE9ySWQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgcmV0dXJuIHVybE9ySWQ7XG4gIH1cblxuICByZXR1cm4gJy9wdWJsaWMvaW1nL2VudGVycHJpc2UvaGlnaGxpZ2h0cy8nICsgdXJsT3JJZDtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBmZWF0dXJlVG9nZ2xlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgV2l0aEZlYXR1cmVUb2dnbGU6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGZlYXR1cmVUb2dnbGUsIGNoaWxkcmVuIH0pID0+IHtcbiAgaWYgKGZlYXR1cmVUb2dnbGUgPT09IHRydWUpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFNsaWRlRG93biB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9TbGlkZURvd24nO1xuaW1wb3J0IHsgTGVnYWN5Rm9ybXMsIFRvb2x0aXAsIEljb24sIEJ1dHRvbiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuY29uc3QgeyBJbnB1dCB9ID0gTGVnYWN5Rm9ybXM7XG5cbmltcG9ydCB7IFN0b3JlU3RhdGUsIFRlYW1Hcm91cCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGFkZFRlYW1Hcm91cCwgbG9hZFRlYW1Hcm91cHMsIHJlbW92ZVRlYW1Hcm91cCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRUZWFtR3JvdXBzIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuaW1wb3J0IEVtcHR5TGlzdENUQSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0VtcHR5TGlzdENUQS9FbXB0eUxpc3RDVEEnO1xuaW1wb3J0IHsgQ2xvc2VCdXR0b24gfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0Nsb3NlQnV0dG9uL0Nsb3NlQnV0dG9uJztcbmltcG9ydCB7IFVwZ3JhZGVCb3gsIFVwZ3JhZGVDb250ZW50LCBVcGdyYWRlQ29udGVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1VwZ3JhZGVCb3gnO1xuaW1wb3J0IHsgaGlnaGxpZ2h0VHJpYWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBncm91cHM6IGdldFRlYW1Hcm91cHMoc3RhdGUudGVhbSksXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZFRlYW1Hcm91cHMsXG4gIGFkZFRlYW1Hcm91cCxcbiAgcmVtb3ZlVGVhbUdyb3VwLFxufTtcblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgaXNSZWFkT25seTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNBZGRpbmc6IGJvb2xlYW47XG4gIG5ld0dyb3VwSWQ6IHN0cmluZztcbn1cblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmNvbnN0IGhlYWRlclRvb2x0aXAgPSBgU3luYyBMREFQIG9yIE9BdXRoIGdyb3VwcyB3aXRoIHlvdXIgR3JhZmFuYSB0ZWFtcy5gO1xuXG5leHBvcnQgY2xhc3MgVGVhbUdyb3VwU3luYyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc0FkZGluZzogZmFsc2UsIG5ld0dyb3VwSWQ6ICcnIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoVGVhbUdyb3VwcygpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hUZWFtR3JvdXBzKCkge1xuICAgIGF3YWl0IHRoaXMucHJvcHMubG9hZFRlYW1Hcm91cHMoKTtcbiAgfVxuXG4gIG9uVG9nZ2xlQWRkaW5nID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0FkZGluZzogIXRoaXMuc3RhdGUuaXNBZGRpbmcgfSk7XG4gIH07XG5cbiAgb25OZXdHcm91cElkQ2hhbmdlZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld0dyb3VwSWQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBvbkFkZEdyb3VwID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuYWRkVGVhbUdyb3VwKHRoaXMuc3RhdGUubmV3R3JvdXBJZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWRkaW5nOiBmYWxzZSwgbmV3R3JvdXBJZDogJycgfSk7XG4gIH07XG5cbiAgb25SZW1vdmVHcm91cCA9IChncm91cDogVGVhbUdyb3VwKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5yZW1vdmVUZWFtR3JvdXAoZ3JvdXAuZ3JvdXBJZCk7XG4gIH07XG5cbiAgaXNOZXdHcm91cFZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm5ld0dyb3VwSWQubGVuZ3RoID4gMTtcbiAgfVxuXG4gIHJlbmRlckdyb3VwKGdyb3VwOiBUZWFtR3JvdXApIHtcbiAgICBjb25zdCB7IGlzUmVhZE9ubHkgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e2dyb3VwLmdyb3VwSWR9PlxuICAgICAgICA8dGQ+e2dyb3VwLmdyb3VwSWR9PC90ZD5cbiAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMSUnIH19PlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17KCkgPT4gdGhpcy5vblJlbW92ZUdyb3VwKGdyb3VwKX0gZGlzYWJsZWQ9e2lzUmVhZE9ubHl9PlxuICAgICAgICAgICAgPEljb24gbmFtZT1cInRpbWVzXCIgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzQWRkaW5nLCBuZXdHcm91cElkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZ3JvdXBzLCBpc1JlYWRPbmx5IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7aGlnaGxpZ2h0VHJpYWwoKSAmJiAoXG4gICAgICAgICAgPFVwZ3JhZGVCb3hcbiAgICAgICAgICAgIGZlYXR1cmVJZD17J3RlYW0tc3luYyd9XG4gICAgICAgICAgICBldmVudFZhcmlhbnQ9eyd0cmlhbCd9XG4gICAgICAgICAgICBmZWF0dXJlTmFtZT17J3RlYW0gc3luYyd9XG4gICAgICAgICAgICB0ZXh0PXsnQWRkIGEgZ3JvdXAgdG8gZW5hYmxlIHRlYW0gc3luYyBmb3IgZnJlZSBkdXJpbmcgeW91ciB0cmlhbCBvZiBHcmFmYW5hIFByby4nfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgeyghaGlnaGxpZ2h0VHJpYWwoKSB8fCBncm91cHMubGVuZ3RoID4gMCkgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5FeHRlcm5hbCBncm91cCBzeW5jPC9oMz5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYXV0b1wiIGNvbnRlbnQ9e2hlYWRlclRvb2x0aXB9PlxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImljb24tLWhhcy1ob3ZlciBwYWdlLXN1Yi1oZWFkaW5nLWljb25cIiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhcl9fc3BhY2VyXCIgLz5cbiAgICAgICAgICB7Z3JvdXBzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIgb25DbGljaz17dGhpcy5vblRvZ2dsZUFkZGluZ30gZGlzYWJsZWQ9e2lzUmVhZE9ubHl9PlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIC8+IEFkZCBncm91cFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFNsaWRlRG93biBpbj17aXNBZGRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWZvcm1cIj5cbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQWRkaW5nfSAvPlxuICAgICAgICAgICAgPGg1PkFkZCBFeHRlcm5hbCBHcm91cDwvaDU+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiIG9uU3VibWl0PXt0aGlzLm9uQWRkR3JvdXB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0taW5wdXQgd2lkdGgtMzBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0dyb3VwSWR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk5ld0dyb3VwSWRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjbj1vcHMsb3U9Z3JvdXBzLGRjPWdyYWZhbmEsZGM9b3JnXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1JlYWRPbmx5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1JlYWRPbmx5IHx8ICF0aGlzLmlzTmV3R3JvdXBWYWxpZCgpfT5cbiAgICAgICAgICAgICAgICAgIEFkZCBncm91cFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TbGlkZURvd24+XG5cbiAgICAgICAge2dyb3Vwcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAhaXNBZGRpbmcgJiZcbiAgICAgICAgICAoaGlnaGxpZ2h0VHJpYWwoKSA/IChcbiAgICAgICAgICAgIDxUZWFtU3luY1VwZ3JhZGVDb250ZW50IGFjdGlvbj17eyBvbkNsaWNrOiB0aGlzLm9uVG9nZ2xlQWRkaW5nLCB0ZXh0OiAnQWRkIGdyb3VwJyB9fSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Ub2dnbGVBZGRpbmd9XG4gICAgICAgICAgICAgIGJ1dHRvbkljb249XCJ1c2Vycy1hbHRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIlRoZXJlIGFyZSBubyBleHRlcm5hbCBncm91cHMgdG8gc3luYyB3aXRoXCJcbiAgICAgICAgICAgICAgYnV0dG9uVGl0bGU9XCJBZGQgZ3JvdXBcIlxuICAgICAgICAgICAgICBwcm9UaXA9e2hlYWRlclRvb2x0aXB9XG4gICAgICAgICAgICAgIHByb1RpcExpbmtUaXRsZT1cIkxlYXJuIG1vcmVcIlxuICAgICAgICAgICAgICBwcm9UaXBMaW5rPVwiaHR0cHM6Ly9kb2NzLmdyYWZhbmEub3JnL2F1dGgvZW5oYW5jZWRfbGRhcC9cIlxuICAgICAgICAgICAgICBwcm9UaXBUYXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBidXR0b25EaXNhYmxlZD17aXNSZWFkT25seX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAge2dyb3Vwcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWxpc3QtdGFibGVcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZmlsdGVyLXRhYmxlLS1ob3ZlciBmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPkV4dGVybmFsIEdyb3VwIElEPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzElJyB9fSAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT57Z3JvdXBzLm1hcCgoZ3JvdXApID0+IHRoaXMucmVuZGVyR3JvdXAoZ3JvdXApKX08L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRlYW1TeW5jVXBncmFkZUNvbnRlbnQgPSAoeyBhY3Rpb24gfTogeyBhY3Rpb24/OiBVcGdyYWRlQ29udGVudFByb3BzWydhY3Rpb24nXSB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIHJldHVybiAoXG4gICAgPFVwZ3JhZGVDb250ZW50XG4gICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgIGxpc3RJdGVtcz17W1xuICAgICAgICAnU3RvcCBtYW5hZ2luZyB1c2VyIGFjY2VzcyBpbiB0d28gcGxhY2VzIC0gYXNzaWduIHVzZXJzIHRvIGdyb3VwcyBpbiBTQU1MLCBMREFQIG9yIE9hdXRoLCBhbmQgbWFuYWdlIGFjY2VzcyBhdCBhIFRlYW0gbGV2ZWwgaW4gR3JhZmFuYScsXG4gICAgICAgICdVcGRhdGUgdXNlcnPigJkgcGVybWlzc2lvbnMgaW1tZWRpYXRlbHkgd2hlbiB5b3UgYWRkIG9yIHJlbW92ZSB0aGVtIGZyb20gYW4gTERBUCBncm91cCwgd2l0aCBubyBuZWVkIGZvciB0aGVtIHRvIHNpZ24gb3V0IGFuZCBiYWNrIGluJyxcbiAgICAgIF19XG4gICAgICBpbWFnZT17YHRlYW0tc3luYy0ke3RoZW1lLmlzTGlnaHQgPyAnbGlnaHQnIDogJ2RhcmsnfS5wbmdgfVxuICAgICAgZmVhdHVyZU5hbWU9eyd0ZWFtIHN5bmMnfVxuICAgICAgZmVhdHVyZVVybD17J2h0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9lbnRlcnByaXNlL3RlYW0tc3luYyd9XG4gICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICdUZWFtIFN5bmMgbWFrZXMgaXQgZWFzaWVyIGZvciB5b3UgdG8gbWFuYWdlIHVzZXJz4oCZIGFjY2VzcyBpbiBHcmFmYW5hLCBieSBpbW1lZGlhdGVseSB1cGRhdGluZyBlYWNoIHVzZXLigJlzIEdyYWZhbmEgdGVhbXMgYW5kIHBlcm1pc3Npb25zIGJhc2VkIG9uIHRoZWlyIHNpbmdsZSBzaWduLW9uIGdyb3VwIG1lbWJlcnNoaXAsIGluc3RlYWQgb2Ygd2hlbiB1c2VycyBzaWduIGluLidcbiAgICAgIH1cbiAgICAvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlYW1Hcm91cFN5bmMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExlZ2FjeUZvcm1zLCBEZWxldGVCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5jb25zdCB7IFNlbGVjdCB9ID0gTGVnYWN5Rm9ybXM7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgVGVhbU1lbWJlciwgdGVhbXNQZXJtaXNzaW9uTGV2ZWxzLCBUZWFtUGVybWlzc2lvbkxldmVsIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IFdpdGhGZWF0dXJlVG9nZ2xlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9XaXRoRmVhdHVyZVRvZ2dsZSc7XG5pbXBvcnQgeyB1cGRhdGVUZWFtTWVtYmVyLCByZW1vdmVUZWFtTWVtYmVyIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IFRhZ0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnQmFkZ2UnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHJlbW92ZVRlYW1NZW1iZXIsXG4gIHVwZGF0ZVRlYW1NZW1iZXIsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7XG4gIG1lbWJlcjogVGVhbU1lbWJlcjtcbiAgc3luY0VuYWJsZWQ6IGJvb2xlYW47XG4gIGVkaXRvcnNDYW5BZG1pbjogYm9vbGVhbjtcbiAgc2lnbmVkSW5Vc2VySXNUZWFtQWRtaW46IGJvb2xlYW47XG59XG5leHBvcnQgdHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+ICYgT3duUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBUZWFtTWVtYmVyUm93IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5yZW5kZXJMYWJlbHMgPSB0aGlzLnJlbmRlckxhYmVscy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyUGVybWlzc2lvbnMgPSB0aGlzLnJlbmRlclBlcm1pc3Npb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblJlbW92ZU1lbWJlcihtZW1iZXI6IFRlYW1NZW1iZXIpIHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZVRlYW1NZW1iZXIobWVtYmVyLnVzZXJJZCk7XG4gIH1cblxuICBvblBlcm1pc3Npb25DaGFuZ2UgPSAoaXRlbTogU2VsZWN0YWJsZVZhbHVlPFRlYW1QZXJtaXNzaW9uTGV2ZWw+LCBtZW1iZXI6IFRlYW1NZW1iZXIpID0+IHtcbiAgICBjb25zdCBwZXJtaXNzaW9uID0gaXRlbS52YWx1ZTtcbiAgICBjb25zdCB1cGRhdGVkVGVhbU1lbWJlcjogVGVhbU1lbWJlciA9IHtcbiAgICAgIC4uLm1lbWJlcixcbiAgICAgIHBlcm1pc3Npb246IHBlcm1pc3Npb24gYXMgbnVtYmVyLFxuICAgIH07XG5cbiAgICB0aGlzLnByb3BzLnVwZGF0ZVRlYW1NZW1iZXIodXBkYXRlZFRlYW1NZW1iZXIpO1xuICB9O1xuXG4gIHJlbmRlclBlcm1pc3Npb25zKG1lbWJlcjogVGVhbU1lbWJlcikge1xuICAgIGNvbnN0IHsgZWRpdG9yc0NhbkFkbWluLCBzaWduZWRJblVzZXJJc1RlYW1BZG1pbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZSA9IHRlYW1zUGVybWlzc2lvbkxldmVscy5maW5kKChkcCkgPT4gZHAudmFsdWUgPT09IG1lbWJlci5wZXJtaXNzaW9uKSE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdpdGhGZWF0dXJlVG9nZ2xlIGZlYXR1cmVUb2dnbGU9e2VkaXRvcnNDYW5BZG1pbn0+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC01IHRlYW0tcGVybWlzc2lvbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIHtzaWduZWRJblVzZXJJc1RlYW1BZG1pbiAmJiAoXG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt0ZWFtc1Blcm1pc3Npb25MZXZlbHN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLm9uUGVybWlzc2lvbkNoYW5nZShpdGVtLCBtZW1iZXIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0tc2VsZWN0LWJveF9fY29udHJvbC0tbWVudS1yaWdodFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshc2lnbmVkSW5Vc2VySXNUZWFtQWRtaW4gJiYgPHNwYW4+e3ZhbHVlLmxhYmVsfTwvc3Bhbj59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L1dpdGhGZWF0dXJlVG9nZ2xlPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMYWJlbHMobGFiZWxzOiBzdHJpbmdbXSkge1xuICAgIGlmICghbGFiZWxzKSB7XG4gICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGQ+XG4gICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCkgPT4gKFxuICAgICAgICAgIDxUYWdCYWRnZSBrZXk9e2xhYmVsfSBsYWJlbD17bGFiZWx9IHJlbW92ZUljb249e2ZhbHNlfSBjb3VudD17MH0gb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICkpfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVtYmVyLCBzeW5jRW5hYmxlZCwgc2lnbmVkSW5Vc2VySXNUZWFtQWRtaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e21lbWJlci51c2VySWR9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BBdmF0YXIgZm9yIHRlYW0gbWVtYmVyIFwiJHttZW1iZXIubmFtZX1cImB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVfX2F2YXRhclwiXG4gICAgICAgICAgICBzcmM9e21lbWJlci5hdmF0YXJVcmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPnttZW1iZXIubG9naW59PC90ZD5cbiAgICAgICAgPHRkPnttZW1iZXIuZW1haWx9PC90ZD5cbiAgICAgICAgPHRkPnttZW1iZXIubmFtZX08L3RkPlxuICAgICAgICB7dGhpcy5yZW5kZXJQZXJtaXNzaW9ucyhtZW1iZXIpfVxuICAgICAgICB7c3luY0VuYWJsZWQgJiYgdGhpcy5yZW5kZXJMYWJlbHMobWVtYmVyLmxhYmVscyl9XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPERlbGV0ZUJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZSB0ZWFtIG1lbWJlclwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFzaWduZWRJblVzZXJJc1RlYW1BZG1pbn1cbiAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gdGhpcy5vblJlbW92ZU1lbWJlcihtZW1iZXIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFRlYW1NZW1iZXJSb3cpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFNsaWRlRG93biB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9TbGlkZURvd24nO1xuaW1wb3J0IHsgVXNlclBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L1VzZXJQaWNrZXInO1xuaW1wb3J0IHsgVGFnQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdCYWRnZSc7XG5pbXBvcnQgeyBUZWFtTWVtYmVyLCBPcmdVc2VyIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGFkZFRlYW1NZW1iZXIgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0U2VhcmNoTWVtYmVyUXVlcnksIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgV2l0aEZlYXR1cmVUb2dnbGUgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1dpdGhGZWF0dXJlVG9nZ2xlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IFRlYW1NZW1iZXJSb3cgZnJvbSAnLi9UZWFtTWVtYmVyUm93JztcbmltcG9ydCB7IHNldFNlYXJjaE1lbWJlclF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24vQ2xvc2VCdXR0b24nO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWx0ZXJJbnB1dCwgTGFiZWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hNZW1iZXJRdWVyeTogZ2V0U2VhcmNoTWVtYmVyUXVlcnkoc3RhdGUudGVhbSksXG4gICAgZWRpdG9yc0NhbkFkbWluOiBjb25maWcuZWRpdG9yc0NhbkFkbWluLCAvLyB0aGlzIG1ha2VzIHRoZSBmZWF0dXJlIHRvZ2dsZSBtb2NrYWJsZS9jb250cm9sbGFibGUgZnJvbSB0ZXN0cyxcbiAgICBzaWduZWRJblVzZXI6IGNvbnRleHRTcnYudXNlciwgLy8gdGhpcyBtYWtlcyB0aGUgZmVhdHVyZSB0b2dnbGUgbW9ja2FibGUvY29udHJvbGxhYmxlIGZyb20gdGVzdHMsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkVGVhbU1lbWJlcixcbiAgc2V0U2VhcmNoTWVtYmVyUXVlcnksXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgbWVtYmVyczogVGVhbU1lbWJlcltdO1xuICBzeW5jRW5hYmxlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPiAmIE93blByb3BzO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNBZGRpbmc6IGJvb2xlYW47XG4gIG5ld1RlYW1NZW1iZXI/OiBTZWxlY3RhYmxlVmFsdWU8T3JnVXNlclsndXNlcklkJ10+IHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRlYW1NZW1iZXJzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzQWRkaW5nOiBmYWxzZSwgbmV3VGVhbU1lbWJlcjogbnVsbCB9O1xuICB9XG5cbiAgb25TZWFyY2hRdWVyeUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hNZW1iZXJRdWVyeSh2YWx1ZSk7XG4gIH07XG5cbiAgb25Ub2dnbGVBZGRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWRkaW5nOiAhdGhpcy5zdGF0ZS5pc0FkZGluZyB9KTtcbiAgfTtcblxuICBvblVzZXJTZWxlY3RlZCA9ICh1c2VyOiBTZWxlY3RhYmxlVmFsdWU8T3JnVXNlclsndXNlcklkJ10+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1RlYW1NZW1iZXI6IHVzZXIgfSk7XG4gIH07XG5cbiAgb25BZGRVc2VyVG9UZWFtID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuYWRkVGVhbU1lbWJlcih0aGlzLnN0YXRlLm5ld1RlYW1NZW1iZXIhLmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3VGVhbU1lbWJlcjogbnVsbCB9KTtcbiAgfTtcblxuICByZW5kZXJMYWJlbHMobGFiZWxzOiBzdHJpbmdbXSkge1xuICAgIGlmICghbGFiZWxzKSB7XG4gICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGQ+XG4gICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCkgPT4gKFxuICAgICAgICAgIDxUYWdCYWRnZSBrZXk9e2xhYmVsfSBsYWJlbD17bGFiZWx9IHJlbW92ZUljb249e2ZhbHNlfSBjb3VudD17MH0gb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICkpfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNBZGRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzZWFyY2hNZW1iZXJRdWVyeSwgbWVtYmVycywgc3luY0VuYWJsZWQsIGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzVGVhbUFkbWluID0gaXNTaWduZWRJblVzZXJUZWFtQWRtaW4oeyBtZW1iZXJzLCBlZGl0b3JzQ2FuQWRtaW4sIHNpZ25lZEluVXNlciB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbWVtYmVyc1wiIHZhbHVlPXtzZWFyY2hNZW1iZXJRdWVyeX0gb25DaGFuZ2U9e3RoaXMub25TZWFyY2hRdWVyeUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQWRkaW5nfSBkaXNhYmxlZD17aXNBZGRpbmcgfHwgIWlzVGVhbUFkbWlufT5cbiAgICAgICAgICAgIEFkZCBtZW1iZXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFNsaWRlRG93biBpbj17aXNBZGRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWZvcm1cIj5cbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2UgJ0FkZCB0ZWFtIG1lbWJlcicgZGlhbG9ndWVcIiBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQWRkaW5nfSAvPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLXBpY2tlclwiPkFkZCB0ZWFtIG1lbWJlcjwvTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgIDxVc2VyUGlja2VyIGlucHV0SWQ9XCJ1c2VyLXBpY2tlclwiIG9uU2VsZWN0ZWQ9e3RoaXMub25Vc2VyU2VsZWN0ZWR9IGNsYXNzTmFtZT1cIm1pbi13aWR0aC0zMFwiIC8+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm5ld1RlYW1NZW1iZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMub25BZGRVc2VyVG9UZWFtfT5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byB0ZWFtXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TbGlkZURvd24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1saXN0LXRhYmxlXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmaWx0ZXItdGFibGUtLWhvdmVyIGZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgICA8dGg+TG9naW48L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDxXaXRoRmVhdHVyZVRvZ2dsZSBmZWF0dXJlVG9nZ2xlPXtlZGl0b3JzQ2FuQWRtaW59PlxuICAgICAgICAgICAgICAgICAgPHRoPlBlcm1pc3Npb248L3RoPlxuICAgICAgICAgICAgICAgIDwvV2l0aEZlYXR1cmVUb2dnbGU+XG4gICAgICAgICAgICAgICAge3N5bmNFbmFibGVkICYmIDx0aCAvPn1cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxJScgfX0gLz5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHttZW1iZXJzICYmXG4gICAgICAgICAgICAgICAgbWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRlYW1NZW1iZXJSb3dcbiAgICAgICAgICAgICAgICAgICAga2V5PXttZW1iZXIudXNlcklkfVxuICAgICAgICAgICAgICAgICAgICBtZW1iZXI9e21lbWJlcn1cbiAgICAgICAgICAgICAgICAgICAgc3luY0VuYWJsZWQ9e3N5bmNFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICBlZGl0b3JzQ2FuQWRtaW49e2VkaXRvcnNDYW5BZG1pbn1cbiAgICAgICAgICAgICAgICAgICAgc2lnbmVkSW5Vc2VySXNUZWFtQWRtaW49e2lzVGVhbUFkbWlufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihUZWFtTWVtYmVycyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgaW5jbHVkZXMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVGhlbWVhYmxlMiwgd2l0aFRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCBUZWFtTWVtYmVycyBmcm9tICcuL1RlYW1NZW1iZXJzJztcbmltcG9ydCBUZWFtUGVybWlzc2lvbnMgZnJvbSAnLi9UZWFtUGVybWlzc2lvbnMnO1xuaW1wb3J0IFRlYW1TZXR0aW5ncyBmcm9tICcuL1RlYW1TZXR0aW5ncyc7XG5pbXBvcnQgVGVhbUdyb3VwU3luYywgeyBUZWFtU3luY1VwZ3JhZGVDb250ZW50IH0gZnJvbSAnLi9UZWFtR3JvdXBTeW5jJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgbG9hZFRlYW0sIGxvYWRUZWFtTWVtYmVycyB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRUZWFtLCBnZXRUZWFtTWVtYmVycywgaXNTaWduZWRJblVzZXJUZWFtQWRtaW4gfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRUZWFtTG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IFVwZ3JhZGVCb3ggfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvVXBncmFkZUJveCc7XG5cbmludGVyZmFjZSBUZWFtUGFnZVJvdXRlUGFyYW1zIHtcbiAgaWQ6IHN0cmluZztcbiAgcGFnZTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPFRlYW1QYWdlUm91dGVQYXJhbXM+LCBUaGVtZWFibGUyIHt9XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzU3luY0VuYWJsZWQ6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuZW51bSBQYWdlVHlwZXMge1xuICBNZW1iZXJzID0gJ21lbWJlcnMnLFxuICBTZXR0aW5ncyA9ICdzZXR0aW5ncycsXG4gIEdyb3VwU3luYyA9ICdncm91cHN5bmMnLFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUsIHByb3BzOiBPd25Qcm9wcykge1xuICBjb25zdCB0ZWFtSWQgPSBwYXJzZUludChwcm9wcy5tYXRjaC5wYXJhbXMuaWQsIDEwKTtcbiAgY29uc3QgdGVhbSA9IGdldFRlYW0oc3RhdGUudGVhbSwgdGVhbUlkKTtcbiAgbGV0IGRlZmF1bHRQYWdlID0gJ21lbWJlcnMnO1xuICBpZiAoY29udGV4dFNydi5hY2Nlc3NDb250cm9sRW5hYmxlZCgpKSB7XG4gICAgLy8gV2l0aCBGR0FDIHRoZSBzZXR0aW5ncyBwYWdlIHdpbGwgYWx3YXlzIGJlIGF2YWlsYWJsZVxuICAgIGlmICghdGVhbSB8fCAhY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLCB0ZWFtKSkge1xuICAgICAgZGVmYXVsdFBhZ2UgPSAnc2V0dGluZ3MnO1xuICAgIH1cbiAgfVxuICBjb25zdCBwYWdlTmFtZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5wYWdlID8/IGRlZmF1bHRQYWdlO1xuICBjb25zdCB0ZWFtTG9hZGluZ05hdiA9IGdldFRlYW1Mb2FkaW5nTmF2KHBhZ2VOYW1lIGFzIHN0cmluZyk7XG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIGB0ZWFtLSR7cGFnZU5hbWV9LSR7dGVhbUlkfWAsIHRlYW1Mb2FkaW5nTmF2KTtcbiAgY29uc3QgbWVtYmVycyA9IGdldFRlYW1NZW1iZXJzKHN0YXRlLnRlYW0pO1xuXG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWwsXG4gICAgdGVhbUlkOiB0ZWFtSWQsXG4gICAgcGFnZU5hbWU6IHBhZ2VOYW1lLFxuICAgIHRlYW0sXG4gICAgbWVtYmVycyxcbiAgICBlZGl0b3JzQ2FuQWRtaW46IGNvbmZpZy5lZGl0b3JzQ2FuQWRtaW4sIC8vIHRoaXMgbWFrZXMgdGhlIGZlYXR1cmUgdG9nZ2xlIG1vY2thYmxlL2NvbnRyb2xsYWJsZSBmcm9tIHRlc3RzLFxuICAgIHNpZ25lZEluVXNlcjogY29udGV4dFNydi51c2VyLCAvLyB0aGlzIG1ha2VzIHRoZSBmZWF0dXJlIHRvZ2dsZSBtb2NrYWJsZS9jb250cm9sbGFibGUgZnJvbSB0ZXN0cyxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkVGVhbSxcbiAgbG9hZFRlYW1NZW1iZXJzLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIFRlYW1QYWdlcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgaXNTeW5jRW5hYmxlZDogZmVhdHVyZUVuYWJsZWQoJ3RlYW1zeW5jJyksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF3YWl0IHRoaXMuZmV0Y2hUZWFtKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaFRlYW0oKSB7XG4gICAgY29uc3QgeyBsb2FkVGVhbSwgdGVhbUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgY29uc3QgdGVhbSA9IGF3YWl0IGxvYWRUZWFtKHRlYW1JZCk7XG4gICAgLy8gV2l0aCBhY2Nlc3Njb250cm9sLCB0aGUgVGVhbVBlcm1pc3Npb25zIHdpbGwgZmV0Y2ggdGVhbSBtZW1iZXJzXG4gICAgaWYgKCFjb250ZXh0U3J2LmFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMubG9hZFRlYW1NZW1iZXJzKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAgIHJldHVybiB0ZWFtO1xuICB9XG5cbiAgZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgY29uc3QgcGFnZXMgPSBbJ21lbWJlcnMnLCAnc2V0dGluZ3MnLCAnZ3JvdXBzeW5jJ107XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSB0aGlzLnByb3BzLnBhZ2VOYW1lO1xuICAgIHJldHVybiBpbmNsdWRlcyhwYWdlcywgY3VycmVudFBhZ2UpID8gY3VycmVudFBhZ2UgOiBwYWdlc1swXTtcbiAgfVxuXG4gIHRleHRzQXJlRXF1YWwgPSAodGV4dDE6IHN0cmluZywgdGV4dDI6IHN0cmluZykgPT4ge1xuICAgIGlmICghdGV4dDEgJiYgIXRleHQyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRleHQxIHx8ICF0ZXh0Mikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0MS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSB0ZXh0Mi50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGhpZGVUYWJzRnJvbU5vblRlYW1BZG1pbiA9IChuYXZNb2RlbDogTmF2TW9kZWwsIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKGNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgcmV0dXJuIG5hdk1vZGVsO1xuICAgIH1cblxuICAgIGlmICghaXNTaWduZWRJblVzZXJUZWFtQWRtaW4gJiYgbmF2TW9kZWwubWFpbiAmJiBuYXZNb2RlbC5tYWluLmNoaWxkcmVuKSB7XG4gICAgICBuYXZNb2RlbC5tYWluLmNoaWxkcmVuXG4gICAgICAgIC5maWx0ZXIoKG5hdkl0ZW0pID0+ICF0aGlzLnRleHRzQXJlRXF1YWwobmF2SXRlbS50ZXh0LCBQYWdlVHlwZXMuTWVtYmVycykpXG4gICAgICAgIC5tYXAoKG5hdkl0ZW0pID0+IHtcbiAgICAgICAgICBuYXZJdGVtLmhpZGVGcm9tVGFicyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZNb2RlbDtcbiAgfTtcblxuICByZW5kZXJQYWdlKGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluOiBib29sZWFuKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IGlzU3luY0VuYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBtZW1iZXJzLCB0ZWFtIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gdGhpcy5nZXRDdXJyZW50UGFnZSgpO1xuXG4gICAgY29uc3QgY2FuUmVhZFRlYW0gPSBjb250ZXh0U3J2Lmhhc0FjY2Vzc0luTWV0YWRhdGEoXG4gICAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUmVhZCxcbiAgICAgIHRlYW0hLFxuICAgICAgaXNTaWduZWRJblVzZXJUZWFtQWRtaW5cbiAgICApO1xuICAgIGNvbnN0IGNhblJlYWRUZWFtUGVybWlzc2lvbnMgPSBjb250ZXh0U3J2Lmhhc0FjY2Vzc0luTWV0YWRhdGEoXG4gICAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLFxuICAgICAgdGVhbSEsXG4gICAgICBpc1NpZ25lZEluVXNlclRlYW1BZG1pblxuICAgICk7XG4gICAgY29uc3QgY2FuV3JpdGVUZWFtUGVybWlzc2lvbnMgPSBjb250ZXh0U3J2Lmhhc0FjY2Vzc0luTWV0YWRhdGEoXG4gICAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNXcml0ZSxcbiAgICAgIHRlYW0hLFxuICAgICAgaXNTaWduZWRJblVzZXJUZWFtQWRtaW5cbiAgICApO1xuXG4gICAgc3dpdGNoIChjdXJyZW50UGFnZSkge1xuICAgICAgY2FzZSBQYWdlVHlwZXMuTWVtYmVyczpcbiAgICAgICAgaWYgKGNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgICAgIHJldHVybiA8VGVhbVBlcm1pc3Npb25zIHRlYW09e3RlYW0hfSAvPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gPFRlYW1NZW1iZXJzIHN5bmNFbmFibGVkPXtpc1N5bmNFbmFibGVkfSBtZW1iZXJzPXttZW1iZXJzfSAvPjtcbiAgICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZXMuU2V0dGluZ3M6XG4gICAgICAgIHJldHVybiBjYW5SZWFkVGVhbSAmJiA8VGVhbVNldHRpbmdzIHRlYW09e3RlYW0hfSAvPjtcbiAgICAgIGNhc2UgUGFnZVR5cGVzLkdyb3VwU3luYzpcbiAgICAgICAgaWYgKGlzU3luY0VuYWJsZWQpIHtcbiAgICAgICAgICBpZiAoY2FuUmVhZFRlYW1QZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIDxUZWFtR3JvdXBTeW5jIGlzUmVhZE9ubHk9eyFjYW5Xcml0ZVRlYW1QZXJtaXNzaW9uc30gLz47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8VXBncmFkZUJveCBmZWF0dXJlTmFtZT17J3RlYW0gc3luYyd9IGZlYXR1cmVJZD17J3RlYW0tc3luYyd9IC8+XG4gICAgICAgICAgICAgIDxUZWFtU3luY1VwZ3JhZGVDb250ZW50IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZWFtLCBuYXZNb2RlbCwgbWVtYmVycywgZWRpdG9yc0NhbkFkbWluLCBzaWduZWRJblVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNUZWFtQWRtaW4gPSBpc1NpZ25lZEluVXNlclRlYW1BZG1pbih7IG1lbWJlcnMsIGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VyIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXt0aGlzLmhpZGVUYWJzRnJvbU5vblRlYW1BZG1pbihuYXZNb2RlbCwgaXNUZWFtQWRtaW4pfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30+XG4gICAgICAgICAge3RlYW0gJiYgT2JqZWN0LmtleXModGVhbSkubGVuZ3RoICE9PSAwICYmIHRoaXMucmVuZGVyUGFnZShpc1RlYW1BZG1pbil9XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rvcih3aXRoVGhlbWUyKFRlYW1QYWdlcykpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBlcm1pc3Npb25zIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9BY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW0gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG50eXBlIFRlYW1QZXJtaXNzaW9uc1Byb3BzID0ge1xuICB0ZWFtOiBUZWFtO1xufTtcblxuLy8gVGVhbVBlcm1pc3Npb25zIGNvbXBvbmVudCByZXBsYWNlcyBUZWFtTWVtYmVycyBjb21wb25lbnQgd2hlbiB0aGUgYWNjZXNzY29udHJvbCBmZWF0dXJlIGZsYWcgaXMgc2V0XG5jb25zdCBUZWFtUGVybWlzc2lvbnMgPSAocHJvcHM6IFRlYW1QZXJtaXNzaW9uc1Byb3BzKSA9PiB7XG4gIGNvbnN0IGNhbkxpc3RVc2VycyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ1VzZXJzUmVhZCk7XG4gIGNvbnN0IGNhblNldFBlcm1pc3Npb25zID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShcbiAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNXcml0ZSxcbiAgICBwcm9wcy50ZWFtXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGVybWlzc2lvbnNcbiAgICAgIHRpdGxlPVwiTWVtYmVyc1wiXG4gICAgICBhZGRQZXJtaXNzaW9uVGl0bGU9XCJBZGQgbWVtYmVyXCJcbiAgICAgIGJ1dHRvbkxhYmVsPVwiQWRkIG1lbWJlclwiXG4gICAgICByZXNvdXJjZT1cInRlYW1zXCJcbiAgICAgIHJlc291cmNlSWQ9e3Byb3BzLnRlYW0uaWR9XG4gICAgICBjYW5MaXN0VXNlcnM9e2Nhbkxpc3RVc2Vyc31cbiAgICAgIGNhblNldFBlcm1pc3Npb25zPXtjYW5TZXRQZXJtaXNzaW9uc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbVBlcm1pc3Npb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBJbnB1dCwgRmllbGQsIEZvcm0sIEJ1dHRvbiwgRmllbGRTZXQsIFZlcnRpY2FsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFNoYXJlZFByZWZlcmVuY2VzIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9TaGFyZWRQcmVmZXJlbmNlcy9TaGFyZWRQcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyB1cGRhdGVUZWFtIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW0gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHVwZGF0ZVRlYW0sXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7XG4gIHRlYW06IFRlYW07XG59XG5leHBvcnQgdHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+ICYgT3duUHJvcHM7XG5cbmV4cG9ydCBjb25zdCBUZWFtU2V0dGluZ3M6IEZDPFByb3BzPiA9ICh7IHRlYW0sIHVwZGF0ZVRlYW0gfSkgPT4ge1xuICBjb25zdCBjYW5Xcml0ZVRlYW1TZXR0aW5ncyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1dyaXRlLCB0ZWFtKTtcblxuICByZXR1cm4gKFxuICAgIDxWZXJ0aWNhbEdyb3VwPlxuICAgICAgPEZpZWxkU2V0IGxhYmVsPVwiVGVhbSBzZXR0aW5nc1wiPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e3sgLi4udGVhbSB9fVxuICAgICAgICAgIG9uU3VibWl0PXsoZm9ybVRlYW06IFRlYW0pID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVRlYW0oZm9ybVRlYW0ubmFtZSwgZm9ybVRlYW0uZW1haWwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzYWJsZWQ9eyFjYW5Xcml0ZVRlYW1TZXR0aW5nc31cbiAgICAgICAgPlxuICAgICAgICAgIHsoeyByZWdpc3RlciB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJOYW1lXCIgZGlzYWJsZWQ9eyFjYW5Xcml0ZVRlYW1TZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IGlkPVwibmFtZS1pbnB1dFwiIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGlzIGlzIG9wdGlvbmFsIGFuZCBpcyBwcmltYXJpbHkgdXNlZCB0byBzZXQgdGhlIHRlYW0gcHJvZmlsZSBhdmF0YXIgKHZpYSBncmF2YXRhciBzZXJ2aWNlKS5cIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuV3JpdGVUZWFtU2V0dGluZ3N9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCdlbWFpbCcpfSBwbGFjZWhvbGRlcj1cInRlYW1AZW1haWwuY29tXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbC1pbnB1dFwiIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshY2FuV3JpdGVUZWFtU2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvRmllbGRTZXQ+XG4gICAgICA8U2hhcmVkUHJlZmVyZW5jZXMgcmVzb3VyY2VVcmk9e2B0ZWFtcy8ke3RlYW0uaWR9YH0gZGlzYWJsZWQ9eyFjYW5Xcml0ZVRlYW1TZXR0aW5nc30gLz5cbiAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoVGVhbVNldHRpbmdzKTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgVGVhbU1lbWJlciwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGJ1aWxkTmF2TW9kZWwgfSBmcm9tICcuL25hdk1vZGVsJztcbmltcG9ydCB7IHRlYW1Hcm91cHNMb2FkZWQsIHRlYW1Mb2FkZWQsIHRlYW1NZW1iZXJzTG9hZGVkLCB0ZWFtc0xvYWRlZCB9IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0gfSBmcm9tICdhcHAvY29yZS91dGlscy9hY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUZWFtcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICAvLyBFYXJseSByZXR1cm4gaWYgdGhlIHVzZXIgY2Fubm90IGxpc3QgdGVhbXNcbiAgICBpZiAoIWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUmVhZCkpIHtcbiAgICAgIGRpc3BhdGNoKHRlYW1zTG9hZGVkKFtdKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KFxuICAgICAgJy9hcGkvdGVhbXMvc2VhcmNoJyxcbiAgICAgIGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKHsgcGVycGFnZTogMTAwMCwgcGFnZTogMSB9KVxuICAgICk7XG4gICAgZGlzcGF0Y2godGVhbXNMb2FkZWQocmVzcG9uc2UudGVhbXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUZWFtKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvdGVhbXMvJHtpZH1gLCBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpKTtcbiAgICBkaXNwYXRjaCh0ZWFtTG9hZGVkKHJlc3BvbnNlKSk7XG4gICAgZGlzcGF0Y2godXBkYXRlTmF2SW5kZXgoYnVpbGROYXZNb2RlbChyZXNwb25zZSkpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUZWFtTWVtYmVycygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L21lbWJlcnNgKTtcbiAgICBkaXNwYXRjaCh0ZWFtTWVtYmVyc0xvYWRlZChyZXNwb25zZSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGVhbU1lbWJlcihpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L21lbWJlcnNgLCB7IHVzZXJJZDogaWQgfSk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1NZW1iZXJzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGVhbU1lbWJlcihpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vbWVtYmVycy8ke2lkfWApO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtTWVtYmVycygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRlYW0obmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH1gLCB7IG5hbWUsIGVtYWlsIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtKHRlYW0uaWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUZWFtR3JvdXBzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vZ3JvdXBzYCk7XG4gICAgZGlzcGF0Y2godGVhbUdyb3Vwc0xvYWRlZChyZXNwb25zZSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGVhbUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9ncm91cHNgLCB7IGdyb3VwSWQ6IGdyb3VwSWQgfSk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1Hcm91cHMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUZWFtR3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vZ3JvdXBzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGdyb3VwSWQpfWApO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtR3JvdXBzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGVhbShpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS90ZWFtcy8ke2lkfWApO1xuICAgIC8vIFVwZGF0ZSB1c2VycyBwZXJtaXNzaW9ucyBpbiBjYXNlIHRoZXkgbG9zdCB0ZWFtcy5yZWFkIHdpdGggdGhlIGRlbGV0aW9uXG4gICAgYXdhaXQgY29udGV4dFNydi5mZXRjaFVzZXJQZXJtaXNzaW9ucygpO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtcygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRlYW1NZW1iZXIobWVtYmVyOiBUZWFtTWVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS90ZWFtcy8ke21lbWJlci50ZWFtSWR9L21lbWJlcnMvJHttZW1iZXIudXNlcklkfWAsIHtcbiAgICAgIHBlcm1pc3Npb246IG1lbWJlci5wZXJtaXNzaW9uLFxuICAgIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtTWVtYmVycygpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW0sIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IE5hdk1vZGVsSXRlbSwgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBQcm9CYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVXBncmFkZS9Qcm9CYWRnZSc7XG5pbXBvcnQgeyBoaWdobGlnaHRUcmlhbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscyc7XG5cbmNvbnN0IGxvYWRpbmdUZWFtID0ge1xuICBhdmF0YXJVcmw6ICdwdWJsaWMvaW1nL3VzZXJfcHJvZmlsZS5wbmcnLFxuICBpZDogMSxcbiAgbmFtZTogJ0xvYWRpbmcnLFxuICBlbWFpbDogJ2xvYWRpbmcnLFxuICBtZW1iZXJDb3VudDogMCxcbiAgcGVybWlzc2lvbjogVGVhbVBlcm1pc3Npb25MZXZlbC5NZW1iZXIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROYXZNb2RlbCh0ZWFtOiBUZWFtKTogTmF2TW9kZWxJdGVtIHtcbiAgY29uc3QgbmF2TW9kZWw6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBpbWc6IHRlYW0uYXZhdGFyVXJsLFxuICAgIGlkOiAndGVhbS0nICsgdGVhbS5pZCxcbiAgICBzdWJUaXRsZTogJ01hbmFnZSBtZW1iZXJzIGFuZCBzZXR0aW5ncycsXG4gICAgdXJsOiAnJyxcbiAgICB0ZXh0OiB0ZWFtLm5hbWUsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnVGVhbXMnLCB1cmw6ICdvcmcvdGVhbXMnIH1dLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAvLyBXaXRoIEZHQUMgdGhpcyB0YWIgd2lsbCBhbHdheXMgYmUgYXZhaWxhYmxlIChidXQgbm90IGFsd2F5cyBlZGl0YWJsZSlcbiAgICAgIC8vIFdpdGggTGVnYWN5IGl0IHdpbGwgYmUgaGlkZGVuIGJ5IGhpZGVUYWJzRnJvbU5vblRlYW1BZG1pbiBzaG91bGQgdGhlIHVzZXIgbm90IGJlIGFsbG93ZWQgdG8gc2VlIGl0XG4gICAgICB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGljb246ICdzbGlkZXJzLXYtYWx0JyxcbiAgICAgICAgaWQ6IGB0ZWFtLXNldHRpbmdzLSR7dGVhbS5pZH1gLFxuICAgICAgICB0ZXh0OiAnU2V0dGluZ3MnLFxuICAgICAgICB1cmw6IGBvcmcvdGVhbXMvZWRpdC8ke3RlYW0uaWR9L3NldHRpbmdzYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICAvLyBXaGlsZSB0ZWFtIGlzIGxvYWRpbmcgd2UgbGVhdmUgdGhlIG1lbWJlcnMgdGFiXG4gIC8vIFdpdGggRkdBQyB0aGUgTWVtYmVycyB0YWIgaXMgYXZhaWxhYmxlIHdoZW4gdXNlciBoYXMgQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1JlYWQgZm9yIHRoaXMgdGVhbVxuICAvLyBXaXRoIExlZ2FjeSBpdCB3aWxsIGFsd2F5cyBiZSBwcmVzZW50XG4gIGlmIChcbiAgICB0ZWFtID09PSBsb2FkaW5nVGVhbSB8fFxuICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCwgdGVhbSlcbiAgKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnVuc2hpZnQoe1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGljb246ICd1c2Vycy1hbHQnLFxuICAgICAgaWQ6IGB0ZWFtLW1lbWJlcnMtJHt0ZWFtLmlkfWAsXG4gICAgICB0ZXh0OiAnTWVtYmVycycsXG4gICAgICB1cmw6IGBvcmcvdGVhbXMvZWRpdC8ke3RlYW0uaWR9L21lbWJlcnNgLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdGVhbUdyb3VwU3luYzogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ3N5bmMnLFxuICAgIGlkOiBgdGVhbS1ncm91cHN5bmMtJHt0ZWFtLmlkfWAsXG4gICAgdGV4dDogJ0V4dGVybmFsIGdyb3VwIHN5bmMnLFxuICAgIHVybDogYG9yZy90ZWFtcy9lZGl0LyR7dGVhbS5pZH0vZ3JvdXBzeW5jYCxcbiAgfTtcblxuICBjb25zdCBpc0xvYWRpbmdUZWFtID0gdGVhbSA9PT0gbG9hZGluZ1RlYW07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkpIHtcbiAgICB0ZWFtR3JvdXBTeW5jLnRhYlN1ZmZpeCA9ICgpID0+XG4gICAgICBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogaXNMb2FkaW5nVGVhbSA/ICcnIDogJ2ZlYXR1cmUtaGlnaGxpZ2h0cy10ZWFtLXN5bmMtYmFkZ2UnLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICAvLyBXaXRoIGJvdGggTGVnYWN5IGFuZCBGR0FDIHRoZSB0YWIgaXMgcHJvdGVjdGVkIGJlaW5nIGZlYXR1cmVFbmFibGVkXG4gIC8vIFdoaWxlIHRlYW0gaXMgbG9hZGluZyB3ZSBsZWF2ZSB0aGUgdGVhbXN5bmMgdGFiXG4gIC8vIFdpdGggRkdBQyB0aGUgRXh0ZXJuYWwgR3JvdXAgU3luYyB0YWIgaXMgYXZhaWxhYmxlIHdoZW4gdXNlciBoYXMgQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1JlYWQgZm9yIHRoaXMgdGVhbVxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ3RlYW1zeW5jJykpIHtcbiAgICBpZiAoaXNMb2FkaW5nVGVhbSB8fCBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1JlYWQsIHRlYW0pKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh0ZWFtR3JvdXBTeW5jKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4udGVhbUdyb3VwU3luYyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGlzTG9hZGluZ1RlYW0gPyAnJyA6ICdmZWF0dXJlLWhpZ2hsaWdodHMtdGVhbS1zeW5jLWJhZGdlJyB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuYXZNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlYW1Mb2FkaW5nTmF2KHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGNvbnN0IG1haW4gPSBidWlsZE5hdk1vZGVsKGxvYWRpbmdUZWFtKTtcblxuICBsZXQgbm9kZTogTmF2TW9kZWxJdGVtO1xuXG4gIC8vIGZpbmQgYWN0aXZlIHBhZ2VcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBtYWluLmNoaWxkcmVuISkge1xuICAgIGlmIChjaGlsZC5pZCEuaW5kZXhPZihwYWdlTmFtZSkgPiAwKSB7XG4gICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgbm9kZSA9IGNoaWxkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluOiBtYWluLFxuICAgIG5vZGU6IG5vZGUhLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgVGVhbSwgVGVhbXNTdGF0ZSwgVGVhbVN0YXRlLCBUZWFtTWVtYmVyLCBPcmdSb2xlLCBUZWFtUGVybWlzc2lvbkxldmVsIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hRdWVyeSA9IChzdGF0ZTogVGVhbXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoTWVtYmVyUXVlcnkgPSAoc3RhdGU6IFRlYW1TdGF0ZSkgPT4gc3RhdGUuc2VhcmNoTWVtYmVyUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0VGVhbUdyb3VwcyA9IChzdGF0ZTogVGVhbVN0YXRlKSA9PiBzdGF0ZS5ncm91cHM7XG5leHBvcnQgY29uc3QgZ2V0VGVhbXNDb3VudCA9IChzdGF0ZTogVGVhbXNTdGF0ZSkgPT4gc3RhdGUudGVhbXMubGVuZ3RoO1xuZXhwb3J0IGNvbnN0IGdldFRlYW1zU2VhcmNoUGFnZSA9IChzdGF0ZTogVGVhbXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUGFnZTtcblxuZXhwb3J0IGNvbnN0IGdldFRlYW0gPSAoc3RhdGU6IFRlYW1TdGF0ZSwgY3VycmVudFRlYW1JZDogYW55KTogVGVhbSB8IG51bGwgPT4ge1xuICBpZiAoc3RhdGUudGVhbS5pZCA9PT0gcGFyc2VJbnQoY3VycmVudFRlYW1JZCwgMTApKSB7XG4gICAgcmV0dXJuIHN0YXRlLnRlYW07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtcyA9IChzdGF0ZTogVGVhbXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IFJlZ0V4cChzdGF0ZS5zZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUudGVhbXMuZmlsdGVyKCh0ZWFtKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodGVhbS5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGVhbU1lbWJlcnMgPSAoc3RhdGU6IFRlYW1TdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IFJlZ0V4cChzdGF0ZS5zZWFyY2hNZW1iZXJRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUubWVtYmVycy5maWx0ZXIoKG1lbWJlcikgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KG1lbWJlci5sb2dpbikgfHwgcmVnZXgudGVzdChtZW1iZXIuZW1haWwpIHx8IHJlZ2V4LnRlc3QobWVtYmVyLm5hbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgbWVtYmVyczogVGVhbU1lbWJlcltdO1xuICBlZGl0b3JzQ2FuQWRtaW46IGJvb2xlYW47XG4gIHNpZ25lZEluVXNlcjogVXNlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluID0gKGNvbmZpZzogQ29uZmlnKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHsgbWVtYmVycywgc2lnbmVkSW5Vc2VyLCBlZGl0b3JzQ2FuQWRtaW4gfSA9IGNvbmZpZztcbiAgY29uc3QgdXNlckluTWVtYmVycyA9IG1lbWJlcnMuZmluZCgobSkgPT4gbS51c2VySWQgPT09IHNpZ25lZEluVXNlci5pZCk7XG4gIGNvbnN0IHBlcm1pc3Npb24gPSB1c2VySW5NZW1iZXJzID8gdXNlckluTWVtYmVycy5wZXJtaXNzaW9uIDogVGVhbVBlcm1pc3Npb25MZXZlbC5NZW1iZXI7XG5cbiAgcmV0dXJuIGlzUGVybWlzc2lvblRlYW1BZG1pbih7IHBlcm1pc3Npb24sIHNpZ25lZEluVXNlciwgZWRpdG9yc0NhbkFkbWluIH0pO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ29uZmlnIHtcbiAgcGVybWlzc2lvbjogVGVhbVBlcm1pc3Npb25MZXZlbDtcbiAgZWRpdG9yc0NhbkFkbWluOiBib29sZWFuO1xuICBzaWduZWRJblVzZXI6IFVzZXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc1Blcm1pc3Npb25UZWFtQWRtaW4gPSAoY29uZmlnOiBQZXJtaXNzaW9uQ29uZmlnKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHsgcGVybWlzc2lvbiwgc2lnbmVkSW5Vc2VyLCBlZGl0b3JzQ2FuQWRtaW4gfSA9IGNvbmZpZztcbiAgY29uc3QgaXNBZG1pbiA9IHNpZ25lZEluVXNlci5pc0dyYWZhbmFBZG1pbiB8fCBzaWduZWRJblVzZXIub3JnUm9sZSA9PT0gT3JnUm9sZS5BZG1pbjtcbiAgY29uc3QgdXNlcklzVGVhbUFkbWluID0gcGVybWlzc2lvbiA9PT0gVGVhbVBlcm1pc3Npb25MZXZlbC5BZG1pbjtcbiAgY29uc3QgaXNTaWduZWRJblVzZXJUZWFtQWRtaW4gPSBpc0FkbWluIHx8IHVzZXJJc1RlYW1BZG1pbjtcblxuICByZXR1cm4gaXNTaWduZWRJblVzZXJUZWFtQWRtaW4gfHwgIWVkaXRvcnNDYW5BZG1pbjtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY3NzIiwiQnV0dG9uIiwiRmllbGQiLCJGaWVsZFNldCIsIkZvcm0iLCJJY29uIiwiTGFiZWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiU2VsZWN0Iiwic3R5bGVzRmFjdG9yeSIsIlRpbWVab25lUGlja2VyIiwiVG9vbHRpcCIsIldlZWtTdGFydFBpY2tlciIsInNlbGVjdG9ycyIsImJhY2tlbmRTcnYiLCJQcmVmZXJlbmNlc1NlcnZpY2UiLCJ0aGVtZXMiLCJ2YWx1ZSIsImxhYmVsIiwiaWQiLCJTaGFyZWRQcmVmZXJlbmNlcyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJob21lRGFzaGJvYXJkSWQiLCJ0aGVtZSIsInRpbWV6b25lIiwid2Vla1N0YXJ0Iiwic3RhdGUiLCJzZXJ2aWNlIiwidXBkYXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzZXRTdGF0ZSIsImRhc2hib2FyZElkIiwiZGFzaGJvYXJkIiwiZm9sZGVyVGl0bGUiLCJ0aXRsZSIsInJlc291cmNlVXJpIiwiZGFzaGJvYXJkcyIsImNvbXBvbmVudERpZE1vdW50IiwicHJlZnMiLCJsb2FkIiwic2VhcmNoIiwic3RhcnJlZCIsImRlZmF1bHREYXNoYm9hcmRIaXQiLCJ0YWdzIiwidHlwZSIsInVpZCIsInVyaSIsInVybCIsImZvbGRlcklkIiwiZm9sZGVyVWlkIiwiZm9sZGVyVXJsIiwiaXNTdGFycmVkIiwic2x1ZyIsIml0ZW1zIiwiZmluZCIsImQiLCJtaXNzaW5nIiwiZGFzaGJvYXJkSWRzIiwibGVuZ3RoIiwicHVzaCIsInJlbmRlciIsImRpc2FibGVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaG9tZURhc2hib2FyZFRvb2x0aXAiLCJvblN1Ym1pdEZvcm0iLCJpdGVtIiwib25UaGVtZUNoYW5nZWQiLCJsYWJlbFRleHQiLCJpIiwiZ2V0RnVsbERhc2hOYW1lIiwib25Ib21lRGFzaGJvYXJkQ2hhbmdlZCIsImNvbXBvbmVudHMiLCJjb250YWluZXJWMiIsIm9uVGltZVpvbmVDaGFuZ2VkIiwib25XZWVrU3RhcnRDaGFuZ2VkIiwiVXNlclByb2ZpbGUiLCJwcmVmZXJlbmNlc1NhdmVCdXR0b24iLCJ1c2VFZmZlY3QiLCJjeCIsIkxpbmtCdXR0b24iLCJ1c2VTdHlsZXMyIiwicmVwb3J0RXhwZXJpbWVudFZpZXciLCJVcGdyYWRlQm94IiwiZmVhdHVyZU5hbWUiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiZmVhdHVyZUlkIiwiZXZlbnRWYXJpYW50Iiwic2l6ZSIsImh0bWxQcm9wcyIsImdldFVwZ3JhZGVCb3hTdHlsZXMiLCJib3giLCJpY29uIiwiaW5uZXIiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImZvbnRCYXNlIiwiY29sb3JzIiwic3VjY2VzcyIsInRyYW5zcGFyZW50Iiwic3BhY2luZyIsInR5cG9ncmFwaHkiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidmFsdWVzIiwieHhsIiwibWFpbiIsImZvbnRXZWlnaHRMaWdodCIsInByaW1hcnkiLCJVcGdyYWRlQ29udGVudCIsImxpc3RJdGVtcyIsImltYWdlIiwiZmVhdHVyZVVybCIsImRlc2NyaXB0aW9uIiwiY2FwdGlvbiIsImFjdGlvbiIsImdldFVwZ3JhZGVDb250ZW50U3R5bGVzIiwiY29udGFpbmVyIiwiY29udGVudCIsImxpc3QiLCJtYXAiLCJpbmRleCIsImxpbmsiLCJvbkNsaWNrIiwibWVkaWEiLCJnZXRJbWdVcmwiLCJtYXhDb250cmFzdCIsIlVwZ3JhZGVDb250ZW50VmVydGljYWwiLCJnZXRDb250ZW50VmVydGljYWxTdHlsZXMiLCJ1cmxPcklkIiwic3RhcnRzV2l0aCIsIldpdGhGZWF0dXJlVG9nZ2xlIiwiZmVhdHVyZVRvZ2dsZSIsImNoaWxkcmVuIiwiY29uZmlnIiwiaXNUcmlhbCIsImV4cGlyeSIsImxpY2Vuc2VJbmZvIiwidHJpYWxFeHBpcnkiLCJoaWdobGlnaHRUcmlhbCIsImZlYXR1cmVUb2dnbGVzIiwiZmVhdHVyZUhpZ2hsaWdodHMiLCJjb25uZWN0IiwiU2xpZGVEb3duIiwiTGVnYWN5Rm9ybXMiLCJ1c2VUaGVtZTIiLCJJbnB1dCIsImFkZFRlYW1Hcm91cCIsImxvYWRUZWFtR3JvdXBzIiwicmVtb3ZlVGVhbUdyb3VwIiwiZ2V0VGVhbUdyb3VwcyIsIkVtcHR5TGlzdENUQSIsIkNsb3NlQnV0dG9uIiwibWFwU3RhdGVUb1Byb3BzIiwiZ3JvdXBzIiwidGVhbSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsImhlYWRlclRvb2x0aXAiLCJUZWFtR3JvdXBTeW5jIiwiaXNBZGRpbmciLCJldmVudCIsIm5ld0dyb3VwSWQiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImdyb3VwIiwiZ3JvdXBJZCIsImZldGNoVGVhbUdyb3VwcyIsImlzTmV3R3JvdXBWYWxpZCIsInJlbmRlckdyb3VwIiwiaXNSZWFkT25seSIsIndpZHRoIiwib25SZW1vdmVHcm91cCIsIm9uVG9nZ2xlQWRkaW5nIiwib25BZGRHcm91cCIsIm9uTmV3R3JvdXBJZENoYW5nZWQiLCJUZWFtU3luY1VwZ3JhZGVDb250ZW50IiwiaXNMaWdodCIsIkRlbGV0ZUJ1dHRvbiIsInRlYW1zUGVybWlzc2lvbkxldmVscyIsInVwZGF0ZVRlYW1NZW1iZXIiLCJyZW1vdmVUZWFtTWVtYmVyIiwiVGFnQmFkZ2UiLCJUZWFtTWVtYmVyUm93IiwibWVtYmVyIiwicGVybWlzc2lvbiIsInVwZGF0ZWRUZWFtTWVtYmVyIiwicmVuZGVyTGFiZWxzIiwiYmluZCIsInJlbmRlclBlcm1pc3Npb25zIiwib25SZW1vdmVNZW1iZXIiLCJ1c2VySWQiLCJlZGl0b3JzQ2FuQWRtaW4iLCJzaWduZWRJblVzZXJJc1RlYW1BZG1pbiIsImRwIiwib25QZXJtaXNzaW9uQ2hhbmdlIiwibGFiZWxzIiwic3luY0VuYWJsZWQiLCJuYW1lIiwiYXZhdGFyVXJsIiwibG9naW4iLCJlbWFpbCIsIlVzZXJQaWNrZXIiLCJhZGRUZWFtTWVtYmVyIiwiZ2V0U2VhcmNoTWVtYmVyUXVlcnkiLCJpc1NpZ25lZEluVXNlclRlYW1BZG1pbiIsImNvbnRleHRTcnYiLCJzZXRTZWFyY2hNZW1iZXJRdWVyeSIsIkZpbHRlcklucHV0Iiwic2VhcmNoTWVtYmVyUXVlcnkiLCJzaWduZWRJblVzZXIiLCJ1c2VyIiwiVGVhbU1lbWJlcnMiLCJuZXdUZWFtTWVtYmVyIiwibWVtYmVycyIsImlzVGVhbUFkbWluIiwib25TZWFyY2hRdWVyeUNoYW5nZSIsIm9uVXNlclNlbGVjdGVkIiwib25BZGRVc2VyVG9UZWFtIiwiaW5jbHVkZXMiLCJ3aXRoVGhlbWUyIiwiUGFnZSIsIlRlYW1QZXJtaXNzaW9ucyIsIlRlYW1TZXR0aW5ncyIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJsb2FkVGVhbSIsImxvYWRUZWFtTWVtYmVycyIsImdldFRlYW0iLCJnZXRUZWFtTWVtYmVycyIsImdldFRlYW1Mb2FkaW5nTmF2IiwiZ2V0TmF2TW9kZWwiLCJmZWF0dXJlRW5hYmxlZCIsIlBhZ2VUeXBlcyIsInRlYW1JZCIsInBhcnNlSW50IiwibWF0Y2giLCJwYXJhbXMiLCJkZWZhdWx0UGFnZSIsImFjY2Vzc0NvbnRyb2xFbmFibGVkIiwiaGFzUGVybWlzc2lvbkluTWV0YWRhdGEiLCJBY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCIsInBhZ2VOYW1lIiwicGFnZSIsInRlYW1Mb2FkaW5nTmF2IiwibmF2TW9kZWwiLCJuYXZJbmRleCIsIlRlYW1QYWdlcyIsInRleHQxIiwidGV4dDIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImZpbHRlciIsIm5hdkl0ZW0iLCJ0ZXh0c0FyZUVxdWFsIiwiTWVtYmVycyIsImhpZGVGcm9tVGFicyIsImlzTG9hZGluZyIsImlzU3luY0VuYWJsZWQiLCJmZXRjaFRlYW0iLCJnZXRDdXJyZW50UGFnZSIsInBhZ2VzIiwiY3VycmVudFBhZ2UiLCJyZW5kZXJQYWdlIiwiY2FuUmVhZFRlYW0iLCJoYXNBY2Nlc3NJbk1ldGFkYXRhIiwiQWN0aW9uVGVhbXNSZWFkIiwiY2FuUmVhZFRlYW1QZXJtaXNzaW9ucyIsImNhbldyaXRlVGVhbVBlcm1pc3Npb25zIiwiQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1dyaXRlIiwiU2V0dGluZ3MiLCJHcm91cFN5bmMiLCJoaWRlVGFic0Zyb21Ob25UZWFtQWRtaW4iLCJPYmplY3QiLCJrZXlzIiwiUGVybWlzc2lvbnMiLCJjYW5MaXN0VXNlcnMiLCJoYXNQZXJtaXNzaW9uIiwiT3JnVXNlcnNSZWFkIiwiY2FuU2V0UGVybWlzc2lvbnMiLCJWZXJ0aWNhbEdyb3VwIiwidXBkYXRlVGVhbSIsImNhbldyaXRlVGVhbVNldHRpbmdzIiwiQWN0aW9uVGVhbXNXcml0ZSIsImZvcm1UZWFtIiwicmVnaXN0ZXIiLCJyZXF1aXJlZCIsImdldEJhY2tlbmRTcnYiLCJ1cGRhdGVOYXZJbmRleCIsImJ1aWxkTmF2TW9kZWwiLCJ0ZWFtR3JvdXBzTG9hZGVkIiwidGVhbUxvYWRlZCIsInRlYW1NZW1iZXJzTG9hZGVkIiwidGVhbXNMb2FkZWQiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsImxvYWRUZWFtcyIsImRpc3BhdGNoIiwicmVzcG9uc2UiLCJnZXQiLCJwZXJwYWdlIiwidGVhbXMiLCJnZXRTdG9yZSIsInBvc3QiLCJkZWxldGUiLCJwdXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWxldGVUZWFtIiwiZmV0Y2hVc2VyUGVybWlzc2lvbnMiLCJUZWFtUGVybWlzc2lvbkxldmVsIiwiUHJvQmFkZ2UiLCJsb2FkaW5nVGVhbSIsIm1lbWJlckNvdW50IiwiTWVtYmVyIiwiaW1nIiwic3ViVGl0bGUiLCJicmVhZGNydW1icyIsImFjdGl2ZSIsInVuc2hpZnQiLCJ0ZWFtR3JvdXBTeW5jIiwiaXNMb2FkaW5nVGVhbSIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsIm5vZGUiLCJjaGlsZCIsImluZGV4T2YiLCJPcmdSb2xlIiwiZ2V0U2VhcmNoUXVlcnkiLCJzZWFyY2hRdWVyeSIsImdldFRlYW1zQ291bnQiLCJnZXRUZWFtc1NlYXJjaFBhZ2UiLCJzZWFyY2hQYWdlIiwiY3VycmVudFRlYW1JZCIsImdldFRlYW1zIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwidXNlckluTWVtYmVycyIsIm0iLCJpc1Blcm1pc3Npb25UZWFtQWRtaW4iLCJpc0FkbWluIiwiaXNHcmFmYW5hQWRtaW4iLCJvcmdSb2xlIiwiQWRtaW4iLCJ1c2VySXNUZWFtQWRtaW4iXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PipelineAdminPage"],{

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

/***/ "./public/app/features/live/pages/AddNewRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewRule": () => (/* binding */ AddNewRule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const patternTypes = [{
  label: 'Data source',
  description: 'Configure a channel scoped to a data source instance',
  value: 'ds'
}, {
  label: 'Any',
  description: 'Enter an arbitray channel pattern',
  value: 'any'
}];
function AddNewRule({
  onRuleAdded
}) {
  const [patternType, setPatternType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [pattern, setPattern] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [patternPrefix, setPatternPrefix] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [datasource, setDatasource] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();

  const onSubmit = () => {
    if (!pattern) {
      notifyApp.error('Enter path');
      return;
    }

    if (patternType === 'ds' && !patternPrefix.length) {
      notifyApp.error('Select datasource');
      return;
    }

    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post(`api/live/channel-rules`, {
      pattern: patternPrefix + pattern,
      settings: {
        converter: {
          type: 'jsonAuto'
        },
        frameOutputs: [{
          type: 'managedStream'
        }]
      }
    }).then(v => {
      console.log('ADDED', v);
      setPattern(undefined);
      setPatternType(undefined);
      onRuleAdded(v.rule);
    }).catch(e => {
      notifyApp.error('Error adding rule', e);
      e.isHandled = true;
    });
  };

  if (patternType) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
        children: [patternType === 'any' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: "Pattern",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            value: pattern !== null && pattern !== void 0 ? pattern : '',
            onChange: e => setPattern(e.currentTarget.value),
            placeholder: "scope/namespace/path"
          })
        }), patternType === 'ds' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Data source",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
              current: datasource,
              onChange: ds => {
                setDatasource(ds);
                setPatternPrefix(`${_grafana_data__WEBPACK_IMPORTED_MODULE_3__.LiveChannelScope.DataSource}/${ds.uid}/`);
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Path",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
              value: pattern !== null && pattern !== void 0 ? pattern : '',
              onChange: e => setPattern(e.currentTarget.value),
              placeholder: "path"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: onSubmit,
            variant: pattern !== null && pattern !== void 0 && pattern.length ? 'primary' : 'secondary',
            children: "Add"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "secondary",
            onClick: () => setPatternType(undefined),
            children: "Cancel"
          })
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ValuePicker, {
      label: "Add channel rule",
      variant: "secondary",
      size: "md",
      icon: "plus",
      menuPlacement: "auto",
      isFullWidth: false,
      options: patternTypes,
      onChange: v => setPatternType(v.value)
    })
  });
}

/***/ }),

/***/ "./public/app/features/live/pages/PipelineAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PipelineAdminPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var _PipelineTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/live/pages/PipelineTable.tsx");
/* harmony import */ var _AddNewRule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/live/pages/AddNewRule.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function PipelineAdminPage() {
  const [rules, setRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [defaultRules, setDefaultRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [newRule, setNewRule] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_4__.useNavModel)('live-pipeline');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const loadRules = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`api/live/channel-rules`).then(data => {
      var _data$rules, _data$rules2;

      setRules((_data$rules = data.rules) !== null && _data$rules !== void 0 ? _data$rules : []);
      setDefaultRules((_data$rules2 = data.rules) !== null && _data$rules2 !== void 0 ? _data$rules2 : []);
    }).catch(e => {
      if (e.data) {
        setError(JSON.stringify(e.data, null, 2));
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadRules();
  }, []);

  const onSearchQueryChange = e => {
    if (e.target.value) {
      setRules(rules.filter(rule => rule.pattern.toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setRules(defaultRules);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("pre", {
        children: error
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "page-action-bar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
            placeholder: "Search pattern...",
            onChange: onSearchQueryChange
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PipelineTable__WEBPACK_IMPORTED_MODULE_5__.PipelineTable, {
        rules: rules,
        onRuleChanged: loadRules,
        selectRule: newRule
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AddNewRule__WEBPACK_IMPORTED_MODULE_6__.AddNewRule, {
        onRuleAdded: r => {
          console.log('GOT', r, 'vs', rules[0]);
          setNewRule(r);
          loadRules();
        }
      })]
    })
  });
}

/***/ }),

/***/ "./public/app/features/live/pages/PipelineTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipelineTable": () => (/* binding */ PipelineTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _RuleModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/live/pages/RuleModal.tsx");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3, _th4;










function renderOutputTags(key, output) {
  if (!(output !== null && output !== void 0 && output.type)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tag, {
    name: output.type
  }, key);
}

const PipelineTable = props => {
  const {
    rules
  } = props;
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedRule, setSelectedRule] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [clickColumn, setClickColumn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('converter');
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);

  const onRowClick = (rule, event) => {
    var _event$target;

    if (!rule) {
      return;
    }

    let column = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.getAttribute('data-column');

    if (!column || column === 'pattern') {
      column = 'converter';
    }

    setClickColumn(column);
    setSelectedRule(rule);
    setOpen(true);
  }; // Supports selecting a rule from external config (after add rule)


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.selectRule) {
      onRowClick(props.selectRule);
    }
  }, [props.selectRule]);

  const onRemoveRule = pattern => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`api/live/channel-rules`, JSON.stringify({
      pattern: pattern
    })).catch(e => console.error(e)).finally(() => {
      props.onRuleChanged();
    });
  };

  const renderPattern = pattern => {
    if (pattern.startsWith('ds/')) {
      const idx = pattern.indexOf('/', 4);

      if (idx > 3) {
        const uid = pattern.substring(3, idx);
        const ds = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().getInstanceSettings(uid);

        if (ds) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tag, {
              name: ds.name,
              colorIndex: 1
            }), " \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: pattern.substring(idx + 1)
            })]
          });
        }
      }
    }

    return pattern;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "admin-list-table",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "filter-table filter-table--hover form-inline",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Channel"
            })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Converter"
            })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Processor"
            })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Output"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              style: {
                width: 10
              },
              children: "\xA0"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: rules.map(rule => {
            var _rule$settings, _rule$settings$conver, _rule$settings2, _rule$settings2$frame, _rule$settings3, _rule$settings3$frame;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
              onClick: e => onRowClick(rule, e),
              className: styles.row,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "pattern",
                children: renderPattern(rule.pattern)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "converter",
                children: (_rule$settings = rule.settings) === null || _rule$settings === void 0 ? void 0 : (_rule$settings$conver = _rule$settings.converter) === null || _rule$settings$conver === void 0 ? void 0 : _rule$settings$conver.type
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "processor",
                children: (_rule$settings2 = rule.settings) === null || _rule$settings2 === void 0 ? void 0 : (_rule$settings2$frame = _rule$settings2.frameProcessors) === null || _rule$settings2$frame === void 0 ? void 0 : _rule$settings2$frame.map(processor => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  children: processor.type
                }, rule.pattern + processor.type))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "output",
                children: (_rule$settings3 = rule.settings) === null || _rule$settings3 === void 0 ? void 0 : (_rule$settings3$frame = _rule$settings3.frameOutputs) === null || _rule$settings3$frame === void 0 ? void 0 : _rule$settings3$frame.map(output => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  children: renderOutputTags('out', output)
                }, rule.pattern + output.type))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                  name: "trash-alt",
                  onClick: e => {
                    e.stopPropagation();
                    onRemoveRule(rule.pattern);
                  }
                })
              })]
            }, rule.pattern);
          })
        })]
      })
    }), isOpen && selectedRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleModal__WEBPACK_IMPORTED_MODULE_4__.RuleModal, {
      rule: selectedRule,
      isOpen: isOpen,
      onClose: () => {
        setOpen(false);
      },
      clickColumn: clickColumn
    })]
  });
};

const getStyles = theme => {
  return {
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      cursor: pointer;
    `
  };
};

/***/ }),

/***/ "./public/app/features/live/pages/RuleModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleModal": () => (/* binding */ RuleModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _RuleSettingsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/live/pages/RuleSettingsEditor.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/live/pages/utils.ts");
/* harmony import */ var _RuleSettingsArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/live/pages/RuleSettingsArray.tsx");
/* harmony import */ var _RuleTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/live/pages/RuleTest.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const tabs = [{
  label: 'Converter',
  type: 'converter',
  isConverter: true
}, {
  label: 'Processors',
  type: 'frameProcessors'
}, {
  label: 'Outputs',
  type: 'frameOutputs'
}, {
  label: 'Test',
  isTest: true,
  icon: 'flask'
}];
const RuleModal = props => {
  var _rule$settings;

  const {
    isOpen,
    onClose,
    clickColumn
  } = props;
  const [rule, setRule] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.rule);
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tabs.find(t => t.type === clickColumn)); // to show color of Save button

  const [hasChange, setChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [ruleSetting, setRuleSetting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(activeTab !== null && activeTab !== void 0 && activeTab.type ? rule === null || rule === void 0 ? void 0 : (_rule$settings = rule.settings) === null || _rule$settings === void 0 ? void 0 : _rule$settings[activeTab.type] : undefined);
  const [entitiesInfo, setEntitiesInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);

  const onRuleSettingChange = value => {
    setChange(true);

    if (activeTab !== null && activeTab !== void 0 && activeTab.type) {
      setRule(Object.assign({}, rule, {
        settings: Object.assign({}, rule.settings, {
          [activeTab === null || activeTab === void 0 ? void 0 : activeTab.type]: value
        })
      }));
    }

    setRuleSetting(value);
  }; // load pipeline entities info


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getPipeLineEntities)().then(data => {
      setEntitiesInfo(data);
    });
  }, []);

  const onSave = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().put(`api/live/channel-rules`, rule).then(() => {
      setChange(false);
      onClose();
    }).catch(e => console.error(e));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: isOpen,
    title: rule.pattern,
    onDismiss: onClose,
    closeOnEscape: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TabsBar, {
      children: tabs.map((tab, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, {
          label: tab.label,
          active: tab === activeTab,
          icon: tab.icon,
          onChangeTab: () => {
            setActiveTab(tab);

            if (tab.type) {
              var _rule$settings2;

              // to notify children of the new rule
              setRuleSetting(rule === null || rule === void 0 ? void 0 : (_rule$settings2 = rule.settings) === null || _rule$settings2 === void 0 ? void 0 : _rule$settings2[tab.type]);
            }
          }
        }, index);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TabContent, {
      children: [entitiesInfo && rule && activeTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [(activeTab === null || activeTab === void 0 ? void 0 : activeTab.isTest) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RuleTest__WEBPACK_IMPORTED_MODULE_7__.RuleTest, {
          rule: rule
        }), activeTab.isConverter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RuleSettingsEditor__WEBPACK_IMPORTED_MODULE_4__.RuleSettingsEditor, {
          onChange: onRuleSettingChange,
          value: ruleSetting,
          ruleType: 'converter',
          entitiesInfo: entitiesInfo
        }), !activeTab.isConverter && activeTab.type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RuleSettingsArray__WEBPACK_IMPORTED_MODULE_6__.RuleSettingsArray, {
          onChange: onRuleSettingChange,
          value: ruleSetting,
          ruleType: activeTab.type,
          entitiesInfo: entitiesInfo
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: onSave,
        className: styles.save,
        variant: hasChange ? 'primary' : 'secondary',
        children: "Save"
      })]
    })]
  });
};

const getStyles = theme => {
  return {
    save: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-top: 5px;
    `
  };
};

/***/ }),

/***/ "./public/app/features/live/pages/RuleSettingsArray.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleSettingsArray": () => (/* binding */ RuleSettingsArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _RuleSettingsEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/live/pages/RuleSettingsEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const RuleSettingsArray = ({
  onChange,
  value,
  ruleType,
  entitiesInfo
}) => {
  const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const arr = value !== null && value !== void 0 ? value : [];

  const onRuleChange = v => {
    if (!value) {
      onChange([v]);
    } else {
      const copy = [...value];
      copy[index] = v;
      onChange(copy);
    }
  }; // create array of value.length + 1


  let indexArr = [];

  for (let i = 0; i <= arr.length; i++) {
    indexArr.push({
      label: `${ruleType}: ${i}`,
      value: i
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
      placeholder: "Select an index",
      menuShouldPortal: true,
      options: indexArr,
      value: index,
      onChange: index => {
        // set index to find the correct setting
        setIndex(index.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RuleSettingsEditor__WEBPACK_IMPORTED_MODULE_1__.RuleSettingsEditor, {
      onChange: onRuleChange,
      value: arr[index],
      ruleType: ruleType,
      entitiesInfo: entitiesInfo
    })]
  });
};

/***/ }),

/***/ "./public/app/features/live/pages/RuleSettingsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleSettingsEditor": () => (/* binding */ RuleSettingsEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const RuleSettingsEditor = ({
  onChange,
  value,
  ruleType,
  entitiesInfo
}) => {
  var _value$type;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      menuShouldPortal: true,
      options: entitiesInfo[ruleType],
      placeholder: "Select an option",
      value: (_value$type = value === null || value === void 0 ? void 0 : value.type) !== null && _value$type !== void 0 ? _value$type : '',
      onChange: value => {
        // set the body with example
        const type = value.value;
        onChange({
          type,
          [type]: entitiesInfo.getExample(ruleType, type)
        });
      }
    }, ruleType), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
      height: '50vh',
      value: value ? JSON.stringify(value[value.type], null, '\t') : '',
      showLineNumbers: true,
      readOnly: false,
      language: "json",
      showMiniMap: false,
      onBlur: text => {
        const body = JSON.parse(text);
        onChange({
          type: value.type,
          [value.type]: body
        });
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/features/live/pages/RuleTest.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTest": () => (/* binding */ RuleTest)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const RuleTest = props => {
  const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);

  const onBlur = text => {
    setData(text);
  };

  const onClick = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post(`api/live/pipeline-convert-test`, {
      channelRules: [props.rule],
      channel: props.rule.pattern,
      data: data
    }).then(data => {
      const t = data.channelFrames;

      if (t) {
        setResponse(t.map(f => {
          const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dataFrameFromJSON)(f.frame);

          for (const field of frame.fields) {
            field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getDisplayProcessor)({
              field,
              theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.theme2
            });
          }

          return {
            channel: f.channel,
            frame
          };
        }));
      }
    }).catch(e => {
      setResponse(e);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
      height: 100,
      value: "",
      showLineNumbers: true,
      readOnly: false,
      language: "json",
      showMiniMap: false,
      onBlur: onBlur
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: onClick,
      className: styles.margin,
      children: "Test"
    }), (response === null || response === void 0 ? void 0 : response.length) && response.map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: r.channel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Table, {
        data: r.frame,
        width: 700,
        height: Math.min(10 * r.frame.length + 10, 150),
        showTypeIcons: true
      })
    }, r.channel))]
  });
};

const getStyles = theme => {
  return {
    margin: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-bottom: 15px;
    `
  };
};

/***/ }),

/***/ "./public/app/features/live/pages/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPipeLineEntities": () => (/* binding */ getPipeLineEntities),
/* harmony export */   "transformLabel": () => (/* binding */ transformLabel)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

async function getPipeLineEntities() {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`api/live/pipeline-entities`).then(data => {
    return {
      converter: transformLabel(data, 'converters'),
      frameProcessors: transformLabel(data, 'frameProcessors'),
      frameOutputs: transformLabel(data, 'frameOutputs'),
      getExample: (ruleType, type) => {
        var _data$, _data$$filter, _data$$filter$;

        return (_data$ = data[`${ruleType}s`]) === null || _data$ === void 0 ? void 0 : (_data$$filter = _data$.filter(option => option.type === type)) === null || _data$$filter === void 0 ? void 0 : (_data$$filter$ = _data$$filter[0]) === null || _data$$filter$ === void 0 ? void 0 : _data$$filter$['example'];
      }
    };
  });
}
function transformLabel(data, key) {
  if (Array.isArray(data)) {
    return data.map(d => ({
      label: d[key],
      value: d[key]
    }));
  }

  return data[key].map(typeObj => ({
    label: typeObj.type,
    value: typeObj.type
  }));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlMNEYsTUFBQUEsVUFBVSxFQUFFLENBQUNULFFBQUQsRUFBV2hILElBQVgsS0FBb0I7QUFBQTs7QUFDOUIseUJBQU82QixJQUFJLENBQUUsR0FBRW1GLFFBQVMsR0FBYixDQUFYLDREQUFPLE9BQXNCOUUsTUFBdEIsQ0FBOEJpSCxNQUFELElBQWdDQSxNQUFNLENBQUNuSixJQUFQLEtBQWdCQSxJQUE3RSxDQUFQLG9FQUFPLGNBQXFGLENBQXJGLENBQVAsbURBQU8sZUFBMEYsU0FBMUYsQ0FBUDtBQUNEO0FBTkksS0FBUDtBQVFELEdBWFUsQ0FBYjtBQVlEO0FBRU0sU0FBU2tKLGNBQVQsQ0FBd0JySCxJQUF4QixFQUFtQ2dCLEdBQW5DLEVBQTJEO0FBQ2hFLE1BQUl1RyxLQUFLLENBQUNDLE9BQU4sQ0FBY3hILElBQWQsQ0FBSixFQUF5QjtBQUN2QixXQUFPQSxJQUFJLENBQUM0QyxHQUFMLENBQVU2RSxDQUFELEtBQVE7QUFDdEIxSyxNQUFBQSxLQUFLLEVBQUUwSyxDQUFDLENBQUN6RyxHQUFELENBRGM7QUFFdEIvRCxNQUFBQSxLQUFLLEVBQUV3SyxDQUFDLENBQUN6RyxHQUFEO0FBRmMsS0FBUixDQUFULENBQVA7QUFJRDs7QUFDRCxTQUFPaEIsSUFBSSxDQUFDZ0IsR0FBRCxDQUFKLENBQVU0QixHQUFWLENBQWU4RSxPQUFELEtBQWtDO0FBQ3JEM0ssSUFBQUEsS0FBSyxFQUFFMkssT0FBTyxDQUFDdkosSUFEc0M7QUFFckRsQixJQUFBQSxLQUFLLEVBQUV5SyxPQUFPLENBQUN2SjtBQUZzQyxHQUFsQyxDQUFkLENBQVA7QUFJRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy9BZGROZXdSdWxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saXZlL3BhZ2VzL1BpcGVsaW5lQWRtaW5QYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saXZlL3BhZ2VzL1BpcGVsaW5lVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpdmUvcGFnZXMvUnVsZU1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saXZlL3BhZ2VzL1J1bGVTZXR0aW5nc0FycmF5LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saXZlL3BhZ2VzL1J1bGVTZXR0aW5nc0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy9SdWxlVGVzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IHVzZU5hdk1vZGVsID0gKGlkOiBzdHJpbmcpOiBOYXZNb2RlbCA9PiB7XG4gIGNvbnN0IG5hdkluZGV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCk7XG4gIHJldHVybiBnZXROYXZNb2RlbChuYXZJbmRleCwgaWQpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0LCBGaWVsZCwgQnV0dG9uLCBWYWx1ZVBpY2tlciwgSG9yaXpvbnRhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVJlZiwgTGl2ZUNoYW5uZWxTY29wZSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBSdWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uUnVsZUFkZGVkOiAocnVsZTogUnVsZSkgPT4gdm9pZDtcbn1cblxudHlwZSBQYXR0ZXJuVHlwZSA9ICdkcycgfCAnYW55JztcblxuY29uc3QgcGF0dGVyblR5cGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8UGF0dGVyblR5cGU+PiA9IFtcbiAge1xuICAgIGxhYmVsOiAnRGF0YSBzb3VyY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29uZmlndXJlIGEgY2hhbm5lbCBzY29wZWQgdG8gYSBkYXRhIHNvdXJjZSBpbnN0YW5jZScsXG4gICAgdmFsdWU6ICdkcycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0FueScsXG4gICAgZGVzY3JpcHRpb246ICdFbnRlciBhbiBhcmJpdHJheSBjaGFubmVsIHBhdHRlcm4nLFxuICAgIHZhbHVlOiAnYW55JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGROZXdSdWxlKHsgb25SdWxlQWRkZWQgfTogUHJvcHMpIHtcbiAgY29uc3QgW3BhdHRlcm5UeXBlLCBzZXRQYXR0ZXJuVHlwZV0gPSB1c2VTdGF0ZTxQYXR0ZXJuVHlwZT4oKTtcbiAgY29uc3QgW3BhdHRlcm4sIHNldFBhdHRlcm5dID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbcGF0dGVyblByZWZpeCwgc2V0UGF0dGVyblByZWZpeF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2RhdGFzb3VyY2UsIHNldERhdGFzb3VyY2VdID0gdXNlU3RhdGU8RGF0YVNvdXJjZVJlZj4oKTtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgICBub3RpZnlBcHAuZXJyb3IoJ0VudGVyIHBhdGgnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhdHRlcm5UeXBlID09PSAnZHMnICYmICFwYXR0ZXJuUHJlZml4Lmxlbmd0aCkge1xuICAgICAgbm90aWZ5QXBwLmVycm9yKCdTZWxlY3QgZGF0YXNvdXJjZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoYGFwaS9saXZlL2NoYW5uZWwtcnVsZXNgLCB7XG4gICAgICAgIHBhdHRlcm46IHBhdHRlcm5QcmVmaXggKyBwYXR0ZXJuLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGNvbnZlcnRlcjoge1xuICAgICAgICAgICAgdHlwZTogJ2pzb25BdXRvJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZyYW1lT3V0cHV0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnbWFuYWdlZFN0cmVhbScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHY6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQURERUQnLCB2KTtcbiAgICAgICAgc2V0UGF0dGVybih1bmRlZmluZWQpO1xuICAgICAgICBzZXRQYXR0ZXJuVHlwZSh1bmRlZmluZWQpO1xuICAgICAgICBvblJ1bGVBZGRlZCh2LnJ1bGUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBub3RpZnlBcHAuZXJyb3IoJ0Vycm9yIGFkZGluZyBydWxlJywgZSk7XG4gICAgICAgIGUuaXNIYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGlmIChwYXR0ZXJuVHlwZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIHtwYXR0ZXJuVHlwZSA9PT0gJ2FueScgJiYgKFxuICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiUGF0dGVyblwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGF0dGVybiA/PyAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhdHRlcm4oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNjb3BlL25hbWVzcGFjZS9wYXRoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGF0dGVyblR5cGUgPT09ICdkcycgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiRGF0YSBzb3VyY2VcIj5cbiAgICAgICAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgICAgY3VycmVudD17ZGF0YXNvdXJjZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YXNvdXJjZShkcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhdHRlcm5QcmVmaXgoYCR7TGl2ZUNoYW5uZWxTY29wZS5EYXRhU291cmNlfS8ke2RzLnVpZH0vYCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlBhdGhcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3BhdHRlcm4gPz8gJyd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGF0dGVybihlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cInBhdGhcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gdmFyaWFudD17cGF0dGVybj8ubGVuZ3RoID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFBhdHRlcm5UeXBlKHVuZGVmaW5lZCl9PlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxWYWx1ZVBpY2tlclxuICAgICAgICBsYWJlbD1cIkFkZCBjaGFubmVsIHJ1bGVcIlxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICAgIGlzRnVsbFdpZHRoPXtmYWxzZX1cbiAgICAgICAgb3B0aW9ucz17cGF0dGVyblR5cGVzfVxuICAgICAgICBvbkNoYW5nZT17KHYpID0+IHNldFBhdHRlcm5UeXBlKHYudmFsdWUpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgdXNlTmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VOYXZNb2RlbCc7XG5pbXBvcnQgeyBSdWxlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBQaXBlbGluZVRhYmxlIH0gZnJvbSAnLi9QaXBlbGluZVRhYmxlJztcbmltcG9ydCB7IEFkZE5ld1J1bGUgfSBmcm9tICcuL0FkZE5ld1J1bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaXBlbGluZUFkbWluUGFnZSgpIHtcbiAgY29uc3QgW3J1bGVzLCBzZXRSdWxlc10gPSB1c2VTdGF0ZTxSdWxlW10+KFtdKTtcbiAgY29uc3QgW2RlZmF1bHRSdWxlcywgc2V0RGVmYXVsdFJ1bGVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtuZXdSdWxlLCBzZXROZXdSdWxlXSA9IHVzZVN0YXRlPFJ1bGU+KCk7XG4gIGNvbnN0IG5hdk1vZGVsID0gdXNlTmF2TW9kZWwoJ2xpdmUtcGlwZWxpbmUnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3QgbG9hZFJ1bGVzID0gKCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmdldChgYXBpL2xpdmUvY2hhbm5lbC1ydWxlc2ApXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRSdWxlcyhkYXRhLnJ1bGVzID8/IFtdKTtcbiAgICAgICAgc2V0RGVmYXVsdFJ1bGVzKGRhdGEucnVsZXMgPz8gW10pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5kYXRhKSB7XG4gICAgICAgICAgc2V0RXJyb3IoSlNPTi5zdHJpbmdpZnkoZS5kYXRhLCBudWxsLCAyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZFJ1bGVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBzZXRSdWxlcyhydWxlcy5maWx0ZXIoKHJ1bGUpID0+IHJ1bGUucGF0dGVybi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFJ1bGVzKGRlZmF1bHRSdWxlcyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICB7ZXJyb3IgJiYgPHByZT57ZXJyb3J9PC9wcmU+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcGF0dGVybi4uLlwiIG9uQ2hhbmdlPXtvblNlYXJjaFF1ZXJ5Q2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UGlwZWxpbmVUYWJsZSBydWxlcz17cnVsZXN9IG9uUnVsZUNoYW5nZWQ9e2xvYWRSdWxlc30gc2VsZWN0UnVsZT17bmV3UnVsZX0gLz5cblxuICAgICAgICA8QWRkTmV3UnVsZVxuICAgICAgICAgIG9uUnVsZUFkZGVkPXsocjogUnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dPVCcsIHIsICd2cycsIHJ1bGVzWzBdKTtcbiAgICAgICAgICAgIHNldE5ld1J1bGUocik7XG4gICAgICAgICAgICBsb2FkUnVsZXMoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgVGFnLCB1c2VTdHlsZXMsIEljb25CdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBSdWxlLCBPdXRwdXQsIFJ1bGVUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBSdWxlTW9kYWwgfSBmcm9tICcuL1J1bGVNb2RhbCc7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuXG5mdW5jdGlvbiByZW5kZXJPdXRwdXRUYWdzKGtleTogc3RyaW5nLCBvdXRwdXQ/OiBPdXRwdXQpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBpZiAoIW91dHB1dD8udHlwZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiA8VGFnIGtleT17a2V5fSBuYW1lPXtvdXRwdXQudHlwZX0gLz47XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGVzOiBSdWxlW107XG4gIG9uUnVsZUNoYW5nZWQ6ICgpID0+IHZvaWQ7XG4gIHNlbGVjdFJ1bGU/OiBSdWxlO1xufVxuXG5leHBvcnQgY29uc3QgUGlwZWxpbmVUYWJsZTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcnVsZXMgfSA9IHByb3BzO1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkUnVsZSwgc2V0U2VsZWN0ZWRSdWxlXSA9IHVzZVN0YXRlPFJ1bGU+KCk7XG4gIGNvbnN0IFtjbGlja0NvbHVtbiwgc2V0Q2xpY2tDb2x1bW5dID0gdXNlU3RhdGU8UnVsZVR5cGU+KCdjb252ZXJ0ZXInKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgb25Sb3dDbGljayA9IChydWxlOiBSdWxlLCBldmVudD86IGFueSkgPT4ge1xuICAgIGlmICghcnVsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY29sdW1uID0gZXZlbnQ/LnRhcmdldD8uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbicpO1xuICAgIGlmICghY29sdW1uIHx8IGNvbHVtbiA9PT0gJ3BhdHRlcm4nKSB7XG4gICAgICBjb2x1bW4gPSAnY29udmVydGVyJztcbiAgICB9XG4gICAgc2V0Q2xpY2tDb2x1bW4oY29sdW1uKTtcbiAgICBzZXRTZWxlY3RlZFJ1bGUocnVsZSk7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICAvLyBTdXBwb3J0cyBzZWxlY3RpbmcgYSBydWxlIGZyb20gZXh0ZXJuYWwgY29uZmlnIChhZnRlciBhZGQgcnVsZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMuc2VsZWN0UnVsZSkge1xuICAgICAgb25Sb3dDbGljayhwcm9wcy5zZWxlY3RSdWxlKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5zZWxlY3RSdWxlXSk7XG5cbiAgY29uc3Qgb25SZW1vdmVSdWxlID0gKHBhdHRlcm46IHN0cmluZykgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmRlbGV0ZShgYXBpL2xpdmUvY2hhbm5lbC1ydWxlc2AsIEpTT04uc3RyaW5naWZ5KHsgcGF0dGVybjogcGF0dGVybiB9KSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgcHJvcHMub25SdWxlQ2hhbmdlZCgpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGF0dGVybiA9IChwYXR0ZXJuOiBzdHJpbmcpID0+IHtcbiAgICBpZiAocGF0dGVybi5zdGFydHNXaXRoKCdkcy8nKSkge1xuICAgICAgY29uc3QgaWR4ID0gcGF0dGVybi5pbmRleE9mKCcvJywgNCk7XG4gICAgICBpZiAoaWR4ID4gMykge1xuICAgICAgICBjb25zdCB1aWQgPSBwYXR0ZXJuLnN1YnN0cmluZygzLCBpZHgpO1xuICAgICAgICBjb25zdCBkcyA9IGdldERhdGFzb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHVpZCk7XG4gICAgICAgIGlmIChkcykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8VGFnIG5hbWU9e2RzLm5hbWV9IGNvbG9ySW5kZXg9ezF9IC8+ICZuYnNwO1xuICAgICAgICAgICAgICA8c3Bhbj57cGF0dGVybi5zdWJzdHJpbmcoaWR4ICsgMSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWxpc3QtdGFibGVcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmaWx0ZXItdGFibGUtLWhvdmVyIGZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+Q2hhbm5lbDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Db252ZXJ0ZXI8L3RoPlxuICAgICAgICAgICAgICA8dGg+UHJvY2Vzc29yPC90aD5cbiAgICAgICAgICAgICAgPHRoPk91dHB1dDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogMTAgfX0+Jm5ic3A7PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cnVsZXMubWFwKChydWxlKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3J1bGUucGF0dGVybn0gb25DbGljaz17KGUpID0+IG9uUm93Q2xpY2socnVsZSwgZSl9IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtcGF0dGVybj17cnVsZS5wYXR0ZXJufSBkYXRhLWNvbHVtbj1cInBhdHRlcm5cIj5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJQYXR0ZXJuKHJ1bGUucGF0dGVybil9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1wYXR0ZXJuPXtydWxlLnBhdHRlcm59IGRhdGEtY29sdW1uPVwiY29udmVydGVyXCI+XG4gICAgICAgICAgICAgICAgICB7cnVsZS5zZXR0aW5ncz8uY29udmVydGVyPy50eXBlfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtcGF0dGVybj17cnVsZS5wYXR0ZXJufSBkYXRhLWNvbHVtbj1cInByb2Nlc3NvclwiPlxuICAgICAgICAgICAgICAgICAge3J1bGUuc2V0dGluZ3M/LmZyYW1lUHJvY2Vzc29ycz8ubWFwKChwcm9jZXNzb3IpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtydWxlLnBhdHRlcm4gKyBwcm9jZXNzb3IudHlwZX0+e3Byb2Nlc3Nvci50eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtcGF0dGVybj17cnVsZS5wYXR0ZXJufSBkYXRhLWNvbHVtbj1cIm91dHB1dFwiPlxuICAgICAgICAgICAgICAgICAge3J1bGUuc2V0dGluZ3M/LmZyYW1lT3V0cHV0cz8ubWFwKChvdXRwdXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtydWxlLnBhdHRlcm4gKyBvdXRwdXQudHlwZX0+e3JlbmRlck91dHB1dFRhZ3MoJ291dCcsIG91dHB1dCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUnVsZShydWxlLnBhdHRlcm4pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzT3BlbiAmJiBzZWxlY3RlZFJ1bGUgJiYgKFxuICAgICAgICA8UnVsZU1vZGFsXG4gICAgICAgICAgcnVsZT17c2VsZWN0ZWRSdWxlfVxuICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xpY2tDb2x1bW49e2NsaWNrQ29sdW1ufVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcm93OiBjc3NgXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgVGFiQ29udGVudCwgVGFic0JhciwgVGFiLCBCdXR0b24sIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFJ1bGUsIFJ1bGVUeXBlLCBQaXBlTGluZUVudGl0aWVzSW5mbywgUnVsZVNldHRpbmcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFJ1bGVTZXR0aW5nc0VkaXRvciB9IGZyb20gJy4vUnVsZVNldHRpbmdzRWRpdG9yJztcbmltcG9ydCB7IGdldFBpcGVMaW5lRW50aXRpZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFJ1bGVTZXR0aW5nc0FycmF5IH0gZnJvbSAnLi9SdWxlU2V0dGluZ3NBcnJheSc7XG5pbXBvcnQgeyBSdWxlVGVzdCB9IGZyb20gJy4vUnVsZVRlc3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBSdWxlO1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIGNsaWNrQ29sdW1uOiBSdWxlVHlwZTtcbn1cbmludGVyZmFjZSBUYWJJbmZvIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdHlwZT86IFJ1bGVUeXBlO1xuICBpc1Rlc3Q/OiBib29sZWFuO1xuICBpc0NvbnZlcnRlcj86IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG59XG5jb25zdCB0YWJzOiBUYWJJbmZvW10gPSBbXG4gIHsgbGFiZWw6ICdDb252ZXJ0ZXInLCB0eXBlOiAnY29udmVydGVyJywgaXNDb252ZXJ0ZXI6IHRydWUgfSxcbiAgeyBsYWJlbDogJ1Byb2Nlc3NvcnMnLCB0eXBlOiAnZnJhbWVQcm9jZXNzb3JzJyB9LFxuICB7IGxhYmVsOiAnT3V0cHV0cycsIHR5cGU6ICdmcmFtZU91dHB1dHMnIH0sXG4gIHsgbGFiZWw6ICdUZXN0JywgaXNUZXN0OiB0cnVlLCBpY29uOiAnZmxhc2snIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUnVsZU1vZGFsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc09wZW4sIG9uQ2xvc2UsIGNsaWNrQ29sdW1uIH0gPSBwcm9wcztcbiAgY29uc3QgW3J1bGUsIHNldFJ1bGVdID0gdXNlU3RhdGU8UnVsZT4ocHJvcHMucnVsZSk7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTxUYWJJbmZvIHwgdW5kZWZpbmVkPih0YWJzLmZpbmQoKHQpID0+IHQudHlwZSA9PT0gY2xpY2tDb2x1bW4pKTtcbiAgLy8gdG8gc2hvdyBjb2xvciBvZiBTYXZlIGJ1dHRvblxuICBjb25zdCBbaGFzQ2hhbmdlLCBzZXRDaGFuZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcnVsZVNldHRpbmcsIHNldFJ1bGVTZXR0aW5nXSA9IHVzZVN0YXRlPGFueT4oYWN0aXZlVGFiPy50eXBlID8gcnVsZT8uc2V0dGluZ3M/LlthY3RpdmVUYWIudHlwZV0gOiB1bmRlZmluZWQpO1xuICBjb25zdCBbZW50aXRpZXNJbmZvLCBzZXRFbnRpdGllc0luZm9dID0gdXNlU3RhdGU8UGlwZUxpbmVFbnRpdGllc0luZm8+KCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IG9uUnVsZVNldHRpbmdDaGFuZ2UgPSAodmFsdWU6IFJ1bGVTZXR0aW5nIHwgUnVsZVNldHRpbmdbXSkgPT4ge1xuICAgIHNldENoYW5nZSh0cnVlKTtcbiAgICBpZiAoYWN0aXZlVGFiPy50eXBlKSB7XG4gICAgICBzZXRSdWxlKHtcbiAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAuLi5ydWxlLnNldHRpbmdzLFxuICAgICAgICAgIFthY3RpdmVUYWI/LnR5cGVdOiB2YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRSdWxlU2V0dGluZyh2YWx1ZSk7XG4gIH07XG5cbiAgLy8gbG9hZCBwaXBlbGluZSBlbnRpdGllcyBpbmZvXG4gIHVzZU1lbW8oKCkgPT4ge1xuICAgIGdldFBpcGVMaW5lRW50aXRpZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRFbnRpdGllc0luZm8oZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblNhdmUgPSAoKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAucHV0KGBhcGkvbGl2ZS9jaGFubmVsLXJ1bGVzYCwgcnVsZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0Q2hhbmdlKGZhbHNlKTtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IHRpdGxlPXtydWxlLnBhdHRlcm59IG9uRGlzbWlzcz17b25DbG9zZX0gY2xvc2VPbkVzY2FwZT5cbiAgICAgIDxUYWJzQmFyPlxuICAgICAgICB7dGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBsYWJlbD17dGFiLmxhYmVsfVxuICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gYWN0aXZlVGFifVxuICAgICAgICAgICAgICBpY29uPXt0YWIuaWNvbiBhcyBhbnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlVGFiPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiKHRhYik7XG4gICAgICAgICAgICAgICAgaWYgKHRhYi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAvLyB0byBub3RpZnkgY2hpbGRyZW4gb2YgdGhlIG5ldyBydWxlXG4gICAgICAgICAgICAgICAgICBzZXRSdWxlU2V0dGluZyhydWxlPy5zZXR0aW5ncz8uW3RhYi50eXBlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvVGFic0Jhcj5cbiAgICAgIDxUYWJDb250ZW50PlxuICAgICAgICB7ZW50aXRpZXNJbmZvICYmIHJ1bGUgJiYgYWN0aXZlVGFiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2FjdGl2ZVRhYj8uaXNUZXN0ICYmIDxSdWxlVGVzdCBydWxlPXtydWxlfSAvPn1cbiAgICAgICAgICAgIHthY3RpdmVUYWIuaXNDb252ZXJ0ZXIgJiYgKFxuICAgICAgICAgICAgICA8UnVsZVNldHRpbmdzRWRpdG9yXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUnVsZVNldHRpbmdDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVTZXR0aW5nfVxuICAgICAgICAgICAgICAgIHJ1bGVUeXBlPXsnY29udmVydGVyJ31cbiAgICAgICAgICAgICAgICBlbnRpdGllc0luZm89e2VudGl0aWVzSW5mb31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWFjdGl2ZVRhYi5pc0NvbnZlcnRlciAmJiBhY3RpdmVUYWIudHlwZSAmJiAoXG4gICAgICAgICAgICAgIDxSdWxlU2V0dGluZ3NBcnJheVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblJ1bGVTZXR0aW5nQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtydWxlU2V0dGluZ31cbiAgICAgICAgICAgICAgICBydWxlVHlwZT17YWN0aXZlVGFiLnR5cGV9XG4gICAgICAgICAgICAgICAgZW50aXRpZXNJbmZvPXtlbnRpdGllc0luZm99XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU2F2ZX0gY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZX0gdmFyaWFudD17aGFzQ2hhbmdlID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9PlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2F2ZTogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUnVsZVNldHRpbmdzRWRpdG9yIH0gZnJvbSAnLi9SdWxlU2V0dGluZ3NFZGl0b3InO1xuaW1wb3J0IHsgUnVsZVR5cGUsIFJ1bGVTZXR0aW5nLCBQaXBlTGluZUVudGl0aWVzSW5mbyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ3JhZmFuYS1kYXRhL3NyYyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGVUeXBlOiBSdWxlVHlwZTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogUnVsZVNldHRpbmdbXSkgPT4gdm9pZDtcbiAgdmFsdWU6IFJ1bGVTZXR0aW5nW107XG4gIGVudGl0aWVzSW5mbzogUGlwZUxpbmVFbnRpdGllc0luZm87XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlU2V0dGluZ3NBcnJheTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIHZhbHVlLCBydWxlVHlwZSwgZW50aXRpZXNJbmZvIH0pID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBhcnIgPSB2YWx1ZSA/PyBbXTtcbiAgY29uc3Qgb25SdWxlQ2hhbmdlID0gKHY6IFJ1bGVTZXR0aW5nKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgb25DaGFuZ2UoW3ZdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29weSA9IFsuLi52YWx1ZV07XG4gICAgICBjb3B5W2luZGV4XSA9IHY7XG4gICAgICBvbkNoYW5nZShjb3B5KTtcbiAgICB9XG4gIH07XG4gIC8vIGNyZWF0ZSBhcnJheSBvZiB2YWx1ZS5sZW5ndGggKyAxXG4gIGxldCBpbmRleEFycjogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPG51bWJlcj4+ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGluZGV4QXJyLnB1c2goe1xuICAgICAgbGFiZWw6IGAke3J1bGVUeXBlfTogJHtpfWAsXG4gICAgICB2YWx1ZTogaSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYW4gaW5kZXhcIlxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsPXt0cnVlfVxuICAgICAgICBvcHRpb25zPXtpbmRleEFycn1cbiAgICAgICAgdmFsdWU9e2luZGV4fVxuICAgICAgICBvbkNoYW5nZT17KGluZGV4KSA9PiB7XG4gICAgICAgICAgLy8gc2V0IGluZGV4IHRvIGZpbmQgdGhlIGNvcnJlY3Qgc2V0dGluZ1xuICAgICAgICAgIHNldEluZGV4KGluZGV4LnZhbHVlISk7XG4gICAgICAgIH19XG4gICAgICA+PC9TZWxlY3Q+XG4gICAgICA8UnVsZVNldHRpbmdzRWRpdG9yIG9uQ2hhbmdlPXtvblJ1bGVDaGFuZ2V9IHZhbHVlPXthcnJbaW5kZXhdfSBydWxlVHlwZT17cnVsZVR5cGV9IGVudGl0aWVzSW5mbz17ZW50aXRpZXNJbmZvfSAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2RlRWRpdG9yLCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBSdWxlVHlwZSwgUnVsZVNldHRpbmcsIFBpcGVMaW5lRW50aXRpZXNJbmZvIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGVUeXBlOiBSdWxlVHlwZTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogUnVsZVNldHRpbmcpID0+IHZvaWQ7XG4gIHZhbHVlOiBSdWxlU2V0dGluZztcbiAgZW50aXRpZXNJbmZvOiBQaXBlTGluZUVudGl0aWVzSW5mbztcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVTZXR0aW5nc0VkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIHZhbHVlLCBydWxlVHlwZSwgZW50aXRpZXNJbmZvIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsPXt0cnVlfVxuICAgICAgICBrZXk9e3J1bGVUeXBlfVxuICAgICAgICBvcHRpb25zPXtlbnRpdGllc0luZm9bcnVsZVR5cGVdfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhbiBvcHRpb25cIlxuICAgICAgICB2YWx1ZT17dmFsdWU/LnR5cGUgPz8gJyd9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAvLyBzZXQgdGhlIGJvZHkgd2l0aCBleGFtcGxlXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBbdHlwZV06IGVudGl0aWVzSW5mby5nZXRFeGFtcGxlKHJ1bGVUeXBlLCB0eXBlKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Q29kZUVkaXRvclxuICAgICAgICBoZWlnaHQ9eyc1MHZoJ31cbiAgICAgICAgdmFsdWU9e3ZhbHVlID8gSlNPTi5zdHJpbmdpZnkodmFsdWVbdmFsdWUudHlwZV0sIG51bGwsICdcXHQnKSA6ICcnfVxuICAgICAgICBzaG93TGluZU51bWJlcnM9e3RydWV9XG4gICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICBvbkJsdXI9eyh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICB0eXBlOiB2YWx1ZS50eXBlLFxuICAgICAgICAgICAgW3ZhbHVlLnR5cGVdOiBib2R5LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIENvZGVFZGl0b3IsIFRhYmxlLCB1c2VTdHlsZXMsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ2hhbm5lbEZyYW1lLCBSdWxlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkYXRhRnJhbWVGcm9tSlNPTiwgZ2V0RGlzcGxheVByb2Nlc3NvciwgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGU6IFJ1bGU7XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlVGVzdDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8Q2hhbm5lbEZyYW1lW10+KCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgb25CbHVyID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIHNldERhdGEodGV4dCk7XG4gIH07XG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5wb3N0KGBhcGkvbGl2ZS9waXBlbGluZS1jb252ZXJ0LXRlc3RgLCB7XG4gICAgICAgIGNoYW5uZWxSdWxlczogW3Byb3BzLnJ1bGVdLFxuICAgICAgICBjaGFubmVsOiBwcm9wcy5ydWxlLnBhdHRlcm4sXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCB0ID0gZGF0YS5jaGFubmVsRnJhbWVzIGFzIGFueVtdO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgIHNldFJlc3BvbnNlKFxuICAgICAgICAgICAgdC5tYXAoKGYpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBkYXRhRnJhbWVGcm9tSlNPTihmLmZyYW1lKTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmcmFtZS5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5kaXNwbGF5ID0gZ2V0RGlzcGxheVByb2Nlc3Nvcih7IGZpZWxkLCB0aGVtZTogY29uZmlnLnRoZW1lMiB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4geyBjaGFubmVsOiBmLmNoYW5uZWwsIGZyYW1lIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgc2V0UmVzcG9uc2UoZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q29kZUVkaXRvclxuICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICBzaG93TGluZU51bWJlcnM9e3RydWV9XG4gICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIC8+XG5cbiAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cbiAgICAgICAgVGVzdFxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIHtyZXNwb25zZT8ubGVuZ3RoICYmXG4gICAgICAgIHJlc3BvbnNlLm1hcCgocikgPT4gKFxuICAgICAgICAgIDxGaWVsZCBrZXk9e3IuY2hhbm5lbH0gbGFiZWw9e3IuY2hhbm5lbH0+XG4gICAgICAgICAgICA8VGFibGUgZGF0YT17ci5mcmFtZX0gd2lkdGg9ezcwMH0gaGVpZ2h0PXtNYXRoLm1pbigxMCAqIHIuZnJhbWUubGVuZ3RoICsgMTAsIDE1MCl9IHNob3dUeXBlSWNvbnM+PC9UYWJsZT5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWFyZ2luOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUGlwZWxpbmVMaXN0T3B0aW9uLCBQaXBlTGluZUVudGl0aWVzSW5mbyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGlwZUxpbmVFbnRpdGllcygpOiBQcm9taXNlPFBpcGVMaW5lRW50aXRpZXNJbmZvPiB7XG4gIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KClcbiAgICAuZ2V0KGBhcGkvbGl2ZS9waXBlbGluZS1lbnRpdGllc2ApXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnZlcnRlcjogdHJhbnNmb3JtTGFiZWwoZGF0YSwgJ2NvbnZlcnRlcnMnKSxcbiAgICAgICAgZnJhbWVQcm9jZXNzb3JzOiB0cmFuc2Zvcm1MYWJlbChkYXRhLCAnZnJhbWVQcm9jZXNzb3JzJyksXG4gICAgICAgIGZyYW1lT3V0cHV0czogdHJhbnNmb3JtTGFiZWwoZGF0YSwgJ2ZyYW1lT3V0cHV0cycpLFxuICAgICAgICBnZXRFeGFtcGxlOiAocnVsZVR5cGUsIHR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YVtgJHtydWxlVHlwZX1zYF0/LmZpbHRlcigob3B0aW9uOiBQaXBlbGluZUxpc3RPcHRpb24pID0+IG9wdGlvbi50eXBlID09PSB0eXBlKT8uWzBdPy5bJ2V4YW1wbGUnXTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1MYWJlbChkYXRhOiBhbnksIGtleToga2V5b2YgdHlwZW9mIGRhdGEpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gZGF0YS5tYXAoKGQpID0+ICh7XG4gICAgICBsYWJlbDogZFtrZXldLFxuICAgICAgdmFsdWU6IGRba2V5XSxcbiAgICB9KSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFba2V5XS5tYXAoKHR5cGVPYmo6IFBpcGVsaW5lTGlzdE9wdGlvbikgPT4gKHtcbiAgICBsYWJlbDogdHlwZU9iai50eXBlLFxuICAgIHZhbHVlOiB0eXBlT2JqLnR5cGUsXG4gIH0pKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsImdldE5hdk1vZGVsIiwidXNlTmF2TW9kZWwiLCJpZCIsIm5hdkluZGV4Iiwic3RhdGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXQiLCJGaWVsZCIsIkJ1dHRvbiIsIlZhbHVlUGlja2VyIiwiSG9yaXpvbnRhbEdyb3VwIiwiRGF0YVNvdXJjZVBpY2tlciIsImdldEJhY2tlbmRTcnYiLCJMaXZlQ2hhbm5lbFNjb3BlIiwidXNlQXBwTm90aWZpY2F0aW9uIiwicGF0dGVyblR5cGVzIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwiQWRkTmV3UnVsZSIsIm9uUnVsZUFkZGVkIiwicGF0dGVyblR5cGUiLCJzZXRQYXR0ZXJuVHlwZSIsInBhdHRlcm4iLCJzZXRQYXR0ZXJuIiwicGF0dGVyblByZWZpeCIsInNldFBhdHRlcm5QcmVmaXgiLCJkYXRhc291cmNlIiwic2V0RGF0YXNvdXJjZSIsIm5vdGlmeUFwcCIsIm9uU3VibWl0IiwiZXJyb3IiLCJsZW5ndGgiLCJwb3N0Iiwic2V0dGluZ3MiLCJjb252ZXJ0ZXIiLCJ0eXBlIiwiZnJhbWVPdXRwdXRzIiwidGhlbiIsInYiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwicnVsZSIsImNhdGNoIiwiZSIsImlzSGFuZGxlZCIsImN1cnJlbnRUYXJnZXQiLCJkcyIsIkRhdGFTb3VyY2UiLCJ1aWQiLCJ1c2VFZmZlY3QiLCJQYWdlIiwiUGlwZWxpbmVUYWJsZSIsIlBpcGVsaW5lQWRtaW5QYWdlIiwicnVsZXMiLCJzZXRSdWxlcyIsImRlZmF1bHRSdWxlcyIsInNldERlZmF1bHRSdWxlcyIsIm5ld1J1bGUiLCJzZXROZXdSdWxlIiwibmF2TW9kZWwiLCJzZXRFcnJvciIsImxvYWRSdWxlcyIsImdldCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwib25TZWFyY2hRdWVyeUNoYW5nZSIsInRhcmdldCIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJyIiwiVGFnIiwidXNlU3R5bGVzIiwiSWNvbkJ1dHRvbiIsImNzcyIsIlJ1bGVNb2RhbCIsImdldERhdGFzb3VyY2VTcnYiLCJyZW5kZXJPdXRwdXRUYWdzIiwia2V5Iiwib3V0cHV0IiwicHJvcHMiLCJpc09wZW4iLCJzZXRPcGVuIiwic2VsZWN0ZWRSdWxlIiwic2V0U2VsZWN0ZWRSdWxlIiwiY2xpY2tDb2x1bW4iLCJzZXRDbGlja0NvbHVtbiIsInN0eWxlcyIsImdldFN0eWxlcyIsIm9uUm93Q2xpY2siLCJldmVudCIsImNvbHVtbiIsImdldEF0dHJpYnV0ZSIsInNlbGVjdFJ1bGUiLCJvblJlbW92ZVJ1bGUiLCJkZWxldGUiLCJmaW5hbGx5Iiwib25SdWxlQ2hhbmdlZCIsInJlbmRlclBhdHRlcm4iLCJzdGFydHNXaXRoIiwiaWR4IiwiaW5kZXhPZiIsInN1YnN0cmluZyIsImdldEluc3RhbmNlU2V0dGluZ3MiLCJuYW1lIiwid2lkdGgiLCJtYXAiLCJyb3ciLCJmcmFtZVByb2Nlc3NvcnMiLCJwcm9jZXNzb3IiLCJzdG9wUHJvcGFnYXRpb24iLCJ0aGVtZSIsInVzZU1lbW8iLCJNb2RhbCIsIlRhYkNvbnRlbnQiLCJUYWJzQmFyIiwiVGFiIiwiUnVsZVNldHRpbmdzRWRpdG9yIiwiZ2V0UGlwZUxpbmVFbnRpdGllcyIsIlJ1bGVTZXR0aW5nc0FycmF5IiwiUnVsZVRlc3QiLCJ0YWJzIiwiaXNDb252ZXJ0ZXIiLCJpc1Rlc3QiLCJpY29uIiwib25DbG9zZSIsInNldFJ1bGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJmaW5kIiwidCIsImhhc0NoYW5nZSIsInNldENoYW5nZSIsInJ1bGVTZXR0aW5nIiwic2V0UnVsZVNldHRpbmciLCJlbnRpdGllc0luZm8iLCJzZXRFbnRpdGllc0luZm8iLCJvblJ1bGVTZXR0aW5nQ2hhbmdlIiwib25TYXZlIiwicHV0IiwidGFiIiwiaW5kZXgiLCJzYXZlIiwiU2VsZWN0Iiwib25DaGFuZ2UiLCJydWxlVHlwZSIsInNldEluZGV4IiwiYXJyIiwib25SdWxlQ2hhbmdlIiwiY29weSIsImluZGV4QXJyIiwiaSIsInB1c2giLCJDb2RlRWRpdG9yIiwiZ2V0RXhhbXBsZSIsInRleHQiLCJib2R5IiwicGFyc2UiLCJUYWJsZSIsImNvbmZpZyIsImRhdGFGcmFtZUZyb21KU09OIiwiZ2V0RGlzcGxheVByb2Nlc3NvciIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJzZXREYXRhIiwib25CbHVyIiwib25DbGljayIsImNoYW5uZWxSdWxlcyIsImNoYW5uZWwiLCJjaGFubmVsRnJhbWVzIiwiZiIsImZyYW1lIiwiZmllbGQiLCJmaWVsZHMiLCJkaXNwbGF5IiwidGhlbWUyIiwibWFyZ2luIiwiTWF0aCIsIm1pbiIsInRyYW5zZm9ybUxhYmVsIiwib3B0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZCIsInR5cGVPYmoiXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["LibraryPanelsPage"],{

/***/ "./public/app/core/components/FolderFilter/FolderFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderFilter": () => (/* binding */ FolderFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;









function FolderFilter({
  onChange: propsOnChange,
  maxMenuHeight
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(searchString => getFoldersAsOptions(searchString, setLoading), []);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => debounce_promise__WEBPACK_IMPORTED_MODULE_2___default()(getOptions, 300), [getOptions]);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(folders => {
    const changedFolders = [];

    for (const folder of folders) {
      if (folder.value) {
        changedFolders.push(folder.value);
      }
    }

    propsOnChange(changedFolders);
    setValue(folders);
  }, [propsOnChange]);
  const selectOptions = {
    defaultOptions: true,
    isMulti: true,
    noOptionsMessage: 'No folders found',
    placeholder: 'Filter by folder',
    maxMenuHeight,
    value,
    onChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.container,
    children: [value.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      size: "xs",
      icon: "trash-alt",
      variant: "link",
      className: styles.clear,
      onClick: () => onChange([]),
      "aria-label": "Clear folders",
      children: "Clear folders"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AsyncMultiSelect, Object.assign({
      menuShouldPortal: true
    }, selectOptions, {
      isLoading: loading,
      loadOptions: debouncedLoadOptions,
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "filter"
      })),
      "aria-label": "Folder filter"
    }))]
  });
}

async function getFoldersAsOptions(searchString, setLoading) {
  setLoading(true);
  const params = {
    query: searchString,
    type: 'dash-folder',
    permission: app_types__WEBPACK_IMPORTED_MODULE_4__.PermissionLevelString.View
  };
  const searchHits = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().search(params);
  const options = searchHits.map(d => ({
    label: d.title,
    value: {
      id: d.id,
      title: d.title
    }
  }));

  if (!searchString || 'general'.includes(searchString.toLowerCase())) {
    options.unshift({
      label: 'General',
      value: {
        id: 0,
        title: 'General'
      }
    });
  }

  setLoading(false);
  return options;
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,
    clear: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      label: clear;
      font-size: ${theme.spacing(1.5)};
      position: absolute;
      top: -${theme.spacing(4.5)};
      right: 0;
    `
  };
}

/***/ }),

/***/ "./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelTypeFilter": () => (/* binding */ PanelTypeFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_panel_state_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/panel/state/util.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const PanelTypeFilter = ({
  onChange: propsOnChange,
  maxMenuHeight
}) => {
  const plugins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,app_features_panel_state_util__WEBPACK_IMPORTED_MODULE_1__.getAllPanelPluginMeta)();
  }, []);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => plugins.map(p => ({
    label: p.name,
    imgUrl: p.info.logos.small,
    value: p
  })).sort((a, b) => {
    var _a$label;

    return (_a$label = a.label) === null || _a$label === void 0 ? void 0 : _a$label.localeCompare(b.label);
  }), [plugins]);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(plugins => {
    const changedPlugins = [];

    for (const plugin of plugins) {
      if (plugin.value) {
        changedPlugins.push(plugin.value);
      }
    }

    propsOnChange(changedPlugins);
    setValue(plugins);
  }, [propsOnChange]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const selectOptions = {
    defaultOptions: true,
    getOptionLabel: i => i.label,
    getOptionValue: i => i.value,
    noOptionsMessage: 'No Panel types found',
    placeholder: 'Filter by type',
    maxMenuHeight,
    options,
    value,
    onChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [value.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      size: "xs",
      icon: "trash-alt",
      variant: "link",
      className: styles.clear,
      onClick: () => onChange([]),
      "aria-label": "Clear types",
      children: "Clear types"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
      menuShouldPortal: true
    }, selectOptions, {
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "filter"
      })),
      "aria-label": "Panel Type filter"
    }))]
  });
};

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,
    clear: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      label: clear;
      font-size: ${theme.spacing(1.5)};
      position: absolute;
      top: -${theme.spacing(4.5)};
      right: 0;
    `
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/LibraryPanelsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelsPage": () => (/* binding */ LibraryPanelsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");
/* harmony import */ var _components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__.getNavModel)(state.navIndex, 'library-panels')
});

const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, undefined);
const LibraryPanelsPage = ({
  navModel
}) => {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelsSearch, {
        onClick: setSelected,
        showSecondaryActions: true,
        showSort: true,
        showPanelFilter: true,
        showFolderFilter: true
      }), selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_5__.OpenLibraryPanelModal, {
        onDismiss: () => setSelected(undefined),
        libraryPanel: selected
      }) : null]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(LibraryPanelsPage));

/***/ }),

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/DeleteLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteLibraryPanelModal": () => (/* binding */ DeleteLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _LibraryPanelsView_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/actions.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingIndicator, _Confirm, _span, _thead;










const DeleteLibraryPanelModal = ({
  libraryPanel,
  onDismiss,
  onConfirm
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_6__.getModalStyles);
  const [{
    dashboardTitles,
    loadingState
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__.deleteLibraryPanelModalReducer, _reducer__WEBPACK_IMPORTED_MODULE_4__.initialDeleteLibraryPanelModalState);
  const asyncDispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_LibraryPanelsView_actions__WEBPACK_IMPORTED_MODULE_3__.asyncDispatcher)(dispatch), [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.getConnectedDashboards)(libraryPanel));
  }, [asyncDispatch, libraryPanel]);
  const connected = Boolean(dashboardTitles.length);
  const done = loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    className: styles.modal,
    title: "Delete library panel",
    icon: "trash-alt",
    onDismiss: onDismiss,
    isOpen: true,
    children: [!done ? _LoadingIndicator || (_LoadingIndicator = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(LoadingIndicator, {})) : null, done ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [connected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HasConnectedDashboards, {
        dashboardTitles: dashboardTitles
      }) : null, !connected ? _Confirm || (_Confirm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Confirm, {})) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          fill: "outline",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "destructive",
          onClick: onConfirm,
          disabled: connected,
          children: "Delete"
        })]
      })]
    }) : null]
  });
};

const LoadingIndicator = () => _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
  children: "Loading library panel..."
}));

const Confirm = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_6__.getModalStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: styles.modalText,
    children: "Do you want to delete this panel?"
  });
};

const HasConnectedDashboards = ({
  dashboardTitles
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_6__.getModalStyles);
  const suffix = dashboardTitles.length === 1 ? 'dashboard.' : 'dashboards.';
  const message = `${dashboardTitles.length} ${suffix}`;

  if (dashboardTitles.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
      className: styles.textInfo,
      children: ['This library panel can not be deleted because it is connected to ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
        children: message
      }), ' Remove the library panel from the dashboards listed below and retry.']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      className: styles.myTable,
      children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Dashboard name"
          })
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
        children: dashboardTitles.map((title, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
            children: title
          })
        }, `dash-title-${i}`))
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConnectedDashboards": () => (/* binding */ getConnectedDashboards)
/* harmony export */ });
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts");


function getConnectedDashboards(libraryPanel) {
  return async function (dispatch) {
    const dashboards = await (0,_state_api__WEBPACK_IMPORTED_MODULE_0__.getConnectedDashboards)(libraryPanel.uid);
    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)({
      dashboards
    }));
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteLibraryPanelModalReducer": () => (/* binding */ deleteLibraryPanelModalReducer),
/* harmony export */   "initialDeleteLibraryPanelModalState": () => (/* binding */ initialDeleteLibraryPanelModalState),
/* harmony export */   "searchCompleted": () => (/* binding */ searchCompleted)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-7692db070f/0/cache/@reduxjs-toolkit-npm-1.7.2-7ced4ba4dc-41c17c660f.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


const initialDeleteLibraryPanelModalState = {
  loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
  dashboardTitles: []
};
const searchCompleted = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/delete/searchCompleted');
const deleteLibraryPanelModalReducer = (state = initialDeleteLibraryPanelModalState, action) => {
  if (searchCompleted.match(action)) {
    return Object.assign({}, state, {
      dashboardTitles: action.payload.dashboards.map(d => d.title),
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
    });
  }

  return state;
};

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelCard": () => (/* binding */ LibraryPanelCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_panel_components_VizTypePicker_PanelTypeCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx");
/* harmony import */ var _DeleteLibraryPanelModal_DeleteLibraryPanelModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/DeleteLibraryPanelModal.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_panel_components_PanelPluginError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/panel/components/PanelPluginError.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2;











const LibraryPanelCard = ({
  libraryPanel,
  onClick,
  onDelete,
  showSecondaryActions
}) => {
  var _config$panels$librar;

  const [showDeletionModal, setShowDeletionModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onDeletePanel = () => {
    onDelete === null || onDelete === void 0 ? void 0 : onDelete(libraryPanel);
    setShowDeletionModal(false);
  };

  const panelPlugin = (_config$panels$librar = _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.panels[libraryPanel.model.type]) !== null && _config$panels$librar !== void 0 ? _config$panels$librar : (0,app_features_panel_components_PanelPluginError__WEBPACK_IMPORTED_MODULE_6__.getPanelPluginNotFound)(libraryPanel.model.type).meta;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_features_panel_components_VizTypePicker_PanelTypeCard__WEBPACK_IMPORTED_MODULE_3__.PanelTypeCard, {
      isCurrent: false,
      title: libraryPanel.name,
      description: libraryPanel.description,
      plugin: panelPlugin,
      onClick: () => onClick === null || onClick === void 0 ? void 0 : onClick(libraryPanel),
      onDelete: showSecondaryActions ? () => setShowDeletionModal(true) : undefined,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(FolderLink, {
        libraryPanel: libraryPanel
      })
    }), showDeletionModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DeleteLibraryPanelModal_DeleteLibraryPanelModal__WEBPACK_IMPORTED_MODULE_4__.DeleteLibraryPanelModal, {
      libraryPanel: libraryPanel,
      onConfirm: onDeletePanel,
      onDismiss: () => setShowDeletionModal(false)
    })]
  });
};

function FolderLink({
  libraryPanel
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (!libraryPanel.meta.folderUid && !libraryPanel.meta.folderName) {
    return null;
  }

  if (!libraryPanel.meta.folderUid) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      className: styles.metaContainer,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: 'folder',
        size: "sm"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: libraryPanel.meta.folderName
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
    className: styles.metaContainer,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
      href: `/dashboards/f/${libraryPanel.meta.folderUid}`,
      children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: 'folder-upload',
        size: "sm"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: libraryPanel.meta.folderName
      })]
    })
  });
}

function getStyles(theme) {
  return {
    metaContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      align-items: center;
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      padding-top: ${theme.spacing(0.5)};

      svg {
        margin-right: ${theme.spacing(0.5)};
        margin-bottom: 3px;
      }
    `
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelsSearch": () => (/* binding */ LibraryPanelsSearch),
/* harmony export */   "LibraryPanelsSearchVariant": () => (/* binding */ LibraryPanelsSearchVariant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Select/SortPicker.tsx");
/* harmony import */ var _core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx");
/* harmony import */ var _LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/FolderFilter/FolderFilter.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/reducer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











let LibraryPanelsSearchVariant;

(function (LibraryPanelsSearchVariant) {
  LibraryPanelsSearchVariant["Tight"] = "tight";
  LibraryPanelsSearchVariant["Spacious"] = "spacious";
})(LibraryPanelsSearchVariant || (LibraryPanelsSearchVariant = {}));

const LibraryPanelsSearch = ({
  onClick,
  variant = LibraryPanelsSearchVariant.Spacious,
  currentPanelId,
  currentFolderId,
  perPage = _core_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_PER_PAGE_PAGINATION,
  showPanelFilter = false,
  showFolderFilter = false,
  showSort = false,
  showSecondaryActions = false
}) => {
  var _FilterInput, _LibraryPanelsView;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const [{
    sortDirection,
    panelFilter,
    folderFilter,
    searchQuery
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_8__.libraryPanelsSearchReducer, Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_8__.initialLibraryPanelsSearchState, {
    folderFilter: currentFolderId ? [currentFolderId.toString(10)] : []
  }));

  const onFilterChange = searchString => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.searchChanged)(searchString));

  const onSortChange = sorting => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.sortChanged)(sorting));

  const onFolderFilterChange = folders => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.folderFilterChanged)(folders));

  const onPanelFilterChange = plugins => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.panelFilterChanged)(plugins));

  if (variant === LibraryPanelsSearchVariant.Spacious) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.VerticalGroup, {
        spacing: "lg",
        children: [_FilterInput || (_FilterInput = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
          value: searchQuery,
          onChange: onFilterChange,
          placeholder: 'Search by name or description',
          width: 0
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.buttonRow,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
            spacing: "sm",
            justify: showSort && showPanelFilter || showFolderFilter ? 'space-between' : 'flex-end',
            children: [showSort && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_3__.SortPicker, {
              value: sortDirection,
              onChange: onSortChange,
              filter: ['alpha-asc', 'alpha-desc']
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
              spacing: "sm",
              justify: showFolderFilter && showPanelFilter ? 'space-between' : 'flex-end',
              children: [showFolderFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_7__.FolderFilter, {
                onChange: onFolderFilterChange
              }), showPanelFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__.PanelTypeFilter, {
                onChange: onPanelFilterChange
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.libraryPanelsView,
          children: _LibraryPanelsView || (_LibraryPanelsView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_5__.LibraryPanelsView, {
            onClickCard: onClick,
            searchString: searchQuery,
            sortDirection: sortDirection,
            panelFilter: panelFilter,
            folderFilter: folderFilter,
            currentPanelId: currentPanelId,
            showSecondaryActions: showSecondaryActions,
            perPage: perPage
          }))
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.VerticalGroup, {
      spacing: "xs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: styles.tightButtonRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.tightFilter,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
            value: searchQuery,
            onChange: onFilterChange,
            placeholder: 'Search by name',
            width: 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: styles.tightSortFilter,
          children: [showSort && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_3__.SortPicker, {
            value: sortDirection,
            onChange: onSortChange
          }), showFolderFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_7__.FolderFilter, {
            onChange: onFolderFilterChange,
            maxMenuHeight: 200
          }), showPanelFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__.PanelTypeFilter, {
            onChange: onPanelFilterChange,
            maxMenuHeight: 200
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: styles.libraryPanelsView,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_5__.LibraryPanelsView, {
          onClickCard: onClick,
          searchString: searchQuery,
          sortDirection: sortDirection,
          panelFilter: panelFilter,
          folderFilter: folderFilter,
          currentPanelId: currentPanelId,
          showSecondaryActions: showSecondaryActions,
          perPage: perPage
        })
      })]
    })
  });
};

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      width: 100%;
      overflow-y: auto;
      padding: ${theme.spacing(1)};
    `,
    buttonRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${theme.spacing(2)}; // Clear types link
    `,
    tightButtonRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${theme.spacing(4)}; // Clear types link
    `,
    tightFilter: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      flex-grow: 1;
    `,
    tightSortFilter: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      flex-grow: 1;
      padding: ${theme.spacing(0, 0, 0, 0.5)};
    `,
    libraryPanelsView: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      width: 100%;
    `
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsSearch/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "folderFilterChanged": () => (/* binding */ folderFilterChanged),
/* harmony export */   "initialLibraryPanelsSearchState": () => (/* binding */ initialLibraryPanelsSearchState),
/* harmony export */   "libraryPanelsSearchReducer": () => (/* binding */ libraryPanelsSearchReducer),
/* harmony export */   "panelFilterChanged": () => (/* binding */ panelFilterChanged),
/* harmony export */   "searchChanged": () => (/* binding */ searchChanged),
/* harmony export */   "sortChanged": () => (/* binding */ sortChanged)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-7692db070f/0/cache/@reduxjs-toolkit-npm-1.7.2-7ced4ba4dc-41c17c660f.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialLibraryPanelsSearchState = {
  searchQuery: '',
  panelFilter: [],
  folderFilter: [],
  sortDirection: undefined
};
const searchChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/searchChanged');
const sortChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/sortChanged');
const panelFilterChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/panelFilterChanged');
const folderFilterChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/folderFilterChanged');
const libraryPanelsSearchReducer = (state, action) => {
  if (searchChanged.match(action)) {
    return Object.assign({}, state, {
      searchQuery: action.payload
    });
  }

  if (sortChanged.match(action)) {
    return Object.assign({}, state, {
      sortDirection: action.payload.value
    });
  }

  if (panelFilterChanged.match(action)) {
    return Object.assign({}, state, {
      panelFilter: action.payload.map(p => p.id)
    });
  }

  if (folderFilterChanged.match(action)) {
    return Object.assign({}, state, {
      folderFilter: action.payload.map(f => String(f.id))
    });
  }

  return state;
};

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelsView": () => (/* binding */ LibraryPanelsView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;











const LibraryPanelsView = ({
  className,
  onClickCard,
  searchString,
  sortDirection,
  panelFilter,
  folderFilter,
  showSecondaryActions,
  currentPanelId: currentPanel,
  perPage: propsPerPage = 40
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getPanelViewStyles);
  const [{
    libraryPanels,
    page,
    perPage,
    numberOfPages,
    loadingState,
    currentPanelId
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_5__.libraryPanelsViewReducer, Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_5__.initialLibraryPanelsViewState, {
    currentPanelId: currentPanel,
    perPage: propsPerPage
  }));
  const asyncDispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_actions__WEBPACK_IMPORTED_MODULE_6__.asyncDispatcher)(dispatch), [dispatch]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(() => asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_6__.searchForLibraryPanels)({
    searchString,
    sortDirection,
    panelFilter,
    folderFilter,
    page,
    perPage,
    currentPanelId
  })), 300, [searchString, sortDirection, panelFilter, folderFilter, page, asyncDispatch]);

  const onDelete = ({
    uid
  }) => asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_6__.deleteLibraryPanel)(uid, {
    searchString,
    page,
    perPage
  }));

  const onPageChange = page => asyncDispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_5__.changePage)({
    page
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.libraryPanelList,
      children: loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading ? _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        children: "Loading library panels..."
      })) : libraryPanels.length < 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: styles.noPanelsFound,
        children: "No library panels found."
      }) : libraryPanels === null || libraryPanels === void 0 ? void 0 : libraryPanels.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelCard, {
        libraryPanel: item,
        onDelete: onDelete,
        onClick: onClickCard,
        showSecondaryActions: showSecondaryActions
      }, `library-panel=${i}`))
    }), libraryPanels.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.pagination,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
        currentPage: page,
        numberOfPages: numberOfPages,
        onNavigate: onPageChange,
        hideWhenSinglePage: true
      })
    }) : null]
  });
};

const getPanelViewStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,
    libraryPanelList: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${theme.spacing.sm};
    `,
    searchHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
    `,
    newPanelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-top: 10px;
      align-self: flex-start;
    `,
    pagination: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      align-self: center;
      margin-top: ${theme.spacing.sm};
    `,
    noPanelsFound: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      label: noPanelsFound;
      min-height: 200px;
    `
  };
};

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncDispatcher": () => (/* binding */ asyncDispatcher),
/* harmony export */   "deleteLibraryPanel": () => (/* binding */ deleteLibraryPanel),
/* harmony export */   "searchForLibraryPanels": () => (/* binding */ searchForLibraryPanels)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/timer.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");




function searchForLibraryPanels(args) {
  return function (dispatch) {
    const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    const dataObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_state_api__WEBPACK_IMPORTED_MODULE_0__.getLibraryPanels)({
      searchString: args.searchString,
      perPage: args.perPage,
      page: args.page,
      excludeUid: args.currentPanelId,
      sortDirection: args.sortDirection,
      typeFilter: args.panelFilter,
      folderFilter: args.folderFilter
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(({
      perPage,
      elements: libraryPanels,
      page,
      totalCount
    }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)({
      libraryPanels,
      page,
      perPage,
      totalCount
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.error(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)(Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_1__.initialLibraryPanelsViewState, {
        page: args.page,
        perPage: args.perPage
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => subscription.unsubscribe()), // make sure we unsubscribe
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());
    subscription.add( // If 50ms without a response dispatch a loading state
    // mapTo will translate the timer event into a loading state
    // takeUntil will cancel the timer emit when first response is received on the dataObservable
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(50).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.initSearch)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(dataObservable)), dataObservable).subscribe(dispatch));
  };
}
function deleteLibraryPanel(uid, args) {
  return async function (dispatch) {
    try {
      await (0,_state_api__WEBPACK_IMPORTED_MODULE_0__.deleteLibraryPanel)(uid);
      searchForLibraryPanels(args)(dispatch);
    } catch (e) {
      console.error(e);
    }
  };
}
function asyncDispatcher(dispatch) {
  return function (action) {
    if (action instanceof Function) {
      return action(dispatch);
    }

    return dispatch(action);
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePage": () => (/* binding */ changePage),
/* harmony export */   "initSearch": () => (/* binding */ initSearch),
/* harmony export */   "initialLibraryPanelsViewState": () => (/* binding */ initialLibraryPanelsViewState),
/* harmony export */   "libraryPanelsViewReducer": () => (/* binding */ libraryPanelsViewReducer),
/* harmony export */   "searchCompleted": () => (/* binding */ searchCompleted)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-7692db070f/0/cache/@reduxjs-toolkit-npm-1.7.2-7ced4ba4dc-41c17c660f.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");


const initialLibraryPanelsViewState = {
  loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
  libraryPanels: [],
  totalCount: 0,
  perPage: 40,
  page: 1,
  numberOfPages: 0,
  currentPanelId: undefined
};
const initSearch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/initSearch');
const searchCompleted = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/searchCompleted');
const changePage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/changePage');
const libraryPanelsViewReducer = (state, action) => {
  if (initSearch.match(action)) {
    return Object.assign({}, state, {
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading
    });
  }

  if (searchCompleted.match(action)) {
    const {
      libraryPanels,
      page,
      perPage,
      totalCount
    } = action.payload;
    const numberOfPages = Math.ceil(totalCount / perPage);
    return Object.assign({}, state, {
      libraryPanels,
      perPage,
      totalCount,
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
      numberOfPages,
      page: page > numberOfPages ? page - 1 : page
    });
  }

  if (changePage.match(action)) {
    return Object.assign({}, state, {
      page: action.payload.page
    });
  }

  return state;
};

/***/ }),

/***/ "./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenLibraryPanelModal": () => (/* binding */ OpenLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











function OpenLibraryPanelModal({
  libraryPanel,
  onDismiss
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [option, setOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getConnected = async () => {
      const connectedDashboards = await (0,_state_api__WEBPACK_IMPORTED_MODULE_5__.getLibraryPanelConnectedDashboards)(libraryPanel.uid);
      setConnected(connectedDashboards.length);
    };

    getConnected();
  }, [libraryPanel.uid]);
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(searchString => loadOptionsAsync(libraryPanel.uid, searchString, setLoading), [libraryPanel.uid]);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_6__.debounce)(loadOptions, 300, {
    leading: true,
    trailing: true
  }), [loadOptions]);

  const onViewPanel = e => {
    var _option$value;

    e.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`/d/${option === null || option === void 0 ? void 0 : (_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.uid}`, {}));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: "View panel in dashboard",
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    isOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.container,
      children: [connected === 0 ? _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: "Panel is not linked to a dashboard. Add the panel to a dashboard and retry."
      })) : null, connected > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
          children: ["This panel is being used in", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("strong", {
            children: [connected, " ", connected > 1 ? 'dashboards' : 'dashboard']
          }), ".Please choose which dashboard to view the panel in:"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AsyncSelect, {
          menuShouldPortal: true,
          isClearable: true,
          isLoading: loading,
          defaultOptions: true,
          loadOptions: debouncedLoadOptions,
          onChange: setOption,
          placeholder: "Start typing to search for dashboard",
          noOptionsMessage: "No dashboards found"
        })]
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal.ButtonRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        onClick: onDismiss,
        fill: "outline",
        children: "Cancel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: onViewPanel,
        disabled: !Boolean(option),
        children: option ? `View panel in ${option === null || option === void 0 ? void 0 : option.label}...` : 'View panel in dashboard...'
      })]
    })]
  });
}

async function loadOptionsAsync(uid, searchString, setLoading) {
  setLoading(true);
  const searchHits = await (0,_state_api__WEBPACK_IMPORTED_MODULE_5__.getConnectedDashboards)(uid);
  const options = searchHits.filter(d => d.title.toLowerCase().includes(searchString.toLowerCase())).map(d => ({
    label: d.title,
    value: d
  }));
  setLoading(false);
  return options;
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css``
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getModalStyles": () => (/* binding */ getModalStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

function getModalStyles(theme) {
  return {
    myTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${theme.border.radius.sm};
      border: 1px solid ${theme.colors.bg3};
      background: ${theme.colors.bg1};
      color: ${theme.colors.textSemiWeak};
      font-size: ${theme.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${theme.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${theme.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${theme.colors.bg2};
      }
    `,
    noteTextbox: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.xl};
    `,
    textInfo: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.textSemiWeak};
      font-size: ${theme.typography.size.sm};
    `,
    dashboardSearch: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing.md};
    `,
    modal: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 500px;
    `,
    modalText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.heading.h4};
      color: ${theme.colors.link};
      margin-bottom: calc(${theme.spacing.d} * 2);
      padding-top: ${theme.spacing.d};
    `
  };
}

/***/ }),

/***/ "./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelTypeCard": () => (/* binding */ PanelTypeCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const PanelTypeCard = ({
  isCurrent,
  title,
  plugin,
  onClick,
  onDelete,
  disabled,
  showBadge,
  description,
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const cssClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.cx)({
    [styles.item]: true,
    [styles.disabled]: disabled || plugin.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.deprecated,
    [styles.current]: isCurrent
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: cssClass,
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.PluginVisualization.item(plugin.name),
    onClick: disabled ? undefined : onClick,
    title: isCurrent ? 'Click again to close this section' : plugin.name,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
      className: styles.img,
      src: plugin.info.logos.small,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.itemContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: styles.name,
        children: title
      }), description ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: styles.description,
        children: description
      }) : null, children]
    }), showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.cx)(styles.badge, disabled && styles.disabled),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PanelPluginBadge, {
        plugin: plugin
      })
    }), onDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
      name: "trash-alt",
      onClick: e => {
        e.stopPropagation();
        onDelete();
      },
      className: styles.deleteButton,
      "aria-label": "Delete button on panel type card"
    })]
  });
};
PanelTypeCard.displayName = 'PanelTypeCard';

const getStyles = theme => {
  return {
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
      box-shadow: ${theme.shadows.z1};
      border: 1px solid ${theme.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${theme.transitions.create(['background'], {
      duration: theme.transitions.duration.short
    })};

      &:hover {
        background: ${theme.colors.emphasize(theme.colors.background.secondary, 0.03)};
      }
    `,
    itemContent: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      overflow: hidden;
      position: relative;
      padding: ${theme.spacing(0, 1)};
    `,
    current: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      label: currentVisualizationItem;
      border: 1px solid ${theme.colors.primary.border};
      background: ${theme.colors.action.selected};
    `,
    disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,
    name: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.fontWeightMedium};
      width: 100%;
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      font-weight: ${theme.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,
    img: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,
    badge: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      background: ${theme.colors.background.primary};
    `,
    deleteButton: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-left: auto;
    `
  };
};

const PanelPluginBadge = ({
  plugin
}) => {
  if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.isUnsignedPluginSignature)(plugin.signature)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureBadge, {
      status: plugin.signature
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_5__.PluginStateInfo, {
    state: plugin.state
  });
};

PanelPluginBadge.displayName = 'PanelPluginBadge';

/***/ }),

/***/ "./public/app/features/panel/state/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterPluginList": () => (/* binding */ filterPluginList),
/* harmony export */   "getAllPanelPluginMeta": () => (/* binding */ getAllPanelPluginMeta)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");


function getAllPanelPluginMeta() {
  const allPanels = app_core_config__WEBPACK_IMPORTED_MODULE_1__.config.panels;
  return Object.keys(allPanels).filter(key => allPanels[key]['hideFromList'] === false).map(key => allPanels[key]).sort((a, b) => a.sort - b.sort);
}
function filterPluginList(pluginsList, searchQuery, // Note: this will be an escaped regex string as it comes from `FilterInput`
current) {
  if (!searchQuery.length) {
    return pluginsList.filter(p => {
      if (p.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginState.deprecated) {
        return current.id === p.id;
      }

      return true;
    });
  }

  const query = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.unEscapeStringFromRegex)(searchQuery).toLowerCase();
  const first = [];
  const match = [];
  const isGraphQuery = 'graph'.startsWith(query);

  for (const item of pluginsList) {
    if (item.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginState.deprecated && current.id !== item.id) {
      continue;
    }

    const name = item.name.toLowerCase();
    const idx = name.indexOf(query);

    if (idx === 0) {
      first.push(item);
    } else if (idx > 0) {
      match.push(item);
    } else if (isGraphQuery && item.id === 'timeseries') {
      first.push(item);
    }
  }

  return first.concat(match);
}

/***/ }),

/***/ "./public/app/features/plugins/components/PluginStateInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginStateInfo": () => (/* binding */ PluginStateInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const PluginStateInfo = props => {
  const display = getFeatureStateInfo(props.state);

  if (!display) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
    color: display.color,
    title: display.tooltip,
    text: display.text,
    icon: display.icon
  });
};

function getFeatureStateInfo(state) {
  switch (state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.deprecated:
      return {
        text: 'Deprecated',
        color: 'red',
        tooltip: `This feature is deprecated and will be removed in a future release`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.alpha:
      return {
        text: 'Alpha',
        color: 'blue',
        tooltip: `This feature is experimental and future updates might not be backward compatible`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.beta:
      return {
        text: 'Beta',
        color: 'blue',
        tooltip: `This feature is close to complete but not fully tested`
      };

    default:
      return null;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUtyRCwyREFBTDtBQUNFLGFBQU87QUFDTG5JLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUx1TCxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGO0FBQ0UsYUFBTyxJQUFQO0FBcEJKO0FBc0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0ZvbGRlckZpbHRlci9Gb2xkZXJGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QYW5lbFR5cGVGaWx0ZXIvUGFuZWxUeXBlRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9MaWJyYXJ5UGFuZWxzUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbENhcmQvTGlicmFyeVBhbmVsQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzU2VhcmNoL0xpYnJhcnlQYW5lbHNTZWFyY2gudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1NlYXJjaC9yZWR1Y2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1ZpZXcvTGlicmFyeVBhbmVsc1ZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1ZpZXcvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNWaWV3L3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9PcGVuTGlicmFyeVBhbmVsTW9kYWwvT3BlbkxpYnJhcnlQYW5lbE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGFuZWwvY29tcG9uZW50cy9WaXpUeXBlUGlja2VyL1BhbmVsVHlwZUNhcmQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BhbmVsL3N0YXRlL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9jb21wb25lbnRzL1BsdWdpblN0YXRlSW5mby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnZGVib3VuY2UtcHJvbWlzZSc7XG5pbXBvcnQgeyBBc3luY011bHRpU2VsZWN0LCBJY29uLCBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRm9sZGVySW5mbywgUGVybWlzc2lvbkxldmVsU3RyaW5nIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sZGVyRmlsdGVyUHJvcHMge1xuICBvbkNoYW5nZTogKGZvbGRlcjogRm9sZGVySW5mb1tdKSA9PiB2b2lkO1xuICBtYXhNZW51SGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9sZGVyRmlsdGVyKHsgb25DaGFuZ2U6IHByb3BzT25DaGFuZ2UsIG1heE1lbnVIZWlnaHQgfTogRm9sZGVyRmlsdGVyUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBnZXRPcHRpb25zID0gdXNlQ2FsbGJhY2soKHNlYXJjaFN0cmluZzogc3RyaW5nKSA9PiBnZXRGb2xkZXJzQXNPcHRpb25zKHNlYXJjaFN0cmluZywgc2V0TG9hZGluZyksIFtdKTtcbiAgY29uc3QgZGVib3VuY2VkTG9hZE9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IGRlYm91bmNlKGdldE9wdGlvbnMsIDMwMCksIFtnZXRPcHRpb25zXSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPEZvbGRlckluZm8+Pj4oW10pO1xuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChmb2xkZXJzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8Rm9sZGVySW5mbz4+KSA9PiB7XG4gICAgICBjb25zdCBjaGFuZ2VkRm9sZGVycyA9IFtdO1xuICAgICAgZm9yIChjb25zdCBmb2xkZXIgb2YgZm9sZGVycykge1xuICAgICAgICBpZiAoZm9sZGVyLnZhbHVlKSB7XG4gICAgICAgICAgY2hhbmdlZEZvbGRlcnMucHVzaChmb2xkZXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcm9wc09uQ2hhbmdlKGNoYW5nZWRGb2xkZXJzKTtcbiAgICAgIHNldFZhbHVlKGZvbGRlcnMpO1xuICAgIH0sXG4gICAgW3Byb3BzT25DaGFuZ2VdXG4gICk7XG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSB7XG4gICAgZGVmYXVsdE9wdGlvbnM6IHRydWUsXG4gICAgaXNNdWx0aTogdHJ1ZSxcbiAgICBub09wdGlvbnNNZXNzYWdlOiAnTm8gZm9sZGVycyBmb3VuZCcsXG4gICAgcGxhY2Vob2xkZXI6ICdGaWx0ZXIgYnkgZm9sZGVyJyxcbiAgICBtYXhNZW51SGVpZ2h0LFxuICAgIHZhbHVlLFxuICAgIG9uQ2hhbmdlLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAge3ZhbHVlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoW10pfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbGVhciBmb2xkZXJzXCJcbiAgICAgICAgPlxuICAgICAgICAgIENsZWFyIGZvbGRlcnNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgICAgPEFzeW5jTXVsdGlTZWxlY3RcbiAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICB7Li4uc2VsZWN0T3B0aW9uc31cbiAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkTG9hZE9wdGlvbnN9XG4gICAgICAgIHByZWZpeD17PEljb24gbmFtZT1cImZpbHRlclwiIC8+fVxuICAgICAgICBhcmlhLWxhYmVsPVwiRm9sZGVyIGZpbHRlclwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb2xkZXJzQXNPcHRpb25zKHNlYXJjaFN0cmluZzogc3RyaW5nLCBzZXRMb2FkaW5nOiAobG9hZGluZzogYm9vbGVhbikgPT4gdm9pZCkge1xuICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBxdWVyeTogc2VhcmNoU3RyaW5nLFxuICAgIHR5cGU6ICdkYXNoLWZvbGRlcicsXG4gICAgcGVybWlzc2lvbjogUGVybWlzc2lvbkxldmVsU3RyaW5nLlZpZXcsXG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoSGl0cyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5zZWFyY2gocGFyYW1zKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlYXJjaEhpdHMubWFwKChkKSA9PiAoeyBsYWJlbDogZC50aXRsZSwgdmFsdWU6IHsgaWQ6IGQuaWQsIHRpdGxlOiBkLnRpdGxlIH0gfSkpO1xuICBpZiAoIXNlYXJjaFN0cmluZyB8fCAnZ2VuZXJhbCcuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgb3B0aW9ucy51bnNoaWZ0KHsgbGFiZWw6ICdHZW5lcmFsJywgdmFsdWU6IHsgaWQ6IDAsIHRpdGxlOiAnR2VuZXJhbCcgfSB9KTtcbiAgfVxuXG4gIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGxhYmVsOiBjb250YWluZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gICAgY2xlYXI6IGNzc2BcbiAgICAgIGxhYmVsOiBjbGVhcjtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5zcGFjaW5nKDEuNSl9O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtJHt0aGVtZS5zcGFjaW5nKDQuNSl9O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQYW5lbFBsdWdpbk1ldGEsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QWxsUGFuZWxQbHVnaW5NZXRhIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BhbmVsL3N0YXRlL3V0aWwnO1xuaW1wb3J0IHsgSWNvbiwgQnV0dG9uLCBNdWx0aVNlbGVjdCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHBsdWdpbnM6IFBhbmVsUGx1Z2luTWV0YVtdKSA9PiB2b2lkO1xuICBtYXhNZW51SGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxUeXBlRmlsdGVyID0gKHsgb25DaGFuZ2U6IHByb3BzT25DaGFuZ2UsIG1heE1lbnVIZWlnaHQgfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHBsdWdpbnMgPSB1c2VNZW1vPFBhbmVsUGx1Z2luTWV0YVtdPigoKSA9PiB7XG4gICAgcmV0dXJuIGdldEFsbFBhbmVsUGx1Z2luTWV0YSgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBwbHVnaW5zXG4gICAgICAgIC5tYXAoKHApID0+ICh7IGxhYmVsOiBwLm5hbWUsIGltZ1VybDogcC5pbmZvLmxvZ29zLnNtYWxsLCB2YWx1ZTogcCB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubGFiZWw/LmxvY2FsZUNvbXBhcmUoYi5sYWJlbCkpLFxuICAgIFtwbHVnaW5zXVxuICApO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxQYW5lbFBsdWdpbk1ldGE+Pj4oW10pO1xuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChwbHVnaW5zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8UGFuZWxQbHVnaW5NZXRhPj4pID0+IHtcbiAgICAgIGNvbnN0IGNoYW5nZWRQbHVnaW5zID0gW107XG4gICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgICAgIGlmIChwbHVnaW4udmFsdWUpIHtcbiAgICAgICAgICBjaGFuZ2VkUGx1Z2lucy5wdXNoKHBsdWdpbi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb3BzT25DaGFuZ2UoY2hhbmdlZFBsdWdpbnMpO1xuICAgICAgc2V0VmFsdWUocGx1Z2lucyk7XG4gICAgfSxcbiAgICBbcHJvcHNPbkNoYW5nZV1cbiAgKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSB7XG4gICAgZGVmYXVsdE9wdGlvbnM6IHRydWUsXG4gICAgZ2V0T3B0aW9uTGFiZWw6IChpOiBhbnkpID0+IGkubGFiZWwsXG4gICAgZ2V0T3B0aW9uVmFsdWU6IChpOiBhbnkpID0+IGkudmFsdWUsXG4gICAgbm9PcHRpb25zTWVzc2FnZTogJ05vIFBhbmVsIHR5cGVzIGZvdW5kJyxcbiAgICBwbGFjZWhvbGRlcjogJ0ZpbHRlciBieSB0eXBlJyxcbiAgICBtYXhNZW51SGVpZ2h0LFxuICAgIG9wdGlvbnMsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7dmFsdWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGVhcn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbXSl9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyIHR5cGVzXCJcbiAgICAgICAgPlxuICAgICAgICAgIENsZWFyIHR5cGVzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICAgIDxNdWx0aVNlbGVjdCBtZW51U2hvdWxkUG9ydGFsIHsuLi5zZWxlY3RPcHRpb25zfSBwcmVmaXg9ezxJY29uIG5hbWU9XCJmaWx0ZXJcIiAvPn0gYXJpYS1sYWJlbD1cIlBhbmVsIFR5cGUgZmlsdGVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgbGFiZWw6IGNvbnRhaW5lcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYCxcbiAgICBjbGVhcjogY3NzYFxuICAgICAgbGFiZWw6IGNsZWFyO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnNwYWNpbmcoMS41KX07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0ke3RoZW1lLnNwYWNpbmcoNC41KX07XG4gICAgICByaWdodDogMDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IExpYnJhcnlQYW5lbHNTZWFyY2ggfSBmcm9tICcuL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1NlYXJjaC9MaWJyYXJ5UGFuZWxzU2VhcmNoJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBPcGVuTGlicmFyeVBhbmVsTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvT3BlbkxpYnJhcnlQYW5lbE1vZGFsL09wZW5MaWJyYXJ5UGFuZWxNb2RhbCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnbGlicmFyeS1wYW5lbHMnKSxcbn0pO1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgdW5kZWZpbmVkKTtcblxuaW50ZXJmYWNlIE93blByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMge31cblxudHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBjb25zdCBMaWJyYXJ5UGFuZWxzUGFnZTogRkM8UHJvcHM+ID0gKHsgbmF2TW9kZWwgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPExpYnJhcnlFbGVtZW50RFRPIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8TGlicmFyeVBhbmVsc1NlYXJjaCBvbkNsaWNrPXtzZXRTZWxlY3RlZH0gc2hvd1NlY29uZGFyeUFjdGlvbnMgc2hvd1NvcnQgc2hvd1BhbmVsRmlsdGVyIHNob3dGb2xkZXJGaWx0ZXIgLz5cbiAgICAgICAge3NlbGVjdGVkID8gPE9wZW5MaWJyYXJ5UGFuZWxNb2RhbCBvbkRpc21pc3M9eygpID0+IHNldFNlbGVjdGVkKHVuZGVmaW5lZCl9IGxpYnJhcnlQYW5lbD17c2VsZWN0ZWR9IC8+IDogbnVsbH1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlicmFyeVBhbmVsc1BhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBhc3luY0Rpc3BhdGNoZXIgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxzVmlldy9hY3Rpb25zJztcbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciwgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRNb2RhbFN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWw6IEZDPFByb3BzPiA9ICh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzLCBvbkNvbmZpcm0gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBbeyBkYXNoYm9hcmRUaXRsZXMsIGxvYWRpbmdTdGF0ZSB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlcixcbiAgICBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luY0Rpc3BhdGNoKGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsKSk7XG4gIH0sIFthc3luY0Rpc3BhdGNoLCBsaWJyYXJ5UGFuZWxdKTtcbiAgY29uc3QgY29ubmVjdGVkID0gQm9vbGVhbihkYXNoYm9hcmRUaXRsZXMubGVuZ3RoKTtcbiAgY29uc3QgZG9uZSA9IGxvYWRpbmdTdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkRvbmU7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHRpdGxlPVwiRGVsZXRlIGxpYnJhcnkgcGFuZWxcIiBpY29uPVwidHJhc2gtYWx0XCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IGlzT3Blbj17dHJ1ZX0+XG4gICAgICB7IWRvbmUgPyA8TG9hZGluZ0luZGljYXRvciAvPiA6IG51bGx9XG4gICAgICB7ZG9uZSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29ubmVjdGVkID8gPEhhc0Nvbm5lY3RlZERhc2hib2FyZHMgZGFzaGJvYXJkVGl0bGVzPXtkYXNoYm9hcmRUaXRsZXN9IC8+IDogbnVsbH1cbiAgICAgICAgICB7IWNvbm5lY3RlZCA/IDxDb25maXJtIC8+IDogbnVsbH1cblxuICAgICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e29uQ29uZmlybX0gZGlzYWJsZWQ9e2Nvbm5lY3RlZH0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IExvYWRpbmdJbmRpY2F0b3I6IEZDID0gKCkgPT4gPHNwYW4+TG9hZGluZyBsaWJyYXJ5IHBhbmVsLi4uPC9zcGFuPjtcblxuY29uc3QgQ29uZmlybTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRNb2RhbFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUZXh0fT5EbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwYW5lbD88L2Rpdj47XG59O1xuXG5jb25zdCBIYXNDb25uZWN0ZWREYXNoYm9hcmRzOiBGQzx7IGRhc2hib2FyZFRpdGxlczogc3RyaW5nW10gfT4gPSAoeyBkYXNoYm9hcmRUaXRsZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBzdWZmaXggPSBkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAxID8gJ2Rhc2hib2FyZC4nIDogJ2Rhc2hib2FyZHMuJztcbiAgY29uc3QgbWVzc2FnZSA9IGAke2Rhc2hib2FyZFRpdGxlcy5sZW5ndGh9ICR7c3VmZml4fWA7XG4gIGlmIChkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5mb30+XG4gICAgICAgIHsnVGhpcyBsaWJyYXJ5IHBhbmVsIGNhbiBub3QgYmUgZGVsZXRlZCBiZWNhdXNlIGl0IGlzIGNvbm5lY3RlZCB0byAnfVxuICAgICAgICA8c3Ryb25nPnttZXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7JyBSZW1vdmUgdGhlIGxpYnJhcnkgcGFuZWwgZnJvbSB0aGUgZGFzaGJvYXJkcyBsaXN0ZWQgYmVsb3cgYW5kIHJldHJ5Lid9XG4gICAgICA8L3A+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubXlUYWJsZX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGFzaGJvYXJkIG5hbWU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGFzaGJvYXJkVGl0bGVzLm1hcCgodGl0bGUsIGkpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2BkYXNoLXRpdGxlLSR7aX1gfT5cbiAgICAgICAgICAgICAgPHRkPnt0aXRsZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2hSZXN1bHQsIExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyBhcyBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IHNlYXJjaENvbXBsZXRlZCB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE8pOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gYXdhaXQgYXBpR2V0Q29ubmVjdGVkRGFzaGJvYXJkcyhsaWJyYXJ5UGFuZWwudWlkKTtcbiAgICBkaXNwYXRjaChzZWFyY2hDb21wbGV0ZWQoeyBkYXNoYm9hcmRzIH0pKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdHlwZXMnO1xuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGludGVyZmFjZSBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGU7XG4gIGRhc2hib2FyZFRpdGxlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9IHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyxcbiAgZGFzaGJvYXJkVGl0bGVzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hDb21wbGV0ZWQgPSBjcmVhdGVBY3Rpb248eyBkYXNoYm9hcmRzOiBEYXNoYm9hcmRTZWFyY2hIaXRbXSB9PihcbiAgJ2xpYnJhcnlQYW5lbHMvZGVsZXRlL3NlYXJjaENvbXBsZXRlZCdcbik7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFJlZHVjZXIgPSAoXG4gIHN0YXRlOiBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlID0gaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUsXG4gIGFjdGlvbjogQW55QWN0aW9uXG4pOiBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlID0+IHtcbiAgaWYgKHNlYXJjaENvbXBsZXRlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZGFzaGJvYXJkVGl0bGVzOiBhY3Rpb24ucGF5bG9hZC5kYXNoYm9hcmRzLm1hcCgoZCkgPT4gZC50aXRsZSksXG4gICAgICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgTGluaywgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGFuZWxUeXBlQ2FyZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZCc7XG5pbXBvcnQgeyBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbCB9IGZyb20gJy4uL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZ2V0UGFuZWxQbHVnaW5Ob3RGb3VuZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1BhbmVsUGx1Z2luRXJyb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbENhcmRQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ2xpY2s6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIG9uRGVsZXRlPzogKHBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTykgPT4gdm9pZDtcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTGlicmFyeVBhbmVsQ2FyZDogUmVhY3QuRkM8TGlicmFyeVBhbmVsQ2FyZFByb3BzICYgeyBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9PiA9ICh7XG4gIGxpYnJhcnlQYW5lbCxcbiAgb25DbGljayxcbiAgb25EZWxldGUsXG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zLFxufSkgPT4ge1xuICBjb25zdCBbc2hvd0RlbGV0aW9uTW9kYWwsIHNldFNob3dEZWxldGlvbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkRlbGV0ZVBhbmVsID0gKCkgPT4ge1xuICAgIG9uRGVsZXRlPy4obGlicmFyeVBhbmVsKTtcbiAgICBzZXRTaG93RGVsZXRpb25Nb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcGFuZWxQbHVnaW4gPSBjb25maWcucGFuZWxzW2xpYnJhcnlQYW5lbC5tb2RlbC50eXBlXSA/PyBnZXRQYW5lbFBsdWdpbk5vdEZvdW5kKGxpYnJhcnlQYW5lbC5tb2RlbC50eXBlKS5tZXRhO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYW5lbFR5cGVDYXJkXG4gICAgICAgIGlzQ3VycmVudD17ZmFsc2V9XG4gICAgICAgIHRpdGxlPXtsaWJyYXJ5UGFuZWwubmFtZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2xpYnJhcnlQYW5lbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgcGx1Z2luPXtwYW5lbFBsdWdpbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaz8uKGxpYnJhcnlQYW5lbCl9XG4gICAgICAgIG9uRGVsZXRlPXtzaG93U2Vjb25kYXJ5QWN0aW9ucyA/ICgpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKHRydWUpIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICA8Rm9sZGVyTGluayBsaWJyYXJ5UGFuZWw9e2xpYnJhcnlQYW5lbH0gLz5cbiAgICAgIDwvUGFuZWxUeXBlQ2FyZD5cbiAgICAgIHtzaG93RGVsZXRpb25Nb2RhbCAmJiAoXG4gICAgICAgIDxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFxuICAgICAgICAgIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfVxuICAgICAgICAgIG9uQ29uZmlybT17b25EZWxldGVQYW5lbH1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgRm9sZGVyTGlua1Byb3BzIHtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbn1cblxuZnVuY3Rpb24gRm9sZGVyTGluayh7IGxpYnJhcnlQYW5lbCB9OiBGb2xkZXJMaW5rUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghbGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkICYmICFsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWxpYnJhcnlQYW5lbC5tZXRhLmZvbGRlclVpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgICAgPEljb24gbmFtZT17J2ZvbGRlcid9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkcy9mLyR7bGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkfWB9PlxuICAgICAgICA8SWNvbiBuYW1lPXsnZm9sZGVyLXVwbG9hZCd9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIG1ldGFDb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuXG4gICAgICBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgfVxuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgdXNlU3R5bGVzMiwgVmVydGljYWxHcm91cCwgRmlsdGVySW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQYW5lbFBsdWdpbk1ldGEsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFNvcnRQaWNrZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L1NvcnRQaWNrZXInO1xuaW1wb3J0IHsgUGFuZWxUeXBlRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb25lbnRzL1BhbmVsVHlwZUZpbHRlci9QYW5lbFR5cGVGaWx0ZXInO1xuaW1wb3J0IHsgTGlicmFyeVBhbmVsc1ZpZXcgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxzVmlldy9MaWJyYXJ5UGFuZWxzVmlldyc7XG5pbXBvcnQgeyBERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEZvbGRlckZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9uZW50cy9Gb2xkZXJGaWx0ZXIvRm9sZGVyRmlsdGVyJztcbmltcG9ydCB7IEZvbGRlckluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQge1xuICBmb2xkZXJGaWx0ZXJDaGFuZ2VkLFxuICBpbml0aWFsTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlLFxuICBsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlcixcbiAgcGFuZWxGaWx0ZXJDaGFuZ2VkLFxuICBzZWFyY2hDaGFuZ2VkLFxuICBzb3J0Q2hhbmdlZCxcbn0gZnJvbSAnLi9yZWR1Y2VyJztcblxuZXhwb3J0IGVudW0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQge1xuICBUaWdodCA9ICd0aWdodCcsXG4gIFNwYWNpb3VzID0gJ3NwYWNpb3VzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaWJyYXJ5UGFuZWxzU2VhcmNoUHJvcHMge1xuICBvbkNsaWNrOiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICB2YXJpYW50PzogTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQ7XG4gIHNob3dTb3J0PzogYm9vbGVhbjtcbiAgc2hvd1BhbmVsRmlsdGVyPzogYm9vbGVhbjtcbiAgc2hvd0ZvbGRlckZpbHRlcj86IGJvb2xlYW47XG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zPzogYm9vbGVhbjtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG4gIGN1cnJlbnRGb2xkZXJJZD86IG51bWJlcjtcbiAgcGVyUGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IExpYnJhcnlQYW5lbHNTZWFyY2ggPSAoe1xuICBvbkNsaWNrLFxuICB2YXJpYW50ID0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQuU3BhY2lvdXMsXG4gIGN1cnJlbnRQYW5lbElkLFxuICBjdXJyZW50Rm9sZGVySWQsXG4gIHBlclBhZ2UgPSBERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04sXG4gIHNob3dQYW5lbEZpbHRlciA9IGZhbHNlLFxuICBzaG93Rm9sZGVyRmlsdGVyID0gZmFsc2UsXG4gIHNob3dTb3J0ID0gZmFsc2UsXG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zID0gZmFsc2UsXG59OiBMaWJyYXJ5UGFuZWxzU2VhcmNoUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3sgc29ydERpcmVjdGlvbiwgcGFuZWxGaWx0ZXIsIGZvbGRlckZpbHRlciwgc2VhcmNoUXVlcnkgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlciwge1xuICAgIC4uLmluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUsXG4gICAgZm9sZGVyRmlsdGVyOiBjdXJyZW50Rm9sZGVySWQgPyBbY3VycmVudEZvbGRlcklkLnRvU3RyaW5nKDEwKV0gOiBbXSxcbiAgfSk7XG4gIGNvbnN0IG9uRmlsdGVyQ2hhbmdlID0gKHNlYXJjaFN0cmluZzogc3RyaW5nKSA9PiBkaXNwYXRjaChzZWFyY2hDaGFuZ2VkKHNlYXJjaFN0cmluZykpO1xuICBjb25zdCBvblNvcnRDaGFuZ2UgPSAoc29ydGluZzogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IGRpc3BhdGNoKHNvcnRDaGFuZ2VkKHNvcnRpbmcpKTtcbiAgY29uc3Qgb25Gb2xkZXJGaWx0ZXJDaGFuZ2UgPSAoZm9sZGVyczogRm9sZGVySW5mb1tdKSA9PiBkaXNwYXRjaChmb2xkZXJGaWx0ZXJDaGFuZ2VkKGZvbGRlcnMpKTtcbiAgY29uc3Qgb25QYW5lbEZpbHRlckNoYW5nZSA9IChwbHVnaW5zOiBQYW5lbFBsdWdpbk1ldGFbXSkgPT4gZGlzcGF0Y2gocGFuZWxGaWx0ZXJDaGFuZ2VkKHBsdWdpbnMpKTtcblxuICBpZiAodmFyaWFudCA9PT0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQuU3BhY2lvdXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibGdcIj5cbiAgICAgICAgICA8RmlsdGVySW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnU2VhcmNoIGJ5IG5hbWUgb3IgZGVzY3JpcHRpb24nfVxuICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblJvd30+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwXG4gICAgICAgICAgICAgIHNwYWNpbmc9XCJzbVwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9eyhzaG93U29ydCAmJiBzaG93UGFuZWxGaWx0ZXIpIHx8IHNob3dGb2xkZXJGaWx0ZXIgPyAnc3BhY2UtYmV0d2VlbicgOiAnZmxleC1lbmQnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2hvd1NvcnQgJiYgKFxuICAgICAgICAgICAgICAgIDxTb3J0UGlja2VyIHZhbHVlPXtzb3J0RGlyZWN0aW9ufSBvbkNoYW5nZT17b25Tb3J0Q2hhbmdlfSBmaWx0ZXI9e1snYWxwaGEtYXNjJywgJ2FscGhhLWRlc2MnXX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cFxuICAgICAgICAgICAgICAgIHNwYWNpbmc9XCJzbVwiXG4gICAgICAgICAgICAgICAganVzdGlmeT17c2hvd0ZvbGRlckZpbHRlciAmJiBzaG93UGFuZWxGaWx0ZXIgPyAnc3BhY2UtYmV0d2VlbicgOiAnZmxleC1lbmQnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Nob3dGb2xkZXJGaWx0ZXIgJiYgPEZvbGRlckZpbHRlciBvbkNoYW5nZT17b25Gb2xkZXJGaWx0ZXJDaGFuZ2V9IC8+fVxuICAgICAgICAgICAgICAgIHtzaG93UGFuZWxGaWx0ZXIgJiYgPFBhbmVsVHlwZUZpbHRlciBvbkNoYW5nZT17b25QYW5lbEZpbHRlckNoYW5nZX0gLz59XG4gICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWJyYXJ5UGFuZWxzVmlld30+XG4gICAgICAgICAgICA8TGlicmFyeVBhbmVsc1ZpZXdcbiAgICAgICAgICAgICAgb25DbGlja0NhcmQ9e29uQ2xpY2t9XG4gICAgICAgICAgICAgIHNlYXJjaFN0cmluZz17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIHNvcnREaXJlY3Rpb249e3NvcnREaXJlY3Rpb259XG4gICAgICAgICAgICAgIHBhbmVsRmlsdGVyPXtwYW5lbEZpbHRlcn1cbiAgICAgICAgICAgICAgZm9sZGVyRmlsdGVyPXtmb2xkZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYW5lbElkPXtjdXJyZW50UGFuZWxJZH1cbiAgICAgICAgICAgICAgc2hvd1NlY29uZGFyeUFjdGlvbnM9e3Nob3dTZWNvbmRhcnlBY3Rpb25zfVxuICAgICAgICAgICAgICBwZXJQYWdlPXtwZXJQYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cInhzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlnaHRCdXR0b25Sb3d9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlnaHRGaWx0ZXJ9PlxuICAgICAgICAgICAgPEZpbHRlcklucHV0IHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfSBwbGFjZWhvbGRlcj17J1NlYXJjaCBieSBuYW1lJ30gd2lkdGg9ezB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWdodFNvcnRGaWx0ZXJ9PlxuICAgICAgICAgICAge3Nob3dTb3J0ICYmIDxTb3J0UGlja2VyIHZhbHVlPXtzb3J0RGlyZWN0aW9ufSBvbkNoYW5nZT17b25Tb3J0Q2hhbmdlfSAvPn1cbiAgICAgICAgICAgIHtzaG93Rm9sZGVyRmlsdGVyICYmIDxGb2xkZXJGaWx0ZXIgb25DaGFuZ2U9e29uRm9sZGVyRmlsdGVyQ2hhbmdlfSBtYXhNZW51SGVpZ2h0PXsyMDB9IC8+fVxuICAgICAgICAgICAge3Nob3dQYW5lbEZpbHRlciAmJiA8UGFuZWxUeXBlRmlsdGVyIG9uQ2hhbmdlPXtvblBhbmVsRmlsdGVyQ2hhbmdlfSBtYXhNZW51SGVpZ2h0PXsyMDB9IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWJyYXJ5UGFuZWxzVmlld30+XG4gICAgICAgICAgPExpYnJhcnlQYW5lbHNWaWV3XG4gICAgICAgICAgICBvbkNsaWNrQ2FyZD17b25DbGlja31cbiAgICAgICAgICAgIHNlYXJjaFN0cmluZz17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBzb3J0RGlyZWN0aW9uPXtzb3J0RGlyZWN0aW9ufVxuICAgICAgICAgICAgcGFuZWxGaWx0ZXI9e3BhbmVsRmlsdGVyfVxuICAgICAgICAgICAgZm9sZGVyRmlsdGVyPXtmb2xkZXJGaWx0ZXJ9XG4gICAgICAgICAgICBjdXJyZW50UGFuZWxJZD17Y3VycmVudFBhbmVsSWR9XG4gICAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9ucz17c2hvd1NlY29uZGFyeUFjdGlvbnN9XG4gICAgICAgICAgICBwZXJQYWdlPXtwZXJQYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgYnV0dG9uUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9OyAvLyBDbGVhciB0eXBlcyBsaW5rXG4gICAgYCxcbiAgICB0aWdodEJ1dHRvblJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDQpfTsgLy8gQ2xlYXIgdHlwZXMgbGlua1xuICAgIGAsXG4gICAgdGlnaHRGaWx0ZXI6IGNzc2BcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBgLFxuICAgIHRpZ2h0U29ydEZpbHRlcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAsIDAsIDAsIDAuNSl9O1xuICAgIGAsXG4gICAgbGlicmFyeVBhbmVsc1ZpZXc6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IFBhbmVsUGx1Z2luTWV0YSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEZvbGRlckluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlIHtcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgc29ydERpcmVjdGlvbj86IHN0cmluZztcbiAgcGFuZWxGaWx0ZXI6IHN0cmluZ1tdO1xuICBmb2xkZXJGaWx0ZXI6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZTogTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlID0ge1xuICBzZWFyY2hRdWVyeTogJycsXG4gIHBhbmVsRmlsdGVyOiBbXSxcbiAgZm9sZGVyRmlsdGVyOiBbXSxcbiAgc29ydERpcmVjdGlvbjogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaENoYW5nZWQgPSBjcmVhdGVBY3Rpb248c3RyaW5nPignbGlicmFyeVBhbmVscy9zZWFyY2gvc2VhcmNoQ2hhbmdlZCcpO1xuZXhwb3J0IGNvbnN0IHNvcnRDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PignbGlicmFyeVBhbmVscy9zZWFyY2gvc29ydENoYW5nZWQnKTtcbmV4cG9ydCBjb25zdCBwYW5lbEZpbHRlckNoYW5nZWQgPSBjcmVhdGVBY3Rpb248UGFuZWxQbHVnaW5NZXRhW10+KCdsaWJyYXJ5UGFuZWxzL3NlYXJjaC9wYW5lbEZpbHRlckNoYW5nZWQnKTtcbmV4cG9ydCBjb25zdCBmb2xkZXJGaWx0ZXJDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPEZvbGRlckluZm9bXT4oJ2xpYnJhcnlQYW5lbHMvc2VhcmNoL2ZvbGRlckZpbHRlckNoYW5nZWQnKTtcblxuZXhwb3J0IGNvbnN0IGxpYnJhcnlQYW5lbHNTZWFyY2hSZWR1Y2VyID0gKHN0YXRlOiBMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSA9PiB7XG4gIGlmIChzZWFyY2hDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoUXVlcnk6IGFjdGlvbi5wYXlsb2FkIH07XG4gIH1cblxuICBpZiAoc29ydENoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBzb3J0RGlyZWN0aW9uOiBhY3Rpb24ucGF5bG9hZC52YWx1ZSB9O1xuICB9XG5cbiAgaWYgKHBhbmVsRmlsdGVyQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhbmVsRmlsdGVyOiBhY3Rpb24ucGF5bG9hZC5tYXAoKHApID0+IHAuaWQpIH07XG4gIH1cblxuICBpZiAoZm9sZGVyRmlsdGVyQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbGRlckZpbHRlcjogYWN0aW9uLnBheWxvYWQubWFwKChmKSA9PiBTdHJpbmcoZi5pZCEpKSB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUsIExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5UGFuZWxDYXJkIH0gZnJvbSAnLi4vTGlicmFyeVBhbmVsQ2FyZC9MaWJyYXJ5UGFuZWxDYXJkJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgY2hhbmdlUGFnZSwgaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgeyBhc3luY0Rpc3BhdGNoZXIsIGRlbGV0ZUxpYnJhcnlQYW5lbCwgc2VhcmNoRm9yTGlicmFyeVBhbmVscyB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmludGVyZmFjZSBMaWJyYXJ5UGFuZWxWaWV3UHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG9uQ2xpY2tDYXJkOiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICBzaG93U2Vjb25kYXJ5QWN0aW9ucz86IGJvb2xlYW47XG4gIGN1cnJlbnRQYW5lbElkPzogc3RyaW5nO1xuICBzZWFyY2hTdHJpbmc6IHN0cmluZztcbiAgc29ydERpcmVjdGlvbj86IHN0cmluZztcbiAgcGFuZWxGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgZm9sZGVyRmlsdGVyPzogc3RyaW5nW107XG4gIHBlclBhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBMaWJyYXJ5UGFuZWxzVmlldzogUmVhY3QuRkM8TGlicmFyeVBhbmVsVmlld1Byb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgb25DbGlja0NhcmQsXG4gIHNlYXJjaFN0cmluZyxcbiAgc29ydERpcmVjdGlvbixcbiAgcGFuZWxGaWx0ZXIsXG4gIGZvbGRlckZpbHRlcixcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnMsXG4gIGN1cnJlbnRQYW5lbElkOiBjdXJyZW50UGFuZWwsXG4gIHBlclBhZ2U6IHByb3BzUGVyUGFnZSA9IDQwLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0UGFuZWxWaWV3U3R5bGVzKTtcbiAgY29uc3QgW3sgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgbnVtYmVyT2ZQYWdlcywgbG9hZGluZ1N0YXRlLCBjdXJyZW50UGFuZWxJZCB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlcixcbiAgICB7XG4gICAgICAuLi5pbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSxcbiAgICAgIGN1cnJlbnRQYW5lbElkOiBjdXJyZW50UGFuZWwsXG4gICAgICBwZXJQYWdlOiBwcm9wc1BlclBhZ2UsXG4gICAgfVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRGVib3VuY2UoXG4gICAgKCkgPT5cbiAgICAgIGFzeW5jRGlzcGF0Y2goXG4gICAgICAgIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoe1xuICAgICAgICAgIHNlYXJjaFN0cmluZyxcbiAgICAgICAgICBzb3J0RGlyZWN0aW9uLFxuICAgICAgICAgIHBhbmVsRmlsdGVyLFxuICAgICAgICAgIGZvbGRlckZpbHRlcixcbiAgICAgICAgICBwYWdlLFxuICAgICAgICAgIHBlclBhZ2UsXG4gICAgICAgICAgY3VycmVudFBhbmVsSWQsXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgIDMwMCxcbiAgICBbc2VhcmNoU3RyaW5nLCBzb3J0RGlyZWN0aW9uLCBwYW5lbEZpbHRlciwgZm9sZGVyRmlsdGVyLCBwYWdlLCBhc3luY0Rpc3BhdGNoXVxuICApO1xuICBjb25zdCBvbkRlbGV0ZSA9ICh7IHVpZCB9OiBMaWJyYXJ5RWxlbWVudERUTykgPT5cbiAgICBhc3luY0Rpc3BhdGNoKGRlbGV0ZUxpYnJhcnlQYW5lbCh1aWQsIHsgc2VhcmNoU3RyaW5nLCBwYWdlLCBwZXJQYWdlIH0pKTtcbiAgY29uc3Qgb25QYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4gYXN5bmNEaXNwYXRjaChjaGFuZ2VQYWdlKHsgcGFnZSB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRhaW5lciwgY2xhc3NOYW1lKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpYnJhcnlQYW5lbExpc3R9PlxuICAgICAgICB7bG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyA/IChcbiAgICAgICAgICA8cD5Mb2FkaW5nIGxpYnJhcnkgcGFuZWxzLi4uPC9wPlxuICAgICAgICApIDogbGlicmFyeVBhbmVscy5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vUGFuZWxzRm91bmR9Pk5vIGxpYnJhcnkgcGFuZWxzIGZvdW5kLjwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBsaWJyYXJ5UGFuZWxzPy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxMaWJyYXJ5UGFuZWxDYXJkXG4gICAgICAgICAgICAgIGtleT17YGxpYnJhcnktcGFuZWw9JHtpfWB9XG4gICAgICAgICAgICAgIGxpYnJhcnlQYW5lbD17aXRlbX1cbiAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ2FyZH1cbiAgICAgICAgICAgICAgc2hvd1NlY29uZGFyeUFjdGlvbnM9e3Nob3dTZWNvbmRhcnlBY3Rpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7bGlicmFyeVBhbmVscy5sZW5ndGggPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn0+XG4gICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlfVxuICAgICAgICAgICAgbnVtYmVyT2ZQYWdlcz17bnVtYmVyT2ZQYWdlc31cbiAgICAgICAgICAgIG9uTmF2aWdhdGU9e29uUGFnZUNoYW5nZX1cbiAgICAgICAgICAgIGhpZGVXaGVuU2luZ2xlUGFnZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0UGFuZWxWaWV3U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYCxcbiAgICBsaWJyYXJ5UGFuZWxMaXN0OiBjc3NgXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC1nYXA6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBzZWFyY2hIZWFkZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYCxcbiAgICBuZXdQYW5lbEJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBwYWdpbmF0aW9uOiBjc3NgXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgIGAsXG4gICAgbm9QYW5lbHNGb3VuZDogY3NzYFxuICAgICAgbGFiZWw6IG5vUGFuZWxzRm91bmQ7XG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgb2YsIFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXBUbywgbWVyZ2VNYXAsIHNoYXJlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbCBhcyBhcGlEZWxldGVMaWJyYXJ5UGFuZWwsIGdldExpYnJhcnlQYW5lbHMgfSBmcm9tICcuLi8uLi9zdGF0ZS9hcGknO1xuaW1wb3J0IHsgaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGluaXRTZWFyY2gsIHNlYXJjaENvbXBsZXRlZCB9IGZyb20gJy4vcmVkdWNlcic7XG5cbnR5cGUgRGlzcGF0Y2hSZXN1bHQgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pID0+IHZvaWQ7XG5pbnRlcmZhY2UgU2VhcmNoQXJncyB7XG4gIHBlclBhZ2U6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xuICBzZWFyY2hTdHJpbmc6IHN0cmluZztcbiAgc29ydERpcmVjdGlvbj86IHN0cmluZztcbiAgcGFuZWxGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgZm9sZGVyRmlsdGVyPzogc3RyaW5nW107XG4gIGN1cnJlbnRQYW5lbElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoRm9yTGlicmFyeVBhbmVscyhhcmdzOiBTZWFyY2hBcmdzKTogRGlzcGF0Y2hSZXN1bHQge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIGNvbnN0IGRhdGFPYnNlcnZhYmxlID0gZnJvbShcbiAgICAgIGdldExpYnJhcnlQYW5lbHMoe1xuICAgICAgICBzZWFyY2hTdHJpbmc6IGFyZ3Muc2VhcmNoU3RyaW5nLFxuICAgICAgICBwZXJQYWdlOiBhcmdzLnBlclBhZ2UsXG4gICAgICAgIHBhZ2U6IGFyZ3MucGFnZSxcbiAgICAgICAgZXhjbHVkZVVpZDogYXJncy5jdXJyZW50UGFuZWxJZCxcbiAgICAgICAgc29ydERpcmVjdGlvbjogYXJncy5zb3J0RGlyZWN0aW9uLFxuICAgICAgICB0eXBlRmlsdGVyOiBhcmdzLnBhbmVsRmlsdGVyLFxuICAgICAgICBmb2xkZXJGaWx0ZXI6IGFyZ3MuZm9sZGVyRmlsdGVyLFxuICAgICAgfSlcbiAgICApLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoeyBwZXJQYWdlLCBlbGVtZW50czogbGlicmFyeVBhbmVscywgcGFnZSwgdG90YWxDb3VudCB9KSA9PlxuICAgICAgICBvZihzZWFyY2hDb21wbGV0ZWQoeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50IH0pKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBvZihzZWFyY2hDb21wbGV0ZWQoeyAuLi5pbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgcGFnZTogYXJncy5wYWdlLCBwZXJQYWdlOiBhcmdzLnBlclBhZ2UgfSkpO1xuICAgICAgfSksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSksIC8vIG1ha2Ugc3VyZSB3ZSB1bnN1YnNjcmliZVxuICAgICAgc2hhcmUoKVxuICAgICk7XG5cbiAgICBzdWJzY3JpcHRpb24uYWRkKFxuICAgICAgLy8gSWYgNTBtcyB3aXRob3V0IGEgcmVzcG9uc2UgZGlzcGF0Y2ggYSBsb2FkaW5nIHN0YXRlXG4gICAgICAvLyBtYXBUbyB3aWxsIHRyYW5zbGF0ZSB0aGUgdGltZXIgZXZlbnQgaW50byBhIGxvYWRpbmcgc3RhdGVcbiAgICAgIC8vIHRha2VVbnRpbCB3aWxsIGNhbmNlbCB0aGUgdGltZXIgZW1pdCB3aGVuIGZpcnN0IHJlc3BvbnNlIGlzIHJlY2VpdmVkIG9uIHRoZSBkYXRhT2JzZXJ2YWJsZVxuICAgICAgbWVyZ2UodGltZXIoNTApLnBpcGUobWFwVG8oaW5pdFNlYXJjaCgpKSwgdGFrZVVudGlsKGRhdGFPYnNlcnZhYmxlKSksIGRhdGFPYnNlcnZhYmxlKS5zdWJzY3JpYmUoZGlzcGF0Y2gpXG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpYnJhcnlQYW5lbCh1aWQ6IHN0cmluZywgYXJnczogU2VhcmNoQXJncyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGlEZWxldGVMaWJyYXJ5UGFuZWwodWlkKTtcbiAgICAgIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoYXJncykoZGlzcGF0Y2gpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXN5bmNEaXNwYXRjaGVyKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uOiBhbnkpIHtcbiAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gpO1xuICAgIH1cbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbHNWaWV3U3RhdGUge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZTtcbiAgbGlicmFyeVBhbmVsczogTGlicmFyeUVsZW1lbnREVE9bXTtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBwZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbnVtYmVyT2ZQYWdlczogbnVtYmVyO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlOiBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlID0ge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Mb2FkaW5nLFxuICBsaWJyYXJ5UGFuZWxzOiBbXSxcbiAgdG90YWxDb3VudDogMCxcbiAgcGVyUGFnZTogNDAsXG4gIHBhZ2U6IDEsXG4gIG51bWJlck9mUGFnZXM6IDAsXG4gIGN1cnJlbnRQYW5lbElkOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFNlYXJjaCA9IGNyZWF0ZUFjdGlvbignbGlicmFyeVBhbmVscy92aWV3L2luaXRTZWFyY2gnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hDb21wbGV0ZWQgPSBjcmVhdGVBY3Rpb248XG4gIE9taXQ8TGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgJ2N1cnJlbnRQYW5lbElkJyB8ICdzZWFyY2hTdHJpbmcnIHwgJ2xvYWRpbmdTdGF0ZScgfCAnbnVtYmVyT2ZQYWdlcyc+XG4+KCdsaWJyYXJ5UGFuZWxzL3ZpZXcvc2VhcmNoQ29tcGxldGVkJyk7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlID0gY3JlYXRlQWN0aW9uPFBpY2s8TGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgJ3BhZ2UnPj4oJ2xpYnJhcnlQYW5lbHMvdmlldy9jaGFuZ2VQYWdlJyk7XG5cbmV4cG9ydCBjb25zdCBsaWJyYXJ5UGFuZWxzVmlld1JlZHVjZXIgPSAoc3RhdGU6IExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSA9PiB7XG4gIGlmIChpbml0U2VhcmNoLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyB9O1xuICB9XG5cbiAgaWYgKHNlYXJjaENvbXBsZXRlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBwZXJQYWdlKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsaWJyYXJ5UGFuZWxzLFxuICAgICAgcGVyUGFnZSxcbiAgICAgIHRvdGFsQ291bnQsXG4gICAgICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgbnVtYmVyT2ZQYWdlcyxcbiAgICAgIHBhZ2U6IHBhZ2UgPiBudW1iZXJPZlBhZ2VzID8gcGFnZSAtIDEgOiBwYWdlLFxuICAgIH07XG4gIH1cblxuICBpZiAoY2hhbmdlUGFnZS5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2U6IGFjdGlvbi5wYXlsb2FkLnBhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQXN5bmNTZWxlY3QsIEJ1dHRvbiwgTW9kYWwsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC90eXBlcyc7XG5pbXBvcnQgeyBnZXRDb25uZWN0ZWREYXNoYm9hcmRzLCBnZXRMaWJyYXJ5UGFuZWxDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVuTGlicmFyeVBhbmVsTW9kYWxQcm9wcyB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9wZW5MaWJyYXJ5UGFuZWxNb2RhbCh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzIH06IE9wZW5MaWJyYXJ5UGFuZWxNb2RhbFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb3B0aW9uLCBzZXRPcHRpb25dID0gdXNlU3RhdGU8U2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29ubmVjdGVkRGFzaGJvYXJkcyA9IGF3YWl0IGdldExpYnJhcnlQYW5lbENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsLnVpZCk7XG4gICAgICBzZXRDb25uZWN0ZWQoY29ubmVjdGVkRGFzaGJvYXJkcy5sZW5ndGgpO1xuICAgIH07XG4gICAgZ2V0Q29ubmVjdGVkKCk7XG4gIH0sIFtsaWJyYXJ5UGFuZWwudWlkXSk7XG4gIGNvbnN0IGxvYWRPcHRpb25zID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlYXJjaFN0cmluZzogc3RyaW5nKSA9PiBsb2FkT3B0aW9uc0FzeW5jKGxpYnJhcnlQYW5lbC51aWQsIHNlYXJjaFN0cmluZywgc2V0TG9hZGluZyksXG4gICAgW2xpYnJhcnlQYW5lbC51aWRdXG4gICk7XG4gIGNvbnN0IGRlYm91bmNlZExvYWRPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBkZWJvdW5jZShsb2FkT3B0aW9ucywgMzAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pLFxuICAgIFtsb2FkT3B0aW9uc11cbiAgKTtcbiAgY29uc3Qgb25WaWV3UGFuZWwgPSAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXJsVXRpbC5yZW5kZXJVcmwoYC9kLyR7b3B0aW9uPy52YWx1ZT8udWlkfWAsIHt9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdGl0bGU9XCJWaWV3IHBhbmVsIGluIGRhc2hib2FyZFwiIG9uRGlzbWlzcz17b25EaXNtaXNzfSBvbkNsaWNrQmFja2Ryb3A9e29uRGlzbWlzc30gaXNPcGVuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7Y29ubmVjdGVkID09PSAwID8gKFxuICAgICAgICAgIDxzcGFuPlBhbmVsIGlzIG5vdCBsaW5rZWQgdG8gYSBkYXNoYm9hcmQuIEFkZCB0aGUgcGFuZWwgdG8gYSBkYXNoYm9hcmQgYW5kIHJldHJ5Ljwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtjb25uZWN0ZWQgPiAwID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhpcyBwYW5lbCBpcyBiZWluZyB1c2VkIGlueycgJ31cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICB7Y29ubmVjdGVkfSB7Y29ubmVjdGVkID4gMSA/ICdkYXNoYm9hcmRzJyA6ICdkYXNoYm9hcmQnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgLlBsZWFzZSBjaG9vc2Ugd2hpY2ggZGFzaGJvYXJkIHRvIHZpZXcgdGhlIHBhbmVsIGluOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9ucz17dHJ1ZX1cbiAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZExvYWRPcHRpb25zfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0T3B0aW9ufVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0IHR5cGluZyB0byBzZWFyY2ggZm9yIGRhc2hib2FyZFwiXG4gICAgICAgICAgICAgIG5vT3B0aW9uc01lc3NhZ2U9XCJObyBkYXNoYm9hcmRzIGZvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uVmlld1BhbmVsfSBkaXNhYmxlZD17IUJvb2xlYW4ob3B0aW9uKX0+XG4gICAgICAgICAge29wdGlvbiA/IGBWaWV3IHBhbmVsIGluICR7b3B0aW9uPy5sYWJlbH0uLi5gIDogJ1ZpZXcgcGFuZWwgaW4gZGFzaGJvYXJkLi4uJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICA8L01vZGFsPlxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkT3B0aW9uc0FzeW5jKHVpZDogc3RyaW5nLCBzZWFyY2hTdHJpbmc6IHN0cmluZywgc2V0TG9hZGluZzogKGxvYWRpbmc6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgc2V0TG9hZGluZyh0cnVlKTtcbiAgY29uc3Qgc2VhcmNoSGl0cyA9IGF3YWl0IGdldENvbm5lY3RlZERhc2hib2FyZHModWlkKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlYXJjaEhpdHNcbiAgICAuZmlsdGVyKChkKSA9PiBkLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpKVxuICAgIC5tYXAoKGQpID0+ICh7IGxhYmVsOiBkLnRpdGxlLCB2YWx1ZTogZCB9KSk7XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIG15VGFibGU6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDIwNHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXIucmFkaXVzLnNtfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJnM307XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzF9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLm1kfTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIGNvbG9yOiAjNTM4YWRlO1xuICAgICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICAgIH1cblxuICAgICAgdGgsXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxM3B4O1xuICAgICAgICBoZWlnaHQ6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgICB9XG5cbiAgICAgIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgbm90ZVRleHRib3g6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgYCxcbiAgICB0ZXh0SW5mbzogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICBgLFxuICAgIGRhc2hib2FyZFNlYXJjaDogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIG1vZGFsOiBjc3NgXG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgYCxcbiAgICBtb2RhbFRleHQ6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmhlYWRpbmcuaDR9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygke3RoZW1lLnNwYWNpbmcuZH0gKiAyKTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcuZH07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUsIFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEljb25CdXR0b24sIFBsdWdpblNpZ25hdHVyZUJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IFBsdWdpblN0YXRlSW5mbyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNDdXJyZW50OiBib29sZWFuO1xuICBwbHVnaW46IFBhbmVsUGx1Z2luTWV0YTtcbiAgdGl0bGU6IHN0cmluZztcbiAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXI8SFRNTERpdkVsZW1lbnQ+O1xuICBvbkRlbGV0ZT86ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2hvd0JhZGdlPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbFR5cGVDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBpc0N1cnJlbnQsXG4gIHRpdGxlLFxuICBwbHVnaW4sXG4gIG9uQ2xpY2ssXG4gIG9uRGVsZXRlLFxuICBkaXNhYmxlZCxcbiAgc2hvd0JhZGdlLFxuICBkZXNjcmlwdGlvbixcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgY3NzQ2xhc3MgPSBjeCh7XG4gICAgW3N0eWxlcy5pdGVtXTogdHJ1ZSxcbiAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQgfHwgcGx1Z2luLnN0YXRlID09PSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkLFxuICAgIFtzdHlsZXMuY3VycmVudF06IGlzQ3VycmVudCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUGx1Z2luVmlzdWFsaXphdGlvbi5pdGVtKHBsdWdpbi5uYW1lKX1cbiAgICAgIG9uQ2xpY2s9e2Rpc2FibGVkID8gdW5kZWZpbmVkIDogb25DbGlja31cbiAgICAgIHRpdGxlPXtpc0N1cnJlbnQgPyAnQ2xpY2sgYWdhaW4gdG8gY2xvc2UgdGhpcyBzZWN0aW9uJyA6IHBsdWdpbi5uYW1lfVxuICAgID5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e3BsdWdpbi5pbmZvLmxvZ29zLnNtYWxsfSBhbHQ9XCJcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1Db250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dGl0bGV9PC9kaXY+XG4gICAgICAgIHtkZXNjcmlwdGlvbiA/IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9zcGFuPiA6IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dCYWRnZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYmFkZ2UsIGRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZCl9PlxuICAgICAgICAgIDxQYW5lbFBsdWdpbkJhZGdlIHBsdWdpbj17cGx1Z2lufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG5hbWU9XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb25EZWxldGUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUJ1dHRvbn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIGJ1dHRvbiBvbiBwYW5lbCB0eXBlIGNhcmRcIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhbmVsVHlwZUNhcmQuZGlzcGxheU5hbWUgPSAnUGFuZWxUeXBlQ2FyZCc7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW06IGNzc2BcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgICAgYm94LXNoYWRvdzogJHt0aGVtZS5zaGFkb3dzLnoxfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2JhY2tncm91bmQnXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnQsXG4gICAgICB9KX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5lbXBoYXNpemUodGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5LCAwLjAzKX07XG4gICAgICB9XG4gICAgYCxcbiAgICBpdGVtQ29udGVudDogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLCAxKX07XG4gICAgYCxcbiAgICBjdXJyZW50OiBjc3NgXG4gICAgICBsYWJlbDogY3VycmVudFZpc3VhbGl6YXRpb25JdGVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMucHJpbWFyeS5ib3JkZXJ9O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYWN0aW9uLnNlbGVjdGVkfTtcbiAgICBgLFxuICAgIGRpc2FibGVkOiBjc3NgXG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGAsXG4gICAgbmFtZTogY3NzYFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW19O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBkZXNjcmlwdGlvbjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogNC41ZW07XG4gICAgYCxcbiAgICBpbWc6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gICAgICB3aWR0aDogMzhweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gICAgYmFkZ2U6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgYCxcbiAgICBkZWxldGVCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGAsXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgUGFuZWxQbHVnaW5CYWRnZVByb3BzIHtcbiAgcGx1Z2luOiBQYW5lbFBsdWdpbk1ldGE7XG59XG5cbmNvbnN0IFBhbmVsUGx1Z2luQmFkZ2U6IFJlYWN0LkZDPFBhbmVsUGx1Z2luQmFkZ2VQcm9wcz4gPSAoeyBwbHVnaW4gfSkgPT4ge1xuICBpZiAoaXNVbnNpZ25lZFBsdWdpblNpZ25hdHVyZShwbHVnaW4uc2lnbmF0dXJlKSkge1xuICAgIHJldHVybiA8UGx1Z2luU2lnbmF0dXJlQmFkZ2Ugc3RhdHVzPXtwbHVnaW4uc2lnbmF0dXJlfSAvPjtcbiAgfVxuXG4gIHJldHVybiA8UGx1Z2luU3RhdGVJbmZvIHN0YXRlPXtwbHVnaW4uc3RhdGV9IC8+O1xufTtcblxuUGFuZWxQbHVnaW5CYWRnZS5kaXNwbGF5TmFtZSA9ICdQYW5lbFBsdWdpbkJhZGdlJztcbiIsImltcG9ydCB7IFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luU3RhdGUsIHVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUGFuZWxQbHVnaW5NZXRhKCk6IFBhbmVsUGx1Z2luTWV0YVtdIHtcbiAgY29uc3QgYWxsUGFuZWxzID0gY29uZmlnLnBhbmVscztcblxuICByZXR1cm4gT2JqZWN0LmtleXMoYWxsUGFuZWxzKVxuICAgIC5maWx0ZXIoKGtleSkgPT4gYWxsUGFuZWxzW2tleV1bJ2hpZGVGcm9tTGlzdCddID09PSBmYWxzZSlcbiAgICAubWFwKChrZXkpID0+IGFsbFBhbmVsc1trZXldKVxuICAgIC5zb3J0KChhOiBQYW5lbFBsdWdpbk1ldGEsIGI6IFBhbmVsUGx1Z2luTWV0YSkgPT4gYS5zb3J0IC0gYi5zb3J0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclBsdWdpbkxpc3QoXG4gIHBsdWdpbnNMaXN0OiBQYW5lbFBsdWdpbk1ldGFbXSxcbiAgc2VhcmNoUXVlcnk6IHN0cmluZywgLy8gTm90ZTogdGhpcyB3aWxsIGJlIGFuIGVzY2FwZWQgcmVnZXggc3RyaW5nIGFzIGl0IGNvbWVzIGZyb20gYEZpbHRlcklucHV0YFxuICBjdXJyZW50OiBQYW5lbFBsdWdpbk1ldGFcbik6IFBhbmVsUGx1Z2luTWV0YVtdIHtcbiAgaWYgKCFzZWFyY2hRdWVyeS5sZW5ndGgpIHtcbiAgICByZXR1cm4gcGx1Z2luc0xpc3QuZmlsdGVyKChwKSA9PiB7XG4gICAgICBpZiAocC5zdGF0ZSA9PT0gUGx1Z2luU3RhdGUuZGVwcmVjYXRlZCkge1xuICAgICAgICByZXR1cm4gY3VycmVudC5pZCA9PT0gcC5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcXVlcnkgPSB1bkVzY2FwZVN0cmluZ0Zyb21SZWdleChzZWFyY2hRdWVyeSkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgZmlyc3Q6IFBhbmVsUGx1Z2luTWV0YVtdID0gW107XG4gIGNvbnN0IG1hdGNoOiBQYW5lbFBsdWdpbk1ldGFbXSA9IFtdO1xuICBjb25zdCBpc0dyYXBoUXVlcnkgPSAnZ3JhcGgnLnN0YXJ0c1dpdGgocXVlcnkpO1xuXG4gIGZvciAoY29uc3QgaXRlbSBvZiBwbHVnaW5zTGlzdCkge1xuICAgIGlmIChpdGVtLnN0YXRlID09PSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkICYmIGN1cnJlbnQuaWQgIT09IGl0ZW0uaWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpZHggPSBuYW1lLmluZGV4T2YocXVlcnkpO1xuXG4gICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgZmlyc3QucHVzaChpdGVtKTtcbiAgICB9IGVsc2UgaWYgKGlkeCA+IDApIHtcbiAgICAgIG1hdGNoLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIGlmIChpc0dyYXBoUXVlcnkgJiYgaXRlbS5pZCA9PT0gJ3RpbWVzZXJpZXMnKSB7XG4gICAgICBmaXJzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaXJzdC5jb25jYXQobWF0Y2gpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFkZ2UsIEJhZGdlUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQbHVnaW5TdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZT86IFBsdWdpblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgUGx1Z2luU3RhdGVJbmZvOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGdldEZlYXR1cmVTdGF0ZUluZm8ocHJvcHMuc3RhdGUpO1xuXG4gIGlmICghZGlzcGxheSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxCYWRnZSBjb2xvcj17ZGlzcGxheS5jb2xvcn0gdGl0bGU9e2Rpc3BsYXkudG9vbHRpcH0gdGV4dD17ZGlzcGxheS50ZXh0fSBpY29uPXtkaXNwbGF5Lmljb259IC8+O1xufTtcblxuZnVuY3Rpb24gZ2V0RmVhdHVyZVN0YXRlSW5mbyhzdGF0ZT86IFBsdWdpblN0YXRlKTogQmFkZ2VQcm9wcyB8IG51bGwge1xuICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0RlcHJlY2F0ZWQnLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2VgLFxuICAgICAgfTtcbiAgICBjYXNlIFBsdWdpblN0YXRlLmFscGhhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0FscGhhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBleHBlcmltZW50YWwgYW5kIGZ1dHVyZSB1cGRhdGVzIG1pZ2h0IG5vdCBiZSBiYWNrd2FyZCBjb21wYXRpYmxlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5iZXRhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0JldGEnLFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGNsb3NlIHRvIGNvbXBsZXRlIGJ1dCBub3QgZnVsbHkgdGVzdGVkYCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImNzcyIsImRlYm91bmNlIiwiQXN5bmNNdWx0aVNlbGVjdCIsIkljb24iLCJCdXR0b24iLCJ1c2VTdHlsZXMyIiwiUGVybWlzc2lvbkxldmVsU3RyaW5nIiwiZ2V0QmFja2VuZFNydiIsIkZvbGRlckZpbHRlciIsIm9uQ2hhbmdlIiwicHJvcHNPbkNoYW5nZSIsIm1heE1lbnVIZWlnaHQiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldE9wdGlvbnMiLCJzZWFyY2hTdHJpbmciLCJnZXRGb2xkZXJzQXNPcHRpb25zIiwiZGVib3VuY2VkTG9hZE9wdGlvbnMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZm9sZGVycyIsImNoYW5nZWRGb2xkZXJzIiwiZm9sZGVyIiwicHVzaCIsInNlbGVjdE9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImlzTXVsdGkiLCJub09wdGlvbnNNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJsZW5ndGgiLCJjbGVhciIsInBhcmFtcyIsInF1ZXJ5IiwidHlwZSIsInBlcm1pc3Npb24iLCJWaWV3Iiwic2VhcmNoSGl0cyIsInNlYXJjaCIsIm9wdGlvbnMiLCJtYXAiLCJkIiwibGFiZWwiLCJ0aXRsZSIsImlkIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInVuc2hpZnQiLCJ0aGVtZSIsInNwYWNpbmciLCJnZXRBbGxQYW5lbFBsdWdpbk1ldGEiLCJNdWx0aVNlbGVjdCIsIlBhbmVsVHlwZUZpbHRlciIsInBsdWdpbnMiLCJwIiwibmFtZSIsImltZ1VybCIsImluZm8iLCJsb2dvcyIsInNtYWxsIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNoYW5nZWRQbHVnaW5zIiwicGx1Z2luIiwiZ2V0T3B0aW9uTGFiZWwiLCJpIiwiZ2V0T3B0aW9uVmFsdWUiLCJjb25uZWN0IiwiZ2V0TmF2TW9kZWwiLCJQYWdlIiwiTGlicmFyeVBhbmVsc1NlYXJjaCIsIk9wZW5MaWJyYXJ5UGFuZWxNb2RhbCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImNvbm5lY3RvciIsInVuZGVmaW5lZCIsIkxpYnJhcnlQYW5lbHNQYWdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJNb2RhbCIsInVzZVN0eWxlcyIsIkxvYWRpbmdTdGF0ZSIsImFzeW5jRGlzcGF0Y2hlciIsImRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciIsImluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIiwiZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyIsImdldE1vZGFsU3R5bGVzIiwiRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwiLCJsaWJyYXJ5UGFuZWwiLCJvbkRpc21pc3MiLCJvbkNvbmZpcm0iLCJkYXNoYm9hcmRUaXRsZXMiLCJsb2FkaW5nU3RhdGUiLCJkaXNwYXRjaCIsImFzeW5jRGlzcGF0Y2giLCJjb25uZWN0ZWQiLCJCb29sZWFuIiwiZG9uZSIsIkRvbmUiLCJtb2RhbCIsIkxvYWRpbmdJbmRpY2F0b3IiLCJDb25maXJtIiwibW9kYWxUZXh0IiwiSGFzQ29ubmVjdGVkRGFzaGJvYXJkcyIsInN1ZmZpeCIsIm1lc3NhZ2UiLCJ0ZXh0SW5mbyIsIm15VGFibGUiLCJhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIiwic2VhcmNoQ29tcGxldGVkIiwiZGFzaGJvYXJkcyIsInVpZCIsImNyZWF0ZUFjdGlvbiIsIkxvYWRpbmciLCJhY3Rpb24iLCJtYXRjaCIsInBheWxvYWQiLCJMaW5rIiwiUGFuZWxUeXBlQ2FyZCIsImNvbmZpZyIsImdldFBhbmVsUGx1Z2luTm90Rm91bmQiLCJMaWJyYXJ5UGFuZWxDYXJkIiwib25DbGljayIsIm9uRGVsZXRlIiwic2hvd1NlY29uZGFyeUFjdGlvbnMiLCJzaG93RGVsZXRpb25Nb2RhbCIsInNldFNob3dEZWxldGlvbk1vZGFsIiwib25EZWxldGVQYW5lbCIsInBhbmVsUGx1Z2luIiwicGFuZWxzIiwibW9kZWwiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJGb2xkZXJMaW5rIiwiZm9sZGVyVWlkIiwiZm9sZGVyTmFtZSIsIm1ldGFDb250YWluZXIiLCJjb2xvcnMiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImJvZHlTbWFsbCIsImZvbnRTaXplIiwiSG9yaXpvbnRhbEdyb3VwIiwiVmVydGljYWxHcm91cCIsIkZpbHRlcklucHV0IiwiU29ydFBpY2tlciIsIkxpYnJhcnlQYW5lbHNWaWV3IiwiREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIiwiZm9sZGVyRmlsdGVyQ2hhbmdlZCIsImluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUiLCJsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlciIsInBhbmVsRmlsdGVyQ2hhbmdlZCIsInNlYXJjaENoYW5nZWQiLCJzb3J0Q2hhbmdlZCIsIkxpYnJhcnlQYW5lbHNTZWFyY2hWYXJpYW50IiwidmFyaWFudCIsIlNwYWNpb3VzIiwiY3VycmVudFBhbmVsSWQiLCJjdXJyZW50Rm9sZGVySWQiLCJwZXJQYWdlIiwic2hvd1BhbmVsRmlsdGVyIiwic2hvd0ZvbGRlckZpbHRlciIsInNob3dTb3J0Iiwic29ydERpcmVjdGlvbiIsInBhbmVsRmlsdGVyIiwiZm9sZGVyRmlsdGVyIiwic2VhcmNoUXVlcnkiLCJ0b1N0cmluZyIsIm9uRmlsdGVyQ2hhbmdlIiwib25Tb3J0Q2hhbmdlIiwic29ydGluZyIsIm9uRm9sZGVyRmlsdGVyQ2hhbmdlIiwib25QYW5lbEZpbHRlckNoYW5nZSIsImJ1dHRvblJvdyIsImxpYnJhcnlQYW5lbHNWaWV3IiwidGlnaHRCdXR0b25Sb3ciLCJ0aWdodEZpbHRlciIsInRpZ2h0U29ydEZpbHRlciIsImYiLCJTdHJpbmciLCJ1c2VEZWJvdW5jZSIsImN4IiwiUGFnaW5hdGlvbiIsImNoYW5nZVBhZ2UiLCJpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSIsImxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlciIsImRlbGV0ZUxpYnJhcnlQYW5lbCIsInNlYXJjaEZvckxpYnJhcnlQYW5lbHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrQ2FyZCIsImN1cnJlbnRQYW5lbCIsInByb3BzUGVyUGFnZSIsImdldFBhbmVsVmlld1N0eWxlcyIsImxpYnJhcnlQYW5lbHMiLCJwYWdlIiwibnVtYmVyT2ZQYWdlcyIsIm9uUGFnZUNoYW5nZSIsImxpYnJhcnlQYW5lbExpc3QiLCJub1BhbmVsc0ZvdW5kIiwiaXRlbSIsInBhZ2luYXRpb24iLCJzbSIsInNlYXJjaEhlYWRlciIsIm5ld1BhbmVsQnV0dG9uIiwiZnJvbSIsIm1lcmdlIiwib2YiLCJTdWJzY3JpcHRpb24iLCJ0aW1lciIsImNhdGNoRXJyb3IiLCJmaW5hbGl6ZSIsIm1hcFRvIiwibWVyZ2VNYXAiLCJzaGFyZSIsInRha2VVbnRpbCIsImFwaURlbGV0ZUxpYnJhcnlQYW5lbCIsImdldExpYnJhcnlQYW5lbHMiLCJpbml0U2VhcmNoIiwiYXJncyIsInN1YnNjcmlwdGlvbiIsImRhdGFPYnNlcnZhYmxlIiwiZXhjbHVkZVVpZCIsInR5cGVGaWx0ZXIiLCJwaXBlIiwiZWxlbWVudHMiLCJ0b3RhbENvdW50IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJhZGQiLCJzdWJzY3JpYmUiLCJlIiwiRnVuY3Rpb24iLCJNYXRoIiwiY2VpbCIsIkFzeW5jU2VsZWN0IiwidXJsVXRpbCIsImxvY2F0aW9uU2VydmljZSIsImdldExpYnJhcnlQYW5lbENvbm5lY3RlZERhc2hib2FyZHMiLCJzZXRDb25uZWN0ZWQiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJnZXRDb25uZWN0ZWQiLCJjb25uZWN0ZWREYXNoYm9hcmRzIiwibG9hZE9wdGlvbnMiLCJsb2FkT3B0aW9uc0FzeW5jIiwibGVhZGluZyIsInRyYWlsaW5nIiwib25WaWV3UGFuZWwiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlclVybCIsImZpbHRlciIsImJvcmRlciIsInJhZGl1cyIsImJnMyIsImJnMSIsInRleHRTZW1pV2VhayIsInNpemUiLCJtZCIsInhsIiwiYmcyIiwibm90ZVRleHRib3giLCJkYXNoYm9hcmRTZWFyY2giLCJoZWFkaW5nIiwiaDQiLCJsaW5rIiwiaXNVbnNpZ25lZFBsdWdpblNpZ25hdHVyZSIsIlBsdWdpblN0YXRlIiwiSWNvbkJ1dHRvbiIsIlBsdWdpblNpZ25hdHVyZUJhZGdlIiwic2VsZWN0b3JzIiwiUGx1Z2luU3RhdGVJbmZvIiwiaXNDdXJyZW50IiwiZGlzYWJsZWQiLCJzaG93QmFkZ2UiLCJjaGlsZHJlbiIsImNzc0NsYXNzIiwiZGVwcmVjYXRlZCIsImN1cnJlbnQiLCJjb21wb25lbnRzIiwiUGx1Z2luVmlzdWFsaXphdGlvbiIsImltZyIsIml0ZW1Db250ZW50IiwiYmFkZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVCdXR0b24iLCJkaXNwbGF5TmFtZSIsImJhY2tncm91bmQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNoYWRvd3MiLCJ6MSIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydCIsImVtcGhhc2l6ZSIsInByaW1hcnkiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodExpZ2h0IiwiUGFuZWxQbHVnaW5CYWRnZSIsInNpZ25hdHVyZSIsInVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4IiwiYWxsUGFuZWxzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImZpbHRlclBsdWdpbkxpc3QiLCJwbHVnaW5zTGlzdCIsImZpcnN0IiwiaXNHcmFwaFF1ZXJ5Iiwic3RhcnRzV2l0aCIsImlkeCIsImluZGV4T2YiLCJjb25jYXQiLCJCYWRnZSIsInByb3BzIiwiZGlzcGxheSIsImdldEZlYXR1cmVTdGF0ZUluZm8iLCJjb2xvciIsInRvb2x0aXAiLCJpY29uIiwiYWxwaGEiLCJiZXRhIl0sInNvdXJjZVJvb3QiOiIifQ==
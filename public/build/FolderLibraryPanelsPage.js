"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderLibraryPanelsPage"],{

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

/***/ "./public/app/features/folders/FolderLibraryPanelsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderLibraryPanelsPage": () => (/* binding */ FolderLibraryPanelsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");
/* harmony import */ var _library_panels_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__.getNavModel)(state.navIndex, `folder-library-panels-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_3__.getLoadingNav)(1)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_7__.getFolderByUid
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function FolderLibraryPanelsPage({
  navModel,
  getFolderByUid,
  folderUid,
  folder
}) {
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async () => await getFolderByUid(folderUid), [getFolderByUid, folderUid]);
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_5__.LibraryPanelsSearch, {
        onClick: setSelected,
        currentFolderId: folder.id,
        showSecondaryActions: true,
        showSort: true,
        showPanelFilter: true
      }), selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_panels_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_6__.OpenLibraryPanelModal, {
        onDismiss: () => setSelected(undefined),
        libraryPanel: selected
      }) : null]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderLibraryPanelsPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBbUIsQ0FBQzNQLEtBQUssQ0FBQ0QsS0FBUCxDQUFuQzs7QUFFQSxNQUFJLENBQUMyUCxPQUFMLEVBQWM7QUFDWixXQUFPLElBQVA7QUFDRDs7QUFFRCxzQkFBTyx1REFBQyw4Q0FBRDtBQUFPLFNBQUssRUFBRUEsT0FBTyxDQUFDRSxLQUF0QjtBQUE2QixTQUFLLEVBQUVGLE9BQU8sQ0FBQ0csT0FBNUM7QUFBcUQsUUFBSSxFQUFFSCxPQUFPLENBQUNwTCxJQUFuRTtBQUF5RSxRQUFJLEVBQUVvTCxPQUFPLENBQUNJO0FBQXZGLElBQVA7QUFDRCxDQVJNOztBQVVQLFNBQVNILG1CQUFULENBQTZCNVAsS0FBN0IsRUFBcUU7QUFDbkUsVUFBUUEsS0FBUjtBQUNFLFNBQUswTSxpRUFBTDtBQUNFLGFBQU87QUFDTG5JLFFBQUFBLElBQUksRUFBRSxZQUREO0FBRUxzTCxRQUFBQSxLQUFLLEVBQUUsS0FGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUtwRCw0REFBTDtBQUNFLGFBQU87QUFDTG5JLFFBQUFBLElBQUksRUFBRSxPQUREO0FBRUxzTCxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUtwRCwyREFBTDtBQUNFLGFBQU87QUFDTG5JLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxzTCxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGO0FBQ0UsYUFBTyxJQUFQO0FBcEJKO0FBc0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0ZvbGRlckZpbHRlci9Gb2xkZXJGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QYW5lbFR5cGVGaWx0ZXIvUGFuZWxUeXBlRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9mb2xkZXJzL0ZvbGRlckxpYnJhcnlQYW5lbHNQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9yZWR1Y2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsQ2FyZC9MaWJyYXJ5UGFuZWxDYXJkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNTZWFyY2gvTGlicmFyeVBhbmVsc1NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzU2VhcmNoL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzVmlldy9MaWJyYXJ5UGFuZWxzVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzVmlldy9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1ZpZXcvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL09wZW5MaWJyYXJ5UGFuZWxNb2RhbC9PcGVuTGlicmFyeVBhbmVsTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvdXRpbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdkZWJvdW5jZS1wcm9taXNlJztcbmltcG9ydCB7IEFzeW5jTXVsdGlTZWxlY3QsIEljb24sIEJ1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBGb2xkZXJJbmZvLCBQZXJtaXNzaW9uTGV2ZWxTdHJpbmcgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcblxuZXhwb3J0IGludGVyZmFjZSBGb2xkZXJGaWx0ZXJQcm9wcyB7XG4gIG9uQ2hhbmdlOiAoZm9sZGVyOiBGb2xkZXJJbmZvW10pID0+IHZvaWQ7XG4gIG1heE1lbnVIZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb2xkZXJGaWx0ZXIoeyBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSwgbWF4TWVudUhlaWdodCB9OiBGb2xkZXJGaWx0ZXJQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGdldE9wdGlvbnMgPSB1c2VDYWxsYmFjaygoc2VhcmNoU3RyaW5nOiBzdHJpbmcpID0+IGdldEZvbGRlcnNBc09wdGlvbnMoc2VhcmNoU3RyaW5nLCBzZXRMb2FkaW5nKSwgW10pO1xuICBjb25zdCBkZWJvdW5jZWRMb2FkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2UoZ2V0T3B0aW9ucywgMzAwKSwgW2dldE9wdGlvbnNdKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8Rm9sZGVySW5mbz4+PihbXSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGZvbGRlcnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxGb2xkZXJJbmZvPj4pID0+IHtcbiAgICAgIGNvbnN0IGNoYW5nZWRGb2xkZXJzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGlmIChmb2xkZXIudmFsdWUpIHtcbiAgICAgICAgICBjaGFuZ2VkRm9sZGVycy5wdXNoKGZvbGRlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb3BzT25DaGFuZ2UoY2hhbmdlZEZvbGRlcnMpO1xuICAgICAgc2V0VmFsdWUoZm9sZGVycyk7XG4gICAgfSxcbiAgICBbcHJvcHNPbkNoYW5nZV1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0T3B0aW9uczogdHJ1ZSxcbiAgICBpc011bHRpOiB0cnVlLFxuICAgIG5vT3B0aW9uc01lc3NhZ2U6ICdObyBmb2xkZXJzIGZvdW5kJyxcbiAgICBwbGFjZWhvbGRlcjogJ0ZpbHRlciBieSBmb2xkZXInLFxuICAgIG1heE1lbnVIZWlnaHQsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7dmFsdWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGVhcn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbXSl9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyIGZvbGRlcnNcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2xlYXIgZm9sZGVyc1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8QXN5bmNNdWx0aVNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgIHsuLi5zZWxlY3RPcHRpb25zfVxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRMb2FkT3B0aW9uc31cbiAgICAgICAgcHJlZml4PXs8SWNvbiBuYW1lPVwiZmlsdGVyXCIgLz59XG4gICAgICAgIGFyaWEtbGFiZWw9XCJGb2xkZXIgZmlsdGVyXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvbGRlcnNBc09wdGlvbnMoc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHNldExvYWRpbmc6IChsb2FkaW5nOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHF1ZXJ5OiBzZWFyY2hTdHJpbmcsXG4gICAgdHlwZTogJ2Rhc2gtZm9sZGVyJyxcbiAgICBwZXJtaXNzaW9uOiBQZXJtaXNzaW9uTGV2ZWxTdHJpbmcuVmlldyxcbiAgfTtcblxuICBjb25zdCBzZWFyY2hIaXRzID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnNlYXJjaChwYXJhbXMpO1xuICBjb25zdCBvcHRpb25zID0gc2VhcmNoSGl0cy5tYXAoKGQpID0+ICh7IGxhYmVsOiBkLnRpdGxlLCB2YWx1ZTogeyBpZDogZC5pZCwgdGl0bGU6IGQudGl0bGUgfSB9KSk7XG4gIGlmICghc2VhcmNoU3RyaW5nIHx8ICdnZW5lcmFsJy5pbmNsdWRlcyhzZWFyY2hTdHJpbmcudG9Mb3dlckNhc2UoKSkpIHtcbiAgICBvcHRpb25zLnVuc2hpZnQoeyBsYWJlbDogJ0dlbmVyYWwnLCB2YWx1ZTogeyBpZDogMCwgdGl0bGU6ICdHZW5lcmFsJyB9IH0pO1xuICB9XG5cbiAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgbGFiZWw6IGNvbnRhaW5lcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYCxcbiAgICBjbGVhcjogY3NzYFxuICAgICAgbGFiZWw6IGNsZWFyO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnNwYWNpbmcoMS41KX07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0ke3RoZW1lLnNwYWNpbmcoNC41KX07XG4gICAgICByaWdodDogMDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBhbmVsUGx1Z2luTWV0YSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRBbGxQYW5lbFBsdWdpbk1ldGEgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvdXRpbCc7XG5pbXBvcnQgeyBJY29uLCBCdXR0b24sIE11bHRpU2VsZWN0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAocGx1Z2luczogUGFuZWxQbHVnaW5NZXRhW10pID0+IHZvaWQ7XG4gIG1heE1lbnVIZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbFR5cGVGaWx0ZXIgPSAoeyBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSwgbWF4TWVudUhlaWdodCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHVzZU1lbW88UGFuZWxQbHVnaW5NZXRhW10+KCgpID0+IHtcbiAgICByZXR1cm4gZ2V0QWxsUGFuZWxQbHVnaW5NZXRhKCk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHBsdWdpbnNcbiAgICAgICAgLm1hcCgocCkgPT4gKHsgbGFiZWw6IHAubmFtZSwgaW1nVXJsOiBwLmluZm8ubG9nb3Muc21hbGwsIHZhbHVlOiBwIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sYWJlbD8ubG9jYWxlQ29tcGFyZShiLmxhYmVsKSksXG4gICAgW3BsdWdpbnNdXG4gICk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPFBhbmVsUGx1Z2luTWV0YT4+PihbXSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHBsdWdpbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxQYW5lbFBsdWdpbk1ldGE+PikgPT4ge1xuICAgICAgY29uc3QgY2hhbmdlZFBsdWdpbnMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICAgICAgaWYgKHBsdWdpbi52YWx1ZSkge1xuICAgICAgICAgIGNoYW5nZWRQbHVnaW5zLnB1c2gocGx1Z2luLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvcHNPbkNoYW5nZShjaGFuZ2VkUGx1Z2lucyk7XG4gICAgICBzZXRWYWx1ZShwbHVnaW5zKTtcbiAgICB9LFxuICAgIFtwcm9wc09uQ2hhbmdlXVxuICApO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0T3B0aW9uczogdHJ1ZSxcbiAgICBnZXRPcHRpb25MYWJlbDogKGk6IGFueSkgPT4gaS5sYWJlbCxcbiAgICBnZXRPcHRpb25WYWx1ZTogKGk6IGFueSkgPT4gaS52YWx1ZSxcbiAgICBub09wdGlvbnNNZXNzYWdlOiAnTm8gUGFuZWwgdHlwZXMgZm91bmQnLFxuICAgIHBsYWNlaG9sZGVyOiAnRmlsdGVyIGJ5IHR5cGUnLFxuICAgIG1heE1lbnVIZWlnaHQsXG4gICAgb3B0aW9ucyxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHt2YWx1ZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFtdKX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xlYXIgdHlwZXNcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2xlYXIgdHlwZXNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgICAgPE11bHRpU2VsZWN0IG1lbnVTaG91bGRQb3J0YWwgey4uLnNlbGVjdE9wdGlvbnN9IHByZWZpeD17PEljb24gbmFtZT1cImZpbHRlclwiIC8+fSBhcmlhLWxhYmVsPVwiUGFuZWwgVHlwZSBmaWx0ZXJcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBsYWJlbDogY29udGFpbmVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBgLFxuICAgIGNsZWFyOiBjc3NgXG4gICAgICBsYWJlbDogY2xlYXI7XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuc3BhY2luZygxLjUpfTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLSR7dGhlbWUuc3BhY2luZyg0LjUpfTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgZ2V0TG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuaW1wb3J0IHsgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuLi9saWJyYXJ5LXBhbmVscy90eXBlcyc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IExpYnJhcnlQYW5lbHNTZWFyY2ggfSBmcm9tICcuLi9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNTZWFyY2gvTGlicmFyeVBhbmVsc1NlYXJjaCc7XG5pbXBvcnQgeyBPcGVuTGlicmFyeVBhbmVsTW9kYWwgfSBmcm9tICcuLi9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL09wZW5MaWJyYXJ5UGFuZWxNb2RhbC9PcGVuTGlicmFyeVBhbmVsTW9kYWwnO1xuaW1wb3J0IHsgZ2V0Rm9sZGVyQnlVaWQgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE93blByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyB1aWQ6IHN0cmluZyB9PiB7fVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUsIHByb3BzOiBPd25Qcm9wcykgPT4ge1xuICBjb25zdCB1aWQgPSBwcm9wcy5tYXRjaC5wYXJhbXMudWlkO1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgYGZvbGRlci1saWJyYXJ5LXBhbmVscy0ke3VpZH1gLCBnZXRMb2FkaW5nTmF2KDEpKSxcbiAgICBmb2xkZXJVaWQ6IHVpZCxcbiAgICBmb2xkZXI6IHN0YXRlLmZvbGRlcixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZ2V0Rm9sZGVyQnlVaWQsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgZnVuY3Rpb24gRm9sZGVyTGlicmFyeVBhbmVsc1BhZ2UoeyBuYXZNb2RlbCwgZ2V0Rm9sZGVyQnlVaWQsIGZvbGRlclVpZCwgZm9sZGVyIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUFzeW5jKGFzeW5jICgpID0+IGF3YWl0IGdldEZvbGRlckJ5VWlkKGZvbGRlclVpZCksIFtnZXRGb2xkZXJCeVVpZCwgZm9sZGVyVWlkXSk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8TGlicmFyeUVsZW1lbnREVE8gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgPExpYnJhcnlQYW5lbHNTZWFyY2hcbiAgICAgICAgICBvbkNsaWNrPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgICBjdXJyZW50Rm9sZGVySWQ9e2ZvbGRlci5pZH1cbiAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9uc1xuICAgICAgICAgIHNob3dTb3J0XG4gICAgICAgICAgc2hvd1BhbmVsRmlsdGVyXG4gICAgICAgIC8+XG4gICAgICAgIHtzZWxlY3RlZCA/IDxPcGVuTGlicmFyeVBhbmVsTW9kYWwgb25EaXNtaXNzPXsoKSA9PiBzZXRTZWxlY3RlZCh1bmRlZmluZWQpfSBsaWJyYXJ5UGFuZWw9e3NlbGVjdGVkfSAvPiA6IG51bGx9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoRm9sZGVyTGlicmFyeVBhbmVsc1BhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBhc3luY0Rpc3BhdGNoZXIgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxzVmlldy9hY3Rpb25zJztcbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciwgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRNb2RhbFN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWw6IEZDPFByb3BzPiA9ICh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzLCBvbkNvbmZpcm0gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBbeyBkYXNoYm9hcmRUaXRsZXMsIGxvYWRpbmdTdGF0ZSB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlcixcbiAgICBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luY0Rpc3BhdGNoKGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsKSk7XG4gIH0sIFthc3luY0Rpc3BhdGNoLCBsaWJyYXJ5UGFuZWxdKTtcbiAgY29uc3QgY29ubmVjdGVkID0gQm9vbGVhbihkYXNoYm9hcmRUaXRsZXMubGVuZ3RoKTtcbiAgY29uc3QgZG9uZSA9IGxvYWRpbmdTdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkRvbmU7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHRpdGxlPVwiRGVsZXRlIGxpYnJhcnkgcGFuZWxcIiBpY29uPVwidHJhc2gtYWx0XCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IGlzT3Blbj17dHJ1ZX0+XG4gICAgICB7IWRvbmUgPyA8TG9hZGluZ0luZGljYXRvciAvPiA6IG51bGx9XG4gICAgICB7ZG9uZSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29ubmVjdGVkID8gPEhhc0Nvbm5lY3RlZERhc2hib2FyZHMgZGFzaGJvYXJkVGl0bGVzPXtkYXNoYm9hcmRUaXRsZXN9IC8+IDogbnVsbH1cbiAgICAgICAgICB7IWNvbm5lY3RlZCA/IDxDb25maXJtIC8+IDogbnVsbH1cblxuICAgICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e29uQ29uZmlybX0gZGlzYWJsZWQ9e2Nvbm5lY3RlZH0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IExvYWRpbmdJbmRpY2F0b3I6IEZDID0gKCkgPT4gPHNwYW4+TG9hZGluZyBsaWJyYXJ5IHBhbmVsLi4uPC9zcGFuPjtcblxuY29uc3QgQ29uZmlybTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRNb2RhbFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUZXh0fT5EbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwYW5lbD88L2Rpdj47XG59O1xuXG5jb25zdCBIYXNDb25uZWN0ZWREYXNoYm9hcmRzOiBGQzx7IGRhc2hib2FyZFRpdGxlczogc3RyaW5nW10gfT4gPSAoeyBkYXNoYm9hcmRUaXRsZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBzdWZmaXggPSBkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAxID8gJ2Rhc2hib2FyZC4nIDogJ2Rhc2hib2FyZHMuJztcbiAgY29uc3QgbWVzc2FnZSA9IGAke2Rhc2hib2FyZFRpdGxlcy5sZW5ndGh9ICR7c3VmZml4fWA7XG4gIGlmIChkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5mb30+XG4gICAgICAgIHsnVGhpcyBsaWJyYXJ5IHBhbmVsIGNhbiBub3QgYmUgZGVsZXRlZCBiZWNhdXNlIGl0IGlzIGNvbm5lY3RlZCB0byAnfVxuICAgICAgICA8c3Ryb25nPnttZXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7JyBSZW1vdmUgdGhlIGxpYnJhcnkgcGFuZWwgZnJvbSB0aGUgZGFzaGJvYXJkcyBsaXN0ZWQgYmVsb3cgYW5kIHJldHJ5Lid9XG4gICAgICA8L3A+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubXlUYWJsZX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGFzaGJvYXJkIG5hbWU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGFzaGJvYXJkVGl0bGVzLm1hcCgodGl0bGUsIGkpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2BkYXNoLXRpdGxlLSR7aX1gfT5cbiAgICAgICAgICAgICAgPHRkPnt0aXRsZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2hSZXN1bHQsIExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyBhcyBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IHNlYXJjaENvbXBsZXRlZCB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE8pOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gYXdhaXQgYXBpR2V0Q29ubmVjdGVkRGFzaGJvYXJkcyhsaWJyYXJ5UGFuZWwudWlkKTtcbiAgICBkaXNwYXRjaChzZWFyY2hDb21wbGV0ZWQoeyBkYXNoYm9hcmRzIH0pKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdHlwZXMnO1xuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGludGVyZmFjZSBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGU7XG4gIGRhc2hib2FyZFRpdGxlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9IHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyxcbiAgZGFzaGJvYXJkVGl0bGVzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hDb21wbGV0ZWQgPSBjcmVhdGVBY3Rpb248eyBkYXNoYm9hcmRzOiBEYXNoYm9hcmRTZWFyY2hIaXRbXSB9PihcbiAgJ2xpYnJhcnlQYW5lbHMvZGVsZXRlL3NlYXJjaENvbXBsZXRlZCdcbik7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFJlZHVjZXIgPSAoXG4gIHN0YXRlOiBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlID0gaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUsXG4gIGFjdGlvbjogQW55QWN0aW9uXG4pOiBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlID0+IHtcbiAgaWYgKHNlYXJjaENvbXBsZXRlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZGFzaGJvYXJkVGl0bGVzOiBhY3Rpb24ucGF5bG9hZC5kYXNoYm9hcmRzLm1hcCgoZCkgPT4gZC50aXRsZSksXG4gICAgICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgTGluaywgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGFuZWxUeXBlQ2FyZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZCc7XG5pbXBvcnQgeyBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbCB9IGZyb20gJy4uL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZ2V0UGFuZWxQbHVnaW5Ob3RGb3VuZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1BhbmVsUGx1Z2luRXJyb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbENhcmRQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ2xpY2s6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIG9uRGVsZXRlPzogKHBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTykgPT4gdm9pZDtcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTGlicmFyeVBhbmVsQ2FyZDogUmVhY3QuRkM8TGlicmFyeVBhbmVsQ2FyZFByb3BzICYgeyBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9PiA9ICh7XG4gIGxpYnJhcnlQYW5lbCxcbiAgb25DbGljayxcbiAgb25EZWxldGUsXG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zLFxufSkgPT4ge1xuICBjb25zdCBbc2hvd0RlbGV0aW9uTW9kYWwsIHNldFNob3dEZWxldGlvbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkRlbGV0ZVBhbmVsID0gKCkgPT4ge1xuICAgIG9uRGVsZXRlPy4obGlicmFyeVBhbmVsKTtcbiAgICBzZXRTaG93RGVsZXRpb25Nb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcGFuZWxQbHVnaW4gPSBjb25maWcucGFuZWxzW2xpYnJhcnlQYW5lbC5tb2RlbC50eXBlXSA/PyBnZXRQYW5lbFBsdWdpbk5vdEZvdW5kKGxpYnJhcnlQYW5lbC5tb2RlbC50eXBlKS5tZXRhO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYW5lbFR5cGVDYXJkXG4gICAgICAgIGlzQ3VycmVudD17ZmFsc2V9XG4gICAgICAgIHRpdGxlPXtsaWJyYXJ5UGFuZWwubmFtZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2xpYnJhcnlQYW5lbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgcGx1Z2luPXtwYW5lbFBsdWdpbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaz8uKGxpYnJhcnlQYW5lbCl9XG4gICAgICAgIG9uRGVsZXRlPXtzaG93U2Vjb25kYXJ5QWN0aW9ucyA/ICgpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKHRydWUpIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICA8Rm9sZGVyTGluayBsaWJyYXJ5UGFuZWw9e2xpYnJhcnlQYW5lbH0gLz5cbiAgICAgIDwvUGFuZWxUeXBlQ2FyZD5cbiAgICAgIHtzaG93RGVsZXRpb25Nb2RhbCAmJiAoXG4gICAgICAgIDxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFxuICAgICAgICAgIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfVxuICAgICAgICAgIG9uQ29uZmlybT17b25EZWxldGVQYW5lbH1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgRm9sZGVyTGlua1Byb3BzIHtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbn1cblxuZnVuY3Rpb24gRm9sZGVyTGluayh7IGxpYnJhcnlQYW5lbCB9OiBGb2xkZXJMaW5rUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghbGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkICYmICFsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWxpYnJhcnlQYW5lbC5tZXRhLmZvbGRlclVpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgICAgPEljb24gbmFtZT17J2ZvbGRlcid9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkcy9mLyR7bGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkfWB9PlxuICAgICAgICA8SWNvbiBuYW1lPXsnZm9sZGVyLXVwbG9hZCd9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIG1ldGFDb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuXG4gICAgICBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgfVxuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgdXNlU3R5bGVzMiwgVmVydGljYWxHcm91cCwgRmlsdGVySW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQYW5lbFBsdWdpbk1ldGEsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFNvcnRQaWNrZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L1NvcnRQaWNrZXInO1xuaW1wb3J0IHsgUGFuZWxUeXBlRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb25lbnRzL1BhbmVsVHlwZUZpbHRlci9QYW5lbFR5cGVGaWx0ZXInO1xuaW1wb3J0IHsgTGlicmFyeVBhbmVsc1ZpZXcgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxzVmlldy9MaWJyYXJ5UGFuZWxzVmlldyc7XG5pbXBvcnQgeyBERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEZvbGRlckZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9uZW50cy9Gb2xkZXJGaWx0ZXIvRm9sZGVyRmlsdGVyJztcbmltcG9ydCB7IEZvbGRlckluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQge1xuICBmb2xkZXJGaWx0ZXJDaGFuZ2VkLFxuICBpbml0aWFsTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlLFxuICBsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlcixcbiAgcGFuZWxGaWx0ZXJDaGFuZ2VkLFxuICBzZWFyY2hDaGFuZ2VkLFxuICBzb3J0Q2hhbmdlZCxcbn0gZnJvbSAnLi9yZWR1Y2VyJztcblxuZXhwb3J0IGVudW0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQge1xuICBUaWdodCA9ICd0aWdodCcsXG4gIFNwYWNpb3VzID0gJ3NwYWNpb3VzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaWJyYXJ5UGFuZWxzU2VhcmNoUHJvcHMge1xuICBvbkNsaWNrOiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICB2YXJpYW50PzogTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQ7XG4gIHNob3dTb3J0PzogYm9vbGVhbjtcbiAgc2hvd1BhbmVsRmlsdGVyPzogYm9vbGVhbjtcbiAgc2hvd0ZvbGRlckZpbHRlcj86IGJvb2xlYW47XG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zPzogYm9vbGVhbjtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG4gIGN1cnJlbnRGb2xkZXJJZD86IG51bWJlcjtcbiAgcGVyUGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IExpYnJhcnlQYW5lbHNTZWFyY2ggPSAoe1xuICBvbkNsaWNrLFxuICB2YXJpYW50ID0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQuU3BhY2lvdXMsXG4gIGN1cnJlbnRQYW5lbElkLFxuICBjdXJyZW50Rm9sZGVySWQsXG4gIHBlclBhZ2UgPSBERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04sXG4gIHNob3dQYW5lbEZpbHRlciA9IGZhbHNlLFxuICBzaG93Rm9sZGVyRmlsdGVyID0gZmFsc2UsXG4gIHNob3dTb3J0ID0gZmFsc2UsXG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zID0gZmFsc2UsXG59OiBMaWJyYXJ5UGFuZWxzU2VhcmNoUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3sgc29ydERpcmVjdGlvbiwgcGFuZWxGaWx0ZXIsIGZvbGRlckZpbHRlciwgc2VhcmNoUXVlcnkgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlciwge1xuICAgIC4uLmluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUsXG4gICAgZm9sZGVyRmlsdGVyOiBjdXJyZW50Rm9sZGVySWQgPyBbY3VycmVudEZvbGRlcklkLnRvU3RyaW5nKDEwKV0gOiBbXSxcbiAgfSk7XG4gIGNvbnN0IG9uRmlsdGVyQ2hhbmdlID0gKHNlYXJjaFN0cmluZzogc3RyaW5nKSA9PiBkaXNwYXRjaChzZWFyY2hDaGFuZ2VkKHNlYXJjaFN0cmluZykpO1xuICBjb25zdCBvblNvcnRDaGFuZ2UgPSAoc29ydGluZzogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IGRpc3BhdGNoKHNvcnRDaGFuZ2VkKHNvcnRpbmcpKTtcbiAgY29uc3Qgb25Gb2xkZXJGaWx0ZXJDaGFuZ2UgPSAoZm9sZGVyczogRm9sZGVySW5mb1tdKSA9PiBkaXNwYXRjaChmb2xkZXJGaWx0ZXJDaGFuZ2VkKGZvbGRlcnMpKTtcbiAgY29uc3Qgb25QYW5lbEZpbHRlckNoYW5nZSA9IChwbHVnaW5zOiBQYW5lbFBsdWdpbk1ldGFbXSkgPT4gZGlzcGF0Y2gocGFuZWxGaWx0ZXJDaGFuZ2VkKHBsdWdpbnMpKTtcblxuICBpZiAodmFyaWFudCA9PT0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQuU3BhY2lvdXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibGdcIj5cbiAgICAgICAgICA8RmlsdGVySW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnU2VhcmNoIGJ5IG5hbWUgb3IgZGVzY3JpcHRpb24nfVxuICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblJvd30+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwXG4gICAgICAgICAgICAgIHNwYWNpbmc9XCJzbVwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9eyhzaG93U29ydCAmJiBzaG93UGFuZWxGaWx0ZXIpIHx8IHNob3dGb2xkZXJGaWx0ZXIgPyAnc3BhY2UtYmV0d2VlbicgOiAnZmxleC1lbmQnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2hvd1NvcnQgJiYgKFxuICAgICAgICAgICAgICAgIDxTb3J0UGlja2VyIHZhbHVlPXtzb3J0RGlyZWN0aW9ufSBvbkNoYW5nZT17b25Tb3J0Q2hhbmdlfSBmaWx0ZXI9e1snYWxwaGEtYXNjJywgJ2FscGhhLWRlc2MnXX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cFxuICAgICAgICAgICAgICAgIHNwYWNpbmc9XCJzbVwiXG4gICAgICAgICAgICAgICAganVzdGlmeT17c2hvd0ZvbGRlckZpbHRlciAmJiBzaG93UGFuZWxGaWx0ZXIgPyAnc3BhY2UtYmV0d2VlbicgOiAnZmxleC1lbmQnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Nob3dGb2xkZXJGaWx0ZXIgJiYgPEZvbGRlckZpbHRlciBvbkNoYW5nZT17b25Gb2xkZXJGaWx0ZXJDaGFuZ2V9IC8+fVxuICAgICAgICAgICAgICAgIHtzaG93UGFuZWxGaWx0ZXIgJiYgPFBhbmVsVHlwZUZpbHRlciBvbkNoYW5nZT17b25QYW5lbEZpbHRlckNoYW5nZX0gLz59XG4gICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWJyYXJ5UGFuZWxzVmlld30+XG4gICAgICAgICAgICA8TGlicmFyeVBhbmVsc1ZpZXdcbiAgICAgICAgICAgICAgb25DbGlja0NhcmQ9e29uQ2xpY2t9XG4gICAgICAgICAgICAgIHNlYXJjaFN0cmluZz17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIHNvcnREaXJlY3Rpb249e3NvcnREaXJlY3Rpb259XG4gICAgICAgICAgICAgIHBhbmVsRmlsdGVyPXtwYW5lbEZpbHRlcn1cbiAgICAgICAgICAgICAgZm9sZGVyRmlsdGVyPXtmb2xkZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYW5lbElkPXtjdXJyZW50UGFuZWxJZH1cbiAgICAgICAgICAgICAgc2hvd1NlY29uZGFyeUFjdGlvbnM9e3Nob3dTZWNvbmRhcnlBY3Rpb25zfVxuICAgICAgICAgICAgICBwZXJQYWdlPXtwZXJQYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cInhzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlnaHRCdXR0b25Sb3d9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlnaHRGaWx0ZXJ9PlxuICAgICAgICAgICAgPEZpbHRlcklucHV0IHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfSBwbGFjZWhvbGRlcj17J1NlYXJjaCBieSBuYW1lJ30gd2lkdGg9ezB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWdodFNvcnRGaWx0ZXJ9PlxuICAgICAgICAgICAge3Nob3dTb3J0ICYmIDxTb3J0UGlja2VyIHZhbHVlPXtzb3J0RGlyZWN0aW9ufSBvbkNoYW5nZT17b25Tb3J0Q2hhbmdlfSAvPn1cbiAgICAgICAgICAgIHtzaG93Rm9sZGVyRmlsdGVyICYmIDxGb2xkZXJGaWx0ZXIgb25DaGFuZ2U9e29uRm9sZGVyRmlsdGVyQ2hhbmdlfSBtYXhNZW51SGVpZ2h0PXsyMDB9IC8+fVxuICAgICAgICAgICAge3Nob3dQYW5lbEZpbHRlciAmJiA8UGFuZWxUeXBlRmlsdGVyIG9uQ2hhbmdlPXtvblBhbmVsRmlsdGVyQ2hhbmdlfSBtYXhNZW51SGVpZ2h0PXsyMDB9IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWJyYXJ5UGFuZWxzVmlld30+XG4gICAgICAgICAgPExpYnJhcnlQYW5lbHNWaWV3XG4gICAgICAgICAgICBvbkNsaWNrQ2FyZD17b25DbGlja31cbiAgICAgICAgICAgIHNlYXJjaFN0cmluZz17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBzb3J0RGlyZWN0aW9uPXtzb3J0RGlyZWN0aW9ufVxuICAgICAgICAgICAgcGFuZWxGaWx0ZXI9e3BhbmVsRmlsdGVyfVxuICAgICAgICAgICAgZm9sZGVyRmlsdGVyPXtmb2xkZXJGaWx0ZXJ9XG4gICAgICAgICAgICBjdXJyZW50UGFuZWxJZD17Y3VycmVudFBhbmVsSWR9XG4gICAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9ucz17c2hvd1NlY29uZGFyeUFjdGlvbnN9XG4gICAgICAgICAgICBwZXJQYWdlPXtwZXJQYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgYnV0dG9uUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9OyAvLyBDbGVhciB0eXBlcyBsaW5rXG4gICAgYCxcbiAgICB0aWdodEJ1dHRvblJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDQpfTsgLy8gQ2xlYXIgdHlwZXMgbGlua1xuICAgIGAsXG4gICAgdGlnaHRGaWx0ZXI6IGNzc2BcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBgLFxuICAgIHRpZ2h0U29ydEZpbHRlcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAsIDAsIDAsIDAuNSl9O1xuICAgIGAsXG4gICAgbGlicmFyeVBhbmVsc1ZpZXc6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IFBhbmVsUGx1Z2luTWV0YSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEZvbGRlckluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlIHtcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgc29ydERpcmVjdGlvbj86IHN0cmluZztcbiAgcGFuZWxGaWx0ZXI6IHN0cmluZ1tdO1xuICBmb2xkZXJGaWx0ZXI6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZTogTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlID0ge1xuICBzZWFyY2hRdWVyeTogJycsXG4gIHBhbmVsRmlsdGVyOiBbXSxcbiAgZm9sZGVyRmlsdGVyOiBbXSxcbiAgc29ydERpcmVjdGlvbjogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaENoYW5nZWQgPSBjcmVhdGVBY3Rpb248c3RyaW5nPignbGlicmFyeVBhbmVscy9zZWFyY2gvc2VhcmNoQ2hhbmdlZCcpO1xuZXhwb3J0IGNvbnN0IHNvcnRDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PignbGlicmFyeVBhbmVscy9zZWFyY2gvc29ydENoYW5nZWQnKTtcbmV4cG9ydCBjb25zdCBwYW5lbEZpbHRlckNoYW5nZWQgPSBjcmVhdGVBY3Rpb248UGFuZWxQbHVnaW5NZXRhW10+KCdsaWJyYXJ5UGFuZWxzL3NlYXJjaC9wYW5lbEZpbHRlckNoYW5nZWQnKTtcbmV4cG9ydCBjb25zdCBmb2xkZXJGaWx0ZXJDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPEZvbGRlckluZm9bXT4oJ2xpYnJhcnlQYW5lbHMvc2VhcmNoL2ZvbGRlckZpbHRlckNoYW5nZWQnKTtcblxuZXhwb3J0IGNvbnN0IGxpYnJhcnlQYW5lbHNTZWFyY2hSZWR1Y2VyID0gKHN0YXRlOiBMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSA9PiB7XG4gIGlmIChzZWFyY2hDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoUXVlcnk6IGFjdGlvbi5wYXlsb2FkIH07XG4gIH1cblxuICBpZiAoc29ydENoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBzb3J0RGlyZWN0aW9uOiBhY3Rpb24ucGF5bG9hZC52YWx1ZSB9O1xuICB9XG5cbiAgaWYgKHBhbmVsRmlsdGVyQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhbmVsRmlsdGVyOiBhY3Rpb24ucGF5bG9hZC5tYXAoKHApID0+IHAuaWQpIH07XG4gIH1cblxuICBpZiAoZm9sZGVyRmlsdGVyQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvbGRlckZpbHRlcjogYWN0aW9uLnBheWxvYWQubWFwKChmKSA9PiBTdHJpbmcoZi5pZCEpKSB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUsIExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5UGFuZWxDYXJkIH0gZnJvbSAnLi4vTGlicmFyeVBhbmVsQ2FyZC9MaWJyYXJ5UGFuZWxDYXJkJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgY2hhbmdlUGFnZSwgaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgeyBhc3luY0Rpc3BhdGNoZXIsIGRlbGV0ZUxpYnJhcnlQYW5lbCwgc2VhcmNoRm9yTGlicmFyeVBhbmVscyB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmludGVyZmFjZSBMaWJyYXJ5UGFuZWxWaWV3UHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG9uQ2xpY2tDYXJkOiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICBzaG93U2Vjb25kYXJ5QWN0aW9ucz86IGJvb2xlYW47XG4gIGN1cnJlbnRQYW5lbElkPzogc3RyaW5nO1xuICBzZWFyY2hTdHJpbmc6IHN0cmluZztcbiAgc29ydERpcmVjdGlvbj86IHN0cmluZztcbiAgcGFuZWxGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgZm9sZGVyRmlsdGVyPzogc3RyaW5nW107XG4gIHBlclBhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBMaWJyYXJ5UGFuZWxzVmlldzogUmVhY3QuRkM8TGlicmFyeVBhbmVsVmlld1Byb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgb25DbGlja0NhcmQsXG4gIHNlYXJjaFN0cmluZyxcbiAgc29ydERpcmVjdGlvbixcbiAgcGFuZWxGaWx0ZXIsXG4gIGZvbGRlckZpbHRlcixcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnMsXG4gIGN1cnJlbnRQYW5lbElkOiBjdXJyZW50UGFuZWwsXG4gIHBlclBhZ2U6IHByb3BzUGVyUGFnZSA9IDQwLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0UGFuZWxWaWV3U3R5bGVzKTtcbiAgY29uc3QgW3sgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgbnVtYmVyT2ZQYWdlcywgbG9hZGluZ1N0YXRlLCBjdXJyZW50UGFuZWxJZCB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlcixcbiAgICB7XG4gICAgICAuLi5pbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSxcbiAgICAgIGN1cnJlbnRQYW5lbElkOiBjdXJyZW50UGFuZWwsXG4gICAgICBwZXJQYWdlOiBwcm9wc1BlclBhZ2UsXG4gICAgfVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRGVib3VuY2UoXG4gICAgKCkgPT5cbiAgICAgIGFzeW5jRGlzcGF0Y2goXG4gICAgICAgIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoe1xuICAgICAgICAgIHNlYXJjaFN0cmluZyxcbiAgICAgICAgICBzb3J0RGlyZWN0aW9uLFxuICAgICAgICAgIHBhbmVsRmlsdGVyLFxuICAgICAgICAgIGZvbGRlckZpbHRlcixcbiAgICAgICAgICBwYWdlLFxuICAgICAgICAgIHBlclBhZ2UsXG4gICAgICAgICAgY3VycmVudFBhbmVsSWQsXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgIDMwMCxcbiAgICBbc2VhcmNoU3RyaW5nLCBzb3J0RGlyZWN0aW9uLCBwYW5lbEZpbHRlciwgZm9sZGVyRmlsdGVyLCBwYWdlLCBhc3luY0Rpc3BhdGNoXVxuICApO1xuICBjb25zdCBvbkRlbGV0ZSA9ICh7IHVpZCB9OiBMaWJyYXJ5RWxlbWVudERUTykgPT5cbiAgICBhc3luY0Rpc3BhdGNoKGRlbGV0ZUxpYnJhcnlQYW5lbCh1aWQsIHsgc2VhcmNoU3RyaW5nLCBwYWdlLCBwZXJQYWdlIH0pKTtcbiAgY29uc3Qgb25QYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4gYXN5bmNEaXNwYXRjaChjaGFuZ2VQYWdlKHsgcGFnZSB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRhaW5lciwgY2xhc3NOYW1lKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpYnJhcnlQYW5lbExpc3R9PlxuICAgICAgICB7bG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyA/IChcbiAgICAgICAgICA8cD5Mb2FkaW5nIGxpYnJhcnkgcGFuZWxzLi4uPC9wPlxuICAgICAgICApIDogbGlicmFyeVBhbmVscy5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vUGFuZWxzRm91bmR9Pk5vIGxpYnJhcnkgcGFuZWxzIGZvdW5kLjwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBsaWJyYXJ5UGFuZWxzPy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxMaWJyYXJ5UGFuZWxDYXJkXG4gICAgICAgICAgICAgIGtleT17YGxpYnJhcnktcGFuZWw9JHtpfWB9XG4gICAgICAgICAgICAgIGxpYnJhcnlQYW5lbD17aXRlbX1cbiAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ2FyZH1cbiAgICAgICAgICAgICAgc2hvd1NlY29uZGFyeUFjdGlvbnM9e3Nob3dTZWNvbmRhcnlBY3Rpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7bGlicmFyeVBhbmVscy5sZW5ndGggPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn0+XG4gICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlfVxuICAgICAgICAgICAgbnVtYmVyT2ZQYWdlcz17bnVtYmVyT2ZQYWdlc31cbiAgICAgICAgICAgIG9uTmF2aWdhdGU9e29uUGFnZUNoYW5nZX1cbiAgICAgICAgICAgIGhpZGVXaGVuU2luZ2xlUGFnZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0UGFuZWxWaWV3U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYCxcbiAgICBsaWJyYXJ5UGFuZWxMaXN0OiBjc3NgXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC1nYXA6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBzZWFyY2hIZWFkZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYCxcbiAgICBuZXdQYW5lbEJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBwYWdpbmF0aW9uOiBjc3NgXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgIGAsXG4gICAgbm9QYW5lbHNGb3VuZDogY3NzYFxuICAgICAgbGFiZWw6IG5vUGFuZWxzRm91bmQ7XG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgb2YsIFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXBUbywgbWVyZ2VNYXAsIHNoYXJlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbCBhcyBhcGlEZWxldGVMaWJyYXJ5UGFuZWwsIGdldExpYnJhcnlQYW5lbHMgfSBmcm9tICcuLi8uLi9zdGF0ZS9hcGknO1xuaW1wb3J0IHsgaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGluaXRTZWFyY2gsIHNlYXJjaENvbXBsZXRlZCB9IGZyb20gJy4vcmVkdWNlcic7XG5cbnR5cGUgRGlzcGF0Y2hSZXN1bHQgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pID0+IHZvaWQ7XG5pbnRlcmZhY2UgU2VhcmNoQXJncyB7XG4gIHBlclBhZ2U6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xuICBzZWFyY2hTdHJpbmc6IHN0cmluZztcbiAgc29ydERpcmVjdGlvbj86IHN0cmluZztcbiAgcGFuZWxGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgZm9sZGVyRmlsdGVyPzogc3RyaW5nW107XG4gIGN1cnJlbnRQYW5lbElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoRm9yTGlicmFyeVBhbmVscyhhcmdzOiBTZWFyY2hBcmdzKTogRGlzcGF0Y2hSZXN1bHQge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIGNvbnN0IGRhdGFPYnNlcnZhYmxlID0gZnJvbShcbiAgICAgIGdldExpYnJhcnlQYW5lbHMoe1xuICAgICAgICBzZWFyY2hTdHJpbmc6IGFyZ3Muc2VhcmNoU3RyaW5nLFxuICAgICAgICBwZXJQYWdlOiBhcmdzLnBlclBhZ2UsXG4gICAgICAgIHBhZ2U6IGFyZ3MucGFnZSxcbiAgICAgICAgZXhjbHVkZVVpZDogYXJncy5jdXJyZW50UGFuZWxJZCxcbiAgICAgICAgc29ydERpcmVjdGlvbjogYXJncy5zb3J0RGlyZWN0aW9uLFxuICAgICAgICB0eXBlRmlsdGVyOiBhcmdzLnBhbmVsRmlsdGVyLFxuICAgICAgICBmb2xkZXJGaWx0ZXI6IGFyZ3MuZm9sZGVyRmlsdGVyLFxuICAgICAgfSlcbiAgICApLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoeyBwZXJQYWdlLCBlbGVtZW50czogbGlicmFyeVBhbmVscywgcGFnZSwgdG90YWxDb3VudCB9KSA9PlxuICAgICAgICBvZihzZWFyY2hDb21wbGV0ZWQoeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50IH0pKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBvZihzZWFyY2hDb21wbGV0ZWQoeyAuLi5pbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgcGFnZTogYXJncy5wYWdlLCBwZXJQYWdlOiBhcmdzLnBlclBhZ2UgfSkpO1xuICAgICAgfSksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSksIC8vIG1ha2Ugc3VyZSB3ZSB1bnN1YnNjcmliZVxuICAgICAgc2hhcmUoKVxuICAgICk7XG5cbiAgICBzdWJzY3JpcHRpb24uYWRkKFxuICAgICAgLy8gSWYgNTBtcyB3aXRob3V0IGEgcmVzcG9uc2UgZGlzcGF0Y2ggYSBsb2FkaW5nIHN0YXRlXG4gICAgICAvLyBtYXBUbyB3aWxsIHRyYW5zbGF0ZSB0aGUgdGltZXIgZXZlbnQgaW50byBhIGxvYWRpbmcgc3RhdGVcbiAgICAgIC8vIHRha2VVbnRpbCB3aWxsIGNhbmNlbCB0aGUgdGltZXIgZW1pdCB3aGVuIGZpcnN0IHJlc3BvbnNlIGlzIHJlY2VpdmVkIG9uIHRoZSBkYXRhT2JzZXJ2YWJsZVxuICAgICAgbWVyZ2UodGltZXIoNTApLnBpcGUobWFwVG8oaW5pdFNlYXJjaCgpKSwgdGFrZVVudGlsKGRhdGFPYnNlcnZhYmxlKSksIGRhdGFPYnNlcnZhYmxlKS5zdWJzY3JpYmUoZGlzcGF0Y2gpXG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpYnJhcnlQYW5lbCh1aWQ6IHN0cmluZywgYXJnczogU2VhcmNoQXJncyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGlEZWxldGVMaWJyYXJ5UGFuZWwodWlkKTtcbiAgICAgIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoYXJncykoZGlzcGF0Y2gpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXN5bmNEaXNwYXRjaGVyKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uOiBhbnkpIHtcbiAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gpO1xuICAgIH1cbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbHNWaWV3U3RhdGUge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZTtcbiAgbGlicmFyeVBhbmVsczogTGlicmFyeUVsZW1lbnREVE9bXTtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBwZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbnVtYmVyT2ZQYWdlczogbnVtYmVyO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlOiBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlID0ge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Mb2FkaW5nLFxuICBsaWJyYXJ5UGFuZWxzOiBbXSxcbiAgdG90YWxDb3VudDogMCxcbiAgcGVyUGFnZTogNDAsXG4gIHBhZ2U6IDEsXG4gIG51bWJlck9mUGFnZXM6IDAsXG4gIGN1cnJlbnRQYW5lbElkOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFNlYXJjaCA9IGNyZWF0ZUFjdGlvbignbGlicmFyeVBhbmVscy92aWV3L2luaXRTZWFyY2gnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hDb21wbGV0ZWQgPSBjcmVhdGVBY3Rpb248XG4gIE9taXQ8TGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgJ2N1cnJlbnRQYW5lbElkJyB8ICdzZWFyY2hTdHJpbmcnIHwgJ2xvYWRpbmdTdGF0ZScgfCAnbnVtYmVyT2ZQYWdlcyc+XG4+KCdsaWJyYXJ5UGFuZWxzL3ZpZXcvc2VhcmNoQ29tcGxldGVkJyk7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlID0gY3JlYXRlQWN0aW9uPFBpY2s8TGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgJ3BhZ2UnPj4oJ2xpYnJhcnlQYW5lbHMvdmlldy9jaGFuZ2VQYWdlJyk7XG5cbmV4cG9ydCBjb25zdCBsaWJyYXJ5UGFuZWxzVmlld1JlZHVjZXIgPSAoc3RhdGU6IExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSA9PiB7XG4gIGlmIChpbml0U2VhcmNoLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyB9O1xuICB9XG5cbiAgaWYgKHNlYXJjaENvbXBsZXRlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBwZXJQYWdlKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsaWJyYXJ5UGFuZWxzLFxuICAgICAgcGVyUGFnZSxcbiAgICAgIHRvdGFsQ291bnQsXG4gICAgICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgbnVtYmVyT2ZQYWdlcyxcbiAgICAgIHBhZ2U6IHBhZ2UgPiBudW1iZXJPZlBhZ2VzID8gcGFnZSAtIDEgOiBwYWdlLFxuICAgIH07XG4gIH1cblxuICBpZiAoY2hhbmdlUGFnZS5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2U6IGFjdGlvbi5wYXlsb2FkLnBhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQXN5bmNTZWxlY3QsIEJ1dHRvbiwgTW9kYWwsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC90eXBlcyc7XG5pbXBvcnQgeyBnZXRDb25uZWN0ZWREYXNoYm9hcmRzLCBnZXRMaWJyYXJ5UGFuZWxDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVuTGlicmFyeVBhbmVsTW9kYWxQcm9wcyB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9wZW5MaWJyYXJ5UGFuZWxNb2RhbCh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzIH06IE9wZW5MaWJyYXJ5UGFuZWxNb2RhbFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb3B0aW9uLCBzZXRPcHRpb25dID0gdXNlU3RhdGU8U2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29ubmVjdGVkRGFzaGJvYXJkcyA9IGF3YWl0IGdldExpYnJhcnlQYW5lbENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsLnVpZCk7XG4gICAgICBzZXRDb25uZWN0ZWQoY29ubmVjdGVkRGFzaGJvYXJkcy5sZW5ndGgpO1xuICAgIH07XG4gICAgZ2V0Q29ubmVjdGVkKCk7XG4gIH0sIFtsaWJyYXJ5UGFuZWwudWlkXSk7XG4gIGNvbnN0IGxvYWRPcHRpb25zID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlYXJjaFN0cmluZzogc3RyaW5nKSA9PiBsb2FkT3B0aW9uc0FzeW5jKGxpYnJhcnlQYW5lbC51aWQsIHNlYXJjaFN0cmluZywgc2V0TG9hZGluZyksXG4gICAgW2xpYnJhcnlQYW5lbC51aWRdXG4gICk7XG4gIGNvbnN0IGRlYm91bmNlZExvYWRPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBkZWJvdW5jZShsb2FkT3B0aW9ucywgMzAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pLFxuICAgIFtsb2FkT3B0aW9uc11cbiAgKTtcbiAgY29uc3Qgb25WaWV3UGFuZWwgPSAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXJsVXRpbC5yZW5kZXJVcmwoYC9kLyR7b3B0aW9uPy52YWx1ZT8udWlkfWAsIHt9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdGl0bGU9XCJWaWV3IHBhbmVsIGluIGRhc2hib2FyZFwiIG9uRGlzbWlzcz17b25EaXNtaXNzfSBvbkNsaWNrQmFja2Ryb3A9e29uRGlzbWlzc30gaXNPcGVuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7Y29ubmVjdGVkID09PSAwID8gKFxuICAgICAgICAgIDxzcGFuPlBhbmVsIGlzIG5vdCBsaW5rZWQgdG8gYSBkYXNoYm9hcmQuIEFkZCB0aGUgcGFuZWwgdG8gYSBkYXNoYm9hcmQgYW5kIHJldHJ5Ljwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtjb25uZWN0ZWQgPiAwID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhpcyBwYW5lbCBpcyBiZWluZyB1c2VkIGlueycgJ31cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICB7Y29ubmVjdGVkfSB7Y29ubmVjdGVkID4gMSA/ICdkYXNoYm9hcmRzJyA6ICdkYXNoYm9hcmQnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgLlBsZWFzZSBjaG9vc2Ugd2hpY2ggZGFzaGJvYXJkIHRvIHZpZXcgdGhlIHBhbmVsIGluOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9ucz17dHJ1ZX1cbiAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZExvYWRPcHRpb25zfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0T3B0aW9ufVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0IHR5cGluZyB0byBzZWFyY2ggZm9yIGRhc2hib2FyZFwiXG4gICAgICAgICAgICAgIG5vT3B0aW9uc01lc3NhZ2U9XCJObyBkYXNoYm9hcmRzIGZvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uVmlld1BhbmVsfSBkaXNhYmxlZD17IUJvb2xlYW4ob3B0aW9uKX0+XG4gICAgICAgICAge29wdGlvbiA/IGBWaWV3IHBhbmVsIGluICR7b3B0aW9uPy5sYWJlbH0uLi5gIDogJ1ZpZXcgcGFuZWwgaW4gZGFzaGJvYXJkLi4uJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICA8L01vZGFsPlxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkT3B0aW9uc0FzeW5jKHVpZDogc3RyaW5nLCBzZWFyY2hTdHJpbmc6IHN0cmluZywgc2V0TG9hZGluZzogKGxvYWRpbmc6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgc2V0TG9hZGluZyh0cnVlKTtcbiAgY29uc3Qgc2VhcmNoSGl0cyA9IGF3YWl0IGdldENvbm5lY3RlZERhc2hib2FyZHModWlkKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlYXJjaEhpdHNcbiAgICAuZmlsdGVyKChkKSA9PiBkLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpKVxuICAgIC5tYXAoKGQpID0+ICh7IGxhYmVsOiBkLnRpdGxlLCB2YWx1ZTogZCB9KSk7XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIG15VGFibGU6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDIwNHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXIucmFkaXVzLnNtfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJnM307XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzF9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLm1kfTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIGNvbG9yOiAjNTM4YWRlO1xuICAgICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICAgIH1cblxuICAgICAgdGgsXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxM3B4O1xuICAgICAgICBoZWlnaHQ6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgICB9XG5cbiAgICAgIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgbm90ZVRleHRib3g6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgYCxcbiAgICB0ZXh0SW5mbzogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICBgLFxuICAgIGRhc2hib2FyZFNlYXJjaDogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIG1vZGFsOiBjc3NgXG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgYCxcbiAgICBtb2RhbFRleHQ6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmhlYWRpbmcuaDR9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygke3RoZW1lLnNwYWNpbmcuZH0gKiAyKTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcuZH07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUsIFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEljb25CdXR0b24sIFBsdWdpblNpZ25hdHVyZUJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IFBsdWdpblN0YXRlSW5mbyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNDdXJyZW50OiBib29sZWFuO1xuICBwbHVnaW46IFBhbmVsUGx1Z2luTWV0YTtcbiAgdGl0bGU6IHN0cmluZztcbiAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXI8SFRNTERpdkVsZW1lbnQ+O1xuICBvbkRlbGV0ZT86ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2hvd0JhZGdlPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbFR5cGVDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBpc0N1cnJlbnQsXG4gIHRpdGxlLFxuICBwbHVnaW4sXG4gIG9uQ2xpY2ssXG4gIG9uRGVsZXRlLFxuICBkaXNhYmxlZCxcbiAgc2hvd0JhZGdlLFxuICBkZXNjcmlwdGlvbixcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgY3NzQ2xhc3MgPSBjeCh7XG4gICAgW3N0eWxlcy5pdGVtXTogdHJ1ZSxcbiAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQgfHwgcGx1Z2luLnN0YXRlID09PSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkLFxuICAgIFtzdHlsZXMuY3VycmVudF06IGlzQ3VycmVudCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUGx1Z2luVmlzdWFsaXphdGlvbi5pdGVtKHBsdWdpbi5uYW1lKX1cbiAgICAgIG9uQ2xpY2s9e2Rpc2FibGVkID8gdW5kZWZpbmVkIDogb25DbGlja31cbiAgICAgIHRpdGxlPXtpc0N1cnJlbnQgPyAnQ2xpY2sgYWdhaW4gdG8gY2xvc2UgdGhpcyBzZWN0aW9uJyA6IHBsdWdpbi5uYW1lfVxuICAgID5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e3BsdWdpbi5pbmZvLmxvZ29zLnNtYWxsfSBhbHQ9XCJcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1Db250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dGl0bGV9PC9kaXY+XG4gICAgICAgIHtkZXNjcmlwdGlvbiA/IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9zcGFuPiA6IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dCYWRnZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYmFkZ2UsIGRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZCl9PlxuICAgICAgICAgIDxQYW5lbFBsdWdpbkJhZGdlIHBsdWdpbj17cGx1Z2lufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG5hbWU9XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb25EZWxldGUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUJ1dHRvbn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIGJ1dHRvbiBvbiBwYW5lbCB0eXBlIGNhcmRcIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhbmVsVHlwZUNhcmQuZGlzcGxheU5hbWUgPSAnUGFuZWxUeXBlQ2FyZCc7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW06IGNzc2BcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgICAgYm94LXNoYWRvdzogJHt0aGVtZS5zaGFkb3dzLnoxfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2JhY2tncm91bmQnXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnQsXG4gICAgICB9KX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5lbXBoYXNpemUodGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5LCAwLjAzKX07XG4gICAgICB9XG4gICAgYCxcbiAgICBpdGVtQ29udGVudDogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLCAxKX07XG4gICAgYCxcbiAgICBjdXJyZW50OiBjc3NgXG4gICAgICBsYWJlbDogY3VycmVudFZpc3VhbGl6YXRpb25JdGVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMucHJpbWFyeS5ib3JkZXJ9O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYWN0aW9uLnNlbGVjdGVkfTtcbiAgICBgLFxuICAgIGRpc2FibGVkOiBjc3NgXG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGAsXG4gICAgbmFtZTogY3NzYFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW19O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBkZXNjcmlwdGlvbjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogNC41ZW07XG4gICAgYCxcbiAgICBpbWc6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gICAgICB3aWR0aDogMzhweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gICAgYmFkZ2U6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgYCxcbiAgICBkZWxldGVCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGAsXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgUGFuZWxQbHVnaW5CYWRnZVByb3BzIHtcbiAgcGx1Z2luOiBQYW5lbFBsdWdpbk1ldGE7XG59XG5cbmNvbnN0IFBhbmVsUGx1Z2luQmFkZ2U6IFJlYWN0LkZDPFBhbmVsUGx1Z2luQmFkZ2VQcm9wcz4gPSAoeyBwbHVnaW4gfSkgPT4ge1xuICBpZiAoaXNVbnNpZ25lZFBsdWdpblNpZ25hdHVyZShwbHVnaW4uc2lnbmF0dXJlKSkge1xuICAgIHJldHVybiA8UGx1Z2luU2lnbmF0dXJlQmFkZ2Ugc3RhdHVzPXtwbHVnaW4uc2lnbmF0dXJlfSAvPjtcbiAgfVxuXG4gIHJldHVybiA8UGx1Z2luU3RhdGVJbmZvIHN0YXRlPXtwbHVnaW4uc3RhdGV9IC8+O1xufTtcblxuUGFuZWxQbHVnaW5CYWRnZS5kaXNwbGF5TmFtZSA9ICdQYW5lbFBsdWdpbkJhZGdlJztcbiIsImltcG9ydCB7IFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luU3RhdGUsIHVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUGFuZWxQbHVnaW5NZXRhKCk6IFBhbmVsUGx1Z2luTWV0YVtdIHtcbiAgY29uc3QgYWxsUGFuZWxzID0gY29uZmlnLnBhbmVscztcblxuICByZXR1cm4gT2JqZWN0LmtleXMoYWxsUGFuZWxzKVxuICAgIC5maWx0ZXIoKGtleSkgPT4gYWxsUGFuZWxzW2tleV1bJ2hpZGVGcm9tTGlzdCddID09PSBmYWxzZSlcbiAgICAubWFwKChrZXkpID0+IGFsbFBhbmVsc1trZXldKVxuICAgIC5zb3J0KChhOiBQYW5lbFBsdWdpbk1ldGEsIGI6IFBhbmVsUGx1Z2luTWV0YSkgPT4gYS5zb3J0IC0gYi5zb3J0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclBsdWdpbkxpc3QoXG4gIHBsdWdpbnNMaXN0OiBQYW5lbFBsdWdpbk1ldGFbXSxcbiAgc2VhcmNoUXVlcnk6IHN0cmluZywgLy8gTm90ZTogdGhpcyB3aWxsIGJlIGFuIGVzY2FwZWQgcmVnZXggc3RyaW5nIGFzIGl0IGNvbWVzIGZyb20gYEZpbHRlcklucHV0YFxuICBjdXJyZW50OiBQYW5lbFBsdWdpbk1ldGFcbik6IFBhbmVsUGx1Z2luTWV0YVtdIHtcbiAgaWYgKCFzZWFyY2hRdWVyeS5sZW5ndGgpIHtcbiAgICByZXR1cm4gcGx1Z2luc0xpc3QuZmlsdGVyKChwKSA9PiB7XG4gICAgICBpZiAocC5zdGF0ZSA9PT0gUGx1Z2luU3RhdGUuZGVwcmVjYXRlZCkge1xuICAgICAgICByZXR1cm4gY3VycmVudC5pZCA9PT0gcC5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcXVlcnkgPSB1bkVzY2FwZVN0cmluZ0Zyb21SZWdleChzZWFyY2hRdWVyeSkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgZmlyc3Q6IFBhbmVsUGx1Z2luTWV0YVtdID0gW107XG4gIGNvbnN0IG1hdGNoOiBQYW5lbFBsdWdpbk1ldGFbXSA9IFtdO1xuICBjb25zdCBpc0dyYXBoUXVlcnkgPSAnZ3JhcGgnLnN0YXJ0c1dpdGgocXVlcnkpO1xuXG4gIGZvciAoY29uc3QgaXRlbSBvZiBwbHVnaW5zTGlzdCkge1xuICAgIGlmIChpdGVtLnN0YXRlID09PSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkICYmIGN1cnJlbnQuaWQgIT09IGl0ZW0uaWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpZHggPSBuYW1lLmluZGV4T2YocXVlcnkpO1xuXG4gICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgZmlyc3QucHVzaChpdGVtKTtcbiAgICB9IGVsc2UgaWYgKGlkeCA+IDApIHtcbiAgICAgIG1hdGNoLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIGlmIChpc0dyYXBoUXVlcnkgJiYgaXRlbS5pZCA9PT0gJ3RpbWVzZXJpZXMnKSB7XG4gICAgICBmaXJzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaXJzdC5jb25jYXQobWF0Y2gpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFkZ2UsIEJhZGdlUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQbHVnaW5TdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZT86IFBsdWdpblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgUGx1Z2luU3RhdGVJbmZvOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGdldEZlYXR1cmVTdGF0ZUluZm8ocHJvcHMuc3RhdGUpO1xuXG4gIGlmICghZGlzcGxheSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxCYWRnZSBjb2xvcj17ZGlzcGxheS5jb2xvcn0gdGl0bGU9e2Rpc3BsYXkudG9vbHRpcH0gdGV4dD17ZGlzcGxheS50ZXh0fSBpY29uPXtkaXNwbGF5Lmljb259IC8+O1xufTtcblxuZnVuY3Rpb24gZ2V0RmVhdHVyZVN0YXRlSW5mbyhzdGF0ZT86IFBsdWdpblN0YXRlKTogQmFkZ2VQcm9wcyB8IG51bGwge1xuICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0RlcHJlY2F0ZWQnLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2VgLFxuICAgICAgfTtcbiAgICBjYXNlIFBsdWdpblN0YXRlLmFscGhhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0FscGhhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBleHBlcmltZW50YWwgYW5kIGZ1dHVyZSB1cGRhdGVzIG1pZ2h0IG5vdCBiZSBiYWNrd2FyZCBjb21wYXRpYmxlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5iZXRhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0JldGEnLFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGNsb3NlIHRvIGNvbXBsZXRlIGJ1dCBub3QgZnVsbHkgdGVzdGVkYCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImNzcyIsImRlYm91bmNlIiwiQXN5bmNNdWx0aVNlbGVjdCIsIkljb24iLCJCdXR0b24iLCJ1c2VTdHlsZXMyIiwiUGVybWlzc2lvbkxldmVsU3RyaW5nIiwiZ2V0QmFja2VuZFNydiIsIkZvbGRlckZpbHRlciIsIm9uQ2hhbmdlIiwicHJvcHNPbkNoYW5nZSIsIm1heE1lbnVIZWlnaHQiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldE9wdGlvbnMiLCJzZWFyY2hTdHJpbmciLCJnZXRGb2xkZXJzQXNPcHRpb25zIiwiZGVib3VuY2VkTG9hZE9wdGlvbnMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZm9sZGVycyIsImNoYW5nZWRGb2xkZXJzIiwiZm9sZGVyIiwicHVzaCIsInNlbGVjdE9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImlzTXVsdGkiLCJub09wdGlvbnNNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJsZW5ndGgiLCJjbGVhciIsInBhcmFtcyIsInF1ZXJ5IiwidHlwZSIsInBlcm1pc3Npb24iLCJWaWV3Iiwic2VhcmNoSGl0cyIsInNlYXJjaCIsIm9wdGlvbnMiLCJtYXAiLCJkIiwibGFiZWwiLCJ0aXRsZSIsImlkIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInVuc2hpZnQiLCJ0aGVtZSIsInNwYWNpbmciLCJnZXRBbGxQYW5lbFBsdWdpbk1ldGEiLCJNdWx0aVNlbGVjdCIsIlBhbmVsVHlwZUZpbHRlciIsInBsdWdpbnMiLCJwIiwibmFtZSIsImltZ1VybCIsImluZm8iLCJsb2dvcyIsInNtYWxsIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNoYW5nZWRQbHVnaW5zIiwicGx1Z2luIiwiZ2V0T3B0aW9uTGFiZWwiLCJpIiwiZ2V0T3B0aW9uVmFsdWUiLCJjb25uZWN0IiwidXNlQXN5bmMiLCJnZXROYXZNb2RlbCIsImdldExvYWRpbmdOYXYiLCJQYWdlIiwiTGlicmFyeVBhbmVsc1NlYXJjaCIsIk9wZW5MaWJyYXJ5UGFuZWxNb2RhbCIsImdldEZvbGRlckJ5VWlkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9wcyIsInVpZCIsIm1hdGNoIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImZvbGRlclVpZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkZvbGRlckxpYnJhcnlQYW5lbHNQYWdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJNb2RhbCIsInVzZVN0eWxlcyIsIkxvYWRpbmdTdGF0ZSIsImFzeW5jRGlzcGF0Y2hlciIsImRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciIsImluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIiwiZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyIsImdldE1vZGFsU3R5bGVzIiwiRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwiLCJsaWJyYXJ5UGFuZWwiLCJvbkRpc21pc3MiLCJvbkNvbmZpcm0iLCJkYXNoYm9hcmRUaXRsZXMiLCJsb2FkaW5nU3RhdGUiLCJkaXNwYXRjaCIsImFzeW5jRGlzcGF0Y2giLCJjb25uZWN0ZWQiLCJCb29sZWFuIiwiZG9uZSIsIkRvbmUiLCJtb2RhbCIsIkxvYWRpbmdJbmRpY2F0b3IiLCJDb25maXJtIiwibW9kYWxUZXh0IiwiSGFzQ29ubmVjdGVkRGFzaGJvYXJkcyIsInN1ZmZpeCIsIm1lc3NhZ2UiLCJ0ZXh0SW5mbyIsIm15VGFibGUiLCJhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIiwic2VhcmNoQ29tcGxldGVkIiwiZGFzaGJvYXJkcyIsImNyZWF0ZUFjdGlvbiIsIkxvYWRpbmciLCJhY3Rpb24iLCJwYXlsb2FkIiwiTGluayIsIlBhbmVsVHlwZUNhcmQiLCJjb25maWciLCJnZXRQYW5lbFBsdWdpbk5vdEZvdW5kIiwiTGlicmFyeVBhbmVsQ2FyZCIsIm9uQ2xpY2siLCJvbkRlbGV0ZSIsInNob3dTZWNvbmRhcnlBY3Rpb25zIiwic2hvd0RlbGV0aW9uTW9kYWwiLCJzZXRTaG93RGVsZXRpb25Nb2RhbCIsIm9uRGVsZXRlUGFuZWwiLCJwYW5lbFBsdWdpbiIsInBhbmVscyIsIm1vZGVsIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiRm9sZGVyTGluayIsImZvbGRlck5hbWUiLCJtZXRhQ29udGFpbmVyIiwiY29sb3JzIiwidGV4dCIsInNlY29uZGFyeSIsInR5cG9ncmFwaHkiLCJib2R5U21hbGwiLCJmb250U2l6ZSIsIkhvcml6b250YWxHcm91cCIsIlZlcnRpY2FsR3JvdXAiLCJGaWx0ZXJJbnB1dCIsIlNvcnRQaWNrZXIiLCJMaWJyYXJ5UGFuZWxzVmlldyIsIkRFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTiIsImZvbGRlckZpbHRlckNoYW5nZWQiLCJpbml0aWFsTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlIiwibGlicmFyeVBhbmVsc1NlYXJjaFJlZHVjZXIiLCJwYW5lbEZpbHRlckNoYW5nZWQiLCJzZWFyY2hDaGFuZ2VkIiwic29ydENoYW5nZWQiLCJMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudCIsInZhcmlhbnQiLCJTcGFjaW91cyIsImN1cnJlbnRQYW5lbElkIiwiY3VycmVudEZvbGRlcklkIiwicGVyUGFnZSIsInNob3dQYW5lbEZpbHRlciIsInNob3dGb2xkZXJGaWx0ZXIiLCJzaG93U29ydCIsInNvcnREaXJlY3Rpb24iLCJwYW5lbEZpbHRlciIsImZvbGRlckZpbHRlciIsInNlYXJjaFF1ZXJ5IiwidG9TdHJpbmciLCJvbkZpbHRlckNoYW5nZSIsIm9uU29ydENoYW5nZSIsInNvcnRpbmciLCJvbkZvbGRlckZpbHRlckNoYW5nZSIsIm9uUGFuZWxGaWx0ZXJDaGFuZ2UiLCJidXR0b25Sb3ciLCJsaWJyYXJ5UGFuZWxzVmlldyIsInRpZ2h0QnV0dG9uUm93IiwidGlnaHRGaWx0ZXIiLCJ0aWdodFNvcnRGaWx0ZXIiLCJmIiwiU3RyaW5nIiwidXNlRGVib3VuY2UiLCJjeCIsIlBhZ2luYXRpb24iLCJjaGFuZ2VQYWdlIiwiaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUiLCJsaWJyYXJ5UGFuZWxzVmlld1JlZHVjZXIiLCJkZWxldGVMaWJyYXJ5UGFuZWwiLCJzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzIiwiY2xhc3NOYW1lIiwib25DbGlja0NhcmQiLCJjdXJyZW50UGFuZWwiLCJwcm9wc1BlclBhZ2UiLCJnZXRQYW5lbFZpZXdTdHlsZXMiLCJsaWJyYXJ5UGFuZWxzIiwicGFnZSIsIm51bWJlck9mUGFnZXMiLCJvblBhZ2VDaGFuZ2UiLCJsaWJyYXJ5UGFuZWxMaXN0Iiwibm9QYW5lbHNGb3VuZCIsIml0ZW0iLCJwYWdpbmF0aW9uIiwic20iLCJzZWFyY2hIZWFkZXIiLCJuZXdQYW5lbEJ1dHRvbiIsImZyb20iLCJtZXJnZSIsIm9mIiwiU3Vic2NyaXB0aW9uIiwidGltZXIiLCJjYXRjaEVycm9yIiwiZmluYWxpemUiLCJtYXBUbyIsIm1lcmdlTWFwIiwic2hhcmUiLCJ0YWtlVW50aWwiLCJhcGlEZWxldGVMaWJyYXJ5UGFuZWwiLCJnZXRMaWJyYXJ5UGFuZWxzIiwiaW5pdFNlYXJjaCIsImFyZ3MiLCJzdWJzY3JpcHRpb24iLCJkYXRhT2JzZXJ2YWJsZSIsImV4Y2x1ZGVVaWQiLCJ0eXBlRmlsdGVyIiwicGlwZSIsImVsZW1lbnRzIiwidG90YWxDb3VudCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInVuc3Vic2NyaWJlIiwiYWRkIiwic3Vic2NyaWJlIiwiZSIsIkZ1bmN0aW9uIiwiTWF0aCIsImNlaWwiLCJBc3luY1NlbGVjdCIsInVybFV0aWwiLCJsb2NhdGlvblNlcnZpY2UiLCJnZXRMaWJyYXJ5UGFuZWxDb25uZWN0ZWREYXNoYm9hcmRzIiwic2V0Q29ubmVjdGVkIiwib3B0aW9uIiwic2V0T3B0aW9uIiwiZ2V0Q29ubmVjdGVkIiwiY29ubmVjdGVkRGFzaGJvYXJkcyIsImxvYWRPcHRpb25zIiwibG9hZE9wdGlvbnNBc3luYyIsImxlYWRpbmciLCJ0cmFpbGluZyIsIm9uVmlld1BhbmVsIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJVcmwiLCJmaWx0ZXIiLCJib3JkZXIiLCJyYWRpdXMiLCJiZzMiLCJiZzEiLCJ0ZXh0U2VtaVdlYWsiLCJzaXplIiwibWQiLCJ4bCIsImJnMiIsIm5vdGVUZXh0Ym94IiwiZGFzaGJvYXJkU2VhcmNoIiwiaGVhZGluZyIsImg0IiwibGluayIsImlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUiLCJQbHVnaW5TdGF0ZSIsIkljb25CdXR0b24iLCJQbHVnaW5TaWduYXR1cmVCYWRnZSIsInNlbGVjdG9ycyIsIlBsdWdpblN0YXRlSW5mbyIsImlzQ3VycmVudCIsImRpc2FibGVkIiwic2hvd0JhZGdlIiwiY2hpbGRyZW4iLCJjc3NDbGFzcyIsImRlcHJlY2F0ZWQiLCJjdXJyZW50IiwiY29tcG9uZW50cyIsIlBsdWdpblZpc3VhbGl6YXRpb24iLCJpbWciLCJpdGVtQ29udGVudCIsImJhZGdlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsZXRlQnV0dG9uIiwiZGlzcGxheU5hbWUiLCJiYWNrZ3JvdW5kIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJzaGFkb3dzIiwiejEiLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImR1cmF0aW9uIiwic2hvcnQiLCJlbXBoYXNpemUiLCJwcmltYXJ5IiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRXZWlnaHRMaWdodCIsIlBhbmVsUGx1Z2luQmFkZ2UiLCJzaWduYXR1cmUiLCJ1bkVzY2FwZVN0cmluZ0Zyb21SZWdleCIsImFsbFBhbmVscyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJmaWx0ZXJQbHVnaW5MaXN0IiwicGx1Z2luc0xpc3QiLCJmaXJzdCIsImlzR3JhcGhRdWVyeSIsInN0YXJ0c1dpdGgiLCJpZHgiLCJpbmRleE9mIiwiY29uY2F0IiwiQmFkZ2UiLCJkaXNwbGF5IiwiZ2V0RmVhdHVyZVN0YXRlSW5mbyIsImNvbG9yIiwidG9vbHRpcCIsImljb24iLCJhbHBoYSIsImJldGEiXSwic291cmNlUm9vdCI6IiJ9
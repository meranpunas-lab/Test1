"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DashboardImport"],{

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

/***/ "./public/app/features/manage-dashboards/DashboardImportPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_ImportDashboardOverview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardOverview.tsx");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _VerticalGroup, _ImportDashboardOverv;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const IMPORT_STARTED_EVENT_NAME = 'dashboard_import_loaded';

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_12__.getNavModel)(state.navIndex, 'import', undefined, true),
  loadingState: state.importDashboard.state
});

const mapDispatchToProps = {
  fetchGcomDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_10__.fetchGcomDashboard,
  importDashboardJson: _state_actions__WEBPACK_IMPORTED_MODULE_10__.importDashboardJson,
  cleanUpAction: _core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_13__.cleanUpAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);

class UnthemedDashboardImport extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onFileUpload", event => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'json_uploaded'
      });
      const {
        importDashboardJson
      } = this.props;
      const file = event.currentTarget.files && event.currentTarget.files.length > 0 && event.currentTarget.files[0];

      if (file) {
        const reader = new FileReader();

        const readerOnLoad = () => {
          return e => {
            let dashboard;

            try {
              dashboard = JSON.parse(e.target.result);
            } catch (error) {
              app_core_app_events__WEBPACK_IMPORTED_MODULE_11__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.AppEvents.alertError, ['Import failed', 'JSON -> JS Serialization failed: ' + error.message]);
              return;
            }

            importDashboardJson(dashboard);
          };
        };

        reader.onload = readerOnLoad();
        reader.readAsText(file);
      }
    });

    _defineProperty(this, "getDashboardFromJson", formData => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'json_pasted'
      });
      this.props.importDashboardJson(JSON.parse(formData.dashboardJson));
    });

    _defineProperty(this, "getGcomDashboard", formData => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'gcom'
      });
      let dashboardId;
      const match = /(^\d+$)|dashboards\/(\d+)/.exec(formData.gcomDashboard);

      if (match && match[1]) {
        dashboardId = match[1];
      } else if (match && match[2]) {
        dashboardId = match[2];
      }

      if (dashboardId) {
        this.props.fetchGcomDashboard(dashboardId);
      }
    });

    const {
      gcomDashboardId
    } = this.props.queryParams;

    if (gcomDashboardId) {
      this.getGcomDashboard({
        gcomDashboard: gcomDashboardId
      });
      return;
    }
  }

  componentWillUnmount() {
    this.props.cleanUpAction({
      stateSelector: state => state.importDashboard
    });
  }

  renderImportForm() {
    const styles = importStyles(this.props.theme);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.FileUpload, {
          accept: "application/json",
          onFileUpload: this.onFileUpload,
          children: "Upload JSON file"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Form, {
          onSubmit: this.getGcomDashboard,
          defaultValues: {
            gcomDashboard: ''
          },
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
            label: "Import via grafana.com",
            invalid: !!errors.gcomDashboard,
            error: errors.gcomDashboard && errors.gcomDashboard.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, Object.assign({
              id: "url-input",
              placeholder: "Grafana.com dashboard URL or ID",
              type: "text"
            }, register('gcomDashboard', {
              required: 'A Grafana dashboard URL or ID is required',
              validate: _utils_validation__WEBPACK_IMPORTED_MODULE_9__.validateGcomDashboard
            }), {
              addonAfter: _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
                type: "submit",
                children: "Load"
              }))
            }))
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Form, {
          onSubmit: this.getDashboardFromJson,
          defaultValues: {
            dashboardJson: ''
          },
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
              label: "Import via panel json",
              invalid: !!errors.dashboardJson,
              error: errors.dashboardJson && errors.dashboardJson.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextArea, Object.assign({}, register('dashboardJson', {
                required: 'Need a dashboard JSON model',
                validate: _utils_validation__WEBPACK_IMPORTED_MODULE_9__.validateDashboardJson
              }), {
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DashboardImportPage.textarea,
                id: "dashboard-json-textarea",
                rows: 10
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
              type: "submit",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DashboardImportPage.submit,
              children: "Load"
            })]
          })
        })
      })]
    });
  }

  render() {
    const {
      loadingState,
      navModel
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"].Contents, {
        children: [loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading && (_VerticalGroup || (_VerticalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VerticalGroup, {
          justify: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.HorizontalGroup, {
            justify: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, {
              size: 32
            })
          })
        }))), [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error, _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted].includes(loadingState) && this.renderImportForm(), loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done && (_ImportDashboardOverv || (_ImportDashboardOverv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ImportDashboardOverview__WEBPACK_IMPORTED_MODULE_8__.ImportDashboardOverview, {})))]
      })
    });
  }

}

const DashboardImportUnConnected = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.withTheme2)(UnthemedDashboardImport);
const DashboardImport = connector(DashboardImportUnConnected);
DashboardImport.displayName = 'DashboardImport';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardImport);
const importStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.stylesFactory)(theme => {
  return {
    option: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-bottom: ${theme.spacing(4)};
    `
  };
});

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardForm": () => (/* binding */ ImportDashboardForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");
/* harmony import */ var _ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardLibraryPanelsList.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref"];

var _Legend;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const ImportDashboardForm = ({
  register,
  errors,
  control,
  getValues,
  uidReset,
  inputs,
  initialFolderId,
  onUidReset,
  onCancel,
  onSubmit,
  watch
}) => {
  var _inputs$libraryPanels, _inputs$libraryPanels2, _inputs$libraryPanels3, _inputs$libraryPanels4;

  const [isSubmitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const watchDataSources = watch('dataSources');
  const watchFolder = watch('folder');
  /*
    This useEffect is needed for overwriting a dashboard. It
    submits the form even if there's validation errors on title or uid.
  */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSubmitted && (errors.title || errors.uid)) {
      onSubmit(getValues(), {});
    }
  }, [errors, getValues, isSubmitted, onSubmit]);
  const newLibraryPanels = (_inputs$libraryPanels = inputs === null || inputs === void 0 ? void 0 : (_inputs$libraryPanels2 = inputs.libraryPanels) === null || _inputs$libraryPanels2 === void 0 ? void 0 : _inputs$libraryPanels2.filter(i => i.state === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelInputState.New)) !== null && _inputs$libraryPanels !== void 0 ? _inputs$libraryPanels : [];
  const existingLibraryPanels = (_inputs$libraryPanels3 = inputs === null || inputs === void 0 ? void 0 : (_inputs$libraryPanels4 = inputs.libraryPanels) === null || _inputs$libraryPanels4 === void 0 ? void 0 : _inputs$libraryPanels4.filter(i => i.state === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelInputState.Exits)) !== null && _inputs$libraryPanels3 !== void 0 ? _inputs$libraryPanels3 : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Legend, {
      children: "Options"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Name",
      invalid: !!errors.title,
      error: errors.title && errors.title.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('title', {
        required: 'Name is required',
        validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateTitle)(v, getValues().folder.id)
      }), {
        type: "text",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.ImportDashboardForm.name
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Folder",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_5__.FolderPicker, Object.assign({}, field, {
            enableCreateNew: true,
            initialFolderId: initialFolderId
          }));
        },
        name: "folder",
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Unique identifier (UID)",
      description: "The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",
      invalid: !!errors.uid,
      error: errors.uid && errors.uid.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: !uidReset ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
          disabled: true
        }, register('uid', {
          validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateUid)(v)
        }), {
          addonAfter: !uidReset && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: onUidReset,
            children: "Change uid"
          })
        })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('uid', {
          required: true,
          validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateUid)(v)
        })))
      })
    }), inputs.dataSources && inputs.dataSources.map((input, index) => {
      if (input.pluginId === _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_3__.ExpressionDatasourceRef.type) {
        return null;
      }

      const dataSourceOption = `dataSources[${index}]`;
      const current = watchDataSources !== null && watchDataSources !== void 0 ? watchDataSources : [];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: input.label,
        invalid: errors.dataSources && !!errors.dataSources[index],
        error: errors.dataSources && errors.dataSources[index] && 'A data source is required',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
          name: dataSourceOption,
          render: _ref2 => {
            var _current$index;

            let {} = _ref2,
                field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, Object.assign({}, field, {
              noDefault: true,
              placeholder: input.info,
              pluginId: input.pluginId,
              current: (_current$index = current[index]) === null || _current$index === void 0 ? void 0 : _current$index.uid
            }));
          },
          control: control,
          rules: {
            required: true
          }
        })
      }, dataSourceOption);
    }), inputs.constants && inputs.constants.map((input, index) => {
      const constantIndex = `constants[${index}]`;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: input.label,
        error: errors.constants && errors.constants[index] && `${input.label} needs a value`,
        invalid: errors.constants && !!errors.constants[index],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(constantIndex, {
          required: true
        }), {
          defaultValue: input.value
        }))
      }, constantIndex);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__.ImportDashboardLibraryPanelsList, {
      inputs: newLibraryPanels,
      label: "New library panels",
      description: "List of new library panels that will get imported.",
      folderName: watchFolder.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__.ImportDashboardLibraryPanelsList, {
      inputs: existingLibraryPanels,
      label: "Existing library panels",
      description: "List of existing library panels. These panels are not affected by the import.",
      folderName: watchFolder.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.ImportDashboardForm.submit,
        variant: getButtonVariant(errors),
        onClick: () => {
          setSubmitted(true);
        },
        children: getButtonText(errors)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "reset",
        variant: "secondary",
        onClick: onCancel,
        children: "Cancel"
      })]
    })]
  });
};

function getButtonVariant(errors) {
  return errors && (errors.title || errors.uid) ? 'destructive' : 'primary';
}

function getButtonText(errors) {
  return errors && (errors.title || errors.uid) ? 'Import (Overwrite)' : 'Import';
}

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardLibraryPanelsList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardLibraryPanelsList": () => (/* binding */ ImportDashboardLibraryPanelsList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _library_panels_components_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function ImportDashboardLibraryPanelsList({
  inputs,
  label,
  description,
  folderName
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);

  if (!Boolean(inputs === null || inputs === void 0 ? void 0 : inputs.length)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: styles.spacer,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: label,
      description: description,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: inputs.map((input, index) => {
          const libraryPanelIndex = `elements[${index}]`;
          const libraryPanel = input.state === _state_reducers__WEBPACK_IMPORTED_MODULE_2__.LibraryPanelInputState.New ? Object.assign({}, input.model, {
            meta: Object.assign({}, input.model.meta, {
              folderName: folderName !== null && folderName !== void 0 ? folderName : 'General'
            })
          }) : Object.assign({}, input.model);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: styles.item,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_library_panels_components_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelCard, {
              libraryPanel: libraryPanel,
              onClick: () => undefined
            })
          }, libraryPanelIndex);
        })
      })
    })
  });
}

function getStyles(theme) {
  return {
    spacer: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-bottom: ${theme.spacing(2)};
    `,
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-bottom: ${theme.spacing(1)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardOverview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardOverview": () => (/* binding */ ImportDashboardOverview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _ImportDashboardForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td, _td2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const IMPORT_FINISHED_EVENT_NAME = 'dashboard_import_imported';

const mapStateToProps = state => {
  const searchObj = _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.getSearchObject();
  return {
    dashboard: state.importDashboard.dashboard,
    meta: state.importDashboard.meta,
    source: state.importDashboard.source,
    inputs: state.importDashboard.inputs,
    folder: searchObj.folderId ? {
      id: Number(searchObj.folderId)
    } : {
      id: 0
    }
  };
};

const mapDispatchToProps = {
  clearLoadedDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_5__.clearLoadedDashboard,
  importDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_5__.importDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);

class ImportDashboardOverviewUnConnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      uidReset: false
    });

    _defineProperty(this, "onSubmit", form => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.reportInteraction)(IMPORT_FINISHED_EVENT_NAME);
      this.props.importDashboard(form);
    });

    _defineProperty(this, "onCancel", () => {
      this.props.clearLoadedDashboard();
    });

    _defineProperty(this, "onUidReset", () => {
      this.setState({
        uidReset: true
      });
    });
  }

  render() {
    const {
      dashboard,
      inputs,
      meta,
      source,
      folder
    } = this.props;
    const {
      uidReset
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [source === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.DashboardSource.Gcom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        style: {
          marginBottom: '24px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Legend, {
            children: ["Importing dashboard from", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: `https://grafana.com/dashboards/${dashboard.gnetId}`,
              className: "external-link",
              target: "_blank",
              rel: "noreferrer",
              children: "Grafana.com"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("table", {
          className: "filter-table form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [_td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: "Published by"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: meta.orgName
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [_td2 || (_td2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: "Updated on"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeFormat)(meta.updatedAt)
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: this.onSubmit,
        defaultValues: Object.assign({}, dashboard, {
          constants: [],
          dataSources: [],
          elements: [],
          folder: folder
        }),
        validateOnMount: true,
        validateFieldsOnMount: ['title', 'uid'],
        validateOn: "onChange",
        children: ({
          register,
          errors,
          control,
          watch,
          getValues
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ImportDashboardForm__WEBPACK_IMPORTED_MODULE_4__.ImportDashboardForm, {
          register: register,
          errors: errors,
          control: control,
          getValues: getValues,
          uidReset: uidReset,
          inputs: inputs,
          onCancel: this.onCancel,
          onUidReset: this.onUidReset,
          onSubmit: this.onSubmit,
          watch: watch,
          initialFolderId: folder.id
        })
      })]
    });
  }

}

const ImportDashboardOverview = connector(ImportDashboardOverviewUnConnected);
ImportDashboardOverview.displayName = 'ImportDashboardOverview';

/***/ }),

/***/ "./public/app/features/manage-dashboards/utils/validation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateDashboardJson": () => (/* binding */ validateDashboardJson),
/* harmony export */   "validateGcomDashboard": () => (/* binding */ validateGcomDashboard),
/* harmony export */   "validateTitle": () => (/* binding */ validateTitle),
/* harmony export */   "validateUid": () => (/* binding */ validateUid)
/* harmony export */ });
/* harmony import */ var _services_ValidationSrv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


const validateDashboardJson = json => {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    return 'Not valid JSON';
  }
};
const validateGcomDashboard = gcomDashboard => {
  // From DashboardImportCtrl
  const match = /(^\d+$)|dashboards\/(\d+)/.exec(gcomDashboard);
  return match && (match[1] || match[2]) ? true : 'Could not find a valid Grafana.com ID';
};
const validateTitle = (newTitle, folderId) => {
  return _services_ValidationSrv__WEBPACK_IMPORTED_MODULE_0__.validationSrv.validateNewDashboardName(folderId, newTitle).then(() => {
    return true;
  }).catch(error => {
    if (error.type === 'EXISTING') {
      return error.message;
    }
  });
};
const validateUid = value => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/dashboards/uid/${value}`).then(existingDashboard => {
    return `Dashboard named '${existingDashboard === null || existingDashboard === void 0 ? void 0 : existingDashboard.dashboard.title}' in folder '${existingDashboard === null || existingDashboard === void 0 ? void 0 : existingDashboard.meta.folderTitle}' has the same UID`;
  }).catch(error => {
    error.isHandled = true;
    return true;
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuRCxRQUFNbUssT0FBTyxHQUFHQyxtQkFBbUIsQ0FBQ3BLLEtBQUssQ0FBQ3ZJLEtBQVAsQ0FBbkM7O0FBRUEsTUFBSSxDQUFDMFMsT0FBTCxFQUFjO0FBQ1osV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQU8sdURBQUMsOENBQUQ7QUFBTyxTQUFLLEVBQUVBLE9BQU8sQ0FBQ0UsS0FBdEI7QUFBNkIsU0FBSyxFQUFFRixPQUFPLENBQUNHLE9BQTVDO0FBQXFELFFBQUksRUFBRUgsT0FBTyxDQUFDdlEsSUFBbkU7QUFBeUUsUUFBSSxFQUFFdVEsT0FBTyxDQUFDSTtBQUF2RixJQUFQO0FBQ0QsQ0FSTTs7QUFVUCxTQUFTSCxtQkFBVCxDQUE2QjNTLEtBQTdCLEVBQXFFO0FBQ25FLFVBQVFBLEtBQVI7QUFDRSxTQUFLcVEsaUVBQUw7QUFDRSxhQUFPO0FBQ0xsTyxRQUFBQSxJQUFJLEVBQUUsWUFERDtBQUVMeVEsUUFBQUEsS0FBSyxFQUFFLEtBRkY7QUFHTEMsUUFBQUEsT0FBTyxFQUFHO0FBSEwsT0FBUDs7QUFLRixTQUFLeEMsNERBQUw7QUFDRSxhQUFPO0FBQ0xsTyxRQUFBQSxJQUFJLEVBQUUsT0FERDtBQUVMeVEsUUFBQUEsS0FBSyxFQUFFLE1BRkY7QUFHTEMsUUFBQUEsT0FBTyxFQUFHO0FBSEwsT0FBUDs7QUFLRixTQUFLeEMsMkRBQUw7QUFDRSxhQUFPO0FBQ0xsTyxRQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMeVEsUUFBQUEsS0FBSyxFQUFFLE1BRkY7QUFHTEMsUUFBQUEsT0FBTyxFQUFHO0FBSEwsT0FBUDs7QUFLRjtBQUNFLGFBQU8sSUFBUDtBQXBCSjtBQXNCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxDYXJkL0xpYnJhcnlQYW5lbENhcmQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1ZpZXcvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNWaWV3L3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvc3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL21hbmFnZS1kYXNoYm9hcmRzL0Rhc2hib2FyZEltcG9ydFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL21hbmFnZS1kYXNoYm9hcmRzL2NvbXBvbmVudHMvSW1wb3J0RGFzaGJvYXJkRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvY29tcG9uZW50cy9JbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvY29tcG9uZW50cy9JbXBvcnREYXNoYm9hcmRPdmVydmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvdXRpbHMvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9jb21wb25lbnRzL1BsdWdpblN0YXRlSW5mby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBhc3luY0Rpc3BhdGNoZXIgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxzVmlldy9hY3Rpb25zJztcbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciwgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRNb2RhbFN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWw6IEZDPFByb3BzPiA9ICh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzLCBvbkNvbmZpcm0gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBbeyBkYXNoYm9hcmRUaXRsZXMsIGxvYWRpbmdTdGF0ZSB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlcixcbiAgICBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luY0Rpc3BhdGNoKGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsKSk7XG4gIH0sIFthc3luY0Rpc3BhdGNoLCBsaWJyYXJ5UGFuZWxdKTtcbiAgY29uc3QgY29ubmVjdGVkID0gQm9vbGVhbihkYXNoYm9hcmRUaXRsZXMubGVuZ3RoKTtcbiAgY29uc3QgZG9uZSA9IGxvYWRpbmdTdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkRvbmU7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHRpdGxlPVwiRGVsZXRlIGxpYnJhcnkgcGFuZWxcIiBpY29uPVwidHJhc2gtYWx0XCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IGlzT3Blbj17dHJ1ZX0+XG4gICAgICB7IWRvbmUgPyA8TG9hZGluZ0luZGljYXRvciAvPiA6IG51bGx9XG4gICAgICB7ZG9uZSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29ubmVjdGVkID8gPEhhc0Nvbm5lY3RlZERhc2hib2FyZHMgZGFzaGJvYXJkVGl0bGVzPXtkYXNoYm9hcmRUaXRsZXN9IC8+IDogbnVsbH1cbiAgICAgICAgICB7IWNvbm5lY3RlZCA/IDxDb25maXJtIC8+IDogbnVsbH1cblxuICAgICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e29uQ29uZmlybX0gZGlzYWJsZWQ9e2Nvbm5lY3RlZH0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IExvYWRpbmdJbmRpY2F0b3I6IEZDID0gKCkgPT4gPHNwYW4+TG9hZGluZyBsaWJyYXJ5IHBhbmVsLi4uPC9zcGFuPjtcblxuY29uc3QgQ29uZmlybTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRNb2RhbFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUZXh0fT5EbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwYW5lbD88L2Rpdj47XG59O1xuXG5jb25zdCBIYXNDb25uZWN0ZWREYXNoYm9hcmRzOiBGQzx7IGRhc2hib2FyZFRpdGxlczogc3RyaW5nW10gfT4gPSAoeyBkYXNoYm9hcmRUaXRsZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBzdWZmaXggPSBkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAxID8gJ2Rhc2hib2FyZC4nIDogJ2Rhc2hib2FyZHMuJztcbiAgY29uc3QgbWVzc2FnZSA9IGAke2Rhc2hib2FyZFRpdGxlcy5sZW5ndGh9ICR7c3VmZml4fWA7XG4gIGlmIChkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5mb30+XG4gICAgICAgIHsnVGhpcyBsaWJyYXJ5IHBhbmVsIGNhbiBub3QgYmUgZGVsZXRlZCBiZWNhdXNlIGl0IGlzIGNvbm5lY3RlZCB0byAnfVxuICAgICAgICA8c3Ryb25nPnttZXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7JyBSZW1vdmUgdGhlIGxpYnJhcnkgcGFuZWwgZnJvbSB0aGUgZGFzaGJvYXJkcyBsaXN0ZWQgYmVsb3cgYW5kIHJldHJ5Lid9XG4gICAgICA8L3A+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubXlUYWJsZX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGFzaGJvYXJkIG5hbWU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGFzaGJvYXJkVGl0bGVzLm1hcCgodGl0bGUsIGkpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2BkYXNoLXRpdGxlLSR7aX1gfT5cbiAgICAgICAgICAgICAgPHRkPnt0aXRsZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2hSZXN1bHQsIExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyBhcyBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IHNlYXJjaENvbXBsZXRlZCB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE8pOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gYXdhaXQgYXBpR2V0Q29ubmVjdGVkRGFzaGJvYXJkcyhsaWJyYXJ5UGFuZWwudWlkKTtcbiAgICBkaXNwYXRjaChzZWFyY2hDb21wbGV0ZWQoeyBkYXNoYm9hcmRzIH0pKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdHlwZXMnO1xuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGludGVyZmFjZSBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGU7XG4gIGRhc2hib2FyZFRpdGxlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9IHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyxcbiAgZGFzaGJvYXJkVGl0bGVzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hDb21wbGV0ZWQgPSBjcmVhdGVBY3Rpb248eyBkYXNoYm9hcmRzOiBEYXNoYm9hcmRTZWFyY2hIaXRbXSB9PihcbiAgJ2xpYnJhcnlQYW5lbHMvZGVsZXRlL3NlYXJjaENvbXBsZXRlZCdcbik7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFJlZHVjZXIgPSAoXG4gIHN0YXRlOiBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlID0gaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUsXG4gIGFjdGlvbjogQW55QWN0aW9uXG4pOiBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlID0+IHtcbiAgaWYgKHNlYXJjaENvbXBsZXRlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZGFzaGJvYXJkVGl0bGVzOiBhY3Rpb24ucGF5bG9hZC5kYXNoYm9hcmRzLm1hcCgoZCkgPT4gZC50aXRsZSksXG4gICAgICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgTGluaywgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGFuZWxUeXBlQ2FyZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZCc7XG5pbXBvcnQgeyBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbCB9IGZyb20gJy4uL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZ2V0UGFuZWxQbHVnaW5Ob3RGb3VuZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1BhbmVsUGx1Z2luRXJyb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbENhcmRQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ2xpY2s6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIG9uRGVsZXRlPzogKHBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTykgPT4gdm9pZDtcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTGlicmFyeVBhbmVsQ2FyZDogUmVhY3QuRkM8TGlicmFyeVBhbmVsQ2FyZFByb3BzICYgeyBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9PiA9ICh7XG4gIGxpYnJhcnlQYW5lbCxcbiAgb25DbGljayxcbiAgb25EZWxldGUsXG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zLFxufSkgPT4ge1xuICBjb25zdCBbc2hvd0RlbGV0aW9uTW9kYWwsIHNldFNob3dEZWxldGlvbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkRlbGV0ZVBhbmVsID0gKCkgPT4ge1xuICAgIG9uRGVsZXRlPy4obGlicmFyeVBhbmVsKTtcbiAgICBzZXRTaG93RGVsZXRpb25Nb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcGFuZWxQbHVnaW4gPSBjb25maWcucGFuZWxzW2xpYnJhcnlQYW5lbC5tb2RlbC50eXBlXSA/PyBnZXRQYW5lbFBsdWdpbk5vdEZvdW5kKGxpYnJhcnlQYW5lbC5tb2RlbC50eXBlKS5tZXRhO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYW5lbFR5cGVDYXJkXG4gICAgICAgIGlzQ3VycmVudD17ZmFsc2V9XG4gICAgICAgIHRpdGxlPXtsaWJyYXJ5UGFuZWwubmFtZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2xpYnJhcnlQYW5lbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgcGx1Z2luPXtwYW5lbFBsdWdpbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaz8uKGxpYnJhcnlQYW5lbCl9XG4gICAgICAgIG9uRGVsZXRlPXtzaG93U2Vjb25kYXJ5QWN0aW9ucyA/ICgpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKHRydWUpIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICA8Rm9sZGVyTGluayBsaWJyYXJ5UGFuZWw9e2xpYnJhcnlQYW5lbH0gLz5cbiAgICAgIDwvUGFuZWxUeXBlQ2FyZD5cbiAgICAgIHtzaG93RGVsZXRpb25Nb2RhbCAmJiAoXG4gICAgICAgIDxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFxuICAgICAgICAgIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfVxuICAgICAgICAgIG9uQ29uZmlybT17b25EZWxldGVQYW5lbH1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgRm9sZGVyTGlua1Byb3BzIHtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbn1cblxuZnVuY3Rpb24gRm9sZGVyTGluayh7IGxpYnJhcnlQYW5lbCB9OiBGb2xkZXJMaW5rUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghbGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkICYmICFsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWxpYnJhcnlQYW5lbC5tZXRhLmZvbGRlclVpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgICAgPEljb24gbmFtZT17J2ZvbGRlcid9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkcy9mLyR7bGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkfWB9PlxuICAgICAgICA8SWNvbiBuYW1lPXsnZm9sZGVyLXVwbG9hZCd9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIG1ldGFDb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuXG4gICAgICBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgfVxuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgZnJvbSwgbWVyZ2UsIG9mLCBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaW5hbGl6ZSwgbWFwVG8sIG1lcmdlTWFwLCBzaGFyZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBkZWxldGVMaWJyYXJ5UGFuZWwgYXMgYXBpRGVsZXRlTGlicmFyeVBhbmVsLCBnZXRMaWJyYXJ5UGFuZWxzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IGluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCBpbml0U2VhcmNoLCBzZWFyY2hDb21wbGV0ZWQgfSBmcm9tICcuL3JlZHVjZXInO1xuXG50eXBlIERpc3BhdGNoUmVzdWx0ID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSA9PiB2b2lkO1xuaW50ZXJmYWNlIFNlYXJjaEFyZ3Mge1xuICBwZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2VhcmNoU3RyaW5nOiBzdHJpbmc7XG4gIHNvcnREaXJlY3Rpb24/OiBzdHJpbmc7XG4gIHBhbmVsRmlsdGVyPzogc3RyaW5nW107XG4gIGZvbGRlckZpbHRlcj86IHN0cmluZ1tdO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoYXJnczogU2VhcmNoQXJncyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBjb25zdCBkYXRhT2JzZXJ2YWJsZSA9IGZyb20oXG4gICAgICBnZXRMaWJyYXJ5UGFuZWxzKHtcbiAgICAgICAgc2VhcmNoU3RyaW5nOiBhcmdzLnNlYXJjaFN0cmluZyxcbiAgICAgICAgcGVyUGFnZTogYXJncy5wZXJQYWdlLFxuICAgICAgICBwYWdlOiBhcmdzLnBhZ2UsXG4gICAgICAgIGV4Y2x1ZGVVaWQ6IGFyZ3MuY3VycmVudFBhbmVsSWQsXG4gICAgICAgIHNvcnREaXJlY3Rpb246IGFyZ3Muc29ydERpcmVjdGlvbixcbiAgICAgICAgdHlwZUZpbHRlcjogYXJncy5wYW5lbEZpbHRlcixcbiAgICAgICAgZm9sZGVyRmlsdGVyOiBhcmdzLmZvbGRlckZpbHRlcixcbiAgICAgIH0pXG4gICAgKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKHsgcGVyUGFnZSwgZWxlbWVudHM6IGxpYnJhcnlQYW5lbHMsIHBhZ2UsIHRvdGFsQ291bnQgfSkgPT5cbiAgICAgICAgb2Yoc2VhcmNoQ29tcGxldGVkKHsgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgdG90YWxDb3VudCB9KSlcbiAgICAgICksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gb2Yoc2VhcmNoQ29tcGxldGVkKHsgLi4uaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIHBhZ2U6IGFyZ3MucGFnZSwgcGVyUGFnZTogYXJncy5wZXJQYWdlIH0pKTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpLCAvLyBtYWtlIHN1cmUgd2UgdW5zdWJzY3JpYmVcbiAgICAgIHNoYXJlKClcbiAgICApO1xuXG4gICAgc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIC8vIElmIDUwbXMgd2l0aG91dCBhIHJlc3BvbnNlIGRpc3BhdGNoIGEgbG9hZGluZyBzdGF0ZVxuICAgICAgLy8gbWFwVG8gd2lsbCB0cmFuc2xhdGUgdGhlIHRpbWVyIGV2ZW50IGludG8gYSBsb2FkaW5nIHN0YXRlXG4gICAgICAvLyB0YWtlVW50aWwgd2lsbCBjYW5jZWwgdGhlIHRpbWVyIGVtaXQgd2hlbiBmaXJzdCByZXNwb25zZSBpcyByZWNlaXZlZCBvbiB0aGUgZGF0YU9ic2VydmFibGVcbiAgICAgIG1lcmdlKHRpbWVyKDUwKS5waXBlKG1hcFRvKGluaXRTZWFyY2goKSksIHRha2VVbnRpbChkYXRhT2JzZXJ2YWJsZSkpLCBkYXRhT2JzZXJ2YWJsZSkuc3Vic2NyaWJlKGRpc3BhdGNoKVxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaWJyYXJ5UGFuZWwodWlkOiBzdHJpbmcsIGFyZ3M6IFNlYXJjaEFyZ3MpOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpRGVsZXRlTGlicmFyeVBhbmVsKHVpZCk7XG4gICAgICBzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzKGFyZ3MpKGRpc3BhdGNoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jRGlzcGF0Y2hlcihkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbjogYW55KSB7XG4gICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbik7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcblxuZXhwb3J0IGludGVyZmFjZSBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlIHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGU7XG4gIGxpYnJhcnlQYW5lbHM6IExpYnJhcnlFbGVtZW50RFRPW107XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgcGVyUGFnZTogbnVtYmVyO1xuICBwYWdlOiBudW1iZXI7XG4gIG51bWJlck9mUGFnZXM6IG51bWJlcjtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZTogTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSA9IHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyxcbiAgbGlicmFyeVBhbmVsczogW10sXG4gIHRvdGFsQ291bnQ6IDAsXG4gIHBlclBhZ2U6IDQwLFxuICBwYWdlOiAxLFxuICBudW1iZXJPZlBhZ2VzOiAwLFxuICBjdXJyZW50UGFuZWxJZDogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRTZWFyY2ggPSBjcmVhdGVBY3Rpb24oJ2xpYnJhcnlQYW5lbHMvdmlldy9pbml0U2VhcmNoJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoQ29tcGxldGVkID0gY3JlYXRlQWN0aW9uPFxuICBPbWl0PExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsICdjdXJyZW50UGFuZWxJZCcgfCAnc2VhcmNoU3RyaW5nJyB8ICdsb2FkaW5nU3RhdGUnIHwgJ251bWJlck9mUGFnZXMnPlxuPignbGlicmFyeVBhbmVscy92aWV3L3NlYXJjaENvbXBsZXRlZCcpO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZSA9IGNyZWF0ZUFjdGlvbjxQaWNrPExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsICdwYWdlJz4+KCdsaWJyYXJ5UGFuZWxzL3ZpZXcvY2hhbmdlUGFnZScpO1xuXG5leHBvcnQgY29uc3QgbGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyID0gKHN0YXRlOiBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICBpZiAoaW5pdFNlYXJjaC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcgfTtcbiAgfVxuXG4gIGlmIChzZWFyY2hDb21wbGV0ZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IHsgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgdG90YWxDb3VudCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbGlicmFyeVBhbmVscyxcbiAgICAgIHBlclBhZ2UsXG4gICAgICB0b3RhbENvdW50LFxuICAgICAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgIG51bWJlck9mUGFnZXMsXG4gICAgICBwYWdlOiBwYWdlID4gbnVtYmVyT2ZQYWdlcyA/IHBhZ2UgLSAxIDogcGFnZSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKGNoYW5nZVBhZ2UubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlOiBhY3Rpb24ucGF5bG9hZC5wYWdlIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIG15VGFibGU6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDIwNHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXIucmFkaXVzLnNtfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJnM307XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzF9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLm1kfTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIGNvbG9yOiAjNTM4YWRlO1xuICAgICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICAgIH1cblxuICAgICAgdGgsXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxM3B4O1xuICAgICAgICBoZWlnaHQ6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgICB9XG5cbiAgICAgIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgbm90ZVRleHRib3g6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgYCxcbiAgICB0ZXh0SW5mbzogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICBgLFxuICAgIGRhc2hib2FyZFNlYXJjaDogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIG1vZGFsOiBjc3NgXG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgYCxcbiAgICBtb2RhbFRleHQ6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmhlYWRpbmcuaDR9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygke3RoZW1lLnNwYWNpbmcuZH0gKiAyKTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcuZH07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBBcHBFdmVudHMsIEdyYWZhbmFUaGVtZTIsIExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyByZXBvcnRJbnRlcmFjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGaWVsZCxcbiAgRmlsZVVwbG9hZCxcbiAgRm9ybSxcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBJbnB1dCxcbiAgU3Bpbm5lcixcbiAgc3R5bGVzRmFjdG9yeSxcbiAgVGV4dEFyZWEsXG4gIFRoZW1lYWJsZTIsXG4gIFZlcnRpY2FsR3JvdXAsXG4gIHdpdGhUaGVtZTIsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEltcG9ydERhc2hib2FyZE92ZXJ2aWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL0ltcG9ydERhc2hib2FyZE92ZXJ2aWV3JztcbmltcG9ydCB7IHZhbGlkYXRlRGFzaGJvYXJkSnNvbiwgdmFsaWRhdGVHY29tRGFzaGJvYXJkIH0gZnJvbSAnLi91dGlscy92YWxpZGF0aW9uJztcbmltcG9ydCB7IGZldGNoR2NvbURhc2hib2FyZCwgaW1wb3J0RGFzaGJvYXJkSnNvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvYWN0aW9ucy9jbGVhblVwJztcblxudHlwZSBEYXNoYm9hcmRJbXBvcnRQYWdlUm91dGVTZWFyY2hQYXJhbXMgPSB7XG4gIGdjb21EYXNoYm9hcmRJZD86IHN0cmluZztcbn07XG5cbnR5cGUgT3duUHJvcHMgPSBUaGVtZWFibGUyICYgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8e30sIERhc2hib2FyZEltcG9ydFBhZ2VSb3V0ZVNlYXJjaFBhcmFtcz47XG5cbmNvbnN0IElNUE9SVF9TVEFSVEVEX0VWRU5UX05BTUUgPSAnZGFzaGJvYXJkX2ltcG9ydF9sb2FkZWQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ2ltcG9ydCcsIHVuZGVmaW5lZCwgdHJ1ZSksXG4gIGxvYWRpbmdTdGF0ZTogc3RhdGUuaW1wb3J0RGFzaGJvYXJkLnN0YXRlLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZmV0Y2hHY29tRGFzaGJvYXJkLFxuICBpbXBvcnREYXNoYm9hcmRKc29uLFxuICBjbGVhblVwQWN0aW9uLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbnR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5jbGFzcyBVbnRoZW1lZERhc2hib2FyZEltcG9ydCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgZ2NvbURhc2hib2FyZElkIH0gPSB0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zO1xuICAgIGlmIChnY29tRGFzaGJvYXJkSWQpIHtcbiAgICAgIHRoaXMuZ2V0R2NvbURhc2hib2FyZCh7IGdjb21EYXNoYm9hcmQ6IGdjb21EYXNoYm9hcmRJZCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yOiAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLmltcG9ydERhc2hib2FyZCB9KTtcbiAgfVxuXG4gIG9uRmlsZVVwbG9hZCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgcmVwb3J0SW50ZXJhY3Rpb24oSU1QT1JUX1NUQVJURURfRVZFTlRfTkFNRSwge1xuICAgICAgaW1wb3J0X3NvdXJjZTogJ2pzb25fdXBsb2FkZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBpbXBvcnREYXNoYm9hcmRKc29uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmZpbGVzICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlsZXMubGVuZ3RoID4gMCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBjb25zdCByZWFkZXJPbkxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoZTogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IGRhc2hib2FyZDogYW55O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXNoYm9hcmQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydEVycm9yLCBbXG4gICAgICAgICAgICAgICdJbXBvcnQgZmFpbGVkJyxcbiAgICAgICAgICAgICAgJ0pTT04gLT4gSlMgU2VyaWFsaXphdGlvbiBmYWlsZWQ6ICcgKyBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGltcG9ydERhc2hib2FyZEpzb24oZGFzaGJvYXJkKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICByZWFkZXIub25sb2FkID0gcmVhZGVyT25Mb2FkKCk7XG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0RGFzaGJvYXJkRnJvbUpzb24gPSAoZm9ybURhdGE6IHsgZGFzaGJvYXJkSnNvbjogc3RyaW5nIH0pID0+IHtcbiAgICByZXBvcnRJbnRlcmFjdGlvbihJTVBPUlRfU1RBUlRFRF9FVkVOVF9OQU1FLCB7XG4gICAgICBpbXBvcnRfc291cmNlOiAnanNvbl9wYXN0ZWQnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5pbXBvcnREYXNoYm9hcmRKc29uKEpTT04ucGFyc2UoZm9ybURhdGEuZGFzaGJvYXJkSnNvbikpO1xuICB9O1xuXG4gIGdldEdjb21EYXNoYm9hcmQgPSAoZm9ybURhdGE6IHsgZ2NvbURhc2hib2FyZDogc3RyaW5nIH0pID0+IHtcbiAgICByZXBvcnRJbnRlcmFjdGlvbihJTVBPUlRfU1RBUlRFRF9FVkVOVF9OQU1FLCB7XG4gICAgICBpbXBvcnRfc291cmNlOiAnZ2NvbScsXG4gICAgfSk7XG5cbiAgICBsZXQgZGFzaGJvYXJkSWQ7XG4gICAgY29uc3QgbWF0Y2ggPSAvKF5cXGQrJCl8ZGFzaGJvYXJkc1xcLyhcXGQrKS8uZXhlYyhmb3JtRGF0YS5nY29tRGFzaGJvYXJkKTtcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIGRhc2hib2FyZElkID0gbWF0Y2hbMV07XG4gICAgfSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsyXSkge1xuICAgICAgZGFzaGJvYXJkSWQgPSBtYXRjaFsyXTtcbiAgICB9XG5cbiAgICBpZiAoZGFzaGJvYXJkSWQpIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hHY29tRGFzaGJvYXJkKGRhc2hib2FyZElkKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVySW1wb3J0Rm9ybSgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBpbXBvcnRTdHlsZXModGhpcy5wcm9wcy50aGVtZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PlxuICAgICAgICAgIDxGaWxlVXBsb2FkIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIiBvbkZpbGVVcGxvYWQ9e3RoaXMub25GaWxlVXBsb2FkfT5cbiAgICAgICAgICAgIFVwbG9hZCBKU09OIGZpbGVcbiAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuZ2V0R2NvbURhc2hib2FyZH0gZGVmYXVsdFZhbHVlcz17eyBnY29tRGFzaGJvYXJkOiAnJyB9fT5cbiAgICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJbXBvcnQgdmlhIGdyYWZhbmEuY29tXCJcbiAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5nY29tRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ2NvbURhc2hib2FyZCAmJiBlcnJvcnMuZ2NvbURhc2hib2FyZC5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInVybC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdyYWZhbmEuY29tIGRhc2hib2FyZCBVUkwgb3IgSURcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdnY29tRGFzaGJvYXJkJywge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0EgR3JhZmFuYSBkYXNoYm9hcmQgVVJMIG9yIElEIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlR2NvbURhc2hib2FyZCxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9hZDwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuZ2V0RGFzaGJvYXJkRnJvbUpzb259IGRlZmF1bHRWYWx1ZXM9e3sgZGFzaGJvYXJkSnNvbjogJycgfX0+XG4gICAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkltcG9ydCB2aWEgcGFuZWwganNvblwiXG4gICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5kYXNoYm9hcmRKc29ufVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5kYXNoYm9hcmRKc29uICYmIGVycm9ycy5kYXNoYm9hcmRKc29uLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZGFzaGJvYXJkSnNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ05lZWQgYSBkYXNoYm9hcmQgSlNPTiBtb2RlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlRGFzaGJvYXJkSnNvbixcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5EYXNoYm9hcmRJbXBvcnRQYWdlLnRleHRhcmVhfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImRhc2hib2FyZC1qc29uLXRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLkRhc2hib2FyZEltcG9ydFBhZ2Uuc3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIExvYWRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZ1N0YXRlLCBuYXZNb2RlbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgICB7bG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8VmVydGljYWxHcm91cCBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9ezMyfSAvPlxuICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtbTG9hZGluZ1N0YXRlLkVycm9yLCBMb2FkaW5nU3RhdGUuTm90U3RhcnRlZF0uaW5jbHVkZXMobG9hZGluZ1N0YXRlKSAmJiB0aGlzLnJlbmRlckltcG9ydEZvcm0oKX1cbiAgICAgICAgICB7bG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuRG9uZSAmJiA8SW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcgLz59XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IERhc2hib2FyZEltcG9ydFVuQ29ubmVjdGVkID0gd2l0aFRoZW1lMihVbnRoZW1lZERhc2hib2FyZEltcG9ydCk7XG5jb25zdCBEYXNoYm9hcmRJbXBvcnQgPSBjb25uZWN0b3IoRGFzaGJvYXJkSW1wb3J0VW5Db25uZWN0ZWQpO1xuRGFzaGJvYXJkSW1wb3J0LmRpc3BsYXlOYW1lID0gJ0Rhc2hib2FyZEltcG9ydCc7XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRJbXBvcnQ7XG5cbmNvbnN0IGltcG9ydFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb3B0aW9uOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmllbGQsXG4gIEZvcm1BUEksXG4gIEZvcm1GaWVsZEVycm9ycyxcbiAgRm9ybXNPblN1Ym1pdCxcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBJbnB1dCxcbiAgSW5wdXRDb250cm9sLFxuICBMZWdlbmQsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEV4cHJlc3Npb25EYXRhc291cmNlUmVmIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMvdXRpbHMvRGF0YVNvdXJjZVdpdGhCYWNrZW5kJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBGb2xkZXJQaWNrZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1NlbGVjdC9Gb2xkZXJQaWNrZXInO1xuaW1wb3J0IHtcbiAgRGFzaGJvYXJkSW5wdXQsXG4gIERhc2hib2FyZElucHV0cyxcbiAgRGF0YVNvdXJjZUlucHV0LFxuICBJbXBvcnREYXNoYm9hcmREVE8sXG4gIExpYnJhcnlQYW5lbElucHV0U3RhdGUsXG59IGZyb20gJy4uL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7IHZhbGlkYXRlVGl0bGUsIHZhbGlkYXRlVWlkIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdCB9IGZyb20gJy4vSW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBQaWNrPEZvcm1BUEk8SW1wb3J0RGFzaGJvYXJkRFRPPiwgJ3JlZ2lzdGVyJyB8ICdlcnJvcnMnIHwgJ2NvbnRyb2wnIHwgJ2dldFZhbHVlcycgfCAnd2F0Y2gnPiB7XG4gIHVpZFJlc2V0OiBib29sZWFuO1xuICBpbnB1dHM6IERhc2hib2FyZElucHV0cztcbiAgaW5pdGlhbEZvbGRlcklkOiBudW1iZXI7XG5cbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG4gIG9uVWlkUmVzZXQ6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiBGb3Jtc09uU3VibWl0PEltcG9ydERhc2hib2FyZERUTz47XG59XG5cbmV4cG9ydCBjb25zdCBJbXBvcnREYXNoYm9hcmRGb3JtOiBGQzxQcm9wcz4gPSAoe1xuICByZWdpc3RlcixcbiAgZXJyb3JzLFxuICBjb250cm9sLFxuICBnZXRWYWx1ZXMsXG4gIHVpZFJlc2V0LFxuICBpbnB1dHMsXG4gIGluaXRpYWxGb2xkZXJJZCxcbiAgb25VaWRSZXNldCxcbiAgb25DYW5jZWwsXG4gIG9uU3VibWl0LFxuICB3YXRjaCxcbn0pID0+IHtcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB3YXRjaERhdGFTb3VyY2VzID0gd2F0Y2goJ2RhdGFTb3VyY2VzJyk7XG4gIGNvbnN0IHdhdGNoRm9sZGVyID0gd2F0Y2goJ2ZvbGRlcicpO1xuXG4gIC8qXG4gICAgVGhpcyB1c2VFZmZlY3QgaXMgbmVlZGVkIGZvciBvdmVyd3JpdGluZyBhIGRhc2hib2FyZC4gSXRcbiAgICBzdWJtaXRzIHRoZSBmb3JtIGV2ZW4gaWYgdGhlcmUncyB2YWxpZGF0aW9uIGVycm9ycyBvbiB0aXRsZSBvciB1aWQuXG4gICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU3VibWl0dGVkICYmIChlcnJvcnMudGl0bGUgfHwgZXJyb3JzLnVpZCkpIHtcbiAgICAgIG9uU3VibWl0KGdldFZhbHVlcygpLCB7fSBhcyBhbnkpO1xuICAgIH1cbiAgfSwgW2Vycm9ycywgZ2V0VmFsdWVzLCBpc1N1Ym1pdHRlZCwgb25TdWJtaXRdKTtcbiAgY29uc3QgbmV3TGlicmFyeVBhbmVscyA9IGlucHV0cz8ubGlicmFyeVBhbmVscz8uZmlsdGVyKChpKSA9PiBpLnN0YXRlID09PSBMaWJyYXJ5UGFuZWxJbnB1dFN0YXRlLk5ldykgPz8gW107XG4gIGNvbnN0IGV4aXN0aW5nTGlicmFyeVBhbmVscyA9IGlucHV0cz8ubGlicmFyeVBhbmVscz8uZmlsdGVyKChpKSA9PiBpLnN0YXRlID09PSBMaWJyYXJ5UGFuZWxJbnB1dFN0YXRlLkV4aXRzKSA/PyBbXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGVnZW5kPk9wdGlvbnM8L0xlZ2VuZD5cbiAgICAgIDxGaWVsZCBsYWJlbD1cIk5hbWVcIiBpbnZhbGlkPXshIWVycm9ycy50aXRsZX0gZXJyb3I9e2Vycm9ycy50aXRsZSAmJiBlcnJvcnMudGl0bGUubWVzc2FnZX0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHsuLi5yZWdpc3RlcigndGl0bGUnLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogJ05hbWUgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGFzeW5jICh2OiBzdHJpbmcpID0+IGF3YWl0IHZhbGlkYXRlVGl0bGUodiwgZ2V0VmFsdWVzKCkuZm9sZGVyLmlkKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLkltcG9ydERhc2hib2FyZEZvcm0ubmFtZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgbGFiZWw9XCJGb2xkZXJcIj5cbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxGb2xkZXJQaWNrZXIgey4uLmZpZWxkfSBlbmFibGVDcmVhdGVOZXcgaW5pdGlhbEZvbGRlcklkPXtpbml0aWFsRm9sZGVySWR9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZm9sZGVyXCJcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZFxuICAgICAgICBsYWJlbD1cIlVuaXF1ZSBpZGVudGlmaWVyIChVSUQpXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgdW5pcXVlIGlkZW50aWZpZXIgKFVJRCkgb2YgYSBkYXNoYm9hcmQgY2FuIGJlIHVzZWQgZm9yIHVuaXF1ZWx5IGlkZW50aWZ5IGEgZGFzaGJvYXJkIGJldHdlZW4gbXVsdGlwbGUgR3JhZmFuYSBpbnN0YWxscy5cbiAgICAgICAgICAgICAgICBUaGUgVUlEIGFsbG93cyBoYXZpbmcgY29uc2lzdGVudCBVUkxzIGZvciBhY2Nlc3NpbmcgZGFzaGJvYXJkcyBzbyBjaGFuZ2luZyB0aGUgdGl0bGUgb2YgYSBkYXNoYm9hcmQgd2lsbCBub3QgYnJlYWsgYW55XG4gICAgICAgICAgICAgICAgYm9va21hcmtlZCBsaW5rcyB0byB0aGF0IGRhc2hib2FyZC5cIlxuICAgICAgICBpbnZhbGlkPXshIWVycm9ycy51aWR9XG4gICAgICAgIGVycm9yPXtlcnJvcnMudWlkICYmIGVycm9ycy51aWQubWVzc2FnZX1cbiAgICAgID5cbiAgICAgICAgPD5cbiAgICAgICAgICB7IXVpZFJlc2V0ID8gKFxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigndWlkJywgeyB2YWxpZGF0ZTogYXN5bmMgKHY6IHN0cmluZykgPT4gYXdhaXQgdmFsaWRhdGVVaWQodikgfSl9XG4gICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9eyF1aWRSZXNldCAmJiA8QnV0dG9uIG9uQ2xpY2s9e29uVWlkUmVzZXR9PkNoYW5nZSB1aWQ8L0J1dHRvbj59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCd1aWQnLCB7IHJlcXVpcmVkOiB0cnVlLCB2YWxpZGF0ZTogYXN5bmMgKHY6IHN0cmluZykgPT4gYXdhaXQgdmFsaWRhdGVVaWQodikgfSl9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAge2lucHV0cy5kYXRhU291cmNlcyAmJlxuICAgICAgICBpbnB1dHMuZGF0YVNvdXJjZXMubWFwKChpbnB1dDogRGF0YVNvdXJjZUlucHV0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGlucHV0LnBsdWdpbklkID09PSBFeHByZXNzaW9uRGF0YXNvdXJjZVJlZi50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGF0YVNvdXJjZU9wdGlvbiA9IGBkYXRhU291cmNlc1ske2luZGV4fV1gO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB3YXRjaERhdGFTb3VyY2VzID8/IFtdO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9e2lucHV0LmxhYmVsfVxuICAgICAgICAgICAgICBrZXk9e2RhdGFTb3VyY2VPcHRpb259XG4gICAgICAgICAgICAgIGludmFsaWQ9e2Vycm9ycy5kYXRhU291cmNlcyAmJiAhIWVycm9ycy5kYXRhU291cmNlc1tpbmRleF19XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZGF0YVNvdXJjZXMgJiYgZXJyb3JzLmRhdGFTb3VyY2VzW2luZGV4XSAmJiAnQSBkYXRhIHNvdXJjZSBpcyByZXF1aXJlZCd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICBuYW1lPXtkYXRhU291cmNlT3B0aW9uIGFzIGFueX1cbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgIG5vRGVmYXVsdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lucHV0LmluZm99XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbklkPXtpbnB1dC5wbHVnaW5JZH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudFtpbmRleF0/LnVpZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAge2lucHV0cy5jb25zdGFudHMgJiZcbiAgICAgICAgaW5wdXRzLmNvbnN0YW50cy5tYXAoKGlucHV0OiBEYXNoYm9hcmRJbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb25zdGFudEluZGV4ID0gYGNvbnN0YW50c1ske2luZGV4fV1gO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9e2lucHV0LmxhYmVsfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmNvbnN0YW50cyAmJiBlcnJvcnMuY29uc3RhbnRzW2luZGV4XSAmJiBgJHtpbnB1dC5sYWJlbH0gbmVlZHMgYSB2YWx1ZWB9XG4gICAgICAgICAgICAgIGludmFsaWQ9e2Vycm9ycy5jb25zdGFudHMgJiYgISFlcnJvcnMuY29uc3RhbnRzW2luZGV4XX1cbiAgICAgICAgICAgICAga2V5PXtjb25zdGFudEluZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKGNvbnN0YW50SW5kZXggYXMgYW55LCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBkZWZhdWx0VmFsdWU9e2lucHV0LnZhbHVlfSAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDxJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdFxuICAgICAgICBpbnB1dHM9e25ld0xpYnJhcnlQYW5lbHN9XG4gICAgICAgIGxhYmVsPVwiTmV3IGxpYnJhcnkgcGFuZWxzXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJMaXN0IG9mIG5ldyBsaWJyYXJ5IHBhbmVscyB0aGF0IHdpbGwgZ2V0IGltcG9ydGVkLlwiXG4gICAgICAgIGZvbGRlck5hbWU9e3dhdGNoRm9sZGVyLnRpdGxlfVxuICAgICAgLz5cbiAgICAgIDxJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdFxuICAgICAgICBpbnB1dHM9e2V4aXN0aW5nTGlicmFyeVBhbmVsc31cbiAgICAgICAgbGFiZWw9XCJFeGlzdGluZyBsaWJyYXJ5IHBhbmVsc1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiTGlzdCBvZiBleGlzdGluZyBsaWJyYXJ5IHBhbmVscy4gVGhlc2UgcGFuZWxzIGFyZSBub3QgYWZmZWN0ZWQgYnkgdGhlIGltcG9ydC5cIlxuICAgICAgICBmb2xkZXJOYW1lPXt3YXRjaEZvbGRlci50aXRsZX1cbiAgICAgIC8+XG4gICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLkltcG9ydERhc2hib2FyZEZvcm0uc3VibWl0fVxuICAgICAgICAgIHZhcmlhbnQ9e2dldEJ1dHRvblZhcmlhbnQoZXJyb3JzKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRCdXR0b25UZXh0KGVycm9ycyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkNhbmNlbH0+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgPC8+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRCdXR0b25WYXJpYW50KGVycm9yczogRm9ybUZpZWxkRXJyb3JzPEltcG9ydERhc2hib2FyZERUTz4pIHtcbiAgcmV0dXJuIGVycm9ycyAmJiAoZXJyb3JzLnRpdGxlIHx8IGVycm9ycy51aWQpID8gJ2Rlc3RydWN0aXZlJyA6ICdwcmltYXJ5Jztcbn1cblxuZnVuY3Rpb24gZ2V0QnV0dG9uVGV4dChlcnJvcnM6IEZvcm1GaWVsZEVycm9yczxJbXBvcnREYXNoYm9hcmREVE8+KSB7XG4gIHJldHVybiBlcnJvcnMgJiYgKGVycm9ycy50aXRsZSB8fCBlcnJvcnMudWlkKSA/ICdJbXBvcnQgKE92ZXJ3cml0ZSknIDogJ0ltcG9ydCc7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IExpYnJhcnlQYW5lbElucHV0LCBMaWJyYXJ5UGFuZWxJbnB1dFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IExpYnJhcnlQYW5lbENhcmQgfSBmcm9tICcuLi8uLi9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbENhcmQvTGlicmFyeVBhbmVsQ2FyZCc7XG5cbmludGVyZmFjZSBJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdFByb3BzIHtcbiAgaW5wdXRzOiBMaWJyYXJ5UGFuZWxJbnB1dFtdO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBmb2xkZXJOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3Qoe1xuICBpbnB1dHMsXG4gIGxhYmVsLFxuICBkZXNjcmlwdGlvbixcbiAgZm9sZGVyTmFtZSxcbn06IEltcG9ydERhc2hib2FyZExpYnJhcnlQYW5lbHNMaXN0UHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghQm9vbGVhbihpbnB1dHM/Lmxlbmd0aCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9PlxuICAgICAgPEZpZWxkIGxhYmVsPXtsYWJlbH0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufT5cbiAgICAgICAgPD5cbiAgICAgICAgICB7aW5wdXRzLm1hcCgoaW5wdXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaWJyYXJ5UGFuZWxJbmRleCA9IGBlbGVtZW50c1ske2luZGV4fV1gO1xuICAgICAgICAgICAgY29uc3QgbGlicmFyeVBhbmVsID1cbiAgICAgICAgICAgICAgaW5wdXQuc3RhdGUgPT09IExpYnJhcnlQYW5lbElucHV0U3RhdGUuTmV3XG4gICAgICAgICAgICAgICAgPyB7IC4uLmlucHV0Lm1vZGVsLCBtZXRhOiB7IC4uLmlucHV0Lm1vZGVsLm1ldGEsIGZvbGRlck5hbWU6IGZvbGRlck5hbWUgPz8gJ0dlbmVyYWwnIH0gfVxuICAgICAgICAgICAgICAgIDogeyAuLi5pbnB1dC5tb2RlbCB9O1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSBrZXk9e2xpYnJhcnlQYW5lbEluZGV4fT5cbiAgICAgICAgICAgICAgICA8TGlicmFyeVBhbmVsQ2FyZCBsaWJyYXJ5UGFuZWw9e2xpYnJhcnlQYW5lbH0gb25DbGljaz17KCkgPT4gdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9GaWVsZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgc3BhY2VyOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgaXRlbTogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRm9ybSwgTGVnZW5kIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBJbXBvcnREYXNoYm9hcmRGb3JtIH0gZnJvbSAnLi9JbXBvcnREYXNoYm9hcmRGb3JtJztcbmltcG9ydCB7IGNsZWFyTG9hZGVkRGFzaGJvYXJkLCBpbXBvcnREYXNoYm9hcmQgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IERhc2hib2FyZFNvdXJjZSwgSW1wb3J0RGFzaGJvYXJkRFRPIH0gZnJvbSAnLi4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UsIHJlcG9ydEludGVyYWN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmNvbnN0IElNUE9SVF9GSU5JU0hFRF9FVkVOVF9OQU1FID0gJ2Rhc2hib2FyZF9pbXBvcnRfaW1wb3J0ZWQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHtcbiAgY29uc3Qgc2VhcmNoT2JqID0gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuXG4gIHJldHVybiB7XG4gICAgZGFzaGJvYXJkOiBzdGF0ZS5pbXBvcnREYXNoYm9hcmQuZGFzaGJvYXJkLFxuICAgIG1ldGE6IHN0YXRlLmltcG9ydERhc2hib2FyZC5tZXRhLFxuICAgIHNvdXJjZTogc3RhdGUuaW1wb3J0RGFzaGJvYXJkLnNvdXJjZSxcbiAgICBpbnB1dHM6IHN0YXRlLmltcG9ydERhc2hib2FyZC5pbnB1dHMsXG4gICAgZm9sZGVyOiBzZWFyY2hPYmouZm9sZGVySWQgPyB7IGlkOiBOdW1iZXIoc2VhcmNoT2JqLmZvbGRlcklkKSB9IDogeyBpZDogMCB9LFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjbGVhckxvYWRlZERhc2hib2FyZCxcbiAgaW1wb3J0RGFzaGJvYXJkLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgdWlkUmVzZXQ6IGJvb2xlYW47XG59XG5cbmNsYXNzIEltcG9ydERhc2hib2FyZE92ZXJ2aWV3VW5Db25uZWN0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgdWlkUmVzZXQ6IGZhbHNlLFxuICB9O1xuXG4gIG9uU3VibWl0ID0gKGZvcm06IEltcG9ydERhc2hib2FyZERUTykgPT4ge1xuICAgIHJlcG9ydEludGVyYWN0aW9uKElNUE9SVF9GSU5JU0hFRF9FVkVOVF9OQU1FKTtcblxuICAgIHRoaXMucHJvcHMuaW1wb3J0RGFzaGJvYXJkKGZvcm0pO1xuICB9O1xuXG4gIG9uQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2xlYXJMb2FkZWREYXNoYm9hcmQoKTtcbiAgfTtcblxuICBvblVpZFJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB1aWRSZXNldDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmQsIGlucHV0cywgbWV0YSwgc291cmNlLCBmb2xkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1aWRSZXNldCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7c291cmNlID09PSBEYXNoYm9hcmRTb3VyY2UuR2NvbSAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyNHB4JyB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMZWdlbmQ+XG4gICAgICAgICAgICAgICAgSW1wb3J0aW5nIGRhc2hib2FyZCBmcm9teycgJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ3JhZmFuYS5jb20vZGFzaGJvYXJkcy8ke2Rhc2hib2FyZC5nbmV0SWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdyYWZhbmEuY29tXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xlZ2VuZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlB1Ymxpc2hlZCBieTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e21ldGEub3JnTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlVwZGF0ZWQgb248L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntkYXRlVGltZUZvcm1hdChtZXRhLnVwZGF0ZWRBdCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWVzPXt7IC4uLmRhc2hib2FyZCwgY29uc3RhbnRzOiBbXSwgZGF0YVNvdXJjZXM6IFtdLCBlbGVtZW50czogW10sIGZvbGRlcjogZm9sZGVyIH19XG4gICAgICAgICAgdmFsaWRhdGVPbk1vdW50XG4gICAgICAgICAgdmFsaWRhdGVGaWVsZHNPbk1vdW50PXtbJ3RpdGxlJywgJ3VpZCddfVxuICAgICAgICAgIHZhbGlkYXRlT249XCJvbkNoYW5nZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycywgY29udHJvbCwgd2F0Y2gsIGdldFZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgICA8SW1wb3J0RGFzaGJvYXJkRm9ybVxuICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICBnZXRWYWx1ZXM9e2dldFZhbHVlc31cbiAgICAgICAgICAgICAgdWlkUmVzZXQ9e3VpZFJlc2V0fVxuICAgICAgICAgICAgICBpbnB1dHM9e2lucHV0c31cbiAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMub25DYW5jZWx9XG4gICAgICAgICAgICAgIG9uVWlkUmVzZXQ9e3RoaXMub25VaWRSZXNldH1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgIHdhdGNoPXt3YXRjaH1cbiAgICAgICAgICAgICAgaW5pdGlhbEZvbGRlcklkPXtmb2xkZXIuaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEltcG9ydERhc2hib2FyZE92ZXJ2aWV3ID0gY29ubmVjdG9yKEltcG9ydERhc2hib2FyZE92ZXJ2aWV3VW5Db25uZWN0ZWQpO1xuSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcuZGlzcGxheU5hbWUgPSAnSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcnO1xuIiwiaW1wb3J0IHsgdmFsaWRhdGlvblNydiB9IGZyb20gJy4uL3NlcnZpY2VzL1ZhbGlkYXRpb25TcnYnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVEYXNoYm9hcmRKc29uID0gKGpzb246IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIEpTT04ucGFyc2UoanNvbik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdOb3QgdmFsaWQgSlNPTic7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUdjb21EYXNoYm9hcmQgPSAoZ2NvbURhc2hib2FyZDogc3RyaW5nKSA9PiB7XG4gIC8vIEZyb20gRGFzaGJvYXJkSW1wb3J0Q3RybFxuICBjb25zdCBtYXRjaCA9IC8oXlxcZCskKXxkYXNoYm9hcmRzXFwvKFxcZCspLy5leGVjKGdjb21EYXNoYm9hcmQpO1xuXG4gIHJldHVybiBtYXRjaCAmJiAobWF0Y2hbMV0gfHwgbWF0Y2hbMl0pID8gdHJ1ZSA6ICdDb3VsZCBub3QgZmluZCBhIHZhbGlkIEdyYWZhbmEuY29tIElEJztcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVRpdGxlID0gKG5ld1RpdGxlOiBzdHJpbmcsIGZvbGRlcklkOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIHZhbGlkYXRpb25TcnZcbiAgICAudmFsaWRhdGVOZXdEYXNoYm9hcmROYW1lKGZvbGRlcklkLCBuZXdUaXRsZSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvci50eXBlID09PSAnRVhJU1RJTkcnKSB7XG4gICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVWlkID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKVxuICAgIC5nZXQoYC9hcGkvZGFzaGJvYXJkcy91aWQvJHt2YWx1ZX1gKVxuICAgIC50aGVuKChleGlzdGluZ0Rhc2hib2FyZCkgPT4ge1xuICAgICAgcmV0dXJuIGBEYXNoYm9hcmQgbmFtZWQgJyR7ZXhpc3RpbmdEYXNoYm9hcmQ/LmRhc2hib2FyZC50aXRsZX0nIGluIGZvbGRlciAnJHtleGlzdGluZ0Rhc2hib2FyZD8ubWV0YS5mb2xkZXJUaXRsZX0nIGhhcyB0aGUgc2FtZSBVSURgO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgZXJyb3IuaXNIYW5kbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUsIFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEljb25CdXR0b24sIFBsdWdpblNpZ25hdHVyZUJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IFBsdWdpblN0YXRlSW5mbyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNDdXJyZW50OiBib29sZWFuO1xuICBwbHVnaW46IFBhbmVsUGx1Z2luTWV0YTtcbiAgdGl0bGU6IHN0cmluZztcbiAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXI8SFRNTERpdkVsZW1lbnQ+O1xuICBvbkRlbGV0ZT86ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2hvd0JhZGdlPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbFR5cGVDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBpc0N1cnJlbnQsXG4gIHRpdGxlLFxuICBwbHVnaW4sXG4gIG9uQ2xpY2ssXG4gIG9uRGVsZXRlLFxuICBkaXNhYmxlZCxcbiAgc2hvd0JhZGdlLFxuICBkZXNjcmlwdGlvbixcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgY3NzQ2xhc3MgPSBjeCh7XG4gICAgW3N0eWxlcy5pdGVtXTogdHJ1ZSxcbiAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQgfHwgcGx1Z2luLnN0YXRlID09PSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkLFxuICAgIFtzdHlsZXMuY3VycmVudF06IGlzQ3VycmVudCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUGx1Z2luVmlzdWFsaXphdGlvbi5pdGVtKHBsdWdpbi5uYW1lKX1cbiAgICAgIG9uQ2xpY2s9e2Rpc2FibGVkID8gdW5kZWZpbmVkIDogb25DbGlja31cbiAgICAgIHRpdGxlPXtpc0N1cnJlbnQgPyAnQ2xpY2sgYWdhaW4gdG8gY2xvc2UgdGhpcyBzZWN0aW9uJyA6IHBsdWdpbi5uYW1lfVxuICAgID5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e3BsdWdpbi5pbmZvLmxvZ29zLnNtYWxsfSBhbHQ9XCJcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1Db250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dGl0bGV9PC9kaXY+XG4gICAgICAgIHtkZXNjcmlwdGlvbiA/IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9zcGFuPiA6IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dCYWRnZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYmFkZ2UsIGRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZCl9PlxuICAgICAgICAgIDxQYW5lbFBsdWdpbkJhZGdlIHBsdWdpbj17cGx1Z2lufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG5hbWU9XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb25EZWxldGUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUJ1dHRvbn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIGJ1dHRvbiBvbiBwYW5lbCB0eXBlIGNhcmRcIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhbmVsVHlwZUNhcmQuZGlzcGxheU5hbWUgPSAnUGFuZWxUeXBlQ2FyZCc7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW06IGNzc2BcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgICAgYm94LXNoYWRvdzogJHt0aGVtZS5zaGFkb3dzLnoxfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2JhY2tncm91bmQnXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnQsXG4gICAgICB9KX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5lbXBoYXNpemUodGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5LCAwLjAzKX07XG4gICAgICB9XG4gICAgYCxcbiAgICBpdGVtQ29udGVudDogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLCAxKX07XG4gICAgYCxcbiAgICBjdXJyZW50OiBjc3NgXG4gICAgICBsYWJlbDogY3VycmVudFZpc3VhbGl6YXRpb25JdGVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMucHJpbWFyeS5ib3JkZXJ9O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYWN0aW9uLnNlbGVjdGVkfTtcbiAgICBgLFxuICAgIGRpc2FibGVkOiBjc3NgXG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGAsXG4gICAgbmFtZTogY3NzYFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW19O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBkZXNjcmlwdGlvbjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogNC41ZW07XG4gICAgYCxcbiAgICBpbWc6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gICAgICB3aWR0aDogMzhweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gICAgYmFkZ2U6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgYCxcbiAgICBkZWxldGVCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGAsXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgUGFuZWxQbHVnaW5CYWRnZVByb3BzIHtcbiAgcGx1Z2luOiBQYW5lbFBsdWdpbk1ldGE7XG59XG5cbmNvbnN0IFBhbmVsUGx1Z2luQmFkZ2U6IFJlYWN0LkZDPFBhbmVsUGx1Z2luQmFkZ2VQcm9wcz4gPSAoeyBwbHVnaW4gfSkgPT4ge1xuICBpZiAoaXNVbnNpZ25lZFBsdWdpblNpZ25hdHVyZShwbHVnaW4uc2lnbmF0dXJlKSkge1xuICAgIHJldHVybiA8UGx1Z2luU2lnbmF0dXJlQmFkZ2Ugc3RhdHVzPXtwbHVnaW4uc2lnbmF0dXJlfSAvPjtcbiAgfVxuXG4gIHJldHVybiA8UGx1Z2luU3RhdGVJbmZvIHN0YXRlPXtwbHVnaW4uc3RhdGV9IC8+O1xufTtcblxuUGFuZWxQbHVnaW5CYWRnZS5kaXNwbGF5TmFtZSA9ICdQYW5lbFBsdWdpbkJhZGdlJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJhZGdlLCBCYWRnZVByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU/OiBQbHVnaW5TdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IFBsdWdpblN0YXRlSW5mbzogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBnZXRGZWF0dXJlU3RhdGVJbmZvKHByb3BzLnN0YXRlKTtcblxuICBpZiAoIWRpc3BsYXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiA8QmFkZ2UgY29sb3I9e2Rpc3BsYXkuY29sb3J9IHRpdGxlPXtkaXNwbGF5LnRvb2x0aXB9IHRleHQ9e2Rpc3BsYXkudGV4dH0gaWNvbj17ZGlzcGxheS5pY29ufSAvPjtcbn07XG5cbmZ1bmN0aW9uIGdldEZlYXR1cmVTdGF0ZUluZm8oc3RhdGU/OiBQbHVnaW5TdGF0ZSk6IEJhZGdlUHJvcHMgfCBudWxsIHtcbiAgc3dpdGNoIChzdGF0ZSkge1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuZGVwcmVjYXRlZDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdEZXByZWNhdGVkJyxcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5hbHBoYTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdBbHBoYScsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZXhwZXJpbWVudGFsIGFuZCBmdXR1cmUgdXBkYXRlcyBtaWdodCBub3QgYmUgYmFja3dhcmQgY29tcGF0aWJsZWAsXG4gICAgICB9O1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuYmV0YTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdCZXRhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBjbG9zZSB0byBjb21wbGV0ZSBidXQgbm90IGZ1bGx5IHRlc3RlZGAsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJCdXR0b24iLCJNb2RhbCIsInVzZVN0eWxlcyIsIkxvYWRpbmdTdGF0ZSIsImFzeW5jRGlzcGF0Y2hlciIsImRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciIsImluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIiwiZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyIsImdldE1vZGFsU3R5bGVzIiwiRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwiLCJsaWJyYXJ5UGFuZWwiLCJvbkRpc21pc3MiLCJvbkNvbmZpcm0iLCJzdHlsZXMiLCJkYXNoYm9hcmRUaXRsZXMiLCJsb2FkaW5nU3RhdGUiLCJkaXNwYXRjaCIsImFzeW5jRGlzcGF0Y2giLCJjb25uZWN0ZWQiLCJCb29sZWFuIiwibGVuZ3RoIiwiZG9uZSIsIkRvbmUiLCJtb2RhbCIsIkxvYWRpbmdJbmRpY2F0b3IiLCJDb25maXJtIiwibW9kYWxUZXh0IiwiSGFzQ29ubmVjdGVkRGFzaGJvYXJkcyIsInN1ZmZpeCIsIm1lc3NhZ2UiLCJ0ZXh0SW5mbyIsIm15VGFibGUiLCJtYXAiLCJ0aXRsZSIsImkiLCJhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIiwic2VhcmNoQ29tcGxldGVkIiwiZGFzaGJvYXJkcyIsInVpZCIsImNyZWF0ZUFjdGlvbiIsIkxvYWRpbmciLCJzdGF0ZSIsImFjdGlvbiIsIm1hdGNoIiwicGF5bG9hZCIsImQiLCJ1c2VTdGF0ZSIsImNzcyIsIkljb24iLCJMaW5rIiwidXNlU3R5bGVzMiIsIlBhbmVsVHlwZUNhcmQiLCJjb25maWciLCJnZXRQYW5lbFBsdWdpbk5vdEZvdW5kIiwiTGlicmFyeVBhbmVsQ2FyZCIsIm9uQ2xpY2siLCJvbkRlbGV0ZSIsInNob3dTZWNvbmRhcnlBY3Rpb25zIiwic2hvd0RlbGV0aW9uTW9kYWwiLCJzZXRTaG93RGVsZXRpb25Nb2RhbCIsIm9uRGVsZXRlUGFuZWwiLCJwYW5lbFBsdWdpbiIsInBhbmVscyIsIm1vZGVsIiwidHlwZSIsIm1ldGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJGb2xkZXJMaW5rIiwiZ2V0U3R5bGVzIiwiZm9sZGVyVWlkIiwiZm9sZGVyTmFtZSIsIm1ldGFDb250YWluZXIiLCJ0aGVtZSIsImNvbG9ycyIsInRleHQiLCJzZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiYm9keVNtYWxsIiwiZm9udFNpemUiLCJzcGFjaW5nIiwiZnJvbSIsIm1lcmdlIiwib2YiLCJTdWJzY3JpcHRpb24iLCJ0aW1lciIsImNhdGNoRXJyb3IiLCJmaW5hbGl6ZSIsIm1hcFRvIiwibWVyZ2VNYXAiLCJzaGFyZSIsInRha2VVbnRpbCIsImRlbGV0ZUxpYnJhcnlQYW5lbCIsImFwaURlbGV0ZUxpYnJhcnlQYW5lbCIsImdldExpYnJhcnlQYW5lbHMiLCJpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSIsImluaXRTZWFyY2giLCJzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzIiwiYXJncyIsInN1YnNjcmlwdGlvbiIsImRhdGFPYnNlcnZhYmxlIiwic2VhcmNoU3RyaW5nIiwicGVyUGFnZSIsInBhZ2UiLCJleGNsdWRlVWlkIiwiY3VycmVudFBhbmVsSWQiLCJzb3J0RGlyZWN0aW9uIiwidHlwZUZpbHRlciIsInBhbmVsRmlsdGVyIiwiZm9sZGVyRmlsdGVyIiwicGlwZSIsImVsZW1lbnRzIiwibGlicmFyeVBhbmVscyIsInRvdGFsQ291bnQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ1bnN1YnNjcmliZSIsImFkZCIsInN1YnNjcmliZSIsImUiLCJGdW5jdGlvbiIsIm51bWJlck9mUGFnZXMiLCJjaGFuZ2VQYWdlIiwibGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyIiwiTWF0aCIsImNlaWwiLCJib3JkZXIiLCJyYWRpdXMiLCJzbSIsImJnMyIsImJnMSIsInRleHRTZW1pV2VhayIsInNpemUiLCJtZCIsInhsIiwiYmcyIiwibm90ZVRleHRib3giLCJkYXNoYm9hcmRTZWFyY2giLCJoZWFkaW5nIiwiaDQiLCJsaW5rIiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJBcHBFdmVudHMiLCJzZWxlY3RvcnMiLCJyZXBvcnRJbnRlcmFjdGlvbiIsIkZpZWxkIiwiRmlsZVVwbG9hZCIsIkZvcm0iLCJIb3Jpem9udGFsR3JvdXAiLCJJbnB1dCIsIlNwaW5uZXIiLCJzdHlsZXNGYWN0b3J5IiwiVGV4dEFyZWEiLCJWZXJ0aWNhbEdyb3VwIiwid2l0aFRoZW1lMiIsIlBhZ2UiLCJJbXBvcnREYXNoYm9hcmRPdmVydmlldyIsInZhbGlkYXRlRGFzaGJvYXJkSnNvbiIsInZhbGlkYXRlR2NvbURhc2hib2FyZCIsImZldGNoR2NvbURhc2hib2FyZCIsImltcG9ydERhc2hib2FyZEpzb24iLCJhcHBFdmVudHMiLCJnZXROYXZNb2RlbCIsImNsZWFuVXBBY3Rpb24iLCJJTVBPUlRfU1RBUlRFRF9FVkVOVF9OQU1FIiwibWFwU3RhdGVUb1Byb3BzIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImltcG9ydERhc2hib2FyZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIlVudGhlbWVkRGFzaGJvYXJkSW1wb3J0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImV2ZW50IiwiaW1wb3J0X3NvdXJjZSIsImZpbGUiLCJjdXJyZW50VGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZGVyT25Mb2FkIiwiZGFzaGJvYXJkIiwiSlNPTiIsInBhcnNlIiwidGFyZ2V0IiwicmVzdWx0IiwiZW1pdCIsImFsZXJ0RXJyb3IiLCJvbmxvYWQiLCJyZWFkQXNUZXh0IiwiZm9ybURhdGEiLCJkYXNoYm9hcmRKc29uIiwiZGFzaGJvYXJkSWQiLCJleGVjIiwiZ2NvbURhc2hib2FyZCIsImdjb21EYXNoYm9hcmRJZCIsInF1ZXJ5UGFyYW1zIiwiZ2V0R2NvbURhc2hib2FyZCIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic3RhdGVTZWxlY3RvciIsInJlbmRlckltcG9ydEZvcm0iLCJpbXBvcnRTdHlsZXMiLCJvcHRpb24iLCJvbkZpbGVVcGxvYWQiLCJyZWdpc3RlciIsImVycm9ycyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJnZXREYXNoYm9hcmRGcm9tSnNvbiIsImNvbXBvbmVudHMiLCJEYXNoYm9hcmRJbXBvcnRQYWdlIiwidGV4dGFyZWEiLCJzdWJtaXQiLCJyZW5kZXIiLCJFcnJvciIsIk5vdFN0YXJ0ZWQiLCJpbmNsdWRlcyIsIkRhc2hib2FyZEltcG9ydFVuQ29ubmVjdGVkIiwiRGFzaGJvYXJkSW1wb3J0IiwiZGlzcGxheU5hbWUiLCJJbnB1dENvbnRyb2wiLCJMZWdlbmQiLCJEYXRhU291cmNlUGlja2VyIiwiRXhwcmVzc2lvbkRhdGFzb3VyY2VSZWYiLCJGb2xkZXJQaWNrZXIiLCJMaWJyYXJ5UGFuZWxJbnB1dFN0YXRlIiwidmFsaWRhdGVUaXRsZSIsInZhbGlkYXRlVWlkIiwiSW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3QiLCJJbXBvcnREYXNoYm9hcmRGb3JtIiwiY29udHJvbCIsImdldFZhbHVlcyIsInVpZFJlc2V0IiwiaW5wdXRzIiwiaW5pdGlhbEZvbGRlcklkIiwib25VaWRSZXNldCIsIm9uQ2FuY2VsIiwib25TdWJtaXQiLCJ3YXRjaCIsImlzU3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwid2F0Y2hEYXRhU291cmNlcyIsIndhdGNoRm9sZGVyIiwibmV3TGlicmFyeVBhbmVscyIsImZpbHRlciIsIk5ldyIsImV4aXN0aW5nTGlicmFyeVBhbmVscyIsIkV4aXRzIiwidiIsImZvbGRlciIsImlkIiwiZmllbGQiLCJkYXRhU291cmNlcyIsImlucHV0IiwiaW5kZXgiLCJwbHVnaW5JZCIsImRhdGFTb3VyY2VPcHRpb24iLCJjdXJyZW50IiwibGFiZWwiLCJpbmZvIiwiY29uc3RhbnRzIiwiY29uc3RhbnRJbmRleCIsInZhbHVlIiwiZ2V0QnV0dG9uVmFyaWFudCIsImdldEJ1dHRvblRleHQiLCJzcGFjZXIiLCJsaWJyYXJ5UGFuZWxJbmRleCIsIml0ZW0iLCJkYXRlVGltZUZvcm1hdCIsImNsZWFyTG9hZGVkRGFzaGJvYXJkIiwiRGFzaGJvYXJkU291cmNlIiwibG9jYXRpb25TZXJ2aWNlIiwiSU1QT1JUX0ZJTklTSEVEX0VWRU5UX05BTUUiLCJzZWFyY2hPYmoiLCJnZXRTZWFyY2hPYmplY3QiLCJzb3VyY2UiLCJmb2xkZXJJZCIsIk51bWJlciIsIkltcG9ydERhc2hib2FyZE92ZXJ2aWV3VW5Db25uZWN0ZWQiLCJmb3JtIiwic2V0U3RhdGUiLCJHY29tIiwibWFyZ2luQm90dG9tIiwiZ25ldElkIiwib3JnTmFtZSIsInVwZGF0ZWRBdCIsInZhbGlkYXRpb25TcnYiLCJnZXRCYWNrZW5kU3J2IiwianNvbiIsIm5ld1RpdGxlIiwidmFsaWRhdGVOZXdEYXNoYm9hcmROYW1lIiwidGhlbiIsImNhdGNoIiwiZ2V0IiwiZXhpc3RpbmdEYXNoYm9hcmQiLCJmb2xkZXJUaXRsZSIsImlzSGFuZGxlZCIsImlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUiLCJQbHVnaW5TdGF0ZSIsIkljb25CdXR0b24iLCJQbHVnaW5TaWduYXR1cmVCYWRnZSIsImN4IiwiUGx1Z2luU3RhdGVJbmZvIiwiaXNDdXJyZW50IiwicGx1Z2luIiwiZGlzYWJsZWQiLCJzaG93QmFkZ2UiLCJjaGlsZHJlbiIsImNzc0NsYXNzIiwiZGVwcmVjYXRlZCIsIlBsdWdpblZpc3VhbGl6YXRpb24iLCJpbWciLCJsb2dvcyIsInNtYWxsIiwiaXRlbUNvbnRlbnQiLCJiYWRnZSIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZUJ1dHRvbiIsImJhY2tncm91bmQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNoYWRvd3MiLCJ6MSIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydCIsImVtcGhhc2l6ZSIsInByaW1hcnkiLCJzZWxlY3RlZCIsImZvbnRXZWlnaHRNZWRpdW0iLCJmb250V2VpZ2h0TGlnaHQiLCJQYW5lbFBsdWdpbkJhZGdlIiwic2lnbmF0dXJlIiwiQmFkZ2UiLCJkaXNwbGF5IiwiZ2V0RmVhdHVyZVN0YXRlSW5mbyIsImNvbG9yIiwidG9vbHRpcCIsImljb24iLCJhbHBoYSIsImJldGEiXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistPage"],{

/***/ "./public/app/core/components/PageActionBar/PageActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class PageActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      searchQuery,
      linkButton,
      setSearchQuery,
      target,
      placeholder = 'Search by name or type'
    } = this.props;
    const linkProps = {
      href: linkButton === null || linkButton === void 0 ? void 0 : linkButton.href,
      disabled: linkButton === null || linkButton === void 0 ? void 0 : linkButton.disabled
    };

    if (target) {
      linkProps.target = target;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: placeholder
        })
      }), linkButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({}, linkProps, {
        children: linkButton.title
      }))]
    });
  }

}

/***/ }),

/***/ "./public/app/features/playlist/EmptyQueryListBanner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyQueryListBanner": () => (/* binding */ EmptyQueryListBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const EmptyQueryListBanner = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.noResult,
    children: "No playlist found!"
  });
};

const getStyles = theme => {
  return {
    noResult: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      padding: ${theme.spacing(2)};
      background: ${theme.colors.secondary.main};
      font-style: italic;
      margin-top: ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistPage": () => (/* binding */ PlaylistPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
/* harmony import */ var _core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/api.ts");
/* harmony import */ var _StartModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/StartModal.tsx");
/* harmony import */ var _PlaylistPageList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/playlist/PlaylistPageList.tsx");
/* harmony import */ var _EmptyQueryListBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/playlist/EmptyQueryListBanner.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _EmptyListCTA, _EmptyQueryListBanner;















const PlaylistPage = ({
  navModel
}) => {
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchQuery);
  const [hasFetched, setHasFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [startPlaylist, setStartPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [playlistToDelete, setPlaylistToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [forcePlaylistsFetch, setForcePlaylistsFetch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [playlists, setPlaylists] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(async () => {
    const playlists = await (0,_api__WEBPACK_IMPORTED_MODULE_7__.getAllPlaylist)(searchQuery);

    if (!hasFetched) {
      setHasFetched(true);
    }

    setPlaylists(playlists);
    setDebouncedSearchQuery(searchQuery);
  }, 350, [forcePlaylistsFetch, searchQuery]);
  const hasPlaylists = playlists && playlists.length > 0;

  const onDismissDelete = () => setPlaylistToDelete(undefined);

  const onDeletePlaylist = () => {
    if (!playlistToDelete) {
      return;
    }

    (0,_api__WEBPACK_IMPORTED_MODULE_7__.deletePlaylist)(playlistToDelete.id).finally(() => {
      setForcePlaylistsFetch(forcePlaylistsFetch + 1);
      setPlaylistToDelete(undefined);
    });
  };

  const emptyListBanner = _EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "There are no playlists created yet",
    buttonIcon: "plus",
    buttonLink: "playlists/new",
    buttonTitle: "Create Playlist",
    proTip: "You can use playlists to cycle dashboards on TVs without user control"
  }));

  const showSearch = playlists.length > 0 || searchQuery.length > 0 || debouncedSearchQuery.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: !hasFetched,
      children: [showSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        searchQuery: searchQuery,
        linkButton: {
          title: 'New playlist',
          href: '/playlists/new'
        },
        setSearchQuery: setSearchQuery
      }), !hasPlaylists && searchQuery ? _EmptyQueryListBanner || (_EmptyQueryListBanner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_EmptyQueryListBanner__WEBPACK_IMPORTED_MODULE_10__.EmptyQueryListBanner, {})) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PlaylistPageList__WEBPACK_IMPORTED_MODULE_9__.PlaylistPageList, {
        playlists: playlists,
        setStartPlaylist: setStartPlaylist,
        setPlaylistToDelete: setPlaylistToDelete
      }), !showSearch && emptyListBanner, playlistToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
        title: playlistToDelete.name,
        confirmText: "Delete",
        body: `Are you sure you want to delete '${playlistToDelete.name}' playlist?`,
        onConfirm: onDeletePlaylist,
        isOpen: Boolean(playlistToDelete),
        onDismiss: onDismissDelete
      }), startPlaylist && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StartModal__WEBPACK_IMPORTED_MODULE_8__.StartModal, {
        playlist: startPlaylist,
        onDismiss: () => setStartPlaylist(undefined)
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, 'playlists')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistPage));

/***/ }),

/***/ "./public/app/features/playlist/PlaylistPageList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistPageList": () => (/* binding */ PlaylistPageList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavButton.tsx");
/* harmony import */ var _ShareModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/playlist/ShareModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const PlaylistPageList = ({
  playlists,
  setStartPlaylist,
  setPlaylistToDelete
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
    className: styles.list,
    children: playlists.map(playlist => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
      className: styles.listItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Heading, {
          children: [playlist.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ModalsController, {
            children: ({
              showModal,
              hideModal
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_4__.DashNavButton, {
              tooltip: "Share playlist",
              icon: "share-alt",
              iconSize: "lg",
              onClick: () => {
                showModal(_ShareModal__WEBPACK_IMPORTED_MODULE_5__.ShareModal, {
                  playlistId: playlist.id,
                  onDismiss: hideModal
                });
              }
            })
          }, "button-share")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Actions, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "secondary",
            icon: "play",
            onClick: () => setStartPlaylist(playlist),
            children: "Start playlist"
          }), app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.isEditor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
              variant: "secondary",
              href: `/playlists/edit/${playlist.id}`,
              icon: "cog",
              children: "Edit playlist"
            }, "edit"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              disabled: false,
              onClick: () => setPlaylistToDelete({
                id: playlist.id,
                name: playlist.name
              }),
              icon: "trash-alt",
              variant: "destructive",
              children: "Delete playlist"
            })]
          })]
        })]
      })
    }, playlist.id.toString()))
  });
};

function getStyles(theme) {
  return {
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      display: 'grid'
    }),
    listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      listStyle: 'none'
    })
  };
}

/***/ }),

/***/ "./public/app/features/playlist/ShareModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModal": () => (/* binding */ ShareModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _dashboard_components_ShareModal_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/ShareModal/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;








const ShareModal = ({
  playlistId,
  onDismiss
}) => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [autoFit, setAutofit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const modes = [{
    label: 'Normal',
    value: false
  }, {
    label: 'TV',
    value: 'tv'
  }, {
    label: 'Kiosk',
    value: true
  }];

  const onShareUrlCopy = () => {
    app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, ['Content copied to clipboard']);
  };

  const params = {};

  if (mode) {
    params.kiosk = mode;
  }

  if (autoFit) {
    params.autofitpanels = true;
  }

  const shareUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl(`${(0,_dashboard_components_ShareModal_utils__WEBPACK_IMPORTED_MODULE_4__.buildBaseUrl)()}/play/${playlistId}`, params);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    isOpen: true,
    title: "Share playlist",
    onDismiss: onDismiss,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
          value: mode,
          options: modes,
          onChange: setMode
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
          label: "Autofit",
          description: "Panel heights will be adjusted to fit screen size",
          name: "autofix",
          value: autoFit,
          onChange: e => setAutofit(e.currentTarget.checked)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Link URL",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          id: "link-url-input",
          value: shareUrl,
          readOnly: true,
          addonAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ClipboardButton, {
            variant: "primary",
            getText: () => shareUrl,
            onClipboardCopy: onShareUrlCopy,
            children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "copy"
            })), " Copy"]
          })
        })
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/playlist/StartModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartModal": () => (/* binding */ StartModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const StartModal = ({
  playlist,
  onDismiss
}) => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [autoFit, setAutofit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const modes = [{
    label: 'Normal',
    value: false
  }, {
    label: 'TV',
    value: 'tv'
  }, {
    label: 'Kiosk',
    value: true
  }];

  const onStart = () => {
    const params = {};

    if (mode) {
      params.kiosk = mode;
    }

    if (autoFit) {
      params.autofitpanels = true;
    }

    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl(`/playlists/play/${playlist.id}`, params));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    isOpen: true,
    icon: "play",
    title: "Start playlist",
    onDismiss: onDismiss,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
          value: mode,
          options: modes,
          onChange: setMode
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
        label: "Autofit",
        description: "Panel heights will be adjusted to fit screen size",
        name: "autofix",
        value: autoFit,
        onChange: e => setAutofit(e.currentTarget.checked)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        variant: "primary",
        onClick: onStart,
        children: ["Start ", playlist.name]
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/playlist/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlaylist": () => (/* binding */ createPlaylist),
/* harmony export */   "deletePlaylist": () => (/* binding */ deletePlaylist),
/* harmony export */   "getAllPlaylist": () => (/* binding */ getAllPlaylist),
/* harmony export */   "getPlaylist": () => (/* binding */ getPlaylist),
/* harmony export */   "updatePlaylist": () => (/* binding */ updatePlaylist)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");




async function createPlaylist(playlist) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/playlists', playlist));
}
async function updatePlaylist(id, playlist) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/playlists/${id}`, playlist));
}
async function deletePlaylist(id) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/playlists/${id}`), 'Playlist deleted');
}
async function getPlaylist(id) {
  const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/playlists/${id}`);
  return result;
}
async function getAllPlaylist(query) {
  const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/playlists/', {
    query
  });
  return result;
}

async function withErrorHandling(apiCall, message = 'Playlist saved') {
  try {
    await apiCall();
    (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createSuccessNotification)(message)));
  } catch (e) {
    (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)('Unable to save playlist', e)));
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBK0RDLE9BQU8sR0FBRyxnQkFBekUsRUFBMkY7QUFDekYsTUFBSTtBQUNGLFVBQU1ELE9BQU8sRUFBYjtBQUNBZCxJQUFBQSxzREFBUSxDQUFDQyx3REFBUyxDQUFDRSxxRkFBeUIsQ0FBQ1ksT0FBRCxDQUExQixDQUFWLENBQVI7QUFDRCxHQUhELENBR0UsT0FBT3RCLENBQVAsRUFBVTtBQUNWTyxJQUFBQSxzREFBUSxDQUFDQyx3REFBUyxDQUFDQyxtRkFBdUIsQ0FBQyx5QkFBRCxFQUE0QlQsQ0FBNUIsQ0FBeEIsQ0FBVixDQUFSO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlQWN0aW9uQmFyL1BhZ2VBY3Rpb25CYXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L0VtcHR5UXVlcnlMaXN0QmFubmVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0UGFnZUxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1NoYXJlTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1N0YXJ0TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmtCdXR0b24sIEZpbHRlcklucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgc2V0U2VhcmNoUXVlcnk6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBsaW5rQnV0dG9uPzogeyBocmVmOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGRpc2FibGVkPzogYm9vbGVhbiB9O1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlQWN0aW9uQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWFyY2hRdWVyeSwgbGlua0J1dHRvbiwgc2V0U2VhcmNoUXVlcnksIHRhcmdldCwgcGxhY2Vob2xkZXIgPSAnU2VhcmNoIGJ5IG5hbWUgb3IgdHlwZScgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGlua1Byb3BzOiB0eXBlb2YgTGlua0J1dHRvbi5kZWZhdWx0UHJvcHMgPSB7IGhyZWY6IGxpbmtCdXR0b24/LmhyZWYsIGRpc2FibGVkOiBsaW5rQnV0dG9uPy5kaXNhYmxlZCB9O1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgbGlua1Byb3BzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICA8RmlsdGVySW5wdXQgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17c2V0U2VhcmNoUXVlcnl9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtsaW5rQnV0dG9uICYmIDxMaW5rQnV0dG9uIHsuLi5saW5rUHJvcHN9PntsaW5rQnV0dG9uLnRpdGxlfTwvTGlua0J1dHRvbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBFbXB0eVF1ZXJ5TGlzdEJhbm5lciA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub1Jlc3VsdH0+Tm8gcGxheWxpc3QgZm91bmQhPC9kaXY+O1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbm9SZXN1bHQ6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnkubWFpbn07XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIE1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IFBsYXlsaXN0RFRPIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZUFjdGlvbkJhciBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2VBY3Rpb25CYXIvUGFnZUFjdGlvbkJhcic7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCB7IGRlbGV0ZVBsYXlsaXN0LCBnZXRBbGxQbGF5bGlzdCB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IFN0YXJ0TW9kYWwgfSBmcm9tICcuL1N0YXJ0TW9kYWwnO1xuaW1wb3J0IHsgUGxheWxpc3RQYWdlTGlzdCB9IGZyb20gJy4vUGxheWxpc3RQYWdlTGlzdCc7XG5pbXBvcnQgeyBFbXB0eVF1ZXJ5TGlzdEJhbm5lciB9IGZyb20gJy4vRW1wdHlRdWVyeUxpc3RCYW5uZXInO1xuXG5pbnRlcmZhY2UgQ29ubmVjdGVkUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0UGFnZVByb3BzIGV4dGVuZHMgQ29ubmVjdGVkUHJvcHMsIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdFBhZ2U6IEZDPFBsYXlsaXN0UGFnZVByb3BzPiA9ICh7IG5hdk1vZGVsIH0pID0+IHtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2hRdWVyeSwgc2V0RGVib3VuY2VkU2VhcmNoUXVlcnldID0gdXNlU3RhdGUoc2VhcmNoUXVlcnkpO1xuICBjb25zdCBbaGFzRmV0Y2hlZCwgc2V0SGFzRmV0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydFBsYXlsaXN0LCBzZXRTdGFydFBsYXlsaXN0XSA9IHVzZVN0YXRlPFBsYXlsaXN0RFRPIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCBbcGxheWxpc3RUb0RlbGV0ZSwgc2V0UGxheWxpc3RUb0RlbGV0ZV0gPSB1c2VTdGF0ZTxQbGF5bGlzdERUTyB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3QgW2ZvcmNlUGxheWxpc3RzRmV0Y2gsIHNldEZvcmNlUGxheWxpc3RzRmV0Y2hdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW3BsYXlsaXN0cywgc2V0UGxheWxpc3RzXSA9IHVzZVN0YXRlPFBsYXlsaXN0RFRPW10+KFtdKTtcblxuICB1c2VEZWJvdW5jZShcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwbGF5bGlzdHMgPSBhd2FpdCBnZXRBbGxQbGF5bGlzdChzZWFyY2hRdWVyeSk7XG4gICAgICBpZiAoIWhhc0ZldGNoZWQpIHtcbiAgICAgICAgc2V0SGFzRmV0Y2hlZCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHNldFBsYXlsaXN0cyhwbGF5bGlzdHMpO1xuICAgICAgc2V0RGVib3VuY2VkU2VhcmNoUXVlcnkoc2VhcmNoUXVlcnkpO1xuICAgIH0sXG4gICAgMzUwLFxuICAgIFtmb3JjZVBsYXlsaXN0c0ZldGNoLCBzZWFyY2hRdWVyeV1cbiAgKTtcblxuICBjb25zdCBoYXNQbGF5bGlzdHMgPSBwbGF5bGlzdHMgJiYgcGxheWxpc3RzLmxlbmd0aCA+IDA7XG4gIGNvbnN0IG9uRGlzbWlzc0RlbGV0ZSA9ICgpID0+IHNldFBsYXlsaXN0VG9EZWxldGUodW5kZWZpbmVkKTtcbiAgY29uc3Qgb25EZWxldGVQbGF5bGlzdCA9ICgpID0+IHtcbiAgICBpZiAoIXBsYXlsaXN0VG9EZWxldGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVsZXRlUGxheWxpc3QocGxheWxpc3RUb0RlbGV0ZS5pZCkuZmluYWxseSgoKSA9PiB7XG4gICAgICBzZXRGb3JjZVBsYXlsaXN0c0ZldGNoKGZvcmNlUGxheWxpc3RzRmV0Y2ggKyAxKTtcbiAgICAgIHNldFBsYXlsaXN0VG9EZWxldGUodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBlbXB0eUxpc3RCYW5uZXIgPSAoXG4gICAgPEVtcHR5TGlzdENUQVxuICAgICAgdGl0bGU9XCJUaGVyZSBhcmUgbm8gcGxheWxpc3RzIGNyZWF0ZWQgeWV0XCJcbiAgICAgIGJ1dHRvbkljb249XCJwbHVzXCJcbiAgICAgIGJ1dHRvbkxpbms9XCJwbGF5bGlzdHMvbmV3XCJcbiAgICAgIGJ1dHRvblRpdGxlPVwiQ3JlYXRlIFBsYXlsaXN0XCJcbiAgICAgIHByb1RpcD1cIllvdSBjYW4gdXNlIHBsYXlsaXN0cyB0byBjeWNsZSBkYXNoYm9hcmRzIG9uIFRWcyB3aXRob3V0IHVzZXIgY29udHJvbFwiXG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBzaG93U2VhcmNoID0gcGxheWxpc3RzLmxlbmd0aCA+IDAgfHwgc2VhcmNoUXVlcnkubGVuZ3RoID4gMCB8fCBkZWJvdW5jZWRTZWFyY2hRdWVyeS5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17IWhhc0ZldGNoZWR9PlxuICAgICAgICB7c2hvd1NlYXJjaCAmJiAoXG4gICAgICAgICAgPFBhZ2VBY3Rpb25CYXJcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIGxpbmtCdXR0b249e3sgdGl0bGU6ICdOZXcgcGxheWxpc3QnLCBocmVmOiAnL3BsYXlsaXN0cy9uZXcnIH19XG4gICAgICAgICAgICBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWhhc1BsYXlsaXN0cyAmJiBzZWFyY2hRdWVyeSA/IChcbiAgICAgICAgICA8RW1wdHlRdWVyeUxpc3RCYW5uZXIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UGxheWxpc3RQYWdlTGlzdFxuICAgICAgICAgICAgcGxheWxpc3RzPXtwbGF5bGlzdHN9XG4gICAgICAgICAgICBzZXRTdGFydFBsYXlsaXN0PXtzZXRTdGFydFBsYXlsaXN0fVxuICAgICAgICAgICAgc2V0UGxheWxpc3RUb0RlbGV0ZT17c2V0UGxheWxpc3RUb0RlbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IXNob3dTZWFyY2ggJiYgZW1wdHlMaXN0QmFubmVyfVxuICAgICAgICB7cGxheWxpc3RUb0RlbGV0ZSAmJiAoXG4gICAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgICAgdGl0bGU9e3BsYXlsaXN0VG9EZWxldGUubmFtZX1cbiAgICAgICAgICAgIGNvbmZpcm1UZXh0PVwiRGVsZXRlXCJcbiAgICAgICAgICAgIGJvZHk9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICcke3BsYXlsaXN0VG9EZWxldGUubmFtZX0nIHBsYXlsaXN0P2B9XG4gICAgICAgICAgICBvbkNvbmZpcm09e29uRGVsZXRlUGxheWxpc3R9XG4gICAgICAgICAgICBpc09wZW49e0Jvb2xlYW4ocGxheWxpc3RUb0RlbGV0ZSl9XG4gICAgICAgICAgICBvbkRpc21pc3M9e29uRGlzbWlzc0RlbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7c3RhcnRQbGF5bGlzdCAmJiA8U3RhcnRNb2RhbCBwbGF5bGlzdD17c3RhcnRQbGF5bGlzdH0gb25EaXNtaXNzPXsoKSA9PiBzZXRTdGFydFBsYXlsaXN0KHVuZGVmaW5lZCl9IC8+fVxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzPENvbm5lY3RlZFByb3BzLCB7fSwgU3RvcmVTdGF0ZT4gPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3BsYXlsaXN0cycpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQbGF5bGlzdFBhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBsYXlsaXN0RFRPIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIExpbmtCdXR0b24sIE1vZGFsc0NvbnRyb2xsZXIsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IERhc2hOYXZCdXR0b24gfSBmcm9tICcuLi9kYXNoYm9hcmQvY29tcG9uZW50cy9EYXNoTmF2L0Rhc2hOYXZCdXR0b24nO1xuaW1wb3J0IHsgU2hhcmVNb2RhbCB9IGZyb20gJy4vU2hhcmVNb2RhbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNldFN0YXJ0UGxheWxpc3Q6IChwbGF5bGlzdEl0ZW06IFBsYXlsaXN0RFRPKSA9PiB2b2lkO1xuICBzZXRQbGF5bGlzdFRvRGVsZXRlOiAocGxheWxpc3RJdGVtOiBQbGF5bGlzdERUTykgPT4gdm9pZDtcbiAgcGxheWxpc3RzOiBQbGF5bGlzdERUT1tdIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RQYWdlTGlzdCA9ICh7IHBsYXlsaXN0cywgc2V0U3RhcnRQbGF5bGlzdCwgc2V0UGxheWxpc3RUb0RlbGV0ZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAge3BsYXlsaXN0cyEubWFwKChwbGF5bGlzdDogUGxheWxpc3REVE8pID0+IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfSBrZXk9e3BsYXlsaXN0LmlkLnRvU3RyaW5nKCl9PlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmQuSGVhZGluZz5cbiAgICAgICAgICAgICAge3BsYXlsaXN0Lm5hbWV9XG4gICAgICAgICAgICAgIDxNb2RhbHNDb250cm9sbGVyIGtleT1cImJ1dHRvbi1zaGFyZVwiPlxuICAgICAgICAgICAgICAgIHsoeyBzaG93TW9kYWwsIGhpZGVNb2RhbCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RGFzaE5hdkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiU2hhcmUgcGxheWxpc3RcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwic2hhcmUtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgaWNvblNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWwoU2hhcmVNb2RhbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RJZDogcGxheWxpc3QuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3M6IGhpZGVNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Nb2RhbHNDb250cm9sbGVyPlxuICAgICAgICAgICAgPC9DYXJkLkhlYWRpbmc+XG4gICAgICAgICAgICA8Q2FyZC5BY3Rpb25zPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpY29uPVwicGxheVwiIG9uQ2xpY2s9eygpID0+IHNldFN0YXJ0UGxheWxpc3QocGxheWxpc3QpfT5cbiAgICAgICAgICAgICAgICBTdGFydCBwbGF5bGlzdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAge2NvbnRleHRTcnYuaXNFZGl0b3IgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBrZXk9XCJlZGl0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGhyZWY9e2AvcGxheWxpc3RzL2VkaXQvJHtwbGF5bGlzdC5pZH1gfSBpY29uPVwiY29nXCI+XG4gICAgICAgICAgICAgICAgICAgIEVkaXQgcGxheWxpc3RcbiAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQbGF5bGlzdFRvRGVsZXRlKHsgaWQ6IHBsYXlsaXN0LmlkLCBuYW1lOiBwbGF5bGlzdC5uYW1lIH0pfVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlIHBsYXlsaXN0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2FyZC5BY3Rpb25zPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBjc3Moe1xuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIH0pLFxuICAgIGxpc3RJdGVtOiBjc3Moe1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgfSksXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBFdmVudHMsIFNlbGVjdGFibGVWYWx1ZSwgVXJsUXVlcnlNYXAsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENoZWNrYm94LCBDbGlwYm9hcmRCdXR0b24sIEZpZWxkLCBGaWVsZFNldCwgSWNvbiwgSW5wdXQsIE1vZGFsLCBSYWRpb0J1dHRvbkdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcbmltcG9ydCB7IGJ1aWxkQmFzZVVybCB9IGZyb20gJy4uL2Rhc2hib2FyZC9jb21wb25lbnRzL1NoYXJlTW9kYWwvdXRpbHMnO1xuaW1wb3J0IHsgUGxheWxpc3RNb2RlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBTaGFyZU1vZGFsUHJvcHMge1xuICBwbGF5bGlzdElkOiBudW1iZXI7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFNoYXJlTW9kYWwgPSAoeyBwbGF5bGlzdElkLCBvbkRpc21pc3MgfTogU2hhcmVNb2RhbFByb3BzKSA9PiB7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlPFBsYXlsaXN0TW9kZT4oZmFsc2UpO1xuICBjb25zdCBbYXV0b0ZpdCwgc2V0QXV0b2ZpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbW9kZXM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxQbGF5bGlzdE1vZGU+PiA9IFtcbiAgICB7IGxhYmVsOiAnTm9ybWFsJywgdmFsdWU6IGZhbHNlIH0sXG4gICAgeyBsYWJlbDogJ1RWJywgdmFsdWU6ICd0dicgfSxcbiAgICB7IGxhYmVsOiAnS2lvc2snLCB2YWx1ZTogdHJ1ZSB9LFxuICBdO1xuXG4gIGNvbnN0IG9uU2hhcmVVcmxDb3B5ID0gKCkgPT4ge1xuICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydFN1Y2Nlc3MsIFsnQ29udGVudCBjb3BpZWQgdG8gY2xpcGJvYXJkJ10pO1xuICB9O1xuXG4gIGNvbnN0IHBhcmFtczogVXJsUXVlcnlNYXAgPSB7fTtcbiAgaWYgKG1vZGUpIHtcbiAgICBwYXJhbXMua2lvc2sgPSBtb2RlO1xuICB9XG4gIGlmIChhdXRvRml0KSB7XG4gICAgcGFyYW1zLmF1dG9maXRwYW5lbHMgPSB0cnVlO1xuICB9XG5cbiAgY29uc3Qgc2hhcmVVcmwgPSB1cmxVdGlsLnJlbmRlclVybChgJHtidWlsZEJhc2VVcmwoKX0vcGxheS8ke3BsYXlsaXN0SWR9YCwgcGFyYW1zKTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBpc09wZW49e3RydWV9IHRpdGxlPVwiU2hhcmUgcGxheWxpc3RcIiBvbkRpc21pc3M9e29uRGlzbWlzc30+XG4gICAgICA8RmllbGRTZXQ+XG4gICAgICAgIDxGaWVsZCBsYWJlbD1cIk1vZGVcIj5cbiAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17bW9kZX0gb3B0aW9ucz17bW9kZXN9IG9uQ2hhbmdlPXtzZXRNb2RlfSAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBsYWJlbD1cIkF1dG9maXRcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQYW5lbCBoZWlnaHRzIHdpbGwgYmUgYWRqdXN0ZWQgdG8gZml0IHNjcmVlbiBzaXplXCJcbiAgICAgICAgICAgIG5hbWU9XCJhdXRvZml4XCJcbiAgICAgICAgICAgIHZhbHVlPXthdXRvRml0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRvZml0KGUuY3VycmVudFRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgIDxGaWVsZCBsYWJlbD1cIkxpbmsgVVJMXCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBpZD1cImxpbmstdXJsLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzaGFyZVVybH1cbiAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICBhZGRvbkFmdGVyPXtcbiAgICAgICAgICAgICAgPENsaXBib2FyZEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGdldFRleHQ9eygpID0+IHNoYXJlVXJsfSBvbkNsaXBib2FyZENvcHk9e29uU2hhcmVVcmxDb3B5fT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY29weVwiIC8+IENvcHlcbiAgICAgICAgICAgICAgPC9DbGlwYm9hcmRCdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgIDwvRmllbGRTZXQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFBsYXlsaXN0RFRPLCBQbGF5bGlzdE1vZGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZpZWxkLCBGaWVsZFNldCwgTW9kYWwsIFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnRNb2RhbFByb3BzIHtcbiAgcGxheWxpc3Q6IFBsYXlsaXN0RFRPO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTdGFydE1vZGFsOiBGQzxTdGFydE1vZGFsUHJvcHM+ID0gKHsgcGxheWxpc3QsIG9uRGlzbWlzcyB9KSA9PiB7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlPFBsYXlsaXN0TW9kZT4oZmFsc2UpO1xuICBjb25zdCBbYXV0b0ZpdCwgc2V0QXV0b2ZpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbW9kZXM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxQbGF5bGlzdE1vZGU+PiA9IFtcbiAgICB7IGxhYmVsOiAnTm9ybWFsJywgdmFsdWU6IGZhbHNlIH0sXG4gICAgeyBsYWJlbDogJ1RWJywgdmFsdWU6ICd0dicgfSxcbiAgICB7IGxhYmVsOiAnS2lvc2snLCB2YWx1ZTogdHJ1ZSB9LFxuICBdO1xuXG4gIGNvbnN0IG9uU3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICBpZiAobW9kZSkge1xuICAgICAgcGFyYW1zLmtpb3NrID0gbW9kZTtcbiAgICB9XG4gICAgaWYgKGF1dG9GaXQpIHtcbiAgICAgIHBhcmFtcy5hdXRvZml0cGFuZWxzID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXJsVXRpbC5yZW5kZXJVcmwoYC9wbGF5bGlzdHMvcGxheS8ke3BsYXlsaXN0LmlkfWAsIHBhcmFtcykpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGlzT3Blbj17dHJ1ZX0gaWNvbj1cInBsYXlcIiB0aXRsZT1cIlN0YXJ0IHBsYXlsaXN0XCIgb25EaXNtaXNzPXtvbkRpc21pc3N9PlxuICAgICAgPEZpZWxkU2V0PlxuICAgICAgICA8RmllbGQgbGFiZWw9XCJNb2RlXCI+XG4gICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgdmFsdWU9e21vZGV9IG9wdGlvbnM9e21vZGVzfSBvbkNoYW5nZT17c2V0TW9kZX0gLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgbGFiZWw9XCJBdXRvZml0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBhbmVsIGhlaWdodHMgd2lsbCBiZSBhZGp1c3RlZCB0byBmaXQgc2NyZWVuIHNpemVcIlxuICAgICAgICAgIG5hbWU9XCJhdXRvZml4XCJcbiAgICAgICAgICB2YWx1ZT17YXV0b0ZpdH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dG9maXQoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZFNldD5cbiAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtvblN0YXJ0fT5cbiAgICAgICAgICBTdGFydCB7cGxheWxpc3QubmFtZX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgUGxheWxpc3QsIFBsYXlsaXN0RFRPIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJy4uLy4uL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiwgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGxheWxpc3QocGxheWxpc3Q6IFBsYXlsaXN0KSB7XG4gIGF3YWl0IHdpdGhFcnJvckhhbmRsaW5nKCgpID0+IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3BsYXlsaXN0cycsIHBsYXlsaXN0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQbGF5bGlzdChpZDogbnVtYmVyLCBwbGF5bGlzdDogUGxheWxpc3QpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9wbGF5bGlzdHMvJHtpZH1gLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGxheWxpc3QoaWQ6IG51bWJlcikge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL3BsYXlsaXN0cy8ke2lkfWApLCAnUGxheWxpc3QgZGVsZXRlZCcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWxpc3QoaWQ6IG51bWJlcik6IFByb21pc2U8UGxheWxpc3Q+IHtcbiAgY29uc3QgcmVzdWx0OiBQbGF5bGlzdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvcGxheWxpc3RzLyR7aWR9YCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQbGF5bGlzdChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxQbGF5bGlzdERUT1tdPiB7XG4gIGNvbnN0IHJlc3VsdDogUGxheWxpc3REVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGxheWxpc3RzLycsIHsgcXVlcnkgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhFcnJvckhhbmRsaW5nKGFwaUNhbGw6ICgpID0+IFByb21pc2U8dm9pZD4sIG1lc3NhZ2UgPSAnUGxheWxpc3Qgc2F2ZWQnKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpQ2FsbCgpO1xuICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKG1lc3NhZ2UpKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ1VuYWJsZSB0byBzYXZlIHBsYXlsaXN0JywgZSkpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkxpbmtCdXR0b24iLCJGaWx0ZXJJbnB1dCIsIlBhZ2VBY3Rpb25CYXIiLCJyZW5kZXIiLCJzZWFyY2hRdWVyeSIsImxpbmtCdXR0b24iLCJzZXRTZWFyY2hRdWVyeSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicHJvcHMiLCJsaW5rUHJvcHMiLCJocmVmIiwiZGlzYWJsZWQiLCJ0aXRsZSIsInVzZVN0eWxlczIiLCJjc3MiLCJFbXB0eVF1ZXJ5TGlzdEJhbm5lciIsInN0eWxlcyIsImdldFN0eWxlcyIsIm5vUmVzdWx0IiwidGhlbWUiLCJzcGFjaW5nIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwibWFpbiIsInVzZVN0YXRlIiwiY29ubmVjdCIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsInVzZURlYm91bmNlIiwiQ29uZmlybU1vZGFsIiwiRW1wdHlMaXN0Q1RBIiwiZGVsZXRlUGxheWxpc3QiLCJnZXRBbGxQbGF5bGlzdCIsIlN0YXJ0TW9kYWwiLCJQbGF5bGlzdFBhZ2VMaXN0IiwiUGxheWxpc3RQYWdlIiwibmF2TW9kZWwiLCJkZWJvdW5jZWRTZWFyY2hRdWVyeSIsInNldERlYm91bmNlZFNlYXJjaFF1ZXJ5IiwiaGFzRmV0Y2hlZCIsInNldEhhc0ZldGNoZWQiLCJzdGFydFBsYXlsaXN0Iiwic2V0U3RhcnRQbGF5bGlzdCIsInBsYXlsaXN0VG9EZWxldGUiLCJzZXRQbGF5bGlzdFRvRGVsZXRlIiwiZm9yY2VQbGF5bGlzdHNGZXRjaCIsInNldEZvcmNlUGxheWxpc3RzRmV0Y2giLCJwbGF5bGlzdHMiLCJzZXRQbGF5bGlzdHMiLCJoYXNQbGF5bGlzdHMiLCJsZW5ndGgiLCJvbkRpc21pc3NEZWxldGUiLCJ1bmRlZmluZWQiLCJvbkRlbGV0ZVBsYXlsaXN0IiwiaWQiLCJmaW5hbGx5IiwiZW1wdHlMaXN0QmFubmVyIiwic2hvd1NlYXJjaCIsIm5hbWUiLCJCb29sZWFuIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZJbmRleCIsIkJ1dHRvbiIsIkNhcmQiLCJNb2RhbHNDb250cm9sbGVyIiwiY29udGV4dFNydiIsIkRhc2hOYXZCdXR0b24iLCJTaGFyZU1vZGFsIiwibGlzdCIsIm1hcCIsInBsYXlsaXN0IiwibGlzdEl0ZW0iLCJzaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJwbGF5bGlzdElkIiwib25EaXNtaXNzIiwiaXNFZGl0b3IiLCJ0b1N0cmluZyIsImRpc3BsYXkiLCJsaXN0U3R5bGUiLCJBcHBFdmVudHMiLCJ1cmxVdGlsIiwiQ2hlY2tib3giLCJDbGlwYm9hcmRCdXR0b24iLCJGaWVsZCIsIkZpZWxkU2V0IiwiSWNvbiIsIklucHV0IiwiTW9kYWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiYXBwRXZlbnRzIiwiYnVpbGRCYXNlVXJsIiwibW9kZSIsInNldE1vZGUiLCJhdXRvRml0Iiwic2V0QXV0b2ZpdCIsIm1vZGVzIiwibGFiZWwiLCJ2YWx1ZSIsIm9uU2hhcmVVcmxDb3B5IiwiZW1pdCIsImFsZXJ0U3VjY2VzcyIsInBhcmFtcyIsImtpb3NrIiwiYXV0b2ZpdHBhbmVscyIsInNoYXJlVXJsIiwicmVuZGVyVXJsIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJjaGVja2VkIiwibG9jYXRpb25TZXJ2aWNlIiwib25TdGFydCIsInB1c2giLCJnZXRCYWNrZW5kU3J2IiwiZGlzcGF0Y2giLCJub3RpZnlBcHAiLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsImNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24iLCJjcmVhdGVQbGF5bGlzdCIsIndpdGhFcnJvckhhbmRsaW5nIiwicG9zdCIsInVwZGF0ZVBsYXlsaXN0IiwicHV0IiwiZGVsZXRlIiwiZ2V0UGxheWxpc3QiLCJyZXN1bHQiLCJnZXQiLCJxdWVyeSIsImFwaUNhbGwiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==
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
    proTip: "You can use playlists to cycle dashboards on TVs without user control",
    proTipLink: "http://docs.grafana.org/reference/playlist/",
    proTipLinkTitle: "Learn more",
    proTipTarget: "_blank"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQXZDLENBQXBDO0FBQ0EsU0FBT0YsTUFBUDtBQUNEOztBQUVELGVBQWVOLGlCQUFmLENBQWlDUyxPQUFqQyxFQUErREMsT0FBTyxHQUFHLGdCQUF6RSxFQUEyRjtBQUN6RixNQUFJO0FBQ0YsVUFBTUQsT0FBTyxFQUFiO0FBQ0FkLElBQUFBLHNEQUFRLENBQUNDLHdEQUFTLENBQUNFLHFGQUF5QixDQUFDWSxPQUFELENBQTFCLENBQVYsQ0FBUjtBQUNELEdBSEQsQ0FHRSxPQUFPdEIsQ0FBUCxFQUFVO0FBQ1ZPLElBQUFBLHNEQUFRLENBQUNDLHdEQUFTLENBQUNDLG1GQUF1QixDQUFDLHlCQUFELEVBQTRCVCxDQUE1QixDQUF4QixDQUFWLENBQVI7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1BhZ2VBY3Rpb25CYXIvUGFnZUFjdGlvbkJhci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvRW1wdHlRdWVyeUxpc3RCYW5uZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RQYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvU2hhcmVNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvU3RhcnRNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvYXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiwgRmlsdGVySW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBzZXRTZWFyY2hRdWVyeTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxpbmtCdXR0b24/OiB7IGhyZWY6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgZGlzYWJsZWQ/OiBib29sZWFuIH07XG4gIHRhcmdldD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VBY3Rpb25CYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCBsaW5rQnV0dG9uLCBzZXRTZWFyY2hRdWVyeSwgdGFyZ2V0LCBwbGFjZWhvbGRlciA9ICdTZWFyY2ggYnkgbmFtZSBvciB0eXBlJyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsaW5rUHJvcHM6IHR5cGVvZiBMaW5rQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHsgaHJlZjogbGlua0J1dHRvbj8uaHJlZiwgZGlzYWJsZWQ6IGxpbmtCdXR0b24/LmRpc2FibGVkIH07XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBsaW5rUHJvcHMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dCB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXtzZXRTZWFyY2hRdWVyeX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2xpbmtCdXR0b24gJiYgPExpbmtCdXR0b24gey4uLmxpbmtQcm9wc30+e2xpbmtCdXR0b24udGl0bGV9PC9MaW5rQnV0dG9uPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuZXhwb3J0IGNvbnN0IEVtcHR5UXVlcnlMaXN0QmFubmVyID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUmVzdWx0fT5ObyBwbGF5bGlzdCBmb3VuZCE8L2Rpdj47XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBub1Jlc3VsdDogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeS5tYWlufTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgTWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgUGxheWxpc3REVE8gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENvbmZpcm1Nb2RhbCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlQWN0aW9uQmFyIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZUFjdGlvbkJhci9QYWdlQWN0aW9uQmFyJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL0VtcHR5TGlzdENUQS9FbXB0eUxpc3RDVEEnO1xuaW1wb3J0IHsgZGVsZXRlUGxheWxpc3QsIGdldEFsbFBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgU3RhcnRNb2RhbCB9IGZyb20gJy4vU3RhcnRNb2RhbCc7XG5pbXBvcnQgeyBQbGF5bGlzdFBhZ2VMaXN0IH0gZnJvbSAnLi9QbGF5bGlzdFBhZ2VMaXN0JztcbmltcG9ydCB7IEVtcHR5UXVlcnlMaXN0QmFubmVyIH0gZnJvbSAnLi9FbXB0eVF1ZXJ5TGlzdEJhbm5lcic7XG5cbmludGVyZmFjZSBDb25uZWN0ZWRQcm9wcyB7XG4gIG5hdk1vZGVsOiBOYXZNb2RlbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RQYWdlUHJvcHMgZXh0ZW5kcyBDb25uZWN0ZWRQcm9wcywgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMge31cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0UGFnZTogRkM8UGxheWxpc3RQYWdlUHJvcHM+ID0gKHsgbmF2TW9kZWwgfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2RlYm91bmNlZFNlYXJjaFF1ZXJ5LCBzZXREZWJvdW5jZWRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShzZWFyY2hRdWVyeSk7XG4gIGNvbnN0IFtoYXNGZXRjaGVkLCBzZXRIYXNGZXRjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0UGxheWxpc3QsIHNldFN0YXJ0UGxheWxpc3RdID0gdXNlU3RhdGU8UGxheWxpc3REVE8gfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IFtwbGF5bGlzdFRvRGVsZXRlLCBzZXRQbGF5bGlzdFRvRGVsZXRlXSA9IHVzZVN0YXRlPFBsYXlsaXN0RFRPIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCBbZm9yY2VQbGF5bGlzdHNGZXRjaCwgc2V0Rm9yY2VQbGF5bGlzdHNGZXRjaF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbcGxheWxpc3RzLCBzZXRQbGF5bGlzdHNdID0gdXNlU3RhdGU8UGxheWxpc3REVE9bXT4oW10pO1xuXG4gIHVzZURlYm91bmNlKFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYXlsaXN0cyA9IGF3YWl0IGdldEFsbFBsYXlsaXN0KHNlYXJjaFF1ZXJ5KTtcbiAgICAgIGlmICghaGFzRmV0Y2hlZCkge1xuICAgICAgICBzZXRIYXNGZXRjaGVkKHRydWUpO1xuICAgICAgfVxuICAgICAgc2V0UGxheWxpc3RzKHBsYXlsaXN0cyk7XG4gICAgICBzZXREZWJvdW5jZWRTZWFyY2hRdWVyeShzZWFyY2hRdWVyeSk7XG4gICAgfSxcbiAgICAzNTAsXG4gICAgW2ZvcmNlUGxheWxpc3RzRmV0Y2gsIHNlYXJjaFF1ZXJ5XVxuICApO1xuXG4gIGNvbnN0IGhhc1BsYXlsaXN0cyA9IHBsYXlsaXN0cyAmJiBwbGF5bGlzdHMubGVuZ3RoID4gMDtcbiAgY29uc3Qgb25EaXNtaXNzRGVsZXRlID0gKCkgPT4gc2V0UGxheWxpc3RUb0RlbGV0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBvbkRlbGV0ZVBsYXlsaXN0ID0gKCkgPT4ge1xuICAgIGlmICghcGxheWxpc3RUb0RlbGV0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWxldGVQbGF5bGlzdChwbGF5bGlzdFRvRGVsZXRlLmlkKS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHNldEZvcmNlUGxheWxpc3RzRmV0Y2goZm9yY2VQbGF5bGlzdHNGZXRjaCArIDEpO1xuICAgICAgc2V0UGxheWxpc3RUb0RlbGV0ZSh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGVtcHR5TGlzdEJhbm5lciA9IChcbiAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICB0aXRsZT1cIlRoZXJlIGFyZSBubyBwbGF5bGlzdHMgY3JlYXRlZCB5ZXRcIlxuICAgICAgYnV0dG9uSWNvbj1cInBsdXNcIlxuICAgICAgYnV0dG9uTGluaz1cInBsYXlsaXN0cy9uZXdcIlxuICAgICAgYnV0dG9uVGl0bGU9XCJDcmVhdGUgUGxheWxpc3RcIlxuICAgICAgcHJvVGlwPVwiWW91IGNhbiB1c2UgcGxheWxpc3RzIHRvIGN5Y2xlIGRhc2hib2FyZHMgb24gVFZzIHdpdGhvdXQgdXNlciBjb250cm9sXCJcbiAgICAgIHByb1RpcExpbms9XCJodHRwOi8vZG9jcy5ncmFmYW5hLm9yZy9yZWZlcmVuY2UvcGxheWxpc3QvXCJcbiAgICAgIHByb1RpcExpbmtUaXRsZT1cIkxlYXJuIG1vcmVcIlxuICAgICAgcHJvVGlwVGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAvPlxuICApO1xuXG4gIGNvbnN0IHNob3dTZWFyY2ggPSBwbGF5bGlzdHMubGVuZ3RoID4gMCB8fCBzZWFyY2hRdWVyeS5sZW5ndGggPiAwIHx8IGRlYm91bmNlZFNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXshaGFzRmV0Y2hlZH0+XG4gICAgICAgIHtzaG93U2VhcmNoICYmIChcbiAgICAgICAgICA8UGFnZUFjdGlvbkJhclxuICAgICAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgbGlua0J1dHRvbj17eyB0aXRsZTogJ05ldyBwbGF5bGlzdCcsIGhyZWY6ICcvcGxheWxpc3RzL25ldycgfX1cbiAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshaGFzUGxheWxpc3RzICYmIHNlYXJjaFF1ZXJ5ID8gKFxuICAgICAgICAgIDxFbXB0eVF1ZXJ5TGlzdEJhbm5lciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxQbGF5bGlzdFBhZ2VMaXN0XG4gICAgICAgICAgICBwbGF5bGlzdHM9e3BsYXlsaXN0c31cbiAgICAgICAgICAgIHNldFN0YXJ0UGxheWxpc3Q9e3NldFN0YXJ0UGxheWxpc3R9XG4gICAgICAgICAgICBzZXRQbGF5bGlzdFRvRGVsZXRlPXtzZXRQbGF5bGlzdFRvRGVsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHshc2hvd1NlYXJjaCAmJiBlbXB0eUxpc3RCYW5uZXJ9XG4gICAgICAgIHtwbGF5bGlzdFRvRGVsZXRlICYmIChcbiAgICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgICB0aXRsZT17cGxheWxpc3RUb0RlbGV0ZS5uYW1lfVxuICAgICAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJyR7cGxheWxpc3RUb0RlbGV0ZS5uYW1lfScgcGxheWxpc3Q/YH1cbiAgICAgICAgICAgIG9uQ29uZmlybT17b25EZWxldGVQbGF5bGlzdH1cbiAgICAgICAgICAgIGlzT3Blbj17Qm9vbGVhbihwbGF5bGlzdFRvRGVsZXRlKX1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzRGVsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzdGFydFBsYXlsaXN0ICYmIDxTdGFydE1vZGFsIHBsYXlsaXN0PXtzdGFydFBsYXlsaXN0fSBvbkRpc21pc3M9eygpID0+IHNldFN0YXJ0UGxheWxpc3QodW5kZWZpbmVkKX0gLz59XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHM8Q29ubmVjdGVkUHJvcHMsIHt9LCBTdG9yZVN0YXRlPiA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAncGxheWxpc3RzJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBsYXlsaXN0UGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGxheWxpc3REVE8gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgTGlua0J1dHRvbiwgTW9kYWxzQ29udHJvbGxlciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgRGFzaE5hdkJ1dHRvbiB9IGZyb20gJy4uL2Rhc2hib2FyZC9jb21wb25lbnRzL0Rhc2hOYXYvRGFzaE5hdkJ1dHRvbic7XG5pbXBvcnQgeyBTaGFyZU1vZGFsIH0gZnJvbSAnLi9TaGFyZU1vZGFsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2V0U3RhcnRQbGF5bGlzdDogKHBsYXlsaXN0SXRlbTogUGxheWxpc3REVE8pID0+IHZvaWQ7XG4gIHNldFBsYXlsaXN0VG9EZWxldGU6IChwbGF5bGlzdEl0ZW06IFBsYXlsaXN0RFRPKSA9PiB2b2lkO1xuICBwbGF5bGlzdHM6IFBsYXlsaXN0RFRPW10gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdFBhZ2VMaXN0ID0gKHsgcGxheWxpc3RzLCBzZXRTdGFydFBsYXlsaXN0LCBzZXRQbGF5bGlzdFRvRGVsZXRlIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICB7cGxheWxpc3RzIS5tYXAoKHBsYXlsaXN0OiBQbGF5bGlzdERUTykgPT4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IGtleT17cGxheWxpc3QuaWQudG9TdHJpbmcoKX0+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAgICB7cGxheWxpc3QubmFtZX1cbiAgICAgICAgICAgICAgPE1vZGFsc0NvbnRyb2xsZXIga2V5PVwiYnV0dG9uLXNoYXJlXCI+XG4gICAgICAgICAgICAgICAgeyh7IHNob3dNb2RhbCwgaGlkZU1vZGFsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxEYXNoTmF2QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJTaGFyZSBwbGF5bGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJzaGFyZS1hbHRcIlxuICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbChTaGFyZU1vZGFsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdElkOiBwbGF5bGlzdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlzbWlzczogaGlkZU1vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L01vZGFsc0NvbnRyb2xsZXI+XG4gICAgICAgICAgICA8L0NhcmQuSGVhZGluZz5cbiAgICAgICAgICAgIDxDYXJkLkFjdGlvbnM+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJwbGF5XCIgb25DbGljaz17KCkgPT4gc2V0U3RhcnRQbGF5bGlzdChwbGF5bGlzdCl9PlxuICAgICAgICAgICAgICAgIFN0YXJ0IHBsYXlsaXN0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICB7Y29udGV4dFNydi5pc0VkaXRvciAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGtleT1cImVkaXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaHJlZj17YC9wbGF5bGlzdHMvZWRpdC8ke3BsYXlsaXN0LmlkfWB9IGljb249XCJjb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgRWRpdCBwbGF5bGlzdFxuICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBsYXlsaXN0VG9EZWxldGUoeyBpZDogcGxheWxpc3QuaWQsIG5hbWU6IHBsYXlsaXN0Lm5hbWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgcGxheWxpc3RcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DYXJkLkFjdGlvbnM+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGxpc3Q6IGNzcyh7XG4gICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgfSksXG4gICAgbGlzdEl0ZW06IGNzcyh7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICB9KSxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcEV2ZW50cywgU2VsZWN0YWJsZVZhbHVlLCBVcmxRdWVyeU1hcCwgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIENsaXBib2FyZEJ1dHRvbiwgRmllbGQsIEZpZWxkU2V0LCBJY29uLCBJbnB1dCwgTW9kYWwsIFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IHsgYnVpbGRCYXNlVXJsIH0gZnJvbSAnLi4vZGFzaGJvYXJkL2NvbXBvbmVudHMvU2hhcmVNb2RhbC91dGlscyc7XG5pbXBvcnQgeyBQbGF5bGlzdE1vZGUgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIFNoYXJlTW9kYWxQcm9wcyB7XG4gIHBsYXlsaXN0SWQ6IG51bWJlcjtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgU2hhcmVNb2RhbCA9ICh7IHBsYXlsaXN0SWQsIG9uRGlzbWlzcyB9OiBTaGFyZU1vZGFsUHJvcHMpID0+IHtcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGU8UGxheWxpc3RNb2RlPihmYWxzZSk7XG4gIGNvbnN0IFthdXRvRml0LCBzZXRBdXRvZml0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtb2RlczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFBsYXlsaXN0TW9kZT4+ID0gW1xuICAgIHsgbGFiZWw6ICdOb3JtYWwnLCB2YWx1ZTogZmFsc2UgfSxcbiAgICB7IGxhYmVsOiAnVFYnLCB2YWx1ZTogJ3R2JyB9LFxuICAgIHsgbGFiZWw6ICdLaW9zaycsIHZhbHVlOiB0cnVlIH0sXG4gIF07XG5cbiAgY29uc3Qgb25TaGFyZVVybENvcHkgPSAoKSA9PiB7XG4gICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0U3VjY2VzcywgWydDb250ZW50IGNvcGllZCB0byBjbGlwYm9hcmQnXSk7XG4gIH07XG5cbiAgY29uc3QgcGFyYW1zOiBVcmxRdWVyeU1hcCA9IHt9O1xuICBpZiAobW9kZSkge1xuICAgIHBhcmFtcy5raW9zayA9IG1vZGU7XG4gIH1cbiAgaWYgKGF1dG9GaXQpIHtcbiAgICBwYXJhbXMuYXV0b2ZpdHBhbmVscyA9IHRydWU7XG4gIH1cblxuICBjb25zdCBzaGFyZVVybCA9IHVybFV0aWwucmVuZGVyVXJsKGAke2J1aWxkQmFzZVVybCgpfS9wbGF5LyR7cGxheWxpc3RJZH1gLCBwYXJhbXMpO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGlzT3Blbj17dHJ1ZX0gdGl0bGU9XCJTaGFyZSBwbGF5bGlzdFwiIG9uRGlzbWlzcz17b25EaXNtaXNzfT5cbiAgICAgIDxGaWVsZFNldD5cbiAgICAgICAgPEZpZWxkIGxhYmVsPVwiTW9kZVwiPlxuICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwIHZhbHVlPXttb2RlfSBvcHRpb25zPXttb2Rlc30gb25DaGFuZ2U9e3NldE1vZGV9IC8+XG4gICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDxGaWVsZD5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGxhYmVsPVwiQXV0b2ZpdFwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBhbmVsIGhlaWdodHMgd2lsbCBiZSBhZGp1c3RlZCB0byBmaXQgc2NyZWVuIHNpemVcIlxuICAgICAgICAgICAgbmFtZT1cImF1dG9maXhcIlxuICAgICAgICAgICAgdmFsdWU9e2F1dG9GaXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dG9maXQoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgPEZpZWxkIGxhYmVsPVwiTGluayBVUkxcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGlkPVwibGluay11cmwtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e3NoYXJlVXJsfVxuICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgIGFkZG9uQWZ0ZXI9e1xuICAgICAgICAgICAgICA8Q2xpcGJvYXJkQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZ2V0VGV4dD17KCkgPT4gc2hhcmVVcmx9IG9uQ2xpcGJvYXJkQ29weT17b25TaGFyZVVybENvcHl9PlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb3B5XCIgLz4gQ29weVxuICAgICAgICAgICAgICA8L0NsaXBib2FyZEJ1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgPC9GaWVsZFNldD5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUGxheWxpc3REVE8sIFBsYXlsaXN0TW9kZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRmllbGQsIEZpZWxkU2V0LCBNb2RhbCwgUmFkaW9CdXR0b25Hcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGFydE1vZGFsUHJvcHMge1xuICBwbGF5bGlzdDogUGxheWxpc3REVE87XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFN0YXJ0TW9kYWw6IEZDPFN0YXJ0TW9kYWxQcm9wcz4gPSAoeyBwbGF5bGlzdCwgb25EaXNtaXNzIH0pID0+IHtcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGU8UGxheWxpc3RNb2RlPihmYWxzZSk7XG4gIGNvbnN0IFthdXRvRml0LCBzZXRBdXRvZml0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtb2RlczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFBsYXlsaXN0TW9kZT4+ID0gW1xuICAgIHsgbGFiZWw6ICdOb3JtYWwnLCB2YWx1ZTogZmFsc2UgfSxcbiAgICB7IGxhYmVsOiAnVFYnLCB2YWx1ZTogJ3R2JyB9LFxuICAgIHsgbGFiZWw6ICdLaW9zaycsIHZhbHVlOiB0cnVlIH0sXG4gIF07XG5cbiAgY29uc3Qgb25TdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHt9O1xuICAgIGlmIChtb2RlKSB7XG4gICAgICBwYXJhbXMua2lvc2sgPSBtb2RlO1xuICAgIH1cbiAgICBpZiAoYXV0b0ZpdCkge1xuICAgICAgcGFyYW1zLmF1dG9maXRwYW5lbHMgPSB0cnVlO1xuICAgIH1cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh1cmxVdGlsLnJlbmRlclVybChgL3BsYXlsaXN0cy9wbGF5LyR7cGxheWxpc3QuaWR9YCwgcGFyYW1zKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXt0cnVlfSBpY29uPVwicGxheVwiIHRpdGxlPVwiU3RhcnQgcGxheWxpc3RcIiBvbkRpc21pc3M9e29uRGlzbWlzc30+XG4gICAgICA8RmllbGRTZXQ+XG4gICAgICAgIDxGaWVsZCBsYWJlbD1cIk1vZGVcIj5cbiAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17bW9kZX0gb3B0aW9ucz17bW9kZXN9IG9uQ2hhbmdlPXtzZXRNb2RlfSAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBsYWJlbD1cIkF1dG9maXRcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGFuZWwgaGVpZ2h0cyB3aWxsIGJlIGFkanVzdGVkIHRvIGZpdCBzY3JlZW4gc2l6ZVwiXG4gICAgICAgICAgbmFtZT1cImF1dG9maXhcIlxuICAgICAgICAgIHZhbHVlPXthdXRvRml0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0b2ZpdChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkU2V0PlxuICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uU3RhcnR9PlxuICAgICAgICAgIFN0YXJ0IHtwbGF5bGlzdC5uYW1lfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdCwgUGxheWxpc3REVE8gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnLi4vLi4vY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uLCBjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbGF5bGlzdChwbGF5bGlzdDogUGxheWxpc3QpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvcGxheWxpc3RzJywgcGxheWxpc3QpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBsYXlsaXN0KGlkOiBudW1iZXIsIHBsYXlsaXN0OiBQbGF5bGlzdCkge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL3BsYXlsaXN0cy8ke2lkfWAsIHBsYXlsaXN0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQbGF5bGlzdChpZDogbnVtYmVyKSB7XG4gIGF3YWl0IHdpdGhFcnJvckhhbmRsaW5nKCgpID0+IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvcGxheWxpc3RzLyR7aWR9YCksICdQbGF5bGlzdCBkZWxldGVkJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQbGF5bGlzdChpZDogbnVtYmVyKTogUHJvbWlzZTxQbGF5bGlzdD4ge1xuICBjb25zdCByZXN1bHQ6IFBsYXlsaXN0ID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS9wbGF5bGlzdHMvJHtpZH1gKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBsYXlsaXN0KHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPFBsYXlsaXN0RFRPW10+IHtcbiAgY29uc3QgcmVzdWx0OiBQbGF5bGlzdERUT1tdID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9wbGF5bGlzdHMvJywgeyBxdWVyeSB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gd2l0aEVycm9ySGFuZGxpbmcoYXBpQ2FsbDogKCkgPT4gUHJvbWlzZTx2b2lkPiwgbWVzc2FnZSA9ICdQbGF5bGlzdCBzYXZlZCcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhcGlDYWxsKCk7XG4gICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24obWVzc2FnZSkpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignVW5hYmxlIHRvIHNhdmUgcGxheWxpc3QnLCBlKSkpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiTGlua0J1dHRvbiIsIkZpbHRlcklucHV0IiwiUGFnZUFjdGlvbkJhciIsInJlbmRlciIsInNlYXJjaFF1ZXJ5IiwibGlua0J1dHRvbiIsInNldFNlYXJjaFF1ZXJ5IiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJwcm9wcyIsImxpbmtQcm9wcyIsImhyZWYiLCJkaXNhYmxlZCIsInRpdGxlIiwidXNlU3R5bGVzMiIsImNzcyIsIkVtcHR5UXVlcnlMaXN0QmFubmVyIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwibm9SZXN1bHQiLCJ0aGVtZSIsInNwYWNpbmciLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJtYWluIiwidXNlU3RhdGUiLCJjb25uZWN0IiwiUGFnZSIsImdldE5hdk1vZGVsIiwidXNlRGVib3VuY2UiLCJDb25maXJtTW9kYWwiLCJFbXB0eUxpc3RDVEEiLCJkZWxldGVQbGF5bGlzdCIsImdldEFsbFBsYXlsaXN0IiwiU3RhcnRNb2RhbCIsIlBsYXlsaXN0UGFnZUxpc3QiLCJQbGF5bGlzdFBhZ2UiLCJuYXZNb2RlbCIsImRlYm91bmNlZFNlYXJjaFF1ZXJ5Iiwic2V0RGVib3VuY2VkU2VhcmNoUXVlcnkiLCJoYXNGZXRjaGVkIiwic2V0SGFzRmV0Y2hlZCIsInN0YXJ0UGxheWxpc3QiLCJzZXRTdGFydFBsYXlsaXN0IiwicGxheWxpc3RUb0RlbGV0ZSIsInNldFBsYXlsaXN0VG9EZWxldGUiLCJmb3JjZVBsYXlsaXN0c0ZldGNoIiwic2V0Rm9yY2VQbGF5bGlzdHNGZXRjaCIsInBsYXlsaXN0cyIsInNldFBsYXlsaXN0cyIsImhhc1BsYXlsaXN0cyIsImxlbmd0aCIsIm9uRGlzbWlzc0RlbGV0ZSIsInVuZGVmaW5lZCIsIm9uRGVsZXRlUGxheWxpc3QiLCJpZCIsImZpbmFsbHkiLCJlbXB0eUxpc3RCYW5uZXIiLCJzaG93U2VhcmNoIiwibmFtZSIsIkJvb2xlYW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4IiwiQnV0dG9uIiwiQ2FyZCIsIk1vZGFsc0NvbnRyb2xsZXIiLCJjb250ZXh0U3J2IiwiRGFzaE5hdkJ1dHRvbiIsIlNoYXJlTW9kYWwiLCJsaXN0IiwibWFwIiwicGxheWxpc3QiLCJsaXN0SXRlbSIsInNob3dNb2RhbCIsImhpZGVNb2RhbCIsInBsYXlsaXN0SWQiLCJvbkRpc21pc3MiLCJpc0VkaXRvciIsInRvU3RyaW5nIiwiZGlzcGxheSIsImxpc3RTdHlsZSIsIkFwcEV2ZW50cyIsInVybFV0aWwiLCJDaGVja2JveCIsIkNsaXBib2FyZEJ1dHRvbiIsIkZpZWxkIiwiRmllbGRTZXQiLCJJY29uIiwiSW5wdXQiLCJNb2RhbCIsIlJhZGlvQnV0dG9uR3JvdXAiLCJhcHBFdmVudHMiLCJidWlsZEJhc2VVcmwiLCJtb2RlIiwic2V0TW9kZSIsImF1dG9GaXQiLCJzZXRBdXRvZml0IiwibW9kZXMiLCJsYWJlbCIsInZhbHVlIiwib25TaGFyZVVybENvcHkiLCJlbWl0IiwiYWxlcnRTdWNjZXNzIiwicGFyYW1zIiwia2lvc2siLCJhdXRvZml0cGFuZWxzIiwic2hhcmVVcmwiLCJyZW5kZXJVcmwiLCJlIiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJsb2NhdGlvblNlcnZpY2UiLCJvblN0YXJ0IiwicHVzaCIsImdldEJhY2tlbmRTcnYiLCJkaXNwYXRjaCIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImNyZWF0ZVBsYXlsaXN0Iiwid2l0aEVycm9ySGFuZGxpbmciLCJwb3N0IiwidXBkYXRlUGxheWxpc3QiLCJwdXQiLCJkZWxldGUiLCJnZXRQbGF5bGlzdCIsInJlc3VsdCIsImdldCIsInF1ZXJ5IiwiYXBpQ2FsbCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9
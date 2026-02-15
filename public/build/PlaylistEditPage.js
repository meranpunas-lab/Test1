"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistEditPage"],{

/***/ "./public/app/core/components/editors/DashboardPickerByID.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPickerByID": () => (/* binding */ DashboardPickerByID)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






/**
 * @deprecated prefer using dashboard uid rather than id
 */
const DashboardPickerByID = ({
  onChange: propsOnChange,
  value,
  width,
  isClearable = false,
  invalid,
  disabled,
  id
}) => {
  const debouncedSearch = debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()(getDashboards, 300);
  const option = value ? {
    value,
    label: value.label
  } : undefined;

  const onChange = item => {
    propsOnChange(item === null || item === void 0 ? void 0 : item.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AsyncSelect, {
    inputId: id,
    menuShouldPortal: true,
    width: width,
    isClearable: isClearable,
    defaultOptions: true,
    loadOptions: debouncedSearch,
    onChange: onChange,
    placeholder: "Select dashboard",
    noOptionsMessage: "No dashboards found",
    value: option,
    invalid: invalid,
    disabled: disabled
  });
};

async function getDashboards(query = '') {
  const result = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.backendSrv.search({
    type: 'dash-db',
    query,
    limit: 100
  });
  return result.map(({
    id,
    uid = '',
    title,
    folderTitle
  }) => {
    const value = {
      id,
      uid,
      label: `${folderTitle !== null && folderTitle !== void 0 ? folderTitle : 'General'}/${title}`
    };
    return {
      value,
      label: value.label
    };
  });
}

/***/ }),

/***/ "./public/app/features/playlist/PlaylistEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistEditPage": () => (/* binding */ PlaylistEditPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _PlaylistForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/playlist/PlaylistForm.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/api.ts");
/* harmony import */ var _usePlaylist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/usePlaylist.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/playlist/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const PlaylistEditPage = ({
  navModel,
  match
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_9__.getPlaylistStyles);
  const {
    playlist,
    loading
  } = (0,_usePlaylist__WEBPACK_IMPORTED_MODULE_8__.usePlaylist)(match.params.id);

  const onSubmit = async playlist => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_7__.updatePlaylist)(match.params.id, playlist);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/playlists');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
        className: styles.subHeading,
        children: "Edit playlist"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
        className: styles.description,
        children: "A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PlaylistForm__WEBPACK_IMPORTED_MODULE_6__.PlaylistForm, {
        onSubmit: onSubmit,
        playlist: playlist
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'playlists')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistEditPage));

/***/ }),

/***/ "./public/app/features/playlist/PlaylistForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistForm": () => (/* binding */ PlaylistForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var _core_services_search_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/search_srv.ts");
/* harmony import */ var _usePlaylistItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/playlist/usePlaylistItems.tsx");
/* harmony import */ var _PlaylistTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/PlaylistTable.tsx");
/* harmony import */ var app_core_components_editors_DashboardPickerByID__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/editors/DashboardPickerByID.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;













const searchSrv = new _core_services_search_srv__WEBPACK_IMPORTED_MODULE_5__.SearchSrv();
const PlaylistForm = ({
  onSubmit,
  playlist
}) => {
  var _PlaylistTable, _Field;

  const {
    name,
    interval,
    items: propItems
  } = playlist;
  const {
    items,
    addById,
    addByTag,
    deleteItem,
    moveDown,
    moveUp
  } = (0,_usePlaylistItems__WEBPACK_IMPORTED_MODULE_6__.usePlaylistItems)(propItems);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: list => onSubmit(Object.assign({}, list, {
        items
      })),
      validateOn: 'onBlur',
      children: ({
        register,
        errors
      }) => {
        var _errors$name, _errors$interval;

        const isDisabled = items.length === 0 || Object.keys(errors).length > 0;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Name",
            invalid: !!errors.name,
            error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              type: "text"
            }, register('name', {
              required: 'Name is required'
            }), {
              placeholder: "Name",
              defaultValue: name,
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.PlaylistForm.name
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Interval",
            invalid: !!errors.interval,
            error: errors === null || errors === void 0 ? void 0 : (_errors$interval = errors.interval) === null || _errors$interval === void 0 ? void 0 : _errors$interval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              type: "text"
            }, register('interval', {
              required: 'Interval is required'
            }), {
              placeholder: "5m",
              defaultValue: interval !== null && interval !== void 0 ? interval : '5m',
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.PlaylistForm.interval
            }))
          }), _PlaylistTable || (_PlaylistTable = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PlaylistTable__WEBPACK_IMPORTED_MODULE_7__.PlaylistTable, {
            items: items,
            onMoveUp: moveUp,
            onMoveDown: moveDown,
            onDelete: deleteItem
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "gf-form-group",
            children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
              className: "page-headering",
              children: "Add dashboards"
            })), _Field || (_Field = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Add by title",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_editors_DashboardPickerByID__WEBPACK_IMPORTED_MODULE_8__.DashboardPickerByID, {
                onChange: addById,
                id: "dashboard-picker",
                isClearable: true
              })
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Add by tag",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_4__.TagFilter, {
                isClearable: true,
                tags: [],
                hideValues: true,
                tagOptions: searchSrv.getDashboardTags,
                onChange: addByTag,
                placeholder: ''
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "primary",
              disabled: isDisabled,
              children: "Save"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
              variant: "secondary",
              href: `${_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.appSubUrl}/playlists`,
              children: "Cancel"
            })]
          })]
        });
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTable": () => (/* binding */ PlaylistTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PlaylistTableRows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/PlaylistTableRows.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;





const PlaylistTable = ({
  items,
  onMoveUp,
  onMoveDown,
  onDelete
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "gf-form-group",
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      className: "page-headering",
      children: "Dashboards"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
      className: "filter-table",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PlaylistTableRows__WEBPACK_IMPORTED_MODULE_1__.PlaylistTableRows, {
          items: items,
          onMoveUp: onMoveUp,
          onMoveDown: onMoveDown,
          onDelete: onDelete
        })
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTableRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTableRow": () => (/* binding */ PlaylistTableRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const PlaylistTableRow = ({
  item,
  onDelete,
  onMoveDown,
  onMoveUp,
  first,
  last
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);

  const onDeleteClick = event => {
    event.preventDefault();
    onDelete(item);
  };

  const onMoveDownClick = event => {
    event.preventDefault();
    onMoveDown(item);
  };

  const onMoveUpClick = event => {
    event.preventDefault();
    onMoveUp(item);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PlaylistForm.itemRow,
    children: [item.type === 'dashboard_by_id' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.td, styles.item),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "apps",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PlaylistForm.itemIdType
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: item.title
      })]
    }) : null, item.type === 'dashboard_by_tag' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.td, styles.item),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "tag-alt",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PlaylistForm.itemTagType
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_3__.TagBadge, {
        label: item.title,
        removeIcon: false,
        count: 0
      }, item.id)]
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.td, styles.settings),
      children: [!first ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        name: "arrow-up",
        size: "md",
        onClick: onMoveUpClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PlaylistForm.itemMoveUp,
        type: "button"
      }) : null, !last ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        name: "arrow-down",
        size: "md",
        onClick: onMoveDownClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PlaylistForm.itemMoveDown,
        type: "button"
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        name: "times",
        size: "md",
        onClick: onDeleteClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PlaylistForm.itemDelete,
        type: "button"
      })]
    })]
  }, item.title);
};

function getStyles(theme) {
  return {
    td: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      label: td;
      line-height: 28px;
      max-width: 335px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      label: item;
      span {
        margin-left: ${theme.spacing.xs};
      }
    `,
    settings: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      label: settings;
      text-align: right;
    `
  };
}

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTableRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTableRows": () => (/* binding */ PlaylistTableRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PlaylistTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/PlaylistTableRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _tr;





const PlaylistTableRows = ({
  items,
  onMoveUp,
  onMoveDown,
  onDelete
}) => {
  if (items.length === 0) {
    return _tr || (_tr = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("em", {
          children: "Playlist is empty. Add dashboards below."
        })
      })
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: items.map((item, index) => {
      const first = index === 0;
      const last = index === items.length - 1;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PlaylistTableRow__WEBPACK_IMPORTED_MODULE_1__.PlaylistTableRow, {
        first: first,
        last: last,
        item: item,
        onDelete: onDelete,
        onMoveDown: onMoveDown,
        onMoveUp: onMoveUp
      }, item.title);
    })
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

/***/ }),

/***/ "./public/app/features/playlist/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlaylistStyles": () => (/* binding */ getPlaylistStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

function getPlaylistStyles(theme) {
  return {
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: description;
      width: 555px;
      margin-bottom: 20px;
    `,
    subHeading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: sub-heading;
      margin-bottom: ${theme.spacing(2)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/playlist/usePlaylist.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePlaylist": () => (/* binding */ usePlaylist)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/api.ts");


function usePlaylist(playlistId) {
  const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    items: [],
    interval: '5m',
    name: ''
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const initPlaylist = async () => {
      if (!playlistId) {
        setLoading(false);
        return;
      }

      const list = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getPlaylist)(playlistId);
      setPlaylist(list);
      setLoading(false);
    };

    initPlaylist();
  }, [playlistId]);
  return {
    playlist,
    loading
  };
}

/***/ }),

/***/ "./public/app/features/playlist/usePlaylistItems.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePlaylistItems": () => (/* binding */ usePlaylistItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePlaylistItems(playlistItems) {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(playlistItems !== null && playlistItems !== void 0 ? playlistItems : []);
  const addById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(dashboard => {
    if (!dashboard || items.find(item => item.id === dashboard.id)) {
      return;
    }

    const newItem = {
      id: dashboard.id,
      title: dashboard.label,
      type: 'dashboard_by_id',
      value: dashboard.id.toString(10),
      order: items.length + 1
    };
    setItems([...items, newItem]);
  }, [items]);
  const addByTag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(tags => {
    const tag = tags[0];

    if (!tag || items.find(item => item.value === tag)) {
      return;
    }

    const newItem = {
      title: tag,
      type: 'dashboard_by_tag',
      value: tag,
      order: items.length + 1
    };
    setItems([...items, newItem]);
  }, [items]);
  const movePlaylistItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item, offset) => {
    const newItems = [...items];
    const currentPosition = newItems.indexOf(item);
    const newPosition = currentPosition + offset;

    if (newPosition >= 0 && newPosition < newItems.length) {
      newItems.splice(currentPosition, 1);
      newItems.splice(newPosition, 0, item);
    }

    setItems(newItems);
  }, [items]);
  const moveUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
    movePlaylistItem(item, -1);
  }, [movePlaylistItem]);
  const moveDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
    movePlaylistItem(item, 1);
  }, [movePlaylistItem]);
  const deleteItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
    setItems(items.filter(i => i !== item));
  }, [items]);
  return {
    items,
    addById,
    addByTag,
    deleteItem,
    moveDown,
    moveUp
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEtBQUsxSSxJQUExQixDQUFELENBQVI7QUFDRCxHQUgyQixFQUk1QixDQUFDZ0QsS0FBRCxDQUo0QixDQUE5QjtBQU9BLFNBQU87QUFBRUEsSUFBQUEsS0FBRjtBQUFTRSxJQUFBQSxPQUFUO0FBQWtCQyxJQUFBQSxRQUFsQjtBQUE0QkMsSUFBQUEsVUFBNUI7QUFBd0NDLElBQUFBLFFBQXhDO0FBQWtEQyxJQUFBQTtBQUFsRCxHQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvZWRpdG9ycy9EYXNoYm9hcmRQaWNrZXJCeUlELnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdEVkaXRQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0VGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0VGFibGVSb3cudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0VGFibGVSb3dzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9hcGkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3Qvc3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L3VzZVBsYXlsaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC91c2VQbGF5bGlzdEl0ZW1zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnZGVib3VuY2UtcHJvbWlzZSc7XG5pbXBvcnQgeyBBc3luY1NlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBwcmVmZXIgdXNpbmcgZGFzaGJvYXJkIHVpZCByYXRoZXIgdGhhbiBpZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFBpY2tlckl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICB1aWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChkYXNoYm9hcmQ/OiBEYXNoYm9hcmRQaWNrZXJJdGVtKSA9PiB2b2lkO1xuICB2YWx1ZT86IERhc2hib2FyZFBpY2tlckl0ZW07XG4gIHdpZHRoPzogbnVtYmVyO1xuICBpc0NsZWFyYWJsZT86IGJvb2xlYW47XG4gIGludmFsaWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHByZWZlciB1c2luZyBkYXNoYm9hcmQgdWlkIHJhdGhlciB0aGFuIGlkXG4gKi9cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRQaWNrZXJCeUlEOiBGQzxQcm9wcz4gPSAoe1xuICBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSxcbiAgdmFsdWUsXG4gIHdpZHRoLFxuICBpc0NsZWFyYWJsZSA9IGZhbHNlLFxuICBpbnZhbGlkLFxuICBkaXNhYmxlZCxcbiAgaWQsXG59KSA9PiB7XG4gIGNvbnN0IGRlYm91bmNlZFNlYXJjaCA9IGRlYm91bmNlKGdldERhc2hib2FyZHMsIDMwMCk7XG4gIGNvbnN0IG9wdGlvbiA9IHZhbHVlID8geyB2YWx1ZSwgbGFiZWw6IHZhbHVlLmxhYmVsIH0gOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKGl0ZW06IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRQaWNrZXJJdGVtPikgPT4ge1xuICAgIHByb3BzT25DaGFuZ2UoaXRlbT8udmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFzeW5jU2VsZWN0XG4gICAgICBpbnB1dElkPXtpZH1cbiAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGlzQ2xlYXJhYmxlPXtpc0NsZWFyYWJsZX1cbiAgICAgIGRlZmF1bHRPcHRpb25zPXt0cnVlfVxuICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZFNlYXJjaH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGRhc2hib2FyZFwiXG4gICAgICBub09wdGlvbnNNZXNzYWdlPVwiTm8gZGFzaGJvYXJkcyBmb3VuZFwiXG4gICAgICB2YWx1ZT17b3B0aW9ufVxuICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAvPlxuICApO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkcyhxdWVyeSA9ICcnKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkUGlja2VySXRlbT4+PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgdHlwZTogJ2Rhc2gtZGInLCBxdWVyeSwgbGltaXQ6IDEwMCB9KTtcbiAgcmV0dXJuIHJlc3VsdC5tYXAoKHsgaWQsIHVpZCA9ICcnLCB0aXRsZSwgZm9sZGVyVGl0bGUgfSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlOiBEYXNoYm9hcmRQaWNrZXJJdGVtID0ge1xuICAgICAgaWQsXG4gICAgICB1aWQsXG4gICAgICBsYWJlbDogYCR7Zm9sZGVyVGl0bGUgPz8gJ0dlbmVyYWwnfS8ke3RpdGxlfWAsXG4gICAgfTtcblxuICAgIHJldHVybiB7IHZhbHVlLCBsYWJlbDogdmFsdWUubGFiZWwgfTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBNYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFBsYXlsaXN0Rm9ybSB9IGZyb20gJy4vUGxheWxpc3RGb3JtJztcbmltcG9ydCB7IHVwZGF0ZVBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZVBsYXlsaXN0IH0gZnJvbSAnLi91c2VQbGF5bGlzdCc7XG5pbXBvcnQgeyBnZXRQbGF5bGlzdFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcblxuaW50ZXJmYWNlIENvbm5lY3RlZFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlUGFyYW1zIHtcbiAgaWQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQ29ubmVjdGVkUHJvcHMsIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPFJvdXRlUGFyYW1zPiB7fVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RFZGl0UGFnZTogRkM8UHJvcHM+ID0gKHsgbmF2TW9kZWwsIG1hdGNoIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRQbGF5bGlzdFN0eWxlcyk7XG4gIGNvbnN0IHsgcGxheWxpc3QsIGxvYWRpbmcgfSA9IHVzZVBsYXlsaXN0KG1hdGNoLnBhcmFtcy5pZCk7XG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHBsYXlsaXN0OiBQbGF5bGlzdCkgPT4ge1xuICAgIGF3YWl0IHVwZGF0ZVBsYXlsaXN0KG1hdGNoLnBhcmFtcy5pZCwgcGxheWxpc3QpO1xuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvcGxheWxpc3RzJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnN1YkhlYWRpbmd9PkVkaXQgcGxheWxpc3Q8L2gzPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBBIHBsYXlsaXN0IHJvdGF0ZXMgdGhyb3VnaCBhIHByZS1zZWxlY3RlZCBsaXN0IG9mIGRhc2hib2FyZHMuIEEgcGxheWxpc3QgY2FuIGJlIGEgZ3JlYXQgd2F5IHRvIGJ1aWxkXG4gICAgICAgICAgc2l0dWF0aW9uYWwgYXdhcmVuZXNzLCBvciBqdXN0IHNob3cgb2ZmIHlvdXIgbWV0cmljcyB0byB5b3VyIHRlYW0gb3IgdmlzaXRvcnMuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8UGxheWxpc3RGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gcGxheWxpc3Q9e3BsYXlsaXN0fSAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzPENvbm5lY3RlZFByb3BzLCB7fSwgU3RvcmVTdGF0ZT4gPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3BsYXlsaXN0cycpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQbGF5bGlzdEVkaXRQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRm9ybSwgSG9yaXpvbnRhbEdyb3VwLCBJbnB1dCwgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgVGFnRmlsdGVyIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdGaWx0ZXInO1xuaW1wb3J0IHsgU2VhcmNoU3J2IH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy9zZWFyY2hfc3J2JztcbmltcG9ydCB7IHVzZVBsYXlsaXN0SXRlbXMgfSBmcm9tICcuL3VzZVBsYXlsaXN0SXRlbXMnO1xuaW1wb3J0IHsgUGxheWxpc3RUYWJsZSB9IGZyb20gJy4vUGxheWxpc3RUYWJsZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRQaWNrZXJCeUlEIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9lZGl0b3JzL0Rhc2hib2FyZFBpY2tlckJ5SUQnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RGb3JtUHJvcHMge1xuICBvblN1Ym1pdDogKHBsYXlsaXN0OiBQbGF5bGlzdCkgPT4gdm9pZDtcbiAgcGxheWxpc3Q6IFBsYXlsaXN0O1xufVxuXG5jb25zdCBzZWFyY2hTcnYgPSBuZXcgU2VhcmNoU3J2KCk7XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdEZvcm06IEZDPFBsYXlsaXN0Rm9ybVByb3BzPiA9ICh7IG9uU3VibWl0LCBwbGF5bGlzdCB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaW50ZXJ2YWwsIGl0ZW1zOiBwcm9wSXRlbXMgfSA9IHBsYXlsaXN0O1xuICBjb25zdCB7IGl0ZW1zLCBhZGRCeUlkLCBhZGRCeVRhZywgZGVsZXRlSXRlbSwgbW92ZURvd24sIG1vdmVVcCB9ID0gdXNlUGxheWxpc3RJdGVtcyhwcm9wSXRlbXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17KGxpc3Q6IFBsYXlsaXN0KSA9PiBvblN1Ym1pdCh7IC4uLmxpc3QsIGl0ZW1zIH0pfSB2YWxpZGF0ZU9uPXsnb25CbHVyJ30+XG4gICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gaXRlbXMubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnM/Lm5hbWU/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogJ05hbWUgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0ubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJJbnRlcnZhbFwiIGludmFsaWQ9eyEhZXJyb3JzLmludGVydmFsfSBlcnJvcj17ZXJyb3JzPy5pbnRlcnZhbD8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2ludGVydmFsJywgeyByZXF1aXJlZDogJ0ludGVydmFsIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNW1cIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnRlcnZhbCA/PyAnNW0nfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pbnRlcnZhbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxQbGF5bGlzdFRhYmxlIGl0ZW1zPXtpdGVtc30gb25Nb3ZlVXA9e21vdmVVcH0gb25Nb3ZlRG93bj17bW92ZURvd259IG9uRGVsZXRlPXtkZWxldGVJdGVtfSAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcmluZ1wiPkFkZCBkYXNoYm9hcmRzPC9oMz5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkFkZCBieSB0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPERhc2hib2FyZFBpY2tlckJ5SUQgb25DaGFuZ2U9e2FkZEJ5SWR9IGlkPVwiZGFzaGJvYXJkLXBpY2tlclwiIGlzQ2xlYXJhYmxlIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkFkZCBieSB0YWdcIj5cbiAgICAgICAgICAgICAgICAgIDxUYWdGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgdGFncz17W119XG4gICAgICAgICAgICAgICAgICAgIGhpZGVWYWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgdGFnT3B0aW9ucz17c2VhcmNoU3J2LmdldERhc2hib2FyZFRhZ3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGRCeVRhZ31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eycnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkaXNhYmxlZD17aXNEaXNhYmxlZH0+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGhyZWY9e2Ake2NvbmZpZy5hcHBTdWJVcmx9L3BsYXlsaXN0c2B9PlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm0+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdFRhYmxlUm93cyB9IGZyb20gJy4vUGxheWxpc3RUYWJsZVJvd3MnO1xuaW1wb3J0IHsgUGxheWxpc3RJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQbGF5bGlzdFRhYmxlUHJvcHMge1xuICBpdGVtczogUGxheWxpc3RJdGVtW107XG4gIG9uTW92ZVVwOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbk1vdmVEb3duOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbkRlbGV0ZTogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0VGFibGU6IEZDPFBsYXlsaXN0VGFibGVQcm9wcz4gPSAoeyBpdGVtcywgb25Nb3ZlVXAsIG9uTW92ZURvd24sIG9uRGVsZXRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcmluZ1wiPkRhc2hib2FyZHM8L2gzPlxuXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8UGxheWxpc3RUYWJsZVJvd3MgaXRlbXM9e2l0ZW1zfSBvbk1vdmVVcD17b25Nb3ZlVXB9IG9uTW92ZURvd249e29uTW92ZURvd259IG9uRGVsZXRlPXtvbkRlbGV0ZX0gLz5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBJY29uLCBJY29uQnV0dG9uLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgVGFnQmFkZ2UgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvVGFnRmlsdGVyL1RhZ0JhZGdlJztcbmltcG9ydCB7IFBsYXlsaXN0SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5cbmludGVyZmFjZSBQbGF5bGlzdFRhYmxlUm93UHJvcHMge1xuICBmaXJzdDogYm9vbGVhbjtcbiAgbGFzdDogYm9vbGVhbjtcbiAgaXRlbTogUGxheWxpc3RJdGVtO1xuICBvbk1vdmVVcDogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25Nb3ZlRG93bjogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25EZWxldGU6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdFRhYmxlUm93OiBGQzxQbGF5bGlzdFRhYmxlUm93UHJvcHM+ID0gKHsgaXRlbSwgb25EZWxldGUsIG9uTW92ZURvd24sIG9uTW92ZVVwLCBmaXJzdCwgbGFzdCB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCBvbkRlbGV0ZUNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvbkRlbGV0ZShpdGVtKTtcbiAgfTtcbiAgY29uc3Qgb25Nb3ZlRG93bkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvbk1vdmVEb3duKGl0ZW0pO1xuICB9O1xuICBjb25zdCBvbk1vdmVVcENsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvbk1vdmVVcChpdGVtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDx0ciBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1Sb3d9IGtleT17aXRlbS50aXRsZX0+XG4gICAgICB7aXRlbS50eXBlID09PSAnZGFzaGJvYXJkX2J5X2lkJyA/IChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17Y3goc3R5bGVzLnRkLCBzdHlsZXMuaXRlbSl9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJhcHBzXCIgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtSWRUeXBlfSAvPlxuICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC90ZD5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2Rhc2hib2FyZF9ieV90YWcnID8gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtjeChzdHlsZXMudGQsIHN0eWxlcy5pdGVtKX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cInRhZy1hbHRcIiBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1UYWdUeXBlfSAvPlxuICAgICAgICAgIDxUYWdCYWRnZSBrZXk9e2l0ZW0uaWR9IGxhYmVsPXtpdGVtLnRpdGxlfSByZW1vdmVJY29uPXtmYWxzZX0gY291bnQ9ezB9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDx0ZCBjbGFzc05hbWU9e2N4KHN0eWxlcy50ZCwgc3R5bGVzLnNldHRpbmdzKX0+XG4gICAgICAgIHshZmlyc3QgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG5hbWU9XCJhcnJvdy11cFwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgb25DbGljaz17b25Nb3ZlVXBDbGlja31cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbU1vdmVVcH1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7IWxhc3QgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG5hbWU9XCJhcnJvdy1kb3duXCJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk1vdmVEb3duQ2xpY2t9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1Nb3ZlRG93bn1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG5hbWU9XCJ0aW1lc1wiXG4gICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZUNsaWNrfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbURlbGV0ZX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgdGQ6IGNzc2BcbiAgICAgIGxhYmVsOiB0ZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgbWF4LXdpZHRoOiAzMzVweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYCxcbiAgICBpdGVtOiBjc3NgXG4gICAgICBsYWJlbDogaXRlbTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHNldHRpbmdzOiBjc3NgXG4gICAgICBsYWJlbDogc2V0dGluZ3M7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdFRhYmxlUm93IH0gZnJvbSAnLi9QbGF5bGlzdFRhYmxlUm93JztcbmltcG9ydCB7IFBsYXlsaXN0SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RUYWJsZVJvd3NQcm9wcyB7XG4gIGl0ZW1zOiBQbGF5bGlzdEl0ZW1bXTtcbiAgb25Nb3ZlVXA6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uTW92ZURvd246IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uRGVsZXRlOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RUYWJsZVJvd3M6IEZDPFBsYXlsaXN0VGFibGVSb3dzUHJvcHM+ID0gKHsgaXRlbXMsIG9uTW92ZVVwLCBvbk1vdmVEb3duLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGVtPlBsYXlsaXN0IGlzIGVtcHR5LiBBZGQgZGFzaGJvYXJkcyBiZWxvdy48L2VtPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgY29uc3QgbGFzdCA9IGluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQbGF5bGlzdFRhYmxlUm93XG4gICAgICAgICAgICBmaXJzdD17Zmlyc3R9XG4gICAgICAgICAgICBsYXN0PXtsYXN0fVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgIG9uTW92ZURvd249e29uTW92ZURvd259XG4gICAgICAgICAgICBvbk1vdmVVcD17b25Nb3ZlVXB9XG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgUGxheWxpc3QsIFBsYXlsaXN0RFRPIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJy4uLy4uL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiwgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGxheWxpc3QocGxheWxpc3Q6IFBsYXlsaXN0KSB7XG4gIGF3YWl0IHdpdGhFcnJvckhhbmRsaW5nKCgpID0+IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3BsYXlsaXN0cycsIHBsYXlsaXN0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQbGF5bGlzdChpZDogbnVtYmVyLCBwbGF5bGlzdDogUGxheWxpc3QpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9wbGF5bGlzdHMvJHtpZH1gLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGxheWxpc3QoaWQ6IG51bWJlcikge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL3BsYXlsaXN0cy8ke2lkfWApLCAnUGxheWxpc3QgZGVsZXRlZCcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWxpc3QoaWQ6IG51bWJlcik6IFByb21pc2U8UGxheWxpc3Q+IHtcbiAgY29uc3QgcmVzdWx0OiBQbGF5bGlzdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvcGxheWxpc3RzLyR7aWR9YCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQbGF5bGlzdChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxQbGF5bGlzdERUT1tdPiB7XG4gIGNvbnN0IHJlc3VsdDogUGxheWxpc3REVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGxheWxpc3RzLycsIHsgcXVlcnkgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhFcnJvckhhbmRsaW5nKGFwaUNhbGw6ICgpID0+IFByb21pc2U8dm9pZD4sIG1lc3NhZ2UgPSAnUGxheWxpc3Qgc2F2ZWQnKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpQ2FsbCgpO1xuICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKG1lc3NhZ2UpKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ1VuYWJsZSB0byBzYXZlIHBsYXlsaXN0JywgZSkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXlsaXN0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgZGVzY3JpcHRpb246IGNzc2BcbiAgICAgIGxhYmVsOiBkZXNjcmlwdGlvbjtcbiAgICAgIHdpZHRoOiA1NTVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYCxcbiAgICBzdWJIZWFkaW5nOiBjc3NgXG4gICAgICBsYWJlbDogc3ViLWhlYWRpbmc7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGxheWxpc3QocGxheWxpc3RJZD86IG51bWJlcikge1xuICBjb25zdCBbcGxheWxpc3QsIHNldFBsYXlsaXN0XSA9IHVzZVN0YXRlPFBsYXlsaXN0Pih7IGl0ZW1zOiBbXSwgaW50ZXJ2YWw6ICc1bScsIG5hbWU6ICcnIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXRQbGF5bGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghcGxheWxpc3RJZCkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGdldFBsYXlsaXN0KHBsYXlsaXN0SWQpO1xuICAgICAgc2V0UGxheWxpc3QobGlzdCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGluaXRQbGF5bGlzdCgpO1xuICB9LCBbcGxheWxpc3RJZF0pO1xuXG4gIHJldHVybiB7IHBsYXlsaXN0LCBsb2FkaW5nIH07XG59XG4iLCJpbXBvcnQgeyBEYXNoYm9hcmRQaWNrZXJJdGVtIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9lZGl0b3JzL0Rhc2hib2FyZFBpY2tlckJ5SUQnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXlsaXN0SXRlbXMocGxheWxpc3RJdGVtcz86IFBsYXlsaXN0SXRlbVtdKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8UGxheWxpc3RJdGVtW10+KHBsYXlsaXN0SXRlbXMgPz8gW10pO1xuXG4gIGNvbnN0IGFkZEJ5SWQgPSB1c2VDYWxsYmFjayhcbiAgICAoZGFzaGJvYXJkPzogRGFzaGJvYXJkUGlja2VySXRlbSkgPT4ge1xuICAgICAgaWYgKCFkYXNoYm9hcmQgfHwgaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGFzaGJvYXJkLmlkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0l0ZW06IFBsYXlsaXN0SXRlbSA9IHtcbiAgICAgICAgaWQ6IGRhc2hib2FyZC5pZCxcbiAgICAgICAgdGl0bGU6IGRhc2hib2FyZC5sYWJlbCxcbiAgICAgICAgdHlwZTogJ2Rhc2hib2FyZF9ieV9pZCcsXG4gICAgICAgIHZhbHVlOiBkYXNoYm9hcmQuaWQudG9TdHJpbmcoMTApLFxuICAgICAgICBvcmRlcjogaXRlbXMubGVuZ3RoICsgMSxcbiAgICAgIH07XG4gICAgICBzZXRJdGVtcyhbLi4uaXRlbXMsIG5ld0l0ZW1dKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICBjb25zdCBhZGRCeVRhZyA9IHVzZUNhbGxiYWNrKFxuICAgICh0YWdzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgY29uc3QgdGFnID0gdGFnc1swXTtcbiAgICAgIGlmICghdGFnIHx8IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHRhZykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdJdGVtOiBQbGF5bGlzdEl0ZW0gPSB7XG4gICAgICAgIHRpdGxlOiB0YWcsXG4gICAgICAgIHR5cGU6ICdkYXNoYm9hcmRfYnlfdGFnJyxcbiAgICAgICAgdmFsdWU6IHRhZyxcbiAgICAgICAgb3JkZXI6IGl0ZW1zLmxlbmd0aCArIDEsXG4gICAgICB9O1xuICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfSxcbiAgICBbaXRlbXNdXG4gICk7XG5cbiAgY29uc3QgbW92ZVBsYXlsaXN0SXRlbSA9IHVzZUNhbGxiYWNrKFxuICAgIChpdGVtOiBQbGF5bGlzdEl0ZW0sIG9mZnNldDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XG4gICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBuZXdJdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gKyBvZmZzZXQ7XG5cbiAgICAgIGlmIChuZXdQb3NpdGlvbiA+PSAwICYmIG5ld1Bvc2l0aW9uIDwgbmV3SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIG5ld0l0ZW1zLnNwbGljZShjdXJyZW50UG9zaXRpb24sIDEpO1xuICAgICAgICBuZXdJdGVtcy5zcGxpY2UobmV3UG9zaXRpb24sIDAsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIGNvbnN0IG1vdmVVcCA9IHVzZUNhbGxiYWNrKFxuICAgIChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHtcbiAgICAgIG1vdmVQbGF5bGlzdEl0ZW0oaXRlbSwgLTEpO1xuICAgIH0sXG4gICAgW21vdmVQbGF5bGlzdEl0ZW1dXG4gICk7XG5cbiAgY29uc3QgbW92ZURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBtb3ZlUGxheWxpc3RJdGVtKGl0ZW0sIDEpO1xuICAgIH0sXG4gICAgW21vdmVQbGF5bGlzdEl0ZW1dXG4gICk7XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IHVzZUNhbGxiYWNrKFxuICAgIChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHtcbiAgICAgIHNldEl0ZW1zKGl0ZW1zLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSkpO1xuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIHJldHVybiB7IGl0ZW1zLCBhZGRCeUlkLCBhZGRCeVRhZywgZGVsZXRlSXRlbSwgbW92ZURvd24sIG1vdmVVcCB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZGVib3VuY2UiLCJBc3luY1NlbGVjdCIsImJhY2tlbmRTcnYiLCJEYXNoYm9hcmRQaWNrZXJCeUlEIiwib25DaGFuZ2UiLCJwcm9wc09uQ2hhbmdlIiwidmFsdWUiLCJ3aWR0aCIsImlzQ2xlYXJhYmxlIiwiaW52YWxpZCIsImRpc2FibGVkIiwiaWQiLCJkZWJvdW5jZWRTZWFyY2giLCJnZXREYXNoYm9hcmRzIiwib3B0aW9uIiwibGFiZWwiLCJ1bmRlZmluZWQiLCJpdGVtIiwicXVlcnkiLCJyZXN1bHQiLCJzZWFyY2giLCJ0eXBlIiwibGltaXQiLCJtYXAiLCJ1aWQiLCJ0aXRsZSIsImZvbGRlclRpdGxlIiwiY29ubmVjdCIsImxvY2F0aW9uU2VydmljZSIsInVzZVN0eWxlczIiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJQbGF5bGlzdEZvcm0iLCJ1cGRhdGVQbGF5bGlzdCIsInVzZVBsYXlsaXN0IiwiZ2V0UGxheWxpc3RTdHlsZXMiLCJQbGF5bGlzdEVkaXRQYWdlIiwibmF2TW9kZWwiLCJtYXRjaCIsInN0eWxlcyIsInBsYXlsaXN0IiwibG9hZGluZyIsInBhcmFtcyIsIm9uU3VibWl0IiwicHVzaCIsInN1YkhlYWRpbmciLCJkZXNjcmlwdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiLCJjb25maWciLCJCdXR0b24iLCJGaWVsZCIsIkZvcm0iLCJIb3Jpem9udGFsR3JvdXAiLCJJbnB1dCIsIkxpbmtCdXR0b24iLCJzZWxlY3RvcnMiLCJUYWdGaWx0ZXIiLCJTZWFyY2hTcnYiLCJ1c2VQbGF5bGlzdEl0ZW1zIiwiUGxheWxpc3RUYWJsZSIsInNlYXJjaFNydiIsIm5hbWUiLCJpbnRlcnZhbCIsIml0ZW1zIiwicHJvcEl0ZW1zIiwiYWRkQnlJZCIsImFkZEJ5VGFnIiwiZGVsZXRlSXRlbSIsIm1vdmVEb3duIiwibW92ZVVwIiwibGlzdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiaXNEaXNhYmxlZCIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJwYWdlcyIsImdldERhc2hib2FyZFRhZ3MiLCJhcHBTdWJVcmwiLCJQbGF5bGlzdFRhYmxlUm93cyIsIm9uTW92ZVVwIiwib25Nb3ZlRG93biIsIm9uRGVsZXRlIiwiY3NzIiwiY3giLCJJY29uIiwiSWNvbkJ1dHRvbiIsInVzZVN0eWxlcyIsIlRhZ0JhZGdlIiwiUGxheWxpc3RUYWJsZVJvdyIsImZpcnN0IiwibGFzdCIsImdldFN0eWxlcyIsIm9uRGVsZXRlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25Nb3ZlRG93bkNsaWNrIiwib25Nb3ZlVXBDbGljayIsIml0ZW1Sb3ciLCJ0ZCIsIml0ZW1JZFR5cGUiLCJpdGVtVGFnVHlwZSIsInNldHRpbmdzIiwiaXRlbU1vdmVVcCIsIml0ZW1Nb3ZlRG93biIsIml0ZW1EZWxldGUiLCJ0aGVtZSIsInNwYWNpbmciLCJ4cyIsImluZGV4IiwiZ2V0QmFja2VuZFNydiIsImRpc3BhdGNoIiwibm90aWZ5QXBwIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIiwiY3JlYXRlUGxheWxpc3QiLCJ3aXRoRXJyb3JIYW5kbGluZyIsInBvc3QiLCJwdXQiLCJkZWxldGVQbGF5bGlzdCIsImRlbGV0ZSIsImdldFBsYXlsaXN0IiwiZ2V0IiwiZ2V0QWxsUGxheWxpc3QiLCJhcGlDYWxsIiwiZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGxheWxpc3RJZCIsInNldFBsYXlsaXN0Iiwic2V0TG9hZGluZyIsImluaXRQbGF5bGlzdCIsInVzZUNhbGxiYWNrIiwicGxheWxpc3RJdGVtcyIsInNldEl0ZW1zIiwiZGFzaGJvYXJkIiwiZmluZCIsIm5ld0l0ZW0iLCJ0b1N0cmluZyIsIm9yZGVyIiwidGFncyIsInRhZyIsIm1vdmVQbGF5bGlzdEl0ZW0iLCJvZmZzZXQiLCJuZXdJdGVtcyIsImN1cnJlbnRQb3NpdGlvbiIsImluZGV4T2YiLCJuZXdQb3NpdGlvbiIsInNwbGljZSIsImZpbHRlciIsImkiXSwic291cmNlUm9vdCI6IiJ9
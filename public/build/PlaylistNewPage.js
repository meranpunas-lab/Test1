"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistNewPage"],{

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

/***/ "./public/app/features/playlist/PlaylistNewPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistNewPage": () => (/* binding */ PlaylistNewPage),
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












const PlaylistNewPage = ({
  navModel
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_9__.getPlaylistStyles);
  const {
    playlist,
    loading
  } = (0,_usePlaylist__WEBPACK_IMPORTED_MODULE_8__.usePlaylist)();

  const onSubmit = async playlist => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_7__.createPlaylist)(playlist);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/playlists');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
        className: styles.subHeading,
        children: "New Playlist"
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistNewPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBU0UsSUFBQUEsT0FBVDtBQUFrQkMsSUFBQUEsUUFBbEI7QUFBNEJDLElBQUFBLFVBQTVCO0FBQXdDQyxJQUFBQSxRQUF4QztBQUFrREMsSUFBQUE7QUFBbEQsR0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL2VkaXRvcnMvRGFzaGJvYXJkUGlja2VyQnlJRC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdE5ld1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0VGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0VGFibGVSb3cudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0VGFibGVSb3dzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9hcGkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3Qvc3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L3VzZVBsYXlsaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC91c2VQbGF5bGlzdEl0ZW1zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnZGVib3VuY2UtcHJvbWlzZSc7XG5pbXBvcnQgeyBBc3luY1NlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBwcmVmZXIgdXNpbmcgZGFzaGJvYXJkIHVpZCByYXRoZXIgdGhhbiBpZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFBpY2tlckl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICB1aWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChkYXNoYm9hcmQ/OiBEYXNoYm9hcmRQaWNrZXJJdGVtKSA9PiB2b2lkO1xuICB2YWx1ZT86IERhc2hib2FyZFBpY2tlckl0ZW07XG4gIHdpZHRoPzogbnVtYmVyO1xuICBpc0NsZWFyYWJsZT86IGJvb2xlYW47XG4gIGludmFsaWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHByZWZlciB1c2luZyBkYXNoYm9hcmQgdWlkIHJhdGhlciB0aGFuIGlkXG4gKi9cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRQaWNrZXJCeUlEOiBGQzxQcm9wcz4gPSAoe1xuICBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSxcbiAgdmFsdWUsXG4gIHdpZHRoLFxuICBpc0NsZWFyYWJsZSA9IGZhbHNlLFxuICBpbnZhbGlkLFxuICBkaXNhYmxlZCxcbiAgaWQsXG59KSA9PiB7XG4gIGNvbnN0IGRlYm91bmNlZFNlYXJjaCA9IGRlYm91bmNlKGdldERhc2hib2FyZHMsIDMwMCk7XG4gIGNvbnN0IG9wdGlvbiA9IHZhbHVlID8geyB2YWx1ZSwgbGFiZWw6IHZhbHVlLmxhYmVsIH0gOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKGl0ZW06IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRQaWNrZXJJdGVtPikgPT4ge1xuICAgIHByb3BzT25DaGFuZ2UoaXRlbT8udmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFzeW5jU2VsZWN0XG4gICAgICBpbnB1dElkPXtpZH1cbiAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGlzQ2xlYXJhYmxlPXtpc0NsZWFyYWJsZX1cbiAgICAgIGRlZmF1bHRPcHRpb25zPXt0cnVlfVxuICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZFNlYXJjaH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGRhc2hib2FyZFwiXG4gICAgICBub09wdGlvbnNNZXNzYWdlPVwiTm8gZGFzaGJvYXJkcyBmb3VuZFwiXG4gICAgICB2YWx1ZT17b3B0aW9ufVxuICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAvPlxuICApO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkcyhxdWVyeSA9ICcnKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkUGlja2VySXRlbT4+PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgdHlwZTogJ2Rhc2gtZGInLCBxdWVyeSwgbGltaXQ6IDEwMCB9KTtcbiAgcmV0dXJuIHJlc3VsdC5tYXAoKHsgaWQsIHVpZCA9ICcnLCB0aXRsZSwgZm9sZGVyVGl0bGUgfSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlOiBEYXNoYm9hcmRQaWNrZXJJdGVtID0ge1xuICAgICAgaWQsXG4gICAgICB1aWQsXG4gICAgICBsYWJlbDogYCR7Zm9sZGVyVGl0bGUgPz8gJ0dlbmVyYWwnfS8ke3RpdGxlfWAsXG4gICAgfTtcblxuICAgIHJldHVybiB7IHZhbHVlLCBsYWJlbDogdmFsdWUubGFiZWwgfTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZvcm0sIEhvcml6b250YWxHcm91cCwgSW5wdXQsIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFRhZ0ZpbHRlciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnRmlsdGVyJztcbmltcG9ydCB7IFNlYXJjaFNydiB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvc2VhcmNoX3Nydic7XG5pbXBvcnQgeyB1c2VQbGF5bGlzdEl0ZW1zIH0gZnJvbSAnLi91c2VQbGF5bGlzdEl0ZW1zJztcbmltcG9ydCB7IFBsYXlsaXN0VGFibGUgfSBmcm9tICcuL1BsYXlsaXN0VGFibGUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkUGlja2VyQnlJRCB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvZWRpdG9ycy9EYXNoYm9hcmRQaWNrZXJCeUlEJztcblxuaW50ZXJmYWNlIFBsYXlsaXN0Rm9ybVByb3BzIHtcbiAgb25TdWJtaXQ6IChwbGF5bGlzdDogUGxheWxpc3QpID0+IHZvaWQ7XG4gIHBsYXlsaXN0OiBQbGF5bGlzdDtcbn1cblxuY29uc3Qgc2VhcmNoU3J2ID0gbmV3IFNlYXJjaFNydigpO1xuXG5leHBvcnQgY29uc3QgUGxheWxpc3RGb3JtOiBGQzxQbGF5bGlzdEZvcm1Qcm9wcz4gPSAoeyBvblN1Ym1pdCwgcGxheWxpc3QgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGludGVydmFsLCBpdGVtczogcHJvcEl0ZW1zIH0gPSBwbGF5bGlzdDtcbiAgY29uc3QgeyBpdGVtcywgYWRkQnlJZCwgYWRkQnlUYWcsIGRlbGV0ZUl0ZW0sIG1vdmVEb3duLCBtb3ZlVXAgfSA9IHVzZVBsYXlsaXN0SXRlbXMocHJvcEl0ZW1zKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm0gb25TdWJtaXQ9eyhsaXN0OiBQbGF5bGlzdCkgPT4gb25TdWJtaXQoeyAuLi5saXN0LCBpdGVtcyB9KX0gdmFsaWRhdGVPbj17J29uQmx1cid9PlxuICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9IGl0ZW1zLmxlbmd0aCA9PT0gMCB8fCBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk5hbWVcIiBpbnZhbGlkPXshIWVycm9ycy5uYW1lfSBlcnJvcj17ZXJyb3JzPy5uYW1lPy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6ICdOYW1lIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiSW50ZXJ2YWxcIiBpbnZhbGlkPXshIWVycm9ycy5pbnRlcnZhbH0gZXJyb3I9e2Vycm9ycz8uaW50ZXJ2YWw/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdpbnRlcnZhbCcsIHsgcmVxdWlyZWQ6ICdJbnRlcnZhbCBpcyByZXF1aXJlZCcgfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjVtXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW50ZXJ2YWwgPz8gJzVtJ31cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaW50ZXJ2YWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8UGxheWxpc3RUYWJsZSBpdGVtcz17aXRlbXN9IG9uTW92ZVVwPXttb3ZlVXB9IG9uTW92ZURvd249e21vdmVEb3dufSBvbkRlbGV0ZT17ZGVsZXRlSXRlbX0gLz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJpbmdcIj5BZGQgZGFzaGJvYXJkczwvaDM+XG5cbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJBZGQgYnkgdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRQaWNrZXJCeUlEIG9uQ2hhbmdlPXthZGRCeUlkfSBpZD1cImRhc2hib2FyZC1waWNrZXJcIiBpc0NsZWFyYWJsZSAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJBZGQgYnkgdGFnXCI+XG4gICAgICAgICAgICAgICAgICA8VGFnRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e1tdfVxuICAgICAgICAgICAgICAgICAgICBoaWRlVmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIHRhZ09wdGlvbnM9e3NlYXJjaFNydi5nZXREYXNoYm9hcmRUYWdzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17YWRkQnlUYWd9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnJ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBocmVmPXtgJHtjb25maWcuYXBwU3ViVXJsfS9wbGF5bGlzdHNgfT5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9Gb3JtPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIE1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgUGxheWxpc3RGb3JtIH0gZnJvbSAnLi9QbGF5bGlzdEZvcm0nO1xuaW1wb3J0IHsgY3JlYXRlUGxheWxpc3QgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBQbGF5bGlzdCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUGxheWxpc3QgfSBmcm9tICcuL3VzZVBsYXlsaXN0JztcbmltcG9ydCB7IGdldFBsYXlsaXN0U3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgQ29ubmVjdGVkUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIENvbm5lY3RlZFByb3BzLCBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3ROZXdQYWdlOiBGQzxQcm9wcz4gPSAoeyBuYXZNb2RlbCB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0UGxheWxpc3RTdHlsZXMpO1xuICBjb25zdCB7IHBsYXlsaXN0LCBsb2FkaW5nIH0gPSB1c2VQbGF5bGlzdCgpO1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChwbGF5bGlzdDogUGxheWxpc3QpID0+IHtcbiAgICBhd2FpdCBjcmVhdGVQbGF5bGlzdChwbGF5bGlzdCk7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9wbGF5bGlzdHMnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3ViSGVhZGluZ30+TmV3IFBsYXlsaXN0PC9oMz5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgQSBwbGF5bGlzdCByb3RhdGVzIHRocm91Z2ggYSBwcmUtc2VsZWN0ZWQgbGlzdCBvZiBkYXNoYm9hcmRzLiBBIHBsYXlsaXN0IGNhbiBiZSBhIGdyZWF0IHdheSB0byBidWlsZFxuICAgICAgICAgIHNpdHVhdGlvbmFsIGF3YXJlbmVzcywgb3IganVzdCBzaG93IG9mZiB5b3VyIG1ldHJpY3MgdG8geW91ciB0ZWFtIG9yIHZpc2l0b3JzLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPFBsYXlsaXN0Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHBsYXlsaXN0PXtwbGF5bGlzdH0gLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM6IE1hcFN0YXRlVG9Qcm9wczxDb25uZWN0ZWRQcm9wcywge30sIFN0b3JlU3RhdGU+ID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdwbGF5bGlzdHMnKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGxheWxpc3ROZXdQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGxheWxpc3RUYWJsZVJvd3MgfSBmcm9tICcuL1BsYXlsaXN0VGFibGVSb3dzJztcbmltcG9ydCB7IFBsYXlsaXN0SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RUYWJsZVByb3BzIHtcbiAgaXRlbXM6IFBsYXlsaXN0SXRlbVtdO1xuICBvbk1vdmVVcDogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25Nb3ZlRG93bjogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25EZWxldGU6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdFRhYmxlOiBGQzxQbGF5bGlzdFRhYmxlUHJvcHM+ID0gKHsgaXRlbXMsIG9uTW92ZVVwLCBvbk1vdmVEb3duLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJpbmdcIj5EYXNoYm9hcmRzPC9oMz5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPFBsYXlsaXN0VGFibGVSb3dzIGl0ZW1zPXtpdGVtc30gb25Nb3ZlVXA9e29uTW92ZVVwfSBvbk1vdmVEb3duPXtvbk1vdmVEb3dufSBvbkRlbGV0ZT17b25EZWxldGV9IC8+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgTW91c2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgSWNvbiwgSWNvbkJ1dHRvbiwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFRhZ0JhZGdlIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdCYWRnZSc7XG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RUYWJsZVJvd1Byb3BzIHtcbiAgZmlyc3Q6IGJvb2xlYW47XG4gIGxhc3Q6IGJvb2xlYW47XG4gIGl0ZW06IFBsYXlsaXN0SXRlbTtcbiAgb25Nb3ZlVXA6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uTW92ZURvd246IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uRGVsZXRlOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RUYWJsZVJvdzogRkM8UGxheWxpc3RUYWJsZVJvd1Byb3BzPiA9ICh7IGl0ZW0sIG9uRGVsZXRlLCBvbk1vdmVEb3duLCBvbk1vdmVVcCwgZmlyc3QsIGxhc3QgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3Qgb25EZWxldGVDbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25EZWxldGUoaXRlbSk7XG4gIH07XG4gIGNvbnN0IG9uTW92ZURvd25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25Nb3ZlRG93bihpdGVtKTtcbiAgfTtcbiAgY29uc3Qgb25Nb3ZlVXBDbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25Nb3ZlVXAoaXRlbSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8dHIgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtUm93fSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2Rhc2hib2FyZF9ieV9pZCcgPyAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e2N4KHN0eWxlcy50ZCwgc3R5bGVzLml0ZW0pfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiYXBwc1wiIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbUlkVHlwZX0gLz5cbiAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtpdGVtLnR5cGUgPT09ICdkYXNoYm9hcmRfYnlfdGFnJyA/IChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17Y3goc3R5bGVzLnRkLCBzdHlsZXMuaXRlbSl9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJ0YWctYWx0XCIgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtVGFnVHlwZX0gLz5cbiAgICAgICAgICA8VGFnQmFkZ2Uga2V5PXtpdGVtLmlkfSBsYWJlbD17aXRlbS50aXRsZX0gcmVtb3ZlSWNvbj17ZmFsc2V9IGNvdW50PXswfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8dGQgY2xhc3NOYW1lPXtjeChzdHlsZXMudGQsIHN0eWxlcy5zZXR0aW5ncyl9PlxuICAgICAgICB7IWZpcnN0ID8gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBuYW1lPVwiYXJyb3ctdXBcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTW92ZVVwQ2xpY2t9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1Nb3ZlVXB9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgeyFsYXN0ID8gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBuYW1lPVwiYXJyb3ctZG93blwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgb25DbGljaz17b25Nb3ZlRG93bkNsaWNrfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtTW92ZURvd259XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBuYW1lPVwidGltZXNcIlxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgb25DbGljaz17b25EZWxldGVDbGlja31cbiAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1EZWxldGV9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIC8+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIHRkOiBjc3NgXG4gICAgICBsYWJlbDogdGQ7XG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgIG1heC13aWR0aDogMzM1cHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGAsXG4gICAgaXRlbTogY3NzYFxuICAgICAgbGFiZWw6IGl0ZW07XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgICB9XG4gICAgYCxcbiAgICBzZXR0aW5nczogY3NzYFxuICAgICAgbGFiZWw6IHNldHRpbmdzO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGxheWxpc3RUYWJsZVJvdyB9IGZyb20gJy4vUGxheWxpc3RUYWJsZVJvdyc7XG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIFBsYXlsaXN0VGFibGVSb3dzUHJvcHMge1xuICBpdGVtczogUGxheWxpc3RJdGVtW107XG4gIG9uTW92ZVVwOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbk1vdmVEb3duOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbkRlbGV0ZTogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0VGFibGVSb3dzOiBGQzxQbGF5bGlzdFRhYmxlUm93c1Byb3BzPiA9ICh7IGl0ZW1zLCBvbk1vdmVVcCwgb25Nb3ZlRG93biwgb25EZWxldGUgfSkgPT4ge1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxlbT5QbGF5bGlzdCBpcyBlbXB0eS4gQWRkIGRhc2hib2FyZHMgYmVsb3cuPC9lbT5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGxheWxpc3RUYWJsZVJvd1xuICAgICAgICAgICAgZmlyc3Q9e2ZpcnN0fVxuICAgICAgICAgICAgbGFzdD17bGFzdH1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgICBvbk1vdmVEb3duPXtvbk1vdmVEb3dufVxuICAgICAgICAgICAgb25Nb3ZlVXA9e29uTW92ZVVwfVxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IFBsYXlsaXN0LCBQbGF5bGlzdERUTyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICcuLi8uLi9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24sIGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsYXlsaXN0KHBsYXlsaXN0OiBQbGF5bGlzdCkge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9wbGF5bGlzdHMnLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGxheWxpc3QoaWQ6IG51bWJlciwgcGxheWxpc3Q6IFBsYXlsaXN0KSB7XG4gIGF3YWl0IHdpdGhFcnJvckhhbmRsaW5nKCgpID0+IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvcGxheWxpc3RzLyR7aWR9YCwgcGxheWxpc3QpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBsYXlsaXN0KGlkOiBudW1iZXIpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9wbGF5bGlzdHMvJHtpZH1gKSwgJ1BsYXlsaXN0IGRlbGV0ZWQnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlsaXN0KGlkOiBudW1iZXIpOiBQcm9taXNlPFBsYXlsaXN0PiB7XG4gIGNvbnN0IHJlc3VsdDogUGxheWxpc3QgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3BsYXlsaXN0cy8ke2lkfWApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGxheWxpc3QocXVlcnk6IHN0cmluZyk6IFByb21pc2U8UGxheWxpc3REVE9bXT4ge1xuICBjb25zdCByZXN1bHQ6IFBsYXlsaXN0RFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsYXlsaXN0cy8nLCB7IHF1ZXJ5IH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiB3aXRoRXJyb3JIYW5kbGluZyhhcGlDYWxsOiAoKSA9PiBQcm9taXNlPHZvaWQ+LCBtZXNzYWdlID0gJ1BsYXlsaXN0IHNhdmVkJykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUNhbGwoKTtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbihtZXNzYWdlKSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdVbmFibGUgdG8gc2F2ZSBwbGF5bGlzdCcsIGUpKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF5bGlzdFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgICBsYWJlbDogZGVzY3JpcHRpb247XG4gICAgICB3aWR0aDogNTU1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGAsXG4gICAgc3ViSGVhZGluZzogY3NzYFxuICAgICAgbGFiZWw6IHN1Yi1oZWFkaW5nO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBsYXlsaXN0IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRQbGF5bGlzdCB9IGZyb20gJy4vYXBpJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXlsaXN0KHBsYXlsaXN0SWQ/OiBudW1iZXIpIHtcbiAgY29uc3QgW3BsYXlsaXN0LCBzZXRQbGF5bGlzdF0gPSB1c2VTdGF0ZTxQbGF5bGlzdD4oeyBpdGVtczogW10sIGludGVydmFsOiAnNW0nLCBuYW1lOiAnJyB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0UGxheWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXBsYXlsaXN0SWQpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBnZXRQbGF5bGlzdChwbGF5bGlzdElkKTtcbiAgICAgIHNldFBsYXlsaXN0KGxpc3QpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcbiAgICBpbml0UGxheWxpc3QoKTtcbiAgfSwgW3BsYXlsaXN0SWRdKTtcblxuICByZXR1cm4geyBwbGF5bGlzdCwgbG9hZGluZyB9O1xufVxuIiwiaW1wb3J0IHsgRGFzaGJvYXJkUGlja2VySXRlbSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvZWRpdG9ycy9EYXNoYm9hcmRQaWNrZXJCeUlEJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGxheWxpc3RJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQbGF5bGlzdEl0ZW1zKHBsYXlsaXN0SXRlbXM/OiBQbGF5bGlzdEl0ZW1bXSkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPFBsYXlsaXN0SXRlbVtdPihwbGF5bGlzdEl0ZW1zID8/IFtdKTtcblxuICBjb25zdCBhZGRCeUlkID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhc2hib2FyZD86IERhc2hib2FyZFBpY2tlckl0ZW0pID0+IHtcbiAgICAgIGlmICghZGFzaGJvYXJkIHx8IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGRhc2hib2FyZC5pZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdJdGVtOiBQbGF5bGlzdEl0ZW0gPSB7XG4gICAgICAgIGlkOiBkYXNoYm9hcmQuaWQsXG4gICAgICAgIHRpdGxlOiBkYXNoYm9hcmQubGFiZWwsXG4gICAgICAgIHR5cGU6ICdkYXNoYm9hcmRfYnlfaWQnLFxuICAgICAgICB2YWx1ZTogZGFzaGJvYXJkLmlkLnRvU3RyaW5nKDEwKSxcbiAgICAgICAgb3JkZXI6IGl0ZW1zLmxlbmd0aCArIDEsXG4gICAgICB9O1xuICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfSxcbiAgICBbaXRlbXNdXG4gICk7XG5cbiAgY29uc3QgYWRkQnlUYWcgPSB1c2VDYWxsYmFjayhcbiAgICAodGFnczogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IHRhZyA9IHRhZ3NbMF07XG4gICAgICBpZiAoIXRhZyB8fCBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSB0YWcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3SXRlbTogUGxheWxpc3RJdGVtID0ge1xuICAgICAgICB0aXRsZTogdGFnLFxuICAgICAgICB0eXBlOiAnZGFzaGJvYXJkX2J5X3RhZycsXG4gICAgICAgIHZhbHVlOiB0YWcsXG4gICAgICAgIG9yZGVyOiBpdGVtcy5sZW5ndGggKyAxLFxuICAgICAgfTtcbiAgICAgIHNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIGNvbnN0IG1vdmVQbGF5bGlzdEl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtLCBvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3SXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgb2Zmc2V0O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPj0gMCAmJiBuZXdQb3NpdGlvbiA8IG5ld0l0ZW1zLmxlbmd0aCkge1xuICAgICAgICBuZXdJdGVtcy5zcGxpY2UoY3VycmVudFBvc2l0aW9uLCAxKTtcbiAgICAgICAgbmV3SXRlbXMuc3BsaWNlKG5ld1Bvc2l0aW9uLCAwLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICBjb25zdCBtb3ZlVXAgPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBtb3ZlUGxheWxpc3RJdGVtKGl0ZW0sIC0xKTtcbiAgICB9LFxuICAgIFttb3ZlUGxheWxpc3RJdGVtXVxuICApO1xuXG4gIGNvbnN0IG1vdmVEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4ge1xuICAgICAgbW92ZVBsYXlsaXN0SXRlbShpdGVtLCAxKTtcbiAgICB9LFxuICAgIFttb3ZlUGxheWxpc3RJdGVtXVxuICApO1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBzZXRJdGVtcyhpdGVtcy5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICByZXR1cm4geyBpdGVtcywgYWRkQnlJZCwgYWRkQnlUYWcsIGRlbGV0ZUl0ZW0sIG1vdmVEb3duLCBtb3ZlVXAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImRlYm91bmNlIiwiQXN5bmNTZWxlY3QiLCJiYWNrZW5kU3J2IiwiRGFzaGJvYXJkUGlja2VyQnlJRCIsIm9uQ2hhbmdlIiwicHJvcHNPbkNoYW5nZSIsInZhbHVlIiwid2lkdGgiLCJpc0NsZWFyYWJsZSIsImludmFsaWQiLCJkaXNhYmxlZCIsImlkIiwiZGVib3VuY2VkU2VhcmNoIiwiZ2V0RGFzaGJvYXJkcyIsIm9wdGlvbiIsImxhYmVsIiwidW5kZWZpbmVkIiwiaXRlbSIsInF1ZXJ5IiwicmVzdWx0Iiwic2VhcmNoIiwidHlwZSIsImxpbWl0IiwibWFwIiwidWlkIiwidGl0bGUiLCJmb2xkZXJUaXRsZSIsImNvbmZpZyIsIkJ1dHRvbiIsIkZpZWxkIiwiRm9ybSIsIkhvcml6b250YWxHcm91cCIsIklucHV0IiwiTGlua0J1dHRvbiIsInNlbGVjdG9ycyIsIlRhZ0ZpbHRlciIsIlNlYXJjaFNydiIsInVzZVBsYXlsaXN0SXRlbXMiLCJQbGF5bGlzdFRhYmxlIiwic2VhcmNoU3J2IiwiUGxheWxpc3RGb3JtIiwib25TdWJtaXQiLCJwbGF5bGlzdCIsIm5hbWUiLCJpbnRlcnZhbCIsIml0ZW1zIiwicHJvcEl0ZW1zIiwiYWRkQnlJZCIsImFkZEJ5VGFnIiwiZGVsZXRlSXRlbSIsIm1vdmVEb3duIiwibW92ZVVwIiwibGlzdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiaXNEaXNhYmxlZCIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJwYWdlcyIsImdldERhc2hib2FyZFRhZ3MiLCJhcHBTdWJVcmwiLCJjb25uZWN0IiwibG9jYXRpb25TZXJ2aWNlIiwidXNlU3R5bGVzMiIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsImNyZWF0ZVBsYXlsaXN0IiwidXNlUGxheWxpc3QiLCJnZXRQbGF5bGlzdFN0eWxlcyIsIlBsYXlsaXN0TmV3UGFnZSIsIm5hdk1vZGVsIiwic3R5bGVzIiwibG9hZGluZyIsInB1c2giLCJzdWJIZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4IiwiUGxheWxpc3RUYWJsZVJvd3MiLCJvbk1vdmVVcCIsIm9uTW92ZURvd24iLCJvbkRlbGV0ZSIsImNzcyIsImN4IiwiSWNvbiIsIkljb25CdXR0b24iLCJ1c2VTdHlsZXMiLCJUYWdCYWRnZSIsIlBsYXlsaXN0VGFibGVSb3ciLCJmaXJzdCIsImxhc3QiLCJnZXRTdHlsZXMiLCJvbkRlbGV0ZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW92ZURvd25DbGljayIsIm9uTW92ZVVwQ2xpY2siLCJpdGVtUm93IiwidGQiLCJpdGVtSWRUeXBlIiwiaXRlbVRhZ1R5cGUiLCJzZXR0aW5ncyIsIml0ZW1Nb3ZlVXAiLCJpdGVtTW92ZURvd24iLCJpdGVtRGVsZXRlIiwidGhlbWUiLCJzcGFjaW5nIiwieHMiLCJpbmRleCIsImdldEJhY2tlbmRTcnYiLCJkaXNwYXRjaCIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsIndpdGhFcnJvckhhbmRsaW5nIiwicG9zdCIsInVwZGF0ZVBsYXlsaXN0IiwicHV0IiwiZGVsZXRlUGxheWxpc3QiLCJkZWxldGUiLCJnZXRQbGF5bGlzdCIsImdldCIsImdldEFsbFBsYXlsaXN0IiwiYXBpQ2FsbCIsImUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInBsYXlsaXN0SWQiLCJzZXRQbGF5bGlzdCIsInNldExvYWRpbmciLCJpbml0UGxheWxpc3QiLCJ1c2VDYWxsYmFjayIsInBsYXlsaXN0SXRlbXMiLCJzZXRJdGVtcyIsImRhc2hib2FyZCIsImZpbmQiLCJuZXdJdGVtIiwidG9TdHJpbmciLCJvcmRlciIsInRhZ3MiLCJ0YWciLCJtb3ZlUGxheWxpc3RJdGVtIiwib2Zmc2V0IiwibmV3SXRlbXMiLCJjdXJyZW50UG9zaXRpb24iLCJpbmRleE9mIiwibmV3UG9zaXRpb24iLCJzcGxpY2UiLCJmaWx0ZXIiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==
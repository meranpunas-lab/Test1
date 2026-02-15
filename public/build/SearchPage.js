"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SearchPage"],{

/***/ "./public/app/features/search/page/SearchPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/search/service/index.ts");
/* harmony import */ var _table_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/search/page/table/Table.tsx");
/* harmony import */ var app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var _service_backend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/search/service/backend.ts");
/* harmony import */ var _hooks_useSearchQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/search/hooks/useSearchQuery.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _Spinner, _br2;
















const node = {
  id: 'search',
  text: 'Search',
  icon: 'dashboard',
  url: 'search'
};
function SearchPage() {
  var _results$value2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const {
    query,
    onQueryChange,
    onTagFilterChange,
    onDatasourceChange
  } = (0,_hooks_useSearchQuery__WEBPACK_IMPORTED_MODULE_10__.useSearchQuery)({});
  const results = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    const {
      query: searchQuery,
      tag: tags,
      datasource
    } = query;
    const filters = {
      tags,
      datasource
    };
    return (0,_service__WEBPACK_IMPORTED_MODULE_6__.getGrafanaSearcher)().search(searchQuery, tags.length || datasource ? filters : undefined);
  }, [query]);

  if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.panelTitleSearch) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.unsupported,
      children: "Unsupported"
    });
  }

  const getTagOptions = () => {
    var _results$value;

    const tags = (_results$value = results.value) === null || _results$value === void 0 ? void 0 : _results$value.body.fields.find(f => f.name === 'tags');

    if (tags) {
      return Promise.resolve((0,_service_backend__WEBPACK_IMPORTED_MODULE_9__.getTermCounts)(tags));
    }

    return Promise.resolve([]);
  };

  const onSearchQueryChange = event => {
    onQueryChange(event.currentTarget.value);
  };

  const onTagChange = tags => {
    onTagFilterChange(tags);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navModel: {
      node: node,
      main: node
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        value: query.query,
        onChange: onSearchQueryChange,
        autoFocus: true,
        spellCheck: false
      }), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {})), results.loading && (_Spinner || (_Spinner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}))), ((_results$value2 = results.value) === null || _results$value2 === void 0 ? void 0 : _results$value2.body) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_8__.TagFilter, {
          isClearable: true,
          tags: query.tag,
          tagOptions: getTagOptions,
          onChange: onTagChange
        }), " ", _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {})), query.datasource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          icon: "times",
          variant: "secondary",
          onClick: () => onDatasourceChange(undefined),
          className: styles.clearClick,
          children: ["Datasource: ", query.datasource]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            width: '100%',
            height: '2000px'
          },
          children: ({
            width
          }) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_table_Table__WEBPACK_IMPORTED_MODULE_7__.Table, {
                data: results.value.body,
                width: width,
                tags: query.tag,
                onTagFilterChange: onTagChange,
                onDatasourceChange: onDatasourceChange
              })
            });
          }
        })]
      })]
    })
  });
}

const getStyles = theme => ({
  unsupported: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,
  clearClick: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
    &:hover {
      text-decoration: line-through;
    }
    margin-bottom: 20px;
  `
});

/***/ }),

/***/ "./public/app/features/search/page/table/Table.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-table-virtual-3932e42729/0/cache/react-table-npm-7.7.0-95e9357cd2-a679edecc7.zip/node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _grafana_ui_src_components_Table_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableCell.tsx");
/* harmony import */ var _grafana_ui_src_components_Table_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Table/styles.ts");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/search/page/table/columns.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["key"],
      _excluded2 = ["key"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const Table = ({
  data,
  width,
  tags,
  onTagFilterChange,
  onDatasourceChange
}) => {
  var _data$meta2, _access$fields$url2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(_grafana_ui_src_components_Table_styles__WEBPACK_IMPORTED_MODULE_6__.getTableStyles);
  const memoizedData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!data.fields.length) {
      return [];
    } // as we only use this to fake the length of our data set for react-table we need to make sure we always return an array
    // filled with values at each index otherwise we'll end up trying to call accessRow for null|undefined value in
    // https://github.com/tannerlinsley/react-table/blob/7be2fc9d8b5e223fc998af88865ae86a88792fdb/src/hooks/useTable.js#L585


    return Array(data.length).fill(0);
  }, [data]); // React-table column definitions

  const access = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataFrameView(data), [data]);
  const memoizedColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _data$meta;

    const isDashboardList = ((_data$meta = data.meta) === null || _data$meta === void 0 ? void 0 : _data$meta.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataFrameType.DirectoryListing;
    return (0,_columns__WEBPACK_IMPORTED_MODULE_7__.generateColumns)(access, isDashboardList, width, styles, tags, onTagFilterChange, onDatasourceChange);
  }, [(_data$meta2 = data.meta) === null || _data$meta2 === void 0 ? void 0 : _data$meta2.type, access, width, styles, tags, onTagFilterChange, onDatasourceChange]);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    columns: memoizedColumns,
    data: memoizedData
  }), [memoizedColumns, memoizedData]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)(options, react_table__WEBPACK_IMPORTED_MODULE_1__.useBlockLayout);
  const RenderRow = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(({
    index: rowIndex,
    style
  }) => {
    var _access$fields$url;

    const row = rows[rowIndex];
    prepareRow(row);
    const url = (_access$fields$url = access.fields.url) === null || _access$fields$url === void 0 ? void 0 : _access$fields$url.values.get(rowIndex);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", Object.assign({}, row.getRowProps({
      style
    }), {
      className: styles.rowContainer,
      children: row.cells.map((cell, index) => {
        if (cell.column.id === 'column-checkbox' || cell.column.id === 'column-tags' || cell.column.id === 'column-datasource') {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: styles.cellWrapper,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui_src_components_Table_TableCell__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
              tableStyles: tableStyles,
              cell: cell,
              columnIndex: index,
              columnCount: row.cells.length
            }, index)
          }, index);
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
          href: url,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: styles.cellWrapper,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui_src_components_Table_TableCell__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
              tableStyles: tableStyles,
              cell: cell,
              columnIndex: index,
              columnCount: row.cells.length
            }, index)
          })
        }, index);
      })
    }));
  }, [rows, prepareRow, (_access$fields$url2 = access.fields.url) === null || _access$fields$url2 === void 0 ? void 0 : _access$fields$url2.values, styles.rowContainer, styles.cellWrapper, tableStyles]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", Object.assign({}, getTableProps(), {
    style: {
      width
    },
    "aria-label": 'Search result table',
    role: "table",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: headerGroups.map(headerGroup => {
        const _headerGroup$getHeade = headerGroup.getHeaderGroupProps(),
              {
          key
        } = _headerGroup$getHeade,
              headerGroupProps = _objectWithoutPropertiesLoose(_headerGroup$getHeade, _excluded);

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", Object.assign({}, headerGroupProps, {
          className: styles.headerRow,
          children: headerGroup.headers.map(column => {
            const _column$getHeaderProp = column.getHeaderProps(),
                  {
              key
            } = _column$getHeaderProp,
                  headerProps = _objectWithoutPropertiesLoose(_column$getHeaderProp, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", Object.assign({}, headerProps, {
              role: "columnheader",
              className: styles.headerCell,
              children: column.render('Header')
            }), key);
          })
        }), key);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", Object.assign({}, getTableBodyProps(), {
      children: rows.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_9__.FixedSizeList, {
        height: 500,
        itemCount: rows.length,
        itemSize: tableStyles.rowHeight,
        width: '100%',
        className: styles.tableBody,
        children: RenderRow
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: styles.noData,
        children: "No data"
      })
    }))]
  }));
};

const getStyles = theme => {
  const rowHoverBg = theme.colors.emphasize(theme.colors.background.primary, 0.03);
  return {
    noData: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    `,
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      width: 100%;
    `,
    tableBody: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      overflow: 'hidden auto';
    `,
    cellIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      display: flex;
      align-items: center;
    `,
    cellWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      display: flex;
    `,
    headerCell: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      padding-top: 2px;
      padding-left: 10px;
    `,
    headerRow: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      background-color: ${theme.colors.background.secondary};
      height: 36px;
      align-items: center;
    `,
    rowContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      &:hover {
        background-color: ${rowHoverBg};
      }
    `,
    typeIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-right: 9.5px;
      vertical-align: middle;
      display: inline-block;
      margin-bottom: ${theme.v1.spacing.xxs};
      fill: ${theme.colors.text.secondary};
    `,
    typeText: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      color: ${theme.colors.text.secondary};
    `,
    locationItem: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      color: ${theme.colors.text.secondary};
      margin-right: 12px;
    `,
    checkboxHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      // display: flex;
      // justify-content: flex-start;
    `,
    checkbox: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 5px;
    `,
    infoWrap: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      span {
        margin-right: 10px;
      }
    `,
    tagList: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      justify-content: flex-start;
      pointer-events: auto;
    `
  };
};

/***/ }),

/***/ "./public/app/features/search/page/table/columns.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateColumns": () => (/* binding */ generateColumns)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Table/DefaultCell.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const generateColumns = (data, isDashboardList, availableWidth, styles, tags, onTagFilterChange, onDatasourceChange) => {
  const columns = [];
  const urlField = data.fields.url;
  const access = data.fields;
  availableWidth -= 8; // ???

  let width = 50; // TODO: Add optional checkbox support

  if (false) {} // Name column


  width = Math.max(availableWidth * 0.2, 200);
  columns.push({
    Cell: _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_3__.DefaultCell,
    id: `column-name`,
    field: access.name,
    Header: 'Name',
    accessor: (row, i) => {
      const name = access.name.values.get(i);
      return name;
    },
    width
  });
  availableWidth -= width;
  const TYPE_COLUMN_WIDTH = 130;
  const DATASOURCE_COLUMN_WIDTH = 200;
  const INFO_COLUMN_WIDTH = 100;
  const LOCATION_COLUMN_WIDTH = 200;
  width = TYPE_COLUMN_WIDTH;

  if (isDashboardList) {
    columns.push({
      Cell: _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_3__.DefaultCell,
      id: `column-type`,
      field: access.name,
      Header: 'Type',
      accessor: (row, i) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: styles.typeText,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: 'apps',
            className: styles.typeIcon
          }), "Dashboard"]
        });
      },
      width
    });
    availableWidth -= width;
  } else {
    columns.push(makeTypeColumn(access.kind, access.type, width, styles.typeText, styles.typeIcon));
    availableWidth -= width;
  } // Show datasources if we have any


  if (access.datasource && hasFieldValue(access.datasource)) {
    width = DATASOURCE_COLUMN_WIDTH;
    columns.push(makeDataSourceColumn(access.datasource, width, styles.typeIcon, onDatasourceChange));
    availableWidth -= width;
  }

  if (isDashboardList) {
    width = INFO_COLUMN_WIDTH;
    columns.push({
      Cell: _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_3__.DefaultCell,
      id: `column-info`,
      field: access.url,
      Header: 'Info',
      accessor: (row, i) => {
        var _access$panelCount;

        const panelCount = (_access$panelCount = access.panelCount) === null || _access$panelCount === void 0 ? void 0 : _access$panelCount.values.get(i);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: styles.infoWrap,
          children: panelCount != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            children: ["Panels: ", panelCount]
          })
        });
      },
      width: width
    });
    availableWidth -= width;
  } else {
    var _access$location;

    columns.push({
      Cell: _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_3__.DefaultCell,
      id: `column-location`,
      field: (_access$location = access.location) !== null && _access$location !== void 0 ? _access$location : access.url,
      Header: 'Location',
      accessor: (row, i) => {
        var _access$location2;

        const location = (_access$location2 = access.location) === null || _access$location2 === void 0 ? void 0 : _access$location2.values.get(i);

        if (location) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            children: location.map((v, id) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
              className: styles.locationItem,
              onClick: e => {
                e.preventDefault();
                alert('CLICK: ' + v.name);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: getIconForKind(v.kind)
              }), " ", v.name]
            }, id))
          });
        }

        return null;
      },
      width: LOCATION_COLUMN_WIDTH
    });
    availableWidth -= width;
  } // Show tags if we have any


  if (access.tags && hasFieldValue(access.tags)) {
    width = Math.max(availableWidth, 250);
    columns.push(makeTagsColumn(access.tags, width, styles.tagList, tags, onTagFilterChange));
  }

  return columns;
};

function hasFieldValue(field) {
  for (let i = 0; i < field.values.length; i++) {
    const v = field.values.get(i);

    if (v && v.length) {
      return true;
    }
  }

  return false;
}

function getIconForKind(v) {
  if (v === 'dashboard') {
    return 'apps';
  }

  if (v === 'folder') {
    return 'folder';
  }

  return 'question-circle';
}

function makeDataSourceColumn(field, width, iconClass, onDatasourceChange) {
  return {
    Cell: _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_3__.DefaultCell,
    id: `column-datasource`,
    field,
    Header: 'Data source',
    accessor: (row, i) => {
      const dslist = field.values.get(i);

      if (dslist !== null && dslist !== void 0 && dslist.length) {
        const srv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)();
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: dslist.map((v, i) => {
            var _settings$meta, _settings$meta$info, _settings$meta$info$l;

            const settings = srv.getInstanceSettings(v);
            const icon = settings === null || settings === void 0 ? void 0 : (_settings$meta = settings.meta) === null || _settings$meta === void 0 ? void 0 : (_settings$meta$info = _settings$meta.info) === null || _settings$meta$info === void 0 ? void 0 : (_settings$meta$info$l = _settings$meta$info.logos) === null || _settings$meta$info$l === void 0 ? void 0 : _settings$meta$info$l.small;

            if (icon) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                href: `datasources/edit/${settings.uid}`,
                onClick: e => {
                  e.stopPropagation();
                  e.preventDefault();
                  onDatasourceChange(settings.uid);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  src: icon,
                  width: 14,
                  height: 14,
                  title: settings.type,
                  className: iconClass
                }), settings.name]
              }, i);
            }

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: v.type
            }, i);
          })
        });
      }

      return null;
    },
    width
  };
}

function makeTypeColumn(kindField, typeField, width, typeTextClass, iconClass) {
  return {
    Cell: _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_3__.DefaultCell,
    id: `column-type`,
    field: kindField,
    Header: 'Type',
    accessor: (row, i) => {
      const kind = kindField.values.get(i);
      let icon = 'public/img/icons/unicons/apps.svg';
      let txt = 'Dashboard';

      if (kind) {
        txt = kind;

        switch (txt) {
          case 'dashboard':
            txt = 'Dashboard';
            break;

          case 'folder':
            icon = 'public/img/icons/unicons/folder.svg';
            txt = 'Folder';
            break;

          case 'panel':
            icon = 'public/img/icons/unicons/graph-bar.svg';
            const type = typeField.values.get(i);

            if (type) {
              txt = type;
              const info = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.panels[txt];

              if (info !== null && info !== void 0 && info.name) {
                var _info$info;

                const v = (_info$info = info.info) === null || _info$info === void 0 ? void 0 : _info$info.logos.small;

                if (v && v.endsWith('.svg')) {
                  icon = v;
                }

                txt = info.name;
              }
            }

            break;
        }
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: typeTextClass,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__["default"], {
          src: icon,
          width: 14,
          height: 14,
          title: txt,
          className: iconClass
        }), txt]
      });
    },
    width
  };
}

function makeTagsColumn(field, width, tagListClass, currentTagFilter, onTagFilterChange) {
  const updateTagFilter = tag => {
    if (!currentTagFilter.includes(tag)) {
      onTagFilterChange([...currentTagFilter, tag]);
    }
  };

  return {
    Cell: _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_3__.DefaultCell,
    id: `column-tags`,
    field: field,
    Header: 'Tags',
    accessor: (row, i) => {
      const tags = field.values.get(i);

      if (tags) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagList, {
          className: tagListClass,
          tags: tags,
          onClick: updateTagFilter
        });
      }

      return null;
    },
    width
  };
}

/***/ }),

/***/ "./public/app/features/search/service/backend.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildStatsTable": () => (/* binding */ buildStatsTable),
/* harmony export */   "filterFrame": () => (/* binding */ filterFrame),
/* harmony export */   "getRawIndexData": () => (/* binding */ getRawIndexData),
/* harmony export */   "getTermCounts": () => (/* binding */ getTermCounts)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var app_plugins_datasource_grafana_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");




async function getRawIndexData() {
  const ds = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().get('-- Grafana --');
  const rsp = await (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(ds.query({
    targets: [{
      refId: 'A',
      queryType: app_plugins_datasource_grafana_types__WEBPACK_IMPORTED_MODULE_2__.GrafanaQueryType.Search
    } // gets all data
    ]
  }));
  const data = {};

  for (const f of rsp.data) {
    const frame = f;

    for (const field of frame.fields) {
      // Parse tags/ds from JSON string
      if (field.name === 'tags' || field.name === 'datasource') {
        const values = field.values.toArray().map(v => {
          if (v !== null && v !== void 0 && v.length) {
            try {
              const arr = JSON.parse(v);
              return arr.length ? arr : undefined;
            } catch {}
          }

          return undefined;
        });
        field.type = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other; // []string

        field.values = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(values);
      }

      field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDisplayProcessor)({
        field,
        theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.theme2
      });
    }

    frame.meta = {
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameType.DirectoryListing
    };

    switch (frame.name) {
      case 'dashboards':
        data.dashboard = frame;
        break;

      case 'panels':
        data.panel = frame;
        break;

      case 'folders':
        data.folder = frame;
        break;
    }
  }

  return data;
}
function buildStatsTable(field) {
  if (!field) {
    return {
      length: 0,
      fields: []
    };
  }

  const counts = new Map();

  for (let i = 0; i < field.values.length; i++) {
    var _counts$get;

    const k = field.values.get(i);
    const v = (_counts$get = counts.get(k)) !== null && _counts$get !== void 0 ? _counts$get : 0;
    counts.set(k, v + 1);
  } // Sort largest first


  counts[Symbol.iterator] = function* () {
    yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
  };

  const keys = [];
  const vals = [];

  for (let [k, v] of counts) {
    keys.push(k);
    vals.push(v);
  }

  return {
    fields: [Object.assign({}, field, {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(keys)
    }), {
      name: 'Count',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(vals),
      config: {}
    }],
    length: keys.length
  };
}
function getTermCounts(field) {
  if (!field) {
    return [];
  }

  const counts = new Map();

  for (let i = 0; i < field.values.length; i++) {
    const k = field.values.get(i);

    if (k == null || !k.length) {
      continue;
    }

    if (Array.isArray(k)) {
      for (const sub of k) {
        var _counts$get2;

        const v = (_counts$get2 = counts.get(sub)) !== null && _counts$get2 !== void 0 ? _counts$get2 : 0;
        counts.set(sub, v + 1);
      }
    } else {
      var _counts$get3;

      const v = (_counts$get3 = counts.get(k)) !== null && _counts$get3 !== void 0 ? _counts$get3 : 0;
      counts.set(k, v + 1);
    }
  } // Sort largest first


  counts[Symbol.iterator] = function* () {
    yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
  };

  const terms = [];

  for (let [term, count] of counts) {
    terms.push({
      term,
      count
    });
  }

  return terms;
}
function filterFrame(frame, filter) {
  var _filter$tags;

  if (!filter) {
    return frame;
  }

  const view = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(frame);
  const keep = [];
  const ds = filter.datasource ? view.fields.datasource : undefined;
  const tags = (_filter$tags = filter.tags) !== null && _filter$tags !== void 0 && _filter$tags.length ? view.fields.tags : undefined;
  let ok = true;

  for (let i = 0; i < view.length; i++) {
    ok = true;

    if (tags) {
      const v = tags.values.get(i);

      if (!v) {
        ok = false;
      } else {
        for (const t of filter.tags) {
          if (!v.includes(t)) {
            ok = false;
            break;
          }
        }
      }
    }

    if (ok && ds && filter.datasource) {
      ok = false;
      const v = ds.values.get(i);

      if (v) {
        for (const d of v) {
          if (d.uid === filter.datasource) {
            ok = true;
            break;
          }
        }
      }
    }

    if (ok) {
      keep.push(i);
    }
  }

  return {
    meta: frame.meta,
    name: frame.name,
    fields: frame.fields.map(f => Object.assign({}, f, {
      values: filterValues(keep, f.values)
    })),
    length: keep.length
  };
}

function filterValues(keep, raw) {
  const values = new Array(keep.length);

  for (let i = 0; i < keep.length; i++) {
    values[i] = raw.get(keep[i]);
  }

  return new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(values);
}

/***/ }),

/***/ "./public/app/features/search/service/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGrafanaSearcher": () => (/* reexport safe */ _searcher__WEBPACK_IMPORTED_MODULE_1__.getGrafanaSearcher)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/search/service/types.ts");
/* harmony import */ var _searcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/search/service/searcher.ts");



/***/ }),

/***/ "./public/app/features/search/service/minisearcher.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniSearcher": () => (/* binding */ MiniSearcher)
/* harmony export */ });
/* harmony import */ var minisearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/minisearch-npm-5.0.0-beta1-42ec5b533f-7c5ba8b2d1.zip/node_modules/minisearch/dist/es5m/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/search/service/backend.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






// This implements search in the frontend using the minisearch library
class MiniSearcher {
  constructor(supplier = _backend__WEBPACK_IMPORTED_MODULE_2__.getRawIndexData) {// waits for first request to load data

    this.supplier = supplier;

    _defineProperty(this, "lookup", new Map());

    _defineProperty(this, "data", {});

    _defineProperty(this, "index", void 0);

    this.supplier = supplier;
  }

  async initIndex() {
    const data = await this.supplier();
    const searcher = new minisearch__WEBPACK_IMPORTED_MODULE_4__["default"]({
      idField: '__id',
      fields: ['name', 'description', 'tags', 'type', 'tags'],
      // fields to index for full-text search
      searchOptions: {
        boost: {
          name: 3,
          description: 1
        },
        // boost dashboard matches first
        boostDocument: (documentId, term) => {
          const kind = documentId.kind;

          if (kind === 'dashboard') {
            return 1.4;
          }

          if (kind === 'folder') {
            return 1.2;
          }

          return 1;
        },
        prefix: true,
        fuzzy: term => term.length > 4 ? 0.2 : false
      },
      extractField: (doc, name) => {
        // return a composite key for the id
        if (name === '__id') {
          return {
            kind: doc.kind,
            index: doc.index
          };
        }

        const values = doc[name];

        if (!values) {
          return '';
        }

        const value = values.get(doc.index);

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isString)(value)) {
          return value;
        }

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isArray)(value)) {
          return value.join(' ');
        }

        return JSON.stringify(value);
      }
    });
    const lookup = new Map();

    for (const [key, frame] of Object.entries(data)) {
      const kind = key;
      const input = getInputDoc(kind, frame);
      lookup.set(kind, input);

      for (let i = 0; i < frame.length; i++) {
        input.index = i;
        searcher.add(input);
      }
    } // Construct the URL field for each panel


    const folderIDToIndex = new Map();
    const folder = lookup.get('folder');
    const dashboard = lookup.get('dashboard');
    const panel = lookup.get('panel');

    if (folder !== null && folder !== void 0 && folder.id) {
      for (let i = 0; i < ((_folder$id = folder.id) === null || _folder$id === void 0 ? void 0 : _folder$id.length); i++) {
        var _folder$id;

        folderIDToIndex.set(folder.id.get(i), i);
      }
    }

    if (dashboard !== null && dashboard !== void 0 && dashboard.id && panel !== null && panel !== void 0 && panel.dashboardID && dashboard.url) {
      let location = new Array(dashboard.id.length);
      const dashIDToIndex = new Map();

      for (let i = 0; i < ((_dashboard$id = dashboard.id) === null || _dashboard$id === void 0 ? void 0 : _dashboard$id.length); i++) {
        var _dashboard$id, _dashboard$folder;

        dashIDToIndex.set(dashboard.id.get(i), i);
        const folderId = (_dashboard$folder = dashboard.folder) === null || _dashboard$folder === void 0 ? void 0 : _dashboard$folder.get(i);

        if (folderId != null) {
          var _folder$name;

          const index = folderIDToIndex.get(folderId);
          const name = folder === null || folder === void 0 ? void 0 : (_folder$name = folder.name) === null || _folder$name === void 0 ? void 0 : _folder$name.get(index);

          if (name) {
            location[i] = [{
              kind: 'folder',
              name
            }];
          }
        }
      }

      dashboard.location = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(location); // folder name

      location = new Array(panel.dashboardID.length);
      const urls = new Array(location.length);

      for (let i = 0; i < panel.dashboardID.length; i++) {
        const dashboardID = panel.dashboardID.get(i);
        const index = dashIDToIndex.get(dashboardID);

        if (index != null) {
          var _panel$id, _dashboard$location$g, _dashboard$name$get, _dashboard$name;

          const idx = (_panel$id = panel.id) === null || _panel$id === void 0 ? void 0 : _panel$id.get(i);
          urls[i] = dashboard.url.get(index) + '?viewPanel=' + idx;
          const parent = (_dashboard$location$g = dashboard.location.get(index)) !== null && _dashboard$location$g !== void 0 ? _dashboard$location$g : [];
          const name = (_dashboard$name$get = (_dashboard$name = dashboard.name) === null || _dashboard$name === void 0 ? void 0 : _dashboard$name.get(index)) !== null && _dashboard$name$get !== void 0 ? _dashboard$name$get : '?';
          location[i] = [...parent, {
            kind: 'dashboard',
            name
          }];
        }
      }

      panel.url = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(urls);
      panel.location = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(location);
    }

    this.index = searcher;
    this.data = data;
    this.lookup = lookup;
  }

  async search(query, filter) {
    if (!this.index) {
      await this.initIndex();
    } // empty query can return everything


    if (!query && this.data.dashboard) {
      return {
        body: (0,_backend__WEBPACK_IMPORTED_MODULE_2__.filterFrame)(this.data.dashboard, filter)
      };
    }

    const found = this.index.search(query); // frame fields

    const url = [];
    const kind = [];
    const type = [];
    const name = [];
    const tags = [];
    const location = [];
    const datasource = [];
    const info = [];
    const score = [];

    for (const res of found) {
      var _input$url$get, _input$url, _input$location, _input$datasource, _input$tags, _input$name$get, _input$name, _input$type;

      const key = res.id;
      const index = key.index;
      const input = this.lookup.get(key.kind);

      if (!input) {
        continue;
      }

      if (filter && !shouldKeep(filter, input, index)) {
        continue;
      }

      url.push((_input$url$get = (_input$url = input.url) === null || _input$url === void 0 ? void 0 : _input$url.get(index)) !== null && _input$url$get !== void 0 ? _input$url$get : '?');
      location.push((_input$location = input.location) === null || _input$location === void 0 ? void 0 : _input$location.get(index));
      datasource.push((_input$datasource = input.datasource) === null || _input$datasource === void 0 ? void 0 : _input$datasource.get(index));
      tags.push((_input$tags = input.tags) === null || _input$tags === void 0 ? void 0 : _input$tags.get(index));
      kind.push(key.kind);
      name.push((_input$name$get = (_input$name = input.name) === null || _input$name === void 0 ? void 0 : _input$name.get(index)) !== null && _input$name$get !== void 0 ? _input$name$get : '?');
      type.push((_input$type = input.type) === null || _input$type === void 0 ? void 0 : _input$type.get(index));
      info.push(res.match); // ???

      score.push(res.score);
    }

    const fields = [{
      name: 'kind',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(kind)
    }, {
      name: 'name',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(name)
    }, {
      name: 'url',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(url)
    }, {
      name: 'type',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(type)
    }, {
      name: 'info',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(info)
    }, {
      name: 'tags',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(tags)
    }, {
      name: 'location',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(location)
    }, {
      name: 'datasource',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(datasource)
    }, {
      name: 'score',
      config: {},
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(score)
    }];

    for (const field of fields) {
      field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDisplayProcessor)({
        field,
        theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.theme2
      });
    }

    return {
      body: {
        fields,
        length: kind.length
      }
    };
  }

}

function shouldKeep(filter, doc, index) {
  if (filter.tags) {
    var _doc$tags;

    const tags = (_doc$tags = doc.tags) === null || _doc$tags === void 0 ? void 0 : _doc$tags.get(index);

    if (!(tags !== null && tags !== void 0 && tags.length)) {
      return false;
    }

    for (const t of filter.tags) {
      if (!tags.includes(t)) {
        return false;
      }
    }
  }

  let keep = true; // Any is OK

  if (filter.datasource) {
    var _doc$datasource;

    keep = false;
    const dss = (_doc$datasource = doc.datasource) === null || _doc$datasource === void 0 ? void 0 : _doc$datasource.get(index);

    if (dss) {
      for (const ds of dss) {
        if (ds.uid === filter.datasource) {
          keep = true;
          break;
        }
      }
    }
  }

  return keep;
}

function getInputDoc(kind, frame) {
  const input = {
    kind,
    index: 0
  };

  for (const field of frame.fields) {
    switch (field.name) {
      case 'name':
      case 'Name':
        input.name = field.values;
        break;

      case 'Description':
      case 'Description':
        input.description = field.values;
        break;

      case 'url':
      case 'URL':
        input.url = field.values;
        break;

      case 'uid':
      case 'UID':
        input.uid = field.values;
        break;

      case 'id':
      case 'ID':
        input.id = field.values;
        break;

      case 'Tags':
      case 'tags':
        input.tags = field.values;
        break;

      case 'DashboardID':
      case 'dashboardID':
        input.dashboardID = field.values;
        break;

      case 'Type':
      case 'type':
        input.type = field.values;
        break;

      case 'folderID':
      case 'FolderID':
        input.folder = field.values;
        break;

      case 'datasource':
      case 'dsList':
      case 'DSList':
        input.datasource = field.values;
        break;
    }
  }

  return input;
}

/***/ }),

/***/ "./public/app/features/search/service/searcher.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGrafanaSearcher": () => (/* binding */ getGrafanaSearcher)
/* harmony export */ });
/* harmony import */ var _minisearcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/search/service/minisearcher.ts");

let searcher = undefined;
function getGrafanaSearcher() {
  if (!searcher) {
    searcher = new _minisearcher__WEBPACK_IMPORTED_MODULE_0__.MiniSearcher();
  }

  return searcher;
}

/***/ }),

/***/ "./public/app/features/search/service/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/app/plugins/datasource/grafana/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaAnnotationType": () => (/* binding */ GrafanaAnnotationType),
/* harmony export */   "GrafanaQueryType": () => (/* binding */ GrafanaQueryType),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
//----------------------------------------------
// Query
//----------------------------------------------
let GrafanaQueryType;

(function (GrafanaQueryType) {
  GrafanaQueryType["LiveMeasurements"] = "measurements";
  GrafanaQueryType["Annotations"] = "annotations";
  GrafanaQueryType["RandomWalk"] = "randomWalk";
  GrafanaQueryType["List"] = "list";
  GrafanaQueryType["Read"] = "read";
  GrafanaQueryType["Search"] = "search";
})(GrafanaQueryType || (GrafanaQueryType = {}));

const defaultQuery = {
  refId: 'A',
  queryType: GrafanaQueryType.RandomWalk
}; //----------------------------------------------
// Annotations
//----------------------------------------------

let GrafanaAnnotationType;

(function (GrafanaAnnotationType) {
  GrafanaAnnotationType["Dashboard"] = "dashboard";
  GrafanaAnnotationType["Tags"] = "tags";
})(GrafanaAnnotationType || (GrafanaAnnotationType = {}));

/***/ }),

/***/ "./.yarn/cache/minisearch-npm-5.0.0-beta1-42ec5b533f-7c5ba8b2d1.zip/node_modules/minisearch/dist/es5m/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniSearch)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @ignore */
var ENTRIES = 'ENTRIES';
/** @ignore */
var KEYS = 'KEYS';
/** @ignore */
var VALUES = 'VALUES';
/** @ignore */
var LEAF = '';
/**
 * @private
 */
var TreeIterator = /** @class */ (function () {
    function TreeIterator(set, type) {
        var node = set._tree;
        var keys = Array.from(node.keys());
        this.set = set;
        this._type = type;
        this._path = keys.length > 0 ? [{ node: node, keys: keys }] : [];
    }
    TreeIterator.prototype.next = function () {
        var value = this.dive();
        this.backtrack();
        return value;
    };
    TreeIterator.prototype.dive = function () {
        if (this._path.length === 0) {
            return { done: true, value: undefined };
        }
        var _a = last$1(this._path), node = _a.node, keys = _a.keys;
        if (last$1(keys) === LEAF) {
            return { done: false, value: this.result() };
        }
        var child = node.get(last$1(keys));
        this._path.push({ node: child, keys: Array.from(child.keys()) });
        return this.dive();
    };
    TreeIterator.prototype.backtrack = function () {
        if (this._path.length === 0) {
            return;
        }
        var keys = last$1(this._path).keys;
        keys.pop();
        if (keys.length > 0) {
            return;
        }
        this._path.pop();
        this.backtrack();
    };
    TreeIterator.prototype.key = function () {
        return this.set._prefix + this._path
            .map(function (_a) {
            var keys = _a.keys;
            return last$1(keys);
        })
            .filter(function (key) { return key !== LEAF; })
            .join('');
    };
    TreeIterator.prototype.value = function () {
        return last$1(this._path).node.get(LEAF);
    };
    TreeIterator.prototype.result = function () {
        switch (this._type) {
            case VALUES: return this.value();
            case KEYS: return this.key();
            default: return [this.key(), this.value()];
        }
    };
    TreeIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return TreeIterator;
}());
var last$1 = function (array) {
    return array[array.length - 1];
};

/**
 * @ignore
 */
var fuzzySearch = function (node, query, maxDistance) {
    var results = new Map();
    if (query === undefined)
        return results;
    // Number of columns in the Levenshtein matrix.
    var n = query.length + 1;
    // Matching terms can never be longer than N + maxDistance.
    var m = n + maxDistance;
    // Fill first matrix row and column with numbers: 0 1 2 3 ...
    var matrix = new Uint8Array(m * n).fill(maxDistance + 1);
    for (var j = 0; j < n; ++j)
        matrix[j] = j;
    for (var i = 1; i < m; ++i)
        matrix[i * n] = i;
    recurse(node, query, maxDistance, results, matrix, 1, n, '');
    return results;
};
// Modified version of http://stevehanov.ca/blog/?id=114
// This builds a Levenshtein matrix for a given query and continuously updates
// it for nodes in the radix tree that fall within the given maximum edit
// distance. Keeping the same matrix around is beneficial especially for larger
// edit distances.
//
//           k   a   t   e   <-- query
//       0   1   2   3   4
//   c   1   1   2   3   4
//   a   2   2   1   2   3
//   t   3   3   2   1  [2]  <-- edit distance
//   ^
//   ^ term in radix tree, rows are added and removed as needed
var recurse = function (node, query, maxDistance, results, matrix, m, n, prefix) {
    var e_1, _a;
    var offset = m * n;
    try {
        key: for (var _b = __values(node.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            if (key === LEAF) {
                // We've reached a leaf node. Check if the edit distance acceptable and
                // store the result if it is.
                var distance = matrix[offset - 1];
                if (distance <= maxDistance) {
                    results.set(prefix, [node.get(key), distance]);
                }
            }
            else {
                // Iterate over all characters in the key. Update the Levenshtein matrix
                // and check if the minimum distance in the last row is still within the
                // maximum edit distance. If it is, we can recurse over all child nodes.
                var i = m;
                for (var pos = 0; pos < key.length; ++pos, ++i) {
                    var char = key[pos];
                    var thisRowOffset = n * i;
                    var prevRowOffset = thisRowOffset - n;
                    // Set the first column based on the previous row, and initialize the
                    // minimum distance in the current row.
                    var minDistance = matrix[thisRowOffset];
                    var jmin = Math.max(0, i - maxDistance - 1);
                    var jmax = Math.min(n - 1, i + maxDistance);
                    // Iterate over remaining columns (characters in the query).
                    for (var j = jmin; j < jmax; ++j) {
                        var different = char !== query[j];
                        // It might make sense to only read the matrix positions used for
                        // deletion/insertion if the characters are different. But we want to
                        // avoid conditional reads for performance reasons.
                        var rpl = matrix[prevRowOffset + j] + +different;
                        var del = matrix[prevRowOffset + j + 1] + 1;
                        var ins = matrix[thisRowOffset + j] + 1;
                        var dist = matrix[thisRowOffset + j + 1] = Math.min(rpl, del, ins);
                        if (dist < minDistance)
                            minDistance = dist;
                    }
                    // Because distance will never decrease, we can stop. There will be no
                    // matching child nodes.
                    if (minDistance > maxDistance) {
                        continue key;
                    }
                }
                recurse(node.get(key), query, maxDistance, results, matrix, i, n, prefix + key);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};

/**
 * A class implementing the same interface as a standard JavaScript
 * [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 * with string keys, but adding support for efficiently searching entries with
 * prefix or fuzzy search. This class is used internally by [[MiniSearch]] as
 * the inverted index data structure. The implementation is a radix tree
 * (compressed prefix tree).
 *
 * Since this class can be of general utility beyond _MiniSearch_, it is
 * exported by the `minisearch` package and can be imported (or required) as
 * `minisearch/SearchableMap`.
 *
 * @typeParam T  The type of the values stored in the map.
 */
var SearchableMap = /** @class */ (function () {
    /**
     * The constructor is normally called without arguments, creating an empty
     * map. In order to create a [[SearchableMap]] from an iterable or from an
     * object, check [[SearchableMap.from]] and [[SearchableMap.fromObject]].
     *
     * The constructor arguments are for internal use, when creating derived
     * mutable views of a map at a prefix.
     */
    function SearchableMap(tree, prefix) {
        if (tree === void 0) { tree = new Map(); }
        if (prefix === void 0) { prefix = ''; }
        this._size = undefined;
        this._tree = tree;
        this._prefix = prefix;
    }
    /**
     * Creates and returns a mutable view of this [[SearchableMap]], containing only
     * entries that share the given prefix.
     *
     * ### Usage:
     *
     * ```javascript
     * let map = new SearchableMap()
     * map.set("unicorn", 1)
     * map.set("universe", 2)
     * map.set("university", 3)
     * map.set("unique", 4)
     * map.set("hello", 5)
     *
     * let uni = map.atPrefix("uni")
     * uni.get("unique") // => 4
     * uni.get("unicorn") // => 1
     * uni.get("hello") // => undefined
     *
     * let univer = map.atPrefix("univer")
     * univer.get("unique") // => undefined
     * univer.get("universe") // => 2
     * univer.get("university") // => 3
     * ```
     *
     * @param prefix  The prefix
     * @return A [[SearchableMap]] representing a mutable view of the original Map at the given prefix
     */
    SearchableMap.prototype.atPrefix = function (prefix) {
        var e_1, _a;
        if (!prefix.startsWith(this._prefix)) {
            throw new Error('Mismatched prefix');
        }
        var _b = __read(trackDown(this._tree, prefix.slice(this._prefix.length)), 2), node = _b[0], path = _b[1];
        if (node === undefined) {
            var _c = __read(last(path), 2), parentNode = _c[0], key = _c[1];
            try {
                for (var _d = __values(parentNode.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var k = _e.value;
                    if (k !== LEAF && k.startsWith(key)) {
                        var node_1 = new Map();
                        node_1.set(k.slice(key.length), parentNode.get(k));
                        return new SearchableMap(node_1, prefix);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return new SearchableMap(node, prefix);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
     */
    SearchableMap.prototype.clear = function () {
        this._size = undefined;
        this._tree.clear();
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
     * @param key  Key to delete
     */
    SearchableMap.prototype.delete = function (key) {
        this._size = undefined;
        return remove(this._tree, key);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
     * @return An iterator iterating through `[key, value]` entries.
     */
    SearchableMap.prototype.entries = function () {
        return new TreeIterator(this, ENTRIES);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
     * @param fn  Iteration function
     */
    SearchableMap.prototype.forEach = function (fn) {
        var e_2, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                fn(key, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * Returns a Map of all the entries that have a key within the given edit
     * distance from the search key. The keys of the returned Map are the matching
     * keys, while the values are two-element arrays where the first element is
     * the value associated to the key, and the second is the edit distance of the
     * key to the search key.
     *
     * ### Usage:
     *
     * ```javascript
     * let map = new SearchableMap()
     * map.set('hello', 'world')
     * map.set('hell', 'yeah')
     * map.set('ciao', 'mondo')
     *
     * // Get all entries that match the key 'hallo' with a maximum edit distance of 2
     * map.fuzzyGet('hallo', 2)
     * // => Map(2) { 'hello' => ['world', 1], 'hell' => ['yeah', 2] }
     *
     * // In the example, the "hello" key has value "world" and edit distance of 1
     * // (change "e" to "a"), the key "hell" has value "yeah" and edit distance of 2
     * // (change "e" to "a", delete "o")
     * ```
     *
     * @param key  The search key
     * @param maxEditDistance  The maximum edit distance (Levenshtein)
     * @return A Map of the matching keys to their value and edit distance
     */
    SearchableMap.prototype.fuzzyGet = function (key, maxEditDistance) {
        return fuzzySearch(this._tree, key, maxEditDistance);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
     * @param key  Key to get
     * @return Value associated to the key, or `undefined` if the key is not
     * found.
     */
    SearchableMap.prototype.get = function (key) {
        var node = lookup(this._tree, key);
        return node !== undefined ? node.get(LEAF) : undefined;
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
     * @param key  Key
     * @return True if the key is in the map, false otherwise
     */
    SearchableMap.prototype.has = function (key) {
        var node = lookup(this._tree, key);
        return node !== undefined && node.has(LEAF);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
     * @return An `Iterable` iterating through keys
     */
    SearchableMap.prototype.keys = function () {
        return new TreeIterator(this, KEYS);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
     * @param key  Key to set
     * @param value  Value to associate to the key
     * @return The [[SearchableMap]] itself, to allow chaining
     */
    SearchableMap.prototype.set = function (key, value) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        var node = createPath(this._tree, key);
        node.set(LEAF, value);
        return this;
    };
    Object.defineProperty(SearchableMap.prototype, "size", {
        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
         */
        get: function () {
            if (this._size) {
                return this._size;
            }
            /** @ignore */
            this._size = 0;
            var iter = this.entries();
            while (!iter.next().done)
                this._size += 1;
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Updates the value at the given key using the provided function. The function
     * is called with the current value at the key, and its return value is used as
     * the new value to be set.
     *
     * ### Example:
     *
     * ```javascript
     * // Increment the current value by one
     * searchableMap.update('somekey', (currentValue) => currentValue == null ? 0 : currentValue + 1)
     * ```
     *
     * If the value at the given key is or will be an object, it might not require
     * re-assignment. In that case it is better to use `fetch()`, because it is
     * faster.
     *
     * @param key  The key to update
     * @param fn  The function used to compute the new value from the current one
     * @return The [[SearchableMap]] itself, to allow chaining
     */
    SearchableMap.prototype.update = function (key, fn) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        var node = createPath(this._tree, key);
        node.set(LEAF, fn(node.get(LEAF)));
        return this;
    };
    /**
     * Fetches the value of the given key. If the value does not exist, calls the
     * given function to create a new value, which is inserted at the given key
     * and subsequently returned.
     *
     * ### Example:
     *
     * ```javascript
     * const map = searchableMap.fetch('somekey', () => new Map())
     * map.set('foo', 'bar')
     * ```
     *
     * @param key  The key to update
     * @param defaultValue  A function that creates a new value if the key does not exist
     * @return The existing or new value at the given key
     */
    SearchableMap.prototype.fetch = function (key, initial) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        var node = createPath(this._tree, key);
        var value = node.get(LEAF);
        if (value === undefined) {
            node.set(LEAF, value = initial());
        }
        return value;
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
     * @return An `Iterable` iterating through values.
     */
    SearchableMap.prototype.values = function () {
        return new TreeIterator(this, VALUES);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator
     */
    SearchableMap.prototype[Symbol.iterator] = function () {
        return this.entries();
    };
    /**
     * Creates a [[SearchableMap]] from an `Iterable` of entries
     *
     * @param entries  Entries to be inserted in the [[SearchableMap]]
     * @return A new [[SearchableMap]] with the given entries
     */
    SearchableMap.from = function (entries) {
        var e_3, _a;
        var tree = new SearchableMap();
        try {
            for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                var _b = __read(entries_1_1.value, 2), key = _b[0], value = _b[1];
                tree.set(key, value);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return tree;
    };
    /**
     * Creates a [[SearchableMap]] from the iterable properties of a JavaScript object
     *
     * @param object  Object of entries for the [[SearchableMap]]
     * @return A new [[SearchableMap]] with the given entries
     */
    SearchableMap.fromObject = function (object) {
        return SearchableMap.from(Object.entries(object));
    };
    return SearchableMap;
}());
var trackDown = function (tree, key, path) {
    var e_4, _a;
    if (path === void 0) { path = []; }
    if (key.length === 0 || tree == null) {
        return [tree, path];
    }
    try {
        for (var _b = __values(tree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var k = _c.value;
            if (k !== LEAF && key.startsWith(k)) {
                path.push([tree, k]); // performance: update in place
                return trackDown(tree.get(k), key.slice(k.length), path);
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
    path.push([tree, key]); // performance: update in place
    return trackDown(undefined, '', path);
};
var lookup = function (tree, key) {
    var e_5, _a;
    if (key.length === 0 || tree == null) {
        return tree;
    }
    try {
        for (var _b = __values(tree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var k = _c.value;
            if (k !== LEAF && key.startsWith(k)) {
                return lookup(tree.get(k), key.slice(k.length));
            }
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
    }
};
// Create a path in the radix tree for the given key, and returns the deepest
// node. This function is in the hot path for indexing. It avoids unnecessary
// string operations and recursion for performance.
var createPath = function (node, key) {
    var e_6, _a;
    var keyLength = key.length;
    outer: for (var pos = 0; node && pos < keyLength;) {
        try {
            for (var _b = (e_6 = void 0, __values(node.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var k = _c.value;
                // Check whether this key is a candidate: the first characters must match.
                if (k !== LEAF && key[pos] === k[0]) {
                    var len = Math.min(keyLength - pos, k.length);
                    // Advance offset to the point where key and k no longer match.
                    var offset = 1;
                    while (offset < len && key[pos + offset] === k[offset])
                        ++offset;
                    var child_1 = node.get(k);
                    if (offset === k.length) {
                        // The existing key is shorter than the key we need to create.
                        node = child_1;
                    }
                    else {
                        // Partial match: we need to insert an intermediate node to contain
                        // both the existing subtree and the new node.
                        var intermediate = new Map();
                        intermediate.set(k.slice(offset), child_1);
                        node.set(key.slice(pos, pos + offset), intermediate);
                        node.delete(k);
                        node = intermediate;
                    }
                    pos += offset;
                    continue outer;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        // Create a final child node to contain the final suffix of the key.
        var child = new Map();
        node.set(key.slice(pos), child);
        return child;
    }
    return node;
};
var remove = function (tree, key) {
    var _a = __read(trackDown(tree, key), 2), node = _a[0], path = _a[1];
    if (node === undefined) {
        return;
    }
    node.delete(LEAF);
    if (node.size === 0) {
        cleanup(path);
    }
    else if (node.size === 1) {
        var _b = __read(node.entries().next().value, 2), key_1 = _b[0], value = _b[1];
        merge(path, key_1, value);
    }
};
var cleanup = function (path) {
    if (path.length === 0) {
        return;
    }
    var _a = __read(last(path), 2), node = _a[0], key = _a[1];
    node.delete(key);
    if (node.size === 0) {
        cleanup(path.slice(0, -1));
    }
    else if (node.size === 1) {
        var _b = __read(node.entries().next().value, 2), key_2 = _b[0], value = _b[1];
        if (key_2 !== LEAF) {
            merge(path.slice(0, -1), key_2, value);
        }
    }
};
var merge = function (path, key, value) {
    if (path.length === 0) {
        return;
    }
    var _a = __read(last(path), 2), node = _a[0], nodeKey = _a[1];
    node.set(nodeKey + key, value);
    node.delete(nodeKey);
};
var last = function (array) {
    return array[array.length - 1];
};

var _a;
var OR = 'or';
var AND = 'and';
var AND_NOT = 'and_not';
/**
 * [[MiniSearch]] is the main entrypoint class, implementing a full-text search
 * engine in memory.
 *
 * @typeParam T  The type of the documents being indexed.
 *
 * ### Basic example:
 *
 * ```javascript
 * const documents = [
 *   {
 *     id: 1,
 *     title: 'Moby Dick',
 *     text: 'Call me Ishmael. Some years ago...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 2,
 *     title: 'Zen and the Art of Motorcycle Maintenance',
 *     text: 'I can see by my watch...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 3,
 *     title: 'Neuromancer',
 *     text: 'The sky above the port was...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 4,
 *     title: 'Zen and the Art of Archery',
 *     text: 'At first sight it must seem...',
 *     category: 'non-fiction'
 *   },
 *   // ...and more
 * ]
 *
 * // Create a search engine that indexes the 'title' and 'text' fields for
 * // full-text search. Search results will include 'title' and 'category' (plus the
 * // id field, that is always stored and returned)
 * const miniSearch = new MiniSearch({
 *   fields: ['title', 'text'],
 *   storeFields: ['title', 'category']
 * })
 *
 * // Add documents to the index
 * miniSearch.addAll(documents)
 *
 * // Search for documents:
 * let results = miniSearch.search('zen art motorcycle')
 * // => [
 * //   { id: 2, title: 'Zen and the Art of Motorcycle Maintenance', category: 'fiction', score: 2.77258 },
 * //   { id: 4, title: 'Zen and the Art of Archery', category: 'non-fiction', score: 1.38629 }
 * // ]
 * ```
 */
var MiniSearch = /** @class */ (function () {
    /**
     * @param options  Configuration options
     *
     * ### Examples:
     *
     * ```javascript
     * // Create a search engine that indexes the 'title' and 'text' fields of your
     * // documents:
     * const miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * ```
     *
     * ### ID Field:
     *
     * ```javascript
     * // Your documents are assumed to include a unique 'id' field, but if you want
     * // to use a different field for document identification, you can set the
     * // 'idField' option:
     * const miniSearch = new MiniSearch({ idField: 'key', fields: ['title', 'text'] })
     * ```
     *
     * ### Options and defaults:
     *
     * ```javascript
     * // The full set of options (here with their default value) is:
     * const miniSearch = new MiniSearch({
     *   // idField: field that uniquely identifies a document
     *   idField: 'id',
     *
     *   // extractField: function used to get the value of a field in a document.
     *   // By default, it assumes the document is a flat object with field names as
     *   // property keys and field values as string property values, but custom logic
     *   // can be implemented by setting this option to a custom extractor function.
     *   extractField: (document, fieldName) => document[fieldName],
     *
     *   // tokenize: function used to split fields into individual terms. By
     *   // default, it is also used to tokenize search queries, unless a specific
     *   // `tokenize` search option is supplied. When tokenizing an indexed field,
     *   // the field name is passed as the second argument.
     *   tokenize: (string, _fieldName) => string.split(SPACE_OR_PUNCTUATION),
     *
     *   // processTerm: function used to process each tokenized term before
     *   // indexing. It can be used for stemming and normalization. Return a falsy
     *   // value in order to discard a term. By default, it is also used to process
     *   // search queries, unless a specific `processTerm` option is supplied as a
     *   // search option. When processing a term from a indexed field, the field
     *   // name is passed as the second argument.
     *   processTerm: (term, _fieldName) => term.toLowerCase(),
     *
     *   // searchOptions: default search options, see the `search` method for
     *   // details
     *   searchOptions: undefined,
     *
     *   // fields: document fields to be indexed. Mandatory, but not set by default
     *   fields: undefined
     *
     *   // storeFields: document fields to be stored and returned as part of the
     *   // search results.
     *   storeFields: []
     * })
     * ```
     */
    function MiniSearch(options) {
        if ((options === null || options === void 0 ? void 0 : options.fields) == null) {
            throw new Error('MiniSearch: option "fields" must be provided');
        }
        this._options = __assign(__assign(__assign({}, defaultOptions), options), { searchOptions: __assign(__assign({}, defaultSearchOptions), (options.searchOptions || {})) });
        this._index = new SearchableMap();
        this._documentCount = 0;
        this._documentIds = new Map();
        // Fields are defined during initialization, don't change, are few in
        // number, rarely need iterating over, and have string keys. Therefore in
        // this case an object is a better candidate than a Map to store the mapping
        // from field key to ID.
        this._fieldIds = {};
        this._fieldLength = new Map();
        this._avgFieldLength = [];
        this._nextId = 0;
        this._storedFields = new Map();
        this.addFields(this._options.fields);
    }
    /**
     * Adds a document to the index
     *
     * @param document  The document to be indexed
     */
    MiniSearch.prototype.add = function (document) {
        var e_1, _a, e_2, _b;
        var _c = this._options, extractField = _c.extractField, tokenize = _c.tokenize, processTerm = _c.processTerm, fields = _c.fields, idField = _c.idField;
        var id = extractField(document, idField);
        if (id == null) {
            throw new Error("MiniSearch: document does not have ID field \"".concat(idField, "\""));
        }
        var shortDocumentId = this.addDocumentId(id);
        this.saveStoredFields(shortDocumentId, document);
        try {
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                var fieldValue = extractField(document, field);
                if (fieldValue == null)
                    continue;
                var tokens = tokenize(fieldValue.toString(), field);
                var fieldId = this._fieldIds[field];
                var uniqueTerms = new Set(tokens).size;
                this.addFieldLength(shortDocumentId, fieldId, this._documentCount - 1, uniqueTerms);
                try {
                    for (var tokens_1 = (e_2 = void 0, __values(tokens)), tokens_1_1 = tokens_1.next(); !tokens_1_1.done; tokens_1_1 = tokens_1.next()) {
                        var term = tokens_1_1.value;
                        var processedTerm = processTerm(term, field);
                        if (processedTerm) {
                            this.addTerm(fieldId, shortDocumentId, processedTerm);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (tokens_1_1 && !tokens_1_1.done && (_b = tokens_1.return)) _b.call(tokens_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Adds all the given documents to the index
     *
     * @param documents  An array of documents to be indexed
     */
    MiniSearch.prototype.addAll = function (documents) {
        var e_3, _a;
        try {
            for (var documents_1 = __values(documents), documents_1_1 = documents_1.next(); !documents_1_1.done; documents_1_1 = documents_1.next()) {
                var document_1 = documents_1_1.value;
                this.add(document_1);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (documents_1_1 && !documents_1_1.done && (_a = documents_1.return)) _a.call(documents_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * Adds all the given documents to the index asynchronously.
     *
     * Returns a promise that resolves (to `undefined`) when the indexing is done.
     * This method is useful when index many documents, to avoid blocking the main
     * thread. The indexing is performed asynchronously and in chunks.
     *
     * @param documents  An array of documents to be indexed
     * @param options  Configuration options
     * @return A promise resolving to `undefined` when the indexing is done
     */
    MiniSearch.prototype.addAllAsync = function (documents, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var _a = options.chunkSize, chunkSize = _a === void 0 ? 10 : _a;
        var acc = { chunk: [], promise: Promise.resolve() };
        var _b = documents.reduce(function (_a, document, i) {
            var chunk = _a.chunk, promise = _a.promise;
            chunk.push(document);
            if ((i + 1) % chunkSize === 0) {
                return {
                    chunk: [],
                    promise: promise
                        .then(function () { return new Promise(function (resolve) { return setTimeout(resolve, 0); }); })
                        .then(function () { return _this.addAll(chunk); })
                };
            }
            else {
                return { chunk: chunk, promise: promise };
            }
        }, acc), chunk = _b.chunk, promise = _b.promise;
        return promise.then(function () { return _this.addAll(chunk); });
    };
    /**
     * Removes the given document from the index.
     *
     * The document to delete must NOT have changed between indexing and deletion,
     * otherwise the index will be corrupted. Therefore, when reindexing a document
     * after a change, the correct order of operations is:
     *
     *   1. remove old version
     *   2. apply changes
     *   3. index new version
     *
     * @param document  The document to be removed
     */
    MiniSearch.prototype.remove = function (document) {
        var e_4, _a, e_5, _b, e_6, _c;
        var _d = this._options, tokenize = _d.tokenize, processTerm = _d.processTerm, extractField = _d.extractField, fields = _d.fields, idField = _d.idField;
        var id = extractField(document, idField);
        if (id == null) {
            throw new Error("MiniSearch: document does not have ID field \"".concat(idField, "\""));
        }
        try {
            for (var _e = __values(this._documentIds), _f = _e.next(); !_f.done; _f = _e.next()) {
                var _g = __read(_f.value, 2), shortId = _g[0], longId = _g[1];
                if (id === longId) {
                    try {
                        for (var fields_2 = (e_5 = void 0, __values(fields)), fields_2_1 = fields_2.next(); !fields_2_1.done; fields_2_1 = fields_2.next()) {
                            var field = fields_2_1.value;
                            var fieldValue = extractField(document, field);
                            if (fieldValue == null)
                                continue;
                            var tokens = tokenize(fieldValue.toString(), field);
                            var fieldId = this._fieldIds[field];
                            var uniqueTerms = new Set(tokens).size;
                            this.removeFieldLength(shortId, fieldId, this._documentCount, uniqueTerms);
                            try {
                                for (var tokens_2 = (e_6 = void 0, __values(tokens)), tokens_2_1 = tokens_2.next(); !tokens_2_1.done; tokens_2_1 = tokens_2.next()) {
                                    var term = tokens_2_1.value;
                                    var processedTerm = processTerm(term, field);
                                    if (processedTerm) {
                                        this.removeTerm(fieldId, shortId, processedTerm);
                                    }
                                }
                            }
                            catch (e_6_1) { e_6 = { error: e_6_1 }; }
                            finally {
                                try {
                                    if (tokens_2_1 && !tokens_2_1.done && (_c = tokens_2.return)) _c.call(tokens_2);
                                }
                                finally { if (e_6) throw e_6.error; }
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (fields_2_1 && !fields_2_1.done && (_b = fields_2.return)) _b.call(fields_2);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    this._storedFields.delete(shortId);
                    this._documentIds.delete(shortId);
                    this._fieldLength.delete(shortId);
                    this._documentCount -= 1;
                    return;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
            }
            finally { if (e_4) throw e_4.error; }
        }
        throw new Error("MiniSearch: cannot remove document with ID ".concat(id, ": it is not in the index"));
    };
    /**
     * Removes all the given documents from the index. If called with no arguments,
     * it removes _all_ documents from the index.
     *
     * @param documents  The documents to be removed. If this argument is omitted,
     * all documents are removed. Note that, for removing all documents, it is
     * more efficient to call this method with no arguments than to pass all
     * documents.
     */
    MiniSearch.prototype.removeAll = function (documents) {
        var e_7, _a;
        if (documents) {
            try {
                for (var documents_2 = __values(documents), documents_2_1 = documents_2.next(); !documents_2_1.done; documents_2_1 = documents_2.next()) {
                    var document_2 = documents_2_1.value;
                    this.remove(document_2);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (documents_2_1 && !documents_2_1.done && (_a = documents_2.return)) _a.call(documents_2);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        else if (arguments.length > 0) {
            throw new Error('Expected documents to be present. Omit the argument to remove all documents.');
        }
        else {
            this._index = new SearchableMap();
            this._documentCount = 0;
            this._documentIds = new Map();
            this._fieldLength = new Map();
            this._avgFieldLength = [];
            this._storedFields = new Map();
            this._nextId = 0;
        }
    };
    /**
     * Search for documents matching the given search query.
     *
     * The result is a list of scored document IDs matching the query, sorted by
     * descending score, and each including data about which terms were matched and
     * in which fields.
     *
     * ### Basic usage:
     *
     * ```javascript
     * // Search for "zen art motorcycle" with default options: terms have to match
     * // exactly, and individual terms are joined with OR
     * miniSearch.search('zen art motorcycle')
     * // => [ { id: 2, score: 2.77258, match: { ... } }, { id: 4, score: 1.38629, match: { ... } } ]
     * ```
     *
     * ### Restrict search to specific fields:
     *
     * ```javascript
     * // Search only in the 'title' field
     * miniSearch.search('zen', { fields: ['title'] })
     * ```
     *
     * ### Field boosting:
     *
     * ```javascript
     * // Boost a field
     * miniSearch.search('zen', { boost: { title: 2 } })
     * ```
     *
     * ### Prefix search:
     *
     * ```javascript
     * // Search for "moto" with prefix search (it will match documents
     * // containing terms that start with "moto" or "neuro")
     * miniSearch.search('moto neuro', { prefix: true })
     * ```
     *
     * ### Fuzzy search:
     *
     * ```javascript
     * // Search for "ismael" with fuzzy search (it will match documents containing
     * // terms similar to "ismael", with a maximum edit distance of 0.2 term.length
     * // (rounded to nearest integer)
     * miniSearch.search('ismael', { fuzzy: 0.2 })
     * ```
     *
     * ### Combining strategies:
     *
     * ```javascript
     * // Mix of exact match, prefix search, and fuzzy search
     * miniSearch.search('ismael mob', {
     *  prefix: true,
     *  fuzzy: 0.2
     * })
     * ```
     *
     * ### Advanced prefix and fuzzy search:
     *
     * ```javascript
     * // Perform fuzzy and prefix search depending on the search term. Here
     * // performing prefix and fuzzy search only on terms longer than 3 characters
     * miniSearch.search('ismael mob', {
     *  prefix: term => term.length > 3
     *  fuzzy: term => term.length > 3 ? 0.2 : null
     * })
     * ```
     *
     * ### Combine with AND:
     *
     * ```javascript
     * // Combine search terms with AND (to match only documents that contain both
     * // "motorcycle" and "art")
     * miniSearch.search('motorcycle art', { combineWith: 'AND' })
     * ```
     *
     * ### Combine with AND_NOT:
     *
     * There is also an AND_NOT combinator, that finds documents that match the
     * first term, but do not match any of the other terms. This combinator is
     * rarely useful with simple queries, and is meant to be used with advanced
     * query combinations (see later for more details).
     *
     * ### Filtering results:
     *
     * ```javascript
     * // Filter only results in the 'fiction' category (assuming that 'category'
     * // is a stored field)
     * miniSearch.search('motorcycle art', {
     *   filter: (result) => result.category === 'fiction'
     * })
     * ```
     *
     * ### Advanced combination of queries:
     *
     * It is possible to combine different subqueries with OR, AND, and AND_NOT,
     * and even with different search options, by passing a query expression
     * tree object as the first argument, instead of a string.
     *
     * ```javascript
     * // Search for documents that contain "zen" and ("motorcycle" or "archery")
     * miniSearch.search({
     *   combineWith: 'AND',
     *   queries: [
     *     'zen',
     *     {
     *       combineWith: 'OR',
     *       queries: ['motorcycle', 'archery']
     *     }
     *   ]
     * })
     *
     * // Search for documents that contain ("apple" or "pear") but not "juice" and
     * // not "tree"
     * miniSearch.search({
     *   combineWith: 'AND_NOT',
     *   queries: [
     *     {
     *       combineWith: 'OR',
     *       queries: ['apple', 'pear']
     *     },
     *     'juice',
     *     'tree'
     *   ]
     * })
     * ```
     *
     * Each node in the expression tree can be either a string, or an object that
     * supports all `SearchOptions` fields, plus a `queries` array field for
     * subqueries.
     *
     * Note that, while this can become complicated to do by hand for complex or
     * deeply nested queries, it provides a formalized expression tree API for
     * external libraries that implement a parser for custom query languages.
     *
     * @param query  Search query
     * @param options  Search options. Each option, if not given, defaults to the corresponding value of `searchOptions` given to the constructor, or to the library default.
     */
    MiniSearch.prototype.search = function (query, searchOptions) {
        var e_8, _a;
        if (searchOptions === void 0) { searchOptions = {}; }
        var combinedResults = this.executeQuery(query, searchOptions);
        var results = [];
        try {
            for (var combinedResults_1 = __values(combinedResults), combinedResults_1_1 = combinedResults_1.next(); !combinedResults_1_1.done; combinedResults_1_1 = combinedResults_1.next()) {
                var _b = __read(combinedResults_1_1.value, 2), docId = _b[0], _c = _b[1], score = _c.score, terms = _c.terms, match = _c.match;
                // Final score takes into account the number of matching QUERY terms.
                // The end user will only receive the MATCHED terms.
                var quality = terms.length;
                var result = {
                    id: this._documentIds.get(docId),
                    score: score * quality,
                    terms: Object.keys(match),
                    match: match
                };
                Object.assign(result, this._storedFields.get(docId));
                if (searchOptions.filter == null || searchOptions.filter(result)) {
                    results.push(result);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (combinedResults_1_1 && !combinedResults_1_1.done && (_a = combinedResults_1.return)) _a.call(combinedResults_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        results.sort(byScore);
        return results;
    };
    /**
     * Provide suggestions for the given search query
     *
     * The result is a list of suggested modified search queries, derived from the
     * given search query, each with a relevance score, sorted by descending score.
     *
     * ### Basic usage:
     *
     * ```javascript
     * // Get suggestions for 'neuro':
     * miniSearch.autoSuggest('neuro')
     * // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 0.46240 } ]
     * ```
     *
     * ### Multiple words:
     *
     * ```javascript
     * // Get suggestions for 'zen ar':
     * miniSearch.autoSuggest('zen ar')
     * // => [
     * //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
     * //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
     * // ]
     * ```
     *
     * ### Fuzzy suggestions:
     *
     * ```javascript
     * // Correct spelling mistakes using fuzzy search:
     * miniSearch.autoSuggest('neromancer', { fuzzy: 0.2 })
     * // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 1.03998 } ]
     * ```
     *
     * ### Filtering:
     *
     * ```javascript
     * // Get suggestions for 'zen ar', but only within the 'fiction' category
     * // (assuming that 'category' is a stored field):
     * miniSearch.autoSuggest('zen ar', {
     *   filter: (result) => result.category === 'fiction'
     * })
     * // => [
     * //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
     * //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
     * // ]
     * ```
     *
     * @param queryString  Query string to be expanded into suggestions
     * @param options  Search options. The supported options and default values
     * are the same as for the `search` method, except that by default prefix
     * search is performed on the last term in the query.
     * @return  A sorted array of suggestions sorted by relevance score.
     */
    MiniSearch.prototype.autoSuggest = function (queryString, options) {
        var e_9, _a, e_10, _b;
        if (options === void 0) { options = {}; }
        options = __assign(__assign({}, defaultAutoSuggestOptions), options);
        var suggestions = new Map();
        try {
            for (var _c = __values(this.search(queryString, options)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = _d.value, score = _e.score, terms = _e.terms;
                var phrase = terms.join(' ');
                var suggestion = suggestions.get(phrase);
                if (suggestion != null) {
                    suggestion.score += score;
                    suggestion.count += 1;
                }
                else {
                    suggestions.set(phrase, { score: score, terms: terms, count: 1 });
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_9) throw e_9.error; }
        }
        var results = [];
        try {
            for (var suggestions_1 = __values(suggestions), suggestions_1_1 = suggestions_1.next(); !suggestions_1_1.done; suggestions_1_1 = suggestions_1.next()) {
                var _f = __read(suggestions_1_1.value, 2), suggestion = _f[0], _g = _f[1], score = _g.score, terms = _g.terms, count = _g.count;
                results.push({ suggestion: suggestion, terms: terms, score: score / count });
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (suggestions_1_1 && !suggestions_1_1.done && (_b = suggestions_1.return)) _b.call(suggestions_1);
            }
            finally { if (e_10) throw e_10.error; }
        }
        results.sort(byScore);
        return results;
    };
    Object.defineProperty(MiniSearch.prototype, "documentCount", {
        /**
         * Number of documents in the index
         */
        get: function () {
            return this._documentCount;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Deserializes a JSON index (serialized with `JSON.stringify(miniSearch)`)
     * and instantiates a MiniSearch instance. It should be given the same options
     * originally used when serializing the index.
     *
     * ### Usage:
     *
     * ```javascript
     * // If the index was serialized with:
     * let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * miniSearch.addAll(documents)
     *
     * const json = JSON.stringify(miniSearch)
     * // It can later be deserialized like this:
     * miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
     * ```
     *
     * @param json  JSON-serialized index
     * @param options  configuration options, same as the constructor
     * @return An instance of MiniSearch deserialized from the given JSON.
     */
    MiniSearch.loadJSON = function (json, options) {
        if (options == null) {
            throw new Error('MiniSearch: loadJSON should be given the same options used when serializing the index');
        }
        return MiniSearch.loadJS(JSON.parse(json), options);
    };
    /**
     * Returns the default value of an option. It will throw an error if no option
     * with the given name exists.
     *
     * @param optionName  Name of the option
     * @return The default value of the given option
     *
     * ### Usage:
     *
     * ```javascript
     * // Get default tokenizer
     * MiniSearch.getDefault('tokenize')
     *
     * // Get default term processor
     * MiniSearch.getDefault('processTerm')
     *
     * // Unknown options will throw an error
     * MiniSearch.getDefault('notExisting')
     * // => throws 'MiniSearch: unknown option "notExisting"'
     * ```
     */
    MiniSearch.getDefault = function (optionName) {
        if (defaultOptions.hasOwnProperty(optionName)) {
            return getOwnProperty(defaultOptions, optionName);
        }
        else {
            throw new Error("MiniSearch: unknown option \"".concat(optionName, "\""));
        }
    };
    /**
     * @ignore
     */
    MiniSearch.loadJS = function (js, options) {
        var e_11, _a, e_12, _b;
        var index = js.index, documentCount = js.documentCount, nextId = js.nextId, documentIds = js.documentIds, fieldIds = js.fieldIds, fieldLength = js.fieldLength, averageFieldLength = js.averageFieldLength, storedFields = js.storedFields, serializationVersion = js.serializationVersion;
        if (serializationVersion !== 1 && serializationVersion !== 2) {
            throw new Error('MiniSearch: cannot deserialize an index created with an incompatible version');
        }
        var miniSearch = new MiniSearch(options);
        miniSearch._documentCount = documentCount;
        miniSearch._nextId = nextId;
        miniSearch._documentIds = objectToNumericMap(documentIds);
        miniSearch._fieldIds = fieldIds;
        miniSearch._fieldLength = objectToNumericMap(fieldLength);
        miniSearch._avgFieldLength = averageFieldLength;
        miniSearch._storedFields = objectToNumericMap(storedFields);
        miniSearch._index = new SearchableMap();
        try {
            for (var index_1 = __values(index), index_1_1 = index_1.next(); !index_1_1.done; index_1_1 = index_1.next()) {
                var _c = __read(index_1_1.value, 2), term = _c[0], data = _c[1];
                var dataMap = new Map();
                try {
                    for (var _d = (e_12 = void 0, __values(Object.keys(data))), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var fieldId = _e.value;
                        var indexEntry = data[fieldId];
                        // Version 1 used to nest the index entry inside a field called ds
                        if (serializationVersion === 1) {
                            indexEntry = indexEntry.ds;
                        }
                        dataMap.set(parseInt(fieldId, 10), objectToNumericMap(indexEntry));
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
                miniSearch._index.set(term, dataMap);
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (index_1_1 && !index_1_1.done && (_a = index_1.return)) _a.call(index_1);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return miniSearch;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.executeQuery = function (query, searchOptions) {
        var _this = this;
        if (searchOptions === void 0) { searchOptions = {}; }
        if (typeof query !== 'string') {
            var options_1 = __assign(__assign(__assign({}, searchOptions), query), { queries: undefined });
            var results_1 = query.queries.map(function (subquery) { return _this.executeQuery(subquery, options_1); });
            return this.combineResults(results_1, query.combineWith);
        }
        var _a = this._options, tokenize = _a.tokenize, processTerm = _a.processTerm, globalSearchOptions = _a.searchOptions;
        var options = __assign(__assign({ tokenize: tokenize, processTerm: processTerm }, globalSearchOptions), searchOptions);
        var searchTokenize = options.tokenize, searchProcessTerm = options.processTerm;
        var terms = searchTokenize(query)
            .map(function (term) { return searchProcessTerm(term); })
            .filter(function (term) { return !!term; });
        var queries = terms.map(termToQuerySpec(options));
        var results = queries.map(function (query) { return _this.executeQuerySpec(query, options); });
        return this.combineResults(results, options.combineWith);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.executeQuerySpec = function (query, searchOptions) {
        var e_13, _a, e_14, _b;
        var options = __assign(__assign({}, this._options.searchOptions), searchOptions);
        var boosts = (options.fields || this._options.fields).reduce(function (boosts, field) {
            var _a;
            return (__assign(__assign({}, boosts), (_a = {}, _a[field] = getOwnProperty(boosts, field) || 1, _a)));
        }, options.boost || {});
        var boostDocument = options.boostDocument, weights = options.weights, maxFuzzy = options.maxFuzzy;
        var _c = __assign(__assign({}, defaultSearchOptions.weights), weights), fuzzyWeight = _c.fuzzy, prefixWeight = _c.prefix;
        var data = this._index.get(query.term);
        var results = this.termResults(query.term, query.term, 1, data, boosts, boostDocument);
        var prefixMatches;
        var fuzzyMatches;
        if (query.prefix) {
            prefixMatches = this._index.atPrefix(query.term);
        }
        if (query.fuzzy) {
            var fuzzy = (query.fuzzy === true) ? 0.2 : query.fuzzy;
            var maxDistance = fuzzy < 1 ? Math.min(maxFuzzy, Math.round(query.term.length * fuzzy)) : fuzzy;
            if (maxDistance)
                fuzzyMatches = this._index.fuzzyGet(query.term, maxDistance);
        }
        if (prefixMatches) {
            try {
                for (var prefixMatches_1 = __values(prefixMatches), prefixMatches_1_1 = prefixMatches_1.next(); !prefixMatches_1_1.done; prefixMatches_1_1 = prefixMatches_1.next()) {
                    var _d = __read(prefixMatches_1_1.value, 2), term = _d[0], data_1 = _d[1];
                    var distance = term.length - query.term.length;
                    if (!distance) {
                        continue;
                    } // Skip exact match.
                    // Delete the term from fuzzy results (if present) if it is also a
                    // prefix result. This entry will always be scored as a prefix result.
                    fuzzyMatches === null || fuzzyMatches === void 0 ? void 0 : fuzzyMatches.delete(term);
                    // Weight gradually approaches 0 as distance goes to infinity, with the
                    // weight for the hypothetical distance 0 being equal to prefixWeight.
                    // The rate of change is much lower than that of fuzzy matches to
                    // account for the fact that prefix matches stay more relevant than
                    // fuzzy matches for longer distances.
                    var weight = prefixWeight * term.length / (term.length + 0.3 * distance);
                    this.termResults(query.term, term, weight, data_1, boosts, boostDocument, results);
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (prefixMatches_1_1 && !prefixMatches_1_1.done && (_a = prefixMatches_1.return)) _a.call(prefixMatches_1);
                }
                finally { if (e_13) throw e_13.error; }
            }
        }
        if (fuzzyMatches) {
            try {
                for (var _e = __values(fuzzyMatches.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var term = _f.value;
                    var _g = __read(fuzzyMatches.get(term), 2), data_2 = _g[0], distance = _g[1];
                    if (!distance) {
                        continue;
                    } // Skip exact match.
                    // Weight gradually approaches 0 as distance goes to infinity, with the
                    // weight for the hypothetical distance 0 being equal to fuzzyWeight.
                    var weight = fuzzyWeight * term.length / (term.length + distance);
                    this.termResults(query.term, term, weight, data_2, boosts, boostDocument, results);
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_14) throw e_14.error; }
            }
        }
        return results;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.combineResults = function (results, combineWith) {
        if (combineWith === void 0) { combineWith = OR; }
        if (results.length === 0) {
            return new Map();
        }
        var operator = combineWith.toLowerCase();
        return results.reduce(combinators[operator]) || new Map();
    };
    /**
     * Allows serialization of the index to JSON, to possibly store it and later
     * deserialize it with `MiniSearch.loadJSON`.
     *
     * Normally one does not directly call this method, but rather call the
     * standard JavaScript `JSON.stringify()` passing the `MiniSearch` instance,
     * and JavaScript will internally call this method. Upon deserialization, one
     * must pass to `loadJSON` the same options used to create the original
     * instance that was serialized.
     *
     * ### Usage:
     *
     * ```javascript
     * // Serialize the index:
     * let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * miniSearch.addAll(documents)
     * const json = JSON.stringify(miniSearch)
     *
     * // Later, to deserialize it:
     * miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
     * ```
     *
     * @return A plain-object serializeable representation of the search index.
     */
    MiniSearch.prototype.toJSON = function () {
        var e_15, _a, e_16, _b;
        var index = [];
        try {
            for (var _c = __values(this._index), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), term = _e[0], fieldIndex = _e[1];
                var data = {};
                try {
                    for (var fieldIndex_1 = (e_16 = void 0, __values(fieldIndex)), fieldIndex_1_1 = fieldIndex_1.next(); !fieldIndex_1_1.done; fieldIndex_1_1 = fieldIndex_1.next()) {
                        var _f = __read(fieldIndex_1_1.value, 2), fieldId = _f[0], freqs = _f[1];
                        data[fieldId] = Object.fromEntries(freqs);
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (fieldIndex_1_1 && !fieldIndex_1_1.done && (_b = fieldIndex_1.return)) _b.call(fieldIndex_1);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
                index.push([term, data]);
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return {
            documentCount: this._documentCount,
            nextId: this._nextId,
            documentIds: Object.fromEntries(this._documentIds),
            fieldIds: this._fieldIds,
            fieldLength: Object.fromEntries(this._fieldLength),
            averageFieldLength: this._avgFieldLength,
            storedFields: Object.fromEntries(this._storedFields),
            index: index,
            serializationVersion: 2
        };
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.termResults = function (sourceTerm, derivedTerm, termWeight, fieldTermData, fieldBoosts, boostDocumentFn, results) {
        var e_17, _a, e_18, _b, _c;
        if (results === void 0) { results = new Map(); }
        if (fieldTermData == null)
            return results;
        try {
            for (var _d = __values(Object.keys(fieldBoosts)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var field = _e.value;
                var fieldBoost = fieldBoosts[field];
                var fieldId = this._fieldIds[field];
                var fieldTermFreqs = fieldTermData.get(fieldId);
                if (fieldTermFreqs == null)
                    continue;
                var matchingFields = fieldTermFreqs.size;
                var avgFieldLength = this._avgFieldLength[fieldId];
                try {
                    for (var _f = (e_18 = void 0, __values(fieldTermFreqs.keys())), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var docId = _g.value;
                        var docBoost = boostDocumentFn ? boostDocumentFn(this._documentIds.get(docId), derivedTerm) : 1;
                        if (!docBoost)
                            continue;
                        var termFreq = fieldTermFreqs.get(docId);
                        var fieldLength = this._fieldLength.get(docId)[fieldId];
                        // NOTE: The total number of fields is set to the number of documents
                        // `this._documentCount`. It could also make sense to use the number of
                        // documents where the current field is non-blank as a normalisation
                        // factor. This will make a difference in scoring if the field is rarely
                        // present. This is currently not supported, and may require further
                        // analysis to see if it is a valid use case.
                        var rawScore = calcBM25Score(termFreq, matchingFields, this._documentCount, fieldLength, avgFieldLength);
                        var weightedScore = termWeight * fieldBoost * docBoost * rawScore;
                        var result = results.get(docId);
                        if (result) {
                            result.score += weightedScore;
                            assignUniqueTerm(result.terms, sourceTerm);
                            var match = getOwnProperty(result.match, derivedTerm);
                            if (match) {
                                match.push(field);
                            }
                            else {
                                result.match[derivedTerm] = [field];
                            }
                        }
                        else {
                            results.set(docId, {
                                score: weightedScore,
                                terms: [sourceTerm],
                                match: (_c = {}, _c[derivedTerm] = [field], _c)
                            });
                        }
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return results;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addTerm = function (fieldId, documentId, term) {
        var indexData = this._index.fetch(term, createMap);
        var fieldIndex = indexData.get(fieldId);
        if (fieldIndex == null) {
            fieldIndex = new Map();
            fieldIndex.set(documentId, 1);
            indexData.set(fieldId, fieldIndex);
        }
        else {
            var docs = fieldIndex.get(documentId);
            fieldIndex.set(documentId, (docs || 0) + 1);
        }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.removeTerm = function (fieldId, documentId, term) {
        if (!this._index.has(term)) {
            this.warnDocumentChanged(documentId, fieldId, term);
            return;
        }
        var indexData = this._index.fetch(term, createMap);
        var fieldIndex = indexData.get(fieldId);
        if (fieldIndex == null || fieldIndex.get(documentId) == null) {
            this.warnDocumentChanged(documentId, fieldId, term);
        }
        else if (fieldIndex.get(documentId) <= 1) {
            if (fieldIndex.size <= 1) {
                indexData.delete(fieldId);
            }
            else {
                fieldIndex.delete(documentId);
            }
        }
        else {
            fieldIndex.set(documentId, fieldIndex.get(documentId) - 1);
        }
        if (this._index.get(term).size === 0) {
            this._index.delete(term);
        }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.warnDocumentChanged = function (shortDocumentId, fieldId, term) {
        var e_19, _a;
        if (console == null || console.warn == null) {
            return;
        }
        try {
            for (var _b = __values(Object.keys(this._fieldIds)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fieldName = _c.value;
                if (this._fieldIds[fieldName] === fieldId) {
                    console.warn("MiniSearch: document with ID ".concat(this._documentIds.get(shortDocumentId), " has changed before removal: term \"").concat(term, "\" was not present in field \"").concat(fieldName, "\". Removing a document after it has changed can corrupt the index!"));
                    return;
                }
            }
        }
        catch (e_19_1) { e_19 = { error: e_19_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_19) throw e_19.error; }
        }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addDocumentId = function (documentId) {
        var shortDocumentId = this._nextId;
        this._documentIds.set(shortDocumentId, documentId);
        this._documentCount += 1;
        this._nextId += 1;
        return shortDocumentId;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addFields = function (fields) {
        for (var i = 0; i < fields.length; i++) {
            this._fieldIds[fields[i]] = i;
        }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addFieldLength = function (documentId, fieldId, count, length) {
        var fieldLengths = this._fieldLength.get(documentId);
        if (fieldLengths == null)
            this._fieldLength.set(documentId, fieldLengths = []);
        fieldLengths[fieldId] = length;
        var averageFieldLength = this._avgFieldLength[fieldId] || 0;
        var totalFieldLength = (averageFieldLength * count) + length;
        this._avgFieldLength[fieldId] = totalFieldLength / (count + 1);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.removeFieldLength = function (documentId, fieldId, count, length) {
        var totalFieldLength = (this._avgFieldLength[fieldId] * count) - length;
        this._avgFieldLength[fieldId] = totalFieldLength / (count - 1);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.saveStoredFields = function (documentId, doc) {
        var e_20, _a;
        var _b = this._options, storeFields = _b.storeFields, extractField = _b.extractField;
        if (storeFields == null || storeFields.length === 0) {
            return;
        }
        var documentFields = this._storedFields.get(documentId);
        if (documentFields == null)
            this._storedFields.set(documentId, documentFields = {});
        try {
            for (var storeFields_1 = __values(storeFields), storeFields_1_1 = storeFields_1.next(); !storeFields_1_1.done; storeFields_1_1 = storeFields_1.next()) {
                var fieldName = storeFields_1_1.value;
                var fieldValue = extractField(doc, fieldName);
                if (fieldValue !== undefined)
                    documentFields[fieldName] = fieldValue;
            }
        }
        catch (e_20_1) { e_20 = { error: e_20_1 }; }
        finally {
            try {
                if (storeFields_1_1 && !storeFields_1_1.done && (_a = storeFields_1.return)) _a.call(storeFields_1);
            }
            finally { if (e_20) throw e_20.error; }
        }
    };
    return MiniSearch;
}());
var getOwnProperty = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property) ? object[property] : undefined;
};
var combinators = (_a = {},
    _a[OR] = function (a, b) {
        var e_21, _a;
        try {
            for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var docId = _c.value;
                var existing = a.get(docId);
                if (existing == null) {
                    a.set(docId, b.get(docId));
                }
                else {
                    var _d = b.get(docId), score = _d.score, terms = _d.terms, match = _d.match;
                    existing.score = existing.score + score;
                    existing.match = Object.assign(existing.match, match);
                    assignUniqueTerms(existing.terms, terms);
                }
            }
        }
        catch (e_21_1) { e_21 = { error: e_21_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_21) throw e_21.error; }
        }
        return a;
    },
    _a[AND] = function (a, b) {
        var e_22, _a;
        var combined = new Map();
        try {
            for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var docId = _c.value;
                var existing = a.get(docId);
                if (existing == null)
                    continue;
                var _d = b.get(docId), score = _d.score, terms = _d.terms, match = _d.match;
                assignUniqueTerms(existing.terms, terms);
                combined.set(docId, {
                    score: existing.score + score,
                    terms: existing.terms,
                    match: Object.assign(existing.match, match)
                });
            }
        }
        catch (e_22_1) { e_22 = { error: e_22_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_22) throw e_22.error; }
        }
        return combined;
    },
    _a[AND_NOT] = function (a, b) {
        var e_23, _a;
        try {
            for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var docId = _c.value;
                a.delete(docId);
            }
        }
        catch (e_23_1) { e_23 = { error: e_23_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_23) throw e_23.error; }
        }
        return a;
    },
    _a);
// https://en.wikipedia.org/wiki/Okapi_BM25
// https://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/
var k = 1.2; // Term frequency saturation point. Recommended values are between 1.2 and 2.
var b = 0.7; // Length normalization impact. Recommended values are around 0.75.
var d = 0.5; // BM25+ frequency normalization lower bound. Recommended values are between 0.5 and 1.
var calcBM25Score = function (termFreq, matchingCount, totalCount, fieldLength, avgFieldLength) {
    var invDocFreq = Math.log(1 + (totalCount - matchingCount + 0.5) / (matchingCount + 0.5));
    return invDocFreq * (d + termFreq * (k + 1) / (termFreq + k * (1 - b + b * fieldLength / avgFieldLength)));
};
var termToQuerySpec = function (options) { return function (term, i, terms) {
    var fuzzy = (typeof options.fuzzy === 'function')
        ? options.fuzzy(term, i, terms)
        : (options.fuzzy || false);
    var prefix = (typeof options.prefix === 'function')
        ? options.prefix(term, i, terms)
        : (options.prefix === true);
    return { term: term, fuzzy: fuzzy, prefix: prefix };
}; };
var defaultOptions = {
    idField: 'id',
    extractField: function (document, fieldName) { return document[fieldName]; },
    tokenize: function (text, fieldName) { return text.split(SPACE_OR_PUNCTUATION); },
    processTerm: function (term, fieldName) { return term.toLowerCase(); },
    fields: undefined,
    searchOptions: undefined,
    storeFields: []
};
var defaultSearchOptions = {
    combineWith: OR,
    prefix: false,
    fuzzy: false,
    maxFuzzy: 6,
    boost: {},
    weights: { fuzzy: 0.45, prefix: 0.375 }
};
var defaultAutoSuggestOptions = {
    prefix: function (term, i, terms) {
        return i === terms.length - 1;
    }
};
var assignUniqueTerm = function (target, term) {
    // Avoid adding duplicate terms.
    if (!target.includes(term))
        target.push(term);
};
var assignUniqueTerms = function (target, source) {
    var e_24, _a;
    try {
        for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
            var term = source_1_1.value;
            // Avoid adding duplicate terms.
            if (!target.includes(term))
                target.push(term);
        }
    }
    catch (e_24_1) { e_24 = { error: e_24_1 }; }
    finally {
        try {
            if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
        }
        finally { if (e_24) throw e_24.error; }
    }
};
var byScore = function (_a, _b) {
    var a = _a.score;
    var b = _b.score;
    return b - a;
};
var createMap = function () { return new Map(); };
var objectToNumericMap = function (object) {
    var e_25, _a;
    var map = new Map();
    try {
        for (var _b = __values(Object.keys(object)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            map.set(parseInt(key, 10), object[key]);
        }
    }
    catch (e_25_1) { e_25 = { error: e_25_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_25) throw e_25.error; }
    }
    return map;
};
// This regular expression matches any Unicode space or punctuation character
// Adapted from https://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5Cp%7BZ%7D%5Cp%7BP%7D&abb=on&c=on&esc=on
var SPACE_OR_PUNCTUATION = /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;


//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTWUsSUFBa0IsR0FBRztBQUN6QkMsRUFBQUEsRUFBRSxFQUFFLFFBRHFCO0FBRXpCQyxFQUFBQSxJQUFJLEVBQUUsUUFGbUI7QUFHekJDLEVBQUFBLElBQUksRUFBRSxXQUhtQjtBQUl6QkMsRUFBQUEsR0FBRyxFQUFFO0FBSm9CLENBQTNCO0FBT2UsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxRQUFNQyxNQUFNLEdBQUduQix1REFBVSxDQUFDb0IsU0FBRCxDQUF6QjtBQUNBLFFBQU07QUFBRUMsSUFBQUEsS0FBRjtBQUFTQyxJQUFBQSxhQUFUO0FBQXdCQyxJQUFBQSxpQkFBeEI7QUFBMkNDLElBQUFBO0FBQTNDLE1BQWtFWixzRUFBYyxDQUFDLEVBQUQsQ0FBdEY7QUFFQSxRQUFNYSxPQUFPLEdBQUdsQixzREFBUSxDQUFDLE1BQU07QUFDN0IsVUFBTTtBQUFFYyxNQUFBQSxLQUFLLEVBQUVLLFdBQVQ7QUFBc0JDLE1BQUFBLEdBQUcsRUFBRUMsSUFBM0I7QUFBaUNDLE1BQUFBO0FBQWpDLFFBQWdEUixLQUF0RDtBQUVBLFVBQU1TLE9BQXFCLEdBQUc7QUFDNUJGLE1BQUFBLElBRDRCO0FBRTVCQyxNQUFBQTtBQUY0QixLQUE5QjtBQUlBLFdBQU9yQiw0REFBa0IsR0FBR3VCLE1BQXJCLENBQTRCTCxXQUE1QixFQUF5Q0UsSUFBSSxDQUFDSSxNQUFMLElBQWVILFVBQWYsR0FBNEJDLE9BQTVCLEdBQXNDRyxTQUEvRSxDQUFQO0FBQ0QsR0FSdUIsRUFRckIsQ0FBQ1osS0FBRCxDQVJxQixDQUF4Qjs7QUFVQSxNQUFJLENBQUNsQixvRkFBTCxFQUE2QztBQUMzQyx3QkFBTztBQUFLLGVBQVMsRUFBRWdCLE1BQU0sQ0FBQ2lCLFdBQXZCO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBRUQsUUFBTUMsYUFBYSxHQUFHLE1BQTRCO0FBQUE7O0FBQ2hELFVBQU1ULElBQUkscUJBQUdILE9BQU8sQ0FBQ2EsS0FBWCxtREFBRyxlQUFlQyxJQUFmLENBQW9CQyxNQUFwQixDQUEyQkMsSUFBM0IsQ0FBaUNDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsTUFBbEQsQ0FBYjs7QUFFQSxRQUFJZixJQUFKLEVBQVU7QUFDUixhQUFPZ0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCbEMsK0RBQWEsQ0FBQ2lCLElBQUQsQ0FBN0IsQ0FBUDtBQUNEOztBQUNELFdBQU9nQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FBUDtBQUNELEdBUEQ7O0FBU0EsUUFBTUMsbUJBQW1CLEdBQUlDLEtBQUQsSUFBZ0Q7QUFDMUV6QixJQUFBQSxhQUFhLENBQUN5QixLQUFLLENBQUNDLGFBQU4sQ0FBb0JWLEtBQXJCLENBQWI7QUFDRCxHQUZEOztBQUlBLFFBQU1XLFdBQVcsR0FBSXJCLElBQUQsSUFBb0I7QUFDdENMLElBQUFBLGlCQUFpQixDQUFDSyxJQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSx3REFBQyxxRUFBRDtBQUFNLFlBQVEsRUFBRTtBQUFFZixNQUFBQSxJQUFJLEVBQUVBLElBQVI7QUFBY3FDLE1BQUFBLElBQUksRUFBRXJDO0FBQXBCLEtBQWhCO0FBQUEsMkJBQ0UseURBQUMsOEVBQUQ7QUFBQSw4QkFDRSx3REFBQyw4Q0FBRDtBQUFPLGFBQUssRUFBRVEsS0FBSyxDQUFDQSxLQUFwQjtBQUEyQixnQkFBUSxFQUFFeUIsbUJBQXJDO0FBQTBELGlCQUFTLE1BQW5FO0FBQW9FLGtCQUFVLEVBQUU7QUFBaEYsUUFERiw2QkFFRSxpRUFGRixHQUdHckIsT0FBTyxDQUFDMEIsT0FBUiwwQ0FBbUIsd0RBQUMsZ0RBQUQsS0FBbkIsRUFISCxFQUlHLG9CQUFBMUIsT0FBTyxDQUFDYSxLQUFSLG9FQUFlQyxJQUFmLGtCQUNDO0FBQUEsZ0NBQ0Usd0RBQUMsOEVBQUQ7QUFBVyxxQkFBVyxNQUF0QjtBQUF1QixjQUFJLEVBQUVsQixLQUFLLENBQUNNLEdBQW5DO0FBQXdDLG9CQUFVLEVBQUVVLGFBQXBEO0FBQW1FLGtCQUFRLEVBQUVZO0FBQTdFLFVBREYsb0NBQytGLGlFQUQvRixHQUVHNUIsS0FBSyxDQUFDUSxVQUFOLGlCQUNDLHlEQUFDLCtDQUFEO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxpQkFBTyxFQUFDLFdBRlY7QUFHRSxpQkFBTyxFQUFFLE1BQU1MLGtCQUFrQixDQUFDUyxTQUFELENBSG5DO0FBSUUsbUJBQVMsRUFBRWQsTUFBTSxDQUFDaUMsVUFKcEI7QUFBQSxxQ0FNZS9CLEtBQUssQ0FBQ1EsVUFOckI7QUFBQSxVQUhKLGVBWUUsd0RBQUMsb0VBQUQ7QUFBVyxlQUFLLEVBQUU7QUFBRXdCLFlBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFBQSxNQUFNLEVBQUU7QUFBekIsV0FBbEI7QUFBQSxvQkFDRyxDQUFDO0FBQUVELFlBQUFBO0FBQUYsV0FBRCxLQUFlO0FBQ2QsZ0NBQ0U7QUFBQSxxQ0FDRSx3REFBQywrQ0FBRDtBQUNFLG9CQUFJLEVBQUU1QixPQUFPLENBQUNhLEtBQVIsQ0FBZUMsSUFEdkI7QUFFRSxxQkFBSyxFQUFFYyxLQUZUO0FBR0Usb0JBQUksRUFBRWhDLEtBQUssQ0FBQ00sR0FIZDtBQUlFLGlDQUFpQixFQUFFc0IsV0FKckI7QUFLRSxrQ0FBa0IsRUFBRXpCO0FBTHRCO0FBREYsY0FERjtBQVdEO0FBYkgsVUFaRjtBQUFBLFFBTEo7QUFBQTtBQURGLElBREY7QUF1Q0Q7O0FBRUQsTUFBTUosU0FBUyxHQUFJbUMsS0FBRCxLQUEyQjtBQUMzQ25CLEVBQUFBLFdBQVcsRUFBRS9CLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUjZDO0FBVTNDK0MsRUFBQUEsVUFBVSxFQUFFL0MsNkNBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWY2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBNkJPLE1BQU1JLEtBQUssR0FBRyxDQUFDO0FBQUV3RCxFQUFBQSxJQUFGO0FBQVFaLEVBQUFBLEtBQVI7QUFBZXpCLEVBQUFBLElBQWY7QUFBcUJMLEVBQUFBLGlCQUFyQjtBQUF3Q0MsRUFBQUE7QUFBeEMsQ0FBRCxLQUF5RTtBQUFBOztBQUM1RixRQUFNTCxNQUFNLEdBQUduQix1REFBVSxDQUFDb0IsU0FBRCxDQUF6QjtBQUNBLFFBQU04QyxXQUFXLEdBQUdsRSx1REFBVSxDQUFDK0QsbUZBQUQsQ0FBOUI7QUFFQSxRQUFNSSxZQUFZLEdBQUdYLDhDQUFPLENBQUMsTUFBTTtBQUNqQyxRQUFJLENBQUNTLElBQUksQ0FBQ3pCLE1BQUwsQ0FBWVIsTUFBakIsRUFBeUI7QUFDdkIsYUFBTyxFQUFQO0FBQ0QsS0FIZ0MsQ0FJakM7QUFDQTtBQUNBOzs7QUFDQSxXQUFPb0MsS0FBSyxDQUFDSCxJQUFJLENBQUNqQyxNQUFOLENBQUwsQ0FBbUJxQyxJQUFuQixDQUF3QixDQUF4QixDQUFQO0FBQ0QsR0FSMkIsRUFRekIsQ0FBQ0osSUFBRCxDQVJ5QixDQUE1QixDQUo0RixDQWM1Rjs7QUFDQSxRQUFNSyxNQUFNLEdBQUdkLDhDQUFPLENBQUMsTUFBTSxJQUFJSSx3REFBSixDQUErQkssSUFBL0IsQ0FBUCxFQUE2QyxDQUFDQSxJQUFELENBQTdDLENBQXRCO0FBQ0EsUUFBTU0sZUFBZSxHQUFHZiw4Q0FBTyxDQUFDLE1BQU07QUFBQTs7QUFDcEMsVUFBTWdCLGVBQWUsR0FBRyxlQUFBUCxJQUFJLENBQUNRLElBQUwsMERBQVdDLElBQVgsTUFBb0JmLHlFQUE1QztBQUNBLFdBQU9LLHlEQUFlLENBQUNNLE1BQUQsRUFBU0UsZUFBVCxFQUEwQm5CLEtBQTFCLEVBQWlDbEMsTUFBakMsRUFBeUNTLElBQXpDLEVBQStDTCxpQkFBL0MsRUFBa0VDLGtCQUFsRSxDQUF0QjtBQUNELEdBSDhCLEVBRzVCLGdCQUFDeUMsSUFBSSxDQUFDUSxJQUFOLGdEQUFDLFlBQVdDLElBQVosRUFBa0JKLE1BQWxCLEVBQTBCakIsS0FBMUIsRUFBaUNsQyxNQUFqQyxFQUF5Q1MsSUFBekMsRUFBK0NMLGlCQUEvQyxFQUFrRUMsa0JBQWxFLENBSDRCLENBQS9CO0FBS0EsUUFBTW9ELE9BQXlCLEdBQUdwQiw4Q0FBTyxDQUN2QyxPQUFPO0FBQ0xxQixJQUFBQSxPQUFPLEVBQUVOLGVBREo7QUFFTE4sSUFBQUEsSUFBSSxFQUFFRTtBQUZELEdBQVAsQ0FEdUMsRUFLdkMsQ0FBQ0ksZUFBRCxFQUFrQkosWUFBbEIsQ0FMdUMsQ0FBekM7QUFRQSxRQUFNO0FBQUVXLElBQUFBLGFBQUY7QUFBaUJDLElBQUFBLGlCQUFqQjtBQUFvQ0MsSUFBQUEsWUFBcEM7QUFBa0RDLElBQUFBLElBQWxEO0FBQXdEQyxJQUFBQTtBQUF4RCxNQUF1RXpCLHFEQUFRLENBQUNtQixPQUFELEVBQVVsQix1REFBVixDQUFyRjtBQUVBLFFBQU15QixTQUFTLEdBQUdyRiw4Q0FBQSxDQUNoQixDQUFDO0FBQUV1RixJQUFBQSxLQUFLLEVBQUVDLFFBQVQ7QUFBbUJDLElBQUFBO0FBQW5CLEdBQUQsS0FBZ0M7QUFBQTs7QUFDOUIsVUFBTUMsR0FBRyxHQUFHUCxJQUFJLENBQUNLLFFBQUQsQ0FBaEI7QUFDQUosSUFBQUEsVUFBVSxDQUFDTSxHQUFELENBQVY7QUFFQSxVQUFNdkUsR0FBRyx5QkFBR3FELE1BQU0sQ0FBQzlCLE1BQVAsQ0FBY3ZCLEdBQWpCLHVEQUFHLG1CQUFtQndFLE1BQW5CLENBQTBCQyxHQUExQixDQUE4QkosUUFBOUIsQ0FBWjtBQUVBLHdCQUNFLGdGQUFTRSxHQUFHLENBQUNHLFdBQUosQ0FBZ0I7QUFBRUosTUFBQUE7QUFBRixLQUFoQixDQUFUO0FBQXFDLGVBQVMsRUFBRXBFLE1BQU0sQ0FBQ3lFLFlBQXZEO0FBQUEsZ0JBQ0dKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxHQUFWLENBQWMsQ0FBQ0MsSUFBRCxFQUFhVixLQUFiLEtBQStCO0FBQzVDLFlBQ0VVLElBQUksQ0FBQ0MsTUFBTCxDQUFZbEYsRUFBWixLQUFtQixpQkFBbkIsSUFDQWlGLElBQUksQ0FBQ0MsTUFBTCxDQUFZbEYsRUFBWixLQUFtQixhQURuQixJQUVBaUYsSUFBSSxDQUFDQyxNQUFMLENBQVlsRixFQUFaLEtBQW1CLG1CQUhyQixFQUlFO0FBQ0EsOEJBQ0U7QUFBaUIscUJBQVMsRUFBRUssTUFBTSxDQUFDOEUsV0FBbkM7QUFBQSxtQ0FDRSx1REFBQyxpRkFBRDtBQUVFLHlCQUFXLEVBQUUvQixXQUZmO0FBR0Usa0JBQUksRUFBRTZCLElBSFI7QUFJRSx5QkFBVyxFQUFFVixLQUpmO0FBS0UseUJBQVcsRUFBRUcsR0FBRyxDQUFDSyxLQUFKLENBQVU3RDtBQUx6QixlQUNPcUQsS0FEUDtBQURGLGFBQVVBLEtBQVYsQ0FERjtBQVdEOztBQUVELDRCQUNFO0FBQUcsY0FBSSxFQUFFcEUsR0FBVDtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUUsTUFBTSxDQUFDOEUsV0FBdkI7QUFBQSxtQ0FDRSx1REFBQyxpRkFBRDtBQUVFLHlCQUFXLEVBQUUvQixXQUZmO0FBR0Usa0JBQUksRUFBRTZCLElBSFI7QUFJRSx5QkFBVyxFQUFFVixLQUpmO0FBS0UseUJBQVcsRUFBRUcsR0FBRyxDQUFDSyxLQUFKLENBQVU3RDtBQUx6QixlQUNPcUQsS0FEUDtBQURGO0FBREYsV0FBbUJBLEtBQW5CLENBREY7QUFhRCxPQWhDQTtBQURILE9BREY7QUFxQ0QsR0E1Q2UsRUE2Q2hCLENBQUNKLElBQUQsRUFBT0MsVUFBUCx5QkFBbUJaLE1BQU0sQ0FBQzlCLE1BQVAsQ0FBY3ZCLEdBQWpDLHdEQUFtQixvQkFBbUJ3RSxNQUF0QyxFQUE4Q3RFLE1BQU0sQ0FBQ3lFLFlBQXJELEVBQW1FekUsTUFBTSxDQUFDOEUsV0FBMUUsRUFBdUYvQixXQUF2RixDQTdDZ0IsQ0FBbEI7QUFnREEsc0JBQ0UsaUZBQVNZLGFBQWEsRUFBdEI7QUFBMEIsU0FBSyxFQUFFO0FBQUV6QixNQUFBQTtBQUFGLEtBQWpDO0FBQTRDLGtCQUFZLHFCQUF4RDtBQUErRSxRQUFJLEVBQUMsT0FBcEY7QUFBQSw0QkFDRTtBQUFBLGdCQUNHMkIsWUFBWSxDQUFDYyxHQUFiLENBQWtCSSxXQUFELElBQWlCO0FBQ2pDLHNDQUFxQ0EsV0FBVyxDQUFDQyxtQkFBWixFQUFyQztBQUFBLGNBQU07QUFBRUMsVUFBQUE7QUFBRixTQUFOO0FBQUEsY0FBZ0JDLGdCQUFoQjs7QUFFQSw0QkFDRSxnRkFBbUJBLGdCQUFuQjtBQUFxQyxtQkFBUyxFQUFFbEYsTUFBTSxDQUFDbUYsU0FBdkQ7QUFBQSxvQkFDR0osV0FBVyxDQUFDSyxPQUFaLENBQW9CVCxHQUFwQixDQUF5QkUsTUFBRCxJQUFZO0FBQ25DLDBDQUFnQ0EsTUFBTSxDQUFDUSxjQUFQLEVBQWhDO0FBQUEsa0JBQU07QUFBRUosY0FBQUE7QUFBRixhQUFOO0FBQUEsa0JBQWdCSyxXQUFoQjs7QUFDQSxnQ0FDRSxnRkFBbUJBLFdBQW5CO0FBQWdDLGtCQUFJLEVBQUMsY0FBckM7QUFBb0QsdUJBQVMsRUFBRXRGLE1BQU0sQ0FBQ3VGLFVBQXRFO0FBQUEsd0JBQ0dWLE1BQU0sQ0FBQ1csTUFBUCxDQUFjLFFBQWQ7QUFESCxnQkFBVVAsR0FBVixDQURGO0FBS0QsV0FQQTtBQURILFlBQVVBLEdBQVYsQ0FERjtBQVlELE9BZkE7QUFESCxNQURGLGVBb0JFLGdGQUFTckIsaUJBQWlCLEVBQTFCO0FBQUEsZ0JBQ0dFLElBQUksQ0FBQ2pELE1BQUwsR0FBYyxDQUFkLGdCQUNDLHVEQUFDLHVEQUFEO0FBQ0UsY0FBTSxFQUFFLEdBRFY7QUFFRSxpQkFBUyxFQUFFaUQsSUFBSSxDQUFDakQsTUFGbEI7QUFHRSxnQkFBUSxFQUFFa0MsV0FBVyxDQUFDMEMsU0FIeEI7QUFJRSxhQUFLLEVBQUUsTUFKVDtBQUtFLGlCQUFTLEVBQUV6RixNQUFNLENBQUMwRixTQUxwQjtBQUFBLGtCQU9HMUI7QUFQSCxRQURELGdCQVdDO0FBQUssaUJBQVMsRUFBRWhFLE1BQU0sQ0FBQzJGLE1BQXZCO0FBQUE7QUFBQTtBQVpKLE9BcEJGO0FBQUEsS0FERjtBQXNDRCxDQXJITTs7QUF1SFAsTUFBTTFGLFNBQVMsR0FBSW1DLEtBQUQsSUFBMEI7QUFDMUMsUUFBTXdELFVBQVUsR0FBR3hELEtBQUssQ0FBQ3lELE1BQU4sQ0FBYUMsU0FBYixDQUF1QjFELEtBQUssQ0FBQ3lELE1BQU4sQ0FBYUUsVUFBYixDQUF3QkMsT0FBL0MsRUFBd0QsSUFBeEQsQ0FBbkI7QUFFQSxTQUFPO0FBQ0xMLElBQUFBLE1BQU0sRUFBRXpHLDZDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVBTO0FBUUwrRyxJQUFBQSxLQUFLLEVBQUUvRyw2Q0FBSTtBQUNmO0FBQ0EsS0FWUztBQVdMd0csSUFBQUEsU0FBUyxFQUFFeEcsNkNBQUk7QUFDbkI7QUFDQSxLQWJTO0FBY0xnSCxJQUFBQSxRQUFRLEVBQUVoSCw2Q0FBSTtBQUNsQjtBQUNBO0FBQ0EsS0FqQlM7QUFrQkw0RixJQUFBQSxXQUFXLEVBQUU1Riw2Q0FBSTtBQUNyQjtBQUNBLEtBcEJTO0FBcUJMcUcsSUFBQUEsVUFBVSxFQUFFckcsNkNBQUk7QUFDcEI7QUFDQTtBQUNBLEtBeEJTO0FBeUJMaUcsSUFBQUEsU0FBUyxFQUFFakcsNkNBQUk7QUFDbkIsMEJBQTBCa0QsS0FBSyxDQUFDeUQsTUFBTixDQUFhRSxVQUFiLENBQXdCSSxTQUFVO0FBQzVEO0FBQ0E7QUFDQSxLQTdCUztBQThCTDFCLElBQUFBLFlBQVksRUFBRXZGLDZDQUFJO0FBQ3RCO0FBQ0EsNEJBQTRCMEcsVUFBVztBQUN2QztBQUNBLEtBbENTO0FBbUNMUSxJQUFBQSxRQUFRLEVBQUVsSCw2Q0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUJrRCxLQUFLLENBQUNpRSxFQUFOLENBQVNDLE9BQVQsQ0FBaUJDLEdBQUk7QUFDNUMsY0FBY25FLEtBQUssQ0FBQ3lELE1BQU4sQ0FBYWpHLElBQWIsQ0FBa0J1RyxTQUFVO0FBQzFDLEtBekNTO0FBMENMSyxJQUFBQSxRQUFRLEVBQUV0SCw2Q0FBSTtBQUNsQixlQUFla0QsS0FBSyxDQUFDeUQsTUFBTixDQUFhakcsSUFBYixDQUFrQnVHLFNBQVU7QUFDM0MsS0E1Q1M7QUE2Q0xNLElBQUFBLFlBQVksRUFBRXZILDZDQUFJO0FBQ3RCLGVBQWVrRCxLQUFLLENBQUN5RCxNQUFOLENBQWFqRyxJQUFiLENBQWtCdUcsU0FBVTtBQUMzQztBQUNBLEtBaERTO0FBaURMTyxJQUFBQSxjQUFjLEVBQUV4SCw2Q0FBSTtBQUN4QjtBQUNBO0FBQ0EsS0FwRFM7QUFxREx5SCxJQUFBQSxRQUFRLEVBQUV6SCw2Q0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxLQXpEUztBQTBETDBILElBQUFBLFFBQVEsRUFBRTFILDZDQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEtBOURTO0FBK0RMMkgsSUFBQUEsT0FBTyxFQUFFM0gsNkNBQUk7QUFDakI7QUFDQTtBQUNBO0FBbEVTLEdBQVA7QUFvRUQsQ0F2RUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUtPLE1BQU0yRCxlQUFlLEdBQUcsQ0FDN0JDLElBRDZCLEVBRTdCTyxlQUY2QixFQUc3QitELGNBSDZCLEVBSTdCcEgsTUFKNkIsRUFLN0JTLElBTDZCLEVBTTdCTCxpQkFONkIsRUFPN0JDLGtCQVA2QixLQVFYO0FBQ2xCLFFBQU1xRCxPQUFzQixHQUFHLEVBQS9CO0FBQ0EsUUFBTTJELFFBQVEsR0FBR3ZFLElBQUksQ0FBQ3pCLE1BQUwsQ0FBWXZCLEdBQTdCO0FBQ0EsUUFBTXFELE1BQU0sR0FBR0wsSUFBSSxDQUFDekIsTUFBcEI7QUFFQStGLEVBQUFBLGNBQWMsSUFBSSxDQUFsQixDQUxrQixDQUtHOztBQUNyQixNQUFJbEYsS0FBSyxHQUFHLEVBQVosQ0FOa0IsQ0FRbEI7O0FBQ0EsTUFBSSxLQUFKLEVBQVcsRUFUTyxDQThCbEI7OztBQUNBQSxFQUFBQSxLQUFLLEdBQUd5RixJQUFJLENBQUNDLEdBQUwsQ0FBU1IsY0FBYyxHQUFHLEdBQTFCLEVBQStCLEdBQS9CLENBQVI7QUFDQTFELEVBQUFBLE9BQU8sQ0FBQzRELElBQVIsQ0FBYTtBQUNYRSxJQUFBQSxJQUFJLEVBQUVMLHFGQURLO0FBRVh4SCxJQUFBQSxFQUFFLEVBQUcsYUFGTTtBQUdYK0gsSUFBQUEsS0FBSyxFQUFFdkUsTUFBTSxDQUFDM0IsSUFISDtBQUlYK0YsSUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEUsSUFBQUEsUUFBUSxFQUFFLENBQUNwRCxHQUFELEVBQVd3RCxDQUFYLEtBQXlCO0FBQ2pDLFlBQU1yRyxJQUFJLEdBQUcyQixNQUFNLENBQUMzQixJQUFQLENBQWE4QyxNQUFiLENBQW9CQyxHQUFwQixDQUF3QnNELENBQXhCLENBQWI7QUFDQSxhQUFPckcsSUFBUDtBQUNELEtBUlU7QUFTWFUsSUFBQUE7QUFUVyxHQUFiO0FBV0FrRixFQUFBQSxjQUFjLElBQUlsRixLQUFsQjtBQUVBLFFBQU00RixpQkFBaUIsR0FBRyxHQUExQjtBQUNBLFFBQU1DLHVCQUF1QixHQUFHLEdBQWhDO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUcsR0FBMUI7QUFDQSxRQUFNQyxxQkFBcUIsR0FBRyxHQUE5QjtBQUVBL0YsRUFBQUEsS0FBSyxHQUFHNEYsaUJBQVI7O0FBQ0EsTUFBSXpFLGVBQUosRUFBcUI7QUFDbkJLLElBQUFBLE9BQU8sQ0FBQzRELElBQVIsQ0FBYTtBQUNYRSxNQUFBQSxJQUFJLEVBQUVMLHFGQURLO0FBRVh4SCxNQUFBQSxFQUFFLEVBQUcsYUFGTTtBQUdYK0gsTUFBQUEsS0FBSyxFQUFFdkUsTUFBTSxDQUFDM0IsSUFISDtBQUlYK0YsTUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEUsTUFBQUEsUUFBUSxFQUFFLENBQUNwRCxHQUFELEVBQVd3RCxDQUFYLEtBQXlCO0FBQ2pDLDRCQUNFO0FBQUssbUJBQVMsRUFBRTdILE1BQU0sQ0FBQ3dHLFFBQXZCO0FBQUEsa0NBQ0UsdURBQUMsNkNBQUQ7QUFBTSxnQkFBSSxFQUFFLE1BQVo7QUFBb0IscUJBQVMsRUFBRXhHLE1BQU0sQ0FBQ29HO0FBQXRDLFlBREY7QUFBQSxVQURGO0FBTUQsT0FaVTtBQWFYbEUsTUFBQUE7QUFiVyxLQUFiO0FBZUFrRixJQUFBQSxjQUFjLElBQUlsRixLQUFsQjtBQUNELEdBakJELE1BaUJPO0FBQ0x3QixJQUFBQSxPQUFPLENBQUM0RCxJQUFSLENBQWFZLGNBQWMsQ0FBQy9FLE1BQU0sQ0FBQ2dGLElBQVIsRUFBY2hGLE1BQU0sQ0FBQ0ksSUFBckIsRUFBMkJyQixLQUEzQixFQUFrQ2xDLE1BQU0sQ0FBQ3dHLFFBQXpDLEVBQW1EeEcsTUFBTSxDQUFDb0csUUFBMUQsQ0FBM0I7QUFDQWdCLElBQUFBLGNBQWMsSUFBSWxGLEtBQWxCO0FBQ0QsR0F2RWlCLENBeUVsQjs7O0FBQ0EsTUFBSWlCLE1BQU0sQ0FBQ3pDLFVBQVAsSUFBcUIwSCxhQUFhLENBQUNqRixNQUFNLENBQUN6QyxVQUFSLENBQXRDLEVBQTJEO0FBQ3pEd0IsSUFBQUEsS0FBSyxHQUFHNkYsdUJBQVI7QUFDQXJFLElBQUFBLE9BQU8sQ0FBQzRELElBQVIsQ0FBYWUsb0JBQW9CLENBQUNsRixNQUFNLENBQUN6QyxVQUFSLEVBQW9Cd0IsS0FBcEIsRUFBMkJsQyxNQUFNLENBQUNvRyxRQUFsQyxFQUE0Qy9GLGtCQUE1QyxDQUFqQztBQUNBK0csSUFBQUEsY0FBYyxJQUFJbEYsS0FBbEI7QUFDRDs7QUFFRCxNQUFJbUIsZUFBSixFQUFxQjtBQUNuQm5CLElBQUFBLEtBQUssR0FBRzhGLGlCQUFSO0FBQ0F0RSxJQUFBQSxPQUFPLENBQUM0RCxJQUFSLENBQWE7QUFDWEUsTUFBQUEsSUFBSSxFQUFFTCxxRkFESztBQUVYeEgsTUFBQUEsRUFBRSxFQUFHLGFBRk07QUFHWCtILE1BQUFBLEtBQUssRUFBRXZFLE1BQU0sQ0FBQ3JELEdBSEg7QUFJWHlILE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hFLE1BQUFBLFFBQVEsRUFBRSxDQUFDcEQsR0FBRCxFQUFXd0QsQ0FBWCxLQUF5QjtBQUFBOztBQUNqQyxjQUFNUyxVQUFVLHlCQUFHbkYsTUFBTSxDQUFDbUYsVUFBVix1REFBRyxtQkFBbUJoRSxNQUFuQixDQUEwQkMsR0FBMUIsQ0FBOEJzRCxDQUE5QixDQUFuQjtBQUNBLDRCQUFPO0FBQUssbUJBQVMsRUFBRTdILE1BQU0sQ0FBQzRHLFFBQXZCO0FBQUEsb0JBQWtDMEIsVUFBVSxJQUFJLElBQWQsaUJBQXNCO0FBQUEsbUNBQWVBLFVBQWY7QUFBQTtBQUF4RCxVQUFQO0FBQ0QsT0FSVTtBQVNYcEcsTUFBQUEsS0FBSyxFQUFFQTtBQVRJLEtBQWI7QUFXQWtGLElBQUFBLGNBQWMsSUFBSWxGLEtBQWxCO0FBQ0QsR0FkRCxNQWNPO0FBQUE7O0FBQ0x3QixJQUFBQSxPQUFPLENBQUM0RCxJQUFSLENBQWE7QUFDWEUsTUFBQUEsSUFBSSxFQUFFTCxxRkFESztBQUVYeEgsTUFBQUEsRUFBRSxFQUFHLGlCQUZNO0FBR1grSCxNQUFBQSxLQUFLLHNCQUFFdkUsTUFBTSxDQUFDb0YsUUFBVCwrREFBcUJwRixNQUFNLENBQUNyRCxHQUh0QjtBQUlYeUgsTUFBQUEsTUFBTSxFQUFFLFVBSkc7QUFLWEUsTUFBQUEsUUFBUSxFQUFFLENBQUNwRCxHQUFELEVBQVd3RCxDQUFYLEtBQXlCO0FBQUE7O0FBQ2pDLGNBQU1VLFFBQVEsd0JBQUdwRixNQUFNLENBQUNvRixRQUFWLHNEQUFHLGtCQUFpQmpFLE1BQWpCLENBQXdCQyxHQUF4QixDQUE0QnNELENBQTVCLENBQWpCOztBQUNBLFlBQUlVLFFBQUosRUFBYztBQUNaLDhCQUNFO0FBQUEsc0JBQ0dBLFFBQVEsQ0FBQzVELEdBQVQsQ0FBYSxDQUFDNkQsQ0FBRCxFQUFJN0ksRUFBSixrQkFDWjtBQUVFLHVCQUFTLEVBQUVLLE1BQU0sQ0FBQ3lHLFlBRnBCO0FBR0UscUJBQU8sRUFBR2dDLENBQUQsSUFBTztBQUNkQSxnQkFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGdCQUFBQSxLQUFLLENBQUMsWUFBWUgsQ0FBQyxDQUFDaEgsSUFBZixDQUFMO0FBQ0QsZUFOSDtBQUFBLHNDQVFFLHVEQUFDLDZDQUFEO0FBQU0sb0JBQUksRUFBRW9ILGNBQWMsQ0FBQ0osQ0FBQyxDQUFDTCxJQUFIO0FBQTFCLGdCQVJGLE9BUTBDSyxDQUFDLENBQUNoSCxJQVI1QztBQUFBLGVBQ083QixFQURQLENBREQ7QUFESCxZQURGO0FBZ0JEOztBQUNELGVBQU8sSUFBUDtBQUNELE9BMUJVO0FBMkJYdUMsTUFBQUEsS0FBSyxFQUFFK0Y7QUEzQkksS0FBYjtBQTZCQWIsSUFBQUEsY0FBYyxJQUFJbEYsS0FBbEI7QUFDRCxHQTdIaUIsQ0ErSGxCOzs7QUFDQSxNQUFJaUIsTUFBTSxDQUFDMUMsSUFBUCxJQUFlMkgsYUFBYSxDQUFDakYsTUFBTSxDQUFDMUMsSUFBUixDQUFoQyxFQUErQztBQUM3Q3lCLElBQUFBLEtBQUssR0FBR3lGLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixjQUFULEVBQXlCLEdBQXpCLENBQVI7QUFDQTFELElBQUFBLE9BQU8sQ0FBQzRELElBQVIsQ0FBYXVCLGNBQWMsQ0FBQzFGLE1BQU0sQ0FBQzFDLElBQVIsRUFBY3lCLEtBQWQsRUFBcUJsQyxNQUFNLENBQUM2RyxPQUE1QixFQUFxQ3BHLElBQXJDLEVBQTJDTCxpQkFBM0MsQ0FBM0I7QUFDRDs7QUFFRCxTQUFPc0QsT0FBUDtBQUNELENBOUlNOztBQWdKUCxTQUFTMEUsYUFBVCxDQUF1QlYsS0FBdkIsRUFBOEM7QUFDNUMsT0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxLQUFLLENBQUNwRCxNQUFOLENBQWF6RCxNQUFqQyxFQUF5Q2dILENBQUMsRUFBMUMsRUFBOEM7QUFDNUMsVUFBTVcsQ0FBQyxHQUFHZCxLQUFLLENBQUNwRCxNQUFOLENBQWFDLEdBQWIsQ0FBaUJzRCxDQUFqQixDQUFWOztBQUNBLFFBQUlXLENBQUMsSUFBSUEsQ0FBQyxDQUFDM0gsTUFBWCxFQUFtQjtBQUNqQixhQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sS0FBUDtBQUNEOztBQUVELFNBQVMrSCxjQUFULENBQXdCSixDQUF4QixFQUE2QztBQUMzQyxNQUFJQSxDQUFDLEtBQUssV0FBVixFQUF1QjtBQUNyQixXQUFPLE1BQVA7QUFDRDs7QUFDRCxNQUFJQSxDQUFDLEtBQUssUUFBVixFQUFvQjtBQUNsQixXQUFPLFFBQVA7QUFDRDs7QUFDRCxTQUFPLGlCQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsb0JBQVQsQ0FDRVgsS0FERixFQUVFeEYsS0FGRixFQUdFNEcsU0FIRixFQUlFekksa0JBSkYsRUFLZTtBQUNiLFNBQU87QUFDTG1ILElBQUFBLElBQUksRUFBRUwscUZBREQ7QUFFTHhILElBQUFBLEVBQUUsRUFBRyxtQkFGQTtBQUdMK0gsSUFBQUEsS0FISztBQUlMSCxJQUFBQSxNQUFNLEVBQUUsYUFKSDtBQUtMRSxJQUFBQSxRQUFRLEVBQUUsQ0FBQ3BELEdBQUQsRUFBV3dELENBQVgsS0FBeUI7QUFDakMsWUFBTWtCLE1BQU0sR0FBR3JCLEtBQUssQ0FBQ3BELE1BQU4sQ0FBYUMsR0FBYixDQUFpQnNELENBQWpCLENBQWY7O0FBQ0EsVUFBSWtCLE1BQUosYUFBSUEsTUFBSixlQUFJQSxNQUFNLENBQUVsSSxNQUFaLEVBQW9CO0FBQ2xCLGNBQU1tSSxHQUFHLEdBQUdsQyxrRUFBZ0IsRUFBNUI7QUFDQSw0QkFDRTtBQUFBLG9CQUNHaUMsTUFBTSxDQUFDcEUsR0FBUCxDQUFXLENBQUM2RCxDQUFELEVBQUlYLENBQUosS0FBVTtBQUFBOztBQUNwQixrQkFBTW9CLFFBQVEsR0FBR0QsR0FBRyxDQUFDRSxtQkFBSixDQUF3QlYsQ0FBeEIsQ0FBakI7QUFDQSxrQkFBTTNJLElBQUksR0FBR29KLFFBQUgsYUFBR0EsUUFBSCx5Q0FBR0EsUUFBUSxDQUFFM0YsSUFBYiwwRUFBRyxlQUFnQjZGLElBQW5CLGlGQUFHLG9CQUFzQkMsS0FBekIsMERBQUcsc0JBQTZCQyxLQUExQzs7QUFDQSxnQkFBSXhKLElBQUosRUFBVTtBQUNSLGtDQUNFO0FBRUUsb0JBQUksRUFBRyxvQkFBbUJvSixRQUFRLENBQUNLLEdBQUksRUFGekM7QUFHRSx1QkFBTyxFQUFHYixDQUFELElBQU87QUFDZEEsa0JBQUFBLENBQUMsQ0FBQ2MsZUFBRjtBQUNBZCxrQkFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FySSxrQkFBQUEsa0JBQWtCLENBQUM0SSxRQUFRLENBQUNLLEdBQVYsQ0FBbEI7QUFDRCxpQkFQSDtBQUFBLHdDQVNFLHVEQUFDLHVEQUFEO0FBQUsscUJBQUcsRUFBRXpKLElBQVY7QUFBZ0IsdUJBQUssRUFBRSxFQUF2QjtBQUEyQix3QkFBTSxFQUFFLEVBQW5DO0FBQXVDLHVCQUFLLEVBQUVvSixRQUFRLENBQUMxRixJQUF2RDtBQUE2RCwyQkFBUyxFQUFFdUY7QUFBeEUsa0JBVEYsRUFVR0csUUFBUSxDQUFDekgsSUFWWjtBQUFBLGlCQUNPcUcsQ0FEUCxDQURGO0FBY0Q7O0FBQ0QsZ0NBQU87QUFBQSx3QkFBZVcsQ0FBQyxDQUFDakY7QUFBakIsZUFBV3NFLENBQVgsQ0FBUDtBQUNELFdBcEJBO0FBREgsVUFERjtBQXlCRDs7QUFDRCxhQUFPLElBQVA7QUFDRCxLQXBDSTtBQXFDTDNGLElBQUFBO0FBckNLLEdBQVA7QUF1Q0Q7O0FBRUQsU0FBU2dHLGNBQVQsQ0FDRXNCLFNBREYsRUFFRUMsU0FGRixFQUdFdkgsS0FIRixFQUlFd0gsYUFKRixFQUtFWixTQUxGLEVBTWU7QUFDYixTQUFPO0FBQ0x0QixJQUFBQSxJQUFJLEVBQUVMLHFGQUREO0FBRUx4SCxJQUFBQSxFQUFFLEVBQUcsYUFGQTtBQUdMK0gsSUFBQUEsS0FBSyxFQUFFOEIsU0FIRjtBQUlMakMsSUFBQUEsTUFBTSxFQUFFLE1BSkg7QUFLTEUsSUFBQUEsUUFBUSxFQUFFLENBQUNwRCxHQUFELEVBQVd3RCxDQUFYLEtBQXlCO0FBQ2pDLFlBQU1NLElBQUksR0FBR3FCLFNBQVMsQ0FBQ2xGLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCc0QsQ0FBckIsQ0FBYjtBQUNBLFVBQUloSSxJQUFJLEdBQUcsbUNBQVg7QUFDQSxVQUFJOEosR0FBRyxHQUFHLFdBQVY7O0FBQ0EsVUFBSXhCLElBQUosRUFBVTtBQUNSd0IsUUFBQUEsR0FBRyxHQUFHeEIsSUFBTjs7QUFDQSxnQkFBUXdCLEdBQVI7QUFDRSxlQUFLLFdBQUw7QUFDRUEsWUFBQUEsR0FBRyxHQUFHLFdBQU47QUFDQTs7QUFFRixlQUFLLFFBQUw7QUFDRTlKLFlBQUFBLElBQUksR0FBRyxxQ0FBUDtBQUNBOEosWUFBQUEsR0FBRyxHQUFHLFFBQU47QUFDQTs7QUFFRixlQUFLLE9BQUw7QUFDRTlKLFlBQUFBLElBQUksR0FBRyx3Q0FBUDtBQUNBLGtCQUFNMEQsSUFBSSxHQUFHa0csU0FBUyxDQUFDbkYsTUFBVixDQUFpQkMsR0FBakIsQ0FBcUJzRCxDQUFyQixDQUFiOztBQUNBLGdCQUFJdEUsSUFBSixFQUFVO0FBQ1JvRyxjQUFBQSxHQUFHLEdBQUdwRyxJQUFOO0FBQ0Esb0JBQU00RixJQUFJLEdBQUduSywyREFBQSxDQUFjMkssR0FBZCxDQUFiOztBQUNBLGtCQUFJUixJQUFKLGFBQUlBLElBQUosZUFBSUEsSUFBSSxDQUFFM0gsSUFBVixFQUFnQjtBQUFBOztBQUNkLHNCQUFNZ0gsQ0FBQyxpQkFBR1csSUFBSSxDQUFDQSxJQUFSLCtDQUFHLFdBQVdDLEtBQVgsQ0FBaUJDLEtBQTNCOztBQUNBLG9CQUFJYixDQUFDLElBQUlBLENBQUMsQ0FBQ3FCLFFBQUYsQ0FBVyxNQUFYLENBQVQsRUFBNkI7QUFDM0JoSyxrQkFBQUEsSUFBSSxHQUFHMkksQ0FBUDtBQUNEOztBQUNEbUIsZ0JBQUFBLEdBQUcsR0FBR1IsSUFBSSxDQUFDM0gsSUFBWDtBQUNEO0FBQ0Y7O0FBQ0Q7QUF4Qko7QUEwQkQ7O0FBRUQsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFa0ksYUFBaEI7QUFBQSxnQ0FDRSx1REFBQyx1REFBRDtBQUFLLGFBQUcsRUFBRTdKLElBQVY7QUFBZ0IsZUFBSyxFQUFFLEVBQXZCO0FBQTJCLGdCQUFNLEVBQUUsRUFBbkM7QUFBdUMsZUFBSyxFQUFFOEosR0FBOUM7QUFBbUQsbUJBQVMsRUFBRWI7QUFBOUQsVUFERixFQUVHYSxHQUZIO0FBQUEsUUFERjtBQU1ELEtBN0NJO0FBOENMekgsSUFBQUE7QUE5Q0ssR0FBUDtBQWdERDs7QUFFRCxTQUFTMkcsY0FBVCxDQUNFbkIsS0FERixFQUVFeEYsS0FGRixFQUdFNEgsWUFIRixFQUlFQyxnQkFKRixFQUtFM0osaUJBTEYsRUFNZTtBQUNiLFFBQU00SixlQUFlLEdBQUl4SixHQUFELElBQWlCO0FBQ3ZDLFFBQUksQ0FBQ3VKLGdCQUFnQixDQUFDRSxRQUFqQixDQUEwQnpKLEdBQTFCLENBQUwsRUFBcUM7QUFDbkNKLE1BQUFBLGlCQUFpQixDQUFDLENBQUMsR0FBRzJKLGdCQUFKLEVBQXNCdkosR0FBdEIsQ0FBRCxDQUFqQjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxTQUFPO0FBQ0xnSCxJQUFBQSxJQUFJLEVBQUVMLHFGQUREO0FBRUx4SCxJQUFBQSxFQUFFLEVBQUcsYUFGQTtBQUdMK0gsSUFBQUEsS0FBSyxFQUFFQSxLQUhGO0FBSUxILElBQUFBLE1BQU0sRUFBRSxNQUpIO0FBS0xFLElBQUFBLFFBQVEsRUFBRSxDQUFDcEQsR0FBRCxFQUFXd0QsQ0FBWCxLQUF5QjtBQUNqQyxZQUFNcEgsSUFBSSxHQUFHaUgsS0FBSyxDQUFDcEQsTUFBTixDQUFhQyxHQUFiLENBQWlCc0QsQ0FBakIsQ0FBYjs7QUFDQSxVQUFJcEgsSUFBSixFQUFVO0FBQ1IsNEJBQU8sdURBQUMsZ0RBQUQ7QUFBUyxtQkFBUyxFQUFFcUosWUFBcEI7QUFBa0MsY0FBSSxFQUFFckosSUFBeEM7QUFBOEMsaUJBQU8sRUFBRXVKO0FBQXZELFVBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRCxLQVhJO0FBWUw5SCxJQUFBQTtBQVpLLEdBQVA7QUFjRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalREO0FBVUE7QUFFQTtBQUNBO0FBY08sZUFBZXFJLGVBQWYsR0FBd0Q7QUFDN0QsUUFBTUMsRUFBRSxHQUFJLE1BQU0xRCxrRUFBZ0IsR0FBR3ZDLEdBQW5CLENBQXVCLGVBQXZCLENBQWxCO0FBQ0EsUUFBTWtHLEdBQUcsR0FBRyxNQUFNSixtREFBYSxDQUM3QkcsRUFBRSxDQUFDdEssS0FBSCxDQUFTO0FBQ1B3SyxJQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxNQUFBQSxTQUFTLEVBQUVOLHlGQUF1Qk87QUFBaEQsS0FETyxDQUM2QztBQUQ3QztBQURGLEdBQVQsQ0FENkIsQ0FBL0I7QUFRQSxRQUFNL0gsSUFBa0IsR0FBRyxFQUEzQjs7QUFDQSxPQUFLLE1BQU12QixDQUFYLElBQWdCa0osR0FBRyxDQUFDM0gsSUFBcEIsRUFBMEI7QUFDeEIsVUFBTWdJLEtBQUssR0FBR3ZKLENBQWQ7O0FBQ0EsU0FBSyxNQUFNbUcsS0FBWCxJQUFvQm9ELEtBQUssQ0FBQ3pKLE1BQTFCLEVBQWtDO0FBQ2hDO0FBQ0EsVUFBSXFHLEtBQUssQ0FBQ2xHLElBQU4sS0FBZSxNQUFmLElBQXlCa0csS0FBSyxDQUFDbEcsSUFBTixLQUFlLFlBQTVDLEVBQTBEO0FBQ3hELGNBQU04QyxNQUFNLEdBQUdvRCxLQUFLLENBQUNwRCxNQUFOLENBQWF5RyxPQUFiLEdBQXVCcEcsR0FBdkIsQ0FBNEI2RCxDQUFELElBQU87QUFDL0MsY0FBSUEsQ0FBSixhQUFJQSxDQUFKLGVBQUlBLENBQUMsQ0FBRTNILE1BQVAsRUFBZTtBQUNiLGdCQUFJO0FBQ0Ysb0JBQU1tSyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXMUMsQ0FBWCxDQUFaO0FBQ0EscUJBQU93QyxHQUFHLENBQUNuSyxNQUFKLEdBQWFtSyxHQUFiLEdBQW1CbEssU0FBMUI7QUFDRCxhQUhELENBR0UsTUFBTSxDQUFFO0FBQ1g7O0FBQ0QsaUJBQU9BLFNBQVA7QUFDRCxTQVJjLENBQWY7QUFTQTRHLFFBQUFBLEtBQUssQ0FBQ25FLElBQU4sR0FBYTRHLDBEQUFiLENBVndELENBVTFCOztBQUM5QnpDLFFBQUFBLEtBQUssQ0FBQ3BELE1BQU4sR0FBZSxJQUFJNEYsc0RBQUosQ0FBZ0I1RixNQUFoQixDQUFmO0FBQ0Q7O0FBRURvRCxNQUFBQSxLQUFLLENBQUMwRCxPQUFOLEdBQWdCaEIsa0VBQW1CLENBQUM7QUFBRTFDLFFBQUFBLEtBQUY7QUFBU3RGLFFBQUFBLEtBQUssRUFBRXBELDJEQUFhcU07QUFBN0IsT0FBRCxDQUFuQztBQUNEOztBQUNEUCxJQUFBQSxLQUFLLENBQUN4SCxJQUFOLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFZix5RUFBOEJnQjtBQUR6QixLQUFiOztBQUlBLFlBQVFzSCxLQUFLLENBQUN0SixJQUFkO0FBQ0UsV0FBSyxZQUFMO0FBQ0VzQixRQUFBQSxJQUFJLENBQUN3SSxTQUFMLEdBQWlCUixLQUFqQjtBQUNBOztBQUNGLFdBQUssUUFBTDtBQUNFaEksUUFBQUEsSUFBSSxDQUFDeUksS0FBTCxHQUFhVCxLQUFiO0FBQ0E7O0FBQ0YsV0FBSyxTQUFMO0FBQ0VoSSxRQUFBQSxJQUFJLENBQUMwSSxNQUFMLEdBQWNWLEtBQWQ7QUFDQTtBQVRKO0FBV0Q7O0FBQ0QsU0FBT2hJLElBQVA7QUFDRDtBQUVNLFNBQVMySSxlQUFULENBQXlCL0QsS0FBekIsRUFBbUQ7QUFDeEQsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVixXQUFPO0FBQUU3RyxNQUFBQSxNQUFNLEVBQUUsQ0FBVjtBQUFhUSxNQUFBQSxNQUFNLEVBQUU7QUFBckIsS0FBUDtBQUNEOztBQUVELFFBQU1xSyxNQUFNLEdBQUcsSUFBSUMsR0FBSixFQUFmOztBQUNBLE9BQUssSUFBSTlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ3BELE1BQU4sQ0FBYXpELE1BQWpDLEVBQXlDZ0gsQ0FBQyxFQUExQyxFQUE4QztBQUFBOztBQUM1QyxVQUFNK0QsQ0FBQyxHQUFHbEUsS0FBSyxDQUFDcEQsTUFBTixDQUFhQyxHQUFiLENBQWlCc0QsQ0FBakIsQ0FBVjtBQUNBLFVBQU1XLENBQUMsa0JBQUdrRCxNQUFNLENBQUNuSCxHQUFQLENBQVdxSCxDQUFYLENBQUgscURBQW9CLENBQTNCO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0csR0FBUCxDQUFXRCxDQUFYLEVBQWNwRCxDQUFDLEdBQUcsQ0FBbEI7QUFDRCxHQVZ1RCxDQVl4RDs7O0FBQ0FrRCxFQUFBQSxNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUixDQUFOLEdBQTBCLGFBQWE7QUFDckMsV0FBTyxDQUFDLEdBQUcsS0FBS0MsT0FBTCxFQUFKLEVBQW9CQyxJQUFwQixDQUF5QixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPRCxDQUFDLENBQUMsQ0FBRCxDQUEzQyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNRSxJQUFXLEdBQUcsRUFBcEI7QUFDQSxRQUFNQyxJQUFjLEdBQUcsRUFBdkI7O0FBRUEsT0FBSyxJQUFJLENBQUNULENBQUQsRUFBSXBELENBQUosQ0FBVCxJQUFtQmtELE1BQW5CLEVBQTJCO0FBQ3pCVSxJQUFBQSxJQUFJLENBQUM5RSxJQUFMLENBQVVzRSxDQUFWO0FBQ0FTLElBQUFBLElBQUksQ0FBQy9FLElBQUwsQ0FBVWtCLENBQVY7QUFDRDs7QUFFRCxTQUFPO0FBQ0xuSCxJQUFBQSxNQUFNLEVBQUUsbUJBQ0RxRyxLQURDO0FBQ01wRCxNQUFBQSxNQUFNLEVBQUUsSUFBSTRGLHNEQUFKLENBQWdCa0MsSUFBaEI7QUFEZCxRQUVOO0FBQUU1SyxNQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQitCLE1BQUFBLElBQUksRUFBRTRHLDJEQUF2QjtBQUF5QzdGLE1BQUFBLE1BQU0sRUFBRSxJQUFJNEYsc0RBQUosQ0FBZ0JtQyxJQUFoQixDQUFqRDtBQUF3RXJOLE1BQUFBLE1BQU0sRUFBRTtBQUFoRixLQUZNLENBREg7QUFLTDZCLElBQUFBLE1BQU0sRUFBRXVMLElBQUksQ0FBQ3ZMO0FBTFIsR0FBUDtBQU9EO0FBRU0sU0FBU3JCLGFBQVQsQ0FBdUJrSSxLQUF2QixFQUFtRDtBQUN4RCxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLFdBQU8sRUFBUDtBQUNEOztBQUVELFFBQU1nRSxNQUFNLEdBQUcsSUFBSUMsR0FBSixFQUFmOztBQUNBLE9BQUssSUFBSTlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ3BELE1BQU4sQ0FBYXpELE1BQWpDLEVBQXlDZ0gsQ0FBQyxFQUExQyxFQUE4QztBQUM1QyxVQUFNK0QsQ0FBQyxHQUFHbEUsS0FBSyxDQUFDcEQsTUFBTixDQUFhQyxHQUFiLENBQWlCc0QsQ0FBakIsQ0FBVjs7QUFDQSxRQUFJK0QsQ0FBQyxJQUFJLElBQUwsSUFBYSxDQUFDQSxDQUFDLENBQUMvSyxNQUFwQixFQUE0QjtBQUMxQjtBQUNEOztBQUNELFFBQUlvQyxLQUFLLENBQUNzSixPQUFOLENBQWNYLENBQWQsQ0FBSixFQUFzQjtBQUNwQixXQUFLLE1BQU1ZLEdBQVgsSUFBa0JaLENBQWxCLEVBQXFCO0FBQUE7O0FBQ25CLGNBQU1wRCxDQUFDLG1CQUFHa0QsTUFBTSxDQUFDbkgsR0FBUCxDQUFXaUksR0FBWCxDQUFILHVEQUFzQixDQUE3QjtBQUNBZCxRQUFBQSxNQUFNLENBQUNHLEdBQVAsQ0FBV1csR0FBWCxFQUFnQmhFLENBQUMsR0FBRyxDQUFwQjtBQUNEO0FBQ0YsS0FMRCxNQUtPO0FBQUE7O0FBQ0wsWUFBTUEsQ0FBQyxtQkFBR2tELE1BQU0sQ0FBQ25ILEdBQVAsQ0FBV3FILENBQVgsQ0FBSCx1REFBb0IsQ0FBM0I7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRyxHQUFQLENBQVdELENBQVgsRUFBY3BELENBQUMsR0FBRyxDQUFsQjtBQUNEO0FBQ0YsR0FwQnVELENBc0J4RDs7O0FBQ0FrRCxFQUFBQSxNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUixDQUFOLEdBQTBCLGFBQWE7QUFDckMsV0FBTyxDQUFDLEdBQUcsS0FBS0MsT0FBTCxFQUFKLEVBQW9CQyxJQUFwQixDQUF5QixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPRCxDQUFDLENBQUMsQ0FBRCxDQUEzQyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNTyxLQUFrQixHQUFHLEVBQTNCOztBQUNBLE9BQUssSUFBSSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsQ0FBVCxJQUEwQmpCLE1BQTFCLEVBQWtDO0FBQ2hDZSxJQUFBQSxLQUFLLENBQUNuRixJQUFOLENBQVc7QUFDVG9GLE1BQUFBLElBRFM7QUFFVEMsTUFBQUE7QUFGUyxLQUFYO0FBSUQ7O0FBRUQsU0FBT0YsS0FBUDtBQUNEO0FBRU0sU0FBU0csV0FBVCxDQUFxQjlCLEtBQXJCLEVBQXVDK0IsTUFBdkMsRUFBeUU7QUFBQTs7QUFDOUUsTUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWCxXQUFPL0IsS0FBUDtBQUNEOztBQUNELFFBQU1nQyxJQUFJLEdBQUcsSUFBSXJLLHdEQUFKLENBQStCcUksS0FBL0IsQ0FBYjtBQUNBLFFBQU1pQyxJQUFjLEdBQUcsRUFBdkI7QUFFQSxRQUFNdkMsRUFBRSxHQUFHcUMsTUFBTSxDQUFDbk0sVUFBUCxHQUFvQm9NLElBQUksQ0FBQ3pMLE1BQUwsQ0FBWVgsVUFBaEMsR0FBNkNJLFNBQXhEO0FBQ0EsUUFBTUwsSUFBSSxHQUFHLGdCQUFBb00sTUFBTSxDQUFDcE0sSUFBUCxzREFBYUksTUFBYixHQUFzQmlNLElBQUksQ0FBQ3pMLE1BQUwsQ0FBWVosSUFBbEMsR0FBeUNLLFNBQXREO0FBRUEsTUFBSWtNLEVBQUUsR0FBRyxJQUFUOztBQUNBLE9BQUssSUFBSW5GLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpRixJQUFJLENBQUNqTSxNQUF6QixFQUFpQ2dILENBQUMsRUFBbEMsRUFBc0M7QUFDcENtRixJQUFBQSxFQUFFLEdBQUcsSUFBTDs7QUFFQSxRQUFJdk0sSUFBSixFQUFVO0FBQ1IsWUFBTStILENBQUMsR0FBRy9ILElBQUksQ0FBQzZELE1BQUwsQ0FBWUMsR0FBWixDQUFnQnNELENBQWhCLENBQVY7O0FBQ0EsVUFBSSxDQUFDVyxDQUFMLEVBQVE7QUFDTndFLFFBQUFBLEVBQUUsR0FBRyxLQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSyxNQUFNQyxDQUFYLElBQWdCSixNQUFNLENBQUNwTSxJQUF2QixFQUE4QjtBQUM1QixjQUFJLENBQUMrSCxDQUFDLENBQUN5QixRQUFGLENBQVdnRCxDQUFYLENBQUwsRUFBb0I7QUFDbEJELFlBQUFBLEVBQUUsR0FBRyxLQUFMO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxRQUFJQSxFQUFFLElBQUl4QyxFQUFOLElBQVlxQyxNQUFNLENBQUNuTSxVQUF2QixFQUFtQztBQUNqQ3NNLE1BQUFBLEVBQUUsR0FBRyxLQUFMO0FBQ0EsWUFBTXhFLENBQUMsR0FBR2dDLEVBQUUsQ0FBQ2xHLE1BQUgsQ0FBVUMsR0FBVixDQUFjc0QsQ0FBZCxDQUFWOztBQUNBLFVBQUlXLENBQUosRUFBTztBQUNMLGFBQUssTUFBTTBFLENBQVgsSUFBZ0IxRSxDQUFoQixFQUFtQjtBQUNqQixjQUFJMEUsQ0FBQyxDQUFDNUQsR0FBRixLQUFVdUQsTUFBTSxDQUFDbk0sVUFBckIsRUFBaUM7QUFDL0JzTSxZQUFBQSxFQUFFLEdBQUcsSUFBTDtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsUUFBSUEsRUFBSixFQUFRO0FBQ05ELE1BQUFBLElBQUksQ0FBQ3pGLElBQUwsQ0FBVU8sQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTztBQUNMdkUsSUFBQUEsSUFBSSxFQUFFd0gsS0FBSyxDQUFDeEgsSUFEUDtBQUVMOUIsSUFBQUEsSUFBSSxFQUFFc0osS0FBSyxDQUFDdEosSUFGUDtBQUdMSCxJQUFBQSxNQUFNLEVBQUV5SixLQUFLLENBQUN6SixNQUFOLENBQWFzRCxHQUFiLENBQWtCcEQsQ0FBRCxzQkFBYUEsQ0FBYjtBQUFnQitDLE1BQUFBLE1BQU0sRUFBRTZJLFlBQVksQ0FBQ0osSUFBRCxFQUFPeEwsQ0FBQyxDQUFDK0MsTUFBVDtBQUFwQyxNQUFqQixDQUhIO0FBSUx6RCxJQUFBQSxNQUFNLEVBQUVrTSxJQUFJLENBQUNsTTtBQUpSLEdBQVA7QUFNRDs7QUFFRCxTQUFTc00sWUFBVCxDQUFzQkosSUFBdEIsRUFBc0NLLEdBQXRDLEVBQXFFO0FBQ25FLFFBQU05SSxNQUFNLEdBQUcsSUFBSXJCLEtBQUosQ0FBVThKLElBQUksQ0FBQ2xNLE1BQWYsQ0FBZjs7QUFDQSxPQUFLLElBQUlnSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa0YsSUFBSSxDQUFDbE0sTUFBekIsRUFBaUNnSCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDdkQsSUFBQUEsTUFBTSxDQUFDdUQsQ0FBRCxDQUFOLEdBQVl1RixHQUFHLENBQUM3SSxHQUFKLENBQVF3SSxJQUFJLENBQUNsRixDQUFELENBQVosQ0FBWjtBQUNEOztBQUNELFNBQU8sSUFBSXFDLHNEQUFKLENBQWdCNUYsTUFBaEIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7O0FDak5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUEyQkE7QUFDTyxNQUFNaUosWUFBTixDQUE4QztBQUtuREMsRUFBQUEsV0FBVyxDQUFTQyxRQUEwQixHQUFHbEQscURBQXRDLEVBQXVELENBQ2hFOztBQURnRSxTQUE5Q2tELFFBQThDLEdBQTlDQSxRQUE4Qzs7QUFBQSxvQ0FKekQsSUFBSTlCLEdBQUosRUFJeUQ7O0FBQUEsa0NBSDdDLEVBRzZDOztBQUFBOztBQUFBLFNBQTlDOEIsUUFBOEMsR0FBOUNBLFFBQThDO0FBRWpFOztBQUVzQixRQUFUQyxTQUFTLEdBQUc7QUFDeEIsVUFBTTVLLElBQUksR0FBRyxNQUFNLEtBQUsySyxRQUFMLEVBQW5CO0FBRUEsVUFBTUUsUUFBUSxHQUFHLElBQUlOLGtEQUFKLENBQXlCO0FBQ3hDTyxNQUFBQSxPQUFPLEVBQUUsTUFEK0I7QUFFeEN2TSxNQUFBQSxNQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsYUFBVCxFQUF3QixNQUF4QixFQUFnQyxNQUFoQyxFQUF3QyxNQUF4QyxDQUZnQztBQUVpQjtBQUN6RHdNLE1BQUFBLGFBQWEsRUFBRTtBQUNiQyxRQUFBQSxLQUFLLEVBQUU7QUFDTHRNLFVBQUFBLElBQUksRUFBRSxDQUREO0FBRUx1TSxVQUFBQSxXQUFXLEVBQUU7QUFGUixTQURNO0FBS2I7QUFDQUMsUUFBQUEsYUFBYSxFQUFFLENBQUNDLFVBQUQsRUFBa0J2QixJQUFsQixLQUFtQztBQUNoRCxnQkFBTXZFLElBQUksR0FBRzhGLFVBQVUsQ0FBQzlGLElBQXhCOztBQUNBLGNBQUlBLElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQ3hCLG1CQUFPLEdBQVA7QUFDRDs7QUFDRCxjQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQixtQkFBTyxHQUFQO0FBQ0Q7O0FBQ0QsaUJBQU8sQ0FBUDtBQUNELFNBZlk7QUFnQmIrRixRQUFBQSxNQUFNLEVBQUUsSUFoQks7QUFpQmJDLFFBQUFBLEtBQUssRUFBR3pCLElBQUQsSUFBV0EsSUFBSSxDQUFDN0wsTUFBTCxHQUFjLENBQWQsR0FBa0IsR0FBbEIsR0FBd0I7QUFqQjdCLE9BSHlCO0FBc0J4Q3VOLE1BQUFBLFlBQVksRUFBRSxDQUFDQyxHQUFELEVBQU03TSxJQUFOLEtBQWU7QUFDM0I7QUFDQSxZQUFJQSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQixpQkFBTztBQUNMMkcsWUFBQUEsSUFBSSxFQUFFa0csR0FBRyxDQUFDbEcsSUFETDtBQUVMakUsWUFBQUEsS0FBSyxFQUFFbUssR0FBRyxDQUFDbks7QUFGTixXQUFQO0FBSUQ7O0FBQ0QsY0FBTUksTUFBTSxHQUFJK0osR0FBRCxDQUFhN00sSUFBYixDQUFmOztBQUNBLFlBQUksQ0FBQzhDLE1BQUwsRUFBYTtBQUNYLGlCQUFPLEVBQVA7QUFDRDs7QUFDRCxjQUFNbkQsS0FBSyxHQUFHbUQsTUFBTSxDQUFDQyxHQUFQLENBQVc4SixHQUFHLENBQUNuSyxLQUFmLENBQWQ7O0FBQ0EsWUFBSW9KLGdEQUFRLENBQUNuTSxLQUFELENBQVosRUFBcUI7QUFDbkIsaUJBQU9BLEtBQVA7QUFDRDs7QUFDRCxZQUFJb0wsK0NBQU8sQ0FBQ3BMLEtBQUQsQ0FBWCxFQUFvQjtBQUNsQixpQkFBT0EsS0FBSyxDQUFDbU4sSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNEOztBQUNELGVBQU9yRCxJQUFJLENBQUNzRCxTQUFMLENBQWVwTixLQUFmLENBQVA7QUFDRDtBQTFDdUMsS0FBekIsQ0FBakI7QUE2Q0EsVUFBTXFOLE1BQU0sR0FBRyxJQUFJN0MsR0FBSixFQUFmOztBQUNBLFNBQUssTUFBTSxDQUFDMUcsR0FBRCxFQUFNNkYsS0FBTixDQUFYLElBQTJCMkQsTUFBTSxDQUFDekMsT0FBUCxDQUFlbEosSUFBZixDQUEzQixFQUFpRDtBQUMvQyxZQUFNcUYsSUFBSSxHQUFHbEQsR0FBYjtBQUNBLFlBQU15SixLQUFLLEdBQUdDLFdBQVcsQ0FBQ3hHLElBQUQsRUFBTzJDLEtBQVAsQ0FBekI7QUFDQTBELE1BQUFBLE1BQU0sQ0FBQzNDLEdBQVAsQ0FBVzFELElBQVgsRUFBaUJ1RyxLQUFqQjs7QUFDQSxXQUFLLElBQUk3RyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUQsS0FBSyxDQUFDakssTUFBMUIsRUFBa0NnSCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDNkcsUUFBQUEsS0FBSyxDQUFDeEssS0FBTixHQUFjMkQsQ0FBZDtBQUNBOEYsUUFBQUEsUUFBUSxDQUFDaUIsR0FBVCxDQUFhRixLQUFiO0FBQ0Q7QUFDRixLQXpEdUIsQ0EyRHhCOzs7QUFDQSxVQUFNRyxlQUFlLEdBQUcsSUFBSWxELEdBQUosRUFBeEI7QUFDQSxVQUFNSCxNQUFNLEdBQUdnRCxNQUFNLENBQUNqSyxHQUFQLENBQVcsUUFBWCxDQUFmO0FBQ0EsVUFBTStHLFNBQVMsR0FBR2tELE1BQU0sQ0FBQ2pLLEdBQVAsQ0FBVyxXQUFYLENBQWxCO0FBQ0EsVUFBTWdILEtBQUssR0FBR2lELE1BQU0sQ0FBQ2pLLEdBQVAsQ0FBVyxPQUFYLENBQWQ7O0FBQ0EsUUFBSWlILE1BQUosYUFBSUEsTUFBSixlQUFJQSxNQUFNLENBQUU3TCxFQUFaLEVBQWdCO0FBQ2QsV0FBSyxJQUFJa0ksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsa0JBQUcyRCxNQUFNLENBQUM3TCxFQUFWLCtDQUFHLFdBQVdrQixNQUFkLENBQWpCLEVBQXVDZ0gsQ0FBQyxFQUF4QyxFQUE0QztBQUFBOztBQUMxQ2dILFFBQUFBLGVBQWUsQ0FBQ2hELEdBQWhCLENBQW9CTCxNQUFNLENBQUM3TCxFQUFQLENBQVU0RSxHQUFWLENBQWNzRCxDQUFkLENBQXBCLEVBQXNDQSxDQUF0QztBQUNEO0FBQ0Y7O0FBRUQsUUFBSXlELFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsSUFBQUEsU0FBUyxDQUFFM0wsRUFBWCxJQUFpQjRMLEtBQWpCLGFBQWlCQSxLQUFqQixlQUFpQkEsS0FBSyxDQUFFdUQsV0FBeEIsSUFBdUN4RCxTQUFTLENBQUN4TCxHQUFyRCxFQUEwRDtBQUN4RCxVQUFJeUksUUFBMEIsR0FBRyxJQUFJdEYsS0FBSixDQUFVcUksU0FBUyxDQUFDM0wsRUFBVixDQUFha0IsTUFBdkIsQ0FBakM7QUFDQSxZQUFNa08sYUFBYSxHQUFHLElBQUlwRCxHQUFKLEVBQXRCOztBQUNBLFdBQUssSUFBSTlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLHFCQUFHeUQsU0FBUyxDQUFDM0wsRUFBYixrREFBRyxjQUFja0IsTUFBakIsQ0FBakIsRUFBMENnSCxDQUFDLEVBQTNDLEVBQStDO0FBQUE7O0FBQzdDa0gsUUFBQUEsYUFBYSxDQUFDbEQsR0FBZCxDQUFrQlAsU0FBUyxDQUFDM0wsRUFBVixDQUFhNEUsR0FBYixDQUFpQnNELENBQWpCLENBQWxCLEVBQXVDQSxDQUF2QztBQUNBLGNBQU1tSCxRQUFRLHdCQUFHMUQsU0FBUyxDQUFDRSxNQUFiLHNEQUFHLGtCQUFrQmpILEdBQWxCLENBQXNCc0QsQ0FBdEIsQ0FBakI7O0FBQ0EsWUFBSW1ILFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUFBOztBQUNwQixnQkFBTTlLLEtBQUssR0FBRzJLLGVBQWUsQ0FBQ3RLLEdBQWhCLENBQW9CeUssUUFBcEIsQ0FBZDtBQUNBLGdCQUFNeE4sSUFBSSxHQUFHZ0ssTUFBSCxhQUFHQSxNQUFILHVDQUFHQSxNQUFNLENBQUVoSyxJQUFYLGlEQUFHLGFBQWMrQyxHQUFkLENBQWtCTCxLQUFsQixDQUFiOztBQUNBLGNBQUkxQyxJQUFKLEVBQVU7QUFDUitHLFlBQUFBLFFBQVEsQ0FBQ1YsQ0FBRCxDQUFSLEdBQWMsQ0FDWjtBQUNFTSxjQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFM0csY0FBQUE7QUFGRixhQURZLENBQWQ7QUFNRDtBQUNGO0FBQ0Y7O0FBQ0Q4SixNQUFBQSxTQUFTLENBQUMvQyxRQUFWLEdBQXFCLElBQUkyQixzREFBSixDQUFnQjNCLFFBQWhCLENBQXJCLENBbkJ3RCxDQW1CUjs7QUFFaERBLE1BQUFBLFFBQVEsR0FBRyxJQUFJdEYsS0FBSixDQUFVc0ksS0FBSyxDQUFDdUQsV0FBTixDQUFrQmpPLE1BQTVCLENBQVg7QUFDQSxZQUFNb08sSUFBYyxHQUFHLElBQUloTSxLQUFKLENBQVVzRixRQUFRLENBQUMxSCxNQUFuQixDQUF2Qjs7QUFDQSxXQUFLLElBQUlnSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEQsS0FBSyxDQUFDdUQsV0FBTixDQUFrQmpPLE1BQXRDLEVBQThDZ0gsQ0FBQyxFQUEvQyxFQUFtRDtBQUNqRCxjQUFNaUgsV0FBVyxHQUFHdkQsS0FBSyxDQUFDdUQsV0FBTixDQUFrQnZLLEdBQWxCLENBQXNCc0QsQ0FBdEIsQ0FBcEI7QUFDQSxjQUFNM0QsS0FBSyxHQUFHNkssYUFBYSxDQUFDeEssR0FBZCxDQUFrQnVLLFdBQWxCLENBQWQ7O0FBQ0EsWUFBSTVLLEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQUE7O0FBQ2pCLGdCQUFNZ0wsR0FBRyxnQkFBRzNELEtBQUssQ0FBQzVMLEVBQVQsOENBQUcsVUFBVTRFLEdBQVYsQ0FBY3NELENBQWQsQ0FBWjtBQUNBb0gsVUFBQUEsSUFBSSxDQUFDcEgsQ0FBRCxDQUFKLEdBQVV5RCxTQUFTLENBQUN4TCxHQUFWLENBQWN5RSxHQUFkLENBQWtCTCxLQUFsQixJQUEyQixhQUEzQixHQUEyQ2dMLEdBQXJEO0FBRUEsZ0JBQU1DLE1BQU0sNEJBQUc3RCxTQUFTLENBQUMvQyxRQUFWLENBQW1CaEUsR0FBbkIsQ0FBdUJMLEtBQXZCLENBQUgseUVBQW9DLEVBQWhEO0FBQ0EsZ0JBQU0xQyxJQUFJLDZDQUFHOEosU0FBUyxDQUFDOUosSUFBYixvREFBRyxnQkFBZ0IrQyxHQUFoQixDQUFvQkwsS0FBcEIsQ0FBSCxxRUFBaUMsR0FBM0M7QUFDQXFFLFVBQUFBLFFBQVEsQ0FBQ1YsQ0FBRCxDQUFSLEdBQWMsQ0FBQyxHQUFHc0gsTUFBSixFQUFZO0FBQUVoSCxZQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQjNHLFlBQUFBO0FBQXJCLFdBQVosQ0FBZDtBQUNEO0FBQ0Y7O0FBQ0QrSixNQUFBQSxLQUFLLENBQUN6TCxHQUFOLEdBQVksSUFBSW9LLHNEQUFKLENBQWdCK0UsSUFBaEIsQ0FBWjtBQUNBMUQsTUFBQUEsS0FBSyxDQUFDaEQsUUFBTixHQUFpQixJQUFJMkIsc0RBQUosQ0FBZ0IzQixRQUFoQixDQUFqQjtBQUNEOztBQUVELFNBQUtyRSxLQUFMLEdBQWF5SixRQUFiO0FBQ0EsU0FBSzdLLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUswTCxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7QUFFVyxRQUFONU4sTUFBTSxDQUFDVixLQUFELEVBQWdCMk0sTUFBaEIsRUFBK0Q7QUFDekUsUUFBSSxDQUFDLEtBQUszSSxLQUFWLEVBQWlCO0FBQ2YsWUFBTSxLQUFLd0osU0FBTCxFQUFOO0FBQ0QsS0FId0UsQ0FLekU7OztBQUNBLFFBQUksQ0FBQ3hOLEtBQUQsSUFBVSxLQUFLNEMsSUFBTCxDQUFVd0ksU0FBeEIsRUFBbUM7QUFDakMsYUFBTztBQUNMbEssUUFBQUEsSUFBSSxFQUFFd0wscURBQVcsQ0FBQyxLQUFLOUosSUFBTCxDQUFVd0ksU0FBWCxFQUFzQnVCLE1BQXRCO0FBRFosT0FBUDtBQUdEOztBQUVELFVBQU11QyxLQUFLLEdBQUcsS0FBS2xMLEtBQUwsQ0FBWXRELE1BQVosQ0FBbUJWLEtBQW5CLENBQWQsQ0FaeUUsQ0FjekU7O0FBQ0EsVUFBTUosR0FBYSxHQUFHLEVBQXRCO0FBQ0EsVUFBTXFJLElBQWMsR0FBRyxFQUF2QjtBQUNBLFVBQU01RSxJQUFjLEdBQUcsRUFBdkI7QUFDQSxVQUFNL0IsSUFBYyxHQUFHLEVBQXZCO0FBQ0EsVUFBTWYsSUFBZ0IsR0FBRyxFQUF6QjtBQUNBLFVBQU04SCxRQUEwQixHQUFHLEVBQW5DO0FBQ0EsVUFBTTdILFVBQTZCLEdBQUcsRUFBdEM7QUFDQSxVQUFNeUksSUFBVyxHQUFHLEVBQXBCO0FBQ0EsVUFBTWtHLEtBQWUsR0FBRyxFQUF4Qjs7QUFFQSxTQUFLLE1BQU1DLEdBQVgsSUFBa0JGLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFlBQU1uSyxHQUFHLEdBQUdxSyxHQUFHLENBQUMzUCxFQUFoQjtBQUNBLFlBQU11RSxLQUFLLEdBQUdlLEdBQUcsQ0FBQ2YsS0FBbEI7QUFDQSxZQUFNd0ssS0FBSyxHQUFHLEtBQUtGLE1BQUwsQ0FBWWpLLEdBQVosQ0FBZ0JVLEdBQUcsQ0FBQ2tELElBQXBCLENBQWQ7O0FBQ0EsVUFBSSxDQUFDdUcsS0FBTCxFQUFZO0FBQ1Y7QUFDRDs7QUFFRCxVQUFJN0IsTUFBTSxJQUFJLENBQUMwQyxVQUFVLENBQUMxQyxNQUFELEVBQVM2QixLQUFULEVBQWdCeEssS0FBaEIsQ0FBekIsRUFBaUQ7QUFDL0M7QUFDRDs7QUFFRHBFLE1BQUFBLEdBQUcsQ0FBQ3dILElBQUosaUNBQVNvSCxLQUFLLENBQUM1TyxHQUFmLCtDQUFTLFdBQVd5RSxHQUFYLENBQWVMLEtBQWYsQ0FBVCwyREFBa0MsR0FBbEM7QUFDQXFFLE1BQUFBLFFBQVEsQ0FBQ2pCLElBQVQsb0JBQWNvSCxLQUFLLENBQUNuRyxRQUFwQixvREFBYyxnQkFBZ0JoRSxHQUFoQixDQUFvQkwsS0FBcEIsQ0FBZDtBQUNBeEQsTUFBQUEsVUFBVSxDQUFDNEcsSUFBWCxzQkFBZ0JvSCxLQUFLLENBQUNoTyxVQUF0QixzREFBZ0Isa0JBQWtCNkQsR0FBbEIsQ0FBc0JMLEtBQXRCLENBQWhCO0FBQ0F6RCxNQUFBQSxJQUFJLENBQUM2RyxJQUFMLGdCQUFVb0gsS0FBSyxDQUFDak8sSUFBaEIsZ0RBQVUsWUFBWThELEdBQVosQ0FBZ0JMLEtBQWhCLENBQVY7QUFDQWlFLE1BQUFBLElBQUksQ0FBQ2IsSUFBTCxDQUFVckMsR0FBRyxDQUFDa0QsSUFBZDtBQUNBM0csTUFBQUEsSUFBSSxDQUFDOEYsSUFBTCxtQ0FBVW9ILEtBQUssQ0FBQ2xOLElBQWhCLGdEQUFVLFlBQVkrQyxHQUFaLENBQWdCTCxLQUFoQixDQUFWLDZEQUFvQyxHQUFwQztBQUNBWCxNQUFBQSxJQUFJLENBQUMrRCxJQUFMLGdCQUFVb0gsS0FBSyxDQUFDbkwsSUFBaEIsZ0RBQVUsWUFBWWdCLEdBQVosQ0FBZ0JMLEtBQWhCLENBQVY7QUFDQWlGLE1BQUFBLElBQUksQ0FBQzdCLElBQUwsQ0FBVWdJLEdBQUcsQ0FBQ0UsS0FBZCxFQW5CdUIsQ0FtQkQ7O0FBQ3RCSCxNQUFBQSxLQUFLLENBQUMvSCxJQUFOLENBQVdnSSxHQUFHLENBQUNELEtBQWY7QUFDRDs7QUFDRCxVQUFNaE8sTUFBZSxHQUFHLENBQ3RCO0FBQUVHLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCeEMsTUFBQUEsTUFBTSxFQUFFLEVBQXhCO0FBQTRCdUUsTUFBQUEsSUFBSSxFQUFFNEcsMkRBQWxDO0FBQW9EN0YsTUFBQUEsTUFBTSxFQUFFLElBQUk0RixzREFBSixDQUFnQi9CLElBQWhCO0FBQTVELEtBRHNCLEVBRXRCO0FBQUUzRyxNQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQnhDLE1BQUFBLE1BQU0sRUFBRSxFQUF4QjtBQUE0QnVFLE1BQUFBLElBQUksRUFBRTRHLDJEQUFsQztBQUFvRDdGLE1BQUFBLE1BQU0sRUFBRSxJQUFJNEYsc0RBQUosQ0FBZ0IxSSxJQUFoQjtBQUE1RCxLQUZzQixFQUd0QjtBQUNFQSxNQUFBQSxJQUFJLEVBQUUsS0FEUjtBQUVFeEMsTUFBQUEsTUFBTSxFQUFFLEVBRlY7QUFHRXVFLE1BQUFBLElBQUksRUFBRTRHLDJEQUhSO0FBSUU3RixNQUFBQSxNQUFNLEVBQUUsSUFBSTRGLHNEQUFKLENBQWdCcEssR0FBaEI7QUFKVixLQUhzQixFQVN0QjtBQUFFMEIsTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0J4QyxNQUFBQSxNQUFNLEVBQUUsRUFBeEI7QUFBNEJ1RSxNQUFBQSxJQUFJLEVBQUU0RywyREFBbEM7QUFBb0Q3RixNQUFBQSxNQUFNLEVBQUUsSUFBSTRGLHNEQUFKLENBQWdCM0csSUFBaEI7QUFBNUQsS0FUc0IsRUFVdEI7QUFBRS9CLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCeEMsTUFBQUEsTUFBTSxFQUFFLEVBQXhCO0FBQTRCdUUsTUFBQUEsSUFBSSxFQUFFNEcsMERBQWxDO0FBQW1EN0YsTUFBQUEsTUFBTSxFQUFFLElBQUk0RixzREFBSixDQUFnQmYsSUFBaEI7QUFBM0QsS0FWc0IsRUFXdEI7QUFBRTNILE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCeEMsTUFBQUEsTUFBTSxFQUFFLEVBQXhCO0FBQTRCdUUsTUFBQUEsSUFBSSxFQUFFNEcsMERBQWxDO0FBQW1EN0YsTUFBQUEsTUFBTSxFQUFFLElBQUk0RixzREFBSixDQUFnQnpKLElBQWhCO0FBQTNELEtBWHNCLEVBWXRCO0FBQUVlLE1BQUFBLElBQUksRUFBRSxVQUFSO0FBQW9CeEMsTUFBQUEsTUFBTSxFQUFFLEVBQTVCO0FBQWdDdUUsTUFBQUEsSUFBSSxFQUFFNEcsMERBQXRDO0FBQXVEN0YsTUFBQUEsTUFBTSxFQUFFLElBQUk0RixzREFBSixDQUFnQjNCLFFBQWhCO0FBQS9ELEtBWnNCLEVBYXRCO0FBQUUvRyxNQUFBQSxJQUFJLEVBQUUsWUFBUjtBQUFzQnhDLE1BQUFBLE1BQU0sRUFBRSxFQUE5QjtBQUFrQ3VFLE1BQUFBLElBQUksRUFBRTRHLDBEQUF4QztBQUF5RDdGLE1BQUFBLE1BQU0sRUFBRSxJQUFJNEYsc0RBQUosQ0FBZ0J4SixVQUFoQjtBQUFqRSxLQWJzQixFQWN0QjtBQUFFYyxNQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQnhDLE1BQUFBLE1BQU0sRUFBRSxFQUF6QjtBQUE2QnVFLE1BQUFBLElBQUksRUFBRTRHLDJEQUFuQztBQUFxRDdGLE1BQUFBLE1BQU0sRUFBRSxJQUFJNEYsc0RBQUosQ0FBZ0JtRixLQUFoQjtBQUE3RCxLQWRzQixDQUF4Qjs7QUFnQkEsU0FBSyxNQUFNM0gsS0FBWCxJQUFvQnJHLE1BQXBCLEVBQTRCO0FBQzFCcUcsTUFBQUEsS0FBSyxDQUFDMEQsT0FBTixHQUFnQmhCLGtFQUFtQixDQUFDO0FBQUUxQyxRQUFBQSxLQUFGO0FBQVN0RixRQUFBQSxLQUFLLEVBQUVwRCwyREFBYXFNO0FBQTdCLE9BQUQsQ0FBbkM7QUFDRDs7QUFDRCxXQUFPO0FBQ0xqSyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsTUFESTtBQUVKUixRQUFBQSxNQUFNLEVBQUVzSCxJQUFJLENBQUN0SDtBQUZUO0FBREQsS0FBUDtBQU1EOztBQW5Na0Q7O0FBc01yRCxTQUFTME8sVUFBVCxDQUFvQjFDLE1BQXBCLEVBQTBDd0IsR0FBMUMsRUFBeURuSyxLQUF6RCxFQUFpRjtBQUMvRSxNQUFJMkksTUFBTSxDQUFDcE0sSUFBWCxFQUFpQjtBQUFBOztBQUNmLFVBQU1BLElBQUksZ0JBQUc0TixHQUFHLENBQUM1TixJQUFQLDhDQUFHLFVBQVU4RCxHQUFWLENBQWNMLEtBQWQsQ0FBYjs7QUFDQSxRQUFJLEVBQUN6RCxJQUFELGFBQUNBLElBQUQsZUFBQ0EsSUFBSSxDQUFFSSxNQUFQLENBQUosRUFBbUI7QUFDakIsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBSyxNQUFNb00sQ0FBWCxJQUFnQkosTUFBTSxDQUFDcE0sSUFBdkIsRUFBNkI7QUFDM0IsVUFBSSxDQUFDQSxJQUFJLENBQUN3SixRQUFMLENBQWNnRCxDQUFkLENBQUwsRUFBdUI7QUFDckIsZUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUlGLElBQUksR0FBRyxJQUFYLENBYitFLENBYy9FOztBQUNBLE1BQUlGLE1BQU0sQ0FBQ25NLFVBQVgsRUFBdUI7QUFBQTs7QUFDckJxTSxJQUFBQSxJQUFJLEdBQUcsS0FBUDtBQUNBLFVBQU0yQyxHQUFHLHNCQUFHckIsR0FBRyxDQUFDM04sVUFBUCxvREFBRyxnQkFBZ0I2RCxHQUFoQixDQUFvQkwsS0FBcEIsQ0FBWjs7QUFDQSxRQUFJd0wsR0FBSixFQUFTO0FBQ1AsV0FBSyxNQUFNbEYsRUFBWCxJQUFpQmtGLEdBQWpCLEVBQXNCO0FBQ3BCLFlBQUlsRixFQUFFLENBQUNsQixHQUFILEtBQVd1RCxNQUFNLENBQUNuTSxVQUF0QixFQUFrQztBQUNoQ3FNLFVBQUFBLElBQUksR0FBRyxJQUFQO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPQSxJQUFQO0FBQ0Q7O0FBRUQsU0FBUzRCLFdBQVQsQ0FBcUJ4RyxJQUFyQixFQUE2QzJDLEtBQTdDLEVBQXlFO0FBQ3ZFLFFBQU00RCxLQUFlLEdBQUc7QUFDdEJ2RyxJQUFBQSxJQURzQjtBQUV0QmpFLElBQUFBLEtBQUssRUFBRTtBQUZlLEdBQXhCOztBQUlBLE9BQUssTUFBTXdELEtBQVgsSUFBb0JvRCxLQUFLLENBQUN6SixNQUExQixFQUFrQztBQUNoQyxZQUFRcUcsS0FBSyxDQUFDbEcsSUFBZDtBQUNFLFdBQUssTUFBTDtBQUNBLFdBQUssTUFBTDtBQUNFa04sUUFBQUEsS0FBSyxDQUFDbE4sSUFBTixHQUFha0csS0FBSyxDQUFDcEQsTUFBbkI7QUFDQTs7QUFDRixXQUFLLGFBQUw7QUFDQSxXQUFLLGFBQUw7QUFDRW9LLFFBQUFBLEtBQUssQ0FBQ1gsV0FBTixHQUFvQnJHLEtBQUssQ0FBQ3BELE1BQTFCO0FBQ0E7O0FBQ0YsV0FBSyxLQUFMO0FBQ0EsV0FBSyxLQUFMO0FBQ0VvSyxRQUFBQSxLQUFLLENBQUM1TyxHQUFOLEdBQVk0SCxLQUFLLENBQUNwRCxNQUFsQjtBQUNBOztBQUNGLFdBQUssS0FBTDtBQUNBLFdBQUssS0FBTDtBQUNFb0ssUUFBQUEsS0FBSyxDQUFDcEYsR0FBTixHQUFZNUIsS0FBSyxDQUFDcEQsTUFBbEI7QUFDQTs7QUFDRixXQUFLLElBQUw7QUFDQSxXQUFLLElBQUw7QUFDRW9LLFFBQUFBLEtBQUssQ0FBQy9PLEVBQU4sR0FBVytILEtBQUssQ0FBQ3BELE1BQWpCO0FBQ0E7O0FBQ0YsV0FBSyxNQUFMO0FBQ0EsV0FBSyxNQUFMO0FBQ0VvSyxRQUFBQSxLQUFLLENBQUNqTyxJQUFOLEdBQWFpSCxLQUFLLENBQUNwRCxNQUFuQjtBQUNBOztBQUNGLFdBQUssYUFBTDtBQUNBLFdBQUssYUFBTDtBQUNFb0ssUUFBQUEsS0FBSyxDQUFDSSxXQUFOLEdBQW9CcEgsS0FBSyxDQUFDcEQsTUFBMUI7QUFDQTs7QUFDRixXQUFLLE1BQUw7QUFDQSxXQUFLLE1BQUw7QUFDRW9LLFFBQUFBLEtBQUssQ0FBQ25MLElBQU4sR0FBYW1FLEtBQUssQ0FBQ3BELE1BQW5CO0FBQ0E7O0FBQ0YsV0FBSyxVQUFMO0FBQ0EsV0FBSyxVQUFMO0FBQ0VvSyxRQUFBQSxLQUFLLENBQUNsRCxNQUFOLEdBQWU5RCxLQUFLLENBQUNwRCxNQUFyQjtBQUNBOztBQUNGLFdBQUssWUFBTDtBQUNBLFdBQUssUUFBTDtBQUNBLFdBQUssUUFBTDtBQUNFb0ssUUFBQUEsS0FBSyxDQUFDaE8sVUFBTixHQUFtQmdILEtBQUssQ0FBQ3BELE1BQXpCO0FBQ0E7QUF6Q0o7QUEyQ0Q7O0FBQ0QsU0FBT29LLEtBQVA7QUFDRDs7Ozs7Ozs7Ozs7O0FDMVREO0FBR0EsSUFBSWYsUUFBcUMsR0FBRzdNLFNBQTVDO0FBRU8sU0FBU3pCLGtCQUFULEdBQStDO0FBQ3BELE1BQUksQ0FBQ3NPLFFBQUwsRUFBZTtBQUNiQSxJQUFBQSxRQUFRLEdBQUcsSUFBSUosdURBQUosRUFBWDtBQUNEOztBQUNELFNBQU9JLFFBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUNBO0FBRU8sSUFBS3JELGdCQUFaOztXQUFZQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtHQUFBQSxxQkFBQUE7O0FBb0JMLE1BQU1xRixZQUEwQixHQUFHO0FBQ3hDaEYsRUFBQUEsS0FBSyxFQUFFLEdBRGlDO0FBRXhDQyxFQUFBQSxTQUFTLEVBQUVOLGdCQUFnQixDQUFDc0Y7QUFGWSxDQUFuQyxFQUtQO0FBQ0E7QUFDQTs7QUFFTyxJQUFLQyxxQkFBWjs7V0FBWUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7R0FBQUEsMEJBQUFBOzs7Ozs7Ozs7OztBQ3BDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx3QkFBd0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBNkM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDLHNCQUFzQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxVQUFVO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLFVBQVU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsbUJBQW1CO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFVBQVU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3QkFBd0I7QUFDckQ7QUFDQSxpRkFBaUYsVUFBVTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdHQUFnRztBQUMxRyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJCQUEyQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJDQUEyQztBQUN0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Q2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw2QkFBNkI7QUFDaEYsMkNBQTJDLDBDQUEwQztBQUNyRiw4Q0FBOEMsNEJBQTRCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxrQkFBa0I7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsVUFBVTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsU0FBUzs7QUFFcEI7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvcGFnZS9TZWFyY2hQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvcGFnZS90YWJsZS9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3BhZ2UvdGFibGUvY29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3NlcnZpY2UvYmFja2VuZC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvc2VydmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvc2VydmljZS9taW5pc2VhcmNoZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3NlcnZpY2Uvc2VhcmNoZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYWZhbmEvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL21pbmlzZWFyY2gtbnBtLTUuMC4wLWJldGExLTQyZWM1YjUzM2YtN2M1YmE4YjJkMS56aXAvbm9kZV9tb2R1bGVzL21pbmlzZWFyY2gvZGlzdC9lczVtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBOYXZNb2RlbEl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IElucHV0LCB1c2VTdHlsZXMyLCBTcGlubmVyLCBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBnZXRHcmFmYW5hU2VhcmNoZXIsIFF1ZXJ5RmlsdGVycyB9IGZyb20gJy4uL3NlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuL3RhYmxlL1RhYmxlJztcbmltcG9ydCB7IFRhZ0ZpbHRlciwgVGVybUNvdW50IH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnRmlsdGVyJztcbmltcG9ydCB7IGdldFRlcm1Db3VudHMgfSBmcm9tICcuLi9zZXJ2aWNlL2JhY2tlbmQnO1xuaW1wb3J0IHsgdXNlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9ob29rcy91c2VTZWFyY2hRdWVyeSc7XG5cbmNvbnN0IG5vZGU6IE5hdk1vZGVsSXRlbSA9IHtcbiAgaWQ6ICdzZWFyY2gnLFxuICB0ZXh0OiAnU2VhcmNoJyxcbiAgaWNvbjogJ2Rhc2hib2FyZCcsXG4gIHVybDogJ3NlYXJjaCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hQYWdlKCkge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgcXVlcnksIG9uUXVlcnlDaGFuZ2UsIG9uVGFnRmlsdGVyQ2hhbmdlLCBvbkRhdGFzb3VyY2VDaGFuZ2UgfSA9IHVzZVNlYXJjaFF1ZXJ5KHt9KTtcblxuICBjb25zdCByZXN1bHRzID0gdXNlQXN5bmMoKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnk6IHNlYXJjaFF1ZXJ5LCB0YWc6IHRhZ3MsIGRhdGFzb3VyY2UgfSA9IHF1ZXJ5O1xuXG4gICAgY29uc3QgZmlsdGVyczogUXVlcnlGaWx0ZXJzID0ge1xuICAgICAgdGFncyxcbiAgICAgIGRhdGFzb3VyY2UsXG4gICAgfTtcbiAgICByZXR1cm4gZ2V0R3JhZmFuYVNlYXJjaGVyKCkuc2VhcmNoKHNlYXJjaFF1ZXJ5LCB0YWdzLmxlbmd0aCB8fCBkYXRhc291cmNlID8gZmlsdGVycyA6IHVuZGVmaW5lZCk7XG4gIH0sIFtxdWVyeV0pO1xuXG4gIGlmICghY29uZmlnLmZlYXR1cmVUb2dnbGVzLnBhbmVsVGl0bGVTZWFyY2gpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnN1cHBvcnRlZH0+VW5zdXBwb3J0ZWQ8L2Rpdj47XG4gIH1cblxuICBjb25zdCBnZXRUYWdPcHRpb25zID0gKCk6IFByb21pc2U8VGVybUNvdW50W10+ID0+IHtcbiAgICBjb25zdCB0YWdzID0gcmVzdWx0cy52YWx1ZT8uYm9keS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGFncycpO1xuXG4gICAgaWYgKHRhZ3MpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0VGVybUNvdW50cyh0YWdzKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoUXVlcnlDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgb25RdWVyeUNoYW5nZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBvblRhZ0NoYW5nZSA9ICh0YWdzOiBzdHJpbmdbXSkgPT4ge1xuICAgIG9uVGFnRmlsdGVyQ2hhbmdlKHRhZ3MpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e3sgbm9kZTogbm9kZSwgbWFpbjogbm9kZSB9fT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8SW5wdXQgdmFsdWU9e3F1ZXJ5LnF1ZXJ5fSBvbkNoYW5nZT17b25TZWFyY2hRdWVyeUNoYW5nZX0gYXV0b0ZvY3VzIHNwZWxsQ2hlY2s9e2ZhbHNlfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge3Jlc3VsdHMubG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cbiAgICAgICAge3Jlc3VsdHMudmFsdWU/LmJvZHkgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGFnRmlsdGVyIGlzQ2xlYXJhYmxlIHRhZ3M9e3F1ZXJ5LnRhZ30gdGFnT3B0aW9ucz17Z2V0VGFnT3B0aW9uc30gb25DaGFuZ2U9e29uVGFnQ2hhbmdlfSAvPiA8YnIgLz5cbiAgICAgICAgICAgIHtxdWVyeS5kYXRhc291cmNlICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EYXRhc291cmNlQ2hhbmdlKHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERhdGFzb3VyY2U6IHtxdWVyeS5kYXRhc291cmNlfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QXV0b1NpemVyIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzIwMDBweCcgfX0+XG4gICAgICAgICAgICAgIHsoeyB3aWR0aCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Jlc3VsdHMudmFsdWUhLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3F1ZXJ5LnRhZ31cbiAgICAgICAgICAgICAgICAgICAgICBvblRhZ0ZpbHRlckNoYW5nZT17b25UYWdDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25EYXRhc291cmNlQ2hhbmdlPXtvbkRhdGFzb3VyY2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9BdXRvU2l6ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHVuc3VwcG9ydGVkOiBjc3NgXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgYCxcblxuICBjbGVhckNsaWNrOiBjc3NgXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlQmxvY2tMYXlvdXQsIENvbHVtbiwgVGFibGVPcHRpb25zLCBDZWxsIH0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IHsgRGF0YUZyYW1lLCBEYXRhRnJhbWVUeXBlLCBEYXRhRnJhbWVWaWV3LCBEYXRhU291cmNlUmVmLCBGaWVsZCwgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgeyBnZXRUYWJsZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1RhYmxlL3N0eWxlcyc7XG5cbmltcG9ydCB7IExvY2F0aW9uSW5mbyB9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb2x1bW5zIH0gZnJvbSAnLi9jb2x1bW5zJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGF0YTogRGF0YUZyYW1lO1xuICB3aWR0aDogbnVtYmVyO1xuICB0YWdzOiBzdHJpbmdbXTtcbiAgb25UYWdGaWx0ZXJDaGFuZ2U6ICh0YWdzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgb25EYXRhc291cmNlQ2hhbmdlOiAoZGF0YXNvdXJjZT86IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCB0eXBlIFRhYmxlQ29sdW1uID0gQ29sdW1uICYge1xuICBmaWVsZD86IEZpZWxkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEFjY2VzcyB7XG4gIGtpbmQ6IHN0cmluZzsgLy8gcGFuZWwsIGRhc2hib2FyZCwgZm9sZGVyXG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7IC8vIGxpbmsgdG8gdmFsdWUgKHVuaXF1ZSlcbiAgdHlwZTogc3RyaW5nOyAvLyBncmFwaFxuICB0YWdzOiBzdHJpbmdbXTtcbiAgbG9jYXRpb246IExvY2F0aW9uSW5mb1tdOyAvLyB0aGUgZm9sZGVyIG5hbWVcbiAgc2NvcmU6IG51bWJlcjtcblxuICAvLyBDb3VudCBpbmZvXG4gIHBhbmVsQ291bnQ6IG51bWJlcjtcbiAgZGF0YXNvdXJjZTogRGF0YVNvdXJjZVJlZltdO1xufVxuXG5leHBvcnQgY29uc3QgVGFibGUgPSAoeyBkYXRhLCB3aWR0aCwgdGFncywgb25UYWdGaWx0ZXJDaGFuZ2UsIG9uRGF0YXNvdXJjZUNoYW5nZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHRhYmxlU3R5bGVzID0gdXNlU3R5bGVzMihnZXRUYWJsZVN0eWxlcyk7XG5cbiAgY29uc3QgbWVtb2l6ZWREYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFkYXRhLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gYXMgd2Ugb25seSB1c2UgdGhpcyB0byBmYWtlIHRoZSBsZW5ndGggb2Ygb3VyIGRhdGEgc2V0IGZvciByZWFjdC10YWJsZSB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhbHdheXMgcmV0dXJuIGFuIGFycmF5XG4gICAgLy8gZmlsbGVkIHdpdGggdmFsdWVzIGF0IGVhY2ggaW5kZXggb3RoZXJ3aXNlIHdlJ2xsIGVuZCB1cCB0cnlpbmcgdG8gY2FsbCBhY2Nlc3NSb3cgZm9yIG51bGx8dW5kZWZpbmVkIHZhbHVlIGluXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Rhbm5lcmxpbnNsZXkvcmVhY3QtdGFibGUvYmxvYi83YmUyZmM5ZDhiNWUyMjNmYzk5OGFmODg4NjVhZTg2YTg4NzkyZmRiL3NyYy9ob29rcy91c2VUYWJsZS5qcyNMNTg1XG4gICAgcmV0dXJuIEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKDApO1xuICB9LCBbZGF0YV0pO1xuXG4gIC8vIFJlYWN0LXRhYmxlIGNvbHVtbiBkZWZpbml0aW9uc1xuICBjb25zdCBhY2Nlc3MgPSB1c2VNZW1vKCgpID0+IG5ldyBEYXRhRnJhbWVWaWV3PEZpZWxkQWNjZXNzPihkYXRhKSwgW2RhdGFdKTtcbiAgY29uc3QgbWVtb2l6ZWRDb2x1bW5zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaXNEYXNoYm9hcmRMaXN0ID0gZGF0YS5tZXRhPy50eXBlID09PSBEYXRhRnJhbWVUeXBlLkRpcmVjdG9yeUxpc3Rpbmc7XG4gICAgcmV0dXJuIGdlbmVyYXRlQ29sdW1ucyhhY2Nlc3MsIGlzRGFzaGJvYXJkTGlzdCwgd2lkdGgsIHN0eWxlcywgdGFncywgb25UYWdGaWx0ZXJDaGFuZ2UsIG9uRGF0YXNvdXJjZUNoYW5nZSk7XG4gIH0sIFtkYXRhLm1ldGE/LnR5cGUsIGFjY2Vzcywgd2lkdGgsIHN0eWxlcywgdGFncywgb25UYWdGaWx0ZXJDaGFuZ2UsIG9uRGF0YXNvdXJjZUNoYW5nZV0pO1xuXG4gIGNvbnN0IG9wdGlvbnM6IFRhYmxlT3B0aW9uczx7fT4gPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBjb2x1bW5zOiBtZW1vaXplZENvbHVtbnMsXG4gICAgICBkYXRhOiBtZW1vaXplZERhdGEsXG4gICAgfSksXG4gICAgW21lbW9pemVkQ29sdW1ucywgbWVtb2l6ZWREYXRhXVxuICApO1xuXG4gIGNvbnN0IHsgZ2V0VGFibGVQcm9wcywgZ2V0VGFibGVCb2R5UHJvcHMsIGhlYWRlckdyb3Vwcywgcm93cywgcHJlcGFyZVJvdyB9ID0gdXNlVGFibGUob3B0aW9ucywgdXNlQmxvY2tMYXlvdXQpO1xuXG4gIGNvbnN0IFJlbmRlclJvdyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh7IGluZGV4OiByb3dJbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dJbmRleF07XG4gICAgICBwcmVwYXJlUm93KHJvdyk7XG5cbiAgICAgIGNvbnN0IHVybCA9IGFjY2Vzcy5maWVsZHMudXJsPy52YWx1ZXMuZ2V0KHJvd0luZGV4KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiB7Li4ucm93LmdldFJvd1Byb3BzKHsgc3R5bGUgfSl9IGNsYXNzTmFtZT17c3R5bGVzLnJvd0NvbnRhaW5lcn0+XG4gICAgICAgICAge3Jvdy5jZWxscy5tYXAoKGNlbGw6IENlbGwsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY2VsbC5jb2x1bW4uaWQgPT09ICdjb2x1bW4tY2hlY2tib3gnIHx8XG4gICAgICAgICAgICAgIGNlbGwuY29sdW1uLmlkID09PSAnY29sdW1uLXRhZ3MnIHx8XG4gICAgICAgICAgICAgIGNlbGwuY29sdW1uLmlkID09PSAnY29sdW1uLWRhdGFzb3VyY2UnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmNlbGxXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGVTdHlsZXM9e3RhYmxlU3R5bGVzfVxuICAgICAgICAgICAgICAgICAgICBjZWxsPXtjZWxsfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkNvdW50PXtyb3cuY2VsbHMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGxXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGVTdHlsZXM9e3RhYmxlU3R5bGVzfVxuICAgICAgICAgICAgICAgICAgICBjZWxsPXtjZWxsfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkNvdW50PXtyb3cuY2VsbHMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0sXG4gICAgW3Jvd3MsIHByZXBhcmVSb3csIGFjY2Vzcy5maWVsZHMudXJsPy52YWx1ZXMsIHN0eWxlcy5yb3dDb250YWluZXIsIHN0eWxlcy5jZWxsV3JhcHBlciwgdGFibGVTdHlsZXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5nZXRUYWJsZVByb3BzKCl9IHN0eWxlPXt7IHdpZHRoIH19IGFyaWEtbGFiZWw9eydTZWFyY2ggcmVzdWx0IHRhYmxlJ30gcm9sZT1cInRhYmxlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXApID0+IHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgLi4uaGVhZGVyR3JvdXBQcm9wcyB9ID0gaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IHsuLi5oZWFkZXJHcm91cFByb3BzfSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJSb3d9PlxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsga2V5LCAuLi5oZWFkZXJQcm9wcyB9ID0gY29sdW1uLmdldEhlYWRlclByb3BzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IHsuLi5oZWFkZXJQcm9wc30gcm9sZT1cImNvbHVtbmhlYWRlclwiIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNlbGx9PlxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICB7cm93cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XG4gICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17cm93cy5sZW5ndGh9XG4gICAgICAgICAgICBpdGVtU2l6ZT17dGFibGVTdHlsZXMucm93SGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQm9keX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7UmVuZGVyUm93fVxuICAgICAgICAgIDwvRml4ZWRTaXplTGlzdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vRGF0YX0+Tm8gZGF0YTwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgY29uc3Qgcm93SG92ZXJCZyA9IHRoZW1lLmNvbG9ycy5lbXBoYXNpemUodGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeSwgMC4wMyk7XG5cbiAgcmV0dXJuIHtcbiAgICBub0RhdGE6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGAsXG4gICAgdGFibGU6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gICAgdGFibGVCb2R5OiBjc3NgXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiBhdXRvJztcbiAgICBgLFxuICAgIGNlbGxJY29uOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICAgIGNlbGxXcmFwcGVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGAsXG4gICAgaGVhZGVyQ2VsbDogY3NzYFxuICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBgLFxuICAgIGhlYWRlclJvdzogY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICAgIHJvd0NvbnRhaW5lcjogY3NzYFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cm93SG92ZXJCZ307XG4gICAgICB9XG4gICAgYCxcbiAgICB0eXBlSWNvbjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiA5LjVweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnYxLnNwYWNpbmcueHhzfTtcbiAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBgLFxuICAgIHR5cGVUZXh0OiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGAsXG4gICAgbG9jYXRpb25JdGVtOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGAsXG4gICAgY2hlY2tib3hIZWFkZXI6IGNzc2BcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBjaGVja2JveDogY3NzYFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYCxcbiAgICBpbmZvV3JhcDogY3NzYFxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICBgLFxuICAgIHRhZ0xpc3Q6IGNzc2BcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFGcmFtZVZpZXcsIERhdGFTb3VyY2VSZWYsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCBTVkcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcbmltcG9ydCB7IENoZWNrYm94LCBJY29uLCBJY29uTmFtZSwgVGFnTGlzdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERlZmF1bHRDZWxsIH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvVGFibGUvRGVmYXVsdENlbGwnO1xuXG5pbXBvcnQgeyBGaWVsZEFjY2VzcywgVGFibGVDb2x1bW4gfSBmcm9tICcuL1RhYmxlJztcbmltcG9ydCB7IExvY2F0aW9uSW5mbyB9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVDb2x1bW5zID0gKFxuICBkYXRhOiBEYXRhRnJhbWVWaWV3PEZpZWxkQWNjZXNzPixcbiAgaXNEYXNoYm9hcmRMaXN0OiBib29sZWFuLFxuICBhdmFpbGFibGVXaWR0aDogbnVtYmVyLFxuICBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sXG4gIHRhZ3M6IHN0cmluZ1tdLFxuICBvblRhZ0ZpbHRlckNoYW5nZTogKHRhZ3M6IHN0cmluZ1tdKSA9PiB2b2lkLFxuICBvbkRhdGFzb3VyY2VDaGFuZ2U6IChkYXRhc291cmNlPzogc3RyaW5nKSA9PiB2b2lkXG4pOiBUYWJsZUNvbHVtbltdID0+IHtcbiAgY29uc3QgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtdO1xuICBjb25zdCB1cmxGaWVsZCA9IGRhdGEuZmllbGRzLnVybCE7XG4gIGNvbnN0IGFjY2VzcyA9IGRhdGEuZmllbGRzO1xuXG4gIGF2YWlsYWJsZVdpZHRoIC09IDg7IC8vID8/P1xuICBsZXQgd2lkdGggPSA1MDtcblxuICAvLyBUT0RPOiBBZGQgb3B0aW9uYWwgY2hlY2tib3ggc3VwcG9ydFxuICBpZiAoZmFsc2UpIHtcbiAgICAvLyBjaGVja2JveCBjb2x1bW5cbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6IGBjb2x1bW4tY2hlY2tib3hgLFxuICAgICAgSGVhZGVyOiAoKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hIZWFkZXJ9PlxuICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17KCkgPT4ge319IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSxcbiAgICAgIENlbGw6ICgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH0+XG4gICAgICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApLFxuICAgICAgYWNjZXNzb3I6ICdjaGVjaycsXG4gICAgICBmaWVsZDogdXJsRmllbGQsXG4gICAgICB3aWR0aDogMzAsXG4gICAgfSk7XG4gICAgYXZhaWxhYmxlV2lkdGggLT0gd2lkdGg7XG4gIH1cblxuICAvLyBOYW1lIGNvbHVtblxuICB3aWR0aCA9IE1hdGgubWF4KGF2YWlsYWJsZVdpZHRoICogMC4yLCAyMDApO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIENlbGw6IERlZmF1bHRDZWxsLFxuICAgIGlkOiBgY29sdW1uLW5hbWVgLFxuICAgIGZpZWxkOiBhY2Nlc3MubmFtZSEsXG4gICAgSGVhZGVyOiAnTmFtZScsXG4gICAgYWNjZXNzb3I6IChyb3c6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gYWNjZXNzLm5hbWUhLnZhbHVlcy5nZXQoaSk7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHdpZHRoLFxuICB9KTtcbiAgYXZhaWxhYmxlV2lkdGggLT0gd2lkdGg7XG5cbiAgY29uc3QgVFlQRV9DT0xVTU5fV0lEVEggPSAxMzA7XG4gIGNvbnN0IERBVEFTT1VSQ0VfQ09MVU1OX1dJRFRIID0gMjAwO1xuICBjb25zdCBJTkZPX0NPTFVNTl9XSURUSCA9IDEwMDtcbiAgY29uc3QgTE9DQVRJT05fQ09MVU1OX1dJRFRIID0gMjAwO1xuXG4gIHdpZHRoID0gVFlQRV9DT0xVTU5fV0lEVEg7XG4gIGlmIChpc0Rhc2hib2FyZExpc3QpIHtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgQ2VsbDogRGVmYXVsdENlbGwsXG4gICAgICBpZDogYGNvbHVtbi10eXBlYCxcbiAgICAgIGZpZWxkOiBhY2Nlc3MubmFtZSEsXG4gICAgICBIZWFkZXI6ICdUeXBlJyxcbiAgICAgIGFjY2Vzc29yOiAocm93OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZVRleHR9PlxuICAgICAgICAgICAgPEljb24gbmFtZT17J2FwcHMnfSBjbGFzc05hbWU9e3N0eWxlcy50eXBlSWNvbn0gLz5cbiAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHdpZHRoLFxuICAgIH0pO1xuICAgIGF2YWlsYWJsZVdpZHRoIC09IHdpZHRoO1xuICB9IGVsc2Uge1xuICAgIGNvbHVtbnMucHVzaChtYWtlVHlwZUNvbHVtbihhY2Nlc3Mua2luZCwgYWNjZXNzLnR5cGUsIHdpZHRoLCBzdHlsZXMudHlwZVRleHQsIHN0eWxlcy50eXBlSWNvbikpO1xuICAgIGF2YWlsYWJsZVdpZHRoIC09IHdpZHRoO1xuICB9XG5cbiAgLy8gU2hvdyBkYXRhc291cmNlcyBpZiB3ZSBoYXZlIGFueVxuICBpZiAoYWNjZXNzLmRhdGFzb3VyY2UgJiYgaGFzRmllbGRWYWx1ZShhY2Nlc3MuZGF0YXNvdXJjZSkpIHtcbiAgICB3aWR0aCA9IERBVEFTT1VSQ0VfQ09MVU1OX1dJRFRIO1xuICAgIGNvbHVtbnMucHVzaChtYWtlRGF0YVNvdXJjZUNvbHVtbihhY2Nlc3MuZGF0YXNvdXJjZSwgd2lkdGgsIHN0eWxlcy50eXBlSWNvbiwgb25EYXRhc291cmNlQ2hhbmdlKSk7XG4gICAgYXZhaWxhYmxlV2lkdGggLT0gd2lkdGg7XG4gIH1cblxuICBpZiAoaXNEYXNoYm9hcmRMaXN0KSB7XG4gICAgd2lkdGggPSBJTkZPX0NPTFVNTl9XSURUSDtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgQ2VsbDogRGVmYXVsdENlbGwsXG4gICAgICBpZDogYGNvbHVtbi1pbmZvYCxcbiAgICAgIGZpZWxkOiBhY2Nlc3MudXJsISxcbiAgICAgIEhlYWRlcjogJ0luZm8nLFxuICAgICAgYWNjZXNzb3I6IChyb3c6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhbmVsQ291bnQgPSBhY2Nlc3MucGFuZWxDb3VudD8udmFsdWVzLmdldChpKTtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1dyYXB9PntwYW5lbENvdW50ICE9IG51bGwgJiYgPHNwYW4+UGFuZWxzOiB7cGFuZWxDb3VudH08L3NwYW4+fTwvZGl2PjtcbiAgICAgIH0sXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgfSk7XG4gICAgYXZhaWxhYmxlV2lkdGggLT0gd2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIENlbGw6IERlZmF1bHRDZWxsLFxuICAgICAgaWQ6IGBjb2x1bW4tbG9jYXRpb25gLFxuICAgICAgZmllbGQ6IGFjY2Vzcy5sb2NhdGlvbiA/PyBhY2Nlc3MudXJsLFxuICAgICAgSGVhZGVyOiAnTG9jYXRpb24nLFxuICAgICAgYWNjZXNzb3I6IChyb3c6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYWNjZXNzLmxvY2F0aW9uPy52YWx1ZXMuZ2V0KGkpIGFzIExvY2F0aW9uSW5mb1tdO1xuICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2xvY2F0aW9uLm1hcCgodiwgaWQpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uSXRlbX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0NMSUNLOiAnICsgdi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17Z2V0SWNvbkZvcktpbmQodi5raW5kKX0gLz4ge3YubmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICB3aWR0aDogTE9DQVRJT05fQ09MVU1OX1dJRFRILFxuICAgIH0pO1xuICAgIGF2YWlsYWJsZVdpZHRoIC09IHdpZHRoO1xuICB9XG5cbiAgLy8gU2hvdyB0YWdzIGlmIHdlIGhhdmUgYW55XG4gIGlmIChhY2Nlc3MudGFncyAmJiBoYXNGaWVsZFZhbHVlKGFjY2Vzcy50YWdzKSkge1xuICAgIHdpZHRoID0gTWF0aC5tYXgoYXZhaWxhYmxlV2lkdGgsIDI1MCk7XG4gICAgY29sdW1ucy5wdXNoKG1ha2VUYWdzQ29sdW1uKGFjY2Vzcy50YWdzLCB3aWR0aCwgc3R5bGVzLnRhZ0xpc3QsIHRhZ3MsIG9uVGFnRmlsdGVyQ2hhbmdlKSk7XG4gIH1cblxuICByZXR1cm4gY29sdW1ucztcbn07XG5cbmZ1bmN0aW9uIGhhc0ZpZWxkVmFsdWUoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGQudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdiA9IGZpZWxkLnZhbHVlcy5nZXQoaSk7XG4gICAgaWYgKHYgJiYgdi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldEljb25Gb3JLaW5kKHY6IHN0cmluZyk6IEljb25OYW1lIHtcbiAgaWYgKHYgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgcmV0dXJuICdhcHBzJztcbiAgfVxuICBpZiAodiA9PT0gJ2ZvbGRlcicpIHtcbiAgICByZXR1cm4gJ2ZvbGRlcic7XG4gIH1cbiAgcmV0dXJuICdxdWVzdGlvbi1jaXJjbGUnO1xufVxuXG5mdW5jdGlvbiBtYWtlRGF0YVNvdXJjZUNvbHVtbihcbiAgZmllbGQ6IEZpZWxkPERhdGFTb3VyY2VSZWZbXT4sXG4gIHdpZHRoOiBudW1iZXIsXG4gIGljb25DbGFzczogc3RyaW5nLFxuICBvbkRhdGFzb3VyY2VDaGFuZ2U6IChkYXRhc291cmNlPzogc3RyaW5nKSA9PiB2b2lkXG4pOiBUYWJsZUNvbHVtbiB7XG4gIHJldHVybiB7XG4gICAgQ2VsbDogRGVmYXVsdENlbGwsXG4gICAgaWQ6IGBjb2x1bW4tZGF0YXNvdXJjZWAsXG4gICAgZmllbGQsXG4gICAgSGVhZGVyOiAnRGF0YSBzb3VyY2UnLFxuICAgIGFjY2Vzc29yOiAocm93OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgZHNsaXN0ID0gZmllbGQudmFsdWVzLmdldChpKTtcbiAgICAgIGlmIChkc2xpc3Q/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBzcnYgPSBnZXREYXRhU291cmNlU3J2KCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtkc2xpc3QubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gc3J2LmdldEluc3RhbmNlU2V0dGluZ3Modik7XG4gICAgICAgICAgICAgIGNvbnN0IGljb24gPSBzZXR0aW5ncz8ubWV0YT8uaW5mbz8ubG9nb3M/LnNtYWxsO1xuICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BkYXRhc291cmNlcy9lZGl0LyR7c2V0dGluZ3MudWlkfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgb25EYXRhc291cmNlQ2hhbmdlKHNldHRpbmdzLnVpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTVkcgc3JjPXtpY29ufSB3aWR0aD17MTR9IGhlaWdodD17MTR9IHRpdGxlPXtzZXR0aW5ncy50eXBlfSBjbGFzc05hbWU9e2ljb25DbGFzc30gLz5cbiAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfT57di50eXBlfTwvc3Bhbj47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgd2lkdGgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VUeXBlQ29sdW1uKFxuICBraW5kRmllbGQ6IEZpZWxkPHN0cmluZz4sXG4gIHR5cGVGaWVsZDogRmllbGQ8c3RyaW5nPixcbiAgd2lkdGg6IG51bWJlcixcbiAgdHlwZVRleHRDbGFzczogc3RyaW5nLFxuICBpY29uQ2xhc3M6IHN0cmluZ1xuKTogVGFibGVDb2x1bW4ge1xuICByZXR1cm4ge1xuICAgIENlbGw6IERlZmF1bHRDZWxsLFxuICAgIGlkOiBgY29sdW1uLXR5cGVgLFxuICAgIGZpZWxkOiBraW5kRmllbGQsXG4gICAgSGVhZGVyOiAnVHlwZScsXG4gICAgYWNjZXNzb3I6IChyb3c6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBraW5kID0ga2luZEZpZWxkLnZhbHVlcy5nZXQoaSk7XG4gICAgICBsZXQgaWNvbiA9ICdwdWJsaWMvaW1nL2ljb25zL3VuaWNvbnMvYXBwcy5zdmcnO1xuICAgICAgbGV0IHR4dCA9ICdEYXNoYm9hcmQnO1xuICAgICAgaWYgKGtpbmQpIHtcbiAgICAgICAgdHh0ID0ga2luZDtcbiAgICAgICAgc3dpdGNoICh0eHQpIHtcbiAgICAgICAgICBjYXNlICdkYXNoYm9hcmQnOlxuICAgICAgICAgICAgdHh0ID0gJ0Rhc2hib2FyZCc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2ZvbGRlcic6XG4gICAgICAgICAgICBpY29uID0gJ3B1YmxpYy9pbWcvaWNvbnMvdW5pY29ucy9mb2xkZXIuc3ZnJztcbiAgICAgICAgICAgIHR4dCA9ICdGb2xkZXInO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdwYW5lbCc6XG4gICAgICAgICAgICBpY29uID0gJ3B1YmxpYy9pbWcvaWNvbnMvdW5pY29ucy9ncmFwaC1iYXIuc3ZnJztcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlRmllbGQudmFsdWVzLmdldChpKTtcbiAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgIHR4dCA9IHR5cGU7XG4gICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBjb25maWcucGFuZWxzW3R4dF07XG4gICAgICAgICAgICAgIGlmIChpbmZvPy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IGluZm8uaW5mbz8ubG9nb3Muc21hbGw7XG4gICAgICAgICAgICAgICAgaWYgKHYgJiYgdi5lbmRzV2l0aCgnLnN2ZycpKSB7XG4gICAgICAgICAgICAgICAgICBpY29uID0gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHh0ID0gaW5mby5uYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZVRleHRDbGFzc30+XG4gICAgICAgICAgPFNWRyBzcmM9e2ljb259IHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gdGl0bGU9e3R4dH0gY2xhc3NOYW1lPXtpY29uQ2xhc3N9IC8+XG4gICAgICAgICAge3R4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0sXG4gICAgd2lkdGgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VUYWdzQ29sdW1uKFxuICBmaWVsZDogRmllbGQ8c3RyaW5nW10+LFxuICB3aWR0aDogbnVtYmVyLFxuICB0YWdMaXN0Q2xhc3M6IHN0cmluZyxcbiAgY3VycmVudFRhZ0ZpbHRlcjogc3RyaW5nW10sXG4gIG9uVGFnRmlsdGVyQ2hhbmdlOiAodGFnczogc3RyaW5nW10pID0+IHZvaWRcbik6IFRhYmxlQ29sdW1uIHtcbiAgY29uc3QgdXBkYXRlVGFnRmlsdGVyID0gKHRhZzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VGFnRmlsdGVyLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgIG9uVGFnRmlsdGVyQ2hhbmdlKFsuLi5jdXJyZW50VGFnRmlsdGVyLCB0YWddKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBDZWxsOiBEZWZhdWx0Q2VsbCxcbiAgICBpZDogYGNvbHVtbi10YWdzYCxcbiAgICBmaWVsZDogZmllbGQsXG4gICAgSGVhZGVyOiAnVGFncycsXG4gICAgYWNjZXNzb3I6IChyb3c6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB0YWdzID0gZmllbGQudmFsdWVzLmdldChpKTtcbiAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgIHJldHVybiA8VGFnTGlzdCBjbGFzc05hbWU9e3RhZ0xpc3RDbGFzc30gdGFncz17dGFnc30gb25DbGljaz17dXBkYXRlVGFnRmlsdGVyfSAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgd2lkdGgsXG4gIH07XG59XG4iLCJpbXBvcnQge1xuICBBcnJheVZlY3RvcixcbiAgRGF0YUZyYW1lLFxuICBEYXRhRnJhbWVUeXBlLFxuICBEYXRhRnJhbWVWaWV3LFxuICBGaWVsZCxcbiAgRmllbGRUeXBlLFxuICBnZXREaXNwbGF5UHJvY2Vzc29yLFxuICBWZWN0b3IsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBnZXREYXRhU291cmNlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBHcmFmYW5hRGF0YXNvdXJjZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhZmFuYS9kYXRhc291cmNlJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdyYWZhbmFRdWVyeVR5cGUgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYWZhbmEvdHlwZXMnO1xuaW1wb3J0IHsgVGVybUNvdW50IH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnRmlsdGVyJztcbmltcG9ydCB7IFF1ZXJ5RmlsdGVycyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgUXVlcnlSZXN1bHQgfSBmcm9tICcuJztcblxuLy8gVGhlIHJhdyByZXN0dWxzIGZyb20gcXVlcnkgc2VydmVyXG5leHBvcnQgaW50ZXJmYWNlIFJhd0luZGV4RGF0YSB7XG4gIGZvbGRlcj86IERhdGFGcmFtZTtcbiAgZGFzaGJvYXJkPzogRGF0YUZyYW1lO1xuICBwYW5lbD86IERhdGFGcmFtZTtcbn1cblxuZXhwb3J0IHR5cGUgcmF3SW5kZXhTdXBwbGllciA9ICgpID0+IFByb21pc2U8UmF3SW5kZXhEYXRhPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJhd0luZGV4RGF0YSgpOiBQcm9taXNlPFJhd0luZGV4RGF0YT4ge1xuICBjb25zdCBkcyA9IChhd2FpdCBnZXREYXRhU291cmNlU3J2KCkuZ2V0KCctLSBHcmFmYW5hIC0tJykpIGFzIEdyYWZhbmFEYXRhc291cmNlO1xuICBjb25zdCByc3AgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgIGRzLnF1ZXJ5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgeyByZWZJZDogJ0EnLCBxdWVyeVR5cGU6IEdyYWZhbmFRdWVyeVR5cGUuU2VhcmNoIH0sIC8vIGdldHMgYWxsIGRhdGFcbiAgICAgIF0sXG4gICAgfSBhcyBhbnkpXG4gICk7XG5cbiAgY29uc3QgZGF0YTogUmF3SW5kZXhEYXRhID0ge307XG4gIGZvciAoY29uc3QgZiBvZiByc3AuZGF0YSkge1xuICAgIGNvbnN0IGZyYW1lID0gZiBhcyBEYXRhRnJhbWU7XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBmcmFtZS5maWVsZHMpIHtcbiAgICAgIC8vIFBhcnNlIHRhZ3MvZHMgZnJvbSBKU09OIHN0cmluZ1xuICAgICAgaWYgKGZpZWxkLm5hbWUgPT09ICd0YWdzJyB8fCBmaWVsZC5uYW1lID09PSAnZGF0YXNvdXJjZScpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gZmllbGQudmFsdWVzLnRvQXJyYXkoKS5tYXAoKHYpID0+IHtcbiAgICAgICAgICBpZiAodj8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBhcnIgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICByZXR1cm4gYXJyLmxlbmd0aCA/IGFyciA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gY2F0Y2gge31cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZWxkLnR5cGUgPSBGaWVsZFR5cGUub3RoZXI7IC8vIFtdc3RyaW5nXG4gICAgICAgIGZpZWxkLnZhbHVlcyA9IG5ldyBBcnJheVZlY3Rvcih2YWx1ZXMpO1xuICAgICAgfVxuXG4gICAgICBmaWVsZC5kaXNwbGF5ID0gZ2V0RGlzcGxheVByb2Nlc3Nvcih7IGZpZWxkLCB0aGVtZTogY29uZmlnLnRoZW1lMiB9KTtcbiAgICB9XG4gICAgZnJhbWUubWV0YSA9IHtcbiAgICAgIHR5cGU6IERhdGFGcmFtZVR5cGUuRGlyZWN0b3J5TGlzdGluZyxcbiAgICB9O1xuXG4gICAgc3dpdGNoIChmcmFtZS5uYW1lKSB7XG4gICAgICBjYXNlICdkYXNoYm9hcmRzJzpcbiAgICAgICAgZGF0YS5kYXNoYm9hcmQgPSBmcmFtZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYW5lbHMnOlxuICAgICAgICBkYXRhLnBhbmVsID0gZnJhbWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZm9sZGVycyc6XG4gICAgICAgIGRhdGEuZm9sZGVyID0gZnJhbWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU3RhdHNUYWJsZShmaWVsZD86IEZpZWxkKTogRGF0YUZyYW1lIHtcbiAgaWYgKCFmaWVsZCkge1xuICAgIHJldHVybiB7IGxlbmd0aDogMCwgZmllbGRzOiBbXSB9O1xuICB9XG5cbiAgY29uc3QgY291bnRzID0gbmV3IE1hcDxhbnksIG51bWJlcj4oKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrID0gZmllbGQudmFsdWVzLmdldChpKTtcbiAgICBjb25zdCB2ID0gY291bnRzLmdldChrKSA/PyAwO1xuICAgIGNvdW50cy5zZXQoaywgdiArIDEpO1xuICB9XG5cbiAgLy8gU29ydCBsYXJnZXN0IGZpcnN0XG4gIGNvdW50c1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCogWy4uLnRoaXMuZW50cmllcygpXS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gIH07XG5cbiAgY29uc3Qga2V5czogYW55W10gPSBbXTtcbiAgY29uc3QgdmFsczogbnVtYmVyW10gPSBbXTtcblxuICBmb3IgKGxldCBbaywgdl0gb2YgY291bnRzKSB7XG4gICAga2V5cy5wdXNoKGspO1xuICAgIHZhbHMucHVzaCh2KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmllbGRzOiBbXG4gICAgICB7IC4uLmZpZWxkLCB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcihrZXlzKSB9LFxuICAgICAgeyBuYW1lOiAnQ291bnQnLCB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLCB2YWx1ZXM6IG5ldyBBcnJheVZlY3Rvcih2YWxzKSwgY29uZmlnOiB7fSB9LFxuICAgIF0sXG4gICAgbGVuZ3RoOiBrZXlzLmxlbmd0aCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlcm1Db3VudHMoZmllbGQ/OiBGaWVsZCk6IFRlcm1Db3VudFtdIHtcbiAgaWYgKCFmaWVsZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGNvdW50cyA9IG5ldyBNYXA8YW55LCBudW1iZXI+KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGQudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgayA9IGZpZWxkLnZhbHVlcy5nZXQoaSk7XG4gICAgaWYgKGsgPT0gbnVsbCB8fCAhay5sZW5ndGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShrKSkge1xuICAgICAgZm9yIChjb25zdCBzdWIgb2Ygaykge1xuICAgICAgICBjb25zdCB2ID0gY291bnRzLmdldChzdWIpID8/IDA7XG4gICAgICAgIGNvdW50cy5zZXQoc3ViLCB2ICsgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHYgPSBjb3VudHMuZ2V0KGspID8/IDA7XG4gICAgICBjb3VudHMuc2V0KGssIHYgKyAxKTtcbiAgICB9XG4gIH1cblxuICAvLyBTb3J0IGxhcmdlc3QgZmlyc3RcbiAgY291bnRzW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkKiBbLi4udGhpcy5lbnRyaWVzKCldLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcbiAgfTtcblxuICBjb25zdCB0ZXJtczogVGVybUNvdW50W10gPSBbXTtcbiAgZm9yIChsZXQgW3Rlcm0sIGNvdW50XSBvZiBjb3VudHMpIHtcbiAgICB0ZXJtcy5wdXNoKHtcbiAgICAgIHRlcm0sXG4gICAgICBjb3VudCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckZyYW1lKGZyYW1lOiBEYXRhRnJhbWUsIGZpbHRlcj86IFF1ZXJ5RmlsdGVycyk6IERhdGFGcmFtZSB7XG4gIGlmICghZmlsdGVyKSB7XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG4gIGNvbnN0IHZpZXcgPSBuZXcgRGF0YUZyYW1lVmlldzxRdWVyeVJlc3VsdD4oZnJhbWUpO1xuICBjb25zdCBrZWVwOiBudW1iZXJbXSA9IFtdO1xuXG4gIGNvbnN0IGRzID0gZmlsdGVyLmRhdGFzb3VyY2UgPyB2aWV3LmZpZWxkcy5kYXRhc291cmNlIDogdW5kZWZpbmVkO1xuICBjb25zdCB0YWdzID0gZmlsdGVyLnRhZ3M/Lmxlbmd0aCA/IHZpZXcuZmllbGRzLnRhZ3MgOiB1bmRlZmluZWQ7XG5cbiAgbGV0IG9rID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgb2sgPSB0cnVlO1xuXG4gICAgaWYgKHRhZ3MpIHtcbiAgICAgIGNvbnN0IHYgPSB0YWdzLnZhbHVlcy5nZXQoaSk7XG4gICAgICBpZiAoIXYpIHtcbiAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiBmaWx0ZXIudGFncyEpIHtcbiAgICAgICAgICBpZiAoIXYuaW5jbHVkZXModCkpIHtcbiAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob2sgJiYgZHMgJiYgZmlsdGVyLmRhdGFzb3VyY2UpIHtcbiAgICAgIG9rID0gZmFsc2U7XG4gICAgICBjb25zdCB2ID0gZHMudmFsdWVzLmdldChpKTtcbiAgICAgIGlmICh2KSB7XG4gICAgICAgIGZvciAoY29uc3QgZCBvZiB2KSB7XG4gICAgICAgICAgaWYgKGQudWlkID09PSBmaWx0ZXIuZGF0YXNvdXJjZSkge1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9rKSB7XG4gICAgICBrZWVwLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtZXRhOiBmcmFtZS5tZXRhLFxuICAgIG5hbWU6IGZyYW1lLm5hbWUsXG4gICAgZmllbGRzOiBmcmFtZS5maWVsZHMubWFwKChmKSA9PiAoeyAuLi5mLCB2YWx1ZXM6IGZpbHRlclZhbHVlcyhrZWVwLCBmLnZhbHVlcykgfSkpLFxuICAgIGxlbmd0aDoga2VlcC5sZW5ndGgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlclZhbHVlcyhrZWVwOiBudW1iZXJbXSwgcmF3OiBWZWN0b3I8YW55Pik6IFZlY3Rvcjxhbnk+IHtcbiAgY29uc3QgdmFsdWVzID0gbmV3IEFycmF5KGtlZXAubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZWVwLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWVzW2ldID0gcmF3LmdldChrZWVwW2ldKTtcbiAgfVxuICByZXR1cm4gbmV3IEFycmF5VmVjdG9yKHZhbHVlcyk7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7IGdldEdyYWZhbmFTZWFyY2hlciB9IGZyb20gJy4vc2VhcmNoZXInO1xuIiwiaW1wb3J0IE1pbmlTZWFyY2ggZnJvbSAnbWluaXNlYXJjaCc7XG5pbXBvcnQgeyBBcnJheVZlY3RvciwgRGF0YUZyYW1lLCBEYXRhU291cmNlUmVmLCBGaWVsZCwgRmllbGRUeXBlLCBnZXREaXNwbGF5UHJvY2Vzc29yLCBWZWN0b3IgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBHcmFmYW5hU2VhcmNoZXIsIFF1ZXJ5RmlsdGVycywgUXVlcnlSZXNwb25zZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZmlsdGVyRnJhbWUsIGdldFJhd0luZGV4RGF0YSwgUmF3SW5kZXhEYXRhLCByYXdJbmRleFN1cHBsaWVyIH0gZnJvbSAnLi9iYWNrZW5kJztcbmltcG9ydCB7IExvY2F0aW9uSW5mbyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgdHlwZSBTZWFyY2hSZXN1bHRLaW5kID0ga2V5b2YgUmF3SW5kZXhEYXRhO1xuXG5pbnRlcmZhY2UgSW5wdXREb2Mge1xuICBraW5kOiBTZWFyY2hSZXN1bHRLaW5kO1xuICBpbmRleDogbnVtYmVyO1xuXG4gIC8vIEZpZWxkc1xuICBpZD86IFZlY3RvcjxudW1iZXI+O1xuICB1cmw/OiBWZWN0b3I8c3RyaW5nPjtcbiAgdWlkPzogVmVjdG9yPHN0cmluZz47XG4gIG5hbWU/OiBWZWN0b3I8c3RyaW5nPjtcbiAgZm9sZGVyPzogVmVjdG9yPG51bWJlcj47XG4gIGRlc2NyaXB0aW9uPzogVmVjdG9yPHN0cmluZz47XG4gIGRhc2hib2FyZElEPzogVmVjdG9yPG51bWJlcj47XG4gIGxvY2F0aW9uPzogVmVjdG9yPExvY2F0aW9uSW5mb1tdPjtcbiAgZGF0YXNvdXJjZT86IFZlY3RvcjxEYXRhU291cmNlUmVmW10+O1xuICB0eXBlPzogVmVjdG9yPHN0cmluZz47XG4gIHRhZ3M/OiBWZWN0b3I8c3RyaW5nW10+OyAvLyBKU09OIHN0cmluZ3M/XG59XG5cbmludGVyZmFjZSBDb21wb3NpdGVLZXkge1xuICBraW5kOiBTZWFyY2hSZXN1bHRLaW5kO1xuICBpbmRleDogbnVtYmVyO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudHMgc2VhcmNoIGluIHRoZSBmcm9udGVuZCB1c2luZyB0aGUgbWluaXNlYXJjaCBsaWJyYXJ5XG5leHBvcnQgY2xhc3MgTWluaVNlYXJjaGVyIGltcGxlbWVudHMgR3JhZmFuYVNlYXJjaGVyIHtcbiAgbG9va3VwID0gbmV3IE1hcDxTZWFyY2hSZXN1bHRLaW5kLCBJbnB1dERvYz4oKTtcbiAgZGF0YTogUmF3SW5kZXhEYXRhID0ge307XG4gIGluZGV4PzogTWluaVNlYXJjaDxJbnB1dERvYz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdXBwbGllcjogcmF3SW5kZXhTdXBwbGllciA9IGdldFJhd0luZGV4RGF0YSkge1xuICAgIC8vIHdhaXRzIGZvciBmaXJzdCByZXF1ZXN0IHRvIGxvYWQgZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0SW5kZXgoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc3VwcGxpZXIoKTtcblxuICAgIGNvbnN0IHNlYXJjaGVyID0gbmV3IE1pbmlTZWFyY2g8SW5wdXREb2M+KHtcbiAgICAgIGlkRmllbGQ6ICdfX2lkJyxcbiAgICAgIGZpZWxkczogWyduYW1lJywgJ2Rlc2NyaXB0aW9uJywgJ3RhZ3MnLCAndHlwZScsICd0YWdzJ10sIC8vIGZpZWxkcyB0byBpbmRleCBmb3IgZnVsbC10ZXh0IHNlYXJjaFxuICAgICAgc2VhcmNoT3B0aW9uczoge1xuICAgICAgICBib29zdDoge1xuICAgICAgICAgIG5hbWU6IDMsXG4gICAgICAgICAgZGVzY3JpcHRpb246IDEsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJvb3N0IGRhc2hib2FyZCBtYXRjaGVzIGZpcnN0XG4gICAgICAgIGJvb3N0RG9jdW1lbnQ6IChkb2N1bWVudElkOiBhbnksIHRlcm06IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IGtpbmQgPSBkb2N1bWVudElkLmtpbmQ7XG4gICAgICAgICAgaWYgKGtpbmQgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gMS40O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa2luZCA9PT0gJ2ZvbGRlcicpIHtcbiAgICAgICAgICAgIHJldHVybiAxLjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHRydWUsXG4gICAgICAgIGZ1enp5OiAodGVybSkgPT4gKHRlcm0ubGVuZ3RoID4gNCA/IDAuMiA6IGZhbHNlKSxcbiAgICAgIH0sXG4gICAgICBleHRyYWN0RmllbGQ6IChkb2MsIG5hbWUpID0+IHtcbiAgICAgICAgLy8gcmV0dXJuIGEgY29tcG9zaXRlIGtleSBmb3IgdGhlIGlkXG4gICAgICAgIGlmIChuYW1lID09PSAnX19pZCcpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogZG9jLmtpbmQsXG4gICAgICAgICAgICBpbmRleDogZG9jLmluZGV4LFxuICAgICAgICAgIH0gYXMgYW55O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IChkb2MgYXMgYW55KVtuYW1lXSBhcyBWZWN0b3I7XG4gICAgICAgIGlmICghdmFsdWVzKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzLmdldChkb2MuaW5kZXgpO1xuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlIGFzIHN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuam9pbignICcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbG9va3VwID0gbmV3IE1hcDxTZWFyY2hSZXN1bHRLaW5kLCBJbnB1dERvYz4oKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIGZyYW1lXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgY29uc3Qga2luZCA9IGtleSBhcyBTZWFyY2hSZXN1bHRLaW5kO1xuICAgICAgY29uc3QgaW5wdXQgPSBnZXRJbnB1dERvYyhraW5kLCBmcmFtZSk7XG4gICAgICBsb29rdXAuc2V0KGtpbmQsIGlucHV0KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5wdXQuaW5kZXggPSBpO1xuICAgICAgICBzZWFyY2hlci5hZGQoaW5wdXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbnN0cnVjdCB0aGUgVVJMIGZpZWxkIGZvciBlYWNoIHBhbmVsXG4gICAgY29uc3QgZm9sZGVySURUb0luZGV4ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcbiAgICBjb25zdCBmb2xkZXIgPSBsb29rdXAuZ2V0KCdmb2xkZXInKTtcbiAgICBjb25zdCBkYXNoYm9hcmQgPSBsb29rdXAuZ2V0KCdkYXNoYm9hcmQnKTtcbiAgICBjb25zdCBwYW5lbCA9IGxvb2t1cC5nZXQoJ3BhbmVsJyk7XG4gICAgaWYgKGZvbGRlcj8uaWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9sZGVyLmlkPy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb2xkZXJJRFRvSW5kZXguc2V0KGZvbGRlci5pZC5nZXQoaSksIGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXNoYm9hcmQ/LmlkICYmIHBhbmVsPy5kYXNoYm9hcmRJRCAmJiBkYXNoYm9hcmQudXJsKSB7XG4gICAgICBsZXQgbG9jYXRpb246IExvY2F0aW9uSW5mb1tdW10gPSBuZXcgQXJyYXkoZGFzaGJvYXJkLmlkLmxlbmd0aCk7XG4gICAgICBjb25zdCBkYXNoSURUb0luZGV4ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFzaGJvYXJkLmlkPy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXNoSURUb0luZGV4LnNldChkYXNoYm9hcmQuaWQuZ2V0KGkpLCBpKTtcbiAgICAgICAgY29uc3QgZm9sZGVySWQgPSBkYXNoYm9hcmQuZm9sZGVyPy5nZXQoaSk7XG4gICAgICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBmb2xkZXJJRFRvSW5kZXguZ2V0KGZvbGRlcklkKTtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZm9sZGVyPy5uYW1lPy5nZXQoaW5kZXghKTtcbiAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbG9jYXRpb25baV0gPSBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBraW5kOiAnZm9sZGVyJyxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRhc2hib2FyZC5sb2NhdGlvbiA9IG5ldyBBcnJheVZlY3Rvcihsb2NhdGlvbik7IC8vIGZvbGRlciBuYW1lXG5cbiAgICAgIGxvY2F0aW9uID0gbmV3IEFycmF5KHBhbmVsLmRhc2hib2FyZElELmxlbmd0aCk7XG4gICAgICBjb25zdCB1cmxzOiBzdHJpbmdbXSA9IG5ldyBBcnJheShsb2NhdGlvbi5sZW5ndGgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5lbC5kYXNoYm9hcmRJRC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkYXNoYm9hcmRJRCA9IHBhbmVsLmRhc2hib2FyZElELmdldChpKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBkYXNoSURUb0luZGV4LmdldChkYXNoYm9hcmRJRCk7XG4gICAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgaWR4ID0gcGFuZWwuaWQ/LmdldChpKTtcbiAgICAgICAgICB1cmxzW2ldID0gZGFzaGJvYXJkLnVybC5nZXQoaW5kZXgpICsgJz92aWV3UGFuZWw9JyArIGlkeDtcblxuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGRhc2hib2FyZC5sb2NhdGlvbi5nZXQoaW5kZXgpID8/IFtdO1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBkYXNoYm9hcmQubmFtZT8uZ2V0KGluZGV4KSA/PyAnPyc7XG4gICAgICAgICAgbG9jYXRpb25baV0gPSBbLi4ucGFyZW50LCB7IGtpbmQ6ICdkYXNoYm9hcmQnLCBuYW1lIH1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwYW5lbC51cmwgPSBuZXcgQXJyYXlWZWN0b3IodXJscyk7XG4gICAgICBwYW5lbC5sb2NhdGlvbiA9IG5ldyBBcnJheVZlY3Rvcihsb2NhdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5pbmRleCA9IHNlYXJjaGVyO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5sb29rdXAgPSBsb29rdXA7XG4gIH1cblxuICBhc3luYyBzZWFyY2gocXVlcnk6IHN0cmluZywgZmlsdGVyPzogUXVlcnlGaWx0ZXJzKTogUHJvbWlzZTxRdWVyeVJlc3BvbnNlPiB7XG4gICAgaWYgKCF0aGlzLmluZGV4KSB7XG4gICAgICBhd2FpdCB0aGlzLmluaXRJbmRleCgpO1xuICAgIH1cblxuICAgIC8vIGVtcHR5IHF1ZXJ5IGNhbiByZXR1cm4gZXZlcnl0aGluZ1xuICAgIGlmICghcXVlcnkgJiYgdGhpcy5kYXRhLmRhc2hib2FyZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9keTogZmlsdGVyRnJhbWUodGhpcy5kYXRhLmRhc2hib2FyZCwgZmlsdGVyKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgZm91bmQgPSB0aGlzLmluZGV4IS5zZWFyY2gocXVlcnkpO1xuXG4gICAgLy8gZnJhbWUgZmllbGRzXG4gICAgY29uc3QgdXJsOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGtpbmQ6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgdHlwZTogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBuYW1lOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHRhZ3M6IHN0cmluZ1tdW10gPSBbXTtcbiAgICBjb25zdCBsb2NhdGlvbjogTG9jYXRpb25JbmZvW11bXSA9IFtdO1xuICAgIGNvbnN0IGRhdGFzb3VyY2U6IERhdGFTb3VyY2VSZWZbXVtdID0gW107XG4gICAgY29uc3QgaW5mbzogYW55W10gPSBbXTtcbiAgICBjb25zdCBzY29yZTogbnVtYmVyW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgcmVzIG9mIGZvdW5kKSB7XG4gICAgICBjb25zdCBrZXkgPSByZXMuaWQgYXMgQ29tcG9zaXRlS2V5O1xuICAgICAgY29uc3QgaW5kZXggPSBrZXkuaW5kZXg7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMubG9va3VwLmdldChrZXkua2luZCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsdGVyICYmICFzaG91bGRLZWVwKGZpbHRlciwgaW5wdXQsIGluZGV4KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdXJsLnB1c2goaW5wdXQudXJsPy5nZXQoaW5kZXgpID8/ICc/Jyk7XG4gICAgICBsb2NhdGlvbi5wdXNoKGlucHV0LmxvY2F0aW9uPy5nZXQoaW5kZXgpIGFzIGFueSk7XG4gICAgICBkYXRhc291cmNlLnB1c2goaW5wdXQuZGF0YXNvdXJjZT8uZ2V0KGluZGV4KSBhcyBhbnkpO1xuICAgICAgdGFncy5wdXNoKGlucHV0LnRhZ3M/LmdldChpbmRleCkgYXMgYW55KTtcbiAgICAgIGtpbmQucHVzaChrZXkua2luZCk7XG4gICAgICBuYW1lLnB1c2goaW5wdXQubmFtZT8uZ2V0KGluZGV4KSA/PyAnPycpO1xuICAgICAgdHlwZS5wdXNoKGlucHV0LnR5cGU/LmdldChpbmRleCkhKTtcbiAgICAgIGluZm8ucHVzaChyZXMubWF0Y2gpOyAvLyA/Pz9cbiAgICAgIHNjb3JlLnB1c2gocmVzLnNjb3JlKTtcbiAgICB9XG4gICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW1xuICAgICAgeyBuYW1lOiAna2luZCcsIGNvbmZpZzoge30sIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKGtpbmQpIH0sXG4gICAgICB7IG5hbWU6ICduYW1lJywgY29uZmlnOiB7fSwgdHlwZTogRmllbGRUeXBlLnN0cmluZywgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IobmFtZSkgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3VybCcsXG4gICAgICAgIGNvbmZpZzoge30sXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKHVybCksXG4gICAgICB9LFxuICAgICAgeyBuYW1lOiAndHlwZScsIGNvbmZpZzoge30sIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKHR5cGUpIH0sXG4gICAgICB7IG5hbWU6ICdpbmZvJywgY29uZmlnOiB7fSwgdHlwZTogRmllbGRUeXBlLm90aGVyLCB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcihpbmZvKSB9LFxuICAgICAgeyBuYW1lOiAndGFncycsIGNvbmZpZzoge30sIHR5cGU6IEZpZWxkVHlwZS5vdGhlciwgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IodGFncykgfSxcbiAgICAgIHsgbmFtZTogJ2xvY2F0aW9uJywgY29uZmlnOiB7fSwgdHlwZTogRmllbGRUeXBlLm90aGVyLCB2YWx1ZXM6IG5ldyBBcnJheVZlY3Rvcihsb2NhdGlvbikgfSxcbiAgICAgIHsgbmFtZTogJ2RhdGFzb3VyY2UnLCBjb25maWc6IHt9LCB0eXBlOiBGaWVsZFR5cGUub3RoZXIsIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKGRhdGFzb3VyY2UpIH0sXG4gICAgICB7IG5hbWU6ICdzY29yZScsIGNvbmZpZzoge30sIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKHNjb3JlKSB9LFxuICAgIF07XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICAgIGZpZWxkLmRpc3BsYXkgPSBnZXREaXNwbGF5UHJvY2Vzc29yKHsgZmllbGQsIHRoZW1lOiBjb25maWcudGhlbWUyIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgYm9keToge1xuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGxlbmd0aDoga2luZC5sZW5ndGgsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkS2VlcChmaWx0ZXI6IFF1ZXJ5RmlsdGVycywgZG9jOiBJbnB1dERvYywgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoZmlsdGVyLnRhZ3MpIHtcbiAgICBjb25zdCB0YWdzID0gZG9jLnRhZ3M/LmdldChpbmRleCk7XG4gICAgaWYgKCF0YWdzPy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB0IG9mIGZpbHRlci50YWdzKSB7XG4gICAgICBpZiAoIXRhZ3MuaW5jbHVkZXModCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCBrZWVwID0gdHJ1ZTtcbiAgLy8gQW55IGlzIE9LXG4gIGlmIChmaWx0ZXIuZGF0YXNvdXJjZSkge1xuICAgIGtlZXAgPSBmYWxzZTtcbiAgICBjb25zdCBkc3MgPSBkb2MuZGF0YXNvdXJjZT8uZ2V0KGluZGV4KTtcbiAgICBpZiAoZHNzKSB7XG4gICAgICBmb3IgKGNvbnN0IGRzIG9mIGRzcykge1xuICAgICAgICBpZiAoZHMudWlkID09PSBmaWx0ZXIuZGF0YXNvdXJjZSkge1xuICAgICAgICAgIGtlZXAgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBrZWVwO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dERvYyhraW5kOiBTZWFyY2hSZXN1bHRLaW5kLCBmcmFtZTogRGF0YUZyYW1lKTogSW5wdXREb2Mge1xuICBjb25zdCBpbnB1dDogSW5wdXREb2MgPSB7XG4gICAga2luZCxcbiAgICBpbmRleDogMCxcbiAgfTtcbiAgZm9yIChjb25zdCBmaWVsZCBvZiBmcmFtZS5maWVsZHMpIHtcbiAgICBzd2l0Y2ggKGZpZWxkLm5hbWUpIHtcbiAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgY2FzZSAnTmFtZSc6XG4gICAgICAgIGlucHV0Lm5hbWUgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOlxuICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOlxuICAgICAgICBpbnB1dC5kZXNjcmlwdGlvbiA9IGZpZWxkLnZhbHVlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgY2FzZSAnVVJMJzpcbiAgICAgICAgaW5wdXQudXJsID0gZmllbGQudmFsdWVzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VpZCc6XG4gICAgICBjYXNlICdVSUQnOlxuICAgICAgICBpbnB1dC51aWQgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaWQnOlxuICAgICAgY2FzZSAnSUQnOlxuICAgICAgICBpbnB1dC5pZCA9IGZpZWxkLnZhbHVlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWdzJzpcbiAgICAgIGNhc2UgJ3RhZ3MnOlxuICAgICAgICBpbnB1dC50YWdzID0gZmllbGQudmFsdWVzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Rhc2hib2FyZElEJzpcbiAgICAgIGNhc2UgJ2Rhc2hib2FyZElEJzpcbiAgICAgICAgaW5wdXQuZGFzaGJvYXJkSUQgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVHlwZSc6XG4gICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgaW5wdXQudHlwZSA9IGZpZWxkLnZhbHVlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmb2xkZXJJRCc6XG4gICAgICBjYXNlICdGb2xkZXJJRCc6XG4gICAgICAgIGlucHV0LmZvbGRlciA9IGZpZWxkLnZhbHVlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRhc291cmNlJzpcbiAgICAgIGNhc2UgJ2RzTGlzdCc6XG4gICAgICBjYXNlICdEU0xpc3QnOlxuICAgICAgICBpbnB1dC5kYXRhc291cmNlID0gZmllbGQudmFsdWVzO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufVxuIiwiaW1wb3J0IHsgTWluaVNlYXJjaGVyIH0gZnJvbSAnLi9taW5pc2VhcmNoZXInO1xuaW1wb3J0IHsgR3JhZmFuYVNlYXJjaGVyIH0gZnJvbSAnLi90eXBlcyc7XG5cbmxldCBzZWFyY2hlcjogR3JhZmFuYVNlYXJjaGVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhZmFuYVNlYXJjaGVyKCk6IEdyYWZhbmFTZWFyY2hlciB7XG4gIGlmICghc2VhcmNoZXIpIHtcbiAgICBzZWFyY2hlciA9IG5ldyBNaW5pU2VhcmNoZXIoKTtcbiAgfVxuICByZXR1cm4gc2VhcmNoZXIhO1xufVxuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMaXZlRGF0YUZpbHRlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGVudW0gR3JhZmFuYVF1ZXJ5VHlwZSB7XG4gIExpdmVNZWFzdXJlbWVudHMgPSAnbWVhc3VyZW1lbnRzJyxcbiAgQW5ub3RhdGlvbnMgPSAnYW5ub3RhdGlvbnMnLFxuXG4gIC8vIGJhY2tlbmRcbiAgUmFuZG9tV2FsayA9ICdyYW5kb21XYWxrJyxcbiAgTGlzdCA9ICdsaXN0JyxcbiAgUmVhZCA9ICdyZWFkJyxcbiAgU2VhcmNoID0gJ3NlYXJjaCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhZmFuYVF1ZXJ5IGV4dGVuZHMgRGF0YVF1ZXJ5IHtcbiAgcXVlcnlUeXBlOiBHcmFmYW5hUXVlcnlUeXBlOyAvLyBSYW5kb21XYWxrIGJ5IGRlZmF1bHRcbiAgY2hhbm5lbD86IHN0cmluZztcbiAgZmlsdGVyPzogTGl2ZURhdGFGaWx0ZXI7XG4gIGJ1ZmZlcj86IG51bWJlcjtcbiAgcGF0aD86IHN0cmluZzsgLy8gZm9yIGxpc3QgYW5kIHJlYWRcbiAgcXVlcnk/OiBzdHJpbmc7IC8vIGZvciBxdWVyeSBlbmRwb2ludFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFF1ZXJ5OiBHcmFmYW5hUXVlcnkgPSB7XG4gIHJlZklkOiAnQScsXG4gIHF1ZXJ5VHlwZTogR3JhZmFuYVF1ZXJ5VHlwZS5SYW5kb21XYWxrLFxufTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBbm5vdGF0aW9uc1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBlbnVtIEdyYWZhbmFBbm5vdGF0aW9uVHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBUYWdzID0gJ3RhZ3MnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYWZhbmFBbm5vdGF0aW9uUXVlcnkgZXh0ZW5kcyBHcmFmYW5hUXVlcnkge1xuICB0eXBlOiBHcmFmYW5hQW5ub3RhdGlvblR5cGU7IC8vIHRhZ3NcbiAgbGltaXQ6IG51bWJlcjsgLy8gMTAwXG4gIHRhZ3M/OiBzdHJpbmdbXTtcbiAgbWF0Y2hBbnk/OiBib29sZWFuOyAvLyBCeSBkZWZhdWx0IEdyYWZhbmEgb25seSBzaG93cyBhbm5vdGF0aW9ucyB0aGF0IG1hdGNoIGFsbCB0YWdzIGluIHRoZSBxdWVyeS4gRW5hYmxpbmcgdGhpcyByZXR1cm5zIGFubm90YXRpb25zIHRoYXQgbWF0Y2ggYW55IG9mIHRoZSB0YWdzIGluIHRoZSBxdWVyeS5cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cblxuLyoqIEBpZ25vcmUgKi9cbnZhciBFTlRSSUVTID0gJ0VOVFJJRVMnO1xuLyoqIEBpZ25vcmUgKi9cbnZhciBLRVlTID0gJ0tFWVMnO1xuLyoqIEBpZ25vcmUgKi9cbnZhciBWQUxVRVMgPSAnVkFMVUVTJztcbi8qKiBAaWdub3JlICovXG52YXIgTEVBRiA9ICcnO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgVHJlZUl0ZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyZWVJdGVyYXRvcihzZXQsIHR5cGUpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBzZXQuX3RyZWU7XG4gICAgICAgIHZhciBrZXlzID0gQXJyYXkuZnJvbShub2RlLmtleXMoKSk7XG4gICAgICAgIHRoaXMuc2V0ID0gc2V0O1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcGF0aCA9IGtleXMubGVuZ3RoID4gMCA/IFt7IG5vZGU6IG5vZGUsIGtleXM6IGtleXMgfV0gOiBbXTtcbiAgICB9XG4gICAgVHJlZUl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmRpdmUoKTtcbiAgICAgICAgdGhpcy5iYWNrdHJhY2soKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgVHJlZUl0ZXJhdG9yLnByb3RvdHlwZS5kaXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSBsYXN0JDEodGhpcy5fcGF0aCksIG5vZGUgPSBfYS5ub2RlLCBrZXlzID0gX2Eua2V5cztcbiAgICAgICAgaWYgKGxhc3QkMShrZXlzKSA9PT0gTEVBRikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0aGlzLnJlc3VsdCgpIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZS5nZXQobGFzdCQxKGtleXMpKTtcbiAgICAgICAgdGhpcy5fcGF0aC5wdXNoKHsgbm9kZTogY2hpbGQsIGtleXM6IEFycmF5LmZyb20oY2hpbGQua2V5cygpKSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2ZSgpO1xuICAgIH07XG4gICAgVHJlZUl0ZXJhdG9yLnByb3RvdHlwZS5iYWNrdHJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXlzID0gbGFzdCQxKHRoaXMuX3BhdGgpLmtleXM7XG4gICAgICAgIGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXRoLnBvcCgpO1xuICAgICAgICB0aGlzLmJhY2t0cmFjaygpO1xuICAgIH07XG4gICAgVHJlZUl0ZXJhdG9yLnByb3RvdHlwZS5rZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldC5fcHJlZml4ICsgdGhpcy5fcGF0aFxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gX2Eua2V5cztcbiAgICAgICAgICAgIHJldHVybiBsYXN0JDEoa2V5cyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gTEVBRjsgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICB9O1xuICAgIFRyZWVJdGVyYXRvci5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsYXN0JDEodGhpcy5fcGF0aCkubm9kZS5nZXQoTEVBRik7XG4gICAgfTtcbiAgICBUcmVlSXRlcmF0b3IucHJvdG90eXBlLnJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLl90eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIHRoaXMudmFsdWUoKTtcbiAgICAgICAgICAgIGNhc2UgS0VZUzogcmV0dXJuIHRoaXMua2V5KCk7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gW3RoaXMua2V5KCksIHRoaXMudmFsdWUoKV07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyZWVJdGVyYXRvci5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gVHJlZUl0ZXJhdG9yO1xufSgpKTtcbnZhciBsYXN0JDEgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG59O1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xudmFyIGZ1enp5U2VhcmNoID0gZnVuY3Rpb24gKG5vZGUsIHF1ZXJ5LCBtYXhEaXN0YW5jZSkge1xuICAgIHZhciByZXN1bHRzID0gbmV3IE1hcCgpO1xuICAgIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAvLyBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgTGV2ZW5zaHRlaW4gbWF0cml4LlxuICAgIHZhciBuID0gcXVlcnkubGVuZ3RoICsgMTtcbiAgICAvLyBNYXRjaGluZyB0ZXJtcyBjYW4gbmV2ZXIgYmUgbG9uZ2VyIHRoYW4gTiArIG1heERpc3RhbmNlLlxuICAgIHZhciBtID0gbiArIG1heERpc3RhbmNlO1xuICAgIC8vIEZpbGwgZmlyc3QgbWF0cml4IHJvdyBhbmQgY29sdW1uIHdpdGggbnVtYmVyczogMCAxIDIgMyAuLi5cbiAgICB2YXIgbWF0cml4ID0gbmV3IFVpbnQ4QXJyYXkobSAqIG4pLmZpbGwobWF4RGlzdGFuY2UgKyAxKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG47ICsrailcbiAgICAgICAgbWF0cml4W2pdID0gajtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IG07ICsraSlcbiAgICAgICAgbWF0cml4W2kgKiBuXSA9IGk7XG4gICAgcmVjdXJzZShub2RlLCBxdWVyeSwgbWF4RGlzdGFuY2UsIHJlc3VsdHMsIG1hdHJpeCwgMSwgbiwgJycpO1xuICAgIHJldHVybiByZXN1bHRzO1xufTtcbi8vIE1vZGlmaWVkIHZlcnNpb24gb2YgaHR0cDovL3N0ZXZlaGFub3YuY2EvYmxvZy8/aWQ9MTE0XG4vLyBUaGlzIGJ1aWxkcyBhIExldmVuc2h0ZWluIG1hdHJpeCBmb3IgYSBnaXZlbiBxdWVyeSBhbmQgY29udGludW91c2x5IHVwZGF0ZXNcbi8vIGl0IGZvciBub2RlcyBpbiB0aGUgcmFkaXggdHJlZSB0aGF0IGZhbGwgd2l0aGluIHRoZSBnaXZlbiBtYXhpbXVtIGVkaXRcbi8vIGRpc3RhbmNlLiBLZWVwaW5nIHRoZSBzYW1lIG1hdHJpeCBhcm91bmQgaXMgYmVuZWZpY2lhbCBlc3BlY2lhbGx5IGZvciBsYXJnZXJcbi8vIGVkaXQgZGlzdGFuY2VzLlxuLy9cbi8vICAgICAgICAgICBrICAgYSAgIHQgICBlICAgPC0tIHF1ZXJ5XG4vLyAgICAgICAwICAgMSAgIDIgICAzICAgNFxuLy8gICBjICAgMSAgIDEgICAyICAgMyAgIDRcbi8vICAgYSAgIDIgICAyICAgMSAgIDIgICAzXG4vLyAgIHQgICAzICAgMyAgIDIgICAxICBbMl0gIDwtLSBlZGl0IGRpc3RhbmNlXG4vLyAgIF5cbi8vICAgXiB0ZXJtIGluIHJhZGl4IHRyZWUsIHJvd3MgYXJlIGFkZGVkIGFuZCByZW1vdmVkIGFzIG5lZWRlZFxudmFyIHJlY3Vyc2UgPSBmdW5jdGlvbiAobm9kZSwgcXVlcnksIG1heERpc3RhbmNlLCByZXN1bHRzLCBtYXRyaXgsIG0sIG4sIHByZWZpeCkge1xuICAgIHZhciBlXzEsIF9hO1xuICAgIHZhciBvZmZzZXQgPSBtICogbjtcbiAgICB0cnkge1xuICAgICAgICBrZXk6IGZvciAodmFyIF9iID0gX192YWx1ZXMobm9kZS5rZXlzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gX2MudmFsdWU7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBMRUFGKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UndmUgcmVhY2hlZCBhIGxlYWYgbm9kZS4gQ2hlY2sgaWYgdGhlIGVkaXQgZGlzdGFuY2UgYWNjZXB0YWJsZSBhbmRcbiAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgcmVzdWx0IGlmIGl0IGlzLlxuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IG1hdHJpeFtvZmZzZXQgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gbWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQocHJlZml4LCBbbm9kZS5nZXQoa2V5KSwgZGlzdGFuY2VdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGNoYXJhY3RlcnMgaW4gdGhlIGtleS4gVXBkYXRlIHRoZSBMZXZlbnNodGVpbiBtYXRyaXhcbiAgICAgICAgICAgICAgICAvLyBhbmQgY2hlY2sgaWYgdGhlIG1pbmltdW0gZGlzdGFuY2UgaW4gdGhlIGxhc3Qgcm93IGlzIHN0aWxsIHdpdGhpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBtYXhpbXVtIGVkaXQgZGlzdGFuY2UuIElmIGl0IGlzLCB3ZSBjYW4gcmVjdXJzZSBvdmVyIGFsbCBjaGlsZCBub2Rlcy5cbiAgICAgICAgICAgICAgICB2YXIgaSA9IG07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwga2V5Lmxlbmd0aDsgKytwb3MsICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhciA9IGtleVtwb3NdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc1Jvd09mZnNldCA9IG4gKiBpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlJvd09mZnNldCA9IHRoaXNSb3dPZmZzZXQgLSBuO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGZpcnN0IGNvbHVtbiBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcm93LCBhbmQgaW5pdGlhbGl6ZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gbWluaW11bSBkaXN0YW5jZSBpbiB0aGUgY3VycmVudCByb3cuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5EaXN0YW5jZSA9IG1hdHJpeFt0aGlzUm93T2Zmc2V0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGptaW4gPSBNYXRoLm1heCgwLCBpIC0gbWF4RGlzdGFuY2UgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGptYXggPSBNYXRoLm1pbihuIC0gMSwgaSArIG1heERpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIHJlbWFpbmluZyBjb2x1bW5zIChjaGFyYWN0ZXJzIGluIHRoZSBxdWVyeSkuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBqbWluOyBqIDwgam1heDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZmVyZW50ID0gY2hhciAhPT0gcXVlcnlbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCBtaWdodCBtYWtlIHNlbnNlIHRvIG9ubHkgcmVhZCB0aGUgbWF0cml4IHBvc2l0aW9ucyB1c2VkIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRpb24vaW5zZXJ0aW9uIGlmIHRoZSBjaGFyYWN0ZXJzIGFyZSBkaWZmZXJlbnQuIEJ1dCB3ZSB3YW50IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdm9pZCBjb25kaXRpb25hbCByZWFkcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBycGwgPSBtYXRyaXhbcHJldlJvd09mZnNldCArIGpdICsgK2RpZmZlcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWwgPSBtYXRyaXhbcHJldlJvd09mZnNldCArIGogKyAxXSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5zID0gbWF0cml4W3RoaXNSb3dPZmZzZXQgKyBqXSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdCA9IG1hdHJpeFt0aGlzUm93T2Zmc2V0ICsgaiArIDFdID0gTWF0aC5taW4ocnBsLCBkZWwsIGlucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IG1pbkRpc3RhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIGRpc3RhbmNlIHdpbGwgbmV2ZXIgZGVjcmVhc2UsIHdlIGNhbiBzdG9wLiBUaGVyZSB3aWxsIGJlIG5vXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoaW5nIGNoaWxkIG5vZGVzLlxuICAgICAgICAgICAgICAgICAgICBpZiAobWluRGlzdGFuY2UgPiBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUga2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY3Vyc2Uobm9kZS5nZXQoa2V5KSwgcXVlcnksIG1heERpc3RhbmNlLCByZXN1bHRzLCBtYXRyaXgsIGksIG4sIHByZWZpeCArIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIGNsYXNzIGltcGxlbWVudGluZyB0aGUgc2FtZSBpbnRlcmZhY2UgYXMgYSBzdGFuZGFyZCBKYXZhU2NyaXB0XG4gKiBbYE1hcGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcClcbiAqIHdpdGggc3RyaW5nIGtleXMsIGJ1dCBhZGRpbmcgc3VwcG9ydCBmb3IgZWZmaWNpZW50bHkgc2VhcmNoaW5nIGVudHJpZXMgd2l0aFxuICogcHJlZml4IG9yIGZ1enp5IHNlYXJjaC4gVGhpcyBjbGFzcyBpcyB1c2VkIGludGVybmFsbHkgYnkgW1tNaW5pU2VhcmNoXV0gYXNcbiAqIHRoZSBpbnZlcnRlZCBpbmRleCBkYXRhIHN0cnVjdHVyZS4gVGhlIGltcGxlbWVudGF0aW9uIGlzIGEgcmFkaXggdHJlZVxuICogKGNvbXByZXNzZWQgcHJlZml4IHRyZWUpLlxuICpcbiAqIFNpbmNlIHRoaXMgY2xhc3MgY2FuIGJlIG9mIGdlbmVyYWwgdXRpbGl0eSBiZXlvbmQgX01pbmlTZWFyY2hfLCBpdCBpc1xuICogZXhwb3J0ZWQgYnkgdGhlIGBtaW5pc2VhcmNoYCBwYWNrYWdlIGFuZCBjYW4gYmUgaW1wb3J0ZWQgKG9yIHJlcXVpcmVkKSBhc1xuICogYG1pbmlzZWFyY2gvU2VhcmNoYWJsZU1hcGAuXG4gKlxuICogQHR5cGVQYXJhbSBUICBUaGUgdHlwZSBvZiB0aGUgdmFsdWVzIHN0b3JlZCBpbiB0aGUgbWFwLlxuICovXG52YXIgU2VhcmNoYWJsZU1hcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgaXMgbm9ybWFsbHkgY2FsbGVkIHdpdGhvdXQgYXJndW1lbnRzLCBjcmVhdGluZyBhbiBlbXB0eVxuICAgICAqIG1hcC4gSW4gb3JkZXIgdG8gY3JlYXRlIGEgW1tTZWFyY2hhYmxlTWFwXV0gZnJvbSBhbiBpdGVyYWJsZSBvciBmcm9tIGFuXG4gICAgICogb2JqZWN0LCBjaGVjayBbW1NlYXJjaGFibGVNYXAuZnJvbV1dIGFuZCBbW1NlYXJjaGFibGVNYXAuZnJvbU9iamVjdF1dLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50cyBhcmUgZm9yIGludGVybmFsIHVzZSwgd2hlbiBjcmVhdGluZyBkZXJpdmVkXG4gICAgICogbXV0YWJsZSB2aWV3cyBvZiBhIG1hcCBhdCBhIHByZWZpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTZWFyY2hhYmxlTWFwKHRyZWUsIHByZWZpeCkge1xuICAgICAgICBpZiAodHJlZSA9PT0gdm9pZCAwKSB7IHRyZWUgPSBuZXcgTWFwKCk7IH1cbiAgICAgICAgaWYgKHByZWZpeCA9PT0gdm9pZCAwKSB7IHByZWZpeCA9ICcnOyB9XG4gICAgICAgIHRoaXMuX3NpemUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3RyZWUgPSB0cmVlO1xuICAgICAgICB0aGlzLl9wcmVmaXggPSBwcmVmaXg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBtdXRhYmxlIHZpZXcgb2YgdGhpcyBbW1NlYXJjaGFibGVNYXBdXSwgY29udGFpbmluZyBvbmx5XG4gICAgICogZW50cmllcyB0aGF0IHNoYXJlIHRoZSBnaXZlbiBwcmVmaXguXG4gICAgICpcbiAgICAgKiAjIyMgVXNhZ2U6XG4gICAgICpcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogbGV0IG1hcCA9IG5ldyBTZWFyY2hhYmxlTWFwKClcbiAgICAgKiBtYXAuc2V0KFwidW5pY29yblwiLCAxKVxuICAgICAqIG1hcC5zZXQoXCJ1bml2ZXJzZVwiLCAyKVxuICAgICAqIG1hcC5zZXQoXCJ1bml2ZXJzaXR5XCIsIDMpXG4gICAgICogbWFwLnNldChcInVuaXF1ZVwiLCA0KVxuICAgICAqIG1hcC5zZXQoXCJoZWxsb1wiLCA1KVxuICAgICAqXG4gICAgICogbGV0IHVuaSA9IG1hcC5hdFByZWZpeChcInVuaVwiKVxuICAgICAqIHVuaS5nZXQoXCJ1bmlxdWVcIikgLy8gPT4gNFxuICAgICAqIHVuaS5nZXQoXCJ1bmljb3JuXCIpIC8vID0+IDFcbiAgICAgKiB1bmkuZ2V0KFwiaGVsbG9cIikgLy8gPT4gdW5kZWZpbmVkXG4gICAgICpcbiAgICAgKiBsZXQgdW5pdmVyID0gbWFwLmF0UHJlZml4KFwidW5pdmVyXCIpXG4gICAgICogdW5pdmVyLmdldChcInVuaXF1ZVwiKSAvLyA9PiB1bmRlZmluZWRcbiAgICAgKiB1bml2ZXIuZ2V0KFwidW5pdmVyc2VcIikgLy8gPT4gMlxuICAgICAqIHVuaXZlci5nZXQoXCJ1bml2ZXJzaXR5XCIpIC8vID0+IDNcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmVmaXggIFRoZSBwcmVmaXhcbiAgICAgKiBAcmV0dXJuIEEgW1tTZWFyY2hhYmxlTWFwXV0gcmVwcmVzZW50aW5nIGEgbXV0YWJsZSB2aWV3IG9mIHRoZSBvcmlnaW5hbCBNYXAgYXQgdGhlIGdpdmVuIHByZWZpeFxuICAgICAqL1xuICAgIFNlYXJjaGFibGVNYXAucHJvdG90eXBlLmF0UHJlZml4ID0gZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKCFwcmVmaXguc3RhcnRzV2l0aCh0aGlzLl9wcmVmaXgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc21hdGNoZWQgcHJlZml4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9iID0gX19yZWFkKHRyYWNrRG93bih0aGlzLl90cmVlLCBwcmVmaXguc2xpY2UodGhpcy5fcHJlZml4Lmxlbmd0aCkpLCAyKSwgbm9kZSA9IF9iWzBdLCBwYXRoID0gX2JbMV07XG4gICAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IF9fcmVhZChsYXN0KHBhdGgpLCAyKSwgcGFyZW50Tm9kZSA9IF9jWzBdLCBrZXkgPSBfY1sxXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2QgPSBfX3ZhbHVlcyhwYXJlbnROb2RlLmtleXMoKSksIF9lID0gX2QubmV4dCgpOyAhX2UuZG9uZTsgX2UgPSBfZC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBfZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgIT09IExFQUYgJiYgay5zdGFydHNXaXRoKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlXzEgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEuc2V0KGsuc2xpY2Uoa2V5Lmxlbmd0aCksIHBhcmVudE5vZGUuZ2V0KGspKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2VhcmNoYWJsZU1hcChub2RlXzEsIHByZWZpeCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9lICYmICFfZS5kb25lICYmIChfYSA9IF9kLnJldHVybikpIF9hLmNhbGwoX2QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTZWFyY2hhYmxlTWFwKG5vZGUsIHByZWZpeCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9jbGVhclxuICAgICAqL1xuICAgIFNlYXJjaGFibGVNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9zaXplID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90cmVlLmNsZWFyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9kZWxldGVcbiAgICAgKiBAcGFyYW0ga2V5ICBLZXkgdG8gZGVsZXRlXG4gICAgICovXG4gICAgU2VhcmNoYWJsZU1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLl9zaXplID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gcmVtb3ZlKHRoaXMuX3RyZWUsIGtleSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9lbnRyaWVzXG4gICAgICogQHJldHVybiBBbiBpdGVyYXRvciBpdGVyYXRpbmcgdGhyb3VnaCBgW2tleSwgdmFsdWVdYCBlbnRyaWVzLlxuICAgICAqL1xuICAgIFNlYXJjaGFibGVNYXAucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHJlZUl0ZXJhdG9yKHRoaXMsIEVOVFJJRVMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvZm9yRWFjaFxuICAgICAqIEBwYXJhbSBmbiAgSXRlcmF0aW9uIGZ1bmN0aW9uXG4gICAgICovXG4gICAgU2VhcmNoYWJsZU1hcC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBrZXkgPSBfZFswXSwgdmFsdWUgPSBfZFsxXTtcbiAgICAgICAgICAgICAgICBmbihrZXksIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgTWFwIG9mIGFsbCB0aGUgZW50cmllcyB0aGF0IGhhdmUgYSBrZXkgd2l0aGluIHRoZSBnaXZlbiBlZGl0XG4gICAgICogZGlzdGFuY2UgZnJvbSB0aGUgc2VhcmNoIGtleS4gVGhlIGtleXMgb2YgdGhlIHJldHVybmVkIE1hcCBhcmUgdGhlIG1hdGNoaW5nXG4gICAgICoga2V5cywgd2hpbGUgdGhlIHZhbHVlcyBhcmUgdHdvLWVsZW1lbnQgYXJyYXlzIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzXG4gICAgICogdGhlIHZhbHVlIGFzc29jaWF0ZWQgdG8gdGhlIGtleSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIGVkaXQgZGlzdGFuY2Ugb2YgdGhlXG4gICAgICoga2V5IHRvIHRoZSBzZWFyY2gga2V5LlxuICAgICAqXG4gICAgICogIyMjIFVzYWdlOlxuICAgICAqXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGxldCBtYXAgPSBuZXcgU2VhcmNoYWJsZU1hcCgpXG4gICAgICogbWFwLnNldCgnaGVsbG8nLCAnd29ybGQnKVxuICAgICAqIG1hcC5zZXQoJ2hlbGwnLCAneWVhaCcpXG4gICAgICogbWFwLnNldCgnY2lhbycsICdtb25kbycpXG4gICAgICpcbiAgICAgKiAvLyBHZXQgYWxsIGVudHJpZXMgdGhhdCBtYXRjaCB0aGUga2V5ICdoYWxsbycgd2l0aCBhIG1heGltdW0gZWRpdCBkaXN0YW5jZSBvZiAyXG4gICAgICogbWFwLmZ1enp5R2V0KCdoYWxsbycsIDIpXG4gICAgICogLy8gPT4gTWFwKDIpIHsgJ2hlbGxvJyA9PiBbJ3dvcmxkJywgMV0sICdoZWxsJyA9PiBbJ3llYWgnLCAyXSB9XG4gICAgICpcbiAgICAgKiAvLyBJbiB0aGUgZXhhbXBsZSwgdGhlIFwiaGVsbG9cIiBrZXkgaGFzIHZhbHVlIFwid29ybGRcIiBhbmQgZWRpdCBkaXN0YW5jZSBvZiAxXG4gICAgICogLy8gKGNoYW5nZSBcImVcIiB0byBcImFcIiksIHRoZSBrZXkgXCJoZWxsXCIgaGFzIHZhbHVlIFwieWVhaFwiIGFuZCBlZGl0IGRpc3RhbmNlIG9mIDJcbiAgICAgKiAvLyAoY2hhbmdlIFwiZVwiIHRvIFwiYVwiLCBkZWxldGUgXCJvXCIpXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5ICBUaGUgc2VhcmNoIGtleVxuICAgICAqIEBwYXJhbSBtYXhFZGl0RGlzdGFuY2UgIFRoZSBtYXhpbXVtIGVkaXQgZGlzdGFuY2UgKExldmVuc2h0ZWluKVxuICAgICAqIEByZXR1cm4gQSBNYXAgb2YgdGhlIG1hdGNoaW5nIGtleXMgdG8gdGhlaXIgdmFsdWUgYW5kIGVkaXQgZGlzdGFuY2VcbiAgICAgKi9cbiAgICBTZWFyY2hhYmxlTWFwLnByb3RvdHlwZS5mdXp6eUdldCA9IGZ1bmN0aW9uIChrZXksIG1heEVkaXREaXN0YW5jZSkge1xuICAgICAgICByZXR1cm4gZnV6enlTZWFyY2godGhpcy5fdHJlZSwga2V5LCBtYXhFZGl0RGlzdGFuY2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvZ2V0XG4gICAgICogQHBhcmFtIGtleSAgS2V5IHRvIGdldFxuICAgICAqIEByZXR1cm4gVmFsdWUgYXNzb2NpYXRlZCB0byB0aGUga2V5LCBvciBgdW5kZWZpbmVkYCBpZiB0aGUga2V5IGlzIG5vdFxuICAgICAqIGZvdW5kLlxuICAgICAqL1xuICAgIFNlYXJjaGFibGVNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBsb29rdXAodGhpcy5fdHJlZSwga2V5KTtcbiAgICAgICAgcmV0dXJuIG5vZGUgIT09IHVuZGVmaW5lZCA/IG5vZGUuZ2V0KExFQUYpIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvaGFzXG4gICAgICogQHBhcmFtIGtleSAgS2V5XG4gICAgICogQHJldHVybiBUcnVlIGlmIHRoZSBrZXkgaXMgaW4gdGhlIG1hcCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgU2VhcmNoYWJsZU1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbm9kZSA9IGxvb2t1cCh0aGlzLl90cmVlLCBrZXkpO1xuICAgICAgICByZXR1cm4gbm9kZSAhPT0gdW5kZWZpbmVkICYmIG5vZGUuaGFzKExFQUYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAva2V5c1xuICAgICAqIEByZXR1cm4gQW4gYEl0ZXJhYmxlYCBpdGVyYXRpbmcgdGhyb3VnaCBrZXlzXG4gICAgICovXG4gICAgU2VhcmNoYWJsZU1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVlSXRlcmF0b3IodGhpcywgS0VZUyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9zZXRcbiAgICAgKiBAcGFyYW0ga2V5ICBLZXkgdG8gc2V0XG4gICAgICogQHBhcmFtIHZhbHVlICBWYWx1ZSB0byBhc3NvY2lhdGUgdG8gdGhlIGtleVxuICAgICAqIEByZXR1cm4gVGhlIFtbU2VhcmNoYWJsZU1hcF1dIGl0c2VsZiwgdG8gYWxsb3cgY2hhaW5pbmdcbiAgICAgKi9cbiAgICBTZWFyY2hhYmxlTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigna2V5IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaXplID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbm9kZSA9IGNyZWF0ZVBhdGgodGhpcy5fdHJlZSwga2V5KTtcbiAgICAgICAgbm9kZS5zZXQoTEVBRiwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hhYmxlTWFwLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL3NpemVcbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NpemUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBAaWdub3JlICovXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIHZhciBpdGVyID0gdGhpcy5lbnRyaWVzKCk7XG4gICAgICAgICAgICB3aGlsZSAoIWl0ZXIubmV4dCgpLmRvbmUpXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB2YWx1ZSBhdCB0aGUgZ2l2ZW4ga2V5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uXG4gICAgICogaXMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgYXQgdGhlIGtleSwgYW5kIGl0cyByZXR1cm4gdmFsdWUgaXMgdXNlZCBhc1xuICAgICAqIHRoZSBuZXcgdmFsdWUgdG8gYmUgc2V0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogLy8gSW5jcmVtZW50IHRoZSBjdXJyZW50IHZhbHVlIGJ5IG9uZVxuICAgICAqIHNlYXJjaGFibGVNYXAudXBkYXRlKCdzb21la2V5JywgKGN1cnJlbnRWYWx1ZSkgPT4gY3VycmVudFZhbHVlID09IG51bGwgPyAwIDogY3VycmVudFZhbHVlICsgMSlcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIElmIHRoZSB2YWx1ZSBhdCB0aGUgZ2l2ZW4ga2V5IGlzIG9yIHdpbGwgYmUgYW4gb2JqZWN0LCBpdCBtaWdodCBub3QgcmVxdWlyZVxuICAgICAqIHJlLWFzc2lnbm1lbnQuIEluIHRoYXQgY2FzZSBpdCBpcyBiZXR0ZXIgdG8gdXNlIGBmZXRjaCgpYCwgYmVjYXVzZSBpdCBpc1xuICAgICAqIGZhc3Rlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgIFRoZSBrZXkgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIGZuICBUaGUgZnVuY3Rpb24gdXNlZCB0byBjb21wdXRlIHRoZSBuZXcgdmFsdWUgZnJvbSB0aGUgY3VycmVudCBvbmVcbiAgICAgKiBAcmV0dXJuIFRoZSBbW1NlYXJjaGFibGVNYXBdXSBpdHNlbGYsIHRvIGFsbG93IGNoYWluaW5nXG4gICAgICovXG4gICAgU2VhcmNoYWJsZU1hcC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGtleSwgZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2tleSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG5vZGUgPSBjcmVhdGVQYXRoKHRoaXMuX3RyZWUsIGtleSk7XG4gICAgICAgIG5vZGUuc2V0KExFQUYsIGZuKG5vZGUuZ2V0KExFQUYpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGtleS4gSWYgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0LCBjYWxscyB0aGVcbiAgICAgKiBnaXZlbiBmdW5jdGlvbiB0byBjcmVhdGUgYSBuZXcgdmFsdWUsIHdoaWNoIGlzIGluc2VydGVkIGF0IHRoZSBnaXZlbiBrZXlcbiAgICAgKiBhbmQgc3Vic2VxdWVudGx5IHJldHVybmVkLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogY29uc3QgbWFwID0gc2VhcmNoYWJsZU1hcC5mZXRjaCgnc29tZWtleScsICgpID0+IG5ldyBNYXAoKSlcbiAgICAgKiBtYXAuc2V0KCdmb28nLCAnYmFyJylcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgIFRoZSBrZXkgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSAgQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgdmFsdWUgaWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdFxuICAgICAqIEByZXR1cm4gVGhlIGV4aXN0aW5nIG9yIG5ldyB2YWx1ZSBhdCB0aGUgZ2l2ZW4ga2V5XG4gICAgICovXG4gICAgU2VhcmNoYWJsZU1hcC5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoa2V5LCBpbml0aWFsKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NpemUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBub2RlID0gY3JlYXRlUGF0aCh0aGlzLl90cmVlLCBrZXkpO1xuICAgICAgICB2YXIgdmFsdWUgPSBub2RlLmdldChMRUFGKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0KExFQUYsIHZhbHVlID0gaW5pdGlhbCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC92YWx1ZXNcbiAgICAgKiBAcmV0dXJuIEFuIGBJdGVyYWJsZWAgaXRlcmF0aW5nIHRocm91Z2ggdmFsdWVzLlxuICAgICAqL1xuICAgIFNlYXJjaGFibGVNYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVlSXRlcmF0b3IodGhpcywgVkFMVUVTKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL0BAaXRlcmF0b3JcbiAgICAgKi9cbiAgICBTZWFyY2hhYmxlTWFwLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgW1tTZWFyY2hhYmxlTWFwXV0gZnJvbSBhbiBgSXRlcmFibGVgIG9mIGVudHJpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbnRyaWVzICBFbnRyaWVzIHRvIGJlIGluc2VydGVkIGluIHRoZSBbW1NlYXJjaGFibGVNYXBdXVxuICAgICAqIEByZXR1cm4gQSBuZXcgW1tTZWFyY2hhYmxlTWFwXV0gd2l0aCB0aGUgZ2l2ZW4gZW50cmllc1xuICAgICAqL1xuICAgIFNlYXJjaGFibGVNYXAuZnJvbSA9IGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgIHZhciBlXzMsIF9hO1xuICAgICAgICB2YXIgdHJlZSA9IG5ldyBTZWFyY2hhYmxlTWFwKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBlbnRyaWVzXzEgPSBfX3ZhbHVlcyhlbnRyaWVzKSwgZW50cmllc18xXzEgPSBlbnRyaWVzXzEubmV4dCgpOyAhZW50cmllc18xXzEuZG9uZTsgZW50cmllc18xXzEgPSBlbnRyaWVzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKGVudHJpZXNfMV8xLnZhbHVlLCAyKSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XG4gICAgICAgICAgICAgICAgdHJlZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzXzFfMSAmJiAhZW50cmllc18xXzEuZG9uZSAmJiAoX2EgPSBlbnRyaWVzXzEucmV0dXJuKSkgX2EuY2FsbChlbnRyaWVzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFtbU2VhcmNoYWJsZU1hcF1dIGZyb20gdGhlIGl0ZXJhYmxlIHByb3BlcnRpZXMgb2YgYSBKYXZhU2NyaXB0IG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIG9iamVjdCAgT2JqZWN0IG9mIGVudHJpZXMgZm9yIHRoZSBbW1NlYXJjaGFibGVNYXBdXVxuICAgICAqIEByZXR1cm4gQSBuZXcgW1tTZWFyY2hhYmxlTWFwXV0gd2l0aCB0aGUgZ2l2ZW4gZW50cmllc1xuICAgICAqL1xuICAgIFNlYXJjaGFibGVNYXAuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIFNlYXJjaGFibGVNYXAuZnJvbShPYmplY3QuZW50cmllcyhvYmplY3QpKTtcbiAgICB9O1xuICAgIHJldHVybiBTZWFyY2hhYmxlTWFwO1xufSgpKTtcbnZhciB0cmFja0Rvd24gPSBmdW5jdGlvbiAodHJlZSwga2V5LCBwYXRoKSB7XG4gICAgdmFyIGVfNCwgX2E7XG4gICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gW107IH1cbiAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCB8fCB0cmVlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFt0cmVlLCBwYXRoXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0cmVlLmtleXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBrID0gX2MudmFsdWU7XG4gICAgICAgICAgICBpZiAoayAhPT0gTEVBRiAmJiBrZXkuc3RhcnRzV2l0aChrKSkge1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChbdHJlZSwga10pOyAvLyBwZXJmb3JtYW5jZTogdXBkYXRlIGluIHBsYWNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNrRG93bih0cmVlLmdldChrKSwga2V5LnNsaWNlKGsubGVuZ3RoKSwgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVfNF8xKSB7IGVfNCA9IHsgZXJyb3I6IGVfNF8xIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNCkgdGhyb3cgZV80LmVycm9yOyB9XG4gICAgfVxuICAgIHBhdGgucHVzaChbdHJlZSwga2V5XSk7IC8vIHBlcmZvcm1hbmNlOiB1cGRhdGUgaW4gcGxhY2VcbiAgICByZXR1cm4gdHJhY2tEb3duKHVuZGVmaW5lZCwgJycsIHBhdGgpO1xufTtcbnZhciBsb29rdXAgPSBmdW5jdGlvbiAodHJlZSwga2V5KSB7XG4gICAgdmFyIGVfNSwgX2E7XG4gICAgaWYgKGtleS5sZW5ndGggPT09IDAgfHwgdHJlZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cmVlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRyZWUua2V5cygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGsgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgIGlmIChrICE9PSBMRUFGICYmIGtleS5zdGFydHNXaXRoKGspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvb2t1cCh0cmVlLmdldChrKSwga2V5LnNsaWNlKGsubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVfNV8xKSB7IGVfNSA9IHsgZXJyb3I6IGVfNV8xIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNSkgdGhyb3cgZV81LmVycm9yOyB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBhIHBhdGggaW4gdGhlIHJhZGl4IHRyZWUgZm9yIHRoZSBnaXZlbiBrZXksIGFuZCByZXR1cm5zIHRoZSBkZWVwZXN0XG4vLyBub2RlLiBUaGlzIGZ1bmN0aW9uIGlzIGluIHRoZSBob3QgcGF0aCBmb3IgaW5kZXhpbmcuIEl0IGF2b2lkcyB1bm5lY2Vzc2FyeVxuLy8gc3RyaW5nIG9wZXJhdGlvbnMgYW5kIHJlY3Vyc2lvbiBmb3IgcGVyZm9ybWFuY2UuXG52YXIgY3JlYXRlUGF0aCA9IGZ1bmN0aW9uIChub2RlLCBrZXkpIHtcbiAgICB2YXIgZV82LCBfYTtcbiAgICB2YXIga2V5TGVuZ3RoID0ga2V5Lmxlbmd0aDtcbiAgICBvdXRlcjogZm9yICh2YXIgcG9zID0gMDsgbm9kZSAmJiBwb3MgPCBrZXlMZW5ndGg7KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IChlXzYgPSB2b2lkIDAsIF9fdmFsdWVzKG5vZGUua2V5cygpKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhpcyBrZXkgaXMgYSBjYW5kaWRhdGU6IHRoZSBmaXJzdCBjaGFyYWN0ZXJzIG11c3QgbWF0Y2guXG4gICAgICAgICAgICAgICAgaWYgKGsgIT09IExFQUYgJiYga2V5W3Bvc10gPT09IGtbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IE1hdGgubWluKGtleUxlbmd0aCAtIHBvcywgay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIG9mZnNldCB0byB0aGUgcG9pbnQgd2hlcmUga2V5IGFuZCBrIG5vIGxvbmdlciBtYXRjaC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPCBsZW4gJiYga2V5W3BvcyArIG9mZnNldF0gPT09IGtbb2Zmc2V0XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRfMSA9IG5vZGUuZ2V0KGspO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09PSBrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGV4aXN0aW5nIGtleSBpcyBzaG9ydGVyIHRoYW4gdGhlIGtleSB3ZSBuZWVkIHRvIGNyZWF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBjaGlsZF8xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFydGlhbCBtYXRjaDogd2UgbmVlZCB0byBpbnNlcnQgYW4gaW50ZXJtZWRpYXRlIG5vZGUgdG8gY29udGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm90aCB0aGUgZXhpc3Rpbmcgc3VidHJlZSBhbmQgdGhlIG5ldyBub2RlLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGludGVybWVkaWF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZS5zZXQoay5zbGljZShvZmZzZXQpLCBjaGlsZF8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0KGtleS5zbGljZShwb3MsIHBvcyArIG9mZnNldCksIGludGVybWVkaWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlbGV0ZShrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBpbnRlcm1lZGlhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzZfMSkgeyBlXzYgPSB7IGVycm9yOiBlXzZfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNikgdGhyb3cgZV82LmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlIGEgZmluYWwgY2hpbGQgbm9kZSB0byBjb250YWluIHRoZSBmaW5hbCBzdWZmaXggb2YgdGhlIGtleS5cbiAgICAgICAgdmFyIGNoaWxkID0gbmV3IE1hcCgpO1xuICAgICAgICBub2RlLnNldChrZXkuc2xpY2UocG9zKSwgY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xufTtcbnZhciByZW1vdmUgPSBmdW5jdGlvbiAodHJlZSwga2V5KSB7XG4gICAgdmFyIF9hID0gX19yZWFkKHRyYWNrRG93bih0cmVlLCBrZXkpLCAyKSwgbm9kZSA9IF9hWzBdLCBwYXRoID0gX2FbMV07XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUuZGVsZXRlKExFQUYpO1xuICAgIGlmIChub2RlLnNpemUgPT09IDApIHtcbiAgICAgICAgY2xlYW51cChwYXRoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5zaXplID09PSAxKSB7XG4gICAgICAgIHZhciBfYiA9IF9fcmVhZChub2RlLmVudHJpZXMoKS5uZXh0KCkudmFsdWUsIDIpLCBrZXlfMSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xuICAgICAgICBtZXJnZShwYXRoLCBrZXlfMSwgdmFsdWUpO1xuICAgIH1cbn07XG52YXIgY2xlYW51cCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIF9hID0gX19yZWFkKGxhc3QocGF0aCksIDIpLCBub2RlID0gX2FbMF0sIGtleSA9IF9hWzFdO1xuICAgIG5vZGUuZGVsZXRlKGtleSk7XG4gICAgaWYgKG5vZGUuc2l6ZSA9PT0gMCkge1xuICAgICAgICBjbGVhbnVwKHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5zaXplID09PSAxKSB7XG4gICAgICAgIHZhciBfYiA9IF9fcmVhZChub2RlLmVudHJpZXMoKS5uZXh0KCkudmFsdWUsIDIpLCBrZXlfMiA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xuICAgICAgICBpZiAoa2V5XzIgIT09IExFQUYpIHtcbiAgICAgICAgICAgIG1lcmdlKHBhdGguc2xpY2UoMCwgLTEpLCBrZXlfMiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbnZhciBtZXJnZSA9IGZ1bmN0aW9uIChwYXRoLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIF9hID0gX19yZWFkKGxhc3QocGF0aCksIDIpLCBub2RlID0gX2FbMF0sIG5vZGVLZXkgPSBfYVsxXTtcbiAgICBub2RlLnNldChub2RlS2V5ICsga2V5LCB2YWx1ZSk7XG4gICAgbm9kZS5kZWxldGUobm9kZUtleSk7XG59O1xudmFyIGxhc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG59O1xuXG52YXIgX2E7XG52YXIgT1IgPSAnb3InO1xudmFyIEFORCA9ICdhbmQnO1xudmFyIEFORF9OT1QgPSAnYW5kX25vdCc7XG4vKipcbiAqIFtbTWluaVNlYXJjaF1dIGlzIHRoZSBtYWluIGVudHJ5cG9pbnQgY2xhc3MsIGltcGxlbWVudGluZyBhIGZ1bGwtdGV4dCBzZWFyY2hcbiAqIGVuZ2luZSBpbiBtZW1vcnkuXG4gKlxuICogQHR5cGVQYXJhbSBUICBUaGUgdHlwZSBvZiB0aGUgZG9jdW1lbnRzIGJlaW5nIGluZGV4ZWQuXG4gKlxuICogIyMjIEJhc2ljIGV4YW1wbGU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgZG9jdW1lbnRzID0gW1xuICogICB7XG4gKiAgICAgaWQ6IDEsXG4gKiAgICAgdGl0bGU6ICdNb2J5IERpY2snLFxuICogICAgIHRleHQ6ICdDYWxsIG1lIElzaG1hZWwuIFNvbWUgeWVhcnMgYWdvLi4uJyxcbiAqICAgICBjYXRlZ29yeTogJ2ZpY3Rpb24nXG4gKiAgIH0sXG4gKiAgIHtcbiAqICAgICBpZDogMixcbiAqICAgICB0aXRsZTogJ1plbiBhbmQgdGhlIEFydCBvZiBNb3RvcmN5Y2xlIE1haW50ZW5hbmNlJyxcbiAqICAgICB0ZXh0OiAnSSBjYW4gc2VlIGJ5IG15IHdhdGNoLi4uJyxcbiAqICAgICBjYXRlZ29yeTogJ2ZpY3Rpb24nXG4gKiAgIH0sXG4gKiAgIHtcbiAqICAgICBpZDogMyxcbiAqICAgICB0aXRsZTogJ05ldXJvbWFuY2VyJyxcbiAqICAgICB0ZXh0OiAnVGhlIHNreSBhYm92ZSB0aGUgcG9ydCB3YXMuLi4nLFxuICogICAgIGNhdGVnb3J5OiAnZmljdGlvbidcbiAqICAgfSxcbiAqICAge1xuICogICAgIGlkOiA0LFxuICogICAgIHRpdGxlOiAnWmVuIGFuZCB0aGUgQXJ0IG9mIEFyY2hlcnknLFxuICogICAgIHRleHQ6ICdBdCBmaXJzdCBzaWdodCBpdCBtdXN0IHNlZW0uLi4nLFxuICogICAgIGNhdGVnb3J5OiAnbm9uLWZpY3Rpb24nXG4gKiAgIH0sXG4gKiAgIC8vIC4uLmFuZCBtb3JlXG4gKiBdXG4gKlxuICogLy8gQ3JlYXRlIGEgc2VhcmNoIGVuZ2luZSB0aGF0IGluZGV4ZXMgdGhlICd0aXRsZScgYW5kICd0ZXh0JyBmaWVsZHMgZm9yXG4gKiAvLyBmdWxsLXRleHQgc2VhcmNoLiBTZWFyY2ggcmVzdWx0cyB3aWxsIGluY2x1ZGUgJ3RpdGxlJyBhbmQgJ2NhdGVnb3J5JyAocGx1cyB0aGVcbiAqIC8vIGlkIGZpZWxkLCB0aGF0IGlzIGFsd2F5cyBzdG9yZWQgYW5kIHJldHVybmVkKVxuICogY29uc3QgbWluaVNlYXJjaCA9IG5ldyBNaW5pU2VhcmNoKHtcbiAqICAgZmllbGRzOiBbJ3RpdGxlJywgJ3RleHQnXSxcbiAqICAgc3RvcmVGaWVsZHM6IFsndGl0bGUnLCAnY2F0ZWdvcnknXVxuICogfSlcbiAqXG4gKiAvLyBBZGQgZG9jdW1lbnRzIHRvIHRoZSBpbmRleFxuICogbWluaVNlYXJjaC5hZGRBbGwoZG9jdW1lbnRzKVxuICpcbiAqIC8vIFNlYXJjaCBmb3IgZG9jdW1lbnRzOlxuICogbGV0IHJlc3VsdHMgPSBtaW5pU2VhcmNoLnNlYXJjaCgnemVuIGFydCBtb3RvcmN5Y2xlJylcbiAqIC8vID0+IFtcbiAqIC8vICAgeyBpZDogMiwgdGl0bGU6ICdaZW4gYW5kIHRoZSBBcnQgb2YgTW90b3JjeWNsZSBNYWludGVuYW5jZScsIGNhdGVnb3J5OiAnZmljdGlvbicsIHNjb3JlOiAyLjc3MjU4IH0sXG4gKiAvLyAgIHsgaWQ6IDQsIHRpdGxlOiAnWmVuIGFuZCB0aGUgQXJ0IG9mIEFyY2hlcnknLCBjYXRlZ29yeTogJ25vbi1maWN0aW9uJywgc2NvcmU6IDEuMzg2MjkgfVxuICogLy8gXVxuICogYGBgXG4gKi9cbnZhciBNaW5pU2VhcmNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvcHRpb25zICBDb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBDcmVhdGUgYSBzZWFyY2ggZW5naW5lIHRoYXQgaW5kZXhlcyB0aGUgJ3RpdGxlJyBhbmQgJ3RleHQnIGZpZWxkcyBvZiB5b3VyXG4gICAgICogLy8gZG9jdW1lbnRzOlxuICAgICAqIGNvbnN0IG1pbmlTZWFyY2ggPSBuZXcgTWluaVNlYXJjaCh7IGZpZWxkczogWyd0aXRsZScsICd0ZXh0J10gfSlcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqICMjIyBJRCBGaWVsZDpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBZb3VyIGRvY3VtZW50cyBhcmUgYXNzdW1lZCB0byBpbmNsdWRlIGEgdW5pcXVlICdpZCcgZmllbGQsIGJ1dCBpZiB5b3Ugd2FudFxuICAgICAqIC8vIHRvIHVzZSBhIGRpZmZlcmVudCBmaWVsZCBmb3IgZG9jdW1lbnQgaWRlbnRpZmljYXRpb24sIHlvdSBjYW4gc2V0IHRoZVxuICAgICAqIC8vICdpZEZpZWxkJyBvcHRpb246XG4gICAgICogY29uc3QgbWluaVNlYXJjaCA9IG5ldyBNaW5pU2VhcmNoKHsgaWRGaWVsZDogJ2tleScsIGZpZWxkczogWyd0aXRsZScsICd0ZXh0J10gfSlcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqICMjIyBPcHRpb25zIGFuZCBkZWZhdWx0czpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBUaGUgZnVsbCBzZXQgb2Ygb3B0aW9ucyAoaGVyZSB3aXRoIHRoZWlyIGRlZmF1bHQgdmFsdWUpIGlzOlxuICAgICAqIGNvbnN0IG1pbmlTZWFyY2ggPSBuZXcgTWluaVNlYXJjaCh7XG4gICAgICogICAvLyBpZEZpZWxkOiBmaWVsZCB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgYSBkb2N1bWVudFxuICAgICAqICAgaWRGaWVsZDogJ2lkJyxcbiAgICAgKlxuICAgICAqICAgLy8gZXh0cmFjdEZpZWxkOiBmdW5jdGlvbiB1c2VkIHRvIGdldCB0aGUgdmFsdWUgb2YgYSBmaWVsZCBpbiBhIGRvY3VtZW50LlxuICAgICAqICAgLy8gQnkgZGVmYXVsdCwgaXQgYXNzdW1lcyB0aGUgZG9jdW1lbnQgaXMgYSBmbGF0IG9iamVjdCB3aXRoIGZpZWxkIG5hbWVzIGFzXG4gICAgICogICAvLyBwcm9wZXJ0eSBrZXlzIGFuZCBmaWVsZCB2YWx1ZXMgYXMgc3RyaW5nIHByb3BlcnR5IHZhbHVlcywgYnV0IGN1c3RvbSBsb2dpY1xuICAgICAqICAgLy8gY2FuIGJlIGltcGxlbWVudGVkIGJ5IHNldHRpbmcgdGhpcyBvcHRpb24gdG8gYSBjdXN0b20gZXh0cmFjdG9yIGZ1bmN0aW9uLlxuICAgICAqICAgZXh0cmFjdEZpZWxkOiAoZG9jdW1lbnQsIGZpZWxkTmFtZSkgPT4gZG9jdW1lbnRbZmllbGROYW1lXSxcbiAgICAgKlxuICAgICAqICAgLy8gdG9rZW5pemU6IGZ1bmN0aW9uIHVzZWQgdG8gc3BsaXQgZmllbGRzIGludG8gaW5kaXZpZHVhbCB0ZXJtcy4gQnlcbiAgICAgKiAgIC8vIGRlZmF1bHQsIGl0IGlzIGFsc28gdXNlZCB0byB0b2tlbml6ZSBzZWFyY2ggcXVlcmllcywgdW5sZXNzIGEgc3BlY2lmaWNcbiAgICAgKiAgIC8vIGB0b2tlbml6ZWAgc2VhcmNoIG9wdGlvbiBpcyBzdXBwbGllZC4gV2hlbiB0b2tlbml6aW5nIGFuIGluZGV4ZWQgZmllbGQsXG4gICAgICogICAvLyB0aGUgZmllbGQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAgICAgKiAgIHRva2VuaXplOiAoc3RyaW5nLCBfZmllbGROYW1lKSA9PiBzdHJpbmcuc3BsaXQoU1BBQ0VfT1JfUFVOQ1RVQVRJT04pLFxuICAgICAqXG4gICAgICogICAvLyBwcm9jZXNzVGVybTogZnVuY3Rpb24gdXNlZCB0byBwcm9jZXNzIGVhY2ggdG9rZW5pemVkIHRlcm0gYmVmb3JlXG4gICAgICogICAvLyBpbmRleGluZy4gSXQgY2FuIGJlIHVzZWQgZm9yIHN0ZW1taW5nIGFuZCBub3JtYWxpemF0aW9uLiBSZXR1cm4gYSBmYWxzeVxuICAgICAqICAgLy8gdmFsdWUgaW4gb3JkZXIgdG8gZGlzY2FyZCBhIHRlcm0uIEJ5IGRlZmF1bHQsIGl0IGlzIGFsc28gdXNlZCB0byBwcm9jZXNzXG4gICAgICogICAvLyBzZWFyY2ggcXVlcmllcywgdW5sZXNzIGEgc3BlY2lmaWMgYHByb2Nlc3NUZXJtYCBvcHRpb24gaXMgc3VwcGxpZWQgYXMgYVxuICAgICAqICAgLy8gc2VhcmNoIG9wdGlvbi4gV2hlbiBwcm9jZXNzaW5nIGEgdGVybSBmcm9tIGEgaW5kZXhlZCBmaWVsZCwgdGhlIGZpZWxkXG4gICAgICogICAvLyBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgICAqICAgcHJvY2Vzc1Rlcm06ICh0ZXJtLCBfZmllbGROYW1lKSA9PiB0ZXJtLnRvTG93ZXJDYXNlKCksXG4gICAgICpcbiAgICAgKiAgIC8vIHNlYXJjaE9wdGlvbnM6IGRlZmF1bHQgc2VhcmNoIG9wdGlvbnMsIHNlZSB0aGUgYHNlYXJjaGAgbWV0aG9kIGZvclxuICAgICAqICAgLy8gZGV0YWlsc1xuICAgICAqICAgc2VhcmNoT3B0aW9uczogdW5kZWZpbmVkLFxuICAgICAqXG4gICAgICogICAvLyBmaWVsZHM6IGRvY3VtZW50IGZpZWxkcyB0byBiZSBpbmRleGVkLiBNYW5kYXRvcnksIGJ1dCBub3Qgc2V0IGJ5IGRlZmF1bHRcbiAgICAgKiAgIGZpZWxkczogdW5kZWZpbmVkXG4gICAgICpcbiAgICAgKiAgIC8vIHN0b3JlRmllbGRzOiBkb2N1bWVudCBmaWVsZHMgdG8gYmUgc3RvcmVkIGFuZCByZXR1cm5lZCBhcyBwYXJ0IG9mIHRoZVxuICAgICAqICAgLy8gc2VhcmNoIHJlc3VsdHMuXG4gICAgICogICBzdG9yZUZpZWxkczogW11cbiAgICAgKiB9KVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE1pbmlTZWFyY2gob3B0aW9ucykge1xuICAgICAgICBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maWVsZHMpID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNlYXJjaDogb3B0aW9uIFwiZmllbGRzXCIgbXVzdCBiZSBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKSwgeyBzZWFyY2hPcHRpb25zOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdFNlYXJjaE9wdGlvbnMpLCAob3B0aW9ucy5zZWFyY2hPcHRpb25zIHx8IHt9KSkgfSk7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gbmV3IFNlYXJjaGFibGVNYXAoKTtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50SWRzID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBGaWVsZHMgYXJlIGRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLCBkb24ndCBjaGFuZ2UsIGFyZSBmZXcgaW5cbiAgICAgICAgLy8gbnVtYmVyLCByYXJlbHkgbmVlZCBpdGVyYXRpbmcgb3ZlciwgYW5kIGhhdmUgc3RyaW5nIGtleXMuIFRoZXJlZm9yZSBpblxuICAgICAgICAvLyB0aGlzIGNhc2UgYW4gb2JqZWN0IGlzIGEgYmV0dGVyIGNhbmRpZGF0ZSB0aGFuIGEgTWFwIHRvIHN0b3JlIHRoZSBtYXBwaW5nXG4gICAgICAgIC8vIGZyb20gZmllbGQga2V5IHRvIElELlxuICAgICAgICB0aGlzLl9maWVsZElkcyA9IHt9O1xuICAgICAgICB0aGlzLl9maWVsZExlbmd0aCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fYXZnRmllbGRMZW5ndGggPSBbXTtcbiAgICAgICAgdGhpcy5fbmV4dElkID0gMDtcbiAgICAgICAgdGhpcy5fc3RvcmVkRmllbGRzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFkZEZpZWxkcyh0aGlzLl9vcHRpb25zLmZpZWxkcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBkb2N1bWVudCB0byB0aGUgaW5kZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkb2N1bWVudCAgVGhlIGRvY3VtZW50IHRvIGJlIGluZGV4ZWRcbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2EsIGVfMiwgX2I7XG4gICAgICAgIHZhciBfYyA9IHRoaXMuX29wdGlvbnMsIGV4dHJhY3RGaWVsZCA9IF9jLmV4dHJhY3RGaWVsZCwgdG9rZW5pemUgPSBfYy50b2tlbml6ZSwgcHJvY2Vzc1Rlcm0gPSBfYy5wcm9jZXNzVGVybSwgZmllbGRzID0gX2MuZmllbGRzLCBpZEZpZWxkID0gX2MuaWRGaWVsZDtcbiAgICAgICAgdmFyIGlkID0gZXh0cmFjdEZpZWxkKGRvY3VtZW50LCBpZEZpZWxkKTtcbiAgICAgICAgaWYgKGlkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pbmlTZWFyY2g6IGRvY3VtZW50IGRvZXMgbm90IGhhdmUgSUQgZmllbGQgXFxcIlwiLmNvbmNhdChpZEZpZWxkLCBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaG9ydERvY3VtZW50SWQgPSB0aGlzLmFkZERvY3VtZW50SWQoaWQpO1xuICAgICAgICB0aGlzLnNhdmVTdG9yZWRGaWVsZHMoc2hvcnREb2N1bWVudElkLCBkb2N1bWVudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBmaWVsZHNfMSA9IF9fdmFsdWVzKGZpZWxkcyksIGZpZWxkc18xXzEgPSBmaWVsZHNfMS5uZXh0KCk7ICFmaWVsZHNfMV8xLmRvbmU7IGZpZWxkc18xXzEgPSBmaWVsZHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZFZhbHVlID0gZXh0cmFjdEZpZWxkKGRvY3VtZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IHRva2VuaXplKGZpZWxkVmFsdWUudG9TdHJpbmcoKSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZElkID0gdGhpcy5fZmllbGRJZHNbZmllbGRdO1xuICAgICAgICAgICAgICAgIHZhciB1bmlxdWVUZXJtcyA9IG5ldyBTZXQodG9rZW5zKS5zaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRmllbGRMZW5ndGgoc2hvcnREb2N1bWVudElkLCBmaWVsZElkLCB0aGlzLl9kb2N1bWVudENvdW50IC0gMSwgdW5pcXVlVGVybXMpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRva2Vuc18xID0gKGVfMiA9IHZvaWQgMCwgX192YWx1ZXModG9rZW5zKSksIHRva2Vuc18xXzEgPSB0b2tlbnNfMS5uZXh0KCk7ICF0b2tlbnNfMV8xLmRvbmU7IHRva2Vuc18xXzEgPSB0b2tlbnNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXJtID0gdG9rZW5zXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzZWRUZXJtID0gcHJvY2Vzc1Rlcm0odGVybSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NlZFRlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRlcm0oZmllbGRJZCwgc2hvcnREb2N1bWVudElkLCBwcm9jZXNzZWRUZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2Vuc18xXzEgJiYgIXRva2Vuc18xXzEuZG9uZSAmJiAoX2IgPSB0b2tlbnNfMS5yZXR1cm4pKSBfYi5jYWxsKHRva2Vuc18xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzXzFfMSAmJiAhZmllbGRzXzFfMS5kb25lICYmIChfYSA9IGZpZWxkc18xLnJldHVybikpIF9hLmNhbGwoZmllbGRzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCB0aGUgZ2l2ZW4gZG9jdW1lbnRzIHRvIHRoZSBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIGRvY3VtZW50cyAgQW4gYXJyYXkgb2YgZG9jdW1lbnRzIHRvIGJlIGluZGV4ZWRcbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5hZGRBbGwgPSBmdW5jdGlvbiAoZG9jdW1lbnRzKSB7XG4gICAgICAgIHZhciBlXzMsIF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZG9jdW1lbnRzXzEgPSBfX3ZhbHVlcyhkb2N1bWVudHMpLCBkb2N1bWVudHNfMV8xID0gZG9jdW1lbnRzXzEubmV4dCgpOyAhZG9jdW1lbnRzXzFfMS5kb25lOyBkb2N1bWVudHNfMV8xID0gZG9jdW1lbnRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50XzEgPSBkb2N1bWVudHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGRvY3VtZW50XzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnRzXzFfMSAmJiAhZG9jdW1lbnRzXzFfMS5kb25lICYmIChfYSA9IGRvY3VtZW50c18xLnJldHVybikpIF9hLmNhbGwoZG9jdW1lbnRzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCB0aGUgZ2l2ZW4gZG9jdW1lbnRzIHRvIHRoZSBpbmRleCBhc3luY2hyb25vdXNseS5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgKHRvIGB1bmRlZmluZWRgKSB3aGVuIHRoZSBpbmRleGluZyBpcyBkb25lLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWZ1bCB3aGVuIGluZGV4IG1hbnkgZG9jdW1lbnRzLCB0byBhdm9pZCBibG9ja2luZyB0aGUgbWFpblxuICAgICAqIHRocmVhZC4gVGhlIGluZGV4aW5nIGlzIHBlcmZvcm1lZCBhc3luY2hyb25vdXNseSBhbmQgaW4gY2h1bmtzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRvY3VtZW50cyAgQW4gYXJyYXkgb2YgZG9jdW1lbnRzIHRvIGJlIGluZGV4ZWRcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAgQ29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAgICogQHJldHVybiBBIHByb21pc2UgcmVzb2x2aW5nIHRvIGB1bmRlZmluZWRgIHdoZW4gdGhlIGluZGV4aW5nIGlzIGRvbmVcbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5hZGRBbGxBc3luYyA9IGZ1bmN0aW9uIChkb2N1bWVudHMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucy5jaHVua1NpemUsIGNodW5rU2l6ZSA9IF9hID09PSB2b2lkIDAgPyAxMCA6IF9hO1xuICAgICAgICB2YXIgYWNjID0geyBjaHVuazogW10sIHByb21pc2U6IFByb21pc2UucmVzb2x2ZSgpIH07XG4gICAgICAgIHZhciBfYiA9IGRvY3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKF9hLCBkb2N1bWVudCwgaSkge1xuICAgICAgICAgICAgdmFyIGNodW5rID0gX2EuY2h1bmssIHByb21pc2UgPSBfYS5wcm9taXNlO1xuICAgICAgICAgICAgY2h1bmsucHVzaChkb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoKGkgKyAxKSAlIGNodW5rU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgMCk7IH0pOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWRkQWxsKGNodW5rKTsgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgY2h1bms6IGNodW5rLCBwcm9taXNlOiBwcm9taXNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGFjYyksIGNodW5rID0gX2IuY2h1bmssIHByb21pc2UgPSBfYi5wcm9taXNlO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkZEFsbChjaHVuayk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gZG9jdW1lbnQgZnJvbSB0aGUgaW5kZXguXG4gICAgICpcbiAgICAgKiBUaGUgZG9jdW1lbnQgdG8gZGVsZXRlIG11c3QgTk9UIGhhdmUgY2hhbmdlZCBiZXR3ZWVuIGluZGV4aW5nIGFuZCBkZWxldGlvbixcbiAgICAgKiBvdGhlcndpc2UgdGhlIGluZGV4IHdpbGwgYmUgY29ycnVwdGVkLiBUaGVyZWZvcmUsIHdoZW4gcmVpbmRleGluZyBhIGRvY3VtZW50XG4gICAgICogYWZ0ZXIgYSBjaGFuZ2UsIHRoZSBjb3JyZWN0IG9yZGVyIG9mIG9wZXJhdGlvbnMgaXM6XG4gICAgICpcbiAgICAgKiAgIDEuIHJlbW92ZSBvbGQgdmVyc2lvblxuICAgICAqICAgMi4gYXBwbHkgY2hhbmdlc1xuICAgICAqICAgMy4gaW5kZXggbmV3IHZlcnNpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkb2N1bWVudCAgVGhlIGRvY3VtZW50IHRvIGJlIHJlbW92ZWRcbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGVfNCwgX2EsIGVfNSwgX2IsIGVfNiwgX2M7XG4gICAgICAgIHZhciBfZCA9IHRoaXMuX29wdGlvbnMsIHRva2VuaXplID0gX2QudG9rZW5pemUsIHByb2Nlc3NUZXJtID0gX2QucHJvY2Vzc1Rlcm0sIGV4dHJhY3RGaWVsZCA9IF9kLmV4dHJhY3RGaWVsZCwgZmllbGRzID0gX2QuZmllbGRzLCBpZEZpZWxkID0gX2QuaWRGaWVsZDtcbiAgICAgICAgdmFyIGlkID0gZXh0cmFjdEZpZWxkKGRvY3VtZW50LCBpZEZpZWxkKTtcbiAgICAgICAgaWYgKGlkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pbmlTZWFyY2g6IGRvY3VtZW50IGRvZXMgbm90IGhhdmUgSUQgZmllbGQgXFxcIlwiLmNvbmNhdChpZEZpZWxkLCBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfZSA9IF9fdmFsdWVzKHRoaXMuX2RvY3VtZW50SWRzKSwgX2YgPSBfZS5uZXh0KCk7ICFfZi5kb25lOyBfZiA9IF9lLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBfZyA9IF9fcmVhZChfZi52YWx1ZSwgMiksIHNob3J0SWQgPSBfZ1swXSwgbG9uZ0lkID0gX2dbMV07XG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSBsb25nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGZpZWxkc18yID0gKGVfNSA9IHZvaWQgMCwgX192YWx1ZXMoZmllbGRzKSksIGZpZWxkc18yXzEgPSBmaWVsZHNfMi5uZXh0KCk7ICFmaWVsZHNfMl8xLmRvbmU7IGZpZWxkc18yXzEgPSBmaWVsZHNfMi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNfMl8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZFZhbHVlID0gZXh0cmFjdEZpZWxkKGRvY3VtZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IHRva2VuaXplKGZpZWxkVmFsdWUudG9TdHJpbmcoKSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZElkID0gdGhpcy5fZmllbGRJZHNbZmllbGRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bmlxdWVUZXJtcyA9IG5ldyBTZXQodG9rZW5zKS5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmllbGRMZW5ndGgoc2hvcnRJZCwgZmllbGRJZCwgdGhpcy5fZG9jdW1lbnRDb3VudCwgdW5pcXVlVGVybXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRva2Vuc18yID0gKGVfNiA9IHZvaWQgMCwgX192YWx1ZXModG9rZW5zKSksIHRva2Vuc18yXzEgPSB0b2tlbnNfMi5uZXh0KCk7ICF0b2tlbnNfMl8xLmRvbmU7IHRva2Vuc18yXzEgPSB0b2tlbnNfMi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXJtID0gdG9rZW5zXzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzZWRUZXJtID0gcHJvY2Vzc1Rlcm0odGVybSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NlZFRlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRlcm0oZmllbGRJZCwgc2hvcnRJZCwgcHJvY2Vzc2VkVGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfNl8xKSB7IGVfNiA9IHsgZXJyb3I6IGVfNl8xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbnNfMl8xICYmICF0b2tlbnNfMl8xLmRvbmUgJiYgKF9jID0gdG9rZW5zXzIucmV0dXJuKSkgX2MuY2FsbCh0b2tlbnNfMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzYpIHRocm93IGVfNi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV81XzEpIHsgZV81ID0geyBlcnJvcjogZV81XzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkc18yXzEgJiYgIWZpZWxkc18yXzEuZG9uZSAmJiAoX2IgPSBmaWVsZHNfMi5yZXR1cm4pKSBfYi5jYWxsKGZpZWxkc18yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV81KSB0aHJvdyBlXzUuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9yZWRGaWVsZHMuZGVsZXRlKHNob3J0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb2N1bWVudElkcy5kZWxldGUoc2hvcnRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpZWxkTGVuZ3RoLmRlbGV0ZShzaG9ydElkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnRDb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzRfMSkgeyBlXzQgPSB7IGVycm9yOiBlXzRfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2YgJiYgIV9mLmRvbmUgJiYgKF9hID0gX2UucmV0dXJuKSkgX2EuY2FsbChfZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNCkgdGhyb3cgZV80LmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWluaVNlYXJjaDogY2Fubm90IHJlbW92ZSBkb2N1bWVudCB3aXRoIElEIFwiLmNvbmNhdChpZCwgXCI6IGl0IGlzIG5vdCBpbiB0aGUgaW5kZXhcIikpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgdGhlIGdpdmVuIGRvY3VtZW50cyBmcm9tIHRoZSBpbmRleC4gSWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRzLFxuICAgICAqIGl0IHJlbW92ZXMgX2FsbF8gZG9jdW1lbnRzIGZyb20gdGhlIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRvY3VtZW50cyAgVGhlIGRvY3VtZW50cyB0byBiZSByZW1vdmVkLiBJZiB0aGlzIGFyZ3VtZW50IGlzIG9taXR0ZWQsXG4gICAgICogYWxsIGRvY3VtZW50cyBhcmUgcmVtb3ZlZC4gTm90ZSB0aGF0LCBmb3IgcmVtb3ZpbmcgYWxsIGRvY3VtZW50cywgaXQgaXNcbiAgICAgKiBtb3JlIGVmZmljaWVudCB0byBjYWxsIHRoaXMgbWV0aG9kIHdpdGggbm8gYXJndW1lbnRzIHRoYW4gdG8gcGFzcyBhbGxcbiAgICAgKiBkb2N1bWVudHMuXG4gICAgICovXG4gICAgTWluaVNlYXJjaC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKGRvY3VtZW50cykge1xuICAgICAgICB2YXIgZV83LCBfYTtcbiAgICAgICAgaWYgKGRvY3VtZW50cykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkb2N1bWVudHNfMiA9IF9fdmFsdWVzKGRvY3VtZW50cyksIGRvY3VtZW50c18yXzEgPSBkb2N1bWVudHNfMi5uZXh0KCk7ICFkb2N1bWVudHNfMl8xLmRvbmU7IGRvY3VtZW50c18yXzEgPSBkb2N1bWVudHNfMi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50XzIgPSBkb2N1bWVudHNfMl8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShkb2N1bWVudF8yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV83XzEpIHsgZV83ID0geyBlcnJvcjogZV83XzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50c18yXzEgJiYgIWRvY3VtZW50c18yXzEuZG9uZSAmJiAoX2EgPSBkb2N1bWVudHNfMi5yZXR1cm4pKSBfYS5jYWxsKGRvY3VtZW50c18yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzcpIHRocm93IGVfNy5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGRvY3VtZW50cyB0byBiZSBwcmVzZW50LiBPbWl0IHRoZSBhcmd1bWVudCB0byByZW1vdmUgYWxsIGRvY3VtZW50cy4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gbmV3IFNlYXJjaGFibGVNYXAoKTtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50Q291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnRJZHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB0aGlzLl9maWVsZExlbmd0aCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMuX2F2Z0ZpZWxkTGVuZ3RoID0gW107XG4gICAgICAgICAgICB0aGlzLl9zdG9yZWRGaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB0aGlzLl9uZXh0SWQgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZWFyY2ggZm9yIGRvY3VtZW50cyBtYXRjaGluZyB0aGUgZ2l2ZW4gc2VhcmNoIHF1ZXJ5LlxuICAgICAqXG4gICAgICogVGhlIHJlc3VsdCBpcyBhIGxpc3Qgb2Ygc2NvcmVkIGRvY3VtZW50IElEcyBtYXRjaGluZyB0aGUgcXVlcnksIHNvcnRlZCBieVxuICAgICAqIGRlc2NlbmRpbmcgc2NvcmUsIGFuZCBlYWNoIGluY2x1ZGluZyBkYXRhIGFib3V0IHdoaWNoIHRlcm1zIHdlcmUgbWF0Y2hlZCBhbmRcbiAgICAgKiBpbiB3aGljaCBmaWVsZHMuXG4gICAgICpcbiAgICAgKiAjIyMgQmFzaWMgdXNhZ2U6XG4gICAgICpcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogLy8gU2VhcmNoIGZvciBcInplbiBhcnQgbW90b3JjeWNsZVwiIHdpdGggZGVmYXVsdCBvcHRpb25zOiB0ZXJtcyBoYXZlIHRvIG1hdGNoXG4gICAgICogLy8gZXhhY3RseSwgYW5kIGluZGl2aWR1YWwgdGVybXMgYXJlIGpvaW5lZCB3aXRoIE9SXG4gICAgICogbWluaVNlYXJjaC5zZWFyY2goJ3plbiBhcnQgbW90b3JjeWNsZScpXG4gICAgICogLy8gPT4gWyB7IGlkOiAyLCBzY29yZTogMi43NzI1OCwgbWF0Y2g6IHsgLi4uIH0gfSwgeyBpZDogNCwgc2NvcmU6IDEuMzg2MjksIG1hdGNoOiB7IC4uLiB9IH0gXVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogIyMjIFJlc3RyaWN0IHNlYXJjaCB0byBzcGVjaWZpYyBmaWVsZHM6XG4gICAgICpcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogLy8gU2VhcmNoIG9ubHkgaW4gdGhlICd0aXRsZScgZmllbGRcbiAgICAgKiBtaW5pU2VhcmNoLnNlYXJjaCgnemVuJywgeyBmaWVsZHM6IFsndGl0bGUnXSB9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogIyMjIEZpZWxkIGJvb3N0aW5nOlxuICAgICAqXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEJvb3N0IGEgZmllbGRcbiAgICAgKiBtaW5pU2VhcmNoLnNlYXJjaCgnemVuJywgeyBib29zdDogeyB0aXRsZTogMiB9IH0pXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiAjIyMgUHJlZml4IHNlYXJjaDpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBTZWFyY2ggZm9yIFwibW90b1wiIHdpdGggcHJlZml4IHNlYXJjaCAoaXQgd2lsbCBtYXRjaCBkb2N1bWVudHNcbiAgICAgKiAvLyBjb250YWluaW5nIHRlcm1zIHRoYXQgc3RhcnQgd2l0aCBcIm1vdG9cIiBvciBcIm5ldXJvXCIpXG4gICAgICogbWluaVNlYXJjaC5zZWFyY2goJ21vdG8gbmV1cm8nLCB7IHByZWZpeDogdHJ1ZSB9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogIyMjIEZ1enp5IHNlYXJjaDpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBTZWFyY2ggZm9yIFwiaXNtYWVsXCIgd2l0aCBmdXp6eSBzZWFyY2ggKGl0IHdpbGwgbWF0Y2ggZG9jdW1lbnRzIGNvbnRhaW5pbmdcbiAgICAgKiAvLyB0ZXJtcyBzaW1pbGFyIHRvIFwiaXNtYWVsXCIsIHdpdGggYSBtYXhpbXVtIGVkaXQgZGlzdGFuY2Ugb2YgMC4yIHRlcm0ubGVuZ3RoXG4gICAgICogLy8gKHJvdW5kZWQgdG8gbmVhcmVzdCBpbnRlZ2VyKVxuICAgICAqIG1pbmlTZWFyY2guc2VhcmNoKCdpc21hZWwnLCB7IGZ1enp5OiAwLjIgfSlcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqICMjIyBDb21iaW5pbmcgc3RyYXRlZ2llczpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBNaXggb2YgZXhhY3QgbWF0Y2gsIHByZWZpeCBzZWFyY2gsIGFuZCBmdXp6eSBzZWFyY2hcbiAgICAgKiBtaW5pU2VhcmNoLnNlYXJjaCgnaXNtYWVsIG1vYicsIHtcbiAgICAgKiAgcHJlZml4OiB0cnVlLFxuICAgICAqICBmdXp6eTogMC4yXG4gICAgICogfSlcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqICMjIyBBZHZhbmNlZCBwcmVmaXggYW5kIGZ1enp5IHNlYXJjaDpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBQZXJmb3JtIGZ1enp5IGFuZCBwcmVmaXggc2VhcmNoIGRlcGVuZGluZyBvbiB0aGUgc2VhcmNoIHRlcm0uIEhlcmVcbiAgICAgKiAvLyBwZXJmb3JtaW5nIHByZWZpeCBhbmQgZnV6enkgc2VhcmNoIG9ubHkgb24gdGVybXMgbG9uZ2VyIHRoYW4gMyBjaGFyYWN0ZXJzXG4gICAgICogbWluaVNlYXJjaC5zZWFyY2goJ2lzbWFlbCBtb2InLCB7XG4gICAgICogIHByZWZpeDogdGVybSA9PiB0ZXJtLmxlbmd0aCA+IDNcbiAgICAgKiAgZnV6enk6IHRlcm0gPT4gdGVybS5sZW5ndGggPiAzID8gMC4yIDogbnVsbFxuICAgICAqIH0pXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiAjIyMgQ29tYmluZSB3aXRoIEFORDpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBDb21iaW5lIHNlYXJjaCB0ZXJtcyB3aXRoIEFORCAodG8gbWF0Y2ggb25seSBkb2N1bWVudHMgdGhhdCBjb250YWluIGJvdGhcbiAgICAgKiAvLyBcIm1vdG9yY3ljbGVcIiBhbmQgXCJhcnRcIilcbiAgICAgKiBtaW5pU2VhcmNoLnNlYXJjaCgnbW90b3JjeWNsZSBhcnQnLCB7IGNvbWJpbmVXaXRoOiAnQU5EJyB9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogIyMjIENvbWJpbmUgd2l0aCBBTkRfTk9UOlxuICAgICAqXG4gICAgICogVGhlcmUgaXMgYWxzbyBhbiBBTkRfTk9UIGNvbWJpbmF0b3IsIHRoYXQgZmluZHMgZG9jdW1lbnRzIHRoYXQgbWF0Y2ggdGhlXG4gICAgICogZmlyc3QgdGVybSwgYnV0IGRvIG5vdCBtYXRjaCBhbnkgb2YgdGhlIG90aGVyIHRlcm1zLiBUaGlzIGNvbWJpbmF0b3IgaXNcbiAgICAgKiByYXJlbHkgdXNlZnVsIHdpdGggc2ltcGxlIHF1ZXJpZXMsIGFuZCBpcyBtZWFudCB0byBiZSB1c2VkIHdpdGggYWR2YW5jZWRcbiAgICAgKiBxdWVyeSBjb21iaW5hdGlvbnMgKHNlZSBsYXRlciBmb3IgbW9yZSBkZXRhaWxzKS5cbiAgICAgKlxuICAgICAqICMjIyBGaWx0ZXJpbmcgcmVzdWx0czpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBGaWx0ZXIgb25seSByZXN1bHRzIGluIHRoZSAnZmljdGlvbicgY2F0ZWdvcnkgKGFzc3VtaW5nIHRoYXQgJ2NhdGVnb3J5J1xuICAgICAqIC8vIGlzIGEgc3RvcmVkIGZpZWxkKVxuICAgICAqIG1pbmlTZWFyY2guc2VhcmNoKCdtb3RvcmN5Y2xlIGFydCcsIHtcbiAgICAgKiAgIGZpbHRlcjogKHJlc3VsdCkgPT4gcmVzdWx0LmNhdGVnb3J5ID09PSAnZmljdGlvbidcbiAgICAgKiB9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogIyMjIEFkdmFuY2VkIGNvbWJpbmF0aW9uIG9mIHF1ZXJpZXM6XG4gICAgICpcbiAgICAgKiBJdCBpcyBwb3NzaWJsZSB0byBjb21iaW5lIGRpZmZlcmVudCBzdWJxdWVyaWVzIHdpdGggT1IsIEFORCwgYW5kIEFORF9OT1QsXG4gICAgICogYW5kIGV2ZW4gd2l0aCBkaWZmZXJlbnQgc2VhcmNoIG9wdGlvbnMsIGJ5IHBhc3NpbmcgYSBxdWVyeSBleHByZXNzaW9uXG4gICAgICogdHJlZSBvYmplY3QgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCBpbnN0ZWFkIG9mIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIFNlYXJjaCBmb3IgZG9jdW1lbnRzIHRoYXQgY29udGFpbiBcInplblwiIGFuZCAoXCJtb3RvcmN5Y2xlXCIgb3IgXCJhcmNoZXJ5XCIpXG4gICAgICogbWluaVNlYXJjaC5zZWFyY2goe1xuICAgICAqICAgY29tYmluZVdpdGg6ICdBTkQnLFxuICAgICAqICAgcXVlcmllczogW1xuICAgICAqICAgICAnemVuJyxcbiAgICAgKiAgICAge1xuICAgICAqICAgICAgIGNvbWJpbmVXaXRoOiAnT1InLFxuICAgICAqICAgICAgIHF1ZXJpZXM6IFsnbW90b3JjeWNsZScsICdhcmNoZXJ5J11cbiAgICAgKiAgICAgfVxuICAgICAqICAgXVxuICAgICAqIH0pXG4gICAgICpcbiAgICAgKiAvLyBTZWFyY2ggZm9yIGRvY3VtZW50cyB0aGF0IGNvbnRhaW4gKFwiYXBwbGVcIiBvciBcInBlYXJcIikgYnV0IG5vdCBcImp1aWNlXCIgYW5kXG4gICAgICogLy8gbm90IFwidHJlZVwiXG4gICAgICogbWluaVNlYXJjaC5zZWFyY2goe1xuICAgICAqICAgY29tYmluZVdpdGg6ICdBTkRfTk9UJyxcbiAgICAgKiAgIHF1ZXJpZXM6IFtcbiAgICAgKiAgICAge1xuICAgICAqICAgICAgIGNvbWJpbmVXaXRoOiAnT1InLFxuICAgICAqICAgICAgIHF1ZXJpZXM6IFsnYXBwbGUnLCAncGVhciddXG4gICAgICogICAgIH0sXG4gICAgICogICAgICdqdWljZScsXG4gICAgICogICAgICd0cmVlJ1xuICAgICAqICAgXVxuICAgICAqIH0pXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBFYWNoIG5vZGUgaW4gdGhlIGV4cHJlc3Npb24gdHJlZSBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nLCBvciBhbiBvYmplY3QgdGhhdFxuICAgICAqIHN1cHBvcnRzIGFsbCBgU2VhcmNoT3B0aW9uc2AgZmllbGRzLCBwbHVzIGEgYHF1ZXJpZXNgIGFycmF5IGZpZWxkIGZvclxuICAgICAqIHN1YnF1ZXJpZXMuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQsIHdoaWxlIHRoaXMgY2FuIGJlY29tZSBjb21wbGljYXRlZCB0byBkbyBieSBoYW5kIGZvciBjb21wbGV4IG9yXG4gICAgICogZGVlcGx5IG5lc3RlZCBxdWVyaWVzLCBpdCBwcm92aWRlcyBhIGZvcm1hbGl6ZWQgZXhwcmVzc2lvbiB0cmVlIEFQSSBmb3JcbiAgICAgKiBleHRlcm5hbCBsaWJyYXJpZXMgdGhhdCBpbXBsZW1lbnQgYSBwYXJzZXIgZm9yIGN1c3RvbSBxdWVyeSBsYW5ndWFnZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcXVlcnkgIFNlYXJjaCBxdWVyeVxuICAgICAqIEBwYXJhbSBvcHRpb25zICBTZWFyY2ggb3B0aW9ucy4gRWFjaCBvcHRpb24sIGlmIG5vdCBnaXZlbiwgZGVmYXVsdHMgdG8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUgb2YgYHNlYXJjaE9wdGlvbnNgIGdpdmVuIHRvIHRoZSBjb25zdHJ1Y3Rvciwgb3IgdG8gdGhlIGxpYnJhcnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAocXVlcnksIHNlYXJjaE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGVfOCwgX2E7XG4gICAgICAgIGlmIChzZWFyY2hPcHRpb25zID09PSB2b2lkIDApIHsgc2VhcmNoT3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBjb21iaW5lZFJlc3VsdHMgPSB0aGlzLmV4ZWN1dGVRdWVyeShxdWVyeSwgc2VhcmNoT3B0aW9ucyk7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb21iaW5lZFJlc3VsdHNfMSA9IF9fdmFsdWVzKGNvbWJpbmVkUmVzdWx0cyksIGNvbWJpbmVkUmVzdWx0c18xXzEgPSBjb21iaW5lZFJlc3VsdHNfMS5uZXh0KCk7ICFjb21iaW5lZFJlc3VsdHNfMV8xLmRvbmU7IGNvbWJpbmVkUmVzdWx0c18xXzEgPSBjb21iaW5lZFJlc3VsdHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoY29tYmluZWRSZXN1bHRzXzFfMS52YWx1ZSwgMiksIGRvY0lkID0gX2JbMF0sIF9jID0gX2JbMV0sIHNjb3JlID0gX2Muc2NvcmUsIHRlcm1zID0gX2MudGVybXMsIG1hdGNoID0gX2MubWF0Y2g7XG4gICAgICAgICAgICAgICAgLy8gRmluYWwgc2NvcmUgdGFrZXMgaW50byBhY2NvdW50IHRoZSBudW1iZXIgb2YgbWF0Y2hpbmcgUVVFUlkgdGVybXMuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGVuZCB1c2VyIHdpbGwgb25seSByZWNlaXZlIHRoZSBNQVRDSEVEIHRlcm1zLlxuICAgICAgICAgICAgICAgIHZhciBxdWFsaXR5ID0gdGVybXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9kb2N1bWVudElkcy5nZXQoZG9jSWQpLFxuICAgICAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUgKiBxdWFsaXR5LFxuICAgICAgICAgICAgICAgICAgICB0ZXJtczogT2JqZWN0LmtleXMobWF0Y2gpLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogbWF0Y2hcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB0aGlzLl9zdG9yZWRGaWVsZHMuZ2V0KGRvY0lkKSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaE9wdGlvbnMuZmlsdGVyID09IG51bGwgfHwgc2VhcmNoT3B0aW9ucy5maWx0ZXIocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfOF8xKSB7IGVfOCA9IHsgZXJyb3I6IGVfOF8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChjb21iaW5lZFJlc3VsdHNfMV8xICYmICFjb21iaW5lZFJlc3VsdHNfMV8xLmRvbmUgJiYgKF9hID0gY29tYmluZWRSZXN1bHRzXzEucmV0dXJuKSkgX2EuY2FsbChjb21iaW5lZFJlc3VsdHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfOCkgdGhyb3cgZV84LmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0cy5zb3J0KGJ5U2NvcmUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGUgc3VnZ2VzdGlvbnMgZm9yIHRoZSBnaXZlbiBzZWFyY2ggcXVlcnlcbiAgICAgKlxuICAgICAqIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIHN1Z2dlc3RlZCBtb2RpZmllZCBzZWFyY2ggcXVlcmllcywgZGVyaXZlZCBmcm9tIHRoZVxuICAgICAqIGdpdmVuIHNlYXJjaCBxdWVyeSwgZWFjaCB3aXRoIGEgcmVsZXZhbmNlIHNjb3JlLCBzb3J0ZWQgYnkgZGVzY2VuZGluZyBzY29yZS5cbiAgICAgKlxuICAgICAqICMjIyBCYXNpYyB1c2FnZTpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBHZXQgc3VnZ2VzdGlvbnMgZm9yICduZXVybyc6XG4gICAgICogbWluaVNlYXJjaC5hdXRvU3VnZ2VzdCgnbmV1cm8nKVxuICAgICAqIC8vID0+IFsgeyBzdWdnZXN0aW9uOiAnbmV1cm9tYW5jZXInLCB0ZXJtczogWyAnbmV1cm9tYW5jZXInIF0sIHNjb3JlOiAwLjQ2MjQwIH0gXVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogIyMjIE11bHRpcGxlIHdvcmRzOlxuICAgICAqXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEdldCBzdWdnZXN0aW9ucyBmb3IgJ3plbiBhcic6XG4gICAgICogbWluaVNlYXJjaC5hdXRvU3VnZ2VzdCgnemVuIGFyJylcbiAgICAgKiAvLyA9PiBbXG4gICAgICogLy8gIHsgc3VnZ2VzdGlvbjogJ3plbiBhcmNoZXJ5IGFydCcsIHRlcm1zOiBbICd6ZW4nLCAnYXJjaGVyeScsICdhcnQnIF0sIHNjb3JlOiAxLjczMzMyIH0sXG4gICAgICogLy8gIHsgc3VnZ2VzdGlvbjogJ3plbiBhcnQnLCB0ZXJtczogWyAnemVuJywgJ2FydCcgXSwgc2NvcmU6IDEuMjEzMTMgfVxuICAgICAqIC8vIF1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqICMjIyBGdXp6eSBzdWdnZXN0aW9uczpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBDb3JyZWN0IHNwZWxsaW5nIG1pc3Rha2VzIHVzaW5nIGZ1enp5IHNlYXJjaDpcbiAgICAgKiBtaW5pU2VhcmNoLmF1dG9TdWdnZXN0KCduZXJvbWFuY2VyJywgeyBmdXp6eTogMC4yIH0pXG4gICAgICogLy8gPT4gWyB7IHN1Z2dlc3Rpb246ICduZXVyb21hbmNlcicsIHRlcm1zOiBbICduZXVyb21hbmNlcicgXSwgc2NvcmU6IDEuMDM5OTggfSBdXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiAjIyMgRmlsdGVyaW5nOlxuICAgICAqXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEdldCBzdWdnZXN0aW9ucyBmb3IgJ3plbiBhcicsIGJ1dCBvbmx5IHdpdGhpbiB0aGUgJ2ZpY3Rpb24nIGNhdGVnb3J5XG4gICAgICogLy8gKGFzc3VtaW5nIHRoYXQgJ2NhdGVnb3J5JyBpcyBhIHN0b3JlZCBmaWVsZCk6XG4gICAgICogbWluaVNlYXJjaC5hdXRvU3VnZ2VzdCgnemVuIGFyJywge1xuICAgICAqICAgZmlsdGVyOiAocmVzdWx0KSA9PiByZXN1bHQuY2F0ZWdvcnkgPT09ICdmaWN0aW9uJ1xuICAgICAqIH0pXG4gICAgICogLy8gPT4gW1xuICAgICAqIC8vICB7IHN1Z2dlc3Rpb246ICd6ZW4gYXJjaGVyeSBhcnQnLCB0ZXJtczogWyAnemVuJywgJ2FyY2hlcnknLCAnYXJ0JyBdLCBzY29yZTogMS43MzMzMiB9LFxuICAgICAqIC8vICB7IHN1Z2dlc3Rpb246ICd6ZW4gYXJ0JywgdGVybXM6IFsgJ3plbicsICdhcnQnIF0sIHNjb3JlOiAxLjIxMzEzIH1cbiAgICAgKiAvLyBdXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcXVlcnlTdHJpbmcgIFF1ZXJ5IHN0cmluZyB0byBiZSBleHBhbmRlZCBpbnRvIHN1Z2dlc3Rpb25zXG4gICAgICogQHBhcmFtIG9wdGlvbnMgIFNlYXJjaCBvcHRpb25zLiBUaGUgc3VwcG9ydGVkIG9wdGlvbnMgYW5kIGRlZmF1bHQgdmFsdWVzXG4gICAgICogYXJlIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNlYXJjaGAgbWV0aG9kLCBleGNlcHQgdGhhdCBieSBkZWZhdWx0IHByZWZpeFxuICAgICAqIHNlYXJjaCBpcyBwZXJmb3JtZWQgb24gdGhlIGxhc3QgdGVybSBpbiB0aGUgcXVlcnkuXG4gICAgICogQHJldHVybiAgQSBzb3J0ZWQgYXJyYXkgb2Ygc3VnZ2VzdGlvbnMgc29ydGVkIGJ5IHJlbGV2YW5jZSBzY29yZS5cbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5hdXRvU3VnZ2VzdCA9IGZ1bmN0aW9uIChxdWVyeVN0cmluZywgb3B0aW9ucykge1xuICAgICAgICB2YXIgZV85LCBfYSwgZV8xMCwgX2I7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdEF1dG9TdWdnZXN0T3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKHRoaXMuc2VhcmNoKHF1ZXJ5U3RyaW5nLCBvcHRpb25zKSksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2UgPSBfZC52YWx1ZSwgc2NvcmUgPSBfZS5zY29yZSwgdGVybXMgPSBfZS50ZXJtcztcbiAgICAgICAgICAgICAgICB2YXIgcGhyYXNlID0gdGVybXMuam9pbignICcpO1xuICAgICAgICAgICAgICAgIHZhciBzdWdnZXN0aW9uID0gc3VnZ2VzdGlvbnMuZ2V0KHBocmFzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1Z2dlc3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uLnNjb3JlICs9IHNjb3JlO1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uLmNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucy5zZXQocGhyYXNlLCB7IHNjb3JlOiBzY29yZSwgdGVybXM6IHRlcm1zLCBjb3VudDogMSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfOV8xKSB7IGVfOSA9IHsgZXJyb3I6IGVfOV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV85KSB0aHJvdyBlXzkuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgc3VnZ2VzdGlvbnNfMSA9IF9fdmFsdWVzKHN1Z2dlc3Rpb25zKSwgc3VnZ2VzdGlvbnNfMV8xID0gc3VnZ2VzdGlvbnNfMS5uZXh0KCk7ICFzdWdnZXN0aW9uc18xXzEuZG9uZTsgc3VnZ2VzdGlvbnNfMV8xID0gc3VnZ2VzdGlvbnNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2YgPSBfX3JlYWQoc3VnZ2VzdGlvbnNfMV8xLnZhbHVlLCAyKSwgc3VnZ2VzdGlvbiA9IF9mWzBdLCBfZyA9IF9mWzFdLCBzY29yZSA9IF9nLnNjb3JlLCB0ZXJtcyA9IF9nLnRlcm1zLCBjb3VudCA9IF9nLmNvdW50O1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IHN1Z2dlc3Rpb246IHN1Z2dlc3Rpb24sIHRlcm1zOiB0ZXJtcywgc2NvcmU6IHNjb3JlIC8gY291bnQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMTBfMSkgeyBlXzEwID0geyBlcnJvcjogZV8xMF8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChzdWdnZXN0aW9uc18xXzEgJiYgIXN1Z2dlc3Rpb25zXzFfMS5kb25lICYmIChfYiA9IHN1Z2dlc3Rpb25zXzEucmV0dXJuKSkgX2IuY2FsbChzdWdnZXN0aW9uc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMCkgdGhyb3cgZV8xMC5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHMuc29ydChieVNjb3JlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWluaVNlYXJjaC5wcm90b3R5cGUsIFwiZG9jdW1lbnRDb3VudFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOdW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBpbmRleFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyBhIEpTT04gaW5kZXggKHNlcmlhbGl6ZWQgd2l0aCBgSlNPTi5zdHJpbmdpZnkobWluaVNlYXJjaClgKVxuICAgICAqIGFuZCBpbnN0YW50aWF0ZXMgYSBNaW5pU2VhcmNoIGluc3RhbmNlLiBJdCBzaG91bGQgYmUgZ2l2ZW4gdGhlIHNhbWUgb3B0aW9uc1xuICAgICAqIG9yaWdpbmFsbHkgdXNlZCB3aGVuIHNlcmlhbGl6aW5nIHRoZSBpbmRleC5cbiAgICAgKlxuICAgICAqICMjIyBVc2FnZTpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBJZiB0aGUgaW5kZXggd2FzIHNlcmlhbGl6ZWQgd2l0aDpcbiAgICAgKiBsZXQgbWluaVNlYXJjaCA9IG5ldyBNaW5pU2VhcmNoKHsgZmllbGRzOiBbJ3RpdGxlJywgJ3RleHQnXSB9KVxuICAgICAqIG1pbmlTZWFyY2guYWRkQWxsKGRvY3VtZW50cylcbiAgICAgKlxuICAgICAqIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShtaW5pU2VhcmNoKVxuICAgICAqIC8vIEl0IGNhbiBsYXRlciBiZSBkZXNlcmlhbGl6ZWQgbGlrZSB0aGlzOlxuICAgICAqIG1pbmlTZWFyY2ggPSBNaW5pU2VhcmNoLmxvYWRKU09OKGpzb24sIHsgZmllbGRzOiBbJ3RpdGxlJywgJ3RleHQnXSB9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGpzb24gIEpTT04tc2VyaWFsaXplZCBpbmRleFxuICAgICAqIEBwYXJhbSBvcHRpb25zICBjb25maWd1cmF0aW9uIG9wdGlvbnMsIHNhbWUgYXMgdGhlIGNvbnN0cnVjdG9yXG4gICAgICogQHJldHVybiBBbiBpbnN0YW5jZSBvZiBNaW5pU2VhcmNoIGRlc2VyaWFsaXplZCBmcm9tIHRoZSBnaXZlbiBKU09OLlxuICAgICAqL1xuICAgIE1pbmlTZWFyY2gubG9hZEpTT04gPSBmdW5jdGlvbiAoanNvbiwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTZWFyY2g6IGxvYWRKU09OIHNob3VsZCBiZSBnaXZlbiB0aGUgc2FtZSBvcHRpb25zIHVzZWQgd2hlbiBzZXJpYWxpemluZyB0aGUgaW5kZXgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWluaVNlYXJjaC5sb2FkSlMoSlNPTi5wYXJzZShqc29uKSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIG9mIGFuIG9wdGlvbi4gSXQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiBubyBvcHRpb25cbiAgICAgKiB3aXRoIHRoZSBnaXZlbiBuYW1lIGV4aXN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25OYW1lICBOYW1lIG9mIHRoZSBvcHRpb25cbiAgICAgKiBAcmV0dXJuIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBnaXZlbiBvcHRpb25cbiAgICAgKlxuICAgICAqICMjIyBVc2FnZTpcbiAgICAgKlxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBHZXQgZGVmYXVsdCB0b2tlbml6ZXJcbiAgICAgKiBNaW5pU2VhcmNoLmdldERlZmF1bHQoJ3Rva2VuaXplJylcbiAgICAgKlxuICAgICAqIC8vIEdldCBkZWZhdWx0IHRlcm0gcHJvY2Vzc29yXG4gICAgICogTWluaVNlYXJjaC5nZXREZWZhdWx0KCdwcm9jZXNzVGVybScpXG4gICAgICpcbiAgICAgKiAvLyBVbmtub3duIG9wdGlvbnMgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgICAqIE1pbmlTZWFyY2guZ2V0RGVmYXVsdCgnbm90RXhpc3RpbmcnKVxuICAgICAqIC8vID0+IHRocm93cyAnTWluaVNlYXJjaDogdW5rbm93biBvcHRpb24gXCJub3RFeGlzdGluZ1wiJ1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIE1pbmlTZWFyY2guZ2V0RGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25OYW1lKSB7XG4gICAgICAgIGlmIChkZWZhdWx0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb25OYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldE93blByb3BlcnR5KGRlZmF1bHRPcHRpb25zLCBvcHRpb25OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pbmlTZWFyY2g6IHVua25vd24gb3B0aW9uIFxcXCJcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJcXFwiXCIpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIE1pbmlTZWFyY2gubG9hZEpTID0gZnVuY3Rpb24gKGpzLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBlXzExLCBfYSwgZV8xMiwgX2I7XG4gICAgICAgIHZhciBpbmRleCA9IGpzLmluZGV4LCBkb2N1bWVudENvdW50ID0ganMuZG9jdW1lbnRDb3VudCwgbmV4dElkID0ganMubmV4dElkLCBkb2N1bWVudElkcyA9IGpzLmRvY3VtZW50SWRzLCBmaWVsZElkcyA9IGpzLmZpZWxkSWRzLCBmaWVsZExlbmd0aCA9IGpzLmZpZWxkTGVuZ3RoLCBhdmVyYWdlRmllbGRMZW5ndGggPSBqcy5hdmVyYWdlRmllbGRMZW5ndGgsIHN0b3JlZEZpZWxkcyA9IGpzLnN0b3JlZEZpZWxkcywgc2VyaWFsaXphdGlvblZlcnNpb24gPSBqcy5zZXJpYWxpemF0aW9uVmVyc2lvbjtcbiAgICAgICAgaWYgKHNlcmlhbGl6YXRpb25WZXJzaW9uICE9PSAxICYmIHNlcmlhbGl6YXRpb25WZXJzaW9uICE9PSAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTZWFyY2g6IGNhbm5vdCBkZXNlcmlhbGl6ZSBhbiBpbmRleCBjcmVhdGVkIHdpdGggYW4gaW5jb21wYXRpYmxlIHZlcnNpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWluaVNlYXJjaCA9IG5ldyBNaW5pU2VhcmNoKG9wdGlvbnMpO1xuICAgICAgICBtaW5pU2VhcmNoLl9kb2N1bWVudENvdW50ID0gZG9jdW1lbnRDb3VudDtcbiAgICAgICAgbWluaVNlYXJjaC5fbmV4dElkID0gbmV4dElkO1xuICAgICAgICBtaW5pU2VhcmNoLl9kb2N1bWVudElkcyA9IG9iamVjdFRvTnVtZXJpY01hcChkb2N1bWVudElkcyk7XG4gICAgICAgIG1pbmlTZWFyY2guX2ZpZWxkSWRzID0gZmllbGRJZHM7XG4gICAgICAgIG1pbmlTZWFyY2guX2ZpZWxkTGVuZ3RoID0gb2JqZWN0VG9OdW1lcmljTWFwKGZpZWxkTGVuZ3RoKTtcbiAgICAgICAgbWluaVNlYXJjaC5fYXZnRmllbGRMZW5ndGggPSBhdmVyYWdlRmllbGRMZW5ndGg7XG4gICAgICAgIG1pbmlTZWFyY2guX3N0b3JlZEZpZWxkcyA9IG9iamVjdFRvTnVtZXJpY01hcChzdG9yZWRGaWVsZHMpO1xuICAgICAgICBtaW5pU2VhcmNoLl9pbmRleCA9IG5ldyBTZWFyY2hhYmxlTWFwKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleF8xID0gX192YWx1ZXMoaW5kZXgpLCBpbmRleF8xXzEgPSBpbmRleF8xLm5leHQoKTsgIWluZGV4XzFfMS5kb25lOyBpbmRleF8xXzEgPSBpbmRleF8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBfYyA9IF9fcmVhZChpbmRleF8xXzEudmFsdWUsIDIpLCB0ZXJtID0gX2NbMF0sIGRhdGEgPSBfY1sxXTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfZCA9IChlXzEyID0gdm9pZCAwLCBfX3ZhbHVlcyhPYmplY3Qua2V5cyhkYXRhKSkpLCBfZSA9IF9kLm5leHQoKTsgIV9lLmRvbmU7IF9lID0gX2QubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRJZCA9IF9lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4RW50cnkgPSBkYXRhW2ZpZWxkSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmVyc2lvbiAxIHVzZWQgdG8gbmVzdCB0aGUgaW5kZXggZW50cnkgaW5zaWRlIGEgZmllbGQgY2FsbGVkIGRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXphdGlvblZlcnNpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleEVudHJ5ID0gaW5kZXhFbnRyeS5kcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNYXAuc2V0KHBhcnNlSW50KGZpZWxkSWQsIDEwKSwgb2JqZWN0VG9OdW1lcmljTWFwKGluZGV4RW50cnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8xMl8xKSB7IGVfMTIgPSB7IGVycm9yOiBlXzEyXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9lICYmICFfZS5kb25lICYmIChfYiA9IF9kLnJldHVybikpIF9iLmNhbGwoX2QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMikgdGhyb3cgZV8xMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtaW5pU2VhcmNoLl9pbmRleC5zZXQodGVybSwgZGF0YU1hcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMTFfMSkgeyBlXzExID0geyBlcnJvcjogZV8xMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleF8xXzEgJiYgIWluZGV4XzFfMS5kb25lICYmIChfYSA9IGluZGV4XzEucmV0dXJuKSkgX2EuY2FsbChpbmRleF8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMSkgdGhyb3cgZV8xMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW5pU2VhcmNoO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIE1pbmlTZWFyY2gucHJvdG90eXBlLmV4ZWN1dGVRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSwgc2VhcmNoT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2VhcmNoT3B0aW9ucyA9PT0gdm9pZCAwKSB7IHNlYXJjaE9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnNfMSA9IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBzZWFyY2hPcHRpb25zKSwgcXVlcnkpLCB7IHF1ZXJpZXM6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICAgIHZhciByZXN1bHRzXzEgPSBxdWVyeS5xdWVyaWVzLm1hcChmdW5jdGlvbiAoc3VicXVlcnkpIHsgcmV0dXJuIF90aGlzLmV4ZWN1dGVRdWVyeShzdWJxdWVyeSwgb3B0aW9uc18xKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21iaW5lUmVzdWx0cyhyZXN1bHRzXzEsIHF1ZXJ5LmNvbWJpbmVXaXRoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLl9vcHRpb25zLCB0b2tlbml6ZSA9IF9hLnRva2VuaXplLCBwcm9jZXNzVGVybSA9IF9hLnByb2Nlc3NUZXJtLCBnbG9iYWxTZWFyY2hPcHRpb25zID0gX2Euc2VhcmNoT3B0aW9ucztcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7IHRva2VuaXplOiB0b2tlbml6ZSwgcHJvY2Vzc1Rlcm06IHByb2Nlc3NUZXJtIH0sIGdsb2JhbFNlYXJjaE9wdGlvbnMpLCBzZWFyY2hPcHRpb25zKTtcbiAgICAgICAgdmFyIHNlYXJjaFRva2VuaXplID0gb3B0aW9ucy50b2tlbml6ZSwgc2VhcmNoUHJvY2Vzc1Rlcm0gPSBvcHRpb25zLnByb2Nlc3NUZXJtO1xuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2hUb2tlbml6ZShxdWVyeSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHRlcm0pIHsgcmV0dXJuIHNlYXJjaFByb2Nlc3NUZXJtKHRlcm0pOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodGVybSkgeyByZXR1cm4gISF0ZXJtOyB9KTtcbiAgICAgICAgdmFyIHF1ZXJpZXMgPSB0ZXJtcy5tYXAodGVybVRvUXVlcnlTcGVjKG9wdGlvbnMpKTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBxdWVyaWVzLm1hcChmdW5jdGlvbiAocXVlcnkpIHsgcmV0dXJuIF90aGlzLmV4ZWN1dGVRdWVyeVNwZWMocXVlcnksIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tYmluZVJlc3VsdHMocmVzdWx0cywgb3B0aW9ucy5jb21iaW5lV2l0aCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgTWluaVNlYXJjaC5wcm90b3R5cGUuZXhlY3V0ZVF1ZXJ5U3BlYyA9IGZ1bmN0aW9uIChxdWVyeSwgc2VhcmNoT3B0aW9ucykge1xuICAgICAgICB2YXIgZV8xMywgX2EsIGVfMTQsIF9iO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zLnNlYXJjaE9wdGlvbnMpLCBzZWFyY2hPcHRpb25zKTtcbiAgICAgICAgdmFyIGJvb3N0cyA9IChvcHRpb25zLmZpZWxkcyB8fCB0aGlzLl9vcHRpb25zLmZpZWxkcykucmVkdWNlKGZ1bmN0aW9uIChib29zdHMsIGZpZWxkKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBib29zdHMpLCAoX2EgPSB7fSwgX2FbZmllbGRdID0gZ2V0T3duUHJvcGVydHkoYm9vc3RzLCBmaWVsZCkgfHwgMSwgX2EpKSk7XG4gICAgICAgIH0sIG9wdGlvbnMuYm9vc3QgfHwge30pO1xuICAgICAgICB2YXIgYm9vc3REb2N1bWVudCA9IG9wdGlvbnMuYm9vc3REb2N1bWVudCwgd2VpZ2h0cyA9IG9wdGlvbnMud2VpZ2h0cywgbWF4RnV6enkgPSBvcHRpb25zLm1heEZ1enp5O1xuICAgICAgICB2YXIgX2MgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdFNlYXJjaE9wdGlvbnMud2VpZ2h0cyksIHdlaWdodHMpLCBmdXp6eVdlaWdodCA9IF9jLmZ1enp5LCBwcmVmaXhXZWlnaHQgPSBfYy5wcmVmaXg7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5faW5kZXguZ2V0KHF1ZXJ5LnRlcm0pO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IHRoaXMudGVybVJlc3VsdHMocXVlcnkudGVybSwgcXVlcnkudGVybSwgMSwgZGF0YSwgYm9vc3RzLCBib29zdERvY3VtZW50KTtcbiAgICAgICAgdmFyIHByZWZpeE1hdGNoZXM7XG4gICAgICAgIHZhciBmdXp6eU1hdGNoZXM7XG4gICAgICAgIGlmIChxdWVyeS5wcmVmaXgpIHtcbiAgICAgICAgICAgIHByZWZpeE1hdGNoZXMgPSB0aGlzLl9pbmRleC5hdFByZWZpeChxdWVyeS50ZXJtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkuZnV6enkpIHtcbiAgICAgICAgICAgIHZhciBmdXp6eSA9IChxdWVyeS5mdXp6eSA9PT0gdHJ1ZSkgPyAwLjIgOiBxdWVyeS5mdXp6eTtcbiAgICAgICAgICAgIHZhciBtYXhEaXN0YW5jZSA9IGZ1enp5IDwgMSA/IE1hdGgubWluKG1heEZ1enp5LCBNYXRoLnJvdW5kKHF1ZXJ5LnRlcm0ubGVuZ3RoICogZnV6enkpKSA6IGZ1enp5O1xuICAgICAgICAgICAgaWYgKG1heERpc3RhbmNlKVxuICAgICAgICAgICAgICAgIGZ1enp5TWF0Y2hlcyA9IHRoaXMuX2luZGV4LmZ1enp5R2V0KHF1ZXJ5LnRlcm0sIG1heERpc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZml4TWF0Y2hlcykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcmVmaXhNYXRjaGVzXzEgPSBfX3ZhbHVlcyhwcmVmaXhNYXRjaGVzKSwgcHJlZml4TWF0Y2hlc18xXzEgPSBwcmVmaXhNYXRjaGVzXzEubmV4dCgpOyAhcHJlZml4TWF0Y2hlc18xXzEuZG9uZTsgcHJlZml4TWF0Y2hlc18xXzEgPSBwcmVmaXhNYXRjaGVzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfZCA9IF9fcmVhZChwcmVmaXhNYXRjaGVzXzFfMS52YWx1ZSwgMiksIHRlcm0gPSBfZFswXSwgZGF0YV8xID0gX2RbMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IHRlcm0ubGVuZ3RoIC0gcXVlcnkudGVybS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IC8vIFNraXAgZXhhY3QgbWF0Y2guXG4gICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgdGVybSBmcm9tIGZ1enp5IHJlc3VsdHMgKGlmIHByZXNlbnQpIGlmIGl0IGlzIGFsc28gYVxuICAgICAgICAgICAgICAgICAgICAvLyBwcmVmaXggcmVzdWx0LiBUaGlzIGVudHJ5IHdpbGwgYWx3YXlzIGJlIHNjb3JlZCBhcyBhIHByZWZpeCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgIGZ1enp5TWF0Y2hlcyA9PT0gbnVsbCB8fCBmdXp6eU1hdGNoZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZ1enp5TWF0Y2hlcy5kZWxldGUodGVybSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlaWdodCBncmFkdWFsbHkgYXBwcm9hY2hlcyAwIGFzIGRpc3RhbmNlIGdvZXMgdG8gaW5maW5pdHksIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlaWdodCBmb3IgdGhlIGh5cG90aGV0aWNhbCBkaXN0YW5jZSAwIGJlaW5nIGVxdWFsIHRvIHByZWZpeFdlaWdodC5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJhdGUgb2YgY2hhbmdlIGlzIG11Y2ggbG93ZXIgdGhhbiB0aGF0IG9mIGZ1enp5IG1hdGNoZXMgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWNjb3VudCBmb3IgdGhlIGZhY3QgdGhhdCBwcmVmaXggbWF0Y2hlcyBzdGF5IG1vcmUgcmVsZXZhbnQgdGhhblxuICAgICAgICAgICAgICAgICAgICAvLyBmdXp6eSBtYXRjaGVzIGZvciBsb25nZXIgZGlzdGFuY2VzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gcHJlZml4V2VpZ2h0ICogdGVybS5sZW5ndGggLyAodGVybS5sZW5ndGggKyAwLjMgKiBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVybVJlc3VsdHMocXVlcnkudGVybSwgdGVybSwgd2VpZ2h0LCBkYXRhXzEsIGJvb3N0cywgYm9vc3REb2N1bWVudCwgcmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMTNfMSkgeyBlXzEzID0geyBlcnJvcjogZV8xM18xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmaXhNYXRjaGVzXzFfMSAmJiAhcHJlZml4TWF0Y2hlc18xXzEuZG9uZSAmJiAoX2EgPSBwcmVmaXhNYXRjaGVzXzEucmV0dXJuKSkgX2EuY2FsbChwcmVmaXhNYXRjaGVzXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMTMpIHRocm93IGVfMTMuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZnV6enlNYXRjaGVzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9lID0gX192YWx1ZXMoZnV6enlNYXRjaGVzLmtleXMoKSksIF9mID0gX2UubmV4dCgpOyAhX2YuZG9uZTsgX2YgPSBfZS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlcm0gPSBfZi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9nID0gX19yZWFkKGZ1enp5TWF0Y2hlcy5nZXQodGVybSksIDIpLCBkYXRhXzIgPSBfZ1swXSwgZGlzdGFuY2UgPSBfZ1sxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gLy8gU2tpcCBleGFjdCBtYXRjaC5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2VpZ2h0IGdyYWR1YWxseSBhcHByb2FjaGVzIDAgYXMgZGlzdGFuY2UgZ29lcyB0byBpbmZpbml0eSwgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2VpZ2h0IGZvciB0aGUgaHlwb3RoZXRpY2FsIGRpc3RhbmNlIDAgYmVpbmcgZXF1YWwgdG8gZnV6enlXZWlnaHQuXG4gICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSBmdXp6eVdlaWdodCAqIHRlcm0ubGVuZ3RoIC8gKHRlcm0ubGVuZ3RoICsgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlcm1SZXN1bHRzKHF1ZXJ5LnRlcm0sIHRlcm0sIHdlaWdodCwgZGF0YV8yLCBib29zdHMsIGJvb3N0RG9jdW1lbnQsIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzE0XzEpIHsgZV8xNCA9IHsgZXJyb3I6IGVfMTRfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2YgJiYgIV9mLmRvbmUgJiYgKF9iID0gX2UucmV0dXJuKSkgX2IuY2FsbChfZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xNCkgdGhyb3cgZV8xNC5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIE1pbmlTZWFyY2gucHJvdG90eXBlLmNvbWJpbmVSZXN1bHRzID0gZnVuY3Rpb24gKHJlc3VsdHMsIGNvbWJpbmVXaXRoKSB7XG4gICAgICAgIGlmIChjb21iaW5lV2l0aCA9PT0gdm9pZCAwKSB7IGNvbWJpbmVXaXRoID0gT1I7IH1cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVyYXRvciA9IGNvbWJpbmVXaXRoLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiByZXN1bHRzLnJlZHVjZShjb21iaW5hdG9yc1tvcGVyYXRvcl0pIHx8IG5ldyBNYXAoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsbG93cyBzZXJpYWxpemF0aW9uIG9mIHRoZSBpbmRleCB0byBKU09OLCB0byBwb3NzaWJseSBzdG9yZSBpdCBhbmQgbGF0ZXJcbiAgICAgKiBkZXNlcmlhbGl6ZSBpdCB3aXRoIGBNaW5pU2VhcmNoLmxvYWRKU09OYC5cbiAgICAgKlxuICAgICAqIE5vcm1hbGx5IG9uZSBkb2VzIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgbWV0aG9kLCBidXQgcmF0aGVyIGNhbGwgdGhlXG4gICAgICogc3RhbmRhcmQgSmF2YVNjcmlwdCBgSlNPTi5zdHJpbmdpZnkoKWAgcGFzc2luZyB0aGUgYE1pbmlTZWFyY2hgIGluc3RhbmNlLFxuICAgICAqIGFuZCBKYXZhU2NyaXB0IHdpbGwgaW50ZXJuYWxseSBjYWxsIHRoaXMgbWV0aG9kLiBVcG9uIGRlc2VyaWFsaXphdGlvbiwgb25lXG4gICAgICogbXVzdCBwYXNzIHRvIGBsb2FkSlNPTmAgdGhlIHNhbWUgb3B0aW9ucyB1c2VkIHRvIGNyZWF0ZSB0aGUgb3JpZ2luYWxcbiAgICAgKiBpbnN0YW5jZSB0aGF0IHdhcyBzZXJpYWxpemVkLlxuICAgICAqXG4gICAgICogIyMjIFVzYWdlOlxuICAgICAqXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIFNlcmlhbGl6ZSB0aGUgaW5kZXg6XG4gICAgICogbGV0IG1pbmlTZWFyY2ggPSBuZXcgTWluaVNlYXJjaCh7IGZpZWxkczogWyd0aXRsZScsICd0ZXh0J10gfSlcbiAgICAgKiBtaW5pU2VhcmNoLmFkZEFsbChkb2N1bWVudHMpXG4gICAgICogY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG1pbmlTZWFyY2gpXG4gICAgICpcbiAgICAgKiAvLyBMYXRlciwgdG8gZGVzZXJpYWxpemUgaXQ6XG4gICAgICogbWluaVNlYXJjaCA9IE1pbmlTZWFyY2gubG9hZEpTT04oanNvbiwgeyBmaWVsZHM6IFsndGl0bGUnLCAndGV4dCddIH0pXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcGxhaW4tb2JqZWN0IHNlcmlhbGl6ZWFibGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHNlYXJjaCBpbmRleC5cbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzE1LCBfYSwgZV8xNiwgX2I7XG4gICAgICAgIHZhciBpbmRleCA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyh0aGlzLl9pbmRleCksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2UgPSBfX3JlYWQoX2QudmFsdWUsIDIpLCB0ZXJtID0gX2VbMF0sIGZpZWxkSW5kZXggPSBfZVsxXTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGZpZWxkSW5kZXhfMSA9IChlXzE2ID0gdm9pZCAwLCBfX3ZhbHVlcyhmaWVsZEluZGV4KSksIGZpZWxkSW5kZXhfMV8xID0gZmllbGRJbmRleF8xLm5leHQoKTsgIWZpZWxkSW5kZXhfMV8xLmRvbmU7IGZpZWxkSW5kZXhfMV8xID0gZmllbGRJbmRleF8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9mID0gX19yZWFkKGZpZWxkSW5kZXhfMV8xLnZhbHVlLCAyKSwgZmllbGRJZCA9IF9mWzBdLCBmcmVxcyA9IF9mWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtmaWVsZElkXSA9IE9iamVjdC5mcm9tRW50cmllcyhmcmVxcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMTZfMSkgeyBlXzE2ID0geyBlcnJvcjogZV8xNl8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZEluZGV4XzFfMSAmJiAhZmllbGRJbmRleF8xXzEuZG9uZSAmJiAoX2IgPSBmaWVsZEluZGV4XzEucmV0dXJuKSkgX2IuY2FsbChmaWVsZEluZGV4XzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xNikgdGhyb3cgZV8xNi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRleC5wdXNoKFt0ZXJtLCBkYXRhXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMTVfMSkgeyBlXzE1ID0geyBlcnJvcjogZV8xNV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xNSkgdGhyb3cgZV8xNS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb2N1bWVudENvdW50OiB0aGlzLl9kb2N1bWVudENvdW50LFxuICAgICAgICAgICAgbmV4dElkOiB0aGlzLl9uZXh0SWQsXG4gICAgICAgICAgICBkb2N1bWVudElkczogT2JqZWN0LmZyb21FbnRyaWVzKHRoaXMuX2RvY3VtZW50SWRzKSxcbiAgICAgICAgICAgIGZpZWxkSWRzOiB0aGlzLl9maWVsZElkcyxcbiAgICAgICAgICAgIGZpZWxkTGVuZ3RoOiBPYmplY3QuZnJvbUVudHJpZXModGhpcy5fZmllbGRMZW5ndGgpLFxuICAgICAgICAgICAgYXZlcmFnZUZpZWxkTGVuZ3RoOiB0aGlzLl9hdmdGaWVsZExlbmd0aCxcbiAgICAgICAgICAgIHN0b3JlZEZpZWxkczogT2JqZWN0LmZyb21FbnRyaWVzKHRoaXMuX3N0b3JlZEZpZWxkcyksXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uVmVyc2lvbjogMlxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIE1pbmlTZWFyY2gucHJvdG90eXBlLnRlcm1SZXN1bHRzID0gZnVuY3Rpb24gKHNvdXJjZVRlcm0sIGRlcml2ZWRUZXJtLCB0ZXJtV2VpZ2h0LCBmaWVsZFRlcm1EYXRhLCBmaWVsZEJvb3N0cywgYm9vc3REb2N1bWVudEZuLCByZXN1bHRzKSB7XG4gICAgICAgIHZhciBlXzE3LCBfYSwgZV8xOCwgX2IsIF9jO1xuICAgICAgICBpZiAocmVzdWx0cyA9PT0gdm9pZCAwKSB7IHJlc3VsdHMgPSBuZXcgTWFwKCk7IH1cbiAgICAgICAgaWYgKGZpZWxkVGVybURhdGEgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2QgPSBfX3ZhbHVlcyhPYmplY3Qua2V5cyhmaWVsZEJvb3N0cykpLCBfZSA9IF9kLm5leHQoKTsgIV9lLmRvbmU7IF9lID0gX2QubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gX2UudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkQm9vc3QgPSBmaWVsZEJvb3N0c1tmaWVsZF07XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkSWQgPSB0aGlzLl9maWVsZElkc1tmaWVsZF07XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVGVybUZyZXFzID0gZmllbGRUZXJtRGF0YS5nZXQoZmllbGRJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVGVybUZyZXFzID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGluZ0ZpZWxkcyA9IGZpZWxkVGVybUZyZXFzLnNpemU7XG4gICAgICAgICAgICAgICAgdmFyIGF2Z0ZpZWxkTGVuZ3RoID0gdGhpcy5fYXZnRmllbGRMZW5ndGhbZmllbGRJZF07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2YgPSAoZV8xOCA9IHZvaWQgMCwgX192YWx1ZXMoZmllbGRUZXJtRnJlcXMua2V5cygpKSksIF9nID0gX2YubmV4dCgpOyAhX2cuZG9uZTsgX2cgPSBfZi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb2NJZCA9IF9nLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvY0Jvb3N0ID0gYm9vc3REb2N1bWVudEZuID8gYm9vc3REb2N1bWVudEZuKHRoaXMuX2RvY3VtZW50SWRzLmdldChkb2NJZCksIGRlcml2ZWRUZXJtKSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY0Jvb3N0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlcm1GcmVxID0gZmllbGRUZXJtRnJlcXMuZ2V0KGRvY0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZExlbmd0aCA9IHRoaXMuX2ZpZWxkTGVuZ3RoLmdldChkb2NJZClbZmllbGRJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBUaGUgdG90YWwgbnVtYmVyIG9mIGZpZWxkcyBpcyBzZXQgdG8gdGhlIG51bWJlciBvZiBkb2N1bWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGB0aGlzLl9kb2N1bWVudENvdW50YC4gSXQgY291bGQgYWxzbyBtYWtlIHNlbnNlIHRvIHVzZSB0aGUgbnVtYmVyIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudHMgd2hlcmUgdGhlIGN1cnJlbnQgZmllbGQgaXMgbm9uLWJsYW5rIGFzIGEgbm9ybWFsaXNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFjdG9yLiBUaGlzIHdpbGwgbWFrZSBhIGRpZmZlcmVuY2UgaW4gc2NvcmluZyBpZiB0aGUgZmllbGQgaXMgcmFyZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmVzZW50LiBUaGlzIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkLCBhbmQgbWF5IHJlcXVpcmUgZnVydGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5hbHlzaXMgdG8gc2VlIGlmIGl0IGlzIGEgdmFsaWQgdXNlIGNhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmF3U2NvcmUgPSBjYWxjQk0yNVNjb3JlKHRlcm1GcmVxLCBtYXRjaGluZ0ZpZWxkcywgdGhpcy5fZG9jdW1lbnRDb3VudCwgZmllbGRMZW5ndGgsIGF2Z0ZpZWxkTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHRlZFNjb3JlID0gdGVybVdlaWdodCAqIGZpZWxkQm9vc3QgKiBkb2NCb29zdCAqIHJhd1Njb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMuZ2V0KGRvY0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2NvcmUgKz0gd2VpZ2h0ZWRTY29yZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25VbmlxdWVUZXJtKHJlc3VsdC50ZXJtcywgc291cmNlVGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZ2V0T3duUHJvcGVydHkocmVzdWx0Lm1hdGNoLCBkZXJpdmVkVGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLnB1c2goZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1hdGNoW2Rlcml2ZWRUZXJtXSA9IFtmaWVsZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQoZG9jSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHdlaWdodGVkU2NvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zOiBbc291cmNlVGVybV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiAoX2MgPSB7fSwgX2NbZGVyaXZlZFRlcm1dID0gW2ZpZWxkXSwgX2MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMThfMSkgeyBlXzE4ID0geyBlcnJvcjogZV8xOF8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZyAmJiAhX2cuZG9uZSAmJiAoX2IgPSBfZi5yZXR1cm4pKSBfYi5jYWxsKF9mKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMTgpIHRocm93IGVfMTguZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMTdfMSkgeyBlXzE3ID0geyBlcnJvcjogZV8xN18xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfZSAmJiAhX2UuZG9uZSAmJiAoX2EgPSBfZC5yZXR1cm4pKSBfYS5jYWxsKF9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xNykgdGhyb3cgZV8xNy5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIE1pbmlTZWFyY2gucHJvdG90eXBlLmFkZFRlcm0gPSBmdW5jdGlvbiAoZmllbGRJZCwgZG9jdW1lbnRJZCwgdGVybSkge1xuICAgICAgICB2YXIgaW5kZXhEYXRhID0gdGhpcy5faW5kZXguZmV0Y2godGVybSwgY3JlYXRlTWFwKTtcbiAgICAgICAgdmFyIGZpZWxkSW5kZXggPSBpbmRleERhdGEuZ2V0KGZpZWxkSWQpO1xuICAgICAgICBpZiAoZmllbGRJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgICBmaWVsZEluZGV4ID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZmllbGRJbmRleC5zZXQoZG9jdW1lbnRJZCwgMSk7XG4gICAgICAgICAgICBpbmRleERhdGEuc2V0KGZpZWxkSWQsIGZpZWxkSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRvY3MgPSBmaWVsZEluZGV4LmdldChkb2N1bWVudElkKTtcbiAgICAgICAgICAgIGZpZWxkSW5kZXguc2V0KGRvY3VtZW50SWQsIChkb2NzIHx8IDApICsgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5yZW1vdmVUZXJtID0gZnVuY3Rpb24gKGZpZWxkSWQsIGRvY3VtZW50SWQsIHRlcm0pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbmRleC5oYXModGVybSkpIHtcbiAgICAgICAgICAgIHRoaXMud2FybkRvY3VtZW50Q2hhbmdlZChkb2N1bWVudElkLCBmaWVsZElkLCB0ZXJtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXhEYXRhID0gdGhpcy5faW5kZXguZmV0Y2godGVybSwgY3JlYXRlTWFwKTtcbiAgICAgICAgdmFyIGZpZWxkSW5kZXggPSBpbmRleERhdGEuZ2V0KGZpZWxkSWQpO1xuICAgICAgICBpZiAoZmllbGRJbmRleCA9PSBudWxsIHx8IGZpZWxkSW5kZXguZ2V0KGRvY3VtZW50SWQpID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMud2FybkRvY3VtZW50Q2hhbmdlZChkb2N1bWVudElkLCBmaWVsZElkLCB0ZXJtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmaWVsZEluZGV4LmdldChkb2N1bWVudElkKSA8PSAxKSB7XG4gICAgICAgICAgICBpZiAoZmllbGRJbmRleC5zaXplIDw9IDEpIHtcbiAgICAgICAgICAgICAgICBpbmRleERhdGEuZGVsZXRlKGZpZWxkSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmllbGRJbmRleC5kZWxldGUoZG9jdW1lbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmaWVsZEluZGV4LnNldChkb2N1bWVudElkLCBmaWVsZEluZGV4LmdldChkb2N1bWVudElkKSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pbmRleC5nZXQodGVybSkuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5faW5kZXguZGVsZXRlKHRlcm0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgTWluaVNlYXJjaC5wcm90b3R5cGUud2FybkRvY3VtZW50Q2hhbmdlZCA9IGZ1bmN0aW9uIChzaG9ydERvY3VtZW50SWQsIGZpZWxkSWQsIHRlcm0pIHtcbiAgICAgICAgdmFyIGVfMTksIF9hO1xuICAgICAgICBpZiAoY29uc29sZSA9PSBudWxsIHx8IGNvbnNvbGUud2FybiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmtleXModGhpcy5fZmllbGRJZHMpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZmllbGRJZHNbZmllbGROYW1lXSA9PT0gZmllbGRJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNaW5pU2VhcmNoOiBkb2N1bWVudCB3aXRoIElEIFwiLmNvbmNhdCh0aGlzLl9kb2N1bWVudElkcy5nZXQoc2hvcnREb2N1bWVudElkKSwgXCIgaGFzIGNoYW5nZWQgYmVmb3JlIHJlbW92YWw6IHRlcm0gXFxcIlwiKS5jb25jYXQodGVybSwgXCJcXFwiIHdhcyBub3QgcHJlc2VudCBpbiBmaWVsZCBcXFwiXCIpLmNvbmNhdChmaWVsZE5hbWUsIFwiXFxcIi4gUmVtb3ZpbmcgYSBkb2N1bWVudCBhZnRlciBpdCBoYXMgY2hhbmdlZCBjYW4gY29ycnVwdCB0aGUgaW5kZXghXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xOV8xKSB7IGVfMTkgPSB7IGVycm9yOiBlXzE5XzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzE5KSB0aHJvdyBlXzE5LmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5hZGREb2N1bWVudElkID0gZnVuY3Rpb24gKGRvY3VtZW50SWQpIHtcbiAgICAgICAgdmFyIHNob3J0RG9jdW1lbnRJZCA9IHRoaXMuX25leHRJZDtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRJZHMuc2V0KHNob3J0RG9jdW1lbnRJZCwgZG9jdW1lbnRJZCk7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5fbmV4dElkICs9IDE7XG4gICAgICAgIHJldHVybiBzaG9ydERvY3VtZW50SWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgTWluaVNlYXJjaC5wcm90b3R5cGUuYWRkRmllbGRzID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fZmllbGRJZHNbZmllbGRzW2ldXSA9IGk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBNaW5pU2VhcmNoLnByb3RvdHlwZS5hZGRGaWVsZExlbmd0aCA9IGZ1bmN0aW9uIChkb2N1bWVudElkLCBmaWVsZElkLCBjb3VudCwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBmaWVsZExlbmd0aHMgPSB0aGlzLl9maWVsZExlbmd0aC5nZXQoZG9jdW1lbnRJZCk7XG4gICAgICAgIGlmIChmaWVsZExlbmd0aHMgPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkTGVuZ3RoLnNldChkb2N1bWVudElkLCBmaWVsZExlbmd0aHMgPSBbXSk7XG4gICAgICAgIGZpZWxkTGVuZ3Roc1tmaWVsZElkXSA9IGxlbmd0aDtcbiAgICAgICAgdmFyIGF2ZXJhZ2VGaWVsZExlbmd0aCA9IHRoaXMuX2F2Z0ZpZWxkTGVuZ3RoW2ZpZWxkSWRdIHx8IDA7XG4gICAgICAgIHZhciB0b3RhbEZpZWxkTGVuZ3RoID0gKGF2ZXJhZ2VGaWVsZExlbmd0aCAqIGNvdW50KSArIGxlbmd0aDtcbiAgICAgICAgdGhpcy5fYXZnRmllbGRMZW5ndGhbZmllbGRJZF0gPSB0b3RhbEZpZWxkTGVuZ3RoIC8gKGNvdW50ICsgMSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgTWluaVNlYXJjaC5wcm90b3R5cGUucmVtb3ZlRmllbGRMZW5ndGggPSBmdW5jdGlvbiAoZG9jdW1lbnRJZCwgZmllbGRJZCwgY291bnQsIGxlbmd0aCkge1xuICAgICAgICB2YXIgdG90YWxGaWVsZExlbmd0aCA9ICh0aGlzLl9hdmdGaWVsZExlbmd0aFtmaWVsZElkXSAqIGNvdW50KSAtIGxlbmd0aDtcbiAgICAgICAgdGhpcy5fYXZnRmllbGRMZW5ndGhbZmllbGRJZF0gPSB0b3RhbEZpZWxkTGVuZ3RoIC8gKGNvdW50IC0gMSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgTWluaVNlYXJjaC5wcm90b3R5cGUuc2F2ZVN0b3JlZEZpZWxkcyA9IGZ1bmN0aW9uIChkb2N1bWVudElkLCBkb2MpIHtcbiAgICAgICAgdmFyIGVfMjAsIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLl9vcHRpb25zLCBzdG9yZUZpZWxkcyA9IF9iLnN0b3JlRmllbGRzLCBleHRyYWN0RmllbGQgPSBfYi5leHRyYWN0RmllbGQ7XG4gICAgICAgIGlmIChzdG9yZUZpZWxkcyA9PSBudWxsIHx8IHN0b3JlRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkb2N1bWVudEZpZWxkcyA9IHRoaXMuX3N0b3JlZEZpZWxkcy5nZXQoZG9jdW1lbnRJZCk7XG4gICAgICAgIGlmIChkb2N1bWVudEZpZWxkcyA9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc3RvcmVkRmllbGRzLnNldChkb2N1bWVudElkLCBkb2N1bWVudEZpZWxkcyA9IHt9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHN0b3JlRmllbGRzXzEgPSBfX3ZhbHVlcyhzdG9yZUZpZWxkcyksIHN0b3JlRmllbGRzXzFfMSA9IHN0b3JlRmllbGRzXzEubmV4dCgpOyAhc3RvcmVGaWVsZHNfMV8xLmRvbmU7IHN0b3JlRmllbGRzXzFfMSA9IHN0b3JlRmllbGRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IHN0b3JlRmllbGRzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGV4dHJhY3RGaWVsZChkb2MsIGZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGaWVsZHNbZmllbGROYW1lXSA9IGZpZWxkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMjBfMSkgeyBlXzIwID0geyBlcnJvcjogZV8yMF8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZUZpZWxkc18xXzEgJiYgIXN0b3JlRmllbGRzXzFfMS5kb25lICYmIChfYSA9IHN0b3JlRmllbGRzXzEucmV0dXJuKSkgX2EuY2FsbChzdG9yZUZpZWxkc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yMCkgdGhyb3cgZV8yMC5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWluaVNlYXJjaDtcbn0oKSk7XG52YXIgZ2V0T3duUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkgPyBvYmplY3RbcHJvcGVydHldIDogdW5kZWZpbmVkO1xufTtcbnZhciBjb21iaW5hdG9ycyA9IChfYSA9IHt9LFxuICAgIF9hW09SXSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBlXzIxLCBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoYi5rZXlzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvY0lkID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nID0gYS5nZXQoZG9jSWQpO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGEuc2V0KGRvY0lkLCBiLmdldChkb2NJZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9kID0gYi5nZXQoZG9jSWQpLCBzY29yZSA9IF9kLnNjb3JlLCB0ZXJtcyA9IF9kLnRlcm1zLCBtYXRjaCA9IF9kLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5zY29yZSA9IGV4aXN0aW5nLnNjb3JlICsgc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLm1hdGNoID0gT2JqZWN0LmFzc2lnbihleGlzdGluZy5tYXRjaCwgbWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25VbmlxdWVUZXJtcyhleGlzdGluZy50ZXJtcywgdGVybXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yMV8xKSB7IGVfMjEgPSB7IGVycm9yOiBlXzIxXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIxKSB0aHJvdyBlXzIxLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfSxcbiAgICBfYVtBTkRdID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGVfMjIsIF9hO1xuICAgICAgICB2YXIgY29tYmluZWQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGIua2V5cygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBkb2NJZCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZyA9IGEuZ2V0KGRvY0lkKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIF9kID0gYi5nZXQoZG9jSWQpLCBzY29yZSA9IF9kLnNjb3JlLCB0ZXJtcyA9IF9kLnRlcm1zLCBtYXRjaCA9IF9kLm1hdGNoO1xuICAgICAgICAgICAgICAgIGFzc2lnblVuaXF1ZVRlcm1zKGV4aXN0aW5nLnRlcm1zLCB0ZXJtcyk7XG4gICAgICAgICAgICAgICAgY29tYmluZWQuc2V0KGRvY0lkLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlOiBleGlzdGluZy5zY29yZSArIHNjb3JlLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtczogZXhpc3RpbmcudGVybXMsXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBPYmplY3QuYXNzaWduKGV4aXN0aW5nLm1hdGNoLCBtYXRjaClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yMl8xKSB7IGVfMjIgPSB7IGVycm9yOiBlXzIyXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIyKSB0aHJvdyBlXzIyLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgIH0sXG4gICAgX2FbQU5EX05PVF0gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgZV8yMywgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGIua2V5cygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBkb2NJZCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGEuZGVsZXRlKGRvY0lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yM18xKSB7IGVfMjMgPSB7IGVycm9yOiBlXzIzXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIzKSB0aHJvdyBlXzIzLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfSxcbiAgICBfYSk7XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Pa2FwaV9CTTI1XG4vLyBodHRwczovL29wZW5zb3VyY2Vjb25uZWN0aW9ucy5jb20vYmxvZy8yMDE1LzEwLzE2L2JtMjUtdGhlLW5leHQtZ2VuZXJhdGlvbi1vZi1sdWNlbmUtcmVsZXZhdGlvbi9cbnZhciBrID0gMS4yOyAvLyBUZXJtIGZyZXF1ZW5jeSBzYXR1cmF0aW9uIHBvaW50LiBSZWNvbW1lbmRlZCB2YWx1ZXMgYXJlIGJldHdlZW4gMS4yIGFuZCAyLlxudmFyIGIgPSAwLjc7IC8vIExlbmd0aCBub3JtYWxpemF0aW9uIGltcGFjdC4gUmVjb21tZW5kZWQgdmFsdWVzIGFyZSBhcm91bmQgMC43NS5cbnZhciBkID0gMC41OyAvLyBCTTI1KyBmcmVxdWVuY3kgbm9ybWFsaXphdGlvbiBsb3dlciBib3VuZC4gUmVjb21tZW5kZWQgdmFsdWVzIGFyZSBiZXR3ZWVuIDAuNSBhbmQgMS5cbnZhciBjYWxjQk0yNVNjb3JlID0gZnVuY3Rpb24gKHRlcm1GcmVxLCBtYXRjaGluZ0NvdW50LCB0b3RhbENvdW50LCBmaWVsZExlbmd0aCwgYXZnRmllbGRMZW5ndGgpIHtcbiAgICB2YXIgaW52RG9jRnJlcSA9IE1hdGgubG9nKDEgKyAodG90YWxDb3VudCAtIG1hdGNoaW5nQ291bnQgKyAwLjUpIC8gKG1hdGNoaW5nQ291bnQgKyAwLjUpKTtcbiAgICByZXR1cm4gaW52RG9jRnJlcSAqIChkICsgdGVybUZyZXEgKiAoayArIDEpIC8gKHRlcm1GcmVxICsgayAqICgxIC0gYiArIGIgKiBmaWVsZExlbmd0aCAvIGF2Z0ZpZWxkTGVuZ3RoKSkpO1xufTtcbnZhciB0ZXJtVG9RdWVyeVNwZWMgPSBmdW5jdGlvbiAob3B0aW9ucykgeyByZXR1cm4gZnVuY3Rpb24gKHRlcm0sIGksIHRlcm1zKSB7XG4gICAgdmFyIGZ1enp5ID0gKHR5cGVvZiBvcHRpb25zLmZ1enp5ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICA/IG9wdGlvbnMuZnV6enkodGVybSwgaSwgdGVybXMpXG4gICAgICAgIDogKG9wdGlvbnMuZnV6enkgfHwgZmFsc2UpO1xuICAgIHZhciBwcmVmaXggPSAodHlwZW9mIG9wdGlvbnMucHJlZml4ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICA/IG9wdGlvbnMucHJlZml4KHRlcm0sIGksIHRlcm1zKVxuICAgICAgICA6IChvcHRpb25zLnByZWZpeCA9PT0gdHJ1ZSk7XG4gICAgcmV0dXJuIHsgdGVybTogdGVybSwgZnV6enk6IGZ1enp5LCBwcmVmaXg6IHByZWZpeCB9O1xufTsgfTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBpZEZpZWxkOiAnaWQnLFxuICAgIGV4dHJhY3RGaWVsZDogZnVuY3Rpb24gKGRvY3VtZW50LCBmaWVsZE5hbWUpIHsgcmV0dXJuIGRvY3VtZW50W2ZpZWxkTmFtZV07IH0sXG4gICAgdG9rZW5pemU6IGZ1bmN0aW9uICh0ZXh0LCBmaWVsZE5hbWUpIHsgcmV0dXJuIHRleHQuc3BsaXQoU1BBQ0VfT1JfUFVOQ1RVQVRJT04pOyB9LFxuICAgIHByb2Nlc3NUZXJtOiBmdW5jdGlvbiAodGVybSwgZmllbGROYW1lKSB7IHJldHVybiB0ZXJtLnRvTG93ZXJDYXNlKCk7IH0sXG4gICAgZmllbGRzOiB1bmRlZmluZWQsXG4gICAgc2VhcmNoT3B0aW9uczogdW5kZWZpbmVkLFxuICAgIHN0b3JlRmllbGRzOiBbXVxufTtcbnZhciBkZWZhdWx0U2VhcmNoT3B0aW9ucyA9IHtcbiAgICBjb21iaW5lV2l0aDogT1IsXG4gICAgcHJlZml4OiBmYWxzZSxcbiAgICBmdXp6eTogZmFsc2UsXG4gICAgbWF4RnV6enk6IDYsXG4gICAgYm9vc3Q6IHt9LFxuICAgIHdlaWdodHM6IHsgZnV6enk6IDAuNDUsIHByZWZpeDogMC4zNzUgfVxufTtcbnZhciBkZWZhdWx0QXV0b1N1Z2dlc3RPcHRpb25zID0ge1xuICAgIHByZWZpeDogZnVuY3Rpb24gKHRlcm0sIGksIHRlcm1zKSB7XG4gICAgICAgIHJldHVybiBpID09PSB0ZXJtcy5sZW5ndGggLSAxO1xuICAgIH1cbn07XG52YXIgYXNzaWduVW5pcXVlVGVybSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRlcm0pIHtcbiAgICAvLyBBdm9pZCBhZGRpbmcgZHVwbGljYXRlIHRlcm1zLlxuICAgIGlmICghdGFyZ2V0LmluY2x1ZGVzKHRlcm0pKVxuICAgICAgICB0YXJnZXQucHVzaCh0ZXJtKTtcbn07XG52YXIgYXNzaWduVW5pcXVlVGVybXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIgZV8yNCwgX2E7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgc291cmNlXzEgPSBfX3ZhbHVlcyhzb3VyY2UpLCBzb3VyY2VfMV8xID0gc291cmNlXzEubmV4dCgpOyAhc291cmNlXzFfMS5kb25lOyBzb3VyY2VfMV8xID0gc291cmNlXzEubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgdGVybSA9IHNvdXJjZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAvLyBBdm9pZCBhZGRpbmcgZHVwbGljYXRlIHRlcm1zLlxuICAgICAgICAgICAgaWYgKCF0YXJnZXQuaW5jbHVkZXModGVybSkpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2godGVybSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVfMjRfMSkgeyBlXzI0ID0geyBlcnJvcjogZV8yNF8xIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChzb3VyY2VfMV8xICYmICFzb3VyY2VfMV8xLmRvbmUgJiYgKF9hID0gc291cmNlXzEucmV0dXJuKSkgX2EuY2FsbChzb3VyY2VfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzI0KSB0aHJvdyBlXzI0LmVycm9yOyB9XG4gICAgfVxufTtcbnZhciBieVNjb3JlID0gZnVuY3Rpb24gKF9hLCBfYikge1xuICAgIHZhciBhID0gX2Euc2NvcmU7XG4gICAgdmFyIGIgPSBfYi5zY29yZTtcbiAgICByZXR1cm4gYiAtIGE7XG59O1xudmFyIGNyZWF0ZU1hcCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXAoKTsgfTtcbnZhciBvYmplY3RUb051bWVyaWNNYXAgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGVfMjUsIF9hO1xuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhPYmplY3Qua2V5cyhvYmplY3QpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgbWFwLnNldChwYXJzZUludChrZXksIDEwKSwgb2JqZWN0W2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzI1XzEpIHsgZV8yNSA9IHsgZXJyb3I6IGVfMjVfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzI1KSB0aHJvdyBlXzI1LmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59O1xuLy8gVGhpcyByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hlcyBhbnkgVW5pY29kZSBzcGFjZSBvciBwdW5jdHVhdGlvbiBjaGFyYWN0ZXJcbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3VuaWNvZGUub3JnL2NsZHIvdXRpbGl0eS9saXN0LXVuaWNvZGVzZXQuanNwP2E9JTVDcCU3QlolN0QlNUNwJTdCUCU3RCZhYmI9b24mYz1vbiZlc2M9b25cbnZhciBTUEFDRV9PUl9QVU5DVFVBVElPTiA9IC9bXFxuXFxyIC0jJS0qLC0vOjs/QFstXFxdX3t9XFx1MDBBMFxcdTAwQTFcXHUwMEE3XFx1MDBBQlxcdTAwQjZcXHUwMEI3XFx1MDBCQlxcdTAwQkZcXHUwMzdFXFx1MDM4N1xcdTA1NUEtXFx1MDU1RlxcdTA1ODlcXHUwNThBXFx1MDVCRVxcdTA1QzBcXHUwNUMzXFx1MDVDNlxcdTA1RjNcXHUwNUY0XFx1MDYwOVxcdTA2MEFcXHUwNjBDXFx1MDYwRFxcdTA2MUJcXHUwNjFFXFx1MDYxRlxcdTA2NkEtXFx1MDY2RFxcdTA2RDRcXHUwNzAwLVxcdTA3MERcXHUwN0Y3LVxcdTA3RjlcXHUwODMwLVxcdTA4M0VcXHUwODVFXFx1MDk2NFxcdTA5NjVcXHUwOTcwXFx1MDlGRFxcdTBBNzZcXHUwQUYwXFx1MEM3N1xcdTBDODRcXHUwREY0XFx1MEU0RlxcdTBFNUFcXHUwRTVCXFx1MEYwNC1cXHUwRjEyXFx1MEYxNFxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYwLVxcdTEzNjhcXHUxNDAwXFx1MTY2RVxcdTE2ODBcXHUxNjlCXFx1MTY5Q1xcdTE2RUItXFx1MTZFRFxcdTE3MzVcXHUxNzM2XFx1MTdENC1cXHUxN0Q2XFx1MTdEOC1cXHUxN0RBXFx1MTgwMC1cXHUxODBBXFx1MTk0NFxcdTE5NDVcXHUxQTFFXFx1MUExRlxcdTFBQTAtXFx1MUFBNlxcdTFBQTgtXFx1MUFBRFxcdTFCNUEtXFx1MUI2MFxcdTFCRkMtXFx1MUJGRlxcdTFDM0ItXFx1MUMzRlxcdTFDN0VcXHUxQzdGXFx1MUNDMC1cXHUxQ0M3XFx1MUNEM1xcdTIwMDAtXFx1MjAwQVxcdTIwMTAtXFx1MjAyOVxcdTIwMkYtXFx1MjA0M1xcdTIwNDUtXFx1MjA1MVxcdTIwNTMtXFx1MjA1RlxcdTIwN0RcXHUyMDdFXFx1MjA4RFxcdTIwOEVcXHUyMzA4LVxcdTIzMEJcXHUyMzI5XFx1MjMyQVxcdTI3NjgtXFx1Mjc3NVxcdTI3QzVcXHUyN0M2XFx1MjdFNi1cXHUyN0VGXFx1Mjk4My1cXHUyOTk4XFx1MjlEOC1cXHUyOURCXFx1MjlGQ1xcdTI5RkRcXHUyQ0Y5LVxcdTJDRkNcXHUyQ0ZFXFx1MkNGRlxcdTJENzBcXHUyRTAwLVxcdTJFMkVcXHUyRTMwLVxcdTJFNEZcXHUzMDAwLVxcdTMwMDNcXHUzMDA4LVxcdTMwMTFcXHUzMDE0LVxcdTMwMUZcXHUzMDMwXFx1MzAzRFxcdTMwQTBcXHUzMEZCXFx1QTRGRVxcdUE0RkZcXHVBNjBELVxcdUE2MEZcXHVBNjczXFx1QTY3RVxcdUE2RjItXFx1QTZGN1xcdUE4NzQtXFx1QTg3N1xcdUE4Q0VcXHVBOENGXFx1QThGOC1cXHVBOEZBXFx1QThGQ1xcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XSsvdTtcblxuZXhwb3J0IHsgTWluaVNlYXJjaCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIklucHV0IiwidXNlU3R5bGVzMiIsIlNwaW5uZXIiLCJCdXR0b24iLCJjb25maWciLCJBdXRvU2l6ZXIiLCJjc3MiLCJQYWdlIiwidXNlQXN5bmMiLCJnZXRHcmFmYW5hU2VhcmNoZXIiLCJUYWJsZSIsIlRhZ0ZpbHRlciIsImdldFRlcm1Db3VudHMiLCJ1c2VTZWFyY2hRdWVyeSIsIm5vZGUiLCJpZCIsInRleHQiLCJpY29uIiwidXJsIiwiU2VhcmNoUGFnZSIsInN0eWxlcyIsImdldFN0eWxlcyIsInF1ZXJ5Iiwib25RdWVyeUNoYW5nZSIsIm9uVGFnRmlsdGVyQ2hhbmdlIiwib25EYXRhc291cmNlQ2hhbmdlIiwicmVzdWx0cyIsInNlYXJjaFF1ZXJ5IiwidGFnIiwidGFncyIsImRhdGFzb3VyY2UiLCJmaWx0ZXJzIiwic2VhcmNoIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZmVhdHVyZVRvZ2dsZXMiLCJwYW5lbFRpdGxlU2VhcmNoIiwidW5zdXBwb3J0ZWQiLCJnZXRUYWdPcHRpb25zIiwidmFsdWUiLCJib2R5IiwiZmllbGRzIiwiZmluZCIsImYiLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvblNlYXJjaFF1ZXJ5Q2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Iiwib25UYWdDaGFuZ2UiLCJtYWluIiwibG9hZGluZyIsImNsZWFyQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsInRoZW1lIiwidXNlTWVtbyIsInVzZVRhYmxlIiwidXNlQmxvY2tMYXlvdXQiLCJEYXRhRnJhbWVUeXBlIiwiRGF0YUZyYW1lVmlldyIsIkZpeGVkU2l6ZUxpc3QiLCJUYWJsZUNlbGwiLCJnZXRUYWJsZVN0eWxlcyIsImdlbmVyYXRlQ29sdW1ucyIsImRhdGEiLCJ0YWJsZVN0eWxlcyIsIm1lbW9pemVkRGF0YSIsIkFycmF5IiwiZmlsbCIsImFjY2VzcyIsIm1lbW9pemVkQ29sdW1ucyIsImlzRGFzaGJvYXJkTGlzdCIsIm1ldGEiLCJ0eXBlIiwiRGlyZWN0b3J5TGlzdGluZyIsIm9wdGlvbnMiLCJjb2x1bW5zIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJSZW5kZXJSb3ciLCJ1c2VDYWxsYmFjayIsImluZGV4Iiwicm93SW5kZXgiLCJzdHlsZSIsInJvdyIsInZhbHVlcyIsImdldCIsImdldFJvd1Byb3BzIiwicm93Q29udGFpbmVyIiwiY2VsbHMiLCJtYXAiLCJjZWxsIiwiY29sdW1uIiwiY2VsbFdyYXBwZXIiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJrZXkiLCJoZWFkZXJHcm91cFByb3BzIiwiaGVhZGVyUm93IiwiaGVhZGVycyIsImdldEhlYWRlclByb3BzIiwiaGVhZGVyUHJvcHMiLCJoZWFkZXJDZWxsIiwicmVuZGVyIiwicm93SGVpZ2h0IiwidGFibGVCb2R5Iiwibm9EYXRhIiwicm93SG92ZXJCZyIsImNvbG9ycyIsImVtcGhhc2l6ZSIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwidGFibGUiLCJjZWxsSWNvbiIsInNlY29uZGFyeSIsInR5cGVJY29uIiwidjEiLCJzcGFjaW5nIiwieHhzIiwidHlwZVRleHQiLCJsb2NhdGlvbkl0ZW0iLCJjaGVja2JveEhlYWRlciIsImNoZWNrYm94IiwiaW5mb1dyYXAiLCJ0YWdMaXN0IiwiZ2V0RGF0YVNvdXJjZVNydiIsIlNWRyIsIkNoZWNrYm94IiwiSWNvbiIsIlRhZ0xpc3QiLCJEZWZhdWx0Q2VsbCIsImF2YWlsYWJsZVdpZHRoIiwidXJsRmllbGQiLCJwdXNoIiwiSGVhZGVyIiwiQ2VsbCIsImFjY2Vzc29yIiwiZmllbGQiLCJNYXRoIiwibWF4IiwiaSIsIlRZUEVfQ09MVU1OX1dJRFRIIiwiREFUQVNPVVJDRV9DT0xVTU5fV0lEVEgiLCJJTkZPX0NPTFVNTl9XSURUSCIsIkxPQ0FUSU9OX0NPTFVNTl9XSURUSCIsIm1ha2VUeXBlQ29sdW1uIiwia2luZCIsImhhc0ZpZWxkVmFsdWUiLCJtYWtlRGF0YVNvdXJjZUNvbHVtbiIsInBhbmVsQ291bnQiLCJsb2NhdGlvbiIsInYiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImdldEljb25Gb3JLaW5kIiwibWFrZVRhZ3NDb2x1bW4iLCJpY29uQ2xhc3MiLCJkc2xpc3QiLCJzcnYiLCJzZXR0aW5ncyIsImdldEluc3RhbmNlU2V0dGluZ3MiLCJpbmZvIiwibG9nb3MiLCJzbWFsbCIsInVpZCIsInN0b3BQcm9wYWdhdGlvbiIsImtpbmRGaWVsZCIsInR5cGVGaWVsZCIsInR5cGVUZXh0Q2xhc3MiLCJ0eHQiLCJwYW5lbHMiLCJlbmRzV2l0aCIsInRhZ0xpc3RDbGFzcyIsImN1cnJlbnRUYWdGaWx0ZXIiLCJ1cGRhdGVUYWdGaWx0ZXIiLCJpbmNsdWRlcyIsIkFycmF5VmVjdG9yIiwiRmllbGRUeXBlIiwiZ2V0RGlzcGxheVByb2Nlc3NvciIsImxhc3RWYWx1ZUZyb20iLCJHcmFmYW5hUXVlcnlUeXBlIiwiZ2V0UmF3SW5kZXhEYXRhIiwiZHMiLCJyc3AiLCJ0YXJnZXRzIiwicmVmSWQiLCJxdWVyeVR5cGUiLCJTZWFyY2giLCJmcmFtZSIsInRvQXJyYXkiLCJhcnIiLCJKU09OIiwicGFyc2UiLCJvdGhlciIsImRpc3BsYXkiLCJ0aGVtZTIiLCJkYXNoYm9hcmQiLCJwYW5lbCIsImZvbGRlciIsImJ1aWxkU3RhdHNUYWJsZSIsImNvdW50cyIsIk1hcCIsImsiLCJzZXQiLCJTeW1ib2wiLCJpdGVyYXRvciIsImVudHJpZXMiLCJzb3J0IiwiYSIsImIiLCJrZXlzIiwidmFscyIsIm51bWJlciIsImlzQXJyYXkiLCJzdWIiLCJ0ZXJtcyIsInRlcm0iLCJjb3VudCIsImZpbHRlckZyYW1lIiwiZmlsdGVyIiwidmlldyIsImtlZXAiLCJvayIsInQiLCJkIiwiZmlsdGVyVmFsdWVzIiwicmF3IiwiTWluaVNlYXJjaCIsImlzU3RyaW5nIiwiTWluaVNlYXJjaGVyIiwiY29uc3RydWN0b3IiLCJzdXBwbGllciIsImluaXRJbmRleCIsInNlYXJjaGVyIiwiaWRGaWVsZCIsInNlYXJjaE9wdGlvbnMiLCJib29zdCIsImRlc2NyaXB0aW9uIiwiYm9vc3REb2N1bWVudCIsImRvY3VtZW50SWQiLCJwcmVmaXgiLCJmdXp6eSIsImV4dHJhY3RGaWVsZCIsImRvYyIsImpvaW4iLCJzdHJpbmdpZnkiLCJsb29rdXAiLCJPYmplY3QiLCJpbnB1dCIsImdldElucHV0RG9jIiwiYWRkIiwiZm9sZGVySURUb0luZGV4IiwiZGFzaGJvYXJkSUQiLCJkYXNoSURUb0luZGV4IiwiZm9sZGVySWQiLCJ1cmxzIiwiaWR4IiwicGFyZW50IiwiZm91bmQiLCJzY29yZSIsInJlcyIsInNob3VsZEtlZXAiLCJtYXRjaCIsInN0cmluZyIsImRzcyIsImRlZmF1bHRRdWVyeSIsIlJhbmRvbVdhbGsiLCJHcmFmYW5hQW5ub3RhdGlvblR5cGUiXSwic291cmNlUm9vdCI6IiJ9
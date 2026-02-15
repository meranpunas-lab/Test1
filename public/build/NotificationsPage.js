"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NotificationsPage"],{

/***/ "./public/app/core/components/AppNotifications/StoredNotificationItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredNotificationItem": () => (/* binding */ StoredNotificationItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui_src_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const StoredNotificationItem = ({
  title,
  severity = 'error',
  traceId,
  timestamp,
  children,
  onRemove
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getStyles(theme, severity);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.icon,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        size: "xl",
        name: (0,_grafana_ui_src_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__.getIconFromSeverity)(severity)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.title,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.body,
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.close,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        "aria-label": "Close alert",
        name: "times",
        onClick: onRemove,
        size: "lg",
        type: "button"
      })
    }), timestamp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: styles.timestamp,
      children: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(timestamp, {
        addSuffix: true
      })
    })]
  });
};

const getStyles = (theme, severity) => {
  const color = theme.colors[severity];
  const borderRadius = theme.shape.borderRadius();
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateAreas: `
        'icon title close'
        'icon body body'
        'icon icon timestamp'`,
      gap: `0 ${theme.spacing(2)}`,
      background: theme.colors.background.secondary,
      borderRadius: borderRadius
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: 'icon',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2, 3),
      background: color.main,
      color: color.contrastText,
      borderRadius: `${borderRadius} 0 0 ${borderRadius}`
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: 'title',
      alignSelf: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.text.primary
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: 'body',
      maxHeight: '50vh',
      marginRight: theme.spacing(1),
      overflowY: 'auto',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      color: theme.colors.text.secondary
    }),
    close: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: 'close',
      display: 'flex',
      justifySelf: 'end',
      padding: theme.spacing(1, 0.5),
      background: 'none'
    }),
    timestamp: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: 'timestamp',
      alignSelf: 'end',
      padding: theme.spacing(1),
      fontSize: theme.typography.pxToRem(10),
      color: theme.colors.text.secondary
    })
  };
};

/***/ }),

/***/ "./public/app/features/notifications/NotificationsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _StoredNotifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/notifications/StoredNotifications.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;









const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, 'notifications')
});

const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, undefined);
const NotificationsPage = ({
  navModel
}) => {
  if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.persistNotifications) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StoredNotifications__WEBPACK_IMPORTED_MODULE_5__.StoredNotifications, {})
    }))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(NotificationsPage));

/***/ }),

/***/ "./public/app/features/notifications/StoredNotifications.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredNotifications": () => (/* binding */ StoredNotifications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var app_core_components_AppNotifications_StoredNotificationItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/AppNotifications/StoredNotificationItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span;










function StoredNotifications() {
  const dispatch = (0,app_types__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const notifications = (0,app_types__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => (0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.selectWarningsAndErrors)(state.appNotifications));
  const lastReadTimestamp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,app_types__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => (0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.selectLastReadTimestamp)(state.appNotifications)));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.readAllNotifications)(Date.now()));
  });

  const onClearNotification = id => {
    dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.clearNotification)(id));
  };

  const clearAllNotifs = () => {
    dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.clearAllNotifications)());
  };

  if (notifications.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.noNotifsWrapper,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "bell",
        size: "xxl"
      })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        children: "Notifications you have received will appear here."
      }))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "destructive",
      onClick: clearAllNotifs,
      className: styles.clearAll,
      children: "Clear all notifications"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
      className: styles.list,
      children: notifications.map(notif => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.listItem, {
          [styles.newItem]: notif.timestamp > lastReadTimestamp.current
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_AppNotifications_StoredNotificationItem__WEBPACK_IMPORTED_MODULE_5__.StoredNotificationItem, {
          severity: notif.severity,
          title: notif.title,
          onRemove: () => onClearNotification(notif.id),
          timestamp: notif.timestamp,
          traceId: notif.traceId,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            children: notif.text
          })
        })
      }, notif.id))
    })]
  });
}

function getStyles(theme) {
  return {
    smallText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: theme.typography.pxToRem(10),
      color: theme.colors.text.secondary
    }),
    side: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: 'flex',
      flexDirection: 'column',
      padding: '3px 6px',
      paddingTop: theme.spacing(1),
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexShrink: 0
    }),
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1)
    }),
    listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      listStyle: 'none',
      gap: theme.spacing(1),
      alignItems: 'center',
      position: 'relative'
    }),
    newItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      '&::before': {
        content: '""',
        height: '100%',
        position: 'absolute',
        left: '-7px',
        top: 0,
        background: theme.colors.gradients.brandVertical,
        width: theme.spacing(0.5),
        borderRadius: theme.shape.borderRadius(1)
      }
    }),
    noNotifsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(1)
    }),
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2)
    }),
    clearAll: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignSelf: 'flex-end'
    })
  };
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistanceToNow/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsToNow ` to `formatDistanceToNow`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *   ```
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */

function formatDistanceToNow(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLFNBQVMsb0VBQWU7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9ucy9TdG9yZWROb3RpZmljYXRpb25JdGVtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9ub3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnNQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9ub3RpZmljYXRpb25zL1N0b3JlZE5vdGlmaWNhdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9kYXRlLWZucy1ucG0tMi4yOC4wLWMxOWM1YWRkMWItYTA1MTZiMmU0Zi56aXAvbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvZGF0ZS1mbnMtbnBtLTIuMjguMC1jMTljNWFkZDFiLWEwNTE2YjJlNGYuemlwL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvZGF0ZS1mbnMtbnBtLTIuMjguMC1jMTljNWFkZDFiLWEwNTE2YjJlNGYuemlwL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2RhdGUtZm5zLW5wbS0yLjI4LjAtYzE5YzVhZGQxYi1hMDUxNmIyZTRmLnppcC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlVG9Ob3cvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0SWNvbkZyb21TZXZlcml0eSB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL0FsZXJ0L0FsZXJ0JztcbmltcG9ydCB7IEljb24sIEljb25CdXR0b24sIEljb25OYW1lLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCB0eXBlIEFsZXJ0VmFyaWFudCA9ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnaW5mbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzZXZlcml0eT86IEFsZXJ0VmFyaWFudDtcbiAgdGltZXN0YW1wPzogbnVtYmVyO1xuICB0cmFjZUlkPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgb25SZW1vdmU/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTdG9yZWROb3RpZmljYXRpb25JdGVtID0gKHtcbiAgdGl0bGUsXG4gIHNldmVyaXR5ID0gJ2Vycm9yJyxcbiAgdHJhY2VJZCxcbiAgdGltZXN0YW1wLFxuICBjaGlsZHJlbixcbiAgb25SZW1vdmUsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUsIHNldmVyaXR5KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxuICAgICAgICA8SWNvbiBzaXplPVwieGxcIiBuYW1lPXtnZXRJY29uRnJvbVNldmVyaXR5KHNldmVyaXR5KSBhcyBJY29uTmFtZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfT5cbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlIGFsZXJ0XCIgbmFtZT1cInRpbWVzXCIgb25DbGljaz17b25SZW1vdmV9IHNpemU9XCJsZ1wiIHR5cGU9XCJidXR0b25cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7dGltZXN0YW1wICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzdGFtcH0+e2Zvcm1hdERpc3RhbmNlVG9Ob3codGltZXN0YW1wLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KX08L3NwYW4+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyLCBzZXZlcml0eTogQWxlcnRWYXJpYW50KSA9PiB7XG4gIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JzW3NldmVyaXR5XTtcbiAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB3cmFwcGVyOiBjc3Moe1xuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ2F1dG8gMWZyIGF1dG8nLFxuICAgICAgZ3JpZFRlbXBsYXRlUm93czogJ2F1dG8gMWZyIGF1dG8nLFxuICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGBcbiAgICAgICAgJ2ljb24gdGl0bGUgY2xvc2UnXG4gICAgICAgICdpY29uIGJvZHkgYm9keSdcbiAgICAgICAgJ2ljb24gaWNvbiB0aW1lc3RhbXAnYCxcbiAgICAgIGdhcDogYDAgJHt0aGVtZS5zcGFjaW5nKDIpfWAsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnksXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICB9KSxcbiAgICBpY29uOiBjc3Moe1xuICAgICAgZ3JpZEFyZWE6ICdpY29uJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAzKSxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLm1haW4sXG4gICAgICBjb2xvcjogY29sb3IuY29udHJhc3RUZXh0LFxuICAgICAgYm9yZGVyUmFkaXVzOiBgJHtib3JkZXJSYWRpdXN9IDAgMCAke2JvcmRlclJhZGl1c31gLFxuICAgIH0pLFxuICAgIHRpdGxlOiBjc3Moe1xuICAgICAgZ3JpZEFyZWE6ICd0aXRsZScsXG4gICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnksXG4gICAgfSksXG4gICAgYm9keTogY3NzKHtcbiAgICAgIGdyaWRBcmVhOiAnYm9keScsXG4gICAgICBtYXhIZWlnaHQ6ICc1MHZoJyxcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeSxcbiAgICB9KSxcbiAgICBjbG9zZTogY3NzKHtcbiAgICAgIGdyaWRBcmVhOiAnY2xvc2UnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeVNlbGY6ICdlbmQnLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAwLjUpLFxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIH0pLFxuICAgIHRpbWVzdGFtcDogY3NzKHtcbiAgICAgIGdyaWRBcmVhOiAndGltZXN0YW1wJyxcbiAgICAgIGFsaWduU2VsZjogJ2VuZCcsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMCksXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5LFxuICAgIH0pLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgU3RvcmVkTm90aWZpY2F0aW9ucyB9IGZyb20gJy4vU3RvcmVkTm90aWZpY2F0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnbm90aWZpY2F0aW9ucycpLFxufSk7XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB1bmRlZmluZWQpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB7fVxuXG50eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnNQYWdlID0gKHsgbmF2TW9kZWwgfTogUHJvcHMpID0+IHtcbiAgaWYgKCFjb25maWcuZmVhdHVyZVRvZ2dsZXMucGVyc2lzdE5vdGlmaWNhdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8U3RvcmVkTm90aWZpY2F0aW9ucyAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShOb3RpZmljYXRpb25zUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0T25jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQge1xuICBjbGVhckFsbE5vdGlmaWNhdGlvbnMsXG4gIGNsZWFyTm90aWZpY2F0aW9uLFxuICByZWFkQWxsTm90aWZpY2F0aW9ucyxcbiAgc2VsZWN0V2FybmluZ3NBbmRFcnJvcnMsXG4gIHNlbGVjdExhc3RSZWFkVGltZXN0YW1wLFxufSBmcm9tICdhcHAvY29yZS9yZWR1Y2Vycy9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgU3RvcmVkTm90aWZpY2F0aW9uSXRlbSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9ucy9TdG9yZWROb3RpZmljYXRpb25JdGVtJztcblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlZE5vdGlmaWNhdGlvbnMoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc2VsZWN0V2FybmluZ3NBbmRFcnJvcnMoc3RhdGUuYXBwTm90aWZpY2F0aW9ucykpO1xuICBjb25zdCBsYXN0UmVhZFRpbWVzdGFtcCA9IHVzZVJlZih1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHNlbGVjdExhc3RSZWFkVGltZXN0YW1wKHN0YXRlLmFwcE5vdGlmaWNhdGlvbnMpKSk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICB1c2VFZmZlY3RPbmNlKCgpID0+IHtcbiAgICBkaXNwYXRjaChyZWFkQWxsTm90aWZpY2F0aW9ucyhEYXRlLm5vdygpKSk7XG4gIH0pO1xuXG4gIGNvbnN0IG9uQ2xlYXJOb3RpZmljYXRpb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKGNsZWFyTm90aWZpY2F0aW9uKGlkKSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJBbGxOb3RpZnMgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goY2xlYXJBbGxOb3RpZmljYXRpb25zKCkpO1xuICB9O1xuXG4gIGlmIChub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vTm90aWZzV3JhcHBlcn0+XG4gICAgICAgIDxJY29uIG5hbWU9XCJiZWxsXCIgc2l6ZT1cInh4bFwiIC8+XG4gICAgICAgIDxzcGFuPk5vdGlmaWNhdGlvbnMgeW91IGhhdmUgcmVjZWl2ZWQgd2lsbCBhcHBlYXIgaGVyZS48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXtjbGVhckFsbE5vdGlmc30gY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJBbGx9PlxuICAgICAgICBDbGVhciBhbGwgbm90aWZpY2F0aW9uc1xuICAgICAgPC9CdXR0b24+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgIHtub3RpZmljYXRpb25zLm1hcCgobm90aWYpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGtleT17bm90aWYuaWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5saXN0SXRlbSwgeyBbc3R5bGVzLm5ld0l0ZW1dOiBub3RpZi50aW1lc3RhbXAgPiBsYXN0UmVhZFRpbWVzdGFtcC5jdXJyZW50IH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdG9yZWROb3RpZmljYXRpb25JdGVtXG4gICAgICAgICAgICAgIHNldmVyaXR5PXtub3RpZi5zZXZlcml0eX1cbiAgICAgICAgICAgICAgdGl0bGU9e25vdGlmLnRpdGxlfVxuICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gb25DbGVhck5vdGlmaWNhdGlvbihub3RpZi5pZCl9XG4gICAgICAgICAgICAgIHRpbWVzdGFtcD17bm90aWYudGltZXN0YW1wfVxuICAgICAgICAgICAgICB0cmFjZUlkPXtub3RpZi50cmFjZUlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj57bm90aWYudGV4dH08L3NwYW4+XG4gICAgICAgICAgICA8L1N0b3JlZE5vdGlmaWNhdGlvbkl0ZW0+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBzbWFsbFRleHQ6IGNzcyh7XG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEwKSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnksXG4gICAgfSksXG4gICAgc2lkZTogY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgcGFkZGluZzogJzNweCA2cHgnLFxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICB9KSxcbiAgICBsaXN0OiBjc3Moe1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSksXG4gICAgbGlzdEl0ZW06IGNzcyh7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIGdhcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSksXG4gICAgbmV3SXRlbTogY3NzKHtcbiAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnLTdweCcsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmdyYWRpZW50cy5icmFuZFZlcnRpY2FsLFxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygxKSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgbm9Ob3RpZnNXcmFwcGVyOiBjc3Moe1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGdhcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9KSxcbiAgICB3cmFwcGVyOiBjc3Moe1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSksXG4gICAgY2xlYXJBbGw6IGNzcyh7XG4gICAgICBhbGlnblNlbGY6ICdmbGV4LWVuZCcsXG4gICAgfSksXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBkaXJ0eU9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBkaXJ0eU9iamVjdCA9IGRpcnR5T2JqZWN0IHx8IHt9O1xuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIGRpcnR5T2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkaXJ0eU9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gZGlydHlPYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vYXNzaWduL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9iamVjdChkaXJ0eU9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBkaXJ0eU9iamVjdCk7XG59IiwiaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUyA9IDI1MjA7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IDQzMjAwO1xudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3JkcyBgIHRvIGBmb3JtYXREaXN0YW5jZWBcbiAqICAgdG8gbWFrZSBpdHMgbmFtZSBjb25zaXN0ZW50IHdpdGggYGZvcm1hdGAgYW5kIGBmb3JtYXRSZWxhdGl2ZWAuXG4gKlxuICogLSBUaGUgb3JkZXIgb2YgYXJndW1lbnRzIGlzIHN3YXBwZWQgdG8gbWFrZSB0aGUgZnVuY3Rpb25cbiAqICAgY29uc2lzdGVudCB3aXRoIGBkaWZmZXJlbmNlSW4uLi5gIGZ1bmN0aW9ucy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2UoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKiAgIGBgYFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcblxuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIGxvY2FsaXplT3B0aW9ucy5hZGRTdWZmaXggPSBCb29sZWFuKG9wdGlvbnMuYWRkU3VmZml4KTtcbiAgbG9jYWxpemVPcHRpb25zLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCBudWxsLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBkaXN0YW5jZUluV29yZHMgZnJvbSBcIi4uL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVRvTm93XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSB0byBub3cgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3Jkc1RvTm93IGAgdG8gYGZvcm1hdERpc3RhbmNlVG9Ob3dgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHNUb05vdyhuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgeyBhZGRTdWZmaXg6IHRydWUgfSlcbiAqICAgLy89PiAnaW4gNiBtb250aHMnXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KVxuICogICAvLz0+ICdpbiA2IG1vbnRocydcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IHNwZWNpZmllcyBpZiBub3cgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBwYXNzZWQgZGF0ZVxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSwgd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMiBKdWx5IDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqIClcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiBub3cgaXMgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNSAwMDowMDoxNSwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICB7aW5jbHVkZVNlY29uZHM6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNiwgd2l0aCBhIHN1ZmZpeD9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2luIGFib3V0IDEgeWVhcidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEF1Z3VzdCAyMDE2IGluIEVzcGVyYW50bz9cbiAqIHZhciBlb0xvY2FsZSA9IHJlcXVpcmUoJ2RhdGUtZm5zL2xvY2FsZS9lbycpXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgNywgMSksXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZVRvTm93KGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZGlzdGFuY2VJbldvcmRzKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgZGlydHlPcHRpb25zKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJmb3JtYXREaXN0YW5jZVRvTm93IiwiY3NzIiwiZ2V0SWNvbkZyb21TZXZlcml0eSIsIkljb24iLCJJY29uQnV0dG9uIiwidXNlVGhlbWUyIiwiU3RvcmVkTm90aWZpY2F0aW9uSXRlbSIsInRpdGxlIiwic2V2ZXJpdHkiLCJ0cmFjZUlkIiwidGltZXN0YW1wIiwiY2hpbGRyZW4iLCJvblJlbW92ZSIsInRoZW1lIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwid3JhcHBlciIsImljb24iLCJib2R5IiwiY2xvc2UiLCJhZGRTdWZmaXgiLCJjb2xvciIsImNvbG9ycyIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZFRlbXBsYXRlQXJlYXMiLCJnYXAiLCJzcGFjaW5nIiwiYmFja2dyb3VuZCIsInNlY29uZGFyeSIsImdyaWRBcmVhIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1haW4iLCJjb250cmFzdFRleHQiLCJhbGlnblNlbGYiLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRNZWRpdW0iLCJ0ZXh0IiwicHJpbWFyeSIsIm1heEhlaWdodCIsIm1hcmdpblJpZ2h0Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dXcmFwIiwid29yZEJyZWFrIiwianVzdGlmeVNlbGYiLCJmb250U2l6ZSIsInB4VG9SZW0iLCJjb25uZWN0IiwiY29uZmlnIiwiZ2V0TmF2TW9kZWwiLCJQYWdlIiwiU3RvcmVkTm90aWZpY2F0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImNvbm5lY3RvciIsInVuZGVmaW5lZCIsIk5vdGlmaWNhdGlvbnNQYWdlIiwiZmVhdHVyZVRvZ2dsZXMiLCJwZXJzaXN0Tm90aWZpY2F0aW9ucyIsInVzZVJlZiIsInVzZUVmZmVjdE9uY2UiLCJjeCIsIkJ1dHRvbiIsInVzZVN0eWxlczIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiY2xlYXJBbGxOb3RpZmljYXRpb25zIiwiY2xlYXJOb3RpZmljYXRpb24iLCJyZWFkQWxsTm90aWZpY2F0aW9ucyIsInNlbGVjdFdhcm5pbmdzQW5kRXJyb3JzIiwic2VsZWN0TGFzdFJlYWRUaW1lc3RhbXAiLCJkaXNwYXRjaCIsIm5vdGlmaWNhdGlvbnMiLCJhcHBOb3RpZmljYXRpb25zIiwibGFzdFJlYWRUaW1lc3RhbXAiLCJEYXRlIiwibm93Iiwib25DbGVhck5vdGlmaWNhdGlvbiIsImlkIiwiY2xlYXJBbGxOb3RpZnMiLCJsZW5ndGgiLCJub05vdGlmc1dyYXBwZXIiLCJjbGVhckFsbCIsImxpc3QiLCJtYXAiLCJub3RpZiIsImxpc3RJdGVtIiwibmV3SXRlbSIsImN1cnJlbnQiLCJzbWFsbFRleHQiLCJzaWRlIiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmdUb3AiLCJmbGV4U2hyaW5rIiwibGlzdFN0eWxlIiwicG9zaXRpb24iLCJjb250ZW50IiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImdyYWRpZW50cyIsImJyYW5kVmVydGljYWwiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=
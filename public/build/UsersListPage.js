"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UsersListPage"],{

/***/ "./public/app/features/invites/InviteeRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const mapDispatchToProps = {
  revokeInvite: _state_actions__WEBPACK_IMPORTED_MODULE_2__.revokeInvite
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);

class InviteeRow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      invitee,
      revokeInvite
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: invitee.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: invitee.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
        className: "text-right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ClipboardButton, {
          variant: "secondary",
          size: "sm",
          getText: () => invitee.url,
          children: "Copy Invite"
        }), "\xA0"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "destructive",
          size: "sm",
          icon: "times",
          onClick: () => revokeInvite(invitee.code)
        })
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(InviteeRow));

/***/ }),

/***/ "./public/app/features/invites/InviteesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InviteesTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _InviteeRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/invites/InviteeRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;





class InviteesTable extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      invitees
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
      className: "filter-table form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Email"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Name"
          })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
        children: invitees.map((invitee, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InviteeRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
            invitee: invitee
          }, `${invitee.id}-${index}`);
        })
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/features/invites/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectById": () => (/* binding */ selectById),
/* harmony export */   "selectInvitesMatchingQuery": () => (/* binding */ selectInvitesMatchingQuery),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/invites/state/reducers.ts");


const {
  selectAll,
  selectById,
  selectTotal
} = _reducers__WEBPACK_IMPORTED_MODULE_0__.selectors;

const selectQuery = (_, query) => query;

const selectInvitesMatchingQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)([selectAll, selectQuery], (invites, searchQuery) => {
  const regex = new RegExp(searchQuery, 'i');
  const matches = invites.filter(invite => regex.test(invite.name) || regex.test(invite.email));
  return matches;
});

/***/ }),

/***/ "./public/app/features/users/UsersActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersActionBar": () => (/* binding */ UsersActionBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/users/state/reducers.ts");
/* harmony import */ var _invites_state_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/invites/state/selectors.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/users/state/selectors.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LinkButton;











class UsersActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      canInvite,
      externalUserMngLinkName,
      externalUserMngLinkUrl,
      searchQuery,
      pendingInvitesCount,
      setUsersSearchQuery,
      onShowInvites,
      showInvites
    } = this.props;
    const options = [{
      label: 'Users',
      value: 'users'
    }, {
      label: `Pending Invites (${pendingInvitesCount})`,
      value: 'invites'
    }];
    const canAddToOrg = app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.UsersCreate, canInvite);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FilterInput, {
          value: searchQuery,
          onChange: setUsersSearchQuery,
          placeholder: "Search user by login, email or name"
        })
      }), pendingInvitesCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        style: {
          marginLeft: '1rem'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
          value: showInvites ? 'invites' : 'users',
          options: options,
          onChange: onShowInvites
        })
      }), canAddToOrg && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
        href: "org/users/invite",
        children: "Invite"
      }))), externalUserMngLinkUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
        href: externalUserMngLinkUrl,
        target: "_blank",
        rel: "noopener",
        children: externalUserMngLinkName
      })]
    });
  }

}

function mapStateToProps(state) {
  return {
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_4__.getUsersSearchQuery)(state.users),
    pendingInvitesCount: (0,_invites_state_selectors__WEBPACK_IMPORTED_MODULE_3__.selectTotal)(state.invites),
    externalUserMngLinkName: state.users.externalUserMngLinkName,
    externalUserMngLinkUrl: state.users.externalUserMngLinkUrl,
    canInvite: state.users.canInvite
  };
}

const mapDispatchToProps = {
  setUsersSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_2__.setUsersSearchQuery
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(UsersActionBar));

/***/ }),

/***/ "./public/app/features/users/UsersListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListPage": () => (/* binding */ UsersListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _UsersActionBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/users/UsersActionBar.tsx");
/* harmony import */ var _UsersTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/users/UsersTable.tsx");
/* harmony import */ var _invites_InviteesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/invites/InviteesTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/users/state/actions.ts");
/* harmony import */ var _invites_state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/users/state/selectors.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/users/state/reducers.ts");
/* harmony import */ var _invites_state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/invites/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function mapStateToProps(state) {
  const searchQuery = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getUsersSearchQuery)(state.users);
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_10__.getNavModel)(state.navIndex, 'users'),
    users: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getUsers)(state.users),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getUsersSearchQuery)(state.users),
    searchPage: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getUsersSearchPage)(state.users),
    invitees: (0,_invites_state_selectors__WEBPACK_IMPORTED_MODULE_13__.selectInvitesMatchingQuery)(state.invites, searchQuery),
    externalUserMngInfo: state.users.externalUserMngInfo,
    hasFetched: state.users.hasFetched
  };
}

const mapDispatchToProps = {
  loadUsers: _state_actions__WEBPACK_IMPORTED_MODULE_8__.loadUsers,
  fetchInvitees: _invites_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchInvitees,
  setUsersSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setUsersSearchQuery,
  setUsersSearchPage: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setUsersSearchPage,
  updateUser: _state_actions__WEBPACK_IMPORTED_MODULE_8__.updateUser,
  removeUser: _state_actions__WEBPACK_IMPORTED_MODULE_8__.removeUser
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const pageLimit = 30;
class UsersListPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onRoleChange", (role, user) => {
      const updatedUser = Object.assign({}, user, {
        role: role
      });
      this.props.updateUser(updatedUser);
    });

    _defineProperty(this, "onShowInvites", () => {
      this.setState(prevState => ({
        showInvites: !prevState.showInvites
      }));
    });

    _defineProperty(this, "getPaginatedUsers", users => {
      const offset = (this.props.searchPage - 1) * pageLimit;
      return users.slice(offset, offset + pageLimit);
    });

    if (this.props.externalUserMngInfo) {
      this.externalUserMngInfoHtml = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.renderMarkdown)(this.props.externalUserMngInfo);
    }

    this.state = {
      showInvites: false
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchInvitees();
  }

  async fetchUsers() {
    return await this.props.loadUsers();
  }

  async fetchInvitees() {
    return await this.props.fetchInvitees();
  }

  renderTable() {
    const {
      invitees,
      users,
      setUsersSearchPage
    } = this.props;
    const paginatedUsers = this.getPaginatedUsers(users);
    const totalPages = Math.ceil(users.length / pageLimit);

    if (this.state.showInvites) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_invites_InviteesTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
        invitees: invitees
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UsersTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
          users: paginatedUsers,
          onRoleChange: (role, user) => this.onRoleChange(role, user),
          onRemoveUser: user => this.props.removeUser(user.userId)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          justify: "flex-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
            onNavigate: setUsersSearchPage,
            currentPage: this.props.searchPage,
            numberOfPages: totalPages,
            hideWhenSinglePage: true
          })
        })]
      });
    }
  }

  render() {
    const {
      navModel,
      hasFetched
    } = this.props;
    const externalUserMngInfoHtml = this.externalUserMngInfoHtml;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        isLoading: !hasFetched,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UsersActionBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onShowInvites: this.onShowInvites,
            showInvites: this.state.showInvites
          }), externalUserMngInfoHtml && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "grafana-info-box",
            dangerouslySetInnerHTML: {
              __html: externalUserMngInfoHtml
            }
          }), hasFetched && this.renderTable()]
        })
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UsersListPage));

/***/ }),

/***/ "./public/app/features/users/UsersTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3, _th4, _th5, _th6;












const UsersTable = props => {
  const {
    users,
    orgId,
    onRoleChange,
    onRemoveUser
  } = props;
  const [userToRemove, setUserToRemove] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [roleOptions, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [builtinRoles, setBuiltinRoles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchOptions() {
      try {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_5__.fetchRoleOptions)(orgId);
          setRoleOptions(options);
        }

        if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.ActionBuiltinRolesList)) {
          const builtInRoles = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_5__.fetchBuiltinRoles)(orgId);
          setBuiltinRoles(builtInRoles);
        }
      } catch (e) {
        console.error('Error loading options');
      }
    }

    if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled()) {
      fetchOptions();
    }
  }, [orgId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      className: "filter-table form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Login"
          })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Email"
          })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Name"
          })), _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Seen"
          })), _th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Role"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
        children: users.map((user, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-2 text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                className: "filter-table__avatar",
                src: user.avatarUrl,
                alt: "User avatar"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.login,
                children: user.login
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.email,
                children: user.email
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.name,
                children: user.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-1",
              children: user.lastSeenAtAge
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-8",
              children: app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_6__.UserRolePicker, {
                userId: user.userId,
                orgId: orgId,
                builtInRole: user.role,
                onBuiltinRoleChange: newRole => onRoleChange(newRole, user),
                roleOptions: roleOptions,
                builtInRoles: builtinRoles,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.OrgUsersRoleUpdate, user)
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_2__.OrgRolePicker, {
                "aria-label": "Role",
                value: user.role,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.OrgUsersRoleUpdate, user),
                onChange: newRole => onRoleChange(newRole, user)
              })
            }), app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.OrgUsersRemove, user) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                size: "sm",
                variant: "destructive",
                onClick: () => {
                  setUserToRemove(user);
                },
                icon: "times",
                "aria-label": "Delete user"
              })
            })]
          }, `${user.userId}-${index}`);
        })
      })]
    }), Boolean(userToRemove) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
      body: `Are you sure you want to delete user ${userToRemove === null || userToRemove === void 0 ? void 0 : userToRemove.login}?`,
      confirmText: "Delete",
      title: "Delete",
      onDismiss: () => {
        setUserToRemove(null);
      },
      isOpen: true,
      onConfirm: () => {
        if (!userToRemove) {
          return;
        }

        onRemoveUser(userToRemove);
        setUserToRemove(null);
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersTable);

/***/ }),

/***/ "./public/app/features/users/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUsers": () => (/* binding */ loadUsers),
/* harmony export */   "removeUser": () => (/* binding */ removeUser),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/users/state/reducers.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/utils/accessControl.ts");



function loadUsers() {
  return async dispatch => {
    const users = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/org/users', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_2__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.usersLoaded)(users));
  };
}
function updateUser(user) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().patch(`/api/org/users/${user.userId}`, {
      role: user.role
    });
    dispatch(loadUsers());
  };
}
function removeUser(userId) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/org/users/${userId}`);
    dispatch(loadUsers());
  };
}

/***/ }),

/***/ "./public/app/features/users/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "getUsersSearchPage": () => (/* binding */ getUsersSearchPage),
/* harmony export */   "getUsersSearchQuery": () => (/* binding */ getUsersSearchQuery)
/* harmony export */ });
const getUsers = state => {
  const regex = new RegExp(state.searchQuery, 'i');
  return state.users.filter(user => {
    return regex.test(user.login) || regex.test(user.email) || regex.test(user.name);
  });
};
const getUsersSearchQuery = state => state.searchQuery;
const getUsersSearchPage = state => state.searchPage;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNMaXN0UGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsTUFBTU0sa0JBQWtCLEdBQUc7QUFDekJILEVBQUFBLFlBQVlBLDBEQUFBQTtBQURhLENBQTNCO0FBSUEsTUFBTUksU0FBUyxHQUFHTCxvREFBTyxDQUFDLElBQUQsRUFBT0ksa0JBQVAsQ0FBekI7O0FBUUEsTUFBTUUsVUFBTixTQUF5QlAsZ0RBQXpCLENBQThDO0FBQzVDUSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDLE1BQUFBLE9BQUY7QUFBV1AsTUFBQUE7QUFBWCxRQUE0QixLQUFLUSxLQUF2QztBQUNBLHdCQUNFO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0QsT0FBTyxDQUFDRTtBQUFiLFFBREYsZUFFRTtBQUFBLGtCQUFLRixPQUFPLENBQUNHO0FBQWIsUUFGRixlQUdFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsZ0NBQ0UsdURBQUMsd0RBQUQ7QUFBaUIsaUJBQU8sRUFBQyxXQUF6QjtBQUFxQyxjQUFJLEVBQUMsSUFBMUM7QUFBK0MsaUJBQU8sRUFBRSxNQUFNSCxPQUFPLENBQUNJLEdBQXRFO0FBQUE7QUFBQSxVQURGO0FBQUEsUUFIRixlQVNFO0FBQUEsK0JBQ0UsdURBQUMsK0NBQUQ7QUFBUSxpQkFBTyxFQUFDLGFBQWhCO0FBQThCLGNBQUksRUFBQyxJQUFuQztBQUF3QyxjQUFJLEVBQUMsT0FBN0M7QUFBcUQsaUJBQU8sRUFBRSxNQUFNWCxZQUFZLENBQUNPLE9BQU8sQ0FBQ0ssSUFBVDtBQUFoRjtBQURGLFFBVEY7QUFBQSxNQURGO0FBZUQ7O0FBbEIyQzs7QUFxQjlDLGlFQUFlUixTQUFTLENBQUNDLFVBQUQsQ0FBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFFQTs7O0FBTWUsTUFBTVEsYUFBTixTQUE0QmYsZ0RBQTVCLENBQWlEO0FBQzlEUSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVRLE1BQUFBO0FBQUYsUUFBZSxLQUFLTixLQUExQjtBQUVBLHdCQUNFO0FBQU8sZUFBUyxFQUFDLDBCQUFqQjtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBQSxnREFDRTtBQUFBO0FBQUEsWUFERixnQ0FFRTtBQUFBO0FBQUEsWUFGRixnQ0FHRSxnRUFIRixnQkFJRTtBQUFJLGlCQUFLLEVBQUU7QUFBRU8sY0FBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBWCxZQUpGO0FBQUE7QUFERixRQURGLGVBU0U7QUFBQSxrQkFDR0QsUUFBUSxDQUFDRSxHQUFULENBQWEsQ0FBQ1QsT0FBRCxFQUFVVSxLQUFWLEtBQW9CO0FBQ2hDLDhCQUFPLHVEQUFDLG1EQUFEO0FBQTJDLG1CQUFPLEVBQUVWO0FBQXBELGFBQWtCLEdBQUVBLE9BQU8sQ0FBQ1csRUFBRyxJQUFHRCxLQUFNLEVBQXhDLENBQVA7QUFDRCxTQUZBO0FBREgsUUFURjtBQUFBLE1BREY7QUFpQkQ7O0FBckI2RDs7Ozs7Ozs7Ozs7Ozs7OztBQ1JoRTtBQUNBO0FBRU8sTUFBTTtBQUFFSSxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBLFVBQWI7QUFBeUJDLEVBQUFBO0FBQXpCLElBQXlDSCxnREFBL0M7O0FBRVAsTUFBTUksV0FBVyxHQUFHLENBQUNDLENBQUQsRUFBU0MsS0FBVCxLQUEyQkEsS0FBL0M7O0FBQ08sTUFBTUMsMEJBQTBCLEdBQUdSLGdFQUFjLENBQUMsQ0FBQ0UsU0FBRCxFQUFZRyxXQUFaLENBQUQsRUFBMkIsQ0FBQ0ksT0FBRCxFQUFVQyxXQUFWLEtBQTBCO0FBQzNHLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVdGLFdBQVgsRUFBd0IsR0FBeEIsQ0FBZDtBQUNBLFFBQU1HLE9BQU8sR0FBR0osT0FBTyxDQUFDSyxNQUFSLENBQWdCQyxNQUFELElBQVlKLEtBQUssQ0FBQ0ssSUFBTixDQUFXRCxNQUFNLENBQUN4QixJQUFsQixLQUEyQm9CLEtBQUssQ0FBQ0ssSUFBTixDQUFXRCxNQUFNLENBQUN6QixLQUFsQixDQUF0RCxDQUFoQjtBQUNBLFNBQU91QixPQUFQO0FBQ0QsQ0FKdUQsQ0FBakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBYU8sTUFBTVcsY0FBTixTQUE2QjdDLGdEQUE3QixDQUFrRDtBQUN2RFEsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUNKc0MsTUFBQUEsU0FESTtBQUVKQyxNQUFBQSx1QkFGSTtBQUdKQyxNQUFBQSxzQkFISTtBQUlKakIsTUFBQUEsV0FKSTtBQUtKa0IsTUFBQUEsbUJBTEk7QUFNSlgsTUFBQUEsbUJBTkk7QUFPSlksTUFBQUEsYUFQSTtBQVFKQyxNQUFBQTtBQVJJLFFBU0YsS0FBS3pDLEtBVFQ7QUFVQSxVQUFNMEMsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLEtBQUssRUFBRTtBQUF6QixLQURjLEVBRWQ7QUFBRUQsTUFBQUEsS0FBSyxFQUFHLG9CQUFtQkosbUJBQW9CLEdBQWpEO0FBQXFESyxNQUFBQSxLQUFLLEVBQUU7QUFBNUQsS0FGYyxDQUFoQjtBQUlBLFVBQU1DLFdBQVcsR0FBR1osK0RBQUEsQ0FBcUJDLHNFQUFyQixFQUFzREUsU0FBdEQsQ0FBcEI7QUFFQSx3QkFDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUFBLCtCQUNFLHVEQUFDLG9EQUFEO0FBQ0UsZUFBSyxFQUFFZixXQURUO0FBRUUsa0JBQVEsRUFBRU8sbUJBRlo7QUFHRSxxQkFBVyxFQUFDO0FBSGQ7QUFERixRQURGLEVBUUdXLG1CQUFtQixHQUFHLENBQXRCLGlCQUNDO0FBQUssYUFBSyxFQUFFO0FBQUVTLFVBQUFBLFVBQVUsRUFBRTtBQUFkLFNBQVo7QUFBQSwrQkFDRSx1REFBQyx5REFBRDtBQUFrQixlQUFLLEVBQUVQLFdBQVcsR0FBRyxTQUFILEdBQWUsT0FBbkQ7QUFBNEQsaUJBQU8sRUFBRUMsT0FBckU7QUFBOEUsa0JBQVEsRUFBRUY7QUFBeEY7QUFERixRQVRKLEVBYUdLLFdBQVcsZ0RBQUksdURBQUMsbURBQUQ7QUFBWSxZQUFJLEVBQUMsa0JBQWpCO0FBQUE7QUFBQSxRQUFKLEVBYmQsRUFjR1Asc0JBQXNCLGlCQUNyQix1REFBQyxtREFBRDtBQUFZLFlBQUksRUFBRUEsc0JBQWxCO0FBQTBDLGNBQU0sRUFBQyxRQUFqRDtBQUEwRCxXQUFHLEVBQUMsVUFBOUQ7QUFBQSxrQkFDR0Q7QUFESCxRQWZKO0FBQUEsTUFERjtBQXNCRDs7QUF4Q3NEOztBQTJDekQsU0FBU1ksZUFBVCxDQUF5QkMsS0FBekIsRUFBcUM7QUFDbkMsU0FBTztBQUNMN0IsSUFBQUEsV0FBVyxFQUFFUSxxRUFBbUIsQ0FBQ3FCLEtBQUssQ0FBQ0MsS0FBUCxDQUQzQjtBQUVMWixJQUFBQSxtQkFBbUIsRUFBRXhCLHFFQUFXLENBQUNtQyxLQUFLLENBQUM5QixPQUFQLENBRjNCO0FBR0xpQixJQUFBQSx1QkFBdUIsRUFBRWEsS0FBSyxDQUFDQyxLQUFOLENBQVlkLHVCQUhoQztBQUlMQyxJQUFBQSxzQkFBc0IsRUFBRVksS0FBSyxDQUFDQyxLQUFOLENBQVliLHNCQUovQjtBQUtMRixJQUFBQSxTQUFTLEVBQUVjLEtBQUssQ0FBQ0MsS0FBTixDQUFZZjtBQUxsQixHQUFQO0FBT0Q7O0FBRUQsTUFBTXpDLGtCQUFrQixHQUFHO0FBQ3pCaUMsRUFBQUEsbUJBQW1CQSxrRUFBQUE7QUFETSxDQUEzQjtBQUlBLGlFQUFlckMsb0RBQU8sQ0FBQzBELGVBQUQsRUFBa0J0RCxrQkFBbEIsQ0FBUCxDQUE2Q3dDLGNBQTdDLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUEsU0FBU2MsZUFBVCxDQUF5QkMsS0FBekIsRUFBNEM7QUFDMUMsUUFBTTdCLFdBQVcsR0FBR1Esc0VBQW1CLENBQUNxQixLQUFLLENBQUNDLEtBQVAsQ0FBdkM7QUFDQSxTQUFPO0FBQ0xlLElBQUFBLFFBQVEsRUFBRUoseUVBQVcsQ0FBQ1osS0FBSyxDQUFDaUIsUUFBUCxFQUFpQixPQUFqQixDQURoQjtBQUVMaEIsSUFBQUEsS0FBSyxFQUFFWSwyREFBUSxDQUFDYixLQUFLLENBQUNDLEtBQVAsQ0FGVjtBQUdMOUIsSUFBQUEsV0FBVyxFQUFFUSxzRUFBbUIsQ0FBQ3FCLEtBQUssQ0FBQ0MsS0FBUCxDQUgzQjtBQUlMaUIsSUFBQUEsVUFBVSxFQUFFSixxRUFBa0IsQ0FBQ2QsS0FBSyxDQUFDQyxLQUFQLENBSnpCO0FBS0w3QyxJQUFBQSxRQUFRLEVBQUVhLHFGQUEwQixDQUFDK0IsS0FBSyxDQUFDOUIsT0FBUCxFQUFnQkMsV0FBaEIsQ0FML0I7QUFNTGdELElBQUFBLG1CQUFtQixFQUFFbkIsS0FBSyxDQUFDQyxLQUFOLENBQVlrQixtQkFONUI7QUFPTEMsSUFBQUEsVUFBVSxFQUFFcEIsS0FBSyxDQUFDQyxLQUFOLENBQVltQjtBQVBuQixHQUFQO0FBU0Q7O0FBRUQsTUFBTTNFLGtCQUFrQixHQUFHO0FBQ3pCK0QsRUFBQUEsU0FEeUI7QUFFekJHLEVBQUFBLGFBRnlCO0FBR3pCakMsRUFBQUEsbUJBSHlCO0FBSXpCcUMsRUFBQUEsa0JBSnlCO0FBS3pCTCxFQUFBQSxVQUx5QjtBQU16QkQsRUFBQUEsVUFBVUEsd0RBQUFBO0FBTmUsQ0FBM0I7QUFTQSxNQUFNL0QsU0FBUyxHQUFHTCxvREFBTyxDQUFDMEQsZUFBRCxFQUFrQnRELGtCQUFsQixDQUF6QjtBQVFBLE1BQU00RSxTQUFTLEdBQUcsRUFBbEI7QUFFTyxNQUFNQyxhQUFOLFNBQTRCbEYsZ0RBQTVCLENBQXdEO0FBRzdEbUYsRUFBQUEsV0FBVyxDQUFDekUsS0FBRCxFQUFlO0FBQ3hCLFVBQU1BLEtBQU47O0FBRHdCLDBDQXlCWCxDQUFDMEUsSUFBRCxFQUFnQkMsSUFBaEIsS0FBa0M7QUFDL0MsWUFBTUMsV0FBVyxxQkFBUUQsSUFBUjtBQUFjRCxRQUFBQSxJQUFJLEVBQUVBO0FBQXBCLFFBQWpCO0FBRUEsV0FBSzFFLEtBQUwsQ0FBVzRELFVBQVgsQ0FBc0JnQixXQUF0QjtBQUNELEtBN0J5Qjs7QUFBQSwyQ0ErQlYsTUFBTTtBQUNwQixXQUFLQyxRQUFMLENBQWVDLFNBQUQsS0FBZ0I7QUFDNUJyQyxRQUFBQSxXQUFXLEVBQUUsQ0FBQ3FDLFNBQVMsQ0FBQ3JDO0FBREksT0FBaEIsQ0FBZDtBQUdELEtBbkN5Qjs7QUFBQSwrQ0FxQ0xVLEtBQUQsSUFBc0I7QUFDeEMsWUFBTTRCLE1BQU0sR0FBRyxDQUFDLEtBQUsvRSxLQUFMLENBQVdvRSxVQUFYLEdBQXdCLENBQXpCLElBQThCRyxTQUE3QztBQUNBLGFBQU9wQixLQUFLLENBQUM2QixLQUFOLENBQVlELE1BQVosRUFBb0JBLE1BQU0sR0FBR1IsU0FBN0IsQ0FBUDtBQUNELEtBeEN5Qjs7QUFHeEIsUUFBSSxLQUFLdkUsS0FBTCxDQUFXcUUsbUJBQWYsRUFBb0M7QUFDbEMsV0FBS1ksdUJBQUwsR0FBK0I3Qiw2REFBYyxDQUFDLEtBQUtwRCxLQUFMLENBQVdxRSxtQkFBWixDQUE3QztBQUNEOztBQUVELFNBQUtuQixLQUFMLEdBQWE7QUFDWFQsTUFBQUEsV0FBVyxFQUFFO0FBREYsS0FBYjtBQUdEOztBQUVEeUMsRUFBQUEsaUJBQWlCLEdBQUc7QUFDbEIsU0FBS0MsVUFBTDtBQUNBLFNBQUt0QixhQUFMO0FBQ0Q7O0FBRWUsUUFBVnNCLFVBQVUsR0FBRztBQUNqQixXQUFPLE1BQU0sS0FBS25GLEtBQUwsQ0FBVzBELFNBQVgsRUFBYjtBQUNEOztBQUVrQixRQUFiRyxhQUFhLEdBQUc7QUFDcEIsV0FBTyxNQUFNLEtBQUs3RCxLQUFMLENBQVc2RCxhQUFYLEVBQWI7QUFDRDs7QUFtQkR1QixFQUFBQSxXQUFXLEdBQUc7QUFDWixVQUFNO0FBQUU5RSxNQUFBQSxRQUFGO0FBQVk2QyxNQUFBQSxLQUFaO0FBQW1CYyxNQUFBQTtBQUFuQixRQUEwQyxLQUFLakUsS0FBckQ7QUFDQSxVQUFNcUYsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLENBQXVCbkMsS0FBdkIsQ0FBdkI7QUFDQSxVQUFNb0MsVUFBVSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVXRDLEtBQUssQ0FBQ3VDLE1BQU4sR0FBZW5CLFNBQXpCLENBQW5COztBQUVBLFFBQUksS0FBS3JCLEtBQUwsQ0FBV1QsV0FBZixFQUE0QjtBQUMxQiwwQkFBTyx3REFBQyw4REFBRDtBQUFlLGdCQUFRLEVBQUVuQztBQUF6QixRQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsMEJBQ0UseURBQUMsc0RBQUQ7QUFBZSxlQUFPLEVBQUMsSUFBdkI7QUFBQSxnQ0FDRSx3REFBQyxtREFBRDtBQUNFLGVBQUssRUFBRStFLGNBRFQ7QUFFRSxzQkFBWSxFQUFFLENBQUNYLElBQUQsRUFBT0MsSUFBUCxLQUFnQixLQUFLZ0IsWUFBTCxDQUFrQmpCLElBQWxCLEVBQXdCQyxJQUF4QixDQUZoQztBQUdFLHNCQUFZLEVBQUdBLElBQUQsSUFBVSxLQUFLM0UsS0FBTCxDQUFXMkQsVUFBWCxDQUFzQmdCLElBQUksQ0FBQ2lCLE1BQTNCO0FBSDFCLFVBREYsZUFNRSx3REFBQyx3REFBRDtBQUFpQixpQkFBTyxFQUFDLFVBQXpCO0FBQUEsaUNBQ0Usd0RBQUMsbURBQUQ7QUFDRSxzQkFBVSxFQUFFM0Isa0JBRGQ7QUFFRSx1QkFBVyxFQUFFLEtBQUtqRSxLQUFMLENBQVdvRSxVQUYxQjtBQUdFLHlCQUFhLEVBQUVtQixVQUhqQjtBQUlFLDhCQUFrQixFQUFFO0FBSnRCO0FBREYsVUFORjtBQUFBLFFBREY7QUFpQkQ7QUFDRjs7QUFFRHpGLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBRW9FLE1BQUFBLFFBQUY7QUFBWUksTUFBQUE7QUFBWixRQUEyQixLQUFLdEUsS0FBdEM7QUFDQSxVQUFNaUYsdUJBQXVCLEdBQUcsS0FBS0EsdUJBQXJDO0FBRUEsd0JBQ0Usd0RBQUMscUVBQUQ7QUFBTSxjQUFRLEVBQUVmLFFBQWhCO0FBQUEsNkJBQ0Usd0RBQUMsOEVBQUQ7QUFBZSxpQkFBUyxFQUFFLENBQUNJLFVBQTNCO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRSx3REFBQyx1REFBRDtBQUFnQix5QkFBYSxFQUFFLEtBQUs5QixhQUFwQztBQUFtRCx1QkFBVyxFQUFFLEtBQUtVLEtBQUwsQ0FBV1Q7QUFBM0UsWUFERixFQUVHd0MsdUJBQXVCLGlCQUN0QjtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBa0MsbUNBQXVCLEVBQUU7QUFBRVksY0FBQUEsTUFBTSxFQUFFWjtBQUFWO0FBQTNELFlBSEosRUFLR1gsVUFBVSxJQUFJLEtBQUtjLFdBQUwsRUFMakI7QUFBQTtBQURGO0FBREYsTUFERjtBQWFEOztBQTFGNEQ7QUE2Ri9ELGlFQUFleEYsU0FBUyxDQUFDNEUsYUFBRCxDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQVNBLE1BQU1mLFVBQXFCLEdBQUl6RCxLQUFELElBQVc7QUFDdkMsUUFBTTtBQUFFbUQsSUFBQUEsS0FBRjtBQUFTa0QsSUFBQUEsS0FBVDtBQUFnQlYsSUFBQUEsWUFBaEI7QUFBOEJXLElBQUFBO0FBQTlCLE1BQStDdEcsS0FBckQ7QUFDQSxRQUFNLENBQUN1RyxZQUFELEVBQWVDLGVBQWYsSUFBa0NULCtDQUFRLENBQWlCLElBQWpCLENBQWhEO0FBQ0EsUUFBTSxDQUFDVSxXQUFELEVBQWNDLGNBQWQsSUFBZ0NYLCtDQUFRLENBQVMsRUFBVCxDQUE5QztBQUNBLFFBQU0sQ0FBQ1ksWUFBRCxFQUFlQyxlQUFmLElBQWtDYiwrQ0FBUSxDQUE0QixFQUE1QixDQUFoRDtBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZWUsWUFBZixHQUE4QjtBQUM1QixVQUFJO0FBQ0YsWUFBSTVFLG1FQUFBLENBQXlCQywwRUFBekIsQ0FBSixFQUFtRTtBQUNqRSxjQUFJUSxPQUFPLEdBQUcsTUFBTXlELG9GQUFnQixDQUFDRSxLQUFELENBQXBDO0FBQ0FLLFVBQUFBLGNBQWMsQ0FBQ2hFLE9BQUQsQ0FBZDtBQUNEOztBQUVELFlBQUlULG1FQUFBLENBQXlCQyxpRkFBekIsQ0FBSixFQUEwRTtBQUN4RSxnQkFBTStFLFlBQVksR0FBRyxNQUFNZixxRkFBaUIsQ0FBQ0csS0FBRCxDQUE1QztBQUNBTyxVQUFBQSxlQUFlLENBQUNLLFlBQUQsQ0FBZjtBQUNEO0FBQ0YsT0FWRCxDQVVFLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxRQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyx1QkFBZDtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSW5GLGtGQUFBLEVBQUosRUFBK0M7QUFDN0M0RSxNQUFBQSxZQUFZO0FBQ2I7QUFDRixHQW5CUSxFQW1CTixDQUFDUixLQUFELENBbkJNLENBQVQ7QUFxQkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLGVBQVMsRUFBQywwQkFBakI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUEsZ0RBQ0UsZ0VBREYsZ0NBRUU7QUFBQTtBQUFBLFlBRkYsZ0NBR0U7QUFBQTtBQUFBLFlBSEYsZ0NBSUU7QUFBQTtBQUFBLFlBSkYsZ0NBS0U7QUFBQTtBQUFBLFlBTEYsZ0NBTUU7QUFBQTtBQUFBLFlBTkYsZ0JBT0U7QUFBSSxpQkFBSyxFQUFFO0FBQUU5RixjQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFYLFlBUEY7QUFBQTtBQURGLFFBREYsZUFZRTtBQUFBLGtCQUNHNEMsS0FBSyxDQUFDM0MsR0FBTixDQUFVLENBQUNtRSxJQUFELEVBQU9sRSxLQUFQLEtBQWlCO0FBQzFCLDhCQUNFO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLHFCQUFkO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLHNCQUFmO0FBQXNDLG1CQUFHLEVBQUVrRSxJQUFJLENBQUMyQyxTQUFoRDtBQUEyRCxtQkFBRyxFQUFDO0FBQS9EO0FBREYsY0FERixlQUlFO0FBQUksdUJBQVMsRUFBQyxhQUFkO0FBQUEscUNBQ0U7QUFBTSx5QkFBUyxFQUFDLFVBQWhCO0FBQTJCLHFCQUFLLEVBQUUzQyxJQUFJLENBQUM0QyxLQUF2QztBQUFBLDBCQUNHNUMsSUFBSSxDQUFDNEM7QUFEUjtBQURGLGNBSkYsZUFVRTtBQUFJLHVCQUFTLEVBQUMsYUFBZDtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBQyxVQUFoQjtBQUEyQixxQkFBSyxFQUFFNUMsSUFBSSxDQUFDMUUsS0FBdkM7QUFBQSwwQkFDRzBFLElBQUksQ0FBQzFFO0FBRFI7QUFERixjQVZGLGVBZUU7QUFBSSx1QkFBUyxFQUFDLGFBQWQ7QUFBQSxxQ0FDRTtBQUFNLHlCQUFTLEVBQUMsVUFBaEI7QUFBMkIscUJBQUssRUFBRTBFLElBQUksQ0FBQ3pFLElBQXZDO0FBQUEsMEJBQ0d5RSxJQUFJLENBQUN6RTtBQURSO0FBREYsY0FmRixlQW9CRTtBQUFJLHVCQUFTLEVBQUMsU0FBZDtBQUFBLHdCQUF5QnlFLElBQUksQ0FBQzZDO0FBQTlCLGNBcEJGLGVBc0JFO0FBQUksdUJBQVMsRUFBQyxTQUFkO0FBQUEsd0JBQ0d2RixrRkFBQSxrQkFDQyx1REFBQyx5RkFBRDtBQUNFLHNCQUFNLEVBQUUwQyxJQUFJLENBQUNpQixNQURmO0FBRUUscUJBQUssRUFBRVMsS0FGVDtBQUdFLDJCQUFXLEVBQUUxQixJQUFJLENBQUNELElBSHBCO0FBSUUsbUNBQW1CLEVBQUcrQyxPQUFELElBQWE5QixZQUFZLENBQUM4QixPQUFELEVBQVU5QyxJQUFWLENBSmhEO0FBS0UsMkJBQVcsRUFBRThCLFdBTGY7QUFNRSw0QkFBWSxFQUFFRSxZQU5oQjtBQU9FLHdCQUFRLEVBQUUsQ0FBQzFFLDZFQUFBLENBQW1DQyw2RUFBbkMsRUFBMkV5QyxJQUEzRTtBQVBiLGdCQURELGdCQVdDLHVEQUFDLCtEQUFEO0FBQ0UsOEJBQVcsTUFEYjtBQUVFLHFCQUFLLEVBQUVBLElBQUksQ0FBQ0QsSUFGZDtBQUdFLHdCQUFRLEVBQUUsQ0FBQ3pDLDZFQUFBLENBQW1DQyw2RUFBbkMsRUFBMkV5QyxJQUEzRSxDQUhiO0FBSUUsd0JBQVEsRUFBRzhDLE9BQUQsSUFBYTlCLFlBQVksQ0FBQzhCLE9BQUQsRUFBVTlDLElBQVY7QUFKckM7QUFaSixjQXRCRixFQTJDRzFDLDZFQUFBLENBQW1DQyx5RUFBbkMsRUFBdUV5QyxJQUF2RSxrQkFDQztBQUFBLHFDQUNFLHVEQUFDLCtDQUFEO0FBQ0Usb0JBQUksRUFBQyxJQURQO0FBRUUsdUJBQU8sRUFBQyxhQUZWO0FBR0UsdUJBQU8sRUFBRSxNQUFNO0FBQ2I2QixrQkFBQUEsZUFBZSxDQUFDN0IsSUFBRCxDQUFmO0FBQ0QsaUJBTEg7QUFNRSxvQkFBSSxFQUFDLE9BTlA7QUFPRSw4QkFBVztBQVBiO0FBREYsY0E1Q0o7QUFBQSxhQUFVLEdBQUVBLElBQUksQ0FBQ2lCLE1BQU8sSUFBR25GLEtBQU0sRUFBakMsQ0FERjtBQTJERCxTQTVEQTtBQURILFFBWkY7QUFBQSxNQURGLEVBNkVHb0gsT0FBTyxDQUFDdEIsWUFBRCxDQUFQLGlCQUNDLHVEQUFDLHFEQUFEO0FBQ0UsVUFBSSxFQUFHLHdDQUF1Q0EsWUFBeEMsYUFBd0NBLFlBQXhDLHVCQUF3Q0EsWUFBWSxDQUFFZ0IsS0FBTSxHQURwRTtBQUVFLGlCQUFXLEVBQUMsUUFGZDtBQUdFLFdBQUssRUFBQyxRQUhSO0FBSUUsZUFBUyxFQUFFLE1BQU07QUFDZmYsUUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNELE9BTkg7QUFPRSxZQUFNLEVBQUUsSUFQVjtBQVFFLGVBQVMsRUFBRSxNQUFNO0FBQ2YsWUFBSSxDQUFDRCxZQUFMLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBQ0RELFFBQUFBLFlBQVksQ0FBQ0MsWUFBRCxDQUFaO0FBQ0FDLFFBQUFBLGVBQWUsQ0FBQyxJQUFELENBQWY7QUFDRDtBQWRILE1BOUVKO0FBQUEsSUFERjtBQWtHRCxDQTdIRDs7QUErSEEsaUVBQWUvQyxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBRUE7QUFDQTtBQUVPLFNBQVNDLFNBQVQsR0FBd0M7QUFDN0MsU0FBTyxNQUFPdUUsUUFBUCxJQUFvQjtBQUN6QixVQUFNOUUsS0FBSyxHQUFHLE1BQU0yRSwrREFBYSxHQUFHSSxHQUFoQixDQUFvQixnQkFBcEIsRUFBc0NGLHFGQUF1QixFQUE3RCxDQUFwQjtBQUNBQyxJQUFBQSxRQUFRLENBQUNGLHNEQUFXLENBQUM1RSxLQUFELENBQVosQ0FBUjtBQUNELEdBSEQ7QUFJRDtBQUVNLFNBQVNTLFVBQVQsQ0FBb0JlLElBQXBCLEVBQXNEO0FBQzNELFNBQU8sTUFBT3NELFFBQVAsSUFBb0I7QUFDekIsVUFBTUgsK0RBQWEsR0FBR0ssS0FBaEIsQ0FBdUIsa0JBQWlCeEQsSUFBSSxDQUFDaUIsTUFBTyxFQUFwRCxFQUF1RDtBQUFFbEIsTUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNEO0FBQWIsS0FBdkQsQ0FBTjtBQUNBdUQsSUFBQUEsUUFBUSxDQUFDdkUsU0FBUyxFQUFWLENBQVI7QUFDRCxHQUhEO0FBSUQ7QUFFTSxTQUFTQyxVQUFULENBQW9CaUMsTUFBcEIsRUFBdUQ7QUFDNUQsU0FBTyxNQUFPcUMsUUFBUCxJQUFvQjtBQUN6QixVQUFNSCwrREFBYSxHQUFHTSxNQUFoQixDQUF3QixrQkFBaUJ4QyxNQUFPLEVBQWhELENBQU47QUFDQXFDLElBQUFBLFFBQVEsQ0FBQ3ZFLFNBQVMsRUFBVixDQUFSO0FBQ0QsR0FIRDtBQUlEOzs7Ozs7Ozs7Ozs7O0FDdkJNLE1BQU1LLFFBQVEsR0FBSWIsS0FBRCxJQUF1QjtBQUM3QyxRQUFNNUIsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVzJCLEtBQUssQ0FBQzdCLFdBQWpCLEVBQThCLEdBQTlCLENBQWQ7QUFFQSxTQUFPNkIsS0FBSyxDQUFDQyxLQUFOLENBQVkxQixNQUFaLENBQW9Ca0QsSUFBRCxJQUFVO0FBQ2xDLFdBQU9yRCxLQUFLLENBQUNLLElBQU4sQ0FBV2dELElBQUksQ0FBQzRDLEtBQWhCLEtBQTBCakcsS0FBSyxDQUFDSyxJQUFOLENBQVdnRCxJQUFJLENBQUMxRSxLQUFoQixDQUExQixJQUFvRHFCLEtBQUssQ0FBQ0ssSUFBTixDQUFXZ0QsSUFBSSxDQUFDekUsSUFBaEIsQ0FBM0Q7QUFDRCxHQUZNLENBQVA7QUFHRCxDQU5NO0FBUUEsTUFBTTJCLG1CQUFtQixHQUFJcUIsS0FBRCxJQUF1QkEsS0FBSyxDQUFDN0IsV0FBekQ7QUFDQSxNQUFNMkMsa0JBQWtCLEdBQUlkLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ2tCLFVBQXhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvaW52aXRlcy9JbnZpdGVlUm93LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9pbnZpdGVzL0ludml0ZWVzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ludml0ZXMvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3VzZXJzL1VzZXJzQWN0aW9uQmFyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy91c2Vycy9Vc2Vyc0xpc3RQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy91c2Vycy9Vc2Vyc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy91c2Vycy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3VzZXJzL3N0YXRlL3NlbGVjdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgSW52aXRlZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyByZXZva2VJbnZpdGUgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBDbGlwYm9hcmRCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgcmV2b2tlSW52aXRlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge1xuICBpbnZpdGVlOiBJbnZpdGVlO1xufVxuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmNsYXNzIEludml0ZWVSb3cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGludml0ZWUsIHJldm9rZUludml0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+e2ludml0ZWUuZW1haWx9PC90ZD5cbiAgICAgICAgPHRkPntpbnZpdGVlLm5hbWV9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8Q2xpcGJvYXJkQnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIiBnZXRUZXh0PXsoKSA9PiBpbnZpdGVlLnVybH0+XG4gICAgICAgICAgICBDb3B5IEludml0ZVxuICAgICAgICAgIDwvQ2xpcGJvYXJkQnV0dG9uPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBzaXplPVwic21cIiBpY29uPVwidGltZXNcIiBvbkNsaWNrPXsoKSA9PiByZXZva2VJbnZpdGUoaW52aXRlZS5jb2RlKX0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoSW52aXRlZVJvdyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEludml0ZWUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IEludml0ZWVSb3cgZnJvbSAnLi9JbnZpdGVlUm93JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGludml0ZWVzOiBJbnZpdGVlW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludml0ZWVzVGFibGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGludml0ZWVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzM0cHgnIH19IC8+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtpbnZpdGVlcy5tYXAoKGludml0ZWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEludml0ZWVSb3cga2V5PXtgJHtpbnZpdGVlLmlkfS0ke2luZGV4fWB9IGludml0ZWU9e2ludml0ZWV9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdEFsbCwgc2VsZWN0QnlJZCwgc2VsZWN0VG90YWwgfSA9IHNlbGVjdG9ycztcblxuY29uc3Qgc2VsZWN0UXVlcnkgPSAoXzogYW55LCBxdWVyeTogc3RyaW5nKSA9PiBxdWVyeTtcbmV4cG9ydCBjb25zdCBzZWxlY3RJbnZpdGVzTWF0Y2hpbmdRdWVyeSA9IGNyZWF0ZVNlbGVjdG9yKFtzZWxlY3RBbGwsIHNlbGVjdFF1ZXJ5XSwgKGludml0ZXMsIHNlYXJjaFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzZWFyY2hRdWVyeSwgJ2knKTtcbiAgY29uc3QgbWF0Y2hlcyA9IGludml0ZXMuZmlsdGVyKChpbnZpdGUpID0+IHJlZ2V4LnRlc3QoaW52aXRlLm5hbWUpIHx8IHJlZ2V4LnRlc3QoaW52aXRlLmVtYWlsKSk7XG4gIHJldHVybiBtYXRjaGVzO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRVc2Vyc1NlYXJjaFF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBzZWxlY3RUb3RhbCB9IGZyb20gJy4uL2ludml0ZXMvc3RhdGUvc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldFVzZXJzU2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbkdyb3VwLCBMaW5rQnV0dG9uLCBGaWx0ZXJJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgc2V0VXNlcnNTZWFyY2hRdWVyeTogdHlwZW9mIHNldFVzZXJzU2VhcmNoUXVlcnk7XG4gIG9uU2hvd0ludml0ZXM6ICgpID0+IHZvaWQ7XG4gIHBlbmRpbmdJbnZpdGVzQ291bnQ6IG51bWJlcjtcbiAgY2FuSW52aXRlOiBib29sZWFuO1xuICBzaG93SW52aXRlczogYm9vbGVhbjtcbiAgZXh0ZXJuYWxVc2VyTW5nTGlua1VybDogc3RyaW5nO1xuICBleHRlcm5hbFVzZXJNbmdMaW5rTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlcnNBY3Rpb25CYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW5JbnZpdGUsXG4gICAgICBleHRlcm5hbFVzZXJNbmdMaW5rTmFtZSxcbiAgICAgIGV4dGVybmFsVXNlck1uZ0xpbmtVcmwsXG4gICAgICBzZWFyY2hRdWVyeSxcbiAgICAgIHBlbmRpbmdJbnZpdGVzQ291bnQsXG4gICAgICBzZXRVc2Vyc1NlYXJjaFF1ZXJ5LFxuICAgICAgb25TaG93SW52aXRlcyxcbiAgICAgIHNob3dJbnZpdGVzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICB7IGxhYmVsOiAnVXNlcnMnLCB2YWx1ZTogJ3VzZXJzJyB9LFxuICAgICAgeyBsYWJlbDogYFBlbmRpbmcgSW52aXRlcyAoJHtwZW5kaW5nSW52aXRlc0NvdW50fSlgLCB2YWx1ZTogJ2ludml0ZXMnIH0sXG4gICAgXTtcbiAgICBjb25zdCBjYW5BZGRUb09yZyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uVXNlcnNDcmVhdGUsIGNhbkludml0ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICA8RmlsdGVySW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRVc2Vyc1NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdXNlciBieSBsb2dpbiwgZW1haWwgb3IgbmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwZW5kaW5nSW52aXRlc0NvdW50ID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMXJlbScgfX0+XG4gICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17c2hvd0ludml0ZXMgPyAnaW52aXRlcycgOiAndXNlcnMnfSBvcHRpb25zPXtvcHRpb25zfSBvbkNoYW5nZT17b25TaG93SW52aXRlc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2NhbkFkZFRvT3JnICYmIDxMaW5rQnV0dG9uIGhyZWY9XCJvcmcvdXNlcnMvaW52aXRlXCI+SW52aXRlPC9MaW5rQnV0dG9uPn1cbiAgICAgICAge2V4dGVybmFsVXNlck1uZ0xpbmtVcmwgJiYgKFxuICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e2V4dGVybmFsVXNlck1uZ0xpbmtVcmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICB7ZXh0ZXJuYWxVc2VyTW5nTGlua05hbWV9XG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IGFueSkge1xuICByZXR1cm4ge1xuICAgIHNlYXJjaFF1ZXJ5OiBnZXRVc2Vyc1NlYXJjaFF1ZXJ5KHN0YXRlLnVzZXJzKSxcbiAgICBwZW5kaW5nSW52aXRlc0NvdW50OiBzZWxlY3RUb3RhbChzdGF0ZS5pbnZpdGVzKSxcbiAgICBleHRlcm5hbFVzZXJNbmdMaW5rTmFtZTogc3RhdGUudXNlcnMuZXh0ZXJuYWxVc2VyTW5nTGlua05hbWUsXG4gICAgZXh0ZXJuYWxVc2VyTW5nTGlua1VybDogc3RhdGUudXNlcnMuZXh0ZXJuYWxVc2VyTW5nTGlua1VybCxcbiAgICBjYW5JbnZpdGU6IHN0YXRlLnVzZXJzLmNhbkludml0ZSxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBzZXRVc2Vyc1NlYXJjaFF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlcnNBY3Rpb25CYXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHJlbmRlck1hcmtkb3duIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIFBhZ2luYXRpb24sIFZlcnRpY2FsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCBVc2Vyc0FjdGlvbkJhciBmcm9tICcuL1VzZXJzQWN0aW9uQmFyJztcbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4vVXNlcnNUYWJsZSc7XG5pbXBvcnQgSW52aXRlZXNUYWJsZSBmcm9tICcuLi9pbnZpdGVzL0ludml0ZWVzVGFibGUnO1xuaW1wb3J0IHsgT3JnVXNlciwgT3JnUm9sZSwgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBsb2FkVXNlcnMsIHJlbW92ZVVzZXIsIHVwZGF0ZVVzZXIgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZmV0Y2hJbnZpdGVlcyB9IGZyb20gJy4uL2ludml0ZXMvc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBnZXRVc2VycywgZ2V0VXNlcnNTZWFyY2hRdWVyeSwgZ2V0VXNlcnNTZWFyY2hQYWdlIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2V0VXNlcnNTZWFyY2hRdWVyeSwgc2V0VXNlcnNTZWFyY2hQYWdlIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBzZWxlY3RJbnZpdGVzTWF0Y2hpbmdRdWVyeSB9IGZyb20gJy4uL2ludml0ZXMvc3RhdGUvc2VsZWN0b3JzJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gZ2V0VXNlcnNTZWFyY2hRdWVyeShzdGF0ZS51c2Vycyk7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAndXNlcnMnKSxcbiAgICB1c2VyczogZ2V0VXNlcnMoc3RhdGUudXNlcnMpLFxuICAgIHNlYXJjaFF1ZXJ5OiBnZXRVc2Vyc1NlYXJjaFF1ZXJ5KHN0YXRlLnVzZXJzKSxcbiAgICBzZWFyY2hQYWdlOiBnZXRVc2Vyc1NlYXJjaFBhZ2Uoc3RhdGUudXNlcnMpLFxuICAgIGludml0ZWVzOiBzZWxlY3RJbnZpdGVzTWF0Y2hpbmdRdWVyeShzdGF0ZS5pbnZpdGVzLCBzZWFyY2hRdWVyeSksXG4gICAgZXh0ZXJuYWxVc2VyTW5nSW5mbzogc3RhdGUudXNlcnMuZXh0ZXJuYWxVc2VyTW5nSW5mbyxcbiAgICBoYXNGZXRjaGVkOiBzdGF0ZS51c2Vycy5oYXNGZXRjaGVkLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRVc2VycyxcbiAgZmV0Y2hJbnZpdGVlcyxcbiAgc2V0VXNlcnNTZWFyY2hRdWVyeSxcbiAgc2V0VXNlcnNTZWFyY2hQYWdlLFxuICB1cGRhdGVVc2VyLFxuICByZW1vdmVVc2VyLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBzaG93SW52aXRlczogYm9vbGVhbjtcbn1cblxuY29uc3QgcGFnZUxpbWl0ID0gMzA7XG5cbmV4cG9ydCBjbGFzcyBVc2Vyc0xpc3RQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgZGVjbGFyZSBleHRlcm5hbFVzZXJNbmdJbmZvSHRtbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmV4dGVybmFsVXNlck1uZ0luZm8pIHtcbiAgICAgIHRoaXMuZXh0ZXJuYWxVc2VyTW5nSW5mb0h0bWwgPSByZW5kZXJNYXJrZG93bih0aGlzLnByb3BzLmV4dGVybmFsVXNlck1uZ0luZm8pO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93SW52aXRlczogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hVc2VycygpO1xuICAgIHRoaXMuZmV0Y2hJbnZpdGVlcygpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hVc2VycygpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcm9wcy5sb2FkVXNlcnMoKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoSW52aXRlZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJvcHMuZmV0Y2hJbnZpdGVlcygpO1xuICB9XG5cbiAgb25Sb2xlQ2hhbmdlID0gKHJvbGU6IE9yZ1JvbGUsIHVzZXI6IE9yZ1VzZXIpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IHsgLi4udXNlciwgcm9sZTogcm9sZSB9O1xuXG4gICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyKHVwZGF0ZWRVc2VyKTtcbiAgfTtcblxuICBvblNob3dJbnZpdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIHNob3dJbnZpdGVzOiAhcHJldlN0YXRlLnNob3dJbnZpdGVzLFxuICAgIH0pKTtcbiAgfTtcblxuICBnZXRQYWdpbmF0ZWRVc2VycyA9ICh1c2VyczogT3JnVXNlcltdKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gKHRoaXMucHJvcHMuc2VhcmNoUGFnZSAtIDEpICogcGFnZUxpbWl0O1xuICAgIHJldHVybiB1c2Vycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHBhZ2VMaW1pdCk7XG4gIH07XG5cbiAgcmVuZGVyVGFibGUoKSB7XG4gICAgY29uc3QgeyBpbnZpdGVlcywgdXNlcnMsIHNldFVzZXJzU2VhcmNoUGFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwYWdpbmF0ZWRVc2VycyA9IHRoaXMuZ2V0UGFnaW5hdGVkVXNlcnModXNlcnMpO1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodXNlcnMubGVuZ3RoIC8gcGFnZUxpbWl0KTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNob3dJbnZpdGVzKSB7XG4gICAgICByZXR1cm4gPEludml0ZWVzVGFibGUgaW52aXRlZXM9e2ludml0ZWVzfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cIm1kXCI+XG4gICAgICAgICAgPFVzZXJzVGFibGVcbiAgICAgICAgICAgIHVzZXJzPXtwYWdpbmF0ZWRVc2Vyc31cbiAgICAgICAgICAgIG9uUm9sZUNoYW5nZT17KHJvbGUsIHVzZXIpID0+IHRoaXMub25Sb2xlQ2hhbmdlKHJvbGUsIHVzZXIpfVxuICAgICAgICAgICAgb25SZW1vdmVVc2VyPXsodXNlcikgPT4gdGhpcy5wcm9wcy5yZW1vdmVVc2VyKHVzZXIudXNlcklkKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICBvbk5hdmlnYXRlPXtzZXRVc2Vyc1NlYXJjaFBhZ2V9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnByb3BzLnNlYXJjaFBhZ2V9XG4gICAgICAgICAgICAgIG51bWJlck9mUGFnZXM9e3RvdGFsUGFnZXN9XG4gICAgICAgICAgICAgIGhpZGVXaGVuU2luZ2xlUGFnZT17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIGhhc0ZldGNoZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXh0ZXJuYWxVc2VyTW5nSW5mb0h0bWwgPSB0aGlzLmV4dGVybmFsVXNlck1uZ0luZm9IdG1sO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17IWhhc0ZldGNoZWR9PlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VXNlcnNBY3Rpb25CYXIgb25TaG93SW52aXRlcz17dGhpcy5vblNob3dJbnZpdGVzfSBzaG93SW52aXRlcz17dGhpcy5zdGF0ZS5zaG93SW52aXRlc30gLz5cbiAgICAgICAgICAgIHtleHRlcm5hbFVzZXJNbmdJbmZvSHRtbCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZmFuYS1pbmZvLWJveFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZXh0ZXJuYWxVc2VyTW5nSW5mb0h0bWwgfX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aGFzRmV0Y2hlZCAmJiB0aGlzLnJlbmRlclRhYmxlKCl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihVc2Vyc0xpc3RQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIE9yZ1VzZXIsIFJvbGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgT3JnUm9sZVBpY2tlciB9IGZyb20gJy4uL2FkbWluL09yZ1JvbGVQaWNrZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBPcmdSb2xlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBmZXRjaEJ1aWx0aW5Sb2xlcywgZmV0Y2hSb2xlT3B0aW9ucyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9hcGknO1xuaW1wb3J0IHsgVXNlclJvbGVQaWNrZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvVXNlclJvbGVQaWNrZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcnM6IE9yZ1VzZXJbXTtcbiAgb3JnSWQ/OiBudW1iZXI7XG4gIG9uUm9sZUNoYW5nZTogKHJvbGU6IE9yZ1JvbGUsIHVzZXI6IE9yZ1VzZXIpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlVXNlcjogKHVzZXI6IE9yZ1VzZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFVzZXJzVGFibGU6IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHVzZXJzLCBvcmdJZCwgb25Sb2xlQ2hhbmdlLCBvblJlbW92ZVVzZXIgfSA9IHByb3BzO1xuICBjb25zdCBbdXNlclRvUmVtb3ZlLCBzZXRVc2VyVG9SZW1vdmVdID0gdXNlU3RhdGU8T3JnVXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcm9sZU9wdGlvbnMsIHNldFJvbGVPcHRpb25zXSA9IHVzZVN0YXRlPFJvbGVbXT4oW10pO1xuICBjb25zdCBbYnVpbHRpblJvbGVzLCBzZXRCdWlsdGluUm9sZXNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBSb2xlW10gfT4oe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hPcHRpb25zKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblJvbGVzTGlzdCkpIHtcbiAgICAgICAgICBsZXQgb3B0aW9ucyA9IGF3YWl0IGZldGNoUm9sZU9wdGlvbnMob3JnSWQpO1xuICAgICAgICAgIHNldFJvbGVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvbkJ1aWx0aW5Sb2xlc0xpc3QpKSB7XG4gICAgICAgICAgY29uc3QgYnVpbHRJblJvbGVzID0gYXdhaXQgZmV0Y2hCdWlsdGluUm9sZXMob3JnSWQpO1xuICAgICAgICAgIHNldEJ1aWx0aW5Sb2xlcyhidWlsdEluUm9sZXMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgb3B0aW9ucycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGZldGNoT3B0aW9ucygpO1xuICAgIH1cbiAgfSwgW29yZ0lkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICA8dGg+TG9naW48L3RoPlxuICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5TZWVuPC90aD5cbiAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzM0cHgnIH19IC8+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtgJHt1c2VyLnVzZXJJZH0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVfX2F2YXRhclwiIHNyYz17dXNlci5hdmF0YXJVcmx9IGFsdD1cIlVzZXIgYXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5sb2dpbn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmxvZ2lufVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWF4LXdpZHRoLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgdGl0bGU9e3VzZXIuZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC0xXCI+e3VzZXIubGFzdFNlZW5BdEFnZX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLThcIj5cbiAgICAgICAgICAgICAgICAgIHtjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJSb2xlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkPXt1c2VyLnVzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICBvcmdJZD17b3JnSWR9XG4gICAgICAgICAgICAgICAgICAgICAgYnVpbHRJblJvbGU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJ1aWx0aW5Sb2xlQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICBidWlsdEluUm9sZXM9e2J1aWx0aW5Sb2xlc31cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JvbGVVcGRhdGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPE9yZ1JvbGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUm9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JvbGVVcGRhdGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAge2NvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JlbW92ZSwgdXNlcikgJiYgKFxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJUb1JlbW92ZSh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSB1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAge0Jvb2xlYW4odXNlclRvUmVtb3ZlKSAmJiAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB1c2VyICR7dXNlclRvUmVtb3ZlPy5sb2dpbn0/YH1cbiAgICAgICAgICBjb25maXJtVGV4dD1cIkRlbGV0ZVwiXG4gICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0VXNlclRvUmVtb3ZlKG51bGwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF1c2VyVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25SZW1vdmVVc2VyKHVzZXJUb1JlbW92ZSk7XG4gICAgICAgICAgICBzZXRVc2VyVG9SZW1vdmUobnVsbCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1RhYmxlO1xuIiwiaW1wb3J0IHsgVGh1bmtSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBPcmdVc2VyIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IHVzZXJzTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVzZXJzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9vcmcvdXNlcnMnLCBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpKTtcbiAgICBkaXNwYXRjaCh1c2Vyc0xvYWRlZCh1c2VycykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VyOiBPcmdVc2VyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBhdGNoKGAvYXBpL29yZy91c2Vycy8ke3VzZXIudXNlcklkfWAsIHsgcm9sZTogdXNlci5yb2xlIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRVc2VycygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVzZXIodXNlcklkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL29yZy91c2Vycy8ke3VzZXJJZH1gKTtcbiAgICBkaXNwYXRjaChsb2FkVXNlcnMoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBVc2Vyc1N0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gKHN0YXRlOiBVc2Vyc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5zZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUudXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodXNlci5sb2dpbikgfHwgcmVnZXgudGVzdCh1c2VyLmVtYWlsKSB8fCByZWdleC50ZXN0KHVzZXIubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJzU2VhcmNoUXVlcnkgPSAoc3RhdGU6IFVzZXJzU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldFVzZXJzU2VhcmNoUGFnZSA9IChzdGF0ZTogVXNlcnNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwicmV2b2tlSW52aXRlIiwiQnV0dG9uIiwiQ2xpcGJvYXJkQnV0dG9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiSW52aXRlZVJvdyIsInJlbmRlciIsImludml0ZWUiLCJwcm9wcyIsImVtYWlsIiwibmFtZSIsInVybCIsImNvZGUiLCJJbnZpdGVlc1RhYmxlIiwiaW52aXRlZXMiLCJ3aWR0aCIsIm1hcCIsImluZGV4IiwiaWQiLCJjcmVhdGVTZWxlY3RvciIsInNlbGVjdG9ycyIsInNlbGVjdEFsbCIsInNlbGVjdEJ5SWQiLCJzZWxlY3RUb3RhbCIsInNlbGVjdFF1ZXJ5IiwiXyIsInF1ZXJ5Iiwic2VsZWN0SW52aXRlc01hdGNoaW5nUXVlcnkiLCJpbnZpdGVzIiwic2VhcmNoUXVlcnkiLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoZXMiLCJmaWx0ZXIiLCJpbnZpdGUiLCJ0ZXN0Iiwic2V0VXNlcnNTZWFyY2hRdWVyeSIsImdldFVzZXJzU2VhcmNoUXVlcnkiLCJSYWRpb0J1dHRvbkdyb3VwIiwiTGlua0J1dHRvbiIsIkZpbHRlcklucHV0IiwiY29udGV4dFNydiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJVc2Vyc0FjdGlvbkJhciIsImNhbkludml0ZSIsImV4dGVybmFsVXNlck1uZ0xpbmtOYW1lIiwiZXh0ZXJuYWxVc2VyTW5nTGlua1VybCIsInBlbmRpbmdJbnZpdGVzQ291bnQiLCJvblNob3dJbnZpdGVzIiwic2hvd0ludml0ZXMiLCJvcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImNhbkFkZFRvT3JnIiwiaGFzQWNjZXNzIiwiVXNlcnNDcmVhdGUiLCJtYXJnaW5MZWZ0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VycyIsInJlbmRlck1hcmtkb3duIiwiSG9yaXpvbnRhbEdyb3VwIiwiUGFnaW5hdGlvbiIsIlZlcnRpY2FsR3JvdXAiLCJQYWdlIiwiVXNlcnNUYWJsZSIsImxvYWRVc2VycyIsInJlbW92ZVVzZXIiLCJ1cGRhdGVVc2VyIiwiZmV0Y2hJbnZpdGVlcyIsImdldE5hdk1vZGVsIiwiZ2V0VXNlcnMiLCJnZXRVc2Vyc1NlYXJjaFBhZ2UiLCJzZXRVc2Vyc1NlYXJjaFBhZ2UiLCJuYXZNb2RlbCIsIm5hdkluZGV4Iiwic2VhcmNoUGFnZSIsImV4dGVybmFsVXNlck1uZ0luZm8iLCJoYXNGZXRjaGVkIiwicGFnZUxpbWl0IiwiVXNlcnNMaXN0UGFnZSIsImNvbnN0cnVjdG9yIiwicm9sZSIsInVzZXIiLCJ1cGRhdGVkVXNlciIsInNldFN0YXRlIiwicHJldlN0YXRlIiwib2Zmc2V0Iiwic2xpY2UiLCJleHRlcm5hbFVzZXJNbmdJbmZvSHRtbCIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hVc2VycyIsInJlbmRlclRhYmxlIiwicGFnaW5hdGVkVXNlcnMiLCJnZXRQYWdpbmF0ZWRVc2VycyIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm9uUm9sZUNoYW5nZSIsInVzZXJJZCIsIl9faHRtbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiT3JnUm9sZVBpY2tlciIsIkNvbmZpcm1Nb2RhbCIsImZldGNoQnVpbHRpblJvbGVzIiwiZmV0Y2hSb2xlT3B0aW9ucyIsIlVzZXJSb2xlUGlja2VyIiwib3JnSWQiLCJvblJlbW92ZVVzZXIiLCJ1c2VyVG9SZW1vdmUiLCJzZXRVc2VyVG9SZW1vdmUiLCJyb2xlT3B0aW9ucyIsInNldFJvbGVPcHRpb25zIiwiYnVpbHRpblJvbGVzIiwic2V0QnVpbHRpblJvbGVzIiwiZmV0Y2hPcHRpb25zIiwiaGFzUGVybWlzc2lvbiIsIkFjdGlvblJvbGVzTGlzdCIsIkFjdGlvbkJ1aWx0aW5Sb2xlc0xpc3QiLCJidWlsdEluUm9sZXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwibGljZW5zZWRBY2Nlc3NDb250cm9sRW5hYmxlZCIsImF2YXRhclVybCIsImxvZ2luIiwibGFzdFNlZW5BdEFnZSIsIm5ld1JvbGUiLCJoYXNQZXJtaXNzaW9uSW5NZXRhZGF0YSIsIk9yZ1VzZXJzUm9sZVVwZGF0ZSIsIk9yZ1VzZXJzUmVtb3ZlIiwiQm9vbGVhbiIsImdldEJhY2tlbmRTcnYiLCJ1c2Vyc0xvYWRlZCIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiZGlzcGF0Y2giLCJnZXQiLCJwYXRjaCIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=
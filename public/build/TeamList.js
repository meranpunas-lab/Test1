"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TeamList"],{

/***/ "./public/app/core/components/RolePicker/TeamRolePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamRolePicker": () => (/* binding */ TeamRolePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _RolePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/RolePicker/RolePicker.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const TeamRolePicker = ({
  teamId,
  orgId,
  roleOptions,
  disabled,
  builtinRolesDisabled
}) => {
  const [{
    loading,
    value: appliedRoles = []
  }, getTeamRoles] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    try {
      return await (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchTeamRoles)(teamId, orgId);
    } catch (e) {
      // TODO handle error
      console.error('Error loading options');
    }

    return [];
  }, [orgId, teamId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getTeamRoles();
  }, [orgId, teamId, getTeamRoles]);

  const onRolesChange = async roles => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_2__.updateTeamRoles)(roles, teamId, orgId);
    await getTeamRoles();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RolePicker__WEBPACK_IMPORTED_MODULE_1__.RolePicker, {
    onRolesChange: onRolesChange,
    roleOptions: roleOptions,
    appliedRoles: appliedRoles,
    isLoading: loading,
    disabled: disabled,
    builtinRolesDisabled: builtinRolesDisabled
  });
};

/***/ }),

/***/ "./public/app/core/components/connectWithCleanUp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectWithCleanUp": () => (/* binding */ connectWithCleanUp)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const connectWithCleanUp = (mapStateToProps, mapDispatchToProps, stateSelector) => Component => {
  const ConnectedComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps // @ts-ignore
  )(Component);

  const ConnectedComponentWithCleanUp = props => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
      return function cleanUp() {
        dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_1__.cleanUpAction)({
          stateSelector
        }));
      };
    }, [dispatch]); // @ts-ignore

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ConnectedComponent, Object.assign({}, props));
  };

  ConnectedComponentWithCleanUp.displayName = `ConnectWithCleanUp(${ConnectedComponent.displayName})`;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(ConnectedComponentWithCleanUp, Component);
  return ConnectedComponentWithCleanUp;
};

/***/ }),

/***/ "./public/app/features/admin/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightTrial": () => (/* binding */ highlightTrial),
/* harmony export */   "isTrial": () => (/* binding */ isTrial)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function isTrial() {
  var _config$licenseInfo;

  const expiry = (_config$licenseInfo = _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.licenseInfo) === null || _config$licenseInfo === void 0 ? void 0 : _config$licenseInfo.trialExpiry;
  return !!(expiry && expiry > 0);
}
const highlightTrial = () => isTrial() && _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.featureHighlights;

/***/ }),

/***/ "./public/app/features/teams/TeamList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamList": () => (/* binding */ TeamList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/connectWithCleanUp.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");
/* harmony import */ var app_core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/RolePicker/TeamRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3, _th4, _th5;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const pageLimit = 30;
class TeamList extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "deleteTeam", team => {
      this.props.deleteTeam(team.id);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "getPaginatedTeams", teams => {
      const offset = (this.props.searchPage - 1) * pageLimit;
      return teams.slice(offset, offset + pageLimit);
    });

    this.state = {
      roleOptions: []
    };
  }

  componentDidMount() {
    this.fetchTeams();

    if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionRolesList)) {
      this.fetchRoleOptions();
    }
  }

  async fetchTeams() {
    await this.props.loadTeams();
  }

  async fetchRoleOptions() {
    const roleOptions = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_13__.fetchRoleOptions)();
    this.setState({
      roleOptions
    });
  }

  renderTeam(team) {
    var _team$email, _team$email2;

    const {
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const permission = team.permission;
    const teamUrl = `org/teams/edit/${team.id}`;
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.isPermissionTeamAdmin)({
      permission,
      editorsCanAdmin,
      signedInUser
    });
    const canDelete = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsDelete, team, isTeamAdmin);
    const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRead, team, isTeamAdmin);
    const canSeeTeamRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRolesList, team, false);
    const canUpdateTeamRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRolesAdd, false) || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRolesRemove, false);
    const displayRolePicker = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRolesList) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionRolesList);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "width-4 text-center link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
            className: "filter-table__avatar",
            src: team.avatarUrl,
            alt: "Team avatar"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
          className: "filter-table__avatar",
          src: team.avatarUrl,
          alt: "Team avatar"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: team.name
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          children: team.name
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          "aria-label": ((_team$email = team.email) === null || _team$email === void 0 ? void 0 : _team$email.length) > 0 ? undefined : 'Empty email cell',
          children: team.email
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          "aria-label": ((_team$email2 = team.email) === null || _team$email2 === void 0 ? void 0 : _team$email2.length) > 0 ? undefined : 'Empty email cell',
          children: team.email
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: team.memberCount
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          children: team.memberCount
        })
      }), displayRolePicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        children: canSeeTeamRoles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_12__.TeamRolePicker, {
          teamId: team.id,
          roleOptions: this.state.roleOptions,
          disabled: !canUpdateTeamRoles
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "text-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {
          "aria-label": "Delete team",
          size: "sm",
          disabled: !canDelete,
          onConfirm: () => this.deleteTeam(team)
        })
      })]
    }, team.id);
  }

  renderEmptyList() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "You haven't created any teams yet.",
      buttonIcon: "users-alt",
      buttonLink: "org/teams/new",
      buttonTitle: " New team",
      buttonDisabled: !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsCreate),
      proTip: "Assign folder and dashboard permissions to teams instead of users to ease administration.",
      proTipLink: "",
      proTipLinkTitle: "",
      proTipTarget: "_blank"
    });
  }

  renderTeamList() {
    const {
      teams,
      searchQuery,
      editorsCanAdmin,
      searchPage,
      setTeamsSearchPage
    } = this.props;
    const teamAdmin = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasRole('Admin') || editorsCanAdmin && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasRole('Editor');
    const canCreate = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsCreate, teamAdmin);
    const displayRolePicker = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRolesList) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionRolesList);
    const newTeamHref = canCreate ? 'org/teams/new' : '#';
    const paginatedTeams = this.getPaginatedTeams(teams);
    const totalPages = Math.ceil(teams.length / pageLimit);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
            placeholder: "Search teams",
            value: searchQuery,
            onChange: this.onSearchQueryChange
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: newTeamHref,
          disabled: !canCreate,
          children: "New Team"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
          spacing: "md",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("table", {
            className: "filter-table filter-table--hover form-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Name"
                })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Email"
                })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Members"
                })), displayRolePicker && (_th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Roles"
                }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  style: {
                    width: '1%'
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("tbody", {
              children: paginatedTeams.map(team => this.renderTeam(team))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            justify: "flex-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
              onNavigate: setTeamsSearchPage,
              currentPage: searchPage,
              numberOfPages: totalPages,
              hideWhenSinglePage: true
            })
          })]
        })
      })]
    });
  }

  renderList() {
    const {
      teamsCount,
      hasFetched
    } = this.props;

    if (!hasFetched) {
      return null;
    }

    if (teamsCount > 0) {
      return this.renderTeamList();
    } else {
      return this.renderEmptyList();
    }
  }

  render() {
    const {
      hasFetched,
      navModel
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
        isLoading: !hasFetched,
        children: this.renderList()
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(state.navIndex, 'teams'),
    teams: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getTeams)(state.teams),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getSearchQuery)(state.teams),
    searchPage: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getTeamsSearchPage)(state.teams),
    teamsCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getTeamsCount)(state.teams),
    hasFetched: state.teams.hasFetched,
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_8__.config.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  loadTeams: _state_actions__WEBPACK_IMPORTED_MODULE_5__.loadTeams,
  deleteTeam: _state_actions__WEBPACK_IMPORTED_MODULE_5__.deleteTeam,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_11__.setSearchQuery,
  setTeamsSearchPage: _state_reducers__WEBPACK_IMPORTED_MODULE_11__.setTeamsSearchPage
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_10__.connectWithCleanUp)(mapStateToProps, mapDispatchToProps, state => state.teams)(TeamList));

/***/ }),

/***/ "./public/app/features/teams/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTeamGroup": () => (/* binding */ addTeamGroup),
/* harmony export */   "addTeamMember": () => (/* binding */ addTeamMember),
/* harmony export */   "deleteTeam": () => (/* binding */ deleteTeam),
/* harmony export */   "loadTeam": () => (/* binding */ loadTeam),
/* harmony export */   "loadTeamGroups": () => (/* binding */ loadTeamGroups),
/* harmony export */   "loadTeamMembers": () => (/* binding */ loadTeamMembers),
/* harmony export */   "loadTeams": () => (/* binding */ loadTeams),
/* harmony export */   "removeTeamGroup": () => (/* binding */ removeTeamGroup),
/* harmony export */   "removeTeamMember": () => (/* binding */ removeTeamMember),
/* harmony export */   "updateTeam": () => (/* binding */ updateTeam),
/* harmony export */   "updateTeamMember": () => (/* binding */ updateTeamMember)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");







function loadTeams() {
  return async dispatch => {
    // Early return if the user cannot list teams
    if (!app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.ActionTeamsRead)) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamsLoaded)([]));
      return;
    }

    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/teams/search', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_5__.accessControlQueryParam)({
      perpage: 1000,
      page: 1
    }));
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamsLoaded)(response.teams));
  };
}
function loadTeam(id) {
  return async dispatch => {
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${id}`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_5__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamLoaded)(response));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_3__.buildNavModel)(response)));
  };
}
function loadTeamMembers() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/members`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamMembersLoaded)(response));
  };
}
function addTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/members`, {
      userId: id
    });
    dispatch(loadTeamMembers());
  };
}
function removeTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/members/${id}`);
    dispatch(loadTeamMembers());
  };
}
function updateTeam(name, email) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${team.id}`, {
      name,
      email
    });
    dispatch(loadTeam(team.id));
  };
}
function loadTeamGroups() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/groups`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.teamGroupsLoaded)(response));
  };
}
function addTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/groups`, {
      groupId: groupId
    });
    dispatch(loadTeamGroups());
  };
}
function removeTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/groups/${encodeURIComponent(groupId)}`);
    dispatch(loadTeamGroups());
  };
}
function deleteTeam(id) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${id}`); // Update users permissions in case they lost teams.read with the deletion

    await app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.fetchUserPermissions();
    dispatch(loadTeams());
  };
}
function updateTeamMember(member) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${member.teamId}/members/${member.userId}`, {
      permission: member.permission
    });
    dispatch(loadTeamMembers());
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNavModel": () => (/* binding */ buildNavModel),
/* harmony export */   "getTeamLoadingNav": () => (/* binding */ getTeamLoadingNav)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/utils.ts");






const loadingTeam = {
  avatarUrl: 'public/img/user_profile.png',
  id: 1,
  name: 'Loading',
  email: 'loading',
  memberCount: 0,
  permission: app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Member
};
function buildNavModel(team) {
  const navModel = {
    img: team.avatarUrl,
    id: 'team-' + team.id,
    subTitle: 'Manage members and settings',
    url: '',
    text: team.name,
    breadcrumbs: [{
      title: 'Teams',
      url: 'org/teams'
    }],
    children: [// With FGAC this tab will always be available (but not always editable)
    // With Legacy it will be hidden by hideTabsFromNonTeamAdmin should the user not be allowed to see it
    {
      active: false,
      icon: 'sliders-v-alt',
      id: `team-settings-${team.id}`,
      text: 'Settings',
      url: `org/teams/edit/${team.id}/settings`
    }]
  }; // While team is loading we leave the members tab
  // With FGAC the Members tab is available when user has ActionTeamsPermissionsRead for this team
  // With Legacy it will always be present

  if (team === loadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_0__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
    navModel.children.unshift({
      active: false,
      icon: 'users-alt',
      id: `team-members-${team.id}`,
      text: 'Members',
      url: `org/teams/edit/${team.id}/members`
    });
  }

  const teamGroupSync = {
    active: false,
    icon: 'sync',
    id: `team-groupsync-${team.id}`,
    text: 'External group sync',
    url: `org/teams/edit/${team.id}/groupsync`
  };
  const isLoadingTeam = team === loadingTeam;

  if ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_5__.highlightTrial)()) {
    teamGroupSync.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_4__.ProBadge)({
      experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge',
      eventVariant: 'trial'
    });
  } // With both Legacy and FGAC the tab is protected being featureEnabled
  // While team is loading we leave the teamsync tab
  // With FGAC the External Group Sync tab is available when user has ActionTeamsPermissionsRead for this team


  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('teamsync')) {
    if (isLoadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_0__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      navModel.children.push(teamGroupSync);
    }
  } else if (app_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].featureToggles.featureHighlights) {
    navModel.children.push(Object.assign({}, teamGroupSync, {
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_4__.ProBadge)({
        experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge'
      })
    }));
  }

  return navModel;
}
function getTeamLoadingNav(pageName) {
  const main = buildNavModel(loadingTeam);
  let node; // find active page

  for (const child of main.children) {
    if (child.id.indexOf(pageName) > 0) {
      child.active = true;
      node = child;
      break;
    }
  }

  return {
    main: main,
    node: node
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSearchMemberQuery": () => (/* binding */ getSearchMemberQuery),
/* harmony export */   "getSearchQuery": () => (/* binding */ getSearchQuery),
/* harmony export */   "getTeam": () => (/* binding */ getTeam),
/* harmony export */   "getTeamGroups": () => (/* binding */ getTeamGroups),
/* harmony export */   "getTeamMembers": () => (/* binding */ getTeamMembers),
/* harmony export */   "getTeams": () => (/* binding */ getTeams),
/* harmony export */   "getTeamsCount": () => (/* binding */ getTeamsCount),
/* harmony export */   "getTeamsSearchPage": () => (/* binding */ getTeamsSearchPage),
/* harmony export */   "isPermissionTeamAdmin": () => (/* binding */ isPermissionTeamAdmin),
/* harmony export */   "isSignedInUserTeamAdmin": () => (/* binding */ isSignedInUserTeamAdmin)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");

const getSearchQuery = state => state.searchQuery;
const getSearchMemberQuery = state => state.searchMemberQuery;
const getTeamGroups = state => state.groups;
const getTeamsCount = state => state.teams.length;
const getTeamsSearchPage = state => state.searchPage;
const getTeam = (state, currentTeamId) => {
  if (state.team.id === parseInt(currentTeamId, 10)) {
    return state.team;
  }

  return null;
};
const getTeams = state => {
  const regex = RegExp(state.searchQuery, 'i');
  return state.teams.filter(team => {
    return regex.test(team.name);
  });
};
const getTeamMembers = state => {
  const regex = RegExp(state.searchMemberQuery, 'i');
  return state.members.filter(member => {
    return regex.test(member.login) || regex.test(member.email) || regex.test(member.name);
  });
};
const isSignedInUserTeamAdmin = config => {
  const {
    members,
    signedInUser,
    editorsCanAdmin
  } = config;
  const userInMembers = members.find(m => m.userId === signedInUser.id);
  const permission = userInMembers ? userInMembers.permission : app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Member;
  return isPermissionTeamAdmin({
    permission,
    signedInUser,
    editorsCanAdmin
  });
};
const isPermissionTeamAdmin = config => {
  const {
    permission,
    signedInUser,
    editorsCanAdmin
  } = config;
  const isAdmin = signedInUser.isGrafanaAdmin || signedInUser.orgRole === app_types__WEBPACK_IMPORTED_MODULE_0__.OrgRole.Admin;
  const userIsTeamAdmin = permission === app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Admin;
  const isSignedInUserTeamAdmin = isAdmin || userIsTeamAdmin;
  return isSignedInUserTeamAdmin || !editorsCanAdmin;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxRQUFNNEssT0FBTyxHQUFHNUgsWUFBWSxDQUFDNkgsY0FBYixJQUErQjdILFlBQVksQ0FBQzhILE9BQWIsS0FBeUJyQixvREFBeEU7QUFDQSxRQUFNdUIsZUFBZSxHQUFHL0gsVUFBVSxLQUFLMkUsZ0VBQXZDO0FBQ0EsUUFBTTRDLHVCQUF1QixHQUFHSSxPQUFPLElBQUlJLGVBQTNDO0FBRUEsU0FBT1IsdUJBQXVCLElBQUksQ0FBQ3pILGVBQW5DO0FBQ0QsQ0FQTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9Sb2xlUGlja2VyL1RlYW1Sb2xlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvY29ubmVjdFdpdGhDbGVhblVwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9UZWFtTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9zdGF0ZS9uYXZNb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBc3luY0ZuIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IFJvbGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgUm9sZVBpY2tlciB9IGZyb20gJy4vUm9sZVBpY2tlcic7XG5pbXBvcnQgeyBmZXRjaFRlYW1Sb2xlcywgdXBkYXRlVGVhbVJvbGVzIH0gZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdGVhbUlkOiBudW1iZXI7XG4gIG9yZ0lkPzogbnVtYmVyO1xuICByb2xlT3B0aW9uczogUm9sZVtdO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGJ1aWx0aW5Sb2xlc0Rpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRlYW1Sb2xlUGlja2VyOiBGQzxQcm9wcz4gPSAoeyB0ZWFtSWQsIG9yZ0lkLCByb2xlT3B0aW9ucywgZGlzYWJsZWQsIGJ1aWx0aW5Sb2xlc0Rpc2FibGVkIH0pID0+IHtcbiAgY29uc3QgW3sgbG9hZGluZywgdmFsdWU6IGFwcGxpZWRSb2xlcyA9IFtdIH0sIGdldFRlYW1Sb2xlc10gPSB1c2VBc3luY0ZuKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoVGVhbVJvbGVzKHRlYW1JZCwgb3JnSWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gaGFuZGxlIGVycm9yXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIG9wdGlvbnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9LCBbb3JnSWQsIHRlYW1JZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VGVhbVJvbGVzKCk7XG4gIH0sIFtvcmdJZCwgdGVhbUlkLCBnZXRUZWFtUm9sZXNdKTtcblxuICBjb25zdCBvblJvbGVzQ2hhbmdlID0gYXN5bmMgKHJvbGVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGF3YWl0IHVwZGF0ZVRlYW1Sb2xlcyhyb2xlcywgdGVhbUlkLCBvcmdJZCk7XG4gICAgYXdhaXQgZ2V0VGVhbVJvbGVzKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Um9sZVBpY2tlclxuICAgICAgb25Sb2xlc0NoYW5nZT17b25Sb2xlc0NoYW5nZX1cbiAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgIGFwcGxpZWRSb2xlcz17YXBwbGllZFJvbGVzfVxuICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgYnVpbHRpblJvbGVzRGlzYWJsZWQ9e2J1aWx0aW5Sb2xlc0Rpc2FibGVkfVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCwgTWFwRGlzcGF0Y2hUb1Byb3BzUGFyYW0sIE1hcFN0YXRlVG9Qcm9wc1BhcmFtLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNsZWFuVXBBY3Rpb24sIFN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2NsZWFuVXAnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFR5cGUsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdFdpdGhDbGVhblVwID1cbiAgPFxuICAgIFRTdGF0ZVByb3BzIGV4dGVuZHMge30gPSB7fSxcbiAgICBURGlzcGF0Y2hQcm9wcyA9IHt9LFxuICAgIFRPd25Qcm9wcyA9IHt9LFxuICAgIFN0YXRlID0ge30sXG4gICAgVFNlbGVjdG9yIGV4dGVuZHMgb2JqZWN0ID0ge30sXG4gICAgU3RhdGljcyA9IHt9XG4gID4oXG4gICAgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHNQYXJhbTxUU3RhdGVQcm9wcywgVE93blByb3BzLCBTdGF0ZT4sXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzOiBNYXBEaXNwYXRjaFRvUHJvcHNQYXJhbTxURGlzcGF0Y2hQcm9wcywgVE93blByb3BzPixcbiAgICBzdGF0ZVNlbGVjdG9yOiBTdGF0ZVNlbGVjdG9yPFRTZWxlY3Rvcj5cbiAgKSA9PlxuICAoQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT4pID0+IHtcbiAgICBjb25zdCBDb25uZWN0ZWRDb21wb25lbnQgPSBjb25uZWN0KFxuICAgICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgKShDb21wb25lbnQpO1xuXG4gICAgY29uc3QgQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXA6IEZ1bmN0aW9uQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW5VcCgpIHtcbiAgICAgICAgICBkaXNwYXRjaChjbGVhblVwQWN0aW9uKHsgc3RhdGVTZWxlY3RvciB9KSk7XG4gICAgICAgIH07XG4gICAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJldHVybiA8Q29ubmVjdGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gICAgfTtcblxuICAgIENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwLmRpc3BsYXlOYW1lID0gYENvbm5lY3RXaXRoQ2xlYW5VcCgke0Nvbm5lY3RlZENvbXBvbmVudC5kaXNwbGF5TmFtZX0pYDtcbiAgICBob2lzdE5vblJlYWN0U3RhdGljcyhDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCwgQ29tcG9uZW50KTtcbiAgICB0eXBlIEhvaXN0ZWQgPSB0eXBlb2YgQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAgJiBTdGF0aWNzO1xuXG4gICAgcmV0dXJuIENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwIGFzIEhvaXN0ZWQ7XG4gIH07XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyaWFsKCkge1xuICBjb25zdCBleHBpcnkgPSBjb25maWcubGljZW5zZUluZm8/LnRyaWFsRXhwaXJ5O1xuICByZXR1cm4gISEoZXhwaXJ5ICYmIGV4cGlyeSA+IDApO1xufVxuXG5leHBvcnQgY29uc3QgaGlnaGxpZ2h0VHJpYWwgPSAoKSA9PiBpc1RyaWFsKCkgJiYgY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBEZWxldGVCdXR0b24sIExpbmtCdXR0b24sIEZpbHRlcklucHV0LCBWZXJ0aWNhbEdyb3VwLCBIb3Jpem9udGFsR3JvdXAsIFBhZ2luYXRpb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IEVtcHR5TGlzdENUQSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0VtcHR5TGlzdENUQS9FbXB0eUxpc3RDVEEnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgUm9sZSwgU3RvcmVTdGF0ZSwgVGVhbSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBkZWxldGVUZWFtLCBsb2FkVGVhbXMgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0U2VhcmNoUXVlcnksIGdldFRlYW1zLCBnZXRUZWFtc0NvdW50LCBnZXRUZWFtc1NlYXJjaFBhZ2UsIGlzUGVybWlzc2lvblRlYW1BZG1pbiB9IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2LCBVc2VyIH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgY29ubmVjdFdpdGhDbGVhblVwIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL2Nvbm5lY3RXaXRoQ2xlYW5VcCc7XG5pbXBvcnQgeyBzZXRTZWFyY2hRdWVyeSwgc2V0VGVhbXNTZWFyY2hQYWdlIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBUZWFtUm9sZVBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9UZWFtUm9sZVBpY2tlcic7XG5pbXBvcnQgeyBmZXRjaFJvbGVPcHRpb25zIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Sb2xlUGlja2VyL2FwaSc7XG5cbmNvbnN0IHBhZ2VMaW1pdCA9IDMwO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xuICB0ZWFtczogVGVhbVtdO1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBzZWFyY2hQYWdlOiBudW1iZXI7XG4gIHRlYW1zQ291bnQ6IG51bWJlcjtcbiAgaGFzRmV0Y2hlZDogYm9vbGVhbjtcbiAgbG9hZFRlYW1zOiB0eXBlb2YgbG9hZFRlYW1zO1xuICBkZWxldGVUZWFtOiB0eXBlb2YgZGVsZXRlVGVhbTtcbiAgc2V0U2VhcmNoUXVlcnk6IHR5cGVvZiBzZXRTZWFyY2hRdWVyeTtcbiAgc2V0VGVhbXNTZWFyY2hQYWdlOiB0eXBlb2Ygc2V0VGVhbXNTZWFyY2hQYWdlO1xuICBlZGl0b3JzQ2FuQWRtaW46IGJvb2xlYW47XG4gIHNpZ25lZEluVXNlcjogVXNlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIHJvbGVPcHRpb25zOiBSb2xlW107XG59XG5cbmV4cG9ydCBjbGFzcyBUZWFtTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyByb2xlT3B0aW9uczogW10gfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hUZWFtcygpO1xuICAgIGlmIChjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSAmJiBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Sb2xlc0xpc3QpKSB7XG4gICAgICB0aGlzLmZldGNoUm9sZU9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaFRlYW1zKCkge1xuICAgIGF3YWl0IHRoaXMucHJvcHMubG9hZFRlYW1zKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaFJvbGVPcHRpb25zKCkge1xuICAgIGNvbnN0IHJvbGVPcHRpb25zID0gYXdhaXQgZmV0Y2hSb2xlT3B0aW9ucygpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlT3B0aW9ucyB9KTtcbiAgfVxuXG4gIGRlbGV0ZVRlYW0gPSAodGVhbTogVGVhbSkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlVGVhbSh0ZWFtLmlkKTtcbiAgfTtcblxuICBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICByZW5kZXJUZWFtKHRlYW06IFRlYW0pIHtcbiAgICBjb25zdCB7IGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBlcm1pc3Npb24gPSB0ZWFtLnBlcm1pc3Npb247XG4gICAgY29uc3QgdGVhbVVybCA9IGBvcmcvdGVhbXMvZWRpdC8ke3RlYW0uaWR9YDtcbiAgICBjb25zdCBpc1RlYW1BZG1pbiA9IGlzUGVybWlzc2lvblRlYW1BZG1pbih7IHBlcm1pc3Npb24sIGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VyIH0pO1xuICAgIGNvbnN0IGNhbkRlbGV0ZSA9IGNvbnRleHRTcnYuaGFzQWNjZXNzSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zRGVsZXRlLCB0ZWFtLCBpc1RlYW1BZG1pbik7XG4gICAgY29uc3QgY2FuUmVhZFRlYW0gPSBjb250ZXh0U3J2Lmhhc0FjY2Vzc0luTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1JlYWQsIHRlYW0sIGlzVGVhbUFkbWluKTtcbiAgICBjb25zdCBjYW5TZWVUZWFtUm9sZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2Vzc0luTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1JvbGVzTGlzdCwgdGVhbSwgZmFsc2UpO1xuICAgIGNvbnN0IGNhblVwZGF0ZVRlYW1Sb2xlcyA9XG4gICAgICBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUm9sZXNBZGQsIGZhbHNlKSB8fFxuICAgICAgY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1JvbGVzUmVtb3ZlLCBmYWxzZSk7XG4gICAgY29uc3QgZGlzcGxheVJvbGVQaWNrZXIgPVxuICAgICAgY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkgJiZcbiAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUm9sZXNMaXN0KSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uUm9sZXNMaXN0KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXt0ZWFtLmlkfT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTQgdGV4dC1jZW50ZXIgbGluay10ZFwiPlxuICAgICAgICAgIHtjYW5SZWFkVGVhbSA/IChcbiAgICAgICAgICAgIDxhIGhyZWY9e3RlYW1Vcmx9PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZV9fYXZhdGFyXCIgc3JjPXt0ZWFtLmF2YXRhclVybH0gYWx0PVwiVGVhbSBhdmF0YXJcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZV9fYXZhdGFyXCIgc3JjPXt0ZWFtLmF2YXRhclVybH0gYWx0PVwiVGVhbSBhdmF0YXJcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkXCI+XG4gICAgICAgICAge2NhblJlYWRUZWFtID8gPGEgaHJlZj17dGVhbVVybH0+e3RlYW0ubmFtZX08L2E+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDhweCcgfX0+e3RlYW0ubmFtZX08L2Rpdj59XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkXCI+XG4gICAgICAgICAge2NhblJlYWRUZWFtID8gKFxuICAgICAgICAgICAgPGEgaHJlZj17dGVhbVVybH0gYXJpYS1sYWJlbD17dGVhbS5lbWFpbD8ubGVuZ3RoID4gMCA/IHVuZGVmaW5lZCA6ICdFbXB0eSBlbWFpbCBjZWxsJ30+XG4gICAgICAgICAgICAgIHt0ZWFtLmVtYWlsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggOHB4JyB9fSBhcmlhLWxhYmVsPXt0ZWFtLmVtYWlsPy5sZW5ndGggPiAwID8gdW5kZWZpbmVkIDogJ0VtcHR5IGVtYWlsIGNlbGwnfT5cbiAgICAgICAgICAgICAge3RlYW0uZW1haWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZFwiPlxuICAgICAgICAgIHtjYW5SZWFkVGVhbSA/IChcbiAgICAgICAgICAgIDxhIGhyZWY9e3RlYW1Vcmx9Pnt0ZWFtLm1lbWJlckNvdW50fTwvYT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDhweCcgfX0+e3RlYW0ubWVtYmVyQ291bnR9PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAge2Rpc3BsYXlSb2xlUGlja2VyICYmIChcbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7Y2FuU2VlVGVhbVJvbGVzICYmIChcbiAgICAgICAgICAgICAgPFRlYW1Sb2xlUGlja2VyIHRlYW1JZD17dGVhbS5pZH0gcm9sZU9wdGlvbnM9e3RoaXMuc3RhdGUucm9sZU9wdGlvbnN9IGRpc2FibGVkPXshY2FuVXBkYXRlVGVhbVJvbGVzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICApfVxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxEZWxldGVCdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgdGVhbVwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5EZWxldGV9XG4gICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHRoaXMuZGVsZXRlVGVhbSh0ZWFtKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRW1wdHlMaXN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgIHRpdGxlPVwiWW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgdGVhbXMgeWV0LlwiXG4gICAgICAgIGJ1dHRvbkljb249XCJ1c2Vycy1hbHRcIlxuICAgICAgICBidXR0b25MaW5rPVwib3JnL3RlYW1zL25ld1wiXG4gICAgICAgIGJ1dHRvblRpdGxlPVwiIE5ldyB0ZWFtXCJcbiAgICAgICAgYnV0dG9uRGlzYWJsZWQ9eyFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc0NyZWF0ZSl9XG4gICAgICAgIHByb1RpcD1cIkFzc2lnbiBmb2xkZXIgYW5kIGRhc2hib2FyZCBwZXJtaXNzaW9ucyB0byB0ZWFtcyBpbnN0ZWFkIG9mIHVzZXJzIHRvIGVhc2UgYWRtaW5pc3RyYXRpb24uXCJcbiAgICAgICAgcHJvVGlwTGluaz1cIlwiXG4gICAgICAgIHByb1RpcExpbmtUaXRsZT1cIlwiXG4gICAgICAgIHByb1RpcFRhcmdldD1cIl9ibGFua1wiXG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBnZXRQYWdpbmF0ZWRUZWFtcyA9ICh0ZWFtczogVGVhbVtdKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gKHRoaXMucHJvcHMuc2VhcmNoUGFnZSAtIDEpICogcGFnZUxpbWl0O1xuICAgIHJldHVybiB0ZWFtcy5zbGljZShvZmZzZXQsIG9mZnNldCArIHBhZ2VMaW1pdCk7XG4gIH07XG5cbiAgcmVuZGVyVGVhbUxpc3QoKSB7XG4gICAgY29uc3QgeyB0ZWFtcywgc2VhcmNoUXVlcnksIGVkaXRvcnNDYW5BZG1pbiwgc2VhcmNoUGFnZSwgc2V0VGVhbXNTZWFyY2hQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRlYW1BZG1pbiA9IGNvbnRleHRTcnYuaGFzUm9sZSgnQWRtaW4nKSB8fCAoZWRpdG9yc0NhbkFkbWluICYmIGNvbnRleHRTcnYuaGFzUm9sZSgnRWRpdG9yJykpO1xuICAgIGNvbnN0IGNhbkNyZWF0ZSA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNDcmVhdGUsIHRlYW1BZG1pbik7XG4gICAgY29uc3QgZGlzcGxheVJvbGVQaWNrZXIgPVxuICAgICAgY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkgJiZcbiAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUm9sZXNMaXN0KSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uUm9sZXNMaXN0KTtcbiAgICBjb25zdCBuZXdUZWFtSHJlZiA9IGNhbkNyZWF0ZSA/ICdvcmcvdGVhbXMvbmV3JyA6ICcjJztcbiAgICBjb25zdCBwYWdpbmF0ZWRUZWFtcyA9IHRoaXMuZ2V0UGFnaW5hdGVkVGVhbXModGVhbXMpO1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGVhbXMubGVuZ3RoIC8gcGFnZUxpbWl0KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGVhbXNcIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNoUXVlcnlDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXtuZXdUZWFtSHJlZn0gZGlzYWJsZWQ9eyFjYW5DcmVhdGV9PlxuICAgICAgICAgICAgTmV3IFRlYW1cbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tbGlzdC10YWJsZVwiPlxuICAgICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJtZFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmaWx0ZXItdGFibGUtLWhvdmVyIGZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+TWVtYmVyczwvdGg+XG4gICAgICAgICAgICAgICAgICB7ZGlzcGxheVJvbGVQaWNrZXIgJiYgPHRoPlJvbGVzPC90aD59XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxJScgfX0gLz5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+e3BhZ2luYXRlZFRlYW1zLm1hcCgodGVhbSkgPT4gdGhpcy5yZW5kZXJUZWFtKHRlYW0pKX08L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17c2V0VGVhbXNTZWFyY2hQYWdlfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtzZWFyY2hQYWdlfVxuICAgICAgICAgICAgICAgIG51bWJlck9mUGFnZXM9e3RvdGFsUGFnZXN9XG4gICAgICAgICAgICAgICAgaGlkZVdoZW5TaW5nbGVQYWdlPXt0cnVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMaXN0KCkge1xuICAgIGNvbnN0IHsgdGVhbXNDb3VudCwgaGFzRmV0Y2hlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaGFzRmV0Y2hlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRlYW1zQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZWFtTGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJFbXB0eUxpc3QoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNGZXRjaGVkLCBuYXZNb2RlbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9eyFoYXNGZXRjaGVkfT57dGhpcy5yZW5kZXJMaXN0KCl9PC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAndGVhbXMnKSxcbiAgICB0ZWFtczogZ2V0VGVhbXMoc3RhdGUudGVhbXMpLFxuICAgIHNlYXJjaFF1ZXJ5OiBnZXRTZWFyY2hRdWVyeShzdGF0ZS50ZWFtcyksXG4gICAgc2VhcmNoUGFnZTogZ2V0VGVhbXNTZWFyY2hQYWdlKHN0YXRlLnRlYW1zKSxcbiAgICB0ZWFtc0NvdW50OiBnZXRUZWFtc0NvdW50KHN0YXRlLnRlYW1zKSxcbiAgICBoYXNGZXRjaGVkOiBzdGF0ZS50ZWFtcy5oYXNGZXRjaGVkLFxuICAgIGVkaXRvcnNDYW5BZG1pbjogY29uZmlnLmVkaXRvcnNDYW5BZG1pbiwgLy8gdGhpcyBtYWtlcyB0aGUgZmVhdHVyZSB0b2dnbGUgbW9ja2FibGUvY29udHJvbGxhYmxlIGZyb20gdGVzdHMsXG4gICAgc2lnbmVkSW5Vc2VyOiBjb250ZXh0U3J2LnVzZXIsIC8vIHRoaXMgbWFrZXMgdGhlIGZlYXR1cmUgdG9nZ2xlIG1vY2thYmxlL2NvbnRyb2xsYWJsZSBmcm9tIHRlc3RzLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRUZWFtcyxcbiAgZGVsZXRlVGVhbSxcbiAgc2V0U2VhcmNoUXVlcnksXG4gIHNldFRlYW1zU2VhcmNoUGFnZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RXaXRoQ2xlYW5VcChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgKHN0YXRlKSA9PiBzdGF0ZS50ZWFtcykoVGVhbUxpc3QpO1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBUZWFtTWVtYmVyLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHsgdGVhbUdyb3Vwc0xvYWRlZCwgdGVhbUxvYWRlZCwgdGVhbU1lbWJlcnNMb2FkZWQsIHRlYW1zTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlYW1zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIC8vIEVhcmx5IHJldHVybiBpZiB0aGUgdXNlciBjYW5ub3QgbGlzdCB0ZWFtc1xuICAgIGlmICghY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNSZWFkKSkge1xuICAgICAgZGlzcGF0Y2godGVhbXNMb2FkZWQoW10pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoXG4gICAgICAnL2FwaS90ZWFtcy9zZWFyY2gnLFxuICAgICAgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oeyBwZXJwYWdlOiAxMDAwLCBwYWdlOiAxIH0pXG4gICAgKTtcbiAgICBkaXNwYXRjaCh0ZWFtc0xvYWRlZChyZXNwb25zZS50ZWFtcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlYW0oaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS90ZWFtcy8ke2lkfWAsIGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCkpO1xuICAgIGRpc3BhdGNoKHRlYW1Mb2FkZWQocmVzcG9uc2UpKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVOYXZJbmRleChidWlsZE5hdk1vZGVsKHJlc3BvbnNlKSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlYW1NZW1iZXJzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vbWVtYmVyc2ApO1xuICAgIGRpc3BhdGNoKHRlYW1NZW1iZXJzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZWFtTWVtYmVyKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vbWVtYmVyc2AsIHsgdXNlcklkOiBpZCB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbU1lbWJlcnMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUZWFtTWVtYmVyKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9tZW1iZXJzLyR7aWR9YCk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1NZW1iZXJzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGVhbShuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfWAsIHsgbmFtZSwgZW1haWwgfSk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW0odGVhbS5pZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlYW1Hcm91cHMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9ncm91cHNgKTtcbiAgICBkaXNwYXRjaCh0ZWFtR3JvdXBzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZWFtR3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L2dyb3Vwc2AsIHsgZ3JvdXBJZDogZ3JvdXBJZCB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbUdyb3VwcygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRlYW1Hcm91cChncm91cElkOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9ncm91cHMvJHtlbmNvZGVVUklDb21wb25lbnQoZ3JvdXBJZCl9YCk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1Hcm91cHMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUZWFtKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL3RlYW1zLyR7aWR9YCk7XG4gICAgLy8gVXBkYXRlIHVzZXJzIHBlcm1pc3Npb25zIGluIGNhc2UgdGhleSBsb3N0IHRlYW1zLnJlYWQgd2l0aCB0aGUgZGVsZXRpb25cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1zKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGVhbU1lbWJlcihtZW1iZXI6IFRlYW1NZW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL3RlYW1zLyR7bWVtYmVyLnRlYW1JZH0vbWVtYmVycy8ke21lbWJlci51c2VySWR9YCwge1xuICAgICAgcGVybWlzc2lvbjogbWVtYmVyLnBlcm1pc3Npb24sXG4gICAgfSk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1NZW1iZXJzKCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgVGVhbSwgVGVhbVBlcm1pc3Npb25MZXZlbCB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTmF2TW9kZWxJdGVtLCBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzJztcblxuY29uc3QgbG9hZGluZ1RlYW0gPSB7XG4gIGF2YXRhclVybDogJ3B1YmxpYy9pbWcvdXNlcl9wcm9maWxlLnBuZycsXG4gIGlkOiAxLFxuICBuYW1lOiAnTG9hZGluZycsXG4gIGVtYWlsOiAnbG9hZGluZycsXG4gIG1lbWJlckNvdW50OiAwLFxuICBwZXJtaXNzaW9uOiBUZWFtUGVybWlzc2lvbkxldmVsLk1lbWJlcixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdk1vZGVsKHRlYW06IFRlYW0pOiBOYXZNb2RlbEl0ZW0ge1xuICBjb25zdCBuYXZNb2RlbDogTmF2TW9kZWxJdGVtID0ge1xuICAgIGltZzogdGVhbS5hdmF0YXJVcmwsXG4gICAgaWQ6ICd0ZWFtLScgKyB0ZWFtLmlkLFxuICAgIHN1YlRpdGxlOiAnTWFuYWdlIG1lbWJlcnMgYW5kIHNldHRpbmdzJyxcbiAgICB1cmw6ICcnLFxuICAgIHRleHQ6IHRlYW0ubmFtZSxcbiAgICBicmVhZGNydW1iczogW3sgdGl0bGU6ICdUZWFtcycsIHVybDogJ29yZy90ZWFtcycgfV0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIC8vIFdpdGggRkdBQyB0aGlzIHRhYiB3aWxsIGFsd2F5cyBiZSBhdmFpbGFibGUgKGJ1dCBub3QgYWx3YXlzIGVkaXRhYmxlKVxuICAgICAgLy8gV2l0aCBMZWdhY3kgaXQgd2lsbCBiZSBoaWRkZW4gYnkgaGlkZVRhYnNGcm9tTm9uVGVhbUFkbWluIHNob3VsZCB0aGUgdXNlciBub3QgYmUgYWxsb3dlZCB0byBzZWUgaXRcbiAgICAgIHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaWNvbjogJ3NsaWRlcnMtdi1hbHQnLFxuICAgICAgICBpZDogYHRlYW0tc2V0dGluZ3MtJHt0ZWFtLmlkfWAsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIHVybDogYG9yZy90ZWFtcy9lZGl0LyR7dGVhbS5pZH0vc2V0dGluZ3NgLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIC8vIFdoaWxlIHRlYW0gaXMgbG9hZGluZyB3ZSBsZWF2ZSB0aGUgbWVtYmVycyB0YWJcbiAgLy8gV2l0aCBGR0FDIHRoZSBNZW1iZXJzIHRhYiBpcyBhdmFpbGFibGUgd2hlbiB1c2VyIGhhcyBBY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCBmb3IgdGhpcyB0ZWFtXG4gIC8vIFdpdGggTGVnYWN5IGl0IHdpbGwgYWx3YXlzIGJlIHByZXNlbnRcbiAgaWYgKFxuICAgIHRlYW0gPT09IGxvYWRpbmdUZWFtIHx8XG4gICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLCB0ZWFtKVxuICApIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEudW5zaGlmdCh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaWNvbjogJ3VzZXJzLWFsdCcsXG4gICAgICBpZDogYHRlYW0tbWVtYmVycy0ke3RlYW0uaWR9YCxcbiAgICAgIHRleHQ6ICdNZW1iZXJzJyxcbiAgICAgIHVybDogYG9yZy90ZWFtcy9lZGl0LyR7dGVhbS5pZH0vbWVtYmVyc2AsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB0ZWFtR3JvdXBTeW5jOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnc3luYycsXG4gICAgaWQ6IGB0ZWFtLWdyb3Vwc3luYy0ke3RlYW0uaWR9YCxcbiAgICB0ZXh0OiAnRXh0ZXJuYWwgZ3JvdXAgc3luYycsXG4gICAgdXJsOiBgb3JnL3RlYW1zL2VkaXQvJHt0ZWFtLmlkfS9ncm91cHN5bmNgLFxuICB9O1xuXG4gIGNvbnN0IGlzTG9hZGluZ1RlYW0gPSB0ZWFtID09PSBsb2FkaW5nVGVhbTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSkge1xuICAgIHRlYW1Hcm91cFN5bmMudGFiU3VmZml4ID0gKCkgPT5cbiAgICAgIFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBpc0xvYWRpbmdUZWFtID8gJycgOiAnZmVhdHVyZS1oaWdobGlnaHRzLXRlYW0tc3luYy1iYWRnZScsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIC8vIFdpdGggYm90aCBMZWdhY3kgYW5kIEZHQUMgdGhlIHRhYiBpcyBwcm90ZWN0ZWQgYmVpbmcgZmVhdHVyZUVuYWJsZWRcbiAgLy8gV2hpbGUgdGVhbSBpcyBsb2FkaW5nIHdlIGxlYXZlIHRoZSB0ZWFtc3luYyB0YWJcbiAgLy8gV2l0aCBGR0FDIHRoZSBFeHRlcm5hbCBHcm91cCBTeW5jIHRhYiBpcyBhdmFpbGFibGUgd2hlbiB1c2VyIGhhcyBBY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCBmb3IgdGhpcyB0ZWFtXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgndGVhbXN5bmMnKSkge1xuICAgIGlmIChpc0xvYWRpbmdUZWFtIHx8IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCwgdGVhbSkpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHRlYW1Hcm91cFN5bmMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHMpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi50ZWFtR3JvdXBTeW5jLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogaXNMb2FkaW5nVGVhbSA/ICcnIDogJ2ZlYXR1cmUtaGlnaGxpZ2h0cy10ZWFtLXN5bmMtYmFkZ2UnIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVhbUxvYWRpbmdOYXYocGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IGJ1aWxkTmF2TW9kZWwobG9hZGluZ1RlYW0pO1xuXG4gIGxldCBub2RlOiBOYXZNb2RlbEl0ZW07XG5cbiAgLy8gZmluZCBhY3RpdmUgcGFnZVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGRyZW4hKSB7XG4gICAgaWYgKGNoaWxkLmlkIS5pbmRleE9mKHBhZ2VOYW1lKSA+IDApIHtcbiAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlID0gY2hpbGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbm9kZSEsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBUZWFtLCBUZWFtc1N0YXRlLCBUZWFtU3RhdGUsIFRlYW1NZW1iZXIsIE9yZ1JvbGUsIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFF1ZXJ5ID0gKHN0YXRlOiBUZWFtc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeTtcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hNZW1iZXJRdWVyeSA9IChzdGF0ZTogVGVhbVN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hNZW1iZXJRdWVyeTtcbmV4cG9ydCBjb25zdCBnZXRUZWFtR3JvdXBzID0gKHN0YXRlOiBUZWFtU3RhdGUpID0+IHN0YXRlLmdyb3VwcztcbmV4cG9ydCBjb25zdCBnZXRUZWFtc0NvdW50ID0gKHN0YXRlOiBUZWFtc1N0YXRlKSA9PiBzdGF0ZS50ZWFtcy5sZW5ndGg7XG5leHBvcnQgY29uc3QgZ2V0VGVhbXNTZWFyY2hQYWdlID0gKHN0YXRlOiBUZWFtc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hQYWdlO1xuXG5leHBvcnQgY29uc3QgZ2V0VGVhbSA9IChzdGF0ZTogVGVhbVN0YXRlLCBjdXJyZW50VGVhbUlkOiBhbnkpOiBUZWFtIHwgbnVsbCA9PiB7XG4gIGlmIChzdGF0ZS50ZWFtLmlkID09PSBwYXJzZUludChjdXJyZW50VGVhbUlkLCAxMCkpIHtcbiAgICByZXR1cm4gc3RhdGUudGVhbTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRlYW1zID0gKHN0YXRlOiBUZWFtc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS50ZWFtcy5maWx0ZXIoKHRlYW0pID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh0ZWFtLm5hbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtTWVtYmVycyA9IChzdGF0ZTogVGVhbVN0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gUmVnRXhwKHN0YXRlLnNlYXJjaE1lbWJlclF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5tZW1iZXJzLmZpbHRlcigobWVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QobWVtYmVyLmxvZ2luKSB8fCByZWdleC50ZXN0KG1lbWJlci5lbWFpbCkgfHwgcmVnZXgudGVzdChtZW1iZXIubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICBtZW1iZXJzOiBUZWFtTWVtYmVyW107XG4gIGVkaXRvcnNDYW5BZG1pbjogYm9vbGVhbjtcbiAgc2lnbmVkSW5Vc2VyOiBVc2VyO1xufVxuXG5leHBvcnQgY29uc3QgaXNTaWduZWRJblVzZXJUZWFtQWRtaW4gPSAoY29uZmlnOiBDb25maWcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgeyBtZW1iZXJzLCBzaWduZWRJblVzZXIsIGVkaXRvcnNDYW5BZG1pbiB9ID0gY29uZmlnO1xuICBjb25zdCB1c2VySW5NZW1iZXJzID0gbWVtYmVycy5maW5kKChtKSA9PiBtLnVzZXJJZCA9PT0gc2lnbmVkSW5Vc2VyLmlkKTtcbiAgY29uc3QgcGVybWlzc2lvbiA9IHVzZXJJbk1lbWJlcnMgPyB1c2VySW5NZW1iZXJzLnBlcm1pc3Npb24gOiBUZWFtUGVybWlzc2lvbkxldmVsLk1lbWJlcjtcblxuICByZXR1cm4gaXNQZXJtaXNzaW9uVGVhbUFkbWluKHsgcGVybWlzc2lvbiwgc2lnbmVkSW5Vc2VyLCBlZGl0b3JzQ2FuQWRtaW4gfSk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25Db25maWcge1xuICBwZXJtaXNzaW9uOiBUZWFtUGVybWlzc2lvbkxldmVsO1xuICBlZGl0b3JzQ2FuQWRtaW46IGJvb2xlYW47XG4gIHNpZ25lZEluVXNlcjogVXNlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGlzUGVybWlzc2lvblRlYW1BZG1pbiA9IChjb25maWc6IFBlcm1pc3Npb25Db25maWcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgeyBwZXJtaXNzaW9uLCBzaWduZWRJblVzZXIsIGVkaXRvcnNDYW5BZG1pbiB9ID0gY29uZmlnO1xuICBjb25zdCBpc0FkbWluID0gc2lnbmVkSW5Vc2VyLmlzR3JhZmFuYUFkbWluIHx8IHNpZ25lZEluVXNlci5vcmdSb2xlID09PSBPcmdSb2xlLkFkbWluO1xuICBjb25zdCB1c2VySXNUZWFtQWRtaW4gPSBwZXJtaXNzaW9uID09PSBUZWFtUGVybWlzc2lvbkxldmVsLkFkbWluO1xuICBjb25zdCBpc1NpZ25lZEluVXNlclRlYW1BZG1pbiA9IGlzQWRtaW4gfHwgdXNlcklzVGVhbUFkbWluO1xuXG4gIHJldHVybiBpc1NpZ25lZEluVXNlclRlYW1BZG1pbiB8fCAhZWRpdG9yc0NhbkFkbWluO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUFzeW5jRm4iLCJSb2xlUGlja2VyIiwiZmV0Y2hUZWFtUm9sZXMiLCJ1cGRhdGVUZWFtUm9sZXMiLCJUZWFtUm9sZVBpY2tlciIsInRlYW1JZCIsIm9yZ0lkIiwicm9sZU9wdGlvbnMiLCJkaXNhYmxlZCIsImJ1aWx0aW5Sb2xlc0Rpc2FibGVkIiwibG9hZGluZyIsInZhbHVlIiwiYXBwbGllZFJvbGVzIiwiZ2V0VGVhbVJvbGVzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm9uUm9sZXNDaGFuZ2UiLCJyb2xlcyIsImNvbm5lY3QiLCJ1c2VEaXNwYXRjaCIsImNsZWFuVXBBY3Rpb24iLCJob2lzdE5vblJlYWN0U3RhdGljcyIsImNvbm5lY3RXaXRoQ2xlYW5VcCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInN0YXRlU2VsZWN0b3IiLCJDb21wb25lbnQiLCJDb25uZWN0ZWRDb21wb25lbnQiLCJDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCIsInByb3BzIiwiZGlzcGF0Y2giLCJjbGVhblVwIiwiZGlzcGxheU5hbWUiLCJjb25maWciLCJpc1RyaWFsIiwiZXhwaXJ5IiwibGljZW5zZUluZm8iLCJ0cmlhbEV4cGlyeSIsImhpZ2hsaWdodFRyaWFsIiwiZmVhdHVyZVRvZ2dsZXMiLCJmZWF0dXJlSGlnaGxpZ2h0cyIsIlB1cmVDb21wb25lbnQiLCJQYWdlIiwiRGVsZXRlQnV0dG9uIiwiTGlua0J1dHRvbiIsIkZpbHRlcklucHV0IiwiVmVydGljYWxHcm91cCIsIkhvcml6b250YWxHcm91cCIsIlBhZ2luYXRpb24iLCJFbXB0eUxpc3RDVEEiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiZGVsZXRlVGVhbSIsImxvYWRUZWFtcyIsImdldFNlYXJjaFF1ZXJ5IiwiZ2V0VGVhbXMiLCJnZXRUZWFtc0NvdW50IiwiZ2V0VGVhbXNTZWFyY2hQYWdlIiwiaXNQZXJtaXNzaW9uVGVhbUFkbWluIiwiZ2V0TmF2TW9kZWwiLCJjb250ZXh0U3J2Iiwic2V0U2VhcmNoUXVlcnkiLCJzZXRUZWFtc1NlYXJjaFBhZ2UiLCJmZXRjaFJvbGVPcHRpb25zIiwicGFnZUxpbWl0IiwiVGVhbUxpc3QiLCJjb25zdHJ1Y3RvciIsInRlYW0iLCJpZCIsInRlYW1zIiwib2Zmc2V0Iiwic2VhcmNoUGFnZSIsInNsaWNlIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoVGVhbXMiLCJsaWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkIiwiaGFzUGVybWlzc2lvbiIsIkFjdGlvblJvbGVzTGlzdCIsInNldFN0YXRlIiwicmVuZGVyVGVhbSIsImVkaXRvcnNDYW5BZG1pbiIsInNpZ25lZEluVXNlciIsInBlcm1pc3Npb24iLCJ0ZWFtVXJsIiwiaXNUZWFtQWRtaW4iLCJjYW5EZWxldGUiLCJoYXNBY2Nlc3NJbk1ldGFkYXRhIiwiQWN0aW9uVGVhbXNEZWxldGUiLCJjYW5SZWFkVGVhbSIsIkFjdGlvblRlYW1zUmVhZCIsImNhblNlZVRlYW1Sb2xlcyIsIkFjdGlvblRlYW1zUm9sZXNMaXN0IiwiY2FuVXBkYXRlVGVhbVJvbGVzIiwiaGFzQWNjZXNzIiwiQWN0aW9uVGVhbXNSb2xlc0FkZCIsIkFjdGlvblRlYW1zUm9sZXNSZW1vdmUiLCJkaXNwbGF5Um9sZVBpY2tlciIsImF2YXRhclVybCIsIm5hbWUiLCJwYWRkaW5nIiwiZW1haWwiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJtZW1iZXJDb3VudCIsInJlbmRlckVtcHR5TGlzdCIsIkFjdGlvblRlYW1zQ3JlYXRlIiwicmVuZGVyVGVhbUxpc3QiLCJzZWFyY2hRdWVyeSIsInRlYW1BZG1pbiIsImhhc1JvbGUiLCJjYW5DcmVhdGUiLCJuZXdUZWFtSHJlZiIsInBhZ2luYXRlZFRlYW1zIiwiZ2V0UGFnaW5hdGVkVGVhbXMiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJvblNlYXJjaFF1ZXJ5Q2hhbmdlIiwid2lkdGgiLCJtYXAiLCJyZW5kZXJMaXN0IiwidGVhbXNDb3VudCIsImhhc0ZldGNoZWQiLCJyZW5kZXIiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwidXNlciIsImdldEJhY2tlbmRTcnYiLCJ1cGRhdGVOYXZJbmRleCIsImJ1aWxkTmF2TW9kZWwiLCJ0ZWFtR3JvdXBzTG9hZGVkIiwidGVhbUxvYWRlZCIsInRlYW1NZW1iZXJzTG9hZGVkIiwidGVhbXNMb2FkZWQiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsInJlc3BvbnNlIiwiZ2V0IiwicGVycGFnZSIsInBhZ2UiLCJsb2FkVGVhbSIsImxvYWRUZWFtTWVtYmVycyIsImdldFN0b3JlIiwiYWRkVGVhbU1lbWJlciIsInBvc3QiLCJ1c2VySWQiLCJyZW1vdmVUZWFtTWVtYmVyIiwiZGVsZXRlIiwidXBkYXRlVGVhbSIsInB1dCIsImxvYWRUZWFtR3JvdXBzIiwiYWRkVGVhbUdyb3VwIiwiZ3JvdXBJZCIsInJlbW92ZVRlYW1Hcm91cCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZldGNoVXNlclBlcm1pc3Npb25zIiwidXBkYXRlVGVhbU1lbWJlciIsIm1lbWJlciIsIlRlYW1QZXJtaXNzaW9uTGV2ZWwiLCJmZWF0dXJlRW5hYmxlZCIsIlByb0JhZGdlIiwibG9hZGluZ1RlYW0iLCJNZW1iZXIiLCJpbWciLCJzdWJUaXRsZSIsInVybCIsInRleHQiLCJicmVhZGNydW1icyIsInRpdGxlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpY29uIiwiaGFzUGVybWlzc2lvbkluTWV0YWRhdGEiLCJBY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCIsInVuc2hpZnQiLCJ0ZWFtR3JvdXBTeW5jIiwiaXNMb2FkaW5nVGVhbSIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsImV2ZW50VmFyaWFudCIsInB1c2giLCJnZXRUZWFtTG9hZGluZ05hdiIsInBhZ2VOYW1lIiwibWFpbiIsIm5vZGUiLCJjaGlsZCIsImluZGV4T2YiLCJPcmdSb2xlIiwiZ2V0U2VhcmNoTWVtYmVyUXVlcnkiLCJzZWFyY2hNZW1iZXJRdWVyeSIsImdldFRlYW1Hcm91cHMiLCJncm91cHMiLCJnZXRUZWFtIiwiY3VycmVudFRlYW1JZCIsInBhcnNlSW50IiwicmVnZXgiLCJSZWdFeHAiLCJmaWx0ZXIiLCJ0ZXN0IiwiZ2V0VGVhbU1lbWJlcnMiLCJtZW1iZXJzIiwibG9naW4iLCJpc1NpZ25lZEluVXNlclRlYW1BZG1pbiIsInVzZXJJbk1lbWJlcnMiLCJmaW5kIiwibSIsImlzQWRtaW4iLCJpc0dyYWZhbmFBZG1pbiIsIm9yZ1JvbGUiLCJBZG1pbiIsInVzZXJJc1RlYW1BZG1pbiJdLCJzb3VyY2VSb290IjoiIn0=
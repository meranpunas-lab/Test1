"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AdminEditOrgPage"],{

/***/ "./public/app/features/admin/AdminEditOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminEditOrgPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _users_UsersTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/users/UsersTable.tsx");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Legend, _Legend2;

















const getOrg = async orgId => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getBackendSrv)().get('/api/orgs/' + orgId);
};

const getOrgUsers = async orgId => {
  if (app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.OrgUsersRead)) {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getBackendSrv)().get(`/api/orgs/${orgId}/users`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_10__.accessControlQueryParam)());
  }

  return [];
};

const updateOrgUserRole = async (orgUser, orgId) => {
  await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getBackendSrv)().patch('/api/orgs/' + orgId + '/users/' + orgUser.userId, orgUser);
};

const removeOrgUser = async (orgUser, orgId) => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getBackendSrv)().delete('/api/orgs/' + orgId + '/users/' + orgUser.userId);
};

function AdminEditOrgPage({
  match
}) {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.navIndex);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(navIndex, 'global-orgs');
  const orgId = parseInt(match.params.id, 10);
  const canWriteOrg = app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.OrgsWrite);
  const canReadUsers = app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.OrgUsersRead);
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [orgState, fetchOrg] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => getOrg(orgId), []);
  const [, fetchOrgUsers] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => getOrgUsers(orgId), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchOrg();
    fetchOrgUsers().then(res => setUsers(res));
  }, [fetchOrg, fetchOrgUsers]);

  const updateOrgName = async name => {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getBackendSrv)().put('/api/orgs/' + orgId, Object.assign({}, orgState.value, {
      name
    }));
  };

  const renderMissingUserListRightsMessage = () => {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert, {
      severity: "info",
      title: "Access denied",
      children: "You do not have permission to see users in this organization. To update this organization, contact your server administrator."
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Legend, {
          children: "Edit organization"
        })), orgState.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Form, {
          defaultValues: {
            orgName: orgState.value.name
          },
          onSubmit: async values => await updateOrgName(values.orgName),
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, {
              label: "Name",
              invalid: !!errors.orgName,
              error: "Name is required",
              disabled: !canWriteOrg,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input, Object.assign({}, register('orgName', {
                required: true
              }), {
                id: "org-name-input"
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {
              disabled: !canWriteOrg,
              children: "Update"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_8__.css`
              margin-top: 20px;
            `,
          children: [_Legend2 || (_Legend2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Legend, {
            children: "Organization users"
          })), !canReadUsers && renderMissingUserListRightsMessage(), canReadUsers && !!users.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_users_UsersTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
            users: users,
            orgId: orgId,
            onRoleChange: (role, orgUser) => {
              updateOrgUserRole(Object.assign({}, orgUser, {
                role
              }), orgId);
              setUsers(users.map(user => {
                if (orgUser.userId === user.userId) {
                  return Object.assign({}, orgUser, {
                    role
                  });
                }

                return user;
              }));
              fetchOrgUsers();
            },
            onRemoveUser: orgUser => {
              removeOrgUser(orgUser, orgId);
              setUsers(users.filter(user => orgUser.userId !== user.userId));
              fetchOrgUsers();
            }
          })]
        })]
      })
    })
  });
}

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVFFLGVBQVMsRUFBRSxNQUFNO0FBQ2YsWUFBSSxDQUFDRCxZQUFMLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBQ0RELFFBQUFBLFlBQVksQ0FBQ0MsWUFBRCxDQUFaO0FBQ0FDLFFBQUFBLGVBQWUsQ0FBQyxJQUFELENBQWY7QUFDRDtBQWRILE1BOUVKO0FBQUEsSUFERjtBQWtHRCxDQTdIRDs7QUErSEEsaUVBQWVsRSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vQWRtaW5FZGl0T3JnUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdXNlcnMvVXNlcnNUYWJsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0b3JlU3RhdGUsIE9yZ1VzZXIsIEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IFVzZXJzVGFibGUgZnJvbSAnLi4vdXNlcnMvVXNlcnNUYWJsZSc7XG5pbXBvcnQgeyB1c2VBc3luY0ZuIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFVybFF1ZXJ5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZvcm0sIEZpZWxkLCBJbnB1dCwgQnV0dG9uLCBMZWdlbmQsIEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuXG5pbnRlcmZhY2UgT3JnTmFtZURUTyB7XG4gIG9yZ05hbWU6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0T3JnID0gYXN5bmMgKG9yZ0lkOiBVcmxRdWVyeVZhbHVlKSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL29yZ3MvJyArIG9yZ0lkKTtcbn07XG5cbmNvbnN0IGdldE9yZ1VzZXJzID0gYXN5bmMgKG9yZ0lkOiBVcmxRdWVyeVZhbHVlKSA9PiB7XG4gIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JlYWQpKSB7XG4gICAgcmV0dXJuIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvb3Jncy8ke29yZ0lkfS91c2Vyc2AsIGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCkpO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5cbmNvbnN0IHVwZGF0ZU9yZ1VzZXJSb2xlID0gYXN5bmMgKG9yZ1VzZXI6IE9yZ1VzZXIsIG9yZ0lkOiBVcmxRdWVyeVZhbHVlKSA9PiB7XG4gIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wYXRjaCgnL2FwaS9vcmdzLycgKyBvcmdJZCArICcvdXNlcnMvJyArIG9yZ1VzZXIudXNlcklkLCBvcmdVc2VyKTtcbn07XG5cbmNvbnN0IHJlbW92ZU9yZ1VzZXIgPSBhc3luYyAob3JnVXNlcjogT3JnVXNlciwgb3JnSWQ6IFVybFF1ZXJ5VmFsdWUpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoJy9hcGkvb3Jncy8nICsgb3JnSWQgKyAnL3VzZXJzLycgKyBvcmdVc2VyLnVzZXJJZCk7XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IGlkOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5FZGl0T3JnUGFnZSh7IG1hdGNoIH06IFByb3BzKSB7XG4gIGNvbnN0IG5hdkluZGV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCk7XG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwobmF2SW5kZXgsICdnbG9iYWwtb3JncycpO1xuICBjb25zdCBvcmdJZCA9IHBhcnNlSW50KG1hdGNoLnBhcmFtcy5pZCwgMTApO1xuICBjb25zdCBjYW5Xcml0ZU9yZyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ3NXcml0ZSk7XG4gIGNvbnN0IGNhblJlYWRVc2VycyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ1VzZXJzUmVhZCk7XG5cbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZTxPcmdVc2VyW10+KFtdKTtcblxuICBjb25zdCBbb3JnU3RhdGUsIGZldGNoT3JnXSA9IHVzZUFzeW5jRm4oKCkgPT4gZ2V0T3JnKG9yZ0lkKSwgW10pO1xuICBjb25zdCBbLCBmZXRjaE9yZ1VzZXJzXSA9IHVzZUFzeW5jRm4oKCkgPT4gZ2V0T3JnVXNlcnMob3JnSWQpLCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaE9yZygpO1xuICAgIGZldGNoT3JnVXNlcnMoKS50aGVuKChyZXMpID0+IHNldFVzZXJzKHJlcykpO1xuICB9LCBbZmV0Y2hPcmcsIGZldGNoT3JnVXNlcnNdKTtcblxuICBjb25zdCB1cGRhdGVPcmdOYW1lID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KCcvYXBpL29yZ3MvJyArIG9yZ0lkLCB7IC4uLm9yZ1N0YXRlLnZhbHVlLCBuYW1lIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1pc3NpbmdVc2VyTGlzdFJpZ2h0c01lc3NhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIkFjY2VzcyBkZW5pZWRcIj5cbiAgICAgICAgWW91IGRvIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gc2VlIHVzZXJzIGluIHRoaXMgb3JnYW5pemF0aW9uLiBUbyB1cGRhdGUgdGhpcyBvcmdhbml6YXRpb24sIGNvbnRhY3QgeW91ciBzZXJ2ZXJcbiAgICAgICAgYWRtaW5pc3RyYXRvci5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8TGVnZW5kPkVkaXQgb3JnYW5pemF0aW9uPC9MZWdlbmQ+XG4gICAgICAgICAge29yZ1N0YXRlLnZhbHVlICYmIChcbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e3sgb3JnTmFtZTogb3JnU3RhdGUudmFsdWUubmFtZSB9fVxuICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlczogT3JnTmFtZURUTykgPT4gYXdhaXQgdXBkYXRlT3JnTmFtZSh2YWx1ZXMub3JnTmFtZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm9yZ05hbWV9IGVycm9yPVwiTmFtZSBpcyByZXF1aXJlZFwiIGRpc2FibGVkPXshY2FuV3JpdGVPcmd9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCdvcmdOYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX0gaWQ9XCJvcmctbmFtZS1pbnB1dFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17IWNhbldyaXRlT3JnfT5VcGRhdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMZWdlbmQ+T3JnYW5pemF0aW9uIHVzZXJzPC9MZWdlbmQ+XG4gICAgICAgICAgICB7IWNhblJlYWRVc2VycyAmJiByZW5kZXJNaXNzaW5nVXNlckxpc3RSaWdodHNNZXNzYWdlKCl9XG4gICAgICAgICAgICB7Y2FuUmVhZFVzZXJzICYmICEhdXNlcnMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPFVzZXJzVGFibGVcbiAgICAgICAgICAgICAgICB1c2Vycz17dXNlcnN9XG4gICAgICAgICAgICAgICAgb3JnSWQ9e29yZ0lkfVxuICAgICAgICAgICAgICAgIG9uUm9sZUNoYW5nZT17KHJvbGUsIG9yZ1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZU9yZ1VzZXJSb2xlKHsgLi4ub3JnVXNlciwgcm9sZSB9LCBvcmdJZCk7XG4gICAgICAgICAgICAgICAgICBzZXRVc2VycyhcbiAgICAgICAgICAgICAgICAgICAgdXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9yZ1VzZXIudXNlcklkID09PSB1c2VyLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ub3JnVXNlciwgcm9sZSB9O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBmZXRjaE9yZ1VzZXJzKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvblJlbW92ZVVzZXI9eyhvcmdVc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVPcmdVc2VyKG9yZ1VzZXIsIG9yZ0lkKTtcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJzKHVzZXJzLmZpbHRlcigodXNlcikgPT4gb3JnVXNlci51c2VySWQgIT09IHVzZXIudXNlcklkKSk7XG4gICAgICAgICAgICAgICAgICBmZXRjaE9yZ1VzZXJzKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIE9yZ1VzZXIsIFJvbGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgT3JnUm9sZVBpY2tlciB9IGZyb20gJy4uL2FkbWluL09yZ1JvbGVQaWNrZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBPcmdSb2xlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBmZXRjaEJ1aWx0aW5Sb2xlcywgZmV0Y2hSb2xlT3B0aW9ucyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9hcGknO1xuaW1wb3J0IHsgVXNlclJvbGVQaWNrZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvVXNlclJvbGVQaWNrZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcnM6IE9yZ1VzZXJbXTtcbiAgb3JnSWQ/OiBudW1iZXI7XG4gIG9uUm9sZUNoYW5nZTogKHJvbGU6IE9yZ1JvbGUsIHVzZXI6IE9yZ1VzZXIpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlVXNlcjogKHVzZXI6IE9yZ1VzZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFVzZXJzVGFibGU6IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHVzZXJzLCBvcmdJZCwgb25Sb2xlQ2hhbmdlLCBvblJlbW92ZVVzZXIgfSA9IHByb3BzO1xuICBjb25zdCBbdXNlclRvUmVtb3ZlLCBzZXRVc2VyVG9SZW1vdmVdID0gdXNlU3RhdGU8T3JnVXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcm9sZU9wdGlvbnMsIHNldFJvbGVPcHRpb25zXSA9IHVzZVN0YXRlPFJvbGVbXT4oW10pO1xuICBjb25zdCBbYnVpbHRpblJvbGVzLCBzZXRCdWlsdGluUm9sZXNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBSb2xlW10gfT4oe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hPcHRpb25zKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblJvbGVzTGlzdCkpIHtcbiAgICAgICAgICBsZXQgb3B0aW9ucyA9IGF3YWl0IGZldGNoUm9sZU9wdGlvbnMob3JnSWQpO1xuICAgICAgICAgIHNldFJvbGVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvbkJ1aWx0aW5Sb2xlc0xpc3QpKSB7XG4gICAgICAgICAgY29uc3QgYnVpbHRJblJvbGVzID0gYXdhaXQgZmV0Y2hCdWlsdGluUm9sZXMob3JnSWQpO1xuICAgICAgICAgIHNldEJ1aWx0aW5Sb2xlcyhidWlsdEluUm9sZXMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgb3B0aW9ucycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGZldGNoT3B0aW9ucygpO1xuICAgIH1cbiAgfSwgW29yZ0lkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICA8dGg+TG9naW48L3RoPlxuICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5TZWVuPC90aD5cbiAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzM0cHgnIH19IC8+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtgJHt1c2VyLnVzZXJJZH0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVfX2F2YXRhclwiIHNyYz17dXNlci5hdmF0YXJVcmx9IGFsdD1cIlVzZXIgYXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5sb2dpbn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmxvZ2lufVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWF4LXdpZHRoLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgdGl0bGU9e3VzZXIuZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC0xXCI+e3VzZXIubGFzdFNlZW5BdEFnZX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLThcIj5cbiAgICAgICAgICAgICAgICAgIHtjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJSb2xlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkPXt1c2VyLnVzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICBvcmdJZD17b3JnSWR9XG4gICAgICAgICAgICAgICAgICAgICAgYnVpbHRJblJvbGU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJ1aWx0aW5Sb2xlQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICBidWlsdEluUm9sZXM9e2J1aWx0aW5Sb2xlc31cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JvbGVVcGRhdGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPE9yZ1JvbGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUm9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JvbGVVcGRhdGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAge2NvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JlbW92ZSwgdXNlcikgJiYgKFxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJUb1JlbW92ZSh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSB1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAge0Jvb2xlYW4odXNlclRvUmVtb3ZlKSAmJiAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB1c2VyICR7dXNlclRvUmVtb3ZlPy5sb2dpbn0/YH1cbiAgICAgICAgICBjb25maXJtVGV4dD1cIkRlbGV0ZVwiXG4gICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0VXNlclRvUmVtb3ZlKG51bGwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF1c2VyVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25SZW1vdmVVc2VyKHVzZXJUb1JlbW92ZSk7XG4gICAgICAgICAgICBzZXRVc2VyVG9SZW1vdmUobnVsbCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1RhYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQYWdlIiwidXNlU2VsZWN0b3IiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiZ2V0TmF2TW9kZWwiLCJVc2Vyc1RhYmxlIiwidXNlQXN5bmNGbiIsImdldEJhY2tlbmRTcnYiLCJGb3JtIiwiRmllbGQiLCJJbnB1dCIsIkJ1dHRvbiIsIkxlZ2VuZCIsIkFsZXJ0IiwiY3NzIiwiY29udGV4dFNydiIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiZ2V0T3JnIiwib3JnSWQiLCJnZXQiLCJnZXRPcmdVc2VycyIsImhhc1Blcm1pc3Npb24iLCJPcmdVc2Vyc1JlYWQiLCJ1cGRhdGVPcmdVc2VyUm9sZSIsIm9yZ1VzZXIiLCJwYXRjaCIsInVzZXJJZCIsInJlbW92ZU9yZ1VzZXIiLCJkZWxldGUiLCJBZG1pbkVkaXRPcmdQYWdlIiwibWF0Y2giLCJuYXZJbmRleCIsInN0YXRlIiwibmF2TW9kZWwiLCJwYXJzZUludCIsInBhcmFtcyIsImlkIiwiY2FuV3JpdGVPcmciLCJPcmdzV3JpdGUiLCJjYW5SZWFkVXNlcnMiLCJ1c2VycyIsInNldFVzZXJzIiwib3JnU3RhdGUiLCJmZXRjaE9yZyIsImZldGNoT3JnVXNlcnMiLCJ0aGVuIiwicmVzIiwidXBkYXRlT3JnTmFtZSIsIm5hbWUiLCJwdXQiLCJ2YWx1ZSIsInJlbmRlck1pc3NpbmdVc2VyTGlzdFJpZ2h0c01lc3NhZ2UiLCJvcmdOYW1lIiwidmFsdWVzIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJyZXF1aXJlZCIsImxlbmd0aCIsInJvbGUiLCJtYXAiLCJ1c2VyIiwiZmlsdGVyIiwiT3JnUm9sZVBpY2tlciIsIkNvbmZpcm1Nb2RhbCIsImZldGNoQnVpbHRpblJvbGVzIiwiZmV0Y2hSb2xlT3B0aW9ucyIsIlVzZXJSb2xlUGlja2VyIiwicHJvcHMiLCJvblJvbGVDaGFuZ2UiLCJvblJlbW92ZVVzZXIiLCJ1c2VyVG9SZW1vdmUiLCJzZXRVc2VyVG9SZW1vdmUiLCJyb2xlT3B0aW9ucyIsInNldFJvbGVPcHRpb25zIiwiYnVpbHRpblJvbGVzIiwic2V0QnVpbHRpblJvbGVzIiwiZmV0Y2hPcHRpb25zIiwiQWN0aW9uUm9sZXNMaXN0Iiwib3B0aW9ucyIsIkFjdGlvbkJ1aWx0aW5Sb2xlc0xpc3QiLCJidWlsdEluUm9sZXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwibGljZW5zZWRBY2Nlc3NDb250cm9sRW5hYmxlZCIsIndpZHRoIiwiaW5kZXgiLCJhdmF0YXJVcmwiLCJsb2dpbiIsImVtYWlsIiwibGFzdFNlZW5BdEFnZSIsIm5ld1JvbGUiLCJoYXNQZXJtaXNzaW9uSW5NZXRhZGF0YSIsIk9yZ1VzZXJzUm9sZVVwZGF0ZSIsIk9yZ1VzZXJzUmVtb3ZlIiwiQm9vbGVhbiJdLCJzb3VyY2VSb290IjoiIn0=
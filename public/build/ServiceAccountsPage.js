"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServiceAccountsPage"],{

/***/ "./public/app/features/serviceaccounts/ServiceAccountsListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
/* harmony import */ var _ServiceAccountsListPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;












const getServiceAccountsAriaLabel = name => {
  return `Edit service account's ${name} details`;
};

const getServiceAccountsEnabledStatus = disabled => {
  return disabled ? 'Disabled' : 'Enabled';
};

const ServiceAccountListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(({
  serviceAccount,
  onRoleChange,
  roleOptions,
  builtInRoles,
  onSetToRemove
}) => {
  const editUrl = `org/serviceaccounts/${serviceAccount.id}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_ServiceAccountsListPage__WEBPACK_IMPORTED_MODULE_7__.getStyles);
  const canUpdateRole = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ServiceAccountsWrite, serviceAccount);
  const displayRolePicker = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionRolesList) && app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionUserRolesList);
  const enableRolePicker = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.OrgUsersRoleUpdate) && canUpdateRole;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "width-4 text-center link-td",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        href: editUrl,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          className: "filter-table__avatar",
          src: serviceAccount.avatarUrl,
          alt: `Avatar for user ${serviceAccount.name}`
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.name,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.login,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.login
      })
    }), app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.licensedAccessControlEnabled() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('link-td', styles.iconRow),
      children: displayRolePicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__.UserRolePicker, {
        userId: serviceAccount.id,
        orgId: serviceAccount.orgId,
        builtInRole: serviceAccount.role,
        onBuiltinRoleChange: newRole => onRoleChange(newRole, serviceAccount),
        roleOptions: roleOptions,
        builtInRoles: builtInRoles,
        disabled: !enableRolePicker
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('link-td', styles.iconRow),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__.OrgRolePicker, {
        "aria-label": "Role",
        value: serviceAccount.role,
        disabled: !canUpdateRole,
        onChange: newRole => onRoleChange(newRole, serviceAccount)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: getServiceAccountsEnabledStatus(serviceAccount.isDisabled),
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: getServiceAccountsEnabledStatus(serviceAccount.isDisabled)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
        className: "ellipsis",
        href: editUrl,
        title: "Tokens",
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            name: 'key-skeleton-alt'
          })
        })), "\xA0", serviceAccount.tokens]
      })
    }), app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ServiceAccountsDelete, serviceAccount) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        size: "sm",
        variant: "destructive",
        onClick: () => {
          onSetToRemove(serviceAccount);
        },
        icon: "times",
        "aria-label": "Delete service account"
      })
    })]
  }, serviceAccount.id);
});
ServiceAccountListItem.displayName = 'ServiceAccountListItem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceAccountListItem);

/***/ }),

/***/ "./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/serviceaccounts/state/actions.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _ServiceAccountsListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/serviceaccounts/ServiceAccountsListItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _LinkButton, _PageLoader, _th, _th2, _th3, _th4, _th5, _th6;


















function mapStateToProps(state) {
  return Object.assign({
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(state.navIndex, 'serviceaccounts')
  }, state.serviceAccounts);
}

const mapDispatchToProps = {
  fetchServiceAccounts: _state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchServiceAccounts,
  fetchACOptions: _state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchACOptions,
  updateServiceAccount: _state_actions__WEBPACK_IMPORTED_MODULE_6__.updateServiceAccount,
  removeServiceAccount: _state_actions__WEBPACK_IMPORTED_MODULE_6__.removeServiceAccount,
  setServiceAccountToRemove: _state_actions__WEBPACK_IMPORTED_MODULE_6__.setServiceAccountToRemove,
  changeFilter: _state_actions__WEBPACK_IMPORTED_MODULE_6__.changeFilter,
  changeQuery: _state_actions__WEBPACK_IMPORTED_MODULE_6__.changeQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);

const ServiceAccountsListPage = ({
  fetchServiceAccounts,
  removeServiceAccount,
  fetchACOptions,
  updateServiceAccount,
  setServiceAccountToRemove,
  navModel,
  serviceAccounts,
  isLoading,
  roleOptions,
  builtInRoles,
  changeFilter,
  changeQuery,
  query,
  filters,
  serviceAccountToRemove
}) => {
  var _filters$find;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchServiceAccounts();

    if (app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.licensedAccessControlEnabled()) {
      fetchACOptions();
    }
  }, [fetchServiceAccounts, fetchACOptions]);

  const onRoleChange = (role, serviceAccount) => {
    const updatedServiceAccount = Object.assign({}, serviceAccount, {
      role: role
    });
    updateServiceAccount(updatedServiceAccount);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h2", {
        children: "Service accounts"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "page-action-bar",
        style: {
          justifyContent: 'flex-end'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
          placeholder: "Search service account by name.",
          autoFocus: true,
          value: query,
          onChange: changeQuery
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
          options: [{
            label: 'All service accounts',
            value: false
          }, {
            label: 'Expired tokens',
            value: true
          }],
          onChange: value => changeFilter({
            name: 'expiredTokens',
            value
          }),
          value: (_filters$find = filters.find(f => f.name === 'expiredTokens')) === null || _filters$find === void 0 ? void 0 : _filters$find.value,
          className: styles.filter
        }), serviceAccounts.length !== 0 && app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ServiceAccountsCreate) && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: "org/serviceaccounts/create",
          variant: "primary",
          children: "Add service account"
        })))]
      }), isLoading && (_PageLoader || (_PageLoader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {}))), !isLoading && serviceAccounts.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_11__["default"], {
          title: "You haven't created any service accounts yet.",
          buttonIcon: "key-skeleton-alt",
          buttonLink: "org/serviceaccounts/create",
          buttonTitle: "Add service account",
          buttonDisabled: !app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ServiceAccountsCreate),
          proTip: "Remember, you can provide specific permissions for API access to other applications.",
          proTipLink: "",
          proTipLinkTitle: "",
          proTipTarget: "_blank"
        })
      }), !isLoading && serviceAccounts.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.cx)(styles.table, 'admin-list-table'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("table", {
            className: "filter-table form-inline filter-table--hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "Account"
                })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "ID"
                })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "Roles"
                })), _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "Status"
                })), _th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "Tokens"
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  style: {
                    width: '34px'
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("tbody", {
              children: serviceAccounts.map(serviceAccount => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ServiceAccountsListItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
                serviceAccount: serviceAccount,
                builtInRoles: builtInRoles,
                roleOptions: roleOptions,
                onRoleChange: onRoleChange,
                onSetToRemove: setServiceAccountToRemove
              }, serviceAccount.id))
            })]
          })
        })
      }), serviceAccountToRemove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
        body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          children: ["Are you sure you want to delete '", serviceAccountToRemove.name, "'", Boolean(serviceAccountToRemove.tokens) && ` and ${serviceAccountToRemove.tokens} accompanying ${pluralize__WEBPACK_IMPORTED_MODULE_10___default()('token', serviceAccountToRemove.tokens)}`, "?"]
        }),
        confirmText: "Delete",
        title: "Delete service account",
        onDismiss: () => {
          setServiceAccountToRemove(null);
        },
        isOpen: true,
        onConfirm: () => {
          removeServiceAccount(serviceAccountToRemove.id);
          setServiceAccountToRemove(null);
        }
      })]
    })
  });
};

const getStyles = theme => {
  return {
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-top: ${theme.spacing(3)};
    `,
    filter: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin: 0 ${theme.spacing(1)};
    `,
    iconRow: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      svg {
        margin-left: ${theme.spacing(0.5)};
      }
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${theme.spacing(0.5)} 0 !important;
      }
    `,
    unitTooltip: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      display: flex;
      flex-direction: column;
    `,
    unitItem: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      cursor: pointer;
      padding: ${theme.spacing(0.5)} 0;
      margin-right: ${theme.spacing(1)};
    `,
    disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      color: ${theme.colors.text.disabled};
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(ServiceAccountsListPage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MENQLGlFQUFlbUIsU0FBUyxDQUFDQyx1QkFBRCxDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlcnZpY2VhY2NvdW50cy9TZXJ2aWNlQWNjb3VudHNMaXN0SXRlbS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VydmljZWFjY291bnRzL1NlcnZpY2VBY2NvdW50c0xpc3RQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBPcmdSb2xlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEljb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBVc2VyUm9sZVBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9Vc2VyUm9sZVBpY2tlcic7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBSb2xlLCBTZXJ2aWNlQWNjb3VudERUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE9yZ1JvbGVQaWNrZXIgfSBmcm9tICcuLi9hZG1pbi9PcmdSb2xlUGlja2VyJztcbmltcG9ydCB7IGdldFN0eWxlcyB9IGZyb20gJy4vU2VydmljZUFjY291bnRzTGlzdFBhZ2UnO1xuXG50eXBlIFNlcnZpY2VBY2NvdW50TGlzdEl0ZW1Qcm9wcyA9IHtcbiAgc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPO1xuICBvblJvbGVDaGFuZ2U6IChyb2xlOiBPcmdSb2xlLCBzZXJ2aWNlQWNjb3VudDogU2VydmljZUFjY291bnREVE8pID0+IHZvaWQ7XG4gIHJvbGVPcHRpb25zOiBSb2xlW107XG4gIGJ1aWx0SW5Sb2xlczogUmVjb3JkPHN0cmluZywgUm9sZVtdPjtcbiAgb25TZXRUb1JlbW92ZTogKHNlcnZpY2VBY2NvdW50OiBTZXJ2aWNlQWNjb3VudERUTykgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGdldFNlcnZpY2VBY2NvdW50c0FyaWFMYWJlbCA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGBFZGl0IHNlcnZpY2UgYWNjb3VudCdzICR7bmFtZX0gZGV0YWlsc2A7XG59O1xuY29uc3QgZ2V0U2VydmljZUFjY291bnRzRW5hYmxlZFN0YXR1cyA9IChkaXNhYmxlZDogYm9vbGVhbikgPT4ge1xuICByZXR1cm4gZGlzYWJsZWQgPyAnRGlzYWJsZWQnIDogJ0VuYWJsZWQnO1xufTtcblxuY29uc3QgU2VydmljZUFjY291bnRMaXN0SXRlbSA9IG1lbW8oXG4gICh7IHNlcnZpY2VBY2NvdW50LCBvblJvbGVDaGFuZ2UsIHJvbGVPcHRpb25zLCBidWlsdEluUm9sZXMsIG9uU2V0VG9SZW1vdmUgfTogU2VydmljZUFjY291bnRMaXN0SXRlbVByb3BzKSA9PiB7XG4gICAgY29uc3QgZWRpdFVybCA9IGBvcmcvc2VydmljZWFjY291bnRzLyR7c2VydmljZUFjY291bnQuaWR9YDtcbiAgICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gICAgY29uc3QgY2FuVXBkYXRlUm9sZSA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5TZXJ2aWNlQWNjb3VudHNXcml0ZSwgc2VydmljZUFjY291bnQpO1xuICAgIGNvbnN0IGRpc3BsYXlSb2xlUGlja2VyID1cbiAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblJvbGVzTGlzdCkgJiZcbiAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblVzZXJSb2xlc0xpc3QpO1xuICAgIGNvbnN0IGVuYWJsZVJvbGVQaWNrZXIgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JvbGVVcGRhdGUpICYmIGNhblVwZGF0ZVJvbGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17c2VydmljZUFjY291bnQuaWR9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtNCB0ZXh0LWNlbnRlciBsaW5rLXRkXCI+XG4gICAgICAgICAgPGEgaHJlZj17ZWRpdFVybH0gYXJpYS1sYWJlbD17Z2V0U2VydmljZUFjY291bnRzQXJpYUxhYmVsKHNlcnZpY2VBY2NvdW50Lm5hbWUpfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlX19hdmF0YXJcIlxuICAgICAgICAgICAgICBzcmM9e3NlcnZpY2VBY2NvdW50LmF2YXRhclVybH1cbiAgICAgICAgICAgICAgYWx0PXtgQXZhdGFyIGZvciB1c2VyICR7c2VydmljZUFjY291bnQubmFtZX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkIG1heC13aWR0aC0xMFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlbGxpcHNpc1wiXG4gICAgICAgICAgICBocmVmPXtlZGl0VXJsfVxuICAgICAgICAgICAgdGl0bGU9e3NlcnZpY2VBY2NvdW50Lm5hbWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtnZXRTZXJ2aWNlQWNjb3VudHNBcmlhTGFiZWwoc2VydmljZUFjY291bnQubmFtZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlcnZpY2VBY2NvdW50Lm5hbWV9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZCBtYXgtd2lkdGgtMTBcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWxsaXBzaXNcIlxuICAgICAgICAgICAgaHJlZj17ZWRpdFVybH1cbiAgICAgICAgICAgIHRpdGxlPXtzZXJ2aWNlQWNjb3VudC5sb2dpbn1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2dldFNlcnZpY2VBY2NvdW50c0FyaWFMYWJlbChzZXJ2aWNlQWNjb3VudC5uYW1lKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VydmljZUFjY291bnQubG9naW59XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgICB7Y29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkgPyAoXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y3goJ2xpbmstdGQnLCBzdHlsZXMuaWNvblJvdyl9PlxuICAgICAgICAgICAge2Rpc3BsYXlSb2xlUGlja2VyICYmIChcbiAgICAgICAgICAgICAgPFVzZXJSb2xlUGlja2VyXG4gICAgICAgICAgICAgICAgdXNlcklkPXtzZXJ2aWNlQWNjb3VudC5pZH1cbiAgICAgICAgICAgICAgICBvcmdJZD17c2VydmljZUFjY291bnQub3JnSWR9XG4gICAgICAgICAgICAgICAgYnVpbHRJblJvbGU9e3NlcnZpY2VBY2NvdW50LnJvbGV9XG4gICAgICAgICAgICAgICAgb25CdWlsdGluUm9sZUNoYW5nZT17KG5ld1JvbGUpID0+IG9uUm9sZUNoYW5nZShuZXdSb2xlLCBzZXJ2aWNlQWNjb3VudCl9XG4gICAgICAgICAgICAgICAgcm9sZU9wdGlvbnM9e3JvbGVPcHRpb25zfVxuICAgICAgICAgICAgICAgIGJ1aWx0SW5Sb2xlcz17YnVpbHRJblJvbGVzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW5hYmxlUm9sZVBpY2tlcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjeCgnbGluay10ZCcsIHN0eWxlcy5pY29uUm93KX0+XG4gICAgICAgICAgICA8T3JnUm9sZVBpY2tlclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUm9sZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXJ2aWNlQWNjb3VudC5yb2xlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblVwZGF0ZVJvbGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHNlcnZpY2VBY2NvdW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgKX1cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGQgbWF4LXdpZHRoLTEwXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsbGlwc2lzXCJcbiAgICAgICAgICAgIGhyZWY9e2VkaXRVcmx9XG4gICAgICAgICAgICB0aXRsZT17Z2V0U2VydmljZUFjY291bnRzRW5hYmxlZFN0YXR1cyhzZXJ2aWNlQWNjb3VudC5pc0Rpc2FibGVkKX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2dldFNlcnZpY2VBY2NvdW50c0FyaWFMYWJlbChzZXJ2aWNlQWNjb3VudC5uYW1lKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0U2VydmljZUFjY291bnRzRW5hYmxlZFN0YXR1cyhzZXJ2aWNlQWNjb3VudC5pc0Rpc2FibGVkKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkIG1heC13aWR0aC0xMFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlbGxpcHNpc1wiXG4gICAgICAgICAgICBocmVmPXtlZGl0VXJsfVxuICAgICAgICAgICAgdGl0bGU9XCJUb2tlbnNcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD17Z2V0U2VydmljZUFjY291bnRzQXJpYUxhYmVsKHNlcnZpY2VBY2NvdW50Lm5hbWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPXsna2V5LXNrZWxldG9uLWFsdCd9PjwvSWNvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAge3NlcnZpY2VBY2NvdW50LnRva2Vuc31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIHtjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uU2VydmljZUFjY291bnRzRGVsZXRlLCBzZXJ2aWNlQWNjb3VudCkgJiYgKFxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uU2V0VG9SZW1vdmUoc2VydmljZUFjY291bnQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIHNlcnZpY2UgYWNjb3VudFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICl9XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbik7XG5TZXJ2aWNlQWNjb3VudExpc3RJdGVtLmRpc3BsYXlOYW1lID0gJ1NlcnZpY2VBY2NvdW50TGlzdEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlQWNjb3VudExpc3RJdGVtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ29uZmlybU1vZGFsLCBGaWx0ZXJJbnB1dCwgTGlua0J1dHRvbiwgUmFkaW9CdXR0b25Hcm91cCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBTZXJ2aWNlQWNjb3VudERUTywgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQge1xuICBjaGFuZ2VGaWx0ZXIsXG4gIGNoYW5nZVF1ZXJ5LFxuICBmZXRjaEFDT3B0aW9ucyxcbiAgZmV0Y2hTZXJ2aWNlQWNjb3VudHMsXG4gIHJlbW92ZVNlcnZpY2VBY2NvdW50LFxuICB1cGRhdGVTZXJ2aWNlQWNjb3VudCxcbiAgc2V0U2VydmljZUFjY291bnRUb1JlbW92ZSxcbn0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCBQYWdlTG9hZGVyIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZUxvYWRlci9QYWdlTG9hZGVyJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIE9yZ1JvbGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCBTZXJ2aWNlQWNjb3VudExpc3RJdGVtIGZyb20gJy4vU2VydmljZUFjY291bnRzTGlzdEl0ZW0nO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge31cblxudHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3NlcnZpY2VhY2NvdW50cycpLFxuICAgIC4uLnN0YXRlLnNlcnZpY2VBY2NvdW50cyxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBmZXRjaFNlcnZpY2VBY2NvdW50cyxcbiAgZmV0Y2hBQ09wdGlvbnMsXG4gIHVwZGF0ZVNlcnZpY2VBY2NvdW50LFxuICByZW1vdmVTZXJ2aWNlQWNjb3VudCxcbiAgc2V0U2VydmljZUFjY291bnRUb1JlbW92ZSxcbiAgY2hhbmdlRmlsdGVyLFxuICBjaGFuZ2VRdWVyeSxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5jb25zdCBTZXJ2aWNlQWNjb3VudHNMaXN0UGFnZSA9ICh7XG4gIGZldGNoU2VydmljZUFjY291bnRzLFxuICByZW1vdmVTZXJ2aWNlQWNjb3VudCxcbiAgZmV0Y2hBQ09wdGlvbnMsXG4gIHVwZGF0ZVNlcnZpY2VBY2NvdW50LFxuICBzZXRTZXJ2aWNlQWNjb3VudFRvUmVtb3ZlLFxuICBuYXZNb2RlbCxcbiAgc2VydmljZUFjY291bnRzLFxuICBpc0xvYWRpbmcsXG4gIHJvbGVPcHRpb25zLFxuICBidWlsdEluUm9sZXMsXG4gIGNoYW5nZUZpbHRlcixcbiAgY2hhbmdlUXVlcnksXG4gIHF1ZXJ5LFxuICBmaWx0ZXJzLFxuICBzZXJ2aWNlQWNjb3VudFRvUmVtb3ZlLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hTZXJ2aWNlQWNjb3VudHMoKTtcbiAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGZldGNoQUNPcHRpb25zKCk7XG4gICAgfVxuICB9LCBbZmV0Y2hTZXJ2aWNlQWNjb3VudHMsIGZldGNoQUNPcHRpb25zXSk7XG5cbiAgY29uc3Qgb25Sb2xlQ2hhbmdlID0gKHJvbGU6IE9yZ1JvbGUsIHNlcnZpY2VBY2NvdW50OiBTZXJ2aWNlQWNjb3VudERUTykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRTZXJ2aWNlQWNjb3VudCA9IHsgLi4uc2VydmljZUFjY291bnQsIHJvbGU6IHJvbGUgfTtcbiAgICB1cGRhdGVTZXJ2aWNlQWNjb3VudCh1cGRhdGVkU2VydmljZUFjY291bnQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPGgyPlNlcnZpY2UgYWNjb3VudHM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggc2VydmljZSBhY2NvdW50IGJ5IG5hbWUuXCJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VRdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdBbGwgc2VydmljZSBhY2NvdW50cycsIHZhbHVlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnRXhwaXJlZCB0b2tlbnMnLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGNoYW5nZUZpbHRlcih7IG5hbWU6ICdleHBpcmVkVG9rZW5zJywgdmFsdWUgfSl9XG4gICAgICAgICAgICB2YWx1ZT17ZmlsdGVycy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICdleHBpcmVkVG9rZW5zJyk/LnZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3NlcnZpY2VBY2NvdW50cy5sZW5ndGggIT09IDAgJiYgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uU2VydmljZUFjY291bnRzQ3JlYXRlKSAmJiAoXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPVwib3JnL3NlcnZpY2VhY2NvdW50cy9jcmVhdGVcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICBBZGQgc2VydmljZSBhY2NvdW50XG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPFBhZ2VMb2FkZXIgLz59XG4gICAgICAgIHshaXNMb2FkaW5nICYmIHNlcnZpY2VBY2NvdW50cy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgc2VydmljZSBhY2NvdW50cyB5ZXQuXCJcbiAgICAgICAgICAgICAgYnV0dG9uSWNvbj1cImtleS1za2VsZXRvbi1hbHRcIlxuICAgICAgICAgICAgICBidXR0b25MaW5rPVwib3JnL3NlcnZpY2VhY2NvdW50cy9jcmVhdGVcIlxuICAgICAgICAgICAgICBidXR0b25UaXRsZT1cIkFkZCBzZXJ2aWNlIGFjY291bnRcIlxuICAgICAgICAgICAgICBidXR0b25EaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLlNlcnZpY2VBY2NvdW50c0NyZWF0ZSl9XG4gICAgICAgICAgICAgIHByb1RpcD1cIlJlbWVtYmVyLCB5b3UgY2FuIHByb3ZpZGUgc3BlY2lmaWMgcGVybWlzc2lvbnMgZm9yIEFQSSBhY2Nlc3MgdG8gb3RoZXIgYXBwbGljYXRpb25zLlwiXG4gICAgICAgICAgICAgIHByb1RpcExpbms9XCJcIlxuICAgICAgICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJcIlxuICAgICAgICAgICAgICBwcm9UaXBUYXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpc0xvYWRpbmcgJiYgc2VydmljZUFjY291bnRzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMudGFibGUsICdhZG1pbi1saXN0LXRhYmxlJyl9PlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lIGZpbHRlci10YWJsZS0taG92ZXJcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+QWNjb3VudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Sb2xlczwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VG9rZW5zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMzRweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7c2VydmljZUFjY291bnRzLm1hcCgoc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZXJ2aWNlQWNjb3VudExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgc2VydmljZUFjY291bnQ9e3NlcnZpY2VBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c2VydmljZUFjY291bnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgYnVpbHRJblJvbGVzPXtidWlsdEluUm9sZXN9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZU9wdGlvbnM9e3JvbGVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIG9uUm9sZUNoYW5nZT17b25Sb2xlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2V0VG9SZW1vdmU9e3NldFNlcnZpY2VBY2NvdW50VG9SZW1vdmV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXJ2aWNlQWNjb3VudFRvUmVtb3ZlICYmIChcbiAgICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgICBib2R5PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICZhcG9zO3tzZXJ2aWNlQWNjb3VudFRvUmVtb3ZlLm5hbWV9JmFwb3M7XG4gICAgICAgICAgICAgICAge0Jvb2xlYW4oc2VydmljZUFjY291bnRUb1JlbW92ZS50b2tlbnMpICYmXG4gICAgICAgICAgICAgICAgICBgIGFuZCAke3NlcnZpY2VBY2NvdW50VG9SZW1vdmUudG9rZW5zfSBhY2NvbXBhbnlpbmcgJHtwbHVyYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICd0b2tlbicsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VBY2NvdW50VG9SZW1vdmUudG9rZW5zXG4gICAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpcm1UZXh0PVwiRGVsZXRlXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHNlcnZpY2UgYWNjb3VudFwiXG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VydmljZUFjY291bnRUb1JlbW92ZShudWxsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgICAgICAgcmVtb3ZlU2VydmljZUFjY291bnQoc2VydmljZUFjY291bnRUb1JlbW92ZS5pZCk7XG4gICAgICAgICAgICAgIHNldFNlcnZpY2VBY2NvdW50VG9SZW1vdmUobnVsbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhYmxlOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIGAsXG4gICAgZmlsdGVyOiBjc3NgXG4gICAgICBtYXJnaW46IDAgJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGljb25Sb3c6IGNzc2BcbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgICB9XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMC41KX0gMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGAsXG4gICAgdW5pdFRvb2x0aXA6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGAsXG4gICAgdW5pdEl0ZW06IGNzc2BcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLjUpfSAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgZGlzYWJsZWQ6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LmRpc2FibGVkfTtcbiAgICBgLFxuICAgIGxpbms6IGNzc2BcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihTZXJ2aWNlQWNjb3VudHNMaXN0UGFnZSk7XG4iXSwibmFtZXMiOlsiY3giLCJCdXR0b24iLCJJY29uIiwidXNlU3R5bGVzMiIsIlVzZXJSb2xlUGlja2VyIiwiY29udGV4dFNydiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJSZWFjdCIsIm1lbW8iLCJPcmdSb2xlUGlja2VyIiwiZ2V0U3R5bGVzIiwiZ2V0U2VydmljZUFjY291bnRzQXJpYUxhYmVsIiwibmFtZSIsImdldFNlcnZpY2VBY2NvdW50c0VuYWJsZWRTdGF0dXMiLCJkaXNhYmxlZCIsIlNlcnZpY2VBY2NvdW50TGlzdEl0ZW0iLCJzZXJ2aWNlQWNjb3VudCIsIm9uUm9sZUNoYW5nZSIsInJvbGVPcHRpb25zIiwiYnVpbHRJblJvbGVzIiwib25TZXRUb1JlbW92ZSIsImVkaXRVcmwiLCJpZCIsInN0eWxlcyIsImNhblVwZGF0ZVJvbGUiLCJoYXNQZXJtaXNzaW9uSW5NZXRhZGF0YSIsIlNlcnZpY2VBY2NvdW50c1dyaXRlIiwiZGlzcGxheVJvbGVQaWNrZXIiLCJoYXNQZXJtaXNzaW9uIiwiQWN0aW9uUm9sZXNMaXN0IiwiQWN0aW9uVXNlclJvbGVzTGlzdCIsImVuYWJsZVJvbGVQaWNrZXIiLCJPcmdVc2Vyc1JvbGVVcGRhdGUiLCJhdmF0YXJVcmwiLCJsb2dpbiIsImxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQiLCJpY29uUm93Iiwib3JnSWQiLCJyb2xlIiwibmV3Um9sZSIsImlzRGlzYWJsZWQiLCJ0b2tlbnMiLCJTZXJ2aWNlQWNjb3VudHNEZWxldGUiLCJkaXNwbGF5TmFtZSIsInVzZUVmZmVjdCIsImNvbm5lY3QiLCJDb25maXJtTW9kYWwiLCJGaWx0ZXJJbnB1dCIsIkxpbmtCdXR0b24iLCJSYWRpb0J1dHRvbkdyb3VwIiwiY3NzIiwiUGFnZSIsImNoYW5nZUZpbHRlciIsImNoYW5nZVF1ZXJ5IiwiZmV0Y2hBQ09wdGlvbnMiLCJmZXRjaFNlcnZpY2VBY2NvdW50cyIsInJlbW92ZVNlcnZpY2VBY2NvdW50IiwidXBkYXRlU2VydmljZUFjY291bnQiLCJzZXRTZXJ2aWNlQWNjb3VudFRvUmVtb3ZlIiwiZ2V0TmF2TW9kZWwiLCJQYWdlTG9hZGVyIiwicGx1cmFsaXplIiwiRW1wdHlMaXN0Q1RBIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZNb2RlbCIsIm5hdkluZGV4Iiwic2VydmljZUFjY291bnRzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiU2VydmljZUFjY291bnRzTGlzdFBhZ2UiLCJpc0xvYWRpbmciLCJxdWVyeSIsImZpbHRlcnMiLCJzZXJ2aWNlQWNjb3VudFRvUmVtb3ZlIiwidXBkYXRlZFNlcnZpY2VBY2NvdW50IiwianVzdGlmeUNvbnRlbnQiLCJsYWJlbCIsInZhbHVlIiwiZmluZCIsImYiLCJmaWx0ZXIiLCJsZW5ndGgiLCJTZXJ2aWNlQWNjb3VudHNDcmVhdGUiLCJ0YWJsZSIsIndpZHRoIiwibWFwIiwiQm9vbGVhbiIsInRoZW1lIiwic3BhY2luZyIsInJvdyIsInVuaXRUb29sdGlwIiwidW5pdEl0ZW0iLCJjb2xvcnMiLCJ0ZXh0IiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=
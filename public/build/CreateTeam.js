"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["CreateTeam"],{

/***/ "./public/app/features/teams/CreateTeam.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTeam": () => (/* binding */ CreateTeam),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class CreateTeam extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "create", async formModel => {
      const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/teams', formModel);

      if (result.teamId) {
        await app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.fetchUserPermissions();
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push(`/org/teams/edit/${result.teamId}`);
      }
    });
  }

  render() {
    const {
      navModel
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
          onSubmit: this.create,
          children: ({
            register
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
            label: "New Team",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Name",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('name', {
                required: true
              }), {
                id: "team-name",
                width: 60
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
                children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  children: "Email"
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                  content: "This is optional and is primarily used for allowing custom team avatars.",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    name: "info-circle",
                    style: {
                      marginLeft: 6
                    }
                  })
                })]
              }),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('email'), {
                type: "email",
                placeholder: "email@test.com",
                width: 60
              }))
            }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "gf-form-button-row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                variant: "primary",
                children: "Create"
              })
            }))]
          })
        })
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'teams')
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(CreateTeam));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVGVhbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFXTyxNQUFNZ0IsVUFBTixTQUF5QmYsZ0RBQXpCLENBQThDO0FBQUE7QUFBQTs7QUFBQSxvQ0FDMUMsTUFBT2dCLFNBQVAsSUFBOEI7QUFDckMsWUFBTUMsTUFBTSxHQUFHLE1BQU1QLCtEQUFhLEdBQUdRLElBQWhCLENBQXFCLFlBQXJCLEVBQW1DRixTQUFuQyxDQUFyQjs7QUFDQSxVQUFJQyxNQUFNLENBQUNFLE1BQVgsRUFBbUI7QUFDakIsY0FBTUwsMEVBQUEsRUFBTjtBQUNBSCxRQUFBQSxrRUFBQSxDQUFzQixtQkFBa0JNLE1BQU0sQ0FBQ0UsTUFBTyxFQUF0RDtBQUNEO0FBQ0YsS0FQa0Q7QUFBQTs7QUFRbkRHLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFlLEtBQUtDLEtBQTFCO0FBRUEsd0JBQ0UsdURBQUMscUVBQUQ7QUFBTSxjQUFRLEVBQUVELFFBQWhCO0FBQUEsNkJBQ0UsdURBQUMsOEVBQUQ7QUFBQSwrQkFDRSx1REFBQyw2Q0FBRDtBQUFNLGtCQUFRLEVBQUUsS0FBS0UsTUFBckI7QUFBQSxvQkFDRyxDQUFDO0FBQUVDLFlBQUFBO0FBQUYsV0FBRCxrQkFDQyx3REFBQyxpREFBRDtBQUFVLGlCQUFLLEVBQUMsVUFBaEI7QUFBQSxvQ0FDRSx1REFBQyw4Q0FBRDtBQUFPLG1CQUFLLEVBQUMsTUFBYjtBQUFBLHFDQUNFLHVEQUFDLDhDQUFELG9CQUFXQSxRQUFRLENBQUMsTUFBRCxFQUFTO0FBQUVDLGdCQUFBQSxRQUFRLEVBQUU7QUFBWixlQUFULENBQW5CO0FBQWlELGtCQUFFLEVBQUMsV0FBcEQ7QUFBZ0UscUJBQUssRUFBRTtBQUF2RTtBQURGLGNBREYsZUFJRSx1REFBQyw4Q0FBRDtBQUNFLG1CQUFLLGVBQ0gsd0RBQUMsOENBQUQ7QUFBQSwwREFDRTtBQUFBO0FBQUEsa0JBREYsZ0JBRUUsdURBQUMsZ0RBQUQ7QUFBUyx5QkFBTyxFQUFDLDBFQUFqQjtBQUFBLHlDQUNFLHVEQUFDLDZDQUFEO0FBQU0sd0JBQUksRUFBQyxhQUFYO0FBQXlCLHlCQUFLLEVBQUU7QUFBRUMsc0JBQUFBLFVBQVUsRUFBRTtBQUFkO0FBQWhDO0FBREYsa0JBRkY7QUFBQSxnQkFGSjtBQUFBLHFDQVVFLHVEQUFDLDhDQUFELG9CQUFXRixRQUFRLENBQUMsT0FBRCxDQUFuQjtBQUE4QixvQkFBSSxFQUFDLE9BQW5DO0FBQTJDLDJCQUFXLEVBQUMsZ0JBQXZEO0FBQXdFLHFCQUFLLEVBQUU7QUFBL0U7QUFWRixjQUpGLCtCQWdCRTtBQUFLLHVCQUFTLEVBQUMsb0JBQWY7QUFBQSxxQ0FDRSx1REFBQywrQ0FBRDtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTyxFQUFDLFNBQTlCO0FBQUE7QUFBQTtBQURGLGNBaEJGO0FBQUE7QUFGSjtBQURGO0FBREYsTUFERjtBQWdDRDs7QUEzQ2tEOztBQThDckQsU0FBU0csZUFBVCxDQUF5QkMsS0FBekIsRUFBNEM7QUFDMUMsU0FBTztBQUNMUCxJQUFBQSxRQUFRLEVBQUVWLHdFQUFXLENBQUNpQixLQUFLLENBQUNDLFFBQVAsRUFBaUIsT0FBakI7QUFEaEIsR0FBUDtBQUdEOztBQUVELGlFQUFlbkIsb0RBQU8sQ0FBQ2lCLGVBQUQsQ0FBUCxDQUF5QmQsVUFBekIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL0NyZWF0ZVRlYW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGaWVsZCwgSW5wdXQsIEZpZWxkU2V0LCBMYWJlbCwgVG9vbHRpcCwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG5hdk1vZGVsOiBOYXZNb2RlbDtcbn1cblxuaW50ZXJmYWNlIFRlYW1EVE8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUZWFtIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjcmVhdGUgPSBhc3luYyAoZm9ybU1vZGVsOiBUZWFtRFRPKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvdGVhbXMnLCBmb3JtTW9kZWwpO1xuICAgIGlmIChyZXN1bHQudGVhbUlkKSB7XG4gICAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL29yZy90ZWFtcy9lZGl0LyR7cmVzdWx0LnRlYW1JZH1gKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmNyZWF0ZX0+XG4gICAgICAgICAgICB7KHsgcmVnaXN0ZXIgfSkgPT4gKFxuICAgICAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9XCJOZXcgVGVhbVwiPlxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cInRlYW0tbmFtZVwiIHdpZHRoPXs2MH0gLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD1cIlRoaXMgaXMgb3B0aW9uYWwgYW5kIGlzIHByaW1hcmlseSB1c2VkIGZvciBhbGxvd2luZyBjdXN0b20gdGVhbSBhdmF0YXJzLlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImluZm8tY2lyY2xlXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCdlbWFpbCcpfSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsQHRlc3QuY29tXCIgd2lkdGg9ezYwfSAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAndGVhbXMnKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENyZWF0ZVRlYW0pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlBhZ2UiLCJCdXR0b24iLCJGb3JtIiwiRmllbGQiLCJJbnB1dCIsIkZpZWxkU2V0IiwiTGFiZWwiLCJUb29sdGlwIiwiSWNvbiIsImdldEJhY2tlbmRTcnYiLCJsb2NhdGlvblNlcnZpY2UiLCJjb25uZWN0IiwiZ2V0TmF2TW9kZWwiLCJjb250ZXh0U3J2IiwiQ3JlYXRlVGVhbSIsImZvcm1Nb2RlbCIsInJlc3VsdCIsInBvc3QiLCJ0ZWFtSWQiLCJmZXRjaFVzZXJQZXJtaXNzaW9ucyIsInB1c2giLCJyZW5kZXIiLCJuYXZNb2RlbCIsInByb3BzIiwiY3JlYXRlIiwicmVnaXN0ZXIiLCJyZXF1aXJlZCIsIm1hcmdpbkxlZnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistStartPage"],{

/***/ "./public/app/features/playlist/PlaylistStartPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistStartPage": () => (/* binding */ PlaylistStartPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlaylistSrv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/playlist/PlaylistSrv.ts");

const PlaylistStartPage = ({
  match
}) => {
  _PlaylistSrv__WEBPACK_IMPORTED_MODULE_0__.playlistSrv.start(parseInt(match.params.id, 10));
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaylistStartPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RTdGFydFBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7QUFJTyxNQUFNQyxpQkFBNEIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFlO0FBQ3pERixFQUFBQSwyREFBQSxDQUFrQkksUUFBUSxDQUFDRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsRUFBZCxFQUFrQixFQUFsQixDQUExQjtBQUNBLFNBQU8sSUFBUDtBQUNELENBSE07QUFLUCxpRUFBZUwsaUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdFN0YXJ0UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBwbGF5bGlzdFNydiB9IGZyb20gJy4vUGxheWxpc3RTcnYnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IGlkOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0U3RhcnRQYWdlOiBGQzxQcm9wcz4gPSAoeyBtYXRjaCB9KSA9PiB7XG4gIHBsYXlsaXN0U3J2LnN0YXJ0KHBhcnNlSW50KG1hdGNoLnBhcmFtcy5pZCwgMTApKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdFN0YXJ0UGFnZTtcbiJdLCJuYW1lcyI6WyJwbGF5bGlzdFNydiIsIlBsYXlsaXN0U3RhcnRQYWdlIiwibWF0Y2giLCJzdGFydCIsInBhcnNlSW50IiwicGFyYW1zIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9
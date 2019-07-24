webpackHotUpdate("static/development/pages/editor.js",{

/***/ "./pages/editor.js":
/*!*************************!*\
  !*** ./pages/editor.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_airtable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/airtable */ "./api/airtable.js");
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project */ "./components/project.js");
var _this = undefined;








/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var projectId = router.query.projectId;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_project__WEBPACK_IMPORTED_MODULE_6__["default"], {
    projectId: _this.props.projectId
  }));
}); // function Editor() {
//   const [product, setProduct] = useState(null);
//   const airtable = new Airtable('Products');
//   useEffect(() => {
//     airtable.findData(projectId, setProduct)
//   });
//   return (
//     <div>
//     {!product ? (<p>Loading...</p>) : (
//       <p>My Project Is: {product.get('Name')}</p>
//     )}
//       </div>
//   );
// }
// export default Editor;

/***/ })

})
//# sourceMappingURL=editor.js.b9e0ca08d3a2529cddb2.hot-update.js.map
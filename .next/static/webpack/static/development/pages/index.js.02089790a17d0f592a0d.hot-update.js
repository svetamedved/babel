webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/onboarding.js":
/*!**********************************!*\
  !*** ./components/onboarding.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_airtable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/airtable */ "./api/airtable.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Onboarding() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var airtable = new _api_airtable__WEBPACK_IMPORTED_MODULE_4__["default"]('Products');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    airtable.fetchData(setProducts);
  }); // if (!products.count) {
  //   return (
  //     <div>Loading...</div>
  //   );
  // }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, !products ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "ok...") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "aa..."));
}

/* harmony default export */ __webpack_exports__["default"] = (Onboarding);

/***/ })

})
//# sourceMappingURL=index.js.02089790a17d0f592a0d.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/airtable.js":
/*!*************************!*\
  !*** ./api/airtable.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Airtable() {
  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  var api_base = new Airtable({
    apiKey: 'keyBCQBasy6oWdP63'
  }).base('app3H9oIfok6KQvG5');

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      projects = _React$useState2[0],
      setProjects = _React$useState2[1];

  useEffect(function () {
    var fetched_projects = [];
    api_base('Projects').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function (record) {
        fetched_projects.push(record);
        console.log('Retrieved', record.get('Name'));
      }); // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.

      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
        return;
      }

      setProjects(fetched_projects);
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "ok");
}

/* harmony default export */ __webpack_exports__["default"] = (Airtable);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ })

})
//# sourceMappingURL=index.js.9820d55794c8d8fdad5b.hot-update.js.map
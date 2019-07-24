webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/airtable.js":
/*!*************************!*\
  !*** ./api/airtable.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Airtable(_ref) {
  var tableName = _ref.tableName,
      callback = _ref.callback;

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  var api_base = new Airtable({
    apiKey: 'keyBCQBasy6oWdP63'
  }).base('app3H9oIfok6KQvG5');

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var fetchData = function fetchData(tableName, callback) {
    var fetchedRecords = [];
    api_base(tableName).select().eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function (record) {
        fetchedRecords.push(record);
      }); // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.

      fetchNextPage();
    }, function done(err) {
      if (err) {
        console.error(err);
        return;
      }

      callback(fetchedRecords);
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Airtable);

/***/ })

})
//# sourceMappingURL=index.js.d341fd546da53de37a4b.hot-update.js.map
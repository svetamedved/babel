webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/airtable.js":
/*!*************************!*\
  !*** ./api/airtable.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Airtable; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Airtable =
/*#__PURE__*/
function () {
  function Airtable(tableName) {
    _classCallCheck(this, Airtable);

    var _Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

    var api = new _Airtable({
      apiKey: 'keyBCQBasy6oWdP63'
    }).base('app3H9oIfok6KQvG5');
    this.table = api(tableName);
  }

  _createClass(Airtable, [{
    key: "fetchData",
    value: function fetchData(callback) {
      var fetchedRecords = [];
      this.table.select().eachPage(function page(records, fetchNextPage) {
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
    }
  }]);

  return Airtable;
}();



/***/ })

})
//# sourceMappingURL=index.js.a2b6f79cd13a71bd2fcc.hot-update.js.map
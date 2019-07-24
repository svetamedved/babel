webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/airtable.js":
/*!*************************!*\
  !*** ./api/airtable.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Airtable(_ref) {
  var tableName = _ref.tableName,
      callback = _ref.callback;

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  var api_base = new Airtable({
    apiKey: 'keyBCQBasy6oWdP63'
  }).base('app3H9oIfok6KQvG5');

  var fetchData = function fetchData() {
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
//# sourceMappingURL=index.js.4ea3e928966d17ca2f27.hot-update.js.map
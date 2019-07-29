
export default class Airtable {
  constructor(tableName) {
    var Airtable = require('airtable');
    var api = new Airtable({apiKey: 'keyBCQBasy6oWdP63'}).base('app3H9oIfok6KQvG5');
    this.table = api(tableName)
  }

  listData(callback) {
    var fetchedRecords = [];
    this.table.select().eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function(record) {
        fetchedRecords.push(record);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
      callback(fetchedRecords);
    });
  }

  findData(id, callback) {
    this.table.find(id, function(err, record) {
      if (err) { console.error(err); return; }
      callback(record);
    });
  }

  findMany(ids, callback) {
    var fetchedRecords = [];
    ids.forEach(function cbck(id) {
      this.findData(id, function(record) {
        fetchedRecords.push(record);
        if (fetchedRecords.count == ids.count) {
          callback(fetchedRecords);
        }
      });
    }, this);
  }
}

var RecordCollector = function(name, cash) {
  this.name = name;
  this.cash = cash;
  this.records = [];
}

RecordCollector.prototype = {

  addRecord: function(record) {
    this.records.push(record);
  },

  buyRecord: function(recordStore, record) {
    this.cash -= record.price;
    recordStore.cash += record.price;
    var index = recordStore.records.indexOf(record);
    recordStore.records.splice(index, 1);
    this.records.push(record);
  },

  sellRecord: function(recordStore, record) {
    this.cash += record.price;
    recordStore.cash -= record.price;
    var index = this.records.indexOf(record);
    this.records.splice(index, 1);
    recordStore.records.push(record);
  },
}

module.exports = RecordCollector;
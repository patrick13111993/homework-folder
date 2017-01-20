var RecordStore = function(name, city, cash) {
this.name = name;
this.city = city;
this.cash = cash;
this.records = [];
}

RecordStore.prototype = {

  addRecord: function(record) {
    this.records.push(record);
  },

  listRecords: function() {
    var list = "";
    for (var item of this.records) {
      var text = ("Artist: " + item.artist + ", Title: " + item.title + ", Price: " + item.price);
      list += text;
    }
    return list;
  },

  sellRecord: function(record) {
    this.cash += record.price;
    var index = this.records.indexOf(record);
    this.records.splice(index, 1);
  },

  reportInventory: function() {
    var total = 0;
    total += this.cash;
    for (var record of this.records) {
      total += record.price;
    }
    return total;
  }

}

module.exports = RecordStore;
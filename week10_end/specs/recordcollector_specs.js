var RecordCollector = require("../recordcollector");
var RecordStore = require("../recordstore");
var Record = require("../record");
var assert = require("assert");

describe("RecordCollector",function() {
  var recordCollector;
  var recordStore;
  var record;
  var record2;

  beforeEach(function(){
    recordCollector = new RecordCollector("Patrick", 10.00);
    recordStore = new RecordStore("Rick's Records", "Edinburgh", 0);
    record = new Record("NOMA", "Brain Power", 4.99);
    record2 = new Record("Paul van Dyk", "Words", 5.99);
    recordStore.addRecord(record);
    recordCollector.addRecord(record2);
  });

  it("should buy record", function(){
    recordCollector.buyRecord(recordStore, record);
    assert.equal(5.01, recordCollector.cash);
    assert.equal(2, recordCollector.records.length)
  });

  it("should sell record", function(){
    recordCollector.sellRecord(recordStore, record2);
    assert.equal(15.99, recordCollector.cash);
    assert.equal(0, recordCollector.records.length)
  });
});
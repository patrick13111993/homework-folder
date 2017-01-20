var RecordStore = require("../recordstore");
var Record = require("../record");
var assert = require("assert");

describe("RecordStore",function() {
  var recordStore;
  var record;
  var record2;

  beforeEach(function(){
    recordStore = new RecordStore("Rick's Records", "Edinburgh", 0);
    record = new Record("NOMA", "Brain Power", 4.99);
    record2 = new Record("Paul van Dyk", "Words", 5.99);
  });

  it("should return name", function(){
    assert.equal("Rick's Records", recordStore.name);
  });

  it("should return city", function(){
    assert.equal("Edinburgh", recordStore.city);
  });

  it("should return cash", function(){
    assert.equal(0, recordStore.cash);
  });

  it("should add new record", function(){
    recordStore.addRecord(record);
    assert.equal(record, recordStore.records.pop());
  });

  it("should list records", function(){
    recordStore.addRecord(record);
    assert.equal("Artist: NOMA, Title: Brain Power, Price: 4.99", recordStore.listRecords());
  });

  it("should remove record from array and add cash", function(){
    recordStore.sellRecord(record);
    assert.equal(0, recordStore.records.length);
    assert.equal(4.99, recordStore.cash);
  });

  it("should report networth", function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    recordStore.sellRecord(record2);
    assert.equal(10.98, recordStore.reportInventory());
  });
});
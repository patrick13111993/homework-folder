var Record = require("../record");
var assert = require("assert");

describe("Record",function() {
  var record;

  beforeEach(function(){
    record = new Record("NOMA", "Brain Power", 4.99);
  });

  it("should return artist", function(){
    assert.equal("NOMA", record.artist);
  });

  it("should return title", function(){
    assert.equal("Brain Power", record.title);
  });

  it("should return price", function(){
    assert.equal(4.99, record.price);
  });

  it("should set a new price", function(){
    record.setPrice(5.00);
    assert.equal(5.00, record.price);
  });

});
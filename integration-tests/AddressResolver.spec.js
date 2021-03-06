var Cell = require("../lib/Cell.js")
, dna = {
  "membrane":{},
  "plasma":{
    "consumerService":{
      "source":"integration-tests/consumerService",
      "address":"consumer@addressResolver",
    },
    "producerService":{
      "source":"integration-tests/producerService",
      "address":"producer@addressResolver",
      contacts: {
        "service": "consumer@addressResolver"
      }
    }
  },
  "nucleus":{}
};

describe("AddressResolution", function(){
  it("allows an organel to register as address resolver and manage its own addressable organels", function(next){
    var cell = new Cell(dna);
    
    cell.plasma.once("success", function () {
      cell.plasma.once("finished", function () {
        next(); //success + finished
      })
    });
    
    cell.plasma.emit("system.start");
  });
});
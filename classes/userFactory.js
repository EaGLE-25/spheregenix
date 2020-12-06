const Transaction = require("./transaction");

class UserFactory{

  getTransaction(land,mode){
    switch(mode){
      case "sell":
       let transaction = new Transaction(land,mode);
       return transaction;
    }
  }
}

module.exports = UserFactory;
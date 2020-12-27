const UserAction = require("./userAction");
const Database = require("./database");
const LandSchema = require("../models/land");
const User = require("../models/user");


class UserInterface{
   setUser(user){
     this.user = user
   }

   sellMyLand(land){
     const action = new UserAction(land);
     action.sell();
   }

  getLand(condition={}){
     const database = new Database(LandSchema);
     const result = database.get(condition);
     return result;
  }

  wantToBuy(landId){
    const database = new Database(User);
    const result = database.update({_id:"5fe76b87f3de2e1e9c9780a0"},{$push:{want_list:landId}});
    return result;
  }
}


module.exports = UserInterface;
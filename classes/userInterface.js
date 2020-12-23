const UserAction = require("./userAction");
const Database = require("./database");
const LandSchema = require("../models/land");

console.log(LandSchema);

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
}


module.exports = UserInterface;
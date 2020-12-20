const UserAction = require("./userAction");

class UserInterface{
   setUser(user){
     this.user = user
   }

   sellMyLand(reqObj){
     const action = new UserAction(reqObj.body);
     action.sell();
   }
}


module.exports = UserInterface;
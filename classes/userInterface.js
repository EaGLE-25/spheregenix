const UserAction = require("./userAction");

class UserInterface{
   setUser(user){
     this.user = user
   }

   sellMyLand(land){
     const action = new UserAction(land);
     action.sell();
   }
}

module.exports = UserInterface;
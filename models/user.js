const mongoose  = require("mongoose");


const user = new mongoose.Schema({
  user:String,
  want_list:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"LandSchema"
  }]
})

const model = mongoose.model("User",user);

module.exports = model;
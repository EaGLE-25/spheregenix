const mongoose  = require("mongoose");

const landSchema = new mongoose.Schema({
  length:String,
  breadth:String,
  square_feet:String,
  conversion:String,
  type:String,
  price:String,
  locality:String,
  pincode:String,
  address:String,
  approval:{default:false}
})

module.exports = mongoose.model("LandSchema",landSchema);
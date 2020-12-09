const mongoose  = require("mongoose");

const landSchema = new mongoose.Schema({
  length:Number,
  breadth:Number,
  square_feet:Number,
  conversion:String,
  type:String,
  price:Number,
  locality:String,
  pincode:Number,
  address:String,
  approval:{default:false}
})

module.exports = mongoose.model("LandSchema",landSchema);
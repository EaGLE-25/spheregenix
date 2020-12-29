const mongoose  = require("mongoose");

const query = new mongoose.Schema({
  name:String,
  email:String,
  phone:String,
  query:String
})

const model = mongoose.model("Query",query);

module.exports = model;
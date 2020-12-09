require('dotenv');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const UserInterface = require("./classes/userInterface");

let userInterface = new UserInterface();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

mongoose
	.connect('mongodb+srv://saidarshan:R@mb02501@cluster0.wjhf4.mongodb.net/spheregenix?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Connected to DB');
	})
	.catch((err) => {
		console.log('ERROR', err.message);
  });
  

app.get("/",(req,res)=>{
  res.render("home");
})

app.get("/sell",(req,res)=>{
	res.render("sell");
})

app.post("/sell-land",(req,res)=>{
	userInterface.sellMyLand(req.body);
})

app.listen(process.env.PORT || 5001, process.env.IP, function () {
	console.log("Spheregenix started");
})
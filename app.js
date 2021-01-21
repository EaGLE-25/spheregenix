// require('dotenv');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
// const multer = require("multer");
// const upload = multer();
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

app.get("/lands",(req,res)=>{
	userInterface.getLand().then((allLands)=>{
		res.render("lands",{allLands:allLands});
	})
	.catch((err)=>{
		res.render("error",err);
	});
})

app.get("/lands/:id",(req,res)=>{
	userInterface.getLand({_id:req.params.id}).then((lands)=>{
		res.render("showLand",{land:lands[0]});
	})
	.catch((err)=>{
		res.render("error",err);
	})
})

app.get("/land/sell",(req,res)=>{
	res.render("sell");
})

app.get("/signin",(req,res)=>{
	res.render("signin");
})

app.get("/login",(req,res)=>{
	res.render("login");
})

app.post("/land/buy",bodyParser.json(),(req,res)=>{
	const landId = req.body._id;
	userInterface.wantToBuy(landId).then(()=>{
		res.json(true);
	})
	.catch((err)=>{
		res.json(err);
	})
})

app.post("/lands",bodyParser.json(),(req,res)=>{
	console.log("from server",req.body);
	userInterface.sellMyLand(req.body).then(()=>{
		res.json(true);
	})
	.catch((err)=>{
		res.json(err);
	})
})

app.post("/queries",bodyParser.json(),(req,res)=>{
	userInterface.postQuery(req.body).then(()=>{
		res.json(true);
	})
	.catch((err)=>{
		res.json(err);
	})
})


app.listen(process.env.PORT || 5001, process.env.IP, function () {
	console.log("Spheregenix started");
})

app.get("*",(req,res)=>{
	res.send("404 not found");
})


const Database = require("./database");
const LandSchema = require("../models/land");

class Transaction{
  constructor(land,mode){
    this.land = land;
    this.mode = mode;
  }

  sell(){
    const db = new Database(LandSchema);
    db.add(this.land);
  }
}

module.exports = Transaction;
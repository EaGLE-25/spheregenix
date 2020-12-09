const Database = require("./database");
const LandSchema = require("../models/land");

class Actions{
  constructor(land){
    this.land = land;
  }

  sell(){
    const db = new Database(LandSchema);
    db.add(this.land);
  }
}

module.exports = Actions;
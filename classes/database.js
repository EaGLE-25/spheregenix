class Database{
  constructor(model){
    this.model = model;
  }
  
  add(dataObj){
    this.model.create(dataObj, function (err, data){
      if(err){
        throw new Error("database error");
      }else{
        console.log("from db",data);
      }
    });
  }
}

module.exports = Database;
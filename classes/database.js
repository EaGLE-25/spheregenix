class Database{
  constructor(model){
    this.model = model;
  }
  
  add(dataObj){
    const promise = this.model.create(dataObj);
    promise.then((data)=>{
      console.log("from DB",data);
    })
  }

  get(options){
    const promise = this.model.find(options).exec();
    return promise;
  }

  update(filter,update={}){
    const promise = this.model.findOneAndUpdate(filter,update).exec();
    return promise;
  }
}

module.exports = Database;
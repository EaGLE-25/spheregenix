class Database{
  constructor(model){
    this.model = model;
  }
  
  add(dataObj){
    const promise = this.model.create(dataObj);
    promise.then((data)=>{
      console.log("from DB",data);
      console.log(typeof(data.length));
    })
  }

  get(options){
    const promise = this.model.find(options).exec();
    return promise;
  }
}

module.exports = Database;
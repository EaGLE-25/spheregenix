class Land{
  constructor(landObject){
    this.length = landObject.length;
    this.breadth = landObject.breadth;
    this.square_feet = landObject.square_feet;
    this.conversion = landObject.conversion;
    this.type = landObject.type;
    this.price = landObject.price;
    this.locality = landObject.locality;
    this.pincode  = landObject.pincode;
    this.address = landObject.address;
  }
}

module.exports = Land;
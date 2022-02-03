const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fuelSchema = new Schema({
 date:String,
 price:String,
 ODOkms:String,
 perltrprice:String,
 notes:String,
 tankfull:String,
 uploadbill:String
});

var Fuel = mongoose.model("fueldetail", fuelSchema);
module.exports = Fuel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
 date:String,
 price:String,
 ODOkms:String,
 type:String,
 notes:String,
 uploadbill:String
});

var Service = mongoose.model("serviedetail", serviceSchema);
module.exports = Service;

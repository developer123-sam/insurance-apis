const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referalcodeSchema = new Schema({
 name:String,
 number:String,
 referalcode:String
});

var Referal = mongoose.model("referalcode", referalcodeSchema);
module.exports = Referal;

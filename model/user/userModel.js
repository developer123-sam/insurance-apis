const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  { 
    number: {
    type: String,
  },
  username:{
   type:String 
  },
  email:{
    type:String
  },
  postaladdress:{
    type:String
  },
  alternativepno:{
    type:Number
  },tokens: {
    type: String,
  },
  image:{
    type:String
  }
  },
  
  {
    timestamps: true,
  }
);


var User = mongoose.model("user", userSchema);
module.exports = User;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicalSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:"user"
  },
    vehicalnumber: {
    type: 
      {
        statecode:String,
        citycode:String,
        uniqueletter:String,
        uniqueno:String
      },
  },
  addinc  : {
    type: 
      {   
        incimage:String,
        incdate:String,
      },
  },
  addrc  : {
    type: 
      {
        rcimage:String,
        rcdate:String,
      },
  },
  modelnumber  : {
    type: 
      {     
        modelimage:String,
        modeldate:String,
      },
  },
  addemission: {
    type: 
      {
        emissionimage:String,
        emissiondate:String,
      },
  },
  adddocument  : {
    type: 
      {
        documentname:String,
        documentimage:String,
        documentdate:String,
        documentremark:String,
      },
  },
  addinsurance  : {
    type: 
      {
        insuranceid:String,
        insuranceimage:String,
        insurancedocname:String,
        insurancedate:String
      },
  },
  newinsurance: {
    type: String,
    enum: ["health", "life","corporate"]
  },
  active: {
    type: Boolean,
    default: true,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

var Vehical = mongoose.model("vehicaldetail", vehicalSchema);
module.exports = Vehical;

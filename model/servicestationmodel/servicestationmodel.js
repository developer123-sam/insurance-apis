const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicestationSchema = new Schema({
    vehicalnumber: {
    type: 
      {
        statecode:String,
        citycode:String,
        uniqueletter:String,
        uniqueno:String
      },
  },
        customermn:String,
        ODOkms  :String ,
        type: String,
        Estimatequote  :String,
        estimedeldt:String,
        fuellevel  :String,
nextvisitubtervals  : {
    type: 
      {
        kms:String,
        month:String,
      },
  },
        notes:  String,
active: {
        type: Boolean,
        default: true,
  },
modifiedOn: {
        type: Date,
        default: Date.now,
  },
});

var Servicesation = mongoose.model("servicestation", servicestationSchema);
module.exports = Servicesation;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fuelnotificationSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    usernofication:{
        type:String
    }
});

var FuelNotification = mongoose.model("fuelnotification", fuelnotificationSchema);
module.exports = FuelNotification;

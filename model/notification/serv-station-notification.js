const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sstatoinnotificationSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    usernofication:{
        type:String
    }
});

var ServiceStation = mongoose.model("serStationNotification", sstatoinnotificationSchema);
module.exports = ServiceStation;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicenotificationSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    usernofication:{
        type:String
    }
});

var Service = mongoose.model("servicenotification", servicenotificationSchema);
module.exports = Service;

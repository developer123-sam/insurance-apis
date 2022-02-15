const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    usernofication: {
        type: String,
    },
    type: {
        type: String,
        enum: ["fuel", "service"],
        required: true
    }
});

var Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification;

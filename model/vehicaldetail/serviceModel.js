const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const User = require("../user/userModel");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    ODOkms: {
        type: String,
        required: true
    },
    // type: {
    //     type: String,
    //     required: true
    // },
    notes: {
        type: String,
        required: true
    },
    uploadbill: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
})

var Service = mongoose.model("serviedetail", serviceSchema);
module.exports = Service;

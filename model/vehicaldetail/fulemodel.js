const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const Schema = mongoose.Schema;

const fuelSchema = new Schema({
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
    perltrprice: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    tankfull: {
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
});

var Fuel = mongoose.model("fueldetail", fuelSchema);
module.exports = Fuel;

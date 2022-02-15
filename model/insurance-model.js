const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InsuranceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    addinsurance: {
        type:
        {
            insuranceid: String,
            insuranceimage: String,
            insurancedocname: String,
            insurancedate: String
        },
    },
    newinsurance: {
        type: String,
        enum: ["health", "life", "corporate"]
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

var Insurance = mongoose.model("insurance", InsuranceSchema);
module.exports = Insurance;
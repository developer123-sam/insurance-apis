const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    adddocument: {
        type:
        {
            documentname: String,
            documentimage: String,
            documentdate: String,
            documentremark: String,
        },
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

var Document = mongoose.model("document", documentSchema);
module.exports = Document;
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shareSchema = new Schema({
    shareby: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    name: {
        type: String,
        required: true
    },
    shareto: {
        type: String,
        required: true,
    },
    document: {
        type: Schema.Types.ObjectId,
        ref: "document"
    },
    vehical: {
        type: Schema.Types.ObjectId,
        ref: "vehical"
    },
    insurance: {
        type: Schema.Types.ObjectId,
        ref: "insurance"
    }
    //     required: true,
    //     refPath: 'vehicalModel'
    // },
    // vehicalModel: {
    //     type: String,
    //     required: true,
    //     enum: ['document', 'vehical', "insurance"],
    // },
},
    {
        timestamps: true
    }
)

const Share = mongoose.model("share", shareSchema)
module.exports = Share
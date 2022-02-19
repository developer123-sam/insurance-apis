const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shareSchema = new Schema({
    shareby: {
        type: Schema.Types.ObjectId,
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
        type: [Schema.Types.ObjectId],
        ref: 'document',
        default: [],
    },
    vehical: {
        type: [Schema.Types.ObjectId],
        ref: 'vehical',
        default: [],
    },
    insurance: {
        type: [Schema.Types.ObjectId],
        ref: 'insurance',
        default: [],
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
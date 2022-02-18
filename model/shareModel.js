const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shareSchema = new Schema({
    shareby: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    shareto: {
        type: String,
        required: true,
        ref: "user"
    },
    shareddId: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'vehicalModel'
    },
    vehicalModel: {
        type: String,
        required: true,
        enum: ['document', 'vehical', "insurance"],
    },
},
    {
        timestamps: true
    }
)

const Share = mongoose.model("share", shareSchema)
module.exports = Share
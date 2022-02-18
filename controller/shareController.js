const Share = require("../model/shareModel")
const Vehicle = require("../model/vehical-model")

// SHARE_POST

exports.share = async (req, res) => {
    try {
        const share = new Share(req.body);
        share.shareby = req.user._id
        share.save()
        return res.status(200).json({ msg: "share successfullly" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// GET-SHARE-POST

// exports.getshare = async (req, res) => {
//     try {
//         const findvehicle = await Vehicle.find({})
//     } catch (error) {

//     }
// }
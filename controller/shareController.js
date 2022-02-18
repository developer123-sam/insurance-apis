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

// GET-SHARE-POST-document

exports.sharedocument = async (req, res) => {
    try {
        const getdocument = await Share.find({})
            .populate("insurance")
            .populate("document")
            .populate("vehical")
        return res.status(200).json({ msg: "get share document ", getdocument })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// GET-SHARE-POST-VEHICLE

exports.sharevehicle = async (req, res) => {
    try {
        const sharevehicle = await Share.find({ "vehicalModel": "vehical" })
        return res.status(200).json({ msg: "get share vehical ", sharevehicle })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// GET-SHARE-POST-INSURANCE

exports.shareinsurance = async (req, res) => {
    try {
        const shareinsurance = await Share.find({ "vehicalModel": "insurance" })
        return res.status(200).json({ msg: "get share insurance ", shareinsurance })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// GET - ALL _SHARE

exports.getshare = async (req, res) => {
    try {
        const shareinsurance = await Share.find({})
        return res.status(200).json({ msg: "get share insurance ", shareinsurance })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}
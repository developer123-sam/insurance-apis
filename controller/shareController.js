const Share = require("../model/shareModel")
const Vehicle = require("../model/vehical-model")
const User = require("../model/user/userModel")
// SHARE_POST

exports.share = async (req, res) => {
    try {
        const shareto = req.body.shareto;
        const checkUser = await User.findOne({
            number: shareto
        });
        if (checkUser) {
            let share = await Share.findOne({
                shareto: req.body.shareto,
                shareby: req.user._id
            });

            if (!share) {
                share = new Share(req.body);
            }
            console.log(share.document)
            console.log(share.vehical)
            console.log(share.insurance)
            share.document.addToSet(...req.body.document);
            share.vehical.addToSet(...req.body.vehical);
            share.insurance.addToSet(...req.body.insurance);

            await share.save();
            return res.status(200).json({ msg: "share successfully", share })
        }
        else {
            return res.json({ msg: "number not register please share the details with register number" })
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}


// GET-SHARE-POST-document

exports.sharedocument = async (req, res) => {
    try {
        const getdocument = await Share.find({}, { document: 1 })
            .populate("shareby", "number username")
            .populate("document")

        return res.status(200).json({ msg: "get share document ", getdocument })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// GET-SHARE-POST-VEHICLE

exports.sharevehicle = async (req, res) => {
    try {
        const sharevehicle = await Share.find({}, { vehical: 1 })
            .populate("shareby", "number username")
            .populate("vehical")
        return res.status(200).json({ msg: "get share vehical ", sharevehicle })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// GET-SHARE-POST-INSURANCE

exports.shareinsurance = async (req, res) => {
    try {
        const shareinsurance = await Share.find({}, { insurance: 1 })
            .populate("shareby", "number username")
            .populate("insurance")
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
            .populate("shareby", "number username")
            .populate("document")
            .populate("vehical")
            .populate("insurance")
        return res.status(200).json({ msg: "get share insurance ", shareinsurance })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}
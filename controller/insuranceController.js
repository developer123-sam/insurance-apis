const Insurance = require("../model/insurance-model")


// ADD Insurance 

exports.addinsurance = async (req, res) => {
    try {
        const insurance = new Insurance()
        insurance.user = req.user._id

        //   vehical.adddocument = {
        //     documentimage:req.files['documentimage'][0].filename,
        //     documentname: req.body.documentname,
        //     documentdate: req.body.documentdate,
        //     documentremark: req.body.documentremark,
        //   };
        insurance.addinsurance = {
            insuranceid: req.body.insuranceid,
            insuranceimage: req.files['insuranceimage'][0].filename,
            insurancedocname: req.body.insurancedocname,
            insurancedate: req.body.insurancedate,
        };
        insurance.newinsurance = req.body.newinsurance
        insurance.save(function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }
            res.json({
                message: "insurance add Successfully",
                data: insurance,
            });
        });
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}

// GET INSURANCE

exports.getinsurance = async (req, res) => {
    try {
        const getinsurance = await Insurance.find({ user: req.user._id })
        return res.status(200).json({ msg: "get Insurance successfully", getinsurance })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}

// DELETE INSURANCE

exports.deleteinsurance = async (req, res) => {
    try {
        const deleteinsurance = await Insurance.deleteOne({ user: req.user._id })
        return res.status(200).json({ msg: "delete Insurance successfully", deleteinsurance })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}
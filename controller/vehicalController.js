const Vehical = require("../model/vehical-model")
const Share = require("../model/shareModel")


// ADD VEHICAL 

exports.addvehical = async (req, res) => {
    try {
        const vehical = new Vehical()
        vehical.user = req.user._id
        vehical.vehicalnumber = {
            statecode: req.body.statecode,
            citycode: req.body.citycode,
            uniqueletter: req.body.uniqueletter,
            uniqueno: req.body.uniqueno,
        };
        vehical.addinc = {
            incimage: req.files['incimage'][0].filename,
            incdate: req.body.incdate,
        };
        vehical.addrc = {
            rcimage: req.files['rcimage'][0].filename,
            rcdate: req.body.rcdate,
        };
        vehical.modelnumber = {
            modelimage: req.files['modelimage'][0].filename,
            modeldate: req.body.modeldate,
        };
        vehical.addemission = {
            emissionimage: req.files['emissionimage'][0].filename,
            emissiondate: req.body.emissiondate,
        };
        //   vehical.adddocument = {
        //     documentimage:req.files['documentimage'][0].filename,
        //     documentname: req.body.documentname,
        //     documentdate: req.body.documentdate,
        //     documentremark: req.body.documentremark,
        //   };
        //   vehical.addinsurance = {
        //     insuranceid: req.body.insuranceid,
        //     insuranceimage: req.files['insuranceimage'][0].filename,
        //     insurancedocname: req.body.insurancedocname,
        //     insurancedate: req.body.insurancedate,
        //   };
        vehical.save(function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }
            res.json({
                message: "vehical add Successfully",
                data: vehical,
            });
        });
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}




// // GET VEHICAL 

exports.getvehical = async (req, res) => {
    try {
        // console.log(req.user._id)
        const getvehical = await Vehical.find({})
        // const vehicalShared = await Share.find({
        //     shareby: req.user._id
        // })
        // // console.log(vehicalShared)
        // const vehicalSharedid = vehicalShared.map((getvehical) => {
        //     return getvehical.shareddId
        // })
        // console.log(vehicalSharedid)
        // const vehicalfind = await Vehical.find({
        //     _id: {
        //         $in: vehicalSharedid
        //     }

        // })
        // console.log(vehicalfind)

        // const findvehical = [...getvehical, ...vehicalfind]
        return res.status(200).json({ msg: "get vehical successfully", getvehical })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}



exports.deletevehical = async (req, res) => {
    try {
        const deletevehical = await Vehical.deleteOne({ user: req.user._id })
        return res.status(200).json({ msg: "delete vehical successfully", deletevehical })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}
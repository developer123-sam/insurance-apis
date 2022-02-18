const Service = require("../../model/vehicaldetail/serviceModel")

// ADD FUEL DETAIL

exports.addservice = async (req, res) => {
  try {
    const billImage = req.file ? req.file.filename : null;
    const service = new Service()
    service.user = req.user._id
    service.date = req.body.date
    service.price = req.body.price
    service.ODOkms = req.body.ODOkms
    service.type = req.body.type
    service.notes = req.body.notes
    service.uploadbill = billImage
    service.vehicle = req.body.vehicle
    service.save(function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json({
        message: "service add Successfully",
        data: service,
      });
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "something went wrong", error: error.message })
  }
}

// GET ALL FUEL DETAIL

exports.getallservice = async (req, res) => {
  try {
    const getallservice = await Service.find({ user: req.user._id })
    res.json({
      message: "service get Successfully",
      data: getallservice,
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "something went wrong", error: error.message })
  }
}

// GET FUEL BY ID

exports.getservicebyid = async (req, res) => {
  try {
    const getservicebyid = await Service.find({ vehicle: req.params.id })
    res.json({
      message: "Service get by id Successfully",
      data: getservicebyid,
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "something went wrong", error: error.message })
  }
}


exports.updateservicebyid = async (req, res) => {
  try {
    const { date, price, ODOkms, type, notes } = req.body;
    const billImage = req.file ? req.file.filename : null;
    const updateservice = await Service.findByIdAndUpdate(req.params.id, {
      date,
      price,
      ODOkms,
      type,
      notes,
      uploadbill: billImage
    })
    res.json({
      message: "update service by id Successfully",
      data: updateservice,
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "something went wrong", error: error.message })
  }
}


// DELETE FUEL BY ID

exports.deleteservice = async (req, res) => {
  try {
    const deleteservice = await Service.deleteOne({ user: req.user._id })
    res.json({
      message: "service delete by id Successfully",
      data: deleteservice,
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "something went wrong", error: error.message })
  }
}
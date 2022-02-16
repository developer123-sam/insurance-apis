const res = require("express/lib/response");
const Station = require("../../model/servicestationmodel/servicestationmodel")
const Otp = require("../../model/user/otpModel")
const twilio = require('twilio');
const sendSms = require('../../twilio')
const otpGenerator = require('otp-generator');
const jwt = require("jsonwebtoken");
require('dotenv').config();


const createToken = (station) => {
  return jwt.sign({ station }, process.env.PROCESS_KEY, {
    expiresIn: "7d",
  });
};

// ADD SERVICE STATION

exports.addsation = async (req, res) => {
  try {
    const station = new Station()
    station.vehicalnumber = {
      statecode: req.body.statecode,
      citycode: req.body.citycode,
      uniqueletter: req.body.uniqueletter,
      uniqueno: req.body.uniqueno,
    };
    station.number = req.body.number
    station.ODOkms = req.body.ODOkms
    station.type = req.body.type
    station.Estimatequote = req.body.Estimatequote
    station.estimedeldt = req.body.estimedeldt
    station.fuellevel = req.body.fuellevel
    station.nextvisitubtervals = {
      kms: req.body.kms,
      month: req.body.month,
    };
    station.notes = req.body.notes
    station.save()
    return res.status(200).json({ msg: "service station add successfully", station })
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" })
  }
}

// GET SERVICE STATION

exports.getallstation = async (req, res) => {
  try {
    const getallstation = await Station.find({})
    return res.status(200).json({ msg: "get all station  successfully", getallstation })
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" })

  }
}
exports.getstationbyid = async (req, res) => {
  try {
    const getstationbyid = await Station.findById({ _id: req.params.id })
    return res.status(200).json({ msg: "get single station successfully", getstationbyid })
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" })

  }
}
exports.deletestation = async (req, res) => {
  try {
    const deletestation = await Station.findByIdAndDelete({ _id: req.params.id })
    return res.status(200).json({ msg: "delete station successfully", deletestation })
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" })

  }
}

exports.stationotp = async (req, res) => {
  try {
    const OTP = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false });

    let user = await Station.findOne({
      number: req.body.number
    })
    if (!user) {
      user = new Station()
      user.number = req.body.number
      await user
    }

    if (user) {
      const otp = new Otp()
      otp.number = req.body.number
      otp.otp = OTP
      const result = await otp.save();
    }
    //await user.save()
    const welcomeMessage = `Your verification code is: ${OTP}`;
    console.log(welcomeMessage)
    const messageres = await sendSms(user.number, welcomeMessage);
    console.log(messageres)
    return res.status(201).send({
      message: 'otp send successfully, kindly check your phone to login your account!',
      data: user,
    })

  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message })
  }
}


exports.stationlogin = async (req, res) => {
  try {
    var { number, otp } = req.body;
    let newotp = await Otp.findOne({ number: number, otp: otp });
    if (!newotp) {
      return res.status(400).json({ errors: 'wrong otp' })
    }
    if (newotp) {
      var number = req.body.number;
      let station = await Station.findOne({ number });
      console.log(station)
      const token = createToken(station);
      const OTPDelete = await Otp.deleteOne({
        number: number
      });
      return res.status(200).json({ msg: "user login successfully", token, station });
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json({ errors: [{ msg: "Token Expired" }] });
  }
}
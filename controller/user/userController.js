const User = require("../../model/user/userModel")
const Otp = require("../../model/user/otpModel")
const Station = require("../../model/servicestationmodel/servicestationmodel")
const Referal = require("../../model/refralModel")
const twilio = require('twilio');
const sendSms = require('../../twilio');
const otpGenerator = require('otp-generator');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const createToken = (user) => {
  return jwt.sign({ user }, process.env.PROCESS_KEY, {
    expiresIn: "7d",
  });
};

exports.sendotp = async (req, res) => {
  try {
    const OTP = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false });


    const station = await Station.findOne({
      number: req.body.number
    })
    if (station) {
      if (!station) {
        station = new Station()
        station.number = req.body.number
        await station
      }
      if (station) {
        const otp = new Otp()
        otp.number = req.body.number
        otp.otp = OTP
        const result = await otp.save();
      }

      const welcomeMessage = `Your verification code is: ${OTP}`;
      console.log(welcomeMessage)
      const messageres = await sendSms(station.number, welcomeMessage);
      console.log(messageres)
      return res.status(201).send({
        message: 'otp send on your number! Please verify and login',
      })
    } else {
      let user = await User.findOne({
        number: req.body.number
      })
      if (!user) {
        user = new User()
        user.number = req.body.number
        await user.save()
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
        message: 'Account created successfully, kindly check your phone to activate your account!',
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message })
  }
}

exports.verifyOtp = async (req, res) => {
  try {
    var { number, otp } = req.body;
    let newotp = await Otp.findOne({ number: number, otp: otp });
    if (!newotp) {
      return res.status(400).json({ errors: 'wrong otp' })
    }
    if (newotp) {
      var number = req.body.number;
      let user = await User.findOne({ number });
      console.log(user)
      const token = createToken(user);
      const OTPDelete = await Otp.deleteOne({
        number: number
      });
      return res.status(200).json({ msg: "user login successfully", token, user });
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json({ errors: [{ msg: "Token Expired" }] });
  }
}

exports.adduser = async (req, res) => {
  const { number, username, email, postaladdress, alternativepno } = req.body;
  const profileImage = req.file ? req.file.filename : null;
  try {
    const update = await User.findByIdAndUpdate(req.user._id, {
      username,
      email,
      postaladdress,
      alternativepno,
    });
    console.log(update)
    if (update) {
      res.json({
        message: "add user successfully",
        data: update,
      });
    } else {
      res.json({
        message: "user not update",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateuser = async (req, res) => {
  const { number, username, email, postaladdress, alternativepno } = req.body;
  var url = "https://health-insuranceapp.herokuapp.com/api/upload/Image"
  const profileImage = req.file ? req.file.filename : null;
  try {
    const update = await User.findByIdAndUpdate(req.params.id, {
      username,
      email,
      number,
      postaladdress,
      alternativepno,
      image: `${url}/${profileImage}`,
    });
    console.log(email)
    const view = await User.findById(req.params.id);
    res.json({
      message: "update user successfully",
      data: view,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getuserbyid = async (req, res) => {
  try {
    const getuserbyid = await User.findById({ _id: req.params.id })
    return res.status(200).json({ msg: "get user by id successfully", getuserbyid })
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" })
  }
}

exports.getalluser = async (req, res) => {
  try {
    const getalluser = await User.find({})
    return res.status(200).json({ msg: "get all user successfully", getalluser })
  }
  catch (error) {
    return res.status(400).json({ msg: "something went wrong" })
  }
}



exports.deleteuserbyid = async (req, res) => {
  try {
    const deleteuserbyid = await User.findByIdAndDelete({ _id: req.params.id })
    return res.status(200).json({ msg: "delete user successfully", deleteuserbyid })
  }
  catch (error) {
    return res.status(400).json({ msg: "something went wrong" })
  }
}
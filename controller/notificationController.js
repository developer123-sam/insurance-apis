// const FuelNotification=require("../model/notification/fuel-notification-model")
// const serviceNotification=require("../model/notification/service-notification")
const stationNotification = require("../model/notification/serv-station-notification")
const moment = require('moment')
// const { NotificationInstance } = require("twilio/lib/rest/api/v2010/account/call/notification")
const Notification = require("../model/notification-model")


// ADD_NOTIFICATION

exports.notification = async (req, res) => {
    try {
        const fuelnotification = `your added on ${moment().format('DD-MM-YYYY')} and the time being shecedule in ${moment().format(" hh:mm")}`
        const notification = new Notification()
        notification.userId = req.user._id;
        notification.usernofication = fuelnotification;
        notification.type = req.body.type
        notification.save()
        return res.status(200).json({ msg: "notification added", notification })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}

// // GET-ALL-NOTIFICATION


exports.getnotification = async (req, res) => {
    try {
        const getnotification = await Notification.find({})
        return res.status(200).json({ msg: "get notification", getnotification })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}

// GET-FUEL-NOTIFICATION

exports.getfuelnotification = async (req, res) => {
    try {
        const getnotification = await Notification.find({ type: "fuel" })
        return res.status(200).json({ msg: "get notification", getnotification })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}

// GET-SERVICE-NOTIFICATION

exports.getservicenotification = async (req, res) => {
    try {
        const getnotification = await Notification.find({ type: "service" })
        return res.status(200).json({ msg: "get notification", getnotification })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}

// GET-SERVICE-NOTIFICATION

exports.deleteservicenotification = async (req, res) => {
    try {
        const getnotification = await Notification.findByIdAndDelete({ _id: req.params.id })
        return res.status(200).json({ msg: "delete notification", getnotification })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}




//   //  ADD SERVICE STATION

exports.servicestationnotification = async (req, res) => {
    try {
        const servicestationnotification = `your service station added on ${moment().format('DD-MM-YYYY')} and the time being shecedule in ${moment().format(" hh:mm")}`
        const notification = new stationNotification()
        notification.userId = req.user._id;
        notification.usernofication = servicestationnotification;
        notification.save()
        return res.status(200).json({ msg: "service station notification added", servicestationnotification })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}

// GET-SERVICE-STATION-NOTIFICATION


exports.getstationnotification = async (req, res) => {
    try {
        const getstationnotification = await stationNotification.find({})
        return res.status(200).json({ msg: "get service station notification", getstationnotification })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}

//  DELETE-SERVICE-STATION-NOTIFICATION

exports.deletestationnotification = async (req, res) => {
    try {
        const deletestationnotification = await stationNotification.deleteOne({})
        return res.status(200).json({ msg: "delete notification", deletestationnotification })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}
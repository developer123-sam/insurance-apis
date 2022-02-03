const FuelNotification=require("../model/notification/fuel-notification-model")
const serviceNotification=require("../model/notification/service-notification")
const stationNotification=require("../model/notification/serv-station-notification")
const moment = require('moment')
const { NotificationInstance } = require("twilio/lib/rest/api/v2010/account/call/notification")

// FUEL_NOTIFICATION

exports.notification=async (req,res)=>{
    try {
       const  fuelnotification=`your fuel added on ${moment().format('DD-MM-YYYY')} and the time being shecedule in ${moment().format(" hh:mm")}`
    const notification=new FuelNotification()
    notification.userId=req.user._id;
    notification.usernofication=fuelnotification;
    notification.save()
    return res.status(200).json({msg:"notification added",notification})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"something went wrong"})
    }
}

// GET-FUEL-NOTIFICATION


exports.getfuelnotification=async (req,res)=>{
   try {
    const getfuelnotification=await FuelNotification.find({})
    return res.status(200).json({msg:"get notification",getfuelnotification})
   } catch (error) {
    console.log(error)
    return res.status(500).json({msg:"something went wrong"})
   }
}

// DELETE-FUEL-NOTIFICATION

exports.deletefuelnotification=async (req,res)=>{
    try {
     const deletefuelnotification=await FuelNotification.deleteOne({})
     return res.status(200).json({msg:"delete notification",deletefuelnotification})
    } catch (error) {
     console.log(error)
     return res.status(500).json({msg:"something went wrong"})
    }
 }


//  ADD SERVICE

exports.servicenotification=async (req,res)=>{
    try {
    const servicenotification=`your service added on ${moment().format('DD-MM-YYYY')} and the time being shecedule in ${moment().format(" hh:mm")}`
    const notification=new serviceNotification()
    notification.userId=req.user._id;
    notification.usernofication=servicenotification;
    notification.save()
    return res.status(200).json({msg:"service notification added",notification})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"something went wrong"})
    }
}

// GET-SERVICE-NOTIFICATION


exports.getservicenotification=async (req,res)=>{
    try {
     const getservicenotification=await serviceNotification.find({})
     return res.status(200).json({msg:"get service notification",getservicenotification})
    } catch (error) {
     console.log(error)
     return res.status(500).json({msg:"something went wrong"})
    }
 }
 
 // DELETE-DELETE-NOTIFICATION
 
 exports.deleteservicenotification=async (req,res)=>{
     try {
      const deleteservicenotification=await serviceNotification.deleteOne({})
      return res.status(200).json({msg:"delete notification",deleteservicenotification})
     } catch (error) {
      console.log(error)
      return res.status(500).json({msg:"something went wrong"})
     }
  }

  //  ADD SERVICE STATION

exports.servicestationnotification=async (req,res)=>{
    try {
    const servicestationnotification=`your service added on ${moment().format('DD-MM-YYYY')} and the time being shecedule in ${moment().format(" hh:mm")}`
    const notification=new stationNotification()
    notification.userId=req.user._id;
    notification.usernofication=servicestationnotification;
    notification.save()
    return res.status(200).json({msg:"service station notification added",servicestationnotification})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"something went wrong"})
    }
}

// GET-FUEL-NOTIFICATION


exports.getstationnotification=async (req,res)=>{
    try {
     const getstationnotification=await stationNotification.find({})
     return res.status(200).json({msg:"get service station notification",getstationnotification})
    } catch (error) {
     console.log(error)
     return res.status(500).json({msg:"something went wrong"})
    }
 }
 
 // DELETE-FUEL-NOTIFICATION
 
 exports.deletestationnotification=async (req,res)=>{
     try {
      const deletestationnotification=await stationNotification.deleteOne({})
      return res.status(200).json({msg:"delete notification",deletestationnotification})
     } catch (error) {
      console.log(error)
      return res.status(500).json({msg:"something went wrong"})
     }
  }
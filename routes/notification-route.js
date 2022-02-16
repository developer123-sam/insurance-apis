let router = require("express").Router();
var Controller = require("../controller/notificationController");
var auth = require("../middleware/auth")

// NOTIFICATION-ROUTES

router.route("/notification").post(auth.userloggedIn, Controller.notification)
router.route("/getnotification").get(auth.userloggedIn, Controller.getnotification)
router.route("/getfuelnotification").get(auth.userloggedIn, Controller.getfuelnotification)
router.route("/getservicenotification").get(auth.userloggedIn, Controller.getservicenotification)
router.route("/deleteservicenotification/:id").delete(auth.userloggedIn, Controller.deleteservicenotification)


//router.route("/deletefuelnotification").delete(auth.userloggedIn,Controller.deletefuelnotification)

// // SERVICE_ROUTES

// router.route("/servicenotification").post(auth.userloggedIn,Controller.servicenotification)
// router.route("/getservicenotification").get(auth.userloggedIn,Controller.getservicenotification)
// router.route("/deleteservicenotification").delete(auth.userloggedIn,Controller.deleteservicenotification)

// SEVICE_STATION_ROUTES

router.route("/servicestationnotification").post(auth.userloggedIn, Controller.servicestationnotification)
router.route("/getstationnotification").get(auth.userloggedIn, Controller.getstationnotification)
router.route("/deletestationnotification").delete(auth.userloggedIn, Controller.deletestationnotification)

// NOTIFICATION ROUTES



module.exports = router;
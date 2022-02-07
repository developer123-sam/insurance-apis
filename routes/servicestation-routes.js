
let router = require("express").Router();
var Controller = require("../controller/servicestation/servicestation");
const auth=require("../middleware/auth")

router.route("/addsation").post(auth.adminloggedIn,Controller.addsation)
router.route("/getallstation").get(auth.adminloggedIn,Controller.getallstation)
router.route("/getsinglestation/:id").get(Controller.getstationbyid)
// router.route("/updateservicebyid/:id").put(image.single("uploadbill"),Controller.updateservicebyid)
router.route("/deletesinglestation/:id").delete(Controller.deletestation)

module.exports = router;
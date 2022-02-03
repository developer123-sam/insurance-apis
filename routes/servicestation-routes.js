
let router = require("express").Router();
var Controller = require("../controller/servicestation/servicestation");


router.route("/addsation").post(Controller.addsation)
router.route("/getallstation").get(Controller.getallstation)
router.route("/getsinglestation/:id").get(Controller.getstationbyid)
// router.route("/updateservicebyid/:id").put(image.single("uploadbill"),Controller.updateservicebyid)
router.route("/deletesinglestation/:id").delete(Controller.deletestation)

module.exports = router;
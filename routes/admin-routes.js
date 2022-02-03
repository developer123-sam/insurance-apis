let router = require("express").Router();
var Controller = require("../controller/admin/adminController");



router.route("/adminlogin").post(Controller.adminlogin);
router.route("/adminmailsend").post(Controller.adminmailsend);
router.route("/adminforgotpassword").post(Controller.adminforgotpassword);


module.exports = router;

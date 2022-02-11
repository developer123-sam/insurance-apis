const multer = require("multer");
var path = require("path")
var image = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/Image");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
var image = multer({ storage: image });
let router = require("express").Router();
var Controller = require("../controller/user/userController");
var auth = require("../middleware/auth")
router.route("/sendotp").post(Controller.sendotp);
router.route("/verifyOtp").post(Controller.verifyOtp)
router.route("/adduser").post(auth.userloggedIn, Controller.adduser)
router.route("/updateuser/:id").put(image.single("image"), Controller.updateuser)
router.route("/getuserbyid/:id").get(Controller.getuserbyid)
router.route("/getalluser").get(Controller.getalluser)
router.route("/deleteuserbyid/:id").delete(Controller.deleteuserbyid)

module.exports = router;
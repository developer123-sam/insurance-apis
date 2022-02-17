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
var Controller = require("../controller/vehical/fuelController");
var auth = require("../middleware/auth")

router.route("/addfuel").post(image.single("uploadbill"), auth.userloggedIn, Controller.addfuel)
router.route("/getallfuel").get(auth.userloggedIn, Controller.getallfuel)
router.route("/getfuelbyid/:id").get(Controller.getfuelbyid)
router.route("/updatefuelbyid/:id").put(image.single("uploadbill"), Controller.updatefuelbyid)
router.route("/deletefuel").delete(auth.userloggedIn, Controller.deletefuel)

module.exports = router;
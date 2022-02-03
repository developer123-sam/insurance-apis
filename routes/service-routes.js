const multer = require("multer");
var path=require("path")
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
var Controller = require("../controller/vehical/serviceController");
var auth=require("../middleware/auth")

router.route("/addservice").post(image.single("uploadbill"),Controller.addservice)
router.route("/getallservice").get(Controller.getallservice)
router.route("/getservicebyid/:id").get(Controller.getservicebyid)
router.route("/updateservicebyid/:id").put(image.single("uploadbill"),Controller.updateservicebyid)
router.route("/deleteservicebyid/:id").delete(Controller.deleteservicebyid)

module.exports = router;
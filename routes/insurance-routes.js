// MULTER USES FOR ADDED IMAGE

const multer = require("multer");
var path = require("path")
var image = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, "./upload/Image") },
    filename: function (req, file, cb) { cb(null, Date.now() + path.extname(file.originalname)) }
});
var image = multer({ storage: image });

const imageUplods = image.fields([{ name: 'insuranceimage', maxCount: 1 }]);
const router = require("express").Router();
const Controller = require("../controller/insuranceController");
const auth = require("../middleware/auth")


// INSURANCE ROUTES

router.route("/addinsurance").post(auth.userloggedIn, imageUplods, Controller.addinsurance);
// router.route("/getvehical").get(Controller.getallvehical)
router.route("/getinsurance").get(auth.userloggedIn, Controller.getinsurance)
// router.route("/updatevehicalbyid/:id").put(image.none(), Controller.updatevehicalbyid)
router.route("/deleteinsurance").delete(auth.userloggedIn, Controller.deleteinsurance)

module.exports = router;
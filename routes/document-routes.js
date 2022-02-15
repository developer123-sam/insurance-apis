// MULTER USING FOR IMAGE
const multer = require("multer");
var path = require("path")
var image = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, "./upload/Image") },
    filename: function (req, file, cb) { cb(null, Date.now() + path.extname(file.originalname)) },
});
var image = multer({ storage: image });

const imageUplods = image.fields([{ name: 'documentimage', maxCount: 1 },]);
const router = require("express").Router();
const Controller = require("../controller/documentController");
const auth = require("../middleware/auth")

// DOUMENTS ROUTES

router.route("/adddocument").post(auth.userloggedIn, imageUplods, Controller.adddocument);
// router.route("/getvehical").get(Controller.getallvehical)
router.route("/getdocument").get(auth.userloggedIn, Controller.getdocument)
// router.route("/updatevehicalbyid/:id").put(image.none(), Controller.updatevehicalbyid)
router.route("/deletedocument").delete(auth.userloggedIn, Controller.deletedocument)

module.exports = router;
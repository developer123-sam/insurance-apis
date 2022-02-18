const router = require("express").Router()
const Controller = require("../controller/shareController")
const auth = require("../middleware/auth")

router.route("/share").post(auth.userloggedIn, Controller.share)
router.route("/sharedocument").get(auth.userloggedIn, Controller.sharedocument)
router.route("/sharevehicle").get(auth.userloggedIn, Controller.sharevehicle)
router.route("/shareinsurance").get(auth.userloggedIn, Controller.shareinsurance)
router.route("/getshare").get(auth.userloggedIn, Controller.getshare)

module.exports = router
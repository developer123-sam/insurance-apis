const router = require("express").Router()
const Controller = require("../controller/shareController")
const auth = require("../middleware/auth")

router.route("/share").post(auth.userloggedIn, Controller.share)

module.exports = router
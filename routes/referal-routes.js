const router=require("express").Router()
const Controller=require("../controller/referalController")

router.route("/addreferal").post(Controller.sendreferal)
module.exports=router
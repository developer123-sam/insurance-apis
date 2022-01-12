require('dotenv').config();
let express = require("express");
var path=require("path")
let bodyParser = require("body-parser");
require("./Config/database")
const twilio = require('twilio');
const cors = require("cors");
let app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let signRoutes = require("./routes/signin-routes");
let vehicalRoutes = require("./routes/vehical-routes");


var port = process.env.PORT || 2999;
app.use("/api",signRoutes)
app.use("/api", vehicalRoutes);
app.listen(port, function () {
  console.log("Running on port " + port);
});
module.exports = app;

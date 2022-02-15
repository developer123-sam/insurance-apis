require('dotenv').config();
let express = require("express");
var path = require("path")
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
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let signRoutes = require("./routes/signin-routes");
let vehicalRoutes = require("./routes/vehical-routes");
let fuelRoutes = require("./routes/fuel-routes");
let serviceRoutes = require("./routes/service-routes")
let stationRoutes = require("./routes/servicestation-routes")
let notificationRoutes = require("./routes/notification-route")
let adminRoutes = require("./routes/admin-routes")
let referalRoutes = require("./routes/referal-routes")
let insuranceRoutes = require("./routes/insurance-routes")
let documentRoutes = require("./routes/document-routes")

var port = process.env.PORT || 2999;
app.use("/api",
  adminRoutes,
  signRoutes,
  fuelRoutes,
  vehicalRoutes,
  serviceRoutes,
  stationRoutes,
  notificationRoutes,
  referalRoutes,
  insuranceRoutes,
  documentRoutes
)
app.listen(port, function () {
  console.log("Running on port " + port);
});
module.exports = app;

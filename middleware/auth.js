const jwt = require("jsonwebtoken");
const User = require("../model/user/userModel");
const Station = require("../model/servicestationmodel/servicestationmodel")

exports.userloggedIn = async function (req, res, next) {
    try {
        console.log('entered loggedin middleware..................')
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                msg: 'token not provided or user not logged in'
            });
        }
        const authHeaderStringSplit = authHeader.split(' ');
        if (!authHeaderStringSplit[0] || authHeaderStringSplit[0].toLowerCase() !== 'bearer' || !authHeaderStringSplit[1]) {
            return res.status(401).json({
                success: false,
                msg: 'token not provided or user not logged in'
            });
        }

        const token = authHeaderStringSplit[1];
        const decodedToken = await jwt.verify(token, process.env.PROCESS_KEY);
        console.log(`decoded token: ${decodedToken.user}`)
        const user = await User.findById(decodedToken.user);
        if (!user) {
            return res.status(404).json({
                error: 'user not found'
            })
        }
        console.log(`user name ${user.username}`)
        req.user = user.toObject();
        //delete req.user['password']
        next();

    } catch (err) {
        console.log('error in auth middleware/////////////////////////////////')
        console.log(err)
        if (err.name == 'TokenExpiredError' || err.name == 'JsonWebTokenError') {
            return res.status(400).json({
                success: false,
                msg: 'token expired, please login again'
            })
        }
        next(err);
    }
}
//module.exports = { auth };

exports.adminloggedIn = async function (req, res, next) {
    try {
        console.log('entered loggedin middleware..................')
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                msg: 'token not provided or user not logged in'
            });
        }
        const authHeaderStringSplit = authHeader.split(' ');
        if (!authHeaderStringSplit[0] || authHeaderStringSplit[0].toLowerCase() !== 'bearer' || !authHeaderStringSplit[1]) {
            return res.status(401).json({
                success: false,
                msg: 'token not provided or user not logged in'
            });
        }

        const token = authHeaderStringSplit[1];
        const decodedToken = await jwt.verify(token, process.env.PROCESS_KEY);
        console.log(`decoded token: ${decodedToken._id}`)
        const user = await Admin.findById(decodedToken._id);
        if (!user) {
            return res.status(404).json({
                error: 'user not found'
            })
        }
        req.user = user.toObject();
        //delete req.user['password']
        next();

    } catch (err) {
        console.log('error in auth middleware/////////////////////////////////')
        console.log(err)
        if (err.name == 'TokenExpiredError' || err.name == 'JsonWebTokenError') {
            return res.status(400).json({
                success: false,
                msg: 'token expired, please login again'
            })
        }
        next(err);
    }
}

//   MIDDLEWARE SERVERICE STATION

// exports.stationloggedIn = async function (req, res, next) {
//     try {
//         console.log('entered loggedin middleware..................')
//         const authHeader = req.get('Authorization');
//         if (!authHeader) {
//             return res.status(401).json({
//                 success: false,
//                 msg: 'token not provided or user not logged in'
//             });
//         }
//         const authHeaderStringSplit = authHeader.split(' ');
//         if (!authHeaderStringSplit[0] || authHeaderStringSplit[0].toLowerCase() !== 'bearer' || !authHeaderStringSplit[1]) {
//             return res.status(401).json({
//                 success: false,
//                 msg: 'token not provided or user not logged in'
//             });
//         }

//         const token = authHeaderStringSplit[1];
//         const decodedToken = await jwt.verify(token, process.env.PROCESS_KEY);
//         console.log(`decoded token: ${decodedToken.number}`)
//         const station = await Station.findById(decodedToken.station);
//         if (!station) {
//             return res.status(404).json({
//                 error: 'station not found'
//             })
//         }
//         req.station = station.toObject();
//         //delete req.user['password']
//         next();

//     } catch (err) {
//         console.log('error in auth middleware/////////////////////////////////')
//         console.log(err)
//         if (err.name == 'TokenExpiredError' || err.name == 'JsonWebTokenError') {
//             return res.status(400).json({
//                 success: false,
//                 msg: 'token expired, please login again'
//             })
//         }
//         next(err);
//     }
// }
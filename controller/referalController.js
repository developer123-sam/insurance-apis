const Referal=require("../model/refralModel")
const twilio=require("twilio")
const sendSms=require("../twilio")
const otpGenerator = require('otp-generator');

exports.sendreferal=async (req,res)=>{
        try {
            const OTP = otpGenerator.generate(10, { digits: true, upperCaseAlphabets: false, specialChars: false });
            const referal=new Referal()
            referal.name=req.body.name,    
            referal.number=req.body.number
            referal.referalcode=OTP
            await referal.save()
          //   if( referal){
          //  if(referal){
          //   const otp=new Referal()
          //   referal.name=req.body.name, 
          //   otp.number=req.body.number
          //   otp.otp=OTP 
          //    const result = await otp.save();
          //  }
          
           const welcomeMessage =  `Your verification code is: ${OTP} and ${referal.number}`;
              console.log(welcomeMessage)
              const messageres = await sendSms(referal.number, welcomeMessage);
              console.log(messageres)
              return res.status(201).send({
                message: 'referal code send on number',
              })
            // }
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"something went wrong"})
        
    }
}
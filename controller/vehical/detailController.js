const Vehical=require("../../model/vehicaldetail/detailsModel")


// ADD VEHICAL 

exports.addvehical=async (req,res)=>{
    try {
        const vehical=new Vehical()
        vehical.user=req.user._id
        vehical.vehicalnumber = {
            statecode: req.body.statecode,
            citycode: req.body.citycode,
            uniqueletter: req.body.uniqueletter,
            uniqueno: req.body.uniqueno,
          };
          vehical.addinc = {
            incimage: req.files['incimage'][0].filename,
            incdate: req.body.incdate,
          };
          vehical.addrc = {
            rcimage: req.files['rcimage'][0].filename,  
            rcdate: req.body.rcdate,
          };
          vehical.modelnumber = {
            modelimage:req.files['modelimage'][0].filename,
            modeldate: req.body.modeldate,
          };
          vehical.addemission = {
            emissionimage: req.files['emissionimage'][0].filename,
            emissiondate: req.body.emissiondate,
          };
          vehical.adddocument = {
            documentimage:req.files['documentimage'][0].filename,
            documentname: req.body.documentname,
            documentdate: req.body.documentdate,
            documentremark: req.body.documentremark,
          };
          vehical.addinsurance = {
            insuranceid: req.body.insuranceid,
            insuranceimage: req.files['insuranceimage'][0].filename,
            insurancedocname: req.body.insurancedocname,
            insurancedate: req.body.insurancedate,
          };
          vehical.save(function (err) {
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            }
            res.json({
              message: "vehical add Successfully",
              data: vehical,
            });
          });
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"something went wrong",error:error.message})
    }
  }


//GET ALL VEHICAL DATA

exports.getallvehical=async (req,res)=>{
try {
  const allvehical=await Vehical.find({})
  return res.status(200).json({msg:"get all vehical successfully",allvehical})
} catch (error) {
  console.log(error)
  return res.status(400).json({msg:"something went wrong",error:error.message})  
}
}

// GET VEHICAL BY ID

exports.getvehicalbyid=async (req,res)=>{
  try {
    const vehicalbyid=await Vehical.find({user:req.user._id})
    return res.status(200).json({msg:"get vehical by id successfully",vehicalbyid})
  } catch (error) {
    console.log(error)
    return res.status(400).json({msg:"something went wrong",error:error.message})  
  }
}

exports.updatevehicalbyid=async (req,res)=>{
    const { statecode,citycode,uniqueletter,uniqueno,incdate,rcdate,modeldate,emissiondate,documentname,documentremark,documentdate,insuranceid,insurancename,insurancedate } = req.body;
    try {
      console.log('statecode: ', statecode)
      const vehicle = await Vehical.findById(req.params.id);
      vehicle.vehicalnumber.statecode = statecode;
      vehicle.vehicalnumber.citycode = citycode;
      vehicle.vehicalnumber.uniqueletter = uniqueletter;
      vehicle.vehicalnumber.uniqueno = uniqueno;
      vehicle.addinc.incdate = incdate;
      vehicle.addrc.rcdate = rcdate;
      vehicle.modelnumber.modeldate = modeldate;
      vehicle.addemission.emissiondate = emissiondate;
      vehicle.adddocument.documentname = documentname;
      vehicle.adddocument.documentdate = documentdate;
      vehicle.adddocument.documentremark = documentremark;
      vehicle.addinsurance.insuranceid = insuranceid;
      vehicle.addinsurance.insurancename = insurancename;
      vehicle.addinsurance.insurancedate = insurancedate;
      await vehicle.save();
        res.json({
          message: " update vehical detail successfully",
          data: vehicle,
        });
        console.log(`updated value is${vehicle}`)
       } catch (error) {
      console.log(error);
     return res.status(400).json({error:error.message})
    }
  };

exports.deletevehicalbyid=async (req,res)=>{
    try {
      const deletevehicalbyid=await Vehical.findByIdAndDelete({_id:req.params.id})
      return res.status(200).json({msg:"delete vehical by id successfully",deletevehicalbyid})
    } catch (error) {
      console.log(error)
      return res.status(400).json({msg:"something went wrong",error:error.message})  
    }
  }
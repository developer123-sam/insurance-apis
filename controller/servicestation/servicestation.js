const res = require("express/lib/response");
const Station=require("../../model/servicestationmodel/servicestationmodel")

// ADD SERVICE STATION

exports.addsation=async (req,res)=>{
    try {
        const station=new Station()
    station.vehicalnumber = {
        statecode: req.body.statecode,
        citycode: req.body.citycode,
        uniqueletter: req.body.uniqueletter,
        uniqueno: req.body.uniqueno,
      };
      station.customermn=req.body.customermn
      station.ODOkms=req.body.ODOkms
      station.type=req.body.type
      station.Estimatequote=req.body.Estimatequote
      station.estimedeldt=req.body.estimedeldt
      station.fuellevel=req.body.fuellevel
      station.nextvisitubtervals = {
        kms: req.body.kms,
        month: req.body.month,
      };
      station.notes=req.body.notes  
      station.save()
      return res.status(200).json({msg:"service station add successfully",station})
    } catch (error) {
        return res.status(400).json({msg:"something went wrong"})  
    }
}

// GET SERVICE STATION

exports.getallstation=async (req,res)=>{
  try {
    const getallstation=await Station.find({})
    return res.status(200).json({msg:"get all station  successfully",getallstation})
  } catch (error) {
    return res.status(400).json({msg:"something went wrong"})  
      
  }
}
exports.getstationbyid=async (req,res)=>{
    try {
      const getstationbyid=await Station.findById({_id:req.params.id})
      return res.status(200).json({msg:"get single station successfully",getstationbyid})
    } catch (error) {
      return res.status(400).json({msg:"something went wrong"})  
        
    }
  }
  exports.deletestation=async (req,res)=>{
    try {
      const deletestation=await Station.findByIdAndDelete({_id:req.params.id})
      return res.status(200).json({msg:"delete station successfully",deletestation})
    } catch (error) {
      return res.status(400).json({msg:"something went wrong"})  
        
    }
  }
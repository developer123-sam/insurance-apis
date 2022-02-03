const Fuel=require("../../model/vehicaldetail/fulemodel")

// ADD FUEL DETAIL

exports.addfuel=async (req,res)=>{
    try {
        const billImage = req.file ? req.file.filename : null;
        const fuel=new Fuel()
        fuel.date=req.body.date
        fuel.price=req.body.price
        fuel.ODOkms=req.body.ODOkms
        fuel.perltrprice=req.body.perltrprice
        fuel.notes=req.body.notes
        fuel.tankfull=req.body.tankfull
        fuel.uploadbill=billImage 
          fuel.save(function (err) {
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            }
            res.json({
              message: "Fuel add Successfully",
              data: fuel,
            });
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"something went wrong",error:error.message})
    }
  }

// GET ALL FUEL DETAIL

exports.getallfuel=async (req,res)=>{
    try{
        const getallfuel=await Fuel.find({})
      res.json({
        message: "Fuel get Successfully",
        data: getallfuel,
      });
} catch (error) {
  console.log(error)
  return res.status(400).json({msg:"something went wrong",error:error.message})
    }
}

// GET FUEL BY ID

exports.getfuelbyid=async (req,res)=>{
    try{
        const getfuelbyid=await Fuel.findById({_id:req.params.id})
      res.json({
        message: "Fuel get by id Successfully",
        data: getfuelbyid,
      });
} catch (error) {
  console.log(error)
  return res.status(400).json({msg:"something went wrong",error:error.message})
    }
}


exports.updatefuelbyid=async (req,res)=>{
    try{
        const {date,price,ODOkms,perltrprice,notes,tankfull}=req.body;
        const billImage = req.file ? req.file.filename : null;
        const updatefuel=await Fuel.findByIdAndUpdate(req.params.id,{
            date,
            price,
            ODOkms,
            perltrprice,
            notes,
            tankfull,
            uploadbill:billImage
        })
      res.json({
        message: "update get by id Successfully",
        data: updatefuel,
      });
} catch (error) {
  console.log(error)
  return res.status(400).json({msg:"something went wrong",error:error.message})
    }
}


// DELETE FUEL BY ID

exports.deletefuelbyid=async (req,res)=>{
    try{
        const deletefuelbyid=await Fuel.findByIdAndDelete({_id:req.params.id})
      res.json({
        message: "Fuel delete by id Successfully",
        data: deletefuelbyid,
      });
} catch (error) {
  console.log(error)
  return res.status(400).json({msg:"something went wrong",error:error.message})
    }
}
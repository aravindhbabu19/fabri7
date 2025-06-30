const Formmodel = require("../Model/Formmodel");

exports.getApplication=async(req,res,next)=>{
    Formmodel.create(req.body)
    .then((application)=>res.json(application))
    .catch((err)=>console.log(err))
    
}
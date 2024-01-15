

const auth = async(req,res,next)=>{
    console.log("auth ",req.query,req.params);
    
  if(req.query.name === "Akki"){
    next();
  }else{
    res.send("auth failed")
  }
 }
 
 module.exports = auth;
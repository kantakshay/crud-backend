const loginContoller = require("../../controllers/loginController")


const loginService = async(req,res)=>{
const output = await loginContoller(req);
res.send(output)
}

module.exports = loginService;
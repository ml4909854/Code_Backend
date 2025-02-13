
const jwt = require("jsonwebtoken")
const UserModel = require("../model/UserModel")
const auth = (req , res , next)=>{

    const token = req.headers?.Authorization?.split(" ")[1]
    if(!token){
        return res.status(201).json("token not provided!")
    }

   const decoded = jwt.verify("")
}
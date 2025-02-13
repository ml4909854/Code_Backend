

const express = require("express")
const UserModel = require("../model/UserModel.js")
const router = express.Router()

router.get("/" , async(req , res)=>{
    try {
        const user = await UserModel.find()
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})

// fetch user by id 
router.get("/:id" , async(req , res)=>{
    try {
        const user = await UserModel.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})

router.patch("/update/:id" , async(req , res)=>{
    try {
        const id = req.params.id 
        const updateUser = await UserModel.findByIdAndUpdate( id , req.body , {new:true})
        res.json(updateUser)
    } catch (error) {
        res.json(error)
    } 
})

router.delete("/delete/:id" , async(req , res)=>{
    try {
        const id = req.params.id
        const deleteUser = await UserModel.findByIdAndDelete(id)
        res.json("user delete successfully!")
    } catch (error) {
        res.json(error)
    }
})
router.post("/register" ,async(req , res)=>{
    const {username , password , role} = req.body
    const checkUser = await UserModel.findOne({username})
    if(checkUser){
        return res.json("user already exits")
    }
    const newUser = new UserModel({username , password , role})
    const savedUser = await newUser.save()
    res.json({message:"user register succesfully" , user:savedUser})
})

module.exports = router
const express=require("express");
const { UserModel } = require("../models/User.model");

const userRouter=express.Router();

const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");

userRouter.use(express.json());

userRouter.post("/register",async(req,res)=>{
    const {email,password}=req.body;
    // console.log(email,password)
    try{
        bcrypt.hash(password,5,async(err,secure_password)=>{
            try{
                const user=new UserModel({email,password:secure_password});
                console.log(user)
                await user.save();
                res.send("Registered");
            }catch(err){
                res.send("Something went wrong");
                console.log(err)
            }
        })
    }catch(err){
        res.send("Something went wrong");
        console.log(err)
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await UserModel.find({email});
        if(user.length!=0){
            const hashed_pass=user[0].password
            bcrypt.compare(password, hashed_pass,(err,result)=>{
                if(result){
                    var token = jwt.sign({ userID:user[0]._id }, process.env.key);
                    res.send({"msg":"Login Success","token":token,"user":user[0].email});

                }else{
                    res.send("Wrong Credentials");
                    console.log(err);
                }
            });
        }else{
            res.send("New User Please Register First");
        }
    }catch(err){
        console.log("Something went wrong");
    }
})

module.exports={userRouter};
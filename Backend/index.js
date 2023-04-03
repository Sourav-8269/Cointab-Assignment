const express=require("express");
const { connection } = require("./configs/db")

const app=express();

require("dotenv").config();

app.use(express.json());  

const cors=require("cors");
app.use(cors());

const { userRouter } = require("./routes/User.route");

app.get("/",(req,res)=>{
    res.send("Welcome To App");
})

let date=new Date();
let min=date.getMinutes();
let hrs=date.getHours();
console.log(min,hrs)

app.use("/users",userRouter);

app.listen(process.env.port,async ()=>{
    try{
        await connection;
        console.log("Running Server")
    }catch(err){
        console.log("Something went wrong");
        console.log(err)
    }
})
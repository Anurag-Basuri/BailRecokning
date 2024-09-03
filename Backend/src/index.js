// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from './db/index.js';
import { app } from './app.js';
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{console.log(`server is runing at port : ${process.env.PORT}`)})
   console.log(`app is listening at http://localhost:${process.env.PORT}`)
})
.catch((err)=>{
    console.log("MOngo db connection failed :", err)
})
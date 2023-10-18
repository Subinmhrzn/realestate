import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js'

mongoose.connect(process.env.MONGO).then (()=>{
    console.log("Connected to MONGODB");
}).catch((err)=>{
    console.log(err);
})

const app = express ();

app.listen(5000, ()=>{
    console.log("Server is running in port 5000....")
})

app.use('/api/user',userRouter)


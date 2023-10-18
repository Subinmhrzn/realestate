import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

mongoose.connect(process.env.MONGO).then (()=>{
    console.log("Connected to MONGODB");
}).catch((err)=>{
    console.log(err);
})

const app = express ();
app.use(express.json());

app.listen(5000, ()=>{
    console.log("Server is running in port 5000....")
})

app.use('/api/user',userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next)=>{
    const statusCode =err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})


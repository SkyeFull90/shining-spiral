import dotenv from "dotenv"
import express from "express"
import app from "express"
import config from "./config.js"
import mongoose from "mongoose"
/*
 import catRoutes from "./routes/catRoute.js"
 import userRoutes from "./routes/userRoute.js"
 import passport from "passport"
 import {Strategy as LocalStrategy} from "passport-local"
 import User from "./models/userModel.js"
*/ 
dotenv.config();
const port = process.env.PORT || 3000
config()
//app.use(express.static('dist'))

app.use(express.urlencoded({ extended: true}))

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})
import mongoose from "mongoose";

async function config() {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}
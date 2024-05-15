import mongoose from "mongoose";
const { Schema, model} = mongoose;

const CatSchema = new Schema({
    name: String,
    age: Number,
    favoriteFood: String,
    funFact: String,
    image: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

export default model('Cat', CatSchema);
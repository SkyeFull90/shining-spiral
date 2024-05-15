const Cat = require('../models/catModel')
const cloudinary = require('cloudinary').v2
const multer = require('multer');

require('dotenv').config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = multer({ dest: './public/images' });

const getKitten = (req, res) => {
  res.send([{"Hello": "World"}])
}

const getCat = (req, res) => {
    res.send([{"Hello world": "From the api"}])
}

const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find().populate('owner');
    res.json(cats)
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error')
  }
} 


module.exports = {
    getKitten,
    getCat,
    getAllCats
}
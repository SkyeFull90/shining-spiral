const mongoose = require('mongoose')

const config = async () => {
    try {
        await mongoose.connect(process.env.DATBASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = config
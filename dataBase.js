const mongoose = require('mongoose')
require('dotenv').config()



async function connectData() {
    try { 
        console.log("Conection with data started")

        await mongoose.connect(process.env.MONGO_URL)
        
        console.log("Conection with data is sucessful")
} catch (error) {
    console.log(error)
}
}

module.exports = connectData


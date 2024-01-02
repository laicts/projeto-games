const mongoose = require('mongoose')


async function connectData() {
    try { 
        console.log("Conection with data started")
        await mongoose.connect('mongodb+srv://laisvictoriacts:dSdFMbuEZ9hS9tyv@clustergames.5brqfyv.mongodb.net/?retryWrites=true&w=majority')
        console.log("Conection with data is sucessful")
} catch (error) {
    console.log(error)
}
}

module.exports = connectData


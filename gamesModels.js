const mongoose = require('mongoose')
const { stringify } = require('uuid')


const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('gamer', gameSchema)
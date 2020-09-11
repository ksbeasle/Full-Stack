const mongoose = require('mongoose')

//Schema
let Schema = mongoose.Schema

//Array of genres 
let genreSchema = new Schema({
    genre: {
        type: String,
        required: true
    }
})

//Array of platforms
let platformSchema = new Schema({
    platform: {
        type: String,
        required: true
    }
})

//Game schema
let gameSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    platform: {
        type: [platformSchema],
        required: true
    },
    genre: {
        type: [genreSchema],
        required: true
    },
    esrb: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

//Model
let Game = mongoose.model('game', gameSchema)

module.exports = Game
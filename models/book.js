
// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose


// schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    
    },
    description: String,
    year: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    imageURL: String
})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker

// dependencies
const express = require('express')
const book = express.Router()
const Book = require('../models/baker.js')
const bookSeedData = require('../models/books_seed.js')
// const bakerSeedData = require('../models/baker_seed.js')

// Index: 
book.get('/', (req, res) => {
    Book.find()
        .populate('breads')
        .then(foundBooks => {
            res.send(foundBooks)
        })
})

//seed
book.get('/seed',(req,res)=>{
    Book.insertMany(bookSeedData)
    .then(success =>{
        res.send('successfully seeded books')
    })
})

// export
module.exports = book                  

require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const app = express()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

  
//routes
app.get('/', (req,res)=> {
    res.send('welcome to books api')
})

// books
const bookController = require('./controllers/books_controller.js')
app.use('/books', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})
  
//listen
app.listen(PORT, () => {
    console.log('listening on port' , PORT)
})

// use npx nodemon to update the server and control c to close it 
// use localhost/3000 to view the home page 
// Breads is the child, should have baker ID.

// require mongoose
const mongoose = require('mongoose')
// creating shorthand for the schema constructor
const { Schema } = mongoose

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png'},
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

// helper methods 
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
// 'http://placehold.it/500x500.png'
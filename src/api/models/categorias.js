const mongoose = require('mongoose')
const categoriasSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  img: { type: String, required: false }
})

module.exports = mongoose.model('Categoria', categoriasSchema)

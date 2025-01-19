const mongoose = require('mongoose')

const recetinhaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  ingredientes: [{ type: String, required: true }],
  img: { type: String, required: false },
  pasos: [{ type: String, required: false }],
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  }
})

module.exports = mongoose.model('Recetinha', recetinhaSchema)

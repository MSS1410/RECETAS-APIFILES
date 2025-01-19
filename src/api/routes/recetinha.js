const express = require('express')
const { subirRecetinha, loggMiddleware } = require('../../middlewares/file')
const {
  crearReceta,
  todasRecetas,
  actuReceta,
  eliminarReceta,
  recetinhaEuID
} = require('../controllers/recetinha')

const router = express.Router()

router.get('/', todasRecetas)
router.post('/', subirRecetinha.single('img'), loggMiddleware, crearReceta)
router.put('/:id', subirRecetinha.single('img'), loggMiddleware, actuReceta)
router.delete('/:id', eliminarReceta)
router.get('/:id', recetinhaEuID)

module.exports = router

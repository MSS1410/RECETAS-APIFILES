const express = require('express')
const { subirCategoria, loggMiddleware } = require('../../middlewares/file')
const {
  crearCategoria,
  todasCategorias,
  actuCategoria,
  categoriaID,
  eliminarCategoria
} = require('../controllers/categorias')

const router = express.Router()

router.get('/', todasCategorias)
router.post('/', subirCategoria.single('img'), loggMiddleware, crearCategoria)
router.put('/:id', actuCategoria)
router.delete('/:id', eliminarCategoria)
router.get('/:id', categoriaID)
module.exports = router

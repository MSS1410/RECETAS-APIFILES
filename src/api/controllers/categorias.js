const Categoria = require('../models/categorias')
const { eliminarImgCloudinary } = require('../../utils/utils')

const crearCategoria = async (req, res, next) => {
  try {
    console.log('Datos recibidos en req.body:', req.body)
    console.log('Archivo recibido en req.file:', req.file)
    const categoria = new Categoria(req.body)
    if (req.file) {
      categoria.img = req.file.path
    }
    const nuevaCategoria = await categoria.save()
    res.status(201).json(nuevaCategoria)
  } catch (error) {
    next(error)
  }
}

const todasCategorias = async (req, res, next) => {
  try {
    const categorias = await Categoria.find()
    res.status(200).json(categorias)
  } catch (error) {
    next(error)
  }
}

const actuCategoria = async (req, res, next) => {
  try {
    const { id } = req.params
    const categoria = await Categoria.findById(id)
    if (!categoria) {
      return res.status(404).json({ message: 'CANNOT find categoria' })
    }
    if (req.file && categoria.img) {
      // elimino imagen anterior
      await eliminarImgCloudinary(categoria.img)
    }
    if (req.file) {
      categoria.img = req.file.path
    }

    Object.assign(categoria, req.body)
    const subirCategoria = await categoria.save()
    res.status(200).json(subirCategoria)
  } catch (error) {
    next(error)
  }
}

const eliminarCategoria = async (req, res, next) => {
  try {
    const { id } = req.params
    const categoria = await Categoria.findByIdAndDelete(id)
    if (!categoria) {
      return res.status(404).json({ message: 'CANNOT find categoria' })
    }
    if (categoria.img) {
      await eliminarImgCloudinary(categoria.img)
    }
    await Categoria.findByIdAndDelete(id)
    res.status(200).json({ message: 'Ok Delete Categoria' })
  } catch (error) {
    next(error)
  }
}
const categoriaID = async (req, res, next) => {
  try {
    const { id } = req.params
    const categId = await Categoria.findById(id)
    if (!categId) {
      return res
        .status(404)
        .json({ message: 'NAI POSIBLE ENCONTRAI CATEGORIA' })
    }
    res.status(200).json(categId)
  } catch (error) {
    console.error('ERROR IMPERDONABLE EN BUSQUEDA ID')
    next(error)
  }
}
module.exports = {
  crearCategoria,
  todasCategorias,
  categoriaID,
  actuCategoria,
  eliminarCategoria
}

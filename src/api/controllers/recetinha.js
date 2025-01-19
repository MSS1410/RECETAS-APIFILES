const Recetinha = require('../models/recetinha')
const { eliminarImgCloudinary } = require('../../utils/utils')

const crearReceta = async (req, res, next) => {
  try {
    console.log('Datos recibidos en el cuerpo:', req.body)
    console.log('Archivo recibido:', req.file)
    const recetinha = new Recetinha(req.body)

    if (req.file) {
      recetinha.img = req.file.path
    }

    const nuevaRecetinha = await recetinha.save()
    res.status(201).json(nuevaRecetinha)
  } catch (error) {
    console.error(' EU NAU POSIBLE CREASION DU RECETINHA:', error)
    next(error) // asi paso error al middleware de wrong sites
  }
}

// allrecipeeee

const todasRecetas = async (req, res, next) => {
  try {
    const recetinhas = await Recetinha.find().populate('categoria') // relleno el camnpo chategori con los datos completos de la categoria selectee
    res.status(200).json(recetinhas)
  } catch (error) {
    next(error)
  }
}

// actu receta

const actuReceta = async (req, res, next) => {
  try {
    const { id } = req.params
    const recetinha = await Recetinha.findById(id)
    if (!recetinha) {
      return res.status(404).json({ message: 'CANT FIND RECETA' })
    }
    //necesito eliminar la imagen de cloudy si la hay, el imagen y el file
    if (req.file && recetinha.img) {
      await eliminarImgCloudinary(recetinha.img)
    }
    if (req.file) {
      recetinha.img = req.file.path
    }
    Object.assign(recetinha, req.body) // con object.assign
    //Object.assign: Copia las propiedades de un objeto que viene de req.body a otro objeto de destino que sera recetinha,
    //en este caso estoy copiando las propiedades enviadas en el cuerpo de la soli req.body, al docu recetinha,, con object assign es mas rapido and ez actualizar solo propiedades enviadas en req.body sin necesidad de especificar.
    const subirRecetinha = await recetinha.save()
    res.status(200).json(subirRecetinha)
  } catch (error) {
    next(error)
  }
}

// elminattione

const eliminarReceta = async (req, res, next) => {
  try {
    const { id } = req.params
    const recetinha = await Recetinha.findById(id)
    if (!recetinha) {
      return res.status(404).json({ message: 'where is your reseta?' })
    }
    //elimino img cloudinary
    if (recetinha.img) {
      await eliminarImgCloudinary(recetinha.img)
    }
    // elimino receta bbdd
    await Recetinha.findByIdAndDelete(id)
    return res.status(200).json({ message: 'Ok Delete Receta completa' })
  } catch (error) {
    next(error)
  }
}

const recetinhaEuID = async (req, res, next) => {
  try {
    const { id } = req.params
    recetinhaId = await Recetinha.findById(id).populate('categoria')
    if (!recetinhaId) {
      return res
        .status(404)
        .json({ message: 'EU NAI POSIBLE TROBARE RECEITNHA' })
    }
    res.status(200).json(recetinhaId)
  } catch (error) {
    console.error('ERROR FINC RESEITE:', error)
    next(error)
  }
}

module.exports = {
  crearReceta,
  todasRecetas,
  actuReceta,
  eliminarReceta,
  recetinhaEuID
}

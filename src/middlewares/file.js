const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../config/cloudinary')

const createStorage = (folder) =>
  new CloudinaryStorage({
    cloudinary,
    params: {
      folder,
      allowedFormats: ['jpg', 'png', 'jpeg']
    }
  })

const subirRecetinha = multer({ storage: createStorage('Recetinhas') })
const subirCategoria = multer({ storage: createStorage('Categorias') })

// nose ke oasaaaaa jdr
const loggMiddleware = (req, res, next) => {
  console.log('--------maldicion multer--------')
  console.log('Middleware Multer - req.body:', req.body)
  console.log('Middleware Multer - req.file:', req.file)
  if (req.file) {
    console.log('Ruta del archivo en Cloudinary:', req.file.path)
  } else {
    console.error('Archivo no procesado por Multer')
  }
  console.log('-----------------------')
  next()
}
module.exports = { subirRecetinha, subirCategoria, loggMiddleware }

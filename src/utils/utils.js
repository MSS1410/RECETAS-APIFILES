const cloudinary = require('../config/cloudinary')

const eliminarImgCloudinary = async (imgUrl) => {
  const imgSplitted = imgUrl.split('/')
  const nombreSplitted = imgSplitted.at(-1).split('.')[0]
  const carpetaSplitted = imgSplitted.at(-2)
  const public_id = `${carpetaSplitted}/${nombreSplitted}`

  try {
    const resultado = await cloudinary.uploader.destroy(public_id) // en resuktado, estamos esperando que nos de la informacion sobre el estado de la eliminasao de la img de cloudy
    console.log('OK DELETE IMG CLOUDY')
    return resultado
  } catch (error) {
    console.error('CANNOT DELETE IMG CLOUDINARY:', error)
    throw error
  }
}

module.exports = { eliminarImgCloudinary }

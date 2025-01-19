const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)

    console.log('OK CONNECT RECETINHA')
  } catch (error) {
    console.error('Error conectando a MongoDB', error.message)
    process.exit(1)
  }
}

module.exports = connectDB

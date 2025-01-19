require('dotenv').config()
console.log('Entorno cargado (Cloudinary):', process.env.CLOUDINARY_CLOUD_NAME)
console.log('Entorno cargado (MongoDB):', process.env.DB_URL)
const express = require('express')
const connectDB = require('./src/config/db')
const euRecetinhaRouter = require('./src/api/routes/recetinha')
const categoriasRouter = require('./src/api/routes/categorias')

// conectar a Mongouito

connectDB()

// instancia
const app = express()
const PORT = process.env.PORT || 5000

//Middlewares

app.use(express.json())
app.use('/recetinhas', euRecetinhaRouter)
app.use('/categorias', categoriasRouter)

// rutas no encontradas

app.use((req, res, next) => {
  res.status(404).json({ message: '- API REST FILES - RECETINHAS - ' })
})

// MOIDd para errors

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal Damage' })
})

// Inicializar servidor

app.listen(PORT, () => {
  console.log(`Recetas runnin at: http://localhost:${PORT}`)
})

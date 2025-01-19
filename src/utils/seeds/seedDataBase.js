require('dotenv').config()
const mongoose = require('mongoose')
const Categoria = require('../../api/models/categorias')
const Recetinha = require('../../api/models/recetinha')
const { categorias, recetinhas } = require('../../data/seedData')

const DB_URL =
  'mongodb+srv://maarcsesa:3Vljn3gnGLH083Uw@cluster001recetas.hx8hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster001RECETAS'
const seedDataBase = async () => {
  try {
    console.log('CONECTING TO MONGO')
    await mongoose.connect(DB_URL)
    console.log('ON MONGO')

    //CLEAN COLECCIONS
    console.log('CLEANING COL')
    await Categoria.deleteMany({}) // acuerda que :delete many en mongoose borra de la bbdd, el objeto dentro de ( ) es para filtrar a quien quiero eliminar, en este caso lo borrara todo de la coleccion category porque el filtro{} coincide con todos los registros
    // await Recipe.deleteMany({ category: 'Mexicanas' });
    // esto solo eliminaria a las recetas from mexico wey
    await Recetinha.deleteMany({})
    console.log('OK CLEAN COL')

    // Inserta Categorias
    console.log('INSERTANDO CAT')
    const categoriasInsert = await Categoria.insertMany(categorias)
    console.log('Show me las cat:', categorias)

    console.log('OK INSERT CAT')

    // actualizo recetas con id s de categorias

    console.log('ACTU RECETINHAS EU NOVO ID DU CATEGORIA')
    const recetinhaActu = recetinhas.map((recetinha) => {
      const categoriaEncontrada = categoriasInsert.find(
        (cat) => cat.tipo == recetinha.categoria.tipo
      )
      if (categoriaEncontrada) {
        recetinha.categoria = categoriaEncontrada._id
      }
      return recetinha
    })

    //insert recetinha actu
    console.log('INSERTANDO RECET')
    await Recetinha.insertMany(recetinhaActu)
    console.log('OK INSERT REC')
    // actualizo recetas con los IDS de las categorias

    console.log('SEED COMPLETE')
  } catch (error) {
    console.error('ERROR EJEC SEED:', error) // tiro del finally porq en catch need to ressshekaear some errore
  } finally {
    mongoose.disconnect()
    console.log('OFF MONGO')
  }
}

seedDataBase()

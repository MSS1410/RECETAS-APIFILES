const mongoose = require('mongoose')
// eu automatica generasao du ID s para categorias
const categoriasIds = {
  Postres: new mongoose.Types.ObjectId(),
  Italianas: new mongoose.Types.ObjectId(),
  Mexicanas: new mongoose.Types.ObjectId(),
  Saludables: new mongoose.Types.ObjectId(),
  Rapidas: new mongoose.Types.ObjectId()
}
// cate
const categorias = [
  { _id: categoriasIds.Postres, tipo: 'Postres', img: '' },
  { _id: categoriasIds.Italianas, tipo: 'Italianas', img: '' },
  { _id: categoriasIds.Mexicanas, tipo: 'Mexicanas', img: '' },
  { _id: categoriasIds.Saludables, tipo: 'Saludables', img: '' },
  { _id: categoriasIds.Rapidas, tipo: 'Rapidas', img: '' }
]

const recetinhas = [
  {
    titulo: 'Tiramisu',
    descripcion: 'Un classico postre italiano a capas de mascarpone y café',
    ingredientes: ['Mascarpone', 'Café', 'Huevos', 'Azucar', 'Cacao'],
    pasos: ['Preparar la mezcla de mascarpone', 'Armar las capas', 'Enfriar'],
    img: '',
    categoria: categoriasIds.Postres
  },
  {
    titulo: 'Enchiladas',
    descripcion: 'Enchiladas rellenas de pollo y bañadas en salsa.',
    ingredientes: ['Tortilla', 'Pollo', 'Salsa Roja', 'Queso'],
    pasos: ['Cocinar el pollo', 'Rellenar las tortillas', 'Hornear'],
    img: '',
    categoria: categoriasIds.Mexicanas
  },
  {
    titulo: 'Pizza Margarita',
    descripcion: 'Pizza simple con tomate, albahaca y mozzarella.',
    ingredientes: ['Tomate', 'Mozzarella', 'Albahaca', 'Harina'],
    pasos: ['Preparar la masa', 'Añadir los ingredientes', 'Hornear'],
    img: '',
    categoria: categoriasIds.Italianas
  },
  {
    titulo: 'Guacamole',
    descripcion: 'Dip mexicano fresco y saludable.',
    ingredientes: ['Aguacate', 'Lima', 'Cilantro', 'Cebolla', 'Tomate'],
    pasos: ['Pelar el aguacate', 'Mezclar con los demás ingredientes'],
    img: '',
    categoria: categoriasIds.Saludables
  },
  {
    titulo: 'Brownies',
    descripcion: 'Postre clásico de chocolate y nueces.',
    ingredientes: ['Chocolate', 'Harina', 'Huevos', 'Azúcar', 'Nueces'],
    pasos: ['Preparar la mezcla', 'Hornear', 'Dejar enfriar'],
    img: '',
    categoria: categoriasIds.Postres
  },
  {
    titulo: 'Lasaña',
    descripcion: 'Plato italiano con capas de pasta, carne y queso.',
    ingredientes: ['Pasta para lasaña', 'Carne', 'Salsa Bechamel', 'Queso'],
    pasos: ['Preparar las capas', 'Hornear', 'Servir caliente'],
    img: '',
    categoria: categoriasIds.Italianas
  },
  {
    titulo: 'Tacos',
    descripcion: 'Tacos mexicanos con carne y guarniciones frescas.',
    ingredientes: ['Tortillas', 'Carne', 'Cilantro', 'Lima'],
    pasos: ['Cocinar la carne', 'Preparar los tacos'],
    img: '',
    categoria: categoriasIds.Mexicanas
  },
  {
    titulo: 'Panqueques',
    descripcion: 'Rápidos y fáciles para el desayuno.',
    ingredientes: ['Harina', 'Leche', 'Huevos', 'Mantequilla'],
    pasos: ['Preparar la mezcla', 'Cocinar en sartén caliente'],
    img: '',
    categoria: categoriasIds.Rapidas
  },
  {
    titulo: 'Ensalada César',
    descripcion: 'Clásica ensalada saludable.',
    ingredientes: ['Lechuga', 'Crutones', 'Pollo', 'Aderezo César'],
    pasos: ['Preparar los ingredientes', 'Mezclar y servir'],
    img: '',
    categoria: categoriasIds.Saludables
  },
  {
    titulo: 'Churros',
    descripcion: 'Postre frito espolvoreado con azúcar y canela.',
    ingredientes: ['Harina', 'Agua', 'Azúcar', 'Canela', 'Aceite'],
    pasos: ['Preparar la masa', 'Freír', 'Espolvorear con azúcar'],
    img: '',
    categoria: categoriasIds.Postres
  },
  {
    titulo: 'Ravioles',
    descripcion: 'Pasta rellena con salsa.',
    ingredientes: ['Masa de pasta', 'Relleno', 'Salsa de tomate'],
    pasos: ['Preparar el relleno', 'Cocer la pasta', 'Añadir la salsa'],
    img: '',
    categoria: categoriasIds.Italianas
  },
  {
    titulo: 'Hamburguesa',
    descripcion: 'Hamburguesa clásica con queso y lechuga.',
    ingredientes: ['Pan', 'Carne', 'Queso', 'Lechuga', 'Tomate'],
    pasos: ['Preparar la carne', 'Montar la hamburguesa'],
    img: '',
    categoria: categoriasIds.Rapidas
  }
]

module.exports = { categorias, recetinhas }

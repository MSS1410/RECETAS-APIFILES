# API REST Files - Recetinhas

## Descripción
Esta es una API REST para gestionar recetas (**Recetinhas**) y categorías de recetas (**Categorias**). Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) tanto para recetas como para sus categorías asociadas.

---

## Características principales

- **CRUD completo para recetas y categorías**.
- Relación entre recetas y categorías.
- Uso de **Cloudinary** para gestión de imágenes.
- Manejo de errores controlado.
- Middleware para rutas inexistentes y errores globales.

---

## Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB** (con Mongoose)
- **Cloudinary** (almacenamiento de imágenes)
- **dotenv** (manejo de variables de entorno)

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>

1. Ve al directorio del proyecto:
cd <NOMBRE_DEL_DIRECTORIO>

1. Instala las dependencias:
    ```bash
    npm install


1. Configura las variables de entorno:
 Crea un archivo .env en la raíz del proyecto.
Añade las siguientes variables:


        ```BASh
        PORT=3000
        DB_URL=<URL_DE_TU_BASE_DE_DATOS_MONGODB>
        CLOUDINARY_CLOUD_NAME=<NOMBRE_DE_TU_CUENTA_CLOUDINARY>
        CLOUDINARY_API_KEY=<API_KEY_DE_CLOUDINARY>
        CLOUDINARY_API_SECRET=<API_SECRET_DE_CLOUDINARY>


## Uso
Iniciar el servidor:

    npm start
    
## Endpoints principales
   > Categorías
   
  - Obtener todas las categoría:
  GET /categorias
```
[
  {
    "_id": "<id>",
    "nombre": "<nombre>",
    "img": "<url_de_imagen>"
  }
]

````

 - Crear una categoría:
  POST /categorias
 ```
 {
  "nombre": "<nombre>",
  "img": "<ruta_de_imagen>"
}

````

-   Crear una categoría:
-   PUT /categorias/:id
  ```
  {
  "nombre": "<nombre_actualizado>",
  "img": "<ruta_de_nueva_imagen>"
}
````

- Eliminar una categoría
DELETE /categorias/:id

>Recetas

- Obtener todas las recetas
GET /recetinhas
````
[
  {
    "_id": "<id>",
    "nombre": "<nombre>",
    "categoria": {
      "_id": "<id_categoria>",
      "nombre": "<nombre_categoria>"
    },
    "img": "<url_de_imagen>"
  }
]

````
- Crear una receta
POST /recetinhas
````
{
  "nombre": "<nombre>",
  "categoria": "<id_categoria>",
  "img": "<ruta_de_imagen>"
}

````
- Actualizar una receta
PUT /recetinhas/:id
````
{
  "nombre": "<nombre_actualizado>",
  "categoria": "<id_categoria_actualizada>",
  "img": "<ruta_de_nueva_imagen>"
}
````

- Eliminar una receta
DELETE /recetinhas/:id


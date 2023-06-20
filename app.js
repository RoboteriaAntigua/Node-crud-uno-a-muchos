const express = require('express');
const app = express();

//traigo los modelos
const modeloCategoria = require('./models').Categoria;
const modeloProducto = require('./models').Producto;

app.use(express.urlencoded({ extended: true })) //sin esto no recibimos nada
app.use(express.json())

/*-------------------------------------------------------------------------*/
/* CRUD super sencillo. Tablas Categorias/Productos. Relacion uno a muchos */
/*-------------------------------------------------------------------------*/

/* Las tablas son Categorias y Productos. */

/* 
    Una categoria hasMany productos
+----+-------------+---------------------+---------------------+
| id | descripcion | createdAt           | updatedAt           |
+----+-------------+---------------------+---------------------+
|  4 | teclado     | 2023-06-20 15:31:04 | 2023-06-20 15:31:04 |
|  5 | Mesa        | 2023-06-20 15:44:14 | 2023-06-20 15:50:26 |
|  6 | monitor     | 2023-06-20 15:44:38 | 2023-06-20 15:44:38 |
+----+-------------+---------------------+---------------------+

    Un producto belongs to categoria
+----+----------------------+--------------+---------------------+---------------------+
| id | descripcion          | id_categoria | createdAt           | updatedAt           |
+----+----------------------+--------------+---------------------+---------------------+
|  1 | lg lm3245            |            5 | 2023-06-20 18:38:26 | 2023-06-20 18:43:40 |
|  2 | 16 patas             |            5 | 2023-06-20 18:40:43 | 2023-06-20 18:40:43 |
|  3 | Monitor sony s1232   |            6 | 2023-06-20 18:41:15 | 2023-06-20 18:41:15 |
|  4 | Teclado genius g1545 |            4 | 2023-06-20 18:41:53 | 2023-06-20 18:41:53 |
+----+----------------------+--------------+---------------------+---------------------+
    */


//---------------------- Crud tabla categorias -----------------------------//

//Create categorias 
app.get('/crear-categoria', (req, res) => {
    modeloCategoria.create(
        { "descripcion": "monitor" })     //Reemplazor por traido de un form
        .then((data) => {
            res.json({
                datos: data
            })
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })
})

//Read categorias 
app.get('/mostrar-categoria', (req, res) => {
    modeloCategoria.findAll(
        { where: { "id": 5 } })    //Reemplazor por traido de un form
        .then((data) => {
            res.json({
                datos: data
            })
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })
})

//Update categorias 
app.get('/actualizar-categoria', (req, res) => {
    modeloCategoria.update(
        { "descripcion": "Mesa" }, { where: { "id": 5 } }  //Reemplazor por traido de un form
    )
        .then((data) => { res.send("actualizado") })
        .catch((error) => {
            res.json({
                error: error
            });
        })
})

//drop categorias 
app.get('/borrar-categoria', (req, res) => {
    modeloCategoria.destroy(
        { where: { "id": 3 } })  //Reemplazar por traido de un form
        .then((data) => {
            res.send("borrado la columna con id:")
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })
})



//----------------- Crud tabla Productos----------------------------------//
//Create productos 
app.get('/crear-producto', (req, res) => {
    modeloProducto.create(                      //Reemplazor por traido de un form
        { 
            "descripcion": "Teclado genius g1545",
            "id_categoria": 4
        
     }
     ).then((data) => {
            res.json({
                datos: data
            })
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })
})

//Read categorias 
app.get('/mostrar-producto', (req, res) => {
    modeloProducto.findAll(
        { where: { "id": 5 } })    //Reemplazor por traido de un form
        .then((data) => {
            res.json({
                datos: data
            })
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })
})

//Update categorias 
app.get('/actualizar-producto', (req, res) => {
    modeloProducto.update(
        { "id_categoria": 5 }, { where: { "id": 1 } }  //Reemplazor por traido de un form
    )
        .then((data) => { res.send("actualizado") })
        .catch((error) => {
            res.json({
                error: error
            });
        })
})

//drop categorias 
app.get('/borrar-Producto', (req, res) => {
    modeloProducto.destroy(
        { where: { "id": 3 } })  //Reemplazar por traido de un form
        .then((data) => {
            res.send("borrado la columna con id:")
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })
})
app.listen(3000, () => { console.log('servidor corriendo') })
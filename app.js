const express = require('express');
const app = express();

//traigo los modelos
const modeloCategoria = require('./models').Categoria;
const modeloProducto = require('./models').Producto;

//para peticiones externas a travez de la url (postman)
app.use(express.urlencoded({ extended: true })) //sin esto no recibimos nada
app.use(express.json())

//CRUD super sencillo. Tablas Categorias/Productos. Relacion uno a muchos.

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

app.listen(3000, () => { console.log('servidor corriendo') })
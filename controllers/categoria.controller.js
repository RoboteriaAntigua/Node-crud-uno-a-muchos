
//---------------------- Crud tabla categorias -----------------------------//

//traigo el modelo
const modeloCategoria = require('../models').Categoria;

//Create categorias 
exports.createCategoria = (req, res, next) => {
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
}


//show categoria
exports.showCategoria = (req, res, next) => {
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
}


//update categoria
exports.updateCategoria = (req, res, next) => {
    modeloCategoria.update(
        { "descripcion": "Mesa" }, { where: { "id": 5 } }  //Reemplazor por traido de un form
    )
        .then((data) => { res.send("actualizado") })
        .catch((error) => {
            res.json({
                error: error
            });
        })
}


//drop categorias
exports.dropCategoria = function (req, res, next) {
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
}
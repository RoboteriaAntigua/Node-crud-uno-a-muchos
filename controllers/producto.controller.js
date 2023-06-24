
//----------------- Crud tabla Productos----------------------------------//
//traemos el modelo
const modeloProducto = require('../models').Producto;

//create producto
exports.createProducto = (req, res, next) => {
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
}

//read producto
exports.showProducto = (req, res, next) => {
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
}

//update producto
exports.updateProducto = (req, res, next) => {
    modeloProducto.update(
        { "id_categoria": 5 }, { where: { "id": 1 } }  //Reemplazor por traido de un form
    )
        .then((data) => { res.send("actualizado") })
        .catch((error) => {
            res.json({
                error: error
            });
        })
}

//delete producto
exports.dropProducto = (req, res, next) => {
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
}
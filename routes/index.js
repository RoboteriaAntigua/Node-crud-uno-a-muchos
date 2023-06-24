var express = require('express');
var router = express.Router();

//El controlador para separar la logica de negocios de las rutas
//Aplicando el primer principio de SOLID (Single responsability)
const categoriaController = require('../controllers/categoria.controller');
const productoController = require('../controllers/producto.controller');


//Create categorias 
router.get('/crear-categoria', categoriaController.createCategoria)

//Read categorias 
router.get('/mostrar-categoria', categoriaController.showCategoria)

//Update categorias 
router.get('/actualizar-categoria', categoriaController.updateCategoria)

//drop categorias 
router.get('/borrar-categoria',categoriaController.dropCategoria)



//Create productos 
router.get('/crear-producto', productoController.createProducto)

//Read producto 
router.get('/mostrar-producto', productoController.showProducto)

//Update producto 
router.get('/actualizar-producto', productoController.updateProducto)

//drop producto 
router.get('/borrar-Producto', productoController.dropProducto)

module.exports = router;

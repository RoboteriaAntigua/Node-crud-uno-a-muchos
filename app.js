const express = require('express');
const app = express();

//El router
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
//Rutas del CRUD de la tabla categorias

app.listen(3000, () => { console.log('servidor corriendo') })

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


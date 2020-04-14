const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333);

module.exports = app;
/**
 * Rota/Recurso
 */
/**
 * Métodos HTTP:
 * 
 * Get:Buscart uma informação do back-end
 * Post: Criar uma informação no back-end
 * Put: Alterar uma informação no back-end
 * Delete: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou editar recursos 
  */

  /**
   * SQL: MySql, SQlite, PostgreeSQL,Oracle
   * NoSQL: MongoDB,CouchDB
   */

   /**
    * Driver: Select * From users
    * Query Builder: table('users ).select('*').where()
    */






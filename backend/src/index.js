const express = require('express');
const cors = require('cors');
const routes =require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//rota /recuros

/**
 * Métodos http:
 * Get: busca/lista de informações do back-end
 * Post : criar uma informação no back-end
 * Put: alterar informação no back-end
 * Delete: deletar uma informação no back-end
 */


/**
 * tipos de parametos :
 * 
 * Query: parametros enviados na rota apos "?" (filtros e paginação)
 * ?name=Gabriel,?page=2&name=Gabriel
 * Route params: parametros utilizados para identificar recursos
 * /:id
 * Request Body :corpo da requisição, usado para criar, alterar
 */

 /**
  * SQL: MySql, SQLite, PostgreSql, Oracle, Microdoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc - não relacionais
  */

  /**
   * Drives : SELECT * FROM user
   * Query Builder : table('user).selecr('*')
   */
app.listen(3333);
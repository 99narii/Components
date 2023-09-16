const mysql = require('mysql');

var ConnectionString = {
  host: 'antsnest.cdn9c8wfru7l.ap-northeast-2.rds.amazonaws.com',
  user: 'antsnest',
  password: 'ants0814#C#',
  database: 'ants_components'
}
var connection = mysql.createConnection(ConnectionString);

var pool = mysql.createPool(ConnectionString);
connection.connect();

function execute(query, param) {
  return new Promise((resolve, reject) =>
    pool.query(query, param, (error, result, fields) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    })
  );
}
setInterval(function () {
  connection.query('select * from components_list');
}, 60000);
module.exports = { connection, pool, execute };
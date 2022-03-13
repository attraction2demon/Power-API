const mysql = require('mysql');
//const config = require('../../config');
/*
module.exports = {
     dbhost: "localhost",
     dbuser: "root",
     dbpassword: "",
     dbtable: "users"
 }; 
*/

const config = {
  dbhost: "localhost",
  dbuser: "root",
  dbpassword: "",
  dbtable: "users"
}; 

const mysqlConfig = {
  host: config.dbhost,
  user: config.dbuser,
  password: config.dbpassword,
  database: config.dbtable
};

const pool = mysql.createPool(mysqlConfig);

var getConnection = function (callback) {
  try {
    pool.getConnection(function (err, connection) {
      callback(err, connection);
    });
  } catch (e) {
    console.log(e);
  }

};

module.exports = getConnection;
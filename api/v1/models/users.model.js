const connection = require('../../helper/mysql');

// constructor
const Users = function (user) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.middle_name = user.middle_name;
    this.gender = user.gender;
    this.age = user.age;
};

Users.getAll = (callback) => {
    connection((err, sql) => {
        sql.query('SELECT * FROM users', (err, res) => {
            callback(err, res);
        });
    })
};

Users.getById = (user, callback) => {
    connection((err, sql) => {
        sql.query('SELECT * FROM users WHERE id = ?', [user.id], (err, res) => {
            callback(err, res);
        });
    })
};

module.exports = Users;
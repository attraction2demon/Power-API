const Users = require('../models/users.model');

exports.getAll = (req, res) => {
    Users.getAll((err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving clients." });
        } else {
            res.send(data);
        }
    });
};

exports.getById = (req, res) => {
    const user = new Users(req.params);
    Users.getById(user, (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving clients." });
        } else {
            res.send(data);
        }
    });
};
const router = require('express').Router();

const usersController = require('./controllers/users.controller')
const authMiddleware = require('./middleware/authentification');

router
    .get('/users?', authMiddleware, usersController.getAll) // site.com/api/v1/client(s) to get all clients
    .get('/users?/:id', authMiddleware, usersController.getById) // site.com/api/v1/client(s)/1234 to get client by id

module.exports = router;
// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router(); // Crea un nuevo objeto Router de Express

// Definir las rutas y asociarlas a los métodos del controlador
router.get('/', userController.getUsers);          // GET /api/users
router.get('/:id', userController.getUser);        // GET /api/users/:id
router.post('/', userController.createUser);       // POST /api/users
router.put('/:id', userController.updateUser);     // PUT /api/users/:id
router.delete('/:id', userController.deleteUser);  // DELETE /api/users/:id

// Exporta el router para que pueda ser usado en index.js
module.exports = router;
// src/controllers/userController.js
const userModel = require('../models/userModel');

// Controlador para usuarios
const userController = {
  // Obtener todos los usuarios
  getUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users); // Envía la respuesta JSON con los usuarios
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).send('Error interno del servidor'); // Envía un error 500
    }
  },

  // Obtener un usuario por ID
  getUser: async (req, res) => {
    try {
      const userId = req.params.id; // Obtiene el ID de los parámetros de la URL
      const user = await userModel.getUserById(userId);

      if (user) {
        res.json(user); // Envía el usuario encontrado
      } else {
        res.status(404).send('Usuario no encontrado'); // Si no se encuentra, envía 404
      }
    } catch (error) {
      console.error('Error getting user by ID:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  // Crear un nuevo usuario
  createUser: async (req, res) => {
    try {
      const newUser = req.body; // Obtiene los datos del usuario del cuerpo de la petición
      // Aquí podrías añadir validaciones para newUser
      if (!newUser || !newUser.name || !newUser.email) {
         return res.status(400).send('Faltan datos obligatorios (name, email)');
      }

      const insertedId = await userModel.createUser(newUser);
      // Envía una respuesta 201 (Created) con el ID del nuevo usuario o el objeto completo
      res.status(201).json({ id: insertedId, ...newUser });
    } catch (error) {
      console.error('Error creating user:', error);
       // Manejar error específico de duplicado (ej. email ya existe)
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(409).send('El email ya está registrado.'); // Conflict
      } else {
        res.status(500).send('Error interno del servidor');
      }
    }
  },

  // Actualizar un usuario existente
  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUserData = req.body; // Datos actualizados del cuerpo
       // Aquí podrías añadir validaciones
       if (!updatedUserData || (Object.keys(updatedUserData).length === 0)) {
           return res.status(400).send('No se proporcionaron datos para actualizar.');
       }

      const affectedRows = await userModel.updateUser(userId, updatedUserData);

      if (affectedRows > 0) {
        res.status(200).send('Usuario actualizado correctamente'); // O 204 No Content
      } else {
        res.status(404).send('Usuario no encontrado'); // Si no se afectó ninguna fila
      }
    } catch (error) {
      console.error('Error updating user:', error);
       if (error.code === 'ER_DUP_ENTRY') {
         res.status(409).send('El email ya está registrado por otro usuario.');
       } else {
        res.status(500).send('Error interno del servidor');
       }
    }
  },

  // Eliminar un usuario por ID
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const affectedRows = await userModel.deleteUser(userId);

      if (affectedRows > 0) {
        res.status(200).send('Usuario eliminado correctamente'); // O 204 No Content
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).send('Error interno del servidor');
    }
  },
};

module.exports = userController;
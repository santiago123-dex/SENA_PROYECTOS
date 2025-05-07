// src/models/userModel.js
const db = require('../config/database');

// Modelo para operaciones con la tabla 'users'
const userModel = {
  // Obtener todos los usuarios
  getAllUsers: async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  },

  // Obtener un usuario por ID
  getUserById: async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0]; // Devuelve el primer resultado (o undefined si no se encuentra)
  },

  // Crear un nuevo usuario
  createUser: async (user) => {
    // El segundo argumento del query (?) es un array de valores que reemplazan los ?,
    // o puedes pasar un objeto si usas 'SET ?'
    const [result] = await db.query('INSERT INTO users SET ?', user);
    // result contiene información sobre la inserción, incluyendo el nuevo ID
    return result.insertId;
  },

  // Actualizar un usuario existente
  updateUser: async (id, user) => {
    // UPDATE users SET name = ?, email = ? WHERE id = ?
    // También puedes usar 'SET ?' pasando el objeto user completo
    const [result] = await db.query('UPDATE users SET ? WHERE id = ?', [user, id]);
    // result.affectedRows indica cuántas filas fueron afectadas (1 si se actualizó, 0 si no se encontró el ID)
    return result.affectedRows;
  },

  // Eliminar un usuario por ID
  deleteUser: async (id) => {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    // result.affectedRows indica cuántas filas fueron afectadas
    return result.affectedRows;
  },
};

module.exports = userModel;
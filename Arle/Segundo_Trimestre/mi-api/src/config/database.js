// src/config/database.js
const mysql = require('mysql2'); // esta funcion es fundamental por que con esta se importan los modulos

// Configuración de la conexión (¡Cambia estos valores por los tuyos!)
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', // O la IP/nombre de host de tu servidor MySQL
  user: process.env.DB_USER || 'root',      // Tu usuario de MySQL
  password: process.env.DB_PASSWORD || '', // Tu contraseña de MySQL (¡Cámbiala!)
  database: process.env.DB_DATABASE || 'my_api_db', // El nombre de la base de datos que creaste
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Exporta el pool para usarlo en los modelos
module.exports = pool.promise(); // Usamos .promise() para usar async/await
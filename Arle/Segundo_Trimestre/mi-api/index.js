// index.js
const express = require('express');
const userRoutes = require('./src/routes/userRoutes'); // Importa las rutas de usuario

const app = express(); // Crea una instancia de la aplicación Express
const PORT = process.env.PORT || 3000; // Define el puerto, usando la variable de entorno si existe o 3000 por defecto

// Middleware para parsear cuerpos de petición JSON
app.use(express.json());

// Ruta de ejemplo para probar si el servidor está corriendo
app.get('/', (req, res) => {
  res.send('API REST de Usuarios corriendo!');
});

// Monta las rutas de usuarios bajo el prefijo /api/users
// Esto significa que todas las rutas definidas en userRoutes.js comenzarán con /api/users
// Ejemplo: GET / se convierte en GET /api/users
// Ejemplo: GET /:id se convierte en GET /api/users/:id
app.use('/api/users', userRoutes);


// Manejador de errores básicos (opcional pero recomendado)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!'); // Puedes enviar un mensaje de error más genérico
});


// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log('API de usuarios disponible en http://localhost:3000/api/users');
});
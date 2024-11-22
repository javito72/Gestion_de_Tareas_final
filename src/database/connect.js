const mongoose = require('mongoose');
require('dotenv').config(); // Cargar las variables de entorno

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Conexión simplificada
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar a MongoDB Atlas:', error);
    process.exit(1); // Finaliza el proceso en caso de error
  }
};

module.exports = connectDB;

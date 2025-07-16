// src/config/database.js
const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mercadolivro', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🟢 Conectado ao MongoDB!');
  } catch (error) {
    console.error('🔴 Erro ao conectar ao MongoDB:', error);
  }
};

module.exports = connectDatabase;


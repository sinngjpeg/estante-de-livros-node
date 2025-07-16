const express = require('express');
const { createServer } = require('./App.js');
const connectDatabase = require('./configs/Database.js');

connectDatabase();
const app = createServer();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${port}`);
});
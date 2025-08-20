const express = require('express');
const { createServer } = require('./App.js');
const connectDatabase = require('./configs/Database.js');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');


connectDatabase();
const app = createServer();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${port}`);
    console.log(`🔥 Swagger rodando em http://localhost:${port}/api-docs`);
});
const express = require('express');
const router = require('./routers/Routers.js');
const swaggerUi = require('swagger-ui-express'); // importar swaggerUi aqui
const YAML = require('yamljs');
const path = require('path');
const cors = require('cors');

const swaggerDocument = YAML.load(path.join(__dirname, '..', 'docs', 'swagger.yaml'));


function createServer() {
    const app = express();
    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true, // se precisar enviar cookies
    }));
    app.use(express.json());
    app.use("/api", router)
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    return app;
}

module.exports = { createServer };

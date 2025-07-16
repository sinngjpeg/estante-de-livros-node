const express = require('express');
const router = require('./routers/Routers.js');


function createServer() {
    const app = express();
    app.use(express.json());
    app.use("/api", router)

    return app;
}

module.exports = { createServer };

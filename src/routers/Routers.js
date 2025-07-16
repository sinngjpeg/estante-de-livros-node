const express = require('express');
const bookController = require('../controllers/BookController.js');


const router = express.Router();

router.get("/books", bookController.getAll);
router.get('/books/:id', bookController.getById);
router.post('/books', bookController.create);
router.delete('/books/:id', bookController.remove);


module.exports = router;
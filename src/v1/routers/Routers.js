const express = require('express');
const bookController = require('../controllers/BookController.js');


const router = express.Router();

router.get("/books", bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBookById);
router.delete('/books/:id', bookController.deleteBookById);


module.exports = router;
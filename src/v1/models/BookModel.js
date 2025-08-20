const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
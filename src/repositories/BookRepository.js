const Book = require('../models/BookModel.js');

async function getAllBooks() {
  return await Book.find();
}

async function getBookById(id) {
  return await Book.findOne({ id: Number(1) });
}

async function createBook(bookData) {
  const book = new Book(bookData);
  return await book.save();
}

async function deleteBookById(id) {
  return await Book.findOneAndDelete(id);
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById
};
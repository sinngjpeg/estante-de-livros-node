const bookRepository = require('../repositories/BookRepository.js');


async function getAllBooks() {
  return await bookRepository.getAllBooks();
}

async function createBook({ id, title, author }) {
  const bookData = { id, title, author };
  return await bookRepository.createBook(bookData)
}

async function getBookById(id) {
  return await bookRepository.getBookById(id);
}

async function updateBookById(id, bookData) {
  return await bookRepository.updateBookById(id, bookData);
}

async function deleteBookById(id) {
  return await bookRepository.deleteBookById(id);
}

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById
};

const bookService = require('../../services/BookService.js');
const statusCode = require('../../utils/StatusCode.js');

async function getAllBooks(request, response) {
  const books = await bookService.getAllBooks();
  response.json(books);
}

async function createBook(req, res) {
  try {
    const book = await bookService.createBook(req.body);
    res.status(statusCode.StatusCode.CREATED).json(book);
  } catch (error) {
    res.status(statusCode.StatusCode.BAD_REQUEST).json({ error: error.message });
  }
}

async function getBookById(req, res) {
  const book = await bookService.getBookById(req.params.id);
  if (!book) {
    return res.status(statusCode.StatusCode.NOT_FOUND).json({ message: 'Livro não encontrado' });
  }
  res.json(book);
}

async function updateBookById(req, res) {
  const book = await bookService.updateBookById(req.params.id, req.body);
  if (!book) {
    return res.status(statusCode.StatusCode.NOT_FOUND).json({ message: 'Livro não encontrado' });
  }
  res.json(book);
}

async function deleteBookById(req, res) {
  await bookService.deleteBookById(req.params.id);
  res.status(statusCode.StatusCode.NO_CONTENT).send();
}

module.exports = { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };

const bookController = require('../src/controllers/BookController');
const httpMocks = require('node-mocks-http');
const bookService = require('../src/services/BookService');

// Usa o mock manual criado em __mocks__
jest.mock('../src/services/BookService');

describe('BookController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getAllBooks deve retornar lista de livros com status 200', async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();

        const fakeBooks = [{ id: 1, title: 'Livro A', author: 'Autor A' }];
        bookService.getAllBooks.mockResolvedValue(fakeBooks);

        await bookController.getAllBooks(req, res);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toEqual(fakeBooks);
    });

    test('createBook deve criar um livro e retornar status 201', async () => {
        const req = httpMocks.createRequest({ body: { title: 'Novo livro', author: 'Autor B' } });
        const res = httpMocks.createResponse();

        const fakeBook = { id: 2, title: 'Novo livro', author: 'Autor B' };
        bookService.createBook.mockResolvedValue(fakeBook);

        await bookController.createBook(req, res);

        expect(res.statusCode).toBe(201);
        expect(res._getJSONData()).toEqual(fakeBook);
    });

    test('createBook deve retornar 400 em caso de erro', async () => {
        const req = httpMocks.createRequest({ body: {} });
        const res = httpMocks.createResponse();

        const errorMessage = 'Erro de validação';
        bookService.createBook.mockRejectedValue(new Error(errorMessage));

        await bookController.createBook(req, res);

        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toEqual({ error: errorMessage });
    });

    test('getBookById deve retornar o livro com status 200', async () => {
        const req = httpMocks.createRequest({ params: { id: 1 } });
        const res = httpMocks.createResponse();

        const fakeBook = { id: 1, title: 'Livro A', author: 'Autor A' };
        bookService.getBookById.mockResolvedValue(fakeBook);

        await bookController.getBookById(req, res);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toEqual(fakeBook);
    });

    test('getBookById deve retornar 404 se não encontrar o livro', async () => {
        const req = httpMocks.createRequest({ params: { id: 99 } });
        const res = httpMocks.createResponse();

        bookService.getBookById.mockResolvedValue(null);

        await bookController.getBookById(req, res);

        expect(res.statusCode).toBe(404);
        expect(res._getJSONData()).toEqual({ message: 'Livro não encontrado' });
    });

    test('updateBookById deve atualizar e retornar livro com status 200', async () => {
        const req = httpMocks.createRequest({
            params: { id: 1 },
            body: { title: 'Livro Atualizado', author: 'Autor Atualizado' },
        });
        const res = httpMocks.createResponse();

        const updatedBook = { id: 1, title: 'Livro Atualizado', author: 'Autor Atualizado' };
        bookService.updateBookById.mockResolvedValue(updatedBook);

        await bookController.updateBookById(req, res);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toEqual(updatedBook);
    });

    test('updateBookById deve retornar 404 se livro não encontrado', async () => {
        const req = httpMocks.createRequest({
            params: { id: 99 },
            body: { title: 'Livro Atualizado' },
        });
        const res = httpMocks.createResponse();

        bookService.updateBookById.mockResolvedValue(null);

        await bookController.updateBookById(req, res);

        expect(res.statusCode).toBe(404);
        expect(res._getJSONData()).toEqual({ message: 'Livro não encontrado' });
    });

    test('deleteBookById deve retornar status 204', async () => {
        const req = httpMocks.createRequest({ params: { id: 1 } });
        const res = httpMocks.createResponse();

        bookService.deleteBookById.mockResolvedValue();

        await bookController.deleteBookById(req, res);

        expect(res.statusCode).toBe(204);
        expect(res._isEndCalled()).toBe(true);
    });
});

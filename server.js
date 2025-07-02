const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições JSON
// Isso é necessário para receber dados no formato JSON
app.use(express.json());



// Lista todos os livros
const livros = [
    { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
    { id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling' },
    { id: 3, titulo: 'O Hobbit', autor: 'J.R.R. Tolkien' },
    { id: 4, titulo: '1984', autor: 'George Orwell' }
];

// Roda Raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo à API do Mercado Livros!');
});

// Lista todos os livros
app.get('/livros', (req, res) => {
    res.json(livros);
});

// Busca um livro pelo ID
app.get('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const getLivros = livros.find(livros => livros.id === id);

    if (!getLivros) {
        return res.status(404).send('Livro não encontrado');
    }

    res.json(getLivros);
});


// Adiciona um novo livro
app.post('/livros', (req, res) => {
    const { titulo, autor } = req.body;

    if (!titulo || !autor) {
        return res.status(400).send('Título e autor são obrigatórios');
    }

    const novoLivro = {
        id: livros.length + 1,
        titulo,
        autor
    };

    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
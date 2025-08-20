# 📚 Mercado de Livros

Um sistema básico de gerenciamento de livros desenvolvido em **Node.js**.  
Permite **adicionar, editar, excluir e listar livros**, utilizando **Express**, **Mongoose** e **Sequelize**, com documentação via **Swagger**.  

---

## 🚀 Tecnologias

- Node.js
- Express
- Mongoose
- Sequelize
- dotenv
- Swagger JSDoc
- Swagger UI Express
- YAMLJS

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/mercado-livro.git
cd mercado-livro
npm install
````
## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mercado-livro
DB_HOST=localhost
DB_USER=usuario
DB_PASS=senha
DB_NAME=mercado_livro
````
## ▶️ Executando o Projeto

```bash
npm run start
npm run start:dev
````

## 📖 Documentação da API

Após iniciar o servidor, acesse a documentação gerada pelo **Swagger**:  

👉 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 🔑 Funcionalidades

- ➕ **Adicionar um livro**
- ✏️ **Editar um livro**
- ❌ **Excluir um livro**
- 📋 **Listar todos os livros**

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.  
Consulte o arquivo [LICENSE](LICENSE) para mais informações.

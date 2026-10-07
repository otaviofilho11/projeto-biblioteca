# 📚 Sistema de Biblioteca

Sistema de gerenciamento de biblioteca desenvolvido em **Node.js** com **MySQL**, executado diretamente pelo terminal.

O projeto tem como objetivo praticar conceitos de desenvolvimento backend, banco de dados, SQL, operações CRUD, módulos do Node.js e integração com banco de dados.

> 🚧 Projeto em desenvolvimento.

---

## 🛠️ Tecnologias utilizadas

- **Node.js**
- **JavaScript**
- **MySQL**
- **MySQL2**
- **SQL**
- **Git/GitHub**

---

## 📁 Estrutura do projeto

```text
projeto_biblioteca/
│
├── connection/
│   └── database.js
│
├── src/
│   ├── index.js
│   ├── livros.js
│   ├── usuario.js
│   └── emprestimos.js
│
├── sql/
│   └── banco.sql
│
├── package.json
├── package-lock.json
└── README.md
```

### `src/index.js`

Arquivo principal da aplicação.

É responsável por iniciar o programa e, posteriormente, controlar o menu e a interação com as funcionalidades do sistema.

### `src/livros.js`

Responsável pelas operações relacionadas aos livros.

Atualmente estão sendo implementadas operações como:

- Cadastrar livro
- Listar livros
- Buscar livro
- Atualizar livro
- Excluir livro

### `src/usuario.js`

Responsável pelas operações relacionadas aos usuários da biblioteca.

### `src/emprestimos.js`

Responsável pelas operações de empréstimo e devolução de livros.

Também deverá concentrar as regras relacionadas à disponibilidade dos livros.

### `connection/database.js`

Responsável pela conexão da aplicação com o banco de dados MySQL.

### `sql/banco.sql`

Contém os comandos SQL necessários para criação e configuração do banco de dados e suas tabelas.

---

## 🗄️ Banco de dados

O sistema utiliza **MySQL** para armazenamento dos dados.

Entre as principais entidades do projeto estão:

- Livros
- Usuários
- Empréstimos

A estrutura inicial do banco está disponível em:

```text
sql/banco.sql
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- MySQL
- npm

Você pode verificar as versões instaladas com:

```bash
node --version
npm --version
mysql --version
```

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd projeto_biblioteca
```

Instale as dependências:

```bash
npm install
```

---

## 🗃️ Configuração do banco de dados

1. Inicie o servidor MySQL.

2. Execute o arquivo:

```text
sql/banco.sql
```

3. Configure as informações de conexão em:

```text
connection/database.js
```

Exemplo:

```javascript
const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'biblioteca',
    password: '12345',
    database: 'biblioteca',
    port: 3306
});

module.exports = conexao;
```

> ⚠️ Altere `user`, `password` e demais informações de acordo com a configuração do seu MySQL.

---

## ▶️ Executando o projeto

Na raiz do projeto, execute:

```bash
node src/index.js
```

---

## 📌 Funcionalidades planejadas

### 📚 Livros

- [x] Cadastrar livro
- [x] Listar livros
- [x] Buscar livro por ID
- [x] Atualizar livro
- [x] Excluir livro

### 👤 Usuários

- [ ] Cadastrar usuário
- [ ] Listar usuários
- [ ] Buscar usuário
- [ ] Atualizar usuário
- [ ] Excluir usuário

### 🔄 Empréstimos

- [ ] Realizar empréstimo
- [ ] Listar empréstimos
- [ ] Devolver livro
- [ ] Verificar disponibilidade do livro
- [ ] Controlar estoque

### 🖥️ Sistema

- [ ] Criar menu interativo no terminal
- [ ] Validar entradas do usuário
- [ ] Melhorar tratamento de erros
- [ ] Organizar fluxo da aplicação

---

## 🧠 Objetivos de aprendizado

Este projeto está sendo desenvolvido com foco no aprendizado de:

- JavaScript com Node.js
- CommonJS e módulos
- Funções assíncronas
- `async/await`
- Promises
- Operações CRUD
- SQL
- MySQL
- Integração entre Node.js e banco de dados
- Relacionamentos entre tabelas
- Cardinalidade
- Regras de negócio
- Organização de projetos backend
- Git e GitHub

---

## 📐 Arquitetura atual

O projeto utiliza uma arquitetura simples, adequada ao estágio atual de desenvolvimento:

```text
index.js
    │
    ├── livros.js
    │
    ├── usuario.js
    │
    └── emprestimos.js
            │
            ▼
     database.js
            │
            ▼
          MySQL
```

A ideia é manter a estrutura simples durante o desenvolvimento e, conforme o projeto crescer, avaliar a necessidade de separar responsabilidades em camadas.

---

## 📈 Próximos passos

O desenvolvimento seguirá aproximadamente esta ordem:

1. Finalizar o CRUD de livros
2. Testar as operações com o banco
3. Implementar o CRUD de usuários
4. Implementar empréstimos e devoluções
5. Criar as regras de negócio
6. Criar o menu interativo no terminal
7. Melhorar validações e tratamento de erros
8. Revisar e organizar o projeto

---

## 👨‍💻 Autor

**Otavio**

Projeto desenvolvido para estudos de **Node.js, Banco de Dados e desenvolvimento backend**.create mode 100644 package-lock.json
create mode 100644 package.json
create mode 100644 src/emprestimos.js
create mode 100644 src/index.js
create mode 100644 src/livros.js
create mode 100644 src/usuario.js
tavinho\@otaviosanchez-Vostro-15-3510:\~/Desktop/projeto_biblioteca$ git remote add origin [https://github.com/otaviofilho11/projeto-biblioteca](https://github.com/otaviofilho11/projeto-biblioteca)
tavinho\@otaviosanchez-Vostro-15-3510:\~/Desktop/projeto_biblioteca$ git branch -M main
tavinho\@otaviosanchez-Vostro-15-3510:\~/Desktop/projeto_biblioteca$ git push -u origin main
Username for '[https://github.com](https://github.com)': otaviofilho11
Password for '[https://otaviofilho11@github.com](https://otaviofilho11@github.com)':

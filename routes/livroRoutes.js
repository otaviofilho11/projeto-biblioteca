const express = require('express');
const router = express.Router();

//controllers
const livroController = require('../controllers/livroController');
/*
const usuarioController 
const emprestimoController
*/

//rotas dos livros
router.get('/acessarLivros', livroController.acessarLivros);
router.get('/acessarLivros/:id', livroController.acessarLivroId);
router.post('/adicionarLivro/', livroController.adicionarLivro);
router.put('/atualizarLivro/:id', livroController.atualizarLivro);
router.delete('/deletarLivro/:id', livroController.deletarLivro);
//

module.exports = router;
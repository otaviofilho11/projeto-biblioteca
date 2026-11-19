const express = require('express');
const router = express.Router();

//controllers
const livroController = require('../controllers/livroController');
/*
const usuarioController 
const emprestimoController
*/

//rotas dos livros
router.get('/livros', livroController.acessarLivros);
router.get('livros/:nome',livroController.acessarLivroNome);
router.get('/livros/:autor',livroController.acessarLivroAutor);
router.get('/livros/:id', livroController.acessarLivroId);
router.post('/livros', livroController.adicionarLivro);
router.put('/livros/:id', livroController.atualizarLivro);
router.delete('/livros/:id', livroController.deletarLivro);
//

module.exports = router;
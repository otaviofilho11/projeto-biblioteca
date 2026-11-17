const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/acessarLivros', livroController.acessarLivros);
router.get('/acessarLivros/:id', livroController.acessarLivroId);
router.get('adicionarLivro', livroController.adicionarLivro);

module.exports = router;
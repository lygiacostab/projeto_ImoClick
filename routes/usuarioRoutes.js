const express = require('express');
const router = express.Router();

 const userController = require('../controllers/userController');


//páginas simples:
router.get('/', userController.renderHome);
router.get('/login', userController.renderLogin);
router.get('/cadastroUser', userController.renderCadastroUser);
router.get('/identifUsuario', userController.renderIdentificacao);
router.get('/capturaImagem', userController.renderCapImagem);
router.get('/cadastroImovel', userController.renderCadastrarImovel);
router.get('/pagConstrucao', userController.renderPagConstrucao);

//cadastro usuário
router.post('/cadastroUser', userController.cadastrarUsuario);


 module.exports = router;
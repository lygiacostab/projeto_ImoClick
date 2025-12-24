const express = require('express');
const router = express.Router();

const imovelController = require('../controllers/imovelController');

router.get('/catalogo', imovelController.renderCatalogo);

module.exports = router;
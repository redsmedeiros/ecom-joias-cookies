const express = require('express');
const router = express.Router();
const { createUserCtrl } = require('../controller/userController');


//rotas
router.post('/register', createUserCtrl);

module.exports = router;
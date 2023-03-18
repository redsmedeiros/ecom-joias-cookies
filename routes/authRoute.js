const express = require('express');
const router = express.Router();
const { createUserCtrl, loginUserCtrl } = require('../controller/userController');


//rotas
router.post('/register', createUserCtrl);
router.post('/login', loginUserCtrl);

module.exports = router;
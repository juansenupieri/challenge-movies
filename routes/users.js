var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { check, validationResult, body} = require('express-validator');

// LOGIN 
router.get('/login', guestMiddleware,  usersController.form );
router.post('/login', usersController.login );

//LOGOUT
router.get('/logout', authMiddleware, usersController.logout );

//REGISTER
router.get('/register', guestMiddleware, usersController.register );
router.post('/register',[
    check('name').isLength({min:2}).withMessage('Debe registrar un nombre'),
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener 6 caracteres mínimo')
], usersController.save );

module.exports = router;
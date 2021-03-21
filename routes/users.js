var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// LOGIN 
router.get('/login', guestMiddleware,  usersController.form );
router.post('/login', usersController.login );
router.get('/logout', authMiddleware, usersController.logout );
router.get('/register', guestMiddleware, usersController.register );
router.post('/register', usersController.save );

module.exports = router;

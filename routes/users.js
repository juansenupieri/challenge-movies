var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

// LOGIN 
router.get('/login', usersController.form );
router.post('/login', usersController.login );
router.get('/register', usersController.register );
router.post('/register', usersController.save );


module.exports = router;

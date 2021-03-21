var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// LOGIN 
router.get('/login', guestMiddleware,  usersController.form );
router.post('/login', usersController.login );
router.get('/logout', authMiddleware, usersController.logout );
router.get('/register', usersController.register );
router.post('/register', usersController.save );
// CHECK
router.get('/check', function( req, res){
    if ( req.session.usuarioLogueado == undefined){ res.send( "No estas Logueado")}
    else { res.send("El usuario logueado es " + req.session.usuarioLogueado.email)}
})

module.exports = router;

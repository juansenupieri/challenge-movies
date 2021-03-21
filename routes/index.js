var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');

/* GET home page. */
router.get('/', moviesController.list );
//Prueba Session 
//router.get('/pruebaSession', function(req, res) {
  //  if ( req.session.numeroVisitas == undefined){ 
   //     req.session.numeroVisitas = 0;
  //  };
  //  req.session.numeroVisitas++ ;
//    res.send('Session tiene el número ' + req.session.numeroVisitas); });

router.get('/usuarioLogueado', function(req, res) {
  res.send('Esta logueado: ' + req.session.usuarioLogueado);
});



module.exports = router;

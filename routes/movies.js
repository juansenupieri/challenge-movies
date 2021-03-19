const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

/* GET home page. */
router.get('/', moviesController.list );
router.get('/create', moviesController.create); 
router.post('/create', moviesController.save);
router.get('/edit/:id', moviesController.edit);
router.post('/edit/:id', moviesController.recreate);
router.get('/detail/:id', moviesController.detail );
router.post('/delete/:id', moviesController.delete);

module.exports = router;

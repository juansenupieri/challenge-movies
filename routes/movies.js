const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const authMiddleware = require('../middlewares/authMiddleware');

// READ ALL MOVIES
router.get('/', moviesController.list );

//CREATE MOVIE
router.get('/create', authMiddleware, moviesController.create); 
router.post('/create', moviesController.save);

//EDIT MOVIE
router.get('/edit/:id', authMiddleware, moviesController.edit);
router.post('/edit/:id', moviesController.recreate);

// DETAIL MOVIE
router.get('/detail/:id', moviesController.detail );

//DELETE MOVIE
router.post('/delete/:id', authMiddleware, moviesController.delete);


module.exports = router;

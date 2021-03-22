const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const adminMiddleware = require('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// READ ALL MOVIES
router.get('/', moviesController.list );

//CREATE MOVIE
router.get('/create', authMiddleware, adminMiddleware, moviesController.create); 
router.post('/create', moviesController.save);

//EDIT MOVIE
router.get('/edit/:id', authMiddleware, adminMiddleware, moviesController.edit);
router.post('/edit/:id', moviesController.recreate);

// DETAIL MOVIE
router.get('/detail/:id', authMiddleware, moviesController.detail );

//DELETE MOVIE
router.post('/delete/:id', authMiddleware, adminMiddleware, moviesController.delete);


module.exports = router;
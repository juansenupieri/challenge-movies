const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const adminMiddleware = require('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { check, validationResult, body} = require('express-validator');

// READ ALL MOVIES
router.get('/', moviesController.list );

//CREATE MOVIE
router.get('/create', authMiddleware, adminMiddleware, moviesController.create); 
router.post('/create', [
    check('titulo').isLength({min:5}).withMessage('Debe registrar un titulo para la película'),
    check('premios').isLength({min:1}).withMessage('Debe registrar la cantidad de premios'),
    check('duracion').isLength({min:1}).withMessage('Debe registrar la duración'),
    check('rating').isLength({min:1}).withMessage('Debe registrar el rating')
], moviesController.save);

//EDIT MOVIE
router.get('/edit/:id', authMiddleware, adminMiddleware, moviesController.edit);
router.post('/edit/:id', moviesController.recreate);

// DETAIL MOVIE
router.get('/detail/:id',  moviesController.detail );

//DELETE MOVIE
router.post('/delete/:id', authMiddleware, adminMiddleware, moviesController.delete);


module.exports = router;
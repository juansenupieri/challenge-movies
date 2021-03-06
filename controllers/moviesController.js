const { validationResult } = require('express-validator');

{const db = require('../database/models');

const moviesController = {
    list: async (req, res) => {
        const movies = await db.Movie.findAll();
        res.render('index', {
            movies });
      },

    detail: async (req, res) => {
        const id = req.params.id;
        const movie = await db.Movie.findByPk(id, {
            include: [{association: "genero"}, {association: "actores"}],
            raw: true,
            nest: true }); 
        res.render('detail', { 
            movie} );
    },

    create: async (req, res) => {
        const peli = await db.Genre.findAll();
    res.render('createMovie', { peli })
      },
    
    save: async (req, res) => {
        const peli = await db.Genre.findAll();
        let errors = validationResult(req);
        if (errors.isEmpty()){
        db.Movie.create({
            title: req.body.titulo ,
            awards: req.body.premios ,
            release_date: req.body.fecha_estreno ,
            genre_id: req.body.genero ,
            length: req.body.duracion ,
            rating: req.body.rating 
        });
        res.redirect( "/movies");} else {
            return res.render('createMovie', {errors: errors.errors , peli});
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const movie = await db.Movie.findByPk(id, {
            include: [{association: "genero"}, {association: "actores"}],
            raw: true,
            nest: true });  
        res.render('editMovie', { 
            movie });
    },
    recreate: async (req, res) => {
       await db.Movie.update({
            title: req.body.titulo ,
            awards: req.body.premios ,
            release_date: req.body.fecha_estreno ,
            genre_id: req.body.genero ,
            length: req.body.duracion ,
            rating: req.body.rating 
        } , { where: { id: req.params.id} })
        res.redirect( "/movies/detail/"+req.params.id)
    },
    delete: async (req, res) => {
        await db.Movie.destroy({ where: { id: req.params.id}});
        res.redirect( "/movies");
    }
    }; 

module.exports = moviesController;}
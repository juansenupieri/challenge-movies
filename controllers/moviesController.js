const db = require('../database/models');

const moviesController = {
    list: async (req, res) => {
        const movies = await db.Movie.findAll();
        console.log(movies);
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
            movie });
    }
    }; 

module.exports = moviesController;
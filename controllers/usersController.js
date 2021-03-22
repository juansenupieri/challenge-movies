const { validationResult } = require('express-validator');

{const db = require('../database/models');

const usersController = {

    form: async (req, res) => {
        res.render('login');
      },

      login: async (req, res) => {
        const Email = req.body.email;
        const Password = req.body.password;
        const usuarios = await db.User.findAll();
        for ( let i = 0; i < usuarios.length ; i++) {
          if ( usuarios[i].email == req.body.email ){
            req.session.usuarioLogueado = usuarios[i];
            res.redirect('/movies')
          }
        }
        res.render('login');
      },

      logout: function (req,res) {
        req.session.destroy();
        return res.redirect('/');
      },

    register: async (req, res) => {
        res.render('register');
      },
    
    save: async (req, res) => {
      let errors = validationResult(req);
      if (errors.isEmpty()){
      db.User.create({
        name: req.body.name ,
        email: req.body.email ,
        password: req.body.password
    });
        res.redirect( "/users/login"); } else {
          return res.render('register', {errors: errors.errors});
        }
    } 
    }; 

module.exports = usersController;}
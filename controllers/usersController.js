{const db = require('../database/models');

const usersController = {

    form: async (req, res) => {
        res.render('login');
      },

    login: async (req, res) => {
        res.redirect( "/movies");
    },

    register: async (req, res) => {
        res.render('register');
      },
    
    save: async (req, res) => {
      db.User.create({
        name: req.body.name ,
        email: req.body.email ,
        password: req.body.password ,
        remember_token: req.body.remember_token
    });
        res.redirect( "/users/login");
    }
    }; 

module.exports = usersController;}
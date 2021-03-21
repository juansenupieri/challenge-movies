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
            req.session.usuarioLogueado = Email;
            res.redirect('/UsuarioLogueado')
          }
        }
        res.render('userUndefined', {Email});
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
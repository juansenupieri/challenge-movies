1) express --view=ejs nombre-del-proyecto ;
2) npm install -g sequelize sequelize-cli ;
3) npm install --save mysql2 ;
4) npm install --save sequelize;
4) create file ".sequelizerc":

     const path = require('path');

    module.exports = {
        'config': path.resolve('./database/config', 'config.js'),
        'models-path': path.resolve('./database/models'),
        'seeders-path' : path.resolve('./database/seeders'),
        'migrations-path' : path.resolve('./database/migrations'),
    };

5) config.js : agregar 'module.exports =' y cambiar configuraciones;


      login: async (req, res) => {
        const Email = req.body.email;
        const Password = req.body.password;
        const usuarios = await db.User.findAll();
        for ( let i = 0; i < usuarios.length ; i++) {
          if ( usuarios[i].email == req.body.email ){
            res.redirect('/movies')
          }
        }
        res.render('userUndefined', {Email});
      },

login: async (req, res) => {
        const Email = req.body.email;
        const Password = req.body.password;
        const usuarios = await db.User.findAll();
        for ( let i = 0; i < usuarios.length ; i++) {
          if ( usuarios[i].email == req.body.email ){
            let usuarioALoguearse = user[i];
            break;
          }
        if ( usuarioLogueado == undefined){ return res.render('login') 
        req.session.usuarioLogueado = usuarioALoguearse;
        res.render('success');
        } 
        else {  return res.render('login') }
        }
      },

    function adminMiddleware ( req , res, next) { if (req.session.usuarioLogueado.id == 0){
        next();
        } else {
        res.send("Debes ser administrador para acceder a esta sección")
    }
} ;

module.exports = adminMiddleware;
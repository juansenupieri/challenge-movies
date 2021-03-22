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
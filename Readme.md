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

detail: async (req, res) => {
        const id = req.params.id;
        const movie = await db.Movie.findByPk(id, {
            include: [{association: "genero"}, {association: "actores"}],
            raw: true,
            nest: true }); 
        res.render('detail', { 
            movie} );
    },

    <ul>
      <li>Rating: <%= movie.rating %></li>
      <li>Awards: <%= movie.awards %></li>
      <li>Length: <%= movie.length %></li>
      <li>Release Date: <%= movie.release_date %></li>
      <li>Genere: <%=movie.genero.name%> </li>
      <li>Actores: </li>
    </ul>

    
      <li>Actores: <%=movie.actores.first_name%> <%=movie.actores.last_name%></li>
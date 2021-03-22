module.exports = (sequelize, DataTypes) => {
    const alias = 'Movie';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        awards: {
            type: DataTypes.INTEGER
        },
        length: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    };

    const config = {
        tableName: 'movies',
        timestamps: false,
        paranoid: true
    };

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models){
      Movie.belongsTo( models.Genre, {
          foreignKey: 'genre_id',
          as: 'genero',
          paranoid: true,
          onDelete: 'CASCADE'
      })
    
        Movie.belongsToMany(models.Actor, {
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false,
            paranoid: true
        })
   };

    return Movie;
};
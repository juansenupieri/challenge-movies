module.exports = (sequelize, DataTypes) => {
    const alias = 'Actor';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER
        }
    };

    const config = {
        tableName: 'actors',
        timestamps: false
    };

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models){
        Actor.belongsToMany(models.Movie, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
      }
    return Actor;
};
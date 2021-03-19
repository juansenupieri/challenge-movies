module.exports = (sequelize, DataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password :{
            type: DataTypes.STRING
        },
        remember_token:{
            type: DataTypes.STRING
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
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
        },
        rol: {
            type: DataTypes.TINYINT
        }
    };

    const config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;
};
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Photo extends Model { }

Photo.init({
    
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    },
        photoURL: {
            type: DataTypes.STRING,
            allowNull: false,
    },
}, {
    sequelize,
    modelName: 'photo',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

module.exports = Photo;
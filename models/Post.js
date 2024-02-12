const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Photo = require('./Photo');

class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'post',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

Post.hasMany(Photo, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = Post;
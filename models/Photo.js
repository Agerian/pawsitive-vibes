const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Photo extends Model { }

Photo.init({
    id: {
        type: DataTypes.INTEGER
    }
})


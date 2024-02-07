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
    //add other needed attributes here. Need to get with Daniel for this one.
    /* below is example of url: (may not need at all)
        url: {
        type: DataTypes.STRING,
        allowNull: false
    */
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
    }
}, {
    sequelize,
    modelName: 'photo',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
});

module.exports = Photo;


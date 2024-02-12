const sequelize = require('../config/connection')
const User = require('./User');
const Photo = require('./Photo');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Photo, { foreignKey: 'user_id' });
Photo.belongsTo(User, {
    foreignKey:
        'user_id'
});

User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

Post.hasMany(Comment, { foreignKey: 'post_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });

Post.hasMany(Photo, { foreignKey: 'post_id' });
Photo.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = { sequelize, User, Photo, Post, Comment };
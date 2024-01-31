const User = require('./User');
const Photos = require('./Photo');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Photos, { foreignKey: 'user_id' });
Photos.belongsTo(User, { foreignKey:
'user_id' });

User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

Post.hasMany(Comment, { foreignKey: 'post_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id'});

module.exports = { User, Photos };
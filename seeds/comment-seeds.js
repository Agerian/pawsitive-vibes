const { Comment } = require('../models');

const commentData = [
    {
        content: 'Never gonna give you up',
        user_id: 2,
        post_id: 1,
    },
    {
        content: 'Never gonna let you down',
        user_id: 3,
        post_id: 2,
    },
    {
        content: 'Never gonna run around and desert you',
        user_id: 1,
        post_id: 3,
    },
    {
        content: 'These animals are friggin cute',
        user_id: 1,
        post_id: 4,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
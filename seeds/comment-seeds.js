const { Comment } = require('../models');

const commentData = [
    {
        content: 'Never gonna give you up',
        userId: 2,
        postId: 1,
    },
    {
        content: 'Never gonna let you down',
        userId: 3,
        postId: 2,
    },
    {
        content: 'Never gonna run around and desert you',
        userId: 1,
        postId: 3,
    },
    {
        content: 'These animals are friggin cute',
        userId: 1,
        postId: 4,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
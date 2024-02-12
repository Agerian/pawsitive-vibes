const { Post } = require('../models');

const postData = [
    {
        title: 'My furry buddy',
        content: 'Love this guy, he is always there for me when I need him. He is the best pet ever!',
        user_id: 1
    },
    {
        title: 'This guy got into the trash again',
        content: 'Can not help but love him even when he is a little stinker',
        user_id: 2 
    },
    {
        title: 'Just got back from the groomer. Looking good!',
        content: 'worth every penny to see him looking so good!',
        user_id: 3 
    },
    {
        title: 'getting ready to take this guy on a trip',
        content: 'He loves to travel and is always up for an adventure!',
        user_id: 3 
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;


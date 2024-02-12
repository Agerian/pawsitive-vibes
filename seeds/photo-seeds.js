
const { Photo } = require('../models');

const photoData = [
    { photoURL: '/assets/images/catmustache.jpg', user_id: 1, post_id: 1 }, 
    { photoURL: '/assets/images/handsomeCat.jpg', user_id: 2, post_id: 2 },
    { photoURL: '/assets/images/hyperpup.jpg', user_id: 3, post_id: 3 },
    { photoURL: '/assets/images/ratTerrier.jpg', user_id: 4, post_id: 4 },
    
];

const seedPhotos = () => Photo.bulkCreate(photoData);
module.exports = seedPhotos;

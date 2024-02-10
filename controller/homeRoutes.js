const express = require('express');
const router = express.Router();


// Route Functions
//home
router.get('/', (req, res) => {
    res.render('home');
});

//signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

//dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });

// Export
module.exports = router;
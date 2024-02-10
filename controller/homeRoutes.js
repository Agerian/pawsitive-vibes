const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for homepage
router.get('/', (req, res) => {
  loggedIn = req.session.loggedIn;
    res.render('home', {loggedIn});
});

// Get signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Get dashboard page
router.get('/dashboard', (req, res) => {
res.render('dashboard');
});

// Get login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('login');
});


module.exports = router;

const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for homepage
router.get('/', (req, res) => {
  loggedIn = req.session.loggedIn;
    res.render('home', {loggedIn});
});

// Get signup page
router.get("/signup", async (req, res) => {
  res.render("signup", {
    loggedIn: req.session.loggedIn,
    loggedInUserData: req.session.loggedInUserData,
  });
});


// Get dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
    loggedInUserData: req.session.loggedInUserData,
});
});

// Get login page
router.get("/login", async (req, res) => {
  res.render("login", {
    loggedIn: req.session.loggedIn,
    loggedInUserData: req.session.loggedInUserData,
  });
});

// Get post page //added by josh for deletion purposes if doesnt work later
router.get('/post', (req, res) => {
  res.render('post', {
    loggedIn: req.session.loggedIn,
    loggedInUserData: req.session.loggedInUserData,
  });
});


//added by josh for comments. //may need to delete later
// ======= 'commentTest' Rendering Logic  =========
router.get('/commentTest', async (req, res) => {
  try {
    // 1. Fetching Post Data (Simulating Actual Usage)
    const postData = await Post.findAll({ // Sequelize fetch - Adjust query as needed!
      include: [  // Eager loading with comments if defined in associations as 'post.hasMany(Comment)' in models!
        { model: Comment } // Assuming a 'Comment' Model has been defined with the right relationship 
     ],
     // Add  where clauses, order options as you see fit for sorting etc.!  
    });

    // 2. Preparing Data for Handlebars
    const posts = postData.map(post => post.get({ plain: true })); // Serialize as simpler JS to render! 

    // 3. Rending the Test View! 
    res.render('commentTest', {
      loggedIn: req.session.loggedIn,
      loggedInUserData: req.session.loggedInUserData,
      posts: posts,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch the Posts for display' });
  }
});

module.exports = router;

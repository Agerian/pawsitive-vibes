const router = require('express').Router();
const { User, Post, Comment, Photo} = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');

// User Signup ('/api/signup'
router.post('/signup', async (req, res) => {
  console.log("Recieved User Body:", req.body);
  try {
    const userData = await User.create(req.body);

    // Start a session for the newly created user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// User Login ('/api/login')
router.post('/login', async (req, res) => {
  try {
    console.log('Login request body:', req.body);
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      console.log('User logged in successfully');
      console.log('Session:', req.session);
      res.redirect('/');
    });
  } catch (err) {
    console.log('Login error:', err);
    res.status(500).json({ error: 'An error occurred while logging in' });
      console.log('Login request body:', req.body);
  }
});

// User Logout ('/api/logout')
router.post('/logout', async (req, res) => {
  console.log('Logout request recieved:', req.session)
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log('No session to destroy')
    res.status(404).end();
  }
});

//Create a new post ('/api/post')
router.post('/posts', async (req, res) => {
  console.log("post route hit");
  if (!req.session.loggedIn) {
    res.status(401).json({ message: 'You must be logged in to create a post' });
    return;
  }
  try {
    console.log("try block hit");
    const newPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPostData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

//test for comments //made by josh may need to alter or delete later. testing purposes.

// ========= POST (For creating)  comments=========
router.post('/posts/:post_id/comments', async (req, res) => { 
  try {
        if (!req.session.loggedIn) { // Add login requirement if needed... 
              res.status(401).json({ message: 'Login required for commenting!'}); 
              return; 
        } 

        // 1. Extracting Comment Details & Post ID
        const { content } = req.body; // Assumes you send content of a comment in the body 
        const postId = req.params.post_id;

        // 2. Validating Input (Security Aspect!) 
        if (!content || content.trim() === "" ) { 
              res.status(400).json({ message: 'Please provide  non-empty content'}); 
              return; 
        }      

        // 3. Fetch the Post for Association (Important!) 
        const thePost = await Post.findByPk(postId); 
        if (!thePost) { 
             res.status(404).json({ message: 'Post not found, cannot associate a comment!' }); 
             return; 
        }  

        // 4. Creation with Sequelize - Associating!
        const newComment = await Comment.create({ 
              content, 
              user_id: req.session.user_id, // Get from session - login must associate the ID if in use 
              post_id: postId, 
         }); 

        // 5. Success Handling: Response Choice 
        res.status(201).json(newComment); // Simple confirmation on creation for now - AJAX for updates in future etc.)
        alert("Comment added successfully!"); 
  } catch (err) {
    alert("Error adding comment, please contact an administrator if the issue persists");
     console.error(err);
     res.status(500).json({ error: 'Failed to add the comment, please contact an administrator if the issue persists)' });
}});

module.exports = router;

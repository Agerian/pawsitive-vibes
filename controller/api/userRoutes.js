const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');

// User Signup ('/api/user/signup'
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

// User Login ('/api/user/login')
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
  }
});

// User Logout ('/api/user/logout')
router.post('/logout', async (req, res) => {
  console.log('Logout request recieved:', req.session)
  if (req.session.loggedIn) {
//      console.log('Destroying session:', req.session.id)
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log('No session to destroy')
    res.status(404).end();
  }
});

module.exports = router;
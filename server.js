//Loads the express module
const express = require('express');
// Loads the handlebars module
const { engine } = require('express-handlebars');
// Loads the sequelize module
const sequelize = require('./config/connection');
const bcrypt = require('bcrypt');

// Loads the session module
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


//Sets up the session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

//Creates our express server
const app = express();
const port = 3001;

// Loads the sequelize module
const User = require('./models/User');

sequelize.sync();

// Middleware enabling session use
app.use(session(sess));


// Sets handlebars configurations
app.engine('handlebars', engine({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'main'
}));

// Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Serves static files (we need it to import a css file)
app.use(express.static('public'))

//Logs the request method, the requested URL, and the time it took to process the request
// Temporary for diagnostics
app.use((req, res, next) => {
  console.log("complete Raw Body:", req.body, typeof req.body);
  next();
})


//Sets a basic route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.post('/api/signup', async (req, res) => {
  console.log("Recieved User Body:", req.body);
  try {
    const userData = await User.create(req.body);

    // Start a session for the newly created user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


// GET LOGIN
// GET the login page ('/login')
app.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }

  res.render('login');
});


// LOGIN
// User Login ('/api/user/login')
app.post('/api/login', async (req, res) => {
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



//Makes the app listen to port 3001
app.listen(port, () => console.log(`App listening to port ${port}`));
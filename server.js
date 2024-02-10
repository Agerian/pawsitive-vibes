//Loads the express module
const express = require('express');
// Loads the handlebars module
const { engine } = require('express-handlebars');
// Loads the sequelize module
const sequelize = require('./config/connection');

//Creates our express server
const app = express();
const port = 3001;

// Loads the sequelize module
const User = require('./models/User');

sequelize.sync();


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

app.post('/test-user', async (req, res) => {
  console.log("Recieved User Body:", req.body);
  try {
    const userData = await User.create({
      username: 'testuser',
      email: 'test@test.com',
      password: 'P@ssword1'
  });
  res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//Makes the app listen to port 3001
app.listen(port, () => console.log(`App listening to port ${port}`));
//Loads the express module
const express = require('express');
// Loads the handlebars module
const { engine } = require('express-handlebars');
// Loads the sequelize module
const sequelize = require('./config/connection');
// Loads the routes module
const routes = require('./controller');

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

// Sets the app to use the routes in the routes.js file
app.use(routes);

//Makes the app listen to port 3001
app.listen(port, () => console.log(`App listening to port ${port}`));
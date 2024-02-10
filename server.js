//Loads the express module
const express = require('express');
// Loads the handlebars module
const { engine } = require('express-handlebars');
// Loads the sequelize module
const sequelize = require('./config/connection');
// setting up routers
const routes = require('./controller');

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
app.use(express.static('public'));

//sett up routes.
app.use(routes);

//Makes the app listen to port 3001
app.listen(port, () => console.log(`App listening to port ${port}`));
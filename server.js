//Loads the express module
const express = require('express');
// Loads the handlebars module
const { engine } = require('express-handlebars');

//Creates our express server
const app = express();
const port = 3001;


// Sets handlebars configurations
app.engine('handlebars', engine({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'main'
}));

// Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');


//Serves static files (we need it to import a css file)
app.use(express.static('public'))


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


//Makes the app listen to port 3001
app.listen(port, () => console.log(`App listening to port ${port}`));
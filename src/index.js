const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const methodOverride = require('method-override');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');

// Initializations
const app = express();

//called DB
require('./database');

//Settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev')); //ver las peticiones con sus respectiva descripcion
app.use(express.json());

//Routes
app.use('/api/client', require('./routers/client.routes'));
 
//Static files
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});



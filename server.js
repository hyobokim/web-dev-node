const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev').then(() => console.log('Database Connected')).catch(err => console.log(err));


const express = require('express');   // load the express library
const app = express();                // create an instance of the library

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.get('/hello', (req, res) => { // use express library to listen for URL pattern ./hello
  res.send('Hello World!');   // respond with string "Hello World!"
});

require('./services/movies-service')(app);
require('./services/tweeter-service')(app);
require('./movies/service')(app); // load the movie service and pass it as an instance of express

app.listen(process.env.PORT || 4000);     // listen to port 4000

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

app.listen(process.env.PORT || 4000);     // listen to port 4000

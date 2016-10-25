//require express
var express = require('express'),
    app = express();

//require bodyparser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//allows for cross origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//require models
var db = require('./models');

//static route
app.use(express.static('public'));

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/api');
});

//ROUTES
// @TODO api index route

//lists all talks
app.get('/api/talks', function (req, res) {
  db.Talk.find({ })
    .populate('attendees')
    .exec(function (error, talks) {
    if (error) {return console.log("An error occurred: " + error);}
    res.json(talks);
  })
});

//lists all attendees

//json endpoints
app.get('/api', function api_index(req, res) {
  res.json({
    gaConEndpoints: true,
    message: "Welcome to our GACon API!",
    documentationUrl: "https://github.com/sfnewzgirl/take-home-coding-challenge",
    baseUrl: "localhost:3000",
    endpoints: [
      {method: "GET", path: "/api", description: "api index"},
      {method: "GET", path: "/api/talks", description: "lists all talks"},
      {method: "GET", path: "/api/attendees", description: "lists all attendees"}
    ]
  })
});

//listen to localhost
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is up and running on http://localhost:3000/');
});

// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var app = express();

var Promise = require("bluebird");

mongoose.Promise = Promise;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

var application_controller = require('./controllers/application_controllers');
var articles_controller = require('./controllers/article_controllers');

app.use('/', application_controller);
app.use('/api/saved',articles_controller )

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

var express = require("express");
//var http = require('http')
var path = require("path");
var app = express();
var routes = require("./routes");
var bodyParser = require("body-parser");

app.set('view engine', 'pug');

app.use(function(req, res, next) {
  req.name = "SON";
  console.log("I AM A CUSTOM MIDDLEWARE");
  next();
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(function(err, req, res, next) {
  res.status(500).json({
    message: "Something wrong happens"
  });
});

app.get("/", function(req, res) {
  res.render('index', {
    message: 'Hello world from express by SON'
  });
});

app.get("/world", function(req, res) {
  res.send("world");
});

app.use("/hello", routes);
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3000, function() {
  console.log("Express started...");
});

/*http.createServer(app).listen(3000, function(){
    console.log('Express started...');
});*/

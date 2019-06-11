// Require npm packages
var express = require("express");

var expHandleBars = require("express-handlebars");

// Requiring our models for syncing
var db = require("./models");

//Set de port for the Server
var PORT = process.env.PORT || 3000;

//Set app express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", expHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./api-routes/burger_routes.js")(app);


// Start our server so that it can begin listening to client requests.

db.sequelize.sync({ //force: true
}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
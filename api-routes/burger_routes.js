// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

app.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
		db.burgers.findAll({}).then(function (data) {
           
           var object = {
           	burgersota:data
           }
            console.log(object);
           res.render("index", object);
    });
});
//Create a new burger
app.post("/api/burgers", function (req, res) {
        db.burgers.create({
			burger_name: req.body.burger_name,
		}).then(function (dbBurgers) {
			// We have access to the new todo as an argument inside of the callback function
			res.json(dbBurgers);
		}).catch(function (err) {
			// Whenever a validation or flag fails, an error is thrown
			// We can "catch" the error to prevent it from being "thrown", which could crash our node app
			res.json(err);
		});
});

//Change burger status, devoured or not.
app.put("/api/burgers/:id", function (req, res) {
        db.burgers.update({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured,
		}, {
				where: {
					id: req.params.id
				}
			}).then(function (dbBurgers) {
				res.json(dbBurgers);
			}).catch(function (err) {
				console.error(err);

				// Whenever a validation or flag fails, an error is thrown
				// We can "catch" the error to prevent it from being "thrown", which could crash our node app
				res.json(err);
			});

});

}
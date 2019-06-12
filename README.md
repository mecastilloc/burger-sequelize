# Gobble up Ur Burger with sequelize ORM
A burger logger with MySQL, Node, Express, Handlebars and sequelize as  ORM `(Object-relational mapping)`


[Live Demo](https://burgersqlize.herokuapp.com/)


## Overview

This App is a burger logger with MySQL, Node, Express, Handlebars and sequelize as  ORM, that follows the MVC design pattern; uses Node and MySQL to query and route data in  the app, and Handlebars to generate its HTML. 

[Express](https://www.npmjs.com/package/express)

[Express-Handlebars](https://www.npmjs.com/package/express-handlebars)

[MySql2](https://www.npmjs.com/package/mysql2)

[Sequelize](https://www.npmjs.com/package/sequelize)


So Gobble Up Your Burger is a restaurant app that lets users input the names of burgers they'd like to eat. 

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page, waiting to be eaten. 
* Each burger in the `waiting area` has a `Eat me!` button. When the user clicks it, the burger will move to the page's right side in to the `devoured area`.
* Each burger in the `devoured area` has a `Back!` button In case a user wants to eat ot again.
* The app stores every burger in a database, whether devoured or not.


## Settings

For local use:

1. install all the dependencies needed with **`$npm install`**  Note tha the file package.json already has what you need

2. Create the data base burgers_db and change your data base settings in `config.json` file

3. Navigate to the app folder and start a console

4. Start Express server with `$ node server.js`

5. On your web browser go to `localhost:3000`

6. Enjoy




## COMMITS

**_Commit 3_**

Readme.md file update with all information about the app. Deploy to Heroku started.

**_Commit 2_**

Code adapted to function with sequelize.



**_Commit 1_**

Initial commit, repository created


//-----------------------------------------------------------------
//---------------------------ACTION LIST---------------------------
//-----------------------------------------------------------------
/* - 
*/

//-----------------------------------------------------------------
//----------------------ENVIRONMENT VARIABLES----------------------
//-----------------------------------------------------------------
const express = require('express');                                 // easier to work with than the HTTP module.
const path = require('path');                                       // works with diretories and file paths
var bodyParser = require("body-parser");                            // middleware
const app = express();                                              // instantiate the module into a variable

//-----------------------------------------------------------------
//------------------------ENVIRONMENT SETUP------------------------
//-----------------------------------------------------------------
app.use(bodyParser.json());                                         // not sure exactly what this is used for
app.set('views', __dirname + '/public/views');                      // sets filepath for view rendering
app.set('view engine', 'ejs');                                      // sets the view engine to 'ejs'

app.use(require('morgan')('combined'));                             // Use application-level middleware for common functionality, including
app.use(bodyParser.urlencoded({ extended: true }));                 // logging, parsing, and session handling.

app.set("port", (process.env.PORT || 5000));                        // sets the port to 5000
app.use(express.static(path.join(__dirname, '')));                  // this allows js and css files to be linked to the HTML

app.listen(app.get("port"), function () {                           // listens on the port and displays a message to the console
	console.log("Now listening on port: " + app.get("port"));
});

app.get('/', 														// when the root directory loads, send the main.html file to the client
	(req, res) =>
		res.sendFile(
			path.join(__dirname, 'index.html')
		)
	);
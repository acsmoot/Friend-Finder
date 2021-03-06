// require npm packages: `express` and `path`
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// =============================================================
// Setup the Expres
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Setup the Express to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
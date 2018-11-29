// require npm packages: `express` and `path`
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// =============================================================
// Setup the Expres
// =============================================================
var app = express();
var PORT = 8080;
// Setup the Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
  // Displays all friends
  app.get("/api/friends", function(req, res) {
    return res.json(data/friends);
  });
  
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
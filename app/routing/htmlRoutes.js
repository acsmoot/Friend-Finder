//    * A GET Route to `/survey` display the survey page.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

//    * default, catch-all route which displays the home page leads to `home.html`
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
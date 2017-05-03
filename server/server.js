
var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    db = require('../server/config/database-usuarios.js'),
    router = require('../server/router/routes'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Express listening on port:', 3000);
  });
});


var express = require('express'),
    fs = require('fs'),
    app = express(),
    db = require('./config/database.js'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    middlewares = require('./middlewares');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

// Every folder in components is loaded automaticaly
fs.readdirSync('./components')
.forEach((file) => {
  require(`./components/${file}`)(app, db, middlewares, config);
});

//drop and resync with { force: true }
db.sync().then(() => {
  app.listen(3000, () => {
    console.log('Express listening on port:', 3000);
  });
});

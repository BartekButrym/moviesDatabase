const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Movie = require('./api/models/model');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);
app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);

console.log('Server have started on port: ' + port);

module.exports = app;
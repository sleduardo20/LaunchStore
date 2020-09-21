const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => response.render('layout.njk'));

module.exports = routes;

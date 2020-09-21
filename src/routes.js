const express = require('express');
const routes = express.Router();
const ProductController = require('./app/controlers/ProductController')

routes.get('/', (request, response) => 
  response.render('layout.njk')
  );

routes.get('/products/create', ProductController.create);
  

routes.get('/ads/create', (request, response) => 
  response.redirect('/products/create')
);

module.exports = routes;

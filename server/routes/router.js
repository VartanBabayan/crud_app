const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for updating a user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)

/**
 *  @description for finding a user
 *  @method GET /find-user
 */
 route.get('/find-user', services.find_user)

 /**
 *  @description for finding a user
 *  @method GET /find-user
 */
  route.get('/about', services.about)

// API
route.post('/api/users', controller.create);
route.get('/api/users/', controller.find);
route.get('/api/users/find-by-id', controller.findById);
route.get('/api/users/one-user', controller.findOneUser);
route.post('/api/users/update/', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route
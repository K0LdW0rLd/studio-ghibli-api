// Import your express library and your controller 
// This will allow me to access a particular method and method it to a route

const express = require('express');
const StudioController = require('../controllers/StudioGhibli');

// Access the express router, which comes w/ the library
const StudioRouter = express.Router();

// Assign each key from my controller to a specific route
StudioRouter.get ('/', StudioController.index);

module.exports = StudioRouter;
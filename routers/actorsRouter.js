const express = require('express');
const actorsController = require('../Controllers/actorsController');

function routes(){
    const actorRouter = express.Router();
    const controller = actorsController();
    
    actorRouter.route('/actors')
    .get(controller.get);
    
    actorRouter.route('/actors/:Id')
    .get(controller.get);
    
    return actorRouter;
};

module.exports = routes;
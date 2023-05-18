const {Router} = require('express');
const {getResidentController, searchResidentController} = require("./residents.controller");
const routes = Router();


routes.get('/:id', getResidentController);
routes.post('/search', searchResidentController);


module.exports = routes;
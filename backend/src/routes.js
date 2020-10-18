const express = require('express');

const IncidentController = require('./controllers/incidentControler');
const sessionControle = require('./controllers/sessionController');
const profileControle = require('./controllers/profileControle');
const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.get('/profile', profileControle.index);
routes.get('/incidents', IncidentController.index);

routes.post('/ongs', OngController.create);
routes.post('/session', sessionControle.create);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
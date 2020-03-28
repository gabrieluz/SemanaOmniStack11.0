const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentControler');
const profileControle = require('./controllers/profileControle');
const sessionControle = require('./controllers/sessionController');
const routes = express.Router();

routes.post('/session', sessionControle.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', profileControle.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
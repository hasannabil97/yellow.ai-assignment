const api = require('express').Router();

// import controller modules
const CovidController = require('../controllers/covid');

api.get('/status', (req, res) => {
    CovidController.getIndonesianCovid(req, res);
});

module.exports = api;
const api = require('express').Router();

// import controller modules
const WeatherController = require('../controllers/weather');

api.get('/status', (req, res) => {
    WeatherController.getWeatherInfo(req, res);
});

module.exports = api;
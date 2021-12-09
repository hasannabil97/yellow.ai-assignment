const api = require('express').Router();

api.get('/test', (req, res) => {
    res.status(200).json('success');
});

module.exports = api;
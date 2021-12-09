const express = require('express');
const app = express();
require('dotenv').config();

// import router modules
const MainRouter = require('./routers/main');
const WeatherRouter = require('./routers/weather');
const CovidRouter = require('./routers/covid');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/main', MainRouter);
app.use('/weather', WeatherRouter);
app.use('/covid', CovidRouter);

const port = process.env.SERVICE_PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
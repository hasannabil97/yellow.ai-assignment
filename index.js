const express = require('express');
const app = express();
require('dotenv').config();

// import router modules
const RouterMain = require('./routers/main');
const RouterWeather = require('./routers/weather');
const RouterCovid = require('./routers/covid');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/main', RouterMain);
app.use('/weather', RouterWeather);
app.use('/covid', RouterCovid);

const port = process.env.SERVICE_PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
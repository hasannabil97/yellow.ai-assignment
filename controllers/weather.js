// import validation modules
const WeatherValidation = require('../validations/weather');

// import helper modules
const WeatherHelper = require('../helpers/weather');

module.exports = {

    getWeatherInfo: async (req, res) => {
        try {
            const check = WeatherValidation.getWeatherInfo(req);
            if (check.pass) {
                const requestList = WeatherHelper.generateRequesList(req.query.command);
                if (requestList.length == 0) {
                    res.status(400);
                }
                const result = [];
                for (option of requestList) {
                    const get = await WeatherHelper.getWeatherAPI(option);
                    if (get) result.push(get);
                }
                res.status(200).json(result);
            } else {
                res.status(400).json(check.result);
            }
        } catch (error) {
            console.log('error in function getWeatherInfo: ', error);
            res.status(500).json('error get weather info');
        }
    }

}
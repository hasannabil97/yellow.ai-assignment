const axios = require('axios').default;

module.exports = {

    generateRequesList: (command) => {
        const splitters = [' and ', ', and ', ' or ', ', or ', ', ', ',,'];
        splitters.forEach(data => {
            command = command.split(data).join(',');    
        });
        let lowerSplit = command.toLowerCase().split(',')
        let result     = [];
        lowerSplit.forEach(data => {
            if (data.length) {
                let assumptionsLength = 6;
                let dataArr           = data.split(' ');
                let weatherIdx        = dataArr.indexOf('weather');
                let forecastIdx       = dataArr.indexOf('forecast');
                if (weatherIdx > -1) {
                    let assumptions = dataArr.slice(weatherIdx-2 < 0 ? 0 : weatherIdx-2).slice(0, assumptionsLength).join(' ');
                    if (assumptions.length) {
                        result.push({
                            get  : 'current.json',
                            query: assumptions
                        });
                    }
                } else if (forecastIdx > -1) {
                    let assumptions = dataArr.slice(forecastIdx-2 < 0 ? 0: forecastIdx-2).slice(0, assumptionsLength).join(' ');
                    if (assumptions.length) {
                        result.push({
                            get  : 'forecast.json',
                            query: assumptions
                        });
                    }
                } else if (dataArr.length == 1 && result.length > 0) {
                    result.push({
                        get  : result[result.length - 1].get,
                        query: dataArr.join(' ')
                    });
                }
            }
        });
        return result;
    },

    getWeatherAPI: async ({ get, query }) => {
        try {
            let options = {
                method: 'GET',
                url   : `http://api.weatherapi.com/v1/${get}`,
                params: {
                    q  : query,
                    key: process.env.WEATHERAPI_KEY
                },
            };
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}
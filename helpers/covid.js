const axios = require('axios').default;

module.exports = {

    formattingDate: (date) => {
        let result = [null, null, null];
        const monthName = [
            'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
        ];
        const dateArr = date.toLowerCase()
            .split('/').join('|')
            .split('-').join('|')
            .split(',').join('|')
            .split(' ').join('|')
            .split('st').join('|')
            .split('nd').join('|')
            .split('rd').join('|')
            .split('th').join('|')
            .split('|').filter(x => x);
            
        if (dateArr.length == 3) {
            dateArr.forEach((data, index) => {
                const checkMonth = monthName.findIndex(x => x.includes(data));
                if (checkMonth > -1) {
                    if (result[1]) {
                        result [2] = result[1]; 
                    } 
                    result [1] = (checkMonth + 1).toString().padStart(2, '0'); 
                } else if (!isNaN(parseInt(data)) && data.length == 4) {
                    result[0] = data;
                } else if (!isNaN(parseInt(data)) && parseInt(data) <= 12 && data.padStart(2, '0').length == 2) {
                    result[1] ? result[2] = data.padStart(2, '0') : result[1] = data.padStart(2, '0')
                } else if (!isNaN(parseInt(data)) && data.padStart(2, '0').length == 2) {
                    result[2] = data.padStart(2, '0');
                }
            });
            if (!result.includes(null)) {
                return result.join('-');
            } else {
                return false
            }
        } else {
            return false
        }
    },

    getCovidApi: async ({ date, region }) => {
        try {
            let options = {
                method : 'GET',
                url    : 'https://covid-19-statistics.p.rapidapi.com/reports',
                params : {region_name: region, date: date },
                headers: {
                  'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
                  'x-rapidapi-key' : process.env.RAPIDAPI_KEY
                }
            };
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            return null
        }
    }

}
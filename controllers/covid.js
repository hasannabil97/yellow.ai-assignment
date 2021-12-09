// import validation modules
const CovidValidation = require('../validations/covid');

// import validation modules
const CovidHelper = require('../helpers/covid');

module.exports = {

    getIndonesianCovid: async (req, res) => {
        try {
            const check = CovidValidation.getIndonesianCovid(req);
            if (check.pass) {
                const date = CovidHelper.formattingDate(req.query.date);
                result = await CovidHelper.getCovidApi({
                    date  : date,
                    region: 'indonesia'
                });
                res.status(200).json(result);
            } else {
                res.status(400).json(check.result);
            }
        } catch (error) {
            console.log('error in function getIndonesianCovid: ', error);
            res.status(500).json('error get indonesian covid status');
        }
    }

}
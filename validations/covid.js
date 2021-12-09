const Validator = require("fastest-validator");
const v = new Validator();

module.exports = {

    getIndonesianCovid: (req) => {
        const schema = {
            date: { type:'string', empty: false }
        };
        const result = v.validate(req.query, schema);
        if (result === true) {
            return { pass: true, result: null };
        } else {
            return { pass: false, result };
        }
    }

}
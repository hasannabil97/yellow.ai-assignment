const Validator = require("fastest-validator");
const v = new Validator();

module.exports = {

    getWeatherInfo: (req) => {
        const schema = {
            command: { type: "string", min: 1 }
        };
        const result = v.validate(req.query, schema);
        if (result === true) {
            return { pass: true, result: null };
        } else {
            return { pass: false, result };
        }
    }

}
const Joi = require('joi');
const { password } = require('./custom.validation');

const login = {
    body: Joi.object().keys({
        user_name: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
    }),
};

module.exports = {
    login
}

const Joi = require('joi');

const search = {
    body: Joi.object().keys({
        search_term: Joi.string().required(),
        search_value: Joi.required(),
        page: Joi.number().required()
    }),
};

module.exports = {
    search
}

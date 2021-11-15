const passport = require('passport');
const authenticate = require('../middleware/authentication');
const { authResponseMessage } = require('../utils/responseMessages');
const UserModel = require('../model/user-model');

const login = async (req, res) => {
    try {
        passport.authenticate('local')(req, res, async() => {
            const token = authenticate.generateToken({ _id: req.user._id });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: authResponseMessage.LOGIN_SUCCESS, token: token });                     
        });
    } catch (error) {
        throw Error(error);
    }
}

module.exports = login;
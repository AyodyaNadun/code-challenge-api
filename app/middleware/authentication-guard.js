const jwt = require('jsonwebtoken');
const ErrorRenspose = require("../utils/errorResponse");
const { tokenReponseMessage } = require("../utils/responseMessages");
const UserModel = require('../model/user-model');

// Route guard
exports.authGuard = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new ErrorRenspose(tokenReponseMessage.AUTHORIZATION_NOT_GRANTED, 401));
    }

    try {
        const decodedToken = jwt.decode(token, process.env.JWT_SECRET);
        req.user = await UserModel.findOne({email: decodedToken.email});

        if (!req.user) {
            return next(new ErrorRenspose(tokenReponseMessage.TOKEN_INVALID, 401));
        }

        if (decodedToken.exp < Date.now()/1000) {
            return next(new ErrorRenspose(tokenReponseMessage.TOKEN_EXPIRED, 401));
        }

        next();
    } catch (error) {
        return next(new ErrorRenspose(tokenReponseMessage.AUTHORIZATION_NOT_GRANTED, 401));
    }
}

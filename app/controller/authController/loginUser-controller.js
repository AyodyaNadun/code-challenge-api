const ErrorRenspose = require("../../utils/errorResponse");
const { authResponseMessage } = require("../../utils/responseMessages");
const login = require('../../middleware/login');

// @desc Login user
// @route GET /api/v1/user/login
exports.loginUser = async (req, res, next) => {
    try {
        const {user_name, password} = req.body;

        if (!user_name) {
            return next(new ErrorRenspose(authResponseMessage.ENTER_USERNAME, 400));
        }
        if (!password) {
            return next(new ErrorRenspose(authResponseMessage.ENTER_PASSWORD, 400));
        }

        await login(req, res);

    } catch (error) {
        next(error);
    }
}

const { commonResponseMessage } = require("../../utils/responseMessages");
const { getSearchUserFields } = require("../../services/user.service");

// @desc Get all user search fields
// @route GET /api/v1/user/field
exports.getSearchUserFields = async (req, res, next) => {
    try {
        const result = await getSearchUserFields();
        
        return res.status(200).json({ success: true, message: commonResponseMessage.RESULT_FOUND, data: result });
    } catch (error) {
        next(error);
    }
}

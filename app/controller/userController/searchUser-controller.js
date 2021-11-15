const { commonResponseMessage } = require("../../utils/responseMessages");
const { searchUser } = require("../../services/user.service");

// @desc Search user
// @route POST /api/v1/user/search
exports.searchUser = async (req, res, next) => {
    try {
        const result = await searchUser(req.body);
        
        if (!result || result.length == 0) return res.status(404).json({ success: false, message: commonResponseMessage.RESULT_NOT_FOUND, data: [] });
        
        return res.status(200).json({ success: true, message: commonResponseMessage.RESULT_FOUND, data: result });
    } catch (error) {
        next(error);
    }
}

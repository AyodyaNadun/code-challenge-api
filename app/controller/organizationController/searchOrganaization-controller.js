const { commonResponseMessage } = require("../../utils/responseMessages");
const { searchOrganization } = require("../../services/organization.service");

// @desc Search organization
// @route POST /api/v1/organization/search
exports.searchOrganization = async (req, res, next) => {
    try {
        const result = await searchOrganization(req.body);
        
        if (!result || result.length == 0) return res.status(404).json({ success: false, message: commonResponseMessage.RESULT_NOT_FOUND, data: [] });
        
        return res.status(200).json({ success: true, message: commonResponseMessage.RESULT_FOUND, data: result });
    } catch (error) {
        next(error);
    }
}

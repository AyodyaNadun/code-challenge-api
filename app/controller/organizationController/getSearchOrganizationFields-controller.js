const { commonResponseMessage } = require("../../utils/responseMessages");
const { getSearchOrganizationFields } = require("../../services/organization.service");

// @desc Get all organization search fields
// @route GET /api/v1/organization/field
exports.getSearchOrganizationFields = async (req, res, next) => {
    try {
        const result = await getSearchOrganizationFields();
        
        return res.status(200).json({ success: true, message: commonResponseMessage.RESULT_FOUND, data: result });
    } catch (error) {
        next(error);
    }
}

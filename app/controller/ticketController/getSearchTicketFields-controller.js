const { commonResponseMessage } = require("../../utils/responseMessages");
const { getSearchTicketFields } = require("../../services/ticket-service");

// @desc Get all ticket search fields
// @route GET /api/v1/ticket/field
exports.getSearchTicketFields = async (req, res, next) => {
    try {
        const result = await getSearchTicketFields();
        
        return res.status(200).json({ success: true, message: commonResponseMessage.RESULT_FOUND, data: result });
    } catch (error) {
        next(error);
    }
}

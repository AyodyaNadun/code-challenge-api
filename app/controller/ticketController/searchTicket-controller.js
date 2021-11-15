const { commonResponseMessage } = require("../../utils/responseMessages");
const { searchTicket } = require("../../services/ticket-service");

// @desc Search ticket
// @route POST /api/v1/ticket/search
exports.searchTicket = async (req, res, next) => {
    try {
        const result = await searchTicket(req.body);
        
        if (!result || result.length == 0) return res.status(404).json({ success: false, message: commonResponseMessage.RESULT_NOT_FOUND, data: [] });

        return res.status(200).json({ success: true, message: commonResponseMessage.RESULT_FOUND, data: result });
    } catch (error) {
        next(error);
    }
}

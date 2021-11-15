const TicketModel = require("../model/ticket-model");
const OrganizationModel = require("../model/organization-model");
const UserModel = require("../model/user-model");
const { ticketFields } = require("../utils/searchFields");

const searchTicket = async (searchBody) => {
    const { search_term, search_value, page } = searchBody;
    let query = {};

    query[search_term] = search_value;

    const tickets = await TicketModel.find(query).skip(parseInt(process.env.PAGE_LIMIT)*(page - 1)).limit(parseInt(process.env.PAGE_LIMIT)).sort();
    let count = await TicketModel.find(query).countDocuments();

    const results = await Promise.all(
        tickets.map(async (ticket) => {
            const organization = await OrganizationModel.findOne({ organization_id: ticket.organization_id }, { name: 1 });
            const assignee_user = await UserModel.findOne({ user_id: ticket.assignee_id }, { name: 1 });
            const submitted_user = await UserModel.findOne({ user_id: ticket.submitter_id }, { name: 1 });
            let old_ticket = {};
            old_ticket["organization_name"] = organization.name;
            old_ticket["assignee_user"] = assignee_user.name;
            old_ticket["submitted_user"] = submitted_user.name;
            
            return { ticket, ...old_ticket }
        }
    ));

    return {
        pages: count%parseInt(process.env.PAGE_LIMIT) > 0 ? ((count/parseInt(process.env.PAGE_LIMIT)) >> 0) + 1 : (count/parseInt(process.env.PAGE_LIMIT)) >> 0,
        results: results,
    }
};

const getSearchTicketFields = async () => {
    return ticketFields;
};

module.exports = {
    searchTicket,
    getSearchTicketFields
};

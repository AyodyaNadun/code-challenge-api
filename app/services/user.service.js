const UserModel = require("../model/user-model");
const OrganizationModel = require("../model/organization-model");
const TicketModel = require("../model/ticket-model");
const { userFields } = require("../utils/searchFields");

const searchUser = async (searchBody) => {
    const { search_term, search_value, page } = searchBody;
    let query = {};

    query[search_term] = search_value;

    const users = await UserModel.find(query, {password:0}).skip(parseInt(process.env.PAGE_LIMIT) * (page - 1)).limit(parseInt(process.env.PAGE_LIMIT)).sort();
    let count = await UserModel.find(query).countDocuments();

    const results = await Promise.all(
        users.map(async (user) => {
            const organization = await OrganizationModel.findOne({ organization_id: user.organization_id }, { name: 1 });
            const assigned_tickets = await TicketModel.find({ assignee_id: user.user_id }, { subject: 1 });
            const submitted_tickets = await TicketModel.find({ submitter_id: user.user_id }, { subject: 1 });
            let old_user = {};
            old_user["organization_name"] = organization.name;
            old_user["assigned_tickets"] = assigned_tickets;
            old_user["submitted_tickets"] = submitted_tickets;

            return { user, ...old_user }
        }
    ));
    
    return {
        pages: count%parseInt(process.env.PAGE_LIMIT) > 0 ? ((count/parseInt(process.env.PAGE_LIMIT)) >> 0) + 1 : (count/parseInt(process.env.PAGE_LIMIT)) >> 0,
        results: results,
    };
};

const getSearchUserFields = async () => {
    return userFields;
};

module.exports = {
    searchUser,
    getSearchUserFields
};

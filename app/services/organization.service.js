const OrganizationModel = require("../model/organization-model");
const TicketModel = require("../model/ticket-model");
const UserModel = require("../model/user-model");
const { organizationFields } = require("../utils/searchFields");

const searchOrganization = async (searchBody) => {
    const { search_term, search_value, page } = searchBody;
    let query = {};

    query[search_term] = search_value;
    
    const organizations = await OrganizationModel.find(query).skip(parseInt(process.env.PAGE_LIMIT)*(page - 1)).limit(parseInt(process.env.PAGE_LIMIT)).sort();
    let count = await OrganizationModel.find(query).countDocuments();

    const results = await Promise.all(
        organizations.map(async (organization) => {
            const ticket = await TicketModel.find({ organization_id: organization.organization_id }, { subject: 1 });
            const users = await UserModel.find({ organization_id: organization.organization_id }, { name: 1 });
            let old_organization = {};
            old_organization["ticket_subject"] = ticket;
            old_organization["users"] = users;
            
            return { organization, ...old_organization }
        }
    ));

    return {
        pages: count%parseInt(process.env.PAGE_LIMIT) > 0 ? ((count/parseInt(process.env.PAGE_LIMIT)) >> 0) + 1 : (count/parseInt(process.env.PAGE_LIMIT)) >> 0,
        results: results,
    }
};

const getSearchOrganizationFields = async () => {
    return organizationFields;
};

module.exports = {
    searchOrganization,
    getSearchOrganizationFields
};

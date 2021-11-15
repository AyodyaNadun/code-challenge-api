const express = require("express");

// authGuard
const { authGuard } = require("../middleware/authentication-guard");

//validation
const validate = require('../middleware/validate');
const { search } = require('../validations/search.validation');

// organization routes controllers
const { searchOrganization } = require("../controller/organizationController/searchOrganaization-controller");
const { getSearchOrganizationFields } = require("../controller/organizationController/getSearchOrganizationFields-controller");

const organizationRouter = express.Router();

// Swagger organization model
/**
 * @typedef Organization
 * @property {number} organization_id.required - Organization id
 * @property {string} url - Organization url
 * @property {string} external_id.required - Organization external id
 * @property {string} name - Organization name
 * @property {string[]} domain_names - Organization domain names
 * @property {string} created_at - Organization created date
 * @property {string} details - Organization details
 * @property {boolean} shared_tickets - Organization shared tickets
 * @property {string[]} tags - Organization tags
 */

/**
 * @typedef OrganizationSearch
 * @property {string} search_term.required - search term
 * @property {string} search_value.required - search value
 */

 // organization route paths

/**
 * Search an organization
 * @route POST /api/v1/organization/search
 * @group Organization - Organization functions
 * @param {string} authorization.header.required - Bearer token
 * @param {OrganizationSearch.model} organization.body.required - Organization search request
 * @returns {object} 200 - List of searched organizations 
 * @returns {Error}  400 - Unexpected error
 * @returns {Error}  500 - Server error
 * @security JWT token
 */
organizationRouter.route('/search').post(authGuard, validate(search), searchOrganization);

// For testing
organizationRouter.route('/search/test').post(validate(search), searchOrganization);

/**
 * Get all organization search fields
 * @route GET /api/v1/organization/search/field
 * @group Organization - Organization functions
 * @param {string} authorization.header.required - Bearer token
 * @returns {object} 200 - List of all organization search fields 
 * @returns {Error}  400 - Unexpected error
 * @returns {Error}  500 - Server error
 * @security JWT token
 */
organizationRouter.route('/search/field').get(getSearchOrganizationFields);

module.exports = organizationRouter;

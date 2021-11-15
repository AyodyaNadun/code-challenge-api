const express = require("express");

// authGuard
const { authGuard } = require("../middleware/authentication-guard");

//validation
const validate = require('../middleware/validate');
const { search } = require('../validations/search.validation');

// ticket routes controllers
const { searchTicket } = require("../controller/ticketController/searchTicket-controller");
const { getSearchTicketFields } = require("../controller/ticketController/getSearchTicketFields-controller");

const ticketRouter = express.Router();

// Swagger ticket model
/**
 * @typedef Ticket
 * @property {number} ticket_id.required - Ticket id
 * @property {string} url - Ticket url
 * @property {string} external_id.required - Ticket external id
 * @property {string} created_at - Ticket created date
 * @property {string} type - Ticket type
 * @property {string} subject - Ticket subject
 * @property {string} description - Ticket description
 * @property {string} priority - Ticket priority
 * @property {string} status - Ticket status
 * @property {number} submitter_id - Ticket submitter id
 * @property {number} assignee_id - Ticket assignee id
 * @property {number} organization_id - Ticket organization id
 * @property {string[]} tags - Ticket tags
 * @property {boolean} has_incidents - Ticket has incidents
 * @property {string} due_at - Ticket due at
 * @property {string} via - Ticket via
 */

/**
 * @typedef TicketSearch
 * @property {string} search_term.required - search term
 * @property {string} search_value.required - search value
 */

 // ticket route paths

/**
 * Search an Ticket
 * @route POST /api/v1/ticket/search
 * @group Ticket - Ticket functions
 * @param {string} authorization.header.required - Bearer token
 * @param {TicketSearch.model} ticket.body.required - Ticket search request
 * @returns {object} 200 - List of searched tickets 
 * @returns {Error}  400 - Unexpected error
 * @returns {Error}  500 - Server error
 * @security JWT token
 */
ticketRouter.route('/search').post(authGuard, validate(search), searchTicket);

// For testing
ticketRouter.route('/search/test').post(validate(search), searchTicket);

/**
 * Get all ticket search fields
 * @route GET /api/v1/ticket/search/field
 * @group Ticket - Ticket functions
 * @param {string} authorization.header.required - Bearer token
 * @returns {object} 200 - List of all ticket search fields
 * @returns {Error}  400 - Unexpected error
 * @returns {Error}  500 - Server error
 * @security JWT token
 */
ticketRouter.route('/search/field').get(getSearchTicketFields);

module.exports = ticketRouter;

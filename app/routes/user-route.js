const express = require("express");

// authGuard
const { authGuard } = require("../middleware/authentication-guard");

//validation
const validate = require('../middleware/validate');
const { search } = require('../validations/search.validation');

// user routes controllers
const { searchUser } = require("../controller/userController/searchUser-controller");
const { getSearchUserFields } = require("../controller/userController/getSearchUserField-controller");

const userRouter = express.Router();

// Swagger user model

/**
 * @typedef User
 * @property {number} user_id.required - User id
 * @property {string} url - User url
 * @property {string} external_id.required - User external id
 * @property {string} name - User name
 * @property {string} alias - User alias
 * @property {string} created_at - User created date
 * @property {boolean} active - User active
 * @property {boolean} verified - User verified
 * @property {boolean} shared - User shared
 * @property {string} locale - User locale
 * @property {string} timezone - User timezone
 * @property {string} last_login_at - User last login at
 * @property {string} email - User email
 * @property {string} phone - User phone
 * @property {string} signature - User signature
 * @property {number} organization_id.required - User organization id
 * @property {string[]} tags - User tags
 * @property {boolean} suspended - User suspended
 * @property {string} role - User role
 */

/**
 * @typedef UserSearch
 * @property {string} search_term.required - search term
 * @property {string} search_value.required - search value
 */

 // user route paths

/**
 * Search an user
 * @route POST /api/v1/user/search
 * @group User - User functions
 * @param {string} authorization.header.required - Bearer token
 * @param {UserSearch.model} user.body.required - User search request
 * @returns {object} 200 - List of searched users 
 * @returns {Error}  400 - Unexpected error
 * @returns {Error}  500 - Server error
 * @security JWT token
 */
 userRouter.route('/search').post(authGuard, validate(search), searchUser);
 
// For testing 
 userRouter.route('/search/test').post(validate(search), searchUser);
 
/**
 * Get all user search fields
 * @route GET /api/v1/user/search/field
 * @group User - User functions
 * @param {string} authorization.header.required - Bearer token
 * @returns {object} 200 - List of all users search fields
 * @returns {Error}  400 - Unexpected error
 * @returns {Error}  500 - Server error
 * @security JWT token
 */
 userRouter.route('/search/field').get(getSearchUserFields);

module.exports = userRouter;

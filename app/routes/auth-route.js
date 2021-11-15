const express = require("express");

// authGuard
const { authGuard } = require("../middleware/authentication-guard");

//validation
const validate = require('../middleware/validate');
const authValidation = require('../validations/auth.validation');

// auth routes controllers
const { loginUser } = require("../controller/authController/loginUser-controller");

const authRouter = express.Router();

// Swagger auth model
/**
 * @typedef Auth
 * @property {string} user_name.required - User email
 * @property {string} password.required - User password
 */

// auth route paths

/**
 * Login an user
 * @route POST /api/v1/auth/login
 * @group Auth - Auth functions
 * @param {Auth.model} auth.body.required
 * @returns {object} 200 - User token
 * @returns {Error}  400 - Unexpected error
 * @returns {Error}  500 - Server error
 */
authRouter.route('/login').post(validate(authValidation.login),loginUser);

module.exports = authRouter

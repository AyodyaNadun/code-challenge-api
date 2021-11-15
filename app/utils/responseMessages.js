const commonResponseMessage =  {
    TOKEN_INVALID: "Invalid token",
    RESULT_NOT_FOUND: "Results not found",
    RESULT_FOUND: "Results found successfully",
}

const authResponseMessage = {
    LOGIN_SUCCESS: "Login successfully",
    LOGOUT_SUCCESS: "Logout successfully",
    ENTER_USERNAME: "Please enter the username",
    ENTER_PASSWORD: "Please enter the password",
    INVALID_USERNAME_OR_PASSWORD: "Incorrect email or password"
}

const tokenReponseMessage = {
    AUTHORIZATION_NOT_GRANTED: "Authorization not granted",
    TOKEN_INVALID: "Token is invalid",
    TOKEN_EXPIRED: "Token is expired"
}

module.exports = {
    commonResponseMessage,
    authResponseMessage,
    tokenReponseMessage
}

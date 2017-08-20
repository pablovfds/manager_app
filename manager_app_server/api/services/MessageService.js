var MessageService = {

  HTTP: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  },

  USER: {
    UPDATED: "User account updated successfully",
    DELETED: "User account deleted successfully",
    ERROR_COUNTING_USER: "Server Error, Fail counting users",
    ERROR_SEARCHING_USERS: "Server Error, Fail searching users",
    ERROR_SEARCHING_USER: "Server Error, Fail searching user",
    ERROR_NOT_FOUND: "Not Found, User doesn\'t exist.",
    ERROR_UPDATING_USER: "Server Error, Fail updating the user",
    ERROR_DELETING_USER: "Server Error, Fail deleting the user",
    ERROR_UNAUTHORIZED: "Unauthorized, Invalid email and password combination.",
    ERROR_GENERATING_PASSWORD: "Server Error, Fail generating encrypted password",
    ERROR_ENCRYPTING_PASSWORD: "Server Error, Fail encrypting the password",
    ERROR_DECRYPTING_PASSWORD: "Internal server Error, Fail to decrypt password",
    ERROR_CREATING_USER: "Server Error, Fail creating the User",
    ERROR_MISSING_EMAIL: "Bad Request, Missing parameter 'email' or invalid email sent!",
    ERROR_MISSING_PASSWORD: "Bad Request, Missing parameter 'password' or invalid password sent!",
    ERROR_MISSING_IMAGE_FILE: "Bad Request, missing parameter 'picture' or invalid file sent!",
    ERROR_MISSING_USER_ID: "Bad Request, missing parameter 'usedId'",
    ERROR_MISSING_NAME: "Bad Request, missing parameter 'name', username is required!"
  },

  SYNDIC: {
    UPDATED: "Syndic updated successfully",
    DELETED: "Syndic deleted successfully",
    ERROR_COUNTING_SYNDIC: "Server Error, Fail counting syndics",
    ERROR_SEARCHING_SYNDICS: "Server Error, Fail searching syndics",
    ERROR_SEARCHING_SYNDIC: "Server Error, Fail searching syndic",
    ERROR_NOT_FOUND: "Not Found, Syndic doesn\'t exist.",
    ERROR_UPDATING_SYNDIC: "Server Error, Fail updating the syndic",
    ERROR_DELETING_SYNDIC: "Server Error, Fail deleting the syndic",
    ERROR_CREATING_SYNDIC: "Server Error, Fail creating the Syndic",
    ERROR_MISSING_ACCOUNT: "Bad Request, Missing parameter 'account', account is required!",
    ERROR_MISSING_CONDOMINIUMS: "Bad Request, Missing parameter 'condominiums', condominiums is required!"
  },

  DWELLER: {
    UPDATED: "Dweller updated successfully",
    DELETED: "Dweller deleted successfully",
    ERROR_COUNTING_DWELLER: "Server Error, Fail counting dwellers",
    ERROR_SEARCHING_DWELLERS: "Server Error, Fail searching dwellers",
    ERROR_SEARCHING_DWELLER: "Server Error, Fail searching dweller",
    ERROR_NOT_FOUND: "Not Found, Dweller doesn\'t exist.",
    ERROR_UPDATING_DWELLER: "Server Error, Fail updating the dweller",
    ERROR_DELETING_DWELLER: "Server Error, Fail deleting the dweller",
    ERROR_CREATING_DWELLER: "Server Error, Fail creating the dweller",
    ERROR_MISSING_ACCOUNT: "Bad Request, Missing parameter 'account', account is required!",
    ERROR_MISSING_CONDOMINIUM: "Bad Request, Missing parameter 'condominium', condominium is required!"
  },

  CONDO: {
    UPDATED: "Condo updated successfully",
    DELETED: "Condo deleted successfully",
    ERROR_COUNTING_CONDO: "Server Error, Fail counting condos",
    ERROR_SEARCHING_CONDOS: "Server Error, Fail searching condos",
    ERROR_SEARCHING_CONDO: "Server Error, Fail searching condo",
    ERROR_NOT_FOUND: "Not Found, Condo doesn\'t exist.",
    ERROR_UPDATING_CONDO: "Server Error, Fail updating the condo",
    ERROR_DELETING_CONDO: "Server Error, Fail deleting the condo",
    ERROR_CREATING_CONDO: "Server Error, Fail creating the condo",
    ERROR_MISSING_SYNDIC: "Bad Request, Missing parameter 'syndic', syndic is required!",
    ERROR_MISSING_ADDRESS      : "Bad Request, missing parameter 'address', address is required",
    ERROR_MISSING_NAME         : "Bad Request, missing parameter 'name', name is required",
    ERROR_MISSING_DWELLERS: "Bad Request, Missing parameter 'dwellers', dwellers is required!"
  }
};

module.exports = MessageService;

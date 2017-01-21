import { User } from './user';

import * as constants from '../constants/constants';

var Parse = require('parse').Parse;
Parse.initialize(constants.AppId, constants.JavascriptKey, constants.AppMasterKey);
Parse.serverURL = constants.ApiAddress;

export class ParseManager {

    constructor() {

    }

    signup(userForm: User, success: (message) => void, failed: (message) => void) {

        var user = new Parse.User();
        user.set("username", userForm.username);
        user.set("password", userForm.password);
        user.set("name", userForm.name);
        user.set("phone", userForm.phone);
        user.set("email", userForm.email);

        user.signUp().then(function () {
            success("Account created successfully");
        }, function (e) {
            failed(e.message);
        });

    }

    logIn(userForm: User, success: (message) => void, error: (message) => void) {
        Parse.User.logIn(userForm.email, userForm.password).then(function (user) {
            success("User successfully connected");
        }, function (e) {
            error(e.message);
        });
    }

}
import { User } from './user';
import { Condo } from './condo';

import * as constants from '../constants/constants';

var Parse = require('parse').Parse;
Parse.initialize(constants.AppId, constants.JavascriptKey, constants.AppMasterKey);
Parse.serverURL = constants.ApiAddress;

export class ParseManager {

    constructor() {

    }

    signUp(userForm: User, success: (message) => void, failed: (message) => void) {

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

    addCondo(condoForm: Condo, success: (message) => void, error: (message) => void) {
        var Condo = Parse.Object.extend("Condo");
        var condo = new Condo();

        condo.set("name", condoForm.name);
        condo.set("address", condoForm.address);
        condo.set("syndic", condoForm.syndic);
        condo.save(null, {
            success: function (condoObj) {
                success("Condo created");
            },
            error: function (e) {
                error(e.message);
            }
        });
    }

    getUserLogged(callback: (user) => void) {
        callback(Parse.User.current());
    }
}
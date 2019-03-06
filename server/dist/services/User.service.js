"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../utils/User.data"));

var _User2 = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userService = {
  createUser: function createUser(userData) {
    var newUser = new _User2.default(); // User entry should be modelled after the user models

    var allUsers = _User.default;
    newUser.firstName = userData.firstName;
    newUser.lastName = userData.lastName;
    newUser.password = userData.password;
    var newUserEntry = {
      id: allUsers.length + 1,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      password: newUser.password
    };
    allUsers.push(newUserEntry);
    return newUserEntry;
  },
  loginUser: function loginUser(userData) {
    /*
      Search through to find if user exist, return true
        */
    var allUsers = _User.default;
    var findUser = allUsers.find(function (user) {
      return user.email === userData.email;
    });
    return findUser;
  }
};
var _default = userService;
exports.default = _default;
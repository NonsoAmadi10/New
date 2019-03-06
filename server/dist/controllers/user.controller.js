"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../services/User.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = {
  signUp: function signUp(req, res) {
    var user = req.body;

    if (user.firstName !== ' ' || user.lastName !== ' ' || user.password !== ' ') {
      _User.default.createUser(user);

      return _jsonwebtoken.default.sign({
        user: user
      }, 'shshshshs', function (_err, token) {
        return res.json({
          status: 200,
          token: token
        });
      });
    }

    return res.json({
      status: 404,
      message: 'empty input fields'
    });
  },
  loginUser: function loginUser(req, res) {
    var user = req.body;

    if (user.email !== ' ' || user.password !== ' ') {
      return res.json({
        status: 404,
        message: 'empty input fields'
      });
    }

    var login = _User.default.loginUser(user);

    if (!login) {
      return res.json({
        status: 404,
        message: 'user does not exist. kindly log in'
      });
    }

    return _jsonwebtoken.default.sign({
      user: user
    }, 'shshshshs', function (err, token) {
      return res.json({
        status: 200,
        token: token
      });
    });
  }
};
var _default = userController;
exports.default = _default;
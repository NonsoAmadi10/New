"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_express.default.json());
app.use('/api/v1/epicmail', _userRoute.default);
app.get('/api', function (req, res) {
  res.json({
    message: 'welcome to the api'
  });
});
app.listen(3000, console.log('App is running'));
var _default = app;
exports.default = _default;
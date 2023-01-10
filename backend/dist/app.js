"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _rooms = _interopRequireDefault(require("./routes/rooms"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])());
app.use(_express["default"].json());
app.use(_rooms["default"]);
var _default = app;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _rooms = require("../controllers/rooms");
var router = (0, _express.Router)();
router.get('/rooms', _rooms.getRooms);
router.get('/rooms/count', _rooms.getRoomCount);
router.get('/rooms/:id', _rooms.getRoom);
router.post('/rooms', _rooms.saveRoom);
router["delete"]('/rooms/:id', _rooms.deleteRoom);
router.put('/rooms/:id', _rooms.updateRoom);
var _default = router;
exports["default"] = _default;
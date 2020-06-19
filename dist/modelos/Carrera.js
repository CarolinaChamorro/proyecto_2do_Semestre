"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Carrera = _database.sequelize.define('carrera', {
  id_carrera: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  descripcion: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false
});

var _default = Carrera;
exports["default"] = _default;
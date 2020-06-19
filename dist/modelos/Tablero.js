"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Estudiante = _interopRequireDefault(require("./Estudiante"));

var _Meta = _interopRequireDefault(require("./Meta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tablero = _database.sequelize.define('tablero', {
  posi_tablero: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  totalbotellas: {
    type: _sequelize["default"].INTEGER
  },
  id_meta: {
    type: _sequelize["default"].INTEGER
  },
  ci: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
}); //relacion con tablero-estudiante


Tablero.hasMany(_Estudiante["default"], {
  foreignKey: 'ci',
  sourceKey: 'ci'
});

_Estudiante["default"].belongsTo(Tablero, {
  foreignKey: 'ci',
  sourceKey: 'ci'
}); //relación meta-tablero


Tablero.hasOne(_Meta["default"], {
  foreignKey: 'id_meta',
  sourceKey: 'id_meta'
});

_Meta["default"].belongsTo(Tablero, {
  foreignKey: 'id_meta',
  sourceKey: 'id_meta'
});

var _default = Tablero;
exports["default"] = _default;
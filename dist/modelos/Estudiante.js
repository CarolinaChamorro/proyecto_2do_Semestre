"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Detallecurso = _interopRequireDefault(require("./Detallecurso"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Estudiante = _database.sequelize.define('estudiante', {
  ci: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].STRING
  },
  apellido: {
    type: _sequelize["default"].STRING
  },
  clave: {
    type: _sequelize["default"].STRING
  },
  id_detallecurso: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
}); //relacion con estudiante-detallecurso


_Detallecurso["default"].hasMany(Estudiante, {
  foreignKey: 'id_detallecurso',
  sourceKey: 'id'
});

Estudiante.belongsTo(_Detallecurso["default"], {
  foreignKey: 'id_detallecurso',
  targetKey: 'id'
});
var _default = Estudiante;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Paralelo = _interopRequireDefault(require("../modelos/Paralelo"));

var _Semestre = _interopRequireDefault(require("../modelos/Semestre"));

var _Carrera = _interopRequireDefault(require("../modelos/Carrera"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Detallecurso = _database.sequelize.define('detallecurso', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  id_carrera: {
    type: _sequelize["default"].INTEGER
  },
  id_semestre: {
    type: _sequelize["default"].INTEGER
  },
  id_paralelo: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
}); //relacion entre Paralelo-detallecurso


Detallecurso.hasMany(_Paralelo["default"], {
  foreignKey: 'id_paralelo',
  sourceKey: 'id_paralelo'
});

_Paralelo["default"].belongsTo(Detallecurso, {
  foreignKey: 'id_paralelo',
  sourceKey: 'id_paralelo'
}); //relacion entre semestre-detallecurso


Detallecurso.hasMany(_Semestre["default"], {
  foreignKey: 'id_semestre',
  sourceKey: 'id_semestre'
});

_Semestre["default"].belongsTo(Detallecurso, {
  foreignKey: 'id_semestre',
  sourceKey: 'id_semestre'
}); //relacion entre carrera-detallecurso


Detallecurso.hasMany(_Carrera["default"], {
  foreignKey: 'id_carrera',
  sourceKey: 'id_carrera'
});

_Carrera["default"].belongsTo(Detallecurso, {
  foreignKey: 'id_carrera',
  sourceKey: 'id_carrera'
});

var _default = Detallecurso;
exports["default"] = _default;
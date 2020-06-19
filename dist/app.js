"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _estudiantes = _interopRequireDefault(require("./rutas/estudiantes"));

var _detallecursos = _interopRequireDefault(require("./rutas/detallecursos"));

var _tablero = _interopRequireDefault(require("./rutas/tablero"));

var _meta = _interopRequireDefault(require("./rutas/meta"));

var _paralelo = _interopRequireDefault(require("./rutas/paralelo"));

var _semestre = _interopRequireDefault(require("./rutas/semestre"));

var _carrera = _interopRequireDefault(require("./rutas/carrera"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//importar rutas
var app = (0, _express["default"])(); //cors

app.use((0, _cors["default"])());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); //middlewares

app.use(_express["default"]["static"]('public'));
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json()); //rutas

app.use('/api/estudiante', _estudiantes["default"]);
app.use('/api/detallecurso', _detallecursos["default"]);
app.use('/api/tablero', _tablero["default"]);
app.use('/api/meta', _meta["default"]);
app.use('/api/paralelo', _paralelo["default"]);
app.use('/api/semestre', _semestre["default"]);
app.use('/api/carrera', _carrera["default"]);
var _default = app;
exports["default"] = _default;
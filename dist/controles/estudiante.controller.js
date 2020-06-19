"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEstudiante = getEstudiante;
exports.createEstudiante = createEstudiante;
exports.getOneEstudiante = getOneEstudiante;
exports.deleteEstudiante = deleteEstudiante;
exports.actualizarEstudiante = actualizarEstudiante;
exports.getEstudianteByDetalle = getEstudianteByDetalle;

var _Estudiante = _interopRequireDefault(require("../modelos/Estudiante"));

var _Detallecurso = _interopRequireDefault(require("../modelos/Detallecurso"));

var _Carrera = _interopRequireDefault(require("../modelos/Carrera"));

var _Semestre = _interopRequireDefault(require("../modelos/Semestre"));

var _Paralelo = _interopRequireDefault(require("../modelos/Paralelo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getEstudiante(_x, _x2) {
  return _getEstudiante.apply(this, arguments);
}

function _getEstudiante() {
  _getEstudiante = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var estudiantes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Estudiante["default"].findAll({
              include: [{
                model: _Detallecurso["default"],
                include: [{
                  model: _Carrera["default"]
                }, {
                  model: _Semestre["default"]
                }, {
                  model: _Paralelo["default"]
                }]
              }]
            });

          case 3:
            estudiantes = _context.sent;
            return _context.abrupt("return", res.json({
              data: estudiantes
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getEstudiante.apply(this, arguments);
}

;

function createEstudiante(_x3, _x4) {
  return _createEstudiante.apply(this, arguments);
}

function _createEstudiante() {
  _createEstudiante = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, ci, nombre, apellido, clave, id_detallecurso, nuevoEstudiante;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, ci = _req$body.ci, nombre = _req$body.nombre, apellido = _req$body.apellido, clave = _req$body.clave, id_detallecurso = _req$body.id_detallecurso;
            _context2.prev = 1;
            _context2.next = 4;
            return _Estudiante["default"].create({
              ci: ci,
              nombre: nombre,
              apellido: apellido,
              clave: clave,
              id_detallecurso: id_detallecurso
            }, {
              field: ['ci', 'nombre', 'apellido', 'clave', 'id_detallecurso']
            });

          case 4:
            nuevoEstudiante = _context2.sent;

            if (!nuevoEstudiante) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Se ha creado el registro satisfactoriamente',
              data: nuevoEstudiante
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Algo está mal',
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createEstudiante.apply(this, arguments);
}

;

function getOneEstudiante(_x5, _x6) {
  return _getOneEstudiante.apply(this, arguments);
}

function _getOneEstudiante() {
  _getOneEstudiante = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var ci, estudiante;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ci = req.params.ci;
            _context3.prev = 1;
            _context3.next = 4;
            return _Estudiante["default"].findOne({
              where: {
                ci: ci
              },
              include: [{
                model: _Detallecurso["default"],
                include: [{
                  model: _Carrera["default"]
                }, {
                  model: _Semestre["default"]
                }, {
                  model: _Paralelo["default"]
                }]
              }]
            });

          case 4:
            estudiante = _context3.sent;
            res.json({
              data: estudiante
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getOneEstudiante.apply(this, arguments);
}

;

function deleteEstudiante(_x7, _x8) {
  return _deleteEstudiante.apply(this, arguments);
}

function _deleteEstudiante() {
  _deleteEstudiante = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var ci, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            ci = req.params.ci;
            _context4.prev = 1;
            _context4.next = 4;
            return _Estudiante["default"].destroy({
              where: {
                ci: ci
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Estudiante eliminado satisfactoriamente',
              count: deleteRowCount
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteEstudiante.apply(this, arguments);
}

;

function actualizarEstudiante(_x9, _x10) {
  return _actualizarEstudiante.apply(this, arguments);
}

function _actualizarEstudiante() {
  _actualizarEstudiante = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var ci, _req$body2, nombre, apellido, clave, id_detallecurso, estudiantes;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            ci = req.params.ci;
            _req$body2 = req.body, nombre = _req$body2.nombre, apellido = _req$body2.apellido, clave = _req$body2.clave, id_detallecurso = _req$body2.id_detallecurso;
            _context6.next = 4;
            return _Estudiante["default"].findAll({
              attributes: ['ci', 'nombre', 'apellido', 'clave', 'id_detallecurso'],
              where: {
                ci: ci
              }
            });

          case 4:
            estudiantes = _context6.sent;

            if (estudiantes.length > 0) {
              estudiantes.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(estudiante) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return estudiante.update({
                            nombre: nombre,
                            apellido: apellido,
                            clave: clave,
                            id_detallecurso: id_detallecurso
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Los datos del estudiante se han actualizado correctamente',
              data: estudiantes
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _actualizarEstudiante.apply(this, arguments);
}

;

function getEstudianteByDetalle(_x11, _x12) {
  return _getEstudianteByDetalle.apply(this, arguments);
}

function _getEstudianteByDetalle() {
  _getEstudianteByDetalle = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var id_detallecurso, estudiantes;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_detallecurso = req.params.id_detallecurso;
            _context7.prev = 1;
            _context7.next = 4;
            return _Estudiante["default"].findAll({
              attributes: ['ci', 'nombre', 'apellido', 'clave', 'id_detallecurso'],
              where: {
                id_detallecurso: id_detallecurso
              },
              include: [{
                model: _Detallecurso["default"],
                include: [{
                  model: _Carrera["default"]
                }, {
                  model: _Semestre["default"]
                }, {
                  model: _Paralelo["default"]
                }]
              }]
            });

          case 4:
            estudiantes = _context7.sent;

            if (estudiantes) {
              res.json({
                estudiantes: estudiantes
              });
            } else {
              console.log("No existe ese registro");
            }

            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _getEstudianteByDetalle.apply(this, arguments);
}

;
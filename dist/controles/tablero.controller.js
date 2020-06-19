"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTablero = createTablero;
exports.getTablero = getTablero;
exports.getOneTablero = getOneTablero;
exports.deleteTablero = deleteTablero;
exports.updateTablero = updateTablero;
exports.getTableroByEstudiante = getTableroByEstudiante;
exports.getTableroByMeta = getTableroByMeta;

var _Tablero = _interopRequireDefault(require("../modelos/Tablero"));

var _Estudiante = _interopRequireDefault(require("../modelos/Estudiante"));

var _Meta = _interopRequireDefault(require("../modelos/Meta"));

var _Detallecurso = _interopRequireDefault(require("../modelos/Detallecurso"));

var _Carrera = _interopRequireDefault(require("../modelos/Carrera"));

var _Semestre = _interopRequireDefault(require("../modelos/Semestre"));

var _Paralelo = _interopRequireDefault(require("../modelos/Paralelo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// tiene id_meta y ci_estudiante
function createTablero(_x, _x2) {
  return _createTablero.apply(this, arguments);
}

function _createTablero() {
  _createTablero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, posi_tablero, totalbotellas, id_meta, ci, nuevoTablero;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, posi_tablero = _req$body.posi_tablero, totalbotellas = _req$body.totalbotellas, id_meta = _req$body.id_meta, ci = _req$body.ci;
            _context.prev = 1;
            _context.next = 4;
            return _Tablero["default"].create({
              posi_tablero: posi_tablero,
              totalbotellas: totalbotellas,
              id_meta: id_meta,
              ci: ci
            }, {
              fields: ['posi_tablero', 'totalbotellas', 'id_meta', 'ci']
            });

          case 4:
            nuevoTablero = _context.sent;

            if (!nuevoTablero) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Se ha creado un datos nuevos en el tablero',
              data: nuevoTablero
            }));

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createTablero.apply(this, arguments);
}

;

function getTablero(_x3, _x4) {
  return _getTablero.apply(this, arguments);
}

function _getTablero() {
  _getTablero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var tablero;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Tablero["default"].findAll({
              include: [{
                model: _Estudiante["default"],
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
              }, {
                model: _Meta["default"]
              }]
            });

          case 3:
            tablero = _context2.sent;
            return _context2.abrupt("return", res.json({
              data: tablero
            }));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getTablero.apply(this, arguments);
}

;

function getOneTablero(_x5, _x6) {
  return _getOneTablero.apply(this, arguments);
}

function _getOneTablero() {
  _getOneTablero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var posi_tablero, tablero;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            posi_tablero = req.params.posi_tablero;
            _context3.next = 3;
            return _Tablero["default"].findOne({
              where: {
                posi_tablero: posi_tablero
              },
              attributes: ['posi_tablero', 'totalbotellas', 'id_meta', 'ci'],
              include: [{
                model: _Estudiante["default"],
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
              }, {
                model: _Meta["default"]
              }]
            });

          case 3:
            tablero = _context3.sent;
            res.json({
              data: tablero
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneTablero.apply(this, arguments);
}

;

function deleteTablero(req, res) {
  var posi_tablero = req.params.posi_tablero;

  _Tablero["default"].destroy({
    where: {
      posi_tablero: posi_tablero
    }
  });

  res.json({
    message: 'Se ha eliminado un registro del tablero'
  });
}

;

function updateTablero(_x7, _x8) {
  return _updateTablero.apply(this, arguments);
}

function _updateTablero() {
  _updateTablero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var posi_tablero, _req$body2, totalbotellas, id_meta, ci, tablero, updateTablero;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            posi_tablero = req.params.posi_tablero;
            _req$body2 = req.body, totalbotellas = _req$body2.totalbotellas, id_meta = _req$body2.id_meta, ci = _req$body2.ci;
            _context4.next = 4;
            return _Tablero["default"].findOne({
              attributes: ['posi_tablero', 'totalbotellas', 'id_meta', 'ci'],
              where: {
                posi_tablero: posi_tablero
              }
            });

          case 4:
            tablero = _context4.sent;
            _context4.next = 7;
            return _Tablero["default"].update({
              totalbotellas: totalbotellas,
              id_meta: id_meta,
              ci: ci
            }, {
              where: {
                posi_tablero: posi_tablero
              }
            });

          case 7:
            updateTablero = _context4.sent;
            res.json({
              message: 'Se ha actualizado correctamente',
              data: tablero,
              updateTablero: updateTablero
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateTablero.apply(this, arguments);
}

;

function getTableroByEstudiante(_x9, _x10) {
  return _getTableroByEstudiante.apply(this, arguments);
}

function _getTableroByEstudiante() {
  _getTableroByEstudiante = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var ci, tablero;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            ci = req.params.ci;
            _context5.prev = 1;
            _context5.next = 4;
            return _Tablero["default"].findAll({
              attributes: ['ci', 'posi_tablero', 'totalbotellas', 'id_meta'],
              where: {
                ci: ci
              },
              include: [{
                model: _Estudiante["default"],
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
              }, {
                model: _Meta["default"]
              }]
            });

          case 4:
            tablero = _context5.sent;

            if (tablero) {
              res.json({
                tablero: tablero
              });
            } else {
              console.log("No existe ese registro");
            }

            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _getTableroByEstudiante.apply(this, arguments);
}

;

function getTableroByMeta(_x11, _x12) {
  return _getTableroByMeta.apply(this, arguments);
}

function _getTableroByMeta() {
  _getTableroByMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id_meta, tablero;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_meta = req.params.id_meta;
            _context6.prev = 1;
            _context6.next = 4;
            return _Tablero["default"].findAll({
              attributes: ['id_meta', 'posi_tablero', 'totalbotellas', 'ci'],
              where: {
                id_meta: id_meta
              },
              include: [{
                model: _Estudiante["default"],
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
              }, {
                model: _Meta["default"]
              }]
            });

          case 4:
            tablero = _context6.sent;

            if (tablero) {
              res.json({
                tablero: tablero
              });
            } else {
              console.log("No existe ese registro");
            }

            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _getTableroByMeta.apply(this, arguments);
}

;
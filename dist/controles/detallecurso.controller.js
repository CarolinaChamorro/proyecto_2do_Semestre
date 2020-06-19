"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDetallecurso = createDetallecurso;
exports.getDetallecurso = getDetallecurso;
exports.updateDetallecurso = updateDetallecurso;
exports.deleteDetallecurso = deleteDetallecurso;
exports.getOneDetallecurso = getOneDetallecurso;

var _Detallecurso = _interopRequireDefault(require("../modelos/Detallecurso"));

var _Carrera = _interopRequireDefault(require("../modelos/Carrera"));

var _Semestre = _interopRequireDefault(require("../modelos/Semestre"));

var _Paralelo = _interopRequireDefault(require("../modelos/Paralelo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createDetallecurso(_x, _x2) {
  return _createDetallecurso.apply(this, arguments);
}

function _createDetallecurso() {
  _createDetallecurso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, id, id_carrera, id_semestre, id_paralelo, nuevoDetallecurso;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, id_carrera = _req$body.id_carrera, id_semestre = _req$body.id_semestre, id_paralelo = _req$body.id_paralelo;
            _context.prev = 1;
            _context.next = 4;
            return _Detallecurso["default"].create({
              id: id,
              id_carrera: id_carrera,
              id_semestre: id_semestre,
              id_paralelo: id_paralelo
            }, {
              fields: ['id', 'id_carrera', 'id_semestre', 'id_paralelo']
            });

          case 4:
            nuevoDetallecurso = _context.sent;

            if (!nuevoDetallecurso) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Se ha creado un detalle curso',
              data: nuevoDetallecurso
            }));

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.estatus(500).json({
              message: 'Algo anda mal',
              data: {}
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createDetallecurso.apply(this, arguments);
}

;

function getDetallecurso(_x3, _x4) {
  return _getDetallecurso.apply(this, arguments);
}

function _getDetallecurso() {
  _getDetallecurso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var detallecursos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Detallecurso["default"].findAll({
              include: [{
                model: _Carrera["default"]
              }, {
                model: _Semestre["default"]
              }, {
                model: _Paralelo["default"]
              }]
            });

          case 3:
            detallecursos = _context2.sent;
            return _context2.abrupt("return", res.json({
              data: detallecursos
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
  return _getDetallecurso.apply(this, arguments);
}

;

function updateDetallecurso(_x5, _x6) {
  return _updateDetallecurso.apply(this, arguments);
}

function _updateDetallecurso() {
  _updateDetallecurso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, id_carrera, id_semestre, id_paralelo, detallecurso, updateDetallecurso;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, id_carrera = _req$body2.id_carrera, id_semestre = _req$body2.id_semestre, id_paralelo = _req$body2.id_paralelo;
            _context3.next = 4;
            return _Detallecurso["default"].findOne({
              attributes: ['id', 'id_carrera', 'id_semestre', 'id_paralelo'],
              where: {
                id: id
              }
            });

          case 4:
            detallecurso = _context3.sent;
            _context3.next = 7;
            return _Detallecurso["default"].update({
              id_carrera: id_carrera,
              id_semestre: id_semestre,
              id_paralelo: id_paralelo
            }, {
              where: {
                id: id
              }
            });

          case 7:
            updateDetallecurso = _context3.sent;
            res.json({
              message: 'Se ha actualizado correctamente',
              updateDetallecurso: updateDetallecurso
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateDetallecurso.apply(this, arguments);
}

;

function deleteDetallecurso(req, res) {
  var id = req.params.id;

  _Detallecurso["default"].destroy({
    where: {
      id: id
    }
  });

  res.json({
    message: 'Se ha eliminado el detalle'
  });
}

;

function getOneDetallecurso(_x7, _x8) {
  return _getOneDetallecurso.apply(this, arguments);
}

function _getOneDetallecurso() {
  _getOneDetallecurso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, detallecurso;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Detallecurso["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'id_carrera', 'id_semestre', 'id_paralelo'],
              include: [{
                model: _Carrera["default"]
              }, {
                model: _Semestre["default"]
              }, {
                model: _Paralelo["default"]
              }]
            });

          case 3:
            detallecurso = _context4.sent;
            res.json({
              data: detallecurso
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getOneDetallecurso.apply(this, arguments);
}

;
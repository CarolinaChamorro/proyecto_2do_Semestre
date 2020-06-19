"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSemestre = createSemestre;
exports.getSemestre = getSemestre;
exports.getOneSemestre = getOneSemestre;
exports.deleteSemestre = deleteSemestre;
exports.updateSemestre = updateSemestre;

var _Semestre = _interopRequireDefault(require("../modelos/Semestre"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createSemestre(_x, _x2) {
  return _createSemestre.apply(this, arguments);
}

function _createSemestre() {
  _createSemestre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, id_semestre, descripcion, nuevoSemestre;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id_semestre = _req$body.id_semestre, descripcion = _req$body.descripcion;
            _context.next = 3;
            return _Semestre["default"].create({
              id_semestre: id_semestre,
              descripcion: descripcion
            }, {
              fields: ['id_semestre', 'descripcion']
            });

          case 3:
            nuevoSemestre = _context.sent;

            if (!nuevoSemestre) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Se ha creado un nuevo semestre',
              data: nuevoSemestre
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createSemestre.apply(this, arguments);
}

;

function getSemestre(_x3, _x4) {
  return _getSemestre.apply(this, arguments);
}

function _getSemestre() {
  _getSemestre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var semestre;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Semestre["default"].findAll();

          case 2:
            semestre = _context2.sent;
            return _context2.abrupt("return", res.json({
              data: semestre
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getSemestre.apply(this, arguments);
}

;

function getOneSemestre(_x5, _x6) {
  return _getOneSemestre.apply(this, arguments);
}

function _getOneSemestre() {
  _getOneSemestre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id_semestre, semestre;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_semestre = req.params.id_semestre;
            _context3.next = 3;
            return _Semestre["default"].findOne({
              where: {
                id_semestre: id_semestre
              },
              attributes: ['id_semestre', 'descripcion']
            });

          case 3:
            semestre = _context3.sent;
            res.json({
              data: semestre
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneSemestre.apply(this, arguments);
}

;

function deleteSemestre(_x7, _x8) {
  return _deleteSemestre.apply(this, arguments);
}

function _deleteSemestre() {
  _deleteSemestre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id_semestre;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = req.params.id_semestre;

            _Semestre["default"].destroy({
              where: {
                id_semestre: id_semestre
              }
            });

            res.json({
              message: 'Se ha eliminado el paralelo'
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteSemestre.apply(this, arguments);
}

;

function updateSemestre(_x9, _x10) {
  return _updateSemestre.apply(this, arguments);
}

function _updateSemestre() {
  _updateSemestre = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_semestre, descripcion, updateSemestre;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_semestre = req.params.id_semestre;
            descripcion = req.body.descripcion;

            _Semestre["default"].findOne({
              attributes: ['id_semestre', 'descripcion'],
              where: {
                id_semestre: id_semestre
              }
            });

            _context5.next = 5;
            return _Semestre["default"].update({
              descripcion: descripcion
            }, {
              where: {
                id_semestre: id_semestre
              }
            });

          case 5:
            updateSemestre = _context5.sent;
            res.json({
              message: 'Se ha actualizado correctamente',
              updateSemestre: updateSemestre
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateSemestre.apply(this, arguments);
}

;
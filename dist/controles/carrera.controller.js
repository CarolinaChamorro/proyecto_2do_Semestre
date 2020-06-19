"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCarrera = createCarrera;
exports.getCarrera = getCarrera;
exports.getOneCarrera = getOneCarrera;
exports.deleteCarrera = deleteCarrera;
exports.updateCarrera = updateCarrera;

var _Carrera = _interopRequireDefault(require("../modelos/Carrera"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createCarrera(_x, _x2) {
  return _createCarrera.apply(this, arguments);
}

function _createCarrera() {
  _createCarrera = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, id_carrera, descripcion, nuevoCarrera;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id_carrera = _req$body.id_carrera, descripcion = _req$body.descripcion;
            _context.next = 3;
            return _Carrera["default"].create({
              id_carrera: id_carrera,
              descripcion: descripcion
            }, {
              fields: ['id_carrera', 'descripcion']
            });

          case 3:
            nuevoCarrera = _context.sent;

            if (!nuevoCarrera) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Se ha creado una nueva carrera',
              data: nuevoCarrera
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createCarrera.apply(this, arguments);
}

;

function getCarrera(_x3, _x4) {
  return _getCarrera.apply(this, arguments);
}

function _getCarrera() {
  _getCarrera = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var carrera;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Carrera["default"].findAll();

          case 2:
            carrera = _context2.sent;
            return _context2.abrupt("return", res.json({
              data: carrera
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCarrera.apply(this, arguments);
}

;

function getOneCarrera(_x5, _x6) {
  return _getOneCarrera.apply(this, arguments);
}

function _getOneCarrera() {
  _getOneCarrera = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id_carrera, carrera;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_carrera = req.params.id_carrera;
            _context3.next = 3;
            return _Carrera["default"].findOne({
              where: {
                id_carrera: id_carrera
              },
              attributes: ['id_carrera', 'descripcion']
            });

          case 3:
            carrera = _context3.sent;
            res.json({
              data: carrera
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneCarrera.apply(this, arguments);
}

;

function deleteCarrera(_x7, _x8) {
  return _deleteCarrera.apply(this, arguments);
}

function _deleteCarrera() {
  _deleteCarrera = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id_carrera;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_carrera = req.params.id_carrera;

            _Carrera["default"].destroy({
              where: {
                id_carrera: id_carrera
              }
            });

            res.json({
              message: 'Se ha eliminado la carrera'
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteCarrera.apply(this, arguments);
}

;

function updateCarrera(_x9, _x10) {
  return _updateCarrera.apply(this, arguments);
}

function _updateCarrera() {
  _updateCarrera = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_carrera, descripcion, carrera, updateCarrera;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_carrera = req.params.id_carrera;
            descripcion = req.body.descripcion;
            _context5.next = 4;
            return _Carrera["default"].findOne({
              attributes: ['id_carrera', 'descripcion'],
              where: {
                id_carrera: id_carrera
              }
            });

          case 4:
            carrera = _context5.sent;
            _context5.next = 7;
            return _Carrera["default"].update({
              descripcion: descripcion
            }, {
              where: {
                id_carrera: id_carrera
              }
            });

          case 7:
            updateCarrera = _context5.sent;
            res.json({
              message: 'Se ha actualizado correctamente',
              data: carrera,
              updateCarrera: updateCarrera
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateCarrera.apply(this, arguments);
}

;
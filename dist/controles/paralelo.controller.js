"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createParalelo = createParalelo;
exports.getParalelo = getParalelo;
exports.getOneParalelo = getOneParalelo;
exports.deleteParalelo = deleteParalelo;
exports.updateParalelo = updateParalelo;

var _Paralelo = _interopRequireDefault(require("../modelos/Paralelo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createParalelo(_x, _x2) {
  return _createParalelo.apply(this, arguments);
}

function _createParalelo() {
  _createParalelo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, id_paralelo, descripcion, nuevoParalelo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id_paralelo = _req$body.id_paralelo, descripcion = _req$body.descripcion;
            _context.next = 3;
            return _Paralelo["default"].create({
              id_paralelo: id_paralelo,
              descripcion: descripcion
            }, {
              fields: ['id_paralelo', 'descripcion']
            });

          case 3:
            nuevoParalelo = _context.sent;

            if (!nuevoParalelo) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Se ha creado un nuevo paralelo',
              data: nuevoParalelo
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createParalelo.apply(this, arguments);
}

;

function getParalelo(_x3, _x4) {
  return _getParalelo.apply(this, arguments);
}

function _getParalelo() {
  _getParalelo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var paralelo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Paralelo["default"].findAll();

          case 2:
            paralelo = _context2.sent;
            return _context2.abrupt("return", res.json({
              data: paralelo
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getParalelo.apply(this, arguments);
}

;

function getOneParalelo(_x5, _x6) {
  return _getOneParalelo.apply(this, arguments);
}

function _getOneParalelo() {
  _getOneParalelo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id_paralelo, paralelo;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_paralelo = req.params.id_paralelo;
            _context3.next = 3;
            return _Paralelo["default"].findOne({
              where: {
                id_paralelo: id_paralelo
              },
              attributes: ['id_paralelo', 'descripcion']
            });

          case 3:
            paralelo = _context3.sent;
            res.json({
              data: paralelo
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneParalelo.apply(this, arguments);
}

;

function deleteParalelo(_x7, _x8) {
  return _deleteParalelo.apply(this, arguments);
}

function _deleteParalelo() {
  _deleteParalelo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id_paralelo;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_paralelo = req.params.id_paralelo;

            _Paralelo["default"].destroy({
              where: {
                id_paralelo: id_paralelo
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
  return _deleteParalelo.apply(this, arguments);
}

;

function updateParalelo(_x9, _x10) {
  return _updateParalelo.apply(this, arguments);
}

function _updateParalelo() {
  _updateParalelo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_paralelo, descripcion, updateParalelo;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_paralelo = req.params.id_paralelo;
            descripcion = req.body.descripcion;

            _Paralelo["default"].findOne({
              attributes: ['id_paralelo', 'descripcion'],
              where: {
                id_paralelo: id_paralelo
              }
            });

            _context5.next = 5;
            return _Paralelo["default"].update({
              descripcion: descripcion
            }, {
              where: {
                id_paralelo: id_paralelo
              }
            });

          case 5:
            updateParalelo = _context5.sent;
            res.json({
              message: 'Se ha actualizado correctamente',
              updateParalelo: updateParalelo
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateParalelo.apply(this, arguments);
}

;
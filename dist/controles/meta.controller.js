"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMeta = createMeta;
exports.getMeta = getMeta;
exports.getOneMeta = getOneMeta;
exports.deleteMeta = deleteMeta;
exports.updateMeta = updateMeta;

var _Meta = _interopRequireDefault(require("../modelos/Meta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createMeta(_x, _x2) {
  return _createMeta.apply(this, arguments);
}

function _createMeta() {
  _createMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, id_meta, fecha_inicio, fecha_fin, premio, nuevaMeta;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id_meta = _req$body.id_meta, fecha_inicio = _req$body.fecha_inicio, fecha_fin = _req$body.fecha_fin, premio = _req$body.premio;
            _context.prev = 1;
            _context.next = 4;
            return _Meta["default"].create({
              id_meta: id_meta,
              fecha_inicio: fecha_inicio,
              fecha_fin: fecha_fin,
              premio: premio
            }, {
              fields: ['id_meta', 'fecha_inicio', 'fecha_fin', 'premio']
            });

          case 4:
            nuevaMeta = _context.sent;

            if (!nuevaMeta) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Se ha creado una nueva meta',
              data: nuevaMeta
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
  return _createMeta.apply(this, arguments);
}

;

function getMeta(_x3, _x4) {
  return _getMeta.apply(this, arguments);
}

function _getMeta() {
  _getMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var meta;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Meta["default"].findAll();

          case 3:
            meta = _context2.sent;
            return _context2.abrupt("return", res.json({
              data: meta
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
  return _getMeta.apply(this, arguments);
}

;

function getOneMeta(_x5, _x6) {
  return _getOneMeta.apply(this, arguments);
}

function _getOneMeta() {
  _getOneMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id_meta, meta;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_meta = req.params.id_meta;
            _context3.next = 3;
            return _Meta["default"].findOne({
              where: {
                id_meta: id_meta
              },
              attributes: ['id_meta', 'fecha_inicio', 'fecha_fin', 'premio']
            });

          case 3:
            meta = _context3.sent;
            res.json({
              data: meta
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneMeta.apply(this, arguments);
}

;

function deleteMeta(_x7, _x8) {
  return _deleteMeta.apply(this, arguments);
}

function _deleteMeta() {
  _deleteMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id_meta;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_meta = req.params.id_meta;

            _Meta["default"].destroy({
              where: {
                id_meta: id_meta
              }
            });

            res.json({
              message: 'Se ha eliminado la meta'
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteMeta.apply(this, arguments);
}

;

function updateMeta(_x9, _x10) {
  return _updateMeta.apply(this, arguments);
}

function _updateMeta() {
  _updateMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_meta, _req$body2, fecha_inicio, fecha_fin, premio, resultadoMeta, updateMeta;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_meta = req.params.id_meta;
            _req$body2 = req.body, fecha_inicio = _req$body2.fecha_inicio, fecha_fin = _req$body2.fecha_fin, premio = _req$body2.premio;
            _context5.next = 4;
            return _Meta["default"].findOne({
              attributes: ['id_meta', 'fecha_inicio', 'fecha_fin', 'premio'],
              where: {
                id_meta: id_meta
              }
            });

          case 4:
            resultadoMeta = _context5.sent;
            _context5.next = 7;
            return _Meta["default"].update({
              fecha_inicio: fecha_inicio,
              fecha_fin: fecha_fin,
              premio: premio
            }, {
              where: {
                id_meta: id_meta
              }
            });

          case 7:
            updateMeta = _context5.sent;
            res.json({
              message: 'Se ha actualizado correctamente',
              data: resultadoMeta
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateMeta.apply(this, arguments);
}

;
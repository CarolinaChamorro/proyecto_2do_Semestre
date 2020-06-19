"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tablero = require("../controles/tablero.controller");

var router = (0, _express.Router)();
// api/tablero
router.post('/', _tablero.createTablero);
router.get('/', _tablero.getTablero); //api/:posi_tablero

router.get('/:posi_tablero', _tablero.getOneTablero);
router["delete"]('/:posi_tablero', _tablero.deleteTablero);
router.put('/:posi_tablero', _tablero.updateTablero); // api/tablero/estudiante/:ci

router.get('/estudiante/:ci', _tablero.getTableroByEstudiante); // api/tablero/meta/:id_meta

router.get('/meta/:id_meta', _tablero.getTableroByMeta);
var _default = router;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _carrera = require("../controles/carrera.controller");

var router = (0, _express.Router)();
// api/carrera
router.post('/', _carrera.createCarrera);
router.get('/', _carrera.getCarrera); // api/:id_carrera

router["delete"]('/:id_carrera', _carrera.deleteCarrera);
router.get('/:id_carrera', _carrera.getOneCarrera);
router.put('/:id_carrera', _carrera.updateCarrera);
var _default = router;
exports["default"] = _default;
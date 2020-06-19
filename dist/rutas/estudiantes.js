"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _estudiante = require("../controles/estudiante.controller");

var router = (0, _express.Router)();
//api/estudiante/
router.post('/', _estudiante.createEstudiante);
router.get('/', _estudiante.getEstudiante); // /api/estudiantes/:estudianteCI

router.get('/:ci', _estudiante.getOneEstudiante);
router["delete"]('/:ci', _estudiante.deleteEstudiante); //actualizar

router.put('/:ci', _estudiante.actualizarEstudiante); // api/estudiante/detallecurso/:id_detallecurso

router.get('/detallecurso/:id_detallecurso', _estudiante.getEstudianteByDetalle);
var _default = router;
exports["default"] = _default;
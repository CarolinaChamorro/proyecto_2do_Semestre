"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _semestre = require("../controles/semestre.controller");

var router = (0, _express.Router)();
// api/semestre
router.post('/', _semestre.createSemestre);
router.get('/', _semestre.getSemestre); // api/:id_semestre

router["delete"]('/:id_semestre', _semestre.deleteSemestre);
router.get('/:id_semestre', _semestre.getOneSemestre);
router.put('/:id_semestre', _semestre.updateSemestre);
var _default = router;
exports["default"] = _default;
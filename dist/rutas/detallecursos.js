"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detallecurso = require("../controles/detallecurso.controller");

var router = (0, _express.Router)();
// api/detallecurso
router.post('/', _detallecurso.createDetallecurso);
router.get('/', _detallecurso.getDetallecurso); // api/:id

router["delete"]('/:id', _detallecurso.deleteDetallecurso);
router.put('/:id', _detallecurso.updateDetallecurso);
router.get('/:id', _detallecurso.getOneDetallecurso);
var _default = router;
exports["default"] = _default;
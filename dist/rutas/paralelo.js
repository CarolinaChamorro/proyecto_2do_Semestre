"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _paralelo = require("../controles/paralelo.controller");

var router = (0, _express.Router)();
// api/paralelo
router.post('/', _paralelo.createParalelo);
router.get('/', _paralelo.getParalelo); // api/:id_paralelo

router["delete"]('/:id_paralelo', _paralelo.deleteParalelo);
router.get('/:id_paralelo', _paralelo.getOneParalelo);
router.put('/:id_paralelo', _paralelo.updateParalelo);
var _default = router;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _meta = require("../controles/meta.controller");

var router = (0, _express.Router)();
// api/meta
router.post('/', _meta.createMeta);
router.get('/', _meta.getMeta); // api/:id_meta

router.get('/:id_meta', _meta.getOneMeta);
router["delete"]('/:id_meta', _meta.deleteMeta);
router.put('/:id_meta', _meta.updateMeta);
var _default = router;
exports["default"] = _default;
import {Router} from 'express';
const router = Router();

import {createMeta,getMeta,getOneMeta,deleteMeta,updateMeta} from '../controles/meta.controller';

// api/meta
router.post('/',createMeta);
router.get('/',getMeta);

// api/:id_meta
router.get('/:id_meta',getOneMeta);
router.delete('/:id_meta',deleteMeta);
router.put('/:id_meta',updateMeta);


export default router;
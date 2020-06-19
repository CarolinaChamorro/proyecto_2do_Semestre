import {Router} from 'express';
const router = Router();

import {createDetallecurso,getDetallecurso,
    deleteDetallecurso,updateDetallecurso,
    getOneDetallecurso} from '../controles/detallecurso.controller';

// api/detallecurso
router.post('/',createDetallecurso);
router.get('/',getDetallecurso);

// api/:id
router.delete('/:id',deleteDetallecurso);
router.put('/:id',updateDetallecurso);
router.get('/:id',getOneDetallecurso);


export default router;
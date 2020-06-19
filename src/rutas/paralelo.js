import {Router} from 'express';
const router= Router();

import {createParalelo,getParalelo,getOneParalelo,deleteParalelo,updateParalelo} from '../controles/paralelo.controller';

// api/paralelo
router.post('/',createParalelo);
router.get('/',getParalelo);

// api/:id_paralelo
router.delete('/:id_paralelo',deleteParalelo);
router.get('/:id_paralelo',getOneParalelo);
router.put('/:id_paralelo',updateParalelo);


export default router;
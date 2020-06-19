import {Router} from 'express';
const router= Router();

import {createCarrera,getCarrera,getOneCarrera,deleteCarrera,updateCarrera} from '../controles/carrera.controller';

// api/carrera
router.post('/',createCarrera);
router.get('/',getCarrera);

// api/:id_carrera
router.delete('/:id_carrera',deleteCarrera);
router.get('/:id_carrera',getOneCarrera);
router.put('/:id_carrera',updateCarrera);


export default router;
import {Router} from 'express';
const router= Router();

import {createSemestre,getSemestre,getOneSemestre,deleteSemestre,updateSemestre} from '../controles/semestre.controller';

// api/semestre
router.post('/',createSemestre);
router.get('/',getSemestre);

// api/:id_semestre
router.delete('/:id_semestre',deleteSemestre);
router.get('/:id_semestre',getOneSemestre);
router.put('/:id_semestre',updateSemestre);


export default router;
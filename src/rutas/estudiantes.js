import {Router} from 'express';
const router = Router();

import {createEstudiante,getEstudiante,getOneEstudiante,deleteEstudiante, actualizarEstudiante,getEstudianteByDetalle} from '../controles/estudiante.controller';

//api/estudiante/
router.post('/', createEstudiante);
router.get('/',getEstudiante);

// /api/estudiantes/:estudianteCI
router.get('/:ci',getOneEstudiante);
router.delete('/:ci',deleteEstudiante);

//actualizar
router.put('/:ci',actualizarEstudiante);
// api/estudiante/detallecurso/:id_detallecurso
router.get('/detallecurso/:id_detallecurso',getEstudianteByDetalle);

export default router;
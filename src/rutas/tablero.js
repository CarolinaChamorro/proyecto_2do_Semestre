import {Router} from 'express';
const router = Router();


import{createTablero,getTablero,getOneTablero, deleteTablero,updateTablero,getTableroByEstudiante,getTableroByMeta} from '../controles/tablero.controller';

// api/tablero
router.post('/',createTablero);
router.get('/',getTablero);

//api/:posi_tablero
router.get('/:posi_tablero',getOneTablero);
router.delete('/:posi_tablero',deleteTablero);
router.put('/:posi_tablero',updateTablero);

// api/tablero/estudiante/:ci
router.get('/estudiante/:ci',getTableroByEstudiante);

// api/tablero/meta/:id_meta
router.get('/meta/:id_meta',getTableroByMeta);

export default router;





import express, { json } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

//importar rutas
import estudianteRutas from './rutas/estudiantes';
import detallecursoRutas from './rutas/detallecursos';
import tableroRutas from './rutas/tablero';
import metaRutas from './rutas/meta';
import paraleloRutas from './rutas/paralelo';
import semestreRutas from './rutas/semestre';
import carreraRutas from './rutas/carrera';

const app = express();
//cors
app.use (cors ());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//middlewares
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//rutas
app.use('/api/estudiante', estudianteRutas);
app.use('/api/detallecurso', detallecursoRutas);
app.use('/api/tablero', tableroRutas);
app.use('/api/meta', metaRutas);
app.use('/api/paralelo',paraleloRutas);
app.use('/api/semestre',semestreRutas);
app.use('/api/carrera',carreraRutas);

export default app;

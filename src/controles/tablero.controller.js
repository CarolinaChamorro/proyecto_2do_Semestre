import Tablero from '../modelos/Tablero';
import Estudiante from '../modelos/Estudiante';
import Meta from '../modelos/Meta';
import Detallecurso from '../modelos/Detallecurso';
import Carrera from '../modelos/Carrera';
import Semestre from '../modelos/Semestre';
import Paralelo from '../modelos/Paralelo';


// tiene id_meta y ci_estudiante
export async function createTablero(req, res) {
    const { posi_tablero, totalbotellas, id_meta, ci } = req.body;
    try {
        const nuevoTablero = await Tablero.create({
            posi_tablero,
            totalbotellas,
            id_meta,
            ci
        }, {
            fields: ['posi_tablero', 'totalbotellas', 'id_meta', 'ci']
        });
        if (nuevoTablero) {
            return res.json({
                message: 'Se ha creado un datos nuevos en el tablero',
                data: nuevoTablero
            });
        }
    } catch (e) {
        console.log(e)
    }

};

export async function getTablero(req, res) {
    try {
        const tablero = await Tablero.findAll({
            include:[{
                model:Estudiante,
                include:[{
                    model:Detallecurso,
                    include:[{
                        model:Carrera
                    },{
                        model:Semestre
                    },{
                        model:Paralelo
                    }]
                }]
            },{
                model:Meta
            }]
    
        });
        return res.json({
            data: tablero
        })
    } catch (e) {
        console.log(e)
    }
};

export async function getOneTablero(req, res) {
    const { posi_tablero } = req.params;
    const tablero = await Tablero.findOne({
        where: { posi_tablero },
        attributes: ['posi_tablero', 'totalbotellas', 'id_meta', 'ci'],
        include:[{
            model:Estudiante,
            include:[{
                model:Detallecurso,
                include:[{
                    model:Carrera
                },{
                    model:Semestre
                },{
                    model:Paralelo
                }]
            }]
        },{
            model:Meta
        }]
    });
    res.json({
        data: tablero
    });
};

export function deleteTablero(req, res) {
    const { posi_tablero } = req.params;
    Tablero.destroy({
        where: { posi_tablero }
    });
    res.json({ message: 'Se ha eliminado un registro del tablero' });
};

export async function updateTablero(req, res) {
    const { posi_tablero } = req.params;
    const { totalbotellas, id_meta, ci } = req.body;
    const tablero = await Tablero.findOne({
        attributes: ['posi_tablero', 'totalbotellas', 'id_meta', 'ci'],
        where: {
            posi_tablero
        }
    })
    const updateTablero = await Tablero.update({
        totalbotellas,
        id_meta,
        ci
    }, {
        where: { posi_tablero }
    });
    res.json({
        message: 'Se ha actualizado correctamente',
        data:tablero,updateTablero
    })
};


export async function getTableroByEstudiante(req, res) {
    const {ci}=req.params;
    try{
        const tablero =await Tablero.findAll({
            attributes:['ci','posi_tablero','totalbotellas','id_meta'],
            where:{ci},
            include: [{
                model: Estudiante,
                include:[{
                    model:Detallecurso,
                    include:[{
                        model:Carrera
                    },{
                        model:Semestre
                    },{
                        model:Paralelo
                    }]
                }]
            },{
                model:Meta
            }]
        });
        if(tablero){
            res.json({
                tablero
            });
        }else{
            console.log("No existe ese registro");
        }
    }catch(e){
        console.log(e);
    }
    
};


export async function getTableroByMeta(req, res) {
    const {id_meta}=req.params;
    try{
        const tablero =await Tablero.findAll({
            attributes:['id_meta','posi_tablero','totalbotellas','ci'],
            where:{id_meta},
            include:[{
                model:Estudiante,
                include:[{
                    model:Detallecurso,
                    include:[{
                        model:Carrera
                    },{
                        model:Semestre
                    },{
                        model:Paralelo
                    }]
                }]
            },{
                model:Meta
            }]
        });
        if(tablero){
            res.json({
                tablero
            });
        }else{
            console.log("No existe ese registro");
        }
    }catch(e){
        console.log(e);
    }
    
};


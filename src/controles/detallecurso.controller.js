import Detallecurso from '../modelos/Detallecurso';
import Carrera from '../modelos/Carrera';
import Semestre from '../modelos/Semestre';
import Paralelo from '../modelos/Paralelo';

export async function createDetallecurso(req, res) {
    const { id, id_carrera, id_semestre, id_paralelo } = req.body;
    try {
        const nuevoDetallecurso = await Detallecurso.create({
            id,
            id_carrera,
            id_semestre,
            id_paralelo
        }, {
            fields: ['id', 'id_carrera', 'id_semestre', 'id_paralelo']
        });
        if (nuevoDetallecurso) {
            return res.json({
                message: 'Se ha creado un detalle curso',
                data: nuevoDetallecurso
            });
        }

    } catch (e) {
        console.log(e);
        res.estatus(500).json({
            message: 'Algo anda mal',
            data: {}
        });

    }
};

export async function getDetallecurso(req, res) {
    try {
        const detallecursos = await Detallecurso.findAll({
            include:[{
                model:Carrera
            },{
                model:Semestre
            },{
                model:Paralelo
            }]
        });
        return res.json({
            data: detallecursos
        });
    } catch (e) {
        console.log(e);
    }

};

export async function updateDetallecurso(req, res) {
    const { id } = req.params;
    const { id_carrera, id_semestre, id_paralelo } = req.body;

    const detallecurso = await Detallecurso.findOne({
        attributes: ['id', 'id_carrera', 'id_semestre', 'id_paralelo'],
        where: {
            id
        }
    });
   const updateDetallecurso=await Detallecurso.update({
        id_carrera,
        id_semestre,
        id_paralelo
    },{
        where:{id}
    });
    res.json({
        message:'Se ha actualizado correctamente',
        updateDetallecurso
    })

};

export function deleteDetallecurso(req, res) {
    const { id } = req.params;
    Detallecurso.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Se ha eliminado el detalle'
    });
};

export async function getOneDetallecurso(req, res) {
    const {id}=req.params;
   const detallecurso=await Detallecurso.findOne({
        where:{id},
        attributes:['id','id_carrera','id_semestre','id_paralelo'],
        include:[{
            model:Carrera
        },{
            model:Semestre
        },{
            model:Paralelo
        }]
    });
    res.json({
        data:detallecurso
    });
};



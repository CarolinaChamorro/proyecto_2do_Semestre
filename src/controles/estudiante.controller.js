import Estudiante from '../modelos/Estudiante';
import Detallecurso from '../modelos/Detallecurso';
import Carrera from '../modelos/Carrera';
import Semestre from '../modelos/Semestre';
import Paralelo from '../modelos/Paralelo';

export async function getEstudiante(req, res) {
    try {
        const estudiantes = await Estudiante.findAll({
            include: [{
                model: Detallecurso,
                include:[{
                    model:Carrera
                },{
                    model:Semestre
                },{
                    model:Paralelo
                }]
            }]
        });
        return res.json({
            data: estudiantes
        });
    } catch (error) {
        console.log(error);

    }
};

export async function createEstudiante(req, res) {
    const { ci, nombre, apellido, clave, id_detallecurso } = req.body;
    try {
        let nuevoEstudiante = await Estudiante.create({
            ci,
            nombre,
            apellido,
            clave,
            id_detallecurso
        }, {
            field: ['ci', 'nombre', 'apellido', 'clave', 'id_detallecurso']
        });

        if (nuevoEstudiante) {
            return res.json({
                message: 'Se ha creado el registro satisfactoriamente',
                data: nuevoEstudiante
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo está mal',
            data: {}
        });
    }



};

export async function getOneEstudiante(req, res) {
    const { ci } = req.params;
    try {
        const estudiante = await Estudiante.findOne({
            where: {
                ci: ci
            },
            include: [{
                model: Detallecurso,
                include:[{
                    model:Carrera
                },{
                    model:Semestre
                },{
                    model:Paralelo
                }]
            }]
        });
        res.json({
            data: estudiante
        });
    } catch (e) {
        console.log(e);
    }
};

export async function deleteEstudiante(req, res) {
    const { ci } = req.params;
    try {
        const deleteRowCount = await Estudiante.destroy({
            where: {
                ci
            }
        });
        res.json({
            message: 'Estudiante eliminado satisfactoriamente',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
};

export async function actualizarEstudiante(req, res) {
    const { ci } = req.params;
    const { nombre, apellido, clave, id_detallecurso } = req.body;
    const estudiantes = await Estudiante.findAll({
        attributes: ['ci', 'nombre', 'apellido', 'clave', 'id_detallecurso'],
        where: {
            ci
        }
    });
    if (estudiantes.length > 0) {
        estudiantes.forEach(async estudiante => {
            await estudiante.update({
                nombre,
                apellido,
                clave,
                id_detallecurso
            });
        })
    }
    return res.json({
        message: 'Los datos del estudiante se han actualizado correctamente',
        data: estudiantes
    });
};

export async function getEstudianteByDetalle(req, res) {
    const {id_detallecurso}=req.params;
    try{
        const estudiantes =await Estudiante.findAll({
            attributes:['ci','nombre','apellido','clave','id_detallecurso'],
            where:{id_detallecurso},
            include: [{
                model: Detallecurso,
                include:[{
                    model:Carrera
                },{
                    model:Semestre
                },{
                    model:Paralelo
                }]
            }]
        });
        if(estudiantes){
            res.json({
                estudiantes
            });
        }else{
            console.log("No existe ese registro");
        }
    }catch(e){
        console.log(e);
    }
    
};







import Carrera from '../modelos/Carrera';

export async function createCarrera(req, res) {
    const { id_carrera, descripcion } = req.body;
    const nuevoCarrera = await Carrera.create({
        id_carrera,
        descripcion
    }, {
        fields: ['id_carrera', 'descripcion']
    });
    if (nuevoCarrera) {
        return res.json({
            message: 'Se ha creado una nueva carrera',
            data: nuevoCarrera
        });
    }
};

export async function getCarrera(req, res) {
    const carrera = await Carrera.findAll();
    return res.json({
        data: carrera
    });
};

export async function getOneCarrera(req, res) {
    const { id_carrera } = req.params;
    const carrera = await Carrera.findOne({
        where: { id_carrera },
        attributes: ['id_carrera', 'descripcion']
    });
    res.json({
        data: carrera
    });
};

export async function deleteCarrera(req, res) {
    const { id_carrera } = req.params;
    Carrera.destroy({
        where: { id_carrera }
    });
    res.json({
        message: 'Se ha eliminado la carrera'
    });
};

export async function updateCarrera(req, res) {
    const { id_carrera } = req.params;
    const { descripcion } = req.body;
    const carrera=await Carrera.findOne({
        attributes: ['id_carrera', 'descripcion'],
        where: { id_carrera }
    });
    const updateCarrera = await Carrera.update({
        descripcion
    }, {
        where: { id_carrera }
    });
    res.json({
        message: 'Se ha actualizado correctamente',
        data:carrera,
        updateCarrera
    });
};

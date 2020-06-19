import Paralelo from '../modelos/Paralelo';

export async function createParalelo(req, res) {
    const { id_paralelo, descripcion } = req.body;
    const nuevoParalelo = await Paralelo.create({
        id_paralelo,
        descripcion
    }, {
        fields: ['id_paralelo', 'descripcion']
    });
    if (nuevoParalelo) {
        return res.json({
            message: 'Se ha creado un nuevo paralelo',
            data: nuevoParalelo
        });
    }
};

export async function getParalelo(req, res) {
    const paralelo = await Paralelo.findAll();
    return res.json({
        data: paralelo
    });
};

export async function getOneParalelo(req, res) {
    const { id_paralelo } = req.params;
    const paralelo = await Paralelo.findOne({
        where: { id_paralelo },
        attributes: ['id_paralelo', 'descripcion']
    });
    res.json({
        data: paralelo
    });
};

export async function deleteParalelo(req, res) {
    const { id_paralelo } = req.params;
    Paralelo.destroy({
        where: { id_paralelo }
    });
    res.json({
        message: 'Se ha eliminado el paralelo'
    });
};

export async function updateParalelo(req, res) {
    const { id_paralelo } = req.params;
    const { descripcion } = req.body;
    Paralelo.findOne({
        attributes: ['id_paralelo', 'descripcion'],
        where: { id_paralelo }
    });
    const updateParalelo = await Paralelo.update({
        descripcion
    }, {
        where: { id_paralelo }
    });
    res.json({
        message: 'Se ha actualizado correctamente',
        updateParalelo
    });
};
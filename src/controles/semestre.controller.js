import Semestre from '../modelos/Semestre';

export async function createSemestre(req, res) {
    const {id_semestre,descripcion}= req.body;
    const nuevoSemestre= await Semestre.create({
        id_semestre,
        descripcion
    },{
        fields:['id_semestre','descripcion']
    });
    if(nuevoSemestre){
        return res.json({
            message:'Se ha creado un nuevo semestre',
            data:nuevoSemestre
        });
    }
};

export async function getSemestre(req, res) {
    const semestre= await Semestre.findAll();
    return res.json({
        data:semestre
    });
};

export async function getOneSemestre(req, res) {
    const {id_semestre}=req.params;
    const semestre=await Semestre.findOne({
        where:{id_semestre},
        attributes:['id_semestre','descripcion']
    });
    res.json({
        data:semestre
    });
};

export async function deleteSemestre(req, res) {
    const {id_semestre}= req.params;
    Semestre.destroy({
        where:{id_semestre}
    });
    res.json({
        message:'Se ha eliminado el paralelo'
    });
};

export async function updateSemestre(req, res) {
    const {id_semestre}=req.params;
    const {descripcion}=req.body;
    Semestre.findOne({
        attributes:['id_semestre','descripcion'],
        where:{id_semestre}
    });
    const updateSemestre=await Semestre.update({
        descripcion
    },{
        where:{id_semestre}
    });
    res.json({
        message:'Se ha actualizado correctamente',
        updateSemestre
    });
};
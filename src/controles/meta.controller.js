import Meta from '../modelos/Meta';

export async function createMeta(req, res) {
    const { id_meta, fecha_inicio, fecha_fin, premio } = req.body;
    try {
        const nuevaMeta = await Meta.create({
            id_meta,
            fecha_inicio,
            fecha_fin,
            premio
        }, {
            fields: ['id_meta', 'fecha_inicio', 'fecha_fin', 'premio']
        });
        if (nuevaMeta) {
            return res.json({
                message: 'Se ha creado una nueva meta',
                data: nuevaMeta
            });
        }
    } catch (e) {
        console.log(e);
    }
};

export async function getMeta(req, res) {
    try {
        const meta = await Meta.findAll();
        return res.json({
            data: meta
        })
    } catch (e) {
        console.log(e);
    }
};

export async function getOneMeta(req, res) {
    const { id_meta } = req.params;
    const meta = await Meta.findOne({
        where: { id_meta },
        attributes: ['id_meta', 'fecha_inicio', 'fecha_fin', 'premio']
    });
    res.json({
        data: meta
    });

};

export async function deleteMeta(req, res) {
    const {id_meta}=req.params;
    Meta.destroy({
        where:{id_meta}
    });
    res.json({message:'Se ha eliminado la meta'});
};

export async function updateMeta(req, res) {
    const {id_meta}=req.params;
    const{fecha_inicio,fecha_fin,premio}=req.body;
    const resultadoMeta=await Meta.findOne({
        attributes:['id_meta','fecha_inicio','fecha_fin','premio'],
        where:{id_meta}
    });
    const updateMeta=await Meta.update({
        fecha_inicio,
        fecha_fin,
        premio
    },{
        where:{id_meta}
    });
    res.json({
        message:'Se ha actualizado correctamente',
        data:resultadoMeta
    })
    
};
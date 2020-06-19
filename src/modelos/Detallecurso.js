import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Paralelo from '../modelos/Paralelo';
import Semestre from '../modelos/Semestre';
import Carrera from '../modelos/Carrera';


 const Detallecurso=sequelize.define('detallecurso',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    id_carrera:{
        type:Sequelize.INTEGER
    },
    id_semestre:{
        type:Sequelize.INTEGER
    },
    id_paralelo:{
        type:Sequelize.INTEGER
    }
    
},{
    timestamps:false
});

//relacion entre Paralelo-detallecurso
Detallecurso.hasMany(Paralelo,{foreignKey:'id_paralelo',sourceKey:'id_paralelo'});
Paralelo.belongsTo(Detallecurso,{foreignKey:'id_paralelo',sourceKey:'id_paralelo'});

//relacion entre semestre-detallecurso
Detallecurso.hasMany(Semestre,{foreignKey:'id_semestre',sourceKey:'id_semestre'});
Semestre.belongsTo(Detallecurso,{foreignKey:'id_semestre',sourceKey:'id_semestre'});

//relacion entre carrera-detallecurso
Detallecurso.hasMany(Carrera,{foreignKey:'id_carrera',sourceKey:'id_carrera'});
Carrera.belongsTo(Detallecurso,{foreignKey:'id_carrera',sourceKey:'id_carrera'});


export default Detallecurso;
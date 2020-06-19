import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Detallecurso from './Detallecurso';

const Estudiante=sequelize.define('estudiante',{
    ci:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:Sequelize.STRING
    },
    apellido:{
        type:Sequelize.STRING
    },
    clave:{
        type:Sequelize.STRING
    },
    id_detallecurso:{
        type:Sequelize.INTEGER
    }
},{
    timestamps:false
});

//relacion con estudiante-detallecurso
Detallecurso.hasMany(Estudiante,{foreignKey:'id_detallecurso',sourceKey:'id'});
Estudiante.belongsTo(Detallecurso,{foreignKey:'id_detallecurso', targetKey:'id'});


export default Estudiante;
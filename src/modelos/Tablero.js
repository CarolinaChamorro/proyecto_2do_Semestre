import Sequelize from 'sequelize';
import {sequelize}from "../database/database";
import Estudiante from './Estudiante';
import Meta from './Meta';


const Tablero=sequelize.define('tablero',{
    posi_tablero:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    totalbotellas:{
        type:Sequelize.INTEGER
    },
    id_meta:{
        type:Sequelize.INTEGER
    },
    ci:{
        type:Sequelize.INTEGER
    }
},{
    timestamps:false
});
//relacion con tablero-estudiante
Tablero.hasMany(Estudiante,{foreignKey:'ci',sourceKey:'ci'});
Estudiante.belongsTo(Tablero,{foreignKey:'ci',sourceKey:'ci'});

//relación meta-tablero
Tablero.hasOne(Meta,{foreignKey:'id_meta',sourceKey:'id_meta'});
Meta.belongsTo(Tablero,{foreignKey:'id_meta',sourceKey:'id_meta'});


export default Tablero;
import Sequelize, { HasOne } from 'sequelize';
import {sequelize} from "../database/database";


const Meta=sequelize.define('metas',{
    id_meta:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    fecha_inicio:{
        type:Sequelize.DATE
    },
    fecha_fin:{
        type:Sequelize.DATE
    },
    premio:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
});



export default Meta;
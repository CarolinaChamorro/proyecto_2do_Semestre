import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Paralelo=sequelize.define('paralelo',{
id_paralelo:{
type:Sequelize.INTEGER,
primaryKey:true
},
descripcion:{
    type:Sequelize.STRING
}
},{
    timestamps:false
});



export default Paralelo;
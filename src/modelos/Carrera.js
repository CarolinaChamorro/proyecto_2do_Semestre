import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Carrera=sequelize.define('carrera',{
id_carrera:{
type:Sequelize.INTEGER,
primaryKey:true
},
descripcion:{
    type:Sequelize.STRING
}
},{
    timestamps:false
});



export default Carrera;
import Sequelize from 'sequelize';
import {sequelize} from '../database/database';


const Semestre=sequelize.define('semestre',{
id_semestre:{
type:Sequelize.INTEGER,
primaryKey:true
},
descripcion:{
    type:Sequelize.STRING
}
},{
    timestamps:false
});



export default Semestre;
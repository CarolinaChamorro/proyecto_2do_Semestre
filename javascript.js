
//funciones  de  ocultamiento de los  div 
             function ingresaradministrador(){
                
                document.getElementById('Iniciosesion1').style.display ='';
                document.getElementById('inicioprincipa').style.display ='none';

             }





             function ingresarusaurio(){
                document.getElementById('Iniciosesion').style.display ='';
                document.getElementById('inicioprincipa').style.display ='none';
                
                 

             }




             function Iniciosesion() {
         //esconder
            document.getElementById('Iniciosesion').style.display ='none';
            document.getElementById('Registrarse').style.display ='none';  
                 
            document.getElementById('menuUsuario').style.display ='';
            
            
          }



          function Iniciosesion2() {
         //esconder
            document.getElementById('Iniciosesion1').style.display ='none';
            document.getElementById('Registrarse').style.display ='none';  
            

            document.getElementById('menuAdministrador').style.display ='';
            
            
          }

          function Registrarse() {
         //esconder
            document.getElementById('Iniciosesion').style.display ='none';   
                       
            document.getElementById('menuUsuario').style.display ='none';
            document.getElementById('Registrarse').style.display ='';
            
          
            
           
          }
          
         // la funcionalidad  de regresar   y desapar cer  los div 
          function Reservaregresar() {
         //esconder
            document.getElementById('Registrarse').style.display ='none';
            document.getElementById('menuUsuario').style.display ='none';
            document.getElementById('Iniciosesion').style.display ='none';
            document.getElementById('Iniciosesion1').style.display ='none';
            document.getElementById('menuAdministrador').style.display ='none';
            
            document.getElementById('inicioprincipa').style.display ='';

            
            
           
            
            
          }

          Reservaregresar();

      

          
            function Usuario1(usuario, apellido, semestre, carrera,paralelo,contraseña) {
                    
                    this.usuario = usuario;
                    this.apellido = apellido;
                    this.semestre = semestre;
                    this.carrera = carrera;
                    this.paralelo = paralelo;
                    this.contraseña = contraseña;
            
            }
            //los datos ya ingresados  por el usuario    solo de ejemplo   pero tambien vale registrar
            var usuarios = [
                    new Usuario1("andy","apellido","quinto", "desarrollo", "A","12345")
                   
            
            ];

            function registrarusuario() {
                document.getElementById("errornombre").style.display ="none";
                document.getElementById("errorapellido").style.display ="none";
                document.getElementById("errorsemestre").style.display ="none";
                document.getElementById("errorcarrera").style.display ="none";
                document.getElementById("errorparalelo").style.display ="none";
                document.getElementById("errorcontraseña1").style.display ="none";
                document.getElementById("errorcontraseña2").style.display ="none";
                document.getElementById('mensajeerror').style.display ="none";

                var msgerror=document.getElementById('mensajeerror');
                var ape = document.getElementById("apellido").value;
                var usuar = document.getElementById("usuario1").value;
                var semes = document.getElementById("semestre").value;
                var carre = document.getElementById("carrera").value;
                var para = document.getElementById("paralelo").value;
                var contra = document.getElementById("contraseña1").value;
                var contra2 = document.getElementById("contraseña2").value;
                
                if (usuar == ""){
                    document.getElementById("errornombre").style.display ="";
                    return;
                }
                if (ape == ""){
                    document.getElementById("errorapellido").style.display ="";
                    return;
                }
                if (semes == ""){
                    document.getElementById("errorsemestre").style.display ="";
                    return;
                }
                if (carre == ""){
                    document.getElementById("errorcarrera").style.display ="";
                    return;
                }
                if (para == ""){
                    document.getElementById("errorparalelo").style.display ="";
                    return;
                }
                if (contra == ""){
                    document.getElementById("errorcontraseña1").style.display ="";
                   return;
                   
                }
               
                if (contra != contra2){
                    document.getElementById("errorcontraseña2").style.display ="";
                    return;
                }
                document.getElementById("validacion").value= "true";

                for (var i =0; i<usuarios.length;i++)
                {
                    var itemU=usuarios[i];
                    var usuar = document.getElementById("usuario1").value;
                    var msgerror=document.getElementById('mensajeerror');

                    if (usuar == itemU.usuario) {
                        msgerror.innerHTML="USUARIO REPETIDO";
                        msgerror.style.display="";
                        return ;
                    }
                    


                }
                usuarios.push(new Usuario1(usuar,ape, semes, carre, para,contra));
                msgerror.innerHTML="GUARDADO EXITOSO";
                msgerror.style.display="";                    
            }

                function buscarusuario(item) {
                    var usuar = document.getElementById("usuario1").value;
                    var msgerror=document.getElementById('mensajeerror');

                    if (usuar == item.usuario) {
                        msgerror.innerHTML="USUARIO REPETIDO";
                        msgerror.style.display="";
                        document.getElementById("validacion").value= "false";
                        return ;
                    }
                    document.getElementById("validacion").value= "true";
                }
                
            

            function buscarusuariocontraseña(item) {
                var strusuario = document.getElementById("usuario").value;
                var strcontraseña = document.getElementById("contraseña").value;
                    if (strusuario == item.usuario && strcontraseña==item.contraseña ) {
                        Iniciosesion();
                        return ;
                    }
                }




                function iniciarsesion() {
                document.getElementById("errorUsuarioI").style.display ="none";
                document.getElementById("errorContraI").style.display ="none";

                var strusuario = document.getElementById("usuario").value;
                var strcontraseña = document.getElementById("contraseña").value;
                
                if (strusuario == ""){
                    document.getElementById("errorUsuarioI").style.display ="";
                    return;
                }
                if (strcontraseña == ""){
                    document.getElementById("errorContraI").style.display ="";
                    return;
                }
                usuarios.forEach(buscarusuariocontraseña);

            }
    
//informacion  del administrador  con los datos  

function Usuario2(usuario2,contraseña2) {
        
        this.usuario2 = usuario2;           
        this.contraseña2 = contraseña2;

}

//estos datos  son estaticos  del administrador esta ya es su contraseña   y usuario
var usuarios2 = [
        new Usuario2("administrador","12345"),
       

];

    function buscarusuario2(item) {
        var usuar2 = document.getElementById("usuario2").value;
        var msgerror2=document.getElementById('mensajeerror2');

        if (usuar2 == item.usuario2) {
            msgerror2.innerHTML="USUARIO REPETIDO";
            msgerror2.style.display="";
            document.getElementById("validacion2").value= "false";
            return ;
        }
        document.getElementById("validacion2").value= "true";
    }
    



function buscarusuariocontraseña2(item) {
    var strusuario2 = document.getElementById("usuario2").value;
    var strcontraseña2 = document.getElementById("contraseña3").value;
        if (strusuario2 == item.usuario2 && strcontraseña2==item.contraseña2 ) {
            Iniciosesion2();
            return ;
        }
    }




    function iniciarsesion2() {
    document.getElementById("errorUsuarioI2").style.display ="none";
    document.getElementById("errorContraI2").style.display ="none";

    var strusuario2 = document.getElementById("usuario2").value;
    var strcontraseña2 = document.getElementById("contraseña3").value;
    
    if (strusuario2 == ""){
        document.getElementById("errorUsuarioI2").style.display ="";
        return;
    }
    if (strcontraseña2 == ""){
        document.getElementById("errorContraI2").style.display ="";
        return;
    }
    usuarios2.forEach(buscarusuariocontraseña2);

}

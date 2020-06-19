
document.getElementById("traer").addEventListener("click",function(){
    axios.get('http://localhost:3333/api/tablero', {
        responseType: 'json'
      })
        .then(function(res) {
          if(res.status==200) {
            console.log(res.data.data[2].meta.premio);
            let mensaje=document.getElementById("mensaje");
        mensaje.innerHTML=res.data.data[0].estudiantes[0].nombre
          }
        }).catch(err=>{
            console.log(err)});
})


document.getElementById("poner").addEventListener("click",function(){ 
    axios.post('http://localhost:3333/api/carrera/4', {
        descripcion: 'Marketing'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
});

document.getElementById('actualizar').addEventListener("click",function regresar(){
      let h=document.getElementById('texto');
    axios.put('http://localhost:3333/api/tablero/4', {
    totalbotellas: h.value
  })
  .then(res => {
    console.log(res.data.data.totalbotellas);
    
        if(mensaje ===h){
          let mensaje=document.getElementById("mensaje");
          mensaje.innerHTML=res.data.data
        }else{
          mensaje=h;
        }
  })
  .catch(error => {
    console.log(error);
  })
});












const TareaEvento=document.getElementById("TareaEvento")
const fechaPrioridad=document.getElementById("fechaPrioridad")
const selector=document.getElementById("selector")
const botonCrear=document.getElementById("botonCrear")
const textAdvert=document.getElementById("textAdvert")
const contenedorTareas=document.getElementById("contenedorTareas")

let listaTareas=[];
let listaEventos=[];

    botonCrear.addEventListener( "click", function() {
        
       
        if (selector.value=="tarea"){
        let tareas={
            tarea:TareaEvento.value,
            fecha:fechaPrioridad.value,

        }
        listaTareas.push(tareas) 
        let list=document.createElement("div") 
        list.innerHTML = listaTareas.value;
        contenedorTareas.appendChild(list)


        console.log(tareas); 

        } else if (selector.value=="evento") {
            let  eventos={
                eventoNomb:TareaEvento.value,
                prioridad:fechaPrioridad.value,
            }
            listaEventos.push(eventos)  
        } else if (selector.value=="opcion"){
            textAdvert.innerHTML="Selecciona una opción(tarea o evento) para poder guardar"
        }
    
    })  





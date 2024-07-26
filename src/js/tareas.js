const TareaEvento = document.getElementById("TareaEvento")
const fechaPrioridad = document.getElementById("fechaPrioridad")
const selector = document.getElementById("selector")
const botonCrear = document.getElementById("botonCrear")
const textAdvert = document.getElementById("textAdvert")
const contenedorTareas = document.getElementById("contenedorTareas")
let listaPrevTareas = [];
let listaPrevEvents = [];
listaPrevEvents = JSON.parse(localStorage.getItem("listaEventos"))
let listaTareas = [];
let listaEventos = [];

botonCrear.addEventListener("click", function () {


    if (selector.value == "tarea") {
        let validador = TareaEvento.value.trim();
        let validadorP = fechaPrioridad.value.trim();

        if (validador.length == 0 || validadorP.length == 0) {
            alert("Por favor, escribe una tarea.");
        }else{
            let tareaFecha = TareaEvento.value + " " + fechaPrioridad.value; //concatena los valores
        listaTareas.push(tareaFecha) //envia los datos a una lista
        localStorage.setItem("listaTareas", JSON.stringify(listaTareas)) //envia esta lista a local storage

        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorTareas.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className = "contenedorLista"

        /// creamos etiquetas li donde se almacena cada tarea
        let task = document.createElement("li") // crea una etiqueta li donde luego se almacena cada tarea
        list.appendChild(task)

        task.innerHTML = tareaFecha; //muestra el valor almacenado en tareaFecha en formato de lista (list=una nueva etiqueta li)
        /// Crea un boton Eliminar
        let btnEliminar = document.createElement("button") // esta variable me permite crear un boton cada vez que se ejecuta el evento
        btnEliminar.innerHTML = "Eliminar tarea" // muestra el boton con su nombre
        list.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
        //Creo un evento para el boton Eliminar
        btnEliminar.addEventListener("click", function () {

           let valores = JSON.parse(localStorage.getItem("listaTareas"))||[] ///para que se comporte como un array

           console.log("LOCAL STORAGE",valores);

           console.log("ESTE ES EL TASK ",task.textContent);

            const listaActualizada = valores.filter(tarea => tarea != task.textContent);
           
            console.log("ESTA ES LA LISTA ACTUALIZADA",listaActualizada);
            list.remove()
            localStorage.setItem("listaTareas", JSON.stringify(listaActualizada))

            console.log(listaActualizada);
            location.reload()
        })
        let taskList=JSON.parse(localStorage.getItem("listaTareas"))||[]

            if (taskList.length===0){
                localStorage.removeItem("listaTareas")
            }


        // Creo un input para Editar
        let inputEdit = document.createElement("input")
        list.appendChild(inputEdit);
        // Creo un boton Editar
        let btnEditar = document.createElement("button")
        btnEditar.innerHTML = "Editar tarea"
        list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar

        btnEditar.addEventListener("click", function () {
            let valores = JSON.parse(localStorage.getItem("listaTareas"))||[] ///para que se comporte como un array
            for (let index = 0; index < valores.length; index++) {
                console.log(valores[index]);
                console.log(task.textContent);
                if (valores[index] === task.textContent) {
                    valores[index] = inputEdit.value
                    console.log(valores[index]);
                }
            }

            let listaAct = valores.filter(tarea => tarea != task.innerHTML)
            console.log(listaAct);
            localStorage.setItem("listaTareas", JSON.stringify(listaAct))
            console.log(listaTareas);
            task.innerHTML = inputEdit.value;
            location.reload()

        })
        }


    } else if (selector.value == "evento") {
        let validador = TareaEvento.value.trim();
        let validadorP = fechaPrioridad.value.trim();

        if (validador.length == 0 || validadorP.length == 0) {
            alert("Por favor, escribe una evento.");
        }else{
            let eventoPrioridad = TareaEvento.value + " " + fechaPrioridad.value
            listaEventos.push(eventoPrioridad)
            localStorage.setItem("listaEventos", JSON.stringify(listaEventos))
    
            let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
            contenedorEventos.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
            list.className = "contenedorLista"
    
            /// creamos etiquetas li donde se almacena cada tarea
            let event = document.createElement("li") // crea una etiqueta li donde luego se almacena cada tarea
            list.appendChild(event)
            event.innerHTML = eventoPrioridad; //muestra el valor almacenado en tareaFecha en formato de lista (list=una nueva etiqueta li)
            /// Crea un boton Eliminar
            let btnEliminar = document.createElement("button") // esta variable me permite crear un boton cada vez que se ejecuta el evento
            btnEliminar.innerHTML = "Eliminar evento" // muestra el boton con su nombre
            list.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
            //Creo un evento para el boton Eliminar
            btnEliminar.addEventListener("click", function () {
                const listaActualizada = listaEventos.filter(evento => evento != event.textContent);
                localStorage.setItem("listaEventos", JSON.stringify(listaActualizada))
                list.remove()

            })
            // Creo un input para Editar
            let inputEdit = document.createElement("input")
            list.appendChild(inputEdit);
            // Creo un boton Editar
            let btnEditar = document.createElement("button")
            btnEditar.innerHTML = "Editar evento"
            list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
            //Creo un evento para el boton Editar
            btnEditar.addEventListener("click", function () {
                for (let index = 0; index < listaEventos.length; index++) {
                    if (listaEventos[index] === event.textContent) {
                        listaEventos[index] = inputEdit.value
                    }
                }
                let listaActualizada = listaEventos.filter(evento => evento != event.innerHTML)
                localStorage.setItem("listaEventos", JSON.stringify(listaActualizada))
                event.innerHTML = inputEdit.value;
    
            })
        }
       


    } else if (selector.value == "opcion") {
        textAdvert.innerHTML = "Selecciona una opción(tarea o evento) para poder guardar"
    }
})

function traerLocalT() {
    listaPrevTareas = JSON.parse(localStorage.getItem("listaTareas"))
    // una vez traidos los datos desde el local storage necesito mostrar estos datos en el mismo formato en que estaban inicialmente
    for (let index = 0; index < listaPrevTareas.length; index++) {
        listaTareas[index] = listaPrevTareas[index]
        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorTareas.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className = "contenedorLista"

        /// creamos etiquetas li donde se almacena cada tarea
        let task = document.createElement("li") // crea una etiqueta li donde luego se almacena cada tarea
        list.appendChild(task)
        task.innerHTML = listaTareas[index]; //muestra el valor almacenado en tareaFecha en formato de lista (list=una nueva etiqueta li)
        /// Crea un boton Eliminar
        let btnEliminar = document.createElement("button") // esta variable me permite crear un boton cada vez que se ejecuta el evento
        btnEliminar.innerHTML = "Eliminar tarea" // muestra el boton con su nombre
        list.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
        //Creo un evento para el boton Eliminar
        btnEliminar.addEventListener("click", function () {

            let valores = JSON.parse(localStorage.getItem("listaTareas"))||[] ///para que se comporte como un array
 
            console.log("LOCAL STORAGE",valores);
 
            console.log("ESTE ES EL TASK ",task.textContent);
 
             const listaActualizada = valores.filter(tarea => tarea != task.textContent);
            
 
             console.log("ESTA ES LA LISTA ACTUALIZADA",listaActualizada);
             list.remove()
             localStorage.setItem("listaTareas", JSON.stringify(listaActualizada))
             location.reload()
         })
         let taskList=JSON.parse(localStorage.getItem("listaTareas"))||[]

             if (taskList.length===0){
                 localStorage.removeItem("listaTareas")
             }

        // Creo un input para Editar
        let inputEdit = document.createElement("input")
        list.appendChild(inputEdit);
        // Creo un boton Editar
        let btnEditar = document.createElement("button")
        btnEditar.innerHTML = "Editar tarea"
        list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar
        btnEditar.addEventListener("click", function () {
            for (let index = 0; index < listaTareas.length; index++) {
                if (listaTareas[index] === task.textContent) {
                    listaTareas[index] = inputEdit.value
                    console.log(listaTareas[index]);
                }
            }

            let listaActualizada = listaTareas.filter(tarea => tarea != task.innerHTML)
            localStorage.setItem("listaTareas", JSON.stringify(listaActualizada))
            task.innerHTML = inputEdit.value;
            location.reload()
        })

    }
}


function traerLocalE() {
    for (let index = 0; index < listaPrevEvents.length; index++) {
        listaEventos[index] = listaPrevEvents[index]
        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorEventos.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className = "contenedorLista"
        /// creamos etiquetas li donde se almacena cada tarea
        let event = document.createElement("li") // crea una etiqueta li donde luego se almacena cada tarea
        list.appendChild(event)
        event.innerHTML = listaEventos[index]; //muestra el valor almacenado en tareaFecha en formato de lista (list=una nueva etiqueta li)
        /// Crea un boton Eliminar
        let btnEliminar = document.createElement("button") // esta variable me permite crear un boton cada vez que se ejecuta el evento
        btnEliminar.innerHTML = "Eliminar evento" // muestra el boton con su nombre
        list.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
        //Creo un evento para el boton Eliminar
        btnEliminar.addEventListener("click", function () {
            const listaActualizada = listaEventos.filter(tarea => tarea != event.textContent);
            localStorage.setItem("listaEventos", JSON.stringify(listaActualizada))
            list.remove()
        })
        // Creo un input para Editar
        let inputEdit = document.createElement("input")
        list.appendChild(inputEdit);
        // Creo un boton Editar
        let btnEditar = document.createElement("button")
        btnEditar.innerHTML = "Editar evento"
        list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar
        btnEditar.addEventListener("click", function () {
            for (let index = 0; index < listaEventos.length; index++) {
                if (listaEventos[index] === event.textContent) {
                    listaEventos[index] = inputEdit.value
                }
            }
            let listaActualizada = listaEventos.filter(evento => evento != event.innerHTML)
            localStorage.setItem("listaEventos", JSON.stringify(listaActualizada))
            event.innerHTML = inputEdit.value;

        })
    }
}


traerLocalT()
traerLocalE()



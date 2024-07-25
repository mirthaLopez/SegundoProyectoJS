const TareaEvento = document.getElementById("TareaEvento")
const fechaPrioridad = document.getElementById("fechaPrioridad")
const selector = document.getElementById("selector")
const botonCrear = document.getElementById("botonCrear")
const textAdvert = document.getElementById("textAdvert")
const contenedorTareas = document.getElementById("contenedorTareas")
let listaPrevTareas = [];
listaPrevTareas = JSON.parse(localStorage.getItem("listaTareas"))
let listaPrevEvents = [];
listaPrevEvents = JSON.parse(localStorage.getItem("listaEventos"))
let listaTareas = [];
let listaEventos = [];

botonCrear.addEventListener("click", function () {


    if (selector.value == "tarea") {
        let tareaFecha = TareaEvento.value + " " + fechaPrioridad.value; //concatena los valores
        listaTareas.push(tareaFecha) //envia los datos a una lista
        localStorage.setItem("listaTareas", JSON.stringify(listaTareas)) //envia esta lista a local storage

        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorTareas.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className="contenedorLista"

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
            const listaActualizada = listaTareas.filter(tarea => tarea != task.textContent);
            localStorage.setItem("listaTareas", JSON.stringify(listaActualizada) )
            list.remove()
        })
        // Creo un input para Editar
        let inputEdit=document.createElement("input")
        list.appendChild(inputEdit);
        // Creo un boton Editar
        let btnEditar= document.createElement("button")
        btnEditar.innerHTML="Editar tarea"
        list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar

        btnEditar.addEventListener("click", function () {
           for (let index = 0; index < listaTareas.length; index++) {
             if ( listaTareas[index]=== task.textContent) {
                listaTareas[index]=inputEdit.value
                console.log(listaTareas[index]);
             }
           }

           let listaActualizada=listaTareas.filter(tarea => tarea != task.innerHTML)
           localStorage.setItem("listaTareas", JSON.stringify(listaActualizada) )
           task.innerHTML=inputEdit.value;

        })
        
    } else if (selector.value == "evento") {
        let eventoPrioridad = TareaEvento.value + " " + fechaPrioridad.value
        listaEventos.push(eventoPrioridad)
        localStorage.setItem("listaEventos", JSON.stringify(listaEventos))

        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorEventos.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className="contenedorLista"

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
            localStorage.setItem("listaEventos", JSON.stringify(listaActualizada) )
            list.remove()
        })
        // Creo un input para Editar
        let inputEdit=document.createElement("input")
        list.appendChild(inputEdit);
        // Creo un boton Editar
        let btnEditar= document.createElement("button")
        btnEditar.innerHTML="Editar evento"
        list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar
        btnEditar.addEventListener("click", function () {
            event.innerHTML=inputEdit.value;
        })


    } else if (selector.value == "opcion") {
        textAdvert.innerHTML = "Selecciona una opción(tarea o evento) para poder guardar"
    }
})

function traerLocalT() {
    // una vez traidos los datos desde el local storage necesito mostrar estos datos en el mismo formato en que estaban inicialmente
    for (let index = 0; index < listaPrevTareas.length; index++) {
        listaTareas[index] = listaPrevTareas[index]
        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorTareas.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className="contenedorLista"

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
            const listaActualizada = listaTareas.filter(tarea => tarea != task.textContent);
            localStorage.setItem("listaTareas", JSON.stringify(listaActualizada) )
            list.remove()
        })
        // Creo un input para Editar
        let inputEdit=document.createElement("input")
        list.appendChild(inputEdit);
        // Creo un boton Editar
        let btnEditar= document.createElement("button")
        btnEditar.innerHTML="Editar tarea"
        list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar
        btnEditar.addEventListener("click", function () {
            task.innerHTML=inputEdit.value;
        })
        
    }
}
traerLocalT()

function traerLocalE() {
    for (let index = 0; index < listaPrevEvents.length; index++) {
        listaEventos[index] = listaPrevEvents[index]
        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorEventos.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className="contenedorLista"
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
            localStorage.setItem("listaEventos", JSON.stringify(listaActualizada) )
            list.remove()
        })
        // Creo un input para Editar
        let inputEdit=document.createElement("input")
        list.appendChild(inputEdit);
        // Creo un boton Editar
        let btnEditar= document.createElement("button")
        btnEditar.innerHTML="Editar evento"
        list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar
        btnEditar.addEventListener("click", function () {
            event.innerHTML=inputEdit.value;
            localStorage.setItem("listaTareas", JSON.stringify(event))
        })
    }
}
traerLocalE()
const TareaEvento = document.getElementById("TareaEvento")
const fechaPrioridad = document.getElementById("fechaPrioridad")
const selector = document.getElementById("selector")
const botonCrear = document.getElementById("botonCrear")
const contenedorTareas = document.getElementById("contenedorTareas")
const contenedorEventos = document.getElementById("contenedorEventos")
const textAdvert = document.getElementById("textAdvert");
const contadorTask = document.getElementById("contadorT")
const contadorEvento = document.getElementById("contadorE")
const userName = document.getElementById("userName");
let nombreUser = localStorage.getItem("name");
userName.innerHTML = nombreUser;
let contadorT = 0;
let contadorE = 0;
let listaTareas = [];
let listaEventos = [];


botonCrear.addEventListener("click", function () {
    if (selector.value == "tarea") {
        let validador = TareaEvento.value.trim();
        let validadorP = fechaPrioridad.value.trim();

        if (validador.length == 0 || validadorP.length == 0) {
            alert("Por favor, escribe una tarea.");
        } else {
            contadorT++;
            if (contadorT != 0) {
                contadorTask.innerHTML = "Pendientes " + +contadorT;
            }
            let tareaFecha = TareaEvento.value + " " + fechaPrioridad.value; //concatena los valores
            listaTareas.push(tareaFecha) //envia los datos a una lista
            localStorage.setItem("listaTareas", JSON.stringify(listaTareas)) //envia esta lista a local storage

            let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
            contenedorTareas.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
            list.className = "contenedorLista"

            /// creamos etiquetas li donde se almacena cada tarea
            let task = document.createElement("li") // crea una etiqueta li donde luego se almacena cada tarea
            list.appendChild(task);
            task.className="tarea"
            task.innerHTML = tareaFecha; //muestra el valor almacenado en tareaFecha en formato de lista (list=una nueva etiqueta li)
            /// Crea un boton Eliminar
            let btnEliminar = document.createElement("div") // esta variable me permite crear un boton cada vez que se ejecuta el evento
            btnEliminar.innerHTML = `<img class="papelera" src="src/img/papelera.webp">`;
            btnEliminar.className = "btnEliminar"
            list.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
            //Creo un evento para el boton Eliminar
            btnEliminar.addEventListener("click", function () {
                let valores = JSON.parse(localStorage.getItem("listaTareas")) || [] ///para que se comporte como un array
                const listaActualizada = valores.filter(tarea => tarea != task.textContent);
                list.remove()
                localStorage.setItem("listaTareas", JSON.stringify(listaActualizada))
                contadorT--;
                location.reload()
            })

            // Creo un input para Editar
            let inputEdit = document.createElement("input");
            list.appendChild(inputEdit);
            inputEdit.className="inputEdit"
            // Creo un boton Editar
            let btnEditar = document.createElement("div")
            btnEditar.innerHTML = `<img class="papelera" src="src/img/editIcon.webp">`;
            btnEditar.className = "btnEditar"
            list.appendChild(btnEditar)/// cada etiqueta li va a tener un boton editar
            //Creo un evento para el boton Editar

            btnEditar.addEventListener("click", function () {
                let validInput=inputEdit.value.trim();
                if (validInput.length > 0) {
                    let valores = JSON.parse(localStorage.getItem("listaTareas")) || [] ///para que se comporte como un array
                    for (let index = 0; index < valores.length; index++) {
                        if (valores[index] === task.textContent) {
                            valores[index] = inputEdit.value
                            console.log(valores[index]);
                        }
                    }
                    localStorage.setItem("listaTareas", JSON.stringify(valores))
                    console.log(listaTareas);
                    task.innerHTML = inputEdit.value;
                    location.reload()
                }
            })
            console.log(task.innerHTML);
        }

        
        

    } else if (selector.value == "evento") {
        let validador = TareaEvento.value.trim();
        let validadorP = fechaPrioridad.value.trim();

        if (validador.length == 0 || validadorP.length == 0) {
            alert("Por favor, escribe una evento.");
        } else {
            contadorE++;
            if (contadorE != 0) {
                contadorEvento.innerHTML = "Pendientes " + +contadorE;
            }
            let eventoPrioridad = TareaEvento.value + " " + fechaPrioridad.value
            listaEventos.push(eventoPrioridad)
            localStorage.setItem("listaEventos", JSON.stringify(listaEventos))

            let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
            contenedorEventos.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
            list.className = "contenedorLista"

            /// creamos etiquetas li donde se almacena cada tarea
            let event = document.createElement("li") // crea una etiqueta li donde luego se almacena cada tarea
            list.appendChild(event)
            event.className="tarea";
            event.innerHTML = eventoPrioridad; //muestra el valor almacenado en tareaFecha en formato de lista (list=una nueva etiqueta li)
            /// Crea un boton Eliminar
            let btnEliminar = document.createElement("div") // esta variable me permite crear un boton cada vez que se ejecuta el evento
            btnEliminar.innerHTML = `<img class="papelera" src="src/img/papelera.webp">`;
            btnEliminar.className = "btnEliminar"
            list.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
            //Creo un evento para el boton Eliminar
            btnEliminar.addEventListener("click", function () {
                let valores = JSON.parse(localStorage.getItem("listaEventos")) || [] ///para que se comporte como un array
                const listaActualizada = valores.filter(evento => evento != event.textContent);
                list.remove();
                localStorage.setItem("listaEventos", JSON.stringify(listaActualizada));
                contadorE--;
                location.reload();
            })
            // Creo un input para Editar
            let inputEdit = document.createElement("input")
            list.appendChild(inputEdit);
            inputEdit.className="inputEdit"

            // Creo un boton Editar
            let btnEditar = document.createElement("div")
            btnEditar.innerHTML = `<img class="papelera" src="src/img/editIcon.webp">`;
            btnEditar.className = "btnEditar"
            list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
            //Creo un evento para el boton Editar
            btnEditar.addEventListener("click", function () {
                let validInput=inputEdit.value.trim();
                if (validInput.length > 0) {
                    let valores = JSON.parse(localStorage.getItem("listaEventos")) || [] ///para que se comporte como un array
                    for (let index = 0; index < valores.length; index++) {
                        if (valores[index] === event.textContent) {
                            valores[index] = inputEdit.value;
                        }
                    }
                    localStorage.setItem("listaEventos", JSON.stringify(valores))
                    event.innerHTML = inputEdit.value;
                    location.reload()
                }

            })
        }

    } else if (selector.value == "opcion") {
        textAdvert.innerHTML = "Selecciona una opción(tarea o evento) para poder guardar"
    }
})

function traerLocalT() {
    let listaPrevTareas = JSON.parse(localStorage.getItem("listaTareas")) || [];
    // una vez traidos los datos desde el local storage necesito mostrar estos datos en el mismo formato en que estaban inicialmente
    for (let index = 0; index < listaPrevTareas.length; index++) {
        contadorT++;
        listaTareas[index] = listaPrevTareas[index]
        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorTareas.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className = "contenedorLista"

        /// creamos etiquetas li donde se almacena cada tarea
        let task = document.createElement("li") // crea una etiqueta li donde luego se almacena cada tarea
        list.appendChild(task)
        task.className="tarea"
        task.innerHTML = listaTareas[index]; //muestra el valor almacenado en tareaFecha en formato de lista (list=una nueva etiqueta li)
        /// Crea un boton Eliminar
        let btnEliminar = document.createElement("div") // esta variable me permite crear un boton cada vez que se ejecuta el evento
            btnEliminar.innerHTML = `<img class="papelera" src="src/img/papelera.webp">`;
            btnEliminar.className = "btnEliminar"
            list.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
        //Creo un evento para el boton Eliminar
        btnEliminar.addEventListener("click", function () {
            let valores = JSON.parse(localStorage.getItem("listaTareas")) || [] ///para que se comporte como un array
            const listaActualizada = valores.filter(tarea => tarea != task.textContent);
            list.remove()
            localStorage.setItem("listaTareas", JSON.stringify(listaActualizada))
            contadorT--;
            location.reload()
        })
        // Creo un input para Editar
        let inputEdit = document.createElement("input")
        list.appendChild(inputEdit);
        inputEdit.className="inputEdit"
        // Creo un boton Editar
        let btnEditar = document.createElement("div")
            btnEditar.innerHTML = `<img class="papelera" src="src/img/editIcon.webp">`;
            btnEditar.className = "btnEditar"
            list.appendChild(btnEditar) /// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar
        btnEditar.addEventListener("click", function () {
            let validInput=inputEdit.value.trim();
            if (validInput.length > 0){
                let valores = JSON.parse(localStorage.getItem("listaTareas")) || [] ///para que se comporte como un array
                for (let index = 0; index < valores.length; index++) {
                    console.log(valores[index]);
                    console.log(task.textContent);
                    if (valores[index] === task.textContent) {
                        valores[index] = inputEdit.value
                        console.log(valores[index]);
                    }
                }
                localStorage.setItem("listaTareas", JSON.stringify(valores))
                console.log(listaTareas);
                task.innerHTML = inputEdit.value;
                location.reload()
            }
        })

    }
    if (contadorT != 0) {
        contadorTask.innerHTML = "Pendientes " + +contadorT;
    } else if (contadorT == 0) {
        contadorTask.innerHTML = "No existen tareas pendientes ";
    }
}
traerLocalT()



function traerLocalE() {
    let listaPrevEvents = JSON.parse(localStorage.getItem("listaEventos")) || [];
    for (let index = 0; index < listaPrevEvents.length; index++) {
        contadorE++;
        listaEventos[index] = listaPrevEvents[index]
        let list = document.createElement("div") //permite crear div que almacena una lista y varios botones cada vez que se ejecuta el evento
        contenedorEventos.appendChild(list); //permite que las etiquetas li creadas automaticamente se muestre dentro del contenedor
        list.className = "contenedorLista"
        /// creamos etiquetas li donde se almacena cada tarea
        let event = document.createElement("li") // crea una etiqueta li donde luego se almacena cada tarea
        list.appendChild(event)
        event.className="tarea";
        event.innerHTML = listaEventos[index]; //muestra el valor almacenado en tareaFecha en formato de lista (list=una nueva etiqueta li)
        /// Crea un boton Eliminar
        let btnEliminar = document.createElement("div") // esta variable me permite crear un boton cada vez que se ejecuta el evento
        btnEliminar.innerHTML = `<img class="papelera" src="src/img/papelera.webp">`;
        btnEliminar.className = "btnEliminar"
        list.appendChild(btnEliminar); //btn eliminar es hijo de la etiqueta list
        //Creo un evento para el boton Eliminar
        btnEliminar.addEventListener("click", function () {
            let valores = JSON.parse(localStorage.getItem("listaEventos")) || [] ///para que se comporte como un array
            const listaActualizada = valores.filter(evento => evento != event.textContent);
            list.remove();
            localStorage.setItem("listaEventos", JSON.stringify(listaActualizada));
            contadorE--;
            location.reload();
        })
        // Creo un input para Editar
        let inputEdit = document.createElement("input")
        list.appendChild(inputEdit);
        inputEdit.className="inputEdit"

        // Creo un boton Editar
        let btnEditar = document.createElement("div")
        btnEditar.innerHTML = `<img class="papelera" src="src/img/editIcon.webp">`;
        btnEditar.className = "btnEditar"
        list.appendChild(btnEditar)/// cada etiqueta li va a tener un boton editar
        //Creo un evento para el boton Editar
        btnEditar.addEventListener("click", function () {
            let validInput=inputEdit.value.trim();
            if (validInput.length > 0) {
                let valores = JSON.parse(localStorage.getItem("listaEventos")) || [] ///para que se comporte como un array
                for (let index = 0; index < valores.length; index++) {
                    if (valores[index] === event.textContent) {
                        valores[index] = inputEdit.value;
                    }
                }
                localStorage.setItem("listaEventos", JSON.stringify(valores))
                event.innerHTML = inputEdit.value;
                location.reload()
            }
        })
    }
    if (contadorE != 0) {
        contadorEvento.innerHTML = "Pendientes " + +contadorE;
    } else if (contadorE == 0) {
        contadorEvento.innerHTML = "No existen eventos pendientes ";
    }
}
traerLocalE()
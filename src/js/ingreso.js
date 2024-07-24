const  botonComprobar=document.getElementById("botonComprobar");
const correoRegistrado=document.getElementById("correoRegistrado");
const contraseñaRegistrada=document.getElementById("contraseñaRegistrada");
const textoH1 = document.getElementById("texto");
const botonTareas= document.getElementById("botonTareas")
let listaUsuario=  JSON.parse(localStorage.getItem("lista"))
console.log(listaUsuario);


botonComprobar.addEventListener("click",function () {
    
    for (let index = 0; index < listaUsuario.length; index++) {
        const incluyeCorreo=listaUsuario[index].correo.includes(correoRegistrado.value);
        const incluyeContraseña=listaUsuario[index].contraseña.includes(contraseñaRegistrada.value);
        console.log(correoRegistrado.value, contraseñaRegistrada.value);
        console.log(listaUsuario[index].contraseña,listaUsuario[index].correo);
     
        if ( incluyeContraseña==true && incluyeCorreo==true) {
             let resultado= "Estas registrado, ya puedes acceder a tu cuenta!"
             textoH1.innerHTML=resultado;
             setTimeout(() => {
                location.href="registro.html"
             }, 3000);

             break;
        } else{
            let resultado= "Usuario no encontrado! revisa tus datos o registrate nuevamente"
            textoH1.innerHTML=resultado;
        }
    }
})
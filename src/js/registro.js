const nombre=document.getElementById("nombre");
const correo=document.getElementById("correo");
const contraseña=document.getElementById("contraseña");
const  boton=document.getElementById("boton");
const  textBienvenida=document.getElementById("textBienvenida");

const listaUsuario=[];
let nombreUser=nombre;
let correoUser=correo;
let contraseñaUser=contraseña;


boton.addEventListener("click", function() {
    let validName = nombre.value.trim();
    let validMail = correo.value.trim();
    let validPass = contraseña.value.trim();
    if (validName.length == 0 || validMail.length==0 || validPass.length==0) {
       textBienvenida.innerHTML="Opps! Parece que tus datos no son correctos, revisalos y vuelve a intentarlo"
    } else {
        const usuario= {
            nombre:nombreUser.value,
            correo:correoUser.value,
            contraseña:contraseñaUser.value
        }
        listaUsuario.push(usuario);
        localStorage.setItem('lista', JSON.stringify(listaUsuario));
        textBienvenida.innerHTML="Felicidades, tu registro fue existoso! <br> Te redirigiremos a la pagina de ingreso automaticamente... "

        setTimeout(() => {
            location.href="ingreso.html"
         }, 5000);
    }
})
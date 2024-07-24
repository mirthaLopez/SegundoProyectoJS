const nombre=document.getElementById("nombre");
const correo=document.getElementById("correo");
const contraseña=document.getElementById("contraseña");
const  boton=document.getElementById("boton");

const listaUsuario=[];
let nombreUser=nombre;
let correoUser=correo;
let contraseñaUser=contraseña;


boton.addEventListener("click", function() {
    
    const usuario= {
        nombre:nombreUser.value,
        correo:correoUser.value,
        contraseña:contraseñaUser.value
    }

    listaUsuario.push(usuario);
    localStorage.setItem('lista', JSON.stringify(listaUsuario));
    console.log(listaUsuario);
})
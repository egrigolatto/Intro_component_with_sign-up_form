const formulario = document.getElementById("card__formulario");
const inputs = document.querySelectorAll(".card__formulario-input");

const expresiones = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	// telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

const campos = {
    nombre: false,
    apellido: false,
    password: false,
    correo: false
}

const validarFormulario = (e) =>{
   switch ( e.target.name){
    case "nombre":
        validarCampo(expresiones.nombre, e.target, "nombre");
    break;
    case "apellido":
        validarCampo(expresiones.apellido, e.target, "apellido");
    break;
    case "correo":
        validarCampo(expresiones.correo, e.target, "correo");
    break;
    case "password":
        validarCampo(expresiones.password, e.target, "password");
    break;
   }
};


const validarCampo = (expresion,input,campo) =>{
     if(expresion.test(input.value)){
            document.getElementById(`card__formulario-${campo}`).classList.add("activo");
            document.getElementById(`card__formulario-${campo}`).classList.remove("activo");
            campos[campo] = true;
        } else {
            document.getElementById(`card__formulario-${campo}`).classList.add("activo");
            campos[campo] = false;
        }
};

inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(campos.nombre && campos.apellido && campos.password && campos.correo){
        formulario.reset();
        
    } else{
        document.getElementById("card__completarTodo").classList.add("card__completarTodo-activo");
        setTimeout(()=>{
            document.getElementById("card__completarTodo").classList.remove("card__completarTodo-activo");
        },3000);
    }
});
//---------------------------------------------1era etapa------------------------------------------

// Recopilamos datos del usuario, para su registro
function registrarUsuario() {
    alert("¡Bienvenido Por favor, ingrese sus datos:");

    const usuario = {};

    usuario.nombre = prompt("Nombre:");
    usuario.apellido = prompt("Apellido:");
    usuario.edad = parseInt(prompt("Edad:"));
    usuario.email = prompt("Correo electrónico:");

    alert("¡Gracias! Estos son tus datos:\n \n \n" +
        "Nombre: " + usuario.nombre + "\n" +
        "Apellido: " + usuario.apellido + "\n" +
        "Edad: " + usuario.edad + "\n" +
        "Correo electrónico: " + usuario.email);
    alert("Bienvenido, Juguemos!!");
}

registrarUsuario();

//---------------------------------------------2da etapa-------------------------------------------

alert("Debes adivinar el numero con la menor cantidad de intentos");
// Genera un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 30) + 1;

// Establece el número de Vidas y el número máximo de Vidas permitidos
let intentos = 0;
const Vidas = 3;

// Función para validar la entrada del usuario
function validarEntrada(numero) {
    if (isNaN(numero) || numero < 1 || numero > 30) {
        alert("Ingresa un número entre 1 y 30");
    return false;
    }
    return true;
}

while (intentos < Vidas) {
  // Le pedimos al usuario que adivine el número
    const numeroUsuario = parseInt(prompt("Adivina un número entre 1 y 30"));

  // Verifica si la entrada del usuario es válida
    if (validarEntrada(numeroUsuario)) {
    // Aumenta el número de intentos
    intentos++;

    // Compara el número del usuario con el número aleatorio
    if (numeroUsuario === numeroAleatorio) {
        alert(`¡Felicidades ${nombre,apellido}, adivinaste el número en ${intentos} intentos!   ٩(^‿^)۶`);
        break;
        } else if (numeroUsuario < numeroAleatorio) {
        alert("El número es mayor");
        } else {
        alert("El número es menor");
    }
}
}

// Si el usuario no adivina el número en el número máximo de intentos permitidos, muestra un mensaje de FRACASASTE.
if (intentos === Vidas) {
    alert(`Te haz quedado sin vidas FRACASASTE -${Vidas} \nEl número era ${numeroAleatorio}     (✖╭╮✖) `);
}
alert("Quieres Volver A Intentarlo.?\n Presiona F5 Para Reiniciar \n Presiona ENTER <-- para salir");

//---------------------------------------------3era etapa------------------------------------------

//Encuesta
alert("Te menti Tienes Que Realizar Una Encuesta  (-‿^)  ");

function Pregunta(texto, opciones) {
    this.texto = texto;
    this.opciones = opciones;
    this.respuestaUsuario = null;
}

// Crear un array  de la encuesta
let encuesta = [
    new Pregunta("¿Que eres?", ["humano", "maquina", "alienigena"]),
    new Pregunta("¿Cuál es tu pasatiempo favorito?", ["Leer", "Ver películas", "Jugar videojuegos"]),
    new Pregunta("¿Cuál es tu comida favorita?", ["Pizza", "Hamburguesa", "Sushi"]),
    new Pregunta("¿Cuál es tu color favorito?", ["Rojo", "Azul", "Verde"]),
    new Pregunta("¿Te gusto el juego?", ["Si", "Obvio", "Buenisimo"]),
];

// Hacer la encuesta y almacenar las respuestas del usuario en el objeto de la pregunta correspondiente
encuesta.forEach(function(pregunta) {
    let respuesta = prompt(pregunta.texto + " (" + pregunta.opciones.join(", ") + ")");
    pregunta.respuestaUsuario = respuesta;
});

// Mostrar las respuestas del usuario en la consola
/*encuesta.forEach(function(pregunta) {
alert(pregunta.texto + ": " + pregunta.respuestaUsuario);
});*/

Pregunta();
alert("Gracias por jugar con nosotros, vuelve pronto!!!");







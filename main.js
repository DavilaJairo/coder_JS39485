// Recopilamos datos del usuario, para su registro
function registrarUsuario() {
    alert("¡Bienvenido/a! Por favor, ingrese sus datos:");

    const usuario = {};

    usuario.nombre = prompt("Nombre:");
    usuario.apellido = prompt("Apellido:");
    usuario.edad = parseInt(prompt("Edad:"));
    usuario.email = prompt("Correo electrónico:");

    alert("¡Gracias! Estos son tus datos:\n" +
        "Nombre: " + usuario.nombre + "\n" +
        "Apellido: " + usuario.apellido + "\n" +
        "Edad: " + usuario.edad + "\n" +
        "Correo electrónico: " + usuario.email);
    alert("Bienvenido, Juguemos!!");
}

registrarUsuario();

alert("Debes adivinar el numero con la menor cantidad de intentos");
// Genera un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 20) + 1;

// Establece el número de Vidas y el número máximo de Vidas permitidos
let intentos = 0;
const Vidas = 3;

// Función para validar la entrada del usuario
function validarEntrada(numero) {
    if (isNaN(numero) || numero < 1 || numero > 20) {
        alert("Ingresa un número entre 1 y 20");
    return false;
    }
    return true;
}

while (intentos < Vidas) {
  // Le pedimos al usuario que adivine el número
    const numeroUsuario = parseInt(prompt("Adivina un número entre 1 y 20"));

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

// Si el usuario no adivina el número en el número máximo de intentos permitidos, muestra un mensaje de fracaso.
if (intentos === Vidas) {
    alert(`Te haz quedado sin vidas -${Vidas} \nEl número era ${numeroAleatorio}     (✖╭╮✖) `);
}
alert("Presiona F5 si quieres volver a intentarlo");









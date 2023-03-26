
// Recopilamos datos del usuario, para su registro
alert (" Registrate y Que Inicie el Juego");
let nombre   = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
let edad     = prompt ("Ingrese su edad");
let mail     = prompt ("Ingrese su mail");
alert ( "DATOS USUARIO"+ "\nsu nombre es   : "+ nombre +"\nsu apellido es   : "
    +apellido +"\nsu edad es  : " +edad +"\nsu mail es   : "+ mail);
alert("Bienvenido, Juguemos!!");
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
    alert(`Te haz quedado sin vidas -${Vidas} \nEl número era ${numeroAleatorio}.(✖╭╮✖) `);
}
alert("Presiona F5 si quieres volver a intentarlo");









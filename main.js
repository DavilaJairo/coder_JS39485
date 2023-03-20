//BIENVENIDOS AL JUEGO DE ADIVINA EL NUMERO

// Generamos un número aleatorio entre 1 y 15
const numeroAleatorio = Math.floor(Math.random() * 15) + 1;

// Le pedimos al usuario que adivine el número
let intentos = 1;

let bienvenido = "Hola Te Estaba Esperando, Deseas Jugar??";
    alert(bienvenido)

// Le damos algunas  instrucciones al  usuario 
let instrucciones= "Debes adivinar el numero con la menor cantidad de Intentos";
    alert(instrucciones)
let numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 15):"));

// Mientras el usuario no adivine el número, seguimos pidiéndole que lo intente
while (numeroUsuario !== numeroAleatorio) {

    if (numeroUsuario > numeroAleatorio) {
    alert("El número es más bajo");

    } else {
    alert("El número es más alto");
    }

    intentos++;
    numeroUsuario = parseInt(prompt("Inténtalo de nuevo:"));
    break

}

// Si el usuario adivina el número, mostramos un mensaje de felicitación
alert(`¡Felicidades, adivinaste el número en ${intentos} intentos!`);

//si el usuarido desea seguir le sugerimos volver a cargar la pagina
alert("Presiona F5 si quieres volver a intentarlo");

alert("Esta bien, Vuelve pronto!!!!");




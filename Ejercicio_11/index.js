/* Crear un array.
Usar un for para pedir al usuario que introduzca valores a cada una de las posiciones.
Usar otro for para mostrarlos en pantalla. */

let array = [];
let parrafos = "";
for (let i = 1; i <= 4; i++) {
  let numero = window.prompt("Escribe un número");
  



  console.log(numero);
  parrafos = parrafos + `<p>${parrafos[i]}</p>`;
}

document.getElementById("container").innerHTML = parrafos;

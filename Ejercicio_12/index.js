/* Ordenar un array de 5 strings alfabéticamente:
● Utilizar función. */

let array = ["perro", "gato", "caballo", "oveja", "gallina", "tigre"];
let arrayOrdenado = array.sort();
let texto;

console.log(arrayOrdenado);
texto = `<p>${arrayOrdenado}</p>`;
document.getElementById("container").innerHTML = texto;

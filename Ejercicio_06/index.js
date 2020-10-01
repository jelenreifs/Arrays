/* Crear un array.Usar un for para pedir 3 valores al usuario y guardarlos en el mismo.
Comparar los valores del array una vez tenga los 3 valores y mostrar en pantalla el más pequeño. */

let array = [];
let numeros;
let numeroMayor;

for (let i = 0; i < 3; i++) {
  let num = window.prompt("Introduce un número");
  array.push(num);
}

if (array[0] > array[1] && array[0] > array[2]) {
  numeroMayor = `<p>${array[0]} es el número mayor</p>`;
  document.getElementById("container").innerHTML = numeroMayor;
  /* console.log(`${array[0]} es el número mayor`); */
} else if (array[1] > array[0] && array[1] > array[2]) {
  numeroMayor = `<p>${array[1]} es el número mayor</p>`;
  document.getElementById("container").innerHTML = numeroMayor;
  /*  console.log(`${array[1]} es el número mayor`); */
} else {
  numeroMayor = `<p>${array[2]} es el número mayor</p>`;
  document.getElementById("container").innerHTML = numeroMayor;
  /*  console.log(`${array[2]} es el número mayor`); */
}

for (let i = 0; i < array.length; i++) {
  parrafos += `<p>${array[i]}</p>`;
}

document.getElementById("container").innerHTML = numeros;

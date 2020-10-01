//creamos un array vacio

const array = [];
//creamos la variable parrafos con un string vacio
let parrafos = "";

//El ejercicio pide que rellenemos el array con 10 valores introducidos por el usuario
//Así que en el bucle for i empieza siendo igual a 0 y la condicion para que el bucle siga
//funcionando es que i sea menor que 10
for (let i = 0; i < 10; i++) {
  //usamos el metodo push() para añadir al array lo que el usuario introduzca
  array.push(window.prompt("escribe algo"));
}

//recorremos el array
for (let i = 0; i < array.length; i++) {
  //sumamos a la variable parrafos los parrafos que se van creando en el bucle.
  //Cada uno con el valor del indice i del array
  parrafos += `<p>${array[i]}</p>`;
}
//igualamos el innerHTML del elemento con id "div1" a la variable parrafos
document.getElementById("div1").innerHTML = parrafos;

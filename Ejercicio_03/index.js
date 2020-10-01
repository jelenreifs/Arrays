//creamos un array vacio

let array = [];

//creamos la variable parrafos y la igualamos a un string vacio
let parrafos = "";

//El ejercicio nos pide que metamos los números del 20 al 11 en orden descendiente.
//Por lo que queremos que i empiece siendo igual a 20 y que el bucle solo funcione
//mientras i sea > 10
for (let i = 20; i > 10; i--) {
  //usamos el metodo push(i) para añadir el valor que i tiene en cada vuelta al array
  array.push(i);
}

//Recorremos el array para sumar a la variable parrafos los distintos parrafos que vamos a sacar en pantalla
for (let i = 0; i < array.length; i++) {
  parrafos += `<p>${array[i]}</p>`;
}

document.getElementById("container").innerHTML = parrafos;

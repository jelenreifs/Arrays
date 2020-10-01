/* Crea un programa que a partir de un array que contiene las edades de 20 alumnos(generadas aleatoriamente entre 18 y 35), calcule y nos devuelva la media de edad de dicha clase. */

//creamos un array vacio

const array = [];
//declaramos la variable suma con valor 0
let suma = 0;

//declaramos la variable media vacia
let media;

//declaramos la variable mensaje vacia
let mensaje;

//con este for, que tiene el metodo push y la funcion Math.random. Generamos por cada vuelta un número aleatorio
//y lo añadimos al array
for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * (36 - 18) + 18));
}

//con este for recorremos el array para sumar todos los numeros del array entre ellos
for (let i = 0; i < array.length; i++) {
  suma += array[i];
}

media = suma / array.length;

//Igualamos la variable mensaje a un parrafo HTML en string con el mensaje deseado y la media
mensaje = `<p>La edad media de la clase es: ${media}</p>`;
console.log(array);
document.getElementById("container").innerHTML = mensaje;

//Creamos el array meses y en cada posición del array introduciemos un string con un mes

let meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

//pedimos al usuario el número de un mes. Parseamos lo que introduce y lo guardamos en respuesta
let respuesta = parseInt(window.prompt("Introduce el número de un mes"));
//creamos la variable parrafo vacía. Como solo la igualaremos y no le vamos a sumar
//ningun string despues no hace falta que sea igual a un string vacio
let parrafo;

//Con este if comprobamos si la respuesta está dentro del rango. Mayor o igual a 0 Y menor o igual a 12
if (respuesta >= 1 && respuesta <= 12) {
  //si la respuesta está dentro de ese rango igualamos la variable parrafo a un parrafo HTML en formato string.
  //El contenido de este parrafo será el array meses. El indice del array será respuesta -1
  //ya que las posiciones de este array van desde 0 (enero) hasta 11 (diciembre)
  //Y el usuario meterá un número del 1 al 12
  parrafo = `<p>${meses[respuesta - 1]}`;
} else {
  //si respuesta no entra dentro del rango igualamos la variable parrafo a un parrafo HTML en formato String
  //El contenido en este caso es Respuesta incorrecta
  parrafo = `<p>Respuesta incorrecta</p>`;
}

//Mostramos en pantalla el parrafo creado
document.getElementById("container").innerHTML = parrafo;

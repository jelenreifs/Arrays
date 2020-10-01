/* 
Crea una lista de personajes de la saga Star Wars e introduce tres personajes.
    a.Muestra la lista.
    b.Ordena la lista alfabeticamente.
    c.Pide al usuario que introduzca un personaje por teclado.Si existe indica en qué posición existe ese
personaje, si no añadelo.
    d.Cuenta cuantos personajes contiene la lista. */

/*   PARA TESTEAR */
/* "Chewbacca",
    "Yoda", */

let personajes = ["Darth Vader", "R2-D2", "Luke Skywalker", "Leia Skywalker"];

console.log(personajes);

let personajesOrdenados = personajes.sort();
console.log(personajesOrdenados);

let nuevoPersonaje = window.prompt("¿Conoces otro personaje más?");

if (nuevoPersonaje !== personajes) {
  personajes.push(nuevoPersonaje);
} else {
  console.log(`Ese personaje aexiste`);
}

console.log(personajes);

console.log(personajes.length);

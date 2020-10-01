//Creamos un array vacío

let array = [];
//Creamos la variable parrafos y la igualamos a un string vacio
let parrafos = "";

//El ejercicio pide que le pidamos 3 strings al usuario. Así que creamos un bucle
//que recorreremos 3 veces.
//Usamos el metodo push para añadir a la ultima posicion del array lo que escriba el usuario en el prompt
for (let i = 0; i < 3; i++) {
  array.push(window.prompt("Escribe 1 string"));
}

//sumamos a la variable parrafos los parrafos en el orden que nos pide el ejercicio.
parrafos += `<p>${array[1]}</p>`;
parrafos += `<p>${array[2]}</p>`;
parrafos += `<p>${array[0]}</p>`;

document.getElementById("container").innerHTML = parrafos;

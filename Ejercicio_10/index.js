/* Crear un array con 11 ceros.Pedir al usuario que introduzca valores entre 0 y 10. Cada vez que introduzca un
dígito, añadir uno al valor en esa posición del array.Si por ejemplo introduce un 3, sumar uno a la posición 3.
Mostrar en pantalla los valores.Si introduce un número mayor que 10, decir que ese número es incorrecto.Si introduce
un número
negativo, mostrar en pantalla el número de cada posición y el valor que contiene.Por ejemplo, si introduce 7,
  7, 7, 5,
  6, 5, 9, 9, 10, -1 mostrar:
0
1 0
2 0
3 0
4 0
5 2
6 1
7 3
9 2
10 1
 */

//Creamos un array con once 0

let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//declaramos la variable num vacia
let num;

//declaramos la variable vacia
let interruptor;

//declaramos la variable parrafos como string vacio
let parrafos = "";

//en los bucles do while siempre se entra la primera vez. Y despues comprueba si la condicion se cumple para ver si vuelve a repetir el bucle
do {
  //igualamos la variable num al numero que escriba el usuario parseado
  num = parseInt(window.prompt("Escribe un valor entre 0 y 10"));

  //si num es mayor o igual a 0 Y menor o igual a 10
  if (num >= 0 && num <= 10) {
    //al indice num del array le sumamos 1
    array[num] = array[num] + 1;
    //Y despues sacamos en pantalla su valor
    document.getElementById("div1").innerHTML = `<p>El valor es: ${array[
      num
    ]}</p>`;

    //si no se cumple la primera condicion del if, pasará a mirar el primer else if que encuentre
    //la condicion de este else if será true si num es mayor que 10
  } else if (num > 10) {
    //si se cumple sacamos un mensaje en pantalla diciendo que el numero está fuera del rango
    document.getElementById(
      "div1"
    ).innerHTML = `<p>El número está fuera del rango</p>`;

    //si no se cumple ninguna de las anteriores condiciones del if entrará en el else
  } else {
    //en este else tenemos un bucle for que recorre el array
    for (let i = 0; i < array.length; i++) {
      // a parrafos le sumamos un párrafo con el indice i y el indice i del array por cada vuelta
      parrafos += `<p>${i}    ${array[i]}</p>`;
    }
    //sacamos en pantalla la variable parrafos con todos los parrafos
    document.getElementById("div1").innerHTML = parrafos;
  }

  //el bucle do while se repetirá siempre que num sea mayor o igual  0
} while (num >= 0);

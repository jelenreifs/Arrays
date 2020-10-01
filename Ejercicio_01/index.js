let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let parrafos = "";

for (let i = 0; i < array.length; i++) {
  parrafos = parrafos + `<p>${array[i]}</p>`;
}

document.getElementById("container").innerHTML = parrafos;

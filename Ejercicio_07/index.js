let numeros = [3, 8, 12, 6, 34, 23, 90, 22, 4, 56];
let total = 0;
let media;

for (let i = 0; i < numeros.length; i++) {
  total += numeros[i];
}

console.log(total);
console.log(parseInt(total / numeros.length));

let product = Number(prompt('Ingresa el valor para el producto'));
let productMasIva =product*0.19;
let resultado= product + productMasIva;
alert(`El producto con el precio ${product} mas el iva de 19% equivalente a ${productMasIva}\n Tiene un valor total de ${resultado}`);
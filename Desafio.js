//Este recibe un arreglo de numeros y retorna un nuevo arreglo con los numeros pares que se entran en el arreglo de numeros//
function filtrarpares (numeros) {
    return numeros.filter (numero => numero % 2 === 0);
}
const arreglonumeros =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const arreglopares = filtrarpares (arreglonumeros);
console.log (arreglopares) // imprime los numeros pares del 1 al 20//
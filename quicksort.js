// Ejercicio 1428: Implementar el algoritmo de ordenamiento quicksort en una función.

let barometroIf=0;
let barometroElse=0;

function quicksort(datos) {

    if (datos.length <= 1) {
        return datos;
    }

    let izquierdo = [];
    let derecha = [];
    let auxiliar = [];
    let pivote = datos.pop();
    let n = datos.length;

    for (let i = 0; i < n; i++) {
        if (datos[i] <= pivote) {
            izquierdo.push(datos[i]);
            barometroIf++;
        } else {
            derecha.push(datos[i]);
            barometroElse++;
        }
    }

    return auxiliar.concat(quicksort(izquierdo), pivote, quicksort(derecha));
}

let testVector = Array(10).fill().map(() => Math.round(Math.random() * 40)) //Vector de números positivos aleatorizados
console.log(testVector);


let resultado = quicksort(testVector);
console.log("Cantidad de veces que se divide por la izquierda", barometroIf);
console.log("Cantidad de veces que se divide por la derecha", barometroElse);
console.log(resultado);
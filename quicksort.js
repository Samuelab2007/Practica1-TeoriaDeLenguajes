// Ejercicio 1428: Implementar el algoritmo de ordenamiento quicksort en una función.

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
    
        } else {
            derecha.push(datos[i]);
            
        }
    }

    return auxiliar.concat(quicksort(izquierdo), pivote, quicksort(derecha));
}

let testVector = [19, 13, 2, 75,11, 7, 100, -7, 5, 23, 17, 4, 5, 0, 8, 14, 1];
console.log(testVector);


let resultado = quicksort(testVector);
console.log(resultado);
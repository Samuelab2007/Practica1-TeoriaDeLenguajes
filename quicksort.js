// Ejercicio 1428: Implementar el algoritmo de ordenamiento quicksort en una función.

let barometroIf=0;
let barometroElse=0;

let barometroBubble = 0;

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

// Creating the bblSort function
function bblSort(arr){
    
    for(let i = 0; i < arr.length; i++){
       
      // Last i elements are already in place 
      for(let j = 0; j < ( arr.length - i -1 ); j++){
        barometroBubble++;  //Barómetro       
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
           
          // If the condition is true then swap them
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp

        }
      }
    }
    // Print the sorted array
    return arr;
}
     

   

let testVector = Array(100).fill().map(() => Math.round(Math.random() * 120)); //Vector de números positivos aleatorizadose
let copiaVector = [...testVector];


console.log("Vector de prueba(Desordenado)");
console.log(testVector);



let resultado = quicksort(testVector);

console.log("Vector ordenado por bubble sort");

let ordenBubbleSort = bblSort(copiaVector); //Ordenamiento bubble Sort
console.log(ordenBubbleSort);
console.log("Barómetro Bubble", barometroBubble)

console.log("Barómetros para quicksort");
console.log("Cantidad de veces que se divide por la izquierda", barometroIf);
console.log("Cantidad de veces que se divide por la derecha", barometroElse);

console.log("Vector ordenado por quicksort");
console.log(resultado);

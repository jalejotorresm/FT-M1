'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var factores = [], divisor = 2

  if (num === 1) factores.push(1)

  while(num > 1){
    if(num % divisor === 0){
       factores.push(divisor)
       num= num/divisor
    }
    else divisor++
    if (num === 1) factores.unshift(1)
  }
  
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var len = 0

  while (len < array.length - 1){
    let len1 = 0
    while(len1 < array.length - 1){
      if (array[len1] > array[len1 + 1]) {
        [array[len1], array[len1 + 1]] = [array[len1 + 1], array[len1]]
      }
      len1++
    }
    len++
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let index = 1

  while (index <= array.length){
    let index1=index

    while(index1 >= 1 && array[index1] < array[index1 - 1]){
      [array[index1], array[index1 - 1]]=[array[index1 - 1], array[index1]]
      index1--
    }
    index++
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

let num=array.indexOf(Math.max(array))
let delNum=array.splice(num)
array.push(parseInt(delNum))
console.log(array)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

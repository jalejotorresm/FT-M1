'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var factores = [1], divisor = 2

  while(num > 1){
    if(num % divisor === 0){
       factores.push(divisor)
       num= num/divisor
    }
    else divisor++
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

  while (index < array.length){
    let index1=index

    while(index1 >= 1 && array[index1] < array[index1 - 1]){
      [array[index1],array[index1 - 1]]=[array[index1 - 1],array[index1]]
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
<<<<<<< HEAD
  //we first copy the array to avoid modifying the original array, since objects are passed by reference in JS
  const list = [...array]
  const len = list.length
  for (let i = 0; i < len; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      if (list[min] > list[j]) {
        min = j
      }
    }
    if (min !== i) {
      // a new minimum is found. Swap that with the current element
      ;[list[i], list[min]] = [list[min], list[i]]
    }
  }
  return list
=======
  const list = [...array]
  const len = list.length
  for (let i = 0; i < len; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (list[min] > list[j]) {
            min = j
        }
        }
        if (min !== i) {
        [list[i], list[min]] = [list[min], list[i]]
        }
  }
  return list
>>>>>>> 34cba3933b5fdb5d16d177598186b452e4eaa347
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

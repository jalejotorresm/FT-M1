"use strict";

function BinarioADecimal(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  var bin = [];
  while (num > 0) {
  bin.unshift(num % 2);
  num >>= 1;
  }
  return bin.join('');
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

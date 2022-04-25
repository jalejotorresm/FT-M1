"use strict";

function BinarioADecimal(num) {
  let miLista = (num.split("")).reverse();
  let decim=0;
  for(let i=0; i < miLista.length; i++) {
    decim+=Math.pow(2, i)*miLista[i];
  }
  return decim;
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

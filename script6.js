function substituirElemento(array, valorAntigo, novoValor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valorAntigo) {
      array[i] = novoValor;
    }
  }
  return array;
}

const array = [1, 2, 3, 2, 4];
const novoArray = substituirElemento(array, 2, 5);
console.log(novoArray);

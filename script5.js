function somaMatriz(matriz) {
  let soma = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }

  return soma;
}

const matriz = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

const total = somaMatriz(matriz);
console.log(total);

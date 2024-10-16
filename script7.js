function multiplicarMatrizes(matrizA, matrizB) {
  const linhasA = matrizA.length;
  const colunasA = matrizA[0].length;
  const colunasB = matrizB[0].length;

  if (colunasA !== matrizB.length) {
    throw new Error(
      "Número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz."
    );
  }

  const resultado = Array.from({ length: linhasA }, () =>
    Array(colunasB).fill(0)
  );

  for (let i = 0; i < linhasA; i++) {
    for (let j = 0; j < colunasB; j++) {
      resultado[i][j] = matrizA[i].reduce(
        (acc, val, k) => acc + val * matrizB[k][j],
        0
      );
    }
  }

  return resultado;
}

const matrizA = [
  [1, 2],
  [3, 4],
];

const matrizB = [
  [5, 6],
  [7, 8],
];

const resultado = multiplicarMatrizes(matrizA, matrizB);
console.log(resultado);

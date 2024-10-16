function contarOcorrencias(array) {
  const frequencias = {};
  array.forEach((numero) => {
    frequencias[numero] = (frequencias[numero] || 0) + 1;
  });
  return frequencias;
}

const numeros = [1, 2, 2, 3, 1, 4, 4, 4];
const resultado = contarOcorrencias(numeros);
console.log(resultado);

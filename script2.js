function ordenarPorIdade(pessoas) {
  return pessoas.slice().sort((a, b) => a.idade - b.idade);
}

const pessoas = [
  { nome: "Julya", idade: 18 },
  { nome: "Carlos Max", idade: 20 },
  { nome: "Marcell", idade: 19 },
  { nome: "João", idade: 21 },
];

const pessoasOrdenadas = ordenarPorIdade(pessoas);
console.log(pessoasOrdenadas);

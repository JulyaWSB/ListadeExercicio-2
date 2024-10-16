function ehPalindromo(str) {
  const textoLimpo = str.replace(/\s+/g, "").toLowerCase();
  const textoReverso = textoLimpo.split("").reverse().join("");
  return textoLimpo === textoReverso;
}

console.log(ehPalindromo("A cara rajada da jararaca"));
console.log(ehPalindromo("Radio"));
console.log(ehPalindromo("Renner"));

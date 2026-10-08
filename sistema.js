
// --- EXERCÍCIOS INICIANTES ---
//1
 function verificarMaioridade(idade) {
 return idade >= 18;
}

//2
 function calcularIMC(peso, altura) {
const imc = peso / (altura * altura);
return Number(imc.toFixed(2));
}

//3
 function formatarNome(nome, sobrenome) {
return `${sobrenome}, ${nome}`;
}

//4
 function ehPar(numero) {
return numero % 2 === 0;
}

//5
 function celsiusParaFahrenheit(c) {
return (c * 1.8) + 32;
}

//6
 function adicionarHobby(lista, hobby) {
 return [...lista, hobby];
}

//7
 function dividir(a, b) {
if (b === 0) throw new Error('Divisão por zero não permitida');
return a / b;
}

//8
 function criarAluno(nome, curso) {
return { nome, curso, ativo: true };
}

//9
 function aplicarDesconto(preco, porcentagem) {
return preco - (preco * (porcentagem / 100));
}

//10
 function validarTamanhoSenha(senha) {
return senha.length >= 8;
}

module.exports = {
  verificarMaioridade,
  calcularIMC,
  formatarNome,
  ehPar,
  celsiusParaFahrenheit,
  adicionarHobby,
  dividir,
  criarAluno,
  aplicarDesconto,
  validarTamanhoSenha
};

const {
    verificarMaioridade,
    calcularIMC,
    formatarNome,
    ehPar,
    celsiusParaFahrenheit,
    adicionarHobby,
    dividir,
    criarAluno,
    aplicarDesconto,
    validarTamanhoSenha,
} = require('./sistema');

//1
test('Deve verificar se é maior de 18 anos ou não', () => {
    expect(verificarMaioridade(15)).toBe(false);
    expect(verificarMaioridade(18)).toBe(true);
    expect(verificarMaioridade(21)).toBe(true);
});

//2
test('Deve calcular o IMC corretamente', () => {
    expect(calcularIMC(70, 1.75)).toBe(22.86);
    expect(calcularIMC(80, 1.8)).toBe(24.69);
});

//3
test('Deve formatar o nome corretamente', () => {
    expect(formatarNome('João', 'Silva')).toBe('Silva, João');
    expect(formatarNome('Maria', 'Souza')).toBe('Souza, Maria');
});

//4
test('Deve verificar se um número é par', () => {
    expect(ehPar(2)).toBe(true);
    expect(ehPar(3)).toBe(false);
});

//5
test('Deve converter Celsius para Fahrenheit corretamente', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
});

//6
test('Deve adicionar um hobby à lista de hobbies do aluno', () => {
    const aluno = criarAluno('João', 20);
    aluno.hobbies = adicionarHobby(aluno.hobbies ?? [], 'Leitura');
    expect(aluno.hobbies).toContain('Leitura');
});

//7
test('Divisão por zero não permitida', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
});

//8
test('Deve criar aluno,curso e se esta ativo', () => {
    const aluno = criarAluno('João', 'Engenharia');
    expect(aluno).toEqual({ nome: 'João', curso: 'Engenharia', ativo: true });
});

//9
test('Deve aplicar desconto corretamente', () => {
    expect(aplicarDesconto(100, 10)).toBe(90);
    expect(aplicarDesconto(200, 25)).toBe(150);
});

//10
test('Deve validar o tamanho da senha corretamente', () => {
    expect(validarTamanhoSenha('12345678')).toBe(true);
    expect(validarTamanhoSenha('1234')).toBe(false);
});

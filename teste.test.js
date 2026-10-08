const verificarMaioridade = require('./sistema');

test('Deve verificar se é maior de 18 anos ou não', () => {
    expect(verificarMaioridade(15)).toBe(false);
    expect(verificarMaioridade(18)).toBe(true);
    expect(verificarMaioridade(21)).toBe(true);
});

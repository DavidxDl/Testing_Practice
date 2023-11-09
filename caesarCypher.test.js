import caesarCypher from "./functions/caesarCypher.js";

test('caesarCypher 1', () => {
    expect(caesarCypher('hello', 1)).toMatch('ifmmp');
});

test('caesarCypher 2', () => {
    expect(caesarCypher('Habibi brother', 3)).toMatch('Kdelel eurwkhu')
})

test('caesarCypher 3', () => {
    expect(caesarCypher('zero Zero', 5)).toMatch('ejwt Ejwt')
})
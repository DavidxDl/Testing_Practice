import reversedString from "./reversedString.js";

test('ReversedString1', () => {
    expect(reversedString('Hello')).toMatch('olleH');
});

test('ReversedString2', () => {
    expect(reversedString('Hello, how are you')).toMatch('uoy era woh ,olleH');
});

test('ReversedString3', () => {
    expect(reversedString('hi am David, and my id is 24')).toMatch('42 si di ym dna ,divaD ma ih');
});
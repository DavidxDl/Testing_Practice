import Calculator from "./calculator";

test('calculator test sustract', () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
});

test('calculator multiply test', () => {
    expect(Calculator.multiply(5, 5)).toBe(25);
});

test('calculator divade', () => {
    expect(Calculator.divide(15, 3)).toBe(5);
})

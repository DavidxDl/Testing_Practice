import capitalize from "./capitalize.js";

test('capitalize', () => {
    expect(capitalize('hello')).toMatch('Hello');
  });
test('capitalize multiple words', () => {
    expect(capitalize('whatsap bro.')).toMatch('Whatsap bro.');
  });
test('capitalize after puntuation', () => {
    expect(capitalize('hello bro. did you see that?')).toMatch('Hello bro. Did you see that?');
  });
test('capitalize same but larger', () => {
    expect(capitalize('hello bro. did you see that? that was weird af. what you doing tomorrow')).toMatch('Hello bro. Did you see that? That was weird af. What you doing tomorrow');
  });
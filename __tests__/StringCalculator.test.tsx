import add from '../src/StringCalculator';

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

test('returns the sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns the sum of an unknown amount of numbers', () => {
  expect(add("1,2,3,4,5")).toBe(15);
});
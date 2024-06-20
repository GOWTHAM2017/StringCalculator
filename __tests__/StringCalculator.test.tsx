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

test('returns the sum when numbers are separated by new lines', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('returns the sum when a custom delimiter is used', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws an exception for negative numbers', () => {
  expect(() => add("1,-2,3")).toThrow("negatives numbers not allowed: -2");
});

test('throws an exception with all negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negatives numbers not allowed: -2,-4");
});
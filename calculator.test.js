import { calculator } from "./calculator";

// ADD
test("Both null", () => {
  expect(calculator.add(null, null)).toBe(0);
});

test("1 null", () => {
  expect(calculator.add(null, 2)).toBe(2);
});

test("Zeros only", () => {
  expect(calculator.add(0, 0)).toBe(0);
});

test("2 positive numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("1 negative number", () => {
  expect(calculator.add(-1, 5)).toBe(4);
});

test("2 negative numbers", () => {
  expect(calculator.add(-1, -2)).toBe(-3);
});

// SUBTRACT
test("Both null", () => {
  expect(calculator.subtract(null, null)).toBe(0);
});

test("1 null", () => {
  expect(calculator.subtract(null, 2)).toBe(-2);
});

test("Zeros only", () => {
  expect(calculator.subtract(0, 0)).toBe(0);
});

test("2 positive numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("1 negative number", () => {
  expect(calculator.subtract(-1, 5)).toBe(-6);
});

test("2 negative numbers", () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
});

// MULTIPLY
test("Both null", () => {
  expect(calculator.multiply(null, null)).toBe(0);
});

test("1 null", () => {
  expect(calculator.multiply(null, 2)).toBe(0);
});

test("Zeros only", () => {
  expect(calculator.multiply(0, 0)).toBe(0);
});

test("2 positive numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("1 negative number", () => {
  expect(calculator.multiply(-1, 5)).toBe(-5);
});

test("2 negative numbers", () => {
  expect(calculator.multiply(-1, -2)).toBe(2);
});

// DIVIDE
test("Both null", () => {
  expect(calculator.divide(null, null)).toBe(NaN);
});

test("1 null", () => {
  expect(calculator.divide(null, 2)).toBe(0);
});

test("Zeros only", () => {
  expect(calculator.divide(0, 0)).toBe(NaN);
});

test("regular divide by zero", () => {
  expect(calculator.divide(1, 0)).toBe(Infinity);
});

test("2 positive numbers, even division", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("1 negative number, uneven division", () => {
  expect(calculator.divide(-1, 2)).toBe(-0.5);
});

test("2 negative numbers", () => {
  expect(calculator.divide(-10, -2)).toBe(5);
});

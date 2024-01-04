import { analyzeArray } from "./analyzeArray";

test("empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test("array with non-numbers", () => {
  expect(() => analyzeArray([1, 2, "3", "a", { 0: 0 }])).toThrow(
    "Array contains non-numbers!"
  );
});

test("array of length 1", () => {
  expect(analyzeArray([100])).toEqual({
    average: 100,
    min: 100,
    max: 100,
    length: 1,
  });
});

test("arbitrary length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

import { capitalize } from "./capitalize.js";

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("single lowercase letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("single uppercase letter", () => {
  expect(capitalize("A")).toBe("A");
});

test("single non-letter character", () => {
  expect(capitalize("4")).toBe("4");
});

test("all lowercase string", () => {
  expect(capitalize("abc")).toBe("Abc");
});

test("all uppercase string", () => {
  expect(capitalize("ABC")).toBe("ABC");
});

test("mixed-case string", () => {
  expect(capitalize("aBc")).toBe("ABc");
});

test("mixed-case mixed-type string", () => {
  expect(capitalize("abC/myFile.js")).toBe("AbC/myFile.js");
});

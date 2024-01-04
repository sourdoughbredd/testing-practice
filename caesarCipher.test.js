import { caesarCipher } from "./caesarCipher";

test("all letters, shift 0", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 0)).toBe(
    "abcdefghijklmnopqrstuvwxyz"
  );
});

test("all letters, shift 1", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("all letters, shift 26 (modulus 0)", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 26)).toBe(
    "abcdefghijklmnopqrstuvwxyz"
  );
});

test("all letters, shift 27 (modulus 1)", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 27)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("Case matches", () => {
  expect(caesarCipher("Abc. Def G!", 2)).toBe("Cde. Fgh I!");
});

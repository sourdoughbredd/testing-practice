import { reverseString } from "./reverseString";

test("null test", () => {
  expect(reverseString(null)).toBeNull();
});

test("empty string", () => {
  expect(reverseString("")).toBe("");
});

test("single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("many characters", () => {
  expect(reverseString("abcde")).toBe("edcba");
});

test("palindrome", () => {
  expect(reverseString("racecar")).toBe("racecar");
});

test("many characters special", () => {
  expect(reverseString("Let's reverse this string!")).toBe(
    "!gnirts siht esrever s'teL"
  );
});

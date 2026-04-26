import { expect, test, toBeInstanceOf } from "@jest/globals";
import functionObj from "./index.js";

// CAPITALIZE

test("captitalize doesn't return undefined", () => {
  expect(functionObj.capitalize()).toBeDefined();
});

test("captitalize doesn't break for non strings", () => {
  expect(functionObj.capitalize(123)).toBeDefined();
});

test("captitalize return the first letter of the string capitalzied", () => {
  expect(functionObj.capitalize("xyz")).toBe("Xyz");
});

test("captitalize works on single letters", () => {
  expect(functionObj.capitalize("x")).toBe("X");
});

test("captitalize preserves the case of every letter except the very first", () => {
  expect(functionObj.capitalize("xyZaAkjb")).toBe("XyZaAkjb");
});

// REVERSESTRING

test("reverseString doesn't return undefined", () => {
  expect(functionObj.reverseString()).toBeDefined();
});

test("reverseString returns the string in reverse order", () => {
  expect(functionObj.reverseString("123")).toBe("321");
});

test("reverseString works with numbers", () => {
  expect(functionObj.reverseString(1234)).toBe("4321");
});

test("reverseString works with punctuation", () => {
  expect(functionObj.reverseString("Hello, how are you?")).toBe(
    "?uoy era woh ,olleH",
  );
});

// CALC: ADD

test("calculator add doesn't return undefined", () => {
  expect(functionObj.calculator.add()).toBeDefined();
});

test("calculator add doesn't break for non-numbers", () => {
  expect(functionObj.calculator.add("abc")).toBe(
    "add needs two numbers as arguments",
  );
});

test("calculator doesn't add strings", () => {
  expect(functionObj.calculator.add("abc", "xyz")).toBe(
    "add cannot add strings",
  );
});

test("calculator adds numbers passed as strings", () => {
  expect(functionObj.calculator.add("123", "1")).toBe(124);
});

test("calculator adds numbers correctly", () => {
  expect(functionObj.calculator.add(123, 123)).toBe(246);
});

test("calculator adds a number and another number passed as string correctly", () => {
  expect(functionObj.calculator.add(123, "123")).toBe(246);
});

test("calculator adds negative numbers correctly", () => {
  expect(functionObj.calculator.add(123, "-123")).toBe(0);
});

// CALC: SUBTRACT

test("calculator subtract doesn't return undefined", () => {
  expect(functionObj.calculator.subtract()).toBeDefined();
});

test("calculator subtract doesn't break for non-numbers", () => {
  expect(functionObj.calculator.subtract("abc")).toBe(
    "subtract needs two numbers as arguments",
  );
});

test("calculator doesn't subtract strings", () => {
  expect(functionObj.calculator.subtract("abc", "xyz")).toBe(
    "cannot subtract strings",
  );
});

test("calculator subtracts numbers passed as strings", () => {
  expect(functionObj.calculator.subtract("123", "1")).toBe(122);
});

test("calculator subtracts numbers correctly", () => {
  expect(functionObj.calculator.subtract(123, 123)).toBe(0);
});

test("calculator subtracts a number and another number passed as string correctly", () => {
  expect(functionObj.calculator.subtract(123, "123")).toBe(0);
});

test("calculator subtracts negative numbers correctly", () => {
  expect(functionObj.calculator.subtract(123, "-123")).toBe(246);
});

// CALC: MULTIPLY

test("calculator multiply doesn't return undefined", () => {
  expect(functionObj.calculator.multiply()).toBeDefined();
});

test("calculator multiply doesn't break for non-numbers", () => {
  expect(functionObj.calculator.multiply("abc")).toBe(
    "multiply needs two numbers as arguments",
  );
});

test("calculator doesn't multiply strings", () => {
  expect(functionObj.calculator.multiply("abc", "xyz")).toBe(
    "cannot multiply strings",
  );
});

test("calculator multiplies numbers passed as strings", () => {
  expect(functionObj.calculator.multiply("123", "1")).toBe(123);
});

test("calculator multiplies numbers correctly", () => {
  expect(functionObj.calculator.multiply(25, 25)).toBe(625);
});

test("calculator multiplies a number and another number passed as string correctly", () => {
  expect(functionObj.calculator.multiply(25, "25")).toBe(625);
});

test("calculator multiplies negative numbers correctly", () => {
  expect(functionObj.calculator.multiply(25, "-25")).toBe(-625);
});

// CALC: DIVIDE

test("calculator divide doesn't return undefined", () => {
  expect(functionObj.calculator.divide()).toBeDefined();
});

test("calculator divide doesn't break for non-numbers", () => {
  expect(functionObj.calculator.divide("abc")).toBe(
    "divide needs two numbers as arguments",
  );
});

test("calculator doesn't divide strings", () => {
  expect(functionObj.calculator.divide("abc", "xyz")).toBe(
    "cannot divide strings",
  );
});

test("calculator divides numbers passed as strings", () => {
  expect(functionObj.calculator.divide("124", "2")).toBe(62);
});

test("calculator divides numbers correctly", () => {
  expect(functionObj.calculator.divide(25, 25)).toBe(1);
});

test("calculator divides a number and another number passed as string correctly", () => {
  expect(functionObj.calculator.divide(625, "25")).toBe(25);
});

test("calculator divides negative numbers correctly", () => {
  expect(functionObj.calculator.divide(25, "-25")).toBe(-1);
});

test("calculator handles division by zero correctly", () => {
  expect(functionObj.calculator.divide(25, "0")).toBe("cannot divide by zero");
});

// CEASAR CIPHER

test("shifted works for simple strings without punctuation", () => {
  expect(functionObj.ceasarCipher("xyz", 3)).toBe("abc");
});

test("shifted works for simple strings with punctuation", () => {
  expect(functionObj.ceasarCipher("xyz,", 3)).toBe("abc,");
});

test("shifted works for strings with numbers", () => {
  expect(functionObj.ceasarCipher("xyz1", 3)).toBe("abc1");
});

test("shifted preserves case and punctuation", () => {
  expect(functionObj.ceasarCipher("PQRstU", 3)).toBe("STUvwX");
});

test("shifted works for a shift factor greater than 26", () => {
  expect(functionObj.ceasarCipher("xyZ1,,", 29)).toBe("abC1,,");
});

test("shifted works for a negative shift factor", () => {
  expect(functionObj.ceasarCipher("bcd,,", -1)).toBe("abc,,");
});

test("shifted preserves case and punctuation for a negative shift factor", () => {
  expect(functionObj.ceasarCipher("bcdD,,", -1)).toBe("abcC,,");
});

test("shifted works for a negative shift factor lesser than -26", () => {
  expect(functionObj.ceasarCipher("bcd", -27)).toBe("abc");
});

test("shifted works for a negative shift factor -1 > x > -26", () => {
  expect(functionObj.ceasarCipher("alkscjbascbkasbc", -19)).toBe(
    "HSRZJQIHZJIRHZIJ".toLowerCase(),
  );
});

test("shifted works for an absurdly large negative shift factor", () => {
  expect(functionObj.ceasarCipher("alkscjbascbkasbc", -58)).toBe(
    "UFEMWDVUMWVEUMVW".toLowerCase(),
  );
});

test("shifted doesn't return undefined for invalid arguments", () => {
  expect(functionObj.ceasarCipher(29)).toBeDefined();
});

test("shifted handles typeError correctly", () => {
  expect(functionObj.ceasarCipher(29, "str")).toBe(
    "ceaserCipher needs a valid string and a valid number as arguments",
  );
});

// ANALYSE ARRAY

// REQUIREMENTS: An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

import shifter from "./cipherShifter.js";

const functionObj = {
  capitalize(string) {
    if (!string || typeof string !== "string") {
      return "capitalize needs a string argument";
    }
    const cap = string[0].toUpperCase();
    const rest = string.slice(1);
    return cap + rest;
  },

  reverseString(str) {
    if (!str) {
      return "reverseString requires an argument.";
    }

    const string = str.toString();
    const strArr = string.split("");
    return strArr.reverse().join("");
  },

  calculator: {
    add(a, b) {
      const pattern = /[^"(\D)]+/;
      if (!a || !b) {
        return "add needs two numbers as arguments";
      } else if (!pattern.test(a) || !pattern.test(b)) {
        return "add cannot add strings";
      }
      const c = Number(a);
      const d = Number(b);
      return c + d;
    },

    subtract(a, b) {
      const pattern = /[^"(\D)]+/;
      if (!a || !b) {
        return "subtract needs two numbers as arguments";
      } else if (!pattern.test(a) || !pattern.test(b)) {
        return "cannot subtract strings";
      }
      const c = Number(a);
      const d = Number(b);
      return c - d;
    },

    multiply(a, b) {
      const pattern = /[^"(\D)]+/;
      if (!a || !b) {
        return "multiply needs two numbers as arguments";
      } else if (!pattern.test(a) || !pattern.test(b)) {
        return "cannot multiply strings";
      }
      const c = Number(a);
      const d = Number(b);
      return c * d;
    },

    divide(a, b) {
      const pattern = /[^"(\D)]+/;
      if (!a || !b) {
        return "divide needs two numbers as arguments";
      } else if (!pattern.test(a) || !pattern.test(b)) {
        return "cannot divide strings";
      } else if (b == 0) {
        return "cannot divide by zero";
      }
      const c = Number(a);
      const d = Number(b);
      return c / d;
    },
  },

  ceasarCipher(str, shiftFactor) {
    const reversedStr = shifter(str, shiftFactor);
    return reversedStr;
  },
};

export default functionObj;

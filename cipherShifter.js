import alphabet from "./cipherArr.js";

function shifter(str, shiftFactor) {
  const strArr = str.split("");
  const shiftedStrArr = [];
  const punctuation = /\W\d/;
  for (const letter of strArr) {
    let alphabetIndex = alphabet.indexOf(letter);
    let shiftedIndex = alphabetIndex + shiftFactor;
    if (punctuation.test(letter)) {
      shiftedStrArr.push(letter);
      continue;
    }
    if (shiftedIndex >= 26) {
      const quotient = Math.floor(shiftedIndex / 26);
      shiftedStrArr.push(alphabet[shiftedIndex - 26 * quotient]);
      continue;
    }
    shiftedStrArr.push(alphabet[shiftedIndex]);
  }

  return shiftedStrArr.join("");
}

export default shifter;

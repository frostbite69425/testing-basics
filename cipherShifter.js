import alphabet from "./cipherArr.js";

function shifter(str, shiftFactor) {
  const strArr = str.split("");
  const shiftedStrArr = [];
  const punctuation = /[^a-zA-Z]/;
  let cipherLetter;
  let letterVar;
  let upperCaseLetter = false;
  for (const letter of strArr) {
    if (punctuation.test(letter)) {
      shiftedStrArr.push(letter);
      continue;
    }
    if (letter == letter.toUpperCase()) {
      upperCaseLetter = true;
      letterVar = letter.toLowerCase();
    } else {
      letterVar = letter;
    }
    let alphabetIndex = alphabet.indexOf(letterVar);
    let shiftedIndex = alphabetIndex + shiftFactor;
    let quotient = Math.abs(Math.floor(shiftedIndex / 26));
    if (shiftedIndex >= 26) {
      cipherLetter = alphabet[shiftedIndex - 26 * quotient];
    } else if (shiftedIndex <= -1) {
      cipherLetter = alphabet[26 * quotient - Math.abs(shiftedIndex)];
    } else {
      cipherLetter = alphabet[shiftedIndex];
    }

    if (upperCaseLetter) {
      shiftedStrArr.push(cipherLetter.toUpperCase());
      upperCaseLetter = false;
      continue;
    }
    shiftedStrArr.push(cipherLetter);
  }

  return shiftedStrArr.join("");
}

export default shifter;

import { start } from "repl";

export { caesarCipher };

function caesarCipher(str, shiftFactor) {
  if (!shiftFactor || shiftFactor == Infinity) return str;

  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    cipher += shiftLetter(str[i], shiftFactor);
  }
  return cipher;
}

function shiftLetter(letter, shiftFactor) {
  // Unicode ranges for alphabet :
  //  A-Z = 65-90
  //  a-z = 97-122

  const letterCode = letter.charCodeAt(0);
  let alphabetStartCode;
  if (letterCode >= 65 && letterCode <= 90) {
    // uppercase letter
    alphabetStartCode = 65;
  } else if (letterCode >= 97 && letterCode <= 122) {
    // lowercase letter
    alphabetStartCode = 97;
  } else {
    // non-alphabet character
    return letter;
  }
  const letterIndex = letterCode - alphabetStartCode; // a-z = A-Z = 0-26
  const newLetterIndex = (letterIndex + shiftFactor) % 26;
  const newLetterCode = alphabetStartCode + newLetterIndex;
  return String.fromCharCode(newLetterCode);
}

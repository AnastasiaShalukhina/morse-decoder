const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arrAllSymbols = expr.split("");
  let arrDecoder = [];
  while (arrAllSymbols.length > 0) {
    let tenSymbols = arrAllSymbols.splice(0, 10);
    if (tenSymbols.includes("*")) {
      tenSymbols = " ";
      arrDecoder.push(tenSymbols);
    } else {
      let letter = getLetter(tenSymbols);
      arrDecoder.push(letter);
    }
  }

  function getLetter(arr) {
    let letter;
    let symbol;
    let arrWithDotsDashes = [];

    while (arr.length > 0) {
      let twoSymbols = arr.splice(-2);
      let strTwoSymbols = twoSymbols.join("");
      if (strTwoSymbols === "00") {
        break;
      } else if (strTwoSymbols === "10") {
        symbol = ".";
        arrWithDotsDashes.push(symbol);
      } else if (strTwoSymbols === "11") {
        symbol = "-";
        arrWithDotsDashes.push(symbol);
      }
    }
    let strWithDotsDashes = arrWithDotsDashes.reverse().join("");
    for (let key in MORSE_TABLE) {
      if (key === strWithDotsDashes) {
        letter = MORSE_TABLE[key];
      }
    }
    return letter;
  }

  return arrDecoder.join("");
}

module.exports = {
  decode,
};

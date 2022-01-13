// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    // check for edge cases
    if (!alphabet || alphabet.length < 26) return false;
    // make sure every character is different
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) return false;
      }
    }

    // set our english alphabet array
    const alphabetArr = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];

    // set inputs to arrays where each index is a lowercase letter
    const inputAlphabet = alphabet.toLowerCase().split("");
    const inputMessage = input.toLowerCase().split("");
    
    if (!encode) {
      const decodedMessage = inputMessage.map(letter => {
        // get the index of each input letter in the input alphabet array
        const alphaIndex = inputAlphabet.indexOf(letter);
      if (alphaIndex === -1) return letter; // does not change letter if it is not in input alphabet
      return alphabetArr[alphaIndex];
      
      })
      return decodedMessage.join("");
    } else {
      const encodedMessage = inputMessage.map(letter => {
        const alphaIndex = alphabetArr.indexOf(letter);
      if (alphaIndex === -1) return letter;
      
      return inputAlphabet[alphaIndex];
      })
      
      return encodedMessage.join("");
    }


  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

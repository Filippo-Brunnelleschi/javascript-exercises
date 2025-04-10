const palindromes = function (s) {

  const alpha="abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanString = s
    .toLowerCase()
    .split("")
    .filter((character) => alpha.includes(character))
    .join("");

  const reverseString=cleanString.split("").reverse().join("");

  return cleanString===reverseString;
};


// Do not edit below this line
module.exports = palindromes;

var findWords = function (words) {
  let n = words.length;
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let result = [];
  let z = 0;
  for (let word of words) {
    let lowercaseword = word.toLowerCase();
    for (let row of rows) {
      if ([...lowercaseword].every((item) => row.includes(item))) {
        result[z++] = word;
        break;
      }
    }
  }
  return result;
};
let words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));

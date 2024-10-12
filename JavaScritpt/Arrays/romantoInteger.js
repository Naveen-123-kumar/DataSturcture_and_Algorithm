var romanToInt = function (s) {
  s = s.toUpperCase();
  let len = s.length;
  var sum = 0;

  for (let i = 0; i < len; i++) {
    let currentDigit = getInt(s.charAt(i));
    let nextDigit;

    if (i < len - 1) {
      nextDigit = getInt(s.charAt(i + 1));
    }
    if (currentDigit < nextDigit) {
      sum = sum + (nextDigit - currentDigit);
      i = i + 1;
    } else {
      sum = sum + currentDigit;
    }
  }
  return sum;
};
const result = romanToInt("iii");
console.log("result", result);
function getInt(str) {
  switch (str) {
    case "I":
      return 1;
      break;

    case "V":
      return 5;
      break;

    case "X":
      return 10;
      break;

    case "L":
      return 50;
      break;

    case "C":
      return 100;
      break;

    case "D":
      return 500;
      break;

    case "M":
      return 1000;
      break;
    default:
      return -1;
  }
}

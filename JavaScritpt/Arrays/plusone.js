var plusOne = function (digits) {
  let n = digits.length;
  let arr = [];
  let j = n;
  for (i = n - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
    // if (digits[0] == 0) {
    //   digits.unshift(1);
    // }
  }
  if (digits[0] == 0) {
    for (i = n-1; i >= 0; i--) {
      digits[j--] = digits[i];
    }
    digits[0]=1
  }

  return digits;
};
let digits = [1,9,9, 9];
// plusOne(digits)
console.log(plusOne(digits));

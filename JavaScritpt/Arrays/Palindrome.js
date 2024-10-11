// function Palindrome(input) {
//   // let str='';
//   // let n=input.length;
//   // for(let i=n-1;i>=0;i--){
//   //     str+=input[i];
//   // }
//   // if(input==str){
//   //     return 'valid'
//   // }
//   // return 'invalid'
// }
// console.log(Palindrome(12321));
// function reverseDigits(num)
// {
//     let rev_num = 0;
//     while (num > 0) {
//         rev_num = rev_num * 10 + num % 10;
//         num = Math.floor(num / 10);
//     }
//     return rev_num;
// }
// function isPalindrome(n)
// {
//     let rev_n = reverseDigits(n);
//     if (rev_n == n)
//         return 1;
//     else
//         return 0;
// }
// console.log(isPalindrome(12321))

//reverse a string
// function swap(a,b){
//     let tem=a
//     a=b
//     b=tem
//     return a,b;
// }
// let arr=[1,2,3,4,5]
// let n=arr.length
// for(let i=0;i<n/2;i++){
//    let tem=arr[i]
//    arr[i]=arr[n-i-1]
//    arr[n-i-1]=tem
// }
// console.log(arr)

//reverse a array
// function reverseString(str){
//     return str.split('').reverse().join('')
// }
// // reverseString('abcdefghijk')
// console.log(reverseString('abcdefghijk'))

var isPalindrome = function (x) {
  if (x < 0) return false;
  if(x==0) return true;
  var flag = false;
  let num = x;
  let sum = 0;
  while (num != 0) {
    let digit = num % 10;
    sum = sum * 10 + digit;
    num = parseInt(num / 10);
    if (sum == x) {
      flag = true;
    }
  }
  console.log('sum',sum)
  if (flag) {
    return true;
  } else {
    return false;
  }
};
let result = isPalindrome(121);
console.log(result);

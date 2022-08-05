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
function reverseDigits(num)
{
    let rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num;
}
function isPalindrome(n)
{
    let rev_n = reverseDigits(n);
    if (rev_n == n)
        return 1;
    else
        return 0;
}
console.log(isPalindrome(12321))

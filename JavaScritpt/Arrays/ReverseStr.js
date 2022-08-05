// var Name='Naveen';
// const n=Name.length;
// var ReversedStr="";
// for(let i=n-1;i>=0;i--){
//     ReversedStr+=Name[i];
// }
// console.log(ReversedStr)
// console.log("The length of above string is =", n )
function ReverseStr(str){
    let  n=str.length;
    var ReversedStr=''
    for(let i=n-1;i>=0;i--){
        ReversedStr+=str[i];
    }
    return ReversedStr
}
console.log(ReverseStr('naveen'))
console.log(ReverseStr('praveen'))
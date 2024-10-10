// function Factorial(num){
//     if( num ==0){
//         return 1;

//     }
//     else if( num<0){
//         return -1;
//     }
//     return num*Factorial(num-1);
// }
// var n=-5
// console.log(Factorial(n))

function fac(n){
    if(n==0){
        return 1
    }
    else if(n<0){
        return -1
    }
    else{
        return n*fac(n-1)
    }
}
console.log(fac(6))
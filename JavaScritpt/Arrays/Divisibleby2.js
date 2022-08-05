function sumofDigit(N){
    let sum=0
    while(N!=0){
        sum=sum+N%10;
        N=parseInt(N/10)
    }
    return sum;
   
}
function CheckDivisibility(num){
    let sum=sumofDigit(num);
    if(num%2==0 && sum%3==0 && sum%9==0){
        return 'divisible by 6 and 9'
    }
    else if((num%2==0 && sum%3==0 )|| (sum%9==0)){
        return 'divisible by one'
    }
    return "not"
}
var num=18;
console.log(CheckDivisibility(num))
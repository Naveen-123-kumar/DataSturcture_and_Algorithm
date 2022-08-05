function Add(str1,str2){
    let result=" ";
    if(str1.length > str2.length){
        let tem=str1;
        str1=str2;
        str2=tem;
    }
    let sum=0;
    let n=str1.length
    let m=str2.length
    let diff=m-n
    let carry=0
    for(let i=n-1;i>=0;i--){
        sum=((str1.charCodeAt(i)-48) + (str2.charCodeAt(i+diff)-48) + carry);
        result+=(sum%10)
        carry=Math.floor(sum/10);


    }
    for(let i=m-n-1;i>=0;i--){
        sum=(str2.charCodeAt(i)-48) +carry;
        result+=(sum%10)
        carry=Math.floor(sum/10);
    }
    if(carry){
        result=result+(carry+'0');
    }
    result=result.split("").reverse().join("")
    return result;


}
let str1 = "12";
let str2 = "198111";
console.log(Add(str1,str2))
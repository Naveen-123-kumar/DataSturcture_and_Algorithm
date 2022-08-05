function IntergerToRoman(num){
    var integer=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
    var symbol=["M","CM","D","CD","C","XC","L","XL","X","V","IV","I"];
    let n=12;
    var str=" ";
    let i=0
    for(i=0;i<n;i++){
        while(num>=integer[i]){
            str=str+symbol[i];
            num=num-integer[i];
        }
}
return str;

}
let num=20;
console.log(IntergerToRoman(num))
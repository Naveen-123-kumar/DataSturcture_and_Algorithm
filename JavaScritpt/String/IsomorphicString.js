function Isomorphic(str1,str2,m,n){
    let count1=0,count2=0;
    let i;
    for(i=0;i<m-1;i++){
        if(str1[i]==str1[i+1]){
            continue;
        }
        else{
            count1=count1+1;
        }
    }
    for(i=0;i<n-1;i++){
        if(str2[i]==str2[i+1]){
            continue;
        }
        else{
            count2=count2+1;
        }
    }
    return (count1==count2)? "true": "false";

}
let str1="aab"
let str2="bban"
let m=str1.length;
let n=str2.length;
console.log(Isomorphic(str1,str2,m,n))
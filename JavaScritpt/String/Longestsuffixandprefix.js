function SuffixandPrifix(str,n){
    let i;
    let result=" ";
    let count=0;
    let j=0;
    
    for(i=1;i<n;i++){
        if(str[j]==str[i]){
            j=j+1;
            count=count+1;
        }
      

    }

    return (str[count-1]==str[n-1])? count:-1;
}
let str="abcabcd";
let n=str.length;
console.log(SuffixandPrifix(str,n))

function CheckBracket(str){
    var tem=""
    let count=0;
    let n=str.length;
    for(i=0;i<n;i++){
        if(str[i]=="("){
            count=count+1;
        }
        if(str[i]==")"){
            count=count-1;
        }
    }
    if(count==0){
        return true;
    }
    else{
        return -1;
    }
}
let str="(((())))"
console.log(CheckBracket(str))
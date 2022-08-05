function KAnargams(str1,str2){
    let n=str1.length;
    let m=str2.length;
    let set=new Set();
    let count=0;
    if(n!=m){
        return false;
    }
    else{
    for(let i=0;i<n;i++){
       set.add(str1[i]);
        
    }
}
for(let i=0;i<m;i++){
    if(!set.has(str2[i])){
        count=count+1;
    }
}

return count;
}
let str1 = "fodk", str2="gork";
console.log(KAnargams(str1,str2))


const mergeList=(list1,list2)=>{
let n1=list1.length;
let n2=list2.length;
if(n1==0 && n2!=0){
    return list2;
}
if(n2==0 && n1!=0){
    return list1;
}
if(n1==0 && n2==0){
    return list1 || list2
}
if(n1!=0 && n2!=0){
    list1=[...list1,...list2]
}
return list1.sort()
}
const list1 = [1,2,4], list2 = [1,3,4];
const result=mergeList(list1,list2)
console.log('result',result)
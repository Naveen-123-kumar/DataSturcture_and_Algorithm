function isSubsequence(word,dict){
    let i,j;
    let n1=word.length;
    let n2=dict.length;
    if(n1>n2){
        return -1;
    }
    for(i=0;i<n2 && j<n1 ;i++){
        if(word[j]==dict[i]){
            j++;
        }
    }
    return (j==n1)
}
function findWord(str,dict){
    let result=" ";
    let length=0;
    dict.forEach(element => {
        if(isSubsequence(element,str) && length < element.length){
            length=element.length
            result=element;

        }
        
    });
    return result;
}
var dict
    = ["ale", "apple", "monkey", "plea"];
var str = "abpcplea";
console.log(findWord(str,dict))
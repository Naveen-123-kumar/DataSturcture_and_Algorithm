var firstUniqChar = function(s) {
    let str=s.split("")
    let n=s.length
    let set =new Set();
    for(let i=0;i<n;i++){
        set.add(s.charAt(i))
        
    }
    let i=0
    set.delete(s.charAt(i))
    // for(let i=0;i<n;i++){
    //     set.delete(s.charAt(i))
    //     if(!set.has(s.charAt(i))){
    //         return i
    //         break
    //     }
        
    // }
    return set
};
let s= "loveleetcode"
console.log(firstUniqChar(s))
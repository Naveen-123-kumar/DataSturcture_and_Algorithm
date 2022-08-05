function isSubstring(arr1,arr2){
    let n=arr1.length
    let m=arr2.length
    let k=0
    if(arr1==0 || n>m) {
        return -1
    }
    if(arr2.includes(arr1)){
        for(let i=0;i<n;i++){
            if(arr1[k]==arr2[i]){
                return i;
                break
            }
            
        }
       
    }
    return -1
}
let arr1='veen'
let arr2='Naveen'
console.log(isSubstring(arr1,arr2))
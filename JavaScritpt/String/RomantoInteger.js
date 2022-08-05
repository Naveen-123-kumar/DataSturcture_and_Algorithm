function RomanToInteger(str){
   
    switch(str){
        case "I":
            return 1;
            break;
        case "V":
            return 5;
            break;
        case "X":
            return 10;
            break;
        case "L":
            return 50;
            break;
        case "C":
            return 100;
            break;
        case "D":
            return 500;
            break;
        case "M":
            return 1000;
            break;
        default:
            return -1;
    }

  
}
function GetValue(str){
    let n=str.length
    let Total=0;
    var V1,V2,i;
    for( i=0;i<n;i++){
        V1=RomanToInteger(str.charAt(i))
        if(i+1 < n){
            V2=RomanToInteger(str.charAt(i+1))
            if(V1>=V2){
                Total=Total+V1

            }
            else{
                Total=Total+(V2-V1)
                i++;

            }
        }
        else{
            Total=Total+V1;
        }


    }
    return Total

}

console.log(GetValue("MCMIV"))
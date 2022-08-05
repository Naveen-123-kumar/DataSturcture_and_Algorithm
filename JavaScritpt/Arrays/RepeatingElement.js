 function RepeatingElement(arr,n){
    let min = -1;
    let set = new Set();
    for(let i =0; i <arr.length; i++)
    {
        if (set.has(arr[i]))
            min = i;

        else 
            // console.log(arr[i])
            // break;
            set.add(arr[i]);
    }
    if (min != -1)
      console.log("The first repeating element is " +
                     arr[min]);
    else
      console.log("There are no repeating elements");
}
let arr = [ 10, 5, 3, 4, 3, 5, 6 ];
 
RepeatingElement(arr)
 
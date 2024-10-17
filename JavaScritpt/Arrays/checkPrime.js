function checkPrime(num) {
  let count = 0;
  if (num < 2) {
    return;
  } 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return 'Not prime'
      }
    }
    return 'prime'
  }


let result=checkPrime(15793)
console.log('result== ',result)
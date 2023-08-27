function sumOfDivisors(n) {
    console.log(Math.sqrt(n));
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        sum += i;
        if (i !== n / i) {
          sum += n / i;
        }
      }
    }
    return sum;
  }
  
  function checkPerfect(n) {
    const sum = sumOfDivisors(n);
    if (sum === n && n !== 1) {
      return "Perfect";
    } else if (sum > n) {
      return "Abundant";
    } else {
      return "Deficient";
    }
  }
  
  console.log(checkPerfect(6));
  console.log(checkPerfect(12));
  console.log(checkPerfect(8)); 
  
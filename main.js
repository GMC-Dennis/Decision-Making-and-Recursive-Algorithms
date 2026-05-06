function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}
// Test
console.log(isLeapYear(2026)); 
console.log(isLeapYear(1991)); 



function ticketPrice(age) {
  if (age <= 12) {
    return 10;
  } else if (age <= 17) {
    return 15;
  } else {
    return 20;
  }
}

// Test
console.log(ticketPrice(10)); 
console.log(ticketPrice(16)); 
console.log(ticketPrice(28)); 



function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test
console.log(fibonacci(5)); 
console.log(fibonacci(11)); 


function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

// Test
console.log(power(2, 5)); 
console.log(power(3, 3)); 
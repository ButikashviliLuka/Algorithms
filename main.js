// 1
function factorial(number) {
  let sum = number;
  if(number !== 0){
    for ( let i = 1; i < number; i++ ) {
      sum *= i;
    }
    console.log(sum);
  } else{
    console.log(1);
  }
}
factorial(0);

// 2
function calculateFahrenheit(celsius) {
  let calculate = (celsius * 1.8) + 32;
  console.log(calculate);
}
calculateFahrenheit(20);

function calculateCelsius(fahrenheit) {
  let calculate = (fahrenheit - 32) * 5/9;
  console.log(calculate);
}
calculateCelsius(20);

// 3
function gcd(x, y) {
  let smaller = Math.min(x, y);
  let bigger = Math.max(x, y);
  let remainder = bigger % smaller;
  if(remainder === 0) {
    return smaller;
  } else {
    return gcd(remainder, smaller);
  }
}
console.log(gcd(12, 28))

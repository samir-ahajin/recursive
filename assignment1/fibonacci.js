#!/usr/bin/env node

function fibonacci(n) {
  let counter = 0,
    counter2 = 0,
    curFib;
  arrayFib = [];
  if (n <= 0)
    return "Please enter a valid number(greater than 0, not decimals , not letters or not special characters ).";

  for (let a = 0; a <= n; a++) {
    a == 1 ? (curFib = counter + a) : (curFib = counter + counter2);
    counter = counter2;
    counter2 = curFib;
    arrayFib.push(curFib);
  }
  return arrayFib;
}

console.log(fibonacci(-2)); //returns Please enter a valid number(greater than 0, not decimals , not letters or not special characters ).

console.log(fibonacci(19)); // returns [0, 1, 1,  2, 3, 5, 8, 13]

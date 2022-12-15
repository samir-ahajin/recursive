#!/usr/bin/env node

function fibonacci(n, fibo = [0, 1]) {
  if (fibo.length == n + 1) return fibo;
  return fibonacci(n, [...fibo, fibo[fibo.length - 1] + fibo[fibo.length - 2]]);
}
console.log(fibonacci(19));

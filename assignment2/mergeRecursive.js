#!/usr/bin/env node
function mergeSort(n) {
  if (n.length < 2) {
    return n;
  } else {
    const mid = Math.floor(n.length / 2),
      left = n.slice(0, mid),
      right = n.slice(mid, n.length);

    return sort(mergeSort(left), mergeSort(right));
  }
}
function sort(left, right) {
  let merged = [];
  if (left == undefined || right == undefined) {
    left == undefined ? (merged = [right[0]]) : (merged = [left[0]]);
  } else {
    let totalCount = left.length + right.length;

    for (let a = 0; a < totalCount; a++) {
      if (left[0] > right[0]) {
        merged.push(right[0]);
        right.splice(0, 1);
        if (right.length == 0) {
          merged.push(...left);
          break;
        }
      } else {
        merged.push(left[0]);
        left.splice(0, 1);
        if (left.length == 0) {
          merged.push(...right);
          break;
        }
      }
    }
  }
  return merged;
}

console.log(mergeSort([])); //returns []
console.log(mergeSort([9, 1, 10, 2, 3, 5])); //returns [ 1, 2, 3, 4, 5, 9 ]
console.log(mergeSort([2, 3, 1])); //returns [1,2,3]

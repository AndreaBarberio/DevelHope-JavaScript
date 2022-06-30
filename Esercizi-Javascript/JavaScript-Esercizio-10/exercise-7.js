function sumUntil(maxValue) {
for (let i = 1; i <= maxValue; i++) {
  sum = i + sum;
}
return sum; 
}
let sum = 0; 
console.log(sumUntil(7));
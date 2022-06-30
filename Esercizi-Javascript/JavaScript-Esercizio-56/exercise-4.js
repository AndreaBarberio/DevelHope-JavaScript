let sum = (...num3) => num3.reduce((num1,num2) => num1 + num2, 0)
   
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// # Rest parameters and spread syntax - Exercise 4
// Come migliorare il codice affinché si eviti di specificare ad uno a uno i valori da passare alla funzione `sum`?
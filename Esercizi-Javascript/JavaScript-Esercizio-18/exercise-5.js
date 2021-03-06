function memoize(fn) {
  let cache = {};
  return (y) => {
  if(y in cache){
    
    return cache[y];
  }
   else {
     
     let result = fn(y);
     cache[y] = result; 
     return result; 
   }
}
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}



factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(1));



/*
# Closure - Exercise 5
Implementare la funzione `memoize` che, data in input la funzione per il calcolo del fattoriale, 
restituisce una closure che accetta come
argomento un numero su cui eseguire la funzione per il calcolo del fattoriale, verifica se il risultato
è già presente all'interno della variabile `cache`, 
se è presente restituisce immediatamente il risultato memorizzato precedentemente, altrimenti esegue la 
funzione passata come argomento e memorizza il risultato
all'interno della variabile `cache`, così da servire il risultato cachato precedentemente qualora venga 
richiesto il fattoriale per lo stesso numero.

Esempio:
```
factorial = memoize(factorial);
console.log(factorial(10)); // Calculating result for 3628800
console.log(factorial(6)); // Fetching from cache for 720
console.log(factorial(5)); // Fetching from cache for 120
```
*/
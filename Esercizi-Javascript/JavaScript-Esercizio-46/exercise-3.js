function isAdult({age}) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));

//Utilizzare la destrutturazione per semplificare il controllo sull'età della persona, 
//modificando il parametro della funzione.

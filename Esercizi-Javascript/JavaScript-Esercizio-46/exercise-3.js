function isAdult(x) {
  return x.age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, firstName, lastName, age} = person; 

console.log(isAdult(person));

//Utilizzare la destrutturazione per semplificare il controllo sull'età della persona, 
//modificando il parametro della funzione.

// # Async Management - Exercise 1
// Implementare la funzione `fetchPersonById`, la quale riceve in input un id e restituisce una
//  `Promise` contenente l'oggetto della persona corrispondente a quell'id.

const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

/*




*/
function fetchPersonById(id) {
  //per far si che non avvengano errori uso il ternary operator combinato al metodo find 
  return new Promise(function(resolve,reject){
    persons.find((item) => item.id === id) ? resolve(persons.find((item) => item.id === id)) : reject(new Error(`Person id: ${id} not found\n`))
  });
 }

Promise.all(console.log(fetchPersonById(2)));
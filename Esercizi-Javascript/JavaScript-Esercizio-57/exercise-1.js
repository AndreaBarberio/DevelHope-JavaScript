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
chiedendo un return di una nuova promise, che accettano due parametri: 
resolve e reject, quando è risolta e quando no



*/
function fetchPersonById(id) {
  //impostiamo una nuova promise passando come parametro il resolve
  return new Promise(resolve => {
    for (let i = 0; i < persons.length; i++) {
      if (persons.id === id) {
        return resolve(console.log(persons.length[i]));
      }
    }
  })
}

Promise.all(console.log(fetchPersonById(2)));
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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];


function fetchPersonById(personId) {
  return new Promise((resolve, reject) => {
    let person = persons.find(element => element.id === personId);
    if (person) {
      resolve(person);
    }
    else {
      reject(`Id: ${personId} doesn't exist`);
    }
  })
}
/*
fetchPersonById(100)
  .then(person => console.log(person))
  .catch(reject => console.log(reject));*/

function fetchJobById(jobId) {
  return new Promise((resolve, reject) => {
    let job = jobs.find(element => element.id === jobId);

    if (job) {
      resolve(job);
    }
    else {
      reject(`Job not found`);
    }
  })
}
/*
 fetchJobById(1)
   .then(job => console.log(job))
   .catch(error => console.log(error));
   */

Promise.all([fetchJobById(1), fetchPersonById(2)]).then(values=>console.log(values));

//promise.all prende come parametro un array di funzioni che ritornano una promise
//passando le funzioni e i valori da checkare come parametro, 
/*
# Async Management - Exercise 4
Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono restituire rispettivamente:
* La persona che ha come identificativo l'id passato come parametro
* Il tipo di lavoro che ha come identificativo l'id passato come parametro

Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato.
N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le `Promise` sono state risolte.
promise.all
*/
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };
const { id, ...info} = person //tramite riferimento all'oggetto person ho dichiarato una costante che assegna a un oggetto 
// i dati di person, con id, per poi fare riferimento a un oggetto appena dichiarato di info con le susseguenti proprietà
console.log({id,info});

/*
# Rest parameters and spread syntax - Exercise 2
Come posso migliorare la leggibilità del codice estraendo la proprietà `id` dall'oggetto `person` e
 mantenere aggregate il resto delle proprietà all'interno dell'oggetto `personInfo`?
*/

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, firstName: name, lastName: surname, age: old } = person; // sto riassegnando i nomi delle costanti 

// [name, surname, old] = [person.firstName, person.lastName, person.age]; ma avrei dovuto anche cambiare la natura della costante 
console.log(id, name, surname, old);

// La destrutturazione restituisce `undefined` per le proprietà: `name`, `surname` e `old`.
// Sai sistemare il codice affinché, pur mantenendo gli stessi nomi di proprietà per l'oggetto `person`,
//  posso eseguire una rinominazione in fase di destrutturazione? 
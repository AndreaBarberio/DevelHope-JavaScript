const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, firstName, lastName, age } = person;
//tramite la parola chiave const ho assegnato ad ogni proprietà il valore della costante, e queste li ho assegnati a person

console.log(id, firstName, lastName, age);

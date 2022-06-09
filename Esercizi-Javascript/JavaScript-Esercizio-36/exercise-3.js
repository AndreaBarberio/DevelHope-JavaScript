class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(params) {
    const pippo = new Person (params.firstName, params.lastName)
    return pippo; 
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};




const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);

// # Classes - Exercise 3
// Definire all'interno della classe `Person` 
// un metodo statico che, dato in input un object literal, istanzia un oggetto `Person`.
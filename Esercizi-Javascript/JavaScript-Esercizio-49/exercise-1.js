class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}


const developer = new Person(1, 'Mario', 'Rossi', 25);

console.log(JSON.stringify(developer))
/*
tramite il console log vado a mandare in stampa il metodo JSON.stringify, che non fa altro che rendere un oggetto 
una stringa pronta per il json 
 */

// Print developer as json object
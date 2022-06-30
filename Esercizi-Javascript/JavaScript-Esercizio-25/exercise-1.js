const person = {

  _firstName: "",
  _lastName: "",
  get firstName() {
    return this._firstName;
  },

  set xFirstName(name) {
    this._firstName = name;
  },
   get lastName() {
    return this._lastName;
  },
  set xLastName(surname) {
    this._lastName = surname;
  },

  fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const john = Object.create(person);
john.xFirstName = `John`;
john.xLastName = `Doe`;
const simon = Object.create(person);
simon.xFirstName = `Simon`;
simon.xLastName = `Collins`;

/* 
Il metodo Object.create() crea un nuovo oggetto, utilizzando un oggetto esistente come prototipo dell'oggetto creato
*/
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins

// # Object Constructor - Exercise 1
// Creare l'oggetto `person` e definire al suo interno i metodi getters / setters per le proprietà: `firstName` e `lastName`.
// Definire all'interno dell'oggetto anche il metodo `fullName()` che si occupa di concatenare e restituire il nome e
// il cognome della persona. Infine, costruire due oggetti: `john` e `simon`, assegnare ad entrambi il valore di
// `firstName` e `lastName` e stampare in console il nome completo
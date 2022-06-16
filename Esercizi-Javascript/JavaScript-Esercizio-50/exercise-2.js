class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  static fromJson(x){ // per implementare il metodo fromJson ho utilizzato un metodo statico in quanto non mi trovo nella 
    //classe stessa e non in un istanza
   return JSON.parse(x);
 }
  toJson() {
    return JSON.stringify(this);
  }
 
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

// Implementare il metodo `fromJson` che accetta un json e istanzia un oggetto di tipo `Person`
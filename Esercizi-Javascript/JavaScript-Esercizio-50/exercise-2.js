class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    //rendo stringa la classe con le prop
    return JSON.stringify(this);
     
  }
// istanzio un nuovo oggetto person con le stesse proprietà di person dopo aver parsato l'oggetto 
  static fromJson(jsonObject){
    const {id, firstName, lastName, age} = JSON.parse(jsonObject);
    return new Person(id, firstName, lastName, age);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
// Implementare il metodo `fromJson` che accetta un json e istanzia un oggetto di tipo `Person`
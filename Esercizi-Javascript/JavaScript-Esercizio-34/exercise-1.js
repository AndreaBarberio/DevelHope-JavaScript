// Class definition
class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName; 
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(`${developer.firstName} ${developer.lastName}`);


// # Classes - Exercise 1
// Definire la classe `Person` che accetta due parametri nel costruttore `firstName` e `lastName`
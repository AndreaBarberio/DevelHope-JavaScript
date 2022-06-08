const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = 'simon';

// firstName = 'simon'
// perche se utilizzo un assegnazione tramite = sto creando un riferimento all'oggetto, ossia 
// non è un secondo oggetto, ma un riferimento al primo, quindi come dare un secondo nome per chiamare la stessa cosa 
// Modifica la proprietà "firstName" di person2 in "Simon" 

console.log(person1);
console.log(person2);


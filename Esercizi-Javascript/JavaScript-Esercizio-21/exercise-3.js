const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
let person2 = Object.assign({}, person1); 
let formatoJson = JSON.stringify(person1);// ho usato JSON.stringify per avere un formato JSON dell'oggetto
person2 = JSON.parse(formatoJson);// il formato json quindi posso riconvertirlo

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2); 
 
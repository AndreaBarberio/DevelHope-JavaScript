let key = []; 
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};
const keys = getKeys(person);
function getKeys(obj) {

  // return Object.keys(person);
  // avrei potuto usare questa forma ma utilizzo un ciclo per implementare la funzione come da task
for (let k in person) key.push(` ${k}`);

}
console.log(`keys:${key}`);


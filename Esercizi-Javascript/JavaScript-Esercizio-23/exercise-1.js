const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
 const n = Object.keys(person);
for (let i = 0; i < n.length; i++) {
  console.log(`${Object.keys(person)[i]}: ${Object.values(person)[i]}`);
}

/* 
# Object Methods - Exercise 1
Utilizzando l'oggetto `person` stampare in console i suoi valori nel seguente modo utilizzando il metodo `Object.keys`:

```
firstName: Mario
lastName: Rossi
age: 25
```
*/
// Print values of person using Object.keys
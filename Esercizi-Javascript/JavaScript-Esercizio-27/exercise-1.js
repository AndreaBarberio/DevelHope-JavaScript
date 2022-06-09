const person = {
  firstName: 'John',
  lastName: 'Doe'
};


// # Optional Chaining - Exercise 1
// In questo esempio si sta cercando di eseguire il console.log
//  di due proprietà non presenti 
// all'interno dell'oggetto `person`,
//  come posso sistemare il codice d'esempio così da non ricevere un errore in console?

// ho modificato il log servendomi del optional chaining, per 
// semplificare l'accesso ai valori di oggetti connessi, perchè è possibile che un riferimento o una funzione
// possa essere undefined (o null), quindi per non mandare in console un errore,
// è sufficiente "difendersi" dalle sezioni di dati che non siano ancora state inserite servendosi del optional chaining  

console.log(person.address?.city); // Argh! Cannot read property 'city' of undefined
console.log(person.fullName?.()); // Argh! Cannot read property 'fullName()' of undefined
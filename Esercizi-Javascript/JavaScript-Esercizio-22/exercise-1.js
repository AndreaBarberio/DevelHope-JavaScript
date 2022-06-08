const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',
  fullName: () => {
    // let nomeCompleto = `${person.firstName} ${person.lastName}`
    return `${person.firstName} ${person.lastName}`;

    // return nomeCompleto; ho commentato l'utilizzo con la dichiarazione di una variabile per mostrare che potrei utilizzare anche questa modalità
  },
  info: () => {
    return `${person.fullName()}, ${person.age} - ${person.job}`; // utilizzando il template literals posso fare riferimento, con dot notation per richiamare il codice della funzione 
  },
};

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer

// # Object References - Exercise 1
// Creare all'interno dell'oggetto `person` i metodi:
// `fullName()` e `info()`, i quali utilizzano le proprietà dell'oggetto per stampare
// rispettivamente il nome completo e le informazioni anagrafiche comprensive di posizione lavorativa

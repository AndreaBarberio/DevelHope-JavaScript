const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// Modifica la linea sottostante affinché venga creata e assegnata a person2 
// una copia esatta di person1, permettendo così di modificare il "firstName" di person2,
// senza che venga modificato anche il valore "firstName" di person1
const person2 = Object.assign({}, person1);//ho creato un riferimento all' oggetto(person1) 

// nel caso precedente il nome veniva modificato in quanto ciò che stavamo eseguendo era una copia diretta,
// di conseguenza riassegnando i valori, lo stavamo facendo anche con il padre massimo,
// invece necessitiamo di un riferimento, possibile da creare attraverso il metodo object.assign() e le prime graffe 
// a cui assegnare il riferimento ai valori di person 1, ponendo tale riferimento dopo la virgola
person2.firstName = 'Simon';

console.log(person1);
console.log(person2);
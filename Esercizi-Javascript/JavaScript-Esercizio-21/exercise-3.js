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



//JSON.stringify è un metodo che serve a convertire un oggetto o un valore JavaScript in una stringa JSON.
/*La sintassi di questo metodo è la seguente:
JSON.stringify(valore[,replacer[,space]]);

Dove valore rappresenta l’oggetto da convertire in stringa, mentre replacer è un parametro opzionale che rappresenta
 una funzione oppure un array che consente di modificare le proprietà dell’oggetto da convertire.
Infine space è utilizzato per inserire ad esempio uno spazio bianco nella stringa JSON e dunque rendere 
l’output più leggibile. */

let person2 = Object.assign({}, person1); 
let formatoJson = JSON.stringify(person1);// ho usato JSON.stringify per avere un formato JSON dell'oggetto
person2 = JSON.parse(formatoJson);// il formato json quindi posso riconvertirlo

console.log(person2.address);
person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

// console.log(person1);
// console.log(person2); 
 
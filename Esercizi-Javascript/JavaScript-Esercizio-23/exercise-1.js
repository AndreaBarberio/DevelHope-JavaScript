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
Object.keys, values, entries
Dati in analisi semplici oggetti, sono disponibili i seguenti metodi:

-Object.keys(obj) – ritorna un array di chiavi. Il metodo Object.keys() restituisce 
una matrice di proprietà enumerabili di un determinato oggetto,
 ripetuti nello stesso ordine di un ciclo normale.


-Object.values(obj) – ritorna un array di valori. Il metodo Object.values() restituisce una matrice di valori di proprietà
 enumerabili propri di un determinato oggetto, nello stesso ordine di quello fornito da un ciclo for...in. 
 (L'unica differenza è che un ciclo for...in enumera anche le proprietà nella catena di prototipi.)


Object.entries(obj) – ritorna un array di coppie [key, value].

Il metodo Object.entries() restituisce una matrice di coppie di proprietà con chiave stringa enumerabili di un determinato
 oggetto. [key, value]È lo stesso dell'iterazione con un ciclo for...in, tranne per il fatto che un ciclo for...in enumera
  anche le proprietà nella catena di prototipi.

L'ordine dell'array restituito da Object.entries()è lo stesso di quello fornito da un ciclo for...in. Se è necessario un 
ordinamento diverso, l'array deve essere prima ordinato, come Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.


*/
// Print values of person using Object.keys
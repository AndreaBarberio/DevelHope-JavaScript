function sum(...x) {
return x.reduce((a,b) => a + b)
}
console.log(sum(1,2,3,4,5,6));



// La funzione `sum` presenta un elevato numero di parametri in ingresso, come possiamo migliorare il codice 
// affinché accetti un numero indefinito di valori da sommare?

// tramite rest parameters, che butta i parametri nell'array x, uso reduce che cicla in modo 
// da non ripetersi nelle somme dei risultati ottenuti(non fa un fattoriale), che andrà a ridurmi, nella arrow function 
// i parametri che verranno passati, in una somma come descritto nell'esecuzione dell'arrow
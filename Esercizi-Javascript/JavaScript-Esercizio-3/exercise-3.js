const students = ['Paul', 'George', 'Lucas'];
let student = ['Marco', 'Giovanni', 'Francesco'];
function addStudent() {
    
    students.push(student[0]);
    
    // students.push("Giovanni", oppure student[1]);
    // students.push("Francesco");

    /* il motivo per cui abbiamo la possibilità di 
     aggiungere un elemento all'array nonostante 
     abbiamo dichiarato la variabile come `readonly`, quindi 
     tale variabile è una costante, 
     è che un singolo elemento di un array è una variabile,
     quindi anche se dichiarato con const,
     JavaScript vede quello che aggiungo con push() possibile, in quanto non guarda
     più l'array come costante, penso D:

     non ho trovato negli argomenti di studio un risposta precisa a questa domanda 

     "ok il codice. Il motivo per cui ti è possibile aggiungere un elemento all'array, anche se questo è stato
      definito come const, è il fatto che una variabile readonly in javascript non può variare il suo contenuto
       attraverso una riassegnazione o ridichiarazione. Nel caso di array o oggetti ti sarà comunque possibile
        aggiungere/rimuovere/modificare elementi/proprietà senza riassegnare o ridichiarare. documentazione ufficiale 
        (primo paragrafo): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const "
     */
}

addStudent();

console.log(students);
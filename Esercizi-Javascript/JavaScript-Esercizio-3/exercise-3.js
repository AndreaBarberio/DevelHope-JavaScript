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

     */
}

addStudent();

console.log(students);
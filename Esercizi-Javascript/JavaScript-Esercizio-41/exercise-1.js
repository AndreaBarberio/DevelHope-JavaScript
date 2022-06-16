class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
   if (amount < 0){
     throw Error(`The amount provided cannot be negative`)
   }
    this.#amount += amount;
  }

  withdraw(amount) {

    if (amount > this.#amount){
      throw Error(`The amount cannot be negative`)
    }
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}
const bankAccount = new BankAccount(1000);
try{
  
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  
}catch (error){
  console.log(error.message); //con error message manda a schermo il messaggio d'errore impostato
  // solo con error mostra tutti gli errori
}
finally {
  bankAccount.view();
}


 // This operation should not be possible, because you cannot withdraw more than the account balance

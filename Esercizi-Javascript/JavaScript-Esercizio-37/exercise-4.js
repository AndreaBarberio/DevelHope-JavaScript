class BankAccount {
  constructor(initialAmount) {
    this.value = initialAmount;
  }
  deposit(amount) {
    this.value += amount;
  }
  withdraw(amount) {
    this.value -= amount;
  }
  view() {
    console.log(this.value);
  }
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();


// # Classes - Exercise 4
// Definire la classe `BankAccount` che, dato in input un importo iniziale,
// consente di eseguire operazioni di deposito, ritiro e visualizzazione sul proprio conto corrente. 
// La classe in questione dovrà implementare i seguenti metodi:

// * `deposit`: un metodo pubblico che consente di aggiungere fondi al proprio conto corrente
// * `withdraw`: un metodo pubblico che consente di ritirare fondi dal proprio conto corrente
// * `view`: un metodo pubblico che consente di visualizzare in console il saldo finale del conto corrente
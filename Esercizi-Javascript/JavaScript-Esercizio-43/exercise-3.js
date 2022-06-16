class NegativeAmountError {
constructor(error){
  this.errorName = `amount is negative`;
  this.errorMessage = `This error has been executed because the ${this.errorName}`
}

}
class WithdrawNotPermittedError {
  constructor(error){
    this.errorName = `Withdraw is not allowed`;
    this.errorMessage = `This error has been executed because the ${this.errorName}`
  }
}


class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError(`error`);
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError(`error`);
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError(`error`);
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
  console.log(e);
}
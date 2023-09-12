function BankAccount(name, accountNumber, type, balance = 0) {
  this.name = name;
  this.accountNumber = accountNumber;
  this.type = type;
  this.balance = balance;

  this.deposit = (ammount) => {
    this.balance += ammount;
  };

  this.withdraw = (ammount) => {
    this.balance -= ammount;
  };
  this.checkBalance = () => {
    console.log(this.balance);
  };
  this.isActive = () => {
    if (this.balance > 0) {
      return true;
    } else {
      return false;
    }
  };
}

let mukeshAccount = new BankAccount("Mukesh", 132435657687, "Saving", 1000);
let MaheshAccount = new BankAccount("Mahesh", 132435657688, "Current", 5500);
let DhaneshAccount = new BankAccount("Dhanesh", 132435657689, "saving", 10100);
let RupeshAccount = new BankAccount("Rupesh", 132435657690, "Current", 8000);

mukeshAccount.deposit(5000);
mukeshAccount.withdraw(500);
mukeshAccount.checkBalance();
console.log(mukeshAccount.isActive());

console.log(mukeshAccount);

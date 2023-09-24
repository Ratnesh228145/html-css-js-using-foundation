
// Define a constructor function for creating customer account objects
function CustomerAccount(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  
  // Method to deposit money into the account
  CustomerAccount.prototype.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited ${amount}. New balance: ${this.balance}`;
    } else {
      return "Invalid deposit amount. Please enter a positive value.";
    }
  };
  
  // Method to withdraw money from the account
  CustomerAccount.prototype.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Withdrawn ${amount}. New balance: ${this.balance}`;
    } else if (amount <= 0) {
      return "Invalid withdrawal amount. Please enter a positive value.";
    } else {
      return "Insufficient funds for withdrawal.";
    }
  };
  
  // Create a customer account
  const customer1 = new CustomerAccount("John Doe", 1000);
  
  // Deposit and withdraw from the account
  console.log(customer1.deposit(500)); 
  console.log(customer1.withdraw(200)); 
  console.log(customer1.withdraw(-100)); 
  console.log(customer1.withdraw(1500)); 
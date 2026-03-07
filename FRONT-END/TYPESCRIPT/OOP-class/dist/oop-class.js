"use strict";
class Account {
    // constructor(id: number, owner: string, balance: number) {
    //   this.id = id;
    //   this.owner = owner;
    //   this._balance = balance;
    // }
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("ivalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "gfdsj", 2748);
console.log(account.balance);
//# sourceMappingURL=oop-class.js.map